# extensions/provider-plugins/kilocode

## 1. 功能结论

**新增**：declare chutes and kilocode model catalogs；**修改**：extensions guard model and Twilio fetches、clear changed gate regressions、guard plugin HTTP calls in CI、mark provider plugins startup lazy；**迁移/重构**：插件 SDK test runtime/contracts、trim provider helper exports、trim private extension exports、remove dead private helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：修改 6、删除 1

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 clear changed gate regressions

修复 clear changed gate regressions

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 extensions guard model and Twilio fetches

修复 extensions：guard model and Twilio fetches

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 guard plugin HTTP calls in CI

修复 guard plugin HTTP calls in CI

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 declare chutes and kilocode model catalogs

新增 declare chutes and kilocode model catalogs

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 置信度：`high`

### 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…

测试迁移到插件 SDK test runtime/contracts：OpenRouter 测试从 repo 内部 helper 改为 `openclaw/plugin-sdk/*` 测试契约，减少 core 深层测试耦合。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 expose SDK test helper subpaths

迁移/重构 expose SDK test helper subpaths

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 remove dead private helpers

迁移/重构 remove dead private helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim private extension exports

迁移/重构 trim private extension exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim provider helper exports

迁移/重构 trim provider helper exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 kilocode plugin entrypoint、onboard regression/contract coverage、provider models regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `shared`（`extensions/kilocode/shared.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/kilocode`
- Changed path count: `7`
- Status counts: `修改 6、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `7` files, `+154` / `-60`

### 归纳依据

- 主要落点：tests/contracts、manifest/package metadata、model/thinking policy、implementation。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/kilocode`；`pnpm test:extensions`。
- 相关 commit 主题：refactor: trim provider helper exports；refactor: trim private extension exports；fix(extensions): guard model and Twilio fetches；fix: clear changed gate regressions；fix: guard plugin HTTP calls in CI；refactor: remove dead private helpers；perf: mark provider plugins startup lazy；refactor: expose SDK test helper subpaths

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/kilocode/provider-models.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.ts` — semantic cue
- `maintenance-修复-clear-changed-gate-regressions` / 修复 clear changed gate regressions:
  - source: `path` [M] `extensions/kilocode/index.test.ts`
  - source: `path` [M] `extensions/kilocode/onboard.test.ts`
  - source: `path` [M] `extensions/kilocode/openclaw.plugin.json`
  - source: `path` [D] `extensions/kilocode/shared.ts`
- `maintenance-修复-extensions-guard-model-and-Twilio-fetches` / 修复 extensions guard model and Twilio fetches:
  - source: `path` [M] `extensions/kilocode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/kilocode/package.json` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.ts` — semantic cue
- `maintenance-修复-guard-plugin-HTTP-calls-in-CI` / 修复 guard plugin HTTP calls in CI:
  - source: `path` [M] `extensions/kilocode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/openclaw.plugin.json` — semantic cue
- `runtime-behavior-新增-declare-chutes-and-kilocode-model-catalogs` / 新增 declare chutes and kilocode model catalogs:
  - source: `path` [M] `extensions/kilocode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/kilocode/package.json` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.ts` — semantic cue
- `public-contract-测试迁移到插件-SDK-test-runtime-contracts-OpenRouter-测` / 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…:
  - source: `path` [M] `extensions/kilocode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.test.ts` — semantic cue
- `migration-迁移-重构-expose-SDK-test-helper-subpaths` / 迁移/重构 expose SDK test helper subpaths:
  - source: `path` [M] `extensions/kilocode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/kilocode/package.json` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.ts` — semantic cue
- `migration-迁移-重构-remove-dead-private-helpers` / 迁移/重构 remove dead private helpers:
  - source: `path` [M] `extensions/kilocode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/kilocode/package.json` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/kilocode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/kilocode/package.json` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.ts` — semantic cue
- `migration-迁移-重构-trim-private-extension-exports` / 迁移/重构 trim private extension exports:
  - source: `path` [M] `extensions/kilocode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/kilocode/package.json` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.ts` — semantic cue
- `migration-迁移-重构-trim-provider-helper-exports` / 迁移/重构 trim provider helper exports:
  - source: `path` [M] `extensions/kilocode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/kilocode/package.json` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.test.ts` — semantic cue
  - source: `path` [M] `extensions/kilocode/provider-models.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/kilocode/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/kilocode/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/kilocode/index.test.ts` — test evidence
  - source: `path` [M] `extensions/kilocode/onboard.test.ts` — test evidence
  - source: `path` [M] `extensions/kilocode/provider-models.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/kilocode/shared.ts`

### 路径证据

- 修改 `extensions/kilocode/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/kilocode/onboard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/kilocode/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、模型计价/成本归属。
- 修改 `extensions/kilocode/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/kilocode/provider-models.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/kilocode/provider-models.ts`：调整 provider models（model/thinking policy）。
- 删除 `extensions/kilocode/shared.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/kilocode` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/kilocode/change-to-test.md` 的验证建议。
