# src/agent-runtime/runtime/command-entrypoint

## 一句话结论

command entrypoint 所属的 Agent loop, ACP, spawning, command control 有 516 个路径变化（新增 222、修改 241、删除 28、重命名 25），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/command-entrypoint`
- Changed path count: `516`
- Status counts: `新增 222、修改 241、删除 28、重命名 25`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `515` files, `+66057` / `-15866`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 222、修改 241、删除 28、重命名 25。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/agents/AGENTS.md`
- `src/agents/CLAUDE.md`
- `src/agents/agent-runtime-config.ts`
- `src/agents/agent-scope-config.ts`
- `src/agents/anthropic-payload-policy.test.ts`
- `src/agents/anthropic-payload-policy.ts`
- `src/agents/anthropic-transport-stream.test.ts`
- `src/agents/anthropic-transport-stream.ts`
- `src/agents/auth-profile-runtime-contract.test.ts`
- `src/agents/bootstrap-mode.test.ts`
- `src/agents/bootstrap-mode.ts`
- `src/agents/bootstrap-prompt.ts`
- `src/agents/bundle-mcp-shared.test-harness.ts`
- `src/agents/cli-auth-epoch.test.ts`
- `src/agents/cli-auth-epoch.ts`
- `src/agents/codex-app-server.extensions.test.ts`
- `src/agents/codex-native-web-search.shared.ts`
- `src/agents/codex-native-web-search.test.ts`
- `src/agents/codex-native-web-search.ts`
- `src/agents/compaction.summarize-fallback.test.ts`
- `src/agents/copilot-dynamic-headers.ts`
- `src/agents/embedded-runner.ts`
- `src/agents/exec-approval-result.test.ts`
- `src/agents/exec-approval-result.ts`
- `src/agents/exec-defaults.test.ts`
- `src/agents/exec-defaults.ts`
- `src/agents/execution-contract.test.ts`
- `src/agents/execution-contract.ts`
- `src/agents/google-thinking-compat.ts`
- `src/agents/gpt5-prompt-overlay.ts`
- … 另有 192 个路径，详见 `leaf-impact.json`。

### 修改

- `src/agents/anthropic-payload-log.test.ts`
- `src/agents/anthropic-payload-log.ts`
- `src/agents/anthropic-vertex-stream.ts`
- `src/agents/anthropic.setup-token.live.test.ts`
- `src/agents/auth-health.test.ts`
- `src/agents/auth-health.ts`
- `src/agents/bash-process-registry.ts`
- `src/agents/bootstrap-budget.ts`
- `src/agents/bootstrap-cache.test.ts`
- `src/agents/bootstrap-files.test.ts`
- `src/agents/bootstrap-files.ts`
- `src/agents/bootstrap-hooks.ts`
- `src/agents/btw.test.ts`
- `src/agents/btw.ts`
- `src/agents/bundle-mcp.test-harness.ts`
- `src/agents/cache-trace.test.ts`
- `src/agents/cache-trace.ts`
- `src/agents/channel-tools.test.ts`
- `src/agents/channel-tools.ts`
- `src/agents/chutes-oauth.ts`
- `src/agents/cli-credentials.test.ts`
- `src/agents/cli-credentials.ts`
- `src/agents/cli-output.test.ts`
- `src/agents/cli-output.ts`
- `src/agents/compaction.identifier-policy.test.ts`
- `src/agents/compaction.identifier-preservation.test.ts`
- `src/agents/compaction.retry.test.ts`
- `src/agents/compaction.test.ts`
- `src/agents/compaction.token-sanitize.test.ts`
- `src/agents/compaction.tool-result-details.test.ts`
- … 另有 211 个路径，详见 `leaf-impact.json`。

### 删除

- `src/agents/anthropic-vertex-stream.test.ts`
- `src/agents/bedrock-discovery.test.ts`
- `src/agents/byteplus-models.ts`
- `src/agents/chutes-models.ts`
- `src/agents/deepseek-models.ts`
- `src/agents/doubao-models.ts`
- `src/agents/google-generative-ai.test.ts`
- `src/agents/kilocode-models.ts`
- `src/agents/model-catalog.test-harness.ts`
- `src/agents/models-config.auto-injects-github-copilot-provider-token-is.test.ts`
- `src/agents/models-config.falls-back-default-baseurl-token-exchange-fails.test.ts`
- `src/agents/models-config.normalizes-gemini-3-ids-preview-google-providers.test.ts`
- `src/agents/moonshot-provider-compat.ts`
- `src/agents/opencode-zen-models.test.ts`
- `src/agents/opencode-zen-models.ts`
- `src/agents/pi-bundle-mcp-tools.test.ts`
- `src/agents/pi-embedded-queue.runtime.ts`
- `src/agents/provider-capabilities.test.ts`
- `src/agents/provider-capabilities.ts`
- `src/agents/sandbox-skills.test.ts`
- `src/agents/sessions-spawn-threadid.test.ts`
- `src/agents/synthetic-models.ts`
- `src/agents/together-models.ts`
- `src/agents/tool-display-overrides.json`
- `src/agents/tool-summaries.ts`
- `src/agents/tools-effective-inventory.integration.test.ts`
- `src/agents/venice-models.ts`
- `src/agents/xai-auth-trace.ts`

### 重命名

- `src/agents/byteplus.live.test.ts`
- `src/agents/chutes-models.test.ts`
- `src/agents/huggingface-models.test.ts`
- `src/agents/kilocode-models.test.ts`
- `src/agents/model-allowlist-ref.ts`
- `src/agents/model-id-normalization.test.ts`
- `src/agents/model-ref-shared.ts`
- `src/agents/ollama-stream.test.ts`
- `src/agents/pi-hooks/compaction-instructions.test.ts`
- `src/agents/pi-hooks/compaction-instructions.ts`
- `src/agents/pi-hooks/compaction-safeguard-quality.ts`
- `src/agents/pi-hooks/compaction-safeguard-runtime.ts`
- `src/agents/pi-hooks/compaction-safeguard.test.ts`
- `src/agents/pi-hooks/compaction-safeguard.ts`
- `src/agents/pi-hooks/context-pruning.test.ts`
- `src/agents/pi-hooks/context-pruning.ts`
- `src/agents/pi-hooks/context-pruning/extension.ts`
- `src/agents/pi-hooks/context-pruning/pruner.ts`
- `src/agents/pi-hooks/context-pruning/runtime.ts`
- `src/agents/pi-hooks/context-pruning/settings.ts`
- `src/agents/pi-hooks/context-pruning/tools.ts`
- `src/agents/pi-hooks/session-manager-runtime-registry.ts`
- `src/agents/prompt-composition-scenarios.ts`
- `src/agents/venice-models.test.ts`
- `src/agents/volc-models.shared.ts`

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

- 首选验证：1. For entrypoint or flag behavior, run `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/agent-runtime/runtime/command-entrypoint` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/runtime/command-entrypoint/change-to-test.md` 的验证建议。
