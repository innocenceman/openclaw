# Web Provider and Channel Settings File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                                                                                        | Role                                                                 | Evidence state             | Impact notes                                                                |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------- | --------------------------------------------------------------------------- |
| `ui/src/ui/controllers/config.ts`                                                                   | Config load/save/apply controller and form state coordinator.        | `exceptioned-deep-partial` | Core web config mutation boundary.                                          |
| `ui/src/ui/views/config.ts`, `ui/src/ui/views/config-form.ts`, `ui/src/ui/views/channels.config.ts` | Schema-driven config form rendering and per-channel config sections. | `exceptioned-deep-partial` | High drift risk when config schema or channel fields change.                |
| `ui/src/ui/controllers/channels.ts`                                                                 | Channel status fetch and WhatsApp login/logout/wait flows.           | `exceptioned-deep-partial` | Touches live channel status UX and operator-read gating.                    |
| `ui/src/ui/views/channels.ts`                                                                       | Channel cards, ordering, and status/config presentation.             | `exceptioned-deep-partial` | User-facing provider/channel surface in the dashboard.                      |
| `ui/src/ui/app-settings.ts`, `ui/src/ui/navigation.ts`                                              | Local UI settings persistence and routing into settings slices.      | `exceptioned-deep-partial` | Controls how users reach config/channels pages and preserve local settings. |

## Update rule

Update this leaf alongside `apps/provider-channel-settings/native-settings/` and docs-sync whenever the user-facing provider/channel surface changes.
