# extensions/tool-capability-plugins/firecrawl

## 1. 功能结论

**修改**：firecrawl block unsafe scrape targets、web-search restrict private network guard、web-search support self-hosted Firecrawl、mark capability plugins startup lazy；**迁移/重构**：trim slack test helper exports、trim provider helper exports、split plugin sdk test helpers、plugin-sdk narrow config runtime imports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 7

## 3. 功能级详细差异

### 优化 mark capability plugins startup lazy

优化 mark capability plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/firecrawl`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 firecrawl block unsafe scrape targets

修复 firecrawl：block unsafe scrape targets

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/firecrawl`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 web-search restrict private network guard

修复 web-search：restrict private network guard

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/firecrawl`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 web-search support self-hosted Firecrawl

修复 web-search：support self-hosted Firecrawl

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/firecrawl`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 route extension tests through sdk subpaths

测试覆盖 route extension tests through sdk subpaths

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/firecrawl`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 plugin-sdk narrow config runtime imports

迁移/重构 plugin-sdk：narrow config runtime imports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/firecrawl`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/firecrawl`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim provider helper exports

迁移/重构 trim provider helper exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/firecrawl`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim slack test helper exports

迁移/重构 trim slack test helper exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/firecrawl`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 firecrawl public API barrel、plugin manifest/control-plane metadata、src config，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/firecrawl`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/firecrawl`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 firecrawl tools regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/firecrawl`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/firecrawl`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/firecrawl`
- Changed path count: `7`
- Status counts: `修改 7`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `7` files, `+234` / `-36`

### 归纳依据

- 主要落点：manifest/package metadata、implementation、plugin entry/API surface、configuration/schema、tests/contracts。
- 新增或暴露的关键符号包括：`resolveFirecrawlFetchConfig`, `FIRECRAWL_SELF_HOSTED_PRIVATE_ERROR`, `FIRECRAWL_HTTP_PRIVATE_ERROR`, `assertFirecrawlScrapeTargetAllowed`, `isOfficialFirecrawlEndpoint`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/firecrawl`；`pnpm test:extensions`。
- 相关 commit 主题：fix(firecrawl): block unsafe scrape targets；fix(web-search): restrict private network guard；fix(web-search): support self-hosted Firecrawl；refactor: trim slack test helper exports；refactor: trim provider helper exports；perf: mark capability plugins startup lazy；refactor: split plugin sdk test helpers；test: route extension tests through sdk subpaths

### Dimension evidence

- `maintenance-优化-mark-capability-plugins-startup-lazy` / 优化 mark capability plugins startup lazy:
  - source: `path` [M] `extensions/firecrawl/api.ts`
  - source: `path` [M] `extensions/firecrawl/openclaw.plugin.json`
  - source: `path` [M] `extensions/firecrawl/package.json`
- `maintenance-修复-firecrawl-block-unsafe-scrape-targets` / 修复 firecrawl block unsafe scrape targets:
  - source: `path` [M] `extensions/firecrawl/api.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/firecrawl/package.json` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/config.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-client.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-fetch-provider-shared.ts` — semantic cue
- `maintenance-修复-web-search-restrict-private-network-guard` / 修复 web-search restrict private network guard:
  - source: `path` [M] `extensions/firecrawl/api.ts`
  - source: `path` [M] `extensions/firecrawl/openclaw.plugin.json`
  - source: `path` [M] `extensions/firecrawl/package.json`
- `maintenance-修复-web-search-support-self-hosted-Firecrawl` / 修复 web-search support self-hosted Firecrawl:
  - source: `path` [M] `extensions/firecrawl/api.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/firecrawl/package.json` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/config.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-client.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-fetch-provider-shared.ts` — semantic cue
- `tests-docs-测试覆盖-route-extension-tests-through-sdk-subpaths` / 测试覆盖 route extension tests through sdk subpaths:
  - source: `path` [M] `extensions/firecrawl/api.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/firecrawl/package.json` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/config.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-client.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-fetch-provider-shared.ts` — semantic cue
- `runtime-behavior-迁移-重构-plugin-sdk-narrow-config-runtime-imports` / 迁移/重构 plugin-sdk narrow config runtime imports:
  - source: `path` [M] `extensions/firecrawl/api.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/firecrawl/package.json` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/config.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-client.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-fetch-provider-shared.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/firecrawl/api.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/firecrawl/package.json` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/config.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-client.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-fetch-provider-shared.ts` — semantic cue
- `migration-迁移-重构-trim-provider-helper-exports` / 迁移/重构 trim provider helper exports:
  - source: `path` [M] `extensions/firecrawl/api.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/firecrawl/package.json` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/config.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-client.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-fetch-provider-shared.ts` — semantic cue
- `migration-迁移-重构-trim-slack-test-helper-exports` / 迁移/重构 trim slack test helper exports:
  - source: `path` [M] `extensions/firecrawl/api.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/firecrawl/package.json` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/config.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-client.ts` — semantic cue
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-fetch-provider-shared.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/firecrawl/api.ts` — contract evidence
  - source: `path` [M] `extensions/firecrawl/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/firecrawl/src/config.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/firecrawl/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/firecrawl/src/firecrawl-tools.test.ts` — test evidence

### 路径证据

- 修改 `extensions/firecrawl/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/firecrawl/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/firecrawl/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/firecrawl/src/config.ts`：调整 src config（configuration/schema）。
- 修改 `extensions/firecrawl/src/firecrawl-client.ts`：调整 firecrawl client（implementation）。
- 修改 `extensions/firecrawl/src/firecrawl-fetch-provider-shared.ts`：调整 firecrawl fetch provider shared（implementation）。
- 修改 `extensions/firecrawl/src/firecrawl-tools.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/tool-capability-plugins/firecrawl` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/tool-capability-plugins/firecrawl/change-to-test.md` 的验证建议。
