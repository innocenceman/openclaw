# extensions/provider-plugins/ollama

## 1. 功能结论

**修改**：ollama restore catalog-driven num_ctx for native /api/chat、Found one narrow regression risk in the new Ollama tool-call name、ollama normalize prefixed tool calls、ollama preserve aborts with stream timeouts；**迁移/重构**：trim provider helper exports、drop duplicate ollama embedding default；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 7、修改 21

## 3. 功能级详细差异

### 修复 Found one narrow regression risk in the new Ollama tool-call name

修复 Found one narrow regression risk in the new Ollama tool-call name

- 验证提示：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 置信度：`high`

### 修复 media propagate image timeout to providers

修复 media：propagate image timeout to providers

- 验证提示：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 置信度：`high`

### 修复 ollama normalize prefixed tool calls

修复 ollama：normalize prefixed tool calls

- 验证提示：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 置信度：`high`

### 修复 ollama preserve aborts with stream timeouts

修复 ollama：preserve aborts with stream timeouts

- 验证提示：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 置信度：`high`

### 修复 ollama resolve cloud models omitted from tags

修复 ollama：resolve cloud models omitted from tags

- 验证提示：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 置信度：`high`

### 修复 ollama restore catalog-driven num_ctx for native /api/chat

修复 ollama：restore catalog-driven num_ctx for native /api/chat

- 验证提示：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 置信度：`high`

### 文档同步 types mark remaining deprecated aliases

文档同步 types：mark remaining deprecated aliases

- 验证提示：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 置信度：`high`

### 测试覆盖 media cover timeout request forwarding

测试覆盖 media：cover timeout request forwarding

- 验证提示：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 置信度：`high`

### 迁移/重构 drop duplicate ollama embedding default

迁移/重构 drop duplicate ollama embedding default

- 验证提示：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 置信度：`high`

### 迁移/重构 trim provider helper exports

迁移/重构 trim provider helper exports

