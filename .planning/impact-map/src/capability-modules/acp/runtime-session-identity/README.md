# ACP Runtime Session Identity Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

## Parent module

- Impact module: `capability-modules/acp/`
- Leaf: `runtime-session-identity/`

## Purpose

ACP runtime registry, session identity, session mapper, conversation IDs, and session metadata.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## Verified wave evidence

- Tool evidence: GitNexus context on `resolveSessionIdentityFromMeta` shows callers in ACP control-plane manager, reply ACP dispatch, identity reconcile, and runtime session identifier helpers. code-review-graph: max risk 0.85, 101 risk-index symbols.
- Validation evidence: `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts` passed: 4 files, 18 tests.
- Evidence ledger: `../../../../evidence/src-acp-verified-wave-2026-05-08/ACP-VERIFIED-WAVE.md`
