# Telegram Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## 1. Plugin registration and runtime injection

```text
extensions/telegram/openclaw.plugin.json
  -> extensions/telegram/package.json
  -> extensions/telegram/index.ts
  -> defineChannelPluginEntry({ id: "telegram", plugin: telegramPlugin, setRuntime })
  -> extensions/telegram/src/channel.ts
  -> extensions/telegram/src/runtime.ts
```

Impact: channel catalog, picker labels/docs path, runtime dependency staging, loader registration, runtime method availability, and all Telegram channel capabilities.

## 2. Setup, token resolution, and credential status

```text
setup entry / setup adapter
  -> extensions/telegram/src/setup-surface.ts
  -> extensions/telegram/src/setup-core.ts
  -> extensions/telegram/src/accounts.ts
  -> extensions/telegram/src/token.ts
  -> extensions/telegram/src/probe.ts
  -> status snapshot / configuredFromCredentialStatuses
```

Impact: first-run onboarding, bot token storage, env/tokenFile/config precedence, duplicate token ownership, account enabled/configured state, and logout token clearing.

Important invariants:

- Token source precedence must remain explicit and inspectable.
- Named accounts should not silently fall back into the default route where explicit binding is required.
- Duplicate bot tokens across accounts must continue to block unsafe gateway starts.

## 3. Gateway monitor, polling, webhook, and update offsets

```text
channel.gateway.startAccount
  -> monitorTelegramProvider(...)
  -> resolveTelegramAccount + token
  -> TelegramExecApprovalHandler.start()
  -> readTelegramUpdateOffset(...)
  -> polling: TelegramPollingSession.runUntilAbort()
     OR webhook: startTelegramWebhook(...)
  -> persist update id / stop handler cleanup
```

Impact: long-running gateway reliability, duplicate/missed updates, restart after network errors, webhook HTTP surface, exec approval callback availability, and abort/cleanup behavior.

Trace before changing: unhandled rejection suppression, recoverable network error detection, offset normalization/write/delete, webhook secret/body limits, polling conflict/stall watchdog.

## 4. Bot creation and update handler registration

```text
TelegramPollingSession or webhook bot init
  -> createTelegramBot(...)
  -> grammY Bot + apiThrottler + sequentialize
  -> createTelegramThreadBindingManager(...)
  -> createTelegramMessageProcessor(...)
  -> registerTelegramNativeCommands(...)
  -> registerTelegramHandlers(...)
```

Impact: per-chat/thread update ordering, native commands, Bot API middleware, dedupe, thread binding, media and text buffering, and inbound processing.

## 5. Inbound buffering, media groups, and text fragments

```text
Telegram update handler
  -> registerTelegramHandlers(...)
  -> shouldSkipUpdate / allowed update type
  -> media group buffer OR text fragment buffer OR inbound debouncer
  -> processMessage(ctx, allMedia, storeAllowFrom, options, replyMedia)
```

Impact: forwarded burst coalescing, media album ordering, long text fragment merge, debounce timing, and whether a message enters the agent path once or multiple times.

Important invariants:

- Media-only forwarded bursts can be debounced/coalesced intentionally.
- Fragment coalescing must not exceed configured caps in ways that trigger huge prompts.
- Approval callbacks and native commands must not be swallowed by generic debounce.

## 6. Inbound access, context, route, and session key

```text
createTelegramMessageProcessor
  -> buildTelegramMessageContext(...)
  -> resolveTelegramForumFlag + resolveTelegramThreadSpec
  -> resolveTelegramGroupConfig + topic config
  -> resolveTelegramConversationRoute(...)
  -> DM/group allowlist and policy checks
  -> pairing request / mention / command auth / media/reply context
  -> ctxPayload + route + threadSpec
```

Impact: authorization, group/topic privacy, route/session selection, configured bindings, topic agent override, DM named-account isolation, context payload, media/reply/location fields, and status reactions.

Security-sensitive invariants:

- Unauthorized DMs/groups/topics must return `null` before dispatch.
- Named-account groups require explicit binding rather than default fallback.
- Group allowFrom overrides must not inherit DM pairing-store entries.

## 7. Dispatch, streaming previews, and final reply delivery

```text
processMessage(...)
  -> dispatchTelegramMessage(...)
  -> resolve stream/reasoning/blockStreaming policy
  -> createTelegramDraftStream / createLaneTextDeliverer
  -> dispatch to agent runtime
  -> update answer/reasoning lanes from partials
  -> finalize delivery through bot delivery/send helpers
  -> cleanup/archive previews/status reactions
```

