# Subagent Registry Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

2. Escalate to reply/runtime tests when context or child-session state affects parent/child message flow.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `42` (新增 13，修改 28，删除 1).
- Target-existing path refs in active map: `41`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/agents/subagent-registry-cleanup.ts`
- `src/agents/subagent-registry-helpers.ts`
- `src/agents/subagent-registry-lifecycle.test.ts`
- `src/agents/subagent-registry-lifecycle.ts`
- `src/agents/subagent-registry-queries.ts`
- `src/agents/subagent-registry-read-context.test.ts`
- `src/agents/subagent-registry-read.ts`
- `src/agents/subagent-registry-run-manager.ts`
- `src/agents/subagent-registry-steer-runtime.ts`
- `src/agents/subagent-registry.announce-loop-guard.test.ts`
- `src/agents/subagent-registry.archive.e2e.test.ts`
- `src/agents/subagent-registry.lifecycle-retry-grace.e2e.test.ts`
- `src/agents/subagent-registry.nested.e2e.test.ts`
- `src/agents/subagent-registry.persistence.resume.test.ts`
- `src/agents/subagent-registry.persistence.test-support.ts`
- `src/agents/subagent-registry.persistence.test.ts`
- `src/agents/subagent-registry.steer-restart.test.ts`
- `src/agents/subagent-registry.store.ts`
- `src/agents/subagent-registry.test-helpers.ts`
- `src/agents/subagent-registry.test.ts`
- `src/agents/subagent-registry.ts`
- `src/agents/subagent-registry.types.ts`
- `src/agents/subagent-spawn.attachments.test.ts`
- `src/agents/subagent-spawn.context.test.ts`
- `src/agents/subagent-spawn.depth-limits.test.ts`
- `src/agents/subagent-spawn.mode-session-diagnostics.test.ts`
- `src/agents/subagent-spawn.model-session.test.ts`
- `src/agents/subagent-spawn.runtime.ts`
- `src/agents/subagent-spawn.test-helpers.ts`
- `src/agents/subagent-spawn.test.ts`
- `src/agents/subagent-spawn.thread-binding.test.ts`
- `src/agents/subagent-spawn.ts`
- `src/agents/subagent-spawn.workspace.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
