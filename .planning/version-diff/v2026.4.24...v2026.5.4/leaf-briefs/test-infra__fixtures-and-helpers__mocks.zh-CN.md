# test-infra/fixtures-and-helpers/mocks

## 1. 功能结论

**修改**：Harden Codex harness control surfaces、stabilize release validation、stabilize current main gates、agent apply configured fast mode to embedded runs；**迁移/重构**：trim test helper exports、expose SDK test helper subpaths、config migrate plugin config access；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`build`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 2

## 3. 功能级详细差异

### 修复 agent apply configured fast mode to embedded runs

修复 agent：apply configured fast mode to embedded runs

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修复 agents clean up local Claude stdio runs

修复 agents：clean up local Claude stdio runs

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修复 keep gateway model probes raw

修复 keep gateway model probes raw

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修复 models keep user model switches strict

修复 models：keep user model switches strict

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修复 stabilize current main gates

修复 stabilize current main gates

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修复 stabilize release validation

修复 stabilize release validation

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修改 Harden Codex harness control surfaces

修改 Harden Codex harness control surfaces

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 迁移/重构 config migrate plugin config access

迁移/重构 config：migrate plugin config access

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 迁移/重构 expose SDK test helper subpaths

迁移/重构 expose SDK test helper subpaths

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 迁移/重构 trim test helper exports

迁移/重构 trim test helper exports

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 agent regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/mocks`
- Changed path count: `2`
- Status counts: `修改 2`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `2` files, `+239` / `-7`

### 归纳依据

- 主要落点：CLI/command behavior、implementation。
- 新增或暴露的关键符号包括：`mockModelCatalogOnce`。
- 建议优先验证：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 相关 commit 主题：Harden Codex harness control surfaces；fix: stabilize release validation；fix: stabilize current main gates；refactor: trim test helper exports；fix(agent): apply configured fast mode to embedded runs；fix: keep gateway model probes raw；fix(agents): clean up local Claude stdio runs；refactor: expose SDK test helper subpaths

### Dimension evidence

- `maintenance-修复-agent-apply-configured-fast-mode-to-embedded` / 修复 agent apply configured fast mode to embedded runs:
  - source: `path` [M] `src/commands/agent.test.ts` — semantic cue
- `maintenance-修复-agents-clean-up-local-Claude-stdio-runs` / 修复 agents clean up local Claude stdio runs:
  - source: `path` [M] `src/commands/agent.test.ts`
  - source: `path` [M] `test/mocks/baileys.ts`
- `maintenance-修复-keep-gateway-model-probes-raw` / 修复 keep gateway model probes raw:
  - source: `path` [M] `src/commands/agent.test.ts`
  - source: `path` [M] `test/mocks/baileys.ts`
- `maintenance-修复-models-keep-user-model-switches-strict` / 修复 models keep user model switches strict:
  - source: `path` [M] `src/commands/agent.test.ts`
  - source: `path` [M] `test/mocks/baileys.ts`
- `maintenance-修复-stabilize-current-main-gates` / 修复 stabilize current main gates:
  - source: `path` [M] `src/commands/agent.test.ts`
  - source: `path` [M] `test/mocks/baileys.ts`
- `maintenance-修复-stabilize-release-validation` / 修复 stabilize release validation:
  - source: `path` [M] `src/commands/agent.test.ts`
  - source: `path` [M] `test/mocks/baileys.ts`
- `maintenance-修改-Harden-Codex-harness-control-surfaces` / 修改 Harden Codex harness control surfaces:
  - source: `path` [M] `src/commands/agent.test.ts`
  - source: `path` [M] `test/mocks/baileys.ts`
- `migration-迁移-重构-config-migrate-plugin-config-access` / 迁移/重构 config migrate plugin config access:
  - source: `path` [M] `src/commands/agent.test.ts` — semantic cue
  - source: `path` [M] `test/mocks/baileys.ts` — semantic cue
- `migration-迁移-重构-expose-SDK-test-helper-subpaths` / 迁移/重构 expose SDK test helper subpaths:
  - source: `path` [M] `src/commands/agent.test.ts` — semantic cue
  - source: `path` [M] `test/mocks/baileys.ts` — semantic cue
- `migration-迁移-重构-trim-test-helper-exports` / 迁移/重构 trim test helper exports:
  - source: `path` [M] `src/commands/agent.test.ts` — semantic cue
  - source: `path` [M] `test/mocks/baileys.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/commands/agent.test.ts` — test evidence

### 路径证据

- 修改 `src/commands/agent.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `test/mocks/baileys.ts`：调整 baileys（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `test-infra/fixtures-and-helpers/mocks` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/test-infra/fixtures-and-helpers/mocks/change-to-test.md` 的验证建议。
