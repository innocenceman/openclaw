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
