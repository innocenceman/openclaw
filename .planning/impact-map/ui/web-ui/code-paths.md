# Web UI Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path                       | Trace start                                                                              | Likely downstream impact                                                         |
| -------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| App boot to rendered shell | `ui/src/main.ts` -> `ui/src/ui/app.ts`                                                   | Dashboard boot, gateway connection state, global tabs, local settings hydration. |
| Controllers/views path     | `ui/src/ui/controllers/**`, `ui/src/ui/views/**`                                         | Data fetch, form mutation, rendered cards/panels, routing behavior.              |
| Localization path          | `ui/src/i18n/**`                                                                         | Translated UI copy, lazy locale loading, supported-locale handling.              |
| Style/type support path    | `ui/src/styles.css`, `ui/src/styles/**`, `ui/src/types/**`, `ui/src/css.d.ts`            | Styling drift, build-time typing, global layout behavior.                        |
| Build/test harness path    | `ui/package.json`, `ui/vite.config.ts`, `ui/vitest.config.ts`, `test/scripts/ui.test.ts` | Local UI build/test availability and output layout.                              |

## Trace rule

Start with the owning leaf (`components/`, `i18n/`, `public-assets/`, or `styles-types/`) before widening back out to this parent.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `8` changed path(s) to this final leaf. `8` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 4, 'M': 4}`.

- `ui/AGENTS.md`
- `ui/CLAUDE.md`
- `ui/src/markdown-it-task-lists.d.ts`
- `ui/src/test-helpers/load-styles.ts`
- `ui/src/test-helpers/storage.ts`
- `ui/vite.config.ts`
- `ui/vitest.config.ts`
- `ui/vitest.node.config.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
