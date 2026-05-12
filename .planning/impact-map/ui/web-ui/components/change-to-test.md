# Web UI Components Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                                     | First validation | Escalation trigger                                                                             |
| ----------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------- |
| Controller or view logic changed                | `pnpm test:ui`   | Escalate to `pnpm ui:build` when the change affects bundled output or route-wide rendering.    |
| Chat, navigation, or app-shell behavior changed | `pnpm test:ui`   | Escalate to broader browser smoke when the change crosses multiple tabs or shared shell state. |
| Local settings persistence changed              | `pnpm test:ui`   | Escalate to manual browser-state verification when token/theme/session hydration changes.      |

## Validation evidence

No UI tests or builds were run while promoting this leaf. Commands were verified from root `package.json` and `ui/package.json`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `83` (修改 63，新增 20).
- Target-existing path refs in active map: `83`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
