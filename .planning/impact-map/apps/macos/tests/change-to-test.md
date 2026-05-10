# macOS App Tests Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Behavior with existing macOS test coverage changed | Run the nearest `apps/macos/Tests/OpenClawIPCTests/**` target on a Mac | Escalate to `scripts/restart-mac.sh` when the regression surface depends on packaged app lifecycle or launch-agent behavior. |
| Smoke-test-only UI changed | Run the closest smoke test and a manual Mac UI smoke if needed | Escalate to broader packaged-app verification when onboarding/menu/settings flows visibly change. |

## Validation evidence

No macOS tests were run while promoting this leaf. Guidance is based on the observed committed test inventory.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `2` (修改 2).
- Target-existing path refs in active map: `2`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
