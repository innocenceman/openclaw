# Android Runtime, Gateway, and Node

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted Android validation

## Scope

Node foreground service/runtime, gateway session/protocol/discovery/TLS, invoke dispatcher, and node handlers.

## Leaf status

G007 attempted Android unit, lint, and assemble checks, but this host has no `java`/`JAVA_HOME`; raw logs are recorded under `evidence/apps-ui-verified-wave-2026-05-09/logs/`.

## Detail files

- `file-roles.md`: concrete path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `mobile-desktop-apps`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `388` (新增 159，修改 219，重命名/移动 2，删除 8).
- Target-existing changed paths listed here: `378`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `10`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 366 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff semantic refresh: v2026.5.4

- Feature: `mobile-desktop-apps`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `333`
- Target-existing changed paths reflected here: `326`
- Deleted or renamed-away paths omitted from active impact-map: `7`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.
<!-- version-diff-refresh:v2026.5.4:end -->
