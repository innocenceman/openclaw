# misc-repo-surface/unmapped-target-surface

## 1. 功能结论

**新增**：plugin-state add registerIfAbsent keyed store；**修改**：plugins include json5 in memory runtime deps、docker pin container-side workspace and config dirs in compose、clean up orphaned child processes、proxy direct APNs HTTP2 sessions；未知，风险 medium。

- 变更类型：`mixed`
- 兼容性：`unknown`（未知）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：删除或废弃旧入口、文档语义变化、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：large、contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 64、修改 3、删除 12、重命名 44

## 3. 功能级详细差异

### 修复 clean up orphaned child processes

修复 clean up orphaned child processes

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 docker pin container-side workspace and config dirs in compose

修复 docker：pin container-side workspace and config dirs in compose

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 plugin-state preserve fresh evicted entries

修复 plugin-state：preserve fresh evicted entries

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 plugins include json5 in memory runtime deps

修复 plugins：include json5 in memory runtime deps

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 proxy direct APNs HTTP2 sessions

修复 proxy direct APNs HTTP2 sessions

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 新增 plugin-state add registerIfAbsent keyed store

新增 plugin-state：add registerIfAbsent keyed store

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 维护调整 move oxlint tsconfigs under config

维护调整 move oxlint tsconfigs under config

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 维护调整 move root tool configs

维护调整 move root tool configs

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 维护调整 move swift configs under config

维护调整 move swift configs under config

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 维护调整 reduce root cleanup files

维护调整 reduce root cleanup files

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 ci、docker compose、docker setup，需要确认发布/安装链路仍一致。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

本维度包含 2 个 evidence-backed 功能差异。

- 文档、说明或生成基线同步了 CHANGELOG docs、README docs、spec docs、docs.acp docs，用于更新读者指引、能力说明或事实基线。
- 测试或契约覆盖集中在 commitments full chain.integration regression/contract coverage、commitments heartbeat policy.e2e regression/contract coverage、extraction regression/contract coverage、runtime regression/contract coverage，用于约束本 leaf 的回归边界。
- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `Package`（`Swabble/Package.resolved`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `Output Format`（`Swabble/Sources/SwabbleCore/Support/OutputFormat.swift`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `Config Tests`（`Swabble/Tests/swabbleTests/ConfigTests.swift`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `avatar placeholder`（`assets/avatar-placeholder.svg`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`ci` 路径（`Swabble/.github/workflows/ci.yml`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`.gitignore` 路径（`Swabble/.gitignore`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`.swiftformat` 路径（`Swabble/.swiftformat`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`.swiftlint` 路径（`Swabble/.swiftlint.yml`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 ci、.gitignore、.swiftformat、.swiftlint、CHANGELOG docs、LICENSE；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`unknown`（未知），风险等级 `medium`。

原因：

- 当前证据不足以给出稳定兼容性结论，需要人工复核 diff 和调用方。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/misc-repo-surface/unmapped-target-surface`
- Changed path count: `123`
- Status counts: `新增 64、修改 3、删除 12、重命名 44`
- Risk: `medium`
- Compatibility: `unknown` (未知)
- Diff stat: `122` files, `+16675` / `-2316`

### 归纳依据

- 主要落点：implementation、native app runtime、tests/contracts、configuration/schema、session/state handling、docs、model/thinking policy、message delivery。
- 新增或暴露的关键符号包括：`BUNDLED_PLUGIN_ROOT_DIR`, `bundledPluginFile`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix(plugins): include json5 in memory runtime deps；fix(docker): pin container-side workspace and config dirs in compose；fix: clean up orphaned child processes；fix: proxy direct APNs HTTP2 sessions；fix(plugin-state): preserve fresh evicted entries；feat(plugin-state): add registerIfAbsent keyed store；chore: move oxlint tsconfigs under config；chore: move swift configs under config

### Dimension evidence

- `maintenance-修复-clean-up-orphaned-child-processes` / 修复 clean up orphaned child processes:
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Support/AttributedString+Sentences.swift` — semantic cue
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Support/Logging.swift` — semantic cue
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Support/OutputFormat.swift` — semantic cue
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Support/TranscriptsStore.swift` — semantic cue
  - source: `path` [M] `Swabble/Sources/swabble/Commands/SetupCommand.swift` — semantic cue
  - source: `path` [M] `docker-setup.sh` — semantic cue
- `maintenance-修复-docker-pin-container-side-workspace-and-conf` / 修复 docker pin container-side workspace and config dirs in compose:
  - source: `path` [M] `Swabble/.swiftlint.yml` — semantic cue
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Config/Config.swift` — semantic cue
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Speech/SpeechPipeline.swift` — semantic cue
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Support/AttributedString+Sentences.swift` — semantic cue
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Support/Logging.swift` — semantic cue
  - source: `path` [M] `Swabble/Sources/swabble/Commands/DoctorCommand.swift` — semantic cue
- `maintenance-修复-plugin-state-preserve-fresh-evicted-entries` / 修复 plugin-state preserve fresh evicted entries:
  - source: `path` [M] `src/plugin-state/plugin-state-store.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/plugin-state/plugin-state-store.paths.ts` — semantic cue
  - source: `path` [M] `src/plugin-state/plugin-state-store.permissions.test.ts` — semantic cue
  - source: `path` [M] `src/plugin-state/plugin-state-store.runtime.test.ts` — semantic cue
  - source: `path` [M] `src/plugin-state/plugin-state-store.sqlite.ts` — semantic cue
  - source: `path` [M] `src/plugin-state/plugin-state-store.test-helpers.ts` — semantic cue
- `runtime-behavior-修复-plugins-include-json5-in-memory-runtime-deps` / 修复 plugins include json5 in memory runtime deps:
  - source: `path` [M] `Swabble/.swiftlint.yml` — semantic cue
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Speech/SpeechPipeline.swift` — semantic cue
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Support/AttributedString+Sentences.swift` — semantic cue
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Support/Logging.swift` — semantic cue
  - source: `path` [M] `Swabble/Sources/swabble/main.swift` — semantic cue
  - source: `path` [M] `Swabble/scripts/lint.sh` — semantic cue
