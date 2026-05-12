# extensions/channel-plugins/feishu

## 1. 功能结论

**修改**：feishu accept native oversized body resets、feishu cover native Windows webhook and workspace paths、feishu honor block streaming config、feishu cap per-chat queue task wait so a single hang doesn't starve later messages；**迁移/重构**：trim feishu helper exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：修改 45、删除 1

## 3. 功能级详细差异

### 修复 enforce plugin tool manifest contracts

修复 enforce plugin tool manifest contracts

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 置信度：`high`

### 修复 feishu cap per-chat queue task wait so a single hang doesn't starve…

修复 feishu：cap per-chat queue task wait so a single hang doesn't starve later messages

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 置信度：`high`

### 修复 feishu honor block streaming config

修复 feishu：honor block streaming config

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 置信度：`high`

### 修复 feishu preserve api error diagnostics

修复 feishu：preserve api error diagnostics

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 置信度：`high`

### 修复 feishu repair media-aware message dedupe

修复 feishu：repair media-aware message dedupe

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 置信度：`high`

### 修复 feishu split timeout env parsing from client

修复 feishu：split timeout env parsing from client

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 置信度：`high`

### 修复 stabilize release validation

修复 stabilize release validation

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 置信度：`high`

### 测试覆盖 feishu accept native oversized body resets

测试覆盖 feishu：accept native oversized body resets

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 置信度：`high`

### 测试覆盖 feishu cover native Windows webhook and workspace paths

测试覆盖 feishu：cover native Windows webhook and workspace paths

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 置信度：`high`

### 迁移/重构 trim feishu helper exports

迁移/重构 trim feishu helper exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 feishu public API barrel、plugin manifest/control-plane metadata、runtime api、config schema，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 bot.broadcast regression/contract coverage、bot.card action regression/contract coverage、bot.check Bot Mentioned regression/contract coverage、bot regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `monitor.reply once.lifecycle.test support`（`extensions/feishu/src/monitor.reply-once.lifecycle.test-support.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/feishu`
- Changed path count: `46`
- Status counts: `修改 45、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `46` files, `+2190` / `-543`

### 归纳依据

- 主要落点：implementation、tests/contracts、message delivery、manifest/package metadata、plugin entry/API surface、configuration/schema。
- 新增或暴露的关键符号包括：`GROUP_NAME_CACHE_TTL_MS`, `GROUP_NAME_CACHE_MAX_SIZE`, `evictGroupNameCache`, `setCacheEntry`, `clearGroupNameCache`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`；`pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`。
- 相关 commit 主题：test(feishu): accept native oversized body resets；test(feishu): cover native Windows webhook and workspace paths；fix(feishu): honor block streaming config；fix(feishu): cap per-chat queue task wait so a single hang doesn't starve later messages；fix(feishu): repair media-aware message dedupe；fix(feishu): split timeout env parsing from client；refactor: trim feishu helper exports；fix: stabilize release validation

### Dimension evidence

- `public-contract-修复-enforce-plugin-tool-manifest-contracts` / 修复 enforce plugin tool manifest contracts:
  - source: `path` [M] `extensions/feishu/openclaw.plugin.json` — semantic cue
- `maintenance-修复-feishu-cap-per-chat-queue-task-wait-so-a-sin` / 修复 feishu cap per-chat queue task wait so a single hang doesn't starve…:
  - source: `path` [M] `extensions/feishu/api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/feishu/package.json` — semantic cue
  - source: `path` [M] `extensions/feishu/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.broadcast.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.card-action.test.ts` — semantic cue
- `runtime-behavior-修复-feishu-honor-block-streaming-config` / 修复 feishu honor block streaming config:
  - source: `path` [M] `extensions/feishu/api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/feishu/package.json` — semantic cue
  - source: `path` [M] `extensions/feishu/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.broadcast.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.card-action.test.ts` — semantic cue
