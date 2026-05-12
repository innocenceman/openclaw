# src/cli-commands/program-registration

## 1. 功能结论

**修改**：cli bound sessions list output、plugins recover source-only install shadows、cli avoid local preload for gateway-owned message actions、[codex] Fix message CLI plugin preload failure exit；**迁移/重构**：unify lazy import loaders；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 4、修改 44

## 3. 功能级详细差异

### 优化 gateway skip force port scan when free

优化 gateway：skip force port scan when free

- 验证提示：优先运行 `| pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 优化 reduce gateway startup overhead

优化 reduce gateway startup overhead

- 验证提示：优先运行 `| pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 bound message CLI shutdown hooks

修复 bound message CLI shutdown hooks

- 验证提示：优先运行 `| pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 cli avoid local preload for gateway-owned message actions

修复 cli：avoid local preload for gateway-owned message actions

- 验证提示：优先运行 `| pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 cli bound sessions list output

修复 cli：bound sessions list output

- 验证提示：优先运行 `| pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 keep legacy config repair in doctor

修复 keep legacy config repair in doctor

- 验证提示：优先运行 `| pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins allow Discord install repair

修复 plugins：allow Discord install repair

- 验证提示：优先运行 `| pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins recover source-only install shadows

修复 plugins：recover source-only install shadows

- 验证提示：优先运行 `| pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修改 [codex] Fix message CLI plugin preload failure exit

修改 [codex] Fix message CLI plugin preload failure exit

- 验证提示：优先运行 `| pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 unify lazy import loaders

迁移/重构 unify lazy import loaders

- 验证提示：优先运行 `| pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 argv regression/contract coverage、program.force regression/contract coverage、program.nodes basic.e2e regression/contract coverage、program.smoke regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/program-registration`
- Changed path count: `48`
- Status counts: `新增 4、修改 44`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `48` files, `+2075` / `-97`

### 归纳依据

- 主要落点：CLI/command behavior。
- 新增或暴露的关键符号包括：`ROOT_COMMAND_DESCRIPTORS`, `KNOWN_ROOT_COMMANDS`, `ROOT_COMMANDS_WITH_SUBCOMMANDS`, `isHelpOrVersionInvocation`, `runCrestodian`, `buildFallbackArgv`, `assertSafeCommandDescriptorName`, `resolveActionArgs`, `isDefaultOptionValue`, `appendOptionValue`。
- 建议优先验证：优先运行 `| pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix(cli): bound sessions list output；fix(plugins): recover source-only install shadows；fix(cli): avoid local preload for gateway-owned message actions；[codex] Fix message CLI plugin preload failure exit；perf(gateway): skip force port scan when free；perf: reduce gateway startup overhead；fix(plugins): allow Discord install repair；fix: keep legacy config repair in doctor

### Dimension evidence

- `maintenance-优化-gateway-skip-force-port-scan-when-free` / 优化 gateway skip force port scan when free:
  - source: `path` [M] `src/cli/program.force.test.ts` — semantic cue
- `maintenance-优化-reduce-gateway-startup-overhead` / 优化 reduce gateway startup overhead:
  - source: `path` [A] `src/cli/program/parent-default-help.test.ts`
  - source: `path` [A] `src/cli/program/parent-default-help.ts`
  - source: `path` [A] `src/cli/program/register.crestodian.ts`
  - source: `path` [M] `src/cli/argv.test.ts`
  - source: `path` [M] `src/cli/argv.ts`
  - source: `path` [M] `src/cli/program.force.test.ts`
- `maintenance-修复-bound-message-CLI-shutdown-hooks` / 修复 bound message CLI shutdown hooks:
  - source: `path` [M] `src/cli/argv.test.ts` — semantic cue
  - source: `path` [M] `src/cli/argv.ts` — semantic cue
  - source: `path` [M] `src/cli/program.force.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.nodes-basic.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.smoke.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.test-mocks.ts` — semantic cue
- `maintenance-修复-cli-avoid-local-preload-for-gateway-owned-me` / 修复 cli avoid local preload for gateway-owned message actions:
  - source: `path` [M] `src/cli/argv.test.ts` — semantic cue
  - source: `path` [M] `src/cli/argv.ts` — semantic cue
  - source: `path` [M] `src/cli/program.force.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.nodes-basic.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.smoke.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.test-mocks.ts` — semantic cue
