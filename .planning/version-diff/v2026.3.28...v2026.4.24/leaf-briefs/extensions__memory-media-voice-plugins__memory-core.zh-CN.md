# extensions/memory-media-voice-plugins/memory-core

## 一句话结论

memory core 所属的 Memory, media, web UI and terminal UI surfaces 有 121 个路径变化（新增 70、修改 45、删除 5、重命名 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/memory-core`
- Changed path count: `121`
- Status counts: `新增 70、修改 45、删除 5、重命名 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `121` files, `+28477` / `-4294`

## 功能变化摘要

这个 leaf 属于 `Memory, media, web UI and terminal UI surfaces`。本次版本差异显示它的主要变化是：新增 70、修改 45、删除 5、重命名 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/memory-core/cli-metadata.ts`
- `extensions/memory-core/manager-runtime.ts`
- `extensions/memory-core/src/cli.host.runtime.ts`
- `extensions/memory-core/src/concept-vocabulary.test.ts`
- `extensions/memory-core/src/concept-vocabulary.ts`
- `extensions/memory-core/src/config.test.ts`
- `extensions/memory-core/src/dreaming-command.test.ts`
- `extensions/memory-core/src/dreaming-command.ts`
- `extensions/memory-core/src/dreaming-markdown.test.ts`
- `extensions/memory-core/src/dreaming-markdown.ts`
- `extensions/memory-core/src/dreaming-narrative.test.ts`
- `extensions/memory-core/src/dreaming-narrative.ts`
- `extensions/memory-core/src/dreaming-phases.test.ts`
- `extensions/memory-core/src/dreaming-phases.ts`
- `extensions/memory-core/src/dreaming-repair.test.ts`
- `extensions/memory-core/src/dreaming-repair.ts`
- `extensions/memory-core/src/dreaming-shared.test.ts`
- `extensions/memory-core/src/dreaming-shared.ts`
- `extensions/memory-core/src/dreaming.test.ts`
- `extensions/memory-core/src/dreaming.ts`
- `extensions/memory-core/src/memory-events.test.ts`
- `extensions/memory-core/src/memory/embeddings.test.ts`
- `extensions/memory-core/src/memory/manager-async-state.ts`
- `extensions/memory-core/src/memory/manager-atomic-reindex.ts`
- `extensions/memory-core/src/memory/manager-batch-state.test.ts`
- `extensions/memory-core/src/memory/manager-batch-state.ts`
- `extensions/memory-core/src/memory/manager-cache.test.ts`
- `extensions/memory-core/src/memory/manager-cache.ts`
- `extensions/memory-core/src/memory/manager-db.ts`
- `extensions/memory-core/src/memory/manager-embedding-cache.test.ts`
- … 另有 40 个路径，详见 `leaf-impact.json`。

### 修改

- `extensions/memory-core/api.ts`
- `extensions/memory-core/index.test.ts`
- `extensions/memory-core/index.ts`
- `extensions/memory-core/openclaw.plugin.json`
- `extensions/memory-core/package.json`
- `extensions/memory-core/runtime-api.ts`
- `extensions/memory-core/src/cli.runtime.ts`
- `extensions/memory-core/src/cli.test.ts`
- `extensions/memory-core/src/cli.ts`
- `extensions/memory-core/src/cli.types.ts`
- `extensions/memory-core/src/flush-plan.ts`
- `extensions/memory-core/src/memory/embedding.test-mocks.ts`
- `extensions/memory-core/src/memory/embeddings.ts`
- `extensions/memory-core/src/memory/hybrid.test.ts`
- `extensions/memory-core/src/memory/hybrid.ts`
- `extensions/memory-core/src/memory/index.test.ts`
- `extensions/memory-core/src/memory/manager-embedding-ops.ts`
- `extensions/memory-core/src/memory/manager-search.ts`
- `extensions/memory-core/src/memory/manager-sync-ops.ts`
- `extensions/memory-core/src/memory/manager.async-search.test.ts`
- `extensions/memory-core/src/memory/manager.atomic-reindex.test.ts`
- `extensions/memory-core/src/memory/manager.mistral-provider.test.ts`
- `extensions/memory-core/src/memory/manager.read-file.test.ts`
- `extensions/memory-core/src/memory/manager.readonly-recovery.test.ts`
- `extensions/memory-core/src/memory/manager.ts`
- `extensions/memory-core/src/memory/manager.vector-dedupe.test.ts`
- `extensions/memory-core/src/memory/manager.watcher-config.test.ts`
- `extensions/memory-core/src/memory/mmr.ts`
- `extensions/memory-core/src/memory/provider-adapters.ts`
- `extensions/memory-core/src/memory/qmd-manager.slugified-paths.test.ts`
- … 另有 15 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/memory-core/src/memory/embedding-manager.test-harness.ts`
- `extensions/memory-core/src/memory/manager.batch.test.ts`
- `extensions/memory-core/src/memory/manager.embedding-batches.test.ts`
- `extensions/memory-core/src/memory/manager.get-concurrency.test.ts`
- `extensions/memory-core/src/memory/test-embeddings-mock.ts`

### 重命名

- `extensions/memory-core/src/memory-tool-manager-mock.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者

## 建议验证

- 首选验证：Memory prompt or tool registration changed | `pnpm test -- extensions/memory-core/index.test.ts` | Add shared plugin contract tests if runtime registration crosses package boundaries.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/memory-media-voice-plugins/memory-core` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/memory-media-voice-plugins/memory-core/change-to-test.md` 的验证建议。
