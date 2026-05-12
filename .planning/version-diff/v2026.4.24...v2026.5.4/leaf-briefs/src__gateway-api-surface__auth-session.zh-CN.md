# src/gateway-api-surface/auth-session

## 1. 功能结论

**修改**：pairing pass read spy path after cache reset、pairing clear allowlist cache before read spy、pairing rethrow unreadable allowlist files、pairing don't silently swallow unexpected stat errors；**迁移/重构**：trim install infra exports、trim gateway helper type exports、remove dead private helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：Gateway 使用者、配置/安全相关调用方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 15

## 3. 功能级详细差异

### 修复 device-pair reject invalid remote setup URLs

修复 device-pair：reject invalid remote setup URLs

- 验证提示：优先运行 `| pnpm test -- src/gateway/auth.test.ts src/gateway/auth-mode-policy.test.ts src/gateway/connection-auth.test.ts src/gateway/probe-auth.test.ts | Escalate to pnpm test:auth:compat when auth compatibility or token surfaces broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 device-pair validate public setup urls

修复 device-pair：validate public setup urls

- 验证提示：优先运行 `| pnpm test -- src/gateway/auth.test.ts src/gateway/auth-mode-policy.test.ts src/gateway/connection-auth.test.ts src/gateway/probe-auth.test.ts | Escalate to pnpm test:auth:compat when auth compatibility or token surfaces broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 pairing don't silently swallow unexpected stat errors

修复 pairing：don't silently swallow unexpected stat errors

- 验证提示：优先运行 `| pnpm test -- src/gateway/auth.test.ts src/gateway/auth-mode-policy.test.ts src/gateway/connection-auth.test.ts src/gateway/probe-auth.test.ts | Escalate to pnpm test:auth:compat when auth compatibility or token surfaces broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 pairing rethrow unreadable allowlist files

修复 pairing：rethrow unreadable allowlist files

- 验证提示：优先运行 `| pnpm test -- src/gateway/auth.test.ts src/gateway/auth-mode-policy.test.ts src/gateway/connection-auth.test.ts src/gateway/probe-auth.test.ts | Escalate to pnpm test:auth:compat when auth compatibility or token surfaces broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修改 Keep Codex Computer Use hook relays live across turns

修改 Keep Codex Computer Use hook relays live across turns

- 验证提示：优先运行 `| pnpm test -- src/gateway/auth.test.ts src/gateway/auth-mode-policy.test.ts src/gateway/connection-auth.test.ts src/gateway/probe-auth.test.ts | Escalate to pnpm test:auth:compat when auth compatibility or token surfaces broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 pairing clear allowlist cache before read spy

测试覆盖 pairing：clear allowlist cache before read spy

- 验证提示：优先运行 `| pnpm test -- src/gateway/auth.test.ts src/gateway/auth-mode-policy.test.ts src/gateway/connection-auth.test.ts src/gateway/probe-auth.test.ts | Escalate to pnpm test:auth:compat when auth compatibility or token surfaces broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 pairing pass read spy path after cache reset

测试覆盖 pairing：pass read spy path after cache reset

- 验证提示：优先运行 `| pnpm test -- src/gateway/auth.test.ts src/gateway/auth-mode-policy.test.ts src/gateway/connection-auth.test.ts src/gateway/probe-auth.test.ts | Escalate to pnpm test:auth:compat when auth compatibility or token surfaces broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 remove dead private helpers

迁移/重构 remove dead private helpers

- 验证提示：优先运行 `| pnpm test -- src/gateway/auth.test.ts src/gateway/auth-mode-policy.test.ts src/gateway/connection-auth.test.ts src/gateway/probe-auth.test.ts | Escalate to pnpm test:auth:compat when auth compatibility or token surfaces broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 trim gateway helper type exports

迁移/重构 trim gateway helper type exports

