# src/agent-runtime/runtime/command-entrypoint

## 1. 功能结论

**修改**：agents enforce exact skill path from <available_skills> [AI-assisted]、agents honor scoped post-compaction guard config、agents observe post-compaction guard live、agents observe matched post-compaction tool outcomes；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：large、contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 43、修改 311、删除 6、重命名 2

## 3. 功能级详细差异

### 优化 plugins reuse compatible metadata snapshots

优化 plugins：reuse compatible metadata snapshots

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 agents enforce exact skill path from <available_skills> [AI-assisted]

修复 agents：enforce exact skill path from <available_skills> [AI-assisted]

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 agents honor scoped post-compaction guard config

修复 agents：honor scoped post-compaction guard config

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 agents make post-compaction guard config valid + observation trim-re…

修复 agents：make post-compaction guard config valid + observation trim-resilient

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 agents mediate async media completions

修复 agents：mediate async media completions

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 agents observe matched post-compaction tool outcomes

修复 agents：observe matched post-compaction tool outcomes

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 agents observe post-compaction guard live

修复 agents：observe post-compaction guard live

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 lsp resolve Windows .cmd shims

修复 lsp：resolve Windows .cmd shims

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 置信度：`high`

### 测试覆盖 live retry cache probe text misses

测试覆盖 live：retry cache probe text misses

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 置信度：`high`

### 测试覆盖 live use low reasoning for cache probes

测试覆盖 live：use low reasoning for cache probes

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 agent runtime config、agent scope config、bundle mcp config regression/contract coverage、bundle mcp config，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 build regression/contract coverage、build，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 anthropic transport stream regression/contract coverage、anthropic.setup token regression/contract coverage、auth health regression/contract coverage、auth profile runtime contract regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `embedded runner`（`src/agents/embedded-runner.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `google thinking compat`（`src/agents/google-thinking-compat.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `harness plugin entrypoint`（`src/agents/harness/index.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `models config.fills missing provider apikey from env var regression/contract coverage`（`src/agents/models-config.fills-missing-provider-apikey-from-env-var.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`openai codex models add legacy regression/contract coverage` 路径（`src/agents/openai-codex-models-add-legacy.test.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`openai codex models add legacy` 路径（`src/agents/openai-codex-models-add-legacy.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 agent delete safety、agent runtime config、agent runtime metadata、agent runtime policy、agent scope config、announce idempotency；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/command-entrypoint`
- Changed path count: `362`
- Status counts: `新增 43、修改 311、删除 6、重命名 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `362` files, `+24307` / `-4241`

### 归纳依据

