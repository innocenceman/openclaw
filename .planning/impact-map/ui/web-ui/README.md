# Web UI

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G007 split and validation evidence

## Scope

Control UI source under `ui/`, including the app shell, controllers/views, i18n, public assets, styles, types, build config, and the nearest committed UI test surfaces.

## Detail files

- `file-roles.md`: file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Leaf coverage

| Leaf             | Coverage                   | Why it matters                                                              |
| ---------------- | -------------------------- | --------------------------------------------------------------------------- |
| `components/`    | `exceptioned-deep-partial` | App shell, controllers, and views under `ui/src/ui/**`.                     |
| `i18n/`          | `exceptioned-deep-partial` | Locale registry, lazy locale loading, translation resources/tests.          |
| `public-assets/` | `exceptioned-deep-partial` | HTML boot shell and favicon/apple-touch assets.                             |
| `styles-types/`  | `exceptioned-deep-partial` | Global style import graph and local type declarations for UI build/runtime. |

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `8` (新增 4，修改 4).
- Target-existing changed paths listed here: `8`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `ui/AGENTS.md`
- `ui/CLAUDE.md`
- `ui/src/markdown-it-task-lists.d.ts`
- `ui/src/test-helpers/load-styles.ts`
- `ui/src/test-helpers/storage.ts`
- `ui/vite.config.ts`
- `ui/vitest.config.ts`
- `ui/vitest.node.config.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