- 验证提示：优先运行 `| pnpm test -- src/gateway/auth.test.ts src/gateway/auth-mode-policy.test.ts src/gateway/connection-auth.test.ts src/gateway/probe-auth.test.ts | Escalate to pnpm test:auth:compat when auth compatibility or token surfaces broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 trim install infra exports

迁移/重构 trim install infra exports

- 验证提示：优先运行 `| pnpm test -- src/gateway/auth.test.ts src/gateway/auth-mode-policy.test.ts src/gateway/connection-auth.test.ts src/gateway/probe-auth.test.ts | Escalate to pnpm test:auth:compat when auth compatibility or token surfaces broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 auth regression/contract coverage、probe auth regression/contract coverage、node pairing regression/contract coverage、allow from store file regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/gateway/auth.test.ts src/gateway/auth-mode-policy.test.ts src/gateway/connection-auth.test.ts src/gateway/probe-auth.test.ts | Escalate to pnpm test:auth:compat when auth compatibility or token surfaces broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/gateway/auth.test.ts src/gateway/auth-mode-policy.test.ts src/gateway/connection-auth.test.ts src/gateway/probe-auth.test.ts | Escalate to pnpm test:auth:compat when auth compatibility or token surfaces broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/auth-session`
- Changed path count: `16`
- Status counts: `新增 1、修改 15`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `16` files, `+940` / `-288`

### 归纳依据

- 主要落点：session/state handling、gateway runtime、auth/pairing/security behavior。
- 新增或暴露的关键符号包括：`LEGACY_OPENCLAW_ENV_NOTE`, `authorizePasswordAuth`, `resolveGatewayProbeCredentialConfig`, `expectInvalidPairingKey`, `fsError`, `describePairingFilenameKeyInput`, `invalidPairingFilenameKeyError`, `normalizePairingFilenameKey`, `safeChannelKey`, `resolveOptionalAccountFilenameKey`。
- 建议优先验证：优先运行 `| pnpm test -- src/gateway/auth.test.ts src/gateway/auth-mode-policy.test.ts src/gateway/connection-auth.test.ts src/gateway/probe-auth.test.ts | Escalate to pnpm test:auth:compat when auth compatibility or token surfaces broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：refactor: trim install infra exports；refactor: trim gateway helper type exports；test(pairing): pass read spy path after cache reset；test(pairing): clear allowlist cache before read spy；refactor: remove dead private helpers；fix(pairing): rethrow unreadable allowlist files；fix(pairing): don't silently swallow unexpected stat errors；Keep Codex Computer Use hook relays live across turns

### Dimension evidence

- `maintenance-修复-device-pair-reject-invalid-remote-setup-URLs` / 修复 device-pair reject invalid remote setup URLs:
  - source: `path` [M] `src/pairing/setup-code.test.ts` — semantic cue
  - source: `path` [M] `src/pairing/setup-code.ts` — semantic cue
- `maintenance-修复-device-pair-validate-public-setup-urls` / 修复 device-pair validate public setup urls:
  - source: `path` [M] `src/pairing/setup-code.test.ts` — semantic cue
  - source: `path` [M] `src/pairing/setup-code.ts` — semantic cue
- `maintenance-修复-pairing-don-t-silently-swallow-unexpected-st` / 修复 pairing don't silently swallow unexpected stat errors:
  - source: `path` [M] `src/gateway/auth.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/auth.ts` — semantic cue
  - source: `path` [M] `src/gateway/device-auth.ts` — semantic cue
  - source: `path` [M] `src/gateway/probe-auth.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/probe-auth.ts` — semantic cue
  - source: `path` [M] `src/infra/node-pairing.test.ts` — semantic cue
- `maintenance-修复-pairing-rethrow-unreadable-allowlist-files` / 修复 pairing rethrow unreadable allowlist files:
  - source: `path` [M] `src/infra/node-pairing.test.ts` — semantic cue
  - source: `path` [M] `src/infra/node-pairing.ts` — semantic cue
  - source: `path` [M] `src/pairing/allow-from-store-file.test.ts` — semantic cue
  - source: `path` [M] `src/pairing/allow-from-store-file.ts` — semantic cue
  - source: `path` [M] `src/pairing/allow-from-store-read.test.ts` — semantic cue
  - source: `path` [M] `src/pairing/allow-from-store-read.ts` — semantic cue
- `maintenance-修改-Keep-Codex-Computer-Use-hook-relays-live-acr` / 修改 Keep Codex Computer Use hook relays live across turns:
  - source: `path` [A] `src/pairing/allow-from-store-file.test.ts`
  - source: `path` [M] `src/gateway/auth.test.ts`
  - source: `path` [M] `src/gateway/auth.ts`
  - source: `path` [M] `src/gateway/device-auth.ts`
