# extensions/provider-plugins/qianfan

## 1. 功能结论

**新增**：declare qianfan and xiaomi model catalogs；**修改**：declare qianfan setup auth metadata、mark provider plugins startup lazy、route extension tests through sdk subpaths；**迁移/重构**：build qianfan and xiaomi catalogs from manifests、split plugin sdk test helpers、expose plugin test helpers via sdk；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 4

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/qianfan`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 declare qianfan setup auth metadata

修复 declare qianfan setup auth metadata

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/qianfan`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 declare qianfan and xiaomi model catalogs

新增 declare qianfan and xiaomi model catalogs

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/qianfan`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 route extension tests through sdk subpaths

测试覆盖 route extension tests through sdk subpaths

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/qianfan`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 build qianfan and xiaomi catalogs from manifests

迁移/重构 build qianfan and xiaomi catalogs from manifests

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/qianfan`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 expose plugin test helpers via sdk

迁移/重构 expose plugin test helpers via sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/qianfan`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/qianfan`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/qianfan`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/qianfan`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 qianfan plugin entrypoint，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/qianfan`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/qianfan`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/qianfan`
- Changed path count: `4`
- Status counts: `修改 4`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `4` files, `+63` / `-37`

### 归纳依据

- 主要落点：manifest/package metadata、tests/contracts、provider catalog。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/qianfan`；`pnpm test:extensions`。
- 相关 commit 主题：fix: declare qianfan setup auth metadata；refactor: build qianfan and xiaomi catalogs from manifests；perf: mark provider plugins startup lazy；feat: declare qianfan and xiaomi model catalogs；refactor: split plugin sdk test helpers；refactor: expose plugin test helpers via sdk；test: route extension tests through sdk subpaths

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/qianfan/provider-catalog.ts` — semantic cue
- `public-contract-修复-declare-qianfan-setup-auth-metadata` / 修复 declare qianfan setup auth metadata:
  - source: `path` [M] `extensions/qianfan/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/qianfan/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/qianfan/package.json` — semantic cue
  - source: `path` [M] `extensions/qianfan/provider-catalog.ts` — semantic cue
- `runtime-behavior-新增-declare-qianfan-and-xiaomi-model-catalogs` / 新增 declare qianfan and xiaomi model catalogs:
  - source: `path` [M] `extensions/qianfan/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/qianfan/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/qianfan/package.json` — semantic cue
  - source: `path` [M] `extensions/qianfan/provider-catalog.ts` — semantic cue
- `tests-docs-测试覆盖-route-extension-tests-through-sdk-subpaths` / 测试覆盖 route extension tests through sdk subpaths:
  - source: `path` [M] `extensions/qianfan/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/qianfan/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/qianfan/package.json` — semantic cue
  - source: `path` [M] `extensions/qianfan/provider-catalog.ts` — semantic cue
- `user-visible-迁移-重构-build-qianfan-and-xiaomi-catalogs-from-ma` / 迁移/重构 build qianfan and xiaomi catalogs from manifests:
  - source: `path` [M] `extensions/qianfan/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/qianfan/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/qianfan/package.json` — semantic cue
  - source: `path` [M] `extensions/qianfan/provider-catalog.ts` — semantic cue
- `migration-迁移-重构-expose-plugin-test-helpers-via-sdk` / 迁移/重构 expose plugin test helpers via sdk:
  - source: `path` [M] `extensions/qianfan/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/qianfan/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/qianfan/package.json` — semantic cue
  - source: `path` [M] `extensions/qianfan/provider-catalog.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/qianfan/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/qianfan/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/qianfan/package.json` — semantic cue
  - source: `path` [M] `extensions/qianfan/provider-catalog.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/qianfan/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/qianfan/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/qianfan/index.test.ts` — test evidence

### 路径证据

- 修改 `extensions/qianfan/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/qianfan/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/qianfan/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/qianfan/provider-catalog.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/qianfan` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/qianfan/change-to-test.md` 的验证建议。
