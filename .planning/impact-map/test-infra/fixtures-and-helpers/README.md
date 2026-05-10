# Fixtures and Helpers

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

## Scope

Shared test fixtures, helpers, extension helpers, and mocks.

## Leaves

- `fixtures/`: static fixtures and sample plugin/hook installs.
- `helpers-core/`: shared test helpers.
- `helpers-extensions/`: extension-specific helper utilities.
- `mocks/`: fake services/modules used by tests.

## Evidence limits

Repo-native structural inspection only. Static fixtures remain `partial` until consumer-specific test evidence is recorded.

## 2026-05-08 P0 refresh-to-verified evidence

`helpers-core/` and `helpers-extensions/` remain `verified` after fresh G009 targeted commands. `fixtures/` is now `exceptioned-deep-partial` because `test/scripts/test-extension.test.ts` exits 1, while adjacent plugin metadata/catalog tests pass. `mocks/` remains `exceptioned-deep-partial` because the refreshed G009 mocks command still exits 1.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`.
