# extensions/provider-plugins/nvidia

## 1. 功能结论

**新增**：nvidia add NVIDIA provider with onboarding flow、declare nvidia model catalog；**修改**：nvidia align NIM provider metadata、mark provider plugins startup lazy、route extension tests through sdk subpaths；**迁移/重构**：插件 SDK test runtime/contracts、build nvidia catalog from manifest、split plugin sdk test helpers、expose plugin test helpers via sdk；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 3、修改 7

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 nvidia align NIM provider metadata

修复 nvidia：align NIM provider metadata

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 declare nvidia model catalog

新增 declare nvidia model catalog

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 nvidia add NVIDIA provider with onboarding flow

新增 nvidia：add NVIDIA provider with onboarding flow

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 route extension tests through sdk subpaths

测试覆盖 route extension tests through sdk subpaths

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 置信度：`high`

### 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…

测试迁移到插件 SDK test runtime/contracts：OpenRouter 测试从 repo 内部 helper 改为 `openclaw/plugin-sdk/*` 测试契约，减少 core 深层测试耦合。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 build nvidia catalog from manifest

迁移/重构 build nvidia catalog from manifest

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 expose plugin test helpers via sdk

迁移/重构 expose plugin test helpers via sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 plugins move provider routing metadata to manifests

迁移/重构 plugins：move provider routing metadata to manifests

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 nvidia public API barrel、plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 nvidia plugin entrypoint、onboard regression/contract coverage、plugin registration regression/contract coverage、provider catalog regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/nvidia`
- Changed path count: `10`
- Status counts: `新增 3、修改 7`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `10` files, `+355` / `-65`

### 归纳依据

- 主要落点：tests/contracts、plugin entry/API surface、manifest/package metadata、provider catalog、implementation。
- 新增或暴露的关键符号包括：`buildNvidiaCatalogModels`, `NVIDIA_DEFAULT_MODEL_REF`, `applyNvidiaProviderConfig`, `applyNvidiaConfig`, `NVIDIA_DEFAULT_MODEL_ID`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/nvidia`；`pnpm test:extensions`。
- 相关 commit 主题：feat(nvidia): add NVIDIA provider with onboarding flow；fix(nvidia): align NIM provider metadata；refactor: build nvidia catalog from manifest；perf: mark provider plugins startup lazy；feat: declare nvidia model catalog；refactor: split plugin sdk test helpers；refactor: expose plugin test helpers via sdk；test: route extension tests through sdk subpaths

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/nvidia/provider-catalog.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/provider-catalog.ts` — semantic cue
- `public-contract-修复-nvidia-align-NIM-provider-metadata` / 修复 nvidia align NIM provider metadata:
  - source: `path` [M] `extensions/nvidia/api.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/openclaw.plugin.json` — semantic cue
- `runtime-behavior-新增-declare-nvidia-model-catalog` / 新增 declare nvidia model catalog:
  - source: `path` [M] `extensions/nvidia/api.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/openclaw.plugin.json` — semantic cue
- `maintenance-新增-nvidia-add-NVIDIA-provider-with-onboarding-f` / 新增 nvidia add NVIDIA provider with onboarding flow:
  - source: `path` [M] `extensions/nvidia/api.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/openclaw.plugin.json` — semantic cue
- `tests-docs-测试覆盖-route-extension-tests-through-sdk-subpaths` / 测试覆盖 route extension tests through sdk subpaths:
  - source: `path` [M] `extensions/nvidia/api.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/openclaw.plugin.json` — semantic cue
- `public-contract-测试迁移到插件-SDK-test-runtime-contracts-OpenRouter-测` / 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…:
  - source: `path` [M] `extensions/nvidia/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/plugin-registration.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/provider-catalog.test.ts` — semantic cue
- `user-visible-迁移-重构-build-nvidia-catalog-from-manifest` / 迁移/重构 build nvidia catalog from manifest:
  - source: `path` [M] `extensions/nvidia/api.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/openclaw.plugin.json` — semantic cue
- `migration-迁移-重构-expose-plugin-test-helpers-via-sdk` / 迁移/重构 expose plugin test helpers via sdk:
  - source: `path` [M] `extensions/nvidia/api.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/openclaw.plugin.json` — semantic cue
- `public-contract-迁移-重构-plugins-move-provider-routing-metadata-to` / 迁移/重构 plugins move provider routing metadata to manifests:
  - source: `path` [M] `extensions/nvidia/api.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/openclaw.plugin.json` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/nvidia/api.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/index.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/nvidia/openclaw.plugin.json` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/nvidia/api.ts` — contract evidence
  - source: `path` [M] `extensions/nvidia/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/nvidia/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/nvidia/index.test.ts` — test evidence
  - source: `path` [M] `extensions/nvidia/onboard.test.ts` — test evidence
  - source: `path` [M] `extensions/nvidia/plugin-registration.contract.test.ts` — test evidence
  - source: `path` [M] `extensions/nvidia/provider-catalog.test.ts` — test evidence

### 路径证据

- 新增 `extensions/nvidia/onboard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/nvidia/onboard.ts`：调整 onboard（implementation）。
- 新增 `extensions/nvidia/plugin-registration.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/nvidia/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/nvidia/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/nvidia/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/nvidia/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、模型引用规范化。
- 修改 `extensions/nvidia/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/nvidia/provider-catalog.test.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 修改 `extensions/nvidia/provider-catalog.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/nvidia` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/nvidia/change-to-test.md` 的验证建议。
