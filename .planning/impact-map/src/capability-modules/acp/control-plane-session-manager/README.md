# ACP Control Plane Session Manager Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

## Parent module

- Impact module: `capability-modules/acp/`
- Leaf: `control-plane-session-manager/`

## Purpose

ACP control-plane manager, runtime cache, spawn, runtime controls, and identity reconciliation.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## Verified wave evidence

- Tool evidence: GitNexus impact on `getAcpSessionManager` is CRITICAL: 21 direct callers, 30 impacted symbols, 5 affected processes. code-review-graph: max risk 1.00, 147 risk-index symbols.
- Validation evidence: `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts` passed: 2 files, 38 tests.
- Evidence ledger: `../../../../evidence/src-acp-verified-wave-2026-05-08/ACP-VERIFIED-WAVE.md`
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `7` (修改 7).
- Target-existing changed paths listed here: `7`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/acp/control-plane/manager.core.ts`
- `src/acp/control-plane/manager.identity-reconcile.ts`
- `src/acp/control-plane/manager.test.ts`
- `src/acp/control-plane/manager.types.ts`
- `src/acp/control-plane/manager.utils.ts`
- `src/acp/control-plane/runtime-options.ts`
- `src/acp/control-plane/spawn.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
