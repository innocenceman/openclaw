# Web Provider and Channel Settings Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path                             | Trace start                                                                                                  | Likely downstream impact                                                        |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| Config schema to rendered form   | `ui/src/ui/controllers/config.ts` -> `ui/src/ui/views/config.ts` -> `ui/src/ui/views/config-form.ts`         | Schema-driven form layout, save/apply behavior, config-ui hint drift.           |
| Channel snapshot to config cards | `ui/src/ui/controllers/channels.ts` -> `ui/src/ui/views/channels.ts` -> `ui/src/ui/views/channels.config.ts` | Channel status visibility, config editing, provider/channel list ordering.      |
| Local navigation/settings path   | `ui/src/ui/navigation.ts`, `ui/src/ui/app-settings.ts`                                                       | Which settings slices are reachable and how UI state persists between sessions. |
| Cross-platform settings parity   | This leaf + `apps/provider-channel-settings/native-settings/`                                                | Divergence between web and native config/channel surfaces.                      |

## Trace rule

Start with controller/view pairs before widening into the broader web-ui shell.
