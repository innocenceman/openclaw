# Web UI Styles and Types Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path                            | Trace start                                                                          | Likely downstream impact                                    |
| ------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| Root style import graph         | `ui/src/styles.css`                                                                  | Which CSS bundles load and in what order.                   |
| Global layout/component styling | `ui/src/styles/base.css`, `ui/src/styles/layout.css`, `ui/src/styles/components.css` | Shared layout, spacing, tokens, panel/chrome behavior.      |
| Feature-style path              | `ui/src/styles/config.css`, `ui/src/styles/usage.css`, `ui/src/styles/chat/**`       | Page- or feature-specific visual regressions.               |
| Type-support path               | `ui/src/types/create-markdown-preview.d.ts`, `ui/src/css.d.ts`                       | Build-time import typing and preview integration stability. |

## Trace rule

Start with `styles.css` to confirm import order before narrowing to the feature stylesheet that actually owns the regression.
