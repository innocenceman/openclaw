# src/cli-commands/command-implementations/maintenance-commands

## 1. 功能结论

**修改**：plugins honor beta channel for auto installs、explain missing git during plugin install、dashboard guide manual token auth fallback、cli bound sessions list output；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：large、contains-deletions
- 路径状态摘要（降级事实）：新增 36、修改 203、删除 3

## 3. 功能级详细差异

### 修复 cli bound sessions list output

修复 cli：bound sessions list output

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 dashboard guide manual token auth fallback

修复 dashboard：guide manual token auth fallback

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 explain missing git during plugin install

修复 explain missing git during plugin install

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 plugins honor beta channel for auto installs

修复 plugins：honor beta channel for auto installs

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 plugins trust catalog package installs

修复 plugins：trust catalog package installs

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 update exit post-core package child

修复 update：exit post-core package child

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 update exit post-core resume without result path

修复 update：exit post-core resume without result path

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 update finish post-core package updates

修复 update：finish post-core package updates

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 update isolate plugin sync failures

修复 update：isolate plugin sync failures

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 文档同步 plugins explain catalog install trust

文档同步 plugins：explain catalog install trust

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 capability cli regression/contract coverage、channel auth regression/contract coverage、channel options regression/contract coverage、cli utils regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `debug timing regression/contract coverage`（`src/cli/debug-timing.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `debug timing`（`src/cli/debug-timing.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `provider auth helpers`（`src/commands/provider-auth-helpers.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 argv invocation、capability cli regression/contract coverage、capability cli、channel auth regression/contract coverage、channel auth、channel options regression/contract coverage；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
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

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/maintenance-commands`
- Changed path count: `242`
- Status counts: `新增 36、修改 203、删除 3`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `242` files, `+23710` / `-3858`

### 归纳依据

- 主要落点：CLI/command behavior、gateway runtime。
- 新增或暴露的关键符号包括：`PNG_1X1_BASE64`, `IMAGE_OUTPUT_FORMATS`, `IMAGE_BACKGROUNDS`, `collectModelRunText`, `requireModelRunPrompt`, `isMissingMediaUnderstandingProvider`, `parseOptionalFiniteNumber`, `normalizeImageOutputFormat`, `normalizeImageBackground`, `normalizeVideoResolution`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix(plugins): honor beta channel for auto installs；fix: explain missing git during plugin install；fix(dashboard): guide manual token auth fallback；fix(cli): bound sessions list output；fix(update): isolate plugin sync failures；fix(update): exit post-core resume without result path；fix(update): exit post-core package child；fix(update): finish post-core package updates

### Dimension evidence

- `maintenance-修复-cli-bound-sessions-list-output` / 修复 cli bound sessions list output:
  - source: `path` [M] `src/cli/argv-invocation.ts` — semantic cue
  - source: `path` [M] `src/cli/capability-cli.test.ts` — semantic cue
  - source: `path` [M] `src/cli/capability-cli.ts` — semantic cue
  - source: `path` [M] `src/cli/channel-auth.test.ts` — semantic cue
  - source: `path` [M] `src/cli/channel-auth.ts` — semantic cue
  - source: `path` [M] `src/cli/channel-options.test.ts` — semantic cue
- `user-visible-修复-dashboard-guide-manual-token-auth-fallback` / 修复 dashboard guide manual token auth fallback:
  - source: `path` [M] `src/cli/channel-auth.test.ts` — semantic cue
  - source: `path` [M] `src/cli/channel-auth.ts` — semantic cue
  - source: `path` [M] `src/cli/model-auth-runtime-boundary.test.ts` — semantic cue
  - source: `path` [M] `src/cli/qr-dashboard.integration.test.ts` — semantic cue
  - source: `path` [M] `src/commands/dashboard.links.test.ts` — semantic cue
  - source: `path` [M] `src/commands/dashboard.test.ts` — semantic cue
