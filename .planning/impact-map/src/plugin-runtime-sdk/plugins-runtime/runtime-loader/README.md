# Runtime Loader Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `plugins-runtime/`
- Leaf: `runtime-loader/`

## Purpose

Plugin discovery, install/update/uninstall, registry loading, and runtime entry setup.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `plugin-sdk-core`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `4` (修改 4).
- Target-existing changed paths listed here: `4`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/plugins/manifest-registry.test.ts`
- `src/plugins/manifest-registry.ts`
- `src/plugins/runtime/index.test.ts`
- `src/plugins/runtime/index.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `plugin-sdk-core`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `4`
- Target-existing changed paths reflected here: `4`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/plugins/manifest-registry.test.ts`
- `src/plugins/manifest-registry.ts`
- `src/plugins/runtime/index.test.ts`
- `src/plugins/runtime/index.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
