# Extension Test Helpers Code Paths

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

This target refresh maps `46` changed path(s) to this final leaf. `0` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'R': 31, 'D': 15}`.

- None.

<!-- version-diff-refresh:v2026.4.24:end -->
