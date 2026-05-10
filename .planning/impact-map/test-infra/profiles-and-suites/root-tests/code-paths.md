# Root Tests Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## Test invocation path

1. A developer or CI path invokes a `pnpm test*` script or a scoped `pnpm test -- <filter>` command.
2. Test wrapper/profile configuration selects setup, isolation, and target files.
3. This leaf supplies either runner/config behavior, root tests, scripts tests, helpers, mocks, or fixtures.
4. Failures here can indicate product regressions, guardrail drift, or broken test infrastructure.

## Change impact path

1. Identify whether the changed file is runner/config, a test file, a helper, a mock, or a fixture.
2. Run the narrowest matching test/filter first.
3. Broaden to `pnpm test` or the documented profile only when shared behavior is affected.

## Evidence limits

The behavior path is based on path/script inspection and repo conventions; no test output was generated in this wave.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `96` changed path(s) to this final leaf. `87` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 64, 'D': 9, 'M': 23}`.

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
- `test/openclaw-npm-release-check.test.ts`
- `test/openclaw-prepack.test.ts`
- `test/plugin-clawhub-release.test.ts`
- `test/plugin-npm-release.test.ts`
- `test/qa-convex-credential-payload-validation.test.ts`
- `test/release-check.test.ts`
- `test/scripts/build-all.test.ts`
- `test/scripts/bundle-a2ui.test.ts`
- `test/scripts/bundled-plugin-build-entries.test.ts`
- `test/scripts/bundled-plugin-staged-runtime-deps.test.ts`
- `test/scripts/changed-lanes.test.ts`
- `test/scripts/channel-contract-test-plan.test.ts`
- `test/scripts/check-dynamic-import-warts.test.ts`
- `test/scripts/check-extension-package-tsc-boundary.test.ts`
- `test/scripts/check-file-utils.test.ts`
- `test/scripts/check-gateway-watch-regression.test.ts`
- `test/scripts/check-no-conflict-markers.test.ts`
- `test/scripts/check-no-random-messaging-tmp.test.ts`
- `... 另有 57 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
