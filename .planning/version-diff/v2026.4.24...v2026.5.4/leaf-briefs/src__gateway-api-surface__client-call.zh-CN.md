# src/gateway-api-surface/client-call

## 1. 功能结论

**新增**：security support operator-managed network proxy routing；**修改**：gateway wait for event loop before client start、gateway bypass proxies for localhost control plane、gateway retry startup handshakes before surfacing failures、gateway align handshake client timeouts；**迁移/重构**：unify lazy import loaders、gateway classify gateway transport failures；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：Gateway 使用者、配置/安全相关调用方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 7

## 3. 功能级详细差异

### 修复 approvals stop stale approval resume loops

修复 approvals：stop stale approval resume loops

- 验证提示：优先运行 `| pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts | Escalate to CLI/app tests when caller behavior or transport assumptions change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 ci stabilize full release validation

修复 ci：stabilize full release validation

- 验证提示：优先运行 `| pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts | Escalate to CLI/app tests when caller behavior or transport assumptions change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 gateway align handshake client timeouts

修复 gateway：align handshake client timeouts

- 验证提示：优先运行 `| pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts | Escalate to CLI/app tests when caller behavior or transport assumptions change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 gateway bypass proxies for localhost control plane

修复 gateway：bypass proxies for localhost control plane

- 验证提示：优先运行 `| pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts | Escalate to CLI/app tests when caller behavior or transport assumptions change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 gateway retry startup handshakes before surfacing failures

修复 gateway：retry startup handshakes before surfacing failures

- 验证提示：优先运行 `| pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts | Escalate to CLI/app tests when caller behavior or transport assumptions change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 gateway stop stale device token reconnect loops

修复 gateway：stop stale device token reconnect loops

- 验证提示：优先运行 `| pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts | Escalate to CLI/app tests when caller behavior or transport assumptions change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 gateway wait for event loop before client start

修复 gateway：wait for event loop before client start

- 验证提示：优先运行 `| pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts | Escalate to CLI/app tests when caller behavior or transport assumptions change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 新增 security support operator-managed network proxy routing

新增 security：support operator-managed network proxy routing

- 验证提示：优先运行 `| pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts | Escalate to CLI/app tests when caller behavior or transport assumptions change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 gateway classify gateway transport failures

迁移/重构 gateway：classify gateway transport failures

- 验证提示：优先运行 `| pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts | Escalate to CLI/app tests when caller behavior or transport assumptions change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 unify lazy import loaders

迁移/重构 unify lazy import loaders

- 验证提示：优先运行 `| pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts | Escalate to CLI/app tests when caller behavior or transport assumptions change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 call regression/contract coverage、client regression/contract coverage、client.watchdog regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts | Escalate to CLI/app tests when caller behavior or transport assumptions change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts | Escalate to CLI/app tests when caller behavior or transport assumptions change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/client-call`
- Changed path count: `7`
- Status counts: `修改 7`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `7` files, `+958` / `-185`

### 归纳依据

- 主要落点：gateway runtime。
- 新增或暴露的关键符号包括：`isGatewayTransportError`, `isLoopbackGatewayUrl`, `shouldOmitDeviceIdentityForGatewayCall`, `resolveDeviceIdentityForGatewayCall`, `resolveGatewayCallTimeout`, `createGatewayCloseTransportError`。
- 建议优先验证：优先运行 `| pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts | Escalate to CLI/app tests when caller behavior or transport assumptions change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：refactor: unify lazy import loaders；fix(gateway): wait for event loop before client start；fix(gateway): bypass proxies for localhost control plane；fix(gateway): retry startup handshakes before surfacing failures；refactor(gateway): classify gateway transport failures；fix(gateway): align handshake client timeouts；fix(ci): stabilize full release validation；fix(approvals): stop stale approval resume loops

### Dimension evidence

- `maintenance-修复-approvals-stop-stale-approval-resume-loops` / 修复 approvals stop stale approval resume loops:
  - source: `path` [M] `src/cli/gateway-rpc.runtime.ts`
  - source: `path` [M] `src/cli/gateway-rpc.ts`
  - source: `path` [M] `src/gateway/call.test.ts`
