# Web UI Components File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                                                                   | Role                                                                                                    | Evidence state             | Impact notes                                                                |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | -------------------------- | --------------------------------------------------------------------------- |
| `ui/src/ui/app.ts`                                                             | Top-level custom element, app state shell, and controller wiring.                                       | `exceptioned-deep-partial` | Root of almost every interactive UI path.                                   |
| `ui/src/ui/controllers/**`                                                     | Gateway-backed state loaders/mutators for config, channels, agents, logs, cron, nodes, usage, and more. | `exceptioned-deep-partial` | High coupling to RPC/API behavior.                                          |
| `ui/src/ui/views/**`                                                           | Presentation layer for tabs, settings cards, config forms, and channel cards.                           | `exceptioned-deep-partial` | Primary user-facing rendering surface.                                      |
| `ui/src/ui/chat/**`, `ui/src/ui/app-chat.ts`, `ui/src/ui/app-render.ts`        | Chat rendering, message helpers, and related UI orchestration.                                          | `exceptioned-deep-partial` | Impacts conversation rendering and tool-stream UX.                          |
| `ui/src/ui/navigation.ts`, `ui/src/ui/app-settings.ts`, `ui/src/ui/storage.ts` | Navigation groups, tab routing, and local control-ui settings persistence.                              | `exceptioned-deep-partial` | Determines which slices are reachable and how local state survives reloads. |
| `ui/src/ui/components/**`                                                      | Smaller reusable UI pieces such as dashboard header and resizable divider.                              | `exceptioned-deep-partial` | Shared layout/support widgets within the shell.                             |

## Update rule

If a future wave carves chat or agent panels into an independently maintained slice, split this leaf rather than overloading the generic components label.
