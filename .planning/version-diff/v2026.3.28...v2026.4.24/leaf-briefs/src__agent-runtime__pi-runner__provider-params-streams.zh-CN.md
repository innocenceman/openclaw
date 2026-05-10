# src/agent-runtime/pi-runner/provider-params-streams

## 一句话结论

provider params streams 所属的 Agent loop, ACP, spawning, command control 有 28 个路径变化（新增 3、修改 16、删除 5、重命名 4），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/provider-params-streams`
- Changed path count: `28`
- Status counts: `新增 3、修改 16、删除 5、重命名 4`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `27` files, `+1612` / `-1928`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 3、修改 16、删除 5、重命名 4。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/agents/pi-embedded-runner/google-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/minimax-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/openai-stream-wrappers.test.ts`

### 修改

- `src/agents/pi-embedded-runner/bedrock-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/extra-params.cache-retention-default.test.ts`
- `src/agents/pi-embedded-runner/extra-params.google.test.ts`
- `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts`
- `src/agents/pi-embedded-runner/extra-params.test-support.ts`
- `src/agents/pi-embedded-runner/extra-params.ts`
- `src/agents/pi-embedded-runner/extra-params.zai-tool-stream.test.ts`
- `src/agents/pi-embedded-runner/google-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/minimax-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/moonshot-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/moonshot-thinking-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/openai-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/openrouter-model-capabilities.test.ts`
- `src/agents/pi-embedded-runner/openrouter-model-capabilities.ts`
- `src/agents/pi-embedded-runner/proxy-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/proxy-stream-wrappers.ts`

### 删除

- `src/agents/pi-embedded-runner/anthropic-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/extra-params.openai.test.ts`
- `src/agents/pi-embedded-runner/extra-params.xai-tool-payload.test.ts`
- `src/agents/pi-embedded-runner/google.test.ts`
- `src/agents/pi-embedded-runner/moonshot-stream-wrappers.test.ts`

### 重命名

- `src/agents/pi-embedded-runner/extra-params.ollama.test.ts`
- `src/agents/pi-embedded-runner/extra-params.pi-ai-mock.ts`
- `src/agents/pi-embedded-runner/extra-params.provider-runtime.test.ts`
- `src/agents/pi-embedded-runner/google.ts`

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

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/agent-runtime/pi-runner/provider-params-streams` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/pi-runner/provider-params-streams/change-to-test.md` 的验证建议。
