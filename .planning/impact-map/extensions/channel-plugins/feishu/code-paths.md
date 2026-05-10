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
