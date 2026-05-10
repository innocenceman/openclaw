# Secret Storage Audit Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `config-secrets-security/secrets-resolution/`
- Leaf: `secret-storage-audit/`

## Purpose

Secret storage paths, apply/configure/audit flows, storage scans, and auth-profile scans.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `12` (修改 12).
- Target-existing changed paths listed here: `12`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/secrets/apply.test.ts`
- `src/secrets/apply.ts`
- `src/secrets/audit.ts`
- `src/secrets/auth-profiles-scan.ts`
- `src/secrets/auth-store-paths.ts`
- `src/secrets/configure-plan.test.ts`
- `src/secrets/configure-plan.ts`
- `src/secrets/configure.test.ts`
- `src/secrets/configure.ts`
- `src/secrets/path-utils.test.ts`
- `src/secrets/path-utils.ts`
- `src/secrets/storage-scan.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
