# Leaf Impact Mapping

本报告聚焦最终 leaf。Canonical mapping: `leaf-impact.json`。

## `docs/generated-baselines/bundled-plugin-metadata`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/generated-baselines/bundled-plugin-metadata`
- Coverage: `verified`
- Changed paths: `425`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `extensions/AGENTS.md`
- `extensions/CLAUDE.md`
- `extensions/anthropic-vertex/api.ts`
- `extensions/anthropic-vertex/provider-catalog.ts`
- `extensions/anthropic-vertex/region.ts`
- `extensions/browser/browser-runtime-api.ts`
- `extensions/browser/index.test.ts`
- `extensions/browser/index.ts`
- `extensions/browser/openclaw.plugin.json`
- `extensions/browser/package.json`
- `extensions/browser/runtime-api.ts`
- `extensions/browser/src/browser-runtime.ts`
- `extensions/browser/src/browser-tool.actions.ts`
- `extensions/browser/src/browser-tool.schema.ts`
- `extensions/browser/src/browser-tool.test.ts`
- `extensions/browser/src/browser-tool.ts`
- `extensions/browser/src/browser/bridge-auth-registry.ts`
- `extensions/browser/src/browser/bridge-server.auth.test.ts`
- `extensions/browser/src/browser/bridge-server.ts`
- `extensions/browser/src/browser/browser-utils.test.ts`
- `extensions/browser/src/browser/cdp-proxy-bypass.test.ts`
- `extensions/browser/src/browser/cdp-proxy-bypass.ts`
- `extensions/browser/src/browser/cdp-timeouts.test.ts`
- `extensions/browser/src/browser/cdp-timeouts.ts`
- `extensions/browser/src/browser/cdp.helpers.ts`
- `extensions/browser/src/browser/cdp.test.ts`
- `extensions/browser/src/browser/cdp.ts`
- `extensions/browser/src/browser/chrome-mcp.snapshot.test.ts`
- `extensions/browser/src/browser/chrome-mcp.snapshot.ts`
- `extensions/browser/src/browser/chrome-mcp.test.ts`
- `extensions/browser/src/browser/chrome-mcp.ts`
- `extensions/browser/src/browser/chrome-user-data-dir.test-harness.ts`
- `extensions/browser/src/browser/chrome.default-browser.test.ts`
- `extensions/browser/src/browser/chrome.executables.ts`
- `extensions/browser/src/browser/chrome.launch-args.test.ts`
- `extensions/browser/src/browser/chrome.profile-decoration.ts`
- `extensions/browser/src/browser/chrome.test.ts`
- `extensions/browser/src/browser/chrome.ts`
- `extensions/browser/src/browser/client-actions-core.ts`
- `extensions/browser/src/browser/client-actions-observe.ts`
- `extensions/browser/src/browser/client-actions-state.ts`
- `extensions/browser/src/browser/client-actions-types.ts`
- `extensions/browser/src/browser/client-actions-url.ts`
- `extensions/browser/src/browser/client-actions.ts`
- `extensions/browser/src/browser/client-fetch.loopback-auth.test.ts`
- `extensions/browser/src/browser/client-fetch.ts`
- `extensions/browser/src/browser/client.test.ts`
- `extensions/browser/src/browser/client.ts`
- `extensions/browser/src/browser/config-refresh-source.ts`
- `extensions/browser/src/browser/config.test.ts`
- ... 375 more paths in `leaf-impact.json`

## `docs/mintlify/.generated`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/.generated`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `169`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/.generated/config-baseline.json`
- `docs/.generated/config-baseline.jsonl`
- `docs/.generated/plugin-sdk-api-baseline.json`
- `docs/.generated/plugin-sdk-api-baseline.jsonl`
- `docs/docs.json`
- `scripts/generate-bundled-plugin-metadata.d.mts`
- `scripts/generate-bundled-plugin-metadata.mjs`
- `src/plugin-sdk/AGENTS.md`
- `src/plugin-sdk/CLAUDE.md`
- `src/plugin-sdk/account-core.ts`
- `src/plugin-sdk/account-helpers.ts`
- `src/plugin-sdk/account-resolution.ts`
- `src/plugin-sdk/agent-config-primitives.ts`
- `src/plugin-sdk/agent-runtime.ts`
- `src/plugin-sdk/allowlist-config-edit.test.ts`
- `src/plugin-sdk/amazon-bedrock.ts`
- `src/plugin-sdk/anthropic-cli.ts`
- `src/plugin-sdk/anthropic-vertex.ts`
- `src/plugin-sdk/approval-runtime.ts`
- `src/plugin-sdk/bluebubbles-policy.ts`
- `src/plugin-sdk/bluebubbles.ts`
- `src/plugin-sdk/browser-runtime.ts`
- `src/plugin-sdk/browser-support.ts`
- `src/plugin-sdk/browser.ts`
- `src/plugin-sdk/byteplus.ts`
- `src/plugin-sdk/chutes.ts`
- `src/plugin-sdk/cli-backend.ts`
- `src/plugin-sdk/cloudflare-ai-gateway.ts`
- `src/plugin-sdk/collection-runtime.ts`
- `src/plugin-sdk/command-auth.test.ts`
- `src/plugin-sdk/compat.ts`
- `src/plugin-sdk/config-runtime.ts`
- `src/plugin-sdk/core.ts`
- `src/plugin-sdk/deepseek.ts`
- `src/plugin-sdk/diagnostic-runtime.ts`
- `src/plugin-sdk/directory-runtime.ts`
- `src/plugin-sdk/discord-account.ts`
- `src/plugin-sdk/discord-runtime-surface.ts`
- `src/plugin-sdk/discord-send.ts`
- `src/plugin-sdk/discord-session-key.ts`
- `src/plugin-sdk/discord-surface.ts`
- `src/plugin-sdk/discord-thread-bindings.ts`
- `src/plugin-sdk/discord-timeouts.ts`
- `src/plugin-sdk/discord.ts`
- `src/plugin-sdk/error-runtime.ts`
- `src/plugin-sdk/extension-shared.ts`
- `src/plugin-sdk/feishu-conversation.ts`
- `src/plugin-sdk/feishu-setup.ts`
- `src/plugin-sdk/feishu.ts`
- `src/plugin-sdk/fetch-auth.test.ts`
- ... 119 more paths in `leaf-impact.json`

## `src/capability-modules/browser`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/browser`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `161`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/browser/bridge-auth-registry.ts`
- `src/browser/bridge-server.auth.test.ts`
- `src/browser/bridge-server.ts`
- `src/browser/browser-utils.test.ts`
- `src/browser/cdp-proxy-bypass.test.ts`
- `src/browser/cdp-proxy-bypass.ts`
- `src/browser/cdp-timeouts.test.ts`
- `src/browser/cdp-timeouts.ts`
- `src/browser/cdp.helpers.ts`
- `src/browser/cdp.test.ts`
- `src/browser/cdp.ts`
- `src/browser/chrome-mcp.snapshot.test.ts`
- `src/browser/chrome-mcp.snapshot.ts`
- `src/browser/chrome-mcp.test.ts`
- `src/browser/chrome-mcp.ts`
- `src/browser/chrome-user-data-dir.test-harness.ts`
- `src/browser/chrome.default-browser.test.ts`
- `src/browser/chrome.executables.ts`
- `src/browser/chrome.launch-args.test.ts`
- `src/browser/chrome.profile-decoration.ts`
- `src/browser/chrome.test.ts`
- `src/browser/chrome.ts`
- `src/browser/client-actions-core.ts`
- `src/browser/client-actions-observe.ts`
- `src/browser/client-actions-state.ts`
- `src/browser/client-actions-types.ts`
- `src/browser/client-actions-url.ts`
- `src/browser/client-actions.ts`
- `src/browser/client-fetch.loopback-auth.test.ts`
- `src/browser/client-fetch.ts`
- `src/browser/client.test.ts`
- `src/browser/client.ts`
- `src/browser/config.test.ts`
- `src/browser/config.ts`
- `src/browser/constants.ts`
- `src/browser/control-auth.auto-token.test.ts`
- `src/browser/control-auth.test.ts`
- `src/browser/control-auth.ts`
- `src/browser/control-service.ts`
- `src/browser/csrf.ts`
- `src/browser/errors.ts`
- `src/browser/form-fields.ts`
- `src/browser/http-auth.ts`
- `src/browser/navigation-guard.test.ts`
- `src/browser/navigation-guard.ts`
- `src/browser/output-atomic.ts`
- `src/browser/paths.test.ts`
- `src/browser/paths.ts`
- `src/browser/profile-capabilities.ts`
- `src/browser/profiles-service.test.ts`
- ... 111 more paths in `leaf-impact.json`

## `src/shared-misc-runtime-support/shared-primitives`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/shared-primitives`
- Coverage: `fallback`
- Changed paths: `158`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/chat/tool-content.ts`
- `src/infra/abort-pattern.test.ts`
- `src/infra/archive-helpers.test.ts`
- `src/infra/archive-path.test.ts`
- `src/infra/backup-create.test.ts`
- `src/infra/binaries.runtime.ts`
- `src/infra/bonjour.test.ts`
- `src/infra/bonjour.ts`
- `src/infra/browser-open.ts`
- `src/infra/canvas-host-url.test.ts`
- `src/infra/clawhub.ts`
- `src/infra/cli-root-options.test.ts`
- `src/infra/control-ui-assets.test.ts`
- `src/infra/detect-package-manager.test.ts`
- `src/infra/device-auth-store.ts`
- `src/infra/device-pairing.ts`
- `src/infra/dispatch-wrapper-resolution.ts`
- `src/infra/dotenv.test.ts`
- `src/infra/dotenv.ts`
- `src/infra/env.ts`
- `src/infra/errors.test.ts`
- `src/infra/exec-allowlist-matching.test.ts`
- `src/infra/exec-approval-command-display.test.ts`
- `src/infra/exec-approval-forwarder.test.ts`
- `src/infra/exec-approval-forwarder.ts`
- `src/infra/exec-approval-reply.test.ts`
- `src/infra/exec-approval-session-target.test.ts`
- `src/infra/exec-approval-surface.test.ts`
- `src/infra/exec-approvals-allow-always.test.ts`
- `src/infra/exec-approvals-allowlist.ts`
- `src/infra/exec-approvals-analysis.test.ts`
- `src/infra/exec-approvals-config.test.ts`
- `src/infra/exec-approvals-parity.test.ts`
- `src/infra/exec-approvals-policy.test.ts`
- `src/infra/exec-approvals-safe-bins.test.ts`
- `src/infra/exec-command-resolution.test.ts`
- `src/infra/exec-inline-eval.test.ts`
- `src/infra/exec-safe-bin-policy.test.ts`
- `src/infra/exec-safe-bin-semantics.ts`
- `src/infra/exec-safety.test.ts`
- `src/infra/exec-wrapper-resolution.test.ts`
- `src/infra/exec-wrapper-trust-plan.test.ts`
- `src/infra/format-time/format-time.test.ts`
- `src/infra/format-time/parse-offsetless-zoned-datetime.test.ts`
- `src/infra/gateway-lock.ts`
- `src/infra/gemini-auth.test.ts`
- `src/infra/git-root.test.ts`
- `src/infra/google-api-base-url.test.ts`
- `src/infra/hardlink-guards.test.ts`
- `src/infra/heartbeat-runner.returns-default-unset.test.ts`
- ... 108 more paths in `leaf-impact.json`

## `extensions/channel-plugins/telegram`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/telegram`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `146`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/telegram/api.ts`
- `extensions/telegram/channel-config-api.ts`
- `extensions/telegram/package-manifest.contract.test.ts`
- `extensions/telegram/package.json`
- `extensions/telegram/runtime-api.ts`
- `extensions/telegram/src/account-inspect.ts`
- `extensions/telegram/src/accounts.ts`
- `extensions/telegram/src/action-runtime.ts`
- `extensions/telegram/src/action-threading.ts`
- `extensions/telegram/src/api-logging.ts`
- `extensions/telegram/src/approval-buttons.ts`
- `extensions/telegram/src/audit-membership-runtime.ts`
- `extensions/telegram/src/bot-deps.ts`
- `extensions/telegram/src/bot-handlers.buffers.ts`
- `extensions/telegram/src/bot-handlers.runtime.ts`
- `extensions/telegram/src/bot-message-context.acp-bindings.test.ts`
- `extensions/telegram/src/bot-message-context.audio-transcript.test.ts`
- `extensions/telegram/src/bot-message-context.dm-threads.test.ts`
- `extensions/telegram/src/bot-message-context.dm-topic-threadid.test.ts`
- `extensions/telegram/src/bot-message-context.thread-binding.test.ts`
- `extensions/telegram/src/bot-message-context.ts`
- `extensions/telegram/src/bot-message-dispatch.test.ts`
- `extensions/telegram/src/bot-message-dispatch.ts`
- `extensions/telegram/src/bot-native-command-menu.test.ts`
- `extensions/telegram/src/bot-native-command-menu.ts`
- `extensions/telegram/src/bot-native-commands.menu-test-support.ts`
- `extensions/telegram/src/bot-native-commands.session-meta.test.ts`
- `extensions/telegram/src/bot-native-commands.test-helpers.ts`
- `extensions/telegram/src/bot-native-commands.ts`
- `extensions/telegram/src/bot-updates.ts`
- `extensions/telegram/src/bot.create-telegram-bot.channel-post-media.test.ts`
- `extensions/telegram/src/bot.create-telegram-bot.test-harness.ts`
- `extensions/telegram/src/bot.create-telegram-bot.test.ts`
- `extensions/telegram/src/bot.media.e2e-harness.ts`
- `extensions/telegram/src/bot.media.stickers-and-fragments.e2e.test.ts`
- `extensions/telegram/src/bot.media.test-utils.ts`
- `extensions/telegram/src/bot.test.ts`
- `extensions/telegram/src/bot.ts`
- `extensions/telegram/src/bot/delivery.replies.ts`
- `extensions/telegram/src/bot/delivery.resolve-media-retry.test.ts`
- `extensions/telegram/src/bot/delivery.resolve-media.ts`
- `extensions/telegram/src/bot/delivery.send.ts`
- `extensions/telegram/src/bot/delivery.test.ts`
- `extensions/telegram/src/bot/helpers.test.ts`
- `extensions/telegram/src/bot/helpers.ts`
- `extensions/telegram/src/bot/types.ts`
- `extensions/telegram/src/channel-actions.test.ts`
- `extensions/telegram/src/channel.test.ts`
- `extensions/telegram/src/channel.ts`
- `extensions/telegram/src/config-schema.ts`
- ... 96 more paths in `leaf-impact.json`

## `src/agent-runtime/runtime/command-entrypoint`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/command-entrypoint`
- Coverage: `fallback`
- Changed paths: `125`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/anthropic-vertex-provider.ts`
- `src/agents/anthropic-vertex-stream.test.ts`
- `src/agents/anthropic-vertex-stream.ts`
- `src/agents/auth-health.test.ts`
- `src/agents/auth-health.ts`
- `src/agents/bedrock-discovery.test.ts`
- `src/agents/bedrock-discovery.ts`
- `src/agents/cli-credentials.test.ts`
- `src/agents/cli-credentials.ts`
- `src/agents/cli-output.test.ts`
- `src/agents/cli-output.ts`
- `src/agents/cloudflare-ai-gateway.ts`
- `src/agents/compaction.identifier-preservation.test.ts`
- `src/agents/compaction.retry.test.ts`
- `src/agents/compaction.tool-result-details.test.ts`
- `src/agents/compaction.ts`
- `src/agents/failover-error.test.ts`
- `src/agents/github-copilot-token.test.ts`
- `src/agents/github-copilot-token.ts`
- `src/agents/google-generative-ai.test.ts`
- `src/agents/google-generative-ai.ts`
- `src/agents/huggingface-models.test.ts`
- `src/agents/huggingface-models.ts`
- `src/agents/live-model-filter.ts`
- `src/agents/live-model-switch.test.ts`
- `src/agents/live-model-switch.ts`
- `src/agents/memory-search.test.ts`
- `src/agents/memory-search.ts`
- `src/agents/minimax-docs.test.ts`
- `src/agents/model-allowlist-ref.ts`
- `src/agents/model-catalog.test.ts`
- `src/agents/model-catalog.ts`
- `src/agents/model-compat.test.ts`
- `src/agents/model-compat.ts`
- `src/agents/model-fallback.test.ts`
- `src/agents/model-fallback.ts`
- `src/agents/model-id-normalization.test.ts`
- `src/agents/model-id-normalization.ts`
- `src/agents/model-scan.test.ts`
- `src/agents/model-scan.ts`
- `src/agents/model-selection.plugin-runtime.test.ts`
- `src/agents/model-selection.test.ts`
- `src/agents/model-selection.ts`
- `src/agents/models-config.e2e-harness.ts`
- `src/agents/models-config.merge.test.ts`
- `src/agents/models-config.merge.ts`
- `src/agents/models-config.plan.ts`
- `src/agents/models-config.skips-writing-models-json-no-env-token.test.ts`
- `src/agents/moonshot-provider-compat.ts`
- `src/agents/ollama-defaults.ts`
- ... 75 more paths in `leaf-impact.json`

## `src/cli-commands/command-implementations/maintenance-commands`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/maintenance-commands`
- Coverage: `fallback`
- Changed paths: `116`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/cli/browser-cli-actions-input.ts`
- `src/cli/browser-cli-actions-input/register.element.ts`
- `src/cli/browser-cli-actions-input/register.files-downloads.ts`
- `src/cli/browser-cli-actions-input/register.form-wait-eval.ts`
- `src/cli/browser-cli-actions-input/register.navigation.ts`
- `src/cli/browser-cli-actions-input/register.ts`
- `src/cli/browser-cli-actions-input/shared.test.ts`
- `src/cli/browser-cli-actions-input/shared.ts`
- `src/cli/browser-cli-actions-observe.ts`
- `src/cli/browser-cli-debug.ts`
- `src/cli/browser-cli-examples.ts`
- `src/cli/browser-cli-inspect.test.ts`
- `src/cli/browser-cli-inspect.ts`
- `src/cli/browser-cli-manage.test.ts`
- `src/cli/browser-cli-manage.timeout-option.test.ts`
- `src/cli/browser-cli-manage.ts`
- `src/cli/browser-cli-resize.ts`
- `src/cli/browser-cli-shared.ts`
- `src/cli/browser-cli-state.cookies-storage.ts`
- `src/cli/browser-cli-state.option-collisions.test.ts`
- `src/cli/browser-cli-state.ts`
- `src/cli/browser-cli-test-helpers.ts`
- `src/cli/browser-cli.test.ts`
- `src/cli/browser-cli.ts`
- `src/cli/channel-auth.test.ts`
- `src/cli/channel-auth.ts`
- `src/cli/cli-utils.test.ts`
- `src/cli/completion-cli.test.ts`
- `src/cli/completion-cli.ts`
- `src/cli/config-cli.integration.test.ts`
- `src/cli/config-cli.test.ts`
- `src/cli/config-cli.ts`
- `src/cli/config-set-input.test.ts`
- `src/cli/container-target.ts`
- `src/cli/daemon-cli.coverage.test.ts`
- `src/cli/deps.test.ts`
- `src/cli/deps.ts`
- `src/cli/devices-cli.test.ts`
- `src/cli/devices-cli.ts`
- `src/cli/directory-cli.test.ts`
- `src/cli/directory-cli.ts`
- `src/cli/dotenv.ts`
- `src/cli/hooks-cli.test.ts`
- `src/cli/log-level-option.test.ts`
- `src/cli/mcp-cli.test.ts`
- `src/cli/mcp-cli.ts`
- `src/cli/memory-cli.runtime.ts`
- `src/cli/memory-cli.test.ts`
- `src/cli/memory-cli.ts`
- `src/cli/memory-cli.types.ts`
- ... 66 more paths in `leaf-impact.json`

## `apps/ios-android/android-app/runtime-gateway-node`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/android-app/runtime-gateway-node`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `108`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/android/app/src/test/java/ai/openclaw/app/SessionKeyTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/chat/ChatControllerSessionPolicyTest.kt`
- `src/gateway/cli-session-history.claude.ts`
- `src/gateway/cli-session-history.merge.ts`
- `src/gateway/cli-session-history.test.ts`
- `src/gateway/cli-session-history.ts`
- `src/gateway/config-reload-plan.ts`
- `src/gateway/config-reload.test.ts`
- `src/gateway/connection-details.ts`
- `src/gateway/device-authz.test-helpers.ts`
- `src/gateway/embeddings-http.test.ts`
- `src/gateway/embeddings-http.ts`
- `src/gateway/exec-approval-manager.ts`
- `src/gateway/gateway-acp-bind.live.test.ts`
- `src/gateway/gateway-cli-backend.live.test.ts`
- `src/gateway/gateway-connection.test-mocks.ts`
- `src/gateway/gateway-models.profiles.live.test.ts`
- `src/gateway/gateway.test.ts`
- `src/gateway/hooks.test.ts`
- `src/gateway/http-auth-helpers.ts`
- `src/gateway/http-endpoint-helpers.test.ts`
- `src/gateway/http-endpoint-helpers.ts`
- `src/gateway/http-utils.model-override.test.ts`
- `src/gateway/http-utils.ts`
- `src/gateway/live-tool-probe-utils.test.ts`
- `src/gateway/live-tool-probe-utils.ts`
- `src/gateway/method-scopes.test.ts`
- `src/gateway/method-scopes.ts`
- `src/gateway/model-pricing-cache-state.ts`
- `src/gateway/model-pricing-cache.ts`
- `src/gateway/models-http.test.ts`
- `src/gateway/models-http.ts`
- `src/gateway/net.test.ts`
- `src/gateway/openai-http.message-channel.test.ts`
- `src/gateway/openai-http.test.ts`
- `src/gateway/openai-http.ts`
- `src/gateway/openresponses-http.test.ts`
- `src/gateway/openresponses-http.ts`
- `src/gateway/probe.test.ts`
- `src/gateway/probe.ts`
- `src/gateway/server-broadcast.ts`
- `src/gateway/server-browser.ts`
- `src/gateway/server-channels.test.ts`
- `src/gateway/server-channels.ts`
- `src/gateway/server-chat.agent-events.test.ts`
- `src/gateway/server-chat.ts`
- `src/gateway/server-cron.test.ts`
- `src/gateway/server-methods-list.ts`
- `src/gateway/server-node-events.test.ts`
- `src/gateway/server-node-events.ts`
- ... 58 more paths in `leaf-impact.json`

## `src/capability-modules/memory`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/memory`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `106`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/memory/backend-config.test.ts`
- `src/memory/backend-config.ts`
- `src/memory/batch-embedding-common.ts`
- `src/memory/batch-error-utils.test.ts`
- `src/memory/batch-error-utils.ts`
- `src/memory/batch-gemini.test.ts`
- `src/memory/batch-gemini.ts`
- `src/memory/batch-http.test.ts`
- `src/memory/batch-http.ts`
- `src/memory/batch-openai.ts`
- `src/memory/batch-output.test.ts`
- `src/memory/batch-output.ts`
- `src/memory/batch-provider-common.ts`
- `src/memory/batch-runner.ts`
- `src/memory/batch-status.test.ts`
- `src/memory/batch-status.ts`
- `src/memory/batch-upload.ts`
- `src/memory/batch-utils.ts`
- `src/memory/batch-voyage.test.ts`
- `src/memory/batch-voyage.ts`
- `src/memory/embedding-chunk-limits.test.ts`
- `src/memory/embedding-chunk-limits.ts`
- `src/memory/embedding-input-limits.ts`
- `src/memory/embedding-inputs.ts`
- `src/memory/embedding-manager.test-harness.ts`
- `src/memory/embedding-model-limits.ts`
- `src/memory/embedding-vectors.ts`
- `src/memory/embedding.test-mocks.ts`
- `src/memory/embeddings-debug.ts`
- `src/memory/embeddings-gemini.test.ts`
- `src/memory/embeddings-gemini.ts`
- `src/memory/embeddings-mistral.test.ts`
- `src/memory/embeddings-mistral.ts`
- `src/memory/embeddings-model-normalize.test.ts`
- `src/memory/embeddings-model-normalize.ts`
- `src/memory/embeddings-ollama.test.ts`
- `src/memory/embeddings-ollama.ts`
- `src/memory/embeddings-openai.ts`
- `src/memory/embeddings-remote-client.ts`
- `src/memory/embeddings-remote-fetch.test.ts`
- `src/memory/embeddings-remote-fetch.ts`
- `src/memory/embeddings-remote-provider.ts`
- `src/memory/embeddings-voyage.test.ts`
- `src/memory/embeddings-voyage.ts`
- `src/memory/embeddings.test.ts`
- `src/memory/embeddings.ts`
- `src/memory/fs-utils.ts`
- `src/memory/hybrid.test.ts`
- `src/memory/hybrid.ts`
- `src/memory/index.test.ts`
- ... 56 more paths in `leaf-impact.json`

## `extensions/channel-plugins/discord`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/discord`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `105`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/discord/action-runtime-api.ts`
- `extensions/discord/api.ts`
- `extensions/discord/channel-config-api.ts`
- `extensions/discord/package-manifest.contract.test.ts`
- `extensions/discord/package.json`
- `extensions/discord/runtime-api.ts`
- `extensions/discord/session-key-api.ts`
- `extensions/discord/src/actions/handle-action.guild-admin.ts`
- `extensions/discord/src/actions/handle-action.test.ts`
- `extensions/discord/src/actions/handle-action.ts`
- `extensions/discord/src/api.ts`
- `extensions/discord/src/audit.test.ts`
- `extensions/discord/src/channel-actions.test.ts`
- `extensions/discord/src/channel.test.ts`
- `extensions/discord/src/channel.ts`
- `extensions/discord/src/client.ts`
- `extensions/discord/src/components-registry.ts`
- `extensions/discord/src/components.ts`
- `extensions/discord/src/config-schema.ts`
- `extensions/discord/src/config-ui-hints.ts`
- `extensions/discord/src/directory-config.ts`
- `extensions/discord/src/exec-approvals.ts`
- `extensions/discord/src/group-policy.contract.test.ts`
- `extensions/discord/src/inbound.contract.test.ts`
- `extensions/discord/src/message-tool-schema.ts`
- `extensions/discord/src/monitor.gateway.ts`
- `extensions/discord/src/monitor.test.ts`
- `extensions/discord/src/monitor.tool-result.accepts-guild-messages-mentionpatterns-match.e2e.test.ts`
- `extensions/discord/src/monitor.tool-result.sends-status-replies-responseprefix.test.ts`
- `extensions/discord/src/monitor.tool-result.test-harness.ts`
- `extensions/discord/src/monitor.tool-result.test-helpers.ts`
- `extensions/discord/src/monitor/acp-bind-here.integration.test.ts`
- `extensions/discord/src/monitor/agent-components-helpers.ts`
- `extensions/discord/src/monitor/agent-components.ts`
- `extensions/discord/src/monitor/exec-approvals.test.ts`
- `extensions/discord/src/monitor/exec-approvals.ts`
- `extensions/discord/src/monitor/gateway-handle.ts`
- `extensions/discord/src/monitor/gateway-plugin.ts`
- `extensions/discord/src/monitor/gateway-supervisor.test.ts`
- `extensions/discord/src/monitor/gateway-supervisor.ts`
- `extensions/discord/src/monitor/inbound-context.test-helpers.ts`
- `extensions/discord/src/monitor/inbound-worker.ts`
- `extensions/discord/src/monitor/listeners.ts`
- `extensions/discord/src/monitor/message-handler.inbound-context.test.ts`
- `extensions/discord/src/monitor/message-handler.module-test-helpers.ts`
- `extensions/discord/src/monitor/message-handler.preflight.acp-bindings.test.ts`
- `extensions/discord/src/monitor/message-handler.preflight.ts`
- `extensions/discord/src/monitor/message-handler.process.test.ts`
- `extensions/discord/src/monitor/message-handler.queue.test.ts`
- `extensions/discord/src/monitor/message-handler.ts`
- ... 55 more paths in `leaf-impact.json`

## `extensions/channel-plugins/matrix`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/matrix`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `88`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/matrix/api.ts`
- `extensions/matrix/index.ts`
- `extensions/matrix/package-manifest.contract.test.ts`
- `extensions/matrix/package.json`
- `extensions/matrix/runtime-api.ts`
- `extensions/matrix/src/account-selection.ts`
- `extensions/matrix/src/channel.setup.test.ts`
- `extensions/matrix/src/channel.ts`
- `extensions/matrix/src/cli.test.ts`
- `extensions/matrix/src/cli.ts`
- `extensions/matrix/src/config-schema.test.ts`
- `extensions/matrix/src/config-schema.ts`
- `extensions/matrix/src/directory-live.test.ts`
- `extensions/matrix/src/directory-live.ts`
- `extensions/matrix/src/matrix/account-config.ts`
- `extensions/matrix/src/matrix/accounts.readiness.test.ts`
- `extensions/matrix/src/matrix/accounts.test.ts`
- `extensions/matrix/src/matrix/accounts.ts`
- `extensions/matrix/src/matrix/actions/client.test.ts`
- `extensions/matrix/src/matrix/actions/messages.test.ts`
- `extensions/matrix/src/matrix/actions/verification.test.ts`
- `extensions/matrix/src/matrix/client-bootstrap.test.ts`
- `extensions/matrix/src/matrix/client.test.ts`
- `extensions/matrix/src/matrix/client/config.ts`
- `extensions/matrix/src/matrix/client/env-auth.ts`
- `extensions/matrix/src/matrix/client/file-sync-store.ts`
- `extensions/matrix/src/matrix/client/shared.test.ts`
- `extensions/matrix/src/matrix/client/storage.test.ts`
- `extensions/matrix/src/matrix/client/storage.ts`
- `extensions/matrix/src/matrix/config-update.test.ts`
- `extensions/matrix/src/matrix/config-update.ts`
- `extensions/matrix/src/matrix/credentials-read.ts`
- `extensions/matrix/src/matrix/direct-management.test.ts`
- `extensions/matrix/src/matrix/direct-management.ts`
- `extensions/matrix/src/matrix/direct-room.test.ts`
- `extensions/matrix/src/matrix/direct-room.ts`
- `extensions/matrix/src/matrix/monitor/context-summary.ts`
- `extensions/matrix/src/matrix/monitor/direct.test.ts`
- `extensions/matrix/src/matrix/monitor/direct.ts`
- `extensions/matrix/src/matrix/monitor/events.test.ts`
- `extensions/matrix/src/matrix/monitor/events.ts`
- `extensions/matrix/src/matrix/monitor/handler.body-for-agent.test.ts`
- `extensions/matrix/src/matrix/monitor/handler.media-failure.test.ts`
- `extensions/matrix/src/matrix/monitor/handler.test.ts`
- `extensions/matrix/src/matrix/monitor/handler.ts`
- `extensions/matrix/src/matrix/monitor/inbound-dedupe.ts`
- `extensions/matrix/src/matrix/monitor/index.test.ts`
- `extensions/matrix/src/matrix/monitor/index.ts`
- `extensions/matrix/src/matrix/monitor/media.test.ts`
- `extensions/matrix/src/matrix/monitor/media.ts`
- ... 38 more paths in `leaf-impact.json`

## `packages/shared-packages`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/packages/shared-packages`
- Coverage: `fallback`
- Changed paths: `85`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `packages/memory-host-sdk/package.json`
- `packages/memory-host-sdk/src/engine-embeddings.ts`
- `packages/memory-host-sdk/src/engine-foundation.ts`
- `packages/memory-host-sdk/src/engine-qmd.ts`
- `packages/memory-host-sdk/src/engine-storage.ts`
- `packages/memory-host-sdk/src/engine.ts`
- `packages/memory-host-sdk/src/host/backend-config.test.ts`
- `packages/memory-host-sdk/src/host/backend-config.ts`
- `packages/memory-host-sdk/src/host/batch-embedding-common.ts`
- `packages/memory-host-sdk/src/host/batch-error-utils.test.ts`
- `packages/memory-host-sdk/src/host/batch-error-utils.ts`
- `packages/memory-host-sdk/src/host/batch-gemini.test.ts`
- `packages/memory-host-sdk/src/host/batch-gemini.ts`
- `packages/memory-host-sdk/src/host/batch-http.test.ts`
- `packages/memory-host-sdk/src/host/batch-http.ts`
- `packages/memory-host-sdk/src/host/batch-openai.ts`
- `packages/memory-host-sdk/src/host/batch-output.test.ts`
- `packages/memory-host-sdk/src/host/batch-output.ts`
- `packages/memory-host-sdk/src/host/batch-provider-common.ts`
- `packages/memory-host-sdk/src/host/batch-runner.ts`
- `packages/memory-host-sdk/src/host/batch-status.test.ts`
- `packages/memory-host-sdk/src/host/batch-status.ts`
- `packages/memory-host-sdk/src/host/batch-upload.ts`
- `packages/memory-host-sdk/src/host/batch-utils.ts`
- `packages/memory-host-sdk/src/host/batch-voyage.test.ts`
- `packages/memory-host-sdk/src/host/batch-voyage.ts`
- `packages/memory-host-sdk/src/host/embedding-chunk-limits.test.ts`
- `packages/memory-host-sdk/src/host/embedding-chunk-limits.ts`
- `packages/memory-host-sdk/src/host/embedding-input-limits.ts`
- `packages/memory-host-sdk/src/host/embedding-inputs.ts`
- `packages/memory-host-sdk/src/host/embedding-model-limits.ts`
- `packages/memory-host-sdk/src/host/embedding-vectors.ts`
- `packages/memory-host-sdk/src/host/embeddings-debug.ts`
- `packages/memory-host-sdk/src/host/embeddings-gemini.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-gemini.ts`
- `packages/memory-host-sdk/src/host/embeddings-mistral.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-mistral.ts`
- `packages/memory-host-sdk/src/host/embeddings-model-normalize.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-model-normalize.ts`
- `packages/memory-host-sdk/src/host/embeddings-ollama.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-ollama.ts`
- `packages/memory-host-sdk/src/host/embeddings-openai.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-client.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-fetch.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-fetch.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-provider.ts`
- `packages/memory-host-sdk/src/host/embeddings-voyage.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-voyage.ts`
- `packages/memory-host-sdk/src/host/embeddings.test.ts`
- `packages/memory-host-sdk/src/host/embeddings.ts`
- ... 35 more paths in `leaf-impact.json`

