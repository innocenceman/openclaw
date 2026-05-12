# extensions/channel-plugins/slack

## 1. 功能结论

**新增**：add rich Slack progress drafts；**修改**：slack mention-gating thread participation、clarify slack socket retry errors、resolve small triage issues、slack keep newest rich progress lines；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：large、contains-deletions
- 路径状态摘要（降级事实）：新增 10、修改 142、删除 2

## 3. 功能级详细差异

### 修复 channels align preview tool progress help

修复 channels：align preview tool progress help

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 channels pass raw progress detail to drafts

修复 channels：pass raw progress detail to drafts

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 channels quiet disabled preview tool progress

修复 channels：quiet disabled preview tool progress

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 channels unify progress draft line formatting

修复 channels：unify progress draft line formatting

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 clarify slack socket retry errors

修复 clarify slack socket retry errors

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 resolve small triage issues

修复 resolve small triage issues

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 slack keep newest rich progress lines

修复 slack：keep newest rich progress lines

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 slack mention-gating thread participation

修复 slack mention-gating thread participation

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 tests restore progress draft changed gate

修复 tests：restore progress draft changed gate

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 置信度：`high`

### 新增 add rich Slack progress drafts

新增 add rich Slack progress drafts

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 account inspect api、slack public API barrel、config api、plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 slack plugin entrypoint、accounts regression/contract coverage、action runtime regression/contract coverage、action threading regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `handler`（`extensions/slack/src/http/handler.runtime.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `message tool schema`（`extensions/slack/src/message-tool-schema.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 account inspect api、slack public API barrel、config api、slack plugin entrypoint、plugin manifest/control-plane metadata、package metadata/version；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/slack`
- Changed path count: `154`
- Status counts: `新增 10、修改 142、删除 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `154` files, `+7343` / `-1140`

### 归纳依据

