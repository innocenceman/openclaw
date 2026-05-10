# nextcloud-talk Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Nextcloud Talk channel plugin under `extensions/nextcloud-talk/`.

## Entry contracts

- `extensions/nextcloud-talk/openclaw.plugin.json` declares plugin id `nextcloud-talk` and channel id `nextcloud-talk`.
- `extensions/nextcloud-talk/package.json` publishes `@openclaw/nextcloud-talk`, advertises docs at `/channels/nextcloud-talk`, and keeps `zod` as the local runtime dependency.
- `extensions/nextcloud-talk/index.ts` registers `nextcloudTalkPlugin` and the runtime setter.
- `extensions/nextcloud-talk/setup-entry.ts`, `api.ts`, and `runtime-api.ts` expose setup/runtime-facing surfaces.

## Primary behavior surfaces

- Scoped account setup/config: `src/accounts.ts`, `src/setup-core.ts`, `src/setup-surface.ts`, `src/config-schema.ts`, `src/types.ts`, and `src/secret-input.ts`.
- Channel adapter/gateway: `src/channel.ts`, `src/runtime.ts`, and `src/session-route.ts`.
- Webhook inbound path: `src/monitor.ts`, `src/signature.ts`, `src/replay-guard.ts`, `src/inbound.ts`, `src/policy.ts`, `src/room-info.ts`, `src/normalize.ts`, and `src/format.ts`.
- Outbound delivery: `src/send.ts` for OCS bot message/reaction requests and signature generation.
- Validation fixtures: `src/monitor.test-fixtures.ts` and `src/monitor.test-harness.ts` support inbound/replay tests.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Nextcloud Talk gains separately owned webhook, room lookup, or send/reaction submodules with distinct validation ownership.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Nextcloud Talk source and colocated tests.
