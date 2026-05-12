# apps/ios-android/ios-app

## 一句话结论

ios app 所属的 Native apps and packaging 有 30 个路径变化（新增 5、修改 25），兼容性判断为行为变化。

## Canonical facts

- Feature group: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/ios-app`
- Changed path count: `30`
- Status counts: `新增 5、修改 25`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `30` files, `+3342` / `-414`

## 功能变化摘要

这个 leaf 属于 `Native apps and packaging`。本次版本差异显示它的主要变化是：新增 5、修改 25。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `apps/ios/Sources/Push/ExecApprovalNotificationBridge.swift`
- `apps/ios/Sources/Services/WatchConnectivityTransport.swift`
- `apps/ios/Sources/Services/WatchMessagingPayloadCodec.swift`
- `apps/ios/Tests/ExecApprovalNotificationBridgeTests.swift`
- `apps/ios/Tests/OpenClawAppDelegateTests.swift`

### 修改

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
- `apps/ios/Sources/RootCanvas.swift`
- `apps/ios/Sources/RootTabs.swift`
- `apps/ios/Sources/Screen/ScreenController.swift`
- `apps/ios/Sources/Screen/ScreenWebView.swift`
- `apps/ios/Sources/Services/NodeServiceProtocols.swift`
- `apps/ios/Sources/Services/NotificationService.swift`
- `apps/ios/Sources/Services/WatchMessagingService.swift`
- `apps/ios/Sources/Settings/SettingsTab.swift`
- `apps/ios/Sources/Status/StatusActivityBuilder.swift`
- `apps/ios/Sources/Voice/TalkModeManager.swift`
- `apps/ios/Tests/NodeAppModelInvokeTests.swift`
- `apps/ios/Tests/ScreenControllerTests.swift`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：Gateway, onboarding, or settings logic changed | `pnpm ios:gen`, then run the nearest XCTest or connected-iPhone smoke from Xcode | Escalate to `pnpm ios:build` when project generation, signing inputs, or broader app launch behavior changes.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `apps/ios-android/ios-app` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/ios-android/ios-app/change-to-test.md` 的验证建议。