- `maintenance-修复-ci-stabilize-full-release-validation` / 修复 ci stabilize full release validation:
  - source: `path` [M] `src/cli/gateway-rpc.runtime.ts`
  - source: `path` [M] `src/cli/gateway-rpc.ts`
  - source: `path` [M] `src/gateway/call.test.ts`
- `maintenance-修复-gateway-align-handshake-client-timeouts` / 修复 gateway align handshake client timeouts:
  - source: `path` [M] `src/cli/gateway-rpc.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-rpc.ts` — semantic cue
  - source: `path` [M] `src/gateway/call.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/call.ts` — semantic cue
  - source: `path` [M] `src/gateway/client.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/client.ts` — semantic cue
- `maintenance-修复-gateway-bypass-proxies-for-localhost-control` / 修复 gateway bypass proxies for localhost control plane:
  - source: `path` [M] `src/cli/gateway-rpc.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-rpc.ts` — semantic cue
  - source: `path` [M] `src/gateway/call.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/call.ts` — semantic cue
  - source: `path` [M] `src/gateway/client.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/client.ts` — semantic cue
- `maintenance-修复-gateway-retry-startup-handshakes-before-surf` / 修复 gateway retry startup handshakes before surfacing failures:
  - source: `path` [M] `src/cli/gateway-rpc.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-rpc.ts` — semantic cue
  - source: `path` [M] `src/gateway/call.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/call.ts` — semantic cue
  - source: `path` [M] `src/gateway/client.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/client.ts` — semantic cue
- `maintenance-修复-gateway-stop-stale-device-token-reconnect-lo` / 修复 gateway stop stale device token reconnect loops:
  - source: `path` [M] `src/cli/gateway-rpc.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-rpc.ts` — semantic cue
  - source: `path` [M] `src/gateway/call.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/call.ts` — semantic cue
  - source: `path` [M] `src/gateway/client.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/client.ts` — semantic cue
- `maintenance-修复-gateway-wait-for-event-loop-before-client-st` / 修复 gateway wait for event loop before client start:
  - source: `path` [M] `src/cli/gateway-rpc.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-rpc.ts` — semantic cue
  - source: `path` [M] `src/gateway/call.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/call.ts` — semantic cue
  - source: `path` [M] `src/gateway/client.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/client.ts` — semantic cue
- `runtime-behavior-新增-security-support-operator-managed-network-pr` / 新增 security support operator-managed network proxy routing:
  - source: `path` [M] `src/cli/gateway-rpc.runtime.ts`
  - source: `path` [M] `src/cli/gateway-rpc.ts`
  - source: `path` [M] `src/gateway/call.test.ts`
- `migration-迁移-重构-gateway-classify-gateway-transport-failur` / 迁移/重构 gateway classify gateway transport failures:
  - source: `path` [M] `src/cli/gateway-rpc.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-rpc.ts` — semantic cue
  - source: `path` [M] `src/gateway/call.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/call.ts` — semantic cue
  - source: `path` [M] `src/gateway/client.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/client.ts` — semantic cue
- `migration-迁移-重构-unify-lazy-import-loaders` / 迁移/重构 unify lazy import loaders:
  - source: `path` [M] `src/cli/gateway-rpc.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-rpc.ts` — semantic cue
  - source: `path` [M] `src/gateway/call.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/call.ts` — semantic cue
  - source: `path` [M] `src/gateway/client.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/client.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/gateway/call.test.ts` — test evidence
  - source: `path` [M] `src/gateway/client.test.ts` — test evidence
  - source: `path` [M] `src/gateway/client.watchdog.test.ts` — test evidence

### 路径证据

- 修改 `src/cli/gateway-rpc.runtime.ts`：调整 gateway rpc（gateway runtime）。
- 修改 `src/cli/gateway-rpc.ts`：调整 gateway rpc（gateway runtime）。
- 修改 `src/gateway/call.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/call.ts`：调整 call（gateway runtime）。
- 修改 `src/gateway/client.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/client.ts`：调整 client（gateway runtime）。
- 修改 `src/gateway/client.watchdog.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/gateway-api-surface/client-call` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/gateway-api-surface/client-call/change-to-test.md` 的验证建议。
