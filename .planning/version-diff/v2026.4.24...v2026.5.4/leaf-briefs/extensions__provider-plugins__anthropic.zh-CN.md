# extensions/provider-plugins/anthropic

## 1. 功能结论

**修改**：pass claude cli thinking effort、anthropic expose bundled thinking policy、gateway defer doctor legacy checks、[codex] Fix commitments safety and coverage；**删除**：旧 runtime register 文件 删除 `register.runtime.ts` 这种 runtime helper re-export 面；**迁移/重构**：插件 SDK test runtime/contracts、simplify plugin dependency handling、trim provider discovery internal exports、trim provider internal exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 2、修改 15

## 3. 功能级详细差异

### 优化 gateway defer doctor legacy checks

优化 gateway：defer doctor legacy checks

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`high`

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 anthropic expose bundled thinking policy

修复 anthropic：expose bundled thinking policy

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 pass claude cli thinking effort

修复 pass claude cli thinking effort

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`high`

### 修改 [codex] Fix commitments safety and coverage

修改 [codex] Fix commitments safety and coverage

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`high`

### 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…

测试迁移到插件 SDK test runtime/contracts：OpenRouter 测试从 repo 内部 helper 改为 `openclaw/plugin-sdk/*` 测试契约，减少 core 深层测试耦合。

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`high`

### 移除旧 runtime register 文件 删除 register.runtime.ts 这种 runtime helper re-exp…

移除旧 runtime register 文件：删除 `register.runtime.ts` 这种 runtime helper re-export 面，避免依赖旧的深层运行时入口。

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 expose channel contract test helpers

迁移/重构 expose channel contract test helpers

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 simplify plugin dependency handling

迁移/重构 simplify plugin dependency handling

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim provider discovery internal exports

迁移/重构 trim provider discovery internal exports

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim provider internal exports

迁移/重构 trim provider internal exports

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 config defaults、doctor contract api、plugin manifest/control-plane metadata、provider policy api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 cli migration regression/contract coverage、cli shared regression/contract coverage、anthropic plugin entrypoint、provider policy api regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/anthropic`
- Changed path count: `17`
- Status counts: `新增 2、修改 15`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `17` files, `+351` / `-69`

### 归纳依据

- 主要落点：implementation、tests/contracts、manifest/package metadata、model/thinking policy、streaming/reasoning、configuration/schema。
- 新增或暴露的关键符号包括：`selectClaudeCliRuntime`, `CLAUDE_EFFORT_ARG`, `mapClaudeCliThinkingLevelToEffort`, `stripClaudeEffortArgs`, `resolveClaudeCliExecutionArgs`, `normalizeAnthropicProviderConfig`, `legacyConfigRules`, `CLAUDE_CLI_BACKEND_ID`, `resolveClaudeCliSyntheticAuth`, `resolveThinkingProfile`。
- 建议优先验证：优先运行 `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`；`pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`；`pnpm build`。
- 相关 commit 主题：fix: pass claude cli thinking effort；fix(anthropic): expose bundled thinking policy；perf(gateway): defer doctor legacy checks；refactor: simplify plugin dependency handling；refactor: trim provider discovery internal exports；refactor: trim provider internal exports；[codex] Fix commitments safety and coverage；perf: mark provider plugins startup lazy

### Dimension evidence

- `maintenance-优化-gateway-defer-doctor-legacy-checks` / 优化 gateway defer doctor legacy checks:
  - source: `path` [M] `extensions/anthropic/doctor-contract-api.ts` — semantic cue
- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/anthropic/provider-discovery.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/provider-policy-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/provider-policy-api.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/provider-runtime.contract.test.ts` — semantic cue
- `runtime-behavior-修复-anthropic-expose-bundled-thinking-policy` / 修复 anthropic expose bundled thinking policy:
  - source: `path` [M] `extensions/anthropic/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-migration.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-migration.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/config-defaults.ts` — semantic cue
- `runtime-behavior-修复-pass-claude-cli-thinking-effort` / 修复 pass claude cli thinking effort:
  - source: `path` [M] `extensions/anthropic/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-migration.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-migration.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.ts` — semantic cue
