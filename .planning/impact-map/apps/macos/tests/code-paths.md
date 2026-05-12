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
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `2` changed path(s) to this final leaf. `2` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 2}`.

- `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayEnvironmentTests.swift`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayChannelConnectTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayChannelDeviceTokenRetryTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayConnectionControlTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayDiscoverySelectionSupportTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayEndpointStoreTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayLaunchAgentManagerTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayProcessManagerTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/OnboardingRemoteAuthPromptTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/OnboardingWizardStepViewTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/VoicePushToTalkTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/VoiceWakeForwarderTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/VoiceWakeRuntimeTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/VoiceWakeTesterTests.swift`
<!-- version-diff-refresh:v2026.5.4:end -->
