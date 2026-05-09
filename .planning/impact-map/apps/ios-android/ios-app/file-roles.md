# iOS App File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path | Role | Evidence state | Impact notes |
| --- | --- | --- | --- |
| `apps/ios/Sources/OpenClawApp.swift`, `apps/ios/Sources/RootTabs.swift`, `apps/ios/Sources/RootView.swift` | App shell and tab-level entrypoints. | `exceptioned-deep-partial` | Touches launch behavior and cross-tab navigation. |
| `apps/ios/Sources/Gateway/**` | Gateway discovery, trust prompts, connection controller, and secure gateway state. | `exceptioned-deep-partial` | Highest-risk iOS runtime slice for pairing/auth drift. |
| `apps/ios/Sources/Settings/**` | Device and gateway settings UI. | `exceptioned-deep-partial` | Controls wake/talk/network/manual endpoint settings. |
| `apps/ios/Sources/Model/NodeAppModel.swift`, `apps/ios/Sources/Capabilities/NodeCapabilityRouter.swift` | Node runtime model and capability routing. | `exceptioned-deep-partial` | Affects what the iOS node can do once connected. |
| `apps/ios/Config/Signing.xcconfig`, `apps/ios/Config/Version.xcconfig` | Build signing and version inputs. | `exceptioned-deep-partial` | Check with project generation/build changes. |
| `apps/ios/Tests/**` | XCTest coverage for gateway, onboarding, screen, talk, and voice-wake behavior. | `exceptioned-deep-partial` | Closest regression surface for app logic. |

## Update rule

Split this leaf only when an iOS slice (for example gateway, screen, or voice) starts carrying an independently maintained validation workflow.
