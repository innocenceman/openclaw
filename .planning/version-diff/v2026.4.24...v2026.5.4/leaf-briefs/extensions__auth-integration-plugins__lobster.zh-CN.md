# extensions/auth-integration-plugins/lobster

## 1. 功能结论

**新增**：declare startup plugin imports explicitly；**修改**：plugins narrow optional tool cold loads、plugins externalize acpx release packages、enforce plugin tool manifest contracts、prepare next external plugin beta batch；**迁移/重构**：trim lobster helper exports、trim extension helper shims、prune stale extension types、plugin-sdk add managed task flow runtime；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 1、修改 9、删除 1

## 3. 功能级详细差异

### 修复 enforce plugin tool manifest contracts

修复 enforce plugin tool manifest contracts

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 plugins narrow optional tool cold loads

修复 plugins：narrow optional tool cold loads

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 declare startup plugin imports explicitly

新增 declare startup plugin imports explicitly

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 置信度：`high`

### 构建/发布调整 plugins externalize acpx release packages

构建/发布调整 plugins：externalize acpx release packages

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 置信度：`high`

### 构建/发布调整 prepare next external plugin beta batch

构建/发布调整 prepare next external plugin beta batch

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 plugin-sdk add managed task flow runtime

迁移/重构 plugin-sdk：add managed task flow runtime

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 prune stale extension types

迁移/重构 prune stale extension types

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim extension helper shims

迁移/重构 trim extension helper shims

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim lobster helper exports

迁移/重构 trim lobster helper exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 lobster runner regression/contract coverage、lobster tool regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `test helpers`（`extensions/lobster/src/test-helpers.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/lobster`
- Changed path count: `11`
- Status counts: `新增 1、修改 9、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `11` files, `+395` / `-67`

### 归纳依据

- 主要落点：implementation、manifest/package metadata、tests/contracts、plugin entry/API surface。
- 新增或暴露的关键符号包括：`AjvCtor`, `stableJsonStringify`, `compileCacheKey`, `readCompileCache`, `rememberCompiledValidator`, `installLobsterAjvCompileCache`, `readAjvInternalCacheSize`, `createRepeatedResponseSchema`, `createUniqueResponseSchema`, `toEmbeddedToolRuntime`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/lobster`；`pnpm test:extensions`。
- 相关 commit 主题：fix(plugins): narrow optional tool cold loads；build(plugins): externalize acpx release packages；fix: enforce plugin tool manifest contracts；build: prepare next external plugin beta batch；refactor: trim lobster helper exports；refactor: trim extension helper shims；refactor: prune stale extension types；refactor(plugin-sdk): add managed task flow runtime

### Dimension evidence

- `public-contract-修复-enforce-plugin-tool-manifest-contracts` / 修复 enforce plugin tool manifest contracts:
  - source: `path` [M] `extensions/lobster/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-tool.test.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-tool.ts` — semantic cue
- `maintenance-修复-plugins-narrow-optional-tool-cold-loads` / 修复 plugins narrow optional tool cold loads:
  - source: `path` [M] `extensions/lobster/src/lobster-tool.test.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-tool.ts` — semantic cue
- `maintenance-新增-declare-startup-plugin-imports-explicitly` / 新增 declare startup plugin imports explicitly:
  - source: `path` [M] `extensions/lobster/openclaw.plugin.json` — semantic cue
- `integration-build-release-构建-发布调整-plugins-externalize-acpx-release-packag` / 构建/发布调整 plugins externalize acpx release packages:
  - source: `path` [M] `extensions/lobster/index.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/lobster/package.json` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-ajv-cache.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-runner.test.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-runner.ts` — semantic cue
- `integration-build-release-构建-发布调整-prepare-next-external-plugin-beta-batch` / 构建/发布调整 prepare next external plugin beta batch:
  - source: `path` [M] `extensions/lobster/index.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/lobster/package.json` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-ajv-cache.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-runner.test.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-runner.ts` — semantic cue
- `runtime-behavior-迁移-重构-plugin-sdk-add-managed-task-flow-runtime` / 迁移/重构 plugin-sdk add managed task flow runtime:
  - source: `path` [M] `extensions/lobster/index.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/lobster/package.json` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-ajv-cache.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-runner.test.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-runner.ts` — semantic cue
- `migration-迁移-重构-prune-stale-extension-types` / 迁移/重构 prune stale extension types:
  - source: `path` [M] `extensions/lobster/index.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/lobster/package.json` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-ajv-cache.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-runner.test.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-runner.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/lobster/index.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/lobster/package.json` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-ajv-cache.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-runner.test.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-runner.ts` — semantic cue
- `migration-迁移-重构-trim-extension-helper-shims` / 迁移/重构 trim extension helper shims:
  - source: `path` [M] `extensions/lobster/index.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/lobster/package.json` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-ajv-cache.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-runner.test.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-runner.ts` — semantic cue
- `migration-迁移-重构-trim-lobster-helper-exports` / 迁移/重构 trim lobster helper exports:
  - source: `path` [M] `extensions/lobster/index.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/lobster/package.json` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-ajv-cache.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-runner.test.ts` — semantic cue
  - source: `path` [M] `extensions/lobster/src/lobster-runner.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/lobster/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/lobster/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/lobster/src/lobster-runner.test.ts` — test evidence
  - source: `path` [M] `extensions/lobster/src/lobster-tool.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/lobster/src/test-helpers.ts`

### 路径证据

- 新增 `extensions/lobster/src/lobster-ajv-cache.ts`：调整 lobster ajv cache（implementation）。
- 修改 `extensions/lobster/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/lobster/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/lobster/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/lobster/src/lobster-runner.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/lobster/src/lobster-runner.ts`：调整 lobster runner（implementation）。
- 修改 `extensions/lobster/src/lobster-taskflow.ts`：调整 lobster taskflow（implementation）。
- 修改 `extensions/lobster/src/lobster-tool.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/lobster/src/lobster-tool.ts`：调整 lobster tool（implementation）。
- 修改 `extensions/lobster/src/taskflow-test-helpers.ts`：调整 taskflow test helpers（implementation）。
- 删除 `extensions/lobster/src/test-helpers.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/auth-integration-plugins/lobster` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/auth-integration-plugins/lobster/change-to-test.md` 的验证建议。
