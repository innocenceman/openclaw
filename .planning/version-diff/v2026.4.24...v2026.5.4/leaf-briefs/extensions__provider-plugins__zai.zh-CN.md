# extensions/provider-plugins/zai

## 1. 功能结论

**修改**：zai satisfy catalog lint、declare zai manifest model catalog、mark provider plugins startup lazy、route extension tests through sdk subpaths；**迁移/重构**：插件 SDK test runtime/contracts、prune unused extension internals、split plugin sdk test helpers、promote plugin test helpers to sdk；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 9

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 declare zai manifest model catalog

修复 declare zai manifest model catalog

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 zai satisfy catalog lint

修复 zai：satisfy catalog lint

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 route extension tests through sdk subpaths

测试覆盖 route extension tests through sdk subpaths

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 置信度：`high`

### 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…

测试迁移到插件 SDK test runtime/contracts：OpenRouter 测试从 repo 内部 helper 改为 `openclaw/plugin-sdk/*` 测试契约，减少 core 深层测试耦合。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 expose plugin test helpers via sdk

迁移/重构 expose plugin test helpers via sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 gateway move model pricing policy to manifests

迁移/重构 gateway：move model pricing policy to manifests

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 plugins move provider routing metadata to manifests

迁移/重构 plugins：move provider routing metadata to manifests

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 promote plugin test helpers to sdk

迁移/重构 promote plugin test helpers to sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 prune unused extension internals

迁移/重构 prune unused extension internals

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 zai plugin entrypoint、onboard regression/contract coverage、provider runtime regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/zai`
- Changed path count: `9`
- Status counts: `修改 9`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `9` files, `+471` / `-155`

### 归纳依据

- 主要落点：implementation、tests/contracts、manifest/package metadata、plugin entry/API surface。
- 新增或暴露的关键符号包括：`isTrueParam`, `shouldPreserveZaiThinking`, `isDisabledThinkingLevel`, `wrapZaiStreamFn`, `ZAI_MANIFEST_CATALOG`, `ZAI_MANIFEST_PROVIDER`, `ZAI_MODEL_CATALOG`, `ZAI_DEFAULT_COST`, `buildZaiCatalogModels`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/zai`；`pnpm test:extensions`。
- 相关 commit 主题：fix(zai): satisfy catalog lint；fix: declare zai manifest model catalog；refactor: prune unused extension internals；perf: mark provider plugins startup lazy；refactor: split plugin sdk test helpers；refactor: promote plugin test helpers to sdk；refactor: expose plugin test helpers via sdk；test: route extension tests through sdk subpaths

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/zai/provider-runtime.contract.test.ts` — semantic cue
- `public-contract-修复-declare-zai-manifest-model-catalog` / 修复 declare zai manifest model catalog:
  - source: `path` [M] `extensions/zai/detect.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.ts` — semantic cue
  - source: `path` [M] `extensions/zai/model-definitions.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.ts` — semantic cue
- `runtime-behavior-修复-zai-satisfy-catalog-lint` / 修复 zai satisfy catalog lint:
  - source: `path` [M] `extensions/zai/detect.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.ts` — semantic cue
  - source: `path` [M] `extensions/zai/model-definitions.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.ts` — semantic cue
- `tests-docs-测试覆盖-route-extension-tests-through-sdk-subpaths` / 测试覆盖 route extension tests through sdk subpaths:
  - source: `path` [M] `extensions/zai/detect.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.ts` — semantic cue
  - source: `path` [M] `extensions/zai/model-definitions.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.ts` — semantic cue
- `public-contract-测试迁移到插件-SDK-test-runtime-contracts-OpenRouter-测` / 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…:
  - source: `path` [M] `extensions/zai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/provider-runtime.contract.test.ts` — semantic cue
- `migration-迁移-重构-expose-plugin-test-helpers-via-sdk` / 迁移/重构 expose plugin test helpers via sdk:
  - source: `path` [M] `extensions/zai/detect.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.ts` — semantic cue
  - source: `path` [M] `extensions/zai/model-definitions.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.ts` — semantic cue
- `public-contract-迁移-重构-gateway-move-model-pricing-policy-to-mani` / 迁移/重构 gateway move model pricing policy to manifests:
  - source: `path` [M] `extensions/zai/detect.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.ts` — semantic cue
  - source: `path` [M] `extensions/zai/model-definitions.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.ts` — semantic cue
- `public-contract-迁移-重构-plugins-move-provider-routing-metadata-to` / 迁移/重构 plugins move provider routing metadata to manifests:
  - source: `path` [M] `extensions/zai/detect.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.ts` — semantic cue
  - source: `path` [M] `extensions/zai/model-definitions.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.ts` — semantic cue
- `migration-迁移-重构-promote-plugin-test-helpers-to-sdk` / 迁移/重构 promote plugin test helpers to sdk:
  - source: `path` [M] `extensions/zai/detect.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.ts` — semantic cue
  - source: `path` [M] `extensions/zai/model-definitions.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.ts` — semantic cue
- `migration-迁移-重构-prune-unused-extension-internals` / 迁移/重构 prune unused extension internals:
  - source: `path` [M] `extensions/zai/detect.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.ts` — semantic cue
  - source: `path` [M] `extensions/zai/model-definitions.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/zai/detect.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/index.ts` — semantic cue
  - source: `path` [M] `extensions/zai/model-definitions.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/zai/onboard.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/zai/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/zai/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/zai/index.test.ts` — test evidence
  - source: `path` [M] `extensions/zai/onboard.test.ts` — test evidence
  - source: `path` [M] `extensions/zai/provider-runtime.contract.test.ts` — test evidence

### 路径证据

- 修改 `extensions/zai/detect.ts`：调整 detect（implementation）。
- 修改 `extensions/zai/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/zai/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/zai/model-definitions.ts`：调整 model definitions（implementation）。
- 修改 `extensions/zai/onboard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/zai/onboard.ts`：调整 onboard（implementation）。
- 修改 `extensions/zai/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、模型计价/成本归属、provider endpoint 识别、provider request family。
- 修改 `extensions/zai/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/zai/provider-runtime.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/zai` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/zai/change-to-test.md` 的验证建议。
