# src/capability-modules/cron

## 1. 功能结论

**新增**：cron surface run diagnostics in status；**修改**：cron keep pre-transcript rows non-resumable、cron clarify no-delivery previews、cron persist startup state sidecar repairs、cron route CLI-runtime cron models through compatible backend；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：large
- 路径状态摘要（降级事实）：新增 12、修改 95

## 3. 功能级详细差异

### 优化 route session store writes through writer queue

优化 route session store writes through writer queue

- 验证提示：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 修复 cron clarify no-delivery previews

修复 cron：clarify no-delivery previews

- 验证提示：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 修复 cron keep pre-transcript rows non-resumable

修复 cron：keep pre-transcript rows non-resumable

- 验证提示：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 修复 cron persist manual run ids in history

修复 cron：persist manual run ids in history

- 验证提示：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 修复 cron persist startup state sidecar repairs

修复 cron：persist startup state sidecar repairs

- 验证提示：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 修复 cron polish wake-now retry PR

修复 cron：polish wake-now retry PR

- 验证提示：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 修复 cron retry busy recurring wake-now jobs

修复 cron：retry busy recurring wake-now jobs

- 验证提示：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 修复 cron route CLI-runtime cron models through compatible backend

修复 cron：route CLI-runtime cron models through compatible backend

- 验证提示：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 修复 heartbeat type wake scheduling intent

修复 heartbeat：type wake scheduling intent

- 验证提示：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 新增 cron surface run diagnostics in status

新增 cron：surface run diagnostics in status

- 验证提示：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 cron protocol schema regression/contract coverage、delivery field schemas，需要按契约边界审查。

- 验证提示：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 cron protocol conformance regression/contract coverage、cron protocol schema regression/contract coverage、delivery preview regression/contract coverage、delivery.failure notify regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 active jobs、cron protocol conformance regression/contract coverage、cron protocol schema regression/contract coverage、delivery field schemas、delivery plan、delivery preview regression/contract coverage；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/cron`
- Changed path count: `107`
- Status counts: `新增 12、修改 95`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `107` files, `+6380` / `-756`

### 归纳依据

- 主要落点：tests/contracts、implementation、session/state handling、model/thinking policy、configuration/schema、message delivery、auth/pairing/security behavior。
- 新增或暴露的关键符号包括：`hasActiveCronJobs`, `DeliveryModeFieldSchema`, `resolveAnnounceChannel`, `createPrefixOnlyChannelPlugin`, `setCronDeliveryTestRegistry`, `mockEmbeddedPayloads`, `mockEmbeddedTexts`, `DEFAULT_SESSION_KEY`。
- 建议优先验证：优先运行 `| pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 相关 commit 主题：feat(cron): surface run diagnostics in status；fix(cron): keep pre-transcript rows non-resumable；fix(cron): clarify no-delivery previews；fix(cron): persist startup state sidecar repairs；fix(cron): route CLI-runtime cron models through compatible backend；fix(cron): persist manual run ids in history；fix(heartbeat): type wake scheduling intent；fix(cron): polish wake-now retry PR

### Dimension evidence

- `maintenance-优化-route-session-store-writes-through-writer-qu` / 优化 route session store writes through writer queue:
  - source: `path` [M] `src/cron/isolated-agent.session-identity.test.ts` — semantic cue
  - source: `path` [M] `src/cron/isolated-agent/run-session-state.test.ts` — semantic cue
  - source: `path` [M] `src/cron/isolated-agent/run-session-state.ts` — semantic cue
  - source: `path` [M] `src/cron/isolated-agent/run.session-key-isolation.test.ts` — semantic cue
  - source: `path` [M] `src/cron/isolated-agent/session.test.ts` — semantic cue
  - source: `path` [M] `src/cron/isolated-agent/session.ts` — semantic cue
- `maintenance-修复-cron-clarify-no-delivery-previews` / 修复 cron clarify no-delivery previews:
  - source: `path` [M] `src/cron/active-jobs.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-conformance.test.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-schema.test.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-field-schemas.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-plan.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-preview.test.ts` — semantic cue
- `maintenance-修复-cron-keep-pre-transcript-rows-non-resumable` / 修复 cron keep pre-transcript rows non-resumable:
  - source: `path` [M] `src/cron/active-jobs.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-conformance.test.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-schema.test.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-field-schemas.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-plan.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-preview.test.ts` — semantic cue
- `maintenance-修复-cron-persist-manual-run-ids-in-history` / 修复 cron persist manual run ids in history:
  - source: `path` [M] `src/cron/active-jobs.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-conformance.test.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-schema.test.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-field-schemas.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-plan.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-preview.test.ts` — semantic cue
