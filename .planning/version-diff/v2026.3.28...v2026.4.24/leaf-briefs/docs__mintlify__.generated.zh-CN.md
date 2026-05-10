# docs/mintlify/.generated

## 一句话结论

.generated 所属的 Docs, generated baselines, changelog and public guidance 有 386 个路径变化（新增 170、修改 133、删除 81、重命名 2），兼容性判断为仅文档/测试。

## Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/.generated`
- Changed path count: `386`
- Status counts: `新增 170、修改 133、删除 81、重命名 2`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `386` files, `+16075` / `-101550`

## 功能变化摘要

这个 leaf 属于 `Docs, generated baselines, changelog and public guidance`。本次版本差异显示它的主要变化是：新增 170、修改 133、删除 81、重命名 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `docs/.generated/config-baseline.sha256`
- `docs/.generated/plugin-sdk-api-baseline.sha256`
- `docs/.i18n/ar-navigation.json`
- `docs/.i18n/de-navigation.json`
- `docs/.i18n/es-navigation.json`
- `docs/.i18n/fr-navigation.json`
- `docs/.i18n/id-navigation.json`
- `docs/.i18n/it-navigation.json`
- `docs/.i18n/ja-navigation.json`
- `docs/.i18n/ko-navigation.json`
- `docs/.i18n/pl-navigation.json`
- `docs/.i18n/pt-BR-navigation.json`
- `docs/.i18n/tr-navigation.json`
- `docs/.i18n/zh-Hans-navigation.json`
- `src/plugin-sdk/account-configured-ids.ts`
- `src/plugin-sdk/account-resolution-runtime.ts`
- `src/plugin-sdk/acp-binding-resolve-runtime.ts`
- `src/plugin-sdk/acp-binding-runtime.ts`
- `src/plugin-sdk/acp-runtime.test.ts`
- `src/plugin-sdk/agent-harness-runtime.ts`
- `src/plugin-sdk/agent-harness.ts`
- `src/plugin-sdk/anthropic-vertex-auth-presence.preflight.test.ts`
- `src/plugin-sdk/anthropic-vertex-auth-presence.test.ts`
- `src/plugin-sdk/anthropic-vertex-auth-presence.ts`
- `src/plugin-sdk/approval-approvers.ts`
- `src/plugin-sdk/approval-auth-helpers.test.ts`
- `src/plugin-sdk/approval-auth-helpers.ts`
- `src/plugin-sdk/approval-auth-runtime.ts`
- `src/plugin-sdk/approval-client-helpers.test.ts`
- `src/plugin-sdk/approval-client-helpers.ts`
- … 另有 140 个路径，详见 `leaf-impact.json`。

### 修改

- `docs/.generated/README.md`
- `docs/docs.json`
- `scripts/copy-bundled-plugin-metadata.mjs`
- `scripts/generate-config-doc-baseline.ts`
- `scripts/generate-plugin-sdk-api-baseline.ts`
- `src/plugin-sdk/AGENTS.md`
- `src/plugin-sdk/account-core.ts`
- `src/plugin-sdk/account-id.ts`
- `src/plugin-sdk/account-resolution.ts`
- `src/plugin-sdk/acp-runtime.ts`
- `src/plugin-sdk/agent-media-payload.ts`
- `src/plugin-sdk/agent-runtime.ts`
- `src/plugin-sdk/allowlist-config-edit.test.ts`
- `src/plugin-sdk/allowlist-config-edit.ts`
- `src/plugin-sdk/anthropic-cli.ts`
- `src/plugin-sdk/anthropic-vertex.ts`
- `src/plugin-sdk/api-baseline.ts`
- `src/plugin-sdk/approval-runtime.ts`
- `src/plugin-sdk/bluebubbles-policy.ts`
- `src/plugin-sdk/bluebubbles.ts`
- `src/plugin-sdk/boolean-param.ts`
- `src/plugin-sdk/browser-support.ts`
- `src/plugin-sdk/cli-backend.ts`
- `src/plugin-sdk/command-auth.test.ts`
- `src/plugin-sdk/command-auth.ts`
- `src/plugin-sdk/compat.ts`
- `src/plugin-sdk/config-paths.ts`
- `src/plugin-sdk/config-runtime.ts`
- `src/plugin-sdk/conversation-runtime.ts`
- `src/plugin-sdk/copilot-proxy.ts`
- … 另有 103 个路径，详见 `leaf-impact.json`。

### 删除

- `docs/.generated/config-baseline.json`
- `docs/.generated/config-baseline.jsonl`
- `docs/.generated/plugin-sdk-api-baseline.json`
- `docs/.generated/plugin-sdk-api-baseline.jsonl`
- `scripts/generate-bundled-plugin-metadata.d.mts`
- `scripts/generate-bundled-plugin-metadata.mjs`
- `src/plugin-sdk/allowlist-resolution.test.ts`
- `src/plugin-sdk/amazon-bedrock.ts`
- `src/plugin-sdk/browser-runtime.ts`
- `src/plugin-sdk/browser.ts`
- `src/plugin-sdk/byteplus.ts`
- `src/plugin-sdk/chutes.ts`
- `src/plugin-sdk/cloudflare-ai-gateway.ts`
- `src/plugin-sdk/deepseek.ts`
- `src/plugin-sdk/discord-account.ts`
- `src/plugin-sdk/discord-core.ts`
- `src/plugin-sdk/discord-runtime-surface.ts`
- `src/plugin-sdk/discord-send.ts`
- `src/plugin-sdk/discord-session-key.ts`
- `src/plugin-sdk/discord-surface.ts`
- `src/plugin-sdk/discord-thread-bindings.ts`
- `src/plugin-sdk/discord-timeouts.ts`
- `src/plugin-sdk/discord.ts`
- `src/plugin-sdk/google.ts`
- `src/plugin-sdk/huggingface.ts`
- `src/plugin-sdk/imessage-core.ts`
- `src/plugin-sdk/imessage-policy.ts`
- `src/plugin-sdk/imessage-runtime.ts`
- `src/plugin-sdk/imessage-targets.ts`
- `src/plugin-sdk/imessage.ts`
- … 另有 51 个路径，详见 `leaf-impact.json`。

### 重命名

- `src/plugin-sdk/vllm.ts`
- `src/plugin-sdk/volc-model-catalog-shared.ts`

## 兼容性判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 可能受影响的人或模块

- 文档读者和维护者

## 建议验证

- 首选验证：Config schema/help drift touched | `pnpm config:docs:check` | Approved drift refresh uses `pnpm config:docs:gen`; run broader config/docs checks when public help text changes.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `docs/mintlify/.generated` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/.generated/change-to-test.md` 的验证建议。