- `maintenance-修复-explain-missing-git-during-plugin-install` / 修复 explain missing git during plugin install:
  - source: `path` [M] `src/cli/plugin-install-config-policy.ts` — semantic cue
  - source: `path` [M] `src/cli/plugin-install-plan.test.ts` — semantic cue
  - source: `path` [M] `src/cli/plugin-install-plan.ts` — semantic cue
  - source: `path` [M] `src/cli/plugin-registry-loader.test.ts` — semantic cue
  - source: `path` [M] `src/cli/plugin-registry-loader.ts` — semantic cue
  - source: `path` [M] `src/cli/plugin-registry.test.ts` — semantic cue
- `maintenance-修复-plugins-honor-beta-channel-for-auto-installs` / 修复 plugins honor beta channel for auto installs:
  - source: `path` [M] `src/cli/channel-auth.test.ts` — semantic cue
  - source: `path` [M] `src/cli/channel-auth.ts` — semantic cue
  - source: `path` [M] `src/cli/channel-options.test.ts` — semantic cue
  - source: `path` [M] `src/cli/channel-options.ts` — semantic cue
  - source: `path` [M] `src/cli/channels-cli.ts` — semantic cue
  - source: `path` [M] `src/cli/help-format.ts` — semantic cue
- `integration-build-release-修复-plugins-trust-catalog-package-installs` / 修复 plugins trust catalog package installs:
  - source: `path` [M] `src/cli/command-catalog.ts` — semantic cue
  - source: `path` [M] `src/cli/plugins-cli-test-helpers.ts` — semantic cue
  - source: `path` [M] `src/cli/plugins-cli.install.test.ts` — semantic cue
  - source: `path` [M] `src/cli/plugins-cli.list.test.ts` — semantic cue
  - source: `path` [M] `src/cli/plugins-cli.policy.test.ts` — semantic cue
  - source: `path` [M] `src/cli/plugins-cli.ts` — semantic cue
- `integration-build-release-修复-update-exit-post-core-package-child` / 修复 update exit post-core package child:
  - source: `path` [M] `src/cli/plugins-cli.update.test.ts` — semantic cue
  - source: `path` [M] `src/cli/plugins-update-command.ts` — semantic cue
  - source: `path` [M] `src/cli/plugins-update-outcomes.ts` — semantic cue
  - source: `path` [M] `src/cli/run-main.exit.test.ts` — semantic cue
  - source: `path` [M] `src/cli/update-cli.test.ts` — semantic cue
  - source: `path` [M] `src/cli/update-cli.ts` — semantic cue
- `maintenance-修复-update-exit-post-core-resume-without-result` / 修复 update exit post-core resume without result path:
  - source: `path` [M] `src/cli/command-path-matches.ts` — semantic cue
  - source: `path` [M] `src/cli/command-path-policy.test.ts` — semantic cue
  - source: `path` [M] `src/cli/command-path-policy.ts` — semantic cue
  - source: `path` [M] `src/cli/plugins-cli.update.test.ts` — semantic cue
  - source: `path` [M] `src/cli/plugins-update-command.ts` — semantic cue
  - source: `path` [M] `src/cli/plugins-update-outcomes.ts` — semantic cue
- `integration-build-release-修复-update-finish-post-core-package-updates` / 修复 update finish post-core package updates:
  - source: `path` [M] `src/cli/plugins-cli.update.test.ts` — semantic cue
  - source: `path` [M] `src/cli/plugins-update-command.ts` — semantic cue
  - source: `path` [M] `src/cli/plugins-update-outcomes.ts` — semantic cue
  - source: `path` [M] `src/cli/update-cli.test.ts` — semantic cue
  - source: `path` [M] `src/cli/update-cli.ts` — semantic cue
  - source: `path` [M] `src/cli/update-cli/progress.test.ts` — semantic cue
- `maintenance-修复-update-isolate-plugin-sync-failures` / 修复 update isolate plugin sync failures:
  - source: `path` [M] `src/cli/plugin-install-config-policy.ts` — semantic cue
  - source: `path` [M] `src/cli/plugin-install-plan.test.ts` — semantic cue
  - source: `path` [M] `src/cli/plugin-install-plan.ts` — semantic cue
  - source: `path` [M] `src/cli/plugin-registry-loader.test.ts` — semantic cue
  - source: `path` [M] `src/cli/plugin-registry-loader.ts` — semantic cue
  - source: `path` [M] `src/cli/plugin-registry.test.ts` — semantic cue