- 主要落点：agent runtime、gateway runtime。
- 新增或暴露的关键符号包括：`normalizeWorkspacePathForComparison`, `isPathWithinRoot`, `workspacePathsOverlap`, `findOverlappingWorkspaceAgentIds`, `normalizeRuntimeValue`, `resolveAgentRuntimeMetadata`, `resolveAgentRuntimePolicy`, `hasAgentRuntimePolicy`, `warnMultipleDefaultAgents`, `LIVE`。
- 建议优先验证：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`；`pnpm build`。
- 相关 commit 主题：fix(agents): enforce exact skill path from <available_skills> [AI-assisted]；fix(agents): honor scoped post-compaction guard config；fix(agents): observe post-compaction guard live；fix(agents): observe matched post-compaction tool outcomes；fix(agents): make post-compaction guard config valid + observation trim-resilient；test(live): use low reasoning for cache probes；fix(lsp): resolve Windows .cmd shims；test(live): retry cache probe text misses

### Dimension evidence

- `public-contract-优化-plugins-reuse-compatible-metadata-snapshots` / 优化 plugins reuse compatible metadata snapshots:
  - source: `path` [M] `src/agents/agent-runtime-metadata.ts` — semantic cue
  - source: `path` [M] `src/agents/runtime-plugins.test.ts` — semantic cue
  - source: `path` [M] `src/agents/runtime-plugins.ts` — semantic cue
- `maintenance-修复-agents-enforce-exact-skill-path-from-availa` / 修复 agents enforce exact skill path from <available_skills> [AI-assisted]:
  - source: `path` [M] `src/agents/agent-delete-safety.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-config.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-metadata.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-policy.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-scope-config.ts` — semantic cue
  - source: `path` [M] `src/agents/announce-idempotency.ts` — semantic cue
- `maintenance-修复-agents-honor-scoped-post-compaction-guard-co` / 修复 agents honor scoped post-compaction guard config:
  - source: `path` [M] `src/agents/agent-delete-safety.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-config.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-metadata.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-policy.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-scope-config.ts` — semantic cue
  - source: `path` [M] `src/agents/announce-idempotency.ts` — semantic cue
- `maintenance-修复-agents-make-post-compaction-guard-config-val` / 修复 agents make post-compaction guard config valid + observation trim-re…:
  - source: `path` [M] `src/agents/agent-delete-safety.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-config.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-metadata.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-policy.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-scope-config.ts` — semantic cue
  - source: `path` [M] `src/agents/announce-idempotency.ts` — semantic cue
- `maintenance-修复-agents-mediate-async-media-completions` / 修复 agents mediate async media completions:
  - source: `path` [M] `src/agents/agent-delete-safety.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-config.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-metadata.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-policy.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-scope-config.ts` — semantic cue
  - source: `path` [M] `src/agents/announce-idempotency.ts` — semantic cue
- `maintenance-修复-agents-observe-matched-post-compaction-tool` / 修复 agents observe matched post-compaction tool outcomes:
  - source: `path` [M] `src/agents/agent-delete-safety.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-config.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-metadata.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-policy.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-scope-config.ts` — semantic cue
  - source: `path` [M] `src/agents/announce-idempotency.ts` — semantic cue
- `maintenance-修复-agents-observe-post-compaction-guard-live` / 修复 agents observe post-compaction guard live:
  - source: `path` [M] `src/agents/agent-delete-safety.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-config.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-metadata.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-runtime-policy.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-scope-config.ts` — semantic cue
  - source: `path` [M] `src/agents/announce-idempotency.ts` — semantic cue
- `maintenance-修复-lsp-resolve-Windows-cmd-shims` / 修复 lsp resolve Windows .cmd shims:
  - source: `path` [M] `src/agents/embedded-pi-lsp.ts` — semantic cue
  - source: `path` [M] `src/agents/model-selection-resolve.test.ts` — semantic cue
  - source: `path` [M] `src/agents/model-selection-resolve.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-bundle-lsp-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-bundle-lsp-runtime.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-bundle-lsp-runtime.windows-spawn.test.ts` — semantic cue
- `tests-docs-测试覆盖-live-retry-cache-probe-text-misses` / 测试覆盖 live retry cache probe text misses:
  - source: `path` [M] `src/agents/anthropic-transport-stream.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/anthropic.setup-token.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bootstrap-cache.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bootstrap-cache.ts` — semantic cue
  - source: `path` [M] `src/agents/cache-trace.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cache-trace.ts` — semantic cue
- `tests-docs-测试覆盖-live-use-low-reasoning-for-cache-probes` / 测试覆盖 live use low reasoning for cache probes:
  - source: `path` [M] `src/agents/anthropic-transport-stream.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/anthropic.setup-token.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bootstrap-cache.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bootstrap-cache.ts` — semantic cue
  - source: `path` [M] `src/agents/cache-trace.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cache-trace.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/agents/agent-runtime-config.ts` — contract evidence
  - source: `path` [M] `src/agents/agent-scope-config.ts` — contract evidence
  - source: `path` [M] `src/agents/bundle-mcp-config.test.ts` — contract evidence
  - source: `path` [M] `src/agents/bundle-mcp-config.ts` — contract evidence
  - source: `path` [M] `src/agents/configured-provider-fallback.ts` — contract evidence
  - source: `path` [M] `src/agents/mcp-transport-config.test.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `src/agents/runtime-plan/build.test.ts` — build/release evidence
  - source: `path` [M] `src/agents/runtime-plan/build.ts` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/anthropic-transport-stream.live.test.ts` — test evidence
  - source: `path` [M] `src/agents/anthropic-transport-stream.test.ts` — test evidence
  - source: `path` [M] `src/agents/anthropic.setup-token.live.test.ts` — test evidence
  - source: `path` [M] `src/agents/auth-health.test.ts` — test evidence
  - source: `path` [M] `src/agents/auth-profile-runtime-contract.test.ts` — test evidence
  - source: `path` [M] `src/agents/bootstrap-budget.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/agents/embedded-runner.ts`
  - source: `path` [D] `src/agents/google-thinking-compat.ts`
  - source: `path` [D] `src/agents/harness/index.ts`
  - source: `path` [D] `src/agents/models-config.fills-missing-provider-apikey-from-env-var.test.ts`
  - source: `path` [D] `src/agents/pi-embedded-runtime.types.ts`
  - source: `path` [D] `src/agents/runtime-plan/index.ts`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `src/agents/openai-codex-models-add-legacy.test.ts`
  - source: `path` [R] `src/agents/openai-codex-models-add-legacy.ts`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `src/agents/agent-delete-safety.ts`
  - source: `path` [A] `src/agents/agent-runtime-metadata.ts`
  - source: `path` [A] `src/agents/agent-runtime-policy.ts`
  - source: `path` [A] `src/agents/anthropic-transport-stream.live.test.ts`
  - source: `path` [A] `src/agents/btw-transcript.ts`
  - source: `path` [A] `src/agents/bundle-mcp-config.test.ts`

### 路径证据

- 新增 `src/agents/agent-delete-safety.ts`：调整 agent delete safety（agent runtime）。
- 新增 `src/agents/agent-runtime-metadata.ts`：调整 agent runtime metadata（agent runtime）。
- 新增 `src/agents/agent-runtime-policy.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 新增 `src/agents/anthropic-transport-stream.live.test.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 新增 `src/agents/btw-transcript.ts`：调整 btw transcript（agent runtime）。
- 新增 `src/agents/bundle-mcp-config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/bundle-mcp-config.ts`：调整 bundle mcp config（agent runtime）。
- 新增 `src/agents/codex-native-web-search-core.ts`：调整 codex native web search core（agent runtime）。
- 新增 `src/agents/docs-path.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/harness/lifecycle-hook-helpers.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/harness/result-classification.ts`：调整 result classification（agent runtime）。
- 新增 `src/agents/harness/v2.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/agent-runtime-config.ts`：调整 agent runtime config（agent runtime）。
- 修改 `src/agents/agent-scope-config.ts`：调整 agent scope config（agent runtime）。
- 修改 `src/agents/announce-idempotency.ts`：调整 announce idempotency（agent runtime）。
- 修改 `src/agents/anthropic-payload-log.ts`：调整 anthropic payload log（agent runtime）。
- 修改 `src/agents/anthropic-transport-stream.test.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 修改 `src/agents/anthropic-transport-stream.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 修改 `src/agents/anthropic-vertex-stream.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 修改 `src/agents/anthropic.setup-token.live.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/auth-health.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/auth-health.ts`：调整 auth health（agent runtime）。
- 修改 `src/agents/auth-profile-runtime-contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/bootstrap-budget.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 删除 `src/agents/embedded-runner.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/google-thinking-compat.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/harness/index.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/models-config.fills-missing-provider-apikey-from-env-var.test.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/pi-embedded-runtime.types.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/runtime-plan/index.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `src/agents/openai-codex-models-add-legacy.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 重命名 `src/agents/openai-codex-models-add-legacy.ts`：调整 openai codex models add legacy（agent runtime）。
- 其余 330 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/runtime/command-entrypoint` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/runtime/command-entrypoint/change-to-test.md` 的验证建议。
