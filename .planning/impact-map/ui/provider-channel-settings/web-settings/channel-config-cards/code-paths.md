# Web Channel Config Cards Code Paths

Coverage: `exceptioned-deep-partial`

| Path                    | Trace start                                                                            | Likely downstream impact                                                                                       |
| ----------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Owned web settings path | `ui/src/ui/controllers/channels.ts`, `ui/src/ui/views/channels*.ts`, `app-channels.ts` | Form/card rendering, provider/channel list ordering, config persistence, local state, or cross-surface parity. |
| Gateway/API edge        | `controllers/config.ts`, `controllers/channels.ts`, gateway config/channel endpoints   | Save/apply/status behavior and response-shape assumptions.                                                     |

## Trace rule

Start with the controller/view/helper that owns the setting; widen to app shell only when the setting affects route visibility or global state.
