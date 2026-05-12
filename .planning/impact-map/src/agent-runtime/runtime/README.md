# Runtime Impact Subtree

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 remaining runtime verified wave

## Parent module

- Impact module: `agent-runtime/`
- Subtree: `runtime/`

## Purpose

Runtime command entrypoints, session/scope ownership, CLI runner glue, ACP spawn bridge, and context/subagent session support.

## Split basis

GitNexus showed `src/agents/agent-command.ts` crossing gateway boot and CLI command boundaries. code-review-graph highlighted separate risk centers in context lookup, subagent registry, and internal session-key resolution, so this subtree is no longer treated as a single final leaf.

Use `leaf-index.md` to choose the narrowest runtime leaf.

## 2026-05-08 acp-spawn verified wave

Decision: child leaf `acp-spawn/` promoted to `verified`; this runtime subtree remains `deep-partial` until sibling leaves receive equivalent targeted validation.

Evidence: `.planning/impact-map/evidence/src-acp-spawn-verified-wave-2026-05-08/ACP-SPAWN-VERIFIED-WAVE.md`.

## 2026-05-08 remaining runtime verified wave

Decision: runtime subtree remains `exceptioned-deep-partial`.

Reason: `session-scope/`, `command-session-store/`, `cli-runner/`, `acp-spawn/`, and split `context-subagents/` leaves are verified, but `command-entrypoint/` cannot be promoted while `src/commands/agent.test.ts` exits non-zero with no Vitest failure output in this environment.

Evidence: `.planning/impact-map/evidence/src-agent-runtime-remaining-verified-wave-2026-05-08/AGENT-RUNTIME-REMAINING-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `2` (新增 1，修改 1).
- Target-existing changed paths listed here: `2`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/agents/agent-command.live-model-switch.test.ts`
- `src/agents/agent-command.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `2`
- Target-existing changed paths reflected here: `2`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/agents/agent-command.live-model-switch.test.ts`
- `src/agents/agent-command.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