Impact: user-visible answer streaming, reasoning lane visibility, draft/message preview fallback, duplicate preview cleanup, final message delivery, media local roots, table rendering, and status reaction lifecycle.

Trace before changing: `blockStreaming`, reasoning level, `streamMode`, draft transport fallback, message/thread not found fallback, answer/reasoning lane split, non-regressive preview update logic.

## 8. Native commands, model buttons, inline buttons, and exec approvals

```text
createTelegramBot(...)
  -> registerTelegramNativeCommands(...)
  -> command authorization + skills allowlist + model menu
  -> inline button callbacks
  -> TelegramExecApprovalHandler / exec approval buttons
  -> send/edit reply markup or pending payload
```

Impact: slash command UX, command-gating security, skill allowlists, model selection state, exec approval action safety, and callback payload compatibility.

## 9. Outbound generic sends and channel actions

```text
OpenClaw outbound request / channel action
  -> channel.outbound.base OR channel.attachedResults OR actions
  -> outbound-adapter.ts sendTelegramPayloadMessages(...)
  -> send.ts sendMessageTelegram/sendPollTelegram/react/delete/pin/edit/forum-topic helpers
  -> Telegram Bot API
```

Impact: manual sends, replies, polls, media/stickers, reactions, delete/pin/edit, forum topic create/rename/edit, silent/document/thread/reply params, parse fallback, and network diagnostics.

Important invariants:

- Telegram text chunking must stay within 4096/4000 limits depending on path.
- Poll max options is 10 at channel outbound level.
- Thread fallback should only remove `message_thread_id` for known thread-not-found cases.
- Chat-not-found diagnostics should remain actionable.

## 10. Status, probe, audit, and diagnostics

```text
channel.status adapter
  -> probeTelegram(...)
  -> auditTelegramGroupMembership(...)
  -> collectTelegramStatusIssues(...)
  -> buildTokenChannelStatusSummary(...)
```

Impact: operator status output, BotFather privacy guidance, webhook/capability display, group membership diagnostics, duplicate-token errors, and setup troubleshooting.

## When to use graph tools for this leaf

Use repo-native inspection first. Use GitNexus/code-review-graph only after fresh indexed coverage is recorded in `.planning/tools/GRAPH-COVERAGE.md`, especially for:

- refactors in `extensions/telegram/src/channel.ts`, `bot.ts`, `bot-message-context.ts`, `bot-message-dispatch.ts`, or `send.ts`;
- public barrel changes in `extensions/telegram/api.ts` or `extensions/telegram/runtime-api.ts`;
- security-sensitive DM/group/exec-approval/media changes;
- routing/session/thread-binding changes that can affect shared channel abstractions.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `458` changed path(s) to this final leaf. `419` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'R': 19, 'A': 204, 'M': 205, 'D': 30}`.

- `extensions/telegram/account-inspect-api.ts`
- `extensions/telegram/api.ts`
- `extensions/telegram/channel-config-api.test.ts`
- `extensions/telegram/channel-config-api.ts`
- `extensions/telegram/channel-plugin-api.ts`
- `extensions/telegram/config-api.ts`
- `extensions/telegram/configured-state.ts`
- `extensions/telegram/contract-api.ts`
- `extensions/telegram/directory-contract-api.ts`
- `extensions/telegram/index.test.ts`
- `extensions/telegram/index.ts`
- `extensions/telegram/legacy-state-migrations-api.ts`
- `extensions/telegram/openclaw.plugin.json`
- `extensions/telegram/package.json`
- `extensions/telegram/runtime-api.ts`
- `extensions/telegram/runtime-setter-api.ts`
- `extensions/telegram/secret-contract-api.ts`
- `extensions/telegram/security-audit-contract-api.ts`
- `extensions/telegram/session-key-api.ts`
- `extensions/telegram/setup-entry.ts`
- `extensions/telegram/setup-plugin-api.ts`
- `extensions/telegram/src/account-config.ts`
- `extensions/telegram/src/account-inspect.test.ts`
- `extensions/telegram/src/account-inspect.ts`
- `extensions/telegram/src/account-selection.ts`
- `extensions/telegram/src/accounts.test.ts`
- `extensions/telegram/src/accounts.ts`
- `extensions/telegram/src/action-runtime.test.ts`
- `extensions/telegram/src/action-runtime.ts`
- `extensions/telegram/src/action-threading.test.ts`
- `... 另有 389 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
