# src/infra-outbound-delivery/outbound-actions

## 1. 功能结论

**修改**：harden backend message action gateway routing、telegram stabilize topic dispatch runtime、slack route message actions by target account、harden gateway recovery diagnostics and media delivery；**迁移/重构**：hide infra helper internals、trim gateway test helper exports、centralize plugin gateway message dispatch；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`plugin`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 6

## 3. 功能级详细差异

### 修复 harden backend message action gateway routing

修复 harden backend message action gateway routing

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/message-action-spec.test.ts src/infra/outbound/message-action-params.test.ts src/infra/outbound/message-action-runner.threading.test.ts src/infra/outbound/message-action-runner.media.test.ts | Escalate to media/channel tests when message actions alter payload or attachment semantics. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 harden gateway recovery diagnostics and media delivery

修复 harden gateway recovery diagnostics and media delivery

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/message-action-spec.test.ts src/infra/outbound/message-action-params.test.ts src/infra/outbound/message-action-runner.threading.test.ts src/infra/outbound/message-action-runner.media.test.ts | Escalate to media/channel tests when message actions alter payload or attachment semantics. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 route telegram cli sends through gateway

修复 route telegram cli sends through gateway

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/message-action-spec.test.ts src/infra/outbound/message-action-params.test.ts src/infra/outbound/message-action-runner.threading.test.ts src/infra/outbound/message-action-runner.media.test.ts | Escalate to media/channel tests when message actions alter payload or attachment semantics. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 slack route message actions by target account

修复 slack：route message actions by target account

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/message-action-spec.test.ts src/infra/outbound/message-action-params.test.ts src/infra/outbound/message-action-runner.threading.test.ts src/infra/outbound/message-action-runner.media.test.ts | Escalate to media/channel tests when message actions alter payload or attachment semantics. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 telegram stabilize topic dispatch runtime

修复 telegram：stabilize topic dispatch runtime

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/message-action-spec.test.ts src/infra/outbound/message-action-params.test.ts src/infra/outbound/message-action-runner.threading.test.ts src/infra/outbound/message-action-runner.media.test.ts | Escalate to media/channel tests when message actions alter payload or attachment semantics. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 centralize plugin gateway message dispatch

迁移/重构 centralize plugin gateway message dispatch

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/message-action-spec.test.ts src/infra/outbound/message-action-params.test.ts src/infra/outbound/message-action-runner.threading.test.ts src/infra/outbound/message-action-runner.media.test.ts | Escalate to media/channel tests when message actions alter payload or attachment semantics. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 hide infra helper internals

迁移/重构 hide infra helper internals

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/message-action-spec.test.ts src/infra/outbound/message-action-params.test.ts src/infra/outbound/message-action-runner.threading.test.ts src/infra/outbound/message-action-runner.media.test.ts | Escalate to media/channel tests when message actions alter payload or attachment semantics. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 trim gateway test helper exports

