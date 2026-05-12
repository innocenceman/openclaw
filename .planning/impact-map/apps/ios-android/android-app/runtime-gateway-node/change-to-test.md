# Android Runtime, Gateway, and Node Change-to-Test

Coverage: `exceptioned-deep-partial`

1. Run the closest `apps/android/app/src/test/**` focused test for the touched file.
2. Run `pnpm android:test` for app unit coverage.
3. Run `pnpm android:lint` for ktlint checks.
4. Run `pnpm android:assemble` for Play debug package compile; use `pnpm android:assemble:third-party` when third-party flavor code changes.

G007 evidence: `pnpm android:test`, `pnpm android:lint`, and `pnpm android:assemble` all failed immediately because no Java runtime or `JAVA_HOME` is available.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `388` (新增 159，修改 219，重命名/移动 2，删除 8).
- Target-existing path refs in active map: `378`; deleted/renamed-away refs kept only in transition artifacts: `10`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
