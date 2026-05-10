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
