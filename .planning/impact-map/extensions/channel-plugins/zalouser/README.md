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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `60` (删除 3，修改 40，新增 17).
- Target-existing changed paths listed here: `57`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `3`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/zalouser/README.md`
- `extensions/zalouser/api.ts`
- `extensions/zalouser/channel-plugin-api.ts`
- `extensions/zalouser/contract-api.ts`
- `extensions/zalouser/doctor-contract-api.ts`
- `extensions/zalouser/index.ts`
- `extensions/zalouser/openclaw.plugin.json`
- `extensions/zalouser/package.json`
- `extensions/zalouser/runtime-api.ts`
- `extensions/zalouser/secret-contract-api.ts`
- `extensions/zalouser/setup-entry.ts`
- `extensions/zalouser/setup-plugin-api.ts`
- `... 另有 45 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
