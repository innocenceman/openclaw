# Test Mocks

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

## Scope

Leaf module for `test/mocks/**`.

## Boundary

Mock modules and fake adapters used to isolate tests from external services.

## Evidence

Repo-native path inspection of the relevant `test/**`, package script, and fixture/helper roots. No broad test suite was run for this documentation-only wave.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## 2026-05-08 P0 original wave evidence

Decision: `exceptioned-deep-partial`.

Reason: GN-STALE + CRG-STALE; test-infra-mocks failed due src/commands/agent.test.ts auth/timeouts.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/test-infra-mocks.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `exceptioned-deep-partial`.

Reason: Graph freshness is now fresh, but `refresh-test-infra-mocks.log` still fails due missing provider auth and timeout fallout in `src/commands/agent.test.ts`.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

## 2026-05-09 G009 targeted validation

Decision: `exceptioned-deep-partial`.

Evidence: `.planning/impact-map/evidence/packages-test-infra-verified-wave-2026-05-09/PACKAGES-TEST-INFRA-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `build-ci-tests`.
- Risk: `medium`.
- Compatibility: `compatible`.
- Changed paths in this leaf: `2` (修改 2).
- Target-existing changed paths listed here: `2`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/commands/agent.test.ts`
- `test/mocks/baileys.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `build-ci-tests`
- Risk: `medium`
- Compatibility: `compatible`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `2`
- Target-existing changed paths reflected here: `2`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/commands/agent.test.ts`
- `test/mocks/baileys.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
