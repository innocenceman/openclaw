# Channel Plugin Commands Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run `pnpm test -- src/commands/channels.ts src/commands/channels`.
2. Run channel abstraction/plugin bridge tests when command behavior affects runtime channel state.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `38` (修改 29，新增 9).
- Target-existing path refs in active map: `38`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/commands/channel-account-context.ts`
- `src/commands/channel-setup/channel-plugin-resolution.test.ts`
- `src/commands/channel-setup/channel-plugin-resolution.ts`
- `src/commands/channel-setup/discovery.test.ts`
- `src/commands/channel-setup/discovery.ts`
- `src/commands/channel-setup/plugin-install.test.ts`
- `src/commands/channel-setup/plugin-install.ts`
- `src/commands/channel-setup/registry.ts`
- `src/commands/channel-setup/workspace-shadow-bypass.test.ts`
- `src/commands/channel-test-registry.ts`
- `src/commands/channels.add.test.ts`
- `src/commands/channels.adds-non-default-telegram-account.test.ts`
- `src/commands/channels.config-only-status-output.test.ts`
- `src/commands/channels.list.auth-profiles.test.ts`
- `src/commands/channels.logs.test.ts`
- `src/commands/channels.remove.test.ts`
- `src/commands/channels.resolve.test.ts`
- `src/commands/channels.surfaces-signal-runtime-errors-channels-status-output.test.ts`
- `src/commands/channels/add.ts`
- `src/commands/channels/capabilities.test.ts`
- `src/commands/channels/capabilities.ts`
- `src/commands/channels/list.ts`
- `src/commands/channels/logs.ts`
- `src/commands/channels/remove.ts`
- `src/commands/channels/resolve.ts`
- `src/commands/channels/runtime-label.ts`
- `src/commands/channels/shared.ts`
- `src/commands/channels/status-config-format.ts`
- `src/commands/channels/status.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
