# macOS App Sources Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Settings, onboarding, or menu shell changed | Run the nearest macOS XCTest or smoke on the Mac | Escalate to `scripts/restart-mac.sh` when the flow crosses gateway lifecycle or packaged app launch behavior. |
| Gateway process/runtime changed | `scripts/restart-mac.sh` on the Mac | Escalate to packaged-app verification when launch agent, attach-only behavior, or restart wiring changes. |
| Node mode or voice surface changed | Run the nearest macOS XCTest/smoke for that surface | Escalate to broader runtime smoke when the change crosses app shell, permissions, or gateway coordination. |

## Validation evidence

No macOS tests or app restarts were run while promoting this leaf. Guidance is grounded in observed source/test layout and the repo-documented restart flow.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `36` (修改 34，新增 2).
- Target-existing path refs in active map: `36`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
