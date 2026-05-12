# apps/ios-android/android-app

## 1. 功能结论

**新增**：android add authenticated presence alive beacons；**修改**：android remediate app CodeQL alerts、android include third-party sensitive handlers、android update dependencies and lint config、android keep camera temp files private；**迁移/重构**：android split sensitive features by flavor；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`ui`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：删除或废弃旧入口、文档语义变化、新增能力或入口、行为调整、迁移或重命名
- 特殊形态：contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 10、修改 76、删除 2、重命名 6

## 3. 功能级详细差异

### 修复 android avoid trust-all TLS probing

修复 android：avoid trust-all TLS probing

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm android:install`。
- 置信度：`high`

### 修复 android disable app data backup

修复 android：disable app data backup

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm android:install`。
- 置信度：`high`

### 修复 android harden canvas webview bridge

修复 android：harden canvas webview bridge

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm android:install`。
- 置信度：`high`

### 修复 android include third-party sensitive handlers

修复 android：include third-party sensitive handlers

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm android:install`。
- 置信度：`high`

### 修复 android keep camera temp files private

修复 android：keep camera temp files private

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm android:install`。
- 置信度：`high`

### 修复 android remediate app CodeQL alerts

修复 android：remediate app CodeQL alerts

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm android:install`。
- 置信度：`high`

### 修复 android use absolute logcat path

修复 android：use absolute logcat path

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm android:install`。
- 置信度：`high`

### 新增 android add authenticated presence alive beacons

新增 android：add authenticated presence alive beacons

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm android:install`。
- 置信度：`high`

### 构建/发布调整 android update dependencies and lint config

构建/发布调整 android：update dependencies and lint config

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm android:install`。
- 置信度：`high`

### 迁移/重构 android split sensitive features by flavor

迁移/重构 android：split sensitive features by flavor

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm android:install`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 Android manifest/permissions、Gateway Config Resolver、Talk Mode Gateway Config、Sensitive Feature Config，需要按契约边界审查。

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm android:install`。
- 置信度：`medium`

### 测试与文档语义变化

文档、说明或生成基线同步了 README docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm android:install`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `Sms Manager`（`apps/android/app/src/main/java/ai/openclaw/app/node/SmsManager.kt`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `Android manifest/permissions`（`apps/android/app/src/play/AndroidManifest.xml`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`Call Log Handler` 路径（`apps/android/app/src/main/java/ai/openclaw/app/node/CallLogHandler.kt`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`Sms Handler` 路径（`apps/android/app/src/main/java/ai/openclaw/app/node/SmsHandler.kt`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`Sms Handler` 路径（`apps/android/app/src/play/java/ai/openclaw/app/node/SmsHandler.kt`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`Call Log Handler Test` 路径（`apps/android/app/src/testThirdParty/java/ai/openclaw/app/node/CallLogHandlerTest.kt`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm android:install`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/android-app`
- Changed path count: `94`
- Status counts: `新增 10、修改 76、删除 2、重命名 6`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `92` files, `+6266` / `-3075`

### 归纳依据

- 主要落点：native app runtime、mobile app runtime、Android manifest/permissions、Android build/lint configuration。
- 建议优先验证：优先运行 `pnpm android:test`；`pnpm android:assemble`；`pnpm android:install`。
- 相关 commit 主题：fix(android): remediate app CodeQL alerts；fix(android): include third-party sensitive handlers；refactor(android): split sensitive features by flavor；build(android): update dependencies and lint config；feat(android): add authenticated presence alive beacons；fix(android): keep camera temp files private；fix(android): use absolute logcat path；fix(android): avoid trust-all TLS probing

### Dimension evidence

- `maintenance-修复-android-avoid-trust-all-TLS-probing` / 修复 android avoid trust-all TLS probing:
  - source: `path` [M] `apps/android/README.md` — semantic cue
  - source: `path` [M] `apps/android/app/lint.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/AndroidManifest.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/DeviceNames.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/LocationMode.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt` — semantic cue
- `maintenance-修复-android-disable-app-data-backup` / 修复 android disable app data backup:
  - source: `path` [M] `apps/android/README.md` — semantic cue
  - source: `path` [M] `apps/android/app/lint.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/AndroidManifest.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/DeviceNames.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/LocationMode.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt` — semantic cue
