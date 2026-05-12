# apps/ios-android/android-app

## 一句话结论

android app 所属的 Native apps and packaging 有 40 个路径变化（新增 8、修改 32），兼容性判断为行为变化。

## Canonical facts

- Feature group: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/android-app`
- Changed path count: `40`
- Status counts: `新增 8、修改 32`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `40` files, `+3653` / `-502`

## 功能变化摘要

这个 leaf 属于 `Native apps and packaging`。本次版本差异显示它的主要变化是：新增 8、修改 32。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `apps/android/app/src/main/java/ai/openclaw/app/AssistantLaunch.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/NotificationForwardingPolicy.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewayHostSecurity.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/GatewayPairingRetry.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/voice/TalkAudioPlayer.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/voice/TalkSpeakClient.kt`
- `apps/android/app/src/main/res/values/assistant.xml`
- `apps/android/app/src/main/res/xml/shortcuts.xml`

### 修改

- `apps/android/app/src/main/AndroidManifest.xml`
- `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/MainViewModel.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/NodeRuntime.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/PermissionRequester.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/SecurePrefs.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/chat/ChatController.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/DeviceAuthStore.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewayDiscovery.kt`
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
- `apps/android/app/src/main/java/ai/openclaw/app/ui/OnboardingFlow.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/PostOnboardingTabs.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/SettingsSheet.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/chat/ChatComposer.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/chat/ChatMarkdown.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/chat/ChatMessageViews.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/chat/ChatSheetContent.kt`
- … 另有 2 个路径，详见 `leaf-impact.json`。

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：Runtime or settings logic changed | `pnpm android:test` | Escalate to `pnpm android:assemble` and `pnpm android:install` when the change affects Compose UI, permissions, or device-only flows.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `apps/ios-android/android-app` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/ios-android/android-app/change-to-test.md` 的验证建议。
