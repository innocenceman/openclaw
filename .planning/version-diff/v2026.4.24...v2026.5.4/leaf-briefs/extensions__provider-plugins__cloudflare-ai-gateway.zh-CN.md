# extensions/provider-plugins/cloudflare-ai-gateway

## 1. 功能结论

**修改**：mark provider plugins startup lazy、cloudflare-ai-gateway strip anthropic thinking prefill；**迁移/重构**：插件 SDK test runtime/contracts、trim provider internal exports、split plugin sdk test helpers、promote plugin test helpers to sdk；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 3、修改 5

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/cloudflare-ai-gateway`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 cloudflare-ai-gateway strip anthropic thinking prefill

修复 cloudflare-ai-gateway：strip anthropic thinking prefill

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/cloudflare-ai-gateway`；`pnpm test:extensions`。
- 置信度：`high`

### 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…

测试迁移到插件 SDK test runtime/contracts：OpenRouter 测试从 repo 内部 helper 改为 `openclaw/plugin-sdk/*` 测试契约，减少 core 深层测试耦合。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/cloudflare-ai-gateway`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 gateway move model pricing policy to manifests

迁移/重构 gateway：move model pricing policy to manifests

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/cloudflare-ai-gateway`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 promote plugin test helpers to sdk

迁移/重构 promote plugin test helpers to sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/cloudflare-ai-gateway`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/cloudflare-ai-gateway`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim provider internal exports

迁移/重构 trim provider internal exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/cloudflare-ai-gateway`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/cloudflare-ai-gateway`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/cloudflare-ai-gateway`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 cloudflare ai gateway plugin entrypoint、provider discovery regression/contract coverage、stream wrappers regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/cloudflare-ai-gateway`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/cloudflare-ai-gateway`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/cloudflare-ai-gateway`
- Changed path count: `8`
- Status counts: `新增 3、修改 5`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `8` files, `+255` / `-7`

### 归纳依据

- 主要落点：gateway runtime。
- 新增或暴露的关键符号包括：`resolveCloudflareAiGatewayApiKey`, `resolveCloudflareAiGatewayMetadata`, `registerProvider`, `createPayloadBaseStream`, `runWrapper`, `shouldPatchAnthropicMessagesPayload`, `createCloudflareAiGatewayAnthropicThinkingPrefillWrapper`, `wrapCloudflareAiGatewayProviderStream`, `__testing`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/cloudflare-ai-gateway`；`pnpm test:extensions`。
- 相关 commit 主题：refactor: trim provider internal exports；perf: mark provider plugins startup lazy；refactor: split plugin sdk test helpers；refactor: promote plugin test helpers to sdk；fix(cloudflare-ai-gateway): strip anthropic thinking prefill；refactor(gateway): move model pricing policy to manifests

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/cloudflare-ai-gateway/catalog-provider.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts` — semantic cue
- `runtime-behavior-修复-cloudflare-ai-gateway-strip-anthropic-thinki` / 修复 cloudflare-ai-gateway strip anthropic thinking prefill:
  - source: `path` [M] `extensions/cloudflare-ai-gateway/catalog-provider.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/index.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/package.json` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts` — semantic cue
- `public-contract-测试迁移到插件-SDK-test-runtime-contracts-OpenRouter-测` / 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…:
  - source: `path` [M] `extensions/cloudflare-ai-gateway/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/stream-wrappers.test.ts` — semantic cue
- `public-contract-迁移-重构-gateway-move-model-pricing-policy-to-mani` / 迁移/重构 gateway move model pricing policy to manifests:
  - source: `path` [M] `extensions/cloudflare-ai-gateway/catalog-provider.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/index.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/package.json` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts` — semantic cue
- `migration-迁移-重构-promote-plugin-test-helpers-to-sdk` / 迁移/重构 promote plugin test helpers to sdk:
  - source: `path` [M] `extensions/cloudflare-ai-gateway/catalog-provider.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/index.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/package.json` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/cloudflare-ai-gateway/catalog-provider.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/index.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/package.json` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts` — semantic cue
- `migration-迁移-重构-trim-provider-internal-exports` / 迁移/重构 trim provider internal exports:
  - source: `path` [M] `extensions/cloudflare-ai-gateway/catalog-provider.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/index.ts` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/package.json` — semantic cue
  - source: `path` [M] `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/cloudflare-ai-gateway/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/cloudflare-ai-gateway/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/cloudflare-ai-gateway/index.test.ts` — test evidence
  - source: `path` [M] `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts` — test evidence
  - source: `path` [M] `extensions/cloudflare-ai-gateway/stream-wrappers.test.ts` — test evidence

### 路径证据

- 新增 `extensions/cloudflare-ai-gateway/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/cloudflare-ai-gateway/stream-wrappers.test.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 新增 `extensions/cloudflare-ai-gateway/stream-wrappers.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 修改 `extensions/cloudflare-ai-gateway/catalog-provider.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 修改 `extensions/cloudflare-ai-gateway/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/cloudflare-ai-gateway/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、模型计价/成本归属。
- 修改 `extensions/cloudflare-ai-gateway/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/cloudflare-ai-gateway` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/cloudflare-ai-gateway/change-to-test.md` 的验证建议。
