# Android App Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Connect UI to runtime session | `apps/android/app/src/main/java/ai/openclaw/app/ui/ConnectTabScreen.kt` -> `apps/android/app/src/main/java/ai/openclaw/app/NodeRuntime.kt` | Manual/setup-code connect flow, disconnect/reconnect behavior, gateway diagnostics. |
| Onboarding to persisted gateway state | `apps/android/app/src/main/java/ai/openclaw/app/ui/OnboardingFlow.kt` -> `apps/android/app/src/main/java/ai/openclaw/app/SecurePrefs.kt` | QR parsing, bootstrap token storage, manual endpoint defaults. |
| Settings toggles to capability availability | `apps/android/app/src/main/java/ai/openclaw/app/ui/SettingsSheet.kt` -> `apps/android/app/src/main/java/ai/openclaw/app/NodeRuntime.kt` | Camera/location/talk/wake behavior and permission-gated tools. |
| Gradle flavor/build path | `apps/android/app/build.gradle.kts` | Play vs third-party behavior, signing requirements, version naming, packaged assets. |

## Trace rule

Start with these files before widening to shared Android helpers. Follow into `apps/shared/OpenClawKit/**` only when resource or protocol boundaries are touched.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `40` changed path(s) to this final leaf. `40` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 32, 'A': 8}`.

- `apps/android/app/src/main/AndroidManifest.xml`
- `apps/android/app/src/main/java/ai/openclaw/app/AssistantLaunch.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/MainViewModel.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/NodeRuntime.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/NotificationForwardingPolicy.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/PermissionRequester.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/SecurePrefs.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/chat/ChatController.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/DeviceAuthStore.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewayDiscovery.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewayHostSecurity.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewaySession.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewayTls.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/CanvasActionTrust.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/ConnectionManager.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/DeviceHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/DeviceNotificationListenerService.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/InvokeCommandRegistry.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/InvokeDispatcher.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/SmsHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/SmsManager.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/CanvasScreen.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/ConnectTabScreen.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/GatewayConfigResolver.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/GatewayDiagnostics.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/GatewayPairingRetry.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/OnboardingFlow.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/PostOnboardingTabs.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/SettingsSheet.kt`
- `... 另有 10 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