- 验证提示：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 ollama plugin entrypoint、ollama regression/contract coverage、plugin registration regression/contract coverage、provider discovery regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/ollama`
- Changed path count: `28`
- Status counts: `新增 7、修改 21`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `28` files, `+4142` / `-294`

### 归纳依据

- 主要落点：tests/contracts、implementation、streaming/reasoning、manifest/package metadata、plugin entry/API surface、model/thinking policy。
- 新增或暴露的关键符号包括：`captureWrappedOllamaPayload`, `buildDynamicCacheKey`, `hasOllamaDiscoverySignal`, `toDynamicOllamaModel`, `LIVE`, `OLLAMA_BASE_URL`, `CHAT_MODEL`, `EMBEDDING_MODEL`, `PROVIDER_ID`, `RUN_WEB_SEARCH`。
- 建议优先验证：优先运行 `pnpm test -- extensions/ollama/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts`。
- 相关 commit 主题：fix(ollama): restore catalog-driven num_ctx for native /api/chat；refactor: trim provider helper exports；refactor: drop duplicate ollama embedding default；fix: Found one narrow regression risk in the new Ollama tool-call name；fix(ollama): normalize prefixed tool calls；fix(ollama): preserve aborts with stream timeouts；docs(types): mark remaining deprecated aliases；test(media): cover timeout request forwarding

### Dimension evidence

- `maintenance-修复-Found-one-narrow-regression-risk-in-the-new` / 修复 Found one narrow regression risk in the new Ollama tool-call name:
  - source: `path` [M] `extensions/ollama/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/index.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/ollama.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/ollama/package.json` — semantic cue
  - source: `path` [M] `extensions/ollama/plugin-registration.contract.test.ts` — semantic cue
- `maintenance-修复-media-propagate-image-timeout-to-providers` / 修复 media propagate image timeout to providers:
  - source: `path` [A] `extensions/ollama/ollama.live.test.ts`
  - source: `path` [A] `extensions/ollama/src/discovery-shared.test.ts`
  - source: `path` [A] `extensions/ollama/src/model-id.ts`
  - source: `path` [M] `extensions/ollama/index.test.ts`
  - source: `path` [M] `extensions/ollama/index.ts`
  - source: `path` [M] `extensions/ollama/openclaw.plugin.json`
- `maintenance-修复-ollama-normalize-prefixed-tool-calls` / 修复 ollama normalize prefixed tool calls:
  - source: `path` [M] `extensions/ollama/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/index.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/ollama.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/ollama/package.json` — semantic cue
  - source: `path` [M] `extensions/ollama/plugin-registration.contract.test.ts` — semantic cue
- `runtime-behavior-修复-ollama-preserve-aborts-with-stream-timeouts` / 修复 ollama preserve aborts with stream timeouts:
  - source: `path` [M] `extensions/ollama/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/index.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/ollama.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/ollama/package.json` — semantic cue
  - source: `path` [M] `extensions/ollama/plugin-registration.contract.test.ts` — semantic cue
- `maintenance-修复-ollama-resolve-cloud-models-omitted-from-tags` / 修复 ollama resolve cloud models omitted from tags:
  - source: `path` [M] `extensions/ollama/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/index.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/ollama.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/ollama/package.json` — semantic cue
  - source: `path` [M] `extensions/ollama/plugin-registration.contract.test.ts` — semantic cue
- `public-contract-修复-ollama-restore-catalog-driven-num-ctx-for-na` / 修复 ollama restore catalog-driven num_ctx for native /api/chat:
  - source: `path` [M] `extensions/ollama/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/index.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/ollama.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/ollama/package.json` — semantic cue
  - source: `path` [M] `extensions/ollama/plugin-registration.contract.test.ts` — semantic cue
- `tests-docs-文档同步-types-mark-remaining-deprecated-aliases` / 文档同步 types mark remaining deprecated aliases:
  - source: `path` [A] `extensions/ollama/ollama.live.test.ts`
  - source: `path` [A] `extensions/ollama/src/discovery-shared.test.ts`
  - source: `path` [A] `extensions/ollama/src/model-id.ts`
  - source: `path` [M] `extensions/ollama/index.test.ts`
  - source: `path` [M] `extensions/ollama/index.ts`
  - source: `path` [M] `extensions/ollama/openclaw.plugin.json`
- `tests-docs-测试覆盖-media-cover-timeout-request-forwarding` / 测试覆盖 media cover timeout request forwarding:
  - source: `path` [M] `extensions/ollama/provider-discovery.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/provider-discovery.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/src/discovery-shared.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/src/discovery-shared.ts` — semantic cue
- `migration-迁移-重构-drop-duplicate-ollama-embedding-default` / 迁移/重构 drop duplicate ollama embedding default:
  - source: `path` [M] `extensions/ollama/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/index.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/ollama.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/ollama/package.json` — semantic cue
  - source: `path` [M] `extensions/ollama/plugin-registration.contract.test.ts` — semantic cue
- `migration-迁移-重构-trim-provider-helper-exports` / 迁移/重构 trim provider helper exports:
  - source: `path` [M] `extensions/ollama/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/index.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/ollama.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/ollama/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/ollama/package.json` — semantic cue
  - source: `path` [M] `extensions/ollama/plugin-registration.contract.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/ollama/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/ollama/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/ollama/index.test.ts` — test evidence
  - source: `path` [M] `extensions/ollama/ollama.live.test.ts` — test evidence
  - source: `path` [M] `extensions/ollama/plugin-registration.contract.test.ts` — test evidence
  - source: `path` [M] `extensions/ollama/provider-discovery.test.ts` — test evidence
  - source: `path` [M] `extensions/ollama/src/discovery-shared.test.ts` — test evidence
  - source: `path` [M] `extensions/ollama/src/embedding-provider.test.ts` — test evidence

### 路径证据

- 新增 `extensions/ollama/ollama.live.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/ollama/src/discovery-shared.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/ollama/src/model-id.ts`：调整 model id（implementation）。
- 新增 `extensions/ollama/src/provider-base-url.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/ollama/src/provider-base-url.ts`：调整 provider base url（implementation）。
- 新增 `extensions/ollama/src/wsl2-crash-loop-check.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/ollama/src/wsl2-crash-loop-check.ts`：调整 wsl2 crash loop check（implementation）。
- 修改 `extensions/ollama/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/ollama/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/ollama/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、模型计价/成本归属、provider request family。
- 修改 `extensions/ollama/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/ollama/plugin-registration.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/ollama/provider-discovery.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/ollama/provider-discovery.ts`：调整 provider discovery（implementation）。
- 修改 `extensions/ollama/src/defaults.ts`：调整 defaults（implementation）。
- 修改 `extensions/ollama/src/discovery-shared.ts`：调整 discovery shared（implementation）。
- 修改 `extensions/ollama/src/embedding-provider.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/ollama/src/embedding-provider.ts`：调整 embedding provider（implementation）。
- 修改 `extensions/ollama/src/memory-embedding-adapter.ts`：调整 memory embedding adapter（implementation）。
- 其余 9 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/ollama` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/ollama/change-to-test.md` 的验证建议。
