# src/agent-runtime/tools

## 1. 功能结论

**修改**：honor embedded runtime tool allowlists、agents honor scoped post-compaction guard config、agents observe post-compaction guard live、agents mediate async media completions；**迁移/重构**：agents thread post-compaction guard observer；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：large、contains-deletions
- 路径状态摘要（降级事实）：新增 15、修改 127、删除 1

## 3. 功能级详细差异

### 修复 agents honor scoped post-compaction guard config

修复 agents：honor scoped post-compaction guard config

- 验证提示：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 agents mediate async media completions

修复 agents：mediate async media completions

- 验证提示：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 agents observe post-compaction guard live

修复 agents：observe post-compaction guard live

- 验证提示：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 agents preserve workspace metadata reuse

修复 agents：preserve workspace metadata reuse

- 验证提示：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 honor embedded runtime tool allowlists

修复 honor embedded runtime tool allowlists

- 验证提示：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 telegram stabilize topic dispatch runtime

修复 telegram：stabilize topic dispatch runtime

- 验证提示：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 web-fetch scope fallback cache by provider

修复 web-fetch：scope fallback cache by provider

- 验证提示：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 web-search honor late-bound disabled config

修复 web-search：honor late-bound disabled config

- 验证提示：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修改 [plugin sdk] Project session extension slots

修改 [plugin sdk] Project session extension slots

- 验证提示：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 agents thread post-compaction guard observer

迁移/重构 agents：thread post-compaction guard observer

- 验证提示：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 bash tools.schemas、openclaw tools.tts config regression/contract coverage、cron tool.schema regression/contract coverage、manifest capability availability，需要按契约边界审查。

- 验证提示：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 bash tools.exec approval followup regression/contract coverage、bash tools.exec foreground failures regression/contract coverage、bash tools.exec host gateway regression/contract coverage、bash tools.exec host node regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `bash tools.process.send keys regression/contract coverage`（`src/agents/bash-tools.process.send-keys.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 apply patch、bash tools.exec approval followup regression/contract coverage、bash tools.exec approval followup、bash tools.exec approval request、bash tools.exec foreground failures regression/contract coverage、bash tools.exec host gateway regression/contract coverage；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/tools`
- Changed path count: `143`
- Status counts: `新增 15、修改 127、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `143` files, `+12057` / `-1995`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`shouldPrefixDirectFollowupWithSessionResumeFailure`, `formatOutcomeExitLabel`, `isRecord`, `formatBytes`, `formatDiagnosticsContents`, `formatDiagnosticsPrivacy`, `formatDiagnosticsExportSuccess`, `formatDiagnosticsExportFailure`, `buildGatewayExecApprovalFollowupSummary`, `shouldSkipNodeApprovalPrepare`。
- 建议优先验证：优先运行 `| pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix: honor embedded runtime tool allowlists；fix(agents): honor scoped post-compaction guard config；refactor(agents): thread post-compaction guard observer；fix(agents): observe post-compaction guard live；fix(agents): mediate async media completions；fix(agents): preserve workspace metadata reuse；[plugin sdk] Project session extension slots；fix(web-fetch): scope fallback cache by provider

### Dimension evidence

- `maintenance-修复-agents-honor-scoped-post-compaction-guard-co` / 修复 agents honor scoped post-compaction guard config:
  - source: `path` [M] `src/agents/apply-patch.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-followup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-followup.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-request.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-foreground-failures.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-host-gateway.test.ts` — semantic cue
- `maintenance-修复-agents-mediate-async-media-completions` / 修复 agents mediate async media completions:
  - source: `path` [M] `src/agents/apply-patch.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-followup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-followup.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-request.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-foreground-failures.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-host-gateway.test.ts` — semantic cue
- `maintenance-修复-agents-observe-post-compaction-guard-live` / 修复 agents observe post-compaction guard live:
  - source: `path` [M] `src/agents/apply-patch.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-followup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-followup.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-request.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-foreground-failures.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-host-gateway.test.ts` — semantic cue
- `public-contract-修复-agents-preserve-workspace-metadata-reuse` / 修复 agents preserve workspace metadata reuse:
  - source: `path` [M] `src/agents/apply-patch.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-followup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-followup.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-request.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-foreground-failures.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-host-gateway.test.ts` — semantic cue
- `runtime-behavior-修复-honor-embedded-runtime-tool-allowlists` / 修复 honor embedded runtime tool allowlists:
  - source: `path` [M] `src/agents/bash-tools.exec-approval-followup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-followup.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-request.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-foreground-failures.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-host-gateway.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-host-gateway.ts` — semantic cue
- `runtime-behavior-修复-telegram-stabilize-topic-dispatch-runtime` / 修复 telegram stabilize topic dispatch runtime:
  - source: `path` [M] `src/agents/bash-tools.exec-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-runtime.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/embedded-gateway-stub.runtime.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/web-tool-runtime-context.test.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/web-tool-runtime-context.ts` — semantic cue
- `maintenance-修复-web-fetch-scope-fallback-cache-by-provider` / 修复 web-fetch scope fallback cache by provider:
  - source: `path` [M] `src/agents/pi-tools.cron-scope.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-tools.message-provider-policy.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-tools.message-provider-policy.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-tools.model-provider-collision.test.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/pdf-native-providers.test.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/pdf-native-providers.ts` — semantic cue
