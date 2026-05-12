# Profiles and Suites

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

## Scope

Test profile, runner, setup, root test, and test script surfaces.

## Leaves

- `config-and-runner/`: runner/setup/profile behavior.
- `root-tests/`: root-level repository guardrail and e2e tests.
- `test-scripts/`: script-level tests under `test/scripts/`.

## P0 refresh evidence

Historical P0 status: this aggregate was `verified` for the bounded P0 profiles/suites slice using fresh GitNexus/code-review-graph evidence plus original passing targeted validation logs for `config-and-runner/`, `root-tests/`, and `test-scripts/`. Evidence packet: `../../evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`.

## Evidence limits

G009 keeps `config-and-runner/` and `root-tests/` verified, but the aggregate is `exceptioned-deep-partial` because `test-scripts/` now has a fresh failing targeted command. New changes still need the nearest scoped test output, and broad runner/profile changes should use the full or low-memory full-suite command when feasible.
