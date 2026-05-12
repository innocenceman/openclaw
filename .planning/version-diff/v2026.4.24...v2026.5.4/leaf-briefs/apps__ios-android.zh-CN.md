# apps/ios-android

## 1. 功能结论

**修改**：move swabble into apps、harden mac app computer use docs；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：文档语义变化、新增能力或入口、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：contains-renames
- 路径状态摘要（降级事实）：新增 3、修改 2、重命名 33

## 3. 功能级详细差异

### 修复 harden mac app computer use docs

修复 harden mac app computer use docs

- 验证提示：优先运行 `pnpm ios:gen`；`pnpm android:test`；`pnpm android:assemble`。
- 置信度：`high`

### 维护调整 move swabble into apps

维护调整 move swabble into apps

- 验证提示：优先运行 `pnpm ios:gen`；`pnpm android:test`；`pnpm android:assemble`。
- 置信度：`high`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 ci，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm ios:gen`；`pnpm android:test`；`pnpm android:assemble`。
- 置信度：`medium`

### 测试与文档语义变化

文档、说明或生成基线同步了 CHANGELOG docs、README docs、spec docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm ios:gen`；`pnpm android:test`；`pnpm android:assemble`。
- 置信度：`medium`

### 迁移/重命名变化

`ci` 路径（`apps/swabble/.github/workflows/ci.yml`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`.gitignore` 路径（`apps/swabble/.gitignore`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`.swiftformat` 路径（`apps/swabble/.swiftformat`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`.swiftlint` 路径（`apps/swabble/.swiftlint.yml`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm ios:gen`；`pnpm android:test`；`pnpm android:assemble`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android`
- Changed path count: `38`
- Status counts: `新增 3、修改 2、重命名 33`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `38` files, `+1996` / `-10`

### 归纳依据

- 主要落点：native app runtime、implementation、docs、speech/TTS。
- 建议优先验证：优先运行 `pnpm ios:gen`；`pnpm android:test`；`pnpm android:assemble`。
- 相关 commit 主题：chore: move swabble into apps；fix: harden mac app computer use docs

### Dimension evidence

- `tests-docs-修复-harden-mac-app-computer-use-docs` / 修复 harden mac app computer use docs:
  - source: `path` [M] `apps/macos-mlx-tts/Package.resolved` — semantic cue
  - source: `path` [M] `apps/macos-mlx-tts/Package.swift` — semantic cue
  - source: `path` [M] `apps/swabble/.github/workflows/ci.yml` — semantic cue
  - source: `path` [M] `apps/swabble/.gitignore` — semantic cue
  - source: `path` [M] `apps/swabble/.swiftformat` — semantic cue
  - source: `path` [M] `apps/swabble/.swiftlint.yml` — semantic cue
- `maintenance-维护调整-move-swabble-into-apps` / 维护调整 move swabble into apps:
  - source: `path` [M] `apps/macos-mlx-tts/Package.resolved` — semantic cue
  - source: `path` [M] `apps/macos-mlx-tts/Package.swift` — semantic cue
  - source: `path` [M] `apps/swabble/.github/workflows/ci.yml` — semantic cue
  - source: `path` [M] `apps/swabble/.gitignore` — semantic cue
  - source: `path` [M] `apps/swabble/.swiftformat` — semantic cue
  - source: `path` [M] `apps/swabble/.swiftlint.yml` — semantic cue
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `apps/swabble/.github/workflows/ci.yml` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `apps/swabble/CHANGELOG.md` — docs evidence
  - source: `path` [M] `apps/swabble/README.md` — docs evidence
  - source: `path` [M] `apps/swabble/docs/spec.md` — docs evidence
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `apps/swabble/.github/workflows/ci.yml`
  - source: `path` [R] `apps/swabble/.gitignore`
  - source: `path` [R] `apps/swabble/.swiftformat`
  - source: `path` [R] `apps/swabble/.swiftlint.yml`
  - source: `path` [R] `apps/swabble/CHANGELOG.md`
  - source: `path` [R] `apps/swabble/LICENSE`

### 路径证据

- 新增 `apps/swabble/Package.resolved`：调整 Package（implementation）。
- 新增 `apps/swabble/Sources/SwabbleCore/Support/OutputFormat.swift`：调整 Output Format（native app runtime）。
- 新增 `apps/swabble/Tests/swabbleTests/ConfigTests.swift`：调整 Config Tests（native app runtime）。
- 修改 `apps/macos-mlx-tts/Package.resolved`：调整 Package（speech/TTS）。
- 修改 `apps/macos-mlx-tts/Package.swift`：调整 Package（native app runtime）。
- 重命名 `apps/swabble/.github/workflows/ci.yml`：调整 ci（implementation）。
- 重命名 `apps/swabble/.gitignore`：调整 .gitignore（implementation）。
- 重命名 `apps/swabble/.swiftformat`：调整 .swiftformat（implementation）。
- 重命名 `apps/swabble/.swiftlint.yml`：调整 .swiftlint（implementation）。
- 重命名 `apps/swabble/CHANGELOG.md`：调整 CHANGELOG docs（docs）。
- 重命名 `apps/swabble/LICENSE`：调整 LICENSE（implementation）。
- 重命名 `apps/swabble/Package.swift`：调整 Package（native app runtime）。
- 重命名 `apps/swabble/README.md`：调整 README docs（docs）。
- 重命名 `apps/swabble/Sources/SwabbleCore/Config/Config.swift`：调整 Config（native app runtime）。
- 重命名 `apps/swabble/Sources/SwabbleCore/Hooks/HookExecutor.swift`：调整 Hook Executor（native app runtime）。
- 重命名 `apps/swabble/Sources/SwabbleCore/Speech/BufferConverter.swift`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 重命名 `apps/swabble/Sources/SwabbleCore/Speech/SpeechPipeline.swift`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 其余 21 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `apps/ios-android` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/ios-android/change-to-test.md` 的验证建议。
