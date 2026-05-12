# extensions/skill-plugins/diffs

## 1. 功能结论

**修改**：diffs use native viewer asset file URLs、plugins narrow optional tool cold loads、discover source-only plugins in checkouts、enforce plugin tool manifest contracts；**迁移/重构**：plugins declare static runtime assets in package metadata、simplify plugin dependency handling、trim brave and diffs helper exports、prune stale extension types；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`plugin`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 14

## 3. 功能级详细差异

### 修复 discover source-only plugins in checkouts

修复 discover source-only plugins in checkouts

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 enforce plugin tool manifest contracts

修复 enforce plugin tool manifest contracts

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 plugins narrow optional tool cold loads

修复 plugins：narrow optional tool cold loads

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 置信度：`high`

### 构建/发布调整 prepare next external plugin beta batch

构建/发布调整 prepare next external plugin beta batch

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 diffs use native viewer asset file URLs

测试覆盖 diffs：use native viewer asset file URLs

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 harden plugin prerelease smoke checks

测试覆盖 harden plugin prerelease smoke checks

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 plugins declare static runtime assets in package metadata

迁移/重构 plugins：declare static runtime assets in package metadata

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 prune stale extension types

迁移/重构 prune stale extension types

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 simplify plugin dependency handling

迁移/重构 simplify plugin dependency handling

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim brave and diffs helper exports

迁移/重构 trim brave and diffs helper exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 diffs public API barrel、plugin manifest/control-plane metadata、config regression/contract coverage、src config，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 browser regression/contract coverage、config regression/contract coverage、manifest regression/contract coverage、store regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/diffs`
- Changed path count: `14`
- Status counts: `修改 14`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `14` files, `+158` / `-88`

### 归纳依据

- 主要落点：tests/contracts、implementation、manifest/package metadata、configuration/schema、plugin entry/API surface、session/state handling。
- 新增或暴露的关键符号包括：`stringEnum`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/diffs`；`pnpm test:extensions`。
- 相关 commit 主题：test(diffs): use native viewer asset file URLs；fix(plugins): narrow optional tool cold loads；refactor(plugins): declare static runtime assets in package metadata；fix: discover source-only plugins in checkouts；fix: enforce plugin tool manifest contracts；build: prepare next external plugin beta batch；refactor: simplify plugin dependency handling；refactor: trim brave and diffs helper exports

### Dimension evidence

- `maintenance-修复-discover-source-only-plugins-in-checkouts` / 修复 discover source-only plugins in checkouts:
  - source: `path` [M] `extensions/diffs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diffs/src/plugin.ts` — semantic cue
- `public-contract-修复-enforce-plugin-tool-manifest-contracts` / 修复 enforce plugin tool manifest contracts:
  - source: `path` [M] `extensions/diffs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diffs/src/manifest.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/plugin.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/tool-render-output.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/tool.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/tool.ts` — semantic cue
- `maintenance-修复-plugins-narrow-optional-tool-cold-loads` / 修复 plugins narrow optional tool cold loads:
  - source: `path` [M] `extensions/diffs/src/tool-render-output.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/tool.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/tool.ts` — semantic cue
- `integration-build-release-构建-发布调整-prepare-next-external-plugin-beta-batch` / 构建/发布调整 prepare next external plugin beta batch:
  - source: `path` [M] `extensions/diffs/api.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diffs/package.json` — semantic cue
  - source: `path` [M] `extensions/diffs/src/browser.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/config.ts` — semantic cue
- `tests-docs-测试覆盖-diffs-use-native-viewer-asset-file-URLs` / 测试覆盖 diffs use native viewer asset file URLs:
  - source: `path` [M] `extensions/diffs/api.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diffs/package.json` — semantic cue
  - source: `path` [M] `extensions/diffs/src/browser.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/config.ts` — semantic cue
- `tests-docs-测试覆盖-harden-plugin-prerelease-smoke-checks` / 测试覆盖 harden plugin prerelease smoke checks:
  - source: `path` [M] `extensions/diffs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diffs/src/plugin.ts` — semantic cue
- `public-contract-迁移-重构-plugins-declare-static-runtime-assets-in` / 迁移/重构 plugins declare static runtime assets in package metadata:
  - source: `path` [M] `extensions/diffs/api.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diffs/package.json` — semantic cue
  - source: `path` [M] `extensions/diffs/src/browser.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/config.ts` — semantic cue
- `migration-迁移-重构-prune-stale-extension-types` / 迁移/重构 prune stale extension types:
  - source: `path` [M] `extensions/diffs/api.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diffs/package.json` — semantic cue
  - source: `path` [M] `extensions/diffs/src/browser.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/config.ts` — semantic cue
- `migration-迁移-重构-simplify-plugin-dependency-handling` / 迁移/重构 simplify plugin dependency handling:
  - source: `path` [M] `extensions/diffs/api.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diffs/package.json` — semantic cue
  - source: `path` [M] `extensions/diffs/src/browser.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/config.ts` — semantic cue
- `migration-迁移-重构-trim-brave-and-diffs-helper-exports` / 迁移/重构 trim brave and diffs helper exports:
  - source: `path` [M] `extensions/diffs/api.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diffs/package.json` — semantic cue
  - source: `path` [M] `extensions/diffs/src/browser.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/diffs/src/config.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/diffs/api.ts` — contract evidence
  - source: `path` [M] `extensions/diffs/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/diffs/src/config.test.ts` — contract evidence
  - source: `path` [M] `extensions/diffs/src/config.ts` — contract evidence
  - source: `path` [M] `extensions/diffs/src/manifest.test.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/diffs/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/diffs/src/browser.test.ts` — test evidence
  - source: `path` [M] `extensions/diffs/src/config.test.ts` — test evidence
  - source: `path` [M] `extensions/diffs/src/manifest.test.ts` — test evidence
  - source: `path` [M] `extensions/diffs/src/store.test.ts` — test evidence
  - source: `path` [M] `extensions/diffs/src/tool-render-output.test.ts` — test evidence
  - source: `path` [M] `extensions/diffs/src/tool.test.ts` — test evidence

### 路径证据

- 修改 `extensions/diffs/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/diffs/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/diffs/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/diffs/src/browser.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/diffs/src/config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/diffs/src/config.ts`：调整 src config（configuration/schema）。
- 修改 `extensions/diffs/src/manifest.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/diffs/src/plugin.ts`：调整 plugin（implementation）。
- 修改 `extensions/diffs/src/store.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/diffs/src/tool-render-output.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/diffs/src/tool.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/diffs/src/tool.ts`：调整 tool（implementation）。
- 其余 2 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/skill-plugins/diffs` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/skill-plugins/diffs/change-to-test.md` 的验证建议。
