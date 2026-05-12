# extensions/provider-plugins/mistral

## 1. 功能结论

**新增**：declare cerebras and mistral model catalogs；**修改**：log google meet realtime models、deps trim runtime dependency graph、mark provider plugins startup lazy；**迁移/重构**：trim provider helper exports、trim embedding provider internal exports、remove stale provider helpers、build cerebras and mistral catalogs from manifests；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 13

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 log google meet realtime models

修复 log google meet realtime models

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 declare cerebras and mistral model catalogs

新增 declare cerebras and mistral model catalogs

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 置信度：`high`

### 构建/发布调整 deps trim runtime dependency graph

构建/发布调整 deps：trim runtime dependency graph

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 build cerebras and mistral catalogs from manifests

迁移/重构 build cerebras and mistral catalogs from manifests

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 expose SDK test helper subpaths

迁移/重构 expose SDK test helper subpaths

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 remove stale provider helpers

迁移/重构 remove stale provider helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim embedding provider internal exports

迁移/重构 trim embedding provider internal exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim provider helper exports

迁移/重构 trim provider helper exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 mistral public API barrel、plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 media understanding provider regression/contract coverage、mistral regression/contract coverage、onboard regression/contract coverage、realtime transcription provider regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/mistral`
- Changed path count: `13`
- Status counts: `修改 13`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `13` files, `+171` / `-113`

### 归纳依据

- 主要落点：implementation、tests/contracts、plugin entry/API surface、manifest/package metadata、provider catalog。
- 新增或暴露的关键符号包括：`MISTRAL_SMALL_LATEST_REASONING_EFFORT_MAP`, `normalizeMistralModel`, `buildMistralReplayPolicy`, `MISTRAL_MANIFEST_CATALOG`, `MISTRAL_BASE_URL`, `requireMistralManifestModel`, `MISTRAL_DEFAULT_MANIFEST_MODEL`, `MISTRAL_DEFAULT_CONTEXT_WINDOW`, `MISTRAL_DEFAULT_MAX_TOKENS`, `MISTRAL_DEFAULT_COST`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/mistral`；`pnpm test:extensions`。
- 相关 commit 主题：fix: log google meet realtime models；refactor: trim provider helper exports；refactor: trim embedding provider internal exports；refactor: remove stale provider helpers；build(deps): trim runtime dependency graph；refactor: build cerebras and mistral catalogs from manifests；perf: mark provider plugins startup lazy；refactor: expose SDK test helper subpaths

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/mistral/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/provider-catalog.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/provider-compat.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/realtime-transcription-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/realtime-transcription-provider.ts` — semantic cue
- `maintenance-修复-log-google-meet-realtime-models` / 修复 log google meet realtime models:
  - source: `path` [M] `extensions/mistral/provider-catalog.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/realtime-transcription-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/realtime-transcription-provider.ts` — semantic cue
- `runtime-behavior-新增-declare-cerebras-and-mistral-model-catalogs` / 新增 declare cerebras and mistral model catalogs:
  - source: `path` [M] `extensions/mistral/api.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/index.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/mistral.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/model-definitions.ts` — semantic cue
- `integration-build-release-构建-发布调整-deps-trim-runtime-dependency-graph` / 构建/发布调整 deps trim runtime dependency graph:
  - source: `path` [M] `extensions/mistral/api.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/index.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/mistral.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/model-definitions.ts` — semantic cue
- `user-visible-迁移-重构-build-cerebras-and-mistral-catalogs-from` / 迁移/重构 build cerebras and mistral catalogs from manifests:
  - source: `path` [M] `extensions/mistral/api.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/index.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/mistral.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/model-definitions.ts` — semantic cue
- `migration-迁移-重构-expose-SDK-test-helper-subpaths` / 迁移/重构 expose SDK test helper subpaths:
  - source: `path` [M] `extensions/mistral/api.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/index.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/mistral.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/model-definitions.ts` — semantic cue
- `migration-迁移-重构-remove-stale-provider-helpers` / 迁移/重构 remove stale provider helpers:
  - source: `path` [M] `extensions/mistral/api.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/index.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/mistral.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/model-definitions.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/mistral/api.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/index.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/mistral.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/model-definitions.ts` — semantic cue
- `migration-迁移-重构-trim-embedding-provider-internal-exports` / 迁移/重构 trim embedding provider internal exports:
  - source: `path` [M] `extensions/mistral/api.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/index.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/mistral.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/model-definitions.ts` — semantic cue
- `migration-迁移-重构-trim-provider-helper-exports` / 迁移/重构 trim provider helper exports:
  - source: `path` [M] `extensions/mistral/api.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/index.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/mistral.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/mistral/model-definitions.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/mistral/api.ts` — contract evidence
  - source: `path` [M] `extensions/mistral/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/mistral/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/mistral/media-understanding-provider.test.ts` — test evidence
  - source: `path` [M] `extensions/mistral/mistral.live.test.ts` — test evidence
  - source: `path` [M] `extensions/mistral/onboard.test.ts` — test evidence
  - source: `path` [M] `extensions/mistral/realtime-transcription-provider.test.ts` — test evidence

### 路径证据

- 修改 `extensions/mistral/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/mistral/embedding-provider.ts`：调整 embedding provider（implementation）。
- 修改 `extensions/mistral/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/mistral/media-understanding-provider.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/mistral/mistral.live.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/mistral/model-definitions.ts`：调整 model definitions（implementation）。
- 修改 `extensions/mistral/onboard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/mistral/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、provider endpoint 识别、provider request family。
- 修改 `extensions/mistral/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/mistral/provider-catalog.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 修改 `extensions/mistral/provider-compat.ts`：调整 provider compat（implementation）。
- 修改 `extensions/mistral/realtime-transcription-provider.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 1 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/mistral` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/mistral/change-to-test.md` 的验证建议。
