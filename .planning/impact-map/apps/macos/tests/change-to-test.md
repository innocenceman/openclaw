# macOS App Tests Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Behavior with existing macOS test coverage changed | Run the nearest `apps/macos/Tests/OpenClawIPCTests/**` target on a Mac | Escalate to `scripts/restart-mac.sh` when the regression surface depends on packaged app lifecycle or launch-agent behavior. |
| Smoke-test-only UI changed | Run the closest smoke test and a manual Mac UI smoke if needed | Escalate to broader packaged-app verification when onboarding/menu/settings flows visibly change. |

## Validation evidence

No macOS tests were run while promoting this leaf. Guidance is based on the observed committed test inventory.
