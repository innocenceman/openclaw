# src/infra-outbound-delivery/tls

## 一句话结论

tls 所属的 Outbound delivery, routing, formatting, identity and network infrastructure 有 1 个路径变化（修改 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/tls`
- Changed path count: `1`
- Status counts: `修改 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `1` files, `+3` / `-1`

## 功能变化摘要

这个 leaf 属于 `Outbound delivery, routing, formatting, identity and network infrastructure`。本次版本差异显示它的主要变化是：修改 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 修改

- `src/infra/tls/fingerprint.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 可能受影响的人或模块

- Gateway 使用者
- 配置/安全相关调用方

## 建议验证

- 首选验证：`tls/` | pnpm test -- src/infra/tls/fingerprint.test.ts src/infra/tls/gateway.test.ts | Escalate to gateway/auth tests when TLS surface changes affect connectivity or trust decisions. | Residual Wave 1R unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/infra-outbound-delivery/tls` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/infra-outbound-delivery/tls/change-to-test.md` 的验证建议。
