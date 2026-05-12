# src/config-secrets-security/legacy-migration

## 1. 功能结论

**修改**：doctor persist group visible reply default、Stop heartbeat tool turns from asking for HEARTBEAT_OK、config align legacy key validation expectations、gateway defer doctor legacy checks；**迁移/重构**：keep legacy secretref migration in doctor、trim legacy config exports、remove unused dead code、remove unused test helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：Gateway 使用者、配置/安全相关调用方
- 变更形态：删除或废弃旧入口、测试/回归边界变化、行为调整
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：修改 4、删除 1

## 3. 功能级详细差异

### 优化 gateway defer doctor legacy checks

优化 gateway：defer doctor legacy checks

- 验证提示：优先运行 `| pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 doctor persist group visible reply default

修复 doctor：persist group visible reply default

- 验证提示：优先运行 `| pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 preserve legacy runtime model allowlists

修复 preserve legacy runtime model allowlists

- 验证提示：优先运行 `| pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK

修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK

- 验证提示：优先运行 `| pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 config align legacy key validation expectations

测试覆盖 config：align legacy key validation expectations

- 验证提示：优先运行 `| pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 keep legacy secretref migration in doctor

迁移/重构 keep legacy secretref migration in doctor

- 验证提示：优先运行 `| pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 remove dead private helpers

迁移/重构 remove dead private helpers

- 验证提示：优先运行 `| pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 remove unused dead code

迁移/重构 remove unused dead code

- 验证提示：优先运行 `| pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 remove unused test helpers

迁移/重构 remove unused test helpers

- 验证提示：优先运行 `| pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 trim legacy config exports

迁移/重构 trim legacy config exports

- 验证提示：优先运行 `| pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 doctor legacy config.migrations regression/contract coverage、legacy config detection.test support、legacy migrate.test helpers、legacy.shared，需要按契约边界审查。

- 验证提示：优先运行 `| pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 doctor legacy config.migrations regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `legacy migrate.test helpers`（`src/config/legacy-migrate.test-helpers.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/legacy-migration`
- Changed path count: `5`
- Status counts: `修改 4、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `5` files, `+118` / `-112`

### 归纳依据

- 主要落点：configuration/schema、CLI/command behavior。
- 建议优先验证：优先运行 `| pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：refactor: keep legacy secretref migration in doctor；fix(doctor): persist group visible reply default；Stop heartbeat tool turns from asking for HEARTBEAT_OK；test(config): align legacy key validation expectations；perf(gateway): defer doctor legacy checks；fix: preserve legacy runtime model allowlists；refactor: trim legacy config exports；refactor: remove unused dead code

### Dimension evidence

- `maintenance-优化-gateway-defer-doctor-legacy-checks` / 优化 gateway defer doctor legacy checks:
  - source: `path` [M] `src/commands/doctor-legacy-config.migrations.test.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-config-detection.test-support.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-migrate.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.shared.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.ts` — semantic cue
- `maintenance-修复-doctor-persist-group-visible-reply-default` / 修复 doctor persist group visible reply default:
  - source: `path` [M] `src/commands/doctor-legacy-config.migrations.test.ts` — semantic cue
- `runtime-behavior-修复-preserve-legacy-runtime-model-allowlists` / 修复 preserve legacy runtime model allowlists:
  - source: `path` [M] `src/commands/doctor-legacy-config.migrations.test.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-config-detection.test-support.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-migrate.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.shared.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.ts` — semantic cue
- `maintenance-修改-Stop-heartbeat-tool-turns-from-asking-for-HE` / 修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK:
  - source: `path` [M] `src/commands/doctor-legacy-config.migrations.test.ts`
  - source: `path` [M] `src/config/legacy-config-detection.test-support.ts`
  - source: `path` [M] `src/config/legacy.shared.ts`
  - source: `path` [D] `src/config/legacy-migrate.test-helpers.ts`
- `tests-docs-测试覆盖-config-align-legacy-key-validation-expecta` / 测试覆盖 config align legacy key validation expectations:
  - source: `path` [M] `src/commands/doctor-legacy-config.migrations.test.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-config-detection.test-support.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-migrate.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.shared.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.ts` — semantic cue
- `migration-迁移-重构-keep-legacy-secretref-migration-in-doctor` / 迁移/重构 keep legacy secretref migration in doctor:
  - source: `path` [M] `src/commands/doctor-legacy-config.migrations.test.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-config-detection.test-support.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-migrate.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.shared.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.ts` — semantic cue
- `migration-迁移-重构-remove-dead-private-helpers` / 迁移/重构 remove dead private helpers:
  - source: `path` [M] `src/commands/doctor-legacy-config.migrations.test.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-config-detection.test-support.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-migrate.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.shared.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.ts` — semantic cue
- `migration-迁移-重构-remove-unused-dead-code` / 迁移/重构 remove unused dead code:
  - source: `path` [M] `src/commands/doctor-legacy-config.migrations.test.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-config-detection.test-support.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-migrate.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.shared.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.ts` — semantic cue
- `migration-迁移-重构-remove-unused-test-helpers` / 迁移/重构 remove unused test helpers:
  - source: `path` [M] `src/commands/doctor-legacy-config.migrations.test.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-config-detection.test-support.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-migrate.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.shared.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.ts` — semantic cue
- `migration-迁移-重构-trim-legacy-config-exports` / 迁移/重构 trim legacy config exports:
  - source: `path` [M] `src/commands/doctor-legacy-config.migrations.test.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-config-detection.test-support.ts` — semantic cue
  - source: `path` [M] `src/config/legacy-migrate.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.shared.ts` — semantic cue
  - source: `path` [M] `src/config/legacy.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/commands/doctor-legacy-config.migrations.test.ts` — contract evidence
  - source: `path` [M] `src/config/legacy-config-detection.test-support.ts` — contract evidence
  - source: `path` [M] `src/config/legacy-migrate.test-helpers.ts` — contract evidence
  - source: `path` [M] `src/config/legacy.shared.ts` — contract evidence
  - source: `path` [M] `src/config/legacy.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/commands/doctor-legacy-config.migrations.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/config/legacy-migrate.test-helpers.ts`

### 路径证据

- 修改 `src/commands/doctor-legacy-config.migrations.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/config/legacy-config-detection.test-support.ts`：调整 legacy config detection.test support（configuration/schema）。
- 修改 `src/config/legacy.shared.ts`：调整 legacy.shared（configuration/schema）。
- 修改 `src/config/legacy.ts`：调整 legacy（configuration/schema）。
- 删除 `src/config/legacy-migrate.test-helpers.ts`：移除旧的 configuration/schema 文件；需要确认没有调用方继续依赖这个路径。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/config-secrets-security/legacy-migration` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/legacy-migration/change-to-test.md` 的验证建议。
