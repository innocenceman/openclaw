# Google Chat Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the bundled Google Chat channel plugin in `extensions/googlechat/`.

Covers plugin registration, Google service-account credentials, request verification, webhook routing, inbound access/pairing/mention policy, reply pipeline, outbound space/user target resolution, Google Chat API sends/edits/deletes/reactions/uploads/downloads, setup/config/status, and message actions.

## Entry contracts

- Plugin id/channel id: `googlechat`.
- Package/install contract: `@openclaw/googlechat` with `google-auth-library`.
- Loader boundary: `extensions/googlechat/index.ts` registers `googlechatPlugin` and `setGoogleChatRuntime`.

## Primary behavior surfaces

- `extensions/googlechat/src/channel.ts`: plugin composition.
- `extensions/googlechat/src/auth.ts`: access tokens and webhook JWT verification.
- `extensions/googlechat/src/monitor-webhook.ts` and `monitor.ts`: webhook handling and reply pipeline.
- `extensions/googlechat/src/monitor-access.ts`: inbound DM/group access, pairing, and mention policy.
- `extensions/googlechat/src/api.ts`, `targets.ts`, `actions.ts`: Google Chat API calls and outbound/actions.

## Current validation state

Source inspection only; no product code, tests/builds, or graph indexes were run.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `49` (修改 27，新增 21，删除 1).
- Target-existing changed paths listed here: `48`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/googlechat/api.ts`
- `extensions/googlechat/channel-plugin-api.ts`
- `extensions/googlechat/contract-api.ts`
- `extensions/googlechat/index.ts`
- `extensions/googlechat/openclaw.plugin.json`
- `extensions/googlechat/package.json`
- `extensions/googlechat/runtime-api.ts`
- `extensions/googlechat/secret-contract-api.ts`
- `extensions/googlechat/setup-entry.ts`
- `extensions/googlechat/setup-plugin-api.ts`
- `extensions/googlechat/src/accounts.ts`
- `extensions/googlechat/src/actions.test.ts`
- `... 另有 36 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `channel-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `31`
- Target-existing changed paths reflected here: `31`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/googlechat/api.ts`
- `extensions/googlechat/doctor-contract-api.ts`
- `extensions/googlechat/openclaw.plugin.json`
- `extensions/googlechat/package.json`
- `extensions/googlechat/runtime-api.ts`
- `extensions/googlechat/src/accounts.ts`
- `extensions/googlechat/src/actions.ts`
- `extensions/googlechat/src/auth.ts`
- `extensions/googlechat/src/channel-config.test.ts`
- `extensions/googlechat/src/channel.deps.runtime.ts`
- `extensions/googlechat/src/channel.setup.ts`
- `extensions/googlechat/src/channel.test.ts`
- `extensions/googlechat/src/channel.ts`
- `extensions/googlechat/src/config-schema.test.ts`
- `extensions/googlechat/src/config-schema.ts`
- `extensions/googlechat/src/doctor-contract.ts`
- `extensions/googlechat/src/gateway.ts`
- `extensions/googlechat/src/google-auth.runtime.test.ts`
- `extensions/googlechat/src/google-auth.runtime.ts`
- `extensions/googlechat/src/monitor-access.test.ts`
- `extensions/googlechat/src/monitor-access.ts`
- `extensions/googlechat/src/monitor-reply-delivery.ts`
- `extensions/googlechat/src/monitor.reply-delivery.test.ts`
- `extensions/googlechat/src/monitor.ts`
- `extensions/googlechat/src/monitor.webhook-routing.test.ts`
- `extensions/googlechat/src/secret-contract.test.ts`
- `extensions/googlechat/src/secret-contract.ts`
- `extensions/googlechat/src/setup-surface.ts`
- `extensions/googlechat/src/setup.test.ts`
- `extensions/googlechat/src/targets.test.ts`
- `extensions/googlechat/src/types.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
