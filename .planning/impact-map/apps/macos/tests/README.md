# macOS App Tests

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## Scope

Leaf module for `apps/macos/Tests/**`.

## Leaf status

The committed macOS test surface is concentrated under `apps/macos/Tests/OpenClawIPCTests/**`, with a mix of logic tests and SwiftUI smoke tests covering gateway, onboarding, voice, node mode, and settings flows.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `mobile-desktop-apps`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `2` (修改 2).
- Target-existing changed paths listed here: `2`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayEnvironmentTests.swift`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff semantic refresh: v2026.5.4

- Feature: `mobile-desktop-apps`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `14`
- Target-existing changed paths reflected here: `14`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.
<!-- version-diff-refresh:v2026.5.4:end -->
