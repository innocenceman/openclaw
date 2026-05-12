# Shell Bridge Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

1. Run `pnpm test -- src/agents/sandbox/fs-bridge.shell.test.ts`.
2. Escalate to sandbox workspace/browser/SSH checks when path changes cross backend boundaries.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `7` (修改 4，新增 2，删除 1).
- Target-existing path refs in active map: `6`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/agents/sandbox/fs-bridge.test-helpers.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
