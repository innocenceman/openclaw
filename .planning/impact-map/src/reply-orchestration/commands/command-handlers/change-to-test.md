# Reply Command Handlers Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run targeted tests under `src/auto-reply/reply/commands*` and affected command family tests.
2. Run ACP or agent-runtime tests when handlers cross into those modules.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `111` (新增 45，修改 63，删除 3).
- Target-existing path refs in active map: `108`; deleted/renamed-away refs kept only in transition artifacts: `3`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/auto-reply/reply/commands-acp.test.ts`
- `src/auto-reply/reply/commands-acp.ts`
- `src/auto-reply/reply/commands-acp/diagnostics.ts`
- `src/auto-reply/reply/commands-acp/shared.ts`
- `src/auto-reply/reply/commands-acp/targets.ts`
- `src/auto-reply/reply/commands-allowlist.test.ts`
- `src/auto-reply/reply/commands-allowlist.ts`
- `src/auto-reply/reply/commands-btw.test.ts`
- `src/auto-reply/reply/commands-compact.ts`
- `src/auto-reply/reply/commands-config.ts`
- `src/auto-reply/reply/commands-core.ts`
- `src/auto-reply/reply/commands-crestodian.ts`
- `src/auto-reply/reply/commands-diagnostics.test.ts`
- `src/auto-reply/reply/commands-diagnostics.ts`
- `src/auto-reply/reply/commands-dock.test.ts`
- `src/auto-reply/reply/commands-dock.ts`
- `src/auto-reply/reply/commands-export-common.ts`
- `src/auto-reply/reply/commands-export-session.test.ts`
- `src/auto-reply/reply/commands-export-session.ts`
- `src/auto-reply/reply/commands-export-trajectory.test.ts`
- `src/auto-reply/reply/commands-export-trajectory.ts`
- `src/auto-reply/reply/commands-gating.test.ts`
- `src/auto-reply/reply/commands-handlers.runtime.ts`
- `src/auto-reply/reply/commands-info.test.ts`
- `src/auto-reply/reply/commands-info.ts`
- `src/auto-reply/reply/commands-models.test.ts`
- `src/auto-reply/reply/commands-models.ts`
- `src/auto-reply/reply/commands-openclaw-cli.ts`
- `src/auto-reply/reply/commands-plugin.test.ts`
- `src/auto-reply/reply/commands-plugin.ts`
- `src/auto-reply/reply/commands-plugins.install.test.ts`
- `src/auto-reply/reply/commands-plugins.test.ts`
- `src/auto-reply/reply/commands-plugins.ts`
- `src/auto-reply/reply/commands-private-route.test.ts`
- `src/auto-reply/reply/commands-private-route.ts`
- `src/auto-reply/reply/commands-reset-hooks.test.ts`
- `src/auto-reply/reply/commands-reset-hooks.ts`
- `src/auto-reply/reply/commands-reset.ts`
- `src/auto-reply/reply/commands-session-abort.test-support.ts`
- `src/auto-reply/reply/commands-slash-parse.ts`
- … plus 21 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
