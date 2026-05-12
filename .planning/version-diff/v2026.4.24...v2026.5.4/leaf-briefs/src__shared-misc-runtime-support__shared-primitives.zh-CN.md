# src/shared-misc-runtime-support/shared-primitives

## 1. 功能结论

**修改**：plugins repair missing openclaw peer links on update、build route externalized plugin entry chunks、build route externalized plugin chunks、release prune externalized plugin chunks；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：large、contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 61、修改 240、删除 2、重命名 4

## 3. 功能级详细差异

### 修复 build route externalized plugin chunks

修复 build：route externalized plugin chunks

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 build route externalized plugin entry chunks

修复 build：route externalized plugin entry chunks

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 enable sync io tracing in gateway watch

修复 enable sync io tracing in gateway watch

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 gateway quiet benchmark watch output

修复 gateway：quiet benchmark watch output

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 gateway route watch trace spam to artifacts

修复 gateway：route watch trace spam to artifacts

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 infra skip POSIX tmp path on Windows

修复 infra：skip POSIX tmp path on Windows

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 plugins repair missing openclaw peer links on update

修复 plugins：repair missing openclaw peer links on update

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 preserve gateway watch trace overrides

修复 preserve gateway watch trace overrides

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 release prune externalized plugin chunks

修复 release：prune externalized plugin chunks

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 Surface Codex usage-limit reset details in chat replies

