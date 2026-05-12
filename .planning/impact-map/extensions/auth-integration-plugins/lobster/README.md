# lobster Auth/Integration Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for `extensions/lobster` (manifest/config plugin).

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
- Changed paths in this leaf: `14` (修改 6，新增 7，删除 1).
- Target-existing changed paths listed here: `13`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/lobster/README.md`
- `extensions/lobster/index.ts`
- `extensions/lobster/package.json`
- `extensions/lobster/src/lobster-core.d.ts`
- `extensions/lobster/src/lobster-runner.test.ts`
- `extensions/lobster/src/lobster-runner.ts`
- `extensions/lobster/src/lobster-taskflow.test.ts`
- `extensions/lobster/src/lobster-taskflow.ts`
- `extensions/lobster/src/lobster-tool.test.ts`
- `extensions/lobster/src/lobster-tool.ts`
- `extensions/lobster/src/taskflow-test-helpers.ts`
- `... 另有 1 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `model-provider-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `11`
- Target-existing changed paths reflected here: `10`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

- `extensions/lobster/index.ts`
- `extensions/lobster/openclaw.plugin.json`
- `extensions/lobster/package.json`
- `extensions/lobster/src/lobster-ajv-cache.ts`
- `extensions/lobster/src/lobster-runner.test.ts`
- `extensions/lobster/src/lobster-runner.ts`
- `extensions/lobster/src/lobster-taskflow.ts`
- `extensions/lobster/src/lobster-tool.test.ts`
- `extensions/lobster/src/lobster-tool.ts`
- `extensions/lobster/src/taskflow-test-helpers.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