## `src/reply-orchestration/runner`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/runner`
- Coverage: `fallback`
- Changed paths: `65`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/command-control.test.ts`
- `src/auto-reply/dispatch.test.ts`
- `src/auto-reply/dispatch.ts`
- `src/auto-reply/fallback-state.test.ts`
- `src/auto-reply/inbound.test.ts`
- `src/auto-reply/reply/agent-runner-execution.test.ts`
- `src/auto-reply/reply/agent-runner-execution.ts`
- `src/auto-reply/reply/agent-runner-memory.ts`
- `src/auto-reply/reply/agent-runner.media-paths.test.ts`
- `src/auto-reply/reply/agent-runner.misc.runreplyagent.test.ts`
- `src/auto-reply/reply/agent-runner.runreplyagent.e2e.test.ts`
- `src/auto-reply/reply/agent-runner.ts`
- `src/auto-reply/reply/bash-command.stop.test.ts`
- `src/auto-reply/reply/bash-command.ts`
- `src/auto-reply/reply/conversation-binding-input.ts`
- `src/auto-reply/reply/dispatch-acp-delivery.test.ts`
- `src/auto-reply/reply/dispatch-acp-delivery.ts`
- `src/auto-reply/reply/dispatch-acp.test.ts`
- `src/auto-reply/reply/dispatch-acp.ts`
- `src/auto-reply/reply/dispatch-from-config.test.ts`
- `src/auto-reply/reply/dispatch-from-config.ts`
- `src/auto-reply/reply/followup-runner.test.ts`
- `src/auto-reply/reply/followup-runner.ts`
- `src/auto-reply/reply/get-reply-directives-apply.ts`
- `src/auto-reply/reply/get-reply-directives.ts`
- `src/auto-reply/reply/get-reply-run.media-only.test.ts`
- `src/auto-reply/reply/get-reply-run.ts`
- `src/auto-reply/reply/get-reply.config-override.test.ts`
- `src/auto-reply/reply/get-reply.imports.test.ts`
- `src/auto-reply/reply/get-reply.reset-hooks-fallback.test.ts`
- `src/auto-reply/reply/get-reply.test-mocks.ts`
- `src/auto-reply/reply/get-reply.test-runtime-mocks.ts`
- `src/auto-reply/reply/get-reply.ts`
- `src/auto-reply/reply/group-id.ts`
- `src/auto-reply/reply/groups.runtime.ts`
- `src/auto-reply/reply/groups.test.ts`
- `src/auto-reply/reply/groups.ts`
- `src/auto-reply/reply/memory-flush.test.ts`
- `src/auto-reply/reply/memory-flush.ts`
- `src/auto-reply/reply/mentions.ts`
- `src/auto-reply/reply/model-selection.test.ts`
- `src/auto-reply/reply/model-selection.ts`
- `src/auto-reply/reply/normalize-reply.ts`
- `src/auto-reply/reply/reply-directives.ts`
- `src/auto-reply/reply/reply-dispatcher.ts`
- `src/auto-reply/reply/reply-plumbing.test.ts`
- `src/auto-reply/reply/reply-state.test.ts`
- `src/auto-reply/reply/reply-utils.test.ts`
- `src/auto-reply/reply/reply.test-helpers.ts`
- `src/auto-reply/reply/route-reply.test.ts`
- ... 15 more paths in `leaf-impact.json`

## `src/plugin-runtime-sdk/plugin-sdk`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugin-sdk`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `59`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/plugin-sdk/allow-from.test.ts`
- `src/plugin-sdk/channel-actions.ts`
- `src/plugin-sdk/channel-config-helpers.test.ts`
- `src/plugin-sdk/channel-config-helpers.ts`
- `src/plugin-sdk/channel-config-primitives.ts`
- `src/plugin-sdk/channel-config-schema.ts`
- `src/plugin-sdk/channel-config-writes.ts`
- `src/plugin-sdk/channel-contract.ts`
- `src/plugin-sdk/channel-import-guardrails.test.ts`
- `src/plugin-sdk/channel-lifecycle.test.ts`
- `src/plugin-sdk/channel-pairing.test.ts`
- `src/plugin-sdk/channel-plugin-common.ts`
- `src/plugin-sdk/channel-runtime.ts`
- `src/plugin-sdk/channel-send-result.test.ts`
- `src/plugin-sdk/group-access.test.ts`
- `src/plugin-sdk/index.bundle.test.ts`
- `src/plugin-sdk/index.test.ts`
- `src/plugin-sdk/index.ts`
- `src/plugin-sdk/media-runtime.ts`
- `src/plugin-sdk/media-understanding-runtime.ts`
- `src/plugin-sdk/media-understanding.ts`
- `src/plugin-sdk/memory-core-engine-runtime.ts`
- `src/plugin-sdk/memory-core-host-engine-embeddings.ts`
- `src/plugin-sdk/memory-core-host-engine-foundation.ts`
- `src/plugin-sdk/memory-core-host-engine-qmd.ts`
- `src/plugin-sdk/memory-core-host-engine-storage.ts`
- `src/plugin-sdk/memory-core-host-multimodal.ts`
- `src/plugin-sdk/memory-core-host-query.ts`
- `src/plugin-sdk/memory-core-host-runtime-cli.ts`
- `src/plugin-sdk/memory-core-host-runtime-core.ts`
- `src/plugin-sdk/memory-core-host-runtime-files.ts`
- `src/plugin-sdk/memory-core-host-secret.ts`
- `src/plugin-sdk/memory-core-host-status.ts`
- `src/plugin-sdk/memory-core.ts`
- `src/plugin-sdk/provider-auth-api-key.ts`
- `src/plugin-sdk/provider-auth-login.runtime.ts`
- `src/plugin-sdk/provider-auth-runtime.ts`
- `src/plugin-sdk/provider-auth.ts`
- `src/plugin-sdk/provider-catalog-shared.ts`
- `src/plugin-sdk/provider-catalog.ts`
- `src/plugin-sdk/provider-entry.test.ts`
- `src/plugin-sdk/provider-entry.ts`
- `src/plugin-sdk/provider-env-vars.ts`
- `src/plugin-sdk/provider-google.ts`
- `src/plugin-sdk/provider-http.ts`
- `src/plugin-sdk/provider-model-shared.ts`
- `src/plugin-sdk/provider-models.ts`
- `src/plugin-sdk/provider-moonshot.ts`
- `src/plugin-sdk/provider-onboard.ts`
- `src/plugin-sdk/provider-reasoning.ts`
- ... 9 more paths in `leaf-impact.json`

## `extensions/memory-media-voice-plugins/memory-core`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/memory-core`
- Coverage: `verified`
- Changed paths: `57`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/memory-core/api.ts`
- `extensions/memory-core/index.test.ts`
- `extensions/memory-core/index.ts`
- `extensions/memory-core/package.json`
- `extensions/memory-core/runtime-api.ts`
- `extensions/memory-core/src/cli.runtime.ts`
- `extensions/memory-core/src/cli.test.ts`
- `extensions/memory-core/src/cli.ts`
- `extensions/memory-core/src/cli.types.ts`
- `extensions/memory-core/src/flush-plan.ts`
- `extensions/memory-core/src/memory/embedding-manager.test-harness.ts`
- `extensions/memory-core/src/memory/embedding.test-mocks.ts`
- `extensions/memory-core/src/memory/embeddings.ts`
- `extensions/memory-core/src/memory/hybrid.test.ts`
- `extensions/memory-core/src/memory/hybrid.ts`
- `extensions/memory-core/src/memory/index.test.ts`
- `extensions/memory-core/src/memory/index.ts`
- `extensions/memory-core/src/memory/manager-embedding-ops.ts`
- `extensions/memory-core/src/memory/manager-runtime.ts`
- `extensions/memory-core/src/memory/manager-search.ts`
- `extensions/memory-core/src/memory/manager-sync-ops.ts`
- `extensions/memory-core/src/memory/manager.async-search.test.ts`
- `extensions/memory-core/src/memory/manager.atomic-reindex.test.ts`
- `extensions/memory-core/src/memory/manager.batch.test.ts`
- `extensions/memory-core/src/memory/manager.embedding-batches.test.ts`
- `extensions/memory-core/src/memory/manager.get-concurrency.test.ts`
- `extensions/memory-core/src/memory/manager.mistral-provider.test.ts`
- `extensions/memory-core/src/memory/manager.read-file.test.ts`
- `extensions/memory-core/src/memory/manager.readonly-recovery.test.ts`
- `extensions/memory-core/src/memory/manager.sync-errors-do-not-crash.test.ts`
- `extensions/memory-core/src/memory/manager.ts`
- `extensions/memory-core/src/memory/manager.vector-dedupe.test.ts`
- `extensions/memory-core/src/memory/manager.watcher-config.test.ts`
- `extensions/memory-core/src/memory/mmr.test.ts`
- `extensions/memory-core/src/memory/mmr.ts`
- `extensions/memory-core/src/memory/provider-adapters.ts`
- `extensions/memory-core/src/memory/qmd-manager.slugified-paths.test.ts`
- `extensions/memory-core/src/memory/qmd-manager.test.ts`
- `extensions/memory-core/src/memory/qmd-manager.ts`
- `extensions/memory-core/src/memory/search-manager.test.ts`
- `extensions/memory-core/src/memory/search-manager.ts`
- `extensions/memory-core/src/memory/temporal-decay.test.ts`
- `extensions/memory-core/src/memory/temporal-decay.ts`
- `extensions/memory-core/src/memory/test-embeddings-mock.ts`
- `extensions/memory-core/src/memory/test-helpers/ssrf.ts`
- `extensions/memory-core/src/memory/test-manager-helpers.ts`
- `extensions/memory-core/src/memory/test-manager.ts`
- `extensions/memory-core/src/memory/test-runtime-mocks.ts`
- `extensions/memory-core/src/prompt-section.ts`
- `extensions/memory-core/src/runtime-provider.ts`
- ... 7 more paths in `leaf-impact.json`

## `extensions/channel-plugins/slack`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/slack`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `54`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/slack/api.ts`
- `extensions/slack/channel-config-api.ts`
- `extensions/slack/package-manifest.contract.test.ts`
- `extensions/slack/package.json`
- `extensions/slack/src/action-runtime.test.ts`
- `extensions/slack/src/action-runtime.ts`
- `extensions/slack/src/action-threading.ts`
- `extensions/slack/src/actions.ts`
- `extensions/slack/src/channel.test.ts`
- `extensions/slack/src/channel.ts`
- `extensions/slack/src/config-schema.ts`
- `extensions/slack/src/config-ui-hints.ts`
- `extensions/slack/src/directory-config.ts`
- `extensions/slack/src/group-policy.contract.test.ts`
- `extensions/slack/src/inbound.contract.test.ts`
- `extensions/slack/src/message-action-dispatch.test.ts`
- `extensions/slack/src/message-action-dispatch.ts`
- `extensions/slack/src/message-actions.test.ts`
- `extensions/slack/src/message-actions.ts`
- `extensions/slack/src/monitor.threading.missing-thread-ts.test.ts`
- `extensions/slack/src/monitor.tool-result.test.ts`
- `extensions/slack/src/monitor/auth.test.ts`
- `extensions/slack/src/monitor/context.ts`
- `extensions/slack/src/monitor/events/channels.test.ts`
- `extensions/slack/src/monitor/events/channels.ts`
- `extensions/slack/src/monitor/events/interactions.block-actions.ts`
- `extensions/slack/src/monitor/events/interactions.modal.ts`
- `extensions/slack/src/monitor/events/interactions.test.ts`
- `extensions/slack/src/monitor/events/members.test.ts`
- `extensions/slack/src/monitor/events/members.ts`
- `extensions/slack/src/monitor/events/messages.test.ts`
- `extensions/slack/src/monitor/events/messages.ts`
- `extensions/slack/src/monitor/events/pins.test.ts`
- `extensions/slack/src/monitor/events/pins.ts`
- `extensions/slack/src/monitor/events/reactions.test.ts`
- `extensions/slack/src/monitor/events/reactions.ts`
- `extensions/slack/src/monitor/external-arg-menu-store.ts`
- `extensions/slack/src/monitor/media.ts`
- `extensions/slack/src/monitor/message-handler.app-mention-race.test.ts`
- `extensions/slack/src/monitor/message-handler/prepare.ts`
- `extensions/slack/src/monitor/provider.ts`
- `extensions/slack/src/monitor/thread-resolution.ts`
- `extensions/slack/src/outbound-adapter.test.ts`
- `extensions/slack/src/outbound-hooks.test.ts`
- `extensions/slack/src/outbound-payload.contract.test.ts`
- `extensions/slack/src/outbound-payload.test.ts`
- `extensions/slack/src/plugins-core.contract.test.ts`
- `extensions/slack/src/registry-backed.contract.test.ts`
- `extensions/slack/src/runtime.ts`
- `extensions/slack/src/send.ts`
- ... 4 more paths in `leaf-impact.json`

## `src/plugin-runtime-sdk/plugins-runtime`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugins-runtime`
- Coverage: `fallback`
- Changed paths: `54`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/extensions/public-artifacts.ts`
- `src/plugins/bundled-plugin-naming.test.ts`
- `src/plugins/contracts/auth-choice.contract.test.ts`
- `src/plugins/contracts/auth.contract.test.ts`
- `src/plugins/contracts/catalog.contract.test.ts`
- `src/plugins/contracts/discovery.contract.test.ts`
- `src/plugins/contracts/loader.contract.test.ts`
- `src/plugins/contracts/memory-embedding-provider.contract.test.ts`
- `src/plugins/contracts/provider.contract.test.ts`
- `src/plugins/contracts/registry.contract.test.ts`
- `src/plugins/contracts/registry.retry.test.ts`
- `src/plugins/contracts/registry.ts`
- `src/plugins/contracts/runtime.contract.test.ts`
- `src/plugins/contracts/shape.contract.test.ts`
- `src/plugins/contracts/speech-vitest-registry.ts`
- `src/plugins/contracts/suites.ts`
- `src/plugins/contracts/testkit.ts`
- `src/plugins/contracts/tts.contract.test.ts`
- `src/plugins/contracts/web-search-provider.contract.test.ts`
- `src/plugins/contracts/wizard.contract.test.ts`
- `src/plugins/discovery.test.ts`
- `src/plugins/discovery.ts`
- `src/plugins/install-min-host-version-guardrails.test.ts`
- `src/plugins/install.runtime.ts`
- `src/plugins/install.test.ts`
- `src/plugins/install.ts`
- `src/plugins/installs.test.ts`
- `src/plugins/loader.test.ts`
- `src/plugins/loader.ts`
- `src/plugins/manifest.ts`
- `src/plugins/provider-runtime.test-support.ts`
- `src/plugins/provider-runtime.test.ts`
- `src/plugins/provider-runtime.ts`
- `src/plugins/runtime/gateway-request-scope.test.ts`
- `src/plugins/runtime/runtime-discord-typing.test.ts`
- `src/plugins/runtime/runtime-matrix-boundary.ts`
- `src/plugins/runtime/runtime-matrix-contract.ts`
- `src/plugins/runtime/runtime-matrix-surface.ts`
- `src/plugins/runtime/runtime-media-understanding.runtime.ts`
- `src/plugins/runtime/runtime-system.ts`
- `src/plugins/runtime/runtime-telegram-contract.ts`
- `src/plugins/runtime/runtime-telegram-typing.test.ts`
- `src/plugins/runtime/runtime-tools.ts`
- `src/plugins/runtime/runtime-tts.runtime.ts`
- `src/plugins/runtime/runtime-whatsapp-boundary.ts`
- `src/plugins/runtime/runtime-whatsapp-surface.ts`
- `src/plugins/runtime/types-core.ts`
- `src/plugins/runtime/typing-lease.test-support.ts`
- `src/plugins/schema-validator.test.ts`
- `src/plugins/schema-validator.ts`
- ... 4 more paths in `leaf-impact.json`

## `extensions/channel-plugins/mattermost`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/mattermost`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `50`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/mattermost/api.ts`
- `extensions/mattermost/package-manifest.contract.test.ts`
- `extensions/mattermost/package.json`
- `extensions/mattermost/src/channel.test.ts`
- `extensions/mattermost/src/channel.ts`
- `extensions/mattermost/src/config-runtime.ts`
- `extensions/mattermost/src/config-schema-core.ts`
- `extensions/mattermost/src/config-schema.ts`
- `extensions/mattermost/src/config-surface.ts`
- `extensions/mattermost/src/dm-policy.contract.test.ts`
- `extensions/mattermost/src/mattermost/accounts.ts`
- `extensions/mattermost/src/mattermost/client.retry.test.ts`
- `extensions/mattermost/src/mattermost/client.test.ts`
- `extensions/mattermost/src/mattermost/client.ts`
- `extensions/mattermost/src/mattermost/directory.test.ts`
- `extensions/mattermost/src/mattermost/directory.ts`
- `extensions/mattermost/src/mattermost/interactions.test.ts`
- `extensions/mattermost/src/mattermost/interactions.ts`
- `extensions/mattermost/src/mattermost/model-picker.test.ts`
- `extensions/mattermost/src/mattermost/model-picker.ts`
- `extensions/mattermost/src/mattermost/monitor-auth.test.ts`
- `extensions/mattermost/src/mattermost/monitor-auth.ts`
- `extensions/mattermost/src/mattermost/monitor-gating.ts`
- `extensions/mattermost/src/mattermost/monitor-helpers.ts`
- `extensions/mattermost/src/mattermost/monitor-resources.test.ts`
- `extensions/mattermost/src/mattermost/monitor-slash.test.ts`
- `extensions/mattermost/src/mattermost/monitor-slash.ts`
- `extensions/mattermost/src/mattermost/monitor-websocket.ts`
- `extensions/mattermost/src/mattermost/monitor.test.ts`
- `extensions/mattermost/src/mattermost/monitor.ts`
- `extensions/mattermost/src/mattermost/probe.ts`
- `extensions/mattermost/src/mattermost/reactions.test-helpers.ts`
- `extensions/mattermost/src/mattermost/reactions.test.ts`
- `extensions/mattermost/src/mattermost/reactions.ts`
- `extensions/mattermost/src/mattermost/reply-delivery.test.ts`
- `extensions/mattermost/src/mattermost/reply-delivery.ts`
- `extensions/mattermost/src/mattermost/send.test.ts`
- `extensions/mattermost/src/mattermost/send.ts`
- `extensions/mattermost/src/mattermost/slash-commands.test.ts`
- `extensions/mattermost/src/mattermost/slash-http.send-config.test.ts`
- `extensions/mattermost/src/mattermost/slash-http.test.ts`
- `extensions/mattermost/src/mattermost/slash-http.ts`
- `extensions/mattermost/src/mattermost/slash-state.test.ts`
- `extensions/mattermost/src/mattermost/slash-state.ts`
- `extensions/mattermost/src/mattermost/target-resolution.test.ts`
- `extensions/mattermost/src/mattermost/target-resolution.ts`
- `extensions/mattermost/src/registry-backed.contract.test.ts`
- `extensions/mattermost/src/setup-core.ts`
- `extensions/mattermost/src/setup.test.ts`
- `extensions/mattermost/src/types.ts`

## `src/agent-runtime/providers-auth`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/providers-auth`
- Coverage: `verified`
- Changed paths: `50`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/auth-profiles.doctor.test.ts`
- `src/agents/auth-profiles.ensureauthprofilestore.test.ts`
- `src/agents/auth-profiles.external-cli-sync.test.ts`
- `src/agents/auth-profiles.getsoonestcooldownexpiry.test.ts`
- `src/agents/auth-profiles.markauthprofilefailure.test.ts`
- `src/agents/auth-profiles.readonly-sync.test.ts`
- `src/agents/auth-profiles.runtime.ts`
- `src/agents/auth-profiles.store-cache.test.ts`
- `src/agents/auth-profiles/constants.ts`
- `src/agents/auth-profiles/doctor.ts`
- `src/agents/auth-profiles/external-cli-sync.ts`
- `src/agents/auth-profiles/oauth.fallback-to-main-agent.test.ts`
- `src/agents/auth-profiles/oauth.openai-codex-refresh-fallback.test.ts`
- `src/agents/auth-profiles/oauth.test.ts`
- `src/agents/auth-profiles/repair.ts`
- `src/agents/auth-profiles/store.ts`
- `src/agents/auth-profiles/types.ts`
- `src/agents/auth-profiles/usage.test.ts`
- `src/agents/auth-profiles/usage.ts`
- `src/agents/model-auth-env.ts`
- `src/agents/model-auth-label.test.ts`
- `src/agents/model-auth-markers.test.ts`
- `src/agents/model-auth-markers.ts`
- `src/agents/model-auth-runtime-shared.ts`
- `src/agents/model-auth.profiles.test.ts`
- `src/agents/model-auth.test.ts`
- `src/agents/model-auth.ts`
- `src/agents/models-config.providers.auth-provenance.test.ts`
- `src/agents/models-config.providers.chutes.test.ts`
- `src/agents/models-config.providers.cloudflare-ai-gateway.test.ts`
- `src/agents/models-config.providers.discovery-auth.test.ts`
- `src/agents/models-config.providers.discovery.ts`
- `src/agents/models-config.providers.google-antigravity.test.ts`
- `src/agents/models-config.providers.implicit.ts`
- `src/agents/models-config.providers.kilocode.test.ts`
- `src/agents/models-config.providers.kimi-coding.test.ts`
- `src/agents/models-config.providers.modelstudio.test.ts`
- `src/agents/models-config.providers.moonshot.test.ts`
- `src/agents/models-config.providers.normalize-keys.test.ts`
- `src/agents/models-config.providers.normalize.ts`
- `src/agents/models-config.providers.nvidia.test.ts`
- `src/agents/models-config.providers.ollama.test.ts`
- `src/agents/models-config.providers.policy.test.ts`
- `src/agents/models-config.providers.policy.ts`
- `src/agents/models-config.providers.secrets.ts`
- `src/agents/models-config.providers.source-managed.ts`
- `src/agents/models-config.providers.static.test.ts`
- `src/agents/models-config.providers.static.ts`
- `src/agents/models-config.providers.ts`
- `src/agents/models-config.providers.vercel-ai-gateway.test.ts`

## `src/cli-commands/command-implementations/config-doctor-commands`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/config-doctor-commands`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `49`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/commands/configure.wizard.test.ts`
- `src/commands/configure.wizard.ts`
- `src/commands/daemon-install-helpers.test.ts`
- `src/commands/daemon-install-helpers.ts`
- `src/commands/doctor-auth.deprecated-cli-profiles.test.ts`
- `src/commands/doctor-auth.ts`
- `src/commands/doctor-browser.ts`
- `src/commands/doctor-config-flow.test.ts`
- `src/commands/doctor-gateway-services.test.ts`
- `src/commands/doctor-legacy-config.ts`
- `src/commands/doctor-memory-search.test.ts`
- `src/commands/doctor-memory-search.ts`
- `src/commands/doctor-plugin-manifests.test.ts`
- `src/commands/doctor-plugin-manifests.ts`
- `src/commands/doctor-prompter.test.ts`
- `src/commands/doctor-service-audit.test-helpers.ts`
- `src/commands/doctor-workspace-status.test.ts`
- `src/commands/doctor-workspace-status.ts`
- `src/commands/doctor.e2e-harness.ts`
- `src/commands/doctor.migrates-routing-allowfrom-channels-whatsapp-allowfrom.test.ts`
- `src/commands/doctor.note-test-helpers.ts`
- `src/commands/doctor.ts`
- `src/commands/doctor.warns-per-agent-sandbox-docker-browser-prune.e2e.test.ts`
- `src/commands/doctor.warns-state-directory-is-missing.e2e.test.ts`
- `src/commands/doctor/providers/telegram.test.ts`
- `src/commands/doctor/repair-sequencing.ts`
- `src/commands/doctor/shared/allowlist-policy-repair.test.ts`
- `src/commands/doctor/shared/bundled-plugin-load-paths.test.ts`
- `src/commands/doctor/shared/bundled-plugin-load-paths.ts`
- `src/commands/doctor/shared/preview-warnings.test.ts`
- `src/commands/doctor/shared/preview-warnings.ts`
- `src/commands/doctor/shared/stale-plugin-config.test.ts`
- `src/flows/channel-setup.prompts.ts`
- `src/flows/channel-setup.status.ts`
- `src/flows/channel-setup.ts`
- `src/flows/doctor-health-contributions.ts`
- `src/flows/doctor-health.ts`
- `src/flows/model-picker.ts`
- `src/flows/provider-flow.test.ts`
- `src/flows/provider-flow.ts`
- `src/flows/search-setup.test.ts`
- `src/flows/search-setup.ts`
- `src/flows/types.ts`
- `src/wizard/setup.finalize.test.ts`
- `src/wizard/setup.finalize.ts`
- `src/wizard/setup.gateway-config.test.ts`
- `src/wizard/setup.gateway-config.ts`
- `src/wizard/setup.test.ts`
- `src/wizard/setup.ts`

## `src/config-secrets-security/config-io`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/config-io`
- Coverage: `fallback`
- Changed paths: `49`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/config/bundled-channel-config-metadata.generated.ts`
- `src/config/bundled-channel-config-runtime.test.ts`
- `src/config/bundled-channel-config-runtime.ts`
- `src/config/channel-config-metadata.ts`
- `src/config/channel-config-surface.ts`
- `src/config/channel-configured.ts`
- `src/config/config-misc.test.ts`
- `src/config/config.allowlist-requires-allowfrom.test.ts`
- `src/config/config.discord-presence.test.ts`
- `src/config/config.legacy-config-detection.accepts-imessage-dmpolicy.test.ts`
- `src/config/config.legacy-config-detection.rejects-routing-allowfrom.test.ts`
- `src/config/config.plugin-validation.test.ts`
- `src/config/config.web-search-provider.test.ts`
- `src/config/defaults.ts`
- `src/config/includes.test.ts`
- `src/config/io.compat.test.ts`
- `src/config/io.observe-config.test.ts`
- `src/config/io.owner-display-secret.test.ts`
- `src/config/io.ts`
- `src/config/io.write-config.test.ts`
- `src/config/load-channel-config-surface.test.ts`
- `src/config/plugin-auto-enable.test.ts`
- `src/config/plugin-auto-enable.ts`
- `src/config/redact-snapshot.restore.test.ts`
- `src/config/redact-snapshot.schema.test.ts`
- `src/config/redact-snapshot.test-helpers.ts`
- `src/config/redact-snapshot.test.ts`
- `src/config/runtime-schema.test.ts`
- `src/config/runtime-schema.ts`
- `src/config/sessions.store.imports.test.ts`
- `src/config/talk.normalize.test.ts`
- `src/config/talk.ts`
- `src/config/telegram-webhook-secret.test.ts`
- `src/config/types.approvals.ts`
- `src/config/types.channels.ts`
- `src/config/types.discord.ts`
- `src/config/types.googlechat.ts`
- `src/config/types.imessage.ts`
- `src/config/types.irc.ts`
- `src/config/types.models.ts`
- `src/config/types.msteams.ts`
- `src/config/types.signal.ts`
- `src/config/types.slack.ts`
- `src/config/types.telegram.ts`
- `src/config/types.tools.ts`
- `src/config/types.tts.ts`
- `src/config/types.whatsapp.ts`
- `src/config/validation.channel-metadata.test.ts`
- `src/config/validation.ts`

## `extensions/channel-plugins/bluebubbles`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/bluebubbles`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `44`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/bluebubbles/api.ts`
- `extensions/bluebubbles/channel-config-api.ts`
- `extensions/bluebubbles/package-manifest.contract.test.ts`
- `extensions/bluebubbles/package.json`
- `extensions/bluebubbles/src/account-resolve.ts`
- `extensions/bluebubbles/src/actions.test.ts`
- `extensions/bluebubbles/src/actions.ts`
- `extensions/bluebubbles/src/attachments.test.ts`
- `extensions/bluebubbles/src/attachments.ts`
- `extensions/bluebubbles/src/channel-shared.ts`
- `extensions/bluebubbles/src/channel.pairing.test.ts`
- `extensions/bluebubbles/src/channel.ts`
- `extensions/bluebubbles/src/chat.ts`
- `extensions/bluebubbles/src/config-schema.ts`
- `extensions/bluebubbles/src/config-ui-hints.ts`
- `extensions/bluebubbles/src/conversation-bindings.ts`
- `extensions/bluebubbles/src/conversation-id.ts`
- `extensions/bluebubbles/src/conversation-route.test.ts`
- `extensions/bluebubbles/src/conversation-route.ts`
- `extensions/bluebubbles/src/dm-policy.contract.test.ts`
- `extensions/bluebubbles/src/history.ts`
- `extensions/bluebubbles/src/local-file-access.ts`
- `extensions/bluebubbles/src/media-send.ts`
- `extensions/bluebubbles/src/monitor-debounce.ts`
- `extensions/bluebubbles/src/monitor-normalize.test.ts`
- `extensions/bluebubbles/src/monitor-normalize.ts`
- `extensions/bluebubbles/src/monitor-processing.ts`
- `extensions/bluebubbles/src/monitor.test.ts`
- `extensions/bluebubbles/src/monitor.ts`
- `extensions/bluebubbles/src/monitor.webhook-auth.test.ts`
- `extensions/bluebubbles/src/multipart.ts`
- `extensions/bluebubbles/src/participant-contact-names.test.ts`
- `extensions/bluebubbles/src/participant-contact-names.ts`
- `extensions/bluebubbles/src/probe.ts`
- `extensions/bluebubbles/src/reactions.test.ts`
- `extensions/bluebubbles/src/reactions.ts`
- `extensions/bluebubbles/src/registry-backed.contract.test.ts`
- `extensions/bluebubbles/src/runtime-api.ts`
- `extensions/bluebubbles/src/send.test.ts`
- `extensions/bluebubbles/src/send.ts`
- `extensions/bluebubbles/src/setup-core.ts`
- `extensions/bluebubbles/src/setup-surface.test.ts`
- `extensions/bluebubbles/src/test-harness.ts`
- `extensions/bluebubbles/src/types.ts`

## `extensions/channel-plugins/msteams`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/msteams`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `43`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/msteams/channel-catalog.contract.test.ts`
- `extensions/msteams/channel-config-api.ts`
- `extensions/msteams/package-manifest.contract.test.ts`
- `extensions/msteams/package.json`
- `extensions/msteams/src/block-streaming-config.test.ts`
- `extensions/msteams/src/channel.actions.test.ts`
- `extensions/msteams/src/channel.runtime.ts`
- `extensions/msteams/src/channel.ts`
- `extensions/msteams/src/config-schema.ts`
- `extensions/msteams/src/config-ui-hints.ts`
- `extensions/msteams/src/conversation-store-fs.test.ts`
- `extensions/msteams/src/conversation-store-fs.ts`
- `extensions/msteams/src/conversation-store-helpers.ts`
- `extensions/msteams/src/conversation-store-memory.ts`
- `extensions/msteams/src/conversation-store.shared.test.ts`
- `extensions/msteams/src/conversation-store.ts`
- `extensions/msteams/src/graph-messages.test.ts`
- `extensions/msteams/src/graph-messages.ts`
- `extensions/msteams/src/graph-thread.test.ts`
- `extensions/msteams/src/graph-thread.ts`
- `extensions/msteams/src/graph.test.ts`
- `extensions/msteams/src/graph.ts`
- `extensions/msteams/src/monitor-handler.feedback-authz.test.ts`
- `extensions/msteams/src/monitor-handler.file-consent.test.ts`
- `extensions/msteams/src/monitor-handler.test-helpers.ts`
- `extensions/msteams/src/monitor-handler.ts`
- `extensions/msteams/src/monitor-handler/access.ts`
- `extensions/msteams/src/monitor-handler/message-handler.authz.test.ts`
- `extensions/msteams/src/monitor-handler/message-handler.ts`
- `extensions/msteams/src/outbound.test.ts`
- `extensions/msteams/src/outbound.ts`
- `extensions/msteams/src/reply-dispatcher.test.ts`
- `extensions/msteams/src/reply-dispatcher.ts`
- `extensions/msteams/src/reply-stream-controller.test.ts`
- `extensions/msteams/src/reply-stream-controller.ts`
- `extensions/msteams/src/sdk.test.ts`
- `extensions/msteams/src/sdk.ts`
- `extensions/msteams/src/send-context.ts`
- `extensions/msteams/src/send.test.ts`
- `extensions/msteams/src/send.ts`
- `extensions/msteams/src/sent-message-cache.ts`
- `extensions/msteams/src/setup-surface.test.ts`
- `extensions/msteams/test-api.ts`

## `src/agent-runtime/pi-runner/core-run-loop`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/core-run-loop`
- Coverage: `verified`
- Changed paths: `43`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/pi-embedded-runner.run-embedded-pi-agent.auth-profile-rotation.e2e.test.ts`
- `src/agents/pi-embedded-runner/compact-reasons.test.ts`
- `src/agents/pi-embedded-runner/compact-reasons.ts`
- `src/agents/pi-embedded-runner/compact.hooks.harness.ts`
- `src/agents/pi-embedded-runner/compact.hooks.test.ts`
- `src/agents/pi-embedded-runner/compact.ts`
- `src/agents/pi-embedded-runner/compaction-hooks.ts`
- `src/agents/pi-embedded-runner/history.test.ts`
- `src/agents/pi-embedded-runner/history.ts`
- `src/agents/pi-embedded-runner/model.forward-compat.errors-and-overrides.test.ts`
- `src/agents/pi-embedded-runner/model.provider-normalization.ts`
- `src/agents/pi-embedded-runner/model.provider-runtime.test-support.ts`
- `src/agents/pi-embedded-runner/model.test-harness.ts`
- `src/agents/pi-embedded-runner/model.test.ts`
- `src/agents/pi-embedded-runner/model.ts`
- `src/agents/pi-embedded-runner/moonshot-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/run.codex-server-error-fallback.test.ts`
- `src/agents/pi-embedded-runner/run.overflow-compaction.harness.ts`
- `src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`
- `src/agents/pi-embedded-runner/run.timeout-triggered-compaction.test.ts`
- `src/agents/pi-embedded-runner/run.ts`
- `src/agents/pi-embedded-runner/run/attempt.memory-flush-forwarding.test.ts`
- `src/agents/pi-embedded-runner/run/attempt.prompt-helpers.ts`
- `src/agents/pi-embedded-runner/run/attempt.sessions-yield.ts`
- `src/agents/pi-embedded-runner/run/attempt.spawn-workspace.test-support.ts`
- `src/agents/pi-embedded-runner/run/attempt.spawn-workspace.websocket.test.ts`
- `src/agents/pi-embedded-runner/run/attempt.stop-reason-recovery.test.ts`
- `src/agents/pi-embedded-runner/run/attempt.stop-reason-recovery.ts`
- `src/agents/pi-embedded-runner/run/attempt.test.ts`
- `src/agents/pi-embedded-runner/run/attempt.thread-helpers.ts`
- `src/agents/pi-embedded-runner/run/attempt.tool-call-argument-repair.ts`
- `src/agents/pi-embedded-runner/run/attempt.tool-call-normalization.ts`
- `src/agents/pi-embedded-runner/run/attempt.ts`
- `src/agents/pi-embedded-runner/run/auth-controller.ts`
- `src/agents/pi-embedded-runner/run/helpers.ts`
- `src/agents/pi-embedded-runner/run/payloads.test.ts`
- `src/agents/pi-embedded-runner/run/payloads.ts`
- `src/agents/pi-embedded-runner/run/setup.ts`
- `src/agents/pi-embedded-runner/runs.test.ts`
- `src/agents/pi-embedded-runner/runs.ts`
- `src/agents/pi-embedded-runner/types.ts`
- `src/agents/pi-embedded-runner/usage-reporting.test.ts`
- `src/agents/pi-embedded-runner/xai-stream-wrappers.test.ts`

## `src/agent-runtime/tools`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/tools`
- Coverage: `verified`
- Changed paths: `43`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/bash-tools.exec-runtime.test.ts`
- `src/agents/bash-tools.exec.background-abort.test.ts`
- `src/agents/openclaw-tools.browser-plugin.integration.test.ts`
- `src/agents/openclaw-tools.image-generation.test.ts`
- `src/agents/openclaw-tools.plugin-context.test.ts`
- `src/agents/openclaw-tools.session-status.test.ts`
- `src/agents/openclaw-tools.sessions.test.ts`
- `src/agents/openclaw-tools.ts`
- `src/agents/openclaw-tools.web-runtime.test.ts`
- `src/agents/tools/browser-tool.actions.ts`
- `src/agents/tools/browser-tool.test.ts`
- `src/agents/tools/browser-tool.ts`
- `src/agents/tools/gateway-tool.ts`
- `src/agents/tools/gateway.test.ts`
- `src/agents/tools/gateway.ts`
- `src/agents/tools/image-generate-tool.test.ts`
- `src/agents/tools/image-generate-tool.ts`
- `src/agents/tools/image-tool.helpers.ts`
- `src/agents/tools/image-tool.test.ts`
- `src/agents/tools/image-tool.ts`
- `src/agents/tools/memory-tool.citations.test.ts`
- `src/agents/tools/memory-tool.runtime.ts`
- `src/agents/tools/memory-tool.test-helpers.ts`
- `src/agents/tools/memory-tool.test.ts`
- `src/agents/tools/memory-tool.ts`
- `src/agents/tools/message-tool.test.ts`
- `src/agents/tools/message-tool.ts`
- `src/agents/tools/nodes-tool.test.ts`
- `src/agents/tools/nodes-tool.ts`
- `src/agents/tools/pdf-native-providers.ts`
- `src/agents/tools/session-status-tool.ts`
- `src/agents/tools/sessions-announce-target.ts`
- `src/agents/tools/sessions-helpers.ts`
- `src/agents/tools/sessions-list-tool.test.ts`
- `src/agents/tools/sessions-list-tool.ts`
- `src/agents/tools/sessions-send-helpers.test.ts`
- `src/agents/tools/sessions-send-helpers.ts`
- `src/agents/tools/sessions-send-tool.ts`
- `src/agents/tools/sessions.test.ts`
- `src/agents/tools/tts-tool.test.ts`
- `src/agents/tools/web-search-provider-common.ts`
- `src/agents/tools/web-search-provider-credentials.ts`
- `src/agents/tools/web-search.test.ts`

## `ui/web-ui/components`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/components`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `43`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/src/ui/app-render.helpers.ts`
- `ui/src/ui/app-render.ts`
- `ui/src/ui/app.ts`
- `ui/src/ui/chat/copy-as-markdown.ts`
- `ui/src/ui/chat/grouped-render.ts`
- `ui/src/ui/chat/message-normalizer.ts`
- `ui/src/ui/chat/tool-cards.ts`
- `ui/src/ui/components/dashboard-header.ts`
- `ui/src/ui/controllers/chat.test.ts`
- `ui/src/ui/controllers/config/form-utils.ts`
- `ui/src/ui/controllers/exec-approval.test.ts`
- `ui/src/ui/controllers/exec-approval.ts`
- `ui/src/ui/storage.node.test.ts`
- `ui/src/ui/storage.ts`
- `ui/src/ui/views/agents-panels-overview.ts`
- `ui/src/ui/views/agents-panels-status-files.ts`
- `ui/src/ui/views/agents-panels-tools-skills.ts`
- `ui/src/ui/views/agents.ts`
- `ui/src/ui/views/chat.ts`
- `ui/src/ui/views/command-palette.ts`
- `ui/src/ui/views/connect-command.ts`
- `ui/src/ui/views/cron.ts`
- `ui/src/ui/views/debug.ts`
- `ui/src/ui/views/exec-approval.ts`
- `ui/src/ui/views/gateway-url-confirmation.ts`
- `ui/src/ui/views/instances.ts`
- `ui/src/ui/views/login-gate.ts`
- `ui/src/ui/views/logs.ts`
- `ui/src/ui/views/markdown-sidebar.ts`
- `ui/src/ui/views/nodes-exec-approvals.ts`
- `ui/src/ui/views/nodes.ts`
- `ui/src/ui/views/overview-attention.ts`
- `ui/src/ui/views/overview-cards.ts`
- `ui/src/ui/views/overview-event-log.ts`
- `ui/src/ui/views/overview-log-tail.ts`
- `ui/src/ui/views/overview.ts`
- `ui/src/ui/views/sessions.ts`
- `ui/src/ui/views/skills-shared.ts`
- `ui/src/ui/views/skills.ts`
- `ui/src/ui/views/usage-metrics.ts`
- `ui/src/ui/views/usage-render-details.ts`
- `ui/src/ui/views/usage-render-overview.ts`
- `ui/src/ui/views/usage.ts`

## `extensions/channel-plugins/whatsapp`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/whatsapp`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `38`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/whatsapp/api.ts`
- `extensions/whatsapp/channel-catalog.contract.test.ts`
- `extensions/whatsapp/channel-config-api.ts`
- `extensions/whatsapp/login-qr-api.ts`
- `extensions/whatsapp/package-manifest.contract.test.ts`
- `extensions/whatsapp/package.json`
- `extensions/whatsapp/runtime-api.ts`
- `extensions/whatsapp/src/accounts.ts`
- `extensions/whatsapp/src/auth-store.ts`
- `extensions/whatsapp/src/auto-reply.test-harness.ts`
- `extensions/whatsapp/src/auto-reply/heartbeat-runner.test.ts`
- `extensions/whatsapp/src/auto-reply/heartbeat-runner.ts`
- `extensions/whatsapp/src/auto-reply/monitor.ts`
- `extensions/whatsapp/src/channel.test.ts`
- `extensions/whatsapp/src/channel.ts`
- `extensions/whatsapp/src/config-schema.ts`
- `extensions/whatsapp/src/config-ui-hints.ts`
- `extensions/whatsapp/src/creds-files.ts`
- `extensions/whatsapp/src/group-policy.contract.test.ts`
- `extensions/whatsapp/src/inbound.contract.test.ts`
- `extensions/whatsapp/src/inbound/dedupe.ts`
- `extensions/whatsapp/src/inbound/extract.test.ts`
- `extensions/whatsapp/src/inbound/extract.ts`
- `extensions/whatsapp/src/inbound/monitor.ts`
- `extensions/whatsapp/src/inbound/send-api.test.ts`
- `extensions/whatsapp/src/inbound/send-api.ts`
- `extensions/whatsapp/src/media.test.ts`
- `extensions/whatsapp/src/media.ts`
- `extensions/whatsapp/src/monitor-inbox.allows-messages-from-senders-allowfrom-list.test.ts`
- `extensions/whatsapp/src/outbound-payload.contract.test.ts`
- `extensions/whatsapp/src/plugins-core.contract.test.ts`
- `extensions/whatsapp/src/reconnect.ts`
- `extensions/whatsapp/src/resolve-outbound-target.test.ts`
- `extensions/whatsapp/src/resolve-outbound-target.ts`
- `extensions/whatsapp/src/runtime-api.ts`
- `extensions/whatsapp/src/send.ts`
- `extensions/whatsapp/src/shared.ts`
- `extensions/whatsapp/test-api.ts`

## `extensions/channel-plugins/feishu`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/feishu`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `36`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/feishu/api.ts`
- `extensions/feishu/index.ts`
- `extensions/feishu/package-manifest.contract.test.ts`
- `extensions/feishu/package.json`
- `extensions/feishu/runtime-api.ts`
- `extensions/feishu/src/bot.broadcast.test.ts`
- `extensions/feishu/src/bot.card-action.test.ts`
- `extensions/feishu/src/bot.checkBotMentioned.test.ts`
- `extensions/feishu/src/bot.helpers.test.ts`
- `extensions/feishu/src/bot.stripBotMention.test.ts`
- `extensions/feishu/src/bot.test.ts`
- `extensions/feishu/src/bot.ts`
- `extensions/feishu/src/card-ux-launcher.test.ts`
- `extensions/feishu/src/channel.test.ts`
- `extensions/feishu/src/channel.ts`
- `extensions/feishu/src/client.test.ts`
- `extensions/feishu/src/client.ts`
- `extensions/feishu/src/config-schema.ts`
- `extensions/feishu/src/docx-batch-insert.test.ts`
- `extensions/feishu/src/docx-batch-insert.ts`
- `extensions/feishu/src/docx-color-text.ts`
- `extensions/feishu/src/docx-table-ops.test.ts`
- `extensions/feishu/src/docx-table-ops.ts`
- `extensions/feishu/src/docx-types.ts`
- `extensions/feishu/src/docx.account-selection.test.ts`
- `extensions/feishu/src/docx.test.ts`
- `extensions/feishu/src/docx.ts`
- `extensions/feishu/src/monitor.account.ts`
- `extensions/feishu/src/monitor.bot-menu.lifecycle.test.ts`
- `extensions/feishu/src/monitor.broadcast.reply-once.lifecycle.test.ts`
- `extensions/feishu/src/monitor.transport.ts`
- `extensions/feishu/src/monitor.webhook-e2e.test.ts`
- `extensions/feishu/src/send.reply-fallback.test.ts`
- `extensions/feishu/src/send.test.ts`
- `extensions/feishu/src/send.ts`
- `extensions/feishu/src/thread-bindings.ts`

## `scripts/packaging/root-scripts`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/root-scripts`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `36`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/analyze-plugin-sdk-usage.ts`
- `scripts/check-architecture-smells.mjs`
- `scripts/check-no-raw-channel-fetch.mjs`
- `scripts/check-ts-max-loc.ts`
- `scripts/check-web-search-provider-boundaries.mjs`
- `scripts/check-webhook-auth-body-order.mjs`
- `scripts/ci-write-manifest-outputs.mjs`
- `scripts/committer`
- `scripts/copy-export-html-templates.ts`
- `scripts/copy-hook-metadata.ts`
- `scripts/docs-link-audit.mjs`
- `scripts/generate-bundled-channel-config-metadata.ts`
- `scripts/generate-plugin-sdk-facades.mjs`
- `scripts/label-open-issues.ts`
- `scripts/load-channel-config-surface.ts`
- `scripts/pr`
- `scripts/release-check.ts`
- `scripts/run-node.mjs`
- `scripts/stage-bundled-plugin-runtime-deps.mjs`
- `scripts/sync-labels.ts`
- `scripts/test-find-thread-candidates.mjs`
- `scripts/test-hotspots.mjs`
- `scripts/test-live-acp-bind-docker.sh`
- `scripts/test-live-cli-backend-docker.sh`
- `scripts/test-live.mjs`
- `scripts/test-parallel.mjs`
- `scripts/test-planner/catalog.mjs`
- `scripts/test-planner/executor.mjs`
- `scripts/test-planner/planner.mjs`
- `scripts/test-planner/runtime-profile.mjs`
- `scripts/test-planner/vitest-args.mjs`
- `scripts/test-runner-manifest.mjs`
- `scripts/test-update-memory-hotspots.mjs`
- `scripts/test-update-timings.mjs`
- `scripts/ts-topology.ts`
- `scripts/write-cli-startup-metadata.ts`

## `src/gateway-api-surface/server-methods`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/server-methods`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `32`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/gateway/server-methods.ts`
- `src/gateway/server-methods/agent.test.ts`
- `src/gateway/server-methods/agent.ts`
- `src/gateway/server-methods/agents.ts`
- `src/gateway/server-methods/browser.profile-from-body.test.ts`
- `src/gateway/server-methods/browser.ts`
- `src/gateway/server-methods/channels.status.test.ts`
- `src/gateway/server-methods/channels.ts`
- `src/gateway/server-methods/chat.directive-tags.test.ts`
- `src/gateway/server-methods/chat.ts`
- `src/gateway/server-methods/config.ts`
- `src/gateway/server-methods/devices.test.ts`
- `src/gateway/server-methods/devices.ts`
- `src/gateway/server-methods/doctor.test.ts`
- `src/gateway/server-methods/doctor.ts`
- `src/gateway/server-methods/exec-approval.ts`
- `src/gateway/server-methods/nodes.ts`
- `src/gateway/server-methods/plugin-approval.test.ts`
- `src/gateway/server-methods/plugin-approval.ts`
- `src/gateway/server-methods/send.test.ts`
- `src/gateway/server-methods/send.ts`
- `src/gateway/server-methods/server-methods.test.ts`
- `src/gateway/server-methods/sessions.send-followup-status.test.ts`
- `src/gateway/server-methods/sessions.ts`
- `src/gateway/server-methods/subagent-followup.test-helpers.ts`
- `src/gateway/server-methods/talk.ts`
- `src/gateway/server-methods/tools-catalog.test.ts`
- `src/gateway/server-methods/tools-catalog.ts`
- `src/gateway/server-methods/tools-effective.test.ts`
- `src/gateway/server-methods/tools-effective.ts`
- `src/gateway/server-methods/tts.ts`
- `src/gateway/server-methods/types.ts`

## `extensions/provider-plugins/xai`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/xai`
- Coverage: `verified`
- Changed paths: `28`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/xai/api.ts`
- `extensions/xai/bundled-web-search.contract.test.ts`
- `extensions/xai/code-execution.test.ts`
- `extensions/xai/code-execution.ts`
- `extensions/xai/index.ts`
- `extensions/xai/model-definitions.ts`
- `extensions/xai/model-id.ts`
- `extensions/xai/onboard.test.ts`
- `extensions/xai/onboard.ts`
- `extensions/xai/openclaw.plugin.json`
- `extensions/xai/package.json`
- `extensions/xai/plugin-registration.contract.test.ts`
- `extensions/xai/provider-catalog.ts`
- `extensions/xai/provider-models.ts`
- `extensions/xai/provider-runtime.contract.test.ts`
- `extensions/xai/provider.contract.test.ts`
- `extensions/xai/src/code-execution-shared.ts`
- `extensions/xai/src/grok-web-search-provider.ts`
- `extensions/xai/src/web-search-shared.ts`
- `extensions/xai/src/x-search-shared.ts`
- `extensions/xai/stream.test.ts`
- `extensions/xai/stream.ts`
- `extensions/xai/web-search-provider.contract.test.ts`
- `extensions/xai/web-search.test.ts`
- `extensions/xai/web-search.ts`
- `extensions/xai/x-search.live.test.ts`
- `extensions/xai/x-search.test.ts`
- `extensions/xai/x-search.ts`

## `extensions/provider-plugins/openai`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/openai`
- Coverage: `verified`
- Changed paths: `27`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/openai/api.ts`
- `extensions/openai/cli-backend.ts`
- `extensions/openai/default-models.ts`
- `extensions/openai/image-generation-provider.ts`
- `extensions/openai/index.test.ts`
- `extensions/openai/index.ts`
- `extensions/openai/media-understanding-provider.test.ts`
- `extensions/openai/media-understanding-provider.ts`
- `extensions/openai/openai-codex-catalog.ts`
- `extensions/openai/openai-codex-provider.runtime.ts`
- `extensions/openai/openai-codex-provider.test.ts`
- `extensions/openai/openai-codex-provider.ts`
- `extensions/openai/openai-provider.test.ts`
- `extensions/openai/openai-provider.ts`
- `extensions/openai/openclaw.plugin.json`
- `extensions/openai/package.json`
- `extensions/openai/plugin-registration.contract.test.ts`
- `extensions/openai/provider-auth.contract.test.ts`
- `extensions/openai/provider-catalog.contract.test.ts`
- `extensions/openai/provider-runtime.contract.test.ts`
- `extensions/openai/provider.contract.test.ts`
- `extensions/openai/shared.ts`
- `extensions/openai/speech-provider.ts`
- `extensions/openai/test-api.ts`
- `extensions/openai/tts.test.ts`
- `extensions/openai/tts.ts`
- `src/commands/models/list.list-command.forward-compat.test.ts`

## `extensions/channel-plugins/signal`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/signal`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `26`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/signal/api.ts`
- `extensions/signal/channel-config-api.ts`
- `extensions/signal/package.json`
- `extensions/signal/reaction-runtime-api.ts`
- `extensions/signal/src/channel.ts`
- `extensions/signal/src/client.test.ts`
- `extensions/signal/src/client.ts`
- `extensions/signal/src/config-schema.ts`
- `extensions/signal/src/config-ui-hints.ts`
- `extensions/signal/src/core.test.ts`
- `extensions/signal/src/dm-policy.contract.test.ts`
- `extensions/signal/src/inbound.contract.test.ts`
- `extensions/signal/src/message-actions.test.ts`
- `extensions/signal/src/message-actions.ts`
- `extensions/signal/src/monitor.tool-result.test-harness.ts`
- `extensions/signal/src/monitor.ts`
- `extensions/signal/src/monitor/event-handler.ts`
- `extensions/signal/src/normalize.ts`
- `extensions/signal/src/plugins-core.contract.test.ts`
- `extensions/signal/src/registry-backed.contract.test.ts`
- `extensions/signal/src/runtime-api.ts`
- `extensions/signal/src/runtime.ts`
- `extensions/signal/src/setup-core.ts`
- `extensions/signal/src/shared.ts`
- `extensions/signal/src/sse-reconnect.ts`
- `extensions/signal/test-api.ts`

## `src/capability-modules/media`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/media`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `26`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/media/audio.test.ts`
- `src/media/base64.test.ts`
- `src/media/fetch.telegram-network.test.ts`
- `src/media/fetch.test.ts`
- `src/media/ffmpeg-exec.test.ts`
- `src/media/ffmpeg-exec.ts`
- `src/media/file-context.test.ts`
- `src/media/host.test.ts`
- `src/media/image-ops.helpers.test.ts`
- `src/media/inbound-path-policy.test.ts`
- `src/media/input-files.fetch-guard.test.ts`
- `src/media/load-options.test.ts`
- `src/media/local-roots.test.ts`
- `src/media/local-roots.ts`
- `src/media/mime.test.ts`
- `src/media/parse.test.ts`
- `src/media/parse.ts`
- `src/media/read-response-with-limit.test.ts`
- `src/media/read-response-with-limit.ts`
- `src/media/server.outside-workspace.test.ts`
- `src/media/server.test.ts`
- `src/media/store.outside-workspace.test.ts`
- `src/media/store.redirect.test.ts`
- `src/media/store.test.ts`
- `src/media/store.ts`
- `src/media/web-media.test.ts`

## `extensions/channel-plugins/line`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/line`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `25`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/line/package-manifest.contract.test.ts`
- `extensions/line/package.json`
- `extensions/line/runtime-api.ts`
- `extensions/line/src/accounts.ts`
- `extensions/line/src/bot-handlers.test.ts`
- `extensions/line/src/bot-message-context.ts`
- `extensions/line/src/channel-shared.ts`
- `extensions/line/src/channel.sendPayload.test.ts`
- `extensions/line/src/channel.status.test.ts`
- `extensions/line/src/channel.ts`
- `extensions/line/src/config-schema.ts`
- `extensions/line/src/download.test.ts`
- `extensions/line/src/gateway.ts`
- `extensions/line/src/outbound.ts`
- `extensions/line/src/plugins-core.contract.test.ts`
- `extensions/line/src/registry-backed.contract.test.ts`
- `extensions/line/src/runtime.ts`
- `extensions/line/src/send.test.ts`
- `extensions/line/src/send.ts`
- `extensions/line/src/setup-core.ts`
- `extensions/line/src/setup-surface.test.ts`
- `extensions/line/src/signature.test.ts`
- `extensions/line/src/signature.ts`
- `extensions/line/src/status.ts`
- `extensions/line/src/webhook-node.ts`

## `extensions/provider-plugins/google`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/google`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `24`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/google/api.ts`
- `extensions/google/bundled-web-search.contract.test.ts`
- `extensions/google/cli-backend.ts`
- `extensions/google/gemini-cli-provider.ts`
- `extensions/google/image-generation-provider.test.ts`
- `extensions/google/image-generation-provider.ts`
- `extensions/google/index.ts`
- `extensions/google/media-understanding-provider.ts`
- `extensions/google/media-understanding-provider.video.test.ts`
- `extensions/google/model-id.ts`
- `extensions/google/oauth.flow.ts`
- `extensions/google/oauth.http.ts`
- `extensions/google/openclaw.plugin.json`
- `extensions/google/package.json`
- `extensions/google/plugin-registration.contract.test.ts`
- `extensions/google/provider-models.test.ts`
- `extensions/google/provider-models.ts`
- `extensions/google/provider-runtime.contract.test.ts`
- `extensions/google/provider.contract.test.ts`
- `extensions/google/runtime-api.ts`
- `extensions/google/src/gemini-web-search-provider.ts`
- `extensions/google/test-api.ts`
- `extensions/google/web-search-provider.contract.test.ts`
- `extensions/google/web-search-provider.ts`

## `src/capability-modules/media-understanding`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/media-understanding`
- Coverage: `fallback`
- Changed paths: `24`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/image-generation/provider-registry.test.ts`
- `src/image-generation/provider-registry.ts`
- `src/image-generation/runtime.test.ts`
- `src/image-generation/runtime.ts`
- `src/media-understanding/apply.echo-transcript.test.ts`
- `src/media-understanding/apply.test.ts`
- `src/media-understanding/apply.ts`
- `src/media-understanding/attachments.cache.ts`
- `src/media-understanding/audio-transcription-runner.ts`
- `src/media-understanding/deepgram.audio.live.test.ts`
- `src/media-understanding/deepgram.audio.test.ts`
- `src/media-understanding/google.video.test.ts`
- `src/media-understanding/image.test.ts`
- `src/media-understanding/image.ts`
- `src/media-understanding/mistral.provider.test.ts`
- `src/media-understanding/moonshot.video.test.ts`
- `src/media-understanding/openai.audio.test.ts`
- `src/media-understanding/provider-registry.test.ts`
- `src/media-understanding/provider-registry.ts`
- `src/media-understanding/runner.entries.ts`
- `src/media-understanding/runner.ts`
- `src/media-understanding/runner.vision-skip.test.ts`
- `src/media-understanding/runtime.test.ts`
- `src/media-understanding/runtime.ts`

## `test-infra/profiles-and-suites/config-and-runner`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/config-and-runner`
- Coverage: `fallback`
- Changed paths: `24`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `.github/ISSUE_TEMPLATE/bug_report.yml`
- `.github/actions/setup-node-env/action.yml`
- `.github/labeler.yml`
- `.github/pull_request_template.md`
- `.github/workflows/ci-bun.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/docker-release.yml`
- `.github/workflows/install-smoke.yml`
- `.github/workflows/labeler.yml`
- `.github/workflows/macos-release.yml`
- `.github/workflows/openclaw-npm-release.yml`
- `.gitignore`
- `package.json`
- `pnpm-lock.yaml`
- `tsconfig.json`
- `tsconfig.plugin-sdk.dts.json`
- `tsdown.config.ts`
- `vitest.channels.config.ts`
- `vitest.config.ts`
- `vitest.contracts.config.ts`
- `vitest.extensions.config.ts`
- `vitest.live.config.ts`
- `vitest.performance-config.ts`
- `vitest.unit-paths.mjs`