- 主要落点：implementation、tests/contracts、message delivery、configuration/schema、auth/pairing/security behavior、streaming/reasoning、manifest/package metadata、session/state handling。
- 新增或暴露的关键符号包括：`resolveSlackAccountConfig`, `resolveSlackAccountAllowFrom`, `resolveSlackConfigAccessorAccount`, `resolveSlackAccountDmPolicy`, `sameSlackChannelTarget`, `SLACK_TEXT_LIMIT`, `createClient`, `slackPlatformError`, `hasSlackPlatformError`, `getSlackApprovalApprovers`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts`；`pnpm build`。
- 相关 commit 主题：fix: slack mention-gating thread participation；fix: clarify slack socket retry errors；fix: resolve small triage issues；fix(slack): keep newest rich progress lines；fix(tests): restore progress draft changed gate；feat: add rich Slack progress drafts；fix(channels): align preview tool progress help；fix(channels): pass raw progress detail to drafts

### Dimension evidence

- `maintenance-修复-channels-align-preview-tool-progress-help` / 修复 channels align preview tool progress help:
  - source: `path` [M] `extensions/slack/src/blocks.test-helpers.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/message-tool-schema.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/message-tools.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/monitor.test-helpers.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/monitor.tool-result.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/monitor/events/channels.test.ts` — semantic cue
- `maintenance-修复-channels-pass-raw-progress-detail-to-drafts` / 修复 channels pass raw progress detail to drafts:
  - source: `path` [M] `extensions/slack/src/directory-config.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/directory-contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/directory-live.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/doctor-contract.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/doctor.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/message-tool-schema.ts` — semantic cue
- `user-visible-修复-channels-quiet-disabled-preview-tool-progress` / 修复 channels quiet disabled preview tool progress:
  - source: `path` [M] `extensions/slack/src/message-tool-schema.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/message-tools.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/monitor.tool-result.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/monitor/events/channels.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/monitor/events/channels.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/monitor/message-handler/dispatch.preview-fallback.test.ts` — semantic cue
- `maintenance-修复-channels-unify-progress-draft-line-formatting` / 修复 channels unify progress draft line formatting:
  - source: `path` [M] `extensions/slack/src/draft-stream.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/draft-stream.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/monitor/events/channels.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/monitor/events/channels.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/progress-blocks.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/progress-blocks.ts` — semantic cue
- `maintenance-修复-clarify-slack-socket-retry-errors` / 修复 clarify slack socket retry errors:
  - source: `path` [M] `extensions/slack/account-inspect-api.ts` — semantic cue
  - source: `path` [M] `extensions/slack/api.ts` — semantic cue
  - source: `path` [M] `extensions/slack/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/slack/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/slack/package.json` — semantic cue
- `maintenance-修复-resolve-small-triage-issues` / 修复 resolve small triage issues:
  - source: `path` [A] `extensions/slack/src/actions.reactions.test.ts`
  - source: `path` [A] `extensions/slack/src/edit-text.ts`
  - source: `path` [A] `extensions/slack/src/monitor/events/home.test.ts`
  - source: `path` [M] `extensions/slack/account-inspect-api.ts`
  - source: `path` [M] `extensions/slack/api.ts`
  - source: `path` [M] `extensions/slack/config-api.ts`
- `maintenance-修复-slack-keep-newest-rich-progress-lines` / 修复 slack keep newest rich progress lines:
  - source: `path` [M] `extensions/slack/account-inspect-api.ts` — semantic cue
  - source: `path` [M] `extensions/slack/api.ts` — semantic cue
  - source: `path` [M] `extensions/slack/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/slack/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/slack/package.json` — semantic cue
- `maintenance-修复-slack-mention-gating-thread-participation` / 修复 slack mention-gating thread participation:
  - source: `path` [M] `extensions/slack/account-inspect-api.ts` — semantic cue
  - source: `path` [M] `extensions/slack/api.ts` — semantic cue
  - source: `path` [M] `extensions/slack/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/slack/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/slack/package.json` — semantic cue
- `maintenance-修复-tests-restore-progress-draft-changed-gate` / 修复 tests restore progress draft changed gate:
  - source: `path` [M] `extensions/slack/src/draft-stream.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/draft-stream.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/progress-blocks.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/src/progress-blocks.ts` — semantic cue
- `maintenance-新增-add-rich-Slack-progress-drafts` / 新增 add rich Slack progress drafts:
  - source: `path` [M] `extensions/slack/account-inspect-api.ts` — semantic cue
  - source: `path` [M] `extensions/slack/api.ts` — semantic cue
  - source: `path` [M] `extensions/slack/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/slack/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/slack/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/slack/package.json` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/slack/account-inspect-api.ts` — contract evidence
  - source: `path` [M] `extensions/slack/api.ts` — contract evidence
  - source: `path` [M] `extensions/slack/config-api.ts` — contract evidence
  - source: `path` [M] `extensions/slack/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/slack/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/slack/src/channel-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/slack/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/slack/index.test.ts` — test evidence
  - source: `path` [M] `extensions/slack/src/accounts.test.ts` — test evidence
  - source: `path` [M] `extensions/slack/src/action-runtime.test.ts` — test evidence
  - source: `path` [M] `extensions/slack/src/action-threading.test.ts` — test evidence
  - source: `path` [M] `extensions/slack/src/actions.blocks.test.ts` — test evidence
  - source: `path` [M] `extensions/slack/src/actions.download-file.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/slack/src/http/handler.runtime.ts`
  - source: `path` [D] `extensions/slack/src/message-tool-schema.ts`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `extensions/slack/src/actions.reactions.test.ts`
  - source: `path` [A] `extensions/slack/src/edit-text.ts`
  - source: `path` [A] `extensions/slack/src/monitor/events/home.test.ts`
  - source: `path` [A] `extensions/slack/src/monitor/events/home.ts`
  - source: `path` [A] `extensions/slack/src/monitor/message-handler/prepare-dm-history.ts`
  - source: `path` [A] `extensions/slack/src/monitor/message-handler/subteam-mentions.test.ts`

### 路径证据

- 新增 `extensions/slack/src/actions.reactions.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/slack/src/edit-text.ts`：调整 edit text（implementation）。
- 新增 `extensions/slack/src/monitor/events/home.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/slack/src/monitor/events/home.ts`：调整 home（implementation）。
- 新增 `extensions/slack/src/monitor/message-handler/prepare-dm-history.ts`：调整 prepare dm history（message delivery）。
- 新增 `extensions/slack/src/monitor/message-handler/subteam-mentions.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/slack/src/monitor/message-handler/subteam-mentions.ts`：调整 subteam mentions（message delivery）。
- 新增 `extensions/slack/src/progress-blocks.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/slack/src/progress-blocks.ts`：调整 progress blocks（implementation）。
- 新增 `extensions/slack/src/scopes.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/slack/account-inspect-api.ts`：调整 account inspect api（implementation）。
- 修改 `extensions/slack/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/slack/config-api.ts`：调整 config api（configuration/schema）。
- 修改 `extensions/slack/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/slack/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/slack/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/slack/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/slack/src/account-reply-mode.ts`：调整 account reply mode（message delivery）。
- 修改 `extensions/slack/src/account-surface-fields.ts`：调整 account surface fields（implementation）。
- 修改 `extensions/slack/src/accounts.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/slack/src/accounts.ts`：调整 accounts（implementation）。
- 修改 `extensions/slack/src/action-runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 删除 `extensions/slack/src/http/handler.runtime.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/slack/src/message-tool-schema.ts`：移除旧的 configuration/schema 文件；需要确认没有调用方继续依赖这个路径。
- 其余 130 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/slack` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/slack/change-to-test.md` 的验证建议。
