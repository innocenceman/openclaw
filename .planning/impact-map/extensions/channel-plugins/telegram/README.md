# Telegram Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the bundled Telegram Bot API channel plugin in `extensions/telegram/`.

This leaf covers plugin registration, package/runtime dependency metadata, token/account resolution, polling/webhook monitor startup, grammY bot creation, update dedupe/offset persistence, inbound access control and message context construction, native bot commands, exec approval callbacks, streaming/draft delivery lanes, outbound sends/actions/polls/forum-topic actions, setup/status/probe/audit, and Telegram-specific target/thread/session routing.

## Why this remains one leaf

Telegram has several large internal implementation clusters, but they share one installed plugin, one channel id (`telegram`), one config namespace, and one host runtime injection boundary. Keep this as one leaf unless a cluster becomes independently owned or published as a separate public contract.

Internal clusters to trace inside the leaf:

- package/entry/runtime/export barrels
- setup/config/status/probe/audit
- account/token/network/proxy transport
- polling/webhook monitor lifecycle
- grammY bot/update handlers/inbound buffering
- inbound access/message context/routing/thread binding
- dispatch/streaming/draft lanes/reasoning lanes
- outbound send/actions/polls/forum topics/media
- native commands/model buttons/inline buttons/exec approvals

## Entry contracts

- Plugin id and channel id: `telegram` from `extensions/telegram/openclaw.plugin.json`.
- Package/install contract: `@openclaw/telegram` from `extensions/telegram/package.json`.
- Loader boundary: `extensions/telegram/index.ts` registers `telegramPlugin` and `setTelegramRuntime`.
- Public local barrels: `extensions/telegram/api.ts` and `extensions/telegram/runtime-api.ts`.

## Primary behavior surfaces

- `extensions/telegram/src/channel.ts`: high fan-out channel composition and gateway/outbound/status/security/threading wiring.
- `extensions/telegram/src/monitor.ts`: polling/webhook monitor entry, update offset persistence, network-error restart handling, exec approval handler lifecycle.
- `extensions/telegram/src/bot.ts`: grammY bot creation, middleware, update dedupe, native command registration, message processor creation.
- `extensions/telegram/src/bot-handlers.runtime.ts`: Telegram update handlers, inbound debounce, forwarded bursts, media groups, text fragment coalescing.
- `extensions/telegram/src/bot-message-context.ts`: authorization, group/topic/DM routing, context payload, reactions, thread specs, media/reply context.
- `extensions/telegram/src/bot-message-dispatch.ts`: agent dispatch, streaming/draft previews, reasoning lanes, reply delivery orchestration.
- `extensions/telegram/src/send.ts`: Telegram API send/action/edit/delete/pin/poll/sticker/forum-topic operations.
- `extensions/telegram/src/outbound-adapter.ts`: generic OpenClaw outbound payload bridge to Telegram sends.

## Detail files

- `file-roles.md`: file/path ownership and impact radius.
- `code-paths.md`: traceable behavior paths and handoff boundaries.
- `change-to-test.md`: targeted validation ladder for common changes.

## Current validation state

This map was created from source inspection only. No product code was modified, no tests/builds were run, and no GitNexus/code-review-graph index was run for this leaf.
