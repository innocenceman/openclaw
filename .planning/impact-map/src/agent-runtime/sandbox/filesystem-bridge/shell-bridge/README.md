# Shell Bridge Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

## Parent module

- Impact module: `agent-runtime/sandbox/filesystem-bridge/`
- Leaf: `shell-bridge/`

## Purpose

Shell-backed sandbox filesystem bridge command execution.

## 2026-05-08 result

Passed in `sandbox-core.log`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `7` (修改 4，新增 2，删除 1).
- Target-existing changed paths listed here: `6`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/agents/sandbox/fs-bridge.anchored-ops.test.ts`
- `src/agents/sandbox/fs-bridge.backend.e2e.test.ts`
- `src/agents/sandbox/fs-bridge.shell.test.ts`
- `src/agents/sandbox/fs-bridge.test-helpers.ts`
- `src/agents/sandbox/fs-bridge.ts`
- `src/agents/sandbox/fs-bridge.types.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `1`
- Target-existing changed paths reflected here: `1`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/agents/sandbox/fs-bridge.test-helpers.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
