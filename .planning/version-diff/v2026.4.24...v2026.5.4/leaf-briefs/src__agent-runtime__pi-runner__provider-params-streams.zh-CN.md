# src/agent-runtime/pi-runner/provider-params-streams

## 1. 功能结论

**新增**：openrouter expand app attribution categories、openrouter add opt-in response caching；**修改**：plugins reuse startup runtime registry、preserve OpenAI Codex OAuth transport、send OpenClaw attribution to OpenAI、canonicalize extra params model lookup keys；**迁移/重构**：unify lazy import loaders、hide agent helper internals、keep OpenAI streams on OpenClaw transport、remove dead private helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 10

## 3. 功能级详细差异

### 优化 plugins reuse startup runtime registry

优化 plugins：reuse startup runtime registry

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 canonicalize extra params model lookup keys

修复 canonicalize extra params model lookup keys

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 preserve OpenAI Codex OAuth transport

修复 preserve OpenAI Codex OAuth transport

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 send OpenClaw attribution to OpenAI

修复 send OpenClaw attribution to OpenAI

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 新增 openrouter add opt-in response caching

新增 openrouter：add opt-in response caching

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 新增 openrouter expand app attribution categories

新增 openrouter：expand app attribution categories

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 hide agent helper internals

迁移/重构 hide agent helper internals

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 keep OpenAI streams on OpenClaw transport

迁移/重构 keep OpenAI streams on OpenClaw transport

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 remove dead private helpers

迁移/重构 remove dead private helpers

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 unify lazy import loaders

迁移/重构 unify lazy import loaders

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 extra params.openrouter cache control regression/contract coverage、extra params.provider runtime regression/contract coverage、openai stream wrappers regression/contract coverage、openrouter model capabilities regression/contract coverage，用于约束本 leaf 的回归边界。

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

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/provider-params-streams`
- Changed path count: `10`
- Status counts: `修改 10`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `10` files, `+674` / `-52`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`clearPreparedExtraParamsCache`, `fingerprintPreparedExtraParamsModel`, `resolvePreparedExtraParamsCacheKey`, `resolveAliasedParamValueFromKeys`, `applyCanonicalAliasedParamValue`, `canonicalizeOpenRouterResponseCacheParams`, `resolveChatTemplateKwargsParam`, `createOpenAICompletionsChatTemplateKwargsWrapper`, `isRecord`, `hasResponsesWebSearchTool`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：feat(openrouter): expand app attribution categories；feat(openrouter): add opt-in response caching；perf(plugins): reuse startup runtime registry；refactor: unify lazy import loaders；refactor: hide agent helper internals；refactor: keep OpenAI streams on OpenClaw transport；refactor: remove dead private helpers；fix: preserve OpenAI Codex OAuth transport

### Dimension evidence

- `runtime-behavior-优化-plugins-reuse-startup-runtime-registry` / 优化 plugins reuse startup runtime registry:
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.provider-runtime.test.ts` — semantic cue
- `maintenance-修复-canonicalize-extra-params-model-lookup-keys` / 修复 canonicalize extra params model lookup keys:
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.provider-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openrouter-model-capabilities.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openrouter-model-capabilities.ts` — semantic cue
- `maintenance-修复-preserve-OpenAI-Codex-OAuth-transport` / 修复 preserve OpenAI Codex OAuth transport:
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.ts` — semantic cue
- `maintenance-修复-send-OpenClaw-attribution-to-OpenAI` / 修复 send OpenClaw attribution to OpenAI:
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.ts` — semantic cue
- `maintenance-新增-openrouter-add-opt-in-response-caching` / 新增 openrouter add opt-in response caching:
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openrouter-model-capabilities.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openrouter-model-capabilities.ts` — semantic cue
- `maintenance-新增-openrouter-expand-app-attribution-categories` / 新增 openrouter expand app attribution categories:
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/moonshot-thinking-stream-wrappers.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openrouter-model-capabilities.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openrouter-model-capabilities.ts` — semantic cue
- `migration-迁移-重构-hide-agent-helper-internals` / 迁移/重构 hide agent helper internals:
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.provider-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/moonshot-thinking-stream-wrappers.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.ts` — semantic cue
- `runtime-behavior-迁移-重构-keep-OpenAI-streams-on-OpenClaw-transport` / 迁移/重构 keep OpenAI streams on OpenClaw transport:
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.provider-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/moonshot-thinking-stream-wrappers.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.ts` — semantic cue
- `migration-迁移-重构-remove-dead-private-helpers` / 迁移/重构 remove dead private helpers:
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.provider-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/moonshot-thinking-stream-wrappers.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.ts` — semantic cue
- `migration-迁移-重构-unify-lazy-import-loaders` / 迁移/重构 unify lazy import loaders:
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.provider-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/moonshot-thinking-stream-wrappers.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts` — test evidence
  - source: `path` [M] `src/agents/pi-embedded-runner/extra-params.provider-runtime.test.ts` — test evidence
  - source: `path` [M] `src/agents/pi-embedded-runner/openai-stream-wrappers.test.ts` — test evidence
  - source: `path` [M] `src/agents/pi-embedded-runner/openrouter-model-capabilities.test.ts` — test evidence
  - source: `path` [M] `src/agents/pi-embedded-runner/proxy-stream-wrappers.test.ts` — test evidence

### 路径证据

- 修改 `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-runner/extra-params.provider-runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-runner/extra-params.ts`：调整 extra params（agent runtime）。
- 修改 `src/agents/pi-embedded-runner/moonshot-thinking-stream-wrappers.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `src/agents/pi-embedded-runner/openai-stream-wrappers.test.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 修改 `src/agents/pi-embedded-runner/openai-stream-wrappers.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 修改 `src/agents/pi-embedded-runner/openrouter-model-capabilities.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-runner/openrouter-model-capabilities.ts`：调整 openrouter model capabilities（agent runtime）。
- 修改 `src/agents/pi-embedded-runner/proxy-stream-wrappers.test.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 修改 `src/agents/pi-embedded-runner/proxy-stream-wrappers.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/pi-runner/provider-params-streams` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/pi-runner/provider-params-streams/change-to-test.md` 的验证建议。
