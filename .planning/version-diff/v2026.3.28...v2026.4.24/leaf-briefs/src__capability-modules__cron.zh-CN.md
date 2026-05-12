# src/capability-modules/cron

## 一句话结论

cron 所属的 Memory, media, web UI and terminal UI surfaces 有 135 个路径变化（新增 52、修改 71、删除 9、重命名 3），兼容性判断为行为变化。

## Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/cron`
- Changed path count: `135`
- Status counts: `新增 52、修改 71、删除 9、重命名 3`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `135` files, `+12192` / `-7144`

## 功能变化摘要

这个 leaf 属于 `Memory, media, web UI and terminal UI surfaces`。本次版本差异显示它的主要变化是：新增 52、修改 71、删除 9、重命名 3。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/cron/active-jobs.ts`
- `src/cron/delivery-field-schemas.ts`
- `src/cron/delivery-plan.test.ts`
- `src/cron/delivery-plan.ts`
- `src/cron/delivery-preview.ts`
- `src/cron/delivery.test-helpers.ts`
- `src/cron/isolated-agent.hook-content-wrapping.test.ts`
- `src/cron/isolated-agent.isolated-auth-session-flag.test.ts`
- `src/cron/isolated-agent.model-overrides.test.ts`
- `src/cron/isolated-agent.session-identity.test.ts`
- `src/cron/isolated-agent.turn-test-helpers.ts`
- `src/cron/isolated-agent/channel-output-policy.test.ts`
- `src/cron/isolated-agent/channel-output-policy.ts`
- `src/cron/isolated-agent/delivery-logger.runtime.ts`
- `src/cron/isolated-agent/delivery-outbound.runtime.ts`
- `src/cron/isolated-agent/delivery-subagent-registry.runtime.ts`
- `src/cron/isolated-agent/delivery-target.runtime.ts`
- `src/cron/isolated-agent/run-auth-profile.runtime.ts`
- `src/cron/isolated-agent/run-context.runtime.ts`
- `src/cron/isolated-agent/run-delivery.runtime.ts`
- `src/cron/isolated-agent/run-embedded.runtime.ts`
- `src/cron/isolated-agent/run-execution-cli.runtime.ts`
- `src/cron/isolated-agent/run-execution.runtime.ts`
- `src/cron/isolated-agent/run-executor.runtime.ts`
- `src/cron/isolated-agent/run-executor.ts`
- `src/cron/isolated-agent/run-external-content.runtime.ts`
- `src/cron/isolated-agent/run-fallback-policy.ts`
- `src/cron/isolated-agent/run-model-catalog.runtime.ts`
- `src/cron/isolated-agent/run-model-selection.runtime.ts`
- `src/cron/isolated-agent/run-session-state.test.ts`
- … 另有 22 个路径，详见 `leaf-impact.json`。

### 修改

- `src/cron/delivery.failure-notify.test.ts`
- `src/cron/delivery.test.ts`
- `src/cron/delivery.ts`
- `src/cron/isolated-agent.auth-profile-propagation.test.ts`
- `src/cron/isolated-agent.delivery.test-helpers.ts`
- `src/cron/isolated-agent.direct-delivery-core-channels.test.ts`
- `src/cron/isolated-agent.helpers.test.ts`
- `src/cron/isolated-agent.lane.test.ts`
- `src/cron/isolated-agent.mocks.ts`
- `src/cron/isolated-agent.model-formatting.test.ts`
- `src/cron/isolated-agent.test-harness.ts`
- `src/cron/isolated-agent.test-setup.ts`
- `src/cron/isolated-agent/delivery-dispatch.double-announce.test.ts`
- `src/cron/isolated-agent/delivery-dispatch.named-agent.test.ts`
- `src/cron/isolated-agent/delivery-dispatch.ts`
- `src/cron/isolated-agent/delivery-target.test.ts`
- `src/cron/isolated-agent/delivery-target.ts`
- `src/cron/isolated-agent/helpers.test.ts`
- `src/cron/isolated-agent/helpers.ts`
- `src/cron/isolated-agent/model-selection.ts`
- `src/cron/isolated-agent/run.cron-model-override.test.ts`
- `src/cron/isolated-agent/run.fast-mode.test.ts`
- `src/cron/isolated-agent/run.message-tool-policy.test.ts`
- `src/cron/isolated-agent/run.owner-auth.test.ts`
- `src/cron/isolated-agent/run.session-key.test.ts`
- `src/cron/isolated-agent/run.skill-filter.test.ts`
- `src/cron/isolated-agent/run.test-harness.ts`
- `src/cron/isolated-agent/run.ts`
- `src/cron/isolated-agent/session-key.ts`
- `src/cron/isolated-agent/session.test.ts`
- … 另有 41 个路径，详见 `leaf-impact.json`。

### 删除

- `src/cron/isolated-agent.delivers-response-has-heartbeat-ok-but-includes.test.ts`
- `src/cron/isolated-agent.delivery-target-thread-session.test.ts`
- `src/cron/isolated-agent.direct-delivery-forum-topics.test.ts`
- `src/cron/isolated-agent.skips-delivery-without-whatsapp-recipient-besteffortdeliver-true.test.ts`
- `src/cron/isolated-agent.subagent-model.test.ts`
- `src/cron/isolated-agent.uses-last-non-empty-agent-text-as.test.ts`
- `src/cron/service.store-migration.test.ts`
- `src/cron/service.store.migration.test.ts`
- `src/cron/store-migration.test.ts`

### 重命名

- `src/cron/legacy-delivery.ts`
- `src/cron/payload-migration.ts`
- `src/cron/store-migration.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：`cron/` | pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/capability-modules/cron` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/cron/change-to-test.md` 的验证建议。
