# src/config-secrets-security/config-schema-validation

## 一句话结论

config schema validation 所属的 Gateway, config, infrastructure, security and auth 有 59 个路径变化（新增 5、修改 53、删除 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/config-schema-validation`
- Changed path count: `59`
- Status counts: `新增 5、修改 53、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `59` files, `+17055` / `-2479`

## 功能变化摘要

这个 leaf 属于 `Gateway, config, infrastructure, security and auth`。本次版本差异显示它的主要变化是：新增 5、修改 53、删除 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/config/doc-baseline.runtime.ts`
- `src/config/types.provider-request.ts`
- `src/config/zod-schema.markdown-tables.test.ts`
- `src/config/zod-schema.providers-whatsapp.test.ts`
- `src/config/zod-schema.providers.lazy-runtime.test.ts`

### 修改

- `src/config/doc-baseline.integration.test.ts`
- `src/config/doc-baseline.ts`
- `src/config/schema-base.ts`
- `src/config/schema.base.generated.test.ts`
- `src/config/schema.base.generated.ts`
- `src/config/schema.help.quality.test.ts`
- `src/config/schema.help.ts`
- `src/config/schema.hints.test.ts`
- `src/config/schema.hints.ts`
- `src/config/schema.labels.ts`
- `src/config/schema.shared.ts`
- `src/config/schema.tags.ts`
- `src/config/schema.test.ts`
- `src/config/schema.ts`
- `src/config/types.agent-defaults.ts`
- `src/config/types.agents-shared.ts`
- `src/config/types.agents.ts`
- `src/config/types.approvals.ts`
- `src/config/types.auth.ts`
- `src/config/types.base.ts`
- `src/config/types.browser.ts`
- `src/config/types.channel-messaging-common.ts`
- `src/config/types.channels.ts`
- `src/config/types.discord.ts`
- `src/config/types.gateway.ts`
- `src/config/types.googlechat.ts`
- `src/config/types.hooks.ts`
- `src/config/types.imessage.ts`
- `src/config/types.irc.ts`
- `src/config/types.mcp.ts`
- … 另有 23 个路径，详见 `leaf-impact.json`。

### 删除

- `src/config/zod-schema.signal-groups.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Gateway 使用者
- 配置/安全相关调用方

## 建议验证

- 首选验证：`config-schema-validation/` | pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/config-secrets-security/config-schema-validation` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/config-schema-validation/change-to-test.md` 的验证建议。