- `maintenance-修复-proxy-direct-APNs-HTTP2-sessions` / 修复 proxy direct APNs HTTP2 sessions:
  - source: `path` [M] `security/opengrep/rules/openclaw-policy/no-raw-http2-connect.yml` — semantic cue
- `maintenance-新增-plugin-state-add-registerIfAbsent-keyed-store` / 新增 plugin-state add registerIfAbsent keyed store:
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Support/TranscriptsStore.swift` — semantic cue
  - source: `path` [M] `src/commitments/store.test.ts` — semantic cue
  - source: `path` [M] `src/commitments/store.ts` — semantic cue
  - source: `path` [M] `src/plugin-state/plugin-state-store.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/plugin-state/plugin-state-store.paths.ts` — semantic cue
  - source: `path` [M] `src/plugin-state/plugin-state-store.permissions.test.ts` — semantic cue
- `maintenance-维护调整-move-oxlint-tsconfigs-under-config` / 维护调整 move oxlint tsconfigs under config:
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Config/Config.swift` — semantic cue
  - source: `path` [M] `Swabble/Tests/swabbleTests/ConfigTests.swift` — semantic cue
  - source: `path` [M] `config/knip.config.ts` — semantic cue
  - source: `path` [M] `config/markdownlint-cli2.jsonc` — semantic cue
  - source: `path` [M] `config/shellcheckrc` — semantic cue
  - source: `path` [M] `config/swiftformat` — semantic cue
- `maintenance-维护调整-move-root-tool-configs` / 维护调整 move root tool configs:
  - source: `path` [M] `src/tools/availability.test.ts` — semantic cue
  - source: `path` [M] `src/tools/availability.ts` — semantic cue
  - source: `path` [M] `src/tools/boundary.test.ts` — semantic cue
  - source: `path` [M] `src/tools/descriptors.ts` — semantic cue
  - source: `path` [M] `src/tools/diagnostics.ts` — semantic cue
  - source: `path` [M] `src/tools/execution.ts` — semantic cue
- `maintenance-维护调整-move-swift-configs-under-config` / 维护调整 move swift configs under config:
  - source: `path` [M] `Swabble/.swiftformat` — semantic cue
  - source: `path` [M] `Swabble/.swiftlint.yml` — semantic cue
  - source: `path` [M] `Swabble/Package.swift` — semantic cue
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Config/Config.swift` — semantic cue
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Hooks/HookExecutor.swift` — semantic cue
  - source: `path` [M] `Swabble/Sources/SwabbleCore/Speech/BufferConverter.swift` — semantic cue
