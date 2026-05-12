# apps/ios-android/ios-app

## 1. 功能结论

**新增**：add authenticated iOS background presence beacon；**修改**：ios harden gateway pairing setup、apps/ios/readme list authenticated background presence beacons、harden ios app build hygiene、talk honor configured speech locale；**迁移/重构**：remove narrow SwiftLint suppressions；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：文档语义变化、新增能力或入口、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 4、修改 40

## 3. 功能级详细差异

### 修复 harden ios app build hygiene

修复 harden ios app build hygiene

- 验证提示：优先运行 `pnpm ios:gen`；`pnpm ios:build`。
- 置信度：`high`

### 修复 ios harden gateway pairing setup

修复 ios：harden gateway pairing setup

- 验证提示：优先运行 `pnpm ios:gen`；`pnpm ios:build`。
- 置信度：`high`

### 修复 talk honor configured speech locale

修复 talk：honor configured speech locale

- 验证提示：优先运行 `pnpm ios:gen`；`pnpm ios:build`。
- 置信度：`high`

### 文档同步 apps/ios/readme list authenticated background presence beacons

文档同步 apps/ios/readme：list authenticated background presence beacons

- 验证提示：优先运行 `pnpm ios:gen`；`pnpm ios:build`。
- 置信度：`high`

### 新增 add authenticated iOS background presence beacon

新增 add authenticated iOS background presence beacon

- 验证提示：优先运行 `pnpm ios:gen`；`pnpm ios:build`。
- 置信度：`high`

### 迁移/重构 remove narrow SwiftLint suppressions

迁移/重构 remove narrow SwiftLint suppressions

- 验证提示：优先运行 `pnpm ios:gen`；`pnpm ios:build`。
- 置信度：`high`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 Status Activity Builder，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm ios:gen`；`pnpm ios:build`。
- 置信度：`medium`

### 测试与文档语义变化

文档、说明或生成基线同步了 README docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm ios:gen`；`pnpm ios:build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm ios:gen`；`pnpm ios:build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/ios-app`
- Changed path count: `44`
- Status counts: `新增 4、修改 40`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `44` files, `+1097` / `-707`

### 归纳依据

- 主要落点：native app runtime、mobile app runtime。
- 建议优先验证：优先运行 `pnpm ios:gen`；`pnpm ios:build`。
- 相关 commit 主题：fix(ios): harden gateway pairing setup；docs(apps/ios/readme): list authenticated background presence beacons；feat: add authenticated iOS background presence beacon；refactor: remove narrow SwiftLint suppressions；fix: harden ios app build hygiene；fix(talk): honor configured speech locale

### Dimension evidence

- `user-visible-修复-harden-ios-app-build-hygiene` / 修复 harden ios app build hygiene:
  - source: `path` [M] `apps/ios/Config/Version.xcconfig` — semantic cue
  - source: `path` [M] `apps/ios/README.md` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Camera/CameraController.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Contacts/ContactsService.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Device/DeviceInfoHelper.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Device/NodeDisplayName.swift` — semantic cue
- `maintenance-修复-ios-harden-gateway-pairing-setup` / 修复 ios harden gateway pairing setup:
  - source: `path` [M] `apps/ios/Config/Version.xcconfig` — semantic cue
  - source: `path` [M] `apps/ios/README.md` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Camera/CameraController.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Contacts/ContactsService.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Device/DeviceInfoHelper.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Device/NodeDisplayName.swift` — semantic cue
- `user-visible-修复-talk-honor-configured-speech-locale` / 修复 talk honor configured speech locale:
  - source: `path` [M] `apps/ios/Sources/Voice/TalkModeManager.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Voice/TalkSpeechLocale.swift` — semantic cue
  - source: `path` [M] `apps/ios/Tests/Logic/TalkConfigParsingTests.swift` — semantic cue
  - source: `path` [M] `apps/ios/Tests/TalkSpeechLocaleTests.swift` — semantic cue
- `tests-docs-文档同步-apps-ios-readme-list-authenticated-backgro` / 文档同步 apps/ios/readme list authenticated background presence beacons:
  - source: `path` [M] `apps/ios/README.md` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Push/BackgroundAliveBeacon.swift` — semantic cue
  - source: `path` [M] `apps/ios/Tests/BackgroundAliveBeaconTests.swift` — semantic cue
- `maintenance-新增-add-authenticated-iOS-background-presence-be` / 新增 add authenticated iOS background presence beacon:
  - source: `path` [M] `apps/ios/Config/Version.xcconfig` — semantic cue
  - source: `path` [M] `apps/ios/README.md` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Camera/CameraController.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Contacts/ContactsService.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Device/DeviceInfoHelper.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Device/NodeDisplayName.swift` — semantic cue
- `migration-迁移-重构-remove-narrow-SwiftLint-suppressions` / 迁移/重构 remove narrow SwiftLint suppressions:
  - source: `path` [M] `apps/ios/Config/Version.xcconfig` — semantic cue
  - source: `path` [M] `apps/ios/README.md` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Camera/CameraController.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Contacts/ContactsService.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Device/DeviceInfoHelper.swift` — semantic cue
  - source: `path` [M] `apps/ios/Sources/Device/NodeDisplayName.swift` — semantic cue
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `apps/ios/Sources/Status/StatusActivityBuilder.swift` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `apps/ios/README.md` — docs evidence

### 路径证据

- 新增 `apps/ios/Sources/Push/BackgroundAliveBeacon.swift`：调整 Background Alive Beacon（native app runtime）。
- 新增 `apps/ios/Sources/Voice/TalkSpeechLocale.swift`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 新增 `apps/ios/Tests/BackgroundAliveBeaconTests.swift`：调整 Background Alive Beacon Tests（native app runtime）。
- 新增 `apps/ios/Tests/TalkSpeechLocaleTests.swift`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 修改 `apps/ios/Config/Version.xcconfig`：调整 Version（mobile app runtime）。
- 修改 `apps/ios/README.md`：调整 README docs（mobile app runtime）。
- 修改 `apps/ios/Sources/Camera/CameraController.swift`：调整 Camera Controller（native app runtime）。
- 修改 `apps/ios/Sources/Contacts/ContactsService.swift`：调整 Contacts Service（native app runtime）。
- 修改 `apps/ios/Sources/Device/DeviceInfoHelper.swift`：调整 Device Info Helper（native app runtime）。
- 修改 `apps/ios/Sources/Device/NodeDisplayName.swift`：调整 Node Display Name（native app runtime）。
- 修改 `apps/ios/Sources/EventKit/EventKitAuthorization.swift`：调整 Event Kit Authorization（native app runtime）。
- 修改 `apps/ios/Sources/Gateway/GatewayConnectionController.swift`：调整 Gateway Connection Controller（native app runtime）。
- 修改 `apps/ios/Sources/Gateway/GatewayDiscoveryModel.swift`：调整 Gateway Discovery Model（native app runtime）。
- 修改 `apps/ios/Sources/Gateway/GatewaySettingsStore.swift`：调整 Gateway Settings Store（native app runtime）。
- 修改 `apps/ios/Sources/HomeToolbar.swift`：调整 Home Toolbar（native app runtime）。
- 修改 `apps/ios/Sources/Location/LocationService.swift`：调整 Location Service（native app runtime）。
- 其余 28 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `apps/ios-android/ios-app` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/ios-android/ios-app/change-to-test.md` 的验证建议。
