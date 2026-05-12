# OpenRouter Provider Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled provider plugin `extensions/openrouter/` registering provider id `openrouter` with API-key auth, dynamic model capabilities, provider-routing injection, and catalog helpers.

## Why this remains one leaf

OpenRouter remains one leaf because dynamic model resolution, auth, routing wrappers, and provider catalog all ship from one small plugin package `@openclaw/openrouter-provider`.

## Entry contracts

- Plugin id and provider id: `openrouter` from `extensions/openrouter/openclaw.plugin.json` and `index.ts`.
- Package/install contract: `@openclaw/openrouter-provider` from `extensions/openrouter/package.json`.
- Loader boundary: `extensions/openrouter/index.ts` registers auth, catalog, dynamic model preparation, transport wrappers, and cache-TTL eligibility.

## Primary behavior surfaces

- `extensions/openrouter/index.ts`: API-key auth, dynamic model building, capability prefetch, provider routing injection, OpenRouter wrappers, and cache-TTL eligibility.
- `extensions/openrouter/onboard.ts`: config defaults and onboarding model selection helpers.
- `extensions/openrouter/provider-catalog.ts`: base provider catalog entries and default model metadata.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; OpenRouter tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-openrouter.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; OpenRouter provider tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `model-provider-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `21` (修改 9，新增 10，删除 2).
- Target-existing changed paths listed here: `19`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `2`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/openrouter/api.ts`
- `extensions/openrouter/image-generation-provider.test.ts`
- `extensions/openrouter/image-generation-provider.ts`
- `extensions/openrouter/index.test.ts`
- `extensions/openrouter/index.ts`
- `extensions/openrouter/media-understanding-provider.ts`
- `extensions/openrouter/onboard.test.ts`
- `extensions/openrouter/openclaw.plugin.json`
- `extensions/openrouter/openrouter.live.test.ts`
- `extensions/openrouter/package.json`
- `extensions/openrouter/provider-catalog.ts`
- `extensions/openrouter/provider-contract-api.ts`
- `... 另有 7 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `model-provider-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `18`
- Target-existing changed paths reflected here: `17`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

- `extensions/openrouter/api.ts`
- `extensions/openrouter/image-generation-provider.ts`
- `extensions/openrouter/index.test.ts`
- `extensions/openrouter/index.ts`
- `extensions/openrouter/models.ts`
- `extensions/openrouter/onboard.test.ts`
- `extensions/openrouter/openclaw.plugin.json`
- `extensions/openrouter/openrouter.live.test.ts`
- `extensions/openrouter/package.json`
- `extensions/openrouter/provider-catalog.ts`
- `extensions/openrouter/provider-policy-api.ts`
- `extensions/openrouter/provider-runtime.contract.test.ts`
- `extensions/openrouter/speech-provider.ts`
- `extensions/openrouter/stream.ts`
- `extensions/openrouter/thinking-policy.ts`
- `extensions/openrouter/video-generation-provider.test.ts`
- `extensions/openrouter/video-generation-provider.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