## `extensions/skill-plugins/feishu`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/feishu`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `23`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/feishu/src/bitable.ts`
- `extensions/feishu/src/bot-content.ts`
- `extensions/feishu/src/bot-sender-name.ts`
- `extensions/feishu/src/chat.test.ts`
- `extensions/feishu/src/directory.test.ts`
- `extensions/feishu/src/drive.ts`
- `extensions/feishu/src/media.test.ts`
- `extensions/feishu/src/media.ts`
- `extensions/feishu/src/outbound.test.ts`
- `extensions/feishu/src/outbound.ts`
- `extensions/feishu/src/perm.ts`
- `extensions/feishu/src/policy.test.ts`
- `extensions/feishu/src/probe.ts`
- `extensions/feishu/src/registry-backed.contract.test.ts`
- `extensions/feishu/src/reply-dispatcher.test.ts`
- `extensions/feishu/src/send-target.test.ts`
- `extensions/feishu/src/session-binding.contract.test.ts`
- `extensions/feishu/src/subagent-hooks.test.ts`
- `extensions/feishu/src/tool-account-routing.test.ts`
- `extensions/feishu/src/tool-account.ts`
- `extensions/feishu/src/tool-factory-test-harness.ts`
- `extensions/feishu/src/typing.ts`
- `extensions/feishu/src/wiki.ts`

