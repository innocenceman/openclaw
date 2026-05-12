# src/infra-outbound-delivery/network

## 1. 功能结论

**修改**：proxy direct APNs HTTP2 sessions、apply undici family fallback to guarded fetch、add trusted env proxy opt-in for web fetch、network scope fake-ip SSRF policy to provider hosts；**迁移/重构**：hide infra helper internals；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`build`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 9、修改 9

## 3. 功能级详细差异

### 修复 add trusted env proxy opt-in for web fetch

修复 add trusted env proxy opt-in for web fetch

- 验证提示：优先运行 `| pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 apply undici family fallback to guarded fetch

修复 apply undici family fallback to guarded fetch

- 验证提示：优先运行 `| pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 network scope fake-ip SSRF policy to provider hosts

修复 network：scope fake-ip SSRF policy to provider hosts

- 验证提示：优先运行 `| pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 proxy direct APNs HTTP2 sessions

修复 proxy direct APNs HTTP2 sessions

- 验证提示：优先运行 `| pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 proxy preserve multipart form data

修复 proxy：preserve multipart form data

- 验证提示：优先运行 `| pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 stabilize release validation lanes

修复 stabilize release validation lanes

- 验证提示：优先运行 `| pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修改 Fix managed proxy TLS hostname validation

修改 Fix managed proxy TLS hostname validation

- 验证提示：优先运行 `| pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修改 fix agents stream timeout heartbeat

修改 fix agents stream timeout heartbeat

- 验证提示：优先运行 `| pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 stabilize release validation lanes

测试覆盖 stabilize release validation lanes

- 验证提示：优先运行 `| pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 hide infra helper internals

迁移/重构 hide infra helper internals

- 验证提示：优先运行 `| pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 fetch guard.ssrf regression/contract coverage、http connect tunnel regression/contract coverage、proxy env regression/contract coverage、proxy fetch regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/network`
- Changed path count: `18`
- Status counts: `新增 9、修改 9`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `18` files, `+4301` / `-119`

### 归纳依据

- 主要落点：tests/contracts、implementation、session/state handling、model/thinking policy。
- 新增或暴露的关键符号包括：`isManagedProxyActive`, `MAX_CONNECT_RESPONSE_HEADER_BYTES`, `redactProxyUrl`, `resolveProxyHost`, `resolveProxyPort`, `resolveProxyAuthorization`, `formatTunnelFailure`, `writeConnectRequest`, `assertConnectHeaderBytesWithinLimit`, `readProxyConnectResponse`。
- 建议优先验证：优先运行 `| pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix: proxy direct APNs HTTP2 sessions；fix: apply undici family fallback to guarded fetch；fix: add trusted env proxy opt-in for web fetch；fix(network): scope fake-ip SSRF policy to provider hosts；test: stabilize release validation lanes；fix agents stream timeout heartbeat；Fix managed proxy TLS hostname validation；fix(proxy): preserve multipart form data

### Dimension evidence

- `maintenance-修复-add-trusted-env-proxy-opt-in-for-web-fetch` / 修复 add trusted env proxy opt-in for web fetch:
  - source: `path` [M] `src/infra/net/fetch-guard.ssrf.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/fetch-guard.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-env.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-env.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-fetch.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-fetch.ts` — semantic cue
- `maintenance-修复-apply-undici-family-fallback-to-guarded-fetch` / 修复 apply undici family fallback to guarded fetch:
  - source: `path` [M] `src/infra/net/fetch-guard.ssrf.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/fetch-guard.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-fetch.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-fetch.ts` — semantic cue
  - source: `path` [M] `src/infra/net/undici-family-policy.ts` — semantic cue
  - source: `path` [M] `src/infra/net/undici-global-dispatcher.test.ts` — semantic cue
- `maintenance-修复-network-scope-fake-ip-SSRF-policy-to-provide` / 修复 network scope fake-ip SSRF policy to provider hosts:
  - source: `path` [M] `src/infra/net/fetch-guard.ssrf.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/undici-family-policy.ts` — semantic cue
- `maintenance-修复-proxy-direct-APNs-HTTP2-sessions` / 修复 proxy direct APNs HTTP2 sessions:
  - source: `path` [M] `src/infra/net/proxy-env.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-env.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-fetch.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-fetch.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy/active-proxy-state.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy/external-proxy.e2e.test.ts` — semantic cue