- `maintenance-修复-cli-bound-sessions-list-output` / 修复 cli bound sessions list output:
  - source: `path` [M] `src/cli/argv.test.ts` — semantic cue
  - source: `path` [M] `src/cli/argv.ts` — semantic cue
  - source: `path` [M] `src/cli/program.force.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.nodes-basic.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.smoke.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.test-mocks.ts` — semantic cue
- `maintenance-修复-keep-legacy-config-repair-in-doctor` / 修复 keep legacy config repair in doctor:
  - source: `path` [M] `src/cli/program/config-guard.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program/config-guard.ts` — semantic cue
  - source: `path` [M] `src/cli/program/routed-command-definitions.ts` — semantic cue
- `maintenance-修复-plugins-allow-Discord-install-repair` / 修复 plugins allow Discord install repair:
  - source: `path` [A] `src/cli/program/parent-default-help.test.ts`
  - source: `path` [A] `src/cli/program/parent-default-help.ts`
  - source: `path` [A] `src/cli/program/register.crestodian.ts`
  - source: `path` [M] `src/cli/argv.test.ts`
  - source: `path` [M] `src/cli/argv.ts`
  - source: `path` [M] `src/cli/program.force.test.ts`
- `maintenance-修复-plugins-recover-source-only-install-shadows` / 修复 plugins recover source-only install shadows:
  - source: `path` [A] `src/cli/program/parent-default-help.test.ts`
  - source: `path` [A] `src/cli/program/parent-default-help.ts`
  - source: `path` [A] `src/cli/program/register.crestodian.ts`
  - source: `path` [M] `src/cli/argv.test.ts`
  - source: `path` [M] `src/cli/argv.ts`
  - source: `path` [M] `src/cli/program.force.test.ts`
- `maintenance-修改-codex-Fix-message-CLI-plugin-preload-failu` / 修改 [codex] Fix message CLI plugin preload failure exit:
  - source: `path` [M] `src/cli/argv.test.ts` — semantic cue
  - source: `path` [M] `src/cli/argv.ts` — semantic cue
  - source: `path` [M] `src/cli/program.force.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.nodes-basic.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.smoke.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.test-mocks.ts` — semantic cue
- `migration-迁移-重构-unify-lazy-import-loaders` / 迁移/重构 unify lazy import loaders:
  - source: `path` [M] `src/cli/argv.test.ts` — semantic cue
  - source: `path` [M] `src/cli/argv.ts` — semantic cue
  - source: `path` [M] `src/cli/program.force.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.nodes-basic.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.smoke.test.ts` — semantic cue
  - source: `path` [M] `src/cli/program.test-mocks.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/cli/argv.test.ts` — test evidence
  - source: `path` [M] `src/cli/program.force.test.ts` — test evidence
  - source: `path` [M] `src/cli/program.nodes-basic.e2e.test.ts` — test evidence
  - source: `path` [M] `src/cli/program.smoke.test.ts` — test evidence
  - source: `path` [M] `src/cli/program/action-reparse.test.ts` — test evidence
  - source: `path` [M] `src/cli/program/command-registry.test.ts` — test evidence

### 路径证据

- 新增 `src/cli/program/parent-default-help.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/cli/program/parent-default-help.ts`：调整 parent default help（CLI/command behavior）。
- 新增 `src/cli/program/register.crestodian.ts`：调整 register.crestodian（CLI/command behavior）。
- 新增 `src/cli/program/register.migrate.ts`：调整 register.migrate（CLI/command behavior）。
- 修改 `src/cli/argv.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/argv.ts`：调整 argv（CLI/command behavior）。
- 修改 `src/cli/program.force.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/program.nodes-basic.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/program.smoke.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/program.test-mocks.ts`：调整 program.test mocks（CLI/command behavior）。
- 修改 `src/cli/program/action-reparse.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/program/action-reparse.ts`：调整 action reparse（CLI/command behavior）。
- 修改 `src/cli/program/command-descriptor-utils.ts`：调整 command descriptor utils（CLI/command behavior）。
- 修改 `src/cli/program/command-group-descriptors.ts`：调整 command group descriptors（CLI/command behavior）。
- 修改 `src/cli/program/command-registry-core.ts`：调整 command registry core（CLI/command behavior）。
- 修改 `src/cli/program/command-registry.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 32 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/cli-commands/program-registration` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/program-registration/change-to-test.md` 的验证建议。