## `src/infra-outbound-delivery/outbound-delivery`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-delivery`
- Coverage: `fallback`
- Changed paths: `23`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/cli/send-runtime/discord.ts`
- `src/cli/send-runtime/slack.ts`
- `src/cli/send-runtime/telegram.ts`
- `src/infra/outbound/agent-delivery.test.ts`
- `src/infra/outbound/bound-delivery-router.test.ts`
- `src/infra/outbound/cfg-threading.guard.test.ts`
- `src/infra/outbound/current-conversation-bindings.test.ts`
- `src/infra/outbound/current-conversation-bindings.ts`
- `src/infra/outbound/deliver.test.ts`
- `src/infra/outbound/deliver.ts`
- `src/infra/outbound/delivery-queue-recovery.ts`
- `src/infra/outbound/delivery-queue-storage.ts`
- `src/infra/outbound/delivery-queue.policy.test.ts`
- `src/infra/outbound/delivery-queue.recovery.test.ts`
- `src/infra/outbound/delivery-queue.storage.test.ts`
- `src/infra/outbound/message.channels.test.ts`
- `src/infra/outbound/message.test.ts`
- `src/infra/outbound/outbound-send-service.test.ts`
- `src/infra/outbound/outbound.test.ts`
- `src/infra/outbound/targets.channel-resolution.test.ts`
- `src/infra/outbound/targets.shared-test.ts`
- `src/infra/outbound/targets.test.ts`
- `src/infra/outbound/thread-id.test.ts`

## `test-infra/fixtures-and-helpers/helpers-extensions`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/helpers-extensions`
- Coverage: `verified`
- Changed paths: `23`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `test/helpers/extensions/auth-token-assertions.ts`
- `test/helpers/extensions/bluebubbles-monitor.ts`
- `test/helpers/extensions/bundled-web-search-fast-path-contract.ts`
- `test/helpers/extensions/configured-binding-runtime.ts`
- `test/helpers/extensions/discord-component-runtime.ts`
- `test/helpers/extensions/discord-provider.test-support.ts`
- `test/helpers/extensions/feishu-lifecycle.ts`
- `test/helpers/extensions/media-understanding.ts`
- `test/helpers/extensions/onboard-config.ts`
- `test/helpers/extensions/package-manifest-contract.ts`
- `test/helpers/extensions/plugin-api.ts`
- `test/helpers/extensions/plugin-registration-contract.ts`
- `test/helpers/extensions/plugin-runtime-mock.ts`
- `test/helpers/extensions/plugin-sdk-stub.cjs`
- `test/helpers/extensions/provider-auth-contract.ts`
- `test/helpers/extensions/provider-catalog-contract.ts`
- `test/helpers/extensions/provider-contract.ts`
- `test/helpers/extensions/provider-discovery-contract.ts`
- `test/helpers/extensions/provider-registration.ts`
- `test/helpers/extensions/provider-runtime-contract.ts`
- `test/helpers/extensions/temp-home.ts`
- `test/helpers/extensions/web-search-provider-contract.ts`
- `test/helpers/extensions/zalo-lifecycle.ts`

