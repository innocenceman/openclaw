# src/shared-misc-runtime-support/startup-process

## 1. 功能结论

**修改**：Harden Windows command wrapper resolution、process kill Windows command trees on timeout、gateway clarify systemd service scope、daemon preserve systemd env-file secrets on re-stage；**迁移/重构**：source service env install planning、route inline eval through command analysis、unify command analysis for exec approvals；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 7、修改 60、删除 2

## 3. 功能级详细差异

### 修复 avoid fresh launchd repair kickstart

修复 avoid fresh launchd repair kickstart

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 avoid launchd kickstart after fresh bootstrap

修复 avoid launchd kickstart after fresh bootstrap

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 daemon prefer system node for gateway install

修复 daemon：prefer system node for gateway install

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 daemon preserve systemd env-file secrets on re-stage

修复 daemon：preserve systemd env-file secrets on re-stage

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 gateway clarify systemd service scope

修复 gateway：clarify systemd service scope

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 process kill Windows command trees on timeout

修复 process：kill Windows command trees on timeout

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 Harden Windows command wrapper resolution

修改 Harden Windows command wrapper resolution

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 route inline eval through command analysis

迁移/重构 route inline eval through command analysis

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 source service env install planning

迁移/重构 source service env install planning

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 unify command analysis for exec approvals

