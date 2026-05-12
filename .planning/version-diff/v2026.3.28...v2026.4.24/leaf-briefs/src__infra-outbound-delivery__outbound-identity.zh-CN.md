# src/infra-outbound-delivery/outbound-identity

## 一句话结论

outbound identity 所属的 Outbound delivery, routing, formatting, identity and network infrastructure 有 9 个路径变化（新增 1、修改 8），兼容性判断为行为变化。

## Canonical facts

- Feature group: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-identity`
- Changed path count: `9`
- Status counts: `新增 1、修改 8`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `9` files, `+766` / `-138`

## 功能变化摘要

这个 leaf 属于 `Outbound delivery, routing, formatting, identity and network infrastructure`。本次版本差异显示它的主要变化是：新增 1、修改 8。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/infra/outbound/outbound-session.test-helpers.ts`

### 修改

- `src/infra/outbound/base-session-key.ts`
- `src/infra/outbound/conversation-id.ts`
- `src/infra/outbound/directory-cache.test.ts`
- `src/infra/outbound/directory-cache.ts`
- `src/infra/outbound/identity.test.ts`
- `src/infra/outbound/identity.ts`
- `src/infra/outbound/outbound-session.test.ts`
- `src/infra/outbound/outbound-session.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：`outbound-identity/` | pnpm test -- src/infra/outbound/identity.test.ts src/infra/outbound/conversation-id.test.ts src/infra/outbound/outbound-session.test.ts src/infra/outbound/directory-cache.test.ts | Escalate to routing or channel send tests when identity mapping broadens across sessions/accounts. | Residual Wave 1R unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/infra-outbound-delivery/outbound-identity` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/infra-outbound-delivery/outbound-identity/change-to-test.md` 的验证建议。
