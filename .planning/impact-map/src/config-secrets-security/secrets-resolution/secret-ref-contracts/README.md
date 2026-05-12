# Secret Ref Contracts Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `config-secrets-security/secrets-resolution/`
- Leaf: `secret-ref-contracts/`

## Purpose

Secret input/ref contracts, parsing, JSON pointer, shared secret values, and schema validation.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `7` (新增 1，修改 6).
- Target-existing changed paths listed here: `7`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/config/types.secrets.resolution.test.ts`
- `src/config/types.secrets.ts`
- `src/config/zod-schema.secret-input-validation.ts`
- `src/secrets/json-pointer.ts`
- `src/secrets/resolve-secret-input-string.ts`
- `src/secrets/runtime-shared.ts`
- `src/secrets/shared.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `gateway-config-security`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `3`
- Target-existing changed paths reflected here: `3`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/secrets/json-pointer.ts`
- `src/secrets/ref-contract.test.ts`
- `src/secrets/ref-contract.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
