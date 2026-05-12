# src/gateway-api-surface/server-runtime

## 1. 功能结论

**修改**：stabilize gateway server shard、scope Control UI assistant media tickets、keep gateway shutdown runtime stable across updates、discord handle SecretRef runtime status；**迁移/重构**：trim gateway server type exports、trim gateway helper type exports、trim gateway policy exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：CLI/agent 使用者、Gateway 使用者、agent runtime 集成方、配置/安全相关调用方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 3、修改 17

## 3. 功能级详细差异

### 优化 gateway defer task registry startup imports

优化 gateway：defer task registry startup imports

- 验证提示：优先运行 `| pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 control-ui allow configured chat message width

修复 control-ui：allow configured chat message width

- 验证提示：优先运行 `| pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 discord handle SecretRef runtime status

修复 discord：handle SecretRef runtime status

- 验证提示：优先运行 `| pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 keep gateway shutdown runtime stable across updates

修复 keep gateway shutdown runtime stable across updates

- 验证提示：优先运行 `| pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 scope Control UI assistant media tickets

修复 scope Control UI assistant media tickets

- 验证提示：优先运行 `| pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 talk surface openai realtime browser failures

修复 talk：surface openai realtime browser failures

- 验证提示：优先运行 `| pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 stabilize gateway server shard

测试覆盖 stabilize gateway server shard

- 验证提示：优先运行 `| pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 trim gateway helper type exports

迁移/重构 trim gateway helper type exports

- 验证提示：优先运行 `| pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 trim gateway policy exports

迁移/重构 trim gateway policy exports

- 验证提示：优先运行 `| pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 trim gateway server type exports

迁移/重构 trim gateway server type exports

- 验证提示：优先运行 `| pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 channel health monitor regression/contract coverage、channel health monitor、channel health policy regression/contract coverage、channel health policy，需要按契约边界审查。

- 验证提示：优先运行 `| pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 channel health monitor regression/contract coverage、channel health policy regression/contract coverage、control ui assistant media.e2e regression/contract coverage、control ui csp regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/server-runtime`
- Changed path count: `20`
- Status counts: `新增 3、修改 17`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `20` files, `+1376` / `-653`

### 归纳依据

