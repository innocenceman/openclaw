# iOS Extensions and Watch Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Share surface to app/gateway handoff | `apps/ios/ShareExtension/ShareViewController.swift` | Deep-link payload handling, shared content import, gateway session targeting. |
| Widget/live activity render path | `apps/ios/ActivityWidget/**` | Background status presentation and lock-screen/live activity behavior. |
| Watch inbox path | `apps/ios/WatchExtension/Sources/**` | Watch message summaries, reply normalization, connectivity state. |
| Extension/watch metadata path | `apps/ios/*/Info.plist` | Bundle capabilities, install packaging, extension registration. |

## Trace rule

Start with the concrete extension or watch entrypoint before widening into shared app or shared-kit code.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `4` changed path(s) to this final leaf. `4` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 4}`.

- `apps/ios/WatchExtension/Sources/OpenClawWatchApp.swift`
- `apps/ios/WatchExtension/Sources/WatchConnectivityReceiver.swift`
- `apps/ios/WatchExtension/Sources/WatchInboxStore.swift`
- `apps/ios/WatchExtension/Sources/WatchInboxView.swift`

<!-- version-diff-refresh:v2026.4.24:end -->
