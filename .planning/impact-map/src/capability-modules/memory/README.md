# Memory Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Parent module

- Impact module: `capability-modules/`
- Leaf: `memory/`

## Purpose

Embedding, search, manager, QMD, and session-file memory storage/runtime.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-09 G005 verification result

Result: `exceptioned-deep-partial`. Standard memory suite failed under the wrapper; no verified promotion.

Evidence ledger: `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/SRC-CAPABILITIES-SHARED-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `70` (新增 70).
- Target-existing changed paths listed here: `70`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/memory-host-sdk/dreaming.test.ts`
- `src/memory-host-sdk/dreaming.ts`
- `src/memory-host-sdk/engine-qmd.ts`
- `src/memory-host-sdk/engine-storage.ts`
- `src/memory-host-sdk/events.ts`
- `src/memory-host-sdk/host/backend-config.test.ts`
- `src/memory-host-sdk/host/backend-config.ts`
- `... 另有 58 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `memory-media-ui`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `70`
- Target-existing changed paths reflected here: `14`
- Deleted or renamed-away paths omitted from active impact-map: `56`

### Target-version changed paths

- `src/memory-host-sdk/dreaming.test.ts`
- `src/memory-host-sdk/dreaming.ts`
- `src/memory-host-sdk/engine-qmd.ts`
- `src/memory-host-sdk/engine-storage.ts`
- `src/memory-host-sdk/host/backend-config.test.ts`
- `src/memory-host-sdk/host/backend-config.ts`
- `src/memory-host-sdk/host/embedding-defaults.ts`
- `src/memory-host-sdk/host/embedding-inputs.ts`
- `src/memory-host-sdk/host/types.ts`
- `src/memory-host-sdk/multimodal.ts`
- `src/memory-host-sdk/query.ts`
- `src/memory-host-sdk/secret.ts`
- `src/memory-host-sdk/status.ts`
- `src/memory/root-memory-files.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
