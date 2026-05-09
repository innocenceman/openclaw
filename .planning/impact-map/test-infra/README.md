# Test Infrastructure Impact Map

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

## Scope

Repository test infrastructure under `test/**`, root test scripts/configuration, fixtures, helpers, and mocks.

## Submodules

- `profiles-and-suites/`: test runner/profile/configuration plus root and script tests.
- `fixtures-and-helpers/`: fixtures, mocks, and shared helpers used by tests.

## Current closeout state

Wave 5 closes `test-infra/` to partial by promoting runner/profile, root-test, script-test, helper, and mock leaves to `deep-partial`; static fixtures remain `partial` because they need consumer-specific test evidence before deeper promotion.

## 2026-05-08 P0 refresh-to-verified evidence

Historical P0 status: `profiles-and-suites/` was `verified`, and fixture/helper leaves were verified except `fixtures-and-helpers/mocks/`. Current G009 status: the aggregate test-infra map is `exceptioned-deep-partial`; G009 retained `verified` for passing runner/root/helper leaves, but `test-scripts/`, `fixtures/`, and `mocks/` now have fresh failing standard commands.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`.

## 2026-05-09 G009 packages/test-infra validation

`profiles-and-suites/config-and-runner`, `profiles-and-suites/root-tests`, `fixtures-and-helpers/helpers-core`, and `fixtures-and-helpers/helpers-extensions` have fresh passing targeted commands. `profiles-and-suites/test-scripts`, `fixtures-and-helpers/fixtures`, and `fixtures-and-helpers/mocks` are `exceptioned-deep-partial` because their standard targeted commands exit 1. Evidence: `.planning/impact-map/evidence/packages-test-infra-verified-wave-2026-05-09/PACKAGES-TEST-INFRA-VERIFIED-WAVE.md`.
