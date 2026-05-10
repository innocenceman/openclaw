# Web UI Public Assets Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path                   | Trace start     | Likely downstream impact                                                     |
| ---------------------- | --------------- | ---------------------------------------------------------------------------- |
| HTML boot shell path   | `ui/index.html` | Theme preload, root custom element mount, initial browser document metadata. |
| Static icon asset path | `ui/public/**`  | Favicon/apple-touch asset delivery and browser branding.                     |

## Trace rule

Use this leaf when the change happens before `ui/src/main.ts` executes or when the issue is purely static-asset related.
