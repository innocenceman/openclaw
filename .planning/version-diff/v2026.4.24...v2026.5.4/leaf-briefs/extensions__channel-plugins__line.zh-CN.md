# extensions/channel-plugins/line

## 1. 功能结论

**新增**：simplify thread-bound session spawning；**修改**：Revert "fix(plugins): align beta external launch metadata"、plugins align beta external launch metadata、externalize more channel plugins、guard provider-prefixed delivery targets；**迁移/重构**：trim line helper exports、trim extension barrel leftovers、trim extension helper shims；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 39

## 3. 功能级详细差异

### 修复 guard provider-prefixed delivery targets

修复 guard provider-prefixed delivery targets

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 置信度：`high`

### 修复 line send quick-reply-only payloads

修复 line：send quick-reply-only payloads

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 置信度：`high`

### 修复 plugins align beta external launch metadata

修复 plugins：align beta external launch metadata

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 置信度：`high`

### 修复 restore current main ci checks

修复 restore current main ci checks

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 置信度：`high`

### 修改 Revert "fix(plugins): align beta external launch metadata"

修改 Revert "fix(plugins): align beta external launch metadata"

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 置信度：`high`

### 修改 externalize more channel plugins

修改 externalize more channel plugins

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 置信度：`high`

### 新增 simplify thread-bound session spawning

新增 simplify thread-bound session spawning

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 置信度：`high`

### 迁移/重构 trim extension barrel leftovers

迁移/重构 trim extension barrel leftovers

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 置信度：`high`

### 迁移/重构 trim extension helper shims

迁移/重构 trim extension helper shims

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 置信度：`high`

### 迁移/重构 trim line helper exports

迁移/重构 trim line helper exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata、runtime api、channel api、config adapter，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 accounts regression/contract coverage、auto reply delivery regression/contract coverage、bot handlers regression/contract coverage、bot message context regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/line`
- Changed path count: `40`
- Status counts: `新增 1、修改 39`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `40` files, `+937` / `-402`

### 归纳依据

- 主要落点：implementation、message delivery、tests/contracts、manifest/package metadata、configuration/schema、plugin entry/API surface、gateway runtime。
- 新增或暴露的关键符号包括：`normalizeLineAllowFrom`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts`；`pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`。
- 相关 commit 主题：Revert "fix(plugins): align beta external launch metadata"；fix(plugins): align beta external launch metadata；ci: externalize more channel plugins；feat: simplify thread-bound session spawning；fix: guard provider-prefixed delivery targets；fix: restore current main ci checks；refactor: trim line helper exports；refactor: trim extension barrel leftovers

### Dimension evidence

- `maintenance-修复-guard-provider-prefixed-delivery-targets` / 修复 guard provider-prefixed delivery targets:
  - source: `path` [M] `extensions/line/src/auto-reply-delivery.test.ts` — semantic cue
  - source: `path` [M] `extensions/line/src/auto-reply-delivery.ts` — semantic cue
- `user-visible-修复-line-send-quick-reply-only-payloads` / 修复 line send quick-reply-only payloads:
  - source: `path` [M] `extensions/line/index.ts` — semantic cue
  - source: `path` [M] `extensions/line/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/line/package.json` — semantic cue
  - source: `path` [M] `extensions/line/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/line/src/accounts.test.ts` — semantic cue
  - source: `path` [M] `extensions/line/src/auto-reply-delivery.test.ts` — semantic cue
- `public-contract-修复-plugins-align-beta-external-launch-metadata` / 修复 plugins align beta external launch metadata:
  - source: `path` [A] `extensions/line/src/quick-reply-fallback.ts`
  - source: `path` [M] `extensions/line/index.ts`
  - source: `path` [M] `extensions/line/openclaw.plugin.json`
  - source: `path` [M] `extensions/line/package.json`
- `maintenance-修复-restore-current-main-ci-checks` / 修复 restore current main ci checks:
  - source: `path` [A] `extensions/line/src/quick-reply-fallback.ts`
  - source: `path` [M] `extensions/line/index.ts`
  - source: `path` [M] `extensions/line/openclaw.plugin.json`
  - source: `path` [M] `extensions/line/package.json`
