# Root Tests

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Leaf module for root `test/*.test.ts` and `test/*.e2e.test.ts` files.

## Boundary

Repository-level guardrail, release, boundary, e2e, and configuration tests.

## Evidence

Repo-native path inspection of the relevant `test/**`, package script, and fixture/helper roots. No broad test suite was run for this documentation-only wave.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/test-infra-root-tests.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; selected root guardrail tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

## 2026-05-09 G009 targeted validation

Decision: `verified` retained.

Reason: fresh G009 root test targeted validation passed. Evidence: `.planning/impact-map/evidence/packages-test-infra-verified-wave-2026-05-09/PACKAGES-TEST-INFRA-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `build-ci-tests`.
- Risk: `medium`.
- Compatibility: `compatible`.
- Changed paths in this leaf: `96` (新增 64，删除 9，修改 23).
- Target-existing changed paths listed here: `87`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `9`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `test/extension-import-boundaries.test.ts`
- `test/extension-package-tsc-boundary.test.ts`
- `test/extension-test-boundary.test.ts`
- `test/gateway.multi.e2e.test.ts`
- `test/git-hooks-pre-commit.test.ts`
- `test/helpers/node-builtin-mocks.test.ts`
- `test/image-generation.infer-cli.live.test.ts`
- `test/image-generation.runtime.live.test.ts`
- `test/npm-publish-plan.test.ts`
- `test/official-channel-catalog.test.ts`
- `test/openclaw-launcher.e2e.test.ts`
- `test/openclaw-npm-postpublish-verify.test.ts`
- `... 另有 75 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `build-ci-tests`
- Risk: `medium`
- Compatibility: `compatible`
- Coverage: `verified`
- Changed paths in diff: `106`
- Target-existing changed paths reflected here: `103`
- Deleted or renamed-away paths omitted from active impact-map: `3`

### Target-version changed paths

- `test/architecture-smells.test.ts`
- `test/cli-json-stdout.e2e.test.ts`
- `test/extension-import-boundaries.test.ts`
- `test/extension-test-boundary.test.ts`
- `test/gateway.multi.e2e.test.ts`
- `test/git-hooks-pre-commit.test.ts`
- `test/helpers/openclaw-test-instance.test.ts`
- `test/helpers/stt-live-audio.test.ts`
- `test/image-generation.runtime.live.test.ts`
- `test/npm-publish-plan.test.ts`
- `test/official-channel-catalog.test.ts`
- `test/openclaw-launcher.e2e.test.ts`
- `test/openclaw-npm-postpublish-verify.test.ts`
- `test/openclaw-npm-release-check.test.ts`
- `test/plugin-clawhub-release.test.ts`
- `test/plugin-npm-package-manifest.test.ts`
- `test/plugin-npm-release.test.ts`
- `test/plugin-npm-runtime-build.test.ts`
- `test/release-check.test.ts`
- `test/scripts/audit-seams.test.ts`
- `test/scripts/barnacle-auto-response.test.ts`
- `test/scripts/bench-gateway-startup.test.ts`
- `test/scripts/blacksmith-testbox-runner.test.ts`
- `test/scripts/blacksmith-testbox-state.test.ts`
- `test/scripts/build-all.test.ts`
- `test/scripts/bundled-plugin-build-entries.test.ts`
- `test/scripts/changed-lanes.test.ts`
- `test/scripts/check-changelog-attributions.test.ts`
- `test/scripts/check-cli-bootstrap-imports.test.ts`
- `test/scripts/check-deadcode-unused-files.test.ts`
- `test/scripts/check-extension-wildcard-reexports.test.ts`
- `test/scripts/check-gateway-watch-regression.test.ts`
- `test/scripts/check-openclaw-package-tarball.test.ts`
- `test/scripts/check-opengrep-rule-metadata.test.ts`
- `test/scripts/check-plugin-sdk-wildcard-reexports.test.ts`
- `test/scripts/check-runtime-sidecar-loaders.test.ts`
- `test/scripts/ci-node-test-plan.test.ts`
- `test/scripts/ci-run-timings.test.ts`
- `test/scripts/codex-app-server-protocol-source.test.ts`
- `test/scripts/docker-all-scheduler.test.ts`
- … plus 63 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
