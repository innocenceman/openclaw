# src/gateway-api-surface/server-methods

## 1. 功能结论

**新增**：cron surface run diagnostics in status；**修改**：gateway add safe restart coordinator、gateway clamp unbound websocket auth scopes、clarify Pi transcript ownership、prevent persisted turn replay；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Gateway 使用者、配置/安全相关调用方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 10、修改 75

## 3. 功能级详细差异

### 修复 cli retry admin device approval after ownership denial

修复 cli：retry admin device approval after ownership denial

- 验证提示：优先运行 `| pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 gateway add safe restart coordinator

修复 gateway：add safe restart coordinator

- 验证提示：优先运行 `| pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 gateway clamp unbound websocket auth scopes

修复 gateway：clamp unbound websocket auth scopes

- 验证提示：优先运行 `| pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 gateway dedupe active WebChat sends

修复 gateway：dedupe active WebChat sends

- 验证提示：优先运行 `| pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 preserve sudo shell carrier commands

修复 preserve sudo shell carrier commands

- 验证提示：优先运行 `| pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 prevent persisted turn replay

修复 prevent persisted turn replay

- 验证提示：优先运行 `| pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 usage serve usage from durable transcript aggregate cache

修复 usage：serve usage from durable transcript aggregate cache

- 验证提示：优先运行 `| pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 文档同步 clarify Pi transcript ownership

文档同步 clarify Pi transcript ownership

- 验证提示：优先运行 `| pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 文档同步 clarify webchat transcript persistence

文档同步 clarify webchat transcript persistence

- 验证提示：优先运行 `| pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 新增 cron surface run diagnostics in status

新增 cron：surface run diagnostics in status

- 验证提示：优先运行 `| pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 server methods.control plane rate limit regression/contract coverage、agent wait dedupe regression/contract coverage、agent.create event regression/contract coverage、agent regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/server-methods`
- Changed path count: `85`
- Status counts: `新增 10、修改 75`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `85` files, `+10300` / `-1747`

### 归纳依据

- 主要落点：gateway runtime。
- 新增或暴露的关键符号包括：`CONTROL_PLANE_WRITE_METHODS`, `addAgentRunWaiter`, `__testing`, `asRecord`, `asString`, `readTerminalSnapshotFromDedupeEntry`, `readLastAgentCommandCall`。
- 建议优先验证：优先运行 `| pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix(gateway): add safe restart coordinator；fix(gateway): clamp unbound websocket auth scopes；feat(cron): surface run diagnostics in status；docs: clarify Pi transcript ownership；fix: prevent persisted turn replay；fix: preserve sudo shell carrier commands；docs: clarify webchat transcript persistence；fix(cli): retry admin device approval after ownership denial

### Dimension evidence

- `maintenance-修复-cli-retry-admin-device-approval-after-owners` / 修复 cli retry admin device approval after ownership denial:
  - source: `path` [M] `src/gateway/server-methods/approval-shared.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/approval-shared.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/devices.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/devices.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/exec-approval.ts` — semantic cue
- `maintenance-修复-gateway-add-safe-restart-coordinator` / 修复 gateway add safe restart coordinator:
  - source: `path` [M] `src/gateway/server-methods.control-plane-rate-limit.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent-job.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent-wait-dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent-wait-dedupe.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent.create-event.test.ts` — semantic cue
- `maintenance-修复-gateway-clamp-unbound-websocket-auth-scopes` / 修复 gateway clamp unbound websocket auth scopes:
  - source: `path` [M] `src/gateway/server-methods.control-plane-rate-limit.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent-job.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent-wait-dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent-wait-dedupe.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent.create-event.test.ts` — semantic cue
- `maintenance-修复-gateway-dedupe-active-WebChat-sends` / 修复 gateway dedupe active WebChat sends:
  - source: `path` [M] `src/gateway/server-methods.control-plane-rate-limit.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent-job.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent-wait-dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent-wait-dedupe.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent.create-event.test.ts` — semantic cue
- `maintenance-修复-preserve-sudo-shell-carrier-commands` / 修复 preserve sudo shell carrier commands:
  - source: `path` [M] `src/gateway/server-methods/commands.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/commands.ts` — semantic cue
