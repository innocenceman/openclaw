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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts`
- `src/agents/pi-embedded-runner.e2e.test.ts`
- `src/agents/pi-embedded-runner.guard.test.ts`
- `src/agents/pi-embedded-runner.run-embedded-pi-agent.auth-profile-rotation.e2e.test.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.test-harness.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.test.ts`
- `src/agents/pi-embedded-runner.ts`
- `src/agents/pi-embedded-runner/aliases.test.ts`
- `src/agents/pi-embedded-runner/cache-ttl.ts`
- `src/agents/pi-embedded-runner/compact-reasons.test.ts`
- `src/agents/pi-embedded-runner/compact-reasons.ts`
- `src/agents/pi-embedded-runner/compact.hooks.harness.ts`
- `src/agents/pi-embedded-runner/compact.hooks.test.ts`
- `src/agents/pi-embedded-runner/compact.queued.ts`
- `src/agents/pi-embedded-runner/compact.runtime.ts`
- `src/agents/pi-embedded-runner/compact.ts`
- `src/agents/pi-embedded-runner/compact.types.ts`
- `src/agents/pi-embedded-runner/compaction-duplicate-user-messages.test.ts`
- `src/agents/pi-embedded-runner/compaction-duplicate-user-messages.ts`
- `src/agents/pi-embedded-runner/compaction-hooks.ts`
- `src/agents/pi-embedded-runner/compaction-runtime-context.ts`
- `src/agents/pi-embedded-runner/compaction-successor-transcript.test.ts`
- `src/agents/pi-embedded-runner/compaction-successor-transcript.ts`
- `src/agents/pi-embedded-runner/context-engine-maintenance.test.ts`
- `src/agents/pi-embedded-runner/context-engine-maintenance.ts`
- `src/agents/pi-embedded-runner/context-truncation-notice.ts`
- `src/agents/pi-embedded-runner/delivery-evidence.ts`
- `src/agents/pi-embedded-runner/effective-tool-policy.test.ts`
- `src/agents/pi-embedded-runner/effective-tool-policy.ts`
- `src/agents/pi-embedded-runner/empty-assistant-turn.ts`
- `src/agents/pi-embedded-runner/failure-signal.test.ts`
- `src/agents/pi-embedded-runner/failure-signal.ts`
- `src/agents/pi-embedded-runner/history.test.ts`
- `src/agents/pi-embedded-runner/history.ts`
- `src/agents/pi-embedded-runner/lanes.test.ts`
- `src/agents/pi-embedded-runner/lanes.ts`
- `src/agents/pi-embedded-runner/manual-compaction-boundary.test.ts`
- `src/agents/pi-embedded-runner/manual-compaction-boundary.ts`
- `src/agents/pi-embedded-runner/model.forward-compat.errors-and-overrides.test.ts`
- `src/agents/pi-embedded-runner/model.forward-compat.test.ts`
- … plus 105 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
