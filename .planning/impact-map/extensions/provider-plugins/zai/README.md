# zai Provider Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for provider plugin `extensions/zai` with provider id(s) `zai`.

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
- Changed paths in this leaf: `15` (新增 4，修改 9，删除 2).
- Target-existing changed paths listed here: `13`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `2`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/zai/config-api.ts`
- `extensions/zai/index.test.ts`
- `extensions/zai/index.ts`
- `extensions/zai/media-understanding-provider.ts`
- `extensions/zai/model-definitions.test.ts`
- `extensions/zai/model-definitions.ts`
- `extensions/zai/onboard.test.ts`
- `extensions/zai/onboard.ts`
- `extensions/zai/openclaw.plugin.json`
- `extensions/zai/package.json`
- `extensions/zai/provider-runtime.contract.test.ts`
- `extensions/zai/test-api.ts`
- `... 另有 1 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `model-provider-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `9`
- Target-existing changed paths reflected here: `9`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/zai/detect.ts`
- `extensions/zai/index.test.ts`
- `extensions/zai/index.ts`
- `extensions/zai/model-definitions.ts`
- `extensions/zai/onboard.test.ts`
- `extensions/zai/onboard.ts`
- `extensions/zai/openclaw.plugin.json`
- `extensions/zai/package.json`
- `extensions/zai/provider-runtime.contract.test.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
