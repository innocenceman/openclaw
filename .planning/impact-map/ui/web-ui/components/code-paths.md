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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `83` changed path(s) to this final leaf. `83` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 63, 'A': 20}`.

- `ui/src/ui/app-chat.test.ts`
- `ui/src/ui/app-chat.ts`
- `ui/src/ui/app-render.helpers.browser.test.ts`
- `ui/src/ui/app-render.helpers.node.test.ts`
- `ui/src/ui/app-render.helpers.ts`
- `ui/src/ui/app-render.ts`
- `ui/src/ui/app.ts`
- `ui/src/ui/chat/build-chat-items.ts`
- `ui/src/ui/chat/context-notice.ts`
- `ui/src/ui/chat/grouped-render.ts`
- `ui/src/ui/chat/message-extract.ts`
- `ui/src/ui/chat/message-normalizer.ts`
- `ui/src/ui/chat/realtime-talk.ts`
- `ui/src/ui/chat/run-controls.ts`
- `ui/src/ui/chat/search-match.ts`
- `ui/src/ui/chat/session-controls.ts`
- `ui/src/ui/chat/side-result-render.ts`
- `ui/src/ui/chat/side-result.ts`
- `ui/src/ui/chat/slash-command-executor.ts`
- `ui/src/ui/chat/slash-commands.ts`
- `ui/src/ui/chat/status-indicators.ts`
- `ui/src/ui/chat/tool-cards.ts`
- `ui/src/ui/chat/tool-expansion-state.ts`
- `ui/src/ui/components/dashboard-header.ts`
- `ui/src/ui/components/resizable-divider.ts`
- `ui/src/ui/controllers/agents.test.ts`
- `ui/src/ui/controllers/agents.ts`
- `ui/src/ui/controllers/chat.test.ts`
- `ui/src/ui/controllers/chat.ts`
- `ui/src/ui/controllers/config/form-utils.node.test.ts`
- `... 另有 53 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `ui/src/ui/app-chat.test.ts`
- `ui/src/ui/app-chat.ts`
- `ui/src/ui/app-render.assistant-avatar.test.ts`
- `ui/src/ui/app-render.helpers.browser.test.ts`
- `ui/src/ui/app-render.helpers.node.test.ts`
- `ui/src/ui/app-render.helpers.ts`
- `ui/src/ui/app-render.ts`
- `ui/src/ui/app.ts`
- `ui/src/ui/chat/attachment-payload-store.ts`
- `ui/src/ui/chat/attachment-support.ts`
- `ui/src/ui/chat/build-chat-items.ts`
- `ui/src/ui/chat/chat-avatar.ts`
- `ui/src/ui/chat/chat-queue.ts`
- `ui/src/ui/chat/chat-sidebar-raw.ts`
- `ui/src/ui/chat/chat-welcome.ts`
- `ui/src/ui/chat/grouped-render.ts`
- `ui/src/ui/chat/history-limits.ts`
- `ui/src/ui/chat/input-history.ts`
- `ui/src/ui/chat/message-extract.ts`
- `ui/src/ui/chat/message-normalizer.ts`
- `ui/src/ui/chat/realtime-talk-audio.ts`
- `ui/src/ui/chat/realtime-talk-gateway-relay.ts`
- `ui/src/ui/chat/realtime-talk-google-live.ts`
- `ui/src/ui/chat/realtime-talk-shared.ts`
- `ui/src/ui/chat/realtime-talk-webrtc.ts`
- `ui/src/ui/chat/realtime-talk.ts`
- `ui/src/ui/chat/role-normalizer.ts`
- `ui/src/ui/chat/session-cache.ts`
- `ui/src/ui/chat/session-controls.ts`
- `ui/src/ui/chat/slash-command-executor.ts`
- `ui/src/ui/chat/slash-commands.browser-import.test.ts`
- `ui/src/ui/chat/tool-cards.node.test.ts`
- `ui/src/ui/chat/tool-cards.ts`
- `ui/src/ui/chat/tool-expansion-state.ts`
- `ui/src/ui/components/dashboard-header.ts`
- `ui/src/ui/components/modal-dialog.test.ts`
- `ui/src/ui/components/modal-dialog.ts`
- `ui/src/ui/components/resizable-divider.test.ts`
- `ui/src/ui/components/resizable-divider.ts`
- `ui/src/ui/controllers/agents.test.ts`
- … plus 40 more target-existing changed paths.

Deleted or renamed-away paths omitted from this active leaf: `1`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
