# src/gateway-api-surface/protocol

## 1. 功能结论

**新增**：cron surface run diagnostics in status；**修改**：gateway bound sessions list responses、reduce gateway startup readiness latency、continue update runs after restart、move root contract fixture；**迁移/重构**：hide gateway helper internals；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Gateway 使用者、配置/安全相关调用方
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 5、修改 22

## 3. 功能级详细差异

### 优化 reduce gateway startup readiness latency

优化 reduce gateway startup readiness latency

- 验证提示：优先运行 `| pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 continue update runs after restart

修复 continue update runs after restart

- 验证提示：优先运行 `| pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 cron persist manual run ids in history

修复 cron：persist manual run ids in history

- 验证提示：优先运行 `| pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 discord surface stalled transport health

修复 discord：surface stalled transport health

- 验证提示：优先运行 `| pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 gateway bound sessions list responses

修复 gateway：bound sessions list responses

- 验证提示：优先运行 `| pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 route session cleanup through gateway writer

修复 route session cleanup through gateway writer

- 验证提示：优先运行 `| pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 speed up exact session lookups

修复 speed up exact session lookups

- 验证提示：优先运行 `| pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 新增 cron surface run diagnostics in status

新增 cron：surface run diagnostics in status

- 验证提示：优先运行 `| pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 move root contract fixture

测试覆盖 move root contract fixture

- 验证提示：优先运行 `| pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 hide gateway helper internals

迁移/重构 hide gateway helper internals

- 验证提示：优先运行 `| pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 channels.schema regression/contract coverage、schema、agent、agents models skills，需要按契约边界审查。

- 验证提示：优先运行 `| pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 channels.schema regression/contract coverage、cron validators regression/contract coverage、exec approvals validators regression/contract coverage、protocol plugin entrypoint，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/protocol`
- Changed path count: `27`
- Status counts: `新增 5、修改 22`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `27` files, `+1085` / `-38`

### 归纳依据

