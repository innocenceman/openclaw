# Android App

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G007 split and validation evidence

## Scope

Leaf module for `apps/android/app/**`, including Gradle app-module wiring, Android runtime state, gateway connection UI, onboarding UI, and persisted settings/auth state.

## Leaf status

This is a Wave 3 priority completion unit because it owns Android gateway connectivity, permission-sensitive settings, and the primary device runtime.

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
- Changed paths in this leaf: `40` (修改 32，新增 8).
- Target-existing changed paths listed here: `40`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 28 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff semantic refresh: v2026.5.4

- Feature: `mobile-desktop-apps`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `94`
- Target-existing changed paths reflected here: `90`
- Deleted or renamed-away paths omitted from active impact-map: `4`

### Target-version changed paths

- `apps/android/README.md`
- `apps/android/app/lint.xml`
- `apps/android/app/src/main/AndroidManifest.xml`
- `apps/android/app/src/main/java/ai/openclaw/app/DeviceNames.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/LocationMode.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/MainViewModel.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/NodeApp.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/NodeForegroundService.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/NodeRuntime.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/NotificationForwardingPolicy.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/PermissionRequester.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/SecurePrefs.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/SessionKey.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/VoiceCaptureMode.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/VoiceWakeMode.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/WakeWords.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/chat/ChatController.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/DeviceAuthStore.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/DeviceIdentityStore.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewayDiscovery.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewayEndpoint.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewaySession.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewayTls.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/A2UIHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/CalendarHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/CameraCaptureManager.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/CameraHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/CanvasActionTrust.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/CanvasController.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/ConnectionManager.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/ContactsHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/DebugHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/DeviceHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/DeviceNotificationListenerService.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/InvokeCommandRegistry.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/InvokeDispatcher.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/JpegSizeLimiter.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/LocationCaptureManager.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/LocationHandler.kt`
- … plus 50 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.
<!-- version-diff-refresh:v2026.5.4:end -->
