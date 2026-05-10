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
