# BlueBubbles Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## 1. Plugin registration and runtime injection

```text
extensions/bluebubbles/openclaw.plugin.json
  -> extensions/bluebubbles/package.json
  -> extensions/bluebubbles/index.ts
  -> defineChannelPluginEntry({ id: "bluebubbles", plugin: bluebubblesPlugin, setRuntime })
  -> extensions/bluebubbles/src/channel.ts
  -> extensions/bluebubbles/src/runtime.ts
```

Impact: plugin catalog, install metadata, alias/preference over `imessage`, loader registration, runtime services, setup/status/outbound availability.

## 2. Setup and credential/account resolution

```text
setup-entry / setup adapter
  -> setup-surface.ts
  -> setup-core.ts + config-apply.ts
  -> accounts.ts / account-resolve.ts
  -> secret-input.ts
  -> probe.ts
```

Impact: server URL/password/webhook path, account enabled/configured state, allowFrom/DM policy, private API status, setup status.

## 3. Webhook request to inbound processing

```text
BlueBubbles webhook request
  -> monitor.ts handleBlueBubblesWebhookRequest(...)
  -> auth via guid/password/header token
  -> parseBlueBubblesWebhookPayload(...)
  -> normalizeWebhookMessage(...) or normalizeWebhookReaction(...)
  -> monitor-debounce.ts for messages
  -> processMessage(...) or processReaction(...)
```

Impact: external HTTP auth, accepted event types, body validation, webhook route matching, duplicate/coalesced webhook behavior, reaction vs message routing.

Security-sensitive invariants:

- Webhook auth must remain constant-time-ish via safe equality and must reject missing/wrong secrets.
- Unsupported event types should not enter the reply path.
- Invalid message/reaction payloads must not be treated as authorized turns.

## 4. Inbound authorization, pairing, routing, and reply pipeline

```text
processMessage(message, target)
  -> self-chat/fromMe/reflection guards
  -> resolveDmGroupAccessWithLists(...)
  -> pairing challenge if DM policy requires pairing
  -> resolveAgentRoute(channel="bluebubbles")
  -> mention and command gating
  -> build inbound context/history/reply/media metadata
  -> createChannelReplyPipeline(...)
  -> sendMessageBlueBubbles/sendBlueBubblesMedia response delivery
```

Impact: sender authorization, group allowlist hints, pairing requests, session routing, command authorization, mention gating, history/context quality, outbound reply ids.

Important invariants:

- Unauthorized DMs/groups must return before agent dispatch.
- Reflected self-chat/outbound copies must not create loops.
- Pairing replies must use the same account/server config.

## 5. Outbound text and session routing

```text
OpenClaw outbound request
  -> channel.outbound / session-route.ts
  -> sendMessageBlueBubbles(to, text, opts)
  -> resolveBlueBubblesSendTarget(...)
  -> resolveChatGuidForTarget(...)
  -> createChatForHandle(...) if direct handle and no chat exists
  -> /api/v1/message/text
```

Impact: manual sends, direct/group/chat GUID targets, DM chat creation, reply threading, message effects, markdown stripping, pending outbound id tracking.

## 6. Media and attachment path

```text
Reply/media payload or attachment webhook
  -> media-send.ts sendBlueBubblesMedia(...)
  -> local-root or remote fetch validation
  -> attachments.ts download/send attachment
  -> multipart.ts postMultipartFormData(...)
  -> BlueBubbles attachment/text APIs
```

Impact: file delivery, voice memo conversion rules, captions, reply threading, media local roots, SSRF/private network policy, attachment size caps.

## 7. Message actions and private API chat operations

```text
OpenClaw message action/tool
  -> actions.ts / actions.runtime.ts
  -> chat.ts or reactions.ts
  -> BlueBubbles private API endpoints
```

Impact: mark read, typing, edit/unsend, rename chat, participant management, leave chat, group icon, reactions. Private API feature gating must stay aligned with probe status.

## When to use graph tools for this leaf

