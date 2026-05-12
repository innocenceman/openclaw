# extensions/provider-plugins/byteplus

## 1. 功能结论

**新增**：Byteplus 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约、declare byteplus model catalog；**修改**：simplify volc catalog model builders、mark provider plugins startup lazy、expose provider media test helpers；**迁移/重构**：插件 SDK test runtime/contracts、trim provider model constants、trim provider discovery internal exports、remove stale provider helpers；行为变化，风险 high。

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

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 simplify volc catalog model builders

修复 simplify volc catalog model builders

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 Byteplus 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约

新增 Byteplus 视频生成测试：覆盖 video-generation provider 的默认模型、请求/响应或注册契约。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 declare byteplus model catalog

新增 declare byteplus model catalog

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 expose provider media test helpers

测试覆盖 expose provider media test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`high`

### 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…

测试迁移到插件 SDK test runtime/contracts：OpenRouter 测试从 repo 内部 helper 改为 `openclaw/plugin-sdk/*` 测试契约，减少 core 深层测试耦合。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 expose plugin test helpers via sdk

迁移/重构 expose plugin test helpers via sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 promote plugin test helpers to sdk

迁移/重构 promote plugin test helpers to sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 remove stale provider helpers

迁移/重构 remove stale provider helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim provider discovery internal exports

迁移/重构 trim provider discovery internal exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim provider model constants

迁移/重构 trim provider model constants

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 byteplus plugin entrypoint、live regression/contract coverage、plugin registration regression/contract coverage、video generation provider regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/byteplus`
- Changed path count: `9`
- Status counts: `修改 9`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `9` files, `+169` / `-58`

### 归纳依据

- 主要落点：tests/contracts、manifest/package metadata、model/thinking policy、provider catalog、implementation、video generation。
- 新增或暴露的关键符号包括：`BYTEPLUS_MANIFEST_PROVIDER`, `BYTEPLUS_CODING_MANIFEST_PROVIDER`, `BYTEPLUS_BASE_URL`, `BYTEPLUS_CODING_BASE_URL`, `BYTEPLUS_MODEL_CATALOG`, `BYTEPLUS_CODING_MODEL_CATALOG`, `buildBytePlusModelDefinition`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/byteplus`；`pnpm test:extensions`。
- 相关 commit 主题：refactor: trim provider model constants；refactor: trim provider discovery internal exports；refactor: remove stale provider helpers；fix: simplify volc catalog model builders；feat: declare byteplus model catalog；perf: mark provider plugins startup lazy；test: expose provider media test helpers；refactor: split plugin sdk test helpers

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/byteplus/provider-catalog.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/provider-discovery.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/video-generation-provider.test.ts` — semantic cue
- `user-visible-修复-simplify-volc-catalog-model-builders` / 修复 simplify volc catalog model builders:
  - source: `path` [M] `extensions/byteplus/models.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/provider-catalog.ts` — semantic cue
- `user-visible-新增-Byteplus-视频生成测试-覆盖-video-generation-provider` / 新增 Byteplus 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约:
  - source: `path` [M] `extensions/byteplus/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/live.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/models.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/package.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/plugin-registration.contract.test.ts` — semantic cue
- `runtime-behavior-新增-declare-byteplus-model-catalog` / 新增 declare byteplus model catalog:
  - source: `path` [M] `extensions/byteplus/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/live.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/models.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/package.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/plugin-registration.contract.test.ts` — semantic cue
- `tests-docs-测试覆盖-expose-provider-media-test-helpers` / 测试覆盖 expose provider media test helpers:
  - source: `path` [M] `extensions/byteplus/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/live.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/plugin-registration.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/provider-catalog.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/provider-discovery.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/video-generation-provider.test.ts` — semantic cue
- `public-contract-测试迁移到插件-SDK-test-runtime-contracts-OpenRouter-测` / 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…:
  - source: `path` [M] `extensions/byteplus/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/live.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/plugin-registration.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/video-generation-provider.test.ts` — semantic cue
- `migration-迁移-重构-expose-plugin-test-helpers-via-sdk` / 迁移/重构 expose plugin test helpers via sdk:
  - source: `path` [M] `extensions/byteplus/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/live.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/models.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/package.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/plugin-registration.contract.test.ts` — semantic cue
- `migration-迁移-重构-promote-plugin-test-helpers-to-sdk` / 迁移/重构 promote plugin test helpers to sdk:
  - source: `path` [M] `extensions/byteplus/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/live.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/models.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/package.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/plugin-registration.contract.test.ts` — semantic cue
- `migration-迁移-重构-remove-stale-provider-helpers` / 迁移/重构 remove stale provider helpers:
  - source: `path` [M] `extensions/byteplus/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/live.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/models.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/package.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/plugin-registration.contract.test.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/byteplus/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/live.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/models.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/package.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/plugin-registration.contract.test.ts` — semantic cue
- `migration-迁移-重构-trim-provider-discovery-internal-exports` / 迁移/重构 trim provider discovery internal exports:
  - source: `path` [M] `extensions/byteplus/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/live.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/models.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/package.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/plugin-registration.contract.test.ts` — semantic cue
- `migration-迁移-重构-trim-provider-model-constants` / 迁移/重构 trim provider model constants:
  - source: `path` [M] `extensions/byteplus/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/live.test.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/models.ts` — semantic cue
  - source: `path` [M] `extensions/byteplus/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/package.json` — semantic cue
  - source: `path` [M] `extensions/byteplus/plugin-registration.contract.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/byteplus/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/byteplus/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/byteplus/index.test.ts` — test evidence
  - source: `path` [M] `extensions/byteplus/live.test.ts` — test evidence
  - source: `path` [M] `extensions/byteplus/plugin-registration.contract.test.ts` — test evidence
  - source: `path` [M] `extensions/byteplus/video-generation-provider.test.ts` — test evidence

### 路径证据

- 修改 `extensions/byteplus/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/byteplus/live.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/byteplus/models.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `extensions/byteplus/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、视频生成 provider contract。
- 修改 `extensions/byteplus/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/byteplus/plugin-registration.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/byteplus/provider-catalog.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 修改 `extensions/byteplus/provider-discovery.ts`：调整 provider discovery（implementation）。
- 修改 `extensions/byteplus/video-generation-provider.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/byteplus` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/byteplus/change-to-test.md` 的验证建议。