- `tests-docs-文档同步-plugins-explain-catalog-install-trust` / 文档同步 plugins explain catalog install trust:
  - source: `path` [M] `src/cli/command-catalog.ts` — semantic cue
  - source: `path` [M] `src/cli/plugin-install-config-policy.ts` — semantic cue
  - source: `path` [M] `src/cli/plugin-install-plan.test.ts` — semantic cue
  - source: `path` [M] `src/cli/plugin-install-plan.ts` — semantic cue
  - source: `path` [M] `src/cli/plugins-cli-test-helpers.ts` — semantic cue
  - source: `path` [M] `src/cli/plugins-cli.install.test.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/cli/capability-cli.test.ts` — test evidence
  - source: `path` [M] `src/cli/channel-auth.test.ts` — test evidence
  - source: `path` [M] `src/cli/channel-options.test.ts` — test evidence
  - source: `path` [M] `src/cli/cli-utils.test.ts` — test evidence
  - source: `path` [M] `src/cli/command-bootstrap.test.ts` — test evidence
  - source: `path` [M] `src/cli/command-execution-startup.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/cli/debug-timing.test.ts`
  - source: `path` [D] `src/cli/debug-timing.ts`
  - source: `path` [D] `src/commands/provider-auth-helpers.ts`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `src/cli/cron-cli/thread-id-shared.ts`
  - source: `path` [A] `src/cli/gateway-run-argv.ts`
  - source: `path` [A] `src/cli/model-auth-runtime-boundary.test.ts`
  - source: `path` [A] `src/cli/node-cli/register.test.ts`
  - source: `path` [A] `src/cli/plugins-cli.policy.test.ts`
  - source: `path` [A] `src/cli/plugins-inspect-command.ts`

### 路径证据

- 新增 `src/cli/cron-cli/thread-id-shared.ts`：调整 thread id shared（CLI/command behavior）。
- 新增 `src/cli/gateway-run-argv.ts`：调整 gateway run argv（gateway runtime）。
- 新增 `src/cli/model-auth-runtime-boundary.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/cli/node-cli/register.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/cli/plugins-cli.policy.test.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 新增 `src/cli/plugins-inspect-command.ts`：调整 plugins inspect command（CLI/command behavior）。
- 新增 `src/cli/plugins-install-record-commit.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/cli/plugins-install-record-commit.ts`：调整 plugins install record commit（CLI/command behavior）。
- 新增 `src/cli/plugins-list-command.ts`：调整 plugins list command（CLI/command behavior）。
- 新增 `src/cli/plugins-location-bridges.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/cli/plugins-location-bridges.ts`：调整 plugins location bridges（CLI/command behavior）。
- 新增 `src/cli/plugins-registry-refresh.ts`：调整 plugins registry refresh（CLI/command behavior）。
- 修改 `src/cli/argv-invocation.ts`：调整 argv invocation（CLI/command behavior）。
- 修改 `src/cli/capability-cli.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/capability-cli.ts`：调整 capability cli（CLI/command behavior）。
- 修改 `src/cli/channel-auth.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/channel-auth.ts`：调整 channel auth（CLI/command behavior）。
- 修改 `src/cli/channel-options.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/channel-options.ts`：调整 channel options（CLI/command behavior）。
- 修改 `src/cli/channels-cli.ts`：调整 channels cli（CLI/command behavior）。
- 修改 `src/cli/cli-name.ts`：调整 cli name（CLI/command behavior）。
- 修改 `src/cli/cli-utils.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/cli-utils.ts`：调整 cli utils（CLI/command behavior）。
- 修改 `src/cli/command-bootstrap.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 删除 `src/cli/debug-timing.test.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/cli/debug-timing.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/commands/provider-auth-helpers.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 其余 215 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/cli-commands/command-implementations/maintenance-commands` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/command-implementations/maintenance-commands/change-to-test.md` 的验证建议。
