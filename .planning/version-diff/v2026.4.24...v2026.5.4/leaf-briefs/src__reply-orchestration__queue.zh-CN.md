# src/reply-orchestration/queue

## 1. 功能结论

**新增**：default active steering to batched delivery、default queueing to steer；**修改**：preserve reply context in embedded prompts、reset turns bypass active queue modes、messages keep group replies tool-only by default、models keep user model switches strict；**迁移/重构**：expose SDK test helper subpaths、plugin-sdk publish route helpers、channels share route identity keys、channels reuse route context helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 2、修改 13

## 3. 功能级详细差异

### 修复 messages keep group replies tool-only by default

修复 messages：keep group replies tool-only by default

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts | Escalate to outbound/channel tests when queue timing or delivery ordering crosses transport boundaries. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 models keep user model switches strict

修复 models：keep user model switches strict

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts | Escalate to outbound/channel tests when queue timing or delivery ordering crosses transport boundaries. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 preserve reply context in embedded prompts

修复 preserve reply context in embedded prompts

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts | Escalate to outbound/channel tests when queue timing or delivery ordering crosses transport boundaries. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 reset turns bypass active queue modes

修复 reset turns bypass active queue modes

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts | Escalate to outbound/channel tests when queue timing or delivery ordering crosses transport boundaries. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 新增 default active steering to batched delivery

新增 default active steering to batched delivery

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts | Escalate to outbound/channel tests when queue timing or delivery ordering crosses transport boundaries. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 新增 default queueing to steer

新增 default queueing to steer

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts | Escalate to outbound/channel tests when queue timing or delivery ordering crosses transport boundaries. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 channels reuse route context helpers

迁移/重构 channels：reuse route context helpers

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts | Escalate to outbound/channel tests when queue timing or delivery ordering crosses transport boundaries. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 channels share route identity keys

迁移/重构 channels：share route identity keys

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts | Escalate to outbound/channel tests when queue timing or delivery ordering crosses transport boundaries. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 expose SDK test helper subpaths

迁移/重构 expose SDK test helper subpaths

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts | Escalate to outbound/channel tests when queue timing or delivery ordering crosses transport boundaries. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 plugin-sdk publish route helpers

迁移/重构 plugin-sdk：publish route helpers

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts | Escalate to outbound/channel tests when queue timing or delivery ordering crosses transport boundaries. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 queue policy regression/contract coverage、queue.collect regression/contract coverage、queue.dedupe regression/contract coverage、queue.drain restart regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts | Escalate to outbound/channel tests when queue timing or delivery ordering crosses transport boundaries. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts | Escalate to outbound/channel tests when queue timing or delivery ordering crosses transport boundaries. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/queue`
- Changed path count: `15`
- Status counts: `新增 2、修改 13`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `15` files, `+272` / `-28`

### 归纳依据

- 主要落点：message delivery、session/state handling。
- 新增或暴露的关键符号包括：`followupRouteIdentityKey`, `DEFAULT_QUEUE_DEBOUNCE_MS`, `isSteeringQueueMode`, `resolvePiSteeringModeForQueueMode`。
- 建议优先验证：优先运行 `| pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts | Escalate to outbound/channel tests when queue timing or delivery ordering crosses transport boundaries. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix: preserve reply context in embedded prompts；fix: reset turns bypass active queue modes；feat: default active steering to batched delivery；feat: default queueing to steer；fix(messages): keep group replies tool-only by default；refactor: expose SDK test helper subpaths；refactor(plugin-sdk): publish route helpers；refactor(channels): share route identity keys

### Dimension evidence

- `maintenance-修复-messages-keep-group-replies-tool-only-by-def` / 修复 messages keep group replies tool-only by default:
  - source: `path` [A] `src/auto-reply/reply/queue/settings.test.ts`
  - source: `path` [A] `src/auto-reply/reply/queue/steering.ts`
  - source: `path` [M] `src/auto-reply/reply/queue-policy.test.ts`
  - source: `path` [M] `src/auto-reply/reply/queue-policy.ts`
  - source: `path` [M] `src/auto-reply/reply/queue.collect.test.ts`
