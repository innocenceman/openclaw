# src/infra-outbound-delivery/outbound-routing

## 一句话结论

outbound routing 所属的 Outbound delivery, routing, formatting, identity and network infrastructure 有 18 个路径变化（新增 3、修改 13、删除 2），兼容性判断为行为变化。

## Canonical facts

- Feature group: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-routing`
- Changed path count: `18`
- Status counts: `新增 3、修改 13、删除 2`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `18` files, `+750` / `-602`

## 功能变化摘要

这个 leaf 属于 `Outbound delivery, routing, formatting, identity and network infrastructure`。本次版本差异显示它的主要变化是：新增 3、修改 13、删除 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/infra/outbound/channel-bootstrap.runtime.ts`
- `src/infra/outbound/channel-selection.runtime.ts`
- `src/infra/outbound/target-id-resolution.ts`

### 修改

- `src/infra/outbound/channel-resolution.test.ts`
- `src/infra/outbound/channel-resolution.ts`
- `src/infra/outbound/channel-selection.test.ts`
- `src/infra/outbound/channel-selection.ts`
- `src/infra/outbound/channel-target.ts`
- `src/infra/outbound/outbound-policy.test.ts`
- `src/infra/outbound/outbound-policy.ts`
- `src/infra/outbound/session-binding-service.test.ts`
- `src/infra/outbound/session-binding-service.ts`
- `src/infra/outbound/target-normalization.test.ts`
- `src/infra/outbound/target-normalization.ts`
- `src/infra/outbound/target-resolver.test.ts`
- `src/infra/outbound/target-resolver.ts`

### 删除

- `src/infra/outbound/channel-adapters.test.ts`
- `src/infra/outbound/channel-adapters.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：`outbound-routing/` | pnpm test -- src/infra/outbound/channel-resolution.test.ts src/infra/outbound/channel-selection.test.ts src/infra/outbound/target-resolver.test.ts src/infra/outbound/session-binding-service.test.ts | Escalate to routing/channel tests when recipient/account/session selection semantics broaden. | Priority completion unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/infra-outbound-delivery/outbound-routing` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/infra-outbound-delivery/outbound-routing/change-to-test.md` 的验证建议。