迁移/重构 unify command analysis for exec approvals

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 inspect regression/contract coverage、launchd restart handoff regression/contract coverage、launchd.integration.e2e regression/contract coverage、launchd regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `restart recovery`（`src/process/restart-recovery.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `test timeouts`（`src/process/test-timeouts.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/startup-process`
- Changed path count: `69`
- Status counts: `新增 7、修改 60、删除 2`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `69` files, `+4537` / `-583`

### 归纳依据

- 主要落点：implementation、tests/contracts、model/thinking policy、CLI/command behavior、configuration/schema。
- 新增或暴露的关键符号包括：`unescapeCmdScriptArg`, `NODE_LAUNCH_AGENT_LABEL`, `NODE_SYSTEMD_SERVICE_NAME`, `NODE_WINDOWS_TASK_NAME`, `COMPANION_SERVICE_CONTENTS`, `CUSTOM_OPENCLAW_GATEWAY_CONTENTS`, `SYSTEMD_REFERENCE_ONLY_KEYS`, `hasGatewaySubcommandArg`, `extractPlistKeyBlock`, `extractPlistStringValues`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：Harden Windows command wrapper resolution；fix(process): kill Windows command trees on timeout；fix(gateway): clarify systemd service scope；refactor: source service env install planning；fix(daemon): preserve systemd env-file secrets on re-stage；fix: avoid launchd kickstart after fresh bootstrap；fix(daemon): prefer system node for gateway install；fix: avoid fresh launchd repair kickstart

### Dimension evidence

- `maintenance-修复-avoid-fresh-launchd-repair-kickstart` / 修复 avoid fresh launchd repair kickstart:
  - source: `path` [M] `src/daemon/launchd-plist.ts` — semantic cue
  - source: `path` [M] `src/daemon/launchd-restart-handoff.test.ts` — semantic cue
  - source: `path` [M] `src/daemon/launchd-restart-handoff.ts` — semantic cue
  - source: `path` [M] `src/daemon/launchd.integration.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/daemon/launchd.test.ts` — semantic cue
  - source: `path` [M] `src/daemon/launchd.ts` — semantic cue
- `maintenance-修复-avoid-launchd-kickstart-after-fresh-bootstrap` / 修复 avoid launchd kickstart after fresh bootstrap:
  - source: `path` [M] `src/daemon/launchd-plist.ts` — semantic cue
  - source: `path` [M] `src/daemon/launchd-restart-handoff.test.ts` — semantic cue
  - source: `path` [M] `src/daemon/launchd-restart-handoff.ts` — semantic cue
  - source: `path` [M] `src/daemon/launchd.integration.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/daemon/launchd.test.ts` — semantic cue
  - source: `path` [M] `src/daemon/launchd.ts` — semantic cue
- `maintenance-修复-daemon-prefer-system-node-for-gateway-install` / 修复 daemon prefer system node for gateway install:
  - source: `path` [M] `src/daemon/arg-split.ts` — semantic cue
  - source: `path` [M] `src/daemon/cmd-argv.ts` — semantic cue
  - source: `path` [M] `src/daemon/cmd-set.ts` — semantic cue
  - source: `path` [M] `src/daemon/constants.ts` — semantic cue
  - source: `path` [M] `src/daemon/exec-file.ts` — semantic cue
  - source: `path` [M] `src/daemon/future-config-guard.ts` — semantic cue
- `maintenance-修复-daemon-preserve-systemd-env-file-secrets-on` / 修复 daemon preserve systemd env-file secrets on re-stage:
  - source: `path` [M] `src/daemon/arg-split.ts` — semantic cue
  - source: `path` [M] `src/daemon/cmd-argv.ts` — semantic cue
  - source: `path` [M] `src/daemon/cmd-set.ts` — semantic cue
  - source: `path` [M] `src/daemon/constants.ts` — semantic cue
  - source: `path` [M] `src/daemon/exec-file.ts` — semantic cue
  - source: `path` [M] `src/daemon/future-config-guard.ts` — semantic cue
- `maintenance-修复-gateway-clarify-systemd-service-scope` / 修复 gateway clarify systemd service scope:
  - source: `path` [M] `src/daemon/service-audit.test.ts` — semantic cue
  - source: `path` [M] `src/daemon/service-audit.ts` — semantic cue
  - source: `path` [M] `src/daemon/service-env-plan.ts` — semantic cue
  - source: `path` [M] `src/daemon/service-env-render-policy.ts` — semantic cue
  - source: `path` [M] `src/daemon/service-env.test.ts` — semantic cue
  - source: `path` [M] `src/daemon/service-env.ts` — semantic cue
- `maintenance-修复-process-kill-Windows-command-trees-on-timeout` / 修复 process kill Windows command trees on timeout:
  - source: `path` [M] `src/daemon/arg-split.ts` — semantic cue
  - source: `path` [M] `src/daemon/cmd-argv.ts` — semantic cue
  - source: `path` [M] `src/daemon/cmd-set.ts` — semantic cue
  - source: `path` [M] `src/daemon/constants.ts` — semantic cue
  - source: `path` [M] `src/daemon/exec-file.ts` — semantic cue
  - source: `path` [M] `src/daemon/future-config-guard.ts` — semantic cue
- `maintenance-修改-Harden-Windows-command-wrapper-resolution` / 修改 Harden Windows command wrapper resolution:
  - source: `path` [M] `src/process/command-queue.test.ts` — semantic cue
  - source: `path` [M] `src/process/command-queue.ts` — semantic cue
  - source: `path` [M] `src/process/command-queue.types.ts` — semantic cue
  - source: `path` [M] `src/process/exec.windows.test.ts` — semantic cue
- `migration-迁移-重构-route-inline-eval-through-command-analysis` / 迁移/重构 route inline eval through command analysis:
  - source: `path` [M] `src/daemon/arg-split.ts` — semantic cue
  - source: `path` [M] `src/daemon/cmd-argv.ts` — semantic cue
  - source: `path` [M] `src/daemon/cmd-set.ts` — semantic cue
  - source: `path` [M] `src/daemon/constants.ts` — semantic cue
  - source: `path` [M] `src/daemon/exec-file.ts` — semantic cue
  - source: `path` [M] `src/daemon/future-config-guard.ts` — semantic cue
- `migration-迁移-重构-source-service-env-install-planning` / 迁移/重构 source service env install planning:
  - source: `path` [M] `src/daemon/arg-split.ts` — semantic cue
  - source: `path` [M] `src/daemon/cmd-argv.ts` — semantic cue
  - source: `path` [M] `src/daemon/cmd-set.ts` — semantic cue
  - source: `path` [M] `src/daemon/constants.ts` — semantic cue
  - source: `path` [M] `src/daemon/exec-file.ts` — semantic cue
  - source: `path` [M] `src/daemon/future-config-guard.ts` — semantic cue
- `migration-迁移-重构-unify-command-analysis-for-exec-approvals` / 迁移/重构 unify command analysis for exec approvals:
  - source: `path` [M] `src/daemon/arg-split.ts` — semantic cue
  - source: `path` [M] `src/daemon/cmd-argv.ts` — semantic cue
  - source: `path` [M] `src/daemon/cmd-set.ts` — semantic cue
  - source: `path` [M] `src/daemon/constants.ts` — semantic cue
  - source: `path` [M] `src/daemon/exec-file.ts` — semantic cue
  - source: `path` [M] `src/daemon/future-config-guard.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/daemon/inspect.test.ts` — test evidence
  - source: `path` [M] `src/daemon/launchd-restart-handoff.test.ts` — test evidence
  - source: `path` [M] `src/daemon/launchd.integration.e2e.test.ts` — test evidence
  - source: `path` [M] `src/daemon/launchd.test.ts` — test evidence
  - source: `path` [M] `src/daemon/program-args.test.ts` — test evidence
  - source: `path` [M] `src/daemon/runtime-format.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/process/restart-recovery.ts`
  - source: `path` [D] `src/process/test-timeouts.ts`

### 路径证据

- 新增 `src/daemon/future-config-guard.ts`：调整 future config guard（configuration/schema）。
- 新增 `src/daemon/runtime-format.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/daemon/service-env-plan.ts`：调整 service env plan（implementation）。
- 新增 `src/daemon/service-env-render-policy.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 新增 `src/daemon/service-layout.ts`：调整 service layout（implementation）。
- 新增 `src/daemon/service-managed-env.ts`：调整 service managed env（implementation）。
- 新增 `src/daemon/service-path-policy.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `src/daemon/arg-split.ts`：调整 arg split（implementation）。
- 修改 `src/daemon/cmd-argv.ts`：调整 cmd argv（implementation）。
- 修改 `src/daemon/cmd-set.ts`：调整 cmd set（implementation）。
- 修改 `src/daemon/constants.ts`：调整 constants（implementation）。
- 修改 `src/daemon/exec-file.ts`：调整 exec file（implementation）。
- 修改 `src/daemon/inspect.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/daemon/inspect.ts`：调整 inspect（implementation）。
- 修改 `src/daemon/launchd-plist.ts`：调整 launchd plist（implementation）。
- 修改 `src/daemon/launchd-restart-handoff.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/daemon/launchd-restart-handoff.ts`：调整 launchd restart handoff（implementation）。
- 修改 `src/daemon/launchd.integration.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/daemon/launchd.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 删除 `src/process/restart-recovery.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/process/test-timeouts.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 其余 48 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/startup-process` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/startup-process/change-to-test.md` 的验证建议。
