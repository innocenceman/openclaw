# ACP Secret Env Bridge Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

## Parent module

- Impact module: `capability-modules/acp/`
- Leaf: `secret-env-bridge/`

## Purpose

ACP secret-file handling, policy, metadata, and environment bridge support.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## Verified wave evidence

- Tool evidence: GitNexus context on `readSecretFromFile` shows callers in ACP CLI, gateway CLI run, and ACP server args, with dependency on `src/infra/secret-file.ts`. code-review-graph: max risk 0.85, 19 risk-index symbols.
- Validation evidence: `pnpm test -- src/acp/secret-file.test.ts src/acp/policy.test.ts` passed: 2 files, 6 tests.
- Evidence ledger: `../../../../evidence/src-acp-verified-wave-2026-05-08/ACP-VERIFIED-WAVE.md`
