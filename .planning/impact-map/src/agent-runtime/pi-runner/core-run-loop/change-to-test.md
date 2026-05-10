# Core Run Loop Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

1. Run `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`.
2. Escalate to reply/runtime suites when embedded run behavior affects shared message flows.
3. Run live/provider checks only with explicit credentials or live-test opt-in.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `190` (新增 82，删除 1，修改 106，重命名/移动 1).
- Target-existing path refs in active map: `189`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