修改 Surface Codex usage-limit reset details in chat replies

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 build stamp regression/contract coverage，需要确认发布/安装链路仍一致。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 agent events regression/contract coverage、approval handler bootstrap regression/contract coverage、approval native route coordinator regression/contract coverage、approval native target key regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `npm update compat sidecars`（`src/infra/npm-update-compat-sidecars.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `osc progress.d`（`src/types/osc-progress.d.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`inline eval regression/contract coverage` 路径（`src/infra/command-analysis/inline-eval.test.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`inline eval` 路径（`src/infra/command-analysis/inline-eval.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`exec inline eval regression/contract coverage` 路径（`src/infra/exec-inline-eval.test.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`exec inline eval` 路径（`src/infra/exec-inline-eval.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 canvas render、tool content、agent events regression/contract coverage、agent events、approval gateway resolver、approval handler bootstrap regression/contract coverage；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/shared-primitives`
- Changed path count: `307`
- Status counts: `新增 61、修改 240、删除 2、重命名 4`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `305` files, `+25562` / `-1829`

### 归纳依据

- 主要落点：implementation、tests/contracts、CLI/command behavior、session/state handling、model/thinking policy、message delivery、gateway runtime、auth/pairing/security behavior。
- 新增或暴露的关键符号包括：`normalizeToolContentType`, `isRetryableApprovalBootstrapStartError`, `formatRetryableApprovalBootstrapStartError`, `hasPlannedNativeTargets`, `readAllowedDecisionStrings`, `hasActiveApprovalNativeRouteRuntime`, `resolveApprovalDeliveryFailedNoticeText`, `createZipCentralDirectoryArchive`, `ARCHIVE_LIMIT_ERROR_CODE`, `ARCHIVE_LIMIT_ERROR_MESSAGE`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix(plugins): repair missing openclaw peer links on update；fix(build): route externalized plugin entry chunks；fix(build): route externalized plugin chunks；fix(release): prune externalized plugin chunks；fix(infra): skip POSIX tmp path on Windows；Surface Codex usage-limit reset details in chat replies；fix(gateway): route watch trace spam to artifacts；fix(gateway): quiet benchmark watch output

### Dimension evidence

- `user-visible-修复-build-route-externalized-plugin-chunks` / 修复 build route externalized plugin chunks:
  - source: `path` [M] `src/infra/approval-native-route-coordinator.test.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-native-route-coordinator.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-native-route-notice.ts` — semantic cue
  - source: `path` [M] `src/infra/build-stamp.test.ts` — semantic cue
  - source: `path` [M] `src/infra/plugin-install-path-warnings.test.ts` — semantic cue
  - source: `path` [M] `src/infra/plugin-install-path-warnings.ts` — semantic cue
- `user-visible-修复-build-route-externalized-plugin-entry-chunks` / 修复 build route externalized plugin entry chunks:
  - source: `path` [M] `src/infra/approval-native-route-coordinator.test.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-native-route-coordinator.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-native-route-notice.ts` — semantic cue
  - source: `path` [M] `src/infra/build-stamp.test.ts` — semantic cue
  - source: `path` [M] `src/infra/plugin-install-path-warnings.test.ts` — semantic cue
  - source: `path` [M] `src/infra/plugin-install-path-warnings.ts` — semantic cue
- `maintenance-修复-enable-sync-io-tracing-in-gateway-watch` / 修复 enable sync io tracing in gateway watch:
  - source: `path` [M] `src/infra/agent-events.test.ts` — semantic cue
  - source: `path` [M] `src/infra/agent-events.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-gateway-resolver.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-handler-bootstrap.test.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-handler-bootstrap.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-handler-runtime.ts` — semantic cue
- `user-visible-修复-gateway-quiet-benchmark-watch-output` / 修复 gateway quiet benchmark watch output:
  - source: `path` [M] `src/infra/approval-gateway-resolver.ts` — semantic cue
  - source: `path` [M] `src/infra/gateway-discovery-targets.ts` — semantic cue
  - source: `path` [M] `src/infra/gateway-lock.ts` — semantic cue
  - source: `path` [M] `src/infra/gateway-processes.test.ts` — semantic cue
  - source: `path` [M] `src/infra/gateway-watch-tmux.test.ts` — semantic cue
  - source: `path` [M] `src/infra/watch-node.test.ts` — semantic cue
- `maintenance-修复-gateway-route-watch-trace-spam-to-artifacts` / 修复 gateway route watch trace spam to artifacts:
  - source: `path` [M] `src/chat/tool-content.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-gateway-resolver.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-native-route-coordinator.test.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-native-route-coordinator.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-native-route-notice.ts` — semantic cue
  - source: `path` [M] `src/infra/diagnostic-trace-context.test.ts` — semantic cue
- `maintenance-修复-infra-skip-POSIX-tmp-path-on-Windows` / 修复 infra skip POSIX tmp path on Windows:
  - source: `path` [M] `src/chat/tool-content.ts` — semantic cue
  - source: `path` [M] `src/infra/agent-events.test.ts` — semantic cue
  - source: `path` [M] `src/infra/agent-events.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-gateway-resolver.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-handler-bootstrap.test.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-handler-bootstrap.ts` — semantic cue
- `maintenance-修复-plugins-repair-missing-openclaw-peer-links-o` / 修复 plugins repair missing openclaw peer links on update:
  - source: `path` [M] `src/chat/tool-content.ts` — semantic cue
  - source: `path` [M] `src/infra/container-environment.ts` — semantic cue
  - source: `path` [M] `src/infra/diagnostic-trace-context.test.ts` — semantic cue
  - source: `path` [M] `src/infra/diagnostic-trace-context.ts` — semantic cue
  - source: `path` [M] `src/infra/dispatch-wrapper-resolution.ts` — semantic cue
  - source: `path` [M] `src/infra/exec-approval-session-target.ts` — semantic cue
- `maintenance-修复-preserve-gateway-watch-trace-overrides` / 修复 preserve gateway watch trace overrides:
  - source: `path` [M] `src/infra/approval-gateway-resolver.ts` — semantic cue
  - source: `path` [M] `src/infra/diagnostic-trace-context.test.ts` — semantic cue
  - source: `path` [M] `src/infra/diagnostic-trace-context.ts` — semantic cue
  - source: `path` [M] `src/infra/gateway-discovery-targets.ts` — semantic cue
  - source: `path` [M] `src/infra/gateway-lock.ts` — semantic cue
  - source: `path` [M] `src/infra/gateway-processes.test.ts` — semantic cue
- `maintenance-修复-release-prune-externalized-plugin-chunks` / 修复 release prune externalized plugin chunks:
  - source: `path` [M] `src/infra/plugin-install-path-warnings.test.ts` — semantic cue
  - source: `path` [M] `src/infra/plugin-install-path-warnings.ts` — semantic cue
  - source: `path` [M] `src/infra/provider-usage-plugin-runtime.test-mocks.ts` — semantic cue
- `maintenance-修改-Surface-Codex-usage-limit-reset-details-in-c` / 修改 Surface Codex usage-limit reset details in chat replies:
  - source: `path` [M] `src/chat/canvas-render.ts` — semantic cue
  - source: `path` [M] `src/chat/tool-content.ts` — semantic cue
  - source: `path` [M] `src/infra/agent-events.test.ts` — semantic cue
  - source: `path` [M] `src/infra/agent-events.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-gateway-resolver.ts` — semantic cue
  - source: `path` [M] `src/infra/approval-handler-bootstrap.test.ts` — semantic cue
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `src/infra/build-stamp.test.ts` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/infra/agent-events.test.ts` — test evidence
  - source: `path` [M] `src/infra/approval-handler-bootstrap.test.ts` — test evidence
  - source: `path` [M] `src/infra/approval-native-route-coordinator.test.ts` — test evidence
  - source: `path` [M] `src/infra/approval-native-target-key.test.ts` — test evidence
  - source: `path` [M] `src/infra/approval-turn-source.test.ts` — test evidence
  - source: `path` [M] `src/infra/archive.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/infra/npm-update-compat-sidecars.ts`
  - source: `path` [D] `src/types/osc-progress.d.ts`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `src/infra/command-analysis/inline-eval.test.ts`
  - source: `path` [R] `src/infra/command-analysis/inline-eval.ts`
  - source: `path` [R] `src/infra/exec-inline-eval.test.ts`
  - source: `path` [R] `src/infra/exec-inline-eval.ts`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `src/infra/browser-open.test.ts`
  - source: `path` [A] `src/infra/command-analysis/explain.test.ts`
  - source: `path` [A] `src/infra/command-analysis/explain.ts`
  - source: `path` [A] `src/infra/command-analysis/policy.ts`
  - source: `path` [A] `src/infra/command-analysis/risks.test.ts`
  - source: `path` [A] `src/infra/command-analysis/risks.ts`

