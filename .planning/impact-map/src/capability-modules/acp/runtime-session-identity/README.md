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
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `13` (修改 11，新增 2).
- Target-existing changed paths listed here: `13`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/acp/conversation-id.ts`
- `src/acp/runtime/adapter-contract.testkit.ts`
- `src/acp/runtime/errors.test.ts`
- `src/acp/runtime/errors.ts`
- `src/acp/runtime/registry.test.ts`
- `src/acp/runtime/registry.ts`
- `src/acp/runtime/session-identifiers.ts`
- `src/acp/runtime/session-identity.ts`
- `src/acp/runtime/session-meta.test.ts`
- `src/acp/runtime/session-meta.ts`
- `src/acp/runtime/types.ts`
- `src/acp/session-interaction-mode.test.ts`
- `... 另有 1 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
