# src/config-secrets-security/config-io

## 一句话结论

config io 所属的 Gateway, config, infrastructure, security and auth 有 160 个路径变化（新增 53、修改 79、删除 24、重命名 4），兼容性判断为行为变化。

## Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/config-io`
- Changed path count: `160`
- Status counts: `新增 53、修改 79、删除 24、重命名 4`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `160` files, `+16504` / `-8686`

## 功能变化摘要

这个 leaf 属于 `Gateway, config, infrastructure, security and auth`。本次版本差异显示它的主要变化是：新增 53、修改 79、删除 24、重命名 4。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/config/agent-timeout-defaults.ts`
- `src/config/channel-compat-normalization.ts`
- `src/config/channel-configured-shared.ts`
- `src/config/channel-configured.test.ts`
- `src/config/commands.flags.ts`
- `src/config/config.gateway-node-pairing-auto-approve.test.ts`
- `src/config/config.legacy-config-provider-shapes.test.ts`
- `src/config/context-visibility.test.ts`
- `src/config/context-visibility.ts`
- `src/config/defaults.test.ts`
- `src/config/heartbeat-config-honor.inventory.test.ts`
- `src/config/io.audit.test.ts`
- `src/config/io.audit.ts`
- `src/config/io.best-effort.test.ts`
- `src/config/io.invalid-config.test.ts`
- `src/config/io.invalid-config.ts`
- `src/config/io.observe-recovery.test.ts`
- `src/config/io.observe-recovery.ts`
- `src/config/io.owner-display-secret.ts`
- `src/config/io.shell-env-expected-keys.test.ts`
- `src/config/io.write-prepare.test.ts`
- `src/config/io.write-prepare.ts`
- `src/config/markdown-tables.types.ts`
- `src/config/materialize.ts`
- `src/config/mutate.test.ts`
- `src/config/mutate.ts`
- `src/config/plugin-auto-enable.apply.ts`
- `src/config/plugin-auto-enable.channels.test.ts`
- `src/config/plugin-auto-enable.core.test.ts`
- `src/config/plugin-auto-enable.detect.ts`
- … 另有 23 个路径，详见 `leaf-impact.json`。

### 修改

- `src/config/agent-dirs.ts`
- `src/config/agent-limits.ts`
- `src/config/allowed-values.ts`
- `src/config/bindings.ts`
- `src/config/bundled-channel-config-metadata.generated.ts`
- `src/config/bundled-channel-config-runtime.test.ts`
- `src/config/channel-config-metadata.ts`
- `src/config/channel-configured.ts`
- `src/config/commands.test.ts`
- `src/config/commands.ts`
- `src/config/config-misc.test.ts`
- `src/config/config.acp-binding-cutover.test.ts`
- `src/config/config.agent-concurrency-defaults.test.ts`
- `src/config/config.allowlist-requires-allowfrom.test.ts`
- `src/config/config.compaction-settings.test.ts`
- `src/config/config.gateway-tailscale-bind.test.ts`
- `src/config/config.hooks-module-paths.test.ts`
- `src/config/config.identity-avatar.test.ts`
- `src/config/config.legacy-config-detection.accepts-imessage-dmpolicy.test.ts`
- `src/config/config.legacy-config-detection.rejects-routing-allowfrom.test.ts`
- `src/config/config.meta-timestamp-coercion.test.ts`
- `src/config/config.multi-agent-agentdir-validation.test.ts`
- `src/config/config.nix-integration-u3-u5-u9.test.ts`
- `src/config/config.plugin-validation.test.ts`
- `src/config/config.pruning-defaults.test.ts`
- `src/config/config.sandbox-docker.test.ts`
- `src/config/config.schema-regressions.test.ts`
- `src/config/config.secrets-schema.test.ts`
- `src/config/config.skills-entries-config.test.ts`
- `src/config/config.talk-validation.test.ts`
- … 另有 49 个路径，详见 `leaf-impact.json`。

### 删除

- `src/config/channel-config-surface.ts`
- `src/config/config.discord-agent-components.test.ts`
- `src/config/config.discord-presence.test.ts`
- `src/config/config.discord.test.ts`
- `src/config/config.dm-policy-alias.test.ts`
- `src/config/config.identity-defaults.test.ts`
- `src/config/config.irc.test.ts`
- `src/config/config.msteams.test.ts`
- `src/config/config.telegram-audio-preflight.test.ts`
- `src/config/config.telegram-custom-commands.test.ts`
- `src/config/config.telegram-topic-agentid.test.ts`
- `src/config/discord-preview-streaming.test.ts`
- `src/config/discord-preview-streaming.ts`
- `src/config/env-preserve-io.test.ts`
- `src/config/io.observe-config.test.ts`
- `src/config/io.validation-fails-closed.test.ts`
- `src/config/merge-config.ts`
- `src/config/plugin-auto-enable.test.ts`
- `src/config/sessions.store.imports.test.ts`
- `src/config/slack-http-config.test.ts`
- `src/config/slack-token-validation.test.ts`
- `src/config/telegram-actions-poll.test.ts`
- `src/config/telegram-webhook-port.test.ts`
- `src/config/telegram-webhook-secret.test.ts`

### 重命名

- `src/config/bundled-channel-config-runtime.ts`
- `src/config/config.talk-api-key-fallback.test.ts`
- `src/config/redact-snapshot.test-hints.ts`
- `src/config/telegram-custom-commands.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Gateway 使用者
- 配置/安全相关调用方

## 建议验证

- 首选验证：`config-io/` | pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/config-secrets-security/config-io` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/config-io/change-to-test.md` 的验证建议。
