# extensions/channel-plugins/telegram

## 1. 功能结论

**修改**：telegram reuse preview for long text finals、Surface Codex usage-limit reset details in chat replies、telegram derive media placeholders from MIME、channels preserve channel aliases in plugin probes；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、文档语义变化、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：large、contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 29、修改 279、删除 2、重命名 15

## 3. 功能级详细差异

### 修复 channels preserve channel aliases in plugin probes

修复 channels：preserve channel aliases in plugin probes

- 验证提示：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 置信度：`high`

### 修复 plugins trust catalog package installs

修复 plugins：trust catalog package installs

- 验证提示：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 置信度：`high`

### 修复 telegram clarify model picker runtime scope

修复 telegram：clarify model picker runtime scope

- 验证提示：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 置信度：`high`

### 修复 telegram clean up tool-only previews

修复 telegram：clean up tool-only previews

- 验证提示：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 置信度：`high`

### 修复 telegram derive media placeholders from MIME

修复 telegram：derive media placeholders from MIME

- 验证提示：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 置信度：`high`

### 修复 telegram honor topic requireMention precedence

修复 telegram：honor topic requireMention precedence

- 验证提示：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 置信度：`high`

### 修复 telegram reuse preview for long text finals

修复 telegram：reuse preview for long text finals

- 验证提示：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 置信度：`high`

### 修改 Surface Codex usage-limit reset details in chat replies

修改 Surface Codex usage-limit reset details in chat replies

- 验证提示：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 置信度：`high`

### 测试覆盖 plugin harden source loader fallback tests

测试覆盖 plugin：harden source loader fallback tests

- 验证提示：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 置信度：`high`

### 测试覆盖 telegram accept native Windows session file paths

测试覆盖 telegram：accept native Windows session file paths

- 验证提示：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 telegram public API barrel、config api、doctor contract api、plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

本维度包含 2 个 evidence-backed 功能差异。

