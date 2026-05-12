# extensions/channel-plugins/telegram

## 一句话结论

telegram 所属的 Bundled messaging channel plugins 有 458 个路径变化（新增 204、修改 205、删除 30、重命名 19），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/telegram`
- Changed path count: `458`
- Status counts: `新增 204、修改 205、删除 30、重命名 19`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `454` files, `+33657` / `-13457`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 204、修改 205、删除 30、重命名 19。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/telegram/account-inspect-api.ts`
- `extensions/telegram/channel-config-api.test.ts`
- `extensions/telegram/channel-plugin-api.ts`
- `extensions/telegram/config-api.ts`
- `extensions/telegram/configured-state.ts`
- `extensions/telegram/contract-api.ts`
- `extensions/telegram/directory-contract-api.ts`
- `extensions/telegram/index.test.ts`
- `extensions/telegram/legacy-state-migrations-api.ts`
- `extensions/telegram/runtime-setter-api.ts`
- `extensions/telegram/secret-contract-api.ts`
- `extensions/telegram/security-audit-contract-api.ts`
- `extensions/telegram/session-key-api.ts`
- `extensions/telegram/setup-plugin-api.ts`
- `extensions/telegram/src/account-config.ts`
- `extensions/telegram/src/account-selection.ts`
- `extensions/telegram/src/action-threading.test.ts`
- `extensions/telegram/src/approval-callback-data.test.ts`
- `extensions/telegram/src/approval-callback-data.ts`
- `extensions/telegram/src/approval-handler.runtime.test.ts`
- `extensions/telegram/src/approval-handler.runtime.ts`
- `extensions/telegram/src/approval-native.test.ts`
- `extensions/telegram/src/approval-native.ts`
- `extensions/telegram/src/audit.types.ts`
- `extensions/telegram/src/auto-topic-label.test.ts`
- `extensions/telegram/src/auto-topic-label.ts`
- `extensions/telegram/src/bot-core.ts`
- `extensions/telegram/src/bot-handlers.agent.runtime.ts`
- `extensions/telegram/src/bot-handlers.debounce-key.ts`
- `extensions/telegram/src/bot-handlers.runtime.test.ts`
- … 另有 174 个路径，详见 `leaf-impact.json`。

### 修改

- `extensions/telegram/api.ts`
- `extensions/telegram/channel-config-api.ts`
- `extensions/telegram/index.ts`
- `extensions/telegram/openclaw.plugin.json`
- `extensions/telegram/package.json`
- `extensions/telegram/runtime-api.ts`
- `extensions/telegram/setup-entry.ts`
- `extensions/telegram/src/account-inspect.test.ts`
- `extensions/telegram/src/account-inspect.ts`
- `extensions/telegram/src/accounts.test.ts`
- `extensions/telegram/src/accounts.ts`
- `extensions/telegram/src/action-runtime.test.ts`
- `extensions/telegram/src/action-runtime.ts`
- `extensions/telegram/src/action-threading.ts`
- `extensions/telegram/src/allow-from.ts`
- `extensions/telegram/src/allowed-updates.test.ts`
- `extensions/telegram/src/api-fetch.test.ts`
- `extensions/telegram/src/api-fetch.ts`
- `extensions/telegram/src/audit-membership-runtime.ts`
- `extensions/telegram/src/audit.test.ts`
- `extensions/telegram/src/audit.ts`
- `extensions/telegram/src/bot-access.ts`
- `extensions/telegram/src/bot-deps.ts`
- `extensions/telegram/src/bot-handlers.runtime.ts`
- `extensions/telegram/src/bot-message-context.acp-bindings.test.ts`
- `extensions/telegram/src/bot-message-context.body.ts`
- `extensions/telegram/src/bot-message-context.dm-threads.test.ts`
- `extensions/telegram/src/bot-message-context.dm-topic-threadid.test.ts`
- `extensions/telegram/src/bot-message-context.route-test-support.ts`
- `extensions/telegram/src/bot-message-context.session.ts`
- … 另有 175 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/telegram/package-manifest.contract.test.ts`
- `extensions/telegram/src/approval-buttons.ts`
- `extensions/telegram/src/bot-handlers.buffers.ts`
- `extensions/telegram/src/bot-native-commands.plugin-auth.test.ts`
- `extensions/telegram/src/channel.test.ts`
- `extensions/telegram/src/exec-approvals-handler.test.ts`
- `extensions/telegram/src/exec-approvals-handler.ts`
- `extensions/telegram/src/fetch.network-policy.test.ts`
- `extensions/telegram/src/group-policy.contract.test.ts`
- `extensions/telegram/src/inbound.contract.test.ts`
- `extensions/telegram/src/plugins-core.contract.test.ts`
- `extensions/telegram/src/registry-backed.contract.test.ts`
- `extensions/telegram/src/target-writeback.test.ts`
- `src/channels/plugins/actions/discord/handle-action.guild-admin.ts`
- `src/channels/plugins/actions/discord/handle-action.ts`
- `src/channels/plugins/contracts/dm-policy.contract.test.ts`
- `src/channels/plugins/contracts/group-policy.contract.test.ts`
- `src/channels/plugins/contracts/plugins-core.contract.test.ts`
- `src/channels/plugins/contracts/registry.ts`
- `src/channels/plugins/contracts/suites.ts`
- `src/channels/plugins/load.ts`
- `src/channels/plugins/normalize/imessage.ts`
- `src/channels/plugins/normalize/shared.ts`
- `src/channels/plugins/normalize/signal.ts`
- `src/channels/plugins/normalize/slack.ts`
- `src/channels/plugins/normalize/targets.test.ts`
- `src/channels/plugins/normalize/whatsapp.ts`
- `src/channels/plugins/plugins-channel.test.ts`
- `src/channels/plugins/setup-wizard-helpers.runtime.ts`
- `src/channels/plugins/whatsapp-shared.ts`

### 重命名

- `extensions/telegram/src/auto-topic-label-config.ts`
- `extensions/telegram/src/bot-message-context.audio-transcript.test-support.ts`
- `extensions/telegram/src/bot-message-context.audio-transcript.test.ts`
- `extensions/telegram/src/bot-message-context.implicit-mention.test-support.ts`
- `extensions/telegram/src/bot-message-context.implicit-mention.test.ts`
- `extensions/telegram/src/bot-message-context.named-account-dm.test-support.ts`
- `extensions/telegram/src/bot-message-context.named-account-dm.test.ts`
- `extensions/telegram/src/bot-message-context.sender-prefix.test-support.ts`
- `extensions/telegram/src/bot-message-context.sender-prefix.test.ts`
- `extensions/telegram/src/command-config.ts`
- `extensions/telegram/src/doctor.ts`
- `extensions/telegram/src/test-support/plugin-command.ts`
- `src/channels/plugins/contracts/channel-catalog.contract.test.ts`
- `src/channels/plugins/contracts/channel-import-guardrails.test.ts`
- `src/channels/plugins/contracts/manifest.ts`
- `src/channels/plugins/status-issues/bluebubbles.test.ts`
- `src/channels/plugins/status-issues/bluebubbles.ts`
- `src/channels/plugins/whatsapp-heartbeat.test.ts`
- `src/channels/plugins/whatsapp-heartbeat.ts`

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

- 首选验证：Manifest id/package metadata/channel labels/runtime deps | `pnpm test:contracts:channels` and plugin catalog/invariant tests if available | `pnpm test -- test/scripts/stage-bundled-plugin-runtime-deps.test.ts`; `pnpm build` if build/published surface changes.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/telegram` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/telegram/change-to-test.md` 的验证建议。
