# Root Tests Change-to-Test

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change                                     | First checks                                                                            | Broader validation                                                                                                            |
| ------------------------------------------ | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Edit files in this leaf                    | Run the nearest scoped `pnpm test -- <path-or-filter>` that exercises the changed file. | `OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test` on constrained hosts, or full `pnpm test` when feasible. |
| Change shared runner/setup/helper behavior | Run direct tests for the helper/runner plus one representative consumer suite.          | Full `pnpm test` before landing if related failures are plausible.                                                            |
| Change fixtures or mocks                   | Run tests that consume the fixture/mock and inspect snapshot/fixture assumptions.       | Add targeted regression tests when a fixture contract changes.                                                                |

## Minimum evidence for `verified`

Do not promote to `verified` until fresh scoped or full test output is recorded.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `96` (新增 64，删除 9，修改 23).
- Target-existing path refs in active map: `87`; deleted/renamed-away refs kept only in transition artifacts: `9`.
- Risk: `medium`; compatibility: `compatible`.
- First validation move: Run the smallest build/test/tooling check that exercises this leaf, then rely on broader CI only for packaging surfaces.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `compatible`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
