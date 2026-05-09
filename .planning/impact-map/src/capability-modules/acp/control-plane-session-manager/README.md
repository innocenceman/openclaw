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
