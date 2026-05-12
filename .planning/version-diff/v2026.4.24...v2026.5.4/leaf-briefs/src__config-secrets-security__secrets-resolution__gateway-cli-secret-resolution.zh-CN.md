# src/config-secrets-security/secrets-resolution/gateway-cli-secret-resolution

## 1. 功能结论

**新增**：tts add per-agent voice overrides；**修改**：secretrefs resolve external channel contracts、Revert "fix: resolve tts secret refs for local infer"、resolve tts secret refs for local infer、scope web provider ownership to plugin index；**迁移/重构**：trim cli helper type exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：Gateway 使用者、配置/安全相关调用方
- 变更形态：行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 2

## 3. 功能级详细差异

### 修复 resolve tts secret refs for local infer

修复 resolve tts secret refs for local infer

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/command-secret-resolution.coverage.test.ts src/cli/command-secret-targets.test.ts src/cli/message-secret-scope.test.ts src/cli/secrets-cli.test.ts`。
- 置信度：`high`

### 修复 scope web provider ownership to plugin index

修复 scope web provider ownership to plugin index

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/command-secret-resolution.coverage.test.ts src/cli/command-secret-targets.test.ts src/cli/message-secret-scope.test.ts src/cli/secrets-cli.test.ts`。
- 置信度：`high`

### 修复 secretrefs resolve external channel contracts

修复 secretrefs：resolve external channel contracts

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/command-secret-resolution.coverage.test.ts src/cli/command-secret-targets.test.ts src/cli/message-secret-scope.test.ts src/cli/secrets-cli.test.ts`。
- 置信度：`high`

### 修改 Revert "fix: resolve tts secret refs for local infer"

修改 Revert "fix: resolve tts secret refs for local infer"

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/command-secret-resolution.coverage.test.ts src/cli/command-secret-targets.test.ts src/cli/message-secret-scope.test.ts src/cli/secrets-cli.test.ts`。
- 置信度：`high`

### 新增 tts add per-agent voice overrides

新增 tts：add per-agent voice overrides

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/command-secret-resolution.coverage.test.ts src/cli/command-secret-targets.test.ts src/cli/message-secret-scope.test.ts src/cli/secrets-cli.test.ts`。
- 置信度：`high`

### 迁移/重构 trim cli helper type exports

迁移/重构 trim cli helper type exports

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/command-secret-resolution.coverage.test.ts src/cli/command-secret-targets.test.ts src/cli/message-secret-scope.test.ts src/cli/secrets-cli.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 command secret gateway、command secret targets，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/command-secret-resolution.coverage.test.ts src/cli/command-secret-targets.test.ts src/cli/message-secret-scope.test.ts src/cli/secrets-cli.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/command-secret-resolution.coverage.test.ts src/cli/command-secret-targets.test.ts src/cli/message-secret-scope.test.ts src/cli/secrets-cli.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/gateway-cli-secret-resolution`
- Changed path count: `2`
- Status counts: `修改 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `2` files, `+18` / `-2`

### 归纳依据

- 主要落点：gateway runtime、CLI/command behavior。
- 建议优先验证：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/command-secret-resolution.coverage.test.ts src/cli/command-secret-targets.test.ts src/cli/message-secret-scope.test.ts src/cli/secrets-cli.test.ts`。
- 相关 commit 主题：fix(secretrefs): resolve external channel contracts；refactor: trim cli helper type exports；Revert "fix: resolve tts secret refs for local infer"；fix: resolve tts secret refs for local infer；fix: scope web provider ownership to plugin index；feat(tts): add per-agent voice overrides

### Dimension evidence

- `user-visible-修复-resolve-tts-secret-refs-for-local-infer` / 修复 resolve tts secret refs for local infer:
  - source: `path` [M] `src/cli/command-secret-gateway.ts` — semantic cue
  - source: `path` [M] `src/cli/command-secret-targets.ts` — semantic cue
- `maintenance-修复-scope-web-provider-ownership-to-plugin-index` / 修复 scope web provider ownership to plugin index:
  - source: `path` [M] `src/cli/command-secret-gateway.ts`
  - source: `path` [M] `src/cli/command-secret-targets.ts`
- `public-contract-修复-secretrefs-resolve-external-channel-contracts` / 修复 secretrefs resolve external channel contracts:
  - source: `path` [M] `src/cli/command-secret-gateway.ts`
  - source: `path` [M] `src/cli/command-secret-targets.ts`
- `user-visible-修改-Revert-fix-resolve-tts-secret-refs-for-loc` / 修改 Revert "fix: resolve tts secret refs for local infer":
  - source: `path` [M] `src/cli/command-secret-gateway.ts` — semantic cue
  - source: `path` [M] `src/cli/command-secret-targets.ts` — semantic cue
- `user-visible-新增-tts-add-per-agent-voice-overrides` / 新增 tts add per-agent voice overrides:
  - source: `path` [M] `src/cli/command-secret-gateway.ts`
  - source: `path` [M] `src/cli/command-secret-targets.ts`
- `migration-迁移-重构-trim-cli-helper-type-exports` / 迁移/重构 trim cli helper type exports:
  - source: `path` [M] `src/cli/command-secret-gateway.ts` — semantic cue
  - source: `path` [M] `src/cli/command-secret-targets.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/cli/command-secret-gateway.ts` — contract evidence
  - source: `path` [M] `src/cli/command-secret-targets.ts` — contract evidence

### 路径证据

- 修改 `src/cli/command-secret-gateway.ts`：调整 command secret gateway（gateway runtime）。
- 修改 `src/cli/command-secret-targets.ts`：调整 command secret targets（CLI/command behavior）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/config-secrets-security/secrets-resolution/gateway-cli-secret-resolution` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/secrets-resolution/gateway-cli-secret-resolution/change-to-test.md` 的验证建议。
