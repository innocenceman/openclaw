# Web UI Components Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path                           | Trace start                                                                    | Likely downstream impact                                                                      |
| ------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| App boot to controller wiring  | `ui/src/ui/app.ts`                                                             | Gateway connection lifecycle, tab state, global settings hydration, controller orchestration. |
| Controller fetch/mutate path   | `ui/src/ui/controllers/**`                                                     | RPC-backed state loading, config save/apply, channel status, logs, cron, agents, usage.       |
| View rendering path            | `ui/src/ui/views/**`                                                           | Which data becomes visible and editable in each tab.                                          |
| Chat shell path                | `ui/src/ui/app-chat.ts`, `ui/src/ui/chat/**`, `ui/src/ui/app-render.ts`        | Conversation UX, attachments, slash commands, tool output, scroll behavior.                   |
| Navigation/local settings path | `ui/src/ui/navigation.ts`, `ui/src/ui/app-settings.ts`, `ui/src/ui/storage.ts` | Route resolution, sidebar structure, persisted gateway/token/theme/session settings.          |

## Trace rule

Begin with the smallest controller/view pair that owns the changed behavior, then widen to `app.ts` only if the issue crosses tab or app-shell boundaries.
