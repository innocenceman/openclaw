# Memory Core Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled memory plugin `extensions/memory-core/` that contributes memory prompt guidance, `memory_search`, `memory_get`, and the `memory` CLI surface.

## Why this remains one leaf

Memory core has very little file surface, but it is the default slot-level memory owner and its single entrypoint determines how memory guidance and tools appear throughout the product.

## Entry contracts

- Plugin id and kind: `memory-core` / `memory` from `extensions/memory-core/openclaw.plugin.json` and `index.ts`.
- Package/install contract: `@openclaw/memory-core` from `extensions/memory-core/package.json`.
- Loader boundary: `extensions/memory-core/index.ts` registers prompt-section, tool, and CLI behavior.

## Primary behavior surfaces

- `extensions/memory-core/index.ts`: memory prompt section builder, tool registration for `memory_search` and `memory_get`, and memory CLI registration.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; memory-core tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-memory-core.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; memory-core, slots, config-state, and status scan tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `121` (修改 45，新增 70，重命名/移动 1，删除 5).
- Target-existing changed paths listed here: `116`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `5`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/memory-core/api.ts`
- `extensions/memory-core/cli-metadata.ts`
- `extensions/memory-core/index.test.ts`
- `extensions/memory-core/index.ts`
- `extensions/memory-core/manager-runtime.ts`
- `extensions/memory-core/openclaw.plugin.json`
- `extensions/memory-core/package.json`
- `extensions/memory-core/runtime-api.ts`
- `extensions/memory-core/src/cli.host.runtime.ts`
- `extensions/memory-core/src/cli.runtime.ts`
- `extensions/memory-core/src/cli.test.ts`
- `extensions/memory-core/src/cli.ts`
- `... 另有 104 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `memory-media-ui`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `67`
- Target-existing changed paths reflected here: `65`
- Deleted or renamed-away paths omitted from active impact-map: `2`

### Target-version changed paths

- `extensions/memory-core/api.ts`
- `extensions/memory-core/index.test.ts`
- `extensions/memory-core/index.ts`
- `extensions/memory-core/openclaw.plugin.json`
- `extensions/memory-core/package.json`
- `extensions/memory-core/src/cli.host.runtime.ts`
- `extensions/memory-core/src/cli.runtime.ts`
- `extensions/memory-core/src/cli.test.ts`
- `extensions/memory-core/src/cli.ts`
- `extensions/memory-core/src/concept-vocabulary.ts`
- `extensions/memory-core/src/config.test.ts`
- `extensions/memory-core/src/dreaming-command.test.ts`
- `extensions/memory-core/src/dreaming-command.ts`
- `extensions/memory-core/src/dreaming-narrative.test.ts`
- `extensions/memory-core/src/dreaming-narrative.ts`
- `extensions/memory-core/src/dreaming-phases.test.ts`
- `extensions/memory-core/src/dreaming-phases.ts`
- `extensions/memory-core/src/dreaming-repair.ts`
- `extensions/memory-core/src/dreaming.test.ts`
- `extensions/memory-core/src/dreaming.ts`
- `extensions/memory-core/src/flush-plan.ts`
- `extensions/memory-core/src/memory-tool-manager-mock.ts`
- `extensions/memory-core/src/memory/embeddings.test.ts`
- `extensions/memory-core/src/memory/embeddings.ts`
- `extensions/memory-core/src/memory/hybrid.ts`
- `extensions/memory-core/src/memory/index.test.ts`
- `extensions/memory-core/src/memory/index.ts`
- `extensions/memory-core/src/memory/manager-atomic-reindex.ts`
- `extensions/memory-core/src/memory/manager-batch-state.ts`
- `extensions/memory-core/src/memory/manager-db.ts`
- `extensions/memory-core/src/memory/manager-embedding-ops.ts`
- `extensions/memory-core/src/memory/manager-embedding-policy.test.ts`
- `extensions/memory-core/src/memory/manager-embedding-policy.ts`
- `extensions/memory-core/src/memory/manager-embedding-timeout.test.ts`
- `extensions/memory-core/src/memory/manager-provider-state.ts`
- `extensions/memory-core/src/memory/manager-reindex-state.ts`
- `extensions/memory-core/src/memory/manager-search.test.ts`
- `extensions/memory-core/src/memory/manager-search.ts`
- `extensions/memory-core/src/memory/manager-sync-control.ts`
- `extensions/memory-core/src/memory/manager-sync-ops.archive-delta-bypass.test.ts`
- … plus 25 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
