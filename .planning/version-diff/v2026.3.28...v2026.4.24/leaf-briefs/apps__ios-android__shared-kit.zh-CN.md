# apps/ios-android/shared-kit

## 一句话结论

shared kit 所属的 Native apps and packaging 有 16 个路径变化（新增 2、修改 14），兼容性判断为行为变化。

## Canonical facts

- Feature group: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/shared-kit`
- Changed path count: `16`
- Status counts: `新增 2、修改 14`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `16` files, `+2923` / `-170`

## 功能变化摘要

这个 leaf 属于 `Native apps and packaging`。本次版本差异显示它的主要变化是：新增 2、修改 14。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayConnectionProblem.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/ChatComposerTextViewTests.swift`

### 修改

- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatComposer.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayChannel.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayErrors.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayTLSPinning.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/Resources/tool-display.json`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/ScreenCommands.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/ToolDisplay.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/WatchCommands.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawProtocol/GatewayModels.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/GatewayErrorsTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/GatewayNodeSessionTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/TalkSystemSpeechSynthesizerTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/ToolDisplayRegistryTests.swift`
- `apps/shared/OpenClawKit/Tools/CanvasA2UI/bootstrap.js`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：Shared Swift helper or protocol changed | Run the nearest consuming XCTest target plus the relevant native app build path (`pnpm ios:build` or macOS app smoke) | Escalate to multiple native app leaves when protocol or resource packaging changes cross platforms.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `apps/ios-android/shared-kit` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/ios-android/shared-kit/change-to-test.md` 的验证建议。
