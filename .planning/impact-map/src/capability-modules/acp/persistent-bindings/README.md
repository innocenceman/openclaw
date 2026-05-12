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
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `5` (修改 5).
- Target-existing changed paths listed here: `5`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/acp/persistent-bindings.lifecycle.test.ts`
- `src/acp/persistent-bindings.lifecycle.ts`
- `src/acp/persistent-bindings.resolve.ts`
- `src/acp/persistent-bindings.test.ts`
- `src/acp/persistent-bindings.types.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `4`
- Target-existing changed paths reflected here: `4`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/acp/persistent-bindings.lifecycle.test.ts`
- `src/acp/persistent-bindings.resolve.ts`
- `src/acp/persistent-bindings.test.ts`
- `src/acp/persistent-bindings.types.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
