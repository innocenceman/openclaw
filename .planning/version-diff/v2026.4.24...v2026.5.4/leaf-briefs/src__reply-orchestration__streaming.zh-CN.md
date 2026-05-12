# src/reply-orchestration/streaming

## 1. 功能结论

**新增**：structured heartbeat responses and Codex tool replies、default active steering to batched delivery；**修改**：Stop heartbeat tool turns from asking for HEARTBEAT_OK、pass workspace auth evidence into model auth labels；**迁移/重构**：unify lazy import loaders、hide auto reply internals、trim auto reply type exports、trim auto reply helper exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 2、修改 14

## 3. 功能级详细差异

### 修复 pass workspace auth evidence into model auth labels

修复 pass workspace auth evidence into model auth labels

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK

修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 新增 default active steering to batched delivery

新增 default active steering to batched delivery

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 新增 structured heartbeat responses and Codex tool replies

新增 structured heartbeat responses and Codex tool replies

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 hide auto reply internals

迁移/重构 hide auto reply internals

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 remove unused test helpers

迁移/重构 remove unused test helpers

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 trim auto reply helper exports

迁移/重构 trim auto reply helper exports

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 trim auto reply type exports

迁移/重构 trim auto reply type exports

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 trim runtime test helper type exports

迁移/重构 trim runtime test helper type exports

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 unify lazy import loaders

迁移/重构 unify lazy import loaders

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 heartbeat filter.browser import regression/contract coverage、heartbeat filter regression/contract coverage、heartbeat regression/contract coverage、reply.block streaming regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/streaming`
- Changed path count: `16`
- Status counts: `新增 2、修改 14`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `16` files, `+311` / `-258`

### 归纳依据

- 主要落点：message delivery、session/state handling。
- 新增或暴露的关键符号包括：`HEARTBEAT_RESPONSE_TOOL_NAME`, `HEARTBEAT_RESPONSE_CHANNEL_DATA_KEY`, `HEARTBEAT_TOOL_OUTCOMES`, `HEARTBEAT_TOOL_PRIORITIES`, `OUTCOMES`, `PRIORITIES`, `isRecord`, `readString`, `readStringAlias`, `readBooleanAlias`。
- 建议优先验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 相关 commit 主题：Stop heartbeat tool turns from asking for HEARTBEAT_OK；refactor: unify lazy import loaders；refactor: hide auto reply internals；refactor: trim auto reply type exports；refactor: trim auto reply helper exports；Add structured heartbeat responses and Codex tool replies；refactor: trim runtime test helper type exports；refactor: remove unused test helpers

### Dimension evidence

- `maintenance-修复-pass-workspace-auth-evidence-into-model-auth` / 修复 pass workspace auth evidence into model auth labels:
  - source: `path` [A] `src/auto-reply/heartbeat-filter.browser-import.test.ts`
  - source: `path` [A] `src/auto-reply/heartbeat-tool-response.ts`
  - source: `path` [M] `src/auto-reply/heartbeat-filter.test.ts`
  - source: `path` [M] `src/auto-reply/heartbeat-filter.ts`
  - source: `path` [M] `src/auto-reply/heartbeat.test.ts`
- `maintenance-修改-Stop-heartbeat-tool-turns-from-asking-for-HE` / 修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK:
  - source: `path` [M] `src/auto-reply/heartbeat-filter.browser-import.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-tool-response.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.ts` — semantic cue
- `maintenance-新增-default-active-steering-to-batched-delivery` / 新增 default active steering to batched delivery:
  - source: `path` [M] `src/auto-reply/heartbeat-filter.browser-import.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-tool-response.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.ts` — semantic cue
- `maintenance-新增-structured-heartbeat-responses-and-Codex-too` / 新增 structured heartbeat responses and Codex tool replies:
  - source: `path` [M] `src/auto-reply/heartbeat-filter.browser-import.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-tool-response.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.ts` — semantic cue
- `migration-迁移-重构-hide-auto-reply-internals` / 迁移/重构 hide auto reply internals:
  - source: `path` [M] `src/auto-reply/heartbeat-filter.browser-import.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-tool-response.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.ts` — semantic cue
- `migration-迁移-重构-remove-unused-test-helpers` / 迁移/重构 remove unused test helpers:
  - source: `path` [M] `src/auto-reply/heartbeat-filter.browser-import.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-tool-response.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.ts` — semantic cue
- `migration-迁移-重构-trim-auto-reply-helper-exports` / 迁移/重构 trim auto reply helper exports:
  - source: `path` [M] `src/auto-reply/heartbeat-filter.browser-import.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-tool-response.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.ts` — semantic cue
- `migration-迁移-重构-trim-auto-reply-type-exports` / 迁移/重构 trim auto reply type exports:
  - source: `path` [M] `src/auto-reply/heartbeat-filter.browser-import.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-tool-response.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.ts` — semantic cue
- `runtime-behavior-迁移-重构-trim-runtime-test-helper-type-exports` / 迁移/重构 trim runtime test helper type exports:
  - source: `path` [M] `src/auto-reply/heartbeat-filter.browser-import.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-tool-response.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.ts` — semantic cue
- `migration-迁移-重构-unify-lazy-import-loaders` / 迁移/重构 unify lazy import loaders:
  - source: `path` [M] `src/auto-reply/heartbeat-filter.browser-import.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-filter.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat-tool-response.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/heartbeat.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/auto-reply/heartbeat-filter.browser-import.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/heartbeat-filter.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/heartbeat.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply.block-streaming.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply.directive.directive-behavior.prefers-alias-matches-fuzzy-selection-is-ambiguous.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply.directive.parse.test.ts` — test evidence

### 路径证据

- 新增 `src/auto-reply/heartbeat-filter.browser-import.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/auto-reply/heartbeat-tool-response.ts`：调整 heartbeat tool response（message delivery）。
- 修改 `src/auto-reply/heartbeat-filter.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/heartbeat-filter.ts`：调整 heartbeat filter（message delivery）。
- 修改 `src/auto-reply/heartbeat.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/heartbeat.ts`：调整 heartbeat（message delivery）。
- 修改 `src/auto-reply/reply.block-streaming.test.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 修改 `src/auto-reply/reply.directive.directive-behavior.e2e-harness.ts`：调整 reply.directive.directive behavior.e2e harness（message delivery）。
- 修改 `src/auto-reply/reply.directive.directive-behavior.prefers-alias-matches-fuzzy-selection-is-ambiguous.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply.directive.parse.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply.raw-body.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply.test-harness.ts`：调整 reply.test harness（message delivery）。
- 修改 `src/auto-reply/reply.triggers.group-intro-prompts.cases.ts`：调整 reply.triggers.group intro prompts.cases（message delivery）。
- 修改 `src/auto-reply/reply.triggers.trigger-handling.targets-active-session-native-stop.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 2 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/reply-orchestration/streaming` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/reply-orchestration/streaming/change-to-test.md` 的验证建议。
