# extensions/provider-plugins/amazon-bedrock

## 1. 功能结论

**修改**：bedrock expose Opus 4.7 max thinking、amazon-bedrock expose Opus 4.7 thinking profile、bedrock omit Opus temperature for profiles、mark provider plugins startup lazy；**迁移/重构**：simplify plugin dependency handling、trim provider internal exports、split plugin sdk test helpers、expose plugin test helpers via sdk；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 2、修改 8

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 amazon-bedrock expose Opus 4.7 thinking profile

修复 amazon-bedrock：expose Opus 4.7 thinking profile

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 bedrock expose Opus 4.7 max thinking

修复 bedrock：expose Opus 4.7 max thinking

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 bedrock omit Opus temperature for profiles

修复 bedrock：omit Opus temperature for profiles

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 route extension tests through sdk subpaths

测试覆盖 route extension tests through sdk subpaths

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 use narrow config sdk imports

测试覆盖 use narrow config sdk imports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 expose plugin test helpers via sdk

迁移/重构 expose plugin test helpers via sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 simplify plugin dependency handling

迁移/重构 simplify plugin dependency handling

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim provider internal exports

迁移/重构 trim provider internal exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 amazon bedrock public API barrel、plugin manifest/control-plane metadata、setup api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 amazon bedrock plugin entrypoint、lazy import regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/amazon-bedrock`
- Changed path count: `10`
- Status counts: `新增 2、修改 8`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `10` files, `+604` / `-106`

### 归纳依据

- 主要落点：implementation、tests/contracts、manifest/package metadata、plugin entry/API surface。
- 新增或暴露的关键符号包括：`resolveBedrockConfigApiKey`, `mergeImplicitBedrockProvider`, `createInjectedClientDiscoverySdk`, `normalizeBedrockEmbeddingModel`, `resolveBedrockEmbeddingClient`, `mockBedrockSdkImportTripwire`, `isOpus47BedrockModelRef`, `setBedrockAppProfileControlPlaneForTest`, `patchOpus47MaxThinkingEffort`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/amazon-bedrock`；`pnpm test:extensions`。
- 相关 commit 主题：refactor: simplify plugin dependency handling；refactor: trim provider internal exports；fix(bedrock): expose Opus 4.7 max thinking；fix(amazon-bedrock): expose Opus 4.7 thinking profile；fix(bedrock): omit Opus temperature for profiles；perf: mark provider plugins startup lazy；refactor: split plugin sdk test helpers；refactor: expose plugin test helpers via sdk

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/amazon-bedrock/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/lazy-import.test.ts` — semantic cue
- `runtime-behavior-修复-amazon-bedrock-expose-Opus-4-7-thinking-prof` / 修复 amazon-bedrock expose Opus 4.7 thinking profile:
  - source: `path` [M] `extensions/amazon-bedrock/api.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery-shared.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/lazy-import.test.ts` — semantic cue
- `runtime-behavior-修复-bedrock-expose-Opus-4-7-max-thinking` / 修复 bedrock expose Opus 4.7 max thinking:
  - source: `path` [M] `extensions/amazon-bedrock/api.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery-shared.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/lazy-import.test.ts` — semantic cue
- `maintenance-修复-bedrock-omit-Opus-temperature-for-profiles` / 修复 bedrock omit Opus temperature for profiles:
  - source: `path` [M] `extensions/amazon-bedrock/api.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery-shared.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/lazy-import.test.ts` — semantic cue
- `tests-docs-测试覆盖-route-extension-tests-through-sdk-subpaths` / 测试覆盖 route extension tests through sdk subpaths:
  - source: `path` [M] `extensions/amazon-bedrock/api.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery-shared.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/lazy-import.test.ts` — semantic cue
- `tests-docs-测试覆盖-use-narrow-config-sdk-imports` / 测试覆盖 use narrow config sdk imports:
  - source: `path` [A] `extensions/amazon-bedrock/discovery-shared.ts`
  - source: `path` [A] `extensions/amazon-bedrock/lazy-import.test.ts`
  - source: `path` [M] `extensions/amazon-bedrock/api.ts`
  - source: `path` [M] `extensions/amazon-bedrock/discovery.ts`
  - source: `path` [M] `extensions/amazon-bedrock/embedding-provider.ts`
- `migration-迁移-重构-expose-plugin-test-helpers-via-sdk` / 迁移/重构 expose plugin test helpers via sdk:
  - source: `path` [M] `extensions/amazon-bedrock/api.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery-shared.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/lazy-import.test.ts` — semantic cue
- `migration-迁移-重构-simplify-plugin-dependency-handling` / 迁移/重构 simplify plugin dependency handling:
  - source: `path` [M] `extensions/amazon-bedrock/api.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery-shared.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/lazy-import.test.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/amazon-bedrock/api.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery-shared.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/lazy-import.test.ts` — semantic cue
- `migration-迁移-重构-trim-provider-internal-exports` / 迁移/重构 trim provider internal exports:
  - source: `path` [M] `extensions/amazon-bedrock/api.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery-shared.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock/lazy-import.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/amazon-bedrock/api.ts` — contract evidence
  - source: `path` [M] `extensions/amazon-bedrock/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/amazon-bedrock/setup-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/amazon-bedrock/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/amazon-bedrock/index.test.ts` — test evidence
  - source: `path` [M] `extensions/amazon-bedrock/lazy-import.test.ts` — test evidence

### 路径证据

- 新增 `extensions/amazon-bedrock/discovery-shared.ts`：调整 discovery shared（implementation）。
- 新增 `extensions/amazon-bedrock/lazy-import.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/amazon-bedrock/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/amazon-bedrock/discovery.ts`：调整 discovery（implementation）。
- 修改 `extensions/amazon-bedrock/embedding-provider.ts`：调整 embedding provider（implementation）。
- 修改 `extensions/amazon-bedrock/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/amazon-bedrock/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/amazon-bedrock/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/amazon-bedrock/register.sync.runtime.ts`：调整 register.sync（implementation）。
- 修改 `extensions/amazon-bedrock/setup-api.ts`：调整 setup api（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/amazon-bedrock` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/amazon-bedrock/change-to-test.md` 的验证建议。
