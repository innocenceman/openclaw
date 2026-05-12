# Web Provider and Channel Settings Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                          | First validation                                                     | Escalation trigger                                                                                           |
| ------------------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Config form/controller logic changed | `pnpm test:ui`                                                       | Escalate to `pnpm ui:build` when schema rendering or published control-ui output changes.                    |
| Channel status/config UI changed     | `pnpm test:ui`                                                       | Escalate to broader control-ui smoke when navigation, config save/reload, or multi-channel ordering changes. |
| Provider/channel option set changed  | Validate the matching native settings leaf and docs-sync subtree too | Escalate to cross-platform parity review when web and native settings diverge.                               |

## Validation evidence

No UI tests or builds were run while promoting this leaf. Commands were verified from root `package.json` and `ui/package.json`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `64` (新增 20，修改 44).
- Target-existing path refs in active map: `64`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
