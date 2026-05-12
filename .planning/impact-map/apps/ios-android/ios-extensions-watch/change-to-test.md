# iOS Extensions and Watch Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Share extension or watch logic changed | `pnpm ios:gen`, then run the nearest Xcode extension/watch smoke on a real device when available | Escalate to `pnpm ios:build` when bundle wiring, entitlements, or app-wide handoff changes. |
| Widget/live-activity metadata changed | `pnpm ios:build` | Escalate to device-side widget/live-activity verification when lock-screen or background presentation changes. |

## Validation evidence

No iOS extension/watch builds or tests were run while promoting this leaf. Command surfaces were verified from root `package.json` and `apps/ios/README.md`.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `4` (修改 4).
- Target-existing path refs in active map: `4`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `apps/ios/ActivityWidget/OpenClawLiveActivity.swift`
- `apps/ios/ShareExtension/ShareViewController.swift`
- `apps/ios/WatchExtension/Sources/WatchConnectivityReceiver.swift`
- `apps/ios/WatchExtension/Sources/WatchInboxStore.swift`
- `apps/ios/WatchExtension/Sources/WatchInboxView.swift`
<!-- version-diff-refresh:v2026.5.4:end -->
