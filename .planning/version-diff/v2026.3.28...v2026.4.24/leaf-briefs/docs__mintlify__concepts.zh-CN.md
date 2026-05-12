# docs/mintlify/concepts

## 一句话结论

concepts 所属的 Docs, generated baselines, changelog and public guidance 有 40 个路径变化（新增 10、修改 30），兼容性判断为仅文档/测试。

## Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/concepts`
- Changed path count: `40`
- Status counts: `新增 10、修改 30`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `40` files, `+3871` / `-1158`

## 功能变化摘要

这个 leaf 属于 `Docs, generated baselines, changelog and public guidance`。本次版本差异显示它的主要变化是：新增 10、修改 30。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `docs/concepts/active-memory.md`
- `docs/concepts/agent-runtimes.md`
- `docs/concepts/dreaming.md`
- `docs/concepts/experimental-features.md`
- `docs/concepts/memory-builtin.md`
- `docs/concepts/memory-honcho.md`
- `docs/concepts/memory-qmd.md`
- `docs/concepts/memory-search.md`
- `docs/concepts/qa-e2e-automation.md`
- `docs/concepts/soul.md`

### 修改

- `VISION.md`
- `docs/concepts/agent-loop.md`
- `docs/concepts/agent-workspace.md`
- `docs/concepts/agent.md`
- `docs/concepts/architecture.md`
- `docs/concepts/compaction.md`
- `docs/concepts/context-engine.md`
- `docs/concepts/context.md`
- `docs/concepts/delegate-architecture.md`
- `docs/concepts/features.md`
- `docs/concepts/markdown-formatting.md`
- `docs/concepts/memory.md`
- `docs/concepts/messages.md`
- `docs/concepts/model-failover.md`
- `docs/concepts/model-providers.md`
- `docs/concepts/models.md`
- `docs/concepts/multi-agent.md`
- `docs/concepts/oauth.md`
- `docs/concepts/presence.md`
- `docs/concepts/queue.md`
- `docs/concepts/retry.md`
- `docs/concepts/session-pruning.md`
- `docs/concepts/session-tool.md`
- `docs/concepts/session.md`
- `docs/concepts/streaming.md`
- `docs/concepts/system-prompt.md`
- `docs/concepts/timezone.md`
- `docs/concepts/typebox.md`
- `docs/concepts/typing-indicators.md`
- `docs/concepts/usage-tracking.md`

## 兼容性判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。

## 可能受影响的人或模块

- 文档读者和维护者

## 建议验证

- 首选验证：Existing page copy, examples, or frontmatter changed | `pnpm check:docs` | Escalate to product-specific tests only when the docs change is coupled to code behavior.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `docs/mintlify/concepts` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/concepts/change-to-test.md` 的验证建议。
