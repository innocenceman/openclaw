# Command Session Store Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

- Primary paths: `src/agents/command/**`
- Runtime handoff: Command entrypoints persist or load command run context before outbound delivery and reply execution observe state.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `74` changed path(s) to this final leaf. `74` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 68, 'M': 6}`.

- `src/agents/command/attempt-execution.cli.test.ts`
- `src/agents/command/attempt-execution.helpers.ts`
- `src/agents/command/attempt-execution.runtime.ts`
- `src/agents/command/attempt-execution.shared.ts`
- `src/agents/command/attempt-execution.test.ts`
- `src/agents/command/attempt-execution.ts`
- `src/agents/command/delivery.runtime.ts`
- `src/agents/command/delivery.test.ts`
- `src/agents/command/delivery.ts`
- `src/agents/command/session-store.runtime.ts`
- `src/agents/command/session-store.test.ts`
- `src/agents/command/session-store.ts`
- `src/agents/command/session.resolve-session-key.test.ts`
- `src/agents/command/session.ts`
- `src/agents/command/shared-types.ts`
- `src/agents/command/types.ts`
- `src/tasks/detached-task-runtime-contract.ts`
- `src/tasks/detached-task-runtime-state.ts`
- `src/tasks/detached-task-runtime.test.ts`
- `src/tasks/detached-task-runtime.ts`
- `src/tasks/import-boundary.test-helpers.ts`
- `src/tasks/runtime-internal.ts`
- `src/tasks/task-boundaries.test.ts`
- `src/tasks/task-domain-views.ts`
- `src/tasks/task-executor-policy.test.ts`
- `src/tasks/task-executor-policy.ts`
- `src/tasks/task-executor.test.ts`
- `src/tasks/task-executor.ts`
- `src/tasks/task-flow-owner-access.test.ts`
- `src/tasks/task-flow-owner-access.ts`
- `... 另有 44 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
