# Web UI Styles and Types File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                                                                         | Role                                                                               | Evidence state             | Impact notes                                                 |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------ |
| `ui/src/styles.css`                                                                  | Root stylesheet import hub for layout, components, chat, config, and usage styles. | `exceptioned-deep-partial` | Controls overall CSS bundle composition.                     |
| `ui/src/styles/base.css`, `ui/src/styles/layout.css`, `ui/src/styles/components.css` | Global design tokens and shared layout/component styling.                          | `exceptioned-deep-partial` | Broad visual impact across the dashboard.                    |
| `ui/src/styles/config.css`, `ui/src/styles/usage.css`, `ui/src/styles/chat/**`       | Feature-specific style slices.                                                     | `exceptioned-deep-partial` | Changes affect config, usage, and chat surfaces selectively. |
| `ui/src/types/create-markdown-preview.d.ts`, `ui/src/css.d.ts`                       | Local type declarations for imported CSS/preview modules.                          | `exceptioned-deep-partial` | Build/type stability boundary for UI tooling.                |

## Update rule

If future UI theming work introduces a dedicated theme-system subtree, split it from this leaf instead of expanding the generic styles bucket.
