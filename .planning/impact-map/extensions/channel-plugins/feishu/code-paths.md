# Feishu Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## 1. Registration and tool activation

```text
openclaw.plugin.json -> package.json -> index.ts
  -> defineChannelPluginEntry(id="feishu")
  -> feishuPlugin + setFeishuRuntime
  -> registerFeishuSubagentHooks + registerFeishu*Tools
```

Impact: channel catalog, skills/tool availability, runtime dependency staging, subagent hooks.

## 2. Setup, credentials, client, and status

```text
setup-surface/setup-core -> accounts/secret-input
  -> client.ts createFeishuClient/createFeishuWSClient/createEventDispatcher
  -> probe/status/channel snapshot
```

Impact: app id/secret/domain/proxy/http timeout, configured state, Lark SDK client cache.

## 3. Monitor and inbound bot events

```text
monitorFeishuProvider(...)
  -> monitor transport/state/account/startup
  -> Lark event dispatcher / webhook or WS event
  -> bot.ts parseFeishuMessageEvent/handleFeishuMessage
  -> policy/mention/dedup/conversation-id/thread-bindings
  -> reply-dispatcher/tool-result/streaming-card
```

Impact: inbound routing, broadcast agents, card actions, reactions, bot menu lifecycle, reply-once behavior, ACP init failure handling.

## 4. Outbound and media/card delivery

```text
OpenClaw reply/outbound
  -> outbound.ts / send-target.ts / session-route.ts
  -> send.ts sendMessageFeishu/sendCardFeishu/updateCardFeishu/editMessageFeishu
  -> media.ts upload/download/send image/file/media
  -> Lark message APIs
```

Impact: text/post/card rendering, reply fallback, file/image upload, typing/reactions.

## 5. Feishu tools

```text
registered tools
  -> docx/wiki/drive/perm/bitable/chat/pins/post modules
  -> tool-account/tool-config schemas
  -> Lark APIs
```

Impact: document/wiki/bitable/permission changes can affect tool schemas, account routing, and external API behavior.

## Graph-use rule

Use GitNexus/code-review-graph only after fresh bounded coverage is recorded in `.planning/tools/GRAPH-COVERAGE.md`, especially for `channel.ts`, `monitor.ts`, `bot.ts`, `send.ts`, or tool registration files.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `82` changed path(s) to this final leaf. `75` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 52, 'A': 17, 'D': 1, 'R': 12}`.

- `extensions/feishu/api.ts`
- `extensions/feishu/channel-entry.ts`
- `extensions/feishu/channel-plugin-api.ts`
- `extensions/feishu/contract-api.ts`
- `extensions/feishu/index.ts`
- `extensions/feishu/openclaw.plugin.json`
- `extensions/feishu/package.json`
- `extensions/feishu/runtime-api.ts`
- `extensions/feishu/secret-contract-api.ts`
- `extensions/feishu/security-contract-api.ts`
- `extensions/feishu/session-key-api.ts`
- `extensions/feishu/setup-api.ts`
- `extensions/feishu/setup-entry.test.ts`
- `extensions/feishu/setup-entry.ts`
- `extensions/feishu/src/accounts.test.ts`
- `extensions/feishu/src/accounts.ts`
- `extensions/feishu/src/bot.broadcast.test.ts`
- `extensions/feishu/src/bot.card-action.test.ts`
- `extensions/feishu/src/bot.test.ts`
- `extensions/feishu/src/bot.ts`
- `extensions/feishu/src/card-action.ts`
- `extensions/feishu/src/card-interaction.ts`
- `extensions/feishu/src/card-test-helpers.ts`
- `extensions/feishu/src/card-ux-approval.ts`
- `extensions/feishu/src/card-ux-launcher.test.ts`
- `extensions/feishu/src/card-ux-launcher.ts`
- `extensions/feishu/src/channel.test.ts`
- `extensions/feishu/src/channel.ts`
- `extensions/feishu/src/chat-schema.ts`
- `extensions/feishu/src/client.test.ts`
- `... 另有 45 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/feishu/api.ts`
- `extensions/feishu/openclaw.plugin.json`
- `extensions/feishu/package.json`
- `extensions/feishu/runtime-api.ts`
- `extensions/feishu/src/bot.broadcast.test.ts`
- `extensions/feishu/src/bot.card-action.test.ts`
- `extensions/feishu/src/bot.checkBotMentioned.test.ts`
- `extensions/feishu/src/bot.helpers.test.ts`
- `extensions/feishu/src/bot.test.ts`
- `extensions/feishu/src/bot.ts`
- `extensions/feishu/src/card-action.ts`
- `extensions/feishu/src/card-interaction.ts`
- `extensions/feishu/src/card-ux-launcher.test.ts`
- `extensions/feishu/src/card-ux-launcher.ts`
- `extensions/feishu/src/channel.test.ts`
- `extensions/feishu/src/channel.ts`
- `extensions/feishu/src/client.test.ts`
- `extensions/feishu/src/client.ts`
- `extensions/feishu/src/config-schema.ts`
- `extensions/feishu/src/docx-color-text.ts`
- `extensions/feishu/src/docx-table-ops.ts`
- `extensions/feishu/src/docx-types.ts`
- `extensions/feishu/src/docx.test.ts`
- `extensions/feishu/src/docx.ts`
- `extensions/feishu/src/monitor.account.ts`
- `extensions/feishu/src/monitor.acp-init-failure.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.bot-identity.ts`
- `extensions/feishu/src/monitor.bot-menu-handler.ts`
- `extensions/feishu/src/monitor.bot-menu.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.broadcast.reply-once.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.card-action.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.cleanup.test.ts`
- `extensions/feishu/src/monitor.comment.test.ts`
- `extensions/feishu/src/monitor.comment.ts`
- `extensions/feishu/src/monitor.message-handler.ts`
- `extensions/feishu/src/monitor.reaction.test.ts`
- `extensions/feishu/src/monitor.startup.test.ts`
- `extensions/feishu/src/monitor.startup.ts`
- `extensions/feishu/src/monitor.transport.ts`
- `extensions/feishu/src/monitor.webhook-security.test.ts`
- … plus 5 more target-existing changed paths.

Deleted or renamed-away paths omitted from this active leaf: `1`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
