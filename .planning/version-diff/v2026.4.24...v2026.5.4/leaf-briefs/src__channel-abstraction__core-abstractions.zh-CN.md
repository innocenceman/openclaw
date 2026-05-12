# src/channel-abstraction/core-abstractions

## 1. 功能结论

**新增**：opt-in reaction tool tracking、simplify thread-bound session spawning；**修改**：channels preserve channel aliases in plugin probes、status update reaction lifecycle snapshots、discord preserve tracked reaction targets、cache startup package metadata；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 7、修改 29

## 3. 功能级详细差异

### 优化 cache startup package metadata

优化 cache startup package metadata

- 验证提示：优先运行 `| pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 channels preserve channel aliases in plugin probes

修复 channels：preserve channel aliases in plugin probes

- 验证提示：优先运行 `| pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 discord preserve tracked reaction targets

修复 discord：preserve tracked reaction targets

- 验证提示：优先运行 `| pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 stabilize channel configured probes

修复 stabilize channel configured probes

- 验证提示：优先运行 `| pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 stabilize current CI tests

修复 stabilize current CI tests

- 验证提示：优先运行 `| pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 tolerate bundled channel catalog discovery failures

修复 tolerate bundled channel catalog discovery failures

- 验证提示：优先运行 `| pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 新增 opt-in reaction tool tracking

新增 opt-in reaction tool tracking

- 验证提示：优先运行 `| pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 新增 simplify thread-bound session spawning

新增 simplify thread-bound session spawning

- 验证提示：优先运行 `| pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 remove stale config presence mock import

测试覆盖 remove stale config presence mock import

- 验证提示：优先运行 `| pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 status update reaction lifecycle snapshots

测试覆盖 status：update reaction lifecycle snapshots

- 验证提示：优先运行 `| pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 config presence regression/contract coverage、config presence，需要按契约边界审查。

- 验证提示：优先运行 `| pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 account snapshot fields regression/contract coverage、ack reactions regression/contract coverage、bundled channel catalog read.fail soft regression/contract coverage、bundled channel catalog read regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/core-abstractions`
- Changed path count: `36`
- Status counts: `新增 7、修改 29`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `36` files, `+2556` / `-256`

### 归纳依据

