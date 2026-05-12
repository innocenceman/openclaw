# extensions/provider-plugins/deepseek

## 1. 功能结论

**修改**：deepseek expose v4 thinking profile in policy surface、deepseek expose V4 max thinking levels、dedupe mirrored memory and deepseek tests、deepseek add provider-policy-api to hydrate contextWindow and cost from catalog；**迁移/重构**：trim onboarding internal helpers、trim provider discovery internal exports、build deepseek catalog from manifest、split plugin sdk test helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 3、修改 9

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 deepseek add provider-policy-api to hydrate contextWindow and cost f…

修复 deepseek：add provider-policy-api to hydrate contextWindow and cost from catalog

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 deepseek backfill v4 assistant reasoning replay

修复 deepseek：backfill v4 assistant reasoning replay

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 deepseek expose V4 max thinking levels

修复 deepseek：expose V4 max thinking levels

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 deepseek expose v4 thinking profile in policy surface

修复 deepseek：expose v4 thinking profile in policy surface

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 dedupe mirrored memory and deepseek tests

测试覆盖 dedupe mirrored memory and deepseek tests

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 build deepseek catalog from manifest

迁移/重构 build deepseek catalog from manifest

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim onboarding internal helpers

迁移/重构 trim onboarding internal helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim provider discovery internal exports

迁移/重构 trim provider discovery internal exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata、provider policy api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 deepseek regression/contract coverage、deepseek plugin entrypoint、provider policy api regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/deepseek`
- Changed path count: `12`
- Status counts: `新增 3、修改 9`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `12` files, `+718` / `-263`

### 归纳依据

- 主要落点：model/thinking policy、tests/contracts、implementation、manifest/package metadata、plugin entry/API surface、streaming/reasoning。
- 新增或暴露的关键符号包括：`deepSeekV4Model`, `createPayloadCapturingStream`, `DEEPSEEK_MANIFEST_PROVIDER`, `DEEPSEEK_BASE_URL`, `DEEPSEEK_MODEL_CATALOG`, `DEEPSEEK_V4_MODEL_IDS`, `isDeepSeekV4ModelId`, `isDeepSeekV4ModelRef`, `applyDeepSeekProviderConfig`, `buildCatalogIndex`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/deepseek`；`pnpm test:extensions`。
- 相关 commit 主题：fix(deepseek): expose v4 thinking profile in policy surface；refactor: trim onboarding internal helpers；refactor: trim provider discovery internal exports；fix(deepseek): expose V4 max thinking levels；test: dedupe mirrored memory and deepseek tests；fix(deepseek): add provider-policy-api to hydrate contextWindow and cost from catalog；fix(deepseek): backfill v4 assistant reasoning replay；refactor: build deepseek catalog from manifest

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/deepseek/provider-discovery.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/provider-policy-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/provider-policy-api.ts` — semantic cue
- `public-contract-修复-deepseek-add-provider-policy-api-to-hydrate` / 修复 deepseek add provider-policy-api to hydrate contextWindow and cost f…:
  - source: `path` [M] `extensions/deepseek/deepseek.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/models.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/openclaw.plugin.json` — semantic cue
- `runtime-behavior-修复-deepseek-backfill-v4-assistant-reasoning-rep` / 修复 deepseek backfill v4 assistant reasoning replay:
  - source: `path` [M] `extensions/deepseek/deepseek.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/models.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/openclaw.plugin.json` — semantic cue
- `runtime-behavior-修复-deepseek-expose-V4-max-thinking-levels` / 修复 deepseek expose V4 max thinking levels:
  - source: `path` [M] `extensions/deepseek/deepseek.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/models.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/openclaw.plugin.json` — semantic cue
- `runtime-behavior-修复-deepseek-expose-v4-thinking-profile-in-polic` / 修复 deepseek expose v4 thinking profile in policy surface:
  - source: `path` [M] `extensions/deepseek/deepseek.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/models.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/openclaw.plugin.json` — semantic cue
- `tests-docs-测试覆盖-dedupe-mirrored-memory-and-deepseek-tests` / 测试覆盖 dedupe mirrored memory and deepseek tests:
  - source: `path` [M] `extensions/deepseek/deepseek.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/models.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/openclaw.plugin.json` — semantic cue
- `user-visible-迁移-重构-build-deepseek-catalog-from-manifest` / 迁移/重构 build deepseek catalog from manifest:
  - source: `path` [M] `extensions/deepseek/deepseek.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/models.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/openclaw.plugin.json` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/deepseek/deepseek.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/models.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/openclaw.plugin.json` — semantic cue
- `migration-迁移-重构-trim-onboarding-internal-helpers` / 迁移/重构 trim onboarding internal helpers:
  - source: `path` [M] `extensions/deepseek/deepseek.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/models.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/openclaw.plugin.json` — semantic cue
- `migration-迁移-重构-trim-provider-discovery-internal-exports` / 迁移/重构 trim provider discovery internal exports:
  - source: `path` [M] `extensions/deepseek/deepseek.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/index.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/models.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/deepseek/openclaw.plugin.json` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/deepseek/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/deepseek/provider-policy-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/deepseek/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/deepseek/deepseek.live.test.ts` — test evidence
  - source: `path` [M] `extensions/deepseek/index.test.ts` — test evidence
  - source: `path` [M] `extensions/deepseek/provider-policy-api.test.ts` — test evidence

### 路径证据

- 新增 `extensions/deepseek/provider-policy-api.test.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 新增 `extensions/deepseek/provider-policy-api.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 新增 `extensions/deepseek/thinking.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `extensions/deepseek/deepseek.live.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/deepseek/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/deepseek/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/deepseek/models.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `extensions/deepseek/onboard.ts`：调整 onboard（implementation）。
- 修改 `extensions/deepseek/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、provider endpoint 识别、provider request family。
- 修改 `extensions/deepseek/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/deepseek/provider-discovery.ts`：调整 provider discovery（implementation）。
- 修改 `extensions/deepseek/stream.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/deepseek` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/deepseek/change-to-test.md` 的验证建议。
