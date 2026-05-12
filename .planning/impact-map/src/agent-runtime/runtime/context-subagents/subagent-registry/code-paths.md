# Subagent Registry Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

- Primary paths: `src/agents/subagent-registry*.ts`, `src/agents/subagent-spawn.ts`
- Runtime handoff: context/subagent metadata is resolved before runtime execution, reply flows, or child-session lifecycle consumers continue.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `42` changed path(s) to this final leaf. `41` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 13, 'M': 28, 'D': 1}`.

- `src/agents/subagent-registry-announce-read.ts`
- `src/agents/subagent-registry-cleanup.test.ts`
- `src/agents/subagent-registry-cleanup.ts`
- `src/agents/subagent-registry-completion.test.ts`
- `src/agents/subagent-registry-completion.ts`
- `src/agents/subagent-registry-helpers.test.ts`
- `src/agents/subagent-registry-helpers.ts`
- `src/agents/subagent-registry-lifecycle.test.ts`
- `src/agents/subagent-registry-lifecycle.ts`
- `src/agents/subagent-registry-queries.test.ts`
- `src/agents/subagent-registry-queries.ts`
- `src/agents/subagent-registry-read.ts`
- `src/agents/subagent-registry-run-manager.ts`
- `src/agents/subagent-registry-runtime.ts`
- `src/agents/subagent-registry-steer-runtime.ts`
- `src/agents/subagent-registry.announce-loop-guard.test.ts`
- `src/agents/subagent-registry.archive.e2e.test.ts`
- `src/agents/subagent-registry.lifecycle-retry-grace.e2e.test.ts`
- `src/agents/subagent-registry.mocks.shared.ts`
- `src/agents/subagent-registry.nested.e2e.test.ts`
- `src/agents/subagent-registry.persistence.resume.test.ts`
- `src/agents/subagent-registry.persistence.test-support.ts`
- `src/agents/subagent-registry.persistence.test.ts`
- `src/agents/subagent-registry.runtime.ts`
- `src/agents/subagent-registry.steer-restart.test.ts`
- `src/agents/subagent-registry.store.ts`
- `src/agents/subagent-registry.test-helpers.ts`
- `src/agents/subagent-registry.test.ts`
- `src/agents/subagent-registry.ts`
- `src/agents/subagent-registry.types.ts`
- `... 另有 11 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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
