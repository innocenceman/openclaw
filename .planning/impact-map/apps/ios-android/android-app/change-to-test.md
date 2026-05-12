# Android App Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Runtime or settings logic changed | `pnpm android:test` | Escalate to `pnpm android:assemble` and `pnpm android:install` when the change affects Compose UI, permissions, or device-only flows. |
| Connection/onboarding UI changed | `pnpm android:assemble` plus device install/relaunch via `pnpm android:install` | Escalate to `pnpm android:run` on a connected phone when QR/manual connect or trust prompts change. |
| Gradle/flavor/version wiring changed | `pnpm android:assemble` | Escalate to `pnpm android:lint` and flavor-specific build/install when signing, product flavors, or permissions change. |

## Validation evidence

No Android tests or builds were run while promoting this leaf. Commands were verified from root `package.json` and `apps/android/README.md`.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `40` (修改 32，新增 8).
- Target-existing path refs in active map: `40`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
