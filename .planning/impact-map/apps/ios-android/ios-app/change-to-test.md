# iOS App Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Gateway, onboarding, or settings logic changed | `pnpm ios:gen`, then run the nearest XCTest or connected-iPhone smoke from Xcode | Escalate to `pnpm ios:build` when project generation, signing inputs, or broader app launch behavior changes. |
| App shell or capability-routing changed | `pnpm ios:build` | Escalate to manual device rebuild/relaunch when root tabs, node capability routing, or permission-gated flows change. |
| Version/signing inputs changed | `pnpm ios:build` | Escalate to beta/archive flows only when packaging or distribution metadata changes. |

## Validation evidence

No iOS builds or tests were run while promoting this leaf. Commands were verified from root `package.json` and `apps/ios/README.md`.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `30` (修改 25，新增 5).
- Target-existing path refs in active map: `30`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
