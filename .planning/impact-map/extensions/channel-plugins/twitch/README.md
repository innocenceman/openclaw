# twitch Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Twitch chat channel plugin under `extensions/twitch/`.

## Entry contracts

- `extensions/twitch/openclaw.plugin.json` declares plugin id `twitch` and channel id `twitch`.
- `extensions/twitch/package.json` defines `@openclaw/twitch`, Twurple runtime dependencies, docs at `/channels/twitch`, and alias `twitch-chat`.
- `extensions/twitch/index.ts` registers `twitchPlugin`, runtime setter, and exports `monitorTwitchProvider`.
- `extensions/twitch/api.ts` and `runtime-api.ts` expose runtime-facing surfaces.

## Primary behavior surfaces

- Setup/config/accounts: `src/config-schema.ts`, `src/config.ts`, `src/setup-surface.ts`, `src/types.ts`, and `src/utils/twitch.ts`.
- Channel/plugin/status: `src/plugin.ts`, `src/status.ts`, `src/probe.ts`, `src/runtime.ts`, and `src/resolver.ts`.
- Twitch client/auth: `src/twitch-client.ts`, `src/token.ts`, and Twurple API/Auth/Chat dependencies.
- Inbound monitor/access: `src/monitor.ts` and `src/access-control.ts` for roles, allowlists, mentions, and message handling.
- Outbound/actions: `src/outbound.ts`, `src/send.ts`, `src/actions.ts`, and `src/utils/markdown.ts`.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Twitch gains separately owned EventSub, IRC monitor, or token-refresh subsystems with distinct validation ownership.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Twitch source and colocated tests.
