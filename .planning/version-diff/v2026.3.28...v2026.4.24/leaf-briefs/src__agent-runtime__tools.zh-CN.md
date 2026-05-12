# src/agent-runtime/tools

## 一句话结论

tools 所属的 Agent loop, ACP, spawning, command control 有 209 个路径变化（新增 69、修改 126、删除 12、重命名 2），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/tools`
- Changed path count: `209`
- Status counts: `新增 69、修改 126、删除 12、重命名 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `208` files, `+26445` / `-11034`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 69、修改 126、删除 12、重命名 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/agents/bash-tools.descriptions.ts`
- `src/agents/bash-tools.exec-approval-followup.test.ts`
- `src/agents/bash-tools.exec-host-gateway.test.ts`
- `src/agents/bash-tools.exec-host-node.test.ts`
- `src/agents/bash-tools.exec-host-shared.test.ts`
- `src/agents/bash-tools.exec-runtime.pty-fallback.test.ts`
- `src/agents/bash-tools.process-send-keys.test.ts`
- `src/agents/bash-tools.process-send-keys.ts`
- `src/agents/bash-tools.schemas.ts`
- `src/agents/openclaw-tools.generation.test-support.ts`
- `src/agents/openclaw-tools.nodes-workspace-guard.test.ts`
- `src/agents/openclaw-tools.nodes-workspace-guard.ts`
- `src/agents/openclaw-tools.plugin-context.ts`
- `src/agents/openclaw-tools.registration.ts`
- `src/agents/openclaw-tools.tts-config.test.ts`
- `src/agents/openclaw-tools.update-plan.test.ts`
- `src/agents/openclaw-tools.video-generation.test.ts`
- `src/agents/pi-tools.before-tool-call.embedded-mode.test.ts`
- `src/agents/pi-tools.create-openclaw-coding-tools.adds-claude-style-aliases-schemas-without-dropping-g.test.ts`
- `src/agents/pi-tools.create-openclaw-coding-tools.test.ts`
- `src/agents/pi-tools.deferred-followup-guidance.test.ts`
- `src/agents/pi-tools.deferred-followup.ts`
- `src/agents/pi-tools.message-provider-policy.ts`
- `src/agents/pi-tools.params.test.ts`
- `src/agents/pi-tools.read.host-tilde-expansion.test.ts`
- `src/agents/tools/AGENTS.md`
- `src/agents/tools/CLAUDE.md`
- `src/agents/tools/assistant-phase-text.test.ts`
- `src/agents/tools/chat-history-text.ts`
- `src/agents/tools/cron-tool.schema.test.ts`
- … 另有 39 个路径，详见 `leaf-impact.json`。

### 修改

- `src/agents/apply-patch.test.ts`
- `src/agents/apply-patch.ts`
- `src/agents/bash-tools.exec-approval-followup.ts`
- `src/agents/bash-tools.exec-approval-request.test.ts`
- `src/agents/bash-tools.exec-approval-request.ts`
- `src/agents/bash-tools.exec-foreground-failures.test.ts`
- `src/agents/bash-tools.exec-host-gateway.ts`
- `src/agents/bash-tools.exec-host-node.ts`
- `src/agents/bash-tools.exec-host-shared.ts`
- `src/agents/bash-tools.exec-runtime.test.ts`
- `src/agents/bash-tools.exec-runtime.ts`
- `src/agents/bash-tools.exec-types.ts`
- `src/agents/bash-tools.exec.approval-id.test.ts`
- `src/agents/bash-tools.exec.background-abort.test.ts`
- `src/agents/bash-tools.exec.path.test.ts`
- `src/agents/bash-tools.exec.pty.test.ts`
- `src/agents/bash-tools.exec.script-preflight.test.ts`
- `src/agents/bash-tools.exec.ts`
- `src/agents/bash-tools.process.poll-timeout.test.ts`
- `src/agents/bash-tools.process.send-keys.test.ts`
- `src/agents/bash-tools.process.supervisor.test.ts`
- `src/agents/bash-tools.process.ts`
- `src/agents/bash-tools.shared.ts`
- `src/agents/bash-tools.test.ts`
- `src/agents/bash-tools.ts`
- `src/agents/mcp-stdio.ts`
- `src/agents/openclaw-tools.agents.test.ts`
- `src/agents/openclaw-tools.browser-plugin.integration.test.ts`
- `src/agents/openclaw-tools.camera.test.ts`
- `src/agents/openclaw-tools.image-generation.test.ts`
- … 另有 96 个路径，详见 `leaf-impact.json`。

### 删除

- `src/agents/bash-tools.exec.pty-cleanup.test.ts`
- `src/agents/bash-tools.exec.pty-fallback-failure.test.ts`
- `src/agents/bash-tools.exec.pty-fallback.test.ts`
- `src/agents/openclaw-tools.subagents.sessions-spawn-default-timeout-absent.test.ts`
- `src/agents/openclaw-tools.subagents.sessions-spawn-default-timeout.test.ts`
- `src/agents/openclaw-tools.subagents.sessions-spawn-depth-limits.test.ts`
- `src/agents/openclaw-tools.web-runtime.test.ts`
- `src/agents/pi-tools.create-openclaw-coding-tools.adds-claude-style-aliases-schemas-without-dropping-b.test.ts`
- `src/agents/pi-tools.create-openclaw-coding-tools.adds-claude-style-aliases-schemas-without-dropping-d.test.ts`
- `src/agents/pi-tools.create-openclaw-coding-tools.adds-claude-style-aliases-schemas-without-dropping-f.test.ts`
- `src/agents/pi-tools.create-openclaw-coding-tools.adds-claude-style-aliases-schemas-without-dropping.test.ts`
- `src/agents/pi-tools.sandbox-policy.test.ts`

### 重命名

- `src/agents/pi-tools.owner-only-gating.test.ts`
- `src/agents/pi-tools.whatsapp-login-gating.test.ts`

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

- 首选验证：`tools/` | pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/agent-runtime/tools` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/tools/change-to-test.md` 的验证建议。