- `maintenance-修复-cron-persist-startup-state-sidecar-repairs` / 修复 cron persist startup state sidecar repairs:
  - source: `path` [M] `src/cron/active-jobs.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-conformance.test.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-schema.test.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-field-schemas.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-plan.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-preview.test.ts` — semantic cue
- `maintenance-修复-cron-polish-wake-now-retry-PR` / 修复 cron polish wake-now retry PR:
  - source: `path` [M] `src/cron/active-jobs.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-conformance.test.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-schema.test.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-field-schemas.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-plan.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-preview.test.ts` — semantic cue
- `maintenance-修复-cron-retry-busy-recurring-wake-now-jobs` / 修复 cron retry busy recurring wake-now jobs:
  - source: `path` [M] `src/cron/active-jobs.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-conformance.test.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-schema.test.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-field-schemas.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-plan.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-preview.test.ts` — semantic cue
- `runtime-behavior-修复-cron-route-CLI-runtime-cron-models-through-c` / 修复 cron route CLI-runtime cron models through compatible backend:
  - source: `path` [M] `src/cron/active-jobs.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-conformance.test.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-schema.test.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-field-schemas.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-plan.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-preview.test.ts` — semantic cue
- `maintenance-修复-heartbeat-type-wake-scheduling-intent` / 修复 heartbeat type wake scheduling intent:
  - source: `path` [M] `src/cron/heartbeat-policy.ts` — semantic cue
  - source: `path` [M] `src/cron/service.heartbeat-ok-summary-suppressed.test.ts` — semantic cue
  - source: `path` [M] `src/cron/service.main-job-passes-heartbeat-target-last.test.ts` — semantic cue
  - source: `path` [M] `src/cron/types.ts` — semantic cue
- `maintenance-新增-cron-surface-run-diagnostics-in-status` / 新增 cron surface run diagnostics in status:
  - source: `path` [M] `src/cron/active-jobs.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-conformance.test.ts` — semantic cue
  - source: `path` [M] `src/cron/cron-protocol-schema.test.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-field-schemas.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-plan.ts` — semantic cue
  - source: `path` [M] `src/cron/delivery-preview.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/cron/cron-protocol-schema.test.ts` — contract evidence
  - source: `path` [M] `src/cron/delivery-field-schemas.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/cron/cron-protocol-conformance.test.ts` — test evidence
  - source: `path` [M] `src/cron/cron-protocol-schema.test.ts` — test evidence
  - source: `path` [M] `src/cron/delivery-preview.test.ts` — test evidence
  - source: `path` [M] `src/cron/delivery.failure-notify.test.ts` — test evidence
  - source: `path` [M] `src/cron/delivery.test.ts` — test evidence
  - source: `path` [M] `src/cron/isolated-agent.delivery-awareness.test.ts` — test evidence
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `src/cron/cron-protocol-schema.test.ts`
  - source: `path` [A] `src/cron/delivery-preview.test.ts`
  - source: `path` [A] `src/cron/isolated-agent.model-preflight.test.ts`
  - source: `path` [A] `src/cron/isolated-agent/model-preflight.runtime.test.ts`
  - source: `path` [A] `src/cron/isolated-agent/model-preflight.runtime.ts`
  - source: `path` [A] `src/cron/isolated-agent/run-fallback-policy.test.ts`

### 路径证据

- 新增 `src/cron/cron-protocol-schema.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/cron/delivery-preview.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/cron/isolated-agent.model-preflight.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/cron/isolated-agent/model-preflight.runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/cron/isolated-agent/model-preflight.runtime.ts`：调整 model preflight（implementation）。
- 新增 `src/cron/isolated-agent/run-fallback-policy.test.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 新增 `src/cron/isolated-agent/run.meta-error-status.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/cron/isolated-agent/run.session-key-isolation.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/cron/run-diagnostics.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/cron/run-diagnostics.ts`：调整 run diagnostics（implementation）。
- 新增 `src/cron/schedule-identity.ts`：调整 schedule identity（implementation）。
- 新增 `src/cron/session-target.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cron/active-jobs.ts`：调整 active jobs（implementation）。
- 修改 `src/cron/cron-protocol-conformance.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cron/delivery-field-schemas.ts`：调整 delivery field schemas（configuration/schema）。
- 修改 `src/cron/delivery-plan.ts`：调整 delivery plan（implementation）。
- 修改 `src/cron/delivery-preview.ts`：调整 delivery preview（implementation）。
- 修改 `src/cron/delivery.failure-notify.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cron/delivery.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cron/delivery.ts`：调整 delivery（implementation）。
- 修改 `src/cron/heartbeat-policy.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `src/cron/isolated-agent.delivery-awareness.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cron/isolated-agent.direct-delivery-core-channels.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cron/isolated-agent.helpers.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 83 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/capability-modules/cron` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/cron/change-to-test.md` 的验证建议。