- `tests-docs-测试覆盖-pairing-clear-allowlist-cache-before-read` / 测试覆盖 pairing clear allowlist cache before read spy:
  - source: `path` [M] `src/infra/node-pairing.test.ts` — semantic cue
  - source: `path` [M] `src/infra/node-pairing.ts` — semantic cue
  - source: `path` [M] `src/pairing/allow-from-store-file.test.ts` — semantic cue
  - source: `path` [M] `src/pairing/allow-from-store-file.ts` — semantic cue
  - source: `path` [M] `src/pairing/allow-from-store-read.test.ts` — semantic cue
  - source: `path` [M] `src/pairing/allow-from-store-read.ts` — semantic cue
- `tests-docs-测试覆盖-pairing-pass-read-spy-path-after-cache-res` / 测试覆盖 pairing pass read spy path after cache reset:
  - source: `path` [M] `src/infra/node-pairing.test.ts` — semantic cue
  - source: `path` [M] `src/infra/node-pairing.ts` — semantic cue
  - source: `path` [M] `src/pairing/allow-from-store-file.test.ts` — semantic cue
  - source: `path` [M] `src/pairing/allow-from-store-file.ts` — semantic cue
  - source: `path` [M] `src/pairing/allow-from-store-read.test.ts` — semantic cue
  - source: `path` [M] `src/pairing/allow-from-store-read.ts` — semantic cue
- `migration-迁移-重构-remove-dead-private-helpers` / 迁移/重构 remove dead private helpers:
  - source: `path` [M] `src/gateway/auth.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/auth.ts` — semantic cue
  - source: `path` [M] `src/gateway/device-auth.ts` — semantic cue
  - source: `path` [M] `src/gateway/probe-auth.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/probe-auth.ts` — semantic cue
  - source: `path` [M] `src/infra/node-pairing.test.ts` — semantic cue
- `migration-迁移-重构-trim-gateway-helper-type-exports` / 迁移/重构 trim gateway helper type exports:
  - source: `path` [M] `src/gateway/auth.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/auth.ts` — semantic cue
  - source: `path` [M] `src/gateway/device-auth.ts` — semantic cue
  - source: `path` [M] `src/gateway/probe-auth.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/probe-auth.ts` — semantic cue
  - source: `path` [M] `src/infra/node-pairing.test.ts` — semantic cue
- `migration-迁移-重构-trim-install-infra-exports` / 迁移/重构 trim install infra exports:
  - source: `path` [M] `src/gateway/auth.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/auth.ts` — semantic cue
  - source: `path` [M] `src/gateway/device-auth.ts` — semantic cue
  - source: `path` [M] `src/gateway/probe-auth.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/probe-auth.ts` — semantic cue
  - source: `path` [M] `src/infra/node-pairing.test.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/gateway/auth.test.ts` — test evidence
  - source: `path` [M] `src/gateway/probe-auth.test.ts` — test evidence
  - source: `path` [M] `src/infra/node-pairing.test.ts` — test evidence
  - source: `path` [M] `src/pairing/allow-from-store-file.test.ts` — test evidence
  - source: `path` [M] `src/pairing/allow-from-store-read.test.ts` — test evidence
  - source: `path` [M] `src/pairing/pairing-messages.test.ts` — test evidence

### 路径证据

- 新增 `src/pairing/allow-from-store-file.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/auth.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/auth.ts`：调整 auth（gateway runtime）。
- 修改 `src/gateway/device-auth.ts`：调整 device auth（gateway runtime）。
- 修改 `src/gateway/probe-auth.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/gateway/probe-auth.ts`：调整 probe auth（gateway runtime）。
- 修改 `src/infra/node-pairing.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/node-pairing.ts`：调整 node pairing（auth/pairing/security behavior）。
- 修改 `src/pairing/allow-from-store-file.ts`：调整 allow from store file（session/state handling）。
- 修改 `src/pairing/allow-from-store-read.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/pairing/allow-from-store-read.ts`：调整 allow from store read（session/state handling）。
- 修改 `src/pairing/pairing-messages.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/pairing/pairing-store.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 3 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/gateway-api-surface/auth-session` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/gateway-api-surface/auth-session/change-to-test.md` 的验证建议。
