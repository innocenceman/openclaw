# extensions/auth-integration-plugins/device-pair

## 1. 功能结论

**修改**：device-pair require pairing scope for pair command、ios harden gateway pairing setup、trim gateway startup plugin imports、auth bound bootstrap handoff scopes；**迁移/重构**：trim secret contract type imports、trim workshop helper exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 9

## 3. 功能级详细差异

### 优化 trim gateway startup plugin imports

优化 trim gateway startup plugin imports

- 验证提示：优先运行 `pnpm test -- extensions/device-pair/index.test.ts`；`pnpm test -- src/cli/qr-cli.test.ts`；`pnpm test -- src/infra/device-pairing.test.ts`。
- 置信度：`high`

### 修复 auth bound bootstrap handoff scopes

修复 auth：bound bootstrap handoff scopes

- 验证提示：优先运行 `pnpm test -- extensions/device-pair/index.test.ts`；`pnpm test -- src/cli/qr-cli.test.ts`；`pnpm test -- src/infra/device-pairing.test.ts`。
- 置信度：`high`

### 修复 device-pair reject invalid remote setup URLs

修复 device-pair：reject invalid remote setup URLs

- 验证提示：优先运行 `pnpm test -- extensions/device-pair/index.test.ts`；`pnpm test -- src/cli/qr-cli.test.ts`；`pnpm test -- src/infra/device-pairing.test.ts`。
- 置信度：`high`

### 修复 device-pair require pairing scope for pair command

修复 device-pair：require pairing scope for pair command

- 验证提示：优先运行 `pnpm test -- extensions/device-pair/index.test.ts`；`pnpm test -- src/cli/qr-cli.test.ts`；`pnpm test -- src/infra/device-pairing.test.ts`。
- 置信度：`high`

### 修复 device-pair validate public setup urls

修复 device-pair：validate public setup urls

- 验证提示：优先运行 `pnpm test -- extensions/device-pair/index.test.ts`；`pnpm test -- src/cli/qr-cli.test.ts`；`pnpm test -- src/infra/device-pairing.test.ts`。
- 置信度：`high`

### 修复 device-pairing validate callerScopes against resolved token scopes o…

修复 device-pairing：validate callerScopes against resolved token scopes on repair

- 验证提示：优先运行 `pnpm test -- extensions/device-pair/index.test.ts`；`pnpm test -- src/cli/qr-cli.test.ts`；`pnpm test -- src/infra/device-pairing.test.ts`。
- 置信度：`high`

### 修复 ios harden gateway pairing setup

修复 ios：harden gateway pairing setup

- 验证提示：优先运行 `pnpm test -- extensions/device-pair/index.test.ts`；`pnpm test -- src/cli/qr-cli.test.ts`；`pnpm test -- src/infra/device-pairing.test.ts`。
- 置信度：`high`

### 修复 pairing recover malformed pairing state files

修复 pairing：recover malformed pairing state files

- 验证提示：优先运行 `pnpm test -- extensions/device-pair/index.test.ts`；`pnpm test -- src/cli/qr-cli.test.ts`；`pnpm test -- src/infra/device-pairing.test.ts`。
- 置信度：`high`

### 迁移/重构 trim secret contract type imports

迁移/重构 trim secret contract type imports

- 验证提示：优先运行 `pnpm test -- extensions/device-pair/index.test.ts`；`pnpm test -- src/cli/qr-cli.test.ts`；`pnpm test -- src/infra/device-pairing.test.ts`。
- 置信度：`high`

### 迁移/重构 trim workshop helper exports

迁移/重构 trim workshop helper exports

- 验证提示：优先运行 `pnpm test -- extensions/device-pair/index.test.ts`；`pnpm test -- src/cli/qr-cli.test.ts`；`pnpm test -- src/infra/device-pairing.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- extensions/device-pair/index.test.ts`；`pnpm test -- src/cli/qr-cli.test.ts`；`pnpm test -- src/infra/device-pairing.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 device pair plugin entrypoint、notify regression/contract coverage、pair command auth regression/contract coverage、qr cli regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- extensions/device-pair/index.test.ts`；`pnpm test -- src/cli/qr-cli.test.ts`；`pnpm test -- src/infra/device-pairing.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- extensions/device-pair/index.test.ts`；`pnpm test -- src/cli/qr-cli.test.ts`；`pnpm test -- src/infra/device-pairing.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/device-pair`
- Changed path count: `9`
- Status counts: `修改 9`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `9` files, `+959` / `-129`

### 归纳依据

