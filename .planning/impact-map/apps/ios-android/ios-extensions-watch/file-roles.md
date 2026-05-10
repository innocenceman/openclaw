# iOS Extensions and Watch File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path | Role | Evidence state | Impact notes |
| --- | --- | --- | --- |
| `apps/ios/ShareExtension/ShareViewController.swift` | Share-extension entrypoint for forwarding shared content. | `exceptioned-deep-partial` | Touches share-to-agent flows and deep-link handoff. |
| `apps/ios/ActivityWidget/OpenClawActivityWidgetBundle.swift`, `apps/ios/ActivityWidget/OpenClawLiveActivity.swift` | Live Activity/widget presentation. | `exceptioned-deep-partial` | Affects glanceable gateway/session status UI. |
| `apps/ios/WatchExtension/Sources/**` | Watch runtime and inbox presentation. | `exceptioned-deep-partial` | Touches watch-side message/state display. |
| `apps/ios/ShareExtension/Info.plist`, `apps/ios/WatchApp/Info.plist`, `apps/ios/WatchExtension/Info.plist`, `apps/ios/ActivityWidget/Info.plist` | Extension/watch bundle metadata. | `exceptioned-deep-partial` | Important for packaging and entitlements drift. |
| `apps/ios/WatchApp/Assets.xcassets/**` | Watch app icon assets. | `exceptioned-deep-partial` | Mostly packaging/branding impact, low runtime logic risk. |

## Update rule

Promote individual watch or widget slices only if they gain their own dedicated test or release workflow.
