# extensions/channel-plugins/irc

## 一句话结论

irc 所属的 Bundled messaging channel plugins 有 41 个路径变化（新增 14、修改 25、删除 2），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/irc`
- Changed path count: `41`
- Status counts: `新增 14、修改 25、删除 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `41` files, `+789` / `-265`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 14、修改 25、删除 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/irc/channel-plugin-api.ts`
- `extensions/irc/configured-state.ts`
- `extensions/irc/contract-api.ts`
- `extensions/irc/index.test.ts`
- `extensions/irc/runtime-api.test.ts`
- `extensions/irc/runtime-api.ts`
- `extensions/irc/secret-contract-api.ts`
- `extensions/irc/src/channel-api.ts`
- `extensions/irc/src/channel-runtime.ts`
- `extensions/irc/src/doctor.ts`
- `extensions/irc/src/gateway.ts`
- `extensions/irc/src/outbound-base.ts`
- `extensions/irc/src/secret-contract.ts`
- `extensions/irc/tsconfig.json`

### 修改

- `extensions/irc/api.ts`
- `extensions/irc/index.ts`
- `extensions/irc/openclaw.plugin.json`
- `extensions/irc/package.json`
- `extensions/irc/setup-entry.ts`
- `extensions/irc/src/accounts.ts`
- `extensions/irc/src/channel.test.ts`
- `extensions/irc/src/channel.ts`
- `extensions/irc/src/client.ts`
- `extensions/irc/src/config-schema.test.ts`
- `extensions/irc/src/config-schema.ts`
- `extensions/irc/src/inbound.ts`
- `extensions/irc/src/monitor.ts`
- `extensions/irc/src/normalize.ts`
- `extensions/irc/src/policy.test.ts`
- `extensions/irc/src/policy.ts`
- `extensions/irc/src/probe.test.ts`
- `extensions/irc/src/runtime-api.ts`
- `extensions/irc/src/runtime.ts`
- `extensions/irc/src/send.test.ts`
- `extensions/irc/src/send.ts`
- `extensions/irc/src/setup-core.ts`
- `extensions/irc/src/setup-surface.ts`
- `extensions/irc/src/setup.test.ts`
- `src/runtime.ts`

### 删除

- `extensions/irc/package-manifest.contract.test.ts`
- `extensions/irc/src/registry-backed.contract.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者
- 消息渠道使用者
- 渠道插件维护者

## 建议验证

- 首选验证：Manifest/package/entry/channel | `pnpm test:contracts:channels` plus `pnpm test -- extensions/irc/src/config-schema.test.ts` | Build if export/runtime boundary changes.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/irc` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/irc/change-to-test.md` 的验证建议。
