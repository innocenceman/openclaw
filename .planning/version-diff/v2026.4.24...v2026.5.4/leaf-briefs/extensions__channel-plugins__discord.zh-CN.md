# extensions/channel-plugins/discord

## 1. 功能结论

**修改**：discord fail dropped final reply delivery、discord prefer IPv4 for gateway startup、preserve visible Discord labeled replies、discord preserve non-text payloads in reply scrub；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：large、contains-deletions
- 路径状态摘要（降级事实）：新增 157、修改 246、删除 3

## 3. 功能级详细差异

### 修复 device-pair require pairing scope for pair command

修复 device-pair：require pairing scope for pair command

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 置信度：`high`

### 修复 discord avoid blocking startup on probe

修复 discord：avoid blocking startup on probe

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 置信度：`high`

### 修复 discord clear failed startup probe status

修复 discord：clear failed startup probe status

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 置信度：`high`

### 修复 discord fail dropped final reply delivery

修复 discord：fail dropped final reply delivery

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 置信度：`high`

### 修复 discord prefer IPv4 for gateway startup

修复 discord：prefer IPv4 for gateway startup

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 置信度：`high`

### 修复 discord preserve non-text payloads in reply scrub

修复 discord：preserve non-text payloads in reply scrub

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 置信度：`high`

### 修复 harden startup readiness and discord replies

修复 harden startup readiness and discord replies

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 置信度：`high`

### 修复 preserve visible Discord labeled replies

修复 preserve visible Discord labeled replies

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 置信度：`high`

### 修复 resolve small triage issues

修复 resolve small triage issues

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 置信度：`high`

### 测试覆盖 discord accept native voice temp paths

测试覆盖 discord：accept native voice temp paths

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 account inspect api、discord public API barrel、config api、plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version、components.builders、test builders.test support，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 discord plugin entrypoint、account inspect regression/contract coverage、accounts regression/contract coverage、handle action regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `message tool schema`（`extensions/discord/src/message-tool-schema.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `inbound worker`（`extensions/discord/src/monitor/inbound-worker.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `runtime group policy`（`extensions/discord/src/runtime-group-policy.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 account inspect api、discord public API barrel、config api、discord plugin entrypoint、plugin manifest/control-plane metadata、package metadata/version；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/discord`
- Changed path count: `406`
- Status counts: `新增 157、修改 246、删除 3`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `406` files, `+35084` / `-15805`

### 归纳依据

