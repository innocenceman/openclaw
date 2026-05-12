# src/plugin-runtime-sdk/plugin-sdk

## 1. 功能结论

**新增**：add rich Slack progress drafts；**修改**：openrouter keep DeepSeek V4 reasoning effort valid、plugin harden source loader fallback tests、discord avoid blocking startup on probe、resolve small triage issues；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CLI/agent 使用者、Provider/plugin 调用方、agent runtime 集成方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 11、修改 54、删除 2

## 3. 功能级详细差异

### 修复 channels balance compact progress markdown

修复 channels：balance compact progress markdown

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 channels scope progress tool status config

修复 channels：scope progress tool status config

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 discord avoid blocking startup on probe

修复 discord：avoid blocking startup on probe

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 openrouter keep DeepSeek V4 reasoning effort valid

修复 openrouter：keep DeepSeek V4 reasoning effort valid

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 resolve small triage issues

修复 resolve small triage issues

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 telegram stabilize reply dispatch runtime

修复 telegram：stabilize reply dispatch runtime

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 新增 add rich Slack progress drafts

新增 add rich Slack progress drafts

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 plugin harden source loader fallback tests

测试覆盖 plugin：harden source loader fallback tests

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 restore jiti override seams for loader tests

测试覆盖 restore jiti override seams for loader tests

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 satisfy jiti mock type contracts

测试覆盖 satisfy jiti mock type contracts

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 channel config helpers regression/contract coverage、channel config helpers、channel config schema legacy、channel config schema，需要按契约边界审查。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 channel config helpers regression/contract coverage、channel contract testing regression/contract coverage、channel entry contract regression/contract coverage、channel lifecycle.queue regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `memory core`（`src/plugin-sdk/memory-core.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `memory lancedb`（`src/plugin-sdk/memory-lancedb.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugin-sdk`
- Changed path count: `67`
- Status counts: `新增 11、修改 54、删除 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `67` files, `+3794` / `-225`

### 归纳依据

- 主要落点：implementation、tests/contracts、streaming/reasoning、configuration/schema、provider catalog、message delivery、auth/pairing/security behavior、speech/TTS。
- 新增或暴露的关键符号包括：`stubPluginModuleLoaderJitiFactory`, `Tool`, `getSourceModuleLoader`, `createChannelRunQueue`, `createDeferred`, `resolveChannelSourceReplyDeliveryMode`, `normalizeRouteThreadId`, `stringifyRouteThreadId`, `normalizeChannelRouteRef`, `channelRouteTarget`。
- 建议优先验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 相关 commit 主题：fix(openrouter): keep DeepSeek V4 reasoning effort valid；test(plugin): harden source loader fallback tests；fix(discord): avoid blocking startup on probe；fix: resolve small triage issues；fix(telegram): stabilize reply dispatch runtime；test: satisfy jiti mock type contracts；test: restore jiti override seams for loader tests；feat: add rich Slack progress drafts

### Dimension evidence

- `maintenance-修复-channels-balance-compact-progress-markdown` / 修复 channels balance compact progress markdown:
  - source: `path` [M] `src/plugin-sdk/memory-host-markdown.test.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/memory-host-markdown.ts` — semantic cue
- `maintenance-修复-channels-scope-progress-tool-status-config` / 修复 channels scope progress tool status config:
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.test.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/channel-config-schema-legacy.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/channel-config-schema.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/memory-core-host-status.ts` — semantic cue
- `maintenance-修复-discord-avoid-blocking-startup-on-probe` / 修复 discord avoid blocking startup on probe:
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.test.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/channel-config-schema-legacy.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/channel-config-schema.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/channel-contract-testing.test.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/channel-contract-testing.ts` — semantic cue
- `runtime-behavior-修复-openrouter-keep-DeepSeek-V4-reasoning-effort` / 修复 openrouter keep DeepSeek V4 reasoning effort valid:
  - source: `path` [A] `src/plugin-sdk/channel-activity-runtime.ts`
  - source: `path` [A] `src/plugin-sdk/channel-config-schema-legacy.ts`
  - source: `path` [A] `src/plugin-sdk/channel-contract-testing.test.ts`
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.test.ts`
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.ts`
  - source: `path` [M] `src/plugin-sdk/channel-config-schema.ts`
- `maintenance-修复-resolve-small-triage-issues` / 修复 resolve small triage issues:
  - source: `path` [A] `src/plugin-sdk/channel-activity-runtime.ts`
  - source: `path` [A] `src/plugin-sdk/channel-config-schema-legacy.ts`
  - source: `path` [A] `src/plugin-sdk/channel-contract-testing.test.ts`
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.test.ts`
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.ts`
  - source: `path` [M] `src/plugin-sdk/channel-config-schema.ts`
- `runtime-behavior-修复-telegram-stabilize-reply-dispatch-runtime` / 修复 telegram stabilize reply dispatch runtime:
  - source: `path` [M] `src/plugin-sdk/channel-activity-runtime.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/channel-reply-pipeline.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/media-runtime.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/memory-core-bundled-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/memory-core-bundled-runtime.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/memory-core-host-runtime-cli.ts` — semantic cue
