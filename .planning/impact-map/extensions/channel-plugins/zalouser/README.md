# zalouser Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Zalo Personal Account channel plugin under `extensions/zalouser/`.

## Entry contracts

- `extensions/zalouser/openclaw.plugin.json` declares plugin id `zalouser` and channel id `zalouser`.
- `extensions/zalouser/package.json` publishes `@openclaw/zalouser`, advertises docs at `/channels/zalouser`, alias `zlu`, and runtime dependencies `zca-js`, `zod`, and `@sinclair/typebox`.
- `extensions/zalouser/index.ts` registers `zalouserPlugin`, the runtime setter, and the `zalouser` tool actions: `send`, `image`, `link`, `friends`, `groups`, `me`, and `status`.
- `extensions/zalouser/setup-entry.ts`, `api.ts`, and `runtime-api.ts` expose setup/runtime-facing surfaces.

## Primary behavior surfaces

- Setup/config/accounts: `src/accounts.ts`, `src/config-schema.ts`, `src/setup-core.ts`, `src/setup-surface.ts`, `src/channel.setup.ts`, `src/qr-temp-file.ts`, `src/types.ts`, and `src/status-issues.ts`.
- ZCA/native session runtime: `src/zalo-js.ts`, `src/zca-client.ts`, `src/zca-constants.ts`, `src/zca-js-exports.d.ts`, and `src/runtime.ts`.
- Channel adapter/runtime: `src/channel.ts`, `src/session-route.ts`, `src/probe.ts`, `src/send.ts`, `src/reaction.ts`, `src/tool.ts`, `src/text-styles.ts`, and `src/shared.ts`.
- Inbound monitor: `src/monitor.ts`, account-scoped monitor tests, group-gating tests, send mocks, and Zalo/ZCA test mocks.
- Direct/group policy: scoped DM policy, pairing prefix stripping, allowFrom/groupAllowFrom resolution, groupPolicy/group directory matching, requireMention, message id/CLI message id reaction mapping, and status issue collection.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Zalo Personal gains separately owned QR/session, monitor, send/tool, or group-policy subsystems with independent validation ownership.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Zalo Personal source and colocated tests.
