# extensions/channel-plugins/line

## 一句话结论

line 所属的 Bundled messaging channel plugins 有 69 个路径变化（新增 15、修改 50、删除 3、重命名 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/line`
- Changed path count: `69`
- Status counts: `新增 15、修改 50、删除 3、重命名 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `69` files, `+2980` / `-631`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 15、修改 50、删除 3、重命名 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/line/channel-plugin-api.ts`
- `extensions/line/contract-api.ts`
- `extensions/line/secret-contract-api.ts`
- `extensions/line/src/bindings.ts`
- `extensions/line/src/channel-api.ts`
- `extensions/line/src/channel-setup-status.contract.test.ts`
- `extensions/line/src/channel.runtime.ts`
- `extensions/line/src/monitor.runtime.ts`
- `extensions/line/src/outbound-media.test.ts`
- `extensions/line/src/outbound-media.ts`
- `extensions/line/src/outbound.runtime.ts`
- `extensions/line/src/probe.contract.test.ts`
- `extensions/line/src/probe.runtime.ts`
- `extensions/line/src/reply-payload-transform.test.ts`
- `extensions/line/tsconfig.json`

### 修改

- `extensions/line/api.ts`
- `extensions/line/index.ts`
- `extensions/line/openclaw.plugin.json`
- `extensions/line/package.json`
- `extensions/line/runtime-api.ts`
- `extensions/line/setup-entry.ts`
- `extensions/line/src/accounts.test.ts`
- `extensions/line/src/accounts.ts`
- `extensions/line/src/auto-reply-delivery.test.ts`
- `extensions/line/src/auto-reply-delivery.ts`
- `extensions/line/src/bot-handlers.test.ts`
- `extensions/line/src/bot-handlers.ts`
- `extensions/line/src/bot-message-context.test.ts`
- `extensions/line/src/bot-message-context.ts`
- `extensions/line/src/bot.ts`
- `extensions/line/src/card-command.ts`
- `extensions/line/src/channel-shared.ts`
- `extensions/line/src/channel.logout.test.ts`
- `extensions/line/src/channel.sendPayload.test.ts`
- `extensions/line/src/channel.setup.ts`
- `extensions/line/src/channel.status.test.ts`
- `extensions/line/src/channel.ts`
- `extensions/line/src/config-adapter.ts`
- `extensions/line/src/config-schema.ts`
- `extensions/line/src/download.test.ts`
- `extensions/line/src/download.ts`
- `extensions/line/src/gateway.ts`
- `extensions/line/src/group-keys.test.ts`
- `extensions/line/src/group-keys.ts`
- `extensions/line/src/group-policy.ts`
- … 另有 20 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/line/package-manifest.contract.test.ts`
- `extensions/line/src/plugins-core.contract.test.ts`
- `extensions/line/src/registry-backed.contract.test.ts`

### 重命名

- `extensions/line/src/reply-payload-transform.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者
- 消息渠道使用者
- 渠道插件维护者

## 建议验证

- 首选验证：Manifest/package/entry/channel/setup | `pnpm test:contracts:channels` plus `pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts` and targeted source inspection of `extensions/line/src/channel.setup.ts` | Build if exports/runtime change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/line` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/line/change-to-test.md` 的验证建议。
