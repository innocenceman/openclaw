# Secret Target Registry Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `config-secrets-security/secrets-resolution/`
- Leaf: `secret-target-registry/`

## Purpose

Secret target registry, query helpers, target patterns, and credential matrix data.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `7` (修改 4，新增 3).
- Target-existing changed paths listed here: `7`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/secrets/credential-matrix.ts`
- `src/secrets/target-registry-data.ts`
- `src/secrets/target-registry-query.ts`
- `src/secrets/target-registry-test-helpers.ts`
- `src/secrets/target-registry.docs.test.ts`
- `src/secrets/target-registry.fast-path.test.ts`
- `src/secrets/target-registry.test.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
