# Command Session Store Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

## Parent module

- Impact module: `agent-runtime/runtime/`
- Leaf: `command-session-store/`

## Purpose

Agent command delivery, run-context, and command-session persistence helpers.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-08 remaining runtime wave

Decision: `verified`.

Evidence: `command-session-store.log` passed.

Wave evidence: `.planning/impact-map/evidence/src-agent-runtime-remaining-verified-wave-2026-05-08/AGENT-RUNTIME-REMAINING-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `74` (新增 68，修改 6).
- Target-existing changed paths listed here: `74`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 62 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `53`
- Target-existing changed paths reflected here: `53`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
