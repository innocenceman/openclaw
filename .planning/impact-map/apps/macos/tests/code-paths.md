# macOS App Tests Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Gateway runtime regression path | `apps/macos/Tests/OpenClawIPCTests/Gateway*Tests.swift` | Connection, process, discovery, and health regressions. |
| Settings/onboarding smoke path | `apps/macos/Tests/OpenClawIPCTests/*Settings*Tests.swift`, `*Onboarding*Tests.swift`, `*SmokeTests.swift` | UI flow regressions without full packaged-app runs. |
| Voice/node runtime regression path | `apps/macos/Tests/OpenClawIPCTests/Voice*Tests.swift`, `Talk*Tests.swift`, `Node*Tests.swift` | Voice and native-node behavior drift. |

## Trace rule

Use this leaf to find the nearest committed macOS regression surface before expanding to manual app smoke.
