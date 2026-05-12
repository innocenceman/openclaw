# extensions/provider-plugins/moonshot

## 1. 功能结论

**修改**：kimi reject ungrounded web search answers、web-search improve missing key guidance、relax live web search timeouts、stabilize release live e2e probes；**迁移/重构**：插件 SDK test runtime/contracts、trim provider constant exports、trim provider discovery internal exports、remove stale provider helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 11

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 kimi reject ungrounded web search answers

修复 kimi：reject ungrounded web search answers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 web-search improve missing key guidance

修复 web-search：improve missing key guidance

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 relax live web search timeouts

测试覆盖 relax live web search timeouts

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 stabilize release live e2e probes

测试覆盖 stabilize release live e2e probes

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 置信度：`high`

### 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…

测试迁移到插件 SDK test runtime/contracts：OpenRouter 测试从 repo 内部 helper 改为 `openclaw/plugin-sdk/*` 测试契约，减少 core 深层测试耦合。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 build moonshot catalog from manifest

迁移/重构 build moonshot catalog from manifest

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 remove stale provider helpers

迁移/重构 remove stale provider helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim provider constant exports

迁移/重构 trim provider constant exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim provider discovery internal exports

迁移/重构 trim provider discovery internal exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 moonshot plugin entrypoint、media understanding provider regression/contract coverage、moonshot regression/contract coverage、kimi web search provider regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/moonshot`
- Changed path count: `11`
- Status counts: `修改 11`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `11` files, `+352` / `-100`

### 归纳依据

- 主要落点：tests/contracts、implementation、manifest/package metadata、provider catalog。
- 新增或暴露的关键符号包括：`DEFAULT_MOONSHOT_VIDEO_BASE_URL`, `KIMI_LIVE_SEARCH_TIMEOUT_SECONDS`, `isTransientKimiSearchError`, `hasKimiSearchResults`, `jsonResponse`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/moonshot`；`pnpm test:extensions`。
- 相关 commit 主题：fix(kimi): reject ungrounded web search answers；fix(web-search): improve missing key guidance；refactor: trim provider constant exports；refactor: trim provider discovery internal exports；refactor: remove stale provider helpers；test: relax live web search timeouts；test: stabilize release live e2e probes；refactor: build moonshot catalog from manifest

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/moonshot/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/media-understanding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/provider-catalog.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/provider-discovery.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/src/kimi-web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/src/kimi-web-search-provider.test.ts` — semantic cue
- `maintenance-修复-kimi-reject-ungrounded-web-search-answers` / 修复 kimi reject ungrounded web search answers:
  - source: `path` [M] `extensions/moonshot/src/kimi-web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/src/kimi-web-search-provider.test.ts` — semantic cue
- `user-visible-修复-web-search-improve-missing-key-guidance` / 修复 web-search improve missing key guidance:
  - source: `path` [M] `extensions/moonshot/src/kimi-web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/src/kimi-web-search-provider.test.ts` — semantic cue
- `tests-docs-测试覆盖-relax-live-web-search-timeouts` / 测试覆盖 relax live web search timeouts:
  - source: `path` [M] `extensions/moonshot/moonshot.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/src/kimi-web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/src/kimi-web-search-provider.test.ts` — semantic cue
- `tests-docs-测试覆盖-stabilize-release-live-e2e-probes` / 测试覆盖 stabilize release live e2e probes:
  - source: `path` [M] `extensions/moonshot/moonshot.live.test.ts` — semantic cue
- `public-contract-测试迁移到插件-SDK-test-runtime-contracts-OpenRouter-测` / 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…:
  - source: `path` [M] `extensions/moonshot/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/moonshot.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/src/kimi-web-search-provider.test.ts` — semantic cue
- `user-visible-迁移-重构-build-moonshot-catalog-from-manifest` / 迁移/重构 build moonshot catalog from manifest:
  - source: `path` [M] `extensions/moonshot/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/media-understanding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/moonshot.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/openclaw.plugin.json` — semantic cue
- `migration-迁移-重构-remove-stale-provider-helpers` / 迁移/重构 remove stale provider helpers:
  - source: `path` [M] `extensions/moonshot/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/media-understanding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/moonshot.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/openclaw.plugin.json` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/moonshot/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/media-understanding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/moonshot.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/openclaw.plugin.json` — semantic cue
- `migration-迁移-重构-trim-provider-constant-exports` / 迁移/重构 trim provider constant exports:
  - source: `path` [M] `extensions/moonshot/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/media-understanding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/moonshot.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/openclaw.plugin.json` — semantic cue
- `migration-迁移-重构-trim-provider-discovery-internal-exports` / 迁移/重构 trim provider discovery internal exports:
  - source: `path` [M] `extensions/moonshot/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/media-understanding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/moonshot.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/onboard.ts` — semantic cue
  - source: `path` [M] `extensions/moonshot/openclaw.plugin.json` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/moonshot/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/moonshot/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/moonshot/index.test.ts` — test evidence
  - source: `path` [M] `extensions/moonshot/media-understanding-provider.test.ts` — test evidence
  - source: `path` [M] `extensions/moonshot/moonshot.live.test.ts` — test evidence
  - source: `path` [M] `extensions/moonshot/src/kimi-web-search-provider.test.ts` — test evidence

### 路径证据

- 修改 `extensions/moonshot/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/moonshot/media-understanding-provider.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/moonshot/media-understanding-provider.ts`：调整 media understanding provider（implementation）。
- 修改 `extensions/moonshot/moonshot.live.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/moonshot/onboard.ts`：调整 onboard（implementation）。
- 修改 `extensions/moonshot/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、模型计价/成本归属、provider endpoint 识别、provider request family。
- 修改 `extensions/moonshot/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/moonshot/provider-catalog.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 修改 `extensions/moonshot/provider-discovery.ts`：调整 provider discovery（implementation）。
- 修改 `extensions/moonshot/src/kimi-web-search-provider.runtime.ts`：调整 kimi web search provider（implementation）。
- 修改 `extensions/moonshot/src/kimi-web-search-provider.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/moonshot` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/moonshot/change-to-test.md` 的验证建议。
