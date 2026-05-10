# Web Navigation, Usage, and Local State Code Paths

Coverage: `exceptioned-deep-partial`

| Path                 | Trace start                                                                                                                    | Likely downstream impact                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Owned web path       | `navigation.ts`, `app-render-usage-tab.ts`, `storage.ts`, `theme.ts`, `usage-*.ts`, `external-link.ts`, `open-external-url.ts` | Gateway lifecycle, chat/tool behavior, config/channel settings, route visibility, usage/local state, or browser safety. |
| Controller/view edge | `ui/src/ui/controllers/**` -> `ui/src/ui/views/**`                                                                             | RPC-backed state and rendered form/card parity.                                                                         |

## Trace rule

Begin with the smallest handler/controller/view pair, then widen to `app.ts` only when behavior crosses tab, lifecycle, or global app-state boundaries.