Use repo-native inspection first. Use GitNexus/code-review-graph only after fresh indexed coverage is recorded in `.planning/tools/GRAPH-COVERAGE.md`, especially for `monitor-processing.ts`, `send.ts`, `media-send.ts`, `attachments.ts`, `chat.ts`, or public barrel changes.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `88` changed path(s) to this final leaf. `83` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 56, 'A': 25, 'D': 5, 'R': 2}`.

- `extensions/bluebubbles/README.md`
- `extensions/bluebubbles/api.ts`
- `extensions/bluebubbles/channel-plugin-api.ts`
- `extensions/bluebubbles/contract-api.ts`
- `extensions/bluebubbles/index.ts`
- `extensions/bluebubbles/package.json`
- `extensions/bluebubbles/runtime-api.ts`
- `extensions/bluebubbles/secret-contract-api.ts`
- `extensions/bluebubbles/setup-entry.ts`
- `extensions/bluebubbles/src/account-resolve.test.ts`
- `extensions/bluebubbles/src/account-resolve.ts`
- `extensions/bluebubbles/src/accounts-normalization.ts`
- `extensions/bluebubbles/src/accounts.ts`
- `extensions/bluebubbles/src/actions-api.ts`
- `extensions/bluebubbles/src/actions-contract.ts`
- `extensions/bluebubbles/src/actions.runtime.ts`
- `extensions/bluebubbles/src/actions.test.ts`
- `extensions/bluebubbles/src/actions.ts`
- `extensions/bluebubbles/src/attachments.test.ts`
- `extensions/bluebubbles/src/attachments.ts`
- `extensions/bluebubbles/src/catchup.test.ts`
- `extensions/bluebubbles/src/catchup.ts`
- `extensions/bluebubbles/src/channel.pairing.test.ts`
- `extensions/bluebubbles/src/channel.runtime.ts`
- `extensions/bluebubbles/src/channel.setup.ts`
- `extensions/bluebubbles/src/channel.status.test.ts`
- `extensions/bluebubbles/src/channel.ts`
- `extensions/bluebubbles/src/chat.ts`
- `extensions/bluebubbles/src/client.test.ts`
- `extensions/bluebubbles/src/client.ts`
- `... 另有 53 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/bluebubbles/api.ts`
- `extensions/bluebubbles/doctor-contract-api.ts`
- `extensions/bluebubbles/openclaw.plugin.json`
- `extensions/bluebubbles/package.json`
- `extensions/bluebubbles/src/account-resolve.ts`
- `extensions/bluebubbles/src/accounts.ts`
- `extensions/bluebubbles/src/actions.test.ts`
- `extensions/bluebubbles/src/actions.ts`
- `extensions/bluebubbles/src/attachments.test.ts`
- `extensions/bluebubbles/src/attachments.ts`
- `extensions/bluebubbles/src/channel-shared.ts`
- `extensions/bluebubbles/src/channel.status.test.ts`
- `extensions/bluebubbles/src/channel.ts`
- `extensions/bluebubbles/src/client.ts`
- `extensions/bluebubbles/src/config-apply.ts`
- `extensions/bluebubbles/src/config-schema.ts`
- `extensions/bluebubbles/src/conversation-bindings.test.ts`
- `extensions/bluebubbles/src/conversation-bindings.ts`
- `extensions/bluebubbles/src/conversation-route.test.ts`
- `extensions/bluebubbles/src/conversation-route.ts`
- `extensions/bluebubbles/src/group-policy.ts`
- `extensions/bluebubbles/src/history.ts`
- `extensions/bluebubbles/src/inbound-dedupe.ts`
- `extensions/bluebubbles/src/media-send.test.ts`
- `extensions/bluebubbles/src/media-send.ts`
- `extensions/bluebubbles/src/monitor-debounce.ts`
- `extensions/bluebubbles/src/monitor-normalize.test.ts`
- `extensions/bluebubbles/src/monitor-normalize.ts`
- `extensions/bluebubbles/src/monitor-processing-api.ts`
- `extensions/bluebubbles/src/monitor-processing-chat-resolve.test.ts`
- `extensions/bluebubbles/src/monitor-processing.ts`
- `extensions/bluebubbles/src/monitor-reply-cache.test.ts`
- `extensions/bluebubbles/src/monitor-reply-cache.ts`
- `extensions/bluebubbles/src/monitor-reply-fetch.test.ts`
- `extensions/bluebubbles/src/monitor-reply-fetch.ts`
- `extensions/bluebubbles/src/monitor-shared.ts`
- `extensions/bluebubbles/src/monitor.test.ts`
- `extensions/bluebubbles/src/monitor.ts`
- `extensions/bluebubbles/src/monitor.webhook-auth.test.ts`
- `extensions/bluebubbles/src/monitor.webhook.test-helpers.ts`
- … plus 13 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