- `maintenance-维护调整-reduce-root-cleanup-files` / 维护调整 reduce root cleanup files:
  - source: `path` [A] `config/tsconfig/oxlint.core.json`
  - source: `path` [A] `config/tsconfig/oxlint.extensions.json`
  - source: `path` [A] `config/tsconfig/oxlint.json`
  - source: `path` [M] `docker-compose.yml`
  - source: `path` [M] `openclaw.mjs`
  - source: `path` [M] `src/bootstrap/node-startup-env.ts`
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `Swabble/.github/workflows/ci.yml` — build/release evidence
  - source: `path` [M] `docker-compose.yml` — build/release evidence
  - source: `path` [M] `docker-setup.sh` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `Swabble/CHANGELOG.md` — docs evidence
  - source: `path` [M] `Swabble/README.md` — docs evidence
  - source: `path` [M] `Swabble/docs/spec.md` — docs evidence
  - source: `path` [M] `docs.acp.md` — docs evidence
  - source: `path` [M] `security/README.md` — docs evidence
  - source: `path` [M] `security/opengrep/README.md` — docs evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `Swabble/Package.resolved`
  - source: `path` [D] `Swabble/Sources/SwabbleCore/Support/OutputFormat.swift`
  - source: `path` [D] `Swabble/Tests/swabbleTests/ConfigTests.swift`
  - source: `path` [D] `assets/avatar-placeholder.svg`
  - source: `path` [D] `assets/chrome-extension/icons/icon128.png`
  - source: `path` [D] `assets/chrome-extension/icons/icon16.png`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `Swabble/.github/workflows/ci.yml`
  - source: `path` [R] `Swabble/.gitignore`
  - source: `path` [R] `Swabble/.swiftformat`
  - source: `path` [R] `Swabble/.swiftlint.yml`
  - source: `path` [R] `Swabble/CHANGELOG.md`
  - source: `path` [R] `Swabble/LICENSE`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `config/tsconfig/oxlint.core.json`
  - source: `path` [A] `config/tsconfig/oxlint.extensions.json`
  - source: `path` [A] `config/tsconfig/oxlint.json`
  - source: `path` [A] `config/tsconfig/oxlint.scripts.json`
  - source: `path` [A] `security/README.md`
  - source: `path` [A] `security/opengrep/README.md`

### 路径证据

- 新增 `config/tsconfig/oxlint.core.json`：调整 oxlint.core（configuration/schema）。
- 新增 `config/tsconfig/oxlint.extensions.json`：调整 oxlint.extensions（configuration/schema）。
- 新增 `config/tsconfig/oxlint.json`：调整 oxlint（configuration/schema）。
- 新增 `config/tsconfig/oxlint.scripts.json`：调整 oxlint.scripts（configuration/schema）。
- 新增 `security/README.md`：调整 README docs（docs）。
- 新增 `security/opengrep/README.md`：调整 README docs（docs）。
- 新增 `security/opengrep/check-rule-metadata.mjs`：调整 check rule metadata（implementation）。
- 新增 `security/opengrep/compile-rules.mjs`：调整 compile rules（implementation）。
- 新增 `security/opengrep/precise.yml`：调整 precise（implementation）。
- 新增 `security/opengrep/rules/openclaw-policy/no-raw-http2-connect.yml`：新增/调整模型识别与 thinking/reasoning policy。
- 新增 `src/commitments/commitments-full-chain.integration.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/commitments/commitments-heartbeat-policy.e2e.test.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `docker-compose.yml`：调整 docker compose（implementation）。
- 修改 `openclaw.mjs`：调整 openclaw（implementation）。
- 修改 `src/bootstrap/node-startup-env.ts`：调整 node startup env（implementation）。
- 删除 `Swabble/Package.resolved`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `Swabble/Sources/SwabbleCore/Support/OutputFormat.swift`：移除旧的 native app runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `Swabble/Tests/swabbleTests/ConfigTests.swift`：移除旧的 native app runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `assets/avatar-placeholder.svg`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `assets/chrome-extension/icons/icon128.png`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `assets/chrome-extension/icons/icon16.png`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `assets/chrome-extension/icons/icon32.png`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `assets/chrome-extension/icons/icon48.png`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `docker-setup.sh`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `docs.acp.md`：移除旧的 docs 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `openclaw.podman.env`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `setup-podman.sh`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `Swabble/.github/workflows/ci.yml`：调整 ci（implementation）。
- 重命名 `Swabble/.gitignore`：调整 .gitignore（implementation）。
- 重命名 `Swabble/.swiftformat`：调整 .swiftformat（implementation）。
- 重命名 `Swabble/.swiftlint.yml`：调整 .swiftlint（implementation）。
- 重命名 `Swabble/CHANGELOG.md`：调整 CHANGELOG docs（docs）。
- 重命名 `Swabble/LICENSE`：调整 LICENSE（implementation）。
- 重命名 `Swabble/Package.swift`：调整 Package（native app runtime）。
- 重命名 `Swabble/README.md`：调整 README docs（docs）。
- 重命名 `Swabble/Sources/SwabbleCore/Config/Config.swift`：调整 Config（native app runtime）。
- 重命名 `Swabble/Sources/SwabbleCore/Hooks/HookExecutor.swift`：调整 Hook Executor（native app runtime）。
- 重命名 `Swabble/Sources/SwabbleCore/Speech/BufferConverter.swift`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 重命名 `Swabble/Sources/SwabbleCore/Speech/SpeechPipeline.swift`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 其余 84 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `misc-repo-surface/unmapped-target-surface` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/misc-repo-surface/unmapped-target-surface/change-to-test.md` 的验证建议。
