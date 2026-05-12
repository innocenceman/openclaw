# Path Safety Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

## Parent module

- Impact module: `agent-runtime/sandbox/filesystem-bridge/`
- Leaf: `path-safety/`

## Purpose

Host paths, fs paths, anchored operations, mutation helpers, and rename/path safety.

## 2026-05-08 result

Split only. Broader fs/path grouped commands failed with wrapper exit 1/no retained Vitest output.

## 2026-05-09 final audit result

Exceptioned. The final rerun of the fs/path/anchored operation test set timed out at 260s and the wrapper reported exit 1 with no retained Vitest failure detail, so this leaf remains unverified rather than silently `deep-partial`. Evidence: `../../../../../evidence/final-cross-module-audit-2026-05-09/FINAL-CROSS-MODULE-AUDIT.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `5` (修改 4，新增 1).
- Target-existing changed paths listed here: `5`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/agents/sandbox/fs-bridge-mutation-helper.test.ts`
- `src/agents/sandbox/fs-bridge-mutation-helper.ts`
- `src/agents/sandbox/fs-bridge-path-safety.runtime.ts`
- `src/agents/sandbox/fs-bridge-path-safety.ts`
- `src/agents/sandbox/fs-paths.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `4`
- Target-existing changed paths reflected here: `4`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/agents/sandbox/fs-bridge-mutation-helper.test.ts`
- `src/agents/sandbox/fs-bridge-mutation-helper.ts`
- `src/agents/sandbox/host-paths.test.ts`
- `src/agents/sandbox/host-paths.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
