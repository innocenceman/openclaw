# nostr Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Nostr channel plugin under `extensions/nostr/`.

## Entry contracts

- `extensions/nostr/openclaw.plugin.json` declares plugin id `nostr` and channel id `nostr`.
- `extensions/nostr/package.json` publishes `@openclaw/nostr`, advertises docs at `/channels/nostr`, and keeps `nostr-tools`/`zod` as local runtime dependencies.
- `extensions/nostr/index.ts` registers `nostrPlugin`, runtime setter, and the gateway-authenticated `/api/channels/nostr` profile HTTP route.
- `extensions/nostr/setup-entry.ts`, `setup-api.ts`, `api.ts`, and `runtime-api.ts` expose setup/runtime-facing surfaces.

## Primary behavior surfaces

- Setup/config/account: `src/setup-surface.ts`, `src/config-schema.ts`, `src/types.ts`, `src/default-relays.ts`, and `src/runtime.ts`.
- Channel/gateway: `src/channel.ts`, active bus handles, metrics snapshots, status, pairing, monitor lifecycle, and outbound delegates.
- Relay/DM bus: `src/nostr-bus.ts`, `src/seen-tracker.ts`, `src/metrics.ts`, and `src/nostr-state-store.ts`.
- Profile management: `src/nostr-profile.ts`, `src/nostr-profile-import.ts`, and `src/nostr-profile-http.ts`.
- Session routing: `src/session-route.ts`.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Nostr gains separately owned bus, profile, or HTTP management surfaces with independent validation ownership.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Nostr source and colocated tests.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `39` (删除 2，修改 26，新增 11).
- Target-existing changed paths listed here: `37`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `2`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/nostr/README.md`
- `extensions/nostr/api.ts`
- `extensions/nostr/channel-plugin-api.ts`
- `extensions/nostr/index.ts`
- `extensions/nostr/openclaw.plugin.json`
- `extensions/nostr/package.json`
- `extensions/nostr/setup-entry.ts`
- `extensions/nostr/setup-plugin-api.ts`
- `extensions/nostr/src/channel-api.ts`
- `extensions/nostr/src/channel.inbound.test.ts`
- `extensions/nostr/src/channel.outbound.test.ts`
- `extensions/nostr/src/channel.setup.ts`
- `... 另有 25 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
