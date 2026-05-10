# ACP Spawn Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 acp-spawn verified wave

## Parent module

- Impact module: `agent-runtime/runtime/`
- Leaf: `acp-spawn/`

## Purpose

ACP-aware agent spawn and parent-stream bridge.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-08 verified wave

Decision: `verified`.

Reason: GitNexus showed `spawnAcpDirect` has LOW upstream impact centered on `Agents` and a direct caller in `src/agents/tools/sessions-spawn-tool.ts`; `startAcpSpawnParentStreamRelay` is only called by `spawnAcpDirect`. code-review-graph risk is bounded by dedicated spawn, parent-stream, architecture guardrail, and adjacent tool tests.

Evidence: `.planning/impact-map/evidence/src-acp-spawn-verified-wave-2026-05-08/ACP-SPAWN-VERIFIED-WAVE.md` with raw logs under that directory.

No product source was changed during this wave.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `6` (修改 6).
- Target-existing changed paths listed here: `6`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/agents/acp-spawn-parent-stream.test.ts`
- `src/agents/acp-spawn-parent-stream.ts`
- `src/agents/acp-spawn.test.ts`
- `src/agents/acp-spawn.ts`
- `src/agents/tools/sessions-spawn-tool.test.ts`
- `src/agents/tools/sessions-spawn-tool.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
