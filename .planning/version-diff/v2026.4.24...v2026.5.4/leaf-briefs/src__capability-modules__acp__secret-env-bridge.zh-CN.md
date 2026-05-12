# src/capability-modules/acp/secret-env-bridge

## 1. 功能结论

**修改**：acp allow manual spawn with dispatch paused；**迁移/重构**：hide acp secret file limit；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 4

## 3. 功能级详细差异

### 修复 acp allow manual spawn with dispatch paused

修复 acp：allow manual spawn with dispatch paused

- 验证提示：优先运行 `pnpm test -- src/acp/secret-file.test.ts src/acp/policy.test.ts`。
- 置信度：`high`

### 迁移/重构 hide acp secret file limit

迁移/重构 hide acp secret file limit

- 验证提示：优先运行 `pnpm test -- src/acp/secret-file.test.ts src/acp/policy.test.ts`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 policy regression/contract coverage、secret file regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/acp/secret-file.test.ts src/acp/policy.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/acp/secret-file.test.ts src/acp/policy.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/secret-env-bridge`
- Changed path count: `4`
- Status counts: `修改 4`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `4` files, `+35` / `-6`

### 归纳依据

- 主要落点：model/thinking policy、auth/pairing/security behavior。
- 新增或暴露的关键符号包括：`resolveAcpExplicitTurnPolicyError`, `MAX_SECRET_FILE_BYTES`。
- 建议优先验证：优先运行 `pnpm test -- src/acp/secret-file.test.ts src/acp/policy.test.ts`。
- 相关 commit 主题：refactor: hide acp secret file limit；fix(acp): allow manual spawn with dispatch paused

### Dimension evidence

- `maintenance-修复-acp-allow-manual-spawn-with-dispatch-paused` / 修复 acp allow manual spawn with dispatch paused:
  - source: `path` [M] `src/acp/policy.test.ts` — semantic cue
  - source: `path` [M] `src/acp/policy.ts` — semantic cue
  - source: `path` [M] `src/acp/secret-file.test.ts` — semantic cue
  - source: `path` [M] `src/acp/secret-file.ts` — semantic cue
- `migration-迁移-重构-hide-acp-secret-file-limit` / 迁移/重构 hide acp secret file limit:
  - source: `path` [M] `src/acp/policy.test.ts` — semantic cue
  - source: `path` [M] `src/acp/policy.ts` — semantic cue
  - source: `path` [M] `src/acp/secret-file.test.ts` — semantic cue
  - source: `path` [M] `src/acp/secret-file.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/acp/policy.test.ts` — test evidence
  - source: `path` [M] `src/acp/secret-file.test.ts` — test evidence

### 路径证据

- 修改 `src/acp/policy.test.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `src/acp/policy.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `src/acp/secret-file.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/acp/secret-file.ts`：调整 secret file（auth/pairing/security behavior）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/capability-modules/acp/secret-env-bridge` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/acp/secret-env-bridge/change-to-test.md` 的验证建议。