- 主要落点：implementation、tests/contracts、session/state handling、provider catalog、configuration/schema、model/thinking policy。
- 新增或暴露的关键符号包括：`readNullableNumber`, `createAckReactionHandle`, `removeAckReactionHandleAfterReply`, `useBundledPluginsDir`, `readBundledExtensionCatalogEntriesSync`, `isChannelCatalogEntryLike`, `toBundledChannelEntry`, `listExplicitlyDisabledChannelIdsForConfig`, `collectChatChannelAliases`, `EXEC_TOOL_EMOJI`。
- 建议优先验证：优先运行 `| pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix(channels): preserve channel aliases in plugin probes；test(status): update reaction lifecycle snapshots；fix(discord): preserve tracked reaction targets；Add opt-in reaction tool tracking；perf: cache startup package metadata；feat: simplify thread-bound session spawning；fix: stabilize current CI tests；fix: tolerate bundled channel catalog discovery failures

### Dimension evidence

- `public-contract-优化-cache-startup-package-metadata` / 优化 cache startup package metadata:
  - source: `path` [A] `src/channels/bundled-channel-catalog-read.fail-soft.test.ts`
  - source: `path` [A] `src/channels/turn/context.test.ts`
  - source: `path` [A] `src/channels/turn/context.ts`
  - source: `path` [M] `src/channels/account-snapshot-fields.test.ts`
  - source: `path` [M] `src/channels/account-snapshot-fields.ts`
  - source: `path` [M] `src/channels/ack-reactions.test.ts`
- `maintenance-修复-channels-preserve-channel-aliases-in-plugin` / 修复 channels preserve channel aliases in plugin probes:
  - source: `path` [M] `src/channels/account-snapshot-fields.test.ts` — semantic cue
  - source: `path` [M] `src/channels/account-snapshot-fields.ts` — semantic cue
  - source: `path` [M] `src/channels/ack-reactions.test.ts` — semantic cue
  - source: `path` [M] `src/channels/ack-reactions.ts` — semantic cue
  - source: `path` [M] `src/channels/allow-from.ts` — semantic cue
  - source: `path` [M] `src/channels/bundled-channel-catalog-read.fail-soft.test.ts` — semantic cue
- `maintenance-修复-discord-preserve-tracked-reaction-targets` / 修复 discord preserve tracked reaction targets:
  - source: `path` [M] `src/channels/ack-reactions.test.ts` — semantic cue
  - source: `path` [M] `src/channels/ack-reactions.ts` — semantic cue
  - source: `path` [M] `src/channels/status-reactions.slack-lifecycle.test.ts` — semantic cue
  - source: `path` [M] `src/channels/status-reactions.test.ts` — semantic cue
  - source: `path` [M] `src/channels/status-reactions.ts` — semantic cue
- `maintenance-修复-stabilize-channel-configured-probes` / 修复 stabilize channel configured probes:
  - source: `path` [M] `src/channels/account-snapshot-fields.test.ts` — semantic cue
  - source: `path` [M] `src/channels/account-snapshot-fields.ts` — semantic cue
  - source: `path` [M] `src/channels/ack-reactions.test.ts` — semantic cue
  - source: `path` [M] `src/channels/ack-reactions.ts` — semantic cue
  - source: `path` [M] `src/channels/allow-from.ts` — semantic cue
  - source: `path` [M] `src/channels/bundled-channel-catalog-read.fail-soft.test.ts` — semantic cue
- `maintenance-修复-stabilize-current-CI-tests` / 修复 stabilize current CI tests:
  - source: `path` [A] `src/channels/bundled-channel-catalog-read.fail-soft.test.ts`
  - source: `path` [A] `src/channels/turn/context.test.ts`
  - source: `path` [A] `src/channels/turn/context.ts`
  - source: `path` [M] `src/channels/account-snapshot-fields.test.ts`
  - source: `path` [M] `src/channels/account-snapshot-fields.ts`
  - source: `path` [M] `src/channels/ack-reactions.test.ts`
- `runtime-behavior-修复-tolerate-bundled-channel-catalog-discovery-f` / 修复 tolerate bundled channel catalog discovery failures:
  - source: `path` [M] `src/channels/account-snapshot-fields.test.ts` — semantic cue
  - source: `path` [M] `src/channels/account-snapshot-fields.ts` — semantic cue
  - source: `path` [M] `src/channels/ack-reactions.test.ts` — semantic cue
  - source: `path` [M] `src/channels/ack-reactions.ts` — semantic cue
  - source: `path` [M] `src/channels/allow-from.ts` — semantic cue
  - source: `path` [M] `src/channels/bundled-channel-catalog-read.fail-soft.test.ts` — semantic cue
- `maintenance-新增-opt-in-reaction-tool-tracking` / 新增 opt-in reaction tool tracking:
  - source: `path` [M] `src/channels/ack-reactions.test.ts` — semantic cue
  - source: `path` [M] `src/channels/ack-reactions.ts` — semantic cue
  - source: `path` [M] `src/channels/status-reactions.slack-lifecycle.test.ts` — semantic cue
  - source: `path` [M] `src/channels/status-reactions.test.ts` — semantic cue
  - source: `path` [M] `src/channels/status-reactions.ts` — semantic cue
- `maintenance-新增-simplify-thread-bound-session-spawning` / 新增 simplify thread-bound session spawning:
  - source: `path` [M] `src/channels/session.test.ts` — semantic cue
  - source: `path` [M] `src/channels/session.ts` — semantic cue
  - source: `path` [M] `src/channels/session.types.ts` — semantic cue
- `tests-docs-测试覆盖-remove-stale-config-presence-mock-import` / 测试覆盖 remove stale config presence mock import:
  - source: `path` [M] `src/channels/config-presence.test.ts` — semantic cue
  - source: `path` [M] `src/channels/config-presence.ts` — semantic cue
- `tests-docs-测试覆盖-status-update-reaction-lifecycle-snapshots` / 测试覆盖 status update reaction lifecycle snapshots:
  - source: `path` [M] `src/channels/ack-reactions.test.ts` — semantic cue
  - source: `path` [M] `src/channels/ack-reactions.ts` — semantic cue
  - source: `path` [M] `src/channels/status-reactions.slack-lifecycle.test.ts` — semantic cue
  - source: `path` [M] `src/channels/status-reactions.test.ts` — semantic cue
  - source: `path` [M] `src/channels/status-reactions.ts` — semantic cue
  - source: `path` [M] `src/channels/typing-lifecycle.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/channels/config-presence.test.ts` — contract evidence
  - source: `path` [M] `src/channels/config-presence.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/channels/account-snapshot-fields.test.ts` — test evidence
  - source: `path` [M] `src/channels/ack-reactions.test.ts` — test evidence
  - source: `path` [M] `src/channels/bundled-channel-catalog-read.fail-soft.test.ts` — test evidence
  - source: `path` [M] `src/channels/bundled-channel-catalog-read.test.ts` — test evidence
  - source: `path` [M] `src/channels/channels-misc.test.ts` — test evidence
  - source: `path` [M] `src/channels/config-presence.test.ts` — test evidence

### 路径证据

- 新增 `src/channels/bundled-channel-catalog-read.fail-soft.test.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 新增 `src/channels/turn/context.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/channels/turn/context.ts`：调整 context（implementation）。
- 新增 `src/channels/turn/dispatch-result.ts`：调整 dispatch result（implementation）。
- 新增 `src/channels/turn/kernel.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/channels/turn/kernel.ts`：调整 kernel（implementation）。
- 新增 `src/channels/turn/types.ts`：调整 turn types（implementation）。
- 修改 `src/channels/account-snapshot-fields.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/channels/account-snapshot-fields.ts`：调整 account snapshot fields（implementation）。
- 修改 `src/channels/ack-reactions.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/channels/ack-reactions.ts`：调整 ack reactions（implementation）。
- 修改 `src/channels/allow-from.ts`：调整 allow from（implementation）。
- 修改 `src/channels/bundled-channel-catalog-read.test.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 修改 `src/channels/bundled-channel-catalog-read.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 修改 `src/channels/channels-misc.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/channels/config-presence.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/channels/config-presence.ts`：调整 config presence（configuration/schema）。
- 修改 `src/channels/conversation-binding-context.ts`：调整 conversation binding context（implementation）。
- 修改 `src/channels/conversation-resolution.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 17 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/channel-abstraction/core-abstractions` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/channel-abstraction/core-abstractions/change-to-test.md` 的验证建议。
