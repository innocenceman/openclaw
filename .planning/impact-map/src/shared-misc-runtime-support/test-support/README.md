# Test Support Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Parent module

- Impact module: `shared-misc-runtime-support/`
- Leaf: `test-support/`

## Purpose

Test helpers and test utilities consumed by colocated and integration tests.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-09 G005 verification result

Result: `verified`. Test helper/util tests passed.

Evidence ledger: `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/SRC-CAPABILITIES-SHARED-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `shared-runtime-support`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `30` (新增 10，修改 17，删除 3).
- Target-existing changed paths listed here: `27`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `3`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/test-helpers/resolve-target-error-cases.ts`
- `src/test-helpers/ssrf.ts`
- `src/test-helpers/temp-dir.ts`
- `src/test-helpers/windows-cmd-shim.ts`
- `src/test-utils/auth-token-assertions.ts`
- `src/test-utils/bundled-plugin-public-surface.ts`
- `src/test-utils/camera-url-test-helpers.ts`
- `src/test-utils/channel-plugin-test-fixtures.ts`
- `src/test-utils/channel-plugins.ts`
- `src/test-utils/env.ts`
- `src/test-utils/fetch-mock.ts`
- `src/test-utils/generation-live-test-helpers.ts`
- `... 另有 15 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