- `maintenance-修复-android-harden-canvas-webview-bridge` / 修复 android harden canvas webview bridge:
  - source: `path` [M] `apps/android/README.md` — semantic cue
  - source: `path` [M] `apps/android/app/lint.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/AndroidManifest.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/DeviceNames.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/LocationMode.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt` — semantic cue
- `maintenance-修复-android-include-third-party-sensitive-handle` / 修复 android include third-party sensitive handlers:
  - source: `path` [M] `apps/android/README.md` — semantic cue
  - source: `path` [M] `apps/android/app/lint.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/AndroidManifest.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/DeviceNames.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/LocationMode.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt` — semantic cue
- `maintenance-修复-android-keep-camera-temp-files-private` / 修复 android keep camera temp files private:
  - source: `path` [M] `apps/android/README.md` — semantic cue
  - source: `path` [M] `apps/android/app/lint.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/AndroidManifest.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/DeviceNames.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/LocationMode.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt` — semantic cue
- `maintenance-修复-android-remediate-app-CodeQL-alerts` / 修复 android remediate app CodeQL alerts:
  - source: `path` [M] `apps/android/README.md` — semantic cue
  - source: `path` [M] `apps/android/app/lint.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/AndroidManifest.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/DeviceNames.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/LocationMode.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt` — semantic cue
- `maintenance-修复-android-use-absolute-logcat-path` / 修复 android use absolute logcat path:
  - source: `path` [M] `apps/android/README.md` — semantic cue
  - source: `path` [M] `apps/android/app/lint.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/AndroidManifest.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/DeviceNames.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/LocationMode.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt` — semantic cue
- `maintenance-新增-android-add-authenticated-presence-alive-bea` / 新增 android add authenticated presence alive beacons:
  - source: `path` [M] `apps/android/README.md` — semantic cue
  - source: `path` [M] `apps/android/app/lint.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/AndroidManifest.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/DeviceNames.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/LocationMode.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt` — semantic cue
- `integration-build-release-构建-发布调整-android-update-dependencies-and-lint-co` / 构建/发布调整 android update dependencies and lint config:
  - source: `path` [M] `apps/android/README.md` — semantic cue
  - source: `path` [M] `apps/android/app/lint.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/AndroidManifest.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/DeviceNames.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/LocationMode.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt` — semantic cue