- 主要落点：gateway runtime。
- 新增或暴露的关键符号包括：`Ajv`, `buildPairingConnectRemediationHint`, `validateArtifactsListParams`, `validateArtifactsGetParams`, `validateArtifactsDownloadParams`, `validateNodePairRemoveParams`, `validateNodeEventResult`, `validateNodePresenceAlivePayload`, `validateWebPushVapidPublicKeyParams`, `validateWebPushSubscribeParams`。
- 建议优先验证：优先运行 `| pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts | Run pnpm build when protocol surfaces affect published/build output or generated clients. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：feat(cron): surface run diagnostics in status；fix(gateway): bound sessions list responses；perf: reduce gateway startup readiness latency；fix: continue update runs after restart；test: move root contract fixture；fix(discord): surface stalled transport health；fix(cron): persist manual run ids in history；fix: speed up exact session lookups

### Dimension evidence

- `maintenance-优化-reduce-gateway-startup-readiness-latency` / 优化 reduce gateway startup readiness latency:
  - source: `path` [M] `src/gateway/protocol/channels.schema.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/connect-error-details.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/cron-validators.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/exec-approvals-validators.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/index.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/index.ts` — semantic cue
- `maintenance-修复-continue-update-runs-after-restart` / 修复 continue update runs after restart:
  - source: `path` [A] `src/gateway/protocol/exec-approvals-validators.test.ts`
  - source: `path` [A] `src/gateway/protocol/schema/artifacts.ts`
  - source: `path` [A] `src/gateway/protocol/schema/plugins.ts`
  - source: `path` [M] `src/gateway/protocol/channels.schema.test.ts`
  - source: `path` [M] `src/gateway/protocol/connect-error-details.ts`
  - source: `path` [M] `src/gateway/protocol/cron-validators.test.ts`
- `maintenance-修复-cron-persist-manual-run-ids-in-history` / 修复 cron persist manual run ids in history:
  - source: `path` [M] `src/gateway/protocol/cron-validators.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/index.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/index.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/schema/cron.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/schema/plugins.ts` — semantic cue
- `maintenance-修复-discord-surface-stalled-transport-health` / 修复 discord surface stalled transport health:
  - source: `path` [A] `src/gateway/protocol/exec-approvals-validators.test.ts`
  - source: `path` [A] `src/gateway/protocol/schema/artifacts.ts`
  - source: `path` [A] `src/gateway/protocol/schema/plugins.ts`
  - source: `path` [M] `src/gateway/protocol/channels.schema.test.ts`
  - source: `path` [M] `src/gateway/protocol/connect-error-details.ts`
  - source: `path` [M] `src/gateway/protocol/cron-validators.test.ts`
- `maintenance-修复-gateway-bound-sessions-list-responses` / 修复 gateway bound sessions list responses:
  - source: `path` [M] `src/gateway/protocol/channels.schema.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/connect-error-details.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/cron-validators.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/exec-approvals-validators.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/index.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/index.ts` — semantic cue
- `maintenance-修复-route-session-cleanup-through-gateway-writer` / 修复 route session cleanup through gateway writer:
  - source: `path` [M] `src/gateway/protocol/channels.schema.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/connect-error-details.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/cron-validators.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/exec-approvals-validators.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/index.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/index.ts` — semantic cue
- `maintenance-修复-speed-up-exact-session-lookups` / 修复 speed up exact session lookups:
  - source: `path` [M] `src/gateway/protocol/schema/sessions.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/startup-unavailable.ts` — semantic cue
- `maintenance-新增-cron-surface-run-diagnostics-in-status` / 新增 cron surface run diagnostics in status:
  - source: `path` [M] `src/gateway/protocol/cron-validators.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/index.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/index.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/schema/cron.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/schema/plugins.ts` — semantic cue
- `public-contract-测试覆盖-move-root-contract-fixture` / 测试覆盖 move root contract fixture:
  - source: `path` [M] `src/gateway/protocol/talk-config.contract.test.ts` — semantic cue
- `migration-迁移-重构-hide-gateway-helper-internals` / 迁移/重构 hide gateway helper internals:
  - source: `path` [M] `src/gateway/protocol/channels.schema.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/connect-error-details.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/cron-validators.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/exec-approvals-validators.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/index.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/protocol/index.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/gateway/protocol/channels.schema.test.ts` — contract evidence
  - source: `path` [M] `src/gateway/protocol/schema.ts` — contract evidence
  - source: `path` [M] `src/gateway/protocol/schema/agent.ts` — contract evidence
  - source: `path` [M] `src/gateway/protocol/schema/agents-models-skills.ts` — contract evidence
  - source: `path` [M] `src/gateway/protocol/schema/artifacts.ts` — contract evidence
  - source: `path` [M] `src/gateway/protocol/schema/channels.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/gateway/protocol/channels.schema.test.ts` — test evidence
  - source: `path` [M] `src/gateway/protocol/cron-validators.test.ts` — test evidence
  - source: `path` [M] `src/gateway/protocol/exec-approvals-validators.test.ts` — test evidence
  - source: `path` [M] `src/gateway/protocol/index.test.ts` — test evidence
  - source: `path` [M] `src/gateway/protocol/talk-config.contract.test.ts` — test evidence

### 路径证据

- 新增 `src/gateway/protocol/exec-approvals-validators.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/gateway/protocol/schema/artifacts.ts`：调整 artifacts（gateway runtime）。
- 新增 `src/gateway/protocol/schema/plugins.ts`：调整 plugins（gateway runtime）。
- 新增 `src/gateway/protocol/startup-unavailable.ts`：调整 startup unavailable（gateway runtime）。
- 新增 `src/gateway/protocol/version.ts`：调整 version（gateway runtime）。
- 修改 `src/gateway/protocol/channels.schema.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/protocol/connect-error-details.ts`：调整 connect error details（gateway runtime）。
- 修改 `src/gateway/protocol/cron-validators.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/protocol/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/protocol/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `src/gateway/protocol/schema.ts`：调整 schema（gateway runtime）。
- 修改 `src/gateway/protocol/schema/agent.ts`：调整 agent（gateway runtime）。
- 修改 `src/gateway/protocol/schema/agents-models-skills.ts`：调整 agents models skills（gateway runtime）。
- 修改 `src/gateway/protocol/schema/channels.ts`：调整 channels（gateway runtime）。
- 修改 `src/gateway/protocol/schema/config.ts`：调整 schema config（gateway runtime）。
- 修改 `src/gateway/protocol/schema/cron.ts`：调整 cron（gateway runtime）。
- 修改 `src/gateway/protocol/schema/exec-approvals.ts`：调整 exec approvals（gateway runtime）。
- 其余 10 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/gateway-api-surface/protocol` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/gateway-api-surface/protocol/change-to-test.md` 的验证建议。
