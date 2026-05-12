# amazon-bedrock Provider Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for provider plugin `extensions/amazon-bedrock` with provider id(s) `amazon-bedrock`.

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
- Changed paths in this leaf: `17` (新增 11，修改 5，删除 1).
- Target-existing changed paths listed here: `16`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/amazon-bedrock/config-api.ts`
- `extensions/amazon-bedrock/config-compat.test.ts`
- `extensions/amazon-bedrock/config-compat.ts`
- `extensions/amazon-bedrock/discovery.test.ts`
- `extensions/amazon-bedrock/discovery.ts`
- `extensions/amazon-bedrock/embedding-provider.test.ts`
- `extensions/amazon-bedrock/embedding-provider.ts`
- `extensions/amazon-bedrock/index.test.ts`
- `extensions/amazon-bedrock/index.ts`
- `extensions/amazon-bedrock/memory-embedding-adapter.test.ts`
- `extensions/amazon-bedrock/memory-embedding-adapter.ts`
- `extensions/amazon-bedrock/openclaw.plugin.json`
- `... 另有 4 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `model-provider-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `10`
- Target-existing changed paths reflected here: `10`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/amazon-bedrock/api.ts`
- `extensions/amazon-bedrock/discovery-shared.ts`
- `extensions/amazon-bedrock/discovery.ts`
- `extensions/amazon-bedrock/embedding-provider.ts`
- `extensions/amazon-bedrock/index.test.ts`
- `extensions/amazon-bedrock/lazy-import.test.ts`
- `extensions/amazon-bedrock/openclaw.plugin.json`
- `extensions/amazon-bedrock/package.json`
- `extensions/amazon-bedrock/register.sync.runtime.ts`
- `extensions/amazon-bedrock/setup-api.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
