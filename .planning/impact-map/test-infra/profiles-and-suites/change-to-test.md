# Profiles and Suites Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

| Change type                     | First validation                                     | Escalation trigger                                                                |
| ------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------- |
| Root guardrail/e2e test changed | Run the touched test file via `pnpm test -- <path>`. | Broaden to related root suites when shared assumptions change.                    |
| Script test changed             | Run the touched `test/scripts/*.test.ts` file.       | Run associated script checks if behavior crosses release/package/docs boundaries. |

## Evidence limits

No test command was run in this wave; this card defines the smallest validation ladder.
