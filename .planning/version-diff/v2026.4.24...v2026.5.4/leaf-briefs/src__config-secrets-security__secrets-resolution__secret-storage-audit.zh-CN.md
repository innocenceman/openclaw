# src/config-secrets-security/secrets-resolution/secret-storage-audit

## 1. 功能结论

**修改**：secrets preserve auth profile key refs during provider scrub；**迁移/重构**：remove dead private helpers、config migrate plugin config access；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：Gateway 使用者、配置/安全相关调用方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 3

## 3. 功能级详细差异

### 修复 secrets preserve auth profile key refs during provider scrub

修复 secrets：preserve auth profile key refs during provider scrub

- 验证提示：优先运行 `pnpm test -- src/secrets/apply.test.ts src/secrets/audit.test.ts src/secrets/configure.test.ts src/secrets/path-utils.test.ts`。
- 置信度：`high`

### 迁移/重构 config migrate plugin config access

迁移/重构 config：migrate plugin config access

- 验证提示：优先运行 `pnpm test -- src/secrets/apply.test.ts src/secrets/audit.test.ts src/secrets/configure.test.ts src/secrets/path-utils.test.ts`。
- 置信度：`high`

### 迁移/重构 remove dead private helpers

迁移/重构 remove dead private helpers

- 验证提示：优先运行 `pnpm test -- src/secrets/apply.test.ts src/secrets/audit.test.ts src/secrets/configure.test.ts src/secrets/path-utils.test.ts`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 apply regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/secrets/apply.test.ts src/secrets/audit.test.ts src/secrets/configure.test.ts src/secrets/path-utils.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/secrets/apply.test.ts src/secrets/audit.test.ts src/secrets/configure.test.ts src/secrets/path-utils.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-storage-audit`
- Changed path count: `3`
- Status counts: `修改 3`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `3` files, `+79` / `-10`

### 归纳依据

- 主要落点：auth/pairing/security behavior、session/state handling。
- 建议优先验证：优先运行 `pnpm test -- src/secrets/apply.test.ts src/secrets/audit.test.ts src/secrets/configure.test.ts src/secrets/path-utils.test.ts`。
- 相关 commit 主题：fix(secrets): preserve auth profile key refs during provider scrub；refactor: remove dead private helpers；refactor(config): migrate plugin config access

### Dimension evidence

- `maintenance-修复-secrets-preserve-auth-profile-key-refs-durin` / 修复 secrets preserve auth profile key refs during provider scrub:
  - source: `path` [M] `src/secrets/apply.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/apply.ts` — semantic cue
  - source: `path` [M] `src/secrets/auth-store-paths.ts` — semantic cue
- `migration-迁移-重构-config-migrate-plugin-config-access` / 迁移/重构 config migrate plugin config access:
  - source: `path` [M] `src/secrets/apply.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/apply.ts` — semantic cue
  - source: `path` [M] `src/secrets/auth-store-paths.ts` — semantic cue
- `migration-迁移-重构-remove-dead-private-helpers` / 迁移/重构 remove dead private helpers:
  - source: `path` [M] `src/secrets/apply.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/apply.ts` — semantic cue
  - source: `path` [M] `src/secrets/auth-store-paths.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/secrets/apply.test.ts` — test evidence

### 路径证据

- 修改 `src/secrets/apply.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/secrets/apply.ts`：调整 apply（auth/pairing/security behavior）。
- 修改 `src/secrets/auth-store-paths.ts`：调整 auth store paths（session/state handling）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/config-secrets-security/secrets-resolution/secret-storage-audit` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-storage-audit/change-to-test.md` 的验证建议。
