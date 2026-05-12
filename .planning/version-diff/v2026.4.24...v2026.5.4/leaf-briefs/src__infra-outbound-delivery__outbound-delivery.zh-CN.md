# src/infra-outbound-delivery/outbound-delivery

## 1. 功能结论

**修改**：thread session write-lock timeout config、plugins reuse startup runtime registry、guard provider-prefixed delivery targets、harden gateway recovery diagnostics and media delivery；**迁移/重构**：expose SDK test helper subpaths、plugin-sdk publish route helpers、config migrate plugin config access；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 17

## 3. 功能级详细差异

### 优化 plugins reuse startup runtime registry

优化 plugins：reuse startup runtime registry

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 agents fail closed missing requester completion routes

修复 agents：fail closed missing requester completion routes

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 guard provider-prefixed delivery targets

修复 guard provider-prefixed delivery targets

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 harden gateway recovery diagnostics and media delivery

修复 harden gateway recovery diagnostics and media delivery

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 outbound strip internal runtime scaffolding

修复 outbound：strip internal runtime scaffolding

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 thread session write-lock timeout config

修复 thread session write-lock timeout config

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 whatsapp sanitize tool XML and hide configured error text

修复 whatsapp：sanitize tool XML and hide configured error text

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 config migrate plugin config access

迁移/重构 config：migrate plugin config access

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 expose SDK test helper subpaths

迁移/重构 expose SDK test helper subpaths

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 plugin-sdk publish route helpers

迁移/重构 plugin-sdk：publish route helpers

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 bound delivery router regression/contract coverage、cfg threading.guard regression/contract coverage、deliver regression/contract coverage、message regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-delivery`
- Changed path count: `17`
- Status counts: `修改 17`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `17` files, `+765` / `-35`

### 归纳依据

- 主要落点：implementation、tests/contracts、message delivery、CLI/command behavior、configuration/schema、session/state handling。
- 新增或暴露的关键符号包括：`flushDiagnosticEvents`, `sessionKeyForDeliveryDiagnostics`, `deliveryKindForPayload`, `emitMessageDeliveryStarted`, `emitMessageDeliveryCompleted`, `emitMessageDeliveryError`, `stripInternalRuntimeScaffoldingFromValue`, `stripInternalRuntimeScaffoldingFromPayload`, `hasDeliveryResultIdentity`。
- 建议优先验证：优先运行 `| pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix: thread session write-lock timeout config；perf(plugins): reuse startup runtime registry；fix: guard provider-prefixed delivery targets；fix: harden gateway recovery diagnostics and media delivery；fix(whatsapp): sanitize tool XML and hide configured error text；fix(outbound): strip internal runtime scaffolding；refactor: expose SDK test helper subpaths；refactor(plugin-sdk): publish route helpers

### Dimension evidence

- `runtime-behavior-优化-plugins-reuse-startup-runtime-registry` / 优化 plugins reuse startup runtime registry:
  - source: `path` [M] `src/cli/send-runtime/channel-outbound-send.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message.config.runtime.ts` — semantic cue
- `maintenance-修复-agents-fail-closed-missing-requester-complet` / 修复 agents fail closed missing requester completion routes:
  - source: `path` [M] `src/cli/send-runtime/channel-outbound-send.ts`
  - source: `path` [M] `src/infra/outbound/best-effort-delivery.ts`
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.test.ts`
- `maintenance-修复-guard-provider-prefixed-delivery-targets` / 修复 guard provider-prefixed delivery targets:
  - source: `path` [M] `src/infra/outbound/best-effort-delivery.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/cfg-threading.guard.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/targets-resolve-shared.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/targets-session.ts` — semantic cue
- `maintenance-修复-harden-gateway-recovery-diagnostics-and-medi` / 修复 harden gateway recovery diagnostics and media delivery:
  - source: `path` [M] `src/infra/outbound/best-effort-delivery.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.ts` — semantic cue
- `runtime-behavior-修复-outbound-strip-internal-runtime-scaffolding` / 修复 outbound strip internal runtime scaffolding:
  - source: `path` [M] `src/cli/send-runtime/channel-outbound-send.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/best-effort-delivery.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/cfg-threading.guard.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/deliver.test.ts` — semantic cue
- `maintenance-修复-thread-session-write-lock-timeout-config` / 修复 thread session write-lock timeout config:
  - source: `path` [M] `src/infra/outbound/cfg-threading.guard.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/message.config.runtime.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/targets-session.ts` — semantic cue
- `maintenance-修复-whatsapp-sanitize-tool-XML-and-hide-configur` / 修复 whatsapp sanitize tool XML and hide configured error text:
  - source: `path` [M] `src/cli/send-runtime/channel-outbound-send.ts`
  - source: `path` [M] `src/infra/outbound/best-effort-delivery.ts`
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.test.ts`
- `migration-迁移-重构-config-migrate-plugin-config-access` / 迁移/重构 config migrate plugin config access:
  - source: `path` [M] `src/cli/send-runtime/channel-outbound-send.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/best-effort-delivery.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/cfg-threading.guard.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/deliver.test.ts` — semantic cue
- `migration-迁移-重构-expose-SDK-test-helper-subpaths` / 迁移/重构 expose SDK test helper subpaths:
  - source: `path` [M] `src/cli/send-runtime/channel-outbound-send.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/best-effort-delivery.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/cfg-threading.guard.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/deliver.test.ts` — semantic cue
- `migration-迁移-重构-plugin-sdk-publish-route-helpers` / 迁移/重构 plugin-sdk publish route helpers:
  - source: `path` [M] `src/cli/send-runtime/channel-outbound-send.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/best-effort-delivery.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/cfg-threading.guard.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/deliver.test.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/infra/outbound/bound-delivery-router.test.ts` — test evidence
  - source: `path` [M] `src/infra/outbound/cfg-threading.guard.test.ts` — test evidence
  - source: `path` [M] `src/infra/outbound/deliver.test.ts` — test evidence
  - source: `path` [M] `src/infra/outbound/message.test.ts` — test evidence
  - source: `path` [M] `src/infra/outbound/outbound-send-service.test.ts` — test evidence
  - source: `path` [M] `src/infra/outbound/targets.test.ts` — test evidence

### 路径证据

- 修改 `src/cli/send-runtime/channel-outbound-send.ts`：调整 channel outbound send（CLI/command behavior）。
- 修改 `src/infra/outbound/best-effort-delivery.ts`：调整 best effort delivery（implementation）。
- 修改 `src/infra/outbound/bound-delivery-router.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/outbound/bound-delivery-router.ts`：调整 bound delivery router（implementation）。
- 修改 `src/infra/outbound/cfg-threading.guard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/outbound/deliver.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/outbound/deliver.ts`：调整 deliver（implementation）。
- 修改 `src/infra/outbound/message.config.runtime.ts`：调整 message.config（configuration/schema）。
- 修改 `src/infra/outbound/message.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/outbound/message.ts`：调整 message（message delivery）。
- 修改 `src/infra/outbound/outbound-send-service.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/outbound/outbound-send-service.ts`：调整 outbound send service（message delivery）。
- 其余 5 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/infra-outbound-delivery/outbound-delivery` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/infra-outbound-delivery/outbound-delivery/change-to-test.md` 的验证建议。