迁移/重构 trim gateway test helper exports

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/message-action-spec.test.ts src/infra/outbound/message-action-params.test.ts src/infra/outbound/message-action-runner.threading.test.ts src/infra/outbound/message-action-runner.media.test.ts | Escalate to media/channel tests when message actions alter payload or attachment semantics. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 message action runner.core send regression/contract coverage、message action runner.media regression/contract coverage、message action runner.plugin dispatch regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/message-action-spec.test.ts src/infra/outbound/message-action-params.test.ts src/infra/outbound/message-action-runner.threading.test.ts src/infra/outbound/message-action-runner.media.test.ts | Escalate to media/channel tests when message actions alter payload or attachment semantics. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/infra/outbound/message-action-spec.test.ts src/infra/outbound/message-action-params.test.ts src/infra/outbound/message-action-runner.threading.test.ts src/infra/outbound/message-action-runner.media.test.ts | Escalate to media/channel tests when message actions alter payload or attachment semantics. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-actions`
- Changed path count: `6`
- Status counts: `修改 6`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `6` files, `+565` / `-53`

### 归纳依据

- 主要落点：message delivery。
- 新增或暴露的关键符号包括：`BASE_ACTION_MEDIA_SOURCE_PARAM_KEYS`, `createGatewayActionPlugin`, `normalizeWorkspaceTarget`, `createConfiguredTestPlugin`, `addCandidateAndUnprefixedAlias`, `normalizeTargetForAccountBinding`, `inferPeerKindForAccountBinding`, `resolveTargetBoundAccountId`。
- 建议优先验证：优先运行 `| pnpm test -- src/infra/outbound/message-action-spec.test.ts src/infra/outbound/message-action-params.test.ts src/infra/outbound/message-action-runner.threading.test.ts src/infra/outbound/message-action-runner.media.test.ts | Escalate to media/channel tests when message actions alter payload or attachment semantics. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix: harden backend message action gateway routing；fix(telegram): stabilize topic dispatch runtime；refactor: hide infra helper internals；fix(slack): route message actions by target account；refactor: trim gateway test helper exports；fix: harden gateway recovery diagnostics and media delivery；refactor: centralize plugin gateway message dispatch；fix: route telegram cli sends through gateway

### Dimension evidence

- `runtime-behavior-修复-harden-backend-message-action-gateway-routing` / 修复 harden backend message action gateway routing:
  - source: `path` [M] `src/infra/outbound/message-action-params.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.core-send.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.media.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.ts` — semantic cue
- `maintenance-修复-harden-gateway-recovery-diagnostics-and-medi` / 修复 harden gateway recovery diagnostics and media delivery:
  - source: `path` [M] `src/infra/outbound/message-action-runner.media.test.ts` — semantic cue
- `maintenance-修复-route-telegram-cli-sends-through-gateway` / 修复 route telegram cli sends through gateway:
  - source: `path` [M] `src/infra/outbound/message-action-params.ts`
  - source: `path` [M] `src/infra/outbound/message-action-runner.core-send.test.ts`
  - source: `path` [M] `src/infra/outbound/message-action-runner.media.test.ts`
- `maintenance-修复-slack-route-message-actions-by-target-account` / 修复 slack route message actions by target account:
  - source: `path` [M] `src/infra/outbound/message-action-params.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.core-send.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.media.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.ts` — semantic cue
- `runtime-behavior-修复-telegram-stabilize-topic-dispatch-runtime` / 修复 telegram stabilize topic dispatch runtime:
  - source: `path` [M] `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts` — semantic cue
- `migration-迁移-重构-centralize-plugin-gateway-message-dispatch` / 迁移/重构 centralize plugin gateway message dispatch:
  - source: `path` [M] `src/infra/outbound/message-action-params.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.core-send.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.media.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.ts` — semantic cue
- `migration-迁移-重构-hide-infra-helper-internals` / 迁移/重构 hide infra helper internals:
  - source: `path` [M] `src/infra/outbound/message-action-params.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.core-send.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.media.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.ts` — semantic cue
- `migration-迁移-重构-trim-gateway-test-helper-exports` / 迁移/重构 trim gateway test helper exports:
  - source: `path` [M] `src/infra/outbound/message-action-params.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.core-send.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.media.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message-action-runner.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/infra/outbound/message-action-runner.core-send.test.ts` — test evidence
  - source: `path` [M] `src/infra/outbound/message-action-runner.media.test.ts` — test evidence
  - source: `path` [M] `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts` — test evidence

### 路径证据

- 修改 `src/infra/outbound/message-action-params.ts`：调整 message action params（message delivery）。
- 修改 `src/infra/outbound/message-action-runner.core-send.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/outbound/message-action-runner.media.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/outbound/message-action-runner.test-helpers.ts`：调整 message action runner.test helpers（message delivery）。
- 修改 `src/infra/outbound/message-action-runner.ts`：调整 message action runner（message delivery）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/infra-outbound-delivery/outbound-actions` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/infra-outbound-delivery/outbound-actions/change-to-test.md` 的验证建议。
