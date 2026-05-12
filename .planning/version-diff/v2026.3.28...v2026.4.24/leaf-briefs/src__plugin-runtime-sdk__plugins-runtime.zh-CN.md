# src/plugin-runtime-sdk/plugins-runtime

## 一句话结论

plugins runtime 所属的 Plugin SDK, plugin registry, plugin loading boundaries 有 156 个路径变化（新增 79、修改 41、删除 30、重命名 6），兼容性判断为行为变化。

## Canonical facts

- Feature group: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugins-runtime`
- Changed path count: `156`
- Status counts: `新增 79、修改 41、删除 30、重命名 6`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `156` files, `+26363` / `-6717`

## 功能变化摘要

这个 leaf 属于 `Plugin SDK, plugin registry, plugin loading boundaries`。本次版本差异显示它的主要变化是：新增 79、修改 41、删除 30、重命名 6。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/plugins/contracts/boundary-invariants.test.ts`
- `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts`
- `src/plugins/contracts/config-footprint-guardrails.test.ts`
- `src/plugins/contracts/core-extension-facade-boundary.test.ts`
- `src/plugins/contracts/extension-package-project-boundaries.test.ts`
- `src/plugins/contracts/extension-runtime-dependencies.contract.test.ts`
- `src/plugins/contracts/inventory/bundled-capability-metadata.ts`
- `src/plugins/contracts/media-provider-registry.test.ts`
- `src/plugins/contracts/media-provider-registry.ts`
- `src/plugins/contracts/package-manifest.contract.test.ts`
- `src/plugins/contracts/plugin-entry-guardrails.test.ts`
- `src/plugins/contracts/plugin-registration.anthropic.contract.test.ts`
- `src/plugins/contracts/plugin-registration.brave.contract.test.ts`
- `src/plugins/contracts/plugin-registration.comfy.contract.test.ts`
- `src/plugins/contracts/plugin-registration.deepgram.contract.test.ts`
- `src/plugins/contracts/plugin-registration.duckduckgo.contract.test.ts`
- `src/plugins/contracts/plugin-registration.elevenlabs.contract.test.ts`
- `src/plugins/contracts/plugin-registration.exa.contract.test.ts`
- `src/plugins/contracts/plugin-registration.fal.contract.test.ts`
- `src/plugins/contracts/plugin-registration.firecrawl.contract.test.ts`
- `src/plugins/contracts/plugin-registration.google.contract.test.ts`
- `src/plugins/contracts/plugin-registration.groq.contract.test.ts`
- `src/plugins/contracts/plugin-registration.microsoft.contract.test.ts`
- `src/plugins/contracts/plugin-registration.minimax.contract.test.ts`
- `src/plugins/contracts/plugin-registration.mistral.contract.test.ts`
- `src/plugins/contracts/plugin-registration.moonshot.contract.test.ts`
- `src/plugins/contracts/plugin-registration.openai.contract.test.ts`
- `src/plugins/contracts/plugin-registration.openrouter.contract.test.ts`
- `src/plugins/contracts/plugin-registration.perplexity.contract.test.ts`
- `src/plugins/contracts/plugin-registration.tavily.contract.test.ts`
- … 另有 49 个路径，详见 `leaf-impact.json`。

### 修改

- `src/plugins/bundled-plugin-naming.test.ts`
- `src/plugins/contracts/loader.contract.test.ts`
- `src/plugins/contracts/memory-embedding-provider.contract.test.ts`
- `src/plugins/contracts/registry.contract.test.ts`
- `src/plugins/contracts/registry.retry.test.ts`
- `src/plugins/contracts/registry.ts`
- `src/plugins/contracts/shape.contract.test.ts`
- `src/plugins/contracts/speech-vitest-registry.ts`
- `src/plugins/contracts/tts.contract.test.ts`
- `src/plugins/discovery.test.ts`
- `src/plugins/discovery.ts`
- `src/plugins/generated-plugin-test-helpers.ts`
- `src/plugins/install-security-scan.runtime.ts`
- `src/plugins/install-security-scan.ts`
- `src/plugins/install.runtime.ts`
- `src/plugins/install.test.ts`
- `src/plugins/install.ts`
- `src/plugins/installs.ts`
- `src/plugins/loader.git-path-regression.test.ts`
- `src/plugins/loader.test.ts`
- `src/plugins/loader.ts`
- `src/plugins/manifest.ts`
- `src/plugins/provider-runtime.test-support.ts`
- `src/plugins/provider-runtime.test.ts`
- `src/plugins/provider-runtime.ts`
- `src/plugins/runtime/gateway-request-scope.test.ts`
- `src/plugins/runtime/runtime-agent.ts`
- `src/plugins/runtime/runtime-cache.ts`
- `src/plugins/runtime/runtime-channel.ts`
- `src/plugins/runtime/runtime-embedded-pi.runtime.ts`
- … 另有 11 个路径，详见 `leaf-impact.json`。

### 删除

- `src/extensions/public-artifacts.test.ts`
- `src/extensions/public-artifacts.ts`
- `src/plugins/contracts/discovery.contract.test.ts`
- `src/plugins/contracts/testkit.ts`
- `src/plugins/runtime/runtime-discord-ops.runtime.ts`
- `src/plugins/runtime/runtime-discord-typing.test.ts`
- `src/plugins/runtime/runtime-discord-typing.ts`
- `src/plugins/runtime/runtime-discord.ts`
- `src/plugins/runtime/runtime-imessage.ts`
- `src/plugins/runtime/runtime-line.runtime.ts`
- `src/plugins/runtime/runtime-matrix-boundary.ts`
- `src/plugins/runtime/runtime-matrix-contract.ts`
- `src/plugins/runtime/runtime-matrix-surface.ts`
- `src/plugins/runtime/runtime-matrix.ts`
- `src/plugins/runtime/runtime-media-understanding.runtime.ts`
- `src/plugins/runtime/runtime-signal.ts`
- `src/plugins/runtime/runtime-slack-ops.runtime.ts`
- `src/plugins/runtime/runtime-slack.ts`
- `src/plugins/runtime/runtime-telegram-ops.runtime.ts`
- `src/plugins/runtime/runtime-telegram-typing.test.ts`
- `src/plugins/runtime/runtime-telegram-typing.ts`
- `src/plugins/runtime/runtime-telegram.ts`
- `src/plugins/runtime/runtime-tts.runtime.ts`
- `src/plugins/runtime/runtime-whatsapp-boundary.ts`
- `src/plugins/runtime/runtime-whatsapp-login-tool.ts`
- `src/plugins/runtime/runtime-whatsapp-login.runtime.ts`
- `src/plugins/runtime/runtime-whatsapp-outbound.runtime.ts`
- `src/plugins/runtime/runtime-whatsapp-surface.ts`
- `src/plugins/runtime/runtime-whatsapp.ts`
- `src/plugins/runtime/types.contract.test.ts`

### 重命名

- `src/plugins/contracts/plugin-sdk-index.bundle.test.ts`
- `src/plugins/contracts/plugin-sdk-index.test.ts`
- `src/plugins/contracts/plugin-sdk-root-alias.test.ts`
- `src/plugins/contracts/plugin-sdk-subpaths.test.ts`
- `src/plugins/contracts/suites.ts`
- `src/plugins/contracts/wizard.contract.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- CLI/agent 使用者
- Provider/plugin 调用方
- agent runtime 集成方
- 插件作者

## 建议验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/plugin-runtime-sdk/plugins-runtime` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/plugin-runtime-sdk/plugins-runtime/change-to-test.md` 的验证建议。
