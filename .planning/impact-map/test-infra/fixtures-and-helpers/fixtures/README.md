# Test Fixtures

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

## Scope

Leaf module for `test/fixtures/**`.

## Boundary

Static fixtures, sample plugin installs, hook fixtures, and child-process bridge samples.

## Evidence

Repo-native path inspection of the relevant `test/**`, package script, and fixture/helper roots. No broad test suite was run for this documentation-only wave.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## 2026-05-08 P0 original wave evidence

Decision: `deep-partial`.

Reason: GN-STALE + CRG-STALE; fixture validation passed; lifted from partial to deep-partial.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/test-infra-fixtures.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; fixture/plugin metadata and test-extension validations passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

## 2026-05-09 G009 targeted validation

Decision: `exceptioned-deep-partial`.

Reason: the aggregate fixture-adjacent command exits 1 because `test/scripts/test-extension.test.ts` exits 1. Adjacent plugin metadata and catalog contract tests pass, so the exception is bounded to the test-extension path rather than all fixture consumers.

Evidence: `.planning/impact-map/evidence/packages-test-infra-verified-wave-2026-05-09/PACKAGES-TEST-INFRA-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `build-ci-tests`.
- Risk: `medium`.
- Compatibility: `compatible`.
- Changed paths in this leaf: `143` (修改 6，删除 6，新增 128，重命名/移动 3).
- Target-existing changed paths listed here: `137`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `6`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `test-fixtures/talk-config-contract.json`
- `test/fixtures/cli-startup-bench.json`
- `test/fixtures/extension-relative-outside-package-inventory.json`
- `test/fixtures/system-run-approval-binding-contract.json`
- `test/scripts/ios-version.test-support.ts`
- `test/scripts/test-extension.test.ts`
- `test/scripts/test-helpers.ts`
- `test/setup-openclaw-runtime.ts`
- `test/test-env.test.ts`
- `test/test-env.ts`
- `test/tsconfig.json`
- `test/vitest/vitest.acp.config.ts`
- `... 另有 125 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