## `extensions/channel-plugins/imessage`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/imessage`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `21`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/imessage/api.ts`
- `extensions/imessage/channel-config-api.ts`
- `extensions/imessage/package.json`
- `extensions/imessage/runtime-api.ts`
- `extensions/imessage/src/channel.outbound.test.ts`
- `extensions/imessage/src/channel.ts`
- `extensions/imessage/src/config-schema.ts`
- `extensions/imessage/src/config-ui-hints.ts`
- `extensions/imessage/src/conversation-bindings.ts`
- `extensions/imessage/src/conversation-id.ts`
- `extensions/imessage/src/conversation-route.test.ts`
- `extensions/imessage/src/conversation-route.ts`
- `extensions/imessage/src/group-policy.contract.test.ts`
- `extensions/imessage/src/monitor/inbound-processing.ts`
- `extensions/imessage/src/monitor/monitor-provider.ts`
- `extensions/imessage/src/outbound-payload.contract.test.ts`
- `extensions/imessage/src/plugins-core.contract.test.ts`
- `extensions/imessage/src/registry-backed.contract.test.ts`
- `extensions/imessage/src/send.ts`
- `extensions/imessage/src/setup-core.ts`
- `extensions/imessage/src/shared.ts`

## `extensions/memory-media-voice-plugins/voice-call`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/voice-call`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `21`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/voice-call/index.test.ts`
- `extensions/voice-call/index.ts`
- `extensions/voice-call/package-manifest.contract.test.ts`
- `extensions/voice-call/package.json`
- `extensions/voice-call/runtime-entry.ts`
- `extensions/voice-call/src/cli.ts`
- `extensions/voice-call/src/config.test.ts`
- `extensions/voice-call/src/config.ts`
- `extensions/voice-call/src/manager.ts`
- `extensions/voice-call/src/manager/events.ts`
- `extensions/voice-call/src/manager/lifecycle.ts`
- `extensions/voice-call/src/manager/outbound.test.ts`
- `extensions/voice-call/src/manager/outbound.ts`
- `extensions/voice-call/src/manager/timers.test.ts`
- `extensions/voice-call/src/providers/tts-openai.ts`
- `extensions/voice-call/src/providers/twilio/api.test.ts`
- `extensions/voice-call/src/telephony-tts.test.ts`
- `extensions/voice-call/src/test-fixtures.ts`
- `extensions/voice-call/src/types.ts`
- `extensions/voice-call/src/webhook-security.test.ts`
- `extensions/voice-call/src/webhook-security.ts`

## `src/cli-commands/command-implementations/auth-provider-commands`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/auth-provider-commands`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `21`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/commands/auth-choice-legacy.test.ts`
- `src/commands/auth-choice-legacy.ts`
- `src/commands/auth-choice-options.static.ts`
- `src/commands/auth-choice-options.test.ts`
- `src/commands/auth-choice-options.ts`
- `src/commands/auth-choice.apply-helpers.test.ts`
- `src/commands/auth-choice.apply.api-key-providers.ts`
- `src/commands/auth-choice.apply.api-providers.ts`
- `src/commands/auth-choice.apply.ts`
- `src/commands/auth-choice.preferred-provider.test.ts`
- `src/commands/auth-choice.test.ts`
- `src/commands/model-picker.runtime.ts`
- `src/commands/model-picker.test.ts`
- `src/commands/model-picker.ts`
- `src/commands/models.auth.provider-resolution.test.ts`
- `src/commands/models/auth.test.ts`
- `src/commands/models/auth.ts`
- `src/commands/models/list.probe.ts`
- `src/commands/models/list.rows.ts`
- `src/commands/models/list.status-command.ts`
- `src/commands/oauth-env.ts`

## `src/reply-orchestration/commands/command-handlers`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/commands/command-handlers`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `21`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/reply/commands-acp.test.ts`
- `src/auto-reply/reply/commands-acp/context.test.ts`
- `src/auto-reply/reply/commands-acp/context.ts`
- `src/auto-reply/reply/commands-acp/lifecycle.ts`
- `src/auto-reply/reply/commands-acp/shared.test.ts`
- `src/auto-reply/reply/commands-acp/shared.ts`
- `src/auto-reply/reply/commands-approve.ts`
- `src/auto-reply/reply/commands-compact.ts`
- `src/auto-reply/reply/commands-context-report.ts`
- `src/auto-reply/reply/commands-info.ts`
- `src/auto-reply/reply/commands-models.ts`
- `src/auto-reply/reply/commands-plugin.ts`
- `src/auto-reply/reply/commands-session-lifecycle.test.ts`
- `src/auto-reply/reply/commands-status.test.ts`
- `src/auto-reply/reply/commands-status.thinking-default.test.ts`
- `src/auto-reply/reply/commands-status.ts`
- `src/auto-reply/reply/commands-subagents.test-mocks.ts`
- `src/auto-reply/reply/commands-subagents/action-agents.test.ts`
- `src/auto-reply/reply/commands-system-prompt.test.ts`
- `src/auto-reply/reply/commands-tts.ts`
- `src/auto-reply/reply/commands.test.ts`

