# Web UI Public Assets Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path                   | Trace start     | Likely downstream impact                                                     |
| ---------------------- | --------------- | ---------------------------------------------------------------------------- |
| HTML boot shell path   | `ui/index.html` | Theme preload, root custom element mount, initial browser document metadata. |
| Static icon asset path | `ui/public/**`  | Favicon/apple-touch asset delivery and browser branding.                     |

## Trace rule

Use this leaf when the change happens before `ui/src/main.ts` executes or when the issue is purely static-asset related.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `2` changed path(s) to this final leaf. `2` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 2}`.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `ui/index.html`
- `ui/public/manifest.webmanifest`
- `ui/public/sw.js`
- `ui/src/main.ts`

Deleted or renamed-away paths omitted from this active leaf: `2`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
