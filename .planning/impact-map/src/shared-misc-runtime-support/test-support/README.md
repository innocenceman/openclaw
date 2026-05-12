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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `shared-runtime-support`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `fallback`
- Changed paths in diff: `23`
- Target-existing changed paths reflected here: `20`
- Deleted or renamed-away paths omitted from active impact-map: `3`

### Target-version changed paths

- `src/test-helpers/network-interfaces.ts`
- `src/test-helpers/resolve-target-error-cases.ts`
- `src/test-helpers/temp-dir.test.ts`
- `src/test-helpers/temp-dir.ts`
- `src/test-utils/channel-plugins.ts`
- `src/test-utils/exec-assertions.ts`
- `src/test-utils/jiti-runtime.ts`
- `src/test-utils/npm-spec-install-test-helpers.ts`
- `src/test-utils/openclaw-test-state.test.ts`
- `src/test-utils/openclaw-test-state.ts`
- `src/test-utils/plugin-registration.ts`
- `src/test-utils/plugin-runtime-env.ts`
- `src/test-utils/plugin-setup-wizard.ts`
- `src/test-utils/secret-file-fixture.ts`
- `src/test-utils/secret-ref-test-vectors.ts`
- `src/test-utils/session-conversation-registry.ts`
- `src/test-utils/session-state-cleanup.test.ts`
- `src/test-utils/session-state-cleanup.ts`
- `src/test-utils/session-write-lock-module-mock.ts`
- `src/test-utils/web-provider-runtime.test-helpers.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
