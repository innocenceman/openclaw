# src/agent-runtime/runtime/cli-runner

## 1. 功能结论

**修改**：pass claude cli thinking effort、resolve small triage issues、cli-runner drop stale claude-cli sessionId when transcript missing、update codex cli live smoke；**迁移/重构**：remove bootstrap warning alias、trim internal helper exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 10、修改 20、删除 1

## 3. 功能级详细差异

### 修复 cli-runner drop stale claude-cli sessionId when transcript missing

修复 cli-runner：drop stale claude-cli sessionId when transcript missing

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 heartbeat type wake scheduling intent

修复 heartbeat：type wake scheduling intent

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 make claude live output limits configurable

修复 make claude live output limits configurable

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 narrow claude output limit config values

修复 narrow claude output limit config values

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 pass claude cli thinking effort

修复 pass claude cli thinking effort

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 plugins derive hook channel ids from targets

修复 plugins：derive hook channel ids from targets

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 resolve small triage issues

修复 resolve small triage issues

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修改 update codex cli live smoke

修改 update codex cli live smoke

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 remove bootstrap warning alias

迁移/重构 remove bootstrap warning alias

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 trim internal helper exports

迁移/重构 trim internal helper exports

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 cli backends regression/contract coverage、cli runner.before agent reply cron regression/contract coverage、cli runner.bundle mcp.e2e regression/contract coverage、cli runner regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `claude cli runner`（`src/agents/claude-cli-runner.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/cli-runner`
- Changed path count: `31`
- Status counts: `新增 10、修改 20、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `31` files, `+2945` / `-883`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`installTestClaudeBackend`, `setHookRunnerForTest`。
- 建议优先验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 相关 commit 主题：fix: pass claude cli thinking effort；fix: resolve small triage issues；fix(cli-runner): drop stale claude-cli sessionId when transcript missing；refactor: remove bootstrap warning alias；ci: update codex cli live smoke；fix(heartbeat): type wake scheduling intent；fix: narrow claude output limit config values；fix: make claude live output limits configurable

### Dimension evidence

- `maintenance-修复-cli-runner-drop-stale-claude-cli-sessionId-w` / 修复 cli-runner drop stale claude-cli sessionId when transcript missing:
  - source: `path` [M] `src/agents/claude-cli-runner.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.before-agent-reply-cron.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.bundle-mcp.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.helpers.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.reliability.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.spawn.test.ts` — semantic cue
- `maintenance-修复-heartbeat-type-wake-scheduling-intent` / 修复 heartbeat type wake scheduling intent:
  - source: `path` [M] `src/agents/cli-runner/types.ts` — semantic cue
- `maintenance-修复-make-claude-live-output-limits-configurable` / 修复 make claude live output limits configurable:
  - source: `path` [M] `src/agents/claude-cli-runner.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner/bundle-mcp-claude.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner/bundle-mcp.gemini.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner/claude-live-session.ts` — semantic cue
- `maintenance-修复-narrow-claude-output-limit-config-values` / 修复 narrow claude output limit config values:
  - source: `path` [M] `src/agents/claude-cli-runner.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner/bundle-mcp-claude.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner/bundle-mcp.user-config.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner/claude-live-session.ts` — semantic cue
- `runtime-behavior-修复-pass-claude-cli-thinking-effort` / 修复 pass claude cli thinking effort:
  - source: `path` [M] `src/agents/claude-cli-runner.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-backends.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-backends.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.before-agent-reply-cron.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.bundle-mcp.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.helpers.test.ts` — semantic cue
- `maintenance-修复-plugins-derive-hook-channel-ids-from-targets` / 修复 plugins derive hook channel ids from targets:
  - source: `path` [A] `src/agents/cli-runner/bundle-mcp-adapter-shared.ts`
  - source: `path` [A] `src/agents/cli-runner/bundle-mcp-claude.ts`
  - source: `path` [A] `src/agents/cli-runner/bundle-mcp-codex.ts`
  - source: `path` [M] `src/agents/cli-backends.test.ts`
  - source: `path` [M] `src/agents/cli-backends.ts`
  - source: `path` [M] `src/agents/cli-runner.before-agent-reply-cron.test.ts`
- `maintenance-修复-resolve-small-triage-issues` / 修复 resolve small triage issues:
  - source: `path` [A] `src/agents/cli-runner/bundle-mcp-adapter-shared.ts`
  - source: `path` [A] `src/agents/cli-runner/bundle-mcp-claude.ts`
  - source: `path` [A] `src/agents/cli-runner/bundle-mcp-codex.ts`
  - source: `path` [M] `src/agents/cli-backends.test.ts`
  - source: `path` [M] `src/agents/cli-backends.ts`
  - source: `path` [M] `src/agents/cli-runner.before-agent-reply-cron.test.ts`
- `maintenance-修改-update-codex-cli-live-smoke` / 修改 update codex cli live smoke:
  - source: `path` [M] `src/agents/claude-cli-runner.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-backends.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-backends.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.before-agent-reply-cron.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.bundle-mcp.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.helpers.test.ts` — semantic cue
- `migration-迁移-重构-remove-bootstrap-warning-alias` / 迁移/重构 remove bootstrap warning alias:
  - source: `path` [M] `src/agents/claude-cli-runner.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-backends.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-backends.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.before-agent-reply-cron.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.bundle-mcp.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.helpers.test.ts` — semantic cue
- `migration-迁移-重构-trim-internal-helper-exports` / 迁移/重构 trim internal helper exports:
  - source: `path` [M] `src/agents/claude-cli-runner.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-backends.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-backends.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.before-agent-reply-cron.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.bundle-mcp.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-runner.helpers.test.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/cli-backends.test.ts` — test evidence
  - source: `path` [M] `src/agents/cli-runner.before-agent-reply-cron.test.ts` — test evidence
  - source: `path` [M] `src/agents/cli-runner.bundle-mcp.e2e.test.ts` — test evidence
  - source: `path` [M] `src/agents/cli-runner.helpers.test.ts` — test evidence
  - source: `path` [M] `src/agents/cli-runner.reliability.test.ts` — test evidence
  - source: `path` [M] `src/agents/cli-runner.spawn.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/agents/claude-cli-runner.ts`

### 路径证据

- 新增 `src/agents/cli-runner/bundle-mcp-adapter-shared.ts`：调整 bundle mcp adapter shared（agent runtime）。
- 新增 `src/agents/cli-runner/bundle-mcp-claude.ts`：调整 bundle mcp claude（agent runtime）。
- 新增 `src/agents/cli-runner/bundle-mcp-codex.ts`：调整 bundle mcp codex（agent runtime）。
- 新增 `src/agents/cli-runner/bundle-mcp-gemini.ts`：调整 bundle mcp gemini（agent runtime）。
- 新增 `src/agents/cli-runner/bundle-mcp.codex.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/cli-runner/bundle-mcp.gemini.live.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/cli-runner/bundle-mcp.gemini.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/cli-runner/bundle-mcp.resume.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/cli-runner/bundle-mcp.test-support.ts`：调整 bundle mcp.test support（agent runtime）。
- 新增 `src/agents/cli-runner/bundle-mcp.user-config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/cli-backends.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/cli-backends.ts`：调整 cli backends（agent runtime）。
- 修改 `src/agents/cli-runner.before-agent-reply-cron.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/cli-runner.bundle-mcp.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/cli-runner.helpers.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/cli-runner.reliability.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/cli-runner.spawn.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/cli-runner.test-support.ts`：调整 cli runner.test support（agent runtime）。
- 修改 `src/agents/cli-runner.ts`：调整 cli runner（agent runtime）。
- 修改 `src/agents/cli-runner/bundle-mcp.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/cli-runner/bundle-mcp.ts`：调整 bundle mcp（agent runtime）。
- 修改 `src/agents/cli-runner/claude-live-session.ts`：调整 claude live session（agent runtime）。
- 删除 `src/agents/claude-cli-runner.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 其余 8 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/runtime/cli-runner` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/runtime/cli-runner/change-to-test.md` 的验证建议。