- 主要落点：gateway runtime、tests/contracts。
- 新增或暴露的关键符号包括：`CONTROL_UI_E2E_TOKEN`, `CONTROL_UI_ASSISTANT_MEDIA_TICKET_SCOPE`, `CONTROL_UI_ASSISTANT_MEDIA_TICKET_TTL_MS`, `controlUiAvatarResolutionMeta`, `signAssistantMediaTicketPayload`, `createAssistantMediaTicket`, `verifyAssistantMediaTicket`, `GATEWAY_LIFECYCLE_HOOK_TIMEOUT_MS`。
- 建议优先验证：优先运行 `| pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：test: stabilize gateway server shard；fix: scope Control UI assistant media tickets；fix: keep gateway shutdown runtime stable across updates；fix(discord): handle SecretRef runtime status；perf(gateway): defer task registry startup imports；fix(control-ui): allow configured chat message width；fix(talk): surface openai realtime browser failures；refactor: trim gateway server type exports

### Dimension evidence

- `maintenance-优化-gateway-defer-task-registry-startup-imports` / 优化 gateway defer task registry startup imports:
  - source: `path` [M] `src/gateway/channel-health-monitor.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-monitor.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-policy.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-policy.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-assistant-media.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-contract.ts` — semantic cue
- `user-visible-修复-control-ui-allow-configured-chat-message-wid` / 修复 control-ui allow configured chat message width:
  - source: `path` [M] `src/gateway/control-ui-assistant-media.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-contract.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-csp.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-csp.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-links.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-routing.ts` — semantic cue
- `runtime-behavior-修复-discord-handle-SecretRef-runtime-status` / 修复 discord handle SecretRef runtime status:
  - source: `path` [M] `src/gateway/server-close.runtime.ts` — semantic cue
- `runtime-behavior-修复-keep-gateway-shutdown-runtime-stable-across` / 修复 keep gateway shutdown runtime stable across updates:
  - source: `path` [M] `src/gateway/channel-health-monitor.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-monitor.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-policy.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-policy.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-assistant-media.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-contract.ts` — semantic cue
- `user-visible-修复-scope-Control-UI-assistant-media-tickets` / 修复 scope Control UI assistant media tickets:
  - source: `path` [M] `src/gateway/control-ui-assistant-media.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-contract.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-csp.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-csp.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-links.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-routing.ts` — semantic cue
- `maintenance-修复-talk-surface-openai-realtime-browser-failures` / 修复 talk surface openai realtime browser failures:
  - source: `path` [A] `src/gateway/control-ui-assistant-media.e2e.test.ts`
  - source: `path` [A] `src/gateway/server-close.runtime.ts`
  - source: `path` [A] `src/gateway/server-http.request-trace.test.ts`
  - source: `path` [M] `src/gateway/channel-health-monitor.test.ts`
  - source: `path` [M] `src/gateway/channel-health-monitor.ts`
  - source: `path` [M] `src/gateway/channel-health-policy.test.ts`
- `tests-docs-测试覆盖-stabilize-gateway-server-shard` / 测试覆盖 stabilize gateway server shard:
  - source: `path` [M] `src/gateway/channel-health-monitor.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-monitor.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-policy.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-policy.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-assistant-media.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-contract.ts` — semantic cue
- `migration-迁移-重构-trim-gateway-helper-type-exports` / 迁移/重构 trim gateway helper type exports:
  - source: `path` [M] `src/gateway/channel-health-monitor.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-monitor.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-policy.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-policy.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-assistant-media.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-contract.ts` — semantic cue
- `migration-迁移-重构-trim-gateway-policy-exports` / 迁移/重构 trim gateway policy exports:
  - source: `path` [M] `src/gateway/channel-health-monitor.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-monitor.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-policy.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-policy.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-assistant-media.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-contract.ts` — semantic cue
- `migration-迁移-重构-trim-gateway-server-type-exports` / 迁移/重构 trim gateway server type exports:
  - source: `path` [M] `src/gateway/channel-health-monitor.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-monitor.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-policy.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/channel-health-policy.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-assistant-media.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/control-ui-contract.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/gateway/channel-health-monitor.test.ts` — contract evidence
  - source: `path` [M] `src/gateway/channel-health-monitor.ts` — contract evidence
  - source: `path` [M] `src/gateway/channel-health-policy.test.ts` — contract evidence
  - source: `path` [M] `src/gateway/channel-health-policy.ts` — contract evidence
  - source: `path` [M] `src/gateway/control-ui-assistant-media.e2e.test.ts` — contract evidence
  - source: `path` [M] `src/gateway/control-ui-contract.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/gateway/channel-health-monitor.test.ts` — test evidence
  - source: `path` [M] `src/gateway/channel-health-policy.test.ts` — test evidence
  - source: `path` [M] `src/gateway/control-ui-assistant-media.e2e.test.ts` — test evidence
  - source: `path` [M] `src/gateway/control-ui-csp.test.ts` — test evidence
  - source: `path` [M] `src/gateway/control-ui.http.test.ts` — test evidence
  - source: `path` [M] `src/gateway/server-close.test.ts` — test evidence

### 路径证据

- 新增 `src/gateway/control-ui-assistant-media.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/gateway/server-close.runtime.ts`：调整 server close（gateway runtime）。
- 新增 `src/gateway/server-http.request-trace.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/channel-health-monitor.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/channel-health-monitor.ts`：调整 channel health monitor（gateway runtime）。
- 修改 `src/gateway/channel-health-policy.test.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `src/gateway/channel-health-policy.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `src/gateway/control-ui-contract.ts`：调整 control ui contract（gateway runtime）。
- 修改 `src/gateway/control-ui-csp.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/control-ui-csp.ts`：调整 control ui csp（gateway runtime）。
- 修改 `src/gateway/control-ui-links.ts`：调整 control ui links（gateway runtime）。
- 修改 `src/gateway/control-ui-routing.ts`：调整 control ui routing（gateway runtime）。
- 修改 `src/gateway/control-ui.http.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/control-ui.ts`：调整 control ui（gateway runtime）。
- 修改 `src/gateway/server-close.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 5 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/gateway-api-surface/server-runtime` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/gateway-api-surface/server-runtime/change-to-test.md` 的验证建议。
