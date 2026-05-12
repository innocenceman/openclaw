# Web App Shell and Lifecycle

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted UI validation

## Scope

Lit app host, gateway connect/disconnect, polling, app defaults, view state, and terminal/chat event ingress.

## Leaf status

G007 passed `pnpm ui:build` and `pnpm lint:ui:no-raw-window-open`; `pnpm --dir ui test` executed 535 passing tests but exited 1 because Vitest reported unhandled gateway mock and loopback `EPERM` errors. Raw logs are recorded under `evidence/apps-ui-verified-wave-2026-05-09/logs/`.

## Detail files

- `file-roles.md`: concrete path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `53` (修改 31，新增 17，删除 5).
- Target-existing changed paths listed here: `48`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `5`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 36 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `memory-media-ui`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `fallback`
- Changed paths in diff: `51`
- Target-existing changed paths reflected here: `48`
- Deleted or renamed-away paths omitted from active impact-map: `3`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