- `public-contract-修复-feishu-preserve-api-error-diagnostics` / 修复 feishu preserve api error diagnostics:
  - source: `path` [M] `extensions/feishu/api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/feishu/package.json` — semantic cue
  - source: `path` [M] `extensions/feishu/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.broadcast.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.card-action.test.ts` — semantic cue
- `maintenance-修复-feishu-repair-media-aware-message-dedupe` / 修复 feishu repair media-aware message dedupe:
  - source: `path` [M] `extensions/feishu/api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/feishu/package.json` — semantic cue
  - source: `path` [M] `extensions/feishu/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.broadcast.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.card-action.test.ts` — semantic cue
- `maintenance-修复-feishu-split-timeout-env-parsing-from-client` / 修复 feishu split timeout env parsing from client:
  - source: `path` [M] `extensions/feishu/api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/feishu/package.json` — semantic cue
  - source: `path` [M] `extensions/feishu/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.broadcast.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.card-action.test.ts` — semantic cue
- `maintenance-修复-stabilize-release-validation` / 修复 stabilize release validation:
  - source: `path` [M] `extensions/feishu/api.ts`
  - source: `path` [M] `extensions/feishu/openclaw.plugin.json`
  - source: `path` [M] `extensions/feishu/package.json`
  - source: `path` [D] `extensions/feishu/src/monitor.reply-once.lifecycle.test-support.ts`
- `tests-docs-测试覆盖-feishu-accept-native-oversized-body-resets` / 测试覆盖 feishu accept native oversized body resets:
  - source: `path` [M] `extensions/feishu/api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/feishu/package.json` — semantic cue
  - source: `path` [M] `extensions/feishu/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.broadcast.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.card-action.test.ts` — semantic cue
- `tests-docs-测试覆盖-feishu-cover-native-Windows-webhook-and-wo` / 测试覆盖 feishu cover native Windows webhook and workspace paths:
  - source: `path` [M] `extensions/feishu/api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/feishu/package.json` — semantic cue
  - source: `path` [M] `extensions/feishu/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.broadcast.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.card-action.test.ts` — semantic cue
- `migration-迁移-重构-trim-feishu-helper-exports` / 迁移/重构 trim feishu helper exports:
  - source: `path` [M] `extensions/feishu/api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/feishu/package.json` — semantic cue
  - source: `path` [M] `extensions/feishu/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.broadcast.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot.card-action.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/feishu/api.ts` — contract evidence
  - source: `path` [M] `extensions/feishu/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/feishu/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/feishu/src/config-schema.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/feishu/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/feishu/src/bot.broadcast.test.ts` — test evidence
  - source: `path` [M] `extensions/feishu/src/bot.card-action.test.ts` — test evidence
  - source: `path` [M] `extensions/feishu/src/bot.checkBotMentioned.test.ts` — test evidence
  - source: `path` [M] `extensions/feishu/src/bot.helpers.test.ts` — test evidence
  - source: `path` [M] `extensions/feishu/src/bot.test.ts` — test evidence
  - source: `path` [M] `extensions/feishu/src/card-ux-launcher.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/feishu/src/monitor.reply-once.lifecycle.test-support.ts`

### 路径证据

- 修改 `extensions/feishu/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/feishu/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/feishu/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/feishu/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/feishu/src/bot.broadcast.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/feishu/src/bot.card-action.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/feishu/src/bot.checkBotMentioned.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/feishu/src/bot.helpers.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/feishu/src/bot.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/feishu/src/bot.ts`：调整 bot（implementation）。
- 修改 `extensions/feishu/src/card-action.ts`：调整 card action（implementation）。
- 修改 `extensions/feishu/src/card-interaction.ts`：调整 card interaction（implementation）。
- 删除 `extensions/feishu/src/monitor.reply-once.lifecycle.test-support.ts`：移除旧的 message delivery 文件；需要确认没有调用方继续依赖这个路径。
- 其余 33 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/feishu` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/feishu/change-to-test.md` 的验证建议。
