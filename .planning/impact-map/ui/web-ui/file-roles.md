# Web UI File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                                                                  | Role                                                                         | Evidence state             | Notes                                              |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------- | -------------------------------------------------- |
| `ui/package.json`, `ui/vite.config.ts`, `ui/vitest.config.ts`                 | Control UI package/build/test entrypoints.                                   | `exceptioned-deep-partial` | Governs local build/test commands and output path. |
| `ui/src/main.ts`, `ui/src/ui/app.ts`                                          | Browser entrypoint and top-level custom element/app state shell.             | `exceptioned-deep-partial` | Root runtime surface for the dashboard.            |
| `ui/src/ui/**`                                                                | Main controllers, views, chat, navigation, and UI helpers.                   | `exceptioned-deep-partial` | Covered in more detail by `components/`.           |
| `ui/src/i18n/**`                                                              | Locale registry, translation loading, translation tests.                     | `exceptioned-deep-partial` | Covered in more detail by `i18n/`.                 |
| `ui/public/**`, `ui/index.html`                                               | Public assets and HTML boot shell.                                           | `exceptioned-deep-partial` | Covered in more detail by `public-assets/`.        |
| `ui/src/styles/**`, `ui/src/styles.css`, `ui/src/types/**`, `ui/src/css.d.ts` | Styling/type-support surface for the UI.                                     | `exceptioned-deep-partial` | Covered in more detail by `styles-types/`.         |
| `test/scripts/ui.test.ts`, `test/ui.presenter-next-run.test.ts`               | Repo-level tests that directly cover UI runner or shared presenter behavior. | `exceptioned-deep-partial` | Nearest non-`ui/` tests tied to this subtree.      |

## Update rule

When a change sits squarely inside `ui/src/ui/**`, prefer updating the `components/` leaf instead of adding more generic parent rows.
