# signal Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Signal channel plugin under `extensions/signal/`.

## Entry contracts

- `extensions/signal/openclaw.plugin.json` declares plugin id `signal` and channel id `signal`.
- `extensions/signal/package.json` defines the bundled/private `@openclaw/signal` plugin and setup entry.
- `extensions/signal/index.ts` registers `signalPlugin` and the runtime setter.
- `extensions/signal/setup-entry.ts` registers the setup-specific plugin from `src/channel.setup.ts`.
- `extensions/signal/api.ts`, `runtime-api.ts`, and `src/runtime-api.ts` expose Signal-specific API/runtime surfaces.

## Primary behavior surfaces

- Setup/config/accounts: `src/channel.setup.ts`, `src/setup-core.ts`, `src/setup-surface.ts`, `src/config-schema.ts`, `src/accounts.ts`, `src/shared.ts`, and `src/plugin-shared.ts`.
- Signal REST/RPC runtime: `src/client.ts`, `src/rpc-context.ts`, `src/probe.ts`, `src/daemon.ts`, `src/sse-reconnect.ts`, and `src/runtime.ts`.
- Channel adapter/outbound: `src/channel.ts`, `src/channel.runtime.ts`, `src/outbound-adapter.ts`, `src/outbound-session.ts`, `src/send.ts`, `src/send-reactions.ts`, and `src/format.ts`.
- Inbound monitor: `src/monitor.ts`, `src/monitor/access-policy.ts`, `src/monitor/event-handler.ts`, `src/monitor/mentions.ts`, and tool-result test harnesses.
- Message actions and reactions: `src/message-actions.ts`, `src/reaction-level.ts`, and reaction send helpers.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Signal gains separately owned monitor/event-handler, REST client, or setup/daemon management boundaries.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Signal source and colocated tests.