- `migration-迁移-重构-android-split-sensitive-features-by-flavor` / 迁移/重构 android split sensitive features by flavor:
  - source: `path` [M] `apps/android/README.md` — semantic cue
  - source: `path` [M] `apps/android/app/lint.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/AndroidManifest.xml` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/DeviceNames.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/LocationMode.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `apps/android/app/src/main/AndroidManifest.xml` — contract evidence
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/ui/GatewayConfigResolver.kt` — contract evidence
  - source: `path` [M] `apps/android/app/src/main/java/ai/openclaw/app/voice/TalkModeGatewayConfig.kt` — contract evidence
  - source: `path` [M] `apps/android/app/src/play/AndroidManifest.xml` — contract evidence
  - source: `path` [M] `apps/android/app/src/play/java/ai/openclaw/app/SensitiveFeatureConfig.kt` — contract evidence
  - source: `path` [M] `apps/android/app/src/thirdParty/AndroidManifest.xml` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `apps/android/README.md` — docs evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `apps/android/app/src/main/java/ai/openclaw/app/node/SmsManager.kt`
  - source: `path` [D] `apps/android/app/src/play/AndroidManifest.xml`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `apps/android/app/src/main/java/ai/openclaw/app/node/CallLogHandler.kt`
  - source: `path` [R] `apps/android/app/src/main/java/ai/openclaw/app/node/SmsHandler.kt`
  - source: `path` [R] `apps/android/app/src/play/java/ai/openclaw/app/node/SmsHandler.kt`
  - source: `path` [R] `apps/android/app/src/testThirdParty/java/ai/openclaw/app/node/CallLogHandlerTest.kt`
  - source: `path` [R] `apps/android/app/src/testThirdParty/java/ai/openclaw/app/node/SmsManagerTest.kt`
  - source: `path` [R] `apps/android/app/src/thirdParty/java/ai/openclaw/app/node/CallLogHandler.kt`

### 路径证据

- 新增 `apps/android/app/lint.xml`：调整 Android lint configuration（Android build/lint configuration）。
- 新增 `apps/android/app/src/main/java/ai/openclaw/app/VoiceCaptureMode.kt`：调整 Voice Capture Mode（native app runtime）。
- 新增 `apps/android/app/src/main/java/ai/openclaw/app/node/NodePresenceAliveBeacon.kt`：调整 Node Presence Alive Beacon（native app runtime）。
- 新增 `apps/android/app/src/play/java/ai/openclaw/app/SensitiveFeatureConfig.kt`：调整 Sensitive Feature Config（native app runtime）。
- 新增 `apps/android/app/src/play/java/ai/openclaw/app/node/CallLogHandler.kt`：调整 Call Log Handler（native app runtime）。
- 新增 `apps/android/app/src/play/java/ai/openclaw/app/node/SmsManager.kt`：调整 Sms Manager（native app runtime）。
- 新增 `apps/android/app/src/thirdParty/AndroidManifest.xml`：调整 Android manifest/permissions（Android manifest/permissions）。
- 新增 `apps/android/app/src/thirdParty/java/ai/openclaw/app/SensitiveFeatureConfig.kt`：调整 Sensitive Feature Config（native app runtime）。
- 新增 `apps/android/app/src/thirdParty/java/ai/openclaw/app/node/SmsHandler.kt`：调整 Sms Handler（native app runtime）。
- 新增 `apps/android/app/src/thirdParty/java/ai/openclaw/app/node/SmsManager.kt`：调整 Sms Manager（native app runtime）。
- 修改 `apps/android/README.md`：调整 README docs（mobile app runtime）。
- 修改 `apps/android/app/src/main/AndroidManifest.xml`：调整 Android manifest/permissions（Android manifest/permissions）。
- 修改 `apps/android/app/src/main/java/ai/openclaw/app/DeviceNames.kt`：调整 Device Names（native app runtime）。
- 修改 `apps/android/app/src/main/java/ai/openclaw/app/LocationMode.kt`：调整 Location Mode（native app runtime）。
- 修改 `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt`：调整 Main Activity（native app runtime）。
- 修改 `apps/android/app/src/main/java/ai/openclaw/app/MainViewModel.kt`：调整 Main View Model（native app runtime）。
- 修改 `apps/android/app/src/main/java/ai/openclaw/app/NodeApp.kt`：调整 Node App（native app runtime）。
- 修改 `apps/android/app/src/main/java/ai/openclaw/app/NodeForegroundService.kt`：调整 Node Foreground Service（native app runtime）。
- 修改 `apps/android/app/src/main/java/ai/openclaw/app/NodeRuntime.kt`：调整 Node Runtime（native app runtime）。
- 修改 `apps/android/app/src/main/java/ai/openclaw/app/NotificationForwardingPolicy.kt`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `apps/android/app/src/main/java/ai/openclaw/app/PermissionRequester.kt`：调整 Permission Requester（native app runtime）。
- 修改 `apps/android/app/src/main/java/ai/openclaw/app/SecurePrefs.kt`：调整 Secure Prefs（native app runtime）。
- 删除 `apps/android/app/src/main/java/ai/openclaw/app/node/SmsManager.kt`：移除旧的 native app runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `apps/android/app/src/play/AndroidManifest.xml`：移除旧的 Android manifest/permissions 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `apps/android/app/src/main/java/ai/openclaw/app/node/CallLogHandler.kt`：调整 Call Log Handler（native app runtime）。
- 重命名 `apps/android/app/src/main/java/ai/openclaw/app/node/SmsHandler.kt`：调整 Sms Handler（native app runtime）。
- 重命名 `apps/android/app/src/play/java/ai/openclaw/app/node/SmsHandler.kt`：调整 Sms Handler（native app runtime）。
- 重命名 `apps/android/app/src/testThirdParty/java/ai/openclaw/app/node/CallLogHandlerTest.kt`：调整 Call Log Handler Test（native app runtime）。
- 重命名 `apps/android/app/src/testThirdParty/java/ai/openclaw/app/node/SmsManagerTest.kt`：调整 Sms Manager Test（native app runtime）。
- 重命名 `apps/android/app/src/thirdParty/java/ai/openclaw/app/node/CallLogHandler.kt`：调整 Call Log Handler（native app runtime）。
- 其余 64 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `apps/ios-android/android-app` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/ios-android/android-app/change-to-test.md` 的验证建议。
