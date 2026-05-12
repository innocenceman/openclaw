# apps/provider-channel-settings/native-settings/mobile-native-settings

## 1. 功能结论

**修改**：ios harden gateway pairing setup、harden ios app build hygiene、talk honor configured speech locale；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：消息渠道使用者、渠道插件维护者
- 变更形态：删除或废弃旧入口、行为调整
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：修改 8、删除 1

## 3. 功能级详细差异

### 修复 harden ios app build hygiene

修复 harden ios app build hygiene

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm --dir ui test`。
- 置信度：`high`

### 修复 ios harden gateway pairing setup

修复 ios：harden gateway pairing setup

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm --dir ui test`。
- 置信度：`high`

### 修复 talk honor configured speech locale

修复 talk：honor configured speech locale

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm --dir ui test`。
- 置信度：`high`

### 删除/废弃变化

删除或废弃 `Gateway Setup Code`（`apps/ios/Sources/Gateway/GatewaySetupCode.swift`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm --dir ui test`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/provider-channel-settings/native-settings/mobile-native-settings`
- Changed path count: `9`
- Status counts: `修改 8、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `9` files, `+61` / `-103`

### 归纳依据

- 主要落点：native app runtime。
- 建议优先验证：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm --dir ui test`。
- 相关 commit 主题：fix(ios): harden gateway pairing setup；fix: harden ios app build hygiene；fix(talk): honor configured speech locale

### Dimension evidence

- `user-visible-修复-harden-ios-app-build-hygiene` / 修复 harden ios app build hygiene:
  - source: `path` [M] `apps/ios/Sources/Chat/IOSGatewayChatTransport.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Gateway/GatewayConnectConfig.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Gateway/GatewayConnectionIssue.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Gateway/GatewayHealthMonitor.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Gateway/GatewayProblemView.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Gateway/GatewayServiceResolver.swift` — semantic cue
- `maintenance-修复-ios-harden-gateway-pairing-setup` / 修复 ios harden gateway pairing setup:
  - source: `path` [M] `apps/ios/Sources/Chat/IOSGatewayChatTransport.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Gateway/GatewayConnectConfig.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Gateway/GatewayConnectionIssue.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Gateway/GatewayHealthMonitor.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Gateway/GatewayProblemView.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Gateway/GatewayServiceResolver.swift` — semantic cue
- `user-visible-修复-talk-honor-configured-speech-locale` / 修复 talk honor configured speech locale:
  - source: `path` [M] `apps/ios/Sources/Voice/TalkModeGatewayConfig.swift` — semantic cue
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `apps/ios/Sources/Gateway/GatewaySetupCode.swift`

### 路径证据

- 修改 `apps/ios/Sources/Chat/IOSGatewayChatTransport.swift`：调整 IOSGateway Chat Transport（native app runtime）。
- 修改 `apps/ios/Sources/Gateway/GatewayConnectConfig.swift`：调整 Gateway Connect Config（native app runtime）。
- 修改 `apps/ios/Sources/Gateway/GatewayConnectionIssue.swift`：调整 Gateway Connection Issue（native app runtime）。
- 修改 `apps/ios/Sources/Gateway/GatewayHealthMonitor.swift`：调整 Gateway Health Monitor（native app runtime）。
- 修改 `apps/ios/Sources/Gateway/GatewayProblemView.swift`：调整 Gateway Problem View（native app runtime）。
- 修改 `apps/ios/Sources/Gateway/GatewayServiceResolver.swift`：调整 Gateway Service Resolver（native app runtime）。
- 修改 `apps/ios/Sources/Gateway/TCPProbe.swift`：调整 TCPProbe（native app runtime）。
- 修改 `apps/ios/Sources/Voice/TalkModeGatewayConfig.swift`：调整 Talk Mode Gateway Config（native app runtime）。
- 删除 `apps/ios/Sources/Gateway/GatewaySetupCode.swift`：移除旧的 native app runtime 文件；需要确认没有调用方继续依赖这个路径。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `apps/provider-channel-settings/native-settings/mobile-native-settings` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/provider-channel-settings/native-settings/mobile-native-settings/change-to-test.md` 的验证建议。
