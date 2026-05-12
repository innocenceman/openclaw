# Command Session Store Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

1. Run `pnpm test -- src/agents/command`.
2. For delivery behavior, add/target command delivery tests.
3. Cross-check `reply-orchestration/runner/` when command state changes reply execution.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `74` (新增 68，修改 6).
- Target-existing path refs in active map: `74`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/agents/command/attempt-execution.cli.test.ts`
- `src/agents/command/attempt-execution.helpers.ts`
- `src/agents/command/attempt-execution.shared.test.ts`
- `src/agents/command/attempt-execution.shared.ts`
- `src/agents/command/attempt-execution.test.ts`
- `src/agents/command/attempt-execution.ts`
- `src/agents/command/cli-compaction.test.ts`
- `src/agents/command/cli-compaction.ts`
- `src/agents/command/delivery.test.ts`
- `src/agents/command/delivery.ts`
- `src/agents/command/run-context.ts`
- `src/agents/command/session-store.test.ts`
- `src/agents/command/session-store.ts`
- `src/agents/command/session.resolve-session-key.test.ts`
- `src/agents/command/session.ts`
- `src/agents/command/types.ts`
- `src/tasks/detached-task-runtime-contract.ts`
- `src/tasks/detached-task-runtime-state.ts`
- `src/tasks/detached-task-runtime.test.ts`
- `src/tasks/detached-task-runtime.ts`
- `src/tasks/import-boundary.test-helpers.ts`
- `src/tasks/runtime-internal.ts`
- `src/tasks/task-boundaries.test.ts`
- `src/tasks/task-executor.ts`
- `src/tasks/task-flow-registry.audit.test.ts`
- `src/tasks/task-flow-registry.maintenance.test.ts`
- `src/tasks/task-flow-registry.maintenance.ts`
- `src/tasks/task-flow-registry.store.sqlite.ts`
- `src/tasks/task-flow-registry.store.test.ts`
- `src/tasks/task-flow-registry.test.ts`
- `src/tasks/task-flow-registry.ts`
- `src/tasks/task-flow-runtime-internal.ts`
- `src/tasks/task-owner-access.test.ts`
- `src/tasks/task-registry.audit.test.ts`
- `src/tasks/task-registry.audit.ts`
- `src/tasks/task-registry.maintenance.issue-60299.test.ts`
- `src/tasks/task-registry.maintenance.ts`
- `src/tasks/task-registry.reconcile.ts`
- `src/tasks/task-registry.store.sqlite.ts`
- `src/tasks/task-registry.store.test.ts`
- … plus 13 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
