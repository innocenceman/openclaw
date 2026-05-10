# Profiles and Suites Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

| Change type                     | First validation                                                                         | Escalation trigger                                                                |
| ------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Vitest wrapper/profile changed  | `pnpm test -- test/scripts/run-vitest-profile.test.ts test/test-runner-manifest.test.ts` | Full or low-memory `pnpm test` profile when runner behavior is shared.            |
| Root guardrail/e2e test changed | Run the touched test file via `pnpm test -- <path>`.                                     | Broaden to related root suites when shared assumptions change.                    |
| Script test changed             | Run the touched `test/scripts/*.test.ts` file.                                           | Run associated script checks if behavior crosses release/package/docs boundaries. |

## Evidence limits

No test command was run in this wave; this card defines the smallest validation ladder.
