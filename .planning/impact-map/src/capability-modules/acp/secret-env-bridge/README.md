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
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `4` (修改 4).
- Target-existing changed paths listed here: `4`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/acp/meta.ts`
- `src/acp/policy.ts`
- `src/infra/secret-file.test.ts`
- `src/infra/secret-file.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
