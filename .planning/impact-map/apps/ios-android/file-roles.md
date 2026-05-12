# iOS and Android Apps File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path | Role | Evidence state | Notes |
| --- | --- | --- | --- |
| `apps/ios/Sources/**` | iOS app runtime, gateway UI, device capability, and settings implementation. | `exceptioned-deep-partial` | Primary iPhone/iPad behavior surface. |
| `apps/ios/Config/**` | iOS signing/version xcconfig inputs. | `exceptioned-deep-partial` | Check alongside `apps/ios/project.yml` when build settings move. |
| `apps/ios/Tests/**` | iOS XCTest coverage for gateway, onboarding, screen, talk, and voice wake behavior. | `exceptioned-deep-partial` | No separate iOS test leaf exists in this subtree. |
| `apps/android/app/**` | Android app runtime, connection UI, settings UI, and Gradle app module. | `exceptioned-deep-partial` | Includes play/third-party flavor wiring. |
| `apps/android/benchmark/**` | Android macrobenchmark module. | `exceptioned-deep-partial` | Currently build-config-heavy with minimal committed source. |
| `apps/shared/OpenClawKit/**` | Shared Swift package consumed by native apps. | `exceptioned-deep-partial` | Holds protocol, reusable device/gateway helpers, and chat UI primitives. |

## Update rule

When a touched file reveals a new independently owned mobile slice, add it here and update the matching leaf docs in the same change set.
