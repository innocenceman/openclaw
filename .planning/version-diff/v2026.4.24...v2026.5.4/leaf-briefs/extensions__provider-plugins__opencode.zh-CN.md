# extensions/provider-plugins/opencode

## 1. 功能结论

**修改**：opencode expose Claude thinking policy、mark provider plugins startup lazy、opencode expose Claude thinking levels；**迁移/重构**：插件 SDK test runtime/contracts、expose SDK test helper subpaths、split plugin sdk test helpers、promote plugin test helpers to sdk；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 2、修改 6

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 opencode expose Claude thinking levels

修复 opencode：expose Claude thinking levels

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 opencode expose Claude thinking policy

修复 opencode：expose Claude thinking policy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 置信度：`high`

### 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…

测试迁移到插件 SDK test runtime/contracts：OpenRouter 测试从 repo 内部 helper 改为 `openclaw/plugin-sdk/*` 测试契约，减少 core 深层测试耦合。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 expose SDK test helper subpaths

迁移/重构 expose SDK test helper subpaths

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 expose plugin test helpers via sdk

迁移/重构 expose plugin test helpers via sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 keep plugin sdk owner seams explicit

迁移/重构 keep plugin sdk owner seams explicit

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 plugins move provider routing metadata to manifests

迁移/重构 plugins：move provider routing metadata to manifests

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 promote plugin test helpers to sdk

迁移/重构 promote plugin test helpers to sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 providers share Claude thinking profiles

迁移/重构 providers：share Claude thinking profiles

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata、provider policy api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 opencode plugin entrypoint、onboard regression/contract coverage、plugin registration regression/contract coverage、provider policy api regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/opencode`
- Changed path count: `8`
- Status counts: `新增 2、修改 6`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `8` files, `+124` / `-10`

### 归纳依据

- 主要落点：tests/contracts、manifest/package metadata、model/thinking policy、plugin entry/API surface。
- 新增或暴露的关键符号包括：`OPENCODE_SHARED_PROFILE_IDS`, `OPENCODE_SHARED_HINT`, `OPENCODE_SHARED_WIZARD_GROUP`, `resolveThinkingProfile`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/opencode`；`pnpm test:extensions`。
- 相关 commit 主题：fix(opencode): expose Claude thinking policy；perf: mark provider plugins startup lazy；refactor: expose SDK test helper subpaths；refactor: split plugin sdk test helpers；refactor: promote plugin test helpers to sdk；refactor: expose plugin test helpers via sdk；refactor(providers): share Claude thinking profiles；fix(opencode): expose Claude thinking levels

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/opencode/provider-policy-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/provider-policy-api.ts` — semantic cue
- `runtime-behavior-修复-opencode-expose-Claude-thinking-levels` / 修复 opencode expose Claude thinking levels:
  - source: `path` [M] `extensions/opencode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/index.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/opencode/package.json` — semantic cue
  - source: `path` [M] `extensions/opencode/plugin-registration.contract.test.ts` — semantic cue
- `runtime-behavior-修复-opencode-expose-Claude-thinking-policy` / 修复 opencode expose Claude thinking policy:
  - source: `path` [M] `extensions/opencode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/index.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/opencode/package.json` — semantic cue
  - source: `path` [M] `extensions/opencode/plugin-registration.contract.test.ts` — semantic cue
- `public-contract-测试迁移到插件-SDK-test-runtime-contracts-OpenRouter-测` / 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…:
  - source: `path` [M] `extensions/opencode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/plugin-registration.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/provider-policy-api.test.ts` — semantic cue
- `migration-迁移-重构-expose-SDK-test-helper-subpaths` / 迁移/重构 expose SDK test helper subpaths:
  - source: `path` [M] `extensions/opencode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/index.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/opencode/package.json` — semantic cue
  - source: `path` [M] `extensions/opencode/plugin-registration.contract.test.ts` — semantic cue
- `migration-迁移-重构-expose-plugin-test-helpers-via-sdk` / 迁移/重构 expose plugin test helpers via sdk:
  - source: `path` [M] `extensions/opencode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/index.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/opencode/package.json` — semantic cue
  - source: `path` [M] `extensions/opencode/plugin-registration.contract.test.ts` — semantic cue
- `migration-迁移-重构-keep-plugin-sdk-owner-seams-explicit` / 迁移/重构 keep plugin sdk owner seams explicit:
  - source: `path` [M] `extensions/opencode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/index.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/opencode/package.json` — semantic cue
  - source: `path` [M] `extensions/opencode/plugin-registration.contract.test.ts` — semantic cue
- `public-contract-迁移-重构-plugins-move-provider-routing-metadata-to` / 迁移/重构 plugins move provider routing metadata to manifests:
  - source: `path` [M] `extensions/opencode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/index.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/opencode/package.json` — semantic cue
  - source: `path` [M] `extensions/opencode/plugin-registration.contract.test.ts` — semantic cue
- `migration-迁移-重构-promote-plugin-test-helpers-to-sdk` / 迁移/重构 promote plugin test helpers to sdk:
  - source: `path` [M] `extensions/opencode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/index.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/opencode/package.json` — semantic cue
  - source: `path` [M] `extensions/opencode/plugin-registration.contract.test.ts` — semantic cue
- `runtime-behavior-迁移-重构-providers-share-Claude-thinking-profiles` / 迁移/重构 providers share Claude thinking profiles:
  - source: `path` [M] `extensions/opencode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/index.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/opencode/package.json` — semantic cue
  - source: `path` [M] `extensions/opencode/plugin-registration.contract.test.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/opencode/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/index.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/opencode/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/opencode/package.json` — semantic cue
  - source: `path` [M] `extensions/opencode/plugin-registration.contract.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/opencode/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/opencode/provider-policy-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/opencode/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/opencode/index.test.ts` — test evidence
  - source: `path` [M] `extensions/opencode/onboard.test.ts` — test evidence
  - source: `path` [M] `extensions/opencode/plugin-registration.contract.test.ts` — test evidence
  - source: `path` [M] `extensions/opencode/provider-policy-api.test.ts` — test evidence

### 路径证据

- 新增 `extensions/opencode/provider-policy-api.test.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 新增 `extensions/opencode/provider-policy-api.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `extensions/opencode/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/opencode/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/opencode/onboard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/opencode/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、provider endpoint 识别、provider request family。
- 修改 `extensions/opencode/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/opencode/plugin-registration.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/opencode` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/opencode/change-to-test.md` 的验证建议。