## `src/channel-abstraction/core-abstractions`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/core-abstractions`
- Coverage: `fallback`
- Changed paths: `19`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/channels/AGENTS.md`
- `src/channels/CLAUDE.md`
- `src/channels/channel-config.test.ts`
- `src/channels/channels-misc.test.ts`
- `src/channels/chat-meta.ts`
- `src/channels/config-presence.test.ts`
- `src/channels/conversation-binding-context.ts`
- `src/channels/conversation-label.test.ts`
- `src/channels/inbound-debounce-policy.test.ts`
- `src/channels/model-overrides.test.ts`
- `src/channels/read-only-account-inspect.discord.runtime.ts`
- `src/channels/read-only-account-inspect.slack.runtime.ts`
- `src/channels/read-only-account-inspect.telegram.runtime.ts`
- `src/channels/registry.ts`
- `src/channels/session.test.ts`
- `src/channels/status-reactions.test.ts`
- `src/channels/thread-bindings-policy.test.ts`
- `src/channels/thread-bindings-policy.ts`
- `src/line/quick-replies.ts`

## `src/shared-misc-runtime-support/startup-process`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/startup-process`
- Coverage: `fallback`
- Changed paths: `19`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/daemon/inspect.test.ts`
- `src/daemon/inspect.ts`
- `src/daemon/runtime-paths.test.ts`
- `src/daemon/runtime-paths.ts`
- `src/daemon/schtasks.ts`
- `src/daemon/service.test-helpers.ts`
- `src/daemon/service.test.ts`
- `src/node-host/invoke-browser.test.ts`
- `src/node-host/invoke-browser.ts`
- `src/node-host/invoke-system-run-plan.test.ts`
- `src/node-host/invoke.ts`
- `src/node-host/runner.ts`
- `src/process/command-queue.test.ts`
- `src/process/command-queue.ts`
- `src/process/exec.test.ts`
- `src/process/exec.ts`
- `src/process/exec.windows.test.ts`
- `src/process/supervisor/supervisor-log.runtime.ts`
- `src/process/supervisor/supervisor.ts`

## `src/config-secrets-security/config-schema-validation`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/config-schema-validation`
- Coverage: `verified`
- Changed paths: `18`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/config/doc-baseline.ts`
- `src/config/schema-base.ts`
- `src/config/schema.base.generated.ts`
- `src/config/schema.help.quality.test.ts`
- `src/config/schema.help.ts`
- `src/config/schema.hints.test.ts`
- `src/config/schema.hints.ts`
- `src/config/schema.irc.ts`
- `src/config/schema.labels.ts`
- `src/config/schema.shared.ts`
- `src/config/schema.test.ts`
- `src/config/schema.ts`
- `src/config/zod-schema.agent-runtime.ts`
- `src/config/zod-schema.approvals.ts`
- `src/config/zod-schema.core.ts`
- `src/config/zod-schema.providers-core.ts`
- `src/config/zod-schema.providers.ts`
- `src/config/zod-schema.tts.test.ts`

## `extensions/channel-plugins/irc`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/irc`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `17`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/irc/channel-config-api.ts`
- `extensions/irc/package-manifest.contract.test.ts`
- `extensions/irc/package.json`
- `extensions/irc/src/accounts.ts`
- `extensions/irc/src/channel.test.ts`
- `extensions/irc/src/channel.ts`
- `extensions/irc/src/config-schema.ts`
- `extensions/irc/src/config-ui-hints.ts`
- `extensions/irc/src/inbound.behavior.test.ts`
- `extensions/irc/src/probe.test.ts`
- `extensions/irc/src/registry-backed.contract.test.ts`
- `extensions/irc/src/runtime-api.ts`
- `extensions/irc/src/runtime.ts`
- `extensions/irc/src/send.test.ts`
- `extensions/irc/src/send.ts`
- `extensions/irc/src/setup-core.ts`
- `extensions/irc/src/setup.test.ts`

## `extensions/channel-plugins/zalouser`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/zalouser`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `16`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/zalouser/index.ts`
- `extensions/zalouser/package-manifest.contract.test.ts`
- `extensions/zalouser/package.json`
- `extensions/zalouser/src/channel.test.ts`
- `extensions/zalouser/src/channel.ts`
- `extensions/zalouser/src/config-schema.ts`
- `extensions/zalouser/src/monitor.group-gating.test.ts`
- `extensions/zalouser/src/monitor.ts`
- `extensions/zalouser/src/outbound-payload.contract.test.ts`
- `extensions/zalouser/src/setup-surface.test.ts`
- `extensions/zalouser/src/tool.test.ts`
- `extensions/zalouser/src/tool.ts`
- `extensions/zalouser/src/zalo-js.ts`
- `extensions/zalouser/src/zca-client.test.ts`
- `extensions/zalouser/src/zca-client.ts`
- `extensions/zalouser/test-api.ts`

## `extensions/provider-plugins/moonshot`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/moonshot`
- Coverage: `verified`
- Changed paths: `16`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/moonshot/api.ts`
- `extensions/moonshot/bundled-web-search.contract.test.ts`
- `extensions/moonshot/index.ts`
- `extensions/moonshot/media-understanding-provider.test.ts`
- `extensions/moonshot/media-understanding-provider.ts`
- `extensions/moonshot/onboard.ts`
- `extensions/moonshot/openclaw.plugin.json`
- `extensions/moonshot/package.json`
- `extensions/moonshot/plugin-registration.contract.test.ts`
- `extensions/moonshot/provider-catalog.ts`
- `extensions/moonshot/provider.contract.test.ts`
- `extensions/moonshot/src/kimi-web-search-provider.test.ts`
- `extensions/moonshot/src/kimi-web-search-provider.ts`
- `extensions/moonshot/test-api.ts`
- `extensions/moonshot/web-search-provider.contract.test.ts`
- `extensions/moonshot/web-search-provider.ts`

## `src/agent-runtime/runtime/cli-runner`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/cli-runner`
- Coverage: `verified`
- Changed paths: `16`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/cli-backends.test.ts`
- `src/agents/cli-backends.ts`
- `src/agents/cli-runner.helpers.test.ts`
- `src/agents/cli-runner.reliability.test.ts`
- `src/agents/cli-runner.session.test.ts`
- `src/agents/cli-runner.spawn.test.ts`
- `src/agents/cli-runner.test-support.ts`
- `src/agents/cli-runner.test.ts`
- `src/agents/cli-runner.ts`
- `src/agents/cli-runner/bundle-mcp.test.ts`
- `src/agents/cli-runner/bundle-mcp.ts`
- `src/agents/cli-runner/execute.ts`
- `src/agents/cli-runner/helpers.ts`
- `src/agents/cli-runner/log.ts`
- `src/agents/cli-runner/prepare.ts`
- `src/agents/cli-runner/types.ts`

## `src/cli-commands/terminal-output`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/terminal-output`
- Coverage: `fallback`
- Changed paths: `16`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/interactive/payload.test.ts`
- `src/terminal/ansi.test.ts`
- `src/terminal/ansi.ts`
- `src/terminal/links.ts`
- `src/terminal/safe-text.test.ts`
- `src/terminal/terminal-link.ts`
- `src/tui/components/chat-log.test.ts`
- `src/tui/components/chat-log.ts`
- `src/tui/components/filterable-select-list.test.ts`
- `src/tui/components/filterable-select-list.ts`
- `src/tui/components/searchable-select-list.ts`
- `src/tui/gateway-chat.test.ts`
- `src/tui/gateway-chat.ts`
- `src/tui/tui-command-handlers.test.ts`
- `src/tui/tui-command-handlers.ts`
- `src/tui/tui-formatters.test.ts`

## `src/config-secrets-security/security-guards`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/security-guards`
- Coverage: `verified`
- Changed paths: `16`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/net/ssrf.pinning.test.ts`
- `src/infra/net/ssrf.test.ts`
- `src/security/audit-channel.telegram.runtime.ts`
- `src/security/audit-extra.async.ts`
- `src/security/audit-extra.sync.test.ts`
- `src/security/audit-extra.sync.ts`
- `src/security/audit.test.ts`
- `src/security/audit.ts`
- `src/security/dm-policy-channel-smoke.test.ts`
- `src/security/dm-policy-shared.test.ts`
- `src/security/external-content.test.ts`
- `src/security/fix.test.ts`
- `src/security/safe-regex.test.ts`
- `src/security/skill-scanner.test.ts`
- `src/security/temp-path-guard.test.ts`
- `src/security/windows-acl.test.ts`

## `extensions/channel-plugins/googlechat`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/googlechat`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `15`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/googlechat/channel-config-api.ts`
- `extensions/googlechat/package-manifest.contract.test.ts`
- `extensions/googlechat/package.json`
- `extensions/googlechat/src/accounts.ts`
- `extensions/googlechat/src/actions.test.ts`
- `extensions/googlechat/src/actions.ts`
- `extensions/googlechat/src/channel.test.ts`
- `extensions/googlechat/src/channel.ts`
- `extensions/googlechat/src/config-schema.ts`
- `extensions/googlechat/src/monitor-access.test.ts`
- `extensions/googlechat/src/monitor-access.ts`
- `extensions/googlechat/src/monitor-webhook.test.ts`
- `extensions/googlechat/src/setup-core.ts`
- `extensions/googlechat/src/setup.test.ts`
- `extensions/googlechat/test-api.ts`

## `extensions/channel-plugins/nextcloud-talk`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/nextcloud-talk`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `15`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/nextcloud-talk/package-manifest.contract.test.ts`
- `extensions/nextcloud-talk/package.json`
- `extensions/nextcloud-talk/src/accounts.ts`
- `extensions/nextcloud-talk/src/channel.ts`
- `extensions/nextcloud-talk/src/config-schema.ts`
- `extensions/nextcloud-talk/src/core.test.ts`
- `extensions/nextcloud-talk/src/inbound.behavior.test.ts`
- `extensions/nextcloud-talk/src/monitor.replay.test.ts`
- `extensions/nextcloud-talk/src/monitor.ts`
- `extensions/nextcloud-talk/src/registry-backed.contract.test.ts`
- `extensions/nextcloud-talk/src/room-info.ts`
- `extensions/nextcloud-talk/src/send.ts`
- `extensions/nextcloud-talk/src/setup-core.ts`
- `extensions/nextcloud-talk/src/setup.test.ts`
- `extensions/nextcloud-talk/src/types.ts`

## `extensions/channel-plugins/zalo`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/zalo`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `15`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/zalo/api.ts`
- `extensions/zalo/package-manifest.contract.test.ts`
- `extensions/zalo/package.json`
- `extensions/zalo/src/channel.ts`
- `extensions/zalo/src/config-schema.ts`
- `extensions/zalo/src/group-policy.contract.test.ts`
- `extensions/zalo/src/monitor.image.polling.test.ts`
- `extensions/zalo/src/monitor.pairing.lifecycle.test.ts`
- `extensions/zalo/src/monitor.reply-once.lifecycle.test.ts`
- `extensions/zalo/src/monitor.ts`
- `extensions/zalo/src/outbound-payload.contract.test.ts`
- `extensions/zalo/src/registry-backed.contract.test.ts`
- `extensions/zalo/src/setup-core.ts`
- `extensions/zalo/src/token.ts`
- `extensions/zalo/test-api.ts`

## `extensions/provider-plugins/anthropic`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/anthropic`
- Coverage: `verified`
- Changed paths: `15`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/anthropic/api.ts`
- `extensions/anthropic/cli-backend.ts`
- `extensions/anthropic/cli-migration.test.ts`
- `extensions/anthropic/cli-migration.ts`
- `extensions/anthropic/cli-shared.ts`
- `extensions/anthropic/index.ts`
- `extensions/anthropic/openclaw.plugin.json`
- `extensions/anthropic/package.json`
- `extensions/anthropic/plugin-registration.contract.test.ts`
- `extensions/anthropic/provider-runtime.contract.test.ts`
- `extensions/anthropic/provider.contract.test.ts`
- `extensions/anthropic/test-api.ts`
- `src/commands/models/list.probe.targets.test.ts`
- `src/commands/models/list.status.test.ts`
- `src/commands/onboard-non-interactive.provider-auth.test.ts`

## `extensions/provider-plugins/ollama`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/ollama`
- Coverage: `verified`
- Changed paths: `15`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/ollama/api.ts`
- `extensions/ollama/index.test.ts`
- `extensions/ollama/index.ts`
- `extensions/ollama/openclaw.plugin.json`
- `extensions/ollama/package.json`
- `extensions/ollama/provider-discovery.contract.test.ts`
- `extensions/ollama/provider.contract.test.ts`
- `extensions/ollama/runtime-api.ts`
- `extensions/ollama/src/defaults.ts`
- `extensions/ollama/src/embedding-provider.ts`
- `extensions/ollama/src/provider-models.test.ts`
- `extensions/ollama/src/provider-models.ts`
- `extensions/ollama/src/setup.test.ts`
- `extensions/ollama/src/setup.ts`
- `extensions/ollama/src/stream.ts`

## `src/agent-runtime/pi-runner/provider-params-streams`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/provider-params-streams`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `14`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/pi-embedded-runner/anthropic-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/bedrock-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/extra-params.ollama.test.ts`
- `src/agents/pi-embedded-runner/extra-params.openai.test.ts`
- `src/agents/pi-embedded-runner/extra-params.pi-ai-mock.ts`
- `src/agents/pi-embedded-runner/extra-params.test-support.ts`
- `src/agents/pi-embedded-runner/extra-params.ts`
- `src/agents/pi-embedded-runner/extra-params.xai-tool-payload.test.ts`
- `src/agents/pi-embedded-runner/google-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/moonshot-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/moonshot-thinking-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/proxy-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/xai-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/zai-stream-wrappers.ts`

## `src/agent-runtime/pi-runner/subscriptions-extensions`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/subscriptions-extensions`
- Coverage: `verified`
- Changed paths: `14`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/pi-embedded-helpers/errors.ts`
- `src/agents/pi-embedded-helpers/failover-matches.ts`
- `src/agents/pi-embedded-helpers/google.ts`
- `src/agents/pi-embedded-subscribe.compaction-test-helpers.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.ts`
- `src/agents/pi-embedded-subscribe.handlers.lifecycle.compaction-reconcile.test.ts`
- `src/agents/pi-embedded-subscribe.raw-stream.ts`
- `src/agents/pi-embedded-subscribe.tools.extract.test.ts`
- `src/agents/pi-embedded-subscribe.tools.ts`
- `src/agents/pi-extensions/compaction-safeguard-quality.ts`
- `src/agents/pi-extensions/compaction-safeguard-runtime.ts`
- `src/agents/pi-extensions/compaction-safeguard.test.ts`
- `src/agents/pi-extensions/compaction-safeguard.ts`

## `docs/mintlify/tools`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/tools`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `13`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/tools/acp-agents.md`
- `docs/tools/apply-patch.md`
- `docs/tools/browser.md`
- `docs/tools/code-execution.md`
- `docs/tools/exec-approvals.md`
- `docs/tools/exec.md`
- `docs/tools/grok-search.md`
- `docs/tools/index.md`
- `docs/tools/plugin.md`
- `docs/tools/skills-config.md`
- `docs/tools/skills.md`
- `docs/tools/tts.md`
- `docs/tools/web.md`

## `extensions/provider-plugins/minimax`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/minimax`
- Coverage: `verified`
- Changed paths: `13`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/minimax/api.ts`
- `extensions/minimax/image-generation-provider.ts`
- `extensions/minimax/index.ts`
- `extensions/minimax/model-definitions.ts`
- `extensions/minimax/oauth.ts`
- `extensions/minimax/onboard.test.ts`
- `extensions/minimax/openclaw.plugin.json`
- `extensions/minimax/package.json`
- `extensions/minimax/plugin-registration.contract.test.ts`
- `extensions/minimax/provider-catalog.ts`
- `extensions/minimax/provider-discovery.contract.test.ts`
- `extensions/minimax/provider-models.ts`
- `extensions/minimax/provider.contract.test.ts`

## `src/config-secrets-security/legacy-migration`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/legacy-migration`
- Coverage: `verified`
- Changed paths: `13`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/commands/doctor-legacy-config.migrations.test.ts`
- `src/config/legacy-migrate.test.ts`
- `src/config/legacy-web-search.test.ts`
- `src/config/legacy-web-search.ts`
- `src/config/legacy.migrations.audio.ts`
- `src/config/legacy.migrations.channels.ts`
- `src/config/legacy.migrations.part-1.ts`
- `src/config/legacy.migrations.part-2.ts`
- `src/config/legacy.migrations.part-3.ts`
- `src/config/legacy.migrations.runtime.ts`
- `src/config/legacy.migrations.ts`
- `src/config/legacy.rules.ts`
- `src/config/legacy.shared.ts`

## `extensions/provider-plugins/github-copilot`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/github-copilot`
- Coverage: `verified`
- Changed paths: `12`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/github-copilot/api.ts`
- `extensions/github-copilot/index.ts`
- `extensions/github-copilot/login.ts`
- `extensions/github-copilot/models-defaults.ts`
- `extensions/github-copilot/models.test.ts`
- `extensions/github-copilot/models.ts`
- `extensions/github-copilot/openclaw.plugin.json`
- `extensions/github-copilot/package.json`
- `extensions/github-copilot/provider-auth.contract.test.ts`
- `extensions/github-copilot/provider-discovery.contract.test.ts`
- `extensions/github-copilot/provider-runtime.contract.test.ts`
- `extensions/github-copilot/provider.contract.test.ts`

## `extensions/skill-plugins/acpx`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/acpx`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `12`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/acpx/openclaw.plugin.json`
- `extensions/acpx/package.json`
- `extensions/acpx/skills/acp-router/SKILL.md`
- `extensions/acpx/src/config.test.ts`
- `extensions/acpx/src/config.ts`
- `extensions/acpx/src/runtime-internals/events.ts`
- `extensions/acpx/src/runtime-internals/mcp-agent-command.test.ts`
- `extensions/acpx/src/runtime-internals/mcp-agent-command.ts`
- `extensions/acpx/src/runtime-internals/process.ts`
- `extensions/acpx/src/runtime.test.ts`
- `extensions/acpx/src/runtime.ts`
- `extensions/acpx/src/test-utils/runtime-fixtures.ts`

## `extensions/skill-plugins/tavily`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/tavily`
- Coverage: `verified`
- Changed paths: `12`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/tavily/bundled-web-search.contract.test.ts`
- `extensions/tavily/openclaw.plugin.json`
- `extensions/tavily/package.json`
- `extensions/tavily/plugin-registration.contract.test.ts`
- `extensions/tavily/src/config.ts`
- `extensions/tavily/src/tavily-client.test.ts`
- `extensions/tavily/src/tavily-client.ts`
- `extensions/tavily/src/tavily-extract-tool.ts`
- `extensions/tavily/src/tavily-search-provider.ts`
- `extensions/tavily/src/tavily-search-tool.ts`
- `extensions/tavily/web-search-provider.contract.test.ts`
- `extensions/tavily/web-search-provider.ts`

## `src/infra-outbound-delivery/outbound-routing`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-routing`
- Coverage: `verified`
- Changed paths: `12`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/infra/outbound/channel-adapters.test.ts`
- `src/infra/outbound/channel-resolution.test.ts`
- `src/infra/outbound/channel-resolution.ts`
- `src/infra/outbound/channel-selection.test.ts`
- `src/infra/outbound/channel-target.test.ts`
- `src/infra/outbound/outbound-policy.test.ts`
- `src/infra/outbound/outbound-policy.ts`
- `src/infra/outbound/session-binding-service.test.ts`
- `src/infra/outbound/session-binding-service.ts`
- `src/infra/outbound/target-errors.test.ts`
- `src/infra/outbound/target-normalization.test.ts`
- `src/infra/outbound/target-resolver.test.ts`

## `src/shared-misc-runtime-support/logging-support`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/logging-support`
- Coverage: `fallback`
- Changed paths: `12`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/logger.test.ts`
- `src/logger.ts`
- `src/logging/config.test.ts`
- `src/logging/config.ts`
- `src/logging/console-settings.test.ts`
- `src/logging/console.ts`
- `src/logging/diagnostic.test.ts`
- `src/logging/logger-settings.test.ts`
- `src/logging/logger.settings.test.ts`
- `src/logging/logger.ts`
- `src/logging/parse-log-line.test.ts`
- `src/logging/subsystem.ts`

## `test-infra/fixtures-and-helpers/fixtures`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/fixtures`
- Coverage: `fallback`
- Changed paths: `12`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `test/channel-outbounds.ts`
- `test/fixtures/test-parallel.behavior.json`
- `test/fixtures/test-timings.extensions.json`
- `test/fixtures/ts-topology/basic/extensions/alpha/src/use.ts`
- `test/fixtures/ts-topology/basic/extensions/beta/src/use.ts`
- `test/fixtures/ts-topology/basic/src/internal/use.ts`
- `test/fixtures/ts-topology/basic/src/lib/shared.ts`
- `test/fixtures/ts-topology/basic/src/public/extra.ts`
- `test/fixtures/ts-topology/basic/src/public/index.ts`
- `test/fixtures/ts-topology/basic/tsconfig.json`
- `test/scripts/test-extension.test.ts`
- `test/test-env.ts`

## `test-infra/fixtures-and-helpers/helpers-core`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/helpers-core`
- Coverage: `verified`
- Changed paths: `12`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `test/helpers/browser-bundled-plugin-fixture.ts`
- `test/helpers/channels/channel-catalog-contract.ts`
- `test/helpers/channels/dm-policy-contract.ts`
- `test/helpers/channels/group-policy-contract.ts`
- `test/helpers/channels/inbound-contract.ts`
- `test/helpers/channels/outbound-payload-contract.ts`
- `test/helpers/channels/plugins-core-extension-contract.ts`
- `test/helpers/channels/registry-backed-contract.ts`
- `test/helpers/channels/session-binding-contract.ts`
- `test/helpers/memory-tool-manager-mock.ts`
- `test/helpers/sandbox-fixtures.ts`
- `test/helpers/temp-repo.ts`

## `apps/macos/app-sources`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/macos/app-sources`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `11`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/macos/Package.resolved`
- `apps/macos/Package.swift`
- `apps/macos/Sources/OpenClaw/DebugSettings.swift`
- `apps/macos/Sources/OpenClaw/GatewayEnvironment.swift`
- `apps/macos/Sources/OpenClaw/GatewayProcessManager.swift`
- `apps/macos/Sources/OpenClaw/HostEnvSecurityPolicy.generated.swift`
- `apps/macos/Sources/OpenClaw/OpenClawConfigFile.swift`
- `apps/macos/Sources/OpenClaw/PortGuardian.swift`
- `apps/macos/Sources/OpenClaw/SkillsSettings.swift`
- `apps/macos/Sources/OpenClaw/TalkModeRuntime.swift`
- `apps/macos/Sources/OpenClawProtocol/GatewayModels.swift`

## `extensions/channel-plugins/synology-chat`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/synology-chat`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `11`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/synology-chat/package-manifest.contract.test.ts`
- `extensions/synology-chat/package.json`
- `extensions/synology-chat/src/channel.integration.test.ts`
- `extensions/synology-chat/src/channel.test-mocks.ts`
- `extensions/synology-chat/src/channel.test.ts`
- `extensions/synology-chat/src/client.test.ts`
- `extensions/synology-chat/src/client.ts`
- `extensions/synology-chat/src/config-schema.ts`
- `extensions/synology-chat/src/registry-backed.contract.test.ts`
- `extensions/synology-chat/src/webhook-handler.test.ts`
- `extensions/synology-chat/src/webhook-handler.ts`

## `extensions/provider-plugins/mistral`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/mistral`
- Coverage: `verified`
- Changed paths: `11`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/mistral/api.test.ts`
- `extensions/mistral/api.ts`
- `extensions/mistral/index.ts`
- `extensions/mistral/media-understanding-provider.test.ts`
- `extensions/mistral/model-definitions.ts`
- `extensions/mistral/onboard.test.ts`
- `extensions/mistral/openclaw.plugin.json`
- `extensions/mistral/package.json`
- `extensions/mistral/plugin-registration.contract.test.ts`
- `extensions/mistral/provider-catalog.ts`
- `extensions/mistral/provider.contract.test.ts`

## `extensions/provider-plugins/openrouter`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/openrouter`
- Coverage: `verified`
- Changed paths: `11`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/openrouter/api.ts`
- `extensions/openrouter/index.test.ts`
- `extensions/openrouter/index.ts`
- `extensions/openrouter/media-understanding-provider.ts`
- `extensions/openrouter/onboard.test.ts`
- `extensions/openrouter/openclaw.plugin.json`
- `extensions/openrouter/package.json`
- `extensions/openrouter/plugin-registration.contract.test.ts`
- `extensions/openrouter/provider-catalog.ts`
- `extensions/openrouter/provider-runtime.contract.test.ts`
- `extensions/openrouter/provider.contract.test.ts`

## `extensions/tool-capability-plugins/firecrawl`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/firecrawl`
- Coverage: `verified`
- Changed paths: `11`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/firecrawl/bundled-web-search.contract.test.ts`
- `extensions/firecrawl/openclaw.plugin.json`
- `extensions/firecrawl/package.json`
- `extensions/firecrawl/plugin-registration.contract.test.ts`
- `extensions/firecrawl/src/config.ts`
- `extensions/firecrawl/src/firecrawl-client.ts`
- `extensions/firecrawl/src/firecrawl-scrape-tool.ts`
- `extensions/firecrawl/src/firecrawl-search-provider.ts`
- `extensions/firecrawl/src/firecrawl-search-tool.ts`
- `extensions/firecrawl/web-search-provider.contract.test.ts`
- `extensions/firecrawl/web-search-provider.ts`

## `src/capability-modules/cron`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/cron`
- Coverage: `verified`
- Changed paths: `11`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/cron/isolated-agent.delivery-target-thread-session.test.ts`
- `src/cron/isolated-agent.test-setup.ts`
- `src/cron/isolated-agent/delivery-target.test.ts`
- `src/cron/isolated-agent/delivery-target.ts`
- `src/cron/isolated-agent/run.owner-auth.test.ts`
- `src/cron/isolated-agent/run.test-harness.ts`
- `src/cron/service.jobs.test.ts`
- `src/cron/service.runs-one-shot-main-job-disables-it.test.ts`
- `src/cron/service/store.test.ts`
- `src/cron/session-reaper.ts`
- `src/cron/store.ts`

## `src/cli-commands/command-implementations/channel-plugin-commands`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/channel-plugin-commands`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `11`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/commands/channel-setup/discovery.test.ts`
- `src/commands/channel-setup/discovery.ts`
- `src/commands/channel-setup/plugin-install.test.ts`
- `src/commands/channel-setup/plugin-install.ts`
- `src/commands/channel-test-helpers.ts`
- `src/commands/channels.add.test.ts`
- `src/commands/channels.mock-harness.ts`
- `src/commands/channels.plugin-install.test-helpers.ts`
- `src/commands/channels.remove.test.ts`
- `src/commands/channels.resolve.test.ts`
- `src/commands/channels/resolve.ts`

## `src/cli-commands/program-registration`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/program-registration`
- Coverage: `verified`
- Changed paths: `11`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/cli/argv.test.ts`
- `src/cli/argv.ts`
- `src/cli/program.smoke.test.ts`
- `src/cli/program/command-registry.test.ts`
- `src/cli/program/command-registry.ts`
- `src/cli/program/core-command-descriptors.ts`
- `src/cli/program/preaction.test.ts`
- `src/cli/program/preaction.ts`
- `src/cli/program/root-help.ts`
- `src/cli/program/routes.test.ts`
- `src/cli/program/routes.ts`

## `test-infra/profiles-and-suites/root-tests`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/root-tests`
- Coverage: `verified`
- Changed paths: `11`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `test/extension-test-boundary.test.ts`
- `test/fixtures/ts-topology/basic/tests/public.test.ts`
- `test/git-hooks-pre-commit.test.ts`
- `test/official-channel-catalog.test.ts`
- `test/openclaw-npm-postpublish-verify.test.ts`
- `test/openshell-sandbox.e2e.test.ts`
- `test/release-check.test.ts`
- `test/test-env.test.ts`
- `test/vitest-config.test.ts`
- `test/vitest-performance-config.test.ts`
- `test/vitest-scoped-config.test.ts`

