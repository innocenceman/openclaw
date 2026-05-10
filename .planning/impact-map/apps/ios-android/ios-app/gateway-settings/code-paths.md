# iOS Gateway Settings Code Paths

Coverage: `exceptioned-deep-partial`

| Path | Trace start | Validation risk |
| --- | --- | --- |
| Owned iOS path | `Gateway*`, `OnboardingStateStore*`, `SettingsNetworkingHelpers*`, `SessionKey.swift` | Gateway trust/session state, SwiftUI behavior, extension/device permission behavior, signing, or generated project drift. |
| Shared kit edge | `apps/shared/OpenClawKit/**` | Cross-platform Swift behavior; validate shared package and app target together. |

## Trace rule

Start in the owning iOS source/test family, then widen to shared kit only when protocol/chat UI behavior crosses platform boundaries.
