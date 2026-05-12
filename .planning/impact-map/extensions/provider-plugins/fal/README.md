# fal Provider Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for provider plugin `extensions/fal` with provider id(s) `fal`.

## Leaf status

This is a leaf module in the impact-map taxonomy: split further only when a single file path inside this leaf develops an independently testable ownership boundary.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `model-provider-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `13` (修改 6，新增 6，删除 1).
- Target-existing changed paths listed here: `12`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/fal/image-generation-provider.test.ts`
- `extensions/fal/image-generation-provider.ts`
- `extensions/fal/index.ts`
- `extensions/fal/openclaw.plugin.json`
- `extensions/fal/package.json`
- `extensions/fal/plugin-registration.contract.test.ts`
- `extensions/fal/provider-contract-api.ts`
- `extensions/fal/provider-registration.ts`
- `extensions/fal/test-api.ts`
- `extensions/fal/tsconfig.json`
- `extensions/fal/video-generation-provider.test.ts`
- `extensions/fal/video-generation-provider.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `model-provider-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `7`
- Target-existing changed paths reflected here: `7`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/fal/image-generation-provider.test.ts`
- `extensions/fal/image-generation-provider.ts`
- `extensions/fal/openclaw.plugin.json`
- `extensions/fal/package.json`
- `extensions/fal/plugin-registration.contract.test.ts`
- `extensions/fal/video-generation-provider.test.ts`
- `extensions/fal/video-generation-provider.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
