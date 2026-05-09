# iOS App Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Gateway trust/discovery to connected runtime | `apps/ios/Sources/Gateway/GatewayConnectionController.swift`, `apps/ios/Sources/Gateway/GatewayDiscoveryModel.swift`, `apps/ios/Sources/Gateway/GatewaySettingsStore.swift` | Pairing/auth, TLS trust prompts, reconnect behavior, persisted gateway selection. |
| Settings to persisted state | `apps/ios/Sources/Settings/SettingsTab.swift` -> `apps/ios/Sources/Gateway/GatewaySettingsStore.swift` | Manual endpoint state, wake/talk toggles, discovery debug logs. |
| Onboarding to steady-state connection | `apps/ios/Sources/Onboarding/**` | First-run wizard, QR/setup-code import, gateway health checks. |
| Node model to capability execution | `apps/ios/Sources/Model/NodeAppModel.swift` -> `apps/ios/Sources/Capabilities/NodeCapabilityRouter.swift` | Runtime tool execution, capability availability, canvas/screen/voice behavior. |
| App config to build artifacts | `apps/ios/Config/**` | Bundle version/signing drift and Xcode project generation inputs. |

## Trace rule

Start with `Sources/Gateway/**` and `Sources/Settings/**` for user-facing connection drift. Pull in test files from `apps/ios/Tests/**` before widening to other app features.
