# Profiles and Suites Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

## Test wrapper path

1. Developer or CI invokes `pnpm test` or `pnpm test -- <filter>`.
2. Wrapper/profile logic selects Vitest options, setup files, and target suites.
3. Root tests, e2e tests, and script tests execute under the selected profile.
4. Failures can indicate product regressions or test-infra drift.

## Change impact path

1. Identify whether the change touches runner/setup/profile logic, root tests, or script tests.
2. Run the nearest scoped wrapper command.
3. Broaden to low-memory or full test profiles when shared runner/setup behavior changes.

## Evidence limits

Repo-native structural inspection only; no fresh test output was recorded.
