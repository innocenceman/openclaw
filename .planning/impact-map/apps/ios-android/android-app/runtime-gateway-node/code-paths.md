# Android Runtime, Gateway, and Node Code Paths

Coverage: `exceptioned-deep-partial`

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Owned Android path | `NodeRuntime.kt`, `NodeForegroundService.kt`, `gateway/**`, `node/**` | Gateway session state, capability availability, Compose UI behavior, flavor-specific packaging, or persisted secure state. |
| Shared protocol edge | `apps/shared/OpenClawKit/**` and gateway protocol constants | Cross-platform payload drift; pair with protocol/package checks when changed. |

## Trace rule

Start in the Android file family above, then widen to shared kit or gateway protocol only when payload/schema behavior crosses platform boundaries.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `388` changed path(s) to this final leaf. `378` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 159, 'M': 219, 'R': 2, 'D': 8}`.

- `apps/android/app/src/test/java/ai/openclaw/app/AssistantLaunchTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/NotificationForwardingPolicyTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsNotificationForwardingTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/DeviceAuthStoreTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTimeoutTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/CallLogHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/CanvasActionTrustTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/ConnectionManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/DeviceHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/DeviceNotificationListenerServiceTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/InvokeCommandRegistryTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/InvokeDispatcherTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/LocationHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/NotificationsHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/SmsManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/SystemHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/protocol/OpenClawProtocolConstantsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/CanvasA2UIActionBridgeTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/GatewayConfigResolverTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/OnboardingFlowLogicTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/SettingsSheetNotificationAppsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/chat/ChatComposerDraftTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/chat/ChatSheetContentTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkAudioPlayerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkModeManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkSpeakClientTest.kt`
- `src/gateway/AGENTS.md`
- `... 另有 348 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/NodeForegroundServiceTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/NotificationForwardingPolicyTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsNotificationForwardingTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/CalendarHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/ConnectionManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/ContactsHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/DeviceHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/DeviceNotificationListenerServiceTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/InvokeCommandRegistryTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/InvokeDispatcherTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/MotionHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/NodePresenceAliveBeaconTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/NotificationsHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/PhotosHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/SystemHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/protocol/OpenClawProtocolConstantsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/GatewayConfigResolverTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/chat/ChatSheetContentTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkDirectiveParserTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkModeConfigParsingTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkModeManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkSpeakClientTest.kt`
- `src/gateway/agent-command.test-helpers.ts`
- `src/gateway/agent-list.ts`
- `src/gateway/android-node.capabilities.live.test.ts`
- `src/gateway/assistant-identity.test.ts`
- `src/gateway/assistant-identity.ts`
- `src/gateway/auth-config-utils.ts`
- `src/gateway/auth-rate-limit.ts`
- `src/gateway/auth-resolve.ts`
- `src/gateway/auth-token-resolution.ts`
- `src/gateway/canvas-capability.ts`
- `src/gateway/canvas-documents.ts`
- `src/gateway/chat-abort.ts`
- `src/gateway/chat-attachments.test.ts`
- `src/gateway/chat-attachments.ts`
- `src/gateway/chat-display-projection.ts`
- … plus 286 more target-existing changed paths.

Deleted or renamed-away paths omitted from this active leaf: `7`. See the transition directory under `.planning/version-diff/` for historical evidence.
<!-- version-diff-refresh:v2026.5.4:end -->
