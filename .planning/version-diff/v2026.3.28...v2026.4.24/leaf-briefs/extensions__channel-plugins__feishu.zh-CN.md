# extensions/channel-plugins/feishu

## 一句话结论

feishu 所属的 Bundled messaging channel plugins 有 82 个路径变化（新增 17、修改 52、删除 1、重命名 12），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/feishu`
- Changed path count: `82`
- Status counts: `新增 17、修改 52、删除 1、重命名 12`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `76` files, `+5587` / `-1479`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 17、修改 52、删除 1、重命名 12。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/feishu/channel-entry.ts`
- `extensions/feishu/channel-plugin-api.ts`
- `extensions/feishu/contract-api.ts`
- `extensions/feishu/secret-contract-api.ts`
- `extensions/feishu/security-contract-api.ts`
- `extensions/feishu/session-key-api.ts`
- `extensions/feishu/setup-entry.test.ts`
- `extensions/feishu/src/card-test-helpers.ts`
- `extensions/feishu/src/monitor.bot-menu-handler.ts`
- `extensions/feishu/src/monitor.comment-notice-handler.ts`
- `extensions/feishu/src/monitor.comment.test.ts`
- `extensions/feishu/src/monitor.comment.ts`
- `extensions/feishu/src/monitor.lifecycle.test.ts`
- `extensions/feishu/src/monitor.message-handler.ts`
- `extensions/feishu/src/monitor.synthetic-error.ts`
- `extensions/feishu/subagent-hooks-api.ts`
- `extensions/feishu/tsconfig.json`

### 修改

- `extensions/feishu/api.ts`
- `extensions/feishu/index.ts`
- `extensions/feishu/openclaw.plugin.json`
- `extensions/feishu/package.json`
- `extensions/feishu/runtime-api.ts`
- `extensions/feishu/setup-api.ts`
- `extensions/feishu/setup-entry.ts`
- `extensions/feishu/src/accounts.test.ts`
- `extensions/feishu/src/accounts.ts`
- `extensions/feishu/src/bot.broadcast.test.ts`
- `extensions/feishu/src/bot.card-action.test.ts`
- `extensions/feishu/src/bot.test.ts`
- `extensions/feishu/src/bot.ts`
- `extensions/feishu/src/card-action.ts`
- `extensions/feishu/src/card-interaction.ts`
- `extensions/feishu/src/card-ux-approval.ts`
- `extensions/feishu/src/card-ux-launcher.test.ts`
- `extensions/feishu/src/card-ux-launcher.ts`
- `extensions/feishu/src/channel.test.ts`
- `extensions/feishu/src/channel.ts`
- `extensions/feishu/src/chat-schema.ts`
- `extensions/feishu/src/client.test.ts`
- `extensions/feishu/src/client.ts`
- `extensions/feishu/src/config-schema.ts`
- `extensions/feishu/src/doc-schema.ts`
- `extensions/feishu/src/docx-batch-insert.test.ts`
- `extensions/feishu/src/docx-batch-insert.ts`
- `extensions/feishu/src/docx-color-text.ts`
- `extensions/feishu/src/docx-table-ops.ts`
- `extensions/feishu/src/docx.account-selection.test.ts`
- … 另有 22 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/feishu/package-manifest.contract.test.ts`

### 重命名

- `extensions/feishu/src/monitor.acp-init-failure.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.acp-init-failure.lifecycle.test.ts`
- `extensions/feishu/src/monitor.bot-menu.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.bot-menu.lifecycle.test.ts`
- `extensions/feishu/src/monitor.broadcast.reply-once.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.broadcast.reply-once.lifecycle.test.ts`
- `extensions/feishu/src/monitor.card-action.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.card-action.lifecycle.test.ts`
- `extensions/feishu/src/monitor.reaction.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.reaction.lifecycle.test.ts`
- `extensions/feishu/src/monitor.reply-once.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.reply-once.lifecycle.test.ts`

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

- 首选验证：Manifest/package/entry/tools | `pnpm test:contracts:channels` plus `pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts` | Runtime dependency staging/build when deps or exports change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/feishu` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/feishu/change-to-test.md` 的验证建议。
