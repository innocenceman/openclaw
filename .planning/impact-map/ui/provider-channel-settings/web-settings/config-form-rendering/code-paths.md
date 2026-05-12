# Web Config Form Rendering Code Paths

Coverage: `exceptioned-deep-partial`

| Path                    | Trace start                                                                                                         | Likely downstream impact                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Owned web settings path | `ui/src/ui/controllers/config.ts`, `ui/src/ui/views/config.ts`, `ui/src/ui/views/config-form.ts`, `app-settings.ts` | Form/card rendering, provider/channel list ordering, config persistence, local state, or cross-surface parity. |
| Gateway/API edge        | `controllers/config.ts`, `controllers/channels.ts`, gateway config/channel endpoints                                | Save/apply/status behavior and response-shape assumptions.                                                     |

## Trace rule

Start with the controller/view/helper that owns the setting; widen to app shell only when the setting affects route visibility or global state.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `1` changed path(s) to this final leaf. `1` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 1}`.

- `ui/src/ui/app-settings.test.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
