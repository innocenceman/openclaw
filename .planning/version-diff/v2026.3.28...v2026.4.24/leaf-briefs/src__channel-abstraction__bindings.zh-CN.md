# src/channel-abstraction/bindings

## 一句话结论

bindings 所属的 Bundled messaging channel plugins 有 9 个路径变化（新增 1、修改 8），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/bindings`
- Changed path count: `9`
- Status counts: `新增 1、修改 8`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `9` files, `+240` / `-26`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 1、修改 8。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/channels/plugins/binding-routing.test.ts`

### 修改

- `src/channels/plugins/binding-routing.ts`
- `src/channels/plugins/binding-targets.test.ts`
- `src/channels/plugins/binding-targets.ts`
- `src/channels/plugins/binding-types.ts`
- `src/channels/plugins/configured-binding-compiler.ts`
- `src/channels/plugins/configured-binding-consumers.ts`
- `src/channels/plugins/configured-binding-match.ts`
- `src/channels/plugins/configured-binding-registry.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者
- 消息渠道使用者
- 渠道插件维护者

## 建议验证

- 首选验证：`bindings/` | pnpm test -- src/channels/plugins/acp-bindings.test.ts src/channels/plugins/binding-targets.test.ts src/channels/plugins/target-resolvers.test.ts src/channels/plugins/pairing-adapters.test.ts | Escalate to routing and channel suites when binding resolution changes target/account/session semantics. | Priority completion unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/channel-abstraction/bindings` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/channel-abstraction/bindings/change-to-test.md` 的验证建议。
