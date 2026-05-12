# extensions/channel-plugins/nostr

## 1. 功能结论

**修改**：guard provider-prefixed delivery targets、prepare second external plugin beta batch、mark channel plugins startup lazy；**迁移/重构**：simplify plugin dependency handling、trim nostr helper exports、trim extension shim reexports、trim channel dead exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 20

## 3. 功能级详细差异

### 优化 mark channel plugins startup lazy

优化 mark channel plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 guard provider-prefixed delivery targets

修复 guard provider-prefixed delivery targets

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 置信度：`high`

### 构建/发布调整 prepare second external plugin beta batch

构建/发布调整 prepare second external plugin beta batch

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 prune stale extension types

迁移/重构 prune stale extension types

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 simplify plugin dependency handling

迁移/重构 simplify plugin dependency handling

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim channel dead exports

迁移/重构 trim channel dead exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim extension barrel leftovers

迁移/重构 trim extension barrel leftovers

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim extension shim reexports

迁移/重构 trim extension shim reexports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim nostr helper exports

迁移/重构 trim nostr helper exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 nostr public API barrel、plugin manifest/control-plane metadata、runtime api、config schema，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 channel.inbound regression/contract coverage、channel.outbound regression/contract coverage、channel regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/nostr`
- Changed path count: `20`
- Status counts: `修改 20`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `20` files, `+57` / `-75`

### 归纳依据

- 主要落点：implementation、tests/contracts、plugin entry/API surface、manifest/package metadata、configuration/schema、gateway runtime、session/state handling。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`；`pnpm build`。
- 相关 commit 主题：fix: guard provider-prefixed delivery targets；build: prepare second external plugin beta batch；refactor: simplify plugin dependency handling；refactor: trim nostr helper exports；refactor: trim extension shim reexports；refactor: trim channel dead exports；refactor: trim extension barrel leftovers；refactor: prune stale extension types

### Dimension evidence

- `maintenance-优化-mark-channel-plugins-startup-lazy` / 优化 mark channel plugins startup lazy:
  - source: `path` [M] `extensions/nostr/src/channel.inbound.test.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/src/channel.outbound.test.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/src/channel.setup.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/src/channel.test.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/src/channel.ts` — semantic cue
- `maintenance-修复-guard-provider-prefixed-delivery-targets` / 修复 guard provider-prefixed delivery targets:
  - source: `path` [M] `extensions/nostr/api.ts`
  - source: `path` [M] `extensions/nostr/index.ts`
  - source: `path` [M] `extensions/nostr/openclaw.plugin.json`
- `integration-build-release-构建-发布调整-prepare-second-external-plugin-beta-bat` / 构建/发布调整 prepare second external plugin beta batch:
  - source: `path` [M] `extensions/nostr/api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/index.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nostr/package.json` — semantic cue
  - source: `path` [M] `extensions/nostr/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/src/channel.inbound.test.ts` — semantic cue
- `migration-迁移-重构-prune-stale-extension-types` / 迁移/重构 prune stale extension types:
  - source: `path` [M] `extensions/nostr/api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/index.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nostr/package.json` — semantic cue
  - source: `path` [M] `extensions/nostr/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/src/channel.inbound.test.ts` — semantic cue
- `migration-迁移-重构-simplify-plugin-dependency-handling` / 迁移/重构 simplify plugin dependency handling:
  - source: `path` [M] `extensions/nostr/api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/index.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nostr/package.json` — semantic cue
  - source: `path` [M] `extensions/nostr/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/src/channel.inbound.test.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/nostr/api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/index.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nostr/package.json` — semantic cue
  - source: `path` [M] `extensions/nostr/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/src/channel.inbound.test.ts` — semantic cue
- `migration-迁移-重构-trim-channel-dead-exports` / 迁移/重构 trim channel dead exports:
  - source: `path` [M] `extensions/nostr/api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/index.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nostr/package.json` — semantic cue
  - source: `path` [M] `extensions/nostr/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/src/channel.inbound.test.ts` — semantic cue
- `public-contract-迁移-重构-trim-extension-barrel-leftovers` / 迁移/重构 trim extension barrel leftovers:
  - source: `path` [M] `extensions/nostr/api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/index.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nostr/package.json` — semantic cue
  - source: `path` [M] `extensions/nostr/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/src/channel.inbound.test.ts` — semantic cue
- `migration-迁移-重构-trim-extension-shim-reexports` / 迁移/重构 trim extension shim reexports:
  - source: `path` [M] `extensions/nostr/api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/index.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nostr/package.json` — semantic cue
  - source: `path` [M] `extensions/nostr/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/src/channel.inbound.test.ts` — semantic cue
- `migration-迁移-重构-trim-nostr-helper-exports` / 迁移/重构 trim nostr helper exports:
  - source: `path` [M] `extensions/nostr/api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/index.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nostr/package.json` — semantic cue
  - source: `path` [M] `extensions/nostr/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nostr/src/channel.inbound.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/nostr/api.ts` — contract evidence
  - source: `path` [M] `extensions/nostr/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/nostr/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/nostr/src/config-schema.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/nostr/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/nostr/src/channel.inbound.test.ts` — test evidence
  - source: `path` [M] `extensions/nostr/src/channel.outbound.test.ts` — test evidence
  - source: `path` [M] `extensions/nostr/src/channel.test.ts` — test evidence

### 路径证据

- 修改 `extensions/nostr/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/nostr/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/nostr/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/nostr/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/nostr/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/nostr/src/channel.inbound.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/nostr/src/channel.outbound.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/nostr/src/channel.setup.ts`：调整 channel.setup（implementation）。
- 修改 `extensions/nostr/src/channel.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/nostr/src/channel.ts`：调整 channel（implementation）。
- 修改 `extensions/nostr/src/config-schema.ts`：调整 config schema（configuration/schema）。
- 修改 `extensions/nostr/src/gateway.ts`：调整 gateway（gateway runtime）。
- 其余 8 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/nostr` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/nostr/change-to-test.md` 的验证建议。
