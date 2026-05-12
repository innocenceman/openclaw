# src/agent-runtime/sandbox/backend-policy

## 1. 功能结论

**新增**：workspace add skipOptionalBootstrapFiles config option；**修改**：sandbox support Windows drive-letter bind sources、sandbox cover registry migration、sandbox move registry file migration to doctor、sandbox harden sharded registry storage；**迁移/重构**：trim internal helper exports、remove dead private helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 14

## 3. 功能级详细差异

### 优化 sandbox shard container registry into per-entry files to remove cros…

优化 sandbox：shard container registry into per-entry files to remove cross-session lock contention

- 验证提示：优先运行 `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 Found one reliability bug: the new Docker-daemon-unavailable bran

修复 Found one reliability bug: the new Docker-daemon-unavailable bran

- 验证提示：优先运行 `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 sandbox harden sharded registry storage

修复 sandbox：harden sharded registry storage

- 验证提示：优先运行 `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 sandbox move registry file migration to doctor

修复 sandbox：move registry file migration to doctor

- 验证提示：优先运行 `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 sandbox remove registry helper generics

修复 sandbox：remove registry helper generics

- 验证提示：优先运行 `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 sandbox support Windows drive-letter bind sources

修复 sandbox：support Windows drive-letter bind sources

- 验证提示：优先运行 `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`；`pnpm build`。
- 置信度：`high`

### 新增 workspace add skipOptionalBootstrapFiles config option

新增 workspace：add skipOptionalBootstrapFiles config option

- 验证提示：优先运行 `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`；`pnpm build`。
- 置信度：`high`

### 测试覆盖 sandbox cover registry migration

测试覆盖 sandbox：cover registry migration

- 验证提示：优先运行 `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 remove dead private helpers

迁移/重构 remove dead private helpers

- 验证提示：优先运行 `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim internal helper exports

迁移/重构 trim internal helper exports

- 验证提示：优先运行 `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`；`pnpm build`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 sandbox.resolve Sandbox Context regression/contract coverage、manage regression/contract coverage、registry regression/contract coverage、validate sandbox security regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`；`pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/backend-policy`
- Changed path count: `14`
- Status counts: `修改 14`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `14` files, `+550` / `-167`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`SANDBOX_CONTAINERS_DIR`, `SANDBOX_BROWSERS_DIR`, `shardedEntryFilePath`, `legacyRegistryTargets`, `BLOCKED_HOST_PATHS`, `parseBindSourcePath`, `parseBindTargetPath`, `normalizeHostPath`, `getBlockedReasonForSourcePath`。
- 建议优先验证：优先运行 `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`；`pnpm build`。
- 相关 commit 主题：fix(sandbox): support Windows drive-letter bind sources；test(sandbox): cover registry migration；fix(sandbox): move registry file migration to doctor；fix(sandbox): harden sharded registry storage；fix(sandbox): remove registry helper generics；perf(sandbox): shard container registry into per-entry files to remove cross-session lock contention；refactor: trim internal helper exports；feat(workspace): add skipOptionalBootstrapFiles config option

### Dimension evidence

- `maintenance-优化-sandbox-shard-container-registry-into-per-en` / 优化 sandbox shard container registry into per-entry files to remove cros…:
  - source: `path` [M] `src/agents/sandbox.resolveSandboxContext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/config.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/constants.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/context.ts` — semantic cue
- `maintenance-修复-Found-one-reliability-bug-the-new-Docker-da` / 修复 Found one reliability bug: the new Docker-daemon-unavailable bran:
  - source: `path` [M] `src/agents/sandbox.resolveSandboxContext.test.ts`
  - source: `path` [M] `src/agents/sandbox.ts`
  - source: `path` [M] `src/agents/sandbox/backend.ts`
- `maintenance-修复-sandbox-harden-sharded-registry-storage` / 修复 sandbox harden sharded registry storage:
  - source: `path` [M] `src/agents/sandbox.resolveSandboxContext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/config.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/constants.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/context.ts` — semantic cue
- `maintenance-修复-sandbox-move-registry-file-migration-to-doct` / 修复 sandbox move registry file migration to doctor:
  - source: `path` [M] `src/agents/sandbox.resolveSandboxContext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/config.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/constants.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/context.ts` — semantic cue
- `maintenance-修复-sandbox-remove-registry-helper-generics` / 修复 sandbox remove registry helper generics:
  - source: `path` [M] `src/agents/sandbox.resolveSandboxContext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/config.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/constants.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/context.ts` — semantic cue
- `maintenance-修复-sandbox-support-Windows-drive-letter-bind-so` / 修复 sandbox support Windows drive-letter bind sources:
  - source: `path` [M] `src/agents/sandbox.resolveSandboxContext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/config.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/constants.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/context.ts` — semantic cue
- `maintenance-新增-workspace-add-skipOptionalBootstrapFiles-con` / 新增 workspace add skipOptionalBootstrapFiles config option:
  - source: `path` [M] `src/agents/sandbox/config.ts` — semantic cue
- `tests-docs-测试覆盖-sandbox-cover-registry-migration` / 测试覆盖 sandbox cover registry migration:
  - source: `path` [M] `src/agents/sandbox.resolveSandboxContext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/config.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/constants.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/context.ts` — semantic cue
- `migration-迁移-重构-remove-dead-private-helpers` / 迁移/重构 remove dead private helpers:
  - source: `path` [M] `src/agents/sandbox.resolveSandboxContext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/config.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/constants.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/context.ts` — semantic cue
- `migration-迁移-重构-trim-internal-helper-exports` / 迁移/重构 trim internal helper exports:
  - source: `path` [M] `src/agents/sandbox.resolveSandboxContext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/config.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/constants.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/context.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/sandbox.resolveSandboxContext.test.ts` — test evidence
  - source: `path` [M] `src/agents/sandbox/manage.test.ts` — test evidence
  - source: `path` [M] `src/agents/sandbox/registry.test.ts` — test evidence
  - source: `path` [M] `src/agents/sandbox/validate-sandbox-security.test.ts` — test evidence

### 路径证据

- 修改 `src/agents/sandbox.resolveSandboxContext.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/sandbox.ts`：调整 sandbox（agent runtime）。
- 修改 `src/agents/sandbox/backend.ts`：调整 backend（agent runtime）。
- 修改 `src/agents/sandbox/config.ts`：调整 sandbox config（agent runtime）。
- 修改 `src/agents/sandbox/constants.ts`：调整 constants（agent runtime）。
- 修改 `src/agents/sandbox/context.ts`：调整 context（agent runtime）。
- 修改 `src/agents/sandbox/manage.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/sandbox/manage.ts`：调整 manage（agent runtime）。
- 修改 `src/agents/sandbox/prune.ts`：调整 prune（agent runtime）。
- 修改 `src/agents/sandbox/registry.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/sandbox/registry.ts`：调整 registry（agent runtime）。
- 修改 `src/agents/sandbox/sanitize-env-vars.ts`：调整 sanitize env vars（agent runtime）。
- 其余 2 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/sandbox/backend-policy` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/sandbox/backend-policy/change-to-test.md` 的验证建议。
