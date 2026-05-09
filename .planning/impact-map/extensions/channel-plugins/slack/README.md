# slack Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Slack channel plugin under `extensions/slack/`.

## Entry contracts

- `extensions/slack/openclaw.plugin.json` declares plugin id `slack` and channel id `slack`.
- `extensions/slack/package.json` defines private bundled plugin metadata, Socket Mode docs, and staged runtime dependencies for `@slack/bolt` / `@slack/web-api`.
- `extensions/slack/index.ts` registers `slackPlugin` and the runtime setter.
- `extensions/slack/setup-entry.ts` registers setup-only `slackSetupPlugin`.
- `extensions/slack/api.ts` and `runtime-api.ts` export Slack API/runtime surfaces.

## Primary behavior surfaces

- Setup/config/accounts: `src/channel.setup.ts`, `src/setup-core.ts`, `src/setup-surface.ts`, `src/accounts.ts`, `src/account-*`, `src/channel-migration.ts`, `src/config-schema.ts`, `src/shared.ts`, and `src/plugin-shared.ts`.
- Channel adapter/runtime: `src/channel.ts`, `src/channel.runtime.ts`, `src/runtime.ts`, `src/outbound-adapter.ts`, `src/send.ts`, `src/probe.ts`, `src/client.ts`, and `src/token.ts`.
- Inbound monitor: `src/monitor.ts`, `src/monitor/provider.ts`, `src/monitor/events/**`, `src/monitor/message-handler/**`, `src/monitor/context.ts`, `src/monitor/policy.ts`, `src/monitor/auth.ts`, and `src/monitor/allow-list.ts`.
- Interactions/actions: `src/actions.ts`, `src/action-runtime.ts`, `src/message-actions.ts`, `src/message-action-dispatch.ts`, `src/interactive-replies.ts`, `src/http/**`, `src/modal-metadata.ts`, and `src/monitor/slash*.ts`.
- Formatting/media/threading: `src/format.ts`, `src/blocks-*`, `src/streaming.ts`, `src/draft-stream.ts`, `src/stream-mode.ts`, `src/threading*.ts`, `src/sent-thread-cache.ts`, `src/targets.ts`, and `src/monitor/media.ts`.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Slack gains separately owned monitor/events, action runtime, or block/streaming subsystems with independent validation ownership.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Slack source and colocated tests.
