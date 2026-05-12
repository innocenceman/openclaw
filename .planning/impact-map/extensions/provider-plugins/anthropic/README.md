# Anthropic Provider Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled provider plugin `extensions/anthropic/` registering provider id `anthropic` with setup-token and API-key auth plus image media-understanding support.

## Why this remains one leaf

Anthropic keeps its main behavior in one entrypoint file, but the single manifest/package/entrypoint boundary is still the smallest reliable owner for auth, model aliasing, and media registration.

## Entry contracts

- Plugin id and provider id: `anthropic` from `extensions/anthropic/openclaw.plugin.json`.
- Package/install contract: `@openclaw/anthropic-provider` from `extensions/anthropic/package.json`.
- Loader boundary: `extensions/anthropic/index.ts` registers auth methods, provider capabilities, and the media-understanding provider.

## Primary behavior surfaces

- `extensions/anthropic/index.ts`: setup-token and API-key auth, profile repair hints, forward-compat model aliasing, provider family capability flags, and media registration.
- `extensions/anthropic/media-understanding-provider.ts`: image-description provider registration for Anthropic media support.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; Anthropic-related command/contract tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-anthropic.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/test-contracts-plugins.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; Anthropic-related command/contract tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `model-provider-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `29` (修改 11，新增 16，删除 2).
- Target-existing changed paths listed here: `27`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `2`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/anthropic/api.ts`
- `extensions/anthropic/cli-auth-seam.ts`
- `extensions/anthropic/cli-backend-api.ts`
- `extensions/anthropic/cli-backend.ts`
- `extensions/anthropic/cli-constants.ts`
- `extensions/anthropic/cli-migration.test.ts`
- `extensions/anthropic/cli-migration.ts`
- `extensions/anthropic/cli-shared.test.ts`
- `extensions/anthropic/cli-shared.ts`
- `extensions/anthropic/config-defaults.ts`
- `extensions/anthropic/contract-api.ts`
- `extensions/anthropic/index.test.ts`
- `... 另有 15 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `model-provider-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `17`
- Target-existing changed paths reflected here: `17`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/anthropic/cli-backend.ts`
- `extensions/anthropic/cli-migration.test.ts`
- `extensions/anthropic/cli-migration.ts`
- `extensions/anthropic/cli-shared.test.ts`
- `extensions/anthropic/cli-shared.ts`
- `extensions/anthropic/config-defaults.ts`
- `extensions/anthropic/doctor-contract-api.ts`
- `extensions/anthropic/index.test.ts`
- `extensions/anthropic/openclaw.plugin.json`
- `extensions/anthropic/package.json`
- `extensions/anthropic/provider-discovery.ts`
- `extensions/anthropic/provider-policy-api.test.ts`
- `extensions/anthropic/provider-policy-api.ts`
- `extensions/anthropic/provider-runtime.contract.test.ts`
- `extensions/anthropic/register.runtime.ts`
- `extensions/anthropic/stream-wrappers.test.ts`
- `extensions/anthropic/stream-wrappers.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
