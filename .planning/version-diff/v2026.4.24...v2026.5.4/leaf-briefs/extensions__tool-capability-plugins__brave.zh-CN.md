# extensions/tool-capability-plugins/brave

## 1. 功能结论

**新增**：brave support configurable search base url、brave add http diagnostics flag、workspace add skipOptionalBootstrapFiles config option；**修改**：plugins suppress mirrored provider env warnings、brave cover subscription token auth、brave use canonical docs URL、web-search support Brave llm-context date filters；**迁移/重构**：trim brave and diffs helper exports；行为变化，风险 high。

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

### 修复 brave use canonical docs URL

修复 brave：use canonical docs URL

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 plugins suppress mirrored provider env warnings

修复 plugins：suppress mirrored provider env warnings

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 web-search improve missing key guidance

修复 web-search：improve missing key guidance

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 web-search support Brave llm-context date filters

修复 web-search：support Brave llm-context date filters

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 brave add http diagnostics flag

新增 brave：add http diagnostics flag

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 brave support configurable search base url

新增 brave：support configurable search base url

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 workspace add skipOptionalBootstrapFiles config option

新增 workspace：add skipOptionalBootstrapFiles config option

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 置信度：`high`

### 构建/发布调整 prepare external plugin beta publishing

构建/发布调整 prepare external plugin beta publishing

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 brave cover subscription token auth

测试覆盖 brave：cover subscription token auth

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim brave and diffs helper exports

迁移/重构 trim brave and diffs helper exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata、web search contract api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 brave web search provider regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/brave`
- Changed path count: `7`
- Status counts: `修改 7`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `7` files, `+736` / `-101`

### 归纳依据

- 主要落点：implementation、manifest/package metadata、tests/contracts。
- 新增或暴露的关键符号包括：`DEFAULT_BRAVE_BASE_URL`, `BRAVE_SEARCH_ENDPOINT_PATH`, `BRAVE_LLM_CONTEXT_ENDPOINT_PATH`, `logBraveHttp`, `describeBraveRequestUrl`, `resolveBraveBaseUrl`, `buildBraveEndpointUrl`, `installBraveLlmContextFetch`, `readHeader`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/brave`；`pnpm test:extensions`。
- 相关 commit 主题：fix(plugins): suppress mirrored provider env warnings；feat(brave): support configurable search base url；feat(brave): add http diagnostics flag；test(brave): cover subscription token auth；fix(brave): use canonical docs URL；fix(web-search): support Brave llm-context date filters；fix(web-search): improve missing key guidance；build: prepare external plugin beta publishing

### Dimension evidence

- `tests-docs-修复-brave-use-canonical-docs-URL` / 修复 brave use canonical docs URL:
  - source: `path` [M] `extensions/brave/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/brave/package.json` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.shared.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.ts` — semantic cue
- `maintenance-修复-plugins-suppress-mirrored-provider-env-warni` / 修复 plugins suppress mirrored provider env warnings:
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.shared.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.ts` — semantic cue
- `user-visible-修复-web-search-improve-missing-key-guidance` / 修复 web-search improve missing key guidance:
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.shared.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.ts` — semantic cue
  - source: `path` [M] `extensions/brave/web-search-contract-api.ts` — semantic cue
- `maintenance-修复-web-search-support-Brave-llm-context-date-fi` / 修复 web-search support Brave llm-context date filters:
  - source: `path` [M] `extensions/brave/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/brave/package.json` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.shared.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.ts` — semantic cue
- `maintenance-新增-brave-add-http-diagnostics-flag` / 新增 brave add http diagnostics flag:
  - source: `path` [M] `extensions/brave/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/brave/package.json` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.shared.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.ts` — semantic cue
- `maintenance-新增-brave-support-configurable-search-base-url` / 新增 brave support configurable search base url:
  - source: `path` [M] `extensions/brave/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/brave/package.json` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.shared.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.ts` — semantic cue
- `maintenance-新增-workspace-add-skipOptionalBootstrapFiles-con` / 新增 workspace add skipOptionalBootstrapFiles config option:
  - source: `path` [M] `extensions/brave/openclaw.plugin.json`
  - source: `path` [M] `extensions/brave/package.json`
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.runtime.ts`
- `integration-build-release-构建-发布调整-prepare-external-plugin-beta-publishing` / 构建/发布调整 prepare external plugin beta publishing:
  - source: `path` [M] `extensions/brave/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/brave/package.json` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.shared.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.ts` — semantic cue
- `tests-docs-测试覆盖-brave-cover-subscription-token-auth` / 测试覆盖 brave cover subscription token auth:
  - source: `path` [M] `extensions/brave/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/brave/package.json` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.shared.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.ts` — semantic cue
- `migration-迁移-重构-trim-brave-and-diffs-helper-exports` / 迁移/重构 trim brave and diffs helper exports:
  - source: `path` [M] `extensions/brave/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/brave/package.json` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.shared.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/brave/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/brave/web-search-contract-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/brave/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/brave/src/brave-web-search-provider.test.ts` — test evidence

### 路径证据

- 修改 `extensions/brave/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/brave/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/brave/src/brave-web-search-provider.runtime.ts`：调整 brave web search provider（implementation）。
- 修改 `extensions/brave/src/brave-web-search-provider.shared.ts`：调整 brave web search provider.shared（implementation）。
- 修改 `extensions/brave/src/brave-web-search-provider.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/brave/src/brave-web-search-provider.ts`：调整 brave web search provider（implementation）。
- 修改 `extensions/brave/web-search-contract-api.ts`：调整 web search contract api（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/tool-capability-plugins/brave` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/tool-capability-plugins/brave/change-to-test.md` 的验证建议。