## `ui/provider-channel-settings/web-settings/channel-config-cards`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/provider-channel-settings/web-settings/channel-config-cards`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `11`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/src/ui/views/channels.discord.ts`
- `ui/src/ui/views/channels.googlechat.ts`
- `ui/src/ui/views/channels.imessage.ts`
- `ui/src/ui/views/channels.nostr-profile-form.ts`
- `ui/src/ui/views/channels.nostr.ts`
- `ui/src/ui/views/channels.shared.ts`
- `ui/src/ui/views/channels.signal.ts`
- `ui/src/ui/views/channels.slack.ts`
- `ui/src/ui/views/channels.telegram.ts`
- `ui/src/ui/views/channels.ts`
- `ui/src/ui/views/channels.whatsapp.ts`

## `docs/mintlify/channels`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/channels`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `10`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/channels/bluebubbles.md`
- `docs/channels/discord.md`
- `docs/channels/googlechat.md`
- `docs/channels/groups.md`
- `docs/channels/imessage.md`
- `docs/channels/index.md`
- `docs/channels/matrix.md`
- `docs/channels/msteams.md`
- `docs/channels/pairing.md`
- `docs/channels/slack.md`

## `extensions/provider-plugins/modelstudio`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/modelstudio`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `10`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/modelstudio/api.ts`
- `extensions/modelstudio/index.ts`
- `extensions/modelstudio/model-definitions.ts`
- `extensions/modelstudio/models.ts`
- `extensions/modelstudio/onboard.ts`
- `extensions/modelstudio/openclaw.plugin.json`
- `extensions/modelstudio/package.json`
- `extensions/modelstudio/provider-catalog.ts`
- `extensions/modelstudio/provider-discovery.contract.test.ts`
- `extensions/modelstudio/provider.contract.test.ts`

## `src/agent-runtime/runtime/context-subagents/subagent-registry`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/context-subagents/subagent-registry`
- Coverage: `verified`
- Changed paths: `10`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/subagent-registry-helpers.ts`
- `src/agents/subagent-registry-lifecycle.ts`
- `src/agents/subagent-registry-memory.ts`
- `src/agents/subagent-registry-read.ts`
- `src/agents/subagent-registry-run-manager.ts`
- `src/agents/subagent-registry.ts`
- `src/agents/subagent-spawn.model-session.test.ts`
- `src/agents/subagent-spawn.test-helpers.ts`
- `src/agents/subagent-spawn.test.ts`
- `src/agents/subagent-spawn.workspace.test.ts`

## `src/capability-modules/tts`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/tts`
- Coverage: `verified`
- Changed paths: `10`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/tts/directives.ts`
- `src/tts/edge-tts-validation.test.ts`
- `src/tts/provider-registry.test.ts`
- `src/tts/provider-registry.ts`
- `src/tts/provider-types.ts`
- `src/tts/status-config.test.ts`
- `src/tts/status-config.ts`
- `src/tts/tts-core.ts`
- `src/tts/tts.test.ts`
- `src/tts/tts.ts`

## `src/gateway-api-surface/protocol`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/protocol`
- Coverage: `verified`
- Changed paths: `10`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/gateway/protocol/AGENTS.md`
- `src/gateway/protocol/CLAUDE.md`
- `src/gateway/protocol/client-info.ts`
- `src/gateway/protocol/index.ts`
- `src/gateway/protocol/schema.ts`
- `src/gateway/protocol/schema/error-codes.ts`
- `src/gateway/protocol/schema/logs-chat.ts`
- `src/gateway/protocol/schema/plugin-approvals.ts`
- `src/gateway/protocol/schema/protocol-schemas.ts`
- `src/gateway/protocol/schema/types.ts`

## `ui/provider-channel-settings/web-settings`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/provider-channel-settings/web-settings`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `10`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/package.json`
- `ui/src/ui/app-gateway.ts`
- `ui/src/ui/icons.ts`
- `ui/src/ui/navigation.browser.test.ts`
- `ui/src/ui/test-helpers/app-mount.ts`
- `ui/src/ui/views/channels.config.ts`
- `ui/src/ui/views/config-form.node.ts`
- `ui/src/ui/views/config-form.render.ts`
- `ui/src/ui/views/config.browser.test.ts`
- `ui/src/ui/views/config.ts`

## `extensions/provider-plugins/kilocode`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/kilocode`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/kilocode/api.ts`
- `extensions/kilocode/onboard.test.ts`
- `extensions/kilocode/onboard.ts`
- `extensions/kilocode/openclaw.plugin.json`
- `extensions/kilocode/package.json`
- `extensions/kilocode/provider-catalog.ts`
- `extensions/kilocode/provider-models.ts`
- `extensions/kilocode/provider.contract.test.ts`
- `extensions/kilocode/shared.ts`

## `extensions/provider-plugins/qwen-portal-auth`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/qwen-portal-auth`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/qwen-portal-auth/README.md`
- `extensions/qwen-portal-auth/index.ts`
- `extensions/qwen-portal-auth/oauth.runtime.ts`
- `extensions/qwen-portal-auth/oauth.ts`
- `extensions/qwen-portal-auth/openclaw.plugin.json`
- `extensions/qwen-portal-auth/provider-catalog.ts`
- `extensions/qwen-portal-auth/refresh.test.ts`
- `extensions/qwen-portal-auth/refresh.ts`
- `extensions/qwen-portal-auth/runtime-api.ts`

## `extensions/provider-plugins/venice`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/venice`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/venice/api.ts`
- `extensions/venice/index.ts`
- `extensions/venice/models.ts`
- `extensions/venice/onboard.ts`
- `extensions/venice/openclaw.plugin.json`
- `extensions/venice/package.json`
- `extensions/venice/provider-catalog.ts`
- `extensions/venice/provider-runtime.contract.test.ts`
- `extensions/venice/provider.contract.test.ts`

## `extensions/provider-plugins/zai`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/zai`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/zai/api.ts`
- `extensions/zai/index.ts`
- `extensions/zai/model-definitions.ts`
- `extensions/zai/onboard.test.ts`
- `extensions/zai/openclaw.plugin.json`
- `extensions/zai/package.json`
- `extensions/zai/plugin-registration.contract.test.ts`
- `extensions/zai/provider-runtime.contract.test.ts`
- `extensions/zai/provider.contract.test.ts`

## `extensions/tool-capability-plugins/brave`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/brave`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/brave/bundled-web-search.contract.test.ts`
- `extensions/brave/openclaw.plugin.json`
- `extensions/brave/package.json`
- `extensions/brave/plugin-registration.contract.test.ts`
- `extensions/brave/src/brave-web-search-provider.test.ts`
- `extensions/brave/src/brave-web-search-provider.ts`
- `extensions/brave/test-api.ts`
- `extensions/brave/web-search-provider.contract.test.ts`
- `extensions/brave/web-search-provider.ts`

## `extensions/tool-capability-plugins/openshell`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/openshell`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/openshell/openclaw.plugin.json`
- `extensions/openshell/package.json`
- `extensions/openshell/src/backend.e2e.test.ts`
- `extensions/openshell/src/backend.ts`
- `extensions/openshell/src/config.ts`
- `extensions/openshell/src/fs-bridge.ts`
- `extensions/openshell/src/mirror.test.ts`
- `extensions/openshell/src/mirror.ts`
- `extensions/openshell/src/openshell-core.test.ts`

## `scripts/packaging/e2e`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/e2e`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/e2e/Dockerfile`
- `scripts/e2e/mcp-channels-docker-client.ts`
- `scripts/e2e/mcp-channels-docker.sh`
- `scripts/e2e/mcp-channels-harness.ts`
- `scripts/e2e/mcp-channels-seed.ts`
- `scripts/e2e/parallels-linux-smoke.sh`
- `scripts/e2e/parallels-macos-smoke.sh`
- `scripts/e2e/parallels-npm-update-smoke.sh`
- `scripts/e2e/parallels-windows-smoke.sh`

## `scripts/packaging/lib`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/lib`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/lib/copy-assets.ts`
- `scripts/lib/live-docker-auth.sh`
- `scripts/lib/plugin-sdk-entrypoints.json`
- `scripts/lib/plugin-sdk-facades.mjs`
- `scripts/lib/ts-topology/analyze.ts`
- `scripts/lib/ts-topology/context.ts`
- `scripts/lib/ts-topology/reports.ts`
- `scripts/lib/ts-topology/scope.ts`
- `scripts/lib/ts-topology/types.ts`

## `src/agent-runtime/skills/core-inventory`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/skills/core-inventory`
- Coverage: `fallback`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `.agents/skills/openclaw-parallels-smoke/SKILL.md`
- `skills/openai-whisper-api/SKILL.md`
- `skills/openai-whisper-api/scripts/transcribe.sh`
- `src/agents/skills-status.test.ts`
- `src/agents/skills-status.ts`
- `src/agents/skills.buildworkspaceskillstatus.test.ts`
- `src/agents/skills.resolveskillspromptforrun.test.ts`
- `src/agents/skills.test-helpers.ts`
- `src/agents/skills/compact-format.test.ts`

## `src/config-secrets-security/secrets-resolution/runtime-secret-collection`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/runtime-secret-collection`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/secrets/runtime-config-collectors-channels.ts`
- `src/secrets/runtime-config-collectors-tts.ts`
- `src/secrets/runtime-web-tools.test.ts`
- `src/secrets/runtime-web-tools.ts`
- `src/secrets/runtime-web-tools.types.ts`
- `src/secrets/runtime.coverage.test.ts`
- `src/secrets/runtime.integration.test.ts`
- `src/secrets/runtime.test.ts`
- `src/secrets/runtime.ts`

## `src/infra-outbound-delivery/outbound-actions`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-actions`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/infra/outbound/message-action-normalization.test.ts`
- `src/infra/outbound/message-action-params.test.ts`
- `src/infra/outbound/message-action-params.ts`
- `src/infra/outbound/message-action-runner.context.test.ts`
- `src/infra/outbound/message-action-runner.media.test.ts`
- `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts`
- `src/infra/outbound/message-action-runner.test-helpers.ts`
- `src/infra/outbound/message-action-spec.test.ts`
- `src/infra/outbound/message-action-spec.ts`

## `ui/web-ui/components/app-shell-lifecycle`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/components/app-shell-lifecycle`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/src/ui/app-gateway.node.test.ts`
- `ui/src/ui/chat/message-normalizer.test.ts`
- `ui/src/ui/chat/slash-command-executor.node.test.ts`
- `ui/src/ui/chat/tool-cards.test.ts`
- `ui/src/ui/gateway.node.test.ts`
- `ui/src/ui/navigation-groups.test.ts`
- `ui/src/ui/views/chat.browser.test.ts`
- `ui/src/ui/views/chat.test.ts`
- `ui/src/ui/views/skills.test.ts`

## `docs/mintlify/cli`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/cli`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/cli/acp.md`
- `docs/cli/config.md`
- `docs/cli/configure.md`
- `docs/cli/gateway.md`
- `docs/cli/index.md`
- `docs/cli/mcp.md`
- `docs/cli/models.md`
- `docs/cli/onboard.md`

## `extensions/auth-integration-plugins/perplexity`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/perplexity`
- Coverage: `verified`
- Changed paths: `8`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/perplexity/bundled-web-search.contract.test.ts`
- `extensions/perplexity/openclaw.plugin.json`
- `extensions/perplexity/package.json`
- `extensions/perplexity/plugin-registration.contract.test.ts`
- `extensions/perplexity/src/perplexity-web-search-provider.test.ts`
- `extensions/perplexity/src/perplexity-web-search-provider.ts`
- `extensions/perplexity/test-api.ts`
- `extensions/perplexity/web-search-provider.contract.test.ts`

## `extensions/memory-media-voice-plugins/microsoft`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/microsoft`
- Coverage: `verified`
- Changed paths: `8`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/microsoft/openclaw.plugin.json`
- `extensions/microsoft/package.json`
- `extensions/microsoft/plugin-registration.contract.test.ts`
- `extensions/microsoft/speech-provider.test.ts`
- `extensions/microsoft/speech-provider.ts`
- `extensions/microsoft/test-api.ts`
- `extensions/microsoft/tts.test.ts`
- `extensions/microsoft/tts.ts`

## `extensions/provider-plugins/cloudflare-ai-gateway`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/cloudflare-ai-gateway`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/cloudflare-ai-gateway/api.ts`
- `extensions/cloudflare-ai-gateway/index.ts`
- `extensions/cloudflare-ai-gateway/models.ts`
- `extensions/cloudflare-ai-gateway/onboard.ts`
- `extensions/cloudflare-ai-gateway/openclaw.plugin.json`
- `extensions/cloudflare-ai-gateway/package.json`
- `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts`
- `extensions/cloudflare-ai-gateway/provider.contract.test.ts`

## `extensions/provider-plugins/huggingface`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/huggingface`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/huggingface/api.ts`
- `extensions/huggingface/index.ts`
- `extensions/huggingface/models.ts`
- `extensions/huggingface/onboard.ts`
- `extensions/huggingface/openclaw.plugin.json`
- `extensions/huggingface/package.json`
- `extensions/huggingface/provider-catalog.ts`
- `extensions/huggingface/provider.contract.test.ts`

## `extensions/provider-plugins/sglang`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/sglang`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/sglang/api.ts`
- `extensions/sglang/defaults.ts`
- `extensions/sglang/index.ts`
- `extensions/sglang/models.ts`
- `extensions/sglang/openclaw.plugin.json`
- `extensions/sglang/package.json`
- `extensions/sglang/provider-discovery.contract.test.ts`
- `extensions/sglang/provider.contract.test.ts`

## `extensions/provider-plugins/synthetic`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/synthetic`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/synthetic/api.ts`
- `extensions/synthetic/models.ts`
- `extensions/synthetic/onboard.test.ts`
- `extensions/synthetic/onboard.ts`
- `extensions/synthetic/openclaw.plugin.json`
- `extensions/synthetic/package.json`
- `extensions/synthetic/provider-catalog.ts`
- `extensions/synthetic/provider.contract.test.ts`

## `extensions/provider-plugins/vllm`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/vllm`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/vllm/api.ts`
- `extensions/vllm/defaults.ts`
- `extensions/vllm/index.ts`
- `extensions/vllm/models.ts`
- `extensions/vllm/openclaw.plugin.json`
- `extensions/vllm/package.json`
- `extensions/vllm/provider-discovery.contract.test.ts`
- `extensions/vllm/provider.contract.test.ts`

## `src/cli-commands/status-gateway-channel`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/status-gateway-channel`
- Coverage: `verified`
- Changed paths: `8`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/cli/daemon-cli/probe.test.ts`
- `src/cli/daemon-cli/probe.ts`
- `src/cli/daemon-cli/status.gather.test.ts`
- `src/cli/daemon-cli/status.gather.ts`
- `src/cli/daemon-cli/status.test.ts`
- `src/cli/daemon-cli/status.ts`
- `src/commands/gateway-status/helpers.test.ts`
- `src/commands/gateway-status/helpers.ts`

## `src/config-secrets-security/sessions`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/sessions`
- Coverage: `verified`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/config/sessions/explicit-session-key-normalization.ts`
- `src/config/sessions/store-read.test.ts`
- `src/config/sessions/store-read.ts`
- `src/config/sessions/store.lock.test.ts`
- `src/config/sessions/store.pruning.integration.test.ts`
- `src/config/sessions/store.ts`
- `src/config/sessions/types.ts`
- `src/sessions/send-policy.test.ts`

## `src/reply-orchestration/exec`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/exec`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/reply/directive-handling.impl.ts`
- `src/auto-reply/reply/directive-handling.model-picker.test.ts`
- `src/auto-reply/reply/directive-handling.model-picker.ts`
- `src/auto-reply/reply/directive-handling.model.test.ts`
- `src/auto-reply/reply/directive-handling.model.ts`
- `src/auto-reply/reply/directive-handling.params.ts`
- `src/auto-reply/reply/directive-handling.persist.ts`
- `src/auto-reply/reply/directive-handling.shared.ts`

## `src/reply-orchestration/streaming`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/streaming`
- Coverage: `fallback`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/reply.block-streaming.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.applies-inline-reasoning-mixed-messages-acks-immediately.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.defaults-think-low-reasoning-capable-models-no.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.e2e-harness.ts`
- `src/auto-reply/reply.heartbeat-typing.test.ts`
- `src/auto-reply/reply.runtime.ts`
- `src/auto-reply/reply.stage-sandbox-media.scp-remote-path.test.ts`
- `src/auto-reply/reply.triggers.trigger-handling.stages-inbound-media-into-sandbox-workspace.test.ts`

## `docs/mintlify/.i18n`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/.i18n`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/zh-CN/CLAUDE.md`
- `docs/zh-CN/concepts/agent-loop.md`
- `docs/zh-CN/concepts/model-providers.md`
- `docs/zh-CN/help/faq.md`
- `docs/zh-CN/providers/qwen.md`
- `docs/zh-CN/reference/templates/CLAUDE.md`
- `docs/zh-CN/tools/plugin.md`

## `extensions/channel-plugins/nostr`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/nostr`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/nostr/package-manifest.contract.test.ts`
- `extensions/nostr/package.json`
- `extensions/nostr/src/config-schema.ts`
- `extensions/nostr/src/nostr-profile-http.ts`
- `extensions/nostr/src/nostr-state-store.test.ts`
- `extensions/nostr/src/nostr-state-store.ts`
- `extensions/nostr/test-api.ts`

## `extensions/memory-media-voice-plugins/elevenlabs`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/elevenlabs`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/elevenlabs/openclaw.plugin.json`
- `extensions/elevenlabs/package.json`
- `extensions/elevenlabs/plugin-registration.contract.test.ts`
- `extensions/elevenlabs/speech-provider.test.ts`
- `extensions/elevenlabs/speech-provider.ts`
- `extensions/elevenlabs/test-api.ts`
- `extensions/elevenlabs/tts.ts`

## `extensions/provider-plugins/byteplus`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/byteplus`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/byteplus/api.ts`
- `extensions/byteplus/index.ts`
- `extensions/byteplus/models.ts`
- `extensions/byteplus/openclaw.plugin.json`
- `extensions/byteplus/package.json`
- `extensions/byteplus/provider-catalog.ts`
- `extensions/byteplus/provider.contract.test.ts`

## `extensions/provider-plugins/chutes`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/chutes`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/chutes/api.ts`
- `extensions/chutes/index.ts`
- `extensions/chutes/models.ts`
- `extensions/chutes/onboard.ts`
- `extensions/chutes/package.json`
- `extensions/chutes/provider-catalog.ts`
- `extensions/chutes/provider.contract.test.ts`

## `extensions/provider-plugins/deepseek`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/deepseek`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/deepseek/api.ts`
- `extensions/deepseek/models.ts`
- `extensions/deepseek/onboard.ts`
- `extensions/deepseek/openclaw.plugin.json`
- `extensions/deepseek/package.json`
- `extensions/deepseek/provider-catalog.ts`
- `extensions/deepseek/provider.contract.test.ts`

## `extensions/provider-plugins/fal`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/fal`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/fal/image-generation-provider.test.ts`
- `extensions/fal/image-generation-provider.ts`
- `extensions/fal/index.ts`
- `extensions/fal/openclaw.plugin.json`
- `extensions/fal/package.json`
- `extensions/fal/plugin-registration.contract.test.ts`
- `extensions/fal/provider.contract.test.ts`

## `extensions/provider-plugins/opencode`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/opencode`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/opencode/api.ts`
- `extensions/opencode/index.ts`
- `extensions/opencode/onboard.test.ts`
- `extensions/opencode/onboard.ts`
- `extensions/opencode/openclaw.plugin.json`
- `extensions/opencode/package.json`
- `extensions/opencode/provider.contract.test.ts`

## `extensions/provider-plugins/opencode-go`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/opencode-go`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/opencode-go/api.ts`
- `extensions/opencode-go/index.ts`
- `extensions/opencode-go/onboard.test.ts`
- `extensions/opencode-go/onboard.ts`
- `extensions/opencode-go/openclaw.plugin.json`
- `extensions/opencode-go/package.json`
- `extensions/opencode-go/provider.contract.test.ts`

## `extensions/provider-plugins/together`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/together`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/together/api.ts`
- `extensions/together/models.ts`
- `extensions/together/onboard.ts`
- `extensions/together/openclaw.plugin.json`
- `extensions/together/package.json`
- `extensions/together/provider-catalog.ts`
- `extensions/together/provider.contract.test.ts`

## `extensions/provider-plugins/volcengine`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/volcengine`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/volcengine/api.ts`
- `extensions/volcengine/index.ts`
- `extensions/volcengine/models.ts`
- `extensions/volcengine/openclaw.plugin.json`
- `extensions/volcengine/package.json`
- `extensions/volcengine/provider-catalog.ts`
- `extensions/volcengine/provider.contract.test.ts`

## `src/agent-runtime/sandbox/backend-policy`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/backend-policy`
- Coverage: `fallback`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/sandbox/context.ts`
- `src/agents/sandbox/manage.ts`
- `src/agents/sandbox/prune.ts`
- `src/agents/sandbox/registry.ts`
- `src/agents/sandbox/runtime-status.ts`
- `src/agents/sandbox/tool-policy.test.ts`
- `src/agents/sandbox/tool-policy.ts`

## `src/agent-runtime/schema`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/schema`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/pi-tools.schema.test.ts`
- `src/agents/pi-tools.schema.ts`
- `src/agents/schema/clean-for-gemini.test.ts`
- `src/agents/schema/clean-for-gemini.ts`
- `src/agents/schema/clean-for-xai.test.ts`
- `src/agents/schema/clean-for-xai.ts`
- `src/agents/tools/browser-tool.schema.ts`

## `apps/ios-android/android-app`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/android-app`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/android/app/src/main/java/ai/openclaw/app/NodeRuntime.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/SessionKey.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/chat/ChatController.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/chat/ChatSheetContent.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/voice/MicCaptureManager.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/voice/TalkModeManager.kt`

## `docs/mintlify/providers`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/providers`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `6`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/providers/anthropic.md`
- `docs/providers/index.md`
- `docs/providers/modelstudio.md`
- `docs/providers/qwen.md`
- `docs/providers/qwen_modelstudio.md`
- `docs/providers/xai.md`

## `docs/mintlify/reference`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/reference`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `6`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/reference/memory-config.md`
- `docs/reference/secretref-credential-surface.md`
- `docs/reference/secretref-user-supplied-credentials-matrix.json`
- `docs/reference/templates/CLAUDE.md`
- `docs/reference/test.md`
- `docs/reference/wizard.md`

## `extensions/channel-plugins/tlon`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/tlon`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/tlon/package-manifest.contract.test.ts`
- `extensions/tlon/package.json`
- `extensions/tlon/src/config-schema.ts`
- `extensions/tlon/src/setup-core.ts`
- `extensions/tlon/src/urbit/base-url.ts`
- `extensions/tlon/test-api.ts`

## `extensions/memory-media-voice-plugins/deepgram`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/deepgram`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `6`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/deepgram/audio.live.test.ts`
- `extensions/deepgram/audio.test.ts`
- `extensions/deepgram/audio.ts`
- `extensions/deepgram/openclaw.plugin.json`
- `extensions/deepgram/package.json`
- `extensions/deepgram/plugin-registration.contract.test.ts`

## `extensions/provider-plugins/amazon-bedrock`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/amazon-bedrock`
- Coverage: `verified`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/amazon-bedrock/api.ts`
- `extensions/amazon-bedrock/discovery.ts`
- `extensions/amazon-bedrock/index.ts`
- `extensions/amazon-bedrock/openclaw.plugin.json`
- `extensions/amazon-bedrock/package.json`
- `extensions/amazon-bedrock/provider.contract.test.ts`

## `extensions/provider-plugins/vercel-ai-gateway`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/vercel-ai-gateway`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/vercel-ai-gateway/api.ts`
- `extensions/vercel-ai-gateway/models.ts`
- `extensions/vercel-ai-gateway/openclaw.plugin.json`
- `extensions/vercel-ai-gateway/package.json`
- `extensions/vercel-ai-gateway/provider-catalog.ts`
- `extensions/vercel-ai-gateway/provider.contract.test.ts`

## `extensions/provider-plugins/xiaomi`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/xiaomi`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/xiaomi/api.ts`
- `extensions/xiaomi/onboard.test.ts`
- `extensions/xiaomi/openclaw.plugin.json`
- `extensions/xiaomi/package.json`
- `extensions/xiaomi/provider-catalog.ts`
- `extensions/xiaomi/provider.contract.test.ts`

## `extensions/skill-plugins/diffs`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/diffs`
- Coverage: `verified`
- Changed paths: `6`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/diffs/package.json`
- `extensions/diffs/src/config.test.ts`
- `extensions/diffs/src/config.ts`
- `extensions/diffs/src/manifest.test.ts`
- `extensions/diffs/src/pierre-themes.ts`
- `extensions/diffs/src/render.ts`

## `extensions/tool-capability-plugins/duckduckgo`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/duckduckgo`
- Coverage: `verified`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/duckduckgo/bundled-web-search.contract.test.ts`
- `extensions/duckduckgo/openclaw.plugin.json`
- `extensions/duckduckgo/package.json`
- `extensions/duckduckgo/plugin-registration.contract.test.ts`
- `extensions/duckduckgo/web-search-provider.contract.test.ts`
- `extensions/duckduckgo/web-search-provider.ts`

## `extensions/tool-capability-plugins/exa`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/exa`
- Coverage: `verified`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/exa/bundled-web-search.contract.test.ts`
- `extensions/exa/openclaw.plugin.json`
- `extensions/exa/package.json`
- `extensions/exa/plugin-registration.contract.test.ts`
- `extensions/exa/web-search-provider.contract.test.ts`
- `extensions/exa/web-search-provider.ts`

## `src/shared-misc-runtime-support/test-support`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/test-support`
- Coverage: `fallback`
- Changed paths: `6`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/test-utils/channel-plugins.test.ts`
- `src/test-utils/channel-plugins.ts`
- `src/test-utils/imessage-test-plugin.ts`
- `src/test-utils/session-state-cleanup.test.ts`
- `src/test-utils/session-state-cleanup.ts`
- `src/test-utils/vitest-module-mocks.ts`

## `test-infra/profiles-and-suites/test-scripts`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/test-scripts`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `6`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `test/scripts/stage-bundled-plugin-runtime-deps.test.ts`
- `test/scripts/test-find-thread-candidates.test.ts`
- `test/scripts/test-parallel.test.ts`
- `test/scripts/test-planner.executor-fallback.test.ts`
- `test/scripts/test-planner.test.ts`
- `test/scripts/ts-topology.test.ts`

