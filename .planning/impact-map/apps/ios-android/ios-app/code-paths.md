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
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `30` changed path(s) to this final leaf. `30` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 25, 'A': 5}`.

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
- `apps/ios/Sources/OpenClawApp.swift`
- `apps/ios/Sources/Push/ExecApprovalNotificationBridge.swift`
- `apps/ios/Sources/RootCanvas.swift`
- `apps/ios/Sources/RootTabs.swift`
- `apps/ios/Sources/Screen/ScreenController.swift`
- `apps/ios/Sources/Screen/ScreenWebView.swift`
- `apps/ios/Sources/Services/NodeServiceProtocols.swift`
- `apps/ios/Sources/Services/NotificationService.swift`
- `apps/ios/Sources/Services/WatchConnectivityTransport.swift`
- `apps/ios/Sources/Services/WatchMessagingPayloadCodec.swift`
- `apps/ios/Sources/Services/WatchMessagingService.swift`
- `apps/ios/Sources/Settings/SettingsTab.swift`
- `apps/ios/Sources/Status/StatusActivityBuilder.swift`
- `apps/ios/Sources/Voice/TalkModeManager.swift`
- `apps/ios/Tests/ExecApprovalNotificationBridgeTests.swift`
- `apps/ios/Tests/NodeAppModelInvokeTests.swift`
- `apps/ios/Tests/OpenClawAppDelegateTests.swift`
- `apps/ios/Tests/ScreenControllerTests.swift`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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
