# Package moltbot

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted package validation

## Scope

## Boundary

This leaf owns the compatibility package metadata, root re-export, and postinstall rename notice. It does not own core OpenClaw runtime behavior; runtime behavior follows the root `openclaw` package.

## Evidence

- G009 package release tests and package import-shim checks passed.
- G009 npm pack dry-run passed.
- G009 package bin/export audit failed because the declared CLI entry file is missing.
- The standard OpenClaw npm release check timed out in this sandbox.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## 2026-05-09 G009 package validation

Decision: `exceptioned-deep-partial`.

Evidence: `.planning/impact-map/evidence/packages-test-infra-verified-wave-2026-05-09/PACKAGES-TEST-INFRA-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `plugin-sdk-core`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `3` (删除 3).
- Target-existing changed paths listed here: `0`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `3`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- None; this leaf only records deletions or renamed-away paths in the transition artifacts.

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