### 路径证据

- 新增 `src/infra/browser-open.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/infra/command-analysis/explain.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/infra/command-analysis/explain.ts`：调整 explain（CLI/command behavior）。
- 新增 `src/infra/command-analysis/policy.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 新增 `src/infra/command-analysis/risks.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/infra/command-analysis/risks.ts`：调整 risks（CLI/command behavior）。
- 新增 `src/infra/command-carriers.ts`：调整 command carriers（CLI/command behavior）。
- 新增 `src/infra/command-explainer/extract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/infra/command-explainer/extract.ts`：调整 extract（CLI/command behavior）。
- 新增 `src/infra/command-explainer/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 新增 `src/infra/command-explainer/tree-sitter-runtime.ts`：调整 tree sitter runtime（CLI/command behavior）。
- 新增 `src/infra/command-explainer/types.ts`：调整 command explainer types（CLI/command behavior）。
- 修改 `src/chat/canvas-render.ts`：调整 canvas render（implementation）。
- 修改 `src/chat/tool-content.ts`：调整 tool content（implementation）。
- 修改 `src/infra/agent-events.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/agent-events.ts`：调整 agent events（implementation）。
- 修改 `src/infra/approval-gateway-resolver.ts`：调整 approval gateway resolver（gateway runtime）。
- 修改 `src/infra/approval-handler-bootstrap.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/approval-handler-bootstrap.ts`：调整 approval handler bootstrap（implementation）。
- 修改 `src/infra/approval-handler-runtime.ts`：调整 approval handler runtime（implementation）。
- 修改 `src/infra/approval-native-route-coordinator.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/approval-native-route-coordinator.ts`：调整 approval native route coordinator（implementation）。
- 修改 `src/infra/approval-native-route-notice.ts`：调整 approval native route notice（implementation）。
- 修改 `src/infra/approval-native-runtime.ts`：调整 approval native runtime（implementation）。
- 删除 `src/infra/npm-update-compat-sidecars.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/types/osc-progress.d.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `src/infra/command-analysis/inline-eval.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 重命名 `src/infra/command-analysis/inline-eval.ts`：调整 inline eval（CLI/command behavior）。
- 重命名 `src/infra/exec-inline-eval.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 重命名 `src/infra/exec-inline-eval.ts`：调整 exec inline eval（implementation）。
- 其余 277 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/shared-primitives` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/shared-primitives/change-to-test.md` 的验证建议。
