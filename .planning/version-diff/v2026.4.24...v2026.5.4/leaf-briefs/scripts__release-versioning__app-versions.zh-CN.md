# scripts/release-versioning/app-versions

## 1. 功能结论

**修改**：ios harden gateway pairing setup、keep gateway shutdown runtime stable across updates、clarify update diagnostics、move swift configs under config；**迁移/重构**：simplify plugin dependency handling；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：文档语义变化、新增能力或入口、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：contains-renames
- 路径状态摘要（降级事实）：新增 2、修改 11、重命名 2

## 3. 功能级详细差异

### 修复 bypass update restart cooldown

修复 bypass update restart cooldown

- 验证提示：优先运行 `pnpm check:docs`。
- 置信度：`high`

### 修复 force package update restart handoff

修复 force package update restart handoff

- 验证提示：优先运行 `pnpm check:docs`。
- 置信度：`high`

### 修复 ios harden gateway pairing setup

修复 ios：harden gateway pairing setup

- 验证提示：优先运行 `pnpm check:docs`。
- 置信度：`high`

### 修复 keep gateway shutdown runtime stable across updates

修复 keep gateway shutdown runtime stable across updates

- 验证提示：优先运行 `pnpm check:docs`。
- 置信度：`high`

### 文档同步 clarify update diagnostics

文档同步 clarify update diagnostics

- 验证提示：优先运行 `pnpm check:docs`。
- 置信度：`high`

### 维护调整 move swabble into apps

维护调整 move swabble into apps

- 验证提示：优先运行 `pnpm check:docs`。
- 置信度：`high`

### 维护调整 move swift configs under config

维护调整 move swift configs under config

- 验证提示：优先运行 `pnpm check:docs`。
- 置信度：`high`

### 维护调整 remove root assets

维护调整 remove root assets

- 验证提示：优先运行 `pnpm check:docs`。
- 置信度：`high`

### 维护调整 update macOS appcast for 2026.4.27

维护调整 update macOS appcast for 2026.4.27

- 验证提示：优先运行 `pnpm check:docs`。
- 置信度：`high`

### 迁移/重构 simplify plugin dependency handling

迁移/重构 simplify plugin dependency handling

- 验证提示：优先运行 `pnpm check:docs`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 .editorconfig，需要按契约边界审查。

- 验证提示：优先运行 `pnpm check:docs`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 Gradle build configuration，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm check:docs`。
- 置信度：`medium`

### 测试与文档语义变化

文档、说明或生成基线同步了 CHANGELOG docs、updating docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm check:docs`。
- 置信度：`medium`

### 迁移/重命名变化

`dmg background small` 路径（`apps/macos/Packaging/dmg-background-small.png`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`dmg background` 路径（`apps/macos/Packaging/dmg-background.png`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm check:docs`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/release-versioning/app-versions`
- Changed path count: `15`
- Status counts: `新增 2、修改 11、重命名 2`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `15` files, `+1533` / `-686`

### 归纳依据

- 主要落点：mobile app runtime、implementation、Android build/lint configuration、docs。
- 建议优先验证：优先运行 `pnpm check:docs`。
- 相关 commit 主题：fix(ios): harden gateway pairing setup；fix: keep gateway shutdown runtime stable across updates；docs: clarify update diagnostics；chore: move swift configs under config；chore: remove root assets；chore: move swabble into apps；refactor: simplify plugin dependency handling；fix: bypass update restart cooldown

### Dimension evidence

- `maintenance-修复-bypass-update-restart-cooldown` / 修复 bypass update restart cooldown:
  - source: `path` [A] `apps/android/.editorconfig`
  - source: `path` [A] `apps/android/gradle/libs.versions.toml`
  - source: `path` [M] `appcast.xml`
  - source: `path` [M] `apps/android/app/build.gradle.kts`
  - source: `path` [M] `apps/android/gradle.properties`
  - source: `path` [R] `apps/macos/Packaging/dmg-background-small.png`
- `integration-build-release-修复-force-package-update-restart-handoff` / 修复 force package update restart handoff:
  - source: `path` [A] `apps/android/.editorconfig`
  - source: `path` [A] `apps/android/gradle/libs.versions.toml`
  - source: `path` [M] `appcast.xml`
  - source: `path` [M] `apps/android/app/build.gradle.kts`
  - source: `path` [M] `apps/android/gradle.properties`
  - source: `path` [R] `apps/macos/Packaging/dmg-background-small.png`
- `maintenance-修复-ios-harden-gateway-pairing-setup` / 修复 ios harden gateway pairing setup:
  - source: `path` [M] `apps/ios/.swiftlint.yml` — semantic cue
  - source: `path` [M] `apps/ios/CHANGELOG.md` — semantic cue
  - source: `path` [M] `apps/ios/SwiftSources.input.xcfilelist` — semantic cue
  - source: `path` [M] `apps/ios/fastlane/metadata/en-US/release_notes.txt` — semantic cue
  - source: `path` [M] `apps/ios/project.yml` — semantic cue
  - source: `path` [M] `apps/ios/version.json` — semantic cue
