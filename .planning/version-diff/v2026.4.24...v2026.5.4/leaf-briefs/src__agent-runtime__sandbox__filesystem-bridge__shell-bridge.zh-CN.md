# src/agent-runtime/sandbox/filesystem-bridge/shell-bridge

## 1. 功能结论

**迁移/重构**：delete unused test helper code、trim agent test helper exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 1

## 3. 功能级详细差异

### 迁移/重构 delete unused test helper code

迁移/重构 delete unused test helper code

- 验证提示：优先运行 `pnpm test -- src/agents/sandbox/fs-bridge.shell.test.ts`。
- 置信度：`high`

### 迁移/重构 trim agent test helper exports

迁移/重构 trim agent test helper exports

- 验证提示：优先运行 `pnpm test -- src/agents/sandbox/fs-bridge.shell.test.ts`。
- 置信度：`high`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/agents/sandbox/fs-bridge.shell.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/filesystem-bridge/shell-bridge`
- Changed path count: `1`
- Status counts: `修改 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `1` files, `+1` / `-5`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`installDockerReadMock`。
- 建议优先验证：优先运行 `pnpm test -- src/agents/sandbox/fs-bridge.shell.test.ts`。
- 相关 commit 主题：refactor: delete unused test helper code；refactor: trim agent test helper exports

### Dimension evidence

- `migration-迁移-重构-delete-unused-test-helper-code` / 迁移/重构 delete unused test helper code:
  - source: `path` [M] `src/agents/sandbox/fs-bridge.test-helpers.ts` — semantic cue
- `migration-迁移-重构-trim-agent-test-helper-exports` / 迁移/重构 trim agent test helper exports:
  - source: `path` [M] `src/agents/sandbox/fs-bridge.test-helpers.ts` — semantic cue

### 路径证据

- 修改 `src/agents/sandbox/fs-bridge.test-helpers.ts`：调整 fs bridge.test helpers（agent runtime）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/sandbox/filesystem-bridge/shell-bridge` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/sandbox/filesystem-bridge/shell-bridge/change-to-test.md` 的验证建议。