- `maintenance-修复-proxy-preserve-multipart-form-data` / 修复 proxy preserve multipart form data:
  - source: `path` [M] `src/infra/net/proxy-env.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-env.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-fetch.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-fetch.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy/active-proxy-state.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy/external-proxy.e2e.test.ts` — semantic cue
- `maintenance-修复-stabilize-release-validation-lanes` / 修复 stabilize release validation lanes:
  - source: `path` [M] `src/infra/net/proxy/proxy-validation.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy/proxy-validation.ts` — semantic cue
- `maintenance-修改-Fix-managed-proxy-TLS-hostname-validation` / 修改 Fix managed proxy TLS hostname validation:
  - source: `path` [M] `src/infra/net/proxy-env.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-env.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-fetch.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-fetch.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy/active-proxy-state.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy/external-proxy.e2e.test.ts` — semantic cue
- `runtime-behavior-修改-fix-agents-stream-timeout-heartbeat` / 修改 fix agents stream timeout heartbeat:
  - source: `path` [A] `src/infra/net/http-connect-tunnel.test.ts`
  - source: `path` [A] `src/infra/net/http-connect-tunnel.ts`
  - source: `path` [A] `src/infra/net/proxy/active-proxy-state.ts`
  - source: `path` [M] `src/infra/net/fetch-guard.ssrf.test.ts`
  - source: `path` [M] `src/infra/net/fetch-guard.ts`
  - source: `path` [M] `src/infra/net/proxy-env.test.ts`
- `tests-docs-测试覆盖-stabilize-release-validation-lanes` / 测试覆盖 stabilize release validation lanes:
  - source: `path` [M] `src/infra/net/proxy/proxy-validation.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy/proxy-validation.ts` — semantic cue
- `migration-迁移-重构-hide-infra-helper-internals` / 迁移/重构 hide infra helper internals:
  - source: `path` [M] `src/infra/net/fetch-guard.ssrf.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/fetch-guard.ts` — semantic cue
  - source: `path` [M] `src/infra/net/http-connect-tunnel.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/http-connect-tunnel.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-env.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/proxy-env.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/infra/net/fetch-guard.ssrf.test.ts` — test evidence
  - source: `path` [M] `src/infra/net/http-connect-tunnel.test.ts` — test evidence
  - source: `path` [M] `src/infra/net/proxy-env.test.ts` — test evidence
  - source: `path` [M] `src/infra/net/proxy-fetch.test.ts` — test evidence
  - source: `path` [M] `src/infra/net/proxy/external-proxy.e2e.test.ts` — test evidence
  - source: `path` [M] `src/infra/net/proxy/proxy-lifecycle.test.ts` — test evidence

### 路径证据

- 新增 `src/infra/net/http-connect-tunnel.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/infra/net/http-connect-tunnel.ts`：调整 http connect tunnel（implementation）。
- 新增 `src/infra/net/proxy/active-proxy-state.ts`：调整 active proxy state（session/state handling）。
- 新增 `src/infra/net/proxy/external-proxy.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/infra/net/proxy/proxy-lifecycle.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/infra/net/proxy/proxy-lifecycle.ts`：调整 proxy lifecycle（implementation）。
- 新增 `src/infra/net/proxy/proxy-validation.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/infra/net/proxy/proxy-validation.ts`：调整 proxy validation（implementation）。
- 新增 `src/infra/net/undici-family-policy.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `src/infra/net/fetch-guard.ssrf.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/net/fetch-guard.ts`：调整 fetch guard（implementation）。
- 修改 `src/infra/net/proxy-env.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/net/proxy-env.ts`：调整 proxy env（implementation）。
- 修改 `src/infra/net/proxy-fetch.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/net/proxy-fetch.ts`：调整 proxy fetch（implementation）。
- 修改 `src/infra/net/undici-global-dispatcher.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/net/undici-global-dispatcher.ts`：调整 undici global dispatcher（implementation）。
- 修改 `src/infra/net/undici-runtime.ts`：调整 undici runtime（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/infra-outbound-delivery/network` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/infra-outbound-delivery/network/change-to-test.md` 的验证建议。
