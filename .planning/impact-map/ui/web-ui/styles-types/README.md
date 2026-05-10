# Web UI Styles and Types

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## Scope

Leaf module for `ui/src/styles/**`, `ui/src/styles.css`, `ui/src/types/**`, and `ui/src/css.d.ts`.

## Leaf status

This is a Wave 3 priority completion unit because it owns the control UI's global style import graph and the local type declarations that keep the build/runtime contract coherent.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `18` (修改 11，新增 7).
- Target-existing changed paths listed here: `18`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `ui/src/styles.css`
- `ui/src/styles/base.css`
- `ui/src/styles/chat/grouped.css`
- `ui/src/styles/chat/layout.css`
- `ui/src/styles/chat/layout.test.ts`
- `ui/src/styles/chat/sidebar.css`
- `ui/src/styles/chat/text.css`
- `ui/src/styles/chat/tool-cards.css`
- `ui/src/styles/components.css`
- `ui/src/styles/components.test.ts`
- `ui/src/styles/config-quick.css`
- `ui/src/styles/config-quick.test.ts`
- `... 另有 6 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
