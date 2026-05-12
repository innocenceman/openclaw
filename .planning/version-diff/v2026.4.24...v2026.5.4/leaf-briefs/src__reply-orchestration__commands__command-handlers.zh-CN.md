# src/reply-orchestration/commands/command-handlers

## 1. 功能结论

**新增**：agents add current-session steer command、commands add side alias for btw；**修改**：plugins trust chat catalog installs、plugins scope commands to channels、Stop heartbeat tool turns from asking for HEARTBEAT_OK、plugins keep bare installs on npm for launch；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`plugin`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 12、修改 49、删除 1

## 3. 功能级详细差异

### 优化 status lazy-load harness selection

优化 status：lazy-load harness selection

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 hot reload plugin management changes

修复 hot reload plugin management changes

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 plugins gate bare clawhub installs on readiness

修复 plugins：gate bare clawhub installs on readiness

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 plugins keep bare installs on npm for launch

修复 plugins：keep bare installs on npm for launch

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 plugins scope commands to channels

修复 plugins：scope commands to channels

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 plugins trust chat catalog installs

修复 plugins：trust chat catalog installs

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK

修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 [codex] Fix Codex OAuth status auth label

修改 [codex] Fix Codex OAuth status auth label

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 新增 agents add current-session steer command

新增 agents：add current-session steer command

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 新增 commands add side alias for btw

