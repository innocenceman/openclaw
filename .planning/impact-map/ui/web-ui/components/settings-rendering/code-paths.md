# Web Settings Rendering Code Paths

Coverage: `exceptioned-deep-partial`

| Path                 | Trace start                                                                                                                                          | Likely downstream impact                                                                                                |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Owned web path       | `app-settings.ts`, `app-channels.ts`, `app-render*.ts`, `views/config*.ts`, `views/channels*.ts`, `controllers/config.ts`, `controllers/channels.ts` | Gateway lifecycle, chat/tool behavior, config/channel settings, route visibility, usage/local state, or browser safety. |
| Controller/view edge | `ui/src/ui/controllers/**` -> `ui/src/ui/views/**`                                                                                                   | RPC-backed state and rendered form/card parity.                                                                         |

## Trace rule

Begin with the smallest handler/controller/view pair, then widen to `app.ts` only when behavior crosses tab, lifecycle, or global app-state boundaries.
