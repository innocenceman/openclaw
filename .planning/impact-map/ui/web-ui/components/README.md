# Web UI Components

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G007 split and validation evidence

## Scope

Leaf module for `ui/src/ui/**`, including the app shell, controllers, views, navigation, chat helpers, and local browser-state handling.

## Leaf status

This is a Wave 3 priority completion unit because it owns the main control-ui behavior surface that users interact with after the HTML/CSS shell boots.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `83` (修改 63，新增 20).
- Target-existing changed paths listed here: `83`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 71 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `memory-media-ui`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `81`
- Target-existing changed paths reflected here: `80`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