- `maintenance-修改-codex-Fix-commitments-safety-and-coverage` / 修改 [codex] Fix commitments safety and coverage:
  - source: `path` [A] `extensions/anthropic/doctor-contract-api.ts`
  - source: `path` [A] `extensions/anthropic/provider-discovery.ts`
  - source: `path` [M] `extensions/anthropic/cli-backend.ts`
  - source: `path` [M] `extensions/anthropic/cli-migration.test.ts`
  - source: `path` [M] `extensions/anthropic/cli-migration.ts`
- `public-contract-测试迁移到插件-SDK-test-runtime-contracts-OpenRouter-测` / 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…:
  - source: `path` [M] `extensions/anthropic/cli-migration.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/provider-policy-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/provider-runtime.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/stream-wrappers.test.ts` — semantic cue
- `public-contract-移除旧-runtime-register-文件-删除-register-runtime-ts` / 移除旧 runtime register 文件 删除 register.runtime.ts 这种 runtime helper re-exp…:
  - source: `path` [M] `extensions/anthropic/provider-runtime.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/register.runtime.ts` — semantic cue
- `public-contract-迁移-重构-expose-channel-contract-test-helpers` / 迁移/重构 expose channel contract test helpers:
  - source: `path` [M] `extensions/anthropic/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-migration.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-migration.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/config-defaults.ts` — semantic cue
- `migration-迁移-重构-simplify-plugin-dependency-handling` / 迁移/重构 simplify plugin dependency handling:
  - source: `path` [M] `extensions/anthropic/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-migration.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-migration.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/config-defaults.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/anthropic/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-migration.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-migration.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/config-defaults.ts` — semantic cue
- `migration-迁移-重构-trim-provider-discovery-internal-exports` / 迁移/重构 trim provider discovery internal exports:
  - source: `path` [M] `extensions/anthropic/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-migration.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-migration.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/config-defaults.ts` — semantic cue
- `migration-迁移-重构-trim-provider-internal-exports` / 迁移/重构 trim provider internal exports:
  - source: `path` [M] `extensions/anthropic/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-migration.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-migration.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.test.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/cli-shared.ts` — semantic cue
  - source: `path` [M] `extensions/anthropic/config-defaults.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/anthropic/config-defaults.ts` — contract evidence
  - source: `path` [M] `extensions/anthropic/doctor-contract-api.ts` — contract evidence
  - source: `path` [M] `extensions/anthropic/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/anthropic/provider-policy-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/anthropic/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/anthropic/cli-migration.test.ts` — test evidence
  - source: `path` [M] `extensions/anthropic/cli-shared.test.ts` — test evidence
  - source: `path` [M] `extensions/anthropic/index.test.ts` — test evidence
  - source: `path` [M] `extensions/anthropic/provider-policy-api.test.ts` — test evidence
  - source: `path` [M] `extensions/anthropic/provider-runtime.contract.test.ts` — test evidence
  - source: `path` [M] `extensions/anthropic/stream-wrappers.test.ts` — test evidence

### 路径证据

- 新增 `extensions/anthropic/doctor-contract-api.ts`：调整 doctor contract api（implementation）。
- 新增 `extensions/anthropic/provider-discovery.ts`：调整 provider discovery（implementation）。
- 修改 `extensions/anthropic/cli-backend.ts`：调整 cli backend（implementation）。
- 修改 `extensions/anthropic/cli-migration.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/anthropic/cli-migration.ts`：调整 cli migration（implementation）。
- 修改 `extensions/anthropic/cli-shared.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/anthropic/cli-shared.ts`：调整 cli shared（implementation）。
- 修改 `extensions/anthropic/config-defaults.ts`：调整 config defaults（configuration/schema）。
- 修改 `extensions/anthropic/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/anthropic/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、模型引用规范化、模型计价/成本归属、provider endpoint 识别、provider request family。
- 修改 `extensions/anthropic/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/anthropic/provider-policy-api.test.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `extensions/anthropic/provider-policy-api.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `extensions/anthropic/provider-runtime.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 3 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/anthropic` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/anthropic/change-to-test.md` 的验证建议。
