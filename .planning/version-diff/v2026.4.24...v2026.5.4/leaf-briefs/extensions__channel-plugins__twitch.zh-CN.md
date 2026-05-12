# extensions/channel-plugins/twitch

## 1. 功能结论

**修改**：prepare external plugin beta publishing、harden source checkout plugin dependency handling、add twitch package repository metadata、keep twitch beta package lockfile-stable；**迁移/重构**：trim twitch helper exports、trim unused testing exports、prune stale extension types、prune unused exported types；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 16

## 3. 功能级详细差异

### 修复 harden source checkout plugin dependency handling

修复 harden source checkout plugin dependency handling

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 keep twitch beta package lockfile-stable

修复 keep twitch beta package lockfile-stable

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 置信度：`high`

### 构建/发布调整 add twitch package repository metadata

构建/发布调整 add twitch package repository metadata

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 置信度：`high`

### 构建/发布调整 prepare external plugin beta publishing

构建/发布调整 prepare external plugin beta publishing

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 置信度：`high`

### 构建/发布调整 prepare twitch plugin beta release

构建/发布调整 prepare twitch plugin beta release

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 channels finish turn kernel migration

迁移/重构 channels：finish turn kernel migration

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 prune stale extension types

迁移/重构 prune stale extension types

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 prune unused exported types

迁移/重构 prune unused exported types

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim twitch helper exports

迁移/重构 trim twitch helper exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim unused testing exports

迁移/重构 trim unused testing exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 twitch public API barrel、plugin manifest/control-plane metadata、runtime api、config schema regression/contract coverage，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 twitch plugin entrypoint、config schema regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/twitch`
- Changed path count: `17`
- Status counts: `新增 1、修改 16`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `17` files, `+253` / `-175`

### 归纳依据

- 主要落点：implementation、configuration/schema、manifest/package metadata、plugin entry/API surface、tests/contracts、message delivery。
- 新增或暴露的关键符号包括：`validateTwitchConfig`, `TwitchAccountShape`, `TwitchAccountSchema`, `TwitchConfigBaseShape`, `SimplifiedSchema`, `MultiAccountSchema`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`；`pnpm build`。
- 相关 commit 主题：build: prepare external plugin beta publishing；fix: harden source checkout plugin dependency handling；build: add twitch package repository metadata；fix: keep twitch beta package lockfile-stable；build: prepare twitch plugin beta release；refactor: trim twitch helper exports；refactor: trim unused testing exports；refactor: prune stale extension types

### Dimension evidence

- `maintenance-修复-harden-source-checkout-plugin-dependency-han` / 修复 harden source checkout plugin dependency handling:
  - source: `path` [M] `extensions/twitch/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/twitch/src/plugin.ts` — semantic cue
- `integration-build-release-修复-keep-twitch-beta-package-lockfile-stable` / 修复 keep twitch beta package lockfile-stable:
  - source: `path` [M] `extensions/twitch/api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/twitch/package.json` — semantic cue
  - source: `path` [M] `extensions/twitch/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/src/access-control.ts` — semantic cue
- `public-contract-构建-发布调整-add-twitch-package-repository-metadata` / 构建/发布调整 add twitch package repository metadata:
  - source: `path` [M] `extensions/twitch/api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/twitch/package.json` — semantic cue
  - source: `path` [M] `extensions/twitch/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/src/access-control.ts` — semantic cue
- `integration-build-release-构建-发布调整-prepare-external-plugin-beta-publishing` / 构建/发布调整 prepare external plugin beta publishing:
  - source: `path` [M] `extensions/twitch/api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/twitch/package.json` — semantic cue
  - source: `path` [M] `extensions/twitch/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/src/access-control.ts` — semantic cue
- `integration-build-release-构建-发布调整-prepare-twitch-plugin-beta-release` / 构建/发布调整 prepare twitch plugin beta release:
  - source: `path` [M] `extensions/twitch/api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/twitch/package.json` — semantic cue
  - source: `path` [M] `extensions/twitch/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/src/access-control.ts` — semantic cue
- `migration-迁移-重构-channels-finish-turn-kernel-migration` / 迁移/重构 channels finish turn kernel migration:
  - source: `path` [M] `extensions/twitch/api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/twitch/package.json` — semantic cue
  - source: `path` [M] `extensions/twitch/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/src/access-control.ts` — semantic cue
- `migration-迁移-重构-prune-stale-extension-types` / 迁移/重构 prune stale extension types:
  - source: `path` [M] `extensions/twitch/api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/twitch/package.json` — semantic cue
  - source: `path` [M] `extensions/twitch/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/src/access-control.ts` — semantic cue
- `migration-迁移-重构-prune-unused-exported-types` / 迁移/重构 prune unused exported types:
  - source: `path` [M] `extensions/twitch/api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/twitch/package.json` — semantic cue
  - source: `path` [M] `extensions/twitch/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/src/access-control.ts` — semantic cue
- `migration-迁移-重构-trim-twitch-helper-exports` / 迁移/重构 trim twitch helper exports:
  - source: `path` [M] `extensions/twitch/api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/twitch/package.json` — semantic cue
  - source: `path` [M] `extensions/twitch/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/src/access-control.ts` — semantic cue
- `migration-迁移-重构-trim-unused-testing-exports` / 迁移/重构 trim unused testing exports:
  - source: `path` [M] `extensions/twitch/api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/twitch/package.json` — semantic cue
  - source: `path` [M] `extensions/twitch/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/twitch/src/access-control.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/twitch/api.ts` — contract evidence
  - source: `path` [M] `extensions/twitch/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/twitch/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/twitch/src/config-schema.test.ts` — contract evidence
  - source: `path` [M] `extensions/twitch/src/config-schema.ts` — contract evidence
  - source: `path` [M] `extensions/twitch/src/config.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/twitch/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/twitch/index.test.ts` — test evidence
  - source: `path` [M] `extensions/twitch/src/config-schema.test.ts` — test evidence

### 路径证据

- 新增 `extensions/twitch/src/config-schema.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/twitch/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/twitch/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/twitch/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/twitch/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/twitch/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/twitch/src/access-control.ts`：调整 access control（implementation）。
- 修改 `extensions/twitch/src/client-manager-registry.ts`：调整 client manager registry（implementation）。
- 修改 `extensions/twitch/src/config-schema.ts`：调整 config schema（configuration/schema）。
- 修改 `extensions/twitch/src/config.ts`：调整 src config（configuration/schema）。
- 修改 `extensions/twitch/src/monitor.ts`：调整 monitor（implementation）。
- 修改 `extensions/twitch/src/plugin.ts`：调整 plugin（implementation）。
- 修改 `extensions/twitch/src/probe.ts`：调整 probe（implementation）。
- 其余 4 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/twitch` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/twitch/change-to-test.md` 的验证建议。
