# extensions/memory-media-voice-plugins/memory-core

## 1. 功能结论

**修改**：plugins include json5 in memory runtime deps、memory cover native Windows paths and locks、memory prevent memory-hit starvation in corpus=all by capping per-corpus results、trim gateway startup plugin imports；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 3、修改 62、删除 2

## 3. 功能级详细差异

### 优化 trim gateway startup plugin imports

优化 trim gateway startup plugin imports

- 验证提示：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 handle ENOSPC file watcher errors gracefully

修复 handle ENOSPC file watcher errors gracefully

- 验证提示：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 memory keep archive transcript visibility safe

修复 memory：keep archive transcript visibility safe

- 验证提示：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 memory keep plain status from probing embedding providers

修复 memory：keep plain status from probing embedding providers

- 验证提示：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 memory prevent memory-hit starvation in corpus=all by capping per-co…

修复 memory：prevent memory-hit starvation in corpus=all by capping per-corpus results

- 验证提示：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 memory reindex archived session transcript updates

修复 memory：reindex archived session transcript updates

- 验证提示：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 memory retry reindex on socket errors

修复 memory：retry reindex on socket errors

- 验证提示：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 memory split vector store readiness

修复 memory：split vector store readiness

- 验证提示：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 plugins include json5 in memory runtime deps

修复 plugins：include json5 in memory runtime deps

- 验证提示：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 置信度：`high`

### 测试覆盖 memory cover native Windows paths and locks

测试覆盖 memory：cover native Windows paths and locks