- `maintenance-修复-models-keep-user-model-switches-strict` / 修复 models keep user model switches strict:
  - source: `path` [A] `src/auto-reply/reply/queue/settings.test.ts`
  - source: `path` [A] `src/auto-reply/reply/queue/steering.ts`
  - source: `path` [M] `src/auto-reply/reply/queue-policy.test.ts`
  - source: `path` [M] `src/auto-reply/reply/queue-policy.ts`
  - source: `path` [M] `src/auto-reply/reply/queue.collect.test.ts`
- `maintenance-修复-preserve-reply-context-in-embedded-prompts` / 修复 preserve reply context in embedded prompts:
  - source: `path` [M] `src/auto-reply/reply/queue-policy.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue-policy.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.collect.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.drain-restart.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.ts` — semantic cue
- `maintenance-修复-reset-turns-bypass-active-queue-modes` / 修复 reset turns bypass active queue modes:
  - source: `path` [M] `src/auto-reply/reply/queue-policy.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue-policy.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.collect.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.drain-restart.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.ts` — semantic cue
- `maintenance-新增-default-active-steering-to-batched-delivery` / 新增 default active steering to batched delivery:
  - source: `path` [M] `src/auto-reply/reply/queue-policy.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue-policy.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.collect.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.drain-restart.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.ts` — semantic cue
- `maintenance-新增-default-queueing-to-steer` / 新增 default queueing to steer:
  - source: `path` [M] `src/auto-reply/reply/queue-policy.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue-policy.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.collect.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.drain-restart.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.ts` — semantic cue
- `migration-迁移-重构-channels-reuse-route-context-helpers` / 迁移/重构 channels reuse route context helpers:
  - source: `path` [M] `src/auto-reply/reply/queue-policy.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue-policy.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.collect.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.drain-restart.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.ts` — semantic cue
- `migration-迁移-重构-channels-share-route-identity-keys` / 迁移/重构 channels share route identity keys:
  - source: `path` [M] `src/auto-reply/reply/queue-policy.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue-policy.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.collect.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.drain-restart.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.ts` — semantic cue
- `migration-迁移-重构-expose-SDK-test-helper-subpaths` / 迁移/重构 expose SDK test helper subpaths:
  - source: `path` [M] `src/auto-reply/reply/queue-policy.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue-policy.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.collect.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.drain-restart.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.ts` — semantic cue
- `migration-迁移-重构-plugin-sdk-publish-route-helpers` / 迁移/重构 plugin-sdk publish route helpers:
  - source: `path` [M] `src/auto-reply/reply/queue-policy.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue-policy.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.collect.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.drain-restart.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/queue.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/auto-reply/reply/queue-policy.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/queue.collect.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/queue.dedupe.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/queue.drain-restart.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/queue/settings.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/queue/state.test.ts` — test evidence

### 路径证据

- 新增 `src/auto-reply/reply/queue/settings.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/auto-reply/reply/queue/steering.ts`：调整 steering（message delivery）。
- 修改 `src/auto-reply/reply/queue-policy.test.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `src/auto-reply/reply/queue-policy.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `src/auto-reply/reply/queue.collect.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply/queue.dedupe.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply/queue.drain-restart.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply/queue.ts`：调整 queue（message delivery）。
- 修改 `src/auto-reply/reply/queue/drain.ts`：调整 drain（message delivery）。
- 修改 `src/auto-reply/reply/queue/enqueue.ts`：调整 enqueue（message delivery）。
- 修改 `src/auto-reply/reply/queue/normalize.ts`：调整 normalize（message delivery）。
- 修改 `src/auto-reply/reply/queue/settings.ts`：调整 settings（message delivery）。
- 修改 `src/auto-reply/reply/queue/state.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply/queue/state.ts`：调整 state（session/state handling）。
- 其余 1 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/reply-orchestration/queue` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/reply-orchestration/queue/change-to-test.md` 的验证建议。
