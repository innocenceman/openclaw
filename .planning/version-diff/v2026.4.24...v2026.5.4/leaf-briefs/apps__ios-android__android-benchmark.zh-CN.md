# apps/ios-android/android-benchmark

## 1. 功能结论

**修改**：android update dependencies and lint config；**迁移/重构**：android split sensitive features by flavor；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`build`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：行为调整、集成、构建或发布变化
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 1

## 3. 功能级详细差异

### 构建/发布调整 android update dependencies and lint config

构建/发布调整 android：update dependencies and lint config

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 android split sensitive features by flavor

迁移/重构 android：split sensitive features by flavor

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 Gradle build configuration，需要确认发布/安装链路仍一致。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/android-benchmark`
- Changed path count: `1`
- Status counts: `修改 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `1` files, `+28` / `-28`

### 归纳依据

- 主要落点：Android build/lint configuration。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：refactor(android): split sensitive features by flavor；build(android): update dependencies and lint config

### Dimension evidence

- `integration-build-release-构建-发布调整-android-update-dependencies-and-lint-co` / 构建/发布调整 android update dependencies and lint config:
  - source: `path` [M] `apps/android/benchmark/build.gradle.kts` — semantic cue
- `migration-迁移-重构-android-split-sensitive-features-by-flavor` / 迁移/重构 android split sensitive features by flavor:
  - source: `path` [M] `apps/android/benchmark/build.gradle.kts` — semantic cue
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `apps/android/benchmark/build.gradle.kts` — build/release evidence

### 路径证据

- 修改 `apps/android/benchmark/build.gradle.kts`：调整 Gradle build configuration（Android build/lint configuration）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `apps/ios-android/android-benchmark` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/ios-android/android-benchmark/change-to-test.md` 的验证建议。
