# extensions/channel-plugins/twitch

## 一句话结论

twitch 所属的 Bundled messaging channel plugins 有 36 个路径变化（新增 6、修改 28、删除 2），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/twitch`
- Changed path count: `36`
- Status counts: `新增 6、修改 28、删除 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `36` files, `+1056` / `-416`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 6、修改 28、删除 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/twitch/channel-plugin-api.ts`
- `extensions/twitch/index.test.ts`
- `extensions/twitch/setup-entry.ts`
- `extensions/twitch/setup-plugin-api.ts`
- `extensions/twitch/src/actions.test.ts`
- `extensions/twitch/tsconfig.json`

### 修改

- `extensions/twitch/README.md`
- `extensions/twitch/api.ts`
- `extensions/twitch/index.ts`
- `extensions/twitch/openclaw.plugin.json`
- `extensions/twitch/package.json`
- `extensions/twitch/src/access-control.ts`
- `extensions/twitch/src/actions.ts`
- `extensions/twitch/src/config.test.ts`
- `extensions/twitch/src/config.ts`
- `extensions/twitch/src/monitor.ts`
- `extensions/twitch/src/outbound.test.ts`
- `extensions/twitch/src/outbound.ts`
- `extensions/twitch/src/plugin.test.ts`
- `extensions/twitch/src/plugin.ts`
- `extensions/twitch/src/probe.test.ts`
- `extensions/twitch/src/probe.ts`
- `extensions/twitch/src/resolver.ts`
- `extensions/twitch/src/runtime.ts`
- `extensions/twitch/src/send.test.ts`
- `extensions/twitch/src/send.ts`
- `extensions/twitch/src/setup-surface.test.ts`
- `extensions/twitch/src/setup-surface.ts`
- `extensions/twitch/src/status.ts`
- `extensions/twitch/src/token.test.ts`
- `extensions/twitch/src/token.ts`
- `extensions/twitch/src/twitch-client.test.ts`
- `extensions/twitch/src/twitch-client.ts`
- `extensions/twitch/src/utils/twitch.ts`

### 删除

- `extensions/twitch/CHANGELOG.md`
- `extensions/twitch/package-manifest.contract.test.ts`

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

- 首选验证：Manifest/package/entry changed | `pnpm test:contracts:channels` plus `pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts` | `pnpm build` is required if package metadata, runtime deps, or plugin exports change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/twitch` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/twitch/change-to-test.md` 的验证建议。
