# extensions/channel-plugins/tlon

## 一句话结论

tlon 所属的 Bundled messaging channel plugins 有 28 个路径变化（新增 3、修改 24、删除 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/tlon`
- Changed path count: `28`
- Status counts: `新增 3、修改 24、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `28` files, `+1499` / `-535`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 3、修改 24、删除 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/tlon/channel-plugin-api.ts`
- `extensions/tlon/src/tlon-api.test.ts`
- `extensions/tlon/tsconfig.json`

### 修改

- `extensions/tlon/api.ts`
- `extensions/tlon/index.ts`
- `extensions/tlon/package.json`
- `extensions/tlon/runtime-api.ts`
- `extensions/tlon/setup-entry.ts`
- `extensions/tlon/src/channel.runtime.ts`
- `extensions/tlon/src/channel.ts`
- `extensions/tlon/src/config-schema.ts`
- `extensions/tlon/src/monitor/authorization.ts`
- `extensions/tlon/src/monitor/cites.ts`
- `extensions/tlon/src/monitor/index.ts`
- `extensions/tlon/src/monitor/processed-messages.test.ts`
- `extensions/tlon/src/monitor/processed-messages.ts`
- `extensions/tlon/src/monitor/utils.ts`
- `extensions/tlon/src/settings.ts`
- `extensions/tlon/src/setup-core.ts`
- `extensions/tlon/src/targets.ts`
- `extensions/tlon/src/tlon-api.ts`
- `extensions/tlon/src/urbit/auth.ssrf.test.ts`
- `extensions/tlon/src/urbit/auth.ts`
- `extensions/tlon/src/urbit/base-url.test.ts`
- `extensions/tlon/src/urbit/base-url.ts`
- `extensions/tlon/src/urbit/sse-client.test.ts`
- `extensions/tlon/src/urbit/sse-client.ts`

### 删除

- `extensions/tlon/package-manifest.contract.test.ts`

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

- 首选验证：Manifest/package/tool entry changed | `pnpm test:contracts:channels` plus `pnpm test -- extensions/tlon/src/core.test.ts` | `pnpm build` is required if package exports, bundled skill/runtime deps, CLI tool registration, or lazy runtime boundaries change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/tlon` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/tlon/change-to-test.md` 的验证建议。