- `runtime-behavior-修复-prevent-persisted-turn-replay` / 修复 prevent persisted turn replay:
  - source: `path` [A] `src/gateway/server-methods/approval-shared.test.ts`
  - source: `path` [A] `src/gateway/server-methods/artifacts.test.ts`
  - source: `path` [A] `src/gateway/server-methods/artifacts.ts`
  - source: `path` [M] `src/gateway/server-methods.control-plane-rate-limit.test.ts`
  - source: `path` [M] `src/gateway/server-methods.ts`
  - source: `path` [M] `src/gateway/server-methods/agent-job.ts`
- `maintenance-修复-usage-serve-usage-from-durable-transcript-ag` / 修复 usage serve usage from durable transcript aggregate cache:
  - source: `path` [M] `src/gateway/server-methods.control-plane-rate-limit.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent-job.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent-wait-dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent-wait-dedupe.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/agent.create-event.test.ts` — semantic cue
- `tests-docs-文档同步-clarify-Pi-transcript-ownership` / 文档同步 clarify Pi transcript ownership:
  - source: `path` [M] `src/gateway/server-methods/chat-transcript-inject.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/skills.update.normalizes-api-key.test.ts` — semantic cue
- `tests-docs-文档同步-clarify-webchat-transcript-persistence` / 文档同步 clarify webchat transcript persistence:
  - source: `path` [M] `src/gateway/server-methods/chat-transcript-inject.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/chat-webchat-media.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/chat-webchat-media.ts` — semantic cue
- `maintenance-新增-cron-surface-run-diagnostics-in-status` / 新增 cron surface run diagnostics in status:
  - source: `path` [M] `src/gateway/server-methods/channels.status.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/chat-transcript-inject.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/chat.inject.parentid.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/cron.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/cron.validation.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-methods/doctor.memory-core-runtime.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/gateway/server-methods.control-plane-rate-limit.test.ts` — test evidence
  - source: `path` [M] `src/gateway/server-methods/agent-wait-dedupe.test.ts` — test evidence
  - source: `path` [M] `src/gateway/server-methods/agent.create-event.test.ts` — test evidence
  - source: `path` [M] `src/gateway/server-methods/agent.test.ts` — test evidence
  - source: `path` [M] `src/gateway/server-methods/agents-mutate.test.ts` — test evidence
  - source: `path` [M] `src/gateway/server-methods/approval-shared.test.ts` — test evidence

### 路径证据

- 新增 `src/gateway/server-methods/approval-shared.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/gateway/server-methods/artifacts.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/gateway/server-methods/artifacts.ts`：调整 artifacts（gateway runtime）。
- 新增 `src/gateway/server-methods/config-write-flow.ts`：调整 config write flow（gateway runtime）。
- 新增 `src/gateway/server-methods/models.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/gateway/server-methods/nodes-wake-state.ts`：调整 nodes wake state（gateway runtime）。
- 新增 `src/gateway/server-methods/plugin-host-hooks.ts`：调整 plugin host hooks（gateway runtime）。
- 新增 `src/gateway/server-methods/restart.ts`：调整 restart（gateway runtime）。
- 新增 `src/gateway/server-methods/tools-invoke.ts`：调整 tools invoke（gateway runtime）。
- 新增 `src/gateway/server-methods/voicewake-routing.ts`：调整 voicewake routing（gateway runtime）。
- 修改 `src/gateway/server-methods.control-plane-rate-limit.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/server-methods.ts`：调整 server methods（gateway runtime）。
- 修改 `src/gateway/server-methods/agent-job.ts`：调整 agent job（gateway runtime）。
- 修改 `src/gateway/server-methods/agent-wait-dedupe.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/server-methods/agent-wait-dedupe.ts`：调整 agent wait dedupe（gateway runtime）。
- 修改 `src/gateway/server-methods/agent.create-event.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/server-methods/agent.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/server-methods/agent.ts`：调整 agent（gateway runtime）。
- 修改 `src/gateway/server-methods/agents-mutate.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/server-methods/agents.ts`：调整 agents（gateway runtime）。
- 修改 `src/gateway/server-methods/approval-shared.ts`：调整 approval shared（gateway runtime）。
- 修改 `src/gateway/server-methods/channels.start.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 63 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/gateway-api-surface/server-methods` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/gateway-api-surface/server-methods/change-to-test.md` 的验证建议。
