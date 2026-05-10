# macOS App Tests File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path | Role | Evidence state | Impact notes |
| --- | --- | --- | --- |
| `apps/macos/Tests/OpenClawIPCTests/Gateway*Tests.swift` | Gateway/environment/process regression coverage. | `exceptioned-deep-partial` | Closest test surface for connection/process changes. |
| `apps/macos/Tests/OpenClawIPCTests/Onboarding*Tests.swift`, `*SmokeTests.swift` | Onboarding and SwiftUI smoke coverage. | `exceptioned-deep-partial` | Useful for settings and first-run UI drift. |
| `apps/macos/Tests/OpenClawIPCTests/Voice*Tests.swift`, `Talk*Tests.swift` | Voice wake, push-to-talk, and talk-mode regression coverage. | `exceptioned-deep-partial` | Relevant when mic/audio/runtime voice flows change. |
| `apps/macos/Tests/OpenClawIPCTests/Node*Tests.swift`, `MacNode*Tests.swift` | Node mode and device-runtime regression coverage. | `exceptioned-deep-partial` | Crosses app/node capability boundaries. |
| `apps/macos/Tests/OpenClawIPCTests/Test*`, `*Support.swift`, `Placeholder.swift` | Test helpers and coverage placeholders. | `exceptioned-deep-partial` | Supporting surface; check before deleting seemingly-unused helpers. |

## Update rule

When a production slice gains or loses dedicated macOS tests, reflect that shift here and in the owning app leaf.