- 主要落点：implementation、tests/contracts、message delivery、CLI/command behavior、gateway runtime、configuration/schema、session/state handling、auth/pairing/security behavior。
- 新增或暴露的关键符号包括：`handleDiscordMessageAction`, `resolveDiscordAccountAllowFrom`, `resolveDiscordAccountDmPolicy`, `resolveDiscordAccountTokenOwner`, `resolveDiscordDuplicateTokenOwner`, `isDiscordAccountEnabledForRuntime`, `resolveDiscordAccountDisabledReason`, `parseDiscordMessageLink`, `discordMessagingActionRuntime`, `hasDiscordComponentObjectKeys`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/discord/src/channel.test.ts`；`pnpm test -- extensions/discord/src/accounts.test.ts extensions/discord/src/token.test.ts extensions/discord/src/setup-account-state.test.ts extensions/discord/src/status-issues.test.ts`。
- 相关 commit 主题：fix(discord): fail dropped final reply delivery；fix(discord): prefer IPv4 for gateway startup；fix: preserve visible Discord labeled replies；fix(discord): preserve non-text payloads in reply scrub；fix: harden startup readiness and discord replies；fix(device-pair): require pairing scope for pair command；test(discord): accept native voice temp paths；fix(discord): clear failed startup probe status

### Dimension evidence

- `user-visible-修复-device-pair-require-pairing-scope-for-pair-c` / 修复 device-pair require pairing scope for pair command:
  - source: `path` [M] `extensions/discord/src/internal/api.commands.ts` — semantic cue
  - source: `path` [M] `extensions/discord/src/internal/command-deploy.test.ts` — semantic cue
  - source: `path` [M] `extensions/discord/src/internal/command-deploy.ts` — semantic cue
  - source: `path` [M] `extensions/discord/src/internal/commands.ts` — semantic cue
  - source: `path` [M] `extensions/discord/src/monitor/commands.ts` — semantic cue
  - source: `path` [M] `extensions/discord/src/monitor/dm-command-auth.test.ts` — semantic cue
- `maintenance-修复-discord-avoid-blocking-startup-on-probe` / 修复 discord avoid blocking startup on probe:
  - source: `path` [M] `extensions/discord/account-inspect-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/discord/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/discord/package.json` — semantic cue
- `maintenance-修复-discord-clear-failed-startup-probe-status` / 修复 discord clear failed startup probe status:
  - source: `path` [M] `extensions/discord/account-inspect-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/discord/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/discord/package.json` — semantic cue
- `maintenance-修复-discord-fail-dropped-final-reply-delivery` / 修复 discord fail dropped final reply delivery:
  - source: `path` [M] `extensions/discord/account-inspect-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/discord/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/discord/package.json` — semantic cue
- `maintenance-修复-discord-prefer-IPv4-for-gateway-startup` / 修复 discord prefer IPv4 for gateway startup:
  - source: `path` [M] `extensions/discord/account-inspect-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/discord/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/discord/package.json` — semantic cue
- `runtime-behavior-修复-discord-preserve-non-text-payloads-in-reply` / 修复 discord preserve non-text payloads in reply scrub:
  - source: `path` [M] `extensions/discord/account-inspect-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/discord/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/discord/package.json` — semantic cue
- `maintenance-修复-harden-startup-readiness-and-discord-replies` / 修复 harden startup readiness and discord replies:
  - source: `path` [M] `extensions/discord/account-inspect-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/discord/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/discord/package.json` — semantic cue
- `maintenance-修复-preserve-visible-Discord-labeled-replies` / 修复 preserve visible Discord labeled replies:
  - source: `path` [M] `extensions/discord/account-inspect-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/discord/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/discord/package.json` — semantic cue
- `maintenance-修复-resolve-small-triage-issues` / 修复 resolve small triage issues:
  - source: `path` [M] `extensions/discord/src/resolve-channels.test.ts` — semantic cue
  - source: `path` [M] `extensions/discord/src/resolve-users.test.ts` — semantic cue
  - source: `path` [M] `extensions/discord/src/status-issues.test.ts` — semantic cue
  - source: `path` [M] `extensions/discord/src/status-issues.ts` — semantic cue
  - source: `path` [M] `extensions/discord/src/target-resolver.ts` — semantic cue
- `tests-docs-测试覆盖-discord-accept-native-voice-temp-paths` / 测试覆盖 discord accept native voice temp paths:
  - source: `path` [M] `extensions/discord/account-inspect-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/discord/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/discord/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/discord/package.json` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/discord/account-inspect-api.ts` — contract evidence
  - source: `path` [M] `extensions/discord/api.ts` — contract evidence
  - source: `path` [M] `extensions/discord/config-api.ts` — contract evidence
  - source: `path` [M] `extensions/discord/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/discord/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/discord/runtime-setter-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/discord/package.json` — build/release evidence
  - source: `path` [M] `extensions/discord/src/components.builders.ts` — build/release evidence
  - source: `path` [M] `extensions/discord/src/internal/test-builders.test-support.ts` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/discord/index.test.ts` — test evidence
  - source: `path` [M] `extensions/discord/src/account-inspect.test.ts` — test evidence
  - source: `path` [M] `extensions/discord/src/accounts.test.ts` — test evidence
  - source: `path` [M] `extensions/discord/src/actions/handle-action.test.ts` — test evidence
  - source: `path` [M] `extensions/discord/src/actions/runtime.moderation.authz.test.ts` — test evidence
  - source: `path` [M] `extensions/discord/src/actions/runtime.presence.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/discord/src/message-tool-schema.ts`
  - source: `path` [D] `extensions/discord/src/monitor/inbound-worker.ts`
  - source: `path` [D] `extensions/discord/src/runtime-group-policy.ts`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `extensions/discord/runtime-api.actions.ts`
  - source: `path` [A] `extensions/discord/runtime-api.lookup.ts`
  - source: `path` [A] `extensions/discord/runtime-api.monitor.ts`
  - source: `path` [A] `extensions/discord/runtime-api.send.ts`
  - source: `path` [A] `extensions/discord/runtime-api.threads.ts`
  - source: `path` [A] `extensions/discord/src/actions/runtime.messaging.messages.ts`

### 路径证据

- 新增 `extensions/discord/runtime-api.actions.ts`：调整 runtime api.actions（implementation）。
- 新增 `extensions/discord/runtime-api.lookup.ts`：调整 runtime api.lookup（implementation）。
- 新增 `extensions/discord/runtime-api.monitor.ts`：调整 runtime api.monitor（implementation）。
- 新增 `extensions/discord/runtime-api.send.ts`：调整 runtime api.send（message delivery）。
- 新增 `extensions/discord/runtime-api.threads.ts`：调整 runtime api.threads（implementation）。
- 新增 `extensions/discord/src/actions/runtime.messaging.messages.ts`：调整 runtime.messaging.messages（message delivery）。
- 新增 `extensions/discord/src/actions/runtime.messaging.reactions.ts`：调整 runtime.messaging.reactions（implementation）。
- 新增 `extensions/discord/src/actions/runtime.messaging.runtime.ts`：调整 runtime.messaging（implementation）。
- 新增 `extensions/discord/src/actions/runtime.messaging.send.ts`：调整 runtime.messaging.send（message delivery）。
- 新增 `extensions/discord/src/actions/runtime.messaging.shared.ts`：调整 runtime.messaging.shared（implementation）。
- 新增 `extensions/discord/src/api-barrel.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/discord/src/channel.conversation.ts`：调整 channel.conversation（implementation）。
- 修改 `extensions/discord/account-inspect-api.ts`：调整 account inspect api（implementation）。
- 修改 `extensions/discord/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/discord/config-api.ts`：调整 config api（configuration/schema）。
- 修改 `extensions/discord/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/discord/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/discord/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/discord/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/discord/runtime-setter-api.ts`：调整 runtime setter api（implementation）。
- 修改 `extensions/discord/src/account-inspect.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/discord/src/account-inspect.ts`：调整 account inspect（implementation）。
- 修改 `extensions/discord/src/accounts.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/discord/src/accounts.ts`：调整 accounts（implementation）。
- 删除 `extensions/discord/src/message-tool-schema.ts`：移除旧的 configuration/schema 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/discord/src/monitor/inbound-worker.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/discord/src/runtime-group-policy.ts`：移除旧的 model/thinking policy 文件；需要确认没有调用方继续依赖这个路径。
- 其余 379 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/discord` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/discord/change-to-test.md` 的验证建议。
