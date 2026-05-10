# ACP Persistent Bindings Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

## Parent module

- Impact module: `capability-modules/acp/`
- Leaf: `persistent-bindings/`

## Purpose

ACP persistent binding lifecycle, resolution, and binding contracts.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## Verified wave evidence

- Tool evidence: GitNexus context on `ensureConfiguredAcpBindingSession` shows consumers in channel plugin ACP stateful target driver and outgoing calls into ACP manager lifecycle. code-review-graph: max risk 0.70, 65 risk-index symbols.
- Validation evidence: `pnpm test -- src/acp/persistent-bindings.test.ts src/acp/persistent-bindings.lifecycle.test.ts` passed: 2 files, 30 tests.
- Evidence ledger: `../../../../evidence/src-acp-verified-wave-2026-05-08/ACP-VERIFIED-WAVE.md`