- `runtime-behavior-修复-keep-gateway-shutdown-runtime-stable-across` / 修复 keep gateway shutdown runtime stable across updates:
  - source: `path` [A] `apps/android/.editorconfig`
  - source: `path` [A] `apps/android/gradle/libs.versions.toml`
  - source: `path` [M] `appcast.xml`
  - source: `path` [M] `apps/android/app/build.gradle.kts`
  - source: `path` [M] `apps/android/gradle.properties`
  - source: `path` [R] `apps/macos/Packaging/dmg-background-small.png`
- `tests-docs-文档同步-clarify-update-diagnostics` / 文档同步 clarify update diagnostics:
  - source: `path` [A] `apps/android/.editorconfig`
  - source: `path` [A] `apps/android/gradle/libs.versions.toml`
  - source: `path` [M] `appcast.xml`
  - source: `path` [M] `apps/android/app/build.gradle.kts`
  - source: `path` [M] `apps/android/gradle.properties`
  - source: `path` [R] `apps/macos/Packaging/dmg-background-small.png`
- `maintenance-维护调整-move-swabble-into-apps` / 维护调整 move swabble into apps:
  - source: `path` [M] `apps/android/.editorconfig` — semantic cue
  - source: `path` [M] `apps/android/app/build.gradle.kts` — semantic cue
  - source: `path` [M] `apps/android/gradle.properties` — semantic cue
  - source: `path` [M] `apps/android/gradle/libs.versions.toml` — semantic cue
  - source: `path` [M] `apps/ios/.swiftlint.yml` — semantic cue
  - source: `path` [M] `apps/ios/CHANGELOG.md` — semantic cue
- `maintenance-维护调整-move-swift-configs-under-config` / 维护调整 move swift configs under config:
  - source: `path` [M] `apps/android/.editorconfig` — semantic cue
  - source: `path` [M] `apps/ios/.swiftlint.yml` — semantic cue
  - source: `path` [M] `apps/ios/SwiftSources.input.xcfilelist` — semantic cue
- `maintenance-维护调整-remove-root-assets` / 维护调整 remove root assets:
  - source: `path` [A] `apps/android/.editorconfig`
  - source: `path` [A] `apps/android/gradle/libs.versions.toml`
  - source: `path` [M] `appcast.xml`
  - source: `path` [M] `apps/android/app/build.gradle.kts`
  - source: `path` [M] `apps/android/gradle.properties`
  - source: `path` [R] `apps/macos/Packaging/dmg-background-small.png`
- `maintenance-维护调整-update-macOS-appcast-for-2026-4-27` / 维护调整 update macOS appcast for 2026.4.27:
  - source: `path` [M] `appcast.xml` — semantic cue
  - source: `path` [M] `apps/macos/Packaging/dmg-background-small.png` — semantic cue
  - source: `path` [M] `apps/macos/Packaging/dmg-background.png` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/Resources/Info.plist` — semantic cue
- `migration-迁移-重构-simplify-plugin-dependency-handling` / 迁移/重构 simplify plugin dependency handling:
  - source: `path` [M] `apps/android/.editorconfig` — semantic cue
  - source: `path` [M] `apps/android/app/build.gradle.kts` — semantic cue
  - source: `path` [M] `apps/android/gradle.properties` — semantic cue
  - source: `path` [M] `apps/android/gradle/libs.versions.toml` — semantic cue
  - source: `path` [M] `apps/ios/.swiftlint.yml` — semantic cue
  - source: `path` [M] `apps/ios/CHANGELOG.md` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `apps/android/.editorconfig` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `apps/android/app/build.gradle.kts` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `apps/ios/CHANGELOG.md` — docs evidence
  - source: `path` [M] `docs/install/updating.md` — docs evidence
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `apps/macos/Packaging/dmg-background-small.png`
  - source: `path` [R] `apps/macos/Packaging/dmg-background.png`

### 路径证据

- 新增 `apps/android/.editorconfig`：调整 .editorconfig（mobile app runtime）。
- 新增 `apps/android/gradle/libs.versions.toml`：调整 Gradle build configuration（Android build/lint configuration）。
- 修改 `appcast.xml`：调整 appcast（implementation）。
- 修改 `apps/android/app/build.gradle.kts`：调整 Gradle build configuration（Android build/lint configuration）。
- 修改 `apps/android/gradle.properties`：调整 Gradle build configuration（Android build/lint configuration）。
- 修改 `apps/ios/.swiftlint.yml`：调整 .swiftlint（mobile app runtime）。
- 修改 `apps/ios/CHANGELOG.md`：调整 CHANGELOG docs（mobile app runtime）。
- 修改 `apps/ios/SwiftSources.input.xcfilelist`：调整 Swift Sources.input（mobile app runtime）。
- 修改 `apps/ios/fastlane/metadata/en-US/release_notes.txt`：调整 release notes（mobile app runtime）。
- 修改 `apps/ios/project.yml`：调整 project（mobile app runtime）。
- 修改 `apps/ios/version.json`：调整 version（mobile app runtime）。
- 修改 `apps/macos/Sources/OpenClaw/Resources/Info.plist`：调整 Info（implementation）。
- 修改 `docs/install/updating.md`：调整 updating docs（docs）。
- 重命名 `apps/macos/Packaging/dmg-background-small.png`：调整 dmg background small（implementation）。
- 重命名 `apps/macos/Packaging/dmg-background.png`：调整 dmg background（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `scripts/release-versioning/app-versions` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/scripts/release-versioning/app-versions/change-to-test.md` 的验证建议。
