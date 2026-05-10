# synology-chat Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Synology Chat channel plugin under `extensions/synology-chat/`.

## Entry contracts

- `extensions/synology-chat/openclaw.plugin.json` declares plugin id `synology-chat` and channel id `synology-chat`.
- `extensions/synology-chat/package.json` publishes `@openclaw/synology-chat`, advertises docs at `/channels/synology-chat`, and keeps `zod` as a local runtime dependency.
- `extensions/synology-chat/index.ts` registers `synologyChatPlugin` and the runtime setter.
- `extensions/synology-chat/setup-entry.ts` registers the setup entry; `setup-api.ts` exposes setup-facing helpers.

## Primary behavior surfaces

- Setup/config/accounts: `src/accounts.ts`, `src/setup-surface.ts`, `src/config-schema.ts`, `src/types.ts`, and setup API.
- Channel adapter/gateway: `src/channel.ts`, `src/gateway-runtime.ts`, `src/runtime.ts`, `src/security.ts`, and `src/session-key.ts`.
- Webhook inbound path: `src/webhook-handler.ts`, `src/inbound-context.ts`, `src/inbound-turn.ts`, and test HTTP utilities.
- Outbound client: `src/client.ts` for incoming webhook sends, file URL sends, and legacy name-to-user lookup.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Synology Chat gains separately owned webhook route, outbound client, or account setup boundaries with independent validation ownership.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Synology Chat source and colocated tests.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `30` (新增 8，修改 20，删除 2).
- Target-existing changed paths listed here: `28`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `2`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/synology-chat/api.ts`
- `extensions/synology-chat/channel-plugin-api.ts`
- `extensions/synology-chat/contract-api.ts`
- `extensions/synology-chat/index.ts`
- `extensions/synology-chat/openclaw.plugin.json`
- `extensions/synology-chat/package.json`
- `extensions/synology-chat/setup-entry.ts`
- `extensions/synology-chat/src/accounts.ts`
- `extensions/synology-chat/src/approval-auth.test.ts`
- `extensions/synology-chat/src/approval-auth.ts`
- `extensions/synology-chat/src/channel.integration.test.ts`
- `extensions/synology-chat/src/channel.test.ts`
- `... 另有 16 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