- 文档、说明或生成基线同步了 AGENTS docs、CLAUDE docs，用于更新读者指引、能力说明或事实基线。
- 测试或契约覆盖集中在 telegram plugin entrypoint、account inspect regression/contract coverage、accounts regression/contract coverage、action runtime regression/contract coverage，用于约束本 leaf 的回归边界。
- 验证提示：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `bot handlers`（`extensions/telegram/src/bot-handlers.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `test support`（`extensions/telegram/test-support.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`AGENTS docs` 路径（`src/channels/plugins/contracts/test-helpers/AGENTS.md`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`CLAUDE docs` 路径（`src/channels/plugins/contracts/test-helpers/CLAUDE.md`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`channel catalog contract` 路径（`src/channels/plugins/contracts/test-helpers/channel-catalog-contract.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`channel plugin catalog contract suites` 路径（`src/channels/plugins/contracts/test-helpers/channel-plugin-catalog-contract-suites.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 telegram public API barrel、config api、doctor contract api、telegram plugin entrypoint、plugin manifest/control-plane metadata、package metadata/version；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/telegram`
- Changed path count: `325`
- Status counts: `新增 29、修改 279、删除 2、重命名 15`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `325` files, `+14978` / `-3699`

### 归纳依据

- 主要落点：implementation、tests/contracts、message delivery、session/state handling、CLI/command behavior、configuration/schema、provider catalog、model/thinking policy。
- 新增或暴露的关键符号包括：`normalizeAllowFromEntry`, `hasWildcardAllowFrom`, `hasRestrictiveAllowFrom`, `dropWildcardAllowFrom`, `resolveMergedAllowFrom`, `DEFAULT_TELEGRAM_API_ROOT`, `TELEGRAM_BOT_ENDPOINT_SEGMENT_RE`, `isTelegramBotEndpointSegment`, `normalizeTelegramApiRoot`, `hasTelegramBotEndpointApiRoot`。
- 建议优先验证：优先运行 `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`；`pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`；`pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`。
- 相关 commit 主题：fix(telegram): reuse preview for long text finals；Surface Codex usage-limit reset details in chat replies；fix(telegram): derive media placeholders from MIME；fix(channels): preserve channel aliases in plugin probes；fix(telegram): clarify model picker runtime scope；fix(telegram): honor topic requireMention precedence；fix(plugins): trust catalog package installs；test(telegram): accept native Windows session file paths

### Dimension evidence

- `maintenance-修复-channels-preserve-channel-aliases-in-plugin` / 修复 channels preserve channel aliases in plugin probes:
  - source: `path` [M] `extensions/telegram/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/telegram/src/account-inspect.test.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/src/account-inspect.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/src/api-logging.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/src/bot-info.ts` — semantic cue
- `integration-build-release-修复-plugins-trust-catalog-package-installs` / 修复 plugins trust catalog package installs:
  - source: `path` [M] `extensions/telegram/package.json` — semantic cue
  - source: `path` [M] `src/channels/plugins/acp-bindings.test.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/bluebubbles-actions.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/bootstrap-registry.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/bundled-ids.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/bundled-root-caches.test.ts` — semantic cue
- `runtime-behavior-修复-telegram-clarify-model-picker-runtime-scope` / 修复 telegram clarify model picker runtime scope:
  - source: `path` [M] `extensions/telegram/api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/telegram/package.json` — semantic cue
- `maintenance-修复-telegram-clean-up-tool-only-previews` / 修复 telegram clean up tool-only previews:
  - source: `path` [M] `extensions/telegram/api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/telegram/package.json` — semantic cue
- `maintenance-修复-telegram-derive-media-placeholders-from-MIME` / 修复 telegram derive media placeholders from MIME:
  - source: `path` [M] `extensions/telegram/api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/telegram/package.json` — semantic cue
- `user-visible-修复-telegram-honor-topic-requireMention-preceden` / 修复 telegram honor topic requireMention precedence:
  - source: `path` [M] `extensions/telegram/api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/telegram/package.json` — semantic cue
- `maintenance-修复-telegram-reuse-preview-for-long-text-finals` / 修复 telegram reuse preview for long text finals:
  - source: `path` [M] `extensions/telegram/api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/telegram/package.json` — semantic cue
- `maintenance-修改-Surface-Codex-usage-limit-reset-details-in-c` / 修改 Surface Codex usage-limit reset details in chat replies:
  - source: `path` [M] `extensions/telegram/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/telegram/src/account-inspect.test.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/src/account-inspect.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/src/api-logging.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/src/bot-info.ts` — semantic cue
- `tests-docs-测试覆盖-plugin-harden-source-loader-fallback-tests` / 测试覆盖 plugin harden source loader fallback tests:
  - source: `path` [M] `extensions/telegram/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/telegram/src/interactive-fallback.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/acp-bindings.test.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/bluebubbles-actions.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/bootstrap-registry.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/bundled-ids.ts` — semantic cue
- `tests-docs-测试覆盖-telegram-accept-native-Windows-session-fil` / 测试覆盖 telegram accept native Windows session file paths:
  - source: `path` [M] `extensions/telegram/api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/telegram/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/telegram/package.json` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/telegram/api.ts` — contract evidence
  - source: `path` [M] `extensions/telegram/config-api.ts` — contract evidence
  - source: `path` [M] `extensions/telegram/doctor-contract-api.ts` — contract evidence
  - source: `path` [M] `extensions/telegram/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/telegram/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/telegram/src/account-config.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/telegram/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/channels/plugins/contracts/test-helpers/AGENTS.md` — docs evidence
  - source: `path` [M] `src/channels/plugins/contracts/test-helpers/CLAUDE.md` — docs evidence
  - source: `path` [M] `extensions/telegram/index.test.ts` — test evidence
  - source: `path` [M] `extensions/telegram/src/account-inspect.test.ts` — test evidence
  - source: `path` [M] `extensions/telegram/src/accounts.test.ts` — test evidence
  - source: `path` [M] `extensions/telegram/src/action-runtime.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/telegram/src/bot-handlers.ts`
  - source: `path` [D] `extensions/telegram/test-support.ts`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `src/channels/plugins/contracts/test-helpers/AGENTS.md`
  - source: `path` [R] `src/channels/plugins/contracts/test-helpers/CLAUDE.md`
  - source: `path` [R] `src/channels/plugins/contracts/test-helpers/channel-catalog-contract.ts`
  - source: `path` [R] `src/channels/plugins/contracts/test-helpers/channel-plugin-catalog-contract-suites.ts`
  - source: `path` [R] `src/channels/plugins/contracts/test-helpers/config-write-contract-suites.ts`
  - source: `path` [R] `src/channels/plugins/contracts/test-helpers/group-policy-contract-suites.ts`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `extensions/telegram/doctor-contract-api.ts`
  - source: `path` [A] `extensions/telegram/src/api-root.test.ts`
  - source: `path` [A] `extensions/telegram/src/api-root.ts`
  - source: `path` [A] `extensions/telegram/src/bot-info.ts`
  - source: `path` [A] `extensions/telegram/src/bot-message-context.require-mention.test.ts`
  - source: `path` [A] `extensions/telegram/src/bot-update-tracker.test.ts`

