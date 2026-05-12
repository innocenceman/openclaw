# Web App Shell and Lifecycle Change-to-Test

Coverage: `exceptioned-deep-partial`

1. Run the closest `ui/src/ui/*test.ts` file for the changed helper/controller/view.
2. Run `pnpm --dir ui test` for unit/browser/node coverage.
3. Run `pnpm ui:build` for Vite/package compile.
4. Run `pnpm lint:ui:no-raw-window-open` when browser navigation/external URL behavior changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `53` (修改 31，新增 17，删除 5).
- Target-existing path refs in active map: `48`; deleted/renamed-away refs kept only in transition artifacts: `5`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