## `docs/mintlify`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify`
- Coverage: `fallback`
- Changed paths: `5`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `AGENTS.md`
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/tts.md`

## `docs/mintlify/gateway`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/gateway`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `5`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/gateway/authentication.md`
- `docs/gateway/cli-backends.md`
- `docs/gateway/configuration-reference.md`
- `docs/gateway/sandboxing.md`
- `docs/gateway/troubleshooting.md`

## `docs/mintlify/plugins`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/plugins`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `5`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/plugins/architecture.md`
- `docs/plugins/building-plugins.md`
- `docs/plugins/manifest.md`
- `docs/plugins/sdk-migration.md`
- `docs/plugins/sdk-overview.md`

## `extensions/provider-plugins/kimi-coding`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/kimi-coding`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/kimi-coding/api.ts`
- `extensions/kimi-coding/index.ts`
- `extensions/kimi-coding/openclaw.plugin.json`
- `extensions/kimi-coding/package.json`
- `extensions/kimi-coding/provider-catalog.ts`

## `extensions/provider-plugins/nvidia`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/nvidia`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/nvidia/api.ts`
- `extensions/nvidia/openclaw.plugin.json`
- `extensions/nvidia/package.json`
- `extensions/nvidia/provider-catalog.ts`
- `extensions/nvidia/provider.contract.test.ts`

## `extensions/provider-plugins/qianfan`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/qianfan`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/qianfan/api.ts`
- `extensions/qianfan/openclaw.plugin.json`
- `extensions/qianfan/package.json`
- `extensions/qianfan/provider-catalog.ts`
- `extensions/qianfan/provider.contract.test.ts`

## `extensions/skill-plugins/tlon`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/tlon`
- Coverage: `verified`
- Changed paths: `5`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/tlon/src/monitor/media.ts`
- `extensions/tlon/src/urbit/context.ts`
- `extensions/tlon/src/urbit/fetch.ts`
- `extensions/tlon/src/urbit/upload.test.ts`
- `extensions/tlon/src/urbit/upload.ts`

## `src/capability-modules/acp/translator-protocol`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/translator-protocol`
- Coverage: `verified`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/client.test.ts`
- `src/acp/client.ts`
- `src/acp/event-mapper.ts`
- `src/acp/translator.prompt-prefix.test.ts`
- `src/acp/translator.ts`

## `src/channel-abstraction/plugin-bridge`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/plugin-bridge`
- Coverage: `fallback`
- Changed paths: `5`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/mcp/channel-bridge.ts`
- `src/mcp/channel-server.test.ts`
- `src/mcp/channel-server.ts`
- `src/mcp/channel-shared.ts`
- `src/mcp/channel-tools.ts`

## `src/cli-commands/command-implementations/secret-gateway-commands`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/secret-gateway-commands`
- Coverage: `verified`
- Changed paths: `5`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/cli/command-secret-resolution.coverage.test.ts`
- `src/cli/gateway-cli/run-loop.ts`
- `src/cli/gateway-cli/run.option-collisions.test.ts`
- `src/cli/gateway-cli/run.ts`
- `src/cli/secrets-cli.test.ts`

## `src/shared-misc-runtime-support/root-entrypoints`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/root-entrypoints`
- Coverage: `verified`
- Changed paths: `5`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/extensionAPI.test.ts`
- `src/library.test.ts`
- `src/library.ts`
- `src/version.test.ts`
- `src/version.ts`

## `apps/macos/tests`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/macos/tests`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/macos/Tests/OpenClawIPCTests/GatewayEnvironmentTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayLaunchAgentManagerTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayProcessManagerTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/NodeServiceManagerTests.swift`

## `docs/mintlify/concepts`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/concepts`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/concepts/agent-loop.md`
- `docs/concepts/memory.md`
- `docs/concepts/model-providers.md`
- `docs/concepts/oauth.md`

## `extensions/auth-integration-plugins/device-pair`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/device-pair`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/device-pair/index.test.ts`
- `extensions/device-pair/index.ts`
- `extensions/device-pair/openclaw.plugin.json`
- `src/infra/device-pairing.test.ts`

## `extensions/channel-plugins/twitch`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/twitch`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/twitch/package-manifest.contract.test.ts`
- `extensions/twitch/package.json`
- `extensions/twitch/src/config-schema.ts`
- `extensions/twitch/src/types.ts`

## `extensions/memory-media-voice-plugins/memory-lancedb`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/memory-lancedb`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/memory-lancedb/index.test.ts`
- `extensions/memory-lancedb/index.ts`
- `extensions/memory-lancedb/package-manifest.contract.test.ts`
- `extensions/memory-lancedb/package.json`

## `scripts/packaging/dev`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/dev`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/dev/discord-acp-plain-language-smoke.ts`
- `scripts/dev/gateway-smoke.ts`
- `scripts/dev/ios-node-e2e.ts`
- `scripts/dev/test-device-pair-telegram.ts`

## `scripts/packaging/podman`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/podman`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `docs/install/podman.md`
- `scripts/podman/openclaw.container.in`
- `scripts/podman/setup.sh`
- `scripts/run-openclaw-podman.sh`

## `src/agent-runtime/runtime/context-subagents/context-tokens`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/context-subagents/context-tokens`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/context-window-guard.test.ts`
- `src/agents/context-window-guard.ts`
- `src/agents/context.lookup.test.ts`
- `src/agents/context.ts`

## `src/agent-runtime/sandbox/workspace-browser-ssh`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/workspace-browser-ssh`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/sandbox/browser-bridges.ts`
- `src/agents/sandbox/browser.ts`
- `src/agents/sandbox/remote-fs-bridge.ts`
- `src/agents/sandbox/ssh-backend.test.ts`

## `src/cli-commands/command-implementations/agent-command-cli`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/agent-command-cli`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/commands/agent.cli-provider.test.ts`
- `src/commands/agents.bind.commands.test.ts`
- `src/commands/agents.bind.matrix.integration.test.ts`
- `src/commands/agents.bind.test-support.ts`

## `src/config-secrets-security/secrets-resolution/gateway-cli-secret-resolution`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/gateway-cli-secret-resolution`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/command-secret-gateway.ts`
- `src/cli/command-secret-targets.test.ts`
- `src/cli/command-secret-targets.ts`
- `src/cli/message-secret-scope.test.ts`

## `src/gateway-api-surface/auth-session`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/auth-session`
- Coverage: `fallback`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/pairing/pairing-challenge.test.ts`
- `src/pairing/pairing-messages.test.ts`
- `src/pairing/pairing-store.test.ts`
- `src/pairing/setup-code.test.ts`

## `src/infra-outbound-delivery/network`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/network`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/infra/net/hostname.test.ts`
- `src/infra/net/proxy-env.test.ts`
- `src/infra/net/undici-global-dispatcher.test.ts`
- `src/infra/net/undici-global-dispatcher.ts`

## `src/infra-outbound-delivery/outbound-identity`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-identity`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/infra/outbound/directory-cache.test.ts`
- `src/infra/outbound/identity.test.ts`
- `src/infra/outbound/outbound-session.test.ts`
- `src/infra/outbound/outbound-session.ts`

## `src/plugin-runtime-sdk/plugins-runtime/runtime-loader`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugins-runtime/runtime-loader`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/plugins/manifest-registry.test.ts`
- `src/plugins/manifest-registry.ts`
- `src/plugins/runtime/index.test.ts`
- `src/plugins/runtime/index.ts`

## `ui/web-ui`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui`
- Coverage: `fallback`
- Changed paths: `4`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/src/local-storage.ts`
- `ui/src/test-helpers/lit-warnings.setup.ts`
- `ui/src/test-helpers/storage.ts`
- `ui/vitest.config.ts`

## `apps/ios-android/shared-kit`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/shared-kit`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/shared/OpenClawKit/Sources/OpenClawKit/TalkSystemSpeechSynthesizer.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawProtocol/GatewayModels.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/TalkSystemSpeechSynthesizerTests.swift`

## `apps/macos/app-sources/gateway-runtime`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/macos/app-sources/gateway-runtime`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/macos/Tests/OpenClawIPCTests/LowCoverageHelperTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/OpenClawConfigFileTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TalkModeRuntimeSpeechTests.swift`

## `extensions/auth-integration-plugins/groq`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/groq`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/groq/openclaw.plugin.json`
- `extensions/groq/package.json`
- `extensions/groq/plugin-registration.contract.test.ts`

## `extensions/memory-media-voice-plugins/talk-voice`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/talk-voice`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/talk-voice/index.test.ts`
- `extensions/talk-voice/index.ts`
- `extensions/talk-voice/openclaw.plugin.json`

## `extensions/provider-plugins/copilot-proxy`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/copilot-proxy`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/copilot-proxy/openclaw.plugin.json`
- `extensions/copilot-proxy/package.json`
- `extensions/copilot-proxy/provider.contract.test.ts`

## `extensions/tool-capability-plugins/phone-control`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/phone-control`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/phone-control/index.test.ts`
- `extensions/phone-control/index.ts`
- `extensions/phone-control/openclaw.plugin.json`

## `scripts/release-versioning/app-versions`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/release-versioning/app-versions`
- Coverage: `fallback`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `appcast.xml`
- `apps/android/app/build.gradle.kts`
- `apps/macos/Sources/OpenClaw/Resources/Info.plist`

## `src/agent-runtime/runtime/command-session-store`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/command-session-store`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/command/attempt-execution.ts`
- `src/agents/command/session-store.ts`
- `src/agents/command/session.ts`

## `src/agent-runtime/skills/install-refresh`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/skills/install-refresh`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/skills-install.download.test.ts`
- `src/agents/skills-install.ts`
- `src/agents/skills/config.ts`

## `src/channel-abstraction/bindings`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/bindings`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/channels/plugins/binding-provider.ts`
- `src/channels/plugins/binding-targets.test.ts`
- `src/channels/plugins/configured-binding-registry.ts`

## `src/channel-abstraction/routing`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/routing`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/routing/account-id.test.ts`
- `src/routing/account-lookup.test.ts`
- `src/routing/resolve-route.test.ts`

## `src/gateway-api-surface/client-call`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/client-call`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/gateway/call.test.ts`
- `src/gateway/call.ts`
- `src/gateway/client.watchdog.test.ts`

## `src/gateway-api-surface/server-runtime`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/server-runtime`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/gateway/server-close.test.ts`
- `src/gateway/server-close.ts`
- `src/gateway/server-http.ts`

## `src/infra-outbound-delivery/formatting`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/formatting`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/infra/outbound/envelope.test.ts`
- `src/infra/outbound/format.test.ts`
- `src/infra/outbound/payloads.test.ts`

## `src/shared-misc-runtime-support/compat-hooks`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/compat-hooks`
- Coverage: `fallback`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/hooks/internal-hooks.test.ts`
- `src/hooks/message-hook-mappers.test.ts`
- `src/hooks/message-hook-mappers.ts`

## `src/shared-misc-runtime-support/web-provider-root`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/web-provider-root`
- Coverage: `fallback`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/bundled-web-search-registry.ts`
- `src/web-search/runtime.test.ts`
- `src/web-search/runtime.ts`

## `ui/web-ui/styles-types`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/styles-types`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/src/styles/chat/grouped.css`
- `ui/src/styles/chat/layout.css`
- `ui/src/styles/components.css`

## `apps/ios-android/ios-app`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/ios-app`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/ios/Config/Version.xcconfig`
- `apps/ios/README.md`

## `docs/mintlify/help`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/help`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/help/faq.md`
- `docs/help/testing.md`

## `docs/mintlify/install`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/install`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/install/development-channels.md`
- `docs/install/migrating.md`

## `extensions/auth-integration-plugins/lobster`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/lobster`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/lobster/package.json`
- `extensions/lobster/src/lobster-tool.test.ts`

## `extensions/tool-capability-plugins/llm-task`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/llm-task`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/llm-task/package.json`
- `extensions/llm-task/src/llm-task-tool.test.ts`

## `scripts/release-versioning/cli-package-version`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/release-versioning/cli-package-version`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/openclaw-npm-postpublish-verify.ts`
- `scripts/openclaw-npm-release-check.ts`

## `src/agent-runtime/runtime/session-scope`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/session-scope`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/cli-session.test.ts`
- `src/agents/cli-session.ts`

## `src/capability-modules/acp/control-plane-session-manager`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/control-plane-session-manager`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/control-plane/manager.core.ts`
- `src/acp/control-plane/manager.test.ts`

## `src/capability-modules/acp/persistent-bindings`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/persistent-bindings`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/persistent-bindings.lifecycle.test.ts`
- `src/acp/persistent-bindings.test.ts`

## `src/capability-modules/context-engine`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/context-engine`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/context-engine/context-engine.test.ts`
- `src/context-engine/delegate.ts`

## `src/channel-abstraction/routing/target-resolution`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/routing/target-resolution`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/routing/session-key.continuity.test.ts`
- `src/routing/session-key.test.ts`

## `src/config-secrets-security/secrets-resolution/secret-target-registry`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-target-registry`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/secrets/credential-matrix.ts`
- `src/secrets/target-registry-data.ts`

## `src/shared-misc-runtime-support/docs-i18n-markdown`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/docs-i18n-markdown`
- Coverage: `fallback`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/markdown/whatsapp.test.ts`
- `src/scripts/docs-link-audit.test.ts`

## `docs/mintlify/automation`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/automation`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/automation/hooks.md`

## `docs/mintlify/start`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/start`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/start/wizard-cli-reference.md`

## `extensions/auth-integration-plugins/diagnostics-otel`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/diagnostics-otel`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/diagnostics-otel/package.json`

## `extensions/skill-plugins/open-prose`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/open-prose`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `extensions/open-prose/package.json`

## `extensions/tool-capability-plugins/thread-ownership`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/thread-ownership`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/thread-ownership/index.ts`

## `scripts/packaging/pre-commit`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/pre-commit`
- Coverage: `fallback`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `git-hooks/pre-commit`

## `src/agent-runtime/runtime`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/agent-command.ts`

## `src/agent-runtime/runtime/acp-spawn`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/acp-spawn`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/acp-spawn-parent-stream.test.ts`

## `src/agent-runtime/sandbox/filesystem-bridge/path-safety`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/filesystem-bridge/path-safety`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/sandbox/fs-bridge-rename-targets.ts`

## `src/agent-runtime/skills/plugin-skills`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/skills/plugin-skills`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/skills/plugin-skills.test.ts`

## `src/capability-modules/acp/secret-env-bridge`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/secret-env-bridge`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/secret-file.test.ts`

## `src/channel-abstraction/allowlists`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/allowlists`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/channels/allowlists/resolve-utils.test.ts`

## `src/config-secrets-security/secrets-resolution`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/secrets/exec-secret-ref-id-parity.test.ts`

## `src/config-secrets-security/secrets-resolution/secret-ref-contracts`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-ref-contracts`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/secrets/runtime-shared.ts`

## `src/config-secrets-security/secrets-resolution/secret-storage-audit`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-storage-audit`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/secrets/audit.test.ts`

## `src/infra-outbound-delivery/tls`

- Feature: `misc-repo-surface`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/tls`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/infra/tls/gateway.ts`

## `src/plugin-runtime-sdk/plugin-sdk/channel-sdk`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugin-sdk/channel-sdk`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/plugin-sdk/direct-dm.test.ts`

## `src/plugin-runtime-sdk/plugin-sdk/media-memory-sdk`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugin-sdk/media-memory-sdk`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/plugin-sdk/web-media.ts`

## `src/plugin-runtime-sdk/plugin-sdk/public-subpaths`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugin-sdk/public-subpaths`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/plugin-sdk/runtime-api-guardrails.test.ts`

## `src/reply-orchestration/channel-shaping`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/channel-shaping`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/chunk.test.ts`

## `src/reply-orchestration/commands/command-auth-gates`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/commands/command-auth-gates`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/command-auth.ts`

## `src/reply-orchestration/commands/command-registry-families`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/commands/command-registry-families`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/commands-registry.shared.ts`

## `test-infra/fixtures-and-helpers/mocks`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/mocks`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `src/commands/agent.test.ts`

## `ui/provider-channel-settings/web-settings/config-form-rendering`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/provider-channel-settings/web-settings/config-form-rendering`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/src/ui/app-settings.test.ts`

## `ui/web-ui/i18n`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/i18n`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/src/i18n/test/translate.test.ts`