### 路径证据

- 新增 `extensions/telegram/doctor-contract-api.ts`：调整 doctor contract api（implementation）。
- 新增 `extensions/telegram/src/api-root.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/telegram/src/api-root.ts`：调整 api root（implementation）。
- 新增 `extensions/telegram/src/bot-info.ts`：调整 bot info（implementation）。
- 新增 `extensions/telegram/src/bot-message-context.require-mention.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/telegram/src/bot-update-tracker.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/telegram/src/bot-update-tracker.ts`：调整 bot update tracker（implementation）。
- 新增 `extensions/telegram/src/bot/native-quote.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/telegram/src/bot/native-quote.ts`：调整 native quote（implementation）。
- 新增 `extensions/telegram/src/channel.gateway.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/telegram/src/interactive-fallback.ts`：调整 interactive fallback（implementation）。
- 新增 `extensions/telegram/src/poll-visibility.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/telegram/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/telegram/config-api.ts`：调整 config api（configuration/schema）。
- 修改 `extensions/telegram/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/telegram/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/telegram/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/telegram/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/telegram/src/account-config.ts`：调整 account config（configuration/schema）。
- 修改 `extensions/telegram/src/account-inspect.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/telegram/src/account-inspect.ts`：调整 account inspect（implementation）。
- 修改 `extensions/telegram/src/account-selection.ts`：调整 account selection（implementation）。
- 修改 `extensions/telegram/src/accounts.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/telegram/src/accounts.ts`：调整 accounts（implementation）。
- 删除 `extensions/telegram/src/bot-handlers.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/telegram/test-support.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `src/channels/plugins/contracts/test-helpers/AGENTS.md`：调整 AGENTS docs（docs）。
- 重命名 `src/channels/plugins/contracts/test-helpers/CLAUDE.md`：调整 CLAUDE docs（docs）。
- 重命名 `src/channels/plugins/contracts/test-helpers/channel-catalog-contract.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 重命名 `src/channels/plugins/contracts/test-helpers/channel-plugin-catalog-contract-suites.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 重命名 `src/channels/plugins/contracts/test-helpers/config-write-contract-suites.ts`：调整 config write contract suites（configuration/schema）。
- 重命名 `src/channels/plugins/contracts/test-helpers/group-policy-contract-suites.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 重命名 `src/channels/plugins/contracts/test-helpers/group-policy-contract.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 重命名 `src/channels/plugins/contracts/test-helpers/imessage-test-plugin.ts`：调整 imessage test plugin（message delivery）。
- 重命名 `src/channels/plugins/contracts/test-helpers/manifest.ts`：调整 manifest（implementation）。
- 重命名 `src/channels/plugins/contracts/test-helpers/registry-backed-contract-shards.ts`：调整 registry backed contract shards（implementation）。
- 重命名 `src/channels/plugins/contracts/test-helpers/registry-session-binding.ts`：调整 registry session binding（session/state handling）。
- 重命名 `src/channels/plugins/contracts/test-helpers/runtime-artifacts.ts`：调整 runtime artifacts（implementation）。
- 其余 287 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/telegram` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/telegram/change-to-test.md` 的验证建议。
