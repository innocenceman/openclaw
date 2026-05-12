# iOS App

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G007 split and validation evidence

## Scope

Leaf module for `apps/ios/Sources/**`, `apps/ios/Config/**`, and the closest committed XCTest coverage under `apps/ios/Tests/**`.

## Leaf status

This is a Wave 3 priority completion unit because it owns iOS gateway trust/persistence, onboarding, settings, and the primary node runtime.

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
- Changed paths in this leaf: `30` (修改 25，新增 5).
- Target-existing changed paths listed here: `30`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `apps/ios/Config/Signing.xcconfig`
- `apps/ios/Config/Version.xcconfig`
- `apps/ios/README.md`
- `apps/ios/Sources/Device/DeviceInfoHelper.swift`
- `apps/ios/Sources/Gateway/GatewayConnectionController.swift`
- `apps/ios/Sources/Gateway/GatewaySettingsStore.swift`
- `apps/ios/Sources/HomeToolbar.swift`
- `apps/ios/Sources/LiveActivity/LiveActivityManager.swift`
- `apps/ios/Sources/Model/NodeAppModel+Canvas.swift`
- `apps/ios/Sources/Model/NodeAppModel.swift`
- `apps/ios/Sources/Onboarding/GatewayOnboardingView.swift`
- `apps/ios/Sources/Onboarding/OnboardingWizardView.swift`
- `... 另有 18 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff semantic refresh: v2026.5.4

- Feature: `mobile-desktop-apps`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `44`
- Target-existing changed paths reflected here: `44`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `apps/ios/Config/Version.xcconfig`
- `apps/ios/README.md`
- `apps/ios/Sources/Camera/CameraController.swift`
- `apps/ios/Sources/Contacts/ContactsService.swift`
- `apps/ios/Sources/Device/DeviceInfoHelper.swift`
- `apps/ios/Sources/Device/NodeDisplayName.swift`
- `apps/ios/Sources/EventKit/EventKitAuthorization.swift`
- `apps/ios/Sources/Gateway/GatewayConnectionController.swift`
- `apps/ios/Sources/Gateway/GatewayDiscoveryModel.swift`
- `apps/ios/Sources/Gateway/GatewaySettingsStore.swift`
- `apps/ios/Sources/HomeToolbar.swift`
- `apps/ios/Sources/Location/LocationService.swift`
- `apps/ios/Sources/Location/SignificantLocationMonitor.swift`
- `apps/ios/Sources/Media/PhotoLibraryService.swift`
- `apps/ios/Sources/Model/NodeAppModel.swift`
- `apps/ios/Sources/Motion/MotionService.swift`
- `apps/ios/Sources/Onboarding/GatewayOnboardingView.swift`
- `apps/ios/Sources/Onboarding/OnboardingStateStore.swift`
- `apps/ios/Sources/Onboarding/OnboardingWizardView.swift`
- `apps/ios/Sources/Onboarding/QRScannerView.swift`
- `apps/ios/Sources/OpenClawApp.swift`
- `apps/ios/Sources/Push/BackgroundAliveBeacon.swift`
- `apps/ios/Sources/Push/ExecApprovalNotificationBridge.swift`
- `apps/ios/Sources/Push/PushRegistrationManager.swift`
- `apps/ios/Sources/Push/PushRelayClient.swift`
- `apps/ios/Sources/Reminders/RemindersService.swift`
- `apps/ios/Sources/RootCanvas.swift`
- `apps/ios/Sources/Screen/ScreenController.swift`
- `apps/ios/Sources/Screen/ScreenRecordService.swift`
- `apps/ios/Sources/Services/NodeServiceProtocols.swift`
- `apps/ios/Sources/Services/NotificationService.swift`
- `apps/ios/Sources/Services/WatchConnectivityTransport.swift`
- `apps/ios/Sources/Services/WatchMessagingPayloadCodec.swift`
- `apps/ios/Sources/Settings/SettingsTab.swift`
- `apps/ios/Sources/Settings/VoiceWakeWordsSettingsView.swift`
- `apps/ios/Sources/Status/StatusActivityBuilder.swift`
- `apps/ios/Sources/Status/StatusGlassCard.swift`
- `apps/ios/Sources/Status/StatusPill.swift`
- `apps/ios/Sources/Voice/TalkModeManager.swift`
- `apps/ios/Sources/Voice/TalkSpeechLocale.swift`
- … plus 4 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.
<!-- version-diff-refresh:v2026.5.4:end -->
