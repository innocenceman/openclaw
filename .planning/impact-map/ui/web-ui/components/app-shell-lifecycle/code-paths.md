# Web App Shell and Lifecycle Code Paths

Coverage: `exceptioned-deep-partial`

| Path                 | Trace start                                                                                     | Likely downstream impact                                                                                                |
| -------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Owned web path       | `ui/src/ui/app.ts`, `app-lifecycle.ts`, `app-gateway.ts`, `app-polling.ts`, `app-view-state.ts` | Gateway lifecycle, chat/tool behavior, config/channel settings, route visibility, usage/local state, or browser safety. |
| Controller/view edge | `ui/src/ui/controllers/**` -> `ui/src/ui/views/**`                                              | RPC-backed state and rendered form/card parity.                                                                         |

## Trace rule

Begin with the smallest handler/controller/view pair, then widen to `app.ts` only when behavior crosses tab, lifecycle, or global app-state boundaries.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `53` changed path(s) to this final leaf. `48` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 31, 'A': 17, 'D': 5}`.

- `src/canvas-host/a2ui.ts`
- `src/canvas-host/a2ui/.bundle.hash`
- `src/canvas-host/a2ui/a2ui.bundle.js`
- `src/canvas-host/a2ui/index.html`
- `src/canvas-host/server.test.ts`
- `src/canvas-host/server.ts`
- `ui/src/ui/app-gateway.node.test.ts`
- `ui/src/ui/app-gateway.sessions.node.test.ts`
- `ui/src/ui/app-lifecycle-connect.node.test.ts`
- `ui/src/ui/app-lifecycle.node.test.ts`
- `ui/src/ui/app-tool-stream.node.test.ts`
- `ui/src/ui/canvas-url.test.ts`
- `ui/src/ui/chat-event-reload.test.ts`
- `ui/src/ui/chat-model-ref.test.ts`
- `ui/src/ui/chat-model-select-state.test.ts`
- `ui/src/ui/chat/build-chat-items.test.ts`
- `ui/src/ui/chat/export.node.test.ts`
- `ui/src/ui/chat/grouped-render.test.ts`
- `ui/src/ui/chat/message-extract.test.ts`
- `ui/src/ui/chat/message-normalizer.test.ts`
- `ui/src/ui/chat/run-controls.test.ts`
- `ui/src/ui/chat/slash-command-executor.node.test.ts`
- `ui/src/ui/chat/slash-commands.node.test.ts`
- `ui/src/ui/chat/tool-cards.test.ts`
- `ui/src/ui/chat/tool-expansion-state.test.ts`
- `ui/src/ui/config-form.browser.test.ts`
- `ui/src/ui/navigation-groups.test.ts`
- `... 另有 18 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/canvas-host/a2ui-shared.ts`
- `src/canvas-host/a2ui.ts`
- `src/canvas-host/a2ui/.bundle.hash`
- `src/canvas-host/a2ui/a2ui.bundle.js`
- `src/canvas-host/server.test.ts`
- `src/canvas-host/server.ts`
- `ui/src/ui/app-defaults.test.ts`
- `ui/src/ui/app-gateway-chat-load.node.test.ts`
- `ui/src/ui/app-gateway.node.test.ts`
- `ui/src/ui/app-gateway.sessions.node.test.ts`
- `ui/src/ui/app-scroll.test.ts`
- `ui/src/ui/app.talk.test.ts`
- `ui/src/ui/assistant-identity.test.ts`
- `ui/src/ui/chat-event-reload.test.ts`
- `ui/src/ui/chat/build-chat-items.test.ts`
- `ui/src/ui/chat/chat-avatar.test.ts`
- `ui/src/ui/chat/chat-responsive.browser.test.ts`
- `ui/src/ui/chat/grouped-render.test.ts`
- `ui/src/ui/chat/history-merge.test.ts`
- `ui/src/ui/chat/message-normalizer.test.ts`
- `ui/src/ui/chat/role-normalizer.test.ts`
- `ui/src/ui/chat/run-controls.test.ts`
- `ui/src/ui/chat/slash-command-executor.node.test.ts`
- `ui/src/ui/chat/slash-commands.node.test.ts`
- `ui/src/ui/chat/tool-cards.test.ts`
- `ui/src/ui/config-form.browser.test.ts`
- `ui/src/ui/control-ui-performance.test.ts`
- `ui/src/ui/gateway.node.test.ts`
- `ui/src/ui/lazy-view.browser.test.ts`
- `ui/src/ui/markdown.test.ts`
- `ui/src/ui/realtime-talk-google-live.test.ts`
- `ui/src/ui/realtime-talk-webrtc.test.ts`
- `ui/src/ui/realtime-talk.test.ts`
- `ui/src/ui/usage-cache-status.test.ts`
- `ui/src/ui/views/agents-utils.test.ts`
- `ui/src/ui/views/agents.test.ts`
- `ui/src/ui/views/chat.test.ts`
- `ui/src/ui/views/command-palette.test.ts`
- `ui/src/ui/views/config-presets.test.ts`
- `ui/src/ui/views/config-quick.test.ts`
- … plus 8 more target-existing changed paths.

Deleted or renamed-away paths omitted from this active leaf: `3`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
