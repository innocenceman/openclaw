# extensions/provider-plugins/vllm

## 1. 功能结论

**修改**：mark provider plugins startup lazy、align plugin runtime dependency contracts；**迁移/重构**：plugin-sdk narrow config runtime imports、vllm own nemotron thinking payloads、centralize provider stream fallback ownership、vllm own qwen thinking payloads；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 2、修改 5

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/vllm`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 align plugin runtime dependency contracts

修复 align plugin runtime dependency contracts

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/vllm`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 centralize provider stream fallback ownership

迁移/重构 centralize provider stream fallback ownership

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/vllm`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 gateway move model pricing policy to manifests

迁移/重构 gateway：move model pricing policy to manifests

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/vllm`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 plugin-sdk narrow config runtime imports

迁移/重构 plugin-sdk：narrow config runtime imports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/vllm`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 plugins move provider routing metadata to manifests

迁移/重构 plugins：move provider routing metadata to manifests

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/vllm`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 vllm own nemotron thinking payloads

迁移/重构 vllm：own nemotron thinking payloads

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/vllm`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 vllm own qwen thinking payloads

迁移/重构 vllm：own qwen thinking payloads

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/vllm`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 vllm public API barrel、plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/vllm`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/vllm`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 stream regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/vllm`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/vllm`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/vllm`
- Changed path count: `7`
- Status counts: `新增 2、修改 5`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `7` files, `+469` / `-2`

### 归纳依据

- 主要落点：plugin entry/API surface、manifest/package metadata、streaming/reasoning、model/thinking policy。
- 新增或暴露的关键符号包括：`capturePayload`, `isVllmProviderId`, `normalizeQwenThinkingFormat`, `resolveVllmQwenThinkingFormat`, `setQwenChatTemplateThinking`, `isVllmNemotronModel`, `setNemotronThinkingOffChatTemplateKwargs`, `createVllmQwenThinkingWrapper`, `createVllmProviderThinkingWrapper`, `wrapVllmProviderStream`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/vllm`；`pnpm test:extensions`。
- 相关 commit 主题：perf: mark provider plugins startup lazy；refactor(plugin-sdk): narrow config runtime imports；refactor(vllm): own nemotron thinking payloads；refactor: centralize provider stream fallback ownership；fix: align plugin runtime dependency contracts；refactor(vllm): own qwen thinking payloads；refactor(plugins): move provider routing metadata to manifests；refactor(gateway): move model pricing policy to manifests

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [A] `extensions/vllm/stream.test.ts`
  - source: `path` [A] `extensions/vllm/stream.ts`
  - source: `path` [M] `extensions/vllm/api.ts`
  - source: `path` [M] `extensions/vllm/index.ts`
  - source: `path` [M] `extensions/vllm/models.ts`
- `public-contract-修复-align-plugin-runtime-dependency-contracts` / 修复 align plugin runtime dependency contracts:
  - source: `path` [M] `extensions/vllm/openclaw.plugin.json` — semantic cue
- `runtime-behavior-迁移-重构-centralize-provider-stream-fallback-owner` / 迁移/重构 centralize provider stream fallback ownership:
  - source: `path` [M] `extensions/vllm/api.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/index.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/models.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/vllm/package.json` — semantic cue
  - source: `path` [M] `extensions/vllm/stream.test.ts` — semantic cue
- `public-contract-迁移-重构-gateway-move-model-pricing-policy-to-mani` / 迁移/重构 gateway move model pricing policy to manifests:
  - source: `path` [M] `extensions/vllm/api.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/index.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/models.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/vllm/package.json` — semantic cue
  - source: `path` [M] `extensions/vllm/stream.test.ts` — semantic cue
- `runtime-behavior-迁移-重构-plugin-sdk-narrow-config-runtime-imports` / 迁移/重构 plugin-sdk narrow config runtime imports:
  - source: `path` [M] `extensions/vllm/api.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/index.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/models.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/vllm/package.json` — semantic cue
  - source: `path` [M] `extensions/vllm/stream.test.ts` — semantic cue
- `public-contract-迁移-重构-plugins-move-provider-routing-metadata-to` / 迁移/重构 plugins move provider routing metadata to manifests:
  - source: `path` [M] `extensions/vllm/api.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/index.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/models.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/vllm/package.json` — semantic cue
  - source: `path` [M] `extensions/vllm/stream.test.ts` — semantic cue
- `runtime-behavior-迁移-重构-vllm-own-nemotron-thinking-payloads` / 迁移/重构 vllm own nemotron thinking payloads:
  - source: `path` [M] `extensions/vllm/api.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/index.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/models.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/vllm/package.json` — semantic cue
  - source: `path` [M] `extensions/vllm/stream.test.ts` — semantic cue
- `runtime-behavior-迁移-重构-vllm-own-qwen-thinking-payloads` / 迁移/重构 vllm own qwen thinking payloads:
  - source: `path` [M] `extensions/vllm/api.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/index.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/models.ts` — semantic cue
  - source: `path` [M] `extensions/vllm/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/vllm/package.json` — semantic cue
  - source: `path` [M] `extensions/vllm/stream.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/vllm/api.ts` — contract evidence
  - source: `path` [M] `extensions/vllm/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/vllm/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/vllm/stream.test.ts` — test evidence

### 路径证据

- 新增 `extensions/vllm/stream.test.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 新增 `extensions/vllm/stream.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 修改 `extensions/vllm/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/vllm/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/vllm/models.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `extensions/vllm/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、模型计价/成本归属、provider request family。
- 修改 `extensions/vllm/package.json`：更新插件包元数据/版本或依赖声明。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/vllm` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/vllm/change-to-test.md` 的验证建议。
