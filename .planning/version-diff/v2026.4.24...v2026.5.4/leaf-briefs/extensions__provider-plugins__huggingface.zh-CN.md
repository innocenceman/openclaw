# extensions/provider-plugins/huggingface

## 1. 功能结论

**修改**：e2e fix kitchen sink crabbox coverage、providers isolate model discovery test env guards、mark provider plugins startup lazy；**迁移/重构**：trim huggingface catalog exports、remove stale provider helpers、move plugin api test helper to sdk、plugins move provider routing metadata to manifests；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 6

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/huggingface`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 providers isolate model discovery test env guards

修复 providers：isolate model discovery test env guards

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/huggingface`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 e2e fix kitchen sink crabbox coverage

测试覆盖 e2e：fix kitchen sink crabbox coverage

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/huggingface`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 move plugin api test helper to sdk

迁移/重构 move plugin api test helper to sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/huggingface`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 plugins move provider routing metadata to manifests

迁移/重构 plugins：move provider routing metadata to manifests

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/huggingface`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 remove stale provider helpers

迁移/重构 remove stale provider helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/huggingface`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim huggingface catalog exports

迁移/重构 trim huggingface catalog exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/huggingface`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/huggingface`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/huggingface`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 huggingface plugin entrypoint，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/huggingface`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/huggingface`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/huggingface`
- Changed path count: `7`
- Status counts: `新增 1、修改 6`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `7` files, `+83` / `-65`

### 归纳依据

- 主要落点：implementation、manifest/package metadata、tests/contracts、model/thinking policy、provider catalog。
- 新增或暴露的关键符号包括：`isHuggingfaceModelDiscoveryTestEnvironment`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/huggingface`；`pnpm test:extensions`。
- 相关 commit 主题：test(e2e): fix kitchen sink crabbox coverage；fix(providers): isolate model discovery test env guards；refactor: trim huggingface catalog exports；refactor: remove stale provider helpers；perf: mark provider plugins startup lazy；refactor: move plugin api test helper to sdk；refactor(plugins): move provider routing metadata to manifests

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/huggingface/provider-catalog.ts` — semantic cue
- `maintenance-修复-providers-isolate-model-discovery-test-env-g` / 修复 providers isolate model discovery test env guards:
  - source: `path` [M] `extensions/huggingface/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/model-discovery-env.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/models.ts` — semantic cue
- `tests-docs-测试覆盖-e2e-fix-kitchen-sink-crabbox-coverage` / 测试覆盖 e2e fix kitchen sink crabbox coverage:
  - source: `path` [A] `extensions/huggingface/model-discovery-env.ts`
  - source: `path` [M] `extensions/huggingface/index.test.ts`
  - source: `path` [M] `extensions/huggingface/models.ts`
  - source: `path` [M] `extensions/huggingface/onboard.ts`
- `public-contract-迁移-重构-move-plugin-api-test-helper-to-sdk` / 迁移/重构 move plugin api test helper to sdk:
  - source: `path` [M] `extensions/huggingface/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/model-discovery-env.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/models.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/huggingface/package.json` — semantic cue
- `public-contract-迁移-重构-plugins-move-provider-routing-metadata-to` / 迁移/重构 plugins move provider routing metadata to manifests:
  - source: `path` [M] `extensions/huggingface/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/model-discovery-env.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/models.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/huggingface/package.json` — semantic cue
- `migration-迁移-重构-remove-stale-provider-helpers` / 迁移/重构 remove stale provider helpers:
  - source: `path` [M] `extensions/huggingface/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/model-discovery-env.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/models.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/huggingface/package.json` — semantic cue
- `runtime-behavior-迁移-重构-trim-huggingface-catalog-exports` / 迁移/重构 trim huggingface catalog exports:
  - source: `path` [M] `extensions/huggingface/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/model-discovery-env.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/models.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/huggingface/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/huggingface/package.json` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/huggingface/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/huggingface/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/huggingface/index.test.ts` — test evidence

### 路径证据

- 新增 `extensions/huggingface/model-discovery-env.ts`：调整 model discovery env（implementation）。
- 修改 `extensions/huggingface/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/huggingface/models.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `extensions/huggingface/onboard.ts`：调整 onboard（implementation）。
- 修改 `extensions/huggingface/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、模型引用规范化。
- 修改 `extensions/huggingface/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/huggingface/provider-catalog.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/huggingface` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/huggingface/change-to-test.md` 的验证建议。