- `maintenance-修复-web-search-honor-late-bound-disabled-config` / 修复 web-search honor late-bound disabled config:
  - source: `path` [M] `src/agents/openclaw-tools.tts-config.test.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/model-config.helpers.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/pdf-tool.model-config.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/web-search-provider-common.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/web-search-provider-config.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/web-search.late-bind.test.ts` — semantic cue
- `maintenance-修改-plugin-sdk-Project-session-extension-slots` / 修改 [plugin sdk] Project session extension slots:
  - source: `path` [M] `src/agents/openclaw-tools.browser-plugin.integration.test.ts` — semantic cue
  - source: `path` [M] `src/agents/openclaw-tools.plugin-context.test.ts` — semantic cue
  - source: `path` [M] `src/agents/openclaw-tools.plugin-context.ts` — semantic cue
  - source: `path` [M] `src/agents/openclaw-tools.session-status.test.ts` — semantic cue
  - source: `path` [M] `src/agents/openclaw-tools.sessions-visibility.test.ts` — semantic cue
  - source: `path` [M] `src/agents/openclaw-tools.sessions.test.ts` — semantic cue
- `migration-迁移-重构-agents-thread-post-compaction-guard-obser` / 迁移/重构 agents thread post-compaction guard observer:
  - source: `path` [M] `src/agents/apply-patch.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-followup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-followup.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-approval-request.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-foreground-failures.test.ts` — semantic cue
  - source: `path` [M] `src/agents/bash-tools.exec-host-gateway.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/agents/bash-tools.schemas.ts` — contract evidence
  - source: `path` [M] `src/agents/openclaw-tools.tts-config.test.ts` — contract evidence
  - source: `path` [M] `src/agents/tools/cron-tool.schema.test.ts` — contract evidence
  - source: `path` [M] `src/agents/tools/manifest-capability-availability.ts` — contract evidence
  - source: `path` [M] `src/agents/tools/model-config.helpers.ts` — contract evidence
  - source: `path` [M] `src/agents/tools/pdf-tool.model-config.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/bash-tools.exec-approval-followup.test.ts` — test evidence
  - source: `path` [M] `src/agents/bash-tools.exec-foreground-failures.test.ts` — test evidence
  - source: `path` [M] `src/agents/bash-tools.exec-host-gateway.test.ts` — test evidence
  - source: `path` [M] `src/agents/bash-tools.exec-host-node.test.ts` — test evidence
  - source: `path` [M] `src/agents/bash-tools.exec-runtime.test.ts` — test evidence
  - source: `path` [M] `src/agents/bash-tools.exec.approval-id.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/agents/bash-tools.process.send-keys.test.ts`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `src/agents/bash-tools.exec-host-node-phases.ts`
  - source: `path` [A] `src/agents/bash-tools.exec-host-node.types.ts`
  - source: `path` [A] `src/agents/bash-tools.exec-output.ts`
  - source: `path` [A] `src/agents/openclaw-tools.media-factory-plan.test.ts`
  - source: `path` [A] `src/agents/pi-tools.cron-scope.test.ts`
  - source: `path` [A] `src/agents/tools/agents-list-tool.test.ts`

### 路径证据

- 新增 `src/agents/bash-tools.exec-host-node-phases.ts`：调整 bash tools.exec host node phases（agent runtime）。
- 新增 `src/agents/bash-tools.exec-host-node.types.ts`：调整 bash tools.exec host node（agent runtime）。
- 新增 `src/agents/bash-tools.exec-output.ts`：调整 bash tools.exec output（agent runtime）。
- 新增 `src/agents/openclaw-tools.media-factory-plan.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/pi-tools.cron-scope.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/tools/agents-list-tool.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/tools/heartbeat-response-tool.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/tools/heartbeat-response-tool.ts`：调整 heartbeat response tool（agent runtime）。
- 新增 `src/agents/tools/image-tool.ollama.live.test.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 新增 `src/agents/tools/manifest-capability-availability.ts`：调整 manifest capability availability（agent runtime）。
- 新增 `src/agents/tools/sessions-history-tool.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/tools/web-search.late-bind.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/apply-patch.ts`：调整 apply patch（agent runtime）。
- 修改 `src/agents/bash-tools.exec-approval-followup.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/bash-tools.exec-approval-followup.ts`：调整 bash tools.exec approval followup（agent runtime）。
- 修改 `src/agents/bash-tools.exec-approval-request.ts`：调整 bash tools.exec approval request（agent runtime）。
- 修改 `src/agents/bash-tools.exec-foreground-failures.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/bash-tools.exec-host-gateway.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/bash-tools.exec-host-gateway.ts`：调整 bash tools.exec host gateway（agent runtime）。
- 修改 `src/agents/bash-tools.exec-host-node.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/bash-tools.exec-host-node.ts`：调整 bash tools.exec host node（agent runtime）。
- 修改 `src/agents/bash-tools.exec-host-shared.ts`：调整 bash tools.exec host shared（agent runtime）。
- 修改 `src/agents/bash-tools.exec-runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/bash-tools.exec-runtime.ts`：调整 bash tools.exec runtime（agent runtime）。
- 删除 `src/agents/bash-tools.process.send-keys.test.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 其余 118 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/tools` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/tools/change-to-test.md` 的验证建议。