- `maintenance-新增-add-rich-Slack-progress-drafts` / 新增 add rich Slack progress drafts:
  - source: `path` [A] `src/plugin-sdk/channel-activity-runtime.ts`
  - source: `path` [A] `src/plugin-sdk/channel-config-schema-legacy.ts`
  - source: `path` [A] `src/plugin-sdk/channel-contract-testing.test.ts`
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.test.ts`
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.ts`
  - source: `path` [M] `src/plugin-sdk/channel-config-schema.ts`
- `tests-docs-测试覆盖-plugin-harden-source-loader-fallback-tests` / 测试覆盖 plugin harden source loader fallback tests:
  - source: `path` [M] `src/plugin-sdk/channel-activity-runtime.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.test.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/channel-config-schema-legacy.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/channel-config-schema.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/channel-contract-testing.test.ts` — semantic cue
- `tests-docs-测试覆盖-restore-jiti-override-seams-for-loader-tes` / 测试覆盖 restore jiti override seams for loader tests:
  - source: `path` [A] `src/plugin-sdk/channel-activity-runtime.ts`
  - source: `path` [A] `src/plugin-sdk/channel-config-schema-legacy.ts`
  - source: `path` [A] `src/plugin-sdk/channel-contract-testing.test.ts`
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.test.ts`
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.ts`
  - source: `path` [M] `src/plugin-sdk/channel-config-schema.ts`
- `public-contract-测试覆盖-satisfy-jiti-mock-type-contracts` / 测试覆盖 satisfy jiti mock type contracts:
  - source: `path` [M] `src/plugin-sdk/provider-http-test-mocks.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/provider-test-contracts.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.test.ts` — contract evidence
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.ts` — contract evidence
  - source: `path` [M] `src/plugin-sdk/channel-config-schema-legacy.ts` — contract evidence
  - source: `path` [M] `src/plugin-sdk/channel-config-schema.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/plugin-sdk/channel-config-helpers.test.ts` — test evidence
  - source: `path` [M] `src/plugin-sdk/channel-contract-testing.test.ts` — test evidence
  - source: `path` [M] `src/plugin-sdk/channel-entry-contract.test.ts` — test evidence
  - source: `path` [M] `src/plugin-sdk/channel-lifecycle.queue.test.ts` — test evidence
  - source: `path` [M] `src/plugin-sdk/channel-route.test.ts` — test evidence
  - source: `path` [M] `src/plugin-sdk/channel-setup.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/plugin-sdk/memory-core.ts`
  - source: `path` [D] `src/plugin-sdk/memory-lancedb.ts`

### 路径证据

- 新增 `src/plugin-sdk/channel-activity-runtime.ts`：调整 channel activity runtime（implementation）。
- 新增 `src/plugin-sdk/channel-config-schema-legacy.ts`：调整 channel config schema legacy（configuration/schema）。
- 新增 `src/plugin-sdk/channel-contract-testing.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/plugin-sdk/channel-lifecycle.queue.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/plugin-sdk/channel-route.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/plugin-sdk/channel-route.ts`：调整 channel route（implementation）。
- 新增 `src/plugin-sdk/channel-target-testing.ts`：调整 channel target testing（implementation）。
- 新增 `src/plugin-sdk/channel-test-helpers.ts`：调整 channel test helpers（implementation）。
- 新增 `src/plugin-sdk/provider-catalog-runtime.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 新增 `src/plugin-sdk/provider-http-test-mocks.ts`：调整 provider http test mocks（implementation）。
- 新增 `src/plugin-sdk/provider-test-contracts.ts`：调整 provider test contracts（implementation）。
- 修改 `src/plugin-sdk/channel-config-helpers.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugin-sdk/channel-config-helpers.ts`：调整 channel config helpers（configuration/schema）。
- 修改 `src/plugin-sdk/channel-config-schema.ts`：调整 channel config schema（configuration/schema）。
- 修改 `src/plugin-sdk/channel-contract-testing.ts`：调整 channel contract testing（implementation）。
- 修改 `src/plugin-sdk/channel-contract.ts`：调整 channel contract（implementation）。
- 修改 `src/plugin-sdk/channel-entry-contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugin-sdk/channel-entry-contract.ts`：调整 channel entry contract（implementation）。
- 修改 `src/plugin-sdk/channel-feedback.ts`：调整 channel feedback（implementation）。
- 修改 `src/plugin-sdk/channel-lifecycle.core.ts`：调整 channel lifecycle.core（implementation）。
- 修改 `src/plugin-sdk/channel-mention-gating.ts`：调整 channel mention gating（implementation）。
- 修改 `src/plugin-sdk/channel-policy.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `src/plugin-sdk/channel-reply-pipeline.ts`：调整 channel reply pipeline（message delivery）。
- 删除 `src/plugin-sdk/memory-core.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugin-sdk/memory-lancedb.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 其余 42 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/plugin-runtime-sdk/plugin-sdk` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/plugin-runtime-sdk/plugin-sdk/change-to-test.md` 的验证建议。
