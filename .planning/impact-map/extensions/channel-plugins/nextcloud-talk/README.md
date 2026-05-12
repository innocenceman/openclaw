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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `46` (新增 20，修改 23，删除 3).
- Target-existing changed paths listed here: `43`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `3`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/nextcloud-talk/channel-plugin-api.ts`
- `extensions/nextcloud-talk/contract-api.ts`
- `extensions/nextcloud-talk/index.ts`
- `extensions/nextcloud-talk/openclaw.plugin.json`
- `extensions/nextcloud-talk/package.json`
- `extensions/nextcloud-talk/runtime-api.ts`
- `extensions/nextcloud-talk/secret-contract-api.ts`
- `extensions/nextcloud-talk/setup-entry.ts`
- `extensions/nextcloud-talk/src/accounts.ts`
- `extensions/nextcloud-talk/src/approval-auth.test.ts`
- `extensions/nextcloud-talk/src/approval-auth.ts`
- `... 另有 31 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `channel-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `27`
- Target-existing changed paths reflected here: `26`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

- `extensions/nextcloud-talk/doctor-contract-api.ts`
- `extensions/nextcloud-talk/openclaw.plugin.json`
- `extensions/nextcloud-talk/package.json`
- `extensions/nextcloud-talk/runtime-api.ts`
- `extensions/nextcloud-talk/src/accounts.ts`
- `extensions/nextcloud-talk/src/channel-api.ts`
- `extensions/nextcloud-talk/src/channel.core.test.ts`
- `extensions/nextcloud-talk/src/channel.lifecycle.test.ts`
- `extensions/nextcloud-talk/src/channel.ts`
- `extensions/nextcloud-talk/src/config-schema.ts`
- `extensions/nextcloud-talk/src/core.test.ts`
- `extensions/nextcloud-talk/src/gateway.ts`
- `extensions/nextcloud-talk/src/monitor-runtime.ts`
- `extensions/nextcloud-talk/src/monitor.replay.test.ts`
- `extensions/nextcloud-talk/src/monitor.test-harness.ts`
- `extensions/nextcloud-talk/src/policy.ts`
- `extensions/nextcloud-talk/src/replay-guard.ts`
- `extensions/nextcloud-talk/src/secret-contract.ts`
- `extensions/nextcloud-talk/src/secret-input.ts`
- `extensions/nextcloud-talk/src/send.cfg-threading.test.ts`
- `extensions/nextcloud-talk/src/send.runtime.ts`
- `extensions/nextcloud-talk/src/session-route.ts`
- `extensions/nextcloud-talk/src/setup-core.ts`
- `extensions/nextcloud-talk/src/setup-surface.ts`
- `extensions/nextcloud-talk/src/signature.ts`
- `extensions/nextcloud-talk/src/types.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
