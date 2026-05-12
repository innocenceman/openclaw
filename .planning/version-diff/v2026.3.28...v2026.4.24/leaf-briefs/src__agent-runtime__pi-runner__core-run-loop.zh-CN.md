# src/agent-runtime/pi-runner/core-run-loop

## 一句话结论

core run loop 所属的 Agent loop, ACP, spawning, command control 有 190 个路径变化（新增 82、修改 106、删除 1、重命名 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/core-run-loop`
- Changed path count: `190`
- Status counts: `新增 82、修改 106、删除 1、重命名 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `190` files, `+30153` / `-4339`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 82、修改 106、删除 1、重命名 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts`
- `src/agents/pi-embedded-runner.cache.live.test.ts`
- `src/agents/pi-embedded-runner.extensions.test.ts`
- `src/agents/pi-embedded-runner/aliases.test.ts`
- `src/agents/pi-embedded-runner/anthropic-cache-control-payload.test.ts`
- `src/agents/pi-embedded-runner/anthropic-cache-control-payload.ts`
- `src/agents/pi-embedded-runner/anthropic-family-cache-semantics.ts`
- `src/agents/pi-embedded-runner/anthropic-family-tool-payload-compat.ts`
- `src/agents/pi-embedded-runner/compact.queued.ts`
- `src/agents/pi-embedded-runner/compact.runtime.types.ts`
- `src/agents/pi-embedded-runner/compact.types.ts`
- `src/agents/pi-embedded-runner/effective-tool-policy.test.ts`
- `src/agents/pi-embedded-runner/effective-tool-policy.ts`
- `src/agents/pi-embedded-runner/google-prompt-cache.test.ts`
- `src/agents/pi-embedded-runner/google-prompt-cache.ts`
- `src/agents/pi-embedded-runner/manual-compaction-boundary.test.ts`
- `src/agents/pi-embedded-runner/manual-compaction-boundary.ts`
- `src/agents/pi-embedded-runner/model-context-tokens.ts`
- `src/agents/pi-embedded-runner/model.inline-provider.test.ts`
- `src/agents/pi-embedded-runner/model.inline-provider.ts`
- `src/agents/pi-embedded-runner/prompt-cache-observability.test.ts`
- `src/agents/pi-embedded-runner/prompt-cache-observability.ts`
- `src/agents/pi-embedded-runner/prompt-cache-retention.test.ts`
- `src/agents/pi-embedded-runner/prompt-cache-retention.ts`
- `src/agents/pi-embedded-runner/reasoning-effort-utils.test.ts`
- `src/agents/pi-embedded-runner/reasoning-effort-utils.ts`
- `src/agents/pi-embedded-runner/replay-state.ts`
- `src/agents/pi-embedded-runner/result-fallback-classifier.ts`
- `src/agents/pi-embedded-runner/run.before-agent-reply-cron.test.ts`
- `src/agents/pi-embedded-runner/run.cross-provider-fallback-error-context.test.ts`
- … 另有 52 个路径，详见 `leaf-impact.json`。

### 修改

- `src/agents/pi-embedded-runner.buildembeddedsandboxinfo.test.ts`
- `src/agents/pi-embedded-runner.bundle-mcp.e2e.test.ts`
- `src/agents/pi-embedded-runner.compaction-safety-timeout.test.ts`
- `src/agents/pi-embedded-runner.e2e.test.ts`
- `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts`
- `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts`
- `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts`
- `src/agents/pi-embedded-runner.limithistoryturns.test.ts`
- `src/agents/pi-embedded-runner.openai-tool-id-preservation.test.ts`
- `src/agents/pi-embedded-runner.resolvesessionagentids.test.ts`
- `src/agents/pi-embedded-runner.run-embedded-pi-agent.auth-profile-rotation.e2e.test.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.policy.test.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.test-harness.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.test.ts`
- `src/agents/pi-embedded-runner.splitsdktools.test.ts`
- `src/agents/pi-embedded-runner.ts`
- `src/agents/pi-embedded-runner/abort.ts`
- `src/agents/pi-embedded-runner/cache-ttl.test.ts`
- `src/agents/pi-embedded-runner/cache-ttl.ts`
- `src/agents/pi-embedded-runner/compact-reasons.ts`
- `src/agents/pi-embedded-runner/compact.hooks.harness.ts`
- `src/agents/pi-embedded-runner/compact.hooks.test.ts`
- `src/agents/pi-embedded-runner/compact.runtime.ts`
- `src/agents/pi-embedded-runner/compact.ts`
- `src/agents/pi-embedded-runner/compaction-hooks.ts`
- `src/agents/pi-embedded-runner/compaction-runtime-context.test.ts`
- `src/agents/pi-embedded-runner/compaction-runtime-context.ts`
- `src/agents/pi-embedded-runner/compaction-safety-timeout.ts`
- `src/agents/pi-embedded-runner/context-engine-maintenance.test.ts`
- `src/agents/pi-embedded-runner/context-engine-maintenance.ts`
- … 另有 76 个路径，详见 `leaf-impact.json`。

### 删除

- `src/agents/pi-embedded-runner.applygoogleturnorderingfix.test.ts`

### 重命名

- `src/agents/pi-embedded-runner/replay-history.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- CLI/agent 使用者
- agent runtime 集成方

## 建议验证

- 首选验证：1. Run `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/agent-runtime/pi-runner/core-run-loop` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/pi-runner/core-run-loop/change-to-test.md` 的验证建议。
