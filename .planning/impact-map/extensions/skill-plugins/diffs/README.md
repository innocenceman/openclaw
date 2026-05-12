# diffs Skill Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for `extensions/diffs` (skills=['./skills']).

## Leaf status

This is a leaf module in the impact-map taxonomy: split further only when a single file path inside this leaf develops an independently testable ownership boundary.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `skill-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `30` (修改 22，新增 8).
- Target-existing changed paths listed here: `30`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/diffs/README.md`
- `extensions/diffs/assets/viewer-runtime.js`
- `extensions/diffs/index.ts`
- `extensions/diffs/openclaw.plugin.json`
- `extensions/diffs/package.json`
- `extensions/diffs/runtime-api.ts`
- `extensions/diffs/skills/diffs/SKILL.md`
- `extensions/diffs/src/browser.test.ts`
- `extensions/diffs/src/browser.ts`
- `extensions/diffs/src/config.test.ts`
- `extensions/diffs/src/config.ts`
- `extensions/diffs/src/http.ts`
- `... 另有 18 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `skill-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `14`
- Target-existing changed paths reflected here: `14`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/diffs/api.ts`
- `extensions/diffs/openclaw.plugin.json`
- `extensions/diffs/package.json`
- `extensions/diffs/src/browser.test.ts`
- `extensions/diffs/src/config.test.ts`
- `extensions/diffs/src/config.ts`
- `extensions/diffs/src/manifest.test.ts`
- `extensions/diffs/src/plugin.ts`
- `extensions/diffs/src/store.test.ts`
- `extensions/diffs/src/tool-render-output.test.ts`
- `extensions/diffs/src/tool.test.ts`
- `extensions/diffs/src/tool.ts`
- `extensions/diffs/src/types.ts`
- `extensions/diffs/src/viewer-assets.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