新增 commands：add side alias for btw

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 commands acp regression/contract coverage、commands allowlist regression/contract coverage、commands btw regression/contract coverage、commands diagnostics regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `commands subagents.test mocks`（`src/auto-reply/reply/commands-subagents.test-mocks.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/commands/command-handlers`
- Changed path count: `62`
- Status counts: `新增 12、修改 49、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `62` files, `+4898` / `-621`

### 归纳依据

- 主要落点：CLI/command behavior。
- 新增或暴露的关键符号包括：`handleAcpCommand`, `isBackendPluginBlockedByAllowlist`, `ACP_SPAWN_USAGE`, `ACP_STEER_USAGE`, `ACP_SET_USAGE`, `handleCrestodianCommand`, `buildDiagnosticsParams`, `createBundledPluginRecord`, `registerHostTrustedReservedCommandForTest`, `registerCodexDiagnosticsCommandForTest`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix(plugins): trust chat catalog installs；fix(plugins): scope commands to channels；feat(agents): add current-session steer command；feat(commands): add side alias for btw；Stop heartbeat tool turns from asking for HEARTBEAT_OK；fix(plugins): keep bare installs on npm for launch；[codex] Fix Codex OAuth status auth label；fix(plugins): gate bare clawhub installs on readiness

### Dimension evidence

- `maintenance-优化-status-lazy-load-harness-selection` / 优化 status lazy-load harness selection:
  - source: `path` [M] `src/auto-reply/reply/commands-status.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-status.thinking-default.test.ts` — semantic cue
- `maintenance-修复-hot-reload-plugin-management-changes` / 修复 hot reload plugin management changes:
  - source: `path` [M] `src/auto-reply/reply/commands-plugin.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-plugin.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-plugins.install.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-plugins.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-plugins.ts` — semantic cue
- `maintenance-修复-plugins-gate-bare-clawhub-installs-on-readin` / 修复 plugins gate bare clawhub installs on readiness:
  - source: `path` [M] `src/auto-reply/reply/commands-config.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-export-common.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-export-session.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-export-session.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-plugins.install.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-plugins.test.ts` — semantic cue
- `maintenance-修复-plugins-keep-bare-installs-on-npm-for-launch` / 修复 plugins keep bare installs on npm for launch:
  - source: `path` [M] `src/auto-reply/reply/commands-config.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-export-common.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-export-session.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-export-session.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-plugins.install.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-plugins.test.ts` — semantic cue
- `maintenance-修复-plugins-scope-commands-to-channels` / 修复 plugins scope commands to channels:
  - source: `path` [M] `src/auto-reply/reply/commands-acp.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-acp.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-acp/diagnostics.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-acp/shared.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-acp/targets.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-allowlist.test.ts` — semantic cue
- `runtime-behavior-修复-plugins-trust-chat-catalog-installs` / 修复 plugins trust chat catalog installs:
  - source: `path` [M] `src/auto-reply/reply/commands-plugins.install.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-plugins.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-plugins.ts` — semantic cue
- `maintenance-修改-Stop-heartbeat-tool-turns-from-asking-for-HE` / 修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK:
  - source: `path` [A] `src/auto-reply/reply/commands-crestodian.ts`
  - source: `path` [A] `src/auto-reply/reply/commands-diagnostics.test.ts`
  - source: `path` [A] `src/auto-reply/reply/commands-diagnostics.ts`
  - source: `path` [M] `src/auto-reply/reply/commands-acp.test.ts`
  - source: `path` [M] `src/auto-reply/reply/commands-acp.ts`
  - source: `path` [M] `src/auto-reply/reply/commands-acp/diagnostics.ts`
- `maintenance-修改-codex-Fix-Codex-OAuth-status-auth-label` / 修改 [codex] Fix Codex OAuth status auth label:
  - source: `path` [M] `src/auto-reply/reply/commands-status.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-status.thinking-default.test.ts` — semantic cue
- `maintenance-新增-agents-add-current-session-steer-command` / 新增 agents add current-session steer command:
  - source: `path` [M] `src/auto-reply/reply/commands-acp.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-acp.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-acp/diagnostics.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-acp/shared.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-acp/targets.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-allowlist.test.ts` — semantic cue
- `maintenance-新增-commands-add-side-alias-for-btw` / 新增 commands add side alias for btw:
  - source: `path` [M] `src/auto-reply/reply/commands-acp.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-acp.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-acp/diagnostics.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-acp/shared.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-acp/targets.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/commands-allowlist.test.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/auto-reply/reply/commands-acp.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/commands-allowlist.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/commands-btw.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/commands-diagnostics.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/commands-dock.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/commands-export-session.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/auto-reply/reply/commands-subagents.test-mocks.ts`

### 路径证据

- 新增 `src/auto-reply/reply/commands-crestodian.ts`：调整 commands crestodian（CLI/command behavior）。
- 新增 `src/auto-reply/reply/commands-diagnostics.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/auto-reply/reply/commands-diagnostics.ts`：调整 commands diagnostics（CLI/command behavior）。
- 新增 `src/auto-reply/reply/commands-dock.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/auto-reply/reply/commands-dock.ts`：调整 commands dock（CLI/command behavior）。
- 新增 `src/auto-reply/reply/commands-openclaw-cli.ts`：调整 commands openclaw cli（CLI/command behavior）。
- 新增 `src/auto-reply/reply/commands-private-route.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/auto-reply/reply/commands-private-route.ts`：调整 commands private route（CLI/command behavior）。
- 新增 `src/auto-reply/reply/commands-steer.runtime.ts`：调整 commands steer（CLI/command behavior）。
- 新增 `src/auto-reply/reply/commands-steer.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/auto-reply/reply/commands-steer.ts`：调整 commands steer（CLI/command behavior）。
- 新增 `src/auto-reply/reply/commands-subagents-shared-focus.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply/commands-acp.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply/commands-acp.ts`：调整 commands acp（CLI/command behavior）。
- 修改 `src/auto-reply/reply/commands-acp/diagnostics.ts`：调整 diagnostics（CLI/command behavior）。
- 修改 `src/auto-reply/reply/commands-acp/shared.ts`：调整 shared（CLI/command behavior）。
- 修改 `src/auto-reply/reply/commands-acp/targets.ts`：调整 targets（CLI/command behavior）。
- 修改 `src/auto-reply/reply/commands-allowlist.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply/commands-allowlist.ts`：调整 commands allowlist（CLI/command behavior）。
- 修改 `src/auto-reply/reply/commands-btw.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply/commands-compact.ts`：调整 commands compact（CLI/command behavior）。
- 修改 `src/auto-reply/reply/commands-config.ts`：调整 commands config（CLI/command behavior）。
- 修改 `src/auto-reply/reply/commands-core.ts`：调整 commands core（CLI/command behavior）。
- 修改 `src/auto-reply/reply/commands-export-common.ts`：调整 commands export common（CLI/command behavior）。
- 删除 `src/auto-reply/reply/commands-subagents.test-mocks.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 其余 37 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/reply-orchestration/commands/command-handlers` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/reply-orchestration/commands/command-handlers/change-to-test.md` 的验证建议。