- 验证提示：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 memory core public API barrel、plugin manifest/control-plane metadata、config regression/contract coverage、manager.watcher config regression/contract coverage，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 memory core plugin entrypoint、cli regression/contract coverage、config regression/contract coverage、dreaming command regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `ssrf`（`extensions/memory-core/src/memory/test-helpers/ssrf.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `test manager`（`extensions/memory-core/src/memory/test-manager.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/memory-core`
- Changed path count: `67`
- Status counts: `新增 3、修改 62、删除 2`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `67` files, `+4679` / `-826`

### 归纳依据

- 主要落点：implementation、tests/contracts、session/state handling、plugin entry/API surface、manifest/package metadata、configuration/schema、CLI/command behavior、model/thinking policy。
- 新增或暴露的关键符号包括：`loadMemoryToolsModule`, `loadRuntimeProviderModule`, `getToolConfig`, `hasMemoryToolContext`, `MemorySearchSchema`, `MemoryGetSchema`, `createLazyMemoryTool`, `createLazyMemorySearchTool`, `createLazyMemoryGetTool`, `resolveMemoryToolOptions`。
- 建议优先验证：优先运行 `pnpm test -- extensions/memory-core/index.test.ts`；`pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts`；`pnpm build`。
- 相关 commit 主题：fix(plugins): include json5 in memory runtime deps；test(memory): cover native Windows paths and locks；fix(memory): prevent memory-hit starvation in corpus=all by capping per-corpus results；perf: trim gateway startup plugin imports；fix(memory): split vector store readiness；fix(memory): keep plain status from probing embedding providers；fix(memory): reindex archived session transcript updates；fix: handle ENOSPC file watcher errors gracefully

### Dimension evidence

- `maintenance-优化-trim-gateway-startup-plugin-imports` / 优化 trim gateway startup plugin imports:
  - source: `path` [M] `extensions/memory-core/openclaw.plugin.json` — semantic cue
- `maintenance-修复-handle-ENOSPC-file-watcher-errors-gracefully` / 修复 handle ENOSPC file watcher errors gracefully:
  - source: `path` [M] `extensions/memory-core/src/memory/manager.watcher-config.test.ts` — semantic cue
- `maintenance-修复-memory-keep-archive-transcript-visibility-sa` / 修复 memory keep archive transcript visibility safe:
  - source: `path` [M] `extensions/memory-core/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/package.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/src/cli.host.runtime.ts` — semantic cue
- `maintenance-修复-memory-keep-plain-status-from-probing-embedd` / 修复 memory keep plain status from probing embedding providers:
  - source: `path` [M] `extensions/memory-core/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/package.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/src/cli.host.runtime.ts` — semantic cue
- `maintenance-修复-memory-prevent-memory-hit-starvation-in-corp` / 修复 memory prevent memory-hit starvation in corpus=all by capping per-co…:
  - source: `path` [M] `extensions/memory-core/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/package.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/src/cli.host.runtime.ts` — semantic cue
- `maintenance-修复-memory-reindex-archived-session-transcript-u` / 修复 memory reindex archived session transcript updates:
  - source: `path` [M] `extensions/memory-core/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/package.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/src/cli.host.runtime.ts` — semantic cue
- `maintenance-修复-memory-retry-reindex-on-socket-errors` / 修复 memory retry reindex on socket errors:
  - source: `path` [M] `extensions/memory-core/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/package.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/src/cli.host.runtime.ts` — semantic cue
- `maintenance-修复-memory-split-vector-store-readiness` / 修复 memory split vector store readiness:
  - source: `path` [M] `extensions/memory-core/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/package.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/src/cli.host.runtime.ts` — semantic cue
- `runtime-behavior-修复-plugins-include-json5-in-memory-runtime-deps` / 修复 plugins include json5 in memory runtime deps:
  - source: `path` [M] `extensions/memory-core/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/package.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/src/cli.host.runtime.ts` — semantic cue
- `tests-docs-测试覆盖-memory-cover-native-Windows-paths-and-locks` / 测试覆盖 memory cover native Windows paths and locks:
  - source: `path` [M] `extensions/memory-core/api.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/index.ts` — semantic cue
  - source: `path` [M] `extensions/memory-core/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/package.json` — semantic cue
  - source: `path` [M] `extensions/memory-core/src/cli.host.runtime.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/memory-core/api.ts` — contract evidence
  - source: `path` [M] `extensions/memory-core/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/memory-core/src/config.test.ts` — contract evidence
  - source: `path` [M] `extensions/memory-core/src/memory/manager.watcher-config.test.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/memory-core/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/memory-core/index.test.ts` — test evidence
  - source: `path` [M] `extensions/memory-core/src/cli.test.ts` — test evidence
  - source: `path` [M] `extensions/memory-core/src/config.test.ts` — test evidence
  - source: `path` [M] `extensions/memory-core/src/dreaming-command.test.ts` — test evidence
  - source: `path` [M] `extensions/memory-core/src/dreaming-narrative.test.ts` — test evidence
  - source: `path` [M] `extensions/memory-core/src/dreaming-phases.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/memory-core/src/memory/test-helpers/ssrf.ts`
  - source: `path` [D] `extensions/memory-core/src/memory/test-manager.ts`

### 路径证据

- 新增 `extensions/memory-core/src/memory/manager-embedding-timeout.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/memory-core/src/memory/manager-sync-ops.archive-delta-bypass.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/memory-core/src/rem-harness.ts`：调整 rem harness（implementation）。
- 修改 `extensions/memory-core/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/memory-core/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/memory-core/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/memory-core/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/memory-core/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/memory-core/src/cli.host.runtime.ts`：调整 cli.host（implementation）。
- 修改 `extensions/memory-core/src/cli.runtime.ts`：调整 cli（implementation）。
- 修改 `extensions/memory-core/src/cli.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/memory-core/src/cli.ts`：调整 cli（implementation）。
- 修改 `extensions/memory-core/src/concept-vocabulary.ts`：调整 concept vocabulary（implementation）。
- 修改 `extensions/memory-core/src/config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/memory-core/src/dreaming-command.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 删除 `extensions/memory-core/src/memory/test-helpers/ssrf.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/memory-core/src/memory/test-manager.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 其余 50 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/memory-media-voice-plugins/memory-core` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/memory-media-voice-plugins/memory-core/change-to-test.md` 的验证建议。
