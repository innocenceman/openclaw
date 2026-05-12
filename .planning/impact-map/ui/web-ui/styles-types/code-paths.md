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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `18` changed path(s) to this final leaf. `18` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 11, 'A': 7}`.

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
- `ui/src/styles/config.css`
- `ui/src/styles/cron-quick-create.css`
- `ui/src/styles/dreams.css`
- `ui/src/styles/layout.css`
- `ui/src/styles/layout.mobile.css`
- `ui/src/styles/layout.mobile.test.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `ui/src/styles/base.css`
- `ui/src/styles/chat/grouped.css`
- `ui/src/styles/chat/layout.css`
- `ui/src/styles/chat/sidebar.css`
- `ui/src/styles/chat/text.css`
- `ui/src/styles/chat/tool-cards.css`
- `ui/src/styles/components.css`
- `ui/src/styles/components.test.ts`
- `ui/src/styles/config-quick.css`
- `ui/src/styles/config-quick.test.ts`
- `ui/src/styles/config.css`
- `ui/src/styles/layout.css`
- `ui/src/styles/layout.mobile.css`
- `ui/src/styles/layout.mobile.test.ts`
- `ui/src/styles/markdown-preview.test.ts`
- `ui/src/styles/usage.css`
<!-- version-diff-refresh:v2026.5.4:end -->
