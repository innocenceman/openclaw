# Web Provider and Channel Settings

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G007 split and validation evidence

## Scope

Leaf module for the web/control UI provider and channel settings flow under `ui/src/ui/**`, centered on config-schema rendering, channel status/config cards, navigation into settings slices, and local UI settings persistence.

## Leaf status

This is a Wave 3 priority completion unit because it is the web side of provider/channel settings parity and schema-driven configuration.

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
- Changed paths in this leaf: `64` (新增 20，修改 44).
- Target-existing changed paths listed here: `64`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/ui-app-settings.agents-files-refresh.test.ts`
- `ui/package.json`
- `ui/src/ui/app-channels.ts`
- `ui/src/ui/app-gateway.ts`
- `ui/src/ui/app-last-active-session.ts`
- `ui/src/ui/app-lifecycle.ts`
- `ui/src/ui/app-polling.ts`
- `ui/src/ui/app-settings.refresh-active-tab.node.test.ts`
- `ui/src/ui/app-settings.ts`
- `ui/src/ui/app-tool-stream.ts`
- `ui/src/ui/app-view-state.ts`
- `ui/src/ui/canvas-url.ts`
- `... 另有 52 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `memory-media-ui`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `45`
- Target-existing changed paths reflected here: `45`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `ui/package.json`
- `ui/src/ui/app-channels.test.ts`
- `ui/src/ui/app-channels.ts`
- `ui/src/ui/app-defaults.ts`
- `ui/src/ui/app-gateway.ts`
- `ui/src/ui/app-lifecycle.ts`
- `ui/src/ui/app-render-usage-tab.ts`
- `ui/src/ui/app-scroll.ts`
- `ui/src/ui/app-settings.refresh-active-tab.node.test.ts`
- `ui/src/ui/app-settings.ts`
- `ui/src/ui/app-tool-stream.ts`
- `ui/src/ui/app-view-state.ts`
- `ui/src/ui/assistant-identity.ts`
- `ui/src/ui/chat-event-reload.ts`
- `ui/src/ui/chat-model.test-helpers.ts`
- `ui/src/ui/control-ui-performance.ts`
- `ui/src/ui/controllers/config.test.ts`
- `ui/src/ui/controllers/config.ts`
- `ui/src/ui/cron-payload.ts`
- `ui/src/ui/custom-theme.test.ts`
- `ui/src/ui/custom-theme.ts`
- `ui/src/ui/format.test.ts`
- `ui/src/ui/format.ts`
- `ui/src/ui/gateway.ts`
- `ui/src/ui/lazy-view.ts`
- `ui/src/ui/markdown.ts`
- `ui/src/ui/navigation.browser.test.ts`
- `ui/src/ui/push-subscription.ts`
- `ui/src/ui/session-key.ts`
- `ui/src/ui/sidebar-content.ts`
- `ui/src/ui/strip-thinking-tags.ts`
- `ui/src/ui/test-helpers/app-mount.ts`
- `ui/src/ui/theme.ts`
- `ui/src/ui/types.ts`
- `ui/src/ui/types/chat-types.ts`
- `ui/src/ui/ui-types.ts`
- `ui/src/ui/usage-cache-status.ts`
- `ui/src/ui/usage-helpers.ts`
- `ui/src/ui/usage-types.ts`
- `ui/src/ui/uuid.ts`
- … plus 5 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
