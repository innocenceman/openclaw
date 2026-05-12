# apps/ios-android/android-app/runtime-gateway-node

## 一句话结论

runtime gateway node 所属的 Native apps and packaging 有 388 个路径变化（新增 159、修改 219、删除 8、重命名 2），兼容性判断为行为变化。

## Canonical facts

- Feature group: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/android-app/runtime-gateway-node`
- Changed path count: `388`
- Status counts: `新增 159、修改 219、删除 8、重命名 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `388` files, `+55243` / `-10761`

## 功能变化摘要

这个 leaf 属于 `Native apps and packaging`。本次版本差异显示它的主要变化是：新增 159、修改 219、删除 8、重命名 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `apps/android/app/src/test/java/ai/openclaw/app/AssistantLaunchTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/NotificationForwardingPolicyTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsNotificationForwardingTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/DeviceAuthStoreTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/DeviceNotificationListenerServiceTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/InvokeDispatcherTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/CanvasA2UIActionBridgeTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/OnboardingFlowLogicTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/SettingsSheetNotificationAppsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/chat/ChatComposerDraftTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/chat/ChatSheetContentTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkAudioPlayerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkModeManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkSpeakClientTest.kt`
- `src/gateway/AGENTS.md`
- `src/gateway/CLAUDE.md`
- `src/gateway/android-node.capabilities.policy-config.test.ts`
- `src/gateway/android-node.capabilities.policy-source.test.ts`
- `src/gateway/auth-resolve.ts`
- `src/gateway/auth-surface-resolution.ts`
- `src/gateway/auth-token-resolution.ts`
- `src/gateway/canvas-documents.test.ts`
- `src/gateway/canvas-documents.ts`
- `src/gateway/client-bootstrap.test.ts`
- `src/gateway/client-bootstrap.ts`
- `src/gateway/config-recovery-notice.test.ts`
- `src/gateway/config-recovery-notice.ts`
- `src/gateway/control-plane-rate-limit.test.ts`
- `src/gateway/control-reply-text.ts`
- … 另有 129 个路径，详见 `leaf-impact.json`。

### 修改

- `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTimeoutTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/CallLogHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/CanvasActionTrustTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/ConnectionManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/DeviceHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/InvokeCommandRegistryTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/LocationHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/NotificationsHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/SmsManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/SystemHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/protocol/OpenClawProtocolConstantsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/GatewayConfigResolverTest.kt`
- `src/gateway/agent-list.ts`
- `src/gateway/android-node.capabilities.live.test.ts`
- `src/gateway/assistant-identity.ts`
- `src/gateway/auth-config-utils.ts`
- `src/gateway/auth-install-policy.ts`
- `src/gateway/auth-rate-limit.test.ts`
- `src/gateway/auth-rate-limit.ts`
- `src/gateway/channel-status-patches.test.ts`
- `src/gateway/channel-status-patches.ts`
- `src/gateway/chat-abort.ts`
- `src/gateway/chat-attachments.test.ts`
- `src/gateway/chat-attachments.ts`
- `src/gateway/chat-sanitize.test.ts`
- `src/gateway/chat-sanitize.ts`
- `src/gateway/cli-session-history.claude.ts`
- `src/gateway/cli-session-history.merge.ts`
- … 另有 189 个路径，详见 `leaf-impact.json`。

### 删除

- `src/gateway/http-auth-helpers.test.ts`
- `src/gateway/http-auth-helpers.ts`
- `src/gateway/openai-http.message-channel.test.ts`
- `src/gateway/server.config-apply.test.ts`
- `src/gateway/server.openai-compatible-http-write-scope-bypass.poc.test.ts`
- `src/gateway/server.send-telegram-target-writeback-scope.test.ts`
- `src/gateway/server.skills-status.test.ts`
- `src/gateway/server.tools-effective.test.ts`

### 重命名

- `src/gateway/server-startup-matrix-migration.test.ts`
- `src/gateway/server-startup-matrix-migration.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- CLI/agent 使用者
- agent runtime 集成方

## 建议验证

- 首选验证：2. Run `pnpm android:test` for app unit coverage.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `apps/ios-android/android-app/runtime-gateway-node` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/ios-android/android-app/runtime-gateway-node/change-to-test.md` 的验证建议。
