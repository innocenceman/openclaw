# Subagent Registry Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

## Parent module

- Impact module: `agent-runtime/runtime/context-subagents/`
- Leaf: `subagent-registry/`

## Purpose

Child-session registry, lifecycle, persistence, spawn bookkeeping, and latest-run lookup.

## Verified wave

The 2026-05-08 remaining runtime wave passed the targeted context/subagent suite. Evidence: `.planning/impact-map/evidence/src-agent-runtime-remaining-verified-wave-2026-05-08/AGENT-RUNTIME-REMAINING-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `42` (新增 13，修改 28，删除 1).
- Target-existing changed paths listed here: `41`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 29 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `33`
- Target-existing changed paths reflected here: `33`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
