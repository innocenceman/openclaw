# extensions/memory-media-voice-plugins/memory-lancedb

## 1. 功能结论

**新增**：memory-lancedb support Chinese memory trigger keywords；**修改**：memory-lancedb declare apache-arrow peer、memory load unconfigured lancedb metadata、enforce plugin tool manifest contracts、prepare next external plugin beta batch；**迁移/重构**：remove plugin dependency cleanup leftovers；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`plugin`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：修改 8、删除 1

## 3. 功能级详细差异

### 修复 enforce plugin tool manifest contracts

修复 enforce plugin tool manifest contracts

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 lint resolve oxlint errors

修复 lint：resolve oxlint errors

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 memory load unconfigured lancedb metadata

修复 memory：load unconfigured lancedb metadata

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 memory-lancedb declare apache-arrow peer

修复 memory-lancedb：declare apache-arrow peer

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 memory-lancedb get memory records through ltm list command

修复 memory-lancedb：get memory records through ltm list command

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 memory-lancedb show full IDs in memory_forget candidate list

修复 memory-lancedb：show full IDs in memory_forget candidate list

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 新增 memory-lancedb support Chinese memory trigger keywords

新增 memory-lancedb：support Chinese memory trigger keywords

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 构建/发布调整 prepare next external plugin beta batch

构建/发布调整 prepare next external plugin beta batch

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 memory-lancedb mock embedding transport in forget test

测试覆盖 memory-lancedb：mock embedding transport in forget test

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 remove plugin dependency cleanup leftovers

迁移/重构 remove plugin dependency cleanup leftovers

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 memory lancedb public API barrel、config regression/contract coverage、memory lancedb config、plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 config regression/contract coverage、memory lancedb plugin entrypoint、lancedb runtime regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `lancedb runtime regression/contract coverage`（`extensions/memory-lancedb/lancedb-runtime.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/memory-lancedb`
- Changed path count: `9`
- Status counts: `修改 8、删除 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `9` files, `+1339` / `-629`

### 归纳依据

- 主要落点：plugin entry/API surface、configuration/schema、tests/contracts、manifest/package metadata、implementation。
- 新增或暴露的关键符号包括：`DEFAULT_RECALL_MAX_CHARS`, `EMBEDDING_CONFIG_KEYS`, `invokeEmbeddingCreate`, `extractUserTextContent`, `extractLatestUserText`, `normalizeRecallQuery`, `messageFingerprint`, `resolveAutoCaptureStartIndex`, `DEFAULT_AUTO_RECALL_TIMEOUT_MS`, `parsePositiveIntegerOption`。
- 建议优先验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 相关 commit 主题：fix(memory-lancedb): declare apache-arrow peer；fix(memory): load unconfigured lancedb metadata；fix: enforce plugin tool manifest contracts；build: prepare next external plugin beta batch；refactor: remove plugin dependency cleanup leftovers；fix(memory-lancedb): get memory records through ltm list command；test(memory-lancedb): mock embedding transport in forget test；fix(lint): resolve oxlint errors

### Dimension evidence

- `public-contract-修复-enforce-plugin-tool-manifest-contracts` / 修复 enforce plugin tool manifest contracts:
  - source: `path` [M] `extensions/memory-lancedb/openclaw.plugin.json` — semantic cue
- `maintenance-修复-lint-resolve-oxlint-errors` / 修复 lint resolve oxlint errors:
  - source: `path` [M] `extensions/memory-lancedb/api.ts`
  - source: `path` [M] `extensions/memory-lancedb/config.test.ts`
  - source: `path` [M] `extensions/memory-lancedb/config.ts`
  - source: `path` [D] `extensions/memory-lancedb/lancedb-runtime.test.ts`
- `public-contract-修复-memory-load-unconfigured-lancedb-metadata` / 修复 memory load unconfigured lancedb metadata:
  - source: `path` [M] `extensions/memory-lancedb/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/lancedb-runtime.test.ts` — semantic cue
- `maintenance-修复-memory-lancedb-declare-apache-arrow-peer` / 修复 memory-lancedb declare apache-arrow peer:
  - source: `path` [M] `extensions/memory-lancedb/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/lancedb-runtime.test.ts` — semantic cue
- `maintenance-修复-memory-lancedb-get-memory-records-through-lt` / 修复 memory-lancedb get memory records through ltm list command:
  - source: `path` [M] `extensions/memory-lancedb/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/lancedb-runtime.test.ts` — semantic cue
- `maintenance-修复-memory-lancedb-show-full-IDs-in-memory-forge` / 修复 memory-lancedb show full IDs in memory_forget candidate list:
  - source: `path` [M] `extensions/memory-lancedb/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/lancedb-runtime.test.ts` — semantic cue
- `maintenance-新增-memory-lancedb-support-Chinese-memory-trigge` / 新增 memory-lancedb support Chinese memory trigger keywords:
  - source: `path` [M] `extensions/memory-lancedb/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/lancedb-runtime.test.ts` — semantic cue
- `integration-build-release-构建-发布调整-prepare-next-external-plugin-beta-batch` / 构建/发布调整 prepare next external plugin beta batch:
  - source: `path` [M] `extensions/memory-lancedb/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/lancedb-runtime.test.ts` — semantic cue
- `tests-docs-测试覆盖-memory-lancedb-mock-embedding-transport-in` / 测试覆盖 memory-lancedb mock embedding transport in forget test:
  - source: `path` [M] `extensions/memory-lancedb/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/lancedb-runtime.test.ts` — semantic cue
- `migration-迁移-重构-remove-plugin-dependency-cleanup-leftovers` / 迁移/重构 remove plugin dependency cleanup leftovers:
  - source: `path` [M] `extensions/memory-lancedb/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/config.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-lancedb/lancedb-runtime.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/memory-lancedb/api.ts` — contract evidence
  - source: `path` [M] `extensions/memory-lancedb/config.test.ts` — contract evidence
  - source: `path` [M] `extensions/memory-lancedb/config.ts` — contract evidence
  - source: `path` [M] `extensions/memory-lancedb/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/memory-lancedb/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/memory-lancedb/config.test.ts` — test evidence
  - source: `path` [M] `extensions/memory-lancedb/index.test.ts` — test evidence
  - source: `path` [M] `extensions/memory-lancedb/lancedb-runtime.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/memory-lancedb/lancedb-runtime.test.ts`

### 路径证据

- 修改 `extensions/memory-lancedb/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/memory-lancedb/config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/memory-lancedb/config.ts`：调整 memory lancedb config（configuration/schema）。
- 修改 `extensions/memory-lancedb/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/memory-lancedb/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/memory-lancedb/lancedb-runtime.ts`：调整 lancedb runtime（implementation）。
- 修改 `extensions/memory-lancedb/openclaw.plugin.json`：更新插件 manifest/control-plane metadata。
- 修改 `extensions/memory-lancedb/package.json`：更新插件包元数据/版本或依赖声明。
- 删除 `extensions/memory-lancedb/lancedb-runtime.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/memory-media-voice-plugins/memory-lancedb` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/memory-media-voice-plugins/memory-lancedb/change-to-test.md` 的验证建议。
