# msteams Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Microsoft Teams channel plugin under `extensions/msteams/`.

## Entry contracts

- `extensions/msteams/openclaw.plugin.json` declares plugin id `msteams` and channel id `msteams`.
- `extensions/msteams/package.json` publishes `@openclaw/msteams`, advertises docs at `/channels/msteams`, and carries Teams SDK/Express runtime dependencies inside the plugin.
- `extensions/msteams/index.ts` registers `msteamsPlugin` and the runtime setter.
- `extensions/msteams/setup-entry.ts`, `api.ts`, and `runtime-api.ts` expose setup and runtime-facing surfaces without reaching outside the plugin boundary.

## Primary behavior surfaces

- Setup/config/credentials: `src/setup-core.ts`, `src/setup-surface.ts`, `src/config-schema.ts`, `src/token.ts`, and `src/secret-input.ts`.
- Channel adapter/runtime: `src/channel.ts`, `src/channel.runtime.ts`, `src/runtime.ts`, `src/probe.ts`, and directory adapters.
- Inbound webhook/SDK monitor: `src/monitor.ts`, `src/sdk.ts`, `src/messenger.ts`, `src/monitor-handler.ts`, `src/monitor-handler/message-handler.ts`, and `src/monitor-handler/inbound-media.ts`.
- Policy and routing: `src/policy.ts`, `src/resolve-allowlist.ts`, `src/inbound.ts`, `src/session-route.ts`, `src/conversation-store*.ts`, and `src/sent-message-cache.ts`.
- Graph/API/media: `src/graph.ts`, `src/graph-chat.ts`, `src/graph-users.ts`, `src/graph-upload.ts`, `src/attachments/**`, `src/file-consent*.ts`, and `src/media-helpers.ts`.
- Outbound/replies/actions: `src/send.ts`, `src/outbound.ts`, `src/reply-dispatcher.ts`, `src/streaming-message.ts`, `src/polls.ts`, `src/welcome-card.ts`, and feedback reflection files.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Teams gains separately owned implementation areas such as Graph attachment handling, Bot Framework monitor runtime, or poll/feedback action workflows.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Teams source and colocated tests.