- `public-contract-修改-Revert-fix-plugins-align-beta-external-la` / 修改 Revert "fix(plugins): align beta external launch metadata":
  - source: `path` [A] `extensions/line/src/quick-reply-fallback.ts`
  - source: `path` [M] `extensions/line/index.ts`
  - source: `path` [M] `extensions/line/openclaw.plugin.json`
  - source: `path` [M] `extensions/line/package.json`
- `maintenance-修改-externalize-more-channel-plugins` / 修改 externalize more channel plugins:
  - source: `path` [M] `extensions/line/src/channel-api.ts` — semantic cue
  - source: `path` [M] `extensions/line/src/channel-setup-status.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/line/src/channel-shared.ts` — semantic cue
  - source: `path` [M] `extensions/line/src/channel.logout.test.ts` — semantic cue
  - source: `path` [M] `extensions/line/src/channel.sendPayload.test.ts` — semantic cue
  - source: `path` [M] `extensions/line/src/channel.ts` — semantic cue
- `maintenance-新增-simplify-thread-bound-session-spawning` / 新增 simplify thread-bound session spawning:
  - source: `path` [A] `extensions/line/src/quick-reply-fallback.ts`
  - source: `path` [M] `extensions/line/index.ts`
  - source: `path` [M] `extensions/line/openclaw.plugin.json`
  - source: `path` [M] `extensions/line/package.json`
- `public-contract-迁移-重构-trim-extension-barrel-leftovers` / 迁移/重构 trim extension barrel leftovers:
  - source: `path` [M] `extensions/line/index.ts` — semantic cue
  - source: `path` [M] `extensions/line/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/line/package.json` — semantic cue
  - source: `path` [M] `extensions/line/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/line/src/accounts.test.ts` — semantic cue
  - source: `path` [M] `extensions/line/src/auto-reply-delivery.test.ts` — semantic cue
- `migration-迁移-重构-trim-extension-helper-shims` / 迁移/重构 trim extension helper shims:
  - source: `path` [M] `extensions/line/index.ts` — semantic cue
  - source: `path` [M] `extensions/line/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/line/package.json` — semantic cue
  - source: `path` [M] `extensions/line/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/line/src/accounts.test.ts` — semantic cue
  - source: `path` [M] `extensions/line/src/auto-reply-delivery.test.ts` — semantic cue
- `migration-迁移-重构-trim-line-helper-exports` / 迁移/重构 trim line helper exports:
  - source: `path` [M] `extensions/line/index.ts` — semantic cue
  - source: `path` [M] `extensions/line/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/line/package.json` — semantic cue
  - source: `path` [M] `extensions/line/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/line/src/accounts.test.ts` — semantic cue
  - source: `path` [M] `extensions/line/src/auto-reply-delivery.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/line/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/line/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/line/src/channel-api.ts` — contract evidence
  - source: `path` [M] `extensions/line/src/config-adapter.ts` — contract evidence
  - source: `path` [M] `extensions/line/src/config-schema.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/line/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/line/src/accounts.test.ts` — test evidence
  - source: `path` [M] `extensions/line/src/auto-reply-delivery.test.ts` — test evidence
  - source: `path` [M] `extensions/line/src/bot-handlers.test.ts` — test evidence
  - source: `path` [M] `extensions/line/src/bot-message-context.test.ts` — test evidence
  - source: `path` [M] `extensions/line/src/channel-setup-status.contract.test.ts` — test evidence
  - source: `path` [M] `extensions/line/src/channel.logout.test.ts` — test evidence

### 路径证据

- 新增 `extensions/line/src/quick-reply-fallback.ts`：调整 quick reply fallback（message delivery）。
- 修改 `extensions/line/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/line/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/line/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/line/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/line/src/accounts.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/line/src/auto-reply-delivery.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/line/src/auto-reply-delivery.ts`：调整 auto reply delivery（message delivery）。
- 修改 `extensions/line/src/bot-handlers.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/line/src/bot-handlers.ts`：调整 bot handlers（implementation）。
- 修改 `extensions/line/src/bot-message-context.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/line/src/bot-message-context.ts`：调整 bot message context（message delivery）。
- 修改 `extensions/line/src/bot.ts`：调整 bot（implementation）。
- 其余 27 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/line` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/line/change-to-test.md` 的验证建议。
