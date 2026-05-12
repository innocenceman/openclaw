# apps/ios-android/ios-extensions-watch

## 1. 功能结论

**修改**：harden ios app build hygiene；**迁移/重构**：remove narrow SwiftLint suppressions；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`plugin`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 5

## 3. 功能级详细差异

### 修复 harden ios app build hygiene

修复 harden ios app build hygiene

- 验证提示：优先运行 `pnpm ios:gen`；`pnpm ios:build`。
- 置信度：`high`

### 迁移/重构 remove narrow SwiftLint suppressions

迁移/重构 remove narrow SwiftLint suppressions

- 验证提示：优先运行 `pnpm ios:gen`；`pnpm ios:build`。
- 置信度：`high`

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
- Impact-map dir: `.planning/impact-map/apps/ios-android/ios-extensions-watch`
- Changed path count: `5`
- Status counts: `修改 5`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `5` files, `+69` / `-73`

### 归纳依据

- 主要落点：native app runtime。
- 建议优先验证：优先运行 `pnpm ios:gen`；`pnpm ios:build`。
- 相关 commit 主题：refactor: remove narrow SwiftLint suppressions；fix: harden ios app build hygiene

### Dimension evidence

- `user-visible-修复-harden-ios-app-build-hygiene` / 修复 harden ios app build hygiene:
  - source: `path` [M] `apps/ios/ActivityWidget/OpenClawLiveActivity.swift` — semantic cue
  - source: `path` [M] `apps/ios/ShareExtension/ShareViewController.swift` — semantic cue
  - source: `path` [M] `apps/ios/WatchExtension/Sources/WatchConnectivityReceiver.swift` — semantic cue
  - source: `path` [M] `apps/ios/WatchExtension/Sources/WatchInboxStore.swift` — semantic cue
  - source: `path` [M] `apps/ios/WatchExtension/Sources/WatchInboxView.swift` — semantic cue
- `migration-迁移-重构-remove-narrow-SwiftLint-suppressions` / 迁移/重构 remove narrow SwiftLint suppressions:
  - source: `path` [M] `apps/ios/ActivityWidget/OpenClawLiveActivity.swift` — semantic cue
  - source: `path` [M] `apps/ios/ShareExtension/ShareViewController.swift` — semantic cue
  - source: `path` [M] `apps/ios/WatchExtension/Sources/WatchConnectivityReceiver.swift` — semantic cue
  - source: `path` [M] `apps/ios/WatchExtension/Sources/WatchInboxStore.swift` — semantic cue
  - source: `path` [M] `apps/ios/WatchExtension/Sources/WatchInboxView.swift` — semantic cue

### 路径证据

- 修改 `apps/ios/ActivityWidget/OpenClawLiveActivity.swift`：调整 Open Claw Live Activity（native app runtime）。
- 修改 `apps/ios/ShareExtension/ShareViewController.swift`：调整 Share View Controller（native app runtime）。
- 修改 `apps/ios/WatchExtension/Sources/WatchConnectivityReceiver.swift`：调整 Watch Connectivity Receiver（native app runtime）。
- 修改 `apps/ios/WatchExtension/Sources/WatchInboxStore.swift`：调整 Watch Inbox Store（native app runtime）。
- 修改 `apps/ios/WatchExtension/Sources/WatchInboxView.swift`：调整 Watch Inbox View（native app runtime）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `apps/ios-android/ios-extensions-watch` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/ios-android/ios-extensions-watch/change-to-test.md` 的验证建议。
