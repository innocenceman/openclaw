# Memory LanceDB Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled memory backend plugin `extensions/memory-lancedb/` providing vector-backed memory storage, search, auto-recall, auto-capture, and a plugin-local LanceDB runtime loader.

## Why this remains one leaf

Memory LanceDB is one plugin package, but it is a Wave 2R priority unit because one leaf owns config parsing, runtime dependency fallback install, tool registration, auto-recall/capture hooks, and lifecycle service behavior.

## Entry contracts

- Plugin id and kind: `memory-lancedb` / `memory` from `extensions/memory-lancedb/openclaw.plugin.json` and `index.ts`.
- Package/install contract: `@openclaw/memory-lancedb` from `extensions/memory-lancedb/package.json`.
- Loader boundary: `extensions/memory-lancedb/index.ts` registers tools, CLI, hooks, and a service; `lancedb-runtime.ts` owns runtime loading/install fallback.

## Primary behavior surfaces

- `extensions/memory-lancedb/index.ts`: config schema use, memory DB and embeddings implementation, tool registration, auto-recall and auto-capture hooks, and service lifecycle.
- `extensions/memory-lancedb/config.ts`: env/config parsing, default embedding model/db path logic, UI hints, and capture limits.
- `extensions/memory-lancedb/lancedb-runtime.ts`: bundled runtime import, cached runtime reuse, fallback `npm install`, and Nix-mode gating.
- `extensions/memory-lancedb/api.ts`: local barrel exposing the narrowed plugin-SDK seam.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; memory-lancedb tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-memory-lancedb.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; memory-lancedb and bundled runtime/dependency guardrail tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `13` (新增 6，修改 6，删除 1).
- Target-existing changed paths listed here: `12`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/memory-lancedb/cli-metadata.ts`
- `extensions/memory-lancedb/config.test.ts`
- `extensions/memory-lancedb/config.ts`
- `extensions/memory-lancedb/index.test.ts`
- `extensions/memory-lancedb/index.ts`
- `extensions/memory-lancedb/lancedb-runtime.ts`
- `extensions/memory-lancedb/memory-lancedb.live.test.ts`
- `extensions/memory-lancedb/openclaw.plugin.json`
- `extensions/memory-lancedb/package.json`
- `extensions/memory-lancedb/test-helpers.ts`
- `extensions/memory-lancedb/tsconfig.json`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `memory-media-ui`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `9`
- Target-existing changed paths reflected here: `8`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

- `extensions/memory-lancedb/api.ts`
- `extensions/memory-lancedb/config.test.ts`
- `extensions/memory-lancedb/config.ts`
- `extensions/memory-lancedb/index.test.ts`
- `extensions/memory-lancedb/index.ts`
- `extensions/memory-lancedb/lancedb-runtime.ts`
- `extensions/memory-lancedb/openclaw.plugin.json`
- `extensions/memory-lancedb/package.json`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