- 主要落点：auth/pairing/security behavior、CLI/command behavior。
- 新增或暴露的关键符号包括：`loadDevicePairApiModule`, `loadNotifyModule`, `loadPairCommandApproveModule`, `loadPairCommandAuthModule`, `GATEWAY_SCHEME_WITHOUT_AUTHORITY_RE`, `SCHEME_LIKE_PATH_RE`, `describeSecureMobilePairingFix`, `normalizeHostForIpCheck`, `isLoopbackHost`, `isMobilePairingCleartextAllowedHost`。
- 建议优先验证：优先运行 `pnpm test -- extensions/device-pair/index.test.ts`；`pnpm test -- src/cli/qr-cli.test.ts`；`pnpm test -- src/infra/device-pairing.test.ts`。
- 相关 commit 主题：fix(device-pair): require pairing scope for pair command；fix(ios): harden gateway pairing setup；perf: trim gateway startup plugin imports；refactor: trim secret contract type imports；refactor: trim workshop helper exports；fix(auth): bound bootstrap handoff scopes；fix(device-pair): reject invalid remote setup URLs；fix(device-pair): validate public setup urls

### Dimension evidence

- `maintenance-优化-trim-gateway-startup-plugin-imports` / 优化 trim gateway startup plugin imports:
  - source: `path` [M] `extensions/device-pair/openclaw.plugin.json` — semantic cue
- `maintenance-修复-auth-bound-bootstrap-handoff-scopes` / 修复 auth bound bootstrap handoff scopes:
  - source: `path` [M] `extensions/device-pair/pair-command-auth.test.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/pair-command-auth.ts` — semantic cue
- `maintenance-修复-device-pair-reject-invalid-remote-setup-URLs` / 修复 device-pair reject invalid remote setup URLs:
  - source: `path` [M] `extensions/device-pair/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/index.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/notify.test.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/notify.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/device-pair/pair-command-auth.test.ts` — semantic cue
- `user-visible-修复-device-pair-require-pairing-scope-for-pair-c` / 修复 device-pair require pairing scope for pair command:
  - source: `path` [M] `extensions/device-pair/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/index.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/notify.test.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/notify.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/device-pair/pair-command-auth.test.ts` — semantic cue
- `maintenance-修复-device-pair-validate-public-setup-urls` / 修复 device-pair validate public setup urls:
  - source: `path` [M] `extensions/device-pair/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/index.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/notify.test.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/notify.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/device-pair/pair-command-auth.test.ts` — semantic cue
- `maintenance-修复-device-pairing-validate-callerScopes-against` / 修复 device-pairing validate callerScopes against resolved token scopes o…:
  - source: `path` [M] `extensions/device-pair/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/index.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/notify.test.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/notify.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/device-pair/pair-command-auth.test.ts` — semantic cue
- `maintenance-修复-ios-harden-gateway-pairing-setup` / 修复 ios harden gateway pairing setup:
  - source: `path` [M] `src/infra/device-pairing.test.ts` — semantic cue
- `maintenance-修复-pairing-recover-malformed-pairing-state-files` / 修复 pairing recover malformed pairing state files:
  - source: `path` [M] `src/infra/device-pairing.test.ts` — semantic cue
- `public-contract-迁移-重构-trim-secret-contract-type-imports` / 迁移/重构 trim secret contract type imports:
  - source: `path` [M] `extensions/device-pair/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/index.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/notify.test.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/notify.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/device-pair/pair-command-auth.test.ts` — semantic cue
- `migration-迁移-重构-trim-workshop-helper-exports` / 迁移/重构 trim workshop helper exports:
  - source: `path` [M] `extensions/device-pair/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/index.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/notify.test.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/notify.ts` — semantic cue
  - source: `path` [M] `extensions/device-pair/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/device-pair/pair-command-auth.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/device-pair/openclaw.plugin.json` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/device-pair/index.test.ts` — test evidence
  - source: `path` [M] `extensions/device-pair/notify.test.ts` — test evidence
  - source: `path` [M] `extensions/device-pair/pair-command-auth.test.ts` — test evidence
  - source: `path` [M] `src/cli/qr-cli.test.ts` — test evidence
  - source: `path` [M] `src/infra/device-pairing.test.ts` — test evidence

### 路径证据

- 修改 `extensions/device-pair/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/device-pair/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/device-pair/notify.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/device-pair/notify.ts`：调整 notify（auth/pairing/security behavior）。
- 修改 `extensions/device-pair/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/device-pair/pair-command-auth.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/device-pair/pair-command-auth.ts`：调整 pair command auth（CLI/command behavior）。
- 修改 `src/cli/qr-cli.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/device-pairing.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/auth-integration-plugins/device-pair` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/auth-integration-plugins/device-pair/change-to-test.md` 的验证建议。
