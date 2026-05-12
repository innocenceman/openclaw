# Leaf Impact Mapping

本报告聚焦最终 leaf。Canonical mapping: `leaf-impact.json`。

## `docs/generated-baselines/bundled-plugin-metadata`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/generated-baselines/bundled-plugin-metadata`
- Coverage: `verified`
- Changed paths: `1763`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `extensions/AGENTS.md`
- `extensions/active-memory/config.test.ts`
- `extensions/active-memory/index.test.ts`
- `extensions/active-memory/index.ts`
- `extensions/active-memory/openclaw.plugin.json`
- `extensions/alibaba/openclaw.plugin.json`
- `extensions/alibaba/package.json`
- `extensions/alibaba/plugin-registration.contract.test.ts`
- `extensions/alibaba/video-generation-provider.test.ts`
- `extensions/amazon-bedrock-mantle/discovery.ts`
- `extensions/amazon-bedrock-mantle/index.test.ts`
- `extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.ts`
- `extensions/amazon-bedrock-mantle/openclaw.plugin.json`
- `extensions/amazon-bedrock-mantle/package.json`
- `extensions/anthropic-vertex/index.test.ts`
- `extensions/anthropic-vertex/openclaw.plugin.json`
- `extensions/anthropic-vertex/package.json`
- `extensions/anthropic-vertex/region.adc.test.ts`
- `extensions/arcee/index.test.ts`
- `extensions/arcee/onboard.ts`
- `extensions/arcee/openclaw.plugin.json`
- `extensions/arcee/package.json`
- `extensions/arcee/provider-catalog.ts`
- `extensions/azure-speech/azure-speech.live.test.ts`
- `extensions/azure-speech/index.ts`
- `extensions/azure-speech/openclaw.plugin.json`
- `extensions/azure-speech/package.json`
- `extensions/azure-speech/speech-provider.test.ts`
- `extensions/azure-speech/speech-provider.ts`
- `extensions/azure-speech/tsconfig.json`
- `extensions/azure-speech/tts.test.ts`
- `extensions/azure-speech/tts.ts`
- `extensions/bonjour/index.test.ts`
- `extensions/bonjour/index.ts`
- `extensions/bonjour/manifest.test.ts`
- `extensions/bonjour/openclaw.plugin.json`
- `extensions/bonjour/package.json`
- `extensions/bonjour/src/advertiser.test.ts`
- `extensions/bonjour/src/advertiser.ts`
- `extensions/bonjour/src/ciao.test.ts`
- `extensions/bonjour/src/ciao.ts`
- `extensions/browser/cli-metadata.ts`
- `extensions/browser/index.test.ts`
- `extensions/browser/openclaw.plugin.json`
- `extensions/browser/package.json`
- `extensions/browser/plugin-registration.ts`
- `extensions/browser/register.runtime.ts`
- `extensions/browser/runtime-api.ts`
- `extensions/browser/skills/browser-automation/SKILL.md`
- `extensions/browser/src/browser-control-state.ts`
- ... 1713 more paths in `leaf-impact.json`

## `extensions/channel-plugins/discord`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/discord`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `406`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/discord/account-inspect-api.ts`
- `extensions/discord/api.ts`
- `extensions/discord/config-api.ts`
- `extensions/discord/index.test.ts`
- `extensions/discord/openclaw.plugin.json`
- `extensions/discord/package.json`
- `extensions/discord/runtime-api.actions.ts`
- `extensions/discord/runtime-api.lookup.ts`
- `extensions/discord/runtime-api.monitor.ts`
- `extensions/discord/runtime-api.send.ts`
- `extensions/discord/runtime-api.threads.ts`
- `extensions/discord/runtime-api.ts`
- `extensions/discord/runtime-setter-api.ts`
- `extensions/discord/src/account-inspect.test.ts`
- `extensions/discord/src/account-inspect.ts`
- `extensions/discord/src/accounts.test.ts`
- `extensions/discord/src/accounts.ts`
- `extensions/discord/src/actions/handle-action.test.ts`
- `extensions/discord/src/actions/handle-action.ts`
- `extensions/discord/src/actions/runtime.guild.ts`
- `extensions/discord/src/actions/runtime.messaging.messages.ts`
- `extensions/discord/src/actions/runtime.messaging.reactions.ts`
- `extensions/discord/src/actions/runtime.messaging.runtime.ts`
- `extensions/discord/src/actions/runtime.messaging.send.ts`
- `extensions/discord/src/actions/runtime.messaging.shared.ts`
- `extensions/discord/src/actions/runtime.messaging.ts`
- `extensions/discord/src/actions/runtime.moderation.authz.test.ts`
- `extensions/discord/src/actions/runtime.moderation.ts`
- `extensions/discord/src/actions/runtime.presence.test.ts`
- `extensions/discord/src/actions/runtime.presence.ts`
- `extensions/discord/src/actions/runtime.shared.ts`
- `extensions/discord/src/actions/runtime.test.ts`
- `extensions/discord/src/actions/runtime.ts`
- `extensions/discord/src/api-barrel.test.ts`
- `extensions/discord/src/api.test.ts`
- `extensions/discord/src/api.ts`
- `extensions/discord/src/approval-handler.runtime.ts`
- `extensions/discord/src/approval-native.test.ts`
- `extensions/discord/src/approval-native.ts`
- `extensions/discord/src/approval-runtime.ts`
- `extensions/discord/src/approval-shared.ts`
- `extensions/discord/src/audit-core.ts`
- `extensions/discord/src/audit.test.ts`
- `extensions/discord/src/audit.ts`
- `extensions/discord/src/channel-actions.contract.test.ts`
- `extensions/discord/src/channel-actions.test.ts`
- `extensions/discord/src/channel-actions.ts`
- `extensions/discord/src/channel-api.ts`
- `extensions/discord/src/channel.conversation.ts`
- `extensions/discord/src/channel.loaders.ts`
- ... 356 more paths in `leaf-impact.json`

## `src/agent-runtime/runtime/command-entrypoint`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/command-entrypoint`
- Coverage: `fallback`
- Changed paths: `362`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/agent-delete-safety.ts`
- `src/agents/agent-runtime-config.ts`
- `src/agents/agent-runtime-metadata.ts`
- `src/agents/agent-runtime-policy.ts`
- `src/agents/agent-scope-config.ts`
- `src/agents/announce-idempotency.ts`
- `src/agents/anthropic-payload-log.ts`
- `src/agents/anthropic-transport-stream.live.test.ts`
- `src/agents/anthropic-transport-stream.test.ts`
- `src/agents/anthropic-transport-stream.ts`
- `src/agents/anthropic-vertex-stream.ts`
- `src/agents/anthropic.setup-token.live.test.ts`
- `src/agents/auth-health.test.ts`
- `src/agents/auth-health.ts`
- `src/agents/auth-profile-runtime-contract.test.ts`
- `src/agents/bootstrap-budget.test.ts`
- `src/agents/bootstrap-budget.ts`
- `src/agents/bootstrap-cache.test.ts`
- `src/agents/bootstrap-cache.ts`
- `src/agents/bootstrap-files.test.ts`
- `src/agents/bootstrap-files.ts`
- `src/agents/bootstrap-mode.test.ts`
- `src/agents/bootstrap-mode.ts`
- `src/agents/btw-transcript.ts`
- `src/agents/btw.test.ts`
- `src/agents/btw.ts`
- `src/agents/bundle-mcp-config.test.ts`
- `src/agents/bundle-mcp-config.ts`
- `src/agents/bundle-mcp.test-harness.ts`
- `src/agents/cache-trace.test.ts`
- `src/agents/cache-trace.ts`
- `src/agents/channel-tools.ts`
- `src/agents/chutes-oauth.ts`
- `src/agents/cli-auth-epoch.test.ts`
- `src/agents/cli-auth-epoch.ts`
- `src/agents/cli-credentials.test.ts`
- `src/agents/cli-credentials.ts`
- `src/agents/cli-output.test.ts`
- `src/agents/cli-output.ts`
- `src/agents/codex-app-server.extensions.test.ts`
- `src/agents/codex-native-web-search-core.ts`
- `src/agents/codex-native-web-search.ts`
- `src/agents/compaction-real-conversation.ts`
- `src/agents/compaction.tool-result-details.test.ts`
- `src/agents/compaction.ts`
- `src/agents/configured-provider-fallback.ts`
- `src/agents/copilot-dynamic-headers.ts`
- `src/agents/docs-path.test.ts`
- `src/agents/docs-path.ts`
- `src/agents/embedded-pi-lsp.ts`
- ... 312 more paths in `leaf-impact.json`

## `apps/ios-android/android-app/runtime-gateway-node`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/android-app/runtime-gateway-node`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `333`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/NodeForegroundServiceTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/NotificationForwardingPolicyTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsNotificationForwardingTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/CalendarHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/CallLogHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/ConnectionManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/ContactsHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/DeviceHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/DeviceNotificationListenerServiceTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/InvokeCommandRegistryTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/InvokeDispatcherTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/MotionHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/NodePresenceAliveBeaconTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/NotificationsHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/PhotosHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/SmsManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/SystemHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/protocol/OpenClawProtocolConstantsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/GatewayConfigResolverTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/chat/ChatSheetContentTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkDirectiveParserTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkModeConfigParsingTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkModeManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkSpeakClientTest.kt`
- `src/gateway/agent-command.test-helpers.ts`
- `src/gateway/agent-list.ts`
- `src/gateway/android-node.capabilities.live.test.ts`
- `src/gateway/assistant-identity.test.ts`
- `src/gateway/assistant-identity.ts`
- `src/gateway/auth-config-utils.ts`
- `src/gateway/auth-rate-limit.ts`
- `src/gateway/auth-resolve.ts`
- `src/gateway/auth-token-resolution.ts`
- `src/gateway/canvas-capability.ts`
- `src/gateway/canvas-documents.ts`
- `src/gateway/chat-abort.ts`
- `src/gateway/chat-attachments.test.ts`
- `src/gateway/chat-attachments.ts`
- `src/gateway/chat-display-projection.ts`
- `src/gateway/cli-session-history.claude.ts`
- `src/gateway/cli-session-history.test.ts`
- `src/gateway/cli-session-history.ts`
- `src/gateway/client-bootstrap.test.ts`
- `src/gateway/client-bootstrap.ts`
- `src/gateway/client-callsites.guard.test.ts`
- `src/gateway/client-start-readiness.test.ts`
- `src/gateway/client-start-readiness.ts`
- ... 283 more paths in `leaf-impact.json`

## `extensions/channel-plugins/telegram`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/telegram`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `325`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/telegram/api.ts`
- `extensions/telegram/config-api.ts`
- `extensions/telegram/doctor-contract-api.ts`
- `extensions/telegram/index.test.ts`
- `extensions/telegram/openclaw.plugin.json`
- `extensions/telegram/package.json`
- `extensions/telegram/runtime-api.ts`
- `extensions/telegram/src/account-config.ts`
- `extensions/telegram/src/account-inspect.test.ts`
- `extensions/telegram/src/account-inspect.ts`
- `extensions/telegram/src/account-selection.ts`
- `extensions/telegram/src/accounts.test.ts`
- `extensions/telegram/src/accounts.ts`
- `extensions/telegram/src/action-runtime.test.ts`
- `extensions/telegram/src/action-runtime.ts`
- `extensions/telegram/src/api-fetch.ts`
- `extensions/telegram/src/api-logging.ts`
- `extensions/telegram/src/api-root.test.ts`
- `extensions/telegram/src/api-root.ts`
- `extensions/telegram/src/approval-callback-data.ts`
- `extensions/telegram/src/approval-handler.runtime.ts`
- `extensions/telegram/src/approval-native.test.ts`
- `extensions/telegram/src/approval-native.ts`
- `extensions/telegram/src/audit.ts`
- `extensions/telegram/src/audit.types.ts`
- `extensions/telegram/src/auto-topic-label-config.ts`
- `extensions/telegram/src/auto-topic-label.ts`
- `extensions/telegram/src/bot-access.ts`
- `extensions/telegram/src/bot-core.ts`
- `extensions/telegram/src/bot-deps.ts`
- `extensions/telegram/src/bot-handlers.media.ts`
- `extensions/telegram/src/bot-handlers.runtime.ts`
- `extensions/telegram/src/bot-handlers.ts`
- `extensions/telegram/src/bot-info.ts`
- `extensions/telegram/src/bot-message-context.acp-bindings.test.ts`
- `extensions/telegram/src/bot-message-context.audio-transcript.test-support.ts`
- `extensions/telegram/src/bot-message-context.body.test.ts`
- `extensions/telegram/src/bot-message-context.body.ts`
- `extensions/telegram/src/bot-message-context.dm-threads.test.ts`
- `extensions/telegram/src/bot-message-context.dm-topic-threadid.test.ts`
- `extensions/telegram/src/bot-message-context.named-account-dm.test-support.ts`
- `extensions/telegram/src/bot-message-context.require-mention.test.ts`
- `extensions/telegram/src/bot-message-context.route-test-support.ts`
- `extensions/telegram/src/bot-message-context.runtime.ts`
- `extensions/telegram/src/bot-message-context.session-recreate.test-support.ts`
- `extensions/telegram/src/bot-message-context.session.runtime.ts`
- `extensions/telegram/src/bot-message-context.session.ts`
- `extensions/telegram/src/bot-message-context.test-harness.ts`
- `extensions/telegram/src/bot-message-context.thread-binding.test.ts`
- `extensions/telegram/src/bot-message-context.topic-agentid.test.ts`
- ... 275 more paths in `leaf-impact.json`

## `src/shared-misc-runtime-support/shared-primitives`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/shared-primitives`
- Coverage: `verified`
- Changed paths: `307`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/chat/canvas-render.ts`
- `src/chat/tool-content.ts`
- `src/infra/agent-events.test.ts`
- `src/infra/agent-events.ts`
- `src/infra/approval-gateway-resolver.ts`
- `src/infra/approval-handler-bootstrap.test.ts`
- `src/infra/approval-handler-bootstrap.ts`
- `src/infra/approval-handler-runtime.ts`
- `src/infra/approval-native-route-coordinator.test.ts`
- `src/infra/approval-native-route-coordinator.ts`
- `src/infra/approval-native-route-notice.ts`
- `src/infra/approval-native-runtime.ts`
- `src/infra/approval-native-target-key.test.ts`
- `src/infra/approval-native-target-key.ts`
- `src/infra/approval-request-account-binding.ts`
- `src/infra/approval-turn-source.test.ts`
- `src/infra/approval-turn-source.ts`
- `src/infra/approval-view-model.ts`
- `src/infra/approval-view-model.types.ts`
- `src/infra/archive.test.ts`
- `src/infra/archive.ts`
- `src/infra/backup-create.test.ts`
- `src/infra/backup-create.ts`
- `src/infra/boundary-path.ts`
- `src/infra/brew.test.ts`
- `src/infra/brew.ts`
- `src/infra/browser-open.test.ts`
- `src/infra/browser-open.ts`
- `src/infra/build-stamp.test.ts`
- `src/infra/channel-approval-auth.ts`
- `src/infra/channel-summary.ts`
- `src/infra/clawhub-spec.ts`
- `src/infra/clawhub.test.ts`
- `src/infra/clawhub.ts`
- `src/infra/command-analysis/explain.test.ts`
- `src/infra/command-analysis/explain.ts`
- `src/infra/command-analysis/inline-eval.test.ts`
- `src/infra/command-analysis/inline-eval.ts`
- `src/infra/command-analysis/policy.ts`
- `src/infra/command-analysis/risks.test.ts`
- `src/infra/command-analysis/risks.ts`
- `src/infra/command-carriers.ts`
- `src/infra/command-explainer/extract.test.ts`
- `src/infra/command-explainer/extract.ts`
- `src/infra/command-explainer/index.ts`
- `src/infra/command-explainer/tree-sitter-runtime.ts`
- `src/infra/command-explainer/types.ts`
- `src/infra/container-environment.ts`
- `src/infra/detect-package-manager.ts`
- `src/infra/device-bootstrap.test.ts`
- ... 257 more paths in `leaf-impact.json`

## `src/cli-commands/command-implementations/maintenance-commands`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/maintenance-commands`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `242`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/argv-invocation.ts`
- `src/cli/capability-cli.test.ts`
- `src/cli/capability-cli.ts`
- `src/cli/channel-auth.test.ts`
- `src/cli/channel-auth.ts`
- `src/cli/channel-options.test.ts`
- `src/cli/channel-options.ts`
- `src/cli/channels-cli.ts`
- `src/cli/cli-name.ts`
- `src/cli/cli-utils.test.ts`
- `src/cli/cli-utils.ts`
- `src/cli/command-bootstrap.test.ts`
- `src/cli/command-bootstrap.ts`
- `src/cli/command-catalog.ts`
- `src/cli/command-execution-startup.test.ts`
- `src/cli/command-execution-startup.ts`
- `src/cli/command-path-matches.ts`
- `src/cli/command-path-policy.test.ts`
- `src/cli/command-path-policy.ts`
- `src/cli/command-registration-policy.test.ts`
- `src/cli/command-registration-policy.ts`
- `src/cli/command-startup-policy.test.ts`
- `src/cli/command-startup-policy.ts`
- `src/cli/completion-cli.ts`
- `src/cli/completion-cli.write-state.test.ts`
- `src/cli/completion-runtime.ts`
- `src/cli/config-cli.test.ts`
- `src/cli/config-cli.ts`
- `src/cli/config-set-input.ts`
- `src/cli/config-set-parser.ts`
- `src/cli/container-target.test.ts`
- `src/cli/container-target.ts`
- `src/cli/cron-cli.test.ts`
- `src/cli/cron-cli/register.cron-add.ts`
- `src/cli/cron-cli/register.cron-edit.ts`
- `src/cli/cron-cli/register.ts`
- `src/cli/cron-cli/shared.test.ts`
- `src/cli/cron-cli/shared.ts`
- `src/cli/cron-cli/thread-id-shared.ts`
- `src/cli/daemon-cli.coverage.test.ts`
- `src/cli/debug-timing.test.ts`
- `src/cli/debug-timing.ts`
- `src/cli/deps.test.ts`
- `src/cli/deps.ts`
- `src/cli/devices-cli.test.ts`
- `src/cli/devices-cli.ts`
- `src/cli/directory-cli.test.ts`
- `src/cli/directory-cli.ts`
- `src/cli/dns-cli.ts`
- `src/cli/exec-approvals-cli.ts`
- ... 192 more paths in `leaf-impact.json`

## `docs/mintlify/.generated`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/.generated`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `228`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/.generated/config-baseline.sha256`
- `docs/.generated/plugin-sdk-api-baseline.sha256`
- `docs/docs.json`
- `scripts/copy-bundled-plugin-metadata.mjs`
- `src/plugin-sdk/AGENTS.md`
- `src/plugin-sdk/access-groups.ts`
- `src/plugin-sdk/acp-runtime-backend.ts`
- `src/plugin-sdk/acp-runtime.test.ts`
- `src/plugin-sdk/acp-runtime.ts`
- `src/plugin-sdk/agent-harness-runtime.test.ts`
- `src/plugin-sdk/agent-harness-runtime.ts`
- `src/plugin-sdk/agent-runtime-test-contracts.ts`
- `src/plugin-sdk/agent-runtime.ts`
- `src/plugin-sdk/allowlist-config-edit.ts`
- `src/plugin-sdk/approval-native-helpers.test.ts`
- `src/plugin-sdk/approval-native-helpers.ts`
- `src/plugin-sdk/approval-reply-runtime.ts`
- `src/plugin-sdk/async-lock-runtime.ts`
- `src/plugin-sdk/browser-config-runtime.ts`
- `src/plugin-sdk/browser-config-support.ts`
- `src/plugin-sdk/browser-config.ts`
- `src/plugin-sdk/browser-maintenance.test.ts`
- `src/plugin-sdk/browser-maintenance.ts`
- `src/plugin-sdk/browser-node-runtime.ts`
- `src/plugin-sdk/browser-profiles.ts`
- `src/plugin-sdk/browser-security-runtime.ts`
- `src/plugin-sdk/browser-setup-tools.ts`
- `src/plugin-sdk/browser-support.ts`
- `src/plugin-sdk/browser-trash.ts`
- `src/plugin-sdk/bundled-channel-config-schema.ts`
- `src/plugin-sdk/cli-backend.ts`
- `src/plugin-sdk/cli-runtime.ts`
- `src/plugin-sdk/command-auth-native.ts`
- `src/plugin-sdk/command-auth.test.ts`
- `src/plugin-sdk/command-auth.ts`
- `src/plugin-sdk/command-status.runtime.test.ts`
- `src/plugin-sdk/command-status.runtime.ts`
- `src/plugin-sdk/command-surface.ts`
- `src/plugin-sdk/compat.ts`
- `src/plugin-sdk/concurrency-runtime.ts`
- `src/plugin-sdk/config-mutation.ts`
- `src/plugin-sdk/config-runtime.ts`
- `src/plugin-sdk/config-schema.ts`
- `src/plugin-sdk/config-types.ts`
- `src/plugin-sdk/conversation-runtime.ts`
- `src/plugin-sdk/core.test.ts`
- `src/plugin-sdk/core.ts`
- `src/plugin-sdk/cron-store-runtime.ts`
- `src/plugin-sdk/dedupe-runtime.ts`
- `src/plugin-sdk/delivery-queue-runtime.test.ts`
- ... 178 more paths in `leaf-impact.json`

## `scripts/packaging/root-scripts`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/root-scripts`
- Coverage: `fallback`
- Changed paths: `163`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `Makefile`
- `fix2.py`
- `scripts/bench-cli-startup.ts`
- `scripts/bench-gateway-startup.ts`
- `scripts/blacksmith-testbox-runner.mjs`
- `scripts/blacksmith-testbox-state.mjs`
- `scripts/build-all.mjs`
- `scripts/build-stamp.d.mts`
- `scripts/build-stamp.mjs`
- `scripts/canvas-a2ui-copy.ts`
- `scripts/changed-lanes.mjs`
- `scripts/check-architecture-smells.mjs`
- `scripts/check-changed.mjs`
- `scripts/check-changelog-attributions.mjs`
- `scripts/check-cli-bootstrap-imports.mjs`
- `scripts/check-codex-app-server-protocol.ts`
- `scripts/check-deadcode-unused-files.mjs`
- `scripts/check-deprecated-internal-config-api.mjs`
- `scripts/check-deprecated-jsdoc.mjs`
- `scripts/check-docker-e2e-boundaries.mjs`
- `scripts/check-docs-mdx.mjs`
- `scripts/check-duplicates.mjs`
- `scripts/check-extension-plugin-sdk-boundary.mjs`
- `scripts/check-extension-wildcard-reexports.mjs`
- `scripts/check-gateway-cpu-scenarios.mjs`
- `scripts/check-gateway-watch-regression.mjs`
- `scripts/check-live-cache.ts`
- `scripts/check-no-extension-test-core-imports.ts`
- `scripts/check-no-monolithic-plugin-sdk-entry-imports.ts`
- `scripts/check-no-raw-channel-fetch.mjs`
- `scripts/check-no-raw-http2-imports.mjs`
- `scripts/check-no-runtime-action-load-config.mjs`
- `scripts/check-openclaw-package-tarball.mjs`
- `scripts/check-package-dist-imports.mjs`
- `scripts/check-plugin-gateway-gauntlet.mjs`
- `scripts/check-plugin-npm-runtime-builds.mjs`
- `scripts/check-plugin-sdk-subpath-exports.mjs`
- `scripts/check-plugin-sdk-wildcard-reexports.mjs`
- `scripts/check-runtime-sidecar-loaders.mjs`
- `scripts/check-sdk-package-extension-import-boundary.mjs`
- `scripts/check-src-extension-import-boundary.mjs`
- `scripts/check-tsgo-core-boundary.mjs`
- `scripts/check-web-fetch-provider-boundaries.mjs`
- `scripts/check-workflows.mjs`
- `scripts/check.mjs`
- `scripts/ci-changed-scope.mjs`
- `scripts/ci-docker-pull-retry.sh`
- `scripts/ci-hydrate-live-auth.sh`
- `scripts/ci-hydrate-testbox-env.sh`
- `scripts/ci-live-command-retry.sh`
- ... 113 more paths in `leaf-impact.json`

## `src/cli-commands/command-implementations/config-doctor-commands`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/config-doctor-commands`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `162`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/commands/configure.commands.ts`
- `src/commands/configure.daemon.test.ts`
- `src/commands/configure.daemon.ts`
- `src/commands/configure.gateway-auth.prompt-auth-config.test.ts`
- `src/commands/configure.gateway-auth.ts`
- `src/commands/configure.ts`
- `src/commands/configure.wizard.test.ts`
- `src/commands/configure.wizard.ts`
- `src/commands/daemon-install-helpers.test.ts`
- `src/commands/daemon-install-helpers.ts`
- `src/commands/doctor-auth-flat-profiles.test.ts`
- `src/commands/doctor-auth-flat-profiles.ts`
- `src/commands/doctor-auth-profile-config.ts`
- `src/commands/doctor-auth.ts`
- `src/commands/doctor-bundled-plugin-runtime-deps.test.ts`
- `src/commands/doctor-bundled-plugin-runtime-deps.ts`
- `src/commands/doctor-claude-cli.test.ts`
- `src/commands/doctor-claude-cli.ts`
- `src/commands/doctor-command-owner.test.ts`
- `src/commands/doctor-command-owner.ts`
- `src/commands/doctor-config-flow.test.ts`
- `src/commands/doctor-config-flow.ts`
- `src/commands/doctor-config-preflight.test.ts`
- `src/commands/doctor-config-preflight.ts`
- `src/commands/doctor-cron-dreaming-payload-migration.constants-drift.test.ts`
- `src/commands/doctor-cron-dreaming-payload-migration.ts`
- `src/commands/doctor-cron-legacy-delivery.ts`
- `src/commands/doctor-cron.test.ts`
- `src/commands/doctor-cron.ts`
- `src/commands/doctor-device-pairing.test.ts`
- `src/commands/doctor-device-pairing.ts`
- `src/commands/doctor-format.ts`
- `src/commands/doctor-gateway-daemon-flow.test.ts`
- `src/commands/doctor-gateway-daemon-flow.ts`
- `src/commands/doctor-gateway-health.test.ts`
- `src/commands/doctor-gateway-health.ts`
- `src/commands/doctor-gateway-services.test.ts`
- `src/commands/doctor-gateway-services.ts`
- `src/commands/doctor-install.ts`
- `src/commands/doctor-memory-search.test.ts`
- `src/commands/doctor-memory-search.ts`
- `src/commands/doctor-plugin-manifests.test.ts`
- `src/commands/doctor-plugin-manifests.ts`
- `src/commands/doctor-plugin-registry.test.ts`
- `src/commands/doctor-plugin-registry.ts`
- `src/commands/doctor-prompter.test.ts`
- `src/commands/doctor-prompter.ts`
- `src/commands/doctor-sandbox.ts`
- `src/commands/doctor-sandbox.warns-sandbox-enabled-without-docker.test.ts`
- `src/commands/doctor-security.test.ts`
- ... 112 more paths in `leaf-impact.json`

## `test-infra/profiles-and-suites/config-and-runner`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/config-and-runner`
- Coverage: `fallback`
- Changed paths: `159`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `.agents/skills/blacksmith-testbox/SKILL.md`
- `.agents/skills/clawsweeper/SKILL.md`
- `.agents/skills/clawsweeper/agents/openai.yaml`
- `.agents/skills/crabbox/SKILL.md`
- `.agents/skills/discord-clawd/SKILL.md`
- `.agents/skills/discord-clawd/agents/openai.yaml`
- `.agents/skills/gitcrawl/SKILL.md`
- `.agents/skills/gitcrawl/agents/openai.yaml`
- `.agents/skills/openclaw-parallels-smoke/SKILL.md`
- `.agents/skills/openclaw-pr-maintainer/SKILL.md`
- `.agents/skills/openclaw-pre-release-plugin-testing/SKILL.md`
- `.agents/skills/openclaw-pre-release-plugin-testing/agents/openai.yaml`
- `.agents/skills/openclaw-qa-testing/SKILL.md`
- `.agents/skills/openclaw-release-maintainer/SKILL.md`
- `.agents/skills/openclaw-small-bugfix-sweep/SKILL.md`
- `.agents/skills/openclaw-test-heap-leaks/SKILL.md`
- `.agents/skills/openclaw-test-performance/SKILL.md`
- `.agents/skills/openclaw-test-performance/agents/openai.yaml`
- `.agents/skills/openclaw-testing/SKILL.md`
- `.agents/skills/openclaw-testing/agents/openai.yaml`
- `.agents/skills/tag-duplicate-prs-issues/SKILL.md`
- `.agents/skills/tag-duplicate-prs-issues/agents/openai.yaml`
- `.codex`
- `.crabbox.yaml`
- `.detect-secrets.cfg`
- `.dockerignore`
- `.env.example`
- `.github/CODEOWNERS`
- `.github/actionlint.yaml`
- `.github/actions/docker-e2e-plan/action.yml`
- `.github/actions/setup-node-env/action.yml`
- `.github/codeql/codeql-actions-critical-security.yml`
- `.github/codeql/codeql-agent-runtime-boundary-critical-quality.yml`
- `.github/codeql/codeql-android-critical-security.yml`
- `.github/codeql/codeql-channel-runtime-boundary-critical-quality.yml`
- `.github/codeql/codeql-channel-runtime-boundary-critical-security.yml`
- `.github/codeql/codeql-config-boundary-critical-quality.yml`
- `.github/codeql/codeql-core-auth-secrets-critical-quality.yml`
- `.github/codeql/codeql-core-auth-secrets-critical-security.yml`
- `.github/codeql/codeql-gateway-runtime-boundary-critical-quality.yml`
- `.github/codeql/codeql-javascript-typescript.yml`
- `.github/codeql/codeql-macos-critical-security.yml`
- `.github/codeql/codeql-mcp-process-runtime-boundary-critical-quality.yml`
- `.github/codeql/codeql-mcp-process-tool-boundary-critical-security.yml`
- `.github/codeql/codeql-memory-runtime-boundary-critical-quality.yml`
- `.github/codeql/codeql-network-ssrf-boundary-critical-security.yml`
- `.github/codeql/codeql-plugin-boundary-critical-quality.yml`
- `.github/codeql/codeql-plugin-sdk-package-contract-critical-quality.yml`
- `.github/codeql/codeql-plugin-sdk-reply-runtime-critical-quality.yml`
- `.github/codeql/codeql-plugin-trust-boundary-critical-security.yml`
- ... 109 more paths in `leaf-impact.json`

## `extensions/channel-plugins/slack`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/slack`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `154`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/slack/account-inspect-api.ts`
- `extensions/slack/api.ts`
- `extensions/slack/config-api.ts`
- `extensions/slack/index.test.ts`
- `extensions/slack/openclaw.plugin.json`
- `extensions/slack/package.json`
- `extensions/slack/runtime-api.ts`
- `extensions/slack/src/account-reply-mode.ts`
- `extensions/slack/src/account-surface-fields.ts`
- `extensions/slack/src/accounts.test.ts`
- `extensions/slack/src/accounts.ts`
- `extensions/slack/src/action-runtime.test.ts`
- `extensions/slack/src/action-runtime.ts`
- `extensions/slack/src/action-threading.test.ts`
- `extensions/slack/src/actions.blocks.test.ts`
- `extensions/slack/src/actions.download-file.test.ts`
- `extensions/slack/src/actions.reactions.test.ts`
- `extensions/slack/src/actions.read.test.ts`
- `extensions/slack/src/actions.ts`
- `extensions/slack/src/approval-auth.ts`
- `extensions/slack/src/approval-handler.runtime.test.ts`
- `extensions/slack/src/approval-handler.runtime.ts`
- `extensions/slack/src/approval-native.test.ts`
- `extensions/slack/src/approval-native.ts`
- `extensions/slack/src/blocks-render.ts`
- `extensions/slack/src/blocks.test-helpers.ts`
- `extensions/slack/src/channel-actions-setup-status.contract.test.ts`
- `extensions/slack/src/channel-actions.ts`
- `extensions/slack/src/channel-api.ts`
- `extensions/slack/src/channel-migration.ts`
- `extensions/slack/src/channel.setup.ts`
- `extensions/slack/src/channel.test.ts`
- `extensions/slack/src/channel.ts`
- `extensions/slack/src/client-options.ts`
- `extensions/slack/src/config-schema.test.ts`
- `extensions/slack/src/config-ui-hints.ts`
- `extensions/slack/src/directory-config.ts`
- `extensions/slack/src/directory-contract.test.ts`
- `extensions/slack/src/directory-live.ts`
- `extensions/slack/src/doctor-contract.ts`
- `extensions/slack/src/doctor.ts`
- `extensions/slack/src/draft-stream.test.ts`
- `extensions/slack/src/draft-stream.ts`
- `extensions/slack/src/edit-text.ts`
- `extensions/slack/src/exec-approvals.test.ts`
- `extensions/slack/src/exec-approvals.ts`
- `extensions/slack/src/format.ts`
- `extensions/slack/src/http/handler.runtime.ts`
- `extensions/slack/src/http/plugin-routes.test.ts`
- `extensions/slack/src/inbound-context.contract.test.ts`
- ... 104 more paths in `leaf-impact.json`

## `src/agent-runtime/pi-runner/core-run-loop`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/core-run-loop`
- Coverage: `verified`
- Changed paths: `152`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts`
- `src/agents/pi-embedded-runner.e2e.test.ts`
- `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts`
- `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts`
- `src/agents/pi-embedded-runner.guard.test.ts`
- `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts`
- `src/agents/pi-embedded-runner.run-embedded-pi-agent.auth-profile-rotation.e2e.test.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.test-harness.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.test.ts`
- `src/agents/pi-embedded-runner.ts`
- `src/agents/pi-embedded-runner/aliases.test.ts`
- `src/agents/pi-embedded-runner/cache-ttl.ts`
- `src/agents/pi-embedded-runner/compact-reasons.test.ts`
- `src/agents/pi-embedded-runner/compact-reasons.ts`
- `src/agents/pi-embedded-runner/compact.hooks.harness.ts`
- `src/agents/pi-embedded-runner/compact.hooks.test.ts`
- `src/agents/pi-embedded-runner/compact.queued.ts`
- `src/agents/pi-embedded-runner/compact.runtime.ts`
- `src/agents/pi-embedded-runner/compact.ts`
- `src/agents/pi-embedded-runner/compact.types.ts`
- `src/agents/pi-embedded-runner/compaction-duplicate-user-messages.test.ts`
- `src/agents/pi-embedded-runner/compaction-duplicate-user-messages.ts`
- `src/agents/pi-embedded-runner/compaction-hooks.ts`
- `src/agents/pi-embedded-runner/compaction-runtime-context.ts`
- `src/agents/pi-embedded-runner/compaction-successor-transcript.test.ts`
- `src/agents/pi-embedded-runner/compaction-successor-transcript.ts`
- `src/agents/pi-embedded-runner/context-engine-maintenance.test.ts`
- `src/agents/pi-embedded-runner/context-engine-maintenance.ts`
- `src/agents/pi-embedded-runner/context-truncation-notice.ts`
- `src/agents/pi-embedded-runner/delivery-evidence.ts`
- `src/agents/pi-embedded-runner/effective-tool-policy.test.ts`
- `src/agents/pi-embedded-runner/effective-tool-policy.ts`
- `src/agents/pi-embedded-runner/empty-assistant-turn.ts`
- `src/agents/pi-embedded-runner/failure-signal.test.ts`
- `src/agents/pi-embedded-runner/failure-signal.ts`
- `src/agents/pi-embedded-runner/history.test.ts`
- `src/agents/pi-embedded-runner/history.ts`
- `src/agents/pi-embedded-runner/lanes.test.ts`
- `src/agents/pi-embedded-runner/lanes.ts`
- `src/agents/pi-embedded-runner/manual-compaction-boundary.test.ts`
- `src/agents/pi-embedded-runner/manual-compaction-boundary.ts`
- `src/agents/pi-embedded-runner/model.forward-compat.errors-and-overrides.test.ts`
- `src/agents/pi-embedded-runner/model.forward-compat.test.ts`
- `src/agents/pi-embedded-runner/model.inline-provider.ts`
- `src/agents/pi-embedded-runner/model.provider-runtime.test-support.ts`
- `src/agents/pi-embedded-runner/model.skip-pi-discovery-hooks.test.ts`
- `src/agents/pi-embedded-runner/model.startup-retry.test.ts`
- `src/agents/pi-embedded-runner/model.test-harness.ts`
- `src/agents/pi-embedded-runner/model.test.ts`
- `src/agents/pi-embedded-runner/model.ts`
- ... 102 more paths in `leaf-impact.json`

## `docs/mintlify/plugins`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/plugins`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `147`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/plugins/architecture-internals.md`
- `docs/plugins/architecture.md`
- `docs/plugins/building-plugins.md`
- `docs/plugins/bundles.md`
- `docs/plugins/codex-computer-use.md`
- `docs/plugins/codex-harness.md`
- `docs/plugins/community.md`
- `docs/plugins/compatibility.md`
- `docs/plugins/dependency-resolution.md`
- `docs/plugins/google-meet.md`
- `docs/plugins/hooks.md`
- `docs/plugins/manage-plugins.md`
- `docs/plugins/manifest.md`
- `docs/plugins/memory-lancedb.md`
- `docs/plugins/memory-wiki.md`
- `docs/plugins/message-presentation.md`
- `docs/plugins/plugin-inventory.md`
- `docs/plugins/reference.md`
- `docs/plugins/reference/acpx.md`
- `docs/plugins/reference/alibaba.md`
- `docs/plugins/reference/amazon-bedrock-mantle.md`
- `docs/plugins/reference/amazon-bedrock.md`
- `docs/plugins/reference/anthropic-vertex.md`
- `docs/plugins/reference/anthropic.md`
- `docs/plugins/reference/arcee.md`
- `docs/plugins/reference/azure-speech.md`
- `docs/plugins/reference/bluebubbles.md`
- `docs/plugins/reference/bonjour.md`
- `docs/plugins/reference/brave.md`
- `docs/plugins/reference/browser.md`
- `docs/plugins/reference/byteplus.md`
- `docs/plugins/reference/cerebras.md`
- `docs/plugins/reference/chutes.md`
- `docs/plugins/reference/cloudflare-ai-gateway.md`
- `docs/plugins/reference/codex.md`
- `docs/plugins/reference/comfy.md`
- `docs/plugins/reference/copilot-proxy.md`
- `docs/plugins/reference/deepgram.md`
- `docs/plugins/reference/deepinfra.md`
- `docs/plugins/reference/deepseek.md`
- `docs/plugins/reference/diagnostics-otel.md`
- `docs/plugins/reference/diagnostics-prometheus.md`
- `docs/plugins/reference/diffs.md`
- `docs/plugins/reference/discord.md`
- `docs/plugins/reference/document-extract.md`
- `docs/plugins/reference/duckduckgo.md`
- `docs/plugins/reference/elevenlabs.md`
- `docs/plugins/reference/exa.md`
- `docs/plugins/reference/fal.md`
- `docs/plugins/reference/feishu.md`
- ... 97 more paths in `leaf-impact.json`

## `extensions/channel-plugins/matrix`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/matrix`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `147`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/matrix/CHANGELOG.md`
- `extensions/matrix/api.ts`
- `extensions/matrix/auth-presence.ts`
- `extensions/matrix/doctor-contract-api.ts`
- `extensions/matrix/index.test.ts`
- `extensions/matrix/index.ts`
- `extensions/matrix/openclaw.plugin.json`
- `extensions/matrix/package.json`
- `extensions/matrix/runtime-api.ts`
- `extensions/matrix/src/account-selection.test.ts`
- `extensions/matrix/src/account-selection.ts`
- `extensions/matrix/src/actions.test.ts`
- `extensions/matrix/src/approval-handler.runtime.test.ts`
- `extensions/matrix/src/approval-handler.runtime.ts`
- `extensions/matrix/src/approval-native.test.ts`
- `extensions/matrix/src/approval-native.ts`
- `extensions/matrix/src/approval-reactions.test.ts`
- `extensions/matrix/src/approval-reactions.ts`
- `extensions/matrix/src/channel-account-paths.ts`
- `extensions/matrix/src/channel.directory.test.ts`
- `extensions/matrix/src/channel.resolve.test.ts`
- `extensions/matrix/src/channel.setup.test.ts`
- `extensions/matrix/src/channel.setup.ts`
- `extensions/matrix/src/channel.ts`
- `extensions/matrix/src/cli.test.ts`
- `extensions/matrix/src/cli.ts`
- `extensions/matrix/src/config-schema.test.ts`
- `extensions/matrix/src/config-schema.ts`
- `extensions/matrix/src/config-ui-hints.ts`
- `extensions/matrix/src/doctor-contract.ts`
- `extensions/matrix/src/doctor.ts`
- `extensions/matrix/src/exec-approval-resolver.ts`
- `extensions/matrix/src/exec-approvals.test.ts`
- `extensions/matrix/src/exec-approvals.ts`
- `extensions/matrix/src/group-mentions.test.ts`
- `extensions/matrix/src/legacy-crypto-inspector-availability.test.ts`
- `extensions/matrix/src/legacy-crypto.test.ts`
- `extensions/matrix/src/legacy-crypto.ts`
- `extensions/matrix/src/legacy-state.test.ts`
- `extensions/matrix/src/legacy-state.ts`
- `extensions/matrix/src/manifest.test.ts`
- `extensions/matrix/src/matrix/actions/client.test.ts`
- `extensions/matrix/src/matrix/actions/client.ts`
- `extensions/matrix/src/matrix/actions/devices.test.ts`
- `extensions/matrix/src/matrix/actions/devices.ts`
- `extensions/matrix/src/matrix/actions/messages.test.ts`
- `extensions/matrix/src/matrix/actions/types.ts`
- `extensions/matrix/src/matrix/actions/verification.test.ts`
- `extensions/matrix/src/matrix/actions/verification.ts`
- `extensions/matrix/src/matrix/backup-health.ts`
- ... 97 more paths in `leaf-impact.json`

## `scripts/packaging/e2e`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/e2e`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `144`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/e2e/Dockerfile`
- `scripts/e2e/Dockerfile.qr-import`
- `scripts/e2e/agents-delete-shared-workspace-docker.sh`
- `scripts/e2e/browser-cdp-snapshot-docker.sh`
- `scripts/e2e/build-image.sh`
- `scripts/e2e/bun-global-install-smoke.sh`
- `scripts/e2e/bundled-channel-runtime-deps-docker.sh`
- `scripts/e2e/bundled-plugin-install-uninstall-docker.sh`
- `scripts/e2e/codex-npm-plugin-live-docker.sh`
- `scripts/e2e/commitments-safety-docker-client.ts`
- `scripts/e2e/commitments-safety-docker.sh`
- `scripts/e2e/config-reload-source-docker.sh`
- `scripts/e2e/crestodian-first-run-docker-client.ts`
- `scripts/e2e/crestodian-first-run-docker.sh`
- `scripts/e2e/crestodian-first-run-spec.json`
- `scripts/e2e/crestodian-planner-docker-client.mjs`
- `scripts/e2e/crestodian-planner-docker.sh`
- `scripts/e2e/crestodian-rescue-docker-client.ts`
- `scripts/e2e/crestodian-rescue-docker.sh`
- `scripts/e2e/cron-mcp-cleanup-docker-client.ts`
- `scripts/e2e/cron-mcp-cleanup-docker.sh`
- `scripts/e2e/cron-mcp-cleanup-seed.ts`
- `scripts/e2e/docker-openai-seed.ts`
- `scripts/e2e/doctor-install-switch-docker.sh`
- `scripts/e2e/gateway-network-docker.sh`
- `scripts/e2e/kitchen-sink-plugin-docker.sh`
- `scripts/e2e/kitchen-sink-rpc-walk.mjs`
- `scripts/e2e/lib/browser-cdp-snapshot/assert-snapshot.mjs`
- `scripts/e2e/lib/browser-cdp-snapshot/fixture-server.mjs`
- `scripts/e2e/lib/bun-global-install/assertions.mjs`
- `scripts/e2e/lib/bundled-plugin-install-uninstall/probe.mjs`
- `scripts/e2e/lib/bundled-plugin-install-uninstall/runtime-smoke.mjs`
- `scripts/e2e/lib/bundled-plugin-install-uninstall/sweep.sh`
- `scripts/e2e/lib/clawhub-fixture-server.cjs`
- `scripts/e2e/lib/codex-npm-plugin-live/assertions.mjs`
- `scripts/e2e/lib/config-reload/assert-log.mjs`
- `scripts/e2e/lib/config-reload/mutate-metadata.mjs`
- `scripts/e2e/lib/docker-stats/assert-resource-ceiling.mjs`
- `scripts/e2e/lib/doctor-install-switch/scenario.sh`
- `scripts/e2e/lib/doctor-install-switch/shims/loginctl`
- `scripts/e2e/lib/doctor-install-switch/shims/systemctl`
- `scripts/e2e/lib/doctor-install-switch/write-wrapper.mjs`
- `scripts/e2e/lib/fixture.mjs`
- `scripts/e2e/lib/fixtures/common.mjs`
- `scripts/e2e/lib/fixtures/config.mjs`
- `scripts/e2e/lib/fixtures/plugins.mjs`
- `scripts/e2e/lib/fixtures/workspace.mjs`
- `scripts/e2e/lib/gateway-network/client.mjs`
- `scripts/e2e/lib/kitchen-sink-plugin/assertions.mjs`
- `scripts/e2e/lib/kitchen-sink-plugin/sweep.sh`
- ... 94 more paths in `leaf-impact.json`

## `src/agent-runtime/tools`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/tools`
- Coverage: `verified`
- Changed paths: `143`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/apply-patch.ts`
- `src/agents/bash-tools.exec-approval-followup.test.ts`
- `src/agents/bash-tools.exec-approval-followup.ts`
- `src/agents/bash-tools.exec-approval-request.ts`
- `src/agents/bash-tools.exec-foreground-failures.test.ts`
- `src/agents/bash-tools.exec-host-gateway.test.ts`
- `src/agents/bash-tools.exec-host-gateway.ts`
- `src/agents/bash-tools.exec-host-node-phases.ts`
- `src/agents/bash-tools.exec-host-node.test.ts`
- `src/agents/bash-tools.exec-host-node.ts`
- `src/agents/bash-tools.exec-host-node.types.ts`
- `src/agents/bash-tools.exec-host-shared.ts`
- `src/agents/bash-tools.exec-output.ts`
- `src/agents/bash-tools.exec-runtime.test.ts`
- `src/agents/bash-tools.exec-runtime.ts`
- `src/agents/bash-tools.exec-types.ts`
- `src/agents/bash-tools.exec.approval-id.test.ts`
- `src/agents/bash-tools.exec.background-abort.test.ts`
- `src/agents/bash-tools.exec.path.test.ts`
- `src/agents/bash-tools.exec.pty.test.ts`
- `src/agents/bash-tools.exec.script-preflight.test.ts`
- `src/agents/bash-tools.exec.ts`
- `src/agents/bash-tools.process.poll-timeout.test.ts`
- `src/agents/bash-tools.process.send-keys.test.ts`
- `src/agents/bash-tools.process.ts`
- `src/agents/bash-tools.schemas.ts`
- `src/agents/bash-tools.test.ts`
- `src/agents/mcp-stdio.ts`
- `src/agents/openclaw-tools.agents.test.ts`
- `src/agents/openclaw-tools.browser-plugin.integration.test.ts`
- `src/agents/openclaw-tools.media-factory-plan.test.ts`
- `src/agents/openclaw-tools.plugin-context.test.ts`
- `src/agents/openclaw-tools.plugin-context.ts`
- `src/agents/openclaw-tools.session-status.test.ts`
- `src/agents/openclaw-tools.sessions-visibility.test.ts`
- `src/agents/openclaw-tools.sessions.test.ts`
- `src/agents/openclaw-tools.subagents.sessions-spawn.allowlist.test.ts`
- `src/agents/openclaw-tools.subagents.sessions-spawn.lifecycle.test.ts`
- `src/agents/openclaw-tools.subagents.sessions-spawn.model.test.ts`
- `src/agents/openclaw-tools.subagents.sessions-spawn.test-harness.ts`
- `src/agents/openclaw-tools.subagents.test-harness.ts`
- `src/agents/openclaw-tools.ts`
- `src/agents/openclaw-tools.tts-config.test.ts`
- `src/agents/openclaw-tools.update-plan.test.ts`
- `src/agents/pi-tools.before-tool-call.e2e.test.ts`
- `src/agents/pi-tools.before-tool-call.embedded-mode.test.ts`
- `src/agents/pi-tools.before-tool-call.integration.e2e.test.ts`
- `src/agents/pi-tools.before-tool-call.ts`
- `src/agents/pi-tools.create-openclaw-coding-tools.test.ts`
- `src/agents/pi-tools.cron-scope.test.ts`
- ... 93 more paths in `leaf-impact.json`

## `src/plugin-runtime-sdk/plugins-runtime`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugins-runtime`
- Coverage: `verified`
- Changed paths: `139`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/plugins/bundled-plugin-naming.test.ts`
- `src/plugins/contracts/auth-choice.contract.test.ts`
- `src/plugins/contracts/boundary-invariants.test.ts`
- `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts`
- `src/plugins/contracts/config-boundary-guard.test.ts`
- `src/plugins/contracts/config-footprint-guardrails.test.ts`
- `src/plugins/contracts/core-extension-facade-boundary.test.ts`
- `src/plugins/contracts/deprecated-internal-config-api.test.ts`
- `src/plugins/contracts/extension-package-project-boundaries.test.ts`
- `src/plugins/contracts/extension-runtime-dependencies.contract.test.ts`
- `src/plugins/contracts/host-hook-fixture.ts`
- `src/plugins/contracts/host-hooks.contract.test.ts`
- `src/plugins/contracts/inventory/bundled-capability-metadata.ts`
- `src/plugins/contracts/loader.contract.test.ts`
- `src/plugins/contracts/media-provider-registry.test.ts`
- `src/plugins/contracts/media-provider-registry.ts`
- `src/plugins/contracts/memory-embedding-provider.contract.test.ts`
- `src/plugins/contracts/package-manifest.contract.test.ts`
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
- `src/plugins/contracts/plugin-registration.senseaudio.contract.test.ts`
- `src/plugins/contracts/plugin-registration.tavily.contract.test.ts`
- `src/plugins/contracts/plugin-registration.tts-local-cli.contract.test.ts`
- `src/plugins/contracts/plugin-registration.xai.contract.test.ts`
- `src/plugins/contracts/plugin-registration.zai.contract.test.ts`
- `src/plugins/contracts/plugin-sdk-index.bundle.test.ts`
- `src/plugins/contracts/plugin-sdk-index.test.ts`
- `src/plugins/contracts/plugin-sdk-package-contract-guardrails.test.ts`
- `src/plugins/contracts/plugin-sdk-root-alias.test.ts`
- `src/plugins/contracts/plugin-sdk-runtime-api-guardrails.test.ts`
- `src/plugins/contracts/plugin-sdk-subpaths.test.ts`
- `src/plugins/contracts/plugin-tool-contracts.test.ts`
- `src/plugins/contracts/provider-family-plugin-tests.test.ts`
- `src/plugins/contracts/providers.contract.test.ts`
- ... 89 more paths in `leaf-impact.json`

## `extensions/channel-plugins/whatsapp`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/whatsapp`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `138`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/whatsapp/api.ts`
- `extensions/whatsapp/auth-presence.ts`
- `extensions/whatsapp/config-api.ts`
- `extensions/whatsapp/index.test.ts`
- `extensions/whatsapp/openclaw.plugin.json`
- `extensions/whatsapp/package.json`
- `extensions/whatsapp/runtime-api.ts`
- `extensions/whatsapp/src/account-types.ts`
- `extensions/whatsapp/src/accounts.ts`
- `extensions/whatsapp/src/accounts.whatsapp-auth.test.ts`
- `extensions/whatsapp/src/action-runtime-target-auth.ts`
- `extensions/whatsapp/src/action-runtime.test.ts`
- `extensions/whatsapp/src/action-runtime.ts`
- `extensions/whatsapp/src/active-listener.test.ts`
- `extensions/whatsapp/src/active-listener.ts`
- `extensions/whatsapp/src/auth-store.test.ts`
- `extensions/whatsapp/src/auth-store.ts`
- `extensions/whatsapp/src/auto-reply.broadcast-groups.combined.test.ts`
- `extensions/whatsapp/src/auto-reply.impl.ts`
- `extensions/whatsapp/src/auto-reply.test-harness.ts`
- `extensions/whatsapp/src/auto-reply.web-auto-reply.compresses-common-formats-jpeg-cap.test.ts`
- `extensions/whatsapp/src/auto-reply.web-auto-reply.connection-and-logging.e2e.test.ts`
- `extensions/whatsapp/src/auto-reply.web-auto-reply.last-route.test.ts`
- `extensions/whatsapp/src/auto-reply/config.runtime.ts`
- `extensions/whatsapp/src/auto-reply/deliver-reply.test.ts`
- `extensions/whatsapp/src/auto-reply/deliver-reply.ts`
- `extensions/whatsapp/src/auto-reply/heartbeat-runner.runtime.ts`
- `extensions/whatsapp/src/auto-reply/heartbeat-runner.test.ts`
- `extensions/whatsapp/src/auto-reply/heartbeat-runner.ts`
- `extensions/whatsapp/src/auto-reply/mentions.ts`
- `extensions/whatsapp/src/auto-reply/monitor-state.test.ts`
- `extensions/whatsapp/src/auto-reply/monitor-state.ts`
- `extensions/whatsapp/src/auto-reply/monitor.ts`
- `extensions/whatsapp/src/auto-reply/monitor/ack-reaction.test.ts`
- `extensions/whatsapp/src/auto-reply/monitor/ack-reaction.ts`
- `extensions/whatsapp/src/auto-reply/monitor/broadcast.ts`
- `extensions/whatsapp/src/auto-reply/monitor/commands.ts`
- `extensions/whatsapp/src/auto-reply/monitor/group-activation.ts`
- `extensions/whatsapp/src/auto-reply/monitor/group-gating.audio-preflight.test.ts`
- `extensions/whatsapp/src/auto-reply/monitor/group-gating.ts`
- `extensions/whatsapp/src/auto-reply/monitor/inbound-context.test.ts`
- `extensions/whatsapp/src/auto-reply/monitor/inbound-context.ts`
- `extensions/whatsapp/src/auto-reply/monitor/inbound-dispatch.runtime.ts`
- `extensions/whatsapp/src/auto-reply/monitor/inbound-dispatch.test.ts`
- `extensions/whatsapp/src/auto-reply/monitor/inbound-dispatch.ts`
- `extensions/whatsapp/src/auto-reply/monitor/last-route.ts`
- `extensions/whatsapp/src/auto-reply/monitor/message-line.runtime.ts`
- `extensions/whatsapp/src/auto-reply/monitor/message-line.ts`
- `extensions/whatsapp/src/auto-reply/monitor/on-message.audio-preflight.test.ts`
- `extensions/whatsapp/src/auto-reply/monitor/on-message.ts`
- ... 88 more paths in `leaf-impact.json`

## `src/reply-orchestration/runner`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/runner`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `137`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/command-control.test.ts`
- `src/auto-reply/command-status-builders.ts`
- `src/auto-reply/dispatch-dispatcher.ts`
- `src/auto-reply/dispatch.test.ts`
- `src/auto-reply/dispatch.ts`
- `src/auto-reply/fallback-state.ts`
- `src/auto-reply/get-reply-options.types.ts`
- `src/auto-reply/inbound.test.ts`
- `src/auto-reply/media-understanding.test-fixtures.ts`
- `src/auto-reply/model.test.ts`
- `src/auto-reply/reply-payload.ts`
- `src/auto-reply/reply/acp-projector.test.ts`
- `src/auto-reply/reply/acp-projector.ts`
- `src/auto-reply/reply/acp-stream-settings.ts`
- `src/auto-reply/reply/agent-runner-direct-runtime-config.test.ts`
- `src/auto-reply/reply/agent-runner-execution.test.ts`
- `src/auto-reply/reply/agent-runner-execution.ts`
- `src/auto-reply/reply/agent-runner-helpers.test.ts`
- `src/auto-reply/reply/agent-runner-helpers.ts`
- `src/auto-reply/reply/agent-runner-memory.test.ts`
- `src/auto-reply/reply/agent-runner-memory.ts`
- `src/auto-reply/reply/agent-runner-payloads.test.ts`
- `src/auto-reply/reply/agent-runner-payloads.ts`
- `src/auto-reply/reply/agent-runner-reminder-guard.ts`
- `src/auto-reply/reply/agent-runner-run-params.ts`
- `src/auto-reply/reply/agent-runner-runtime-config.test.ts`
- `src/auto-reply/reply/agent-runner-session-reset.ts`
- `src/auto-reply/reply/agent-runner-utils.test.ts`
- `src/auto-reply/reply/agent-runner-utils.ts`
- `src/auto-reply/reply/agent-runner.media-paths.test.ts`
- `src/auto-reply/reply/agent-runner.misc.runreplyagent.test.ts`
- `src/auto-reply/reply/agent-runner.runreplyagent.e2e.test.ts`
- `src/auto-reply/reply/agent-runner.ts`
- `src/auto-reply/reply/body.ts`
- `src/auto-reply/reply/dispatch-acp-attachments.ts`
- `src/auto-reply/reply/dispatch-acp-command-bypass.test.ts`
- `src/auto-reply/reply/dispatch-acp-command-bypass.ts`
- `src/auto-reply/reply/dispatch-acp-delivery.test.ts`
- `src/auto-reply/reply/dispatch-acp-delivery.ts`
- `src/auto-reply/reply/dispatch-acp-transcript.runtime.ts`
- `src/auto-reply/reply/dispatch-acp.runtime.ts`
- `src/auto-reply/reply/dispatch-acp.test.ts`
- `src/auto-reply/reply/dispatch-acp.ts`
- `src/auto-reply/reply/dispatch-from-config.acp-abort.test.ts`
- `src/auto-reply/reply/dispatch-from-config.reply-dispatch.test.ts`
- `src/auto-reply/reply/dispatch-from-config.runtime.ts`
- `src/auto-reply/reply/dispatch-from-config.shared.test-harness.ts`
- `src/auto-reply/reply/dispatch-from-config.test.ts`
- `src/auto-reply/reply/dispatch-from-config.ts`
- `src/auto-reply/reply/dispatch-from-config.types.ts`
- ... 87 more paths in `leaf-impact.json`

## `src/capability-modules/cron`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/cron`
- Coverage: `verified`
- Changed paths: `107`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/cron/active-jobs.ts`
- `src/cron/cron-protocol-conformance.test.ts`
- `src/cron/cron-protocol-schema.test.ts`
- `src/cron/delivery-field-schemas.ts`
- `src/cron/delivery-plan.ts`
- `src/cron/delivery-preview.test.ts`
- `src/cron/delivery-preview.ts`
- `src/cron/delivery.failure-notify.test.ts`
- `src/cron/delivery.test.ts`
- `src/cron/delivery.ts`
- `src/cron/heartbeat-policy.ts`
- `src/cron/isolated-agent.delivery-awareness.test.ts`
- `src/cron/isolated-agent.direct-delivery-core-channels.test.ts`
- `src/cron/isolated-agent.helpers.test.ts`
- `src/cron/isolated-agent.lane.test.ts`
- `src/cron/isolated-agent.model-formatting.test.ts`
- `src/cron/isolated-agent.model-overrides.test.ts`
- `src/cron/isolated-agent.model-preflight.test.ts`
- `src/cron/isolated-agent.session-identity.test.ts`
- `src/cron/isolated-agent.test-harness.ts`
- `src/cron/isolated-agent.turn-test-helpers.ts`
- `src/cron/isolated-agent/channel-output-policy.ts`
- `src/cron/isolated-agent/delivery-dispatch.double-announce.test.ts`
- `src/cron/isolated-agent/delivery-dispatch.ts`
- `src/cron/isolated-agent/delivery-target.runtime.ts`
- `src/cron/isolated-agent/delivery-target.test.ts`
- `src/cron/isolated-agent/delivery-target.ts`
- `src/cron/isolated-agent/helpers.ts`
- `src/cron/isolated-agent/model-preflight.runtime.test.ts`
- `src/cron/isolated-agent/model-preflight.runtime.ts`
- `src/cron/isolated-agent/model-selection.ts`
- `src/cron/isolated-agent/run-embedded.runtime.ts`
- `src/cron/isolated-agent/run-execution.runtime.ts`
- `src/cron/isolated-agent/run-executor.ts`
- `src/cron/isolated-agent/run-fallback-policy.test.ts`
- `src/cron/isolated-agent/run-fallback-policy.ts`
- `src/cron/isolated-agent/run-session-state.test.ts`
- `src/cron/isolated-agent/run-session-state.ts`
- `src/cron/isolated-agent/run.cron-model-override-forwarding.test.ts`
- `src/cron/isolated-agent/run.interim-retry.test.ts`
- `src/cron/isolated-agent/run.message-tool-policy.test.ts`
- `src/cron/isolated-agent/run.meta-error-status.test.ts`
- `src/cron/isolated-agent/run.owner-auth.test.ts`
- `src/cron/isolated-agent/run.payload-fallbacks.test.ts`
- `src/cron/isolated-agent/run.session-key-isolation.test.ts`
- `src/cron/isolated-agent/run.skill-filter.test.ts`
- `src/cron/isolated-agent/run.test-harness.ts`
- `src/cron/isolated-agent/run.ts`
- `src/cron/isolated-agent/session.test.ts`
- `src/cron/isolated-agent/session.ts`
- ... 57 more paths in `leaf-impact.json`

## `test-infra/profiles-and-suites/root-tests`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/root-tests`
- Coverage: `verified`
- Changed paths: `106`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `test/architecture-smells.test.ts`
- `test/cli-json-stdout.e2e.test.ts`
- `test/extension-import-boundaries.test.ts`
- `test/extension-test-boundary.test.ts`
- `test/gateway.multi.e2e.test.ts`
- `test/git-hooks-pre-commit.test.ts`
- `test/helpers/node-builtin-mocks.test.ts`
- `test/helpers/openclaw-test-instance.test.ts`
- `test/helpers/stt-live-audio.test.ts`
- `test/image-generation.runtime.live.test.ts`
- `test/npm-publish-plan.test.ts`
- `test/official-channel-catalog.test.ts`
- `test/openclaw-launcher.e2e.test.ts`
- `test/openclaw-npm-postpublish-verify.test.ts`
- `test/openclaw-npm-release-check.test.ts`
- `test/plugin-clawhub-release.test.ts`
- `test/plugin-npm-package-manifest.test.ts`
- `test/plugin-npm-release.test.ts`
- `test/plugin-npm-runtime-build.test.ts`
- `test/release-check.test.ts`
- `test/scripts/audit-seams.test.ts`
- `test/scripts/barnacle-auto-response.test.ts`
- `test/scripts/bench-gateway-startup.test.ts`
- `test/scripts/blacksmith-testbox-runner.test.ts`
- `test/scripts/blacksmith-testbox-state.test.ts`
- `test/scripts/build-all.test.ts`
- `test/scripts/bundled-plugin-build-entries.test.ts`
- `test/scripts/bundled-plugin-staged-runtime-deps.test.ts`
- `test/scripts/changed-lanes.test.ts`
- `test/scripts/check-changelog-attributions.test.ts`
- `test/scripts/check-cli-bootstrap-imports.test.ts`
- `test/scripts/check-deadcode-unused-files.test.ts`
- `test/scripts/check-extension-wildcard-reexports.test.ts`
- `test/scripts/check-gateway-watch-regression.test.ts`
- `test/scripts/check-openclaw-package-tarball.test.ts`
- `test/scripts/check-opengrep-rule-metadata.test.ts`
- `test/scripts/check-plugin-sdk-wildcard-reexports.test.ts`
- `test/scripts/check-runtime-sidecar-loaders.test.ts`
- `test/scripts/ci-node-test-plan.test.ts`
- `test/scripts/ci-run-timings.test.ts`
- `test/scripts/codex-app-server-protocol-source.test.ts`
- `test/scripts/docker-all-scheduler.test.ts`
- `test/scripts/docker-build-helper.test.ts`
- `test/scripts/docker-e2e-plan.test.ts`
- `test/scripts/install-ps1.test.ts`
- `test/scripts/install-sh.test.ts`
- `test/scripts/ios-version.test.ts`
- `test/scripts/lint-suppressions.test.ts`
- `test/scripts/live-docker-stage.test.ts`
- `test/scripts/local-heavy-check-runtime.test.ts`
- ... 56 more paths in `leaf-impact.json`

## `src/config-secrets-security/config-io`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/config-io`
- Coverage: `verified`
- Changed paths: `105`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/config/agent-dirs.ts`
- `src/config/allowed-values.ts`
- `src/config/backup-rotation.ts`
- `src/config/bindings.ts`
- `src/config/bundled-channel-config-metadata.generated.ts`
- `src/config/bundled-channel-config-runtime.test.ts`
- `src/config/cache-utils.ts`
- `src/config/channel-capabilities.ts`
- `src/config/channel-compat-normalization.ts`
- `src/config/channel-configured.test.ts`
- `src/config/channel-configured.ts`
- `src/config/commands.test.ts`
- `src/config/commands.ts`
- `src/config/config-env-vars.ts`
- `src/config/config-misc.test.ts`
- `src/config/config.acp-binding-cutover.test.ts`
- `src/config/config.allowlist-requires-allowfrom.test.ts`
- `src/config/config.compaction-settings.test.ts`
- `src/config/config.env-vars.test.ts`
- `src/config/config.model-ref-validation.test.ts`
- `src/config/config.multi-agent-agentdir-validation.test.ts`
- `src/config/config.plugin-validation.test.ts`
- `src/config/config.pruning-defaults.test.ts`
- `src/config/config.sandbox-docker.test.ts`
- `src/config/config.schema-regressions.test.ts`
- `src/config/config.talk-validation.test.ts`
- `src/config/config.ts`
- `src/config/config.web-search-provider.test.ts`
- `src/config/context-visibility.ts`
- `src/config/control-ui-css.ts`
- `src/config/dangerous-name-matching.ts`
- `src/config/defaults.test.ts`
- `src/config/defaults.ts`
- `src/config/env-substitution.ts`
- `src/config/env-vars.ts`
- `src/config/future-version-guard.test.ts`
- `src/config/future-version-guard.ts`
- `src/config/gateway-control-ui-origins.test.ts`
- `src/config/gateway-control-ui-origins.ts`
- `src/config/group-policy.test.ts`
- `src/config/group-policy.ts`
- `src/config/includes.test.ts`
- `src/config/includes.ts`
- `src/config/io.audit.test.ts`
- `src/config/io.audit.ts`
- `src/config/io.best-effort.test.ts`
- `src/config/io.clobber-snapshot.test.ts`
- `src/config/io.clobber-snapshot.ts`
- `src/config/io.compat.test.ts`
- `src/config/io.invalid-config.ts`
- ... 55 more paths in `leaf-impact.json`

## `src/agent-runtime/providers-auth`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/providers-auth`
- Coverage: `verified`
- Changed paths: `97`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/auth-profiles.chutes.test.ts`
- `src/agents/auth-profiles.cooldown-auto-expiry.test.ts`
- `src/agents/auth-profiles.ensureauthprofilestore.test.ts`
- `src/agents/auth-profiles.external-cli-scope.test.ts`
- `src/agents/auth-profiles.external-cli-sync.test.ts`
- `src/agents/auth-profiles.markauthprofilefailure.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.does-not-prioritize-lastgood-round-robin-ordering.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.normalizes-z-ai-aliases-auth-order.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.orders-by-lastused-no-explicit-order-exists.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.uses-stored-profiles-no-config-exists.test.ts`
- `src/agents/auth-profiles.store-cache.test.ts`
- `src/agents/auth-profiles.store.save.test.ts`
- `src/agents/auth-profiles.ts`
- `src/agents/auth-profiles/clone.ts`
- `src/agents/auth-profiles/external-auth.ts`
- `src/agents/auth-profiles/external-cli-discovery.ts`
- `src/agents/auth-profiles/external-cli-scope.ts`
- `src/agents/auth-profiles/external-cli-sync.ts`
- `src/agents/auth-profiles/external-oauth.test.ts`
- `src/agents/auth-profiles/oauth-common-mocks.test-support.ts`
- `src/agents/auth-profiles/oauth-manager.test.ts`
- `src/agents/auth-profiles/oauth-manager.ts`
- `src/agents/auth-profiles/oauth-refresh-failure.ts`
- `src/agents/auth-profiles/oauth-shared.test.ts`
- `src/agents/auth-profiles/oauth-shared.ts`
- `src/agents/auth-profiles/oauth.fallback-to-main-agent.test.ts`
- `src/agents/auth-profiles/oauth.mirror-refresh.test.ts`
- `src/agents/auth-profiles/oauth.openai-codex-refresh-fallback.test.ts`
- `src/agents/auth-profiles/oauth.test.ts`
- `src/agents/auth-profiles/oauth.ts`
- `src/agents/auth-profiles/persisted.ts`
- `src/agents/auth-profiles/policy.ts`
- `src/agents/auth-profiles/portability.test.ts`
- `src/agents/auth-profiles/portability.ts`
- `src/agents/auth-profiles/profiles.test.ts`
- `src/agents/auth-profiles/profiles.ts`
- `src/agents/auth-profiles/runtime-snapshots.test.ts`
- `src/agents/auth-profiles/runtime-snapshots.ts`
- `src/agents/auth-profiles/session-override.test.ts`
- `src/agents/auth-profiles/session-override.ts`
- `src/agents/auth-profiles/state.ts`
- `src/agents/auth-profiles/store.ts`
- `src/agents/auth-profiles/types.ts`
- `src/agents/auth-profiles/usage-state.ts`
- `src/agents/auth-profiles/usage.test.ts`
- `src/agents/auth-profiles/usage.ts`
- `src/agents/model-auth-env-vars.ts`
- `src/agents/model-auth-env.ts`
- `src/agents/model-auth-label.test.ts`
- `src/agents/model-auth-label.ts`
- ... 47 more paths in `leaf-impact.json`

## `test-infra/fixtures-and-helpers/helpers-core`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/helpers-core`
- Coverage: `verified`
- Changed paths: `96`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `test/helpers/agents/auth-profile-runtime-contract.ts`
- `test/helpers/agents/delivery-no-reply-runtime-contract.ts`
- `test/helpers/agents/happy-path-prompt-snapshots.ts`
- `test/helpers/agents/openclaw-owned-tool-runtime-contract.ts`
- `test/helpers/agents/outcome-fallback-runtime-contract.ts`
- `test/helpers/agents/prompt-composition-scenarios.ts`
- `test/helpers/agents/prompt-overlay-runtime-contract.ts`
- `test/helpers/agents/schema-normalization-runtime-contract.ts`
- `test/helpers/agents/transcript-repair-runtime-contract.ts`
- `test/helpers/auth-wizard.ts`
- `test/helpers/auto-reply/trigger-handling-test-harness.ts`
- `test/helpers/bundled-channel-entry.ts`
- `test/helpers/bundled-plugin-paths.ts`
- `test/helpers/channels/AGENTS.md`
- `test/helpers/channels/CLAUDE.md`
- `test/helpers/channels/bundled-channel-plugin-loader.ts`
- `test/helpers/channels/channel-catalog-contract.ts`
- `test/helpers/channels/channel-plugin-catalog-contract-suites.ts`
- `test/helpers/channels/config-write-contract-suites.ts`
- `test/helpers/channels/directory-ids.ts`
- `test/helpers/channels/group-policy-contract-suites.ts`
- `test/helpers/channels/group-policy-contract.ts`
- `test/helpers/channels/imessage-test-plugin.ts`
- `test/helpers/channels/interactive-contract.ts`
- `test/helpers/channels/lazy-object-surface.ts`
- `test/helpers/channels/manifest.ts`
- `test/helpers/channels/registry-backed-contract-shards.ts`
- `test/helpers/channels/registry-contract-suites.ts`
- `test/helpers/channels/registry-plugin.ts`
- `test/helpers/channels/registry-session-binding.ts`
- `test/helpers/channels/runtime-artifacts.ts`
- `test/helpers/channels/session-binding-registry-backed-contract.ts`
- `test/helpers/channels/surface-contract-registry.ts`
- `test/helpers/channels/surface-contract-suite.ts`
- `test/helpers/channels/threading-directory-contract-suites.ts`
- `test/helpers/cron/service-regression-fixtures.ts`
- `test/helpers/envelope-timestamp.ts`
- `test/helpers/gateway-e2e-harness.ts`
- `test/helpers/http-test-server.ts`
- `test/helpers/import-fresh.ts`
- `test/helpers/media-generation/dashscope-video-provider.ts`
- `test/helpers/media-generation/provider-capability-assertions.ts`
- `test/helpers/media-generation/provider-http-mocks.ts`
- `test/helpers/media-generation/runtime-module-mocks.ts`
- `test/helpers/mock-incoming-request.ts`
- `test/helpers/node-builtin-mocks.ts`
- `test/helpers/openclaw-test-instance.ts`
- `test/helpers/pairing-reply.ts`
- `test/helpers/plugins/contracts-testkit.ts`
- `test/helpers/plugins/direct-smoke.ts`
- ... 46 more paths in `leaf-impact.json`

## `apps/ios-android/android-app`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/android-app`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `94`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/android/README.md`
- `apps/android/app/lint.xml`
- `apps/android/app/src/main/AndroidManifest.xml`
- `apps/android/app/src/main/java/ai/openclaw/app/DeviceNames.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/LocationMode.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/MainViewModel.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/NodeApp.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/NodeForegroundService.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/NodeRuntime.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/NotificationForwardingPolicy.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/PermissionRequester.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/SecurePrefs.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/SessionKey.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/VoiceCaptureMode.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/VoiceWakeMode.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/WakeWords.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/chat/ChatController.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/DeviceAuthStore.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/DeviceIdentityStore.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewayDiscovery.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewayEndpoint.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewaySession.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewayTls.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/A2UIHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/CalendarHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/CallLogHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/CameraCaptureManager.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/CameraHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/CanvasActionTrust.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/CanvasController.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/ConnectionManager.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/ContactsHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/DebugHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/DeviceHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/DeviceNotificationListenerService.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/InvokeCommandRegistry.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/InvokeDispatcher.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/JpegSizeLimiter.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/LocationCaptureManager.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/LocationHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/MotionHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/NodePresenceAliveBeacon.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/NodeUtils.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/NotificationsHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/PhotosHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/SmsHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/SmsManager.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/SystemHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/protocol/OpenClawCanvasA2UIAction.kt`
- ... 44 more paths in `leaf-impact.json`

## `packages/shared-packages`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/packages/shared-packages`
- Coverage: `fallback`
- Changed paths: `89`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `packages/memory-host-sdk/src/engine-embeddings.ts`
- `packages/memory-host-sdk/src/engine-foundation.ts`
- `packages/memory-host-sdk/src/engine-qmd.ts`
- `packages/memory-host-sdk/src/engine-storage.ts`
- `packages/memory-host-sdk/src/engine.ts`
- `packages/memory-host-sdk/src/host/backend-config.test.ts`
- `packages/memory-host-sdk/src/host/backend-config.ts`
- `packages/memory-host-sdk/src/host/batch-error-utils.ts`
- `packages/memory-host-sdk/src/host/batch-http.test.ts`
- `packages/memory-host-sdk/src/host/batch-http.ts`
- `packages/memory-host-sdk/src/host/batch-upload.ts`
- `packages/memory-host-sdk/src/host/batch-utils.ts`
- `packages/memory-host-sdk/src/host/config-utils.ts`
- `packages/memory-host-sdk/src/host/embedding-chunk-limits.ts`
- `packages/memory-host-sdk/src/host/embedding-defaults.ts`
- `packages/memory-host-sdk/src/host/embedding-provider-adapter-utils.ts`
- `packages/memory-host-sdk/src/host/embeddings-debug.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-client.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-client.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-fetch.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-provider.ts`
- `packages/memory-host-sdk/src/host/embeddings.test.ts`
- `packages/memory-host-sdk/src/host/embeddings.ts`
- `packages/memory-host-sdk/src/host/embeddings.types.ts`
- `packages/memory-host-sdk/src/host/error-utils.ts`
- `packages/memory-host-sdk/src/host/hash.ts`
- `packages/memory-host-sdk/src/host/internal.test.ts`
- `packages/memory-host-sdk/src/host/internal.ts`
- `packages/memory-host-sdk/src/host/memory-schema.ts`
- `packages/memory-host-sdk/src/host/multimodal.ts`
- `packages/memory-host-sdk/src/host/node-llama.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-agent.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-auth.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-cli.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-config.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-io.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-memory.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-network.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-session.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime.ts`
- `packages/memory-host-sdk/src/host/post-json.test.ts`
- `packages/memory-host-sdk/src/host/post-json.ts`
- `packages/memory-host-sdk/src/host/qmd-process.test.ts`
- `packages/memory-host-sdk/src/host/qmd-process.ts`
- `packages/memory-host-sdk/src/host/qmd-query-parser.ts`
- `packages/memory-host-sdk/src/host/qmd-scope.ts`
- `packages/memory-host-sdk/src/host/query-expansion.ts`
- `packages/memory-host-sdk/src/host/read-file-shared.ts`
- `packages/memory-host-sdk/src/host/read-file.ts`
- `packages/memory-host-sdk/src/host/remote-http.test.ts`
- ... 39 more paths in `leaf-impact.json`

## `src/gateway-api-surface/server-methods`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/server-methods`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `85`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/gateway/server-methods.control-plane-rate-limit.test.ts`
- `src/gateway/server-methods.ts`
- `src/gateway/server-methods/agent-job.ts`
- `src/gateway/server-methods/agent-wait-dedupe.test.ts`
- `src/gateway/server-methods/agent-wait-dedupe.ts`
- `src/gateway/server-methods/agent.create-event.test.ts`
- `src/gateway/server-methods/agent.test.ts`
- `src/gateway/server-methods/agent.ts`
- `src/gateway/server-methods/agents-mutate.test.ts`
- `src/gateway/server-methods/agents.ts`
- `src/gateway/server-methods/approval-shared.test.ts`
- `src/gateway/server-methods/approval-shared.ts`
- `src/gateway/server-methods/artifacts.test.ts`
- `src/gateway/server-methods/artifacts.ts`
- `src/gateway/server-methods/channels.start.test.ts`
- `src/gateway/server-methods/channels.status.test.ts`
- `src/gateway/server-methods/channels.ts`
- `src/gateway/server-methods/chat-transcript-inject.ts`
- `src/gateway/server-methods/chat-webchat-media.test.ts`
- `src/gateway/server-methods/chat-webchat-media.ts`
- `src/gateway/server-methods/chat.abort.test-helpers.ts`
- `src/gateway/server-methods/chat.directive-tags.test.ts`
- `src/gateway/server-methods/chat.inject.parentid.test.ts`
- `src/gateway/server-methods/chat.test-helpers.ts`
- `src/gateway/server-methods/chat.ts`
- `src/gateway/server-methods/commands.test.ts`
- `src/gateway/server-methods/commands.ts`
- `src/gateway/server-methods/config-write-flow.ts`
- `src/gateway/server-methods/config.shared-auth.test.ts`
- `src/gateway/server-methods/config.test.ts`
- `src/gateway/server-methods/config.ts`
- `src/gateway/server-methods/cron.ts`
- `src/gateway/server-methods/cron.validation.test.ts`
- `src/gateway/server-methods/devices.test.ts`
- `src/gateway/server-methods/devices.ts`
- `src/gateway/server-methods/doctor.memory-core-runtime.ts`
- `src/gateway/server-methods/doctor.test.ts`
- `src/gateway/server-methods/doctor.ts`
- `src/gateway/server-methods/exec-approval.ts`
- `src/gateway/server-methods/health.ts`
- `src/gateway/server-methods/models-auth-status.test.ts`
- `src/gateway/server-methods/models-auth-status.ts`
- `src/gateway/server-methods/models.test.ts`
- `src/gateway/server-methods/models.ts`
- `src/gateway/server-methods/nodes-pending.test.ts`
- `src/gateway/server-methods/nodes-pending.ts`
- `src/gateway/server-methods/nodes-wake-state.ts`
- `src/gateway/server-methods/nodes.helpers.ts`
- `src/gateway/server-methods/nodes.invoke-wake.test.ts`
- `src/gateway/server-methods/nodes.ts`
- ... 35 more paths in `leaf-impact.json`

## `ui/web-ui/components`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/components`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `81`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/src/ui/app-chat.test.ts`
- `ui/src/ui/app-chat.ts`
- `ui/src/ui/app-render.assistant-avatar.test.ts`
- `ui/src/ui/app-render.helpers.browser.test.ts`
- `ui/src/ui/app-render.helpers.node.test.ts`
- `ui/src/ui/app-render.helpers.ts`
- `ui/src/ui/app-render.ts`
- `ui/src/ui/app.ts`
- `ui/src/ui/chat/attachment-payload-store.ts`
- `ui/src/ui/chat/attachment-support.ts`
- `ui/src/ui/chat/build-chat-items.ts`
- `ui/src/ui/chat/chat-avatar.ts`
- `ui/src/ui/chat/chat-queue.ts`
- `ui/src/ui/chat/chat-sidebar-raw.ts`
- `ui/src/ui/chat/chat-welcome.ts`
- `ui/src/ui/chat/grouped-render.ts`
- `ui/src/ui/chat/history-limits.ts`
- `ui/src/ui/chat/input-history.ts`
- `ui/src/ui/chat/message-extract.ts`
- `ui/src/ui/chat/message-normalizer.ts`
- `ui/src/ui/chat/realtime-talk-audio.ts`
- `ui/src/ui/chat/realtime-talk-gateway-relay.ts`
- `ui/src/ui/chat/realtime-talk-google-live.ts`
- `ui/src/ui/chat/realtime-talk-shared.ts`
- `ui/src/ui/chat/realtime-talk-webrtc.ts`
- `ui/src/ui/chat/realtime-talk.ts`
- `ui/src/ui/chat/role-normalizer.ts`
- `ui/src/ui/chat/session-cache.ts`
- `ui/src/ui/chat/session-controls.ts`
- `ui/src/ui/chat/slash-command-executor.ts`
- `ui/src/ui/chat/slash-commands.browser-import.test.ts`
- `ui/src/ui/chat/speech.ts`
- `ui/src/ui/chat/tool-cards.node.test.ts`
- `ui/src/ui/chat/tool-cards.ts`
- `ui/src/ui/chat/tool-expansion-state.ts`
- `ui/src/ui/components/dashboard-header.ts`
- `ui/src/ui/components/modal-dialog.test.ts`
- `ui/src/ui/components/modal-dialog.ts`
- `ui/src/ui/components/resizable-divider.test.ts`
- `ui/src/ui/components/resizable-divider.ts`
- `ui/src/ui/controllers/agents.test.ts`
- `ui/src/ui/controllers/assistant-identity.test.ts`
- `ui/src/ui/controllers/assistant-identity.ts`
- `ui/src/ui/controllers/chat.test.ts`
- `ui/src/ui/controllers/chat.ts`
- `ui/src/ui/controllers/control-ui-bootstrap.test.ts`
- `ui/src/ui/controllers/control-ui-bootstrap.ts`
- `ui/src/ui/controllers/cron.test.ts`
- `ui/src/ui/controllers/cron.ts`
- `ui/src/ui/controllers/devices.ts`
- ... 31 more paths in `leaf-impact.json`

## `extensions/channel-plugins/msteams`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/msteams`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `80`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/msteams/api.ts`
- `extensions/msteams/channel-plugin-api.ts`
- `extensions/msteams/config-api.ts`
- `extensions/msteams/openclaw.plugin.json`
- `extensions/msteams/package.json`
- `extensions/msteams/runtime-api.ts`
- `extensions/msteams/setup-entry.ts`
- `extensions/msteams/setup-plugin-api.ts`
- `extensions/msteams/src/actions.ts`
- `extensions/msteams/src/attachments.graph.test.ts`
- `extensions/msteams/src/attachments.ts`
- `extensions/msteams/src/attachments/download.ts`
- `extensions/msteams/src/attachments/shared.ts`
- `extensions/msteams/src/block-streaming-config.test.ts`
- `extensions/msteams/src/channel-api.ts`
- `extensions/msteams/src/channel.actions.test.ts`
- `extensions/msteams/src/channel.directory.test.ts`
- `extensions/msteams/src/channel.runtime.ts`
- `extensions/msteams/src/channel.setup.ts`
- `extensions/msteams/src/channel.test.ts`
- `extensions/msteams/src/channel.ts`
- `extensions/msteams/src/config-ui-hints.ts`
- `extensions/msteams/src/directory.ts`
- `extensions/msteams/src/errors.ts`
- `extensions/msteams/src/feedback-reflection-prompt.ts`
- `extensions/msteams/src/feedback-reflection.ts`
- `extensions/msteams/src/file-consent-helpers.ts`
- `extensions/msteams/src/file-consent-invoke.ts`
- `extensions/msteams/src/file-consent.ts`
- `extensions/msteams/src/file-lock.ts`
- `extensions/msteams/src/graph-group-management.ts`
- `extensions/msteams/src/graph-members.ts`
- `extensions/msteams/src/graph-teams.ts`
- `extensions/msteams/src/graph-upload.test.ts`
- `extensions/msteams/src/graph-upload.ts`
- `extensions/msteams/src/graph.ts`
- `extensions/msteams/src/inbound.ts`
- `extensions/msteams/src/mentions.ts`
- `extensions/msteams/src/messenger.test.ts`
- `extensions/msteams/src/messenger.ts`
- `extensions/msteams/src/monitor-handler.test-helpers.ts`
- `extensions/msteams/src/monitor-handler.ts`
- `extensions/msteams/src/monitor-handler/access.ts`
- `extensions/msteams/src/monitor-handler/message-handler.ts`
- `extensions/msteams/src/monitor.ts`
- `extensions/msteams/src/outbound.ts`
- `extensions/msteams/src/pending-uploads-fs.ts`
- `extensions/msteams/src/policy.ts`
- `extensions/msteams/src/polls.ts`
- `extensions/msteams/src/reply-dispatcher.test.ts`
- ... 30 more paths in `leaf-impact.json`

## `scripts/packaging/lib`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/lib`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `70`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/lib/arg-utils.mjs`
- `scripts/lib/bundled-plugin-build-entries-types.d.ts`
- `scripts/lib/bundled-plugin-build-entries.mjs`
- `scripts/lib/bundled-plugin-root-runtime-mirrors.mjs`
- `scripts/lib/bundled-runtime-sidecar-paths.json`
- `scripts/lib/ci-node-test-plan.mjs`
- `scripts/lib/codex-app-server-protocol-source.ts`
- `scripts/lib/config-boundary-guard.d.mts`
- `scripts/lib/config-boundary-guard.mjs`
- `scripts/lib/dependency-ownership.json`
- `scripts/lib/deprecated-config-api-guard.d.mts`
- `scripts/lib/deprecated-config-api-guard.mjs`
- `scripts/lib/docker-build.sh`
- `scripts/lib/docker-e2e-container.sh`
- `scripts/lib/docker-e2e-image.sh`
- `scripts/lib/docker-e2e-logs.sh`
- `scripts/lib/docker-e2e-package.sh`
- `scripts/lib/docker-e2e-plan.mjs`
- `scripts/lib/docker-e2e-scenarios.mjs`
- `scripts/lib/extension-import-boundary-checker.mjs`
- `scripts/lib/extension-package-boundary.ts`
- `scripts/lib/extension-source-classifier.d.mts`
- `scripts/lib/extension-source-classifier.mjs`
- `scripts/lib/extension-test-plan.mjs`
- `scripts/lib/guard-inventory-utils.mjs`
- `scripts/lib/import-cycle-graph.ts`
- `scripts/lib/ios-version.ts`
- `scripts/lib/live-docker-auth.sh`
- `scripts/lib/live-docker-stage.sh`
- `scripts/lib/local-build-metadata-paths.d.mts`
- `scripts/lib/local-build-metadata-paths.mjs`
- `scripts/lib/local-build-metadata.d.mts`
- `scripts/lib/local-build-metadata.mjs`
- `scripts/lib/local-heavy-check-runtime.mjs`
- `scripts/lib/managed-child-process.mjs`
- `scripts/lib/mintlify-accordion.mjs`
- `scripts/lib/npm-pack-budget.d.mts`
- `scripts/lib/npm-pack-budget.mjs`
- `scripts/lib/npm-publish-plan.mjs`
- `scripts/lib/official-external-channel-catalog.json`
- `scripts/lib/official-external-plugin-catalog.json`
- `scripts/lib/official-external-provider-catalog.json`
- `scripts/lib/openclaw-e2e-instance.sh`
- `scripts/lib/openclaw-test-state.mjs`
- `scripts/lib/optional-bundled-clusters-types.d.ts`
- `scripts/lib/optional-bundled-clusters.mjs`
- `scripts/lib/package-dist-imports.mjs`
- `scripts/lib/plugin-clawhub-release.ts`
- `scripts/lib/plugin-contract-test-plan.mjs`
- `scripts/lib/plugin-gateway-gauntlet.mjs`
- ... 20 more paths in `leaf-impact.json`

## `src/capability-modules/memory`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/memory`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `70`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/memory-host-sdk/dreaming.test.ts`
- `src/memory-host-sdk/dreaming.ts`
- `src/memory-host-sdk/engine-embeddings.ts`
- `src/memory-host-sdk/engine-foundation.ts`
- `src/memory-host-sdk/engine-qmd.ts`
- `src/memory-host-sdk/engine-storage.ts`
- `src/memory-host-sdk/engine.ts`
- `src/memory-host-sdk/host/backend-config.test.ts`
- `src/memory-host-sdk/host/backend-config.ts`
- `src/memory-host-sdk/host/batch-error-utils.ts`
- `src/memory-host-sdk/host/batch-http.test.ts`
- `src/memory-host-sdk/host/batch-http.ts`
- `src/memory-host-sdk/host/batch-output.ts`
- `src/memory-host-sdk/host/batch-provider-common.ts`
- `src/memory-host-sdk/host/batch-runner.ts`
- `src/memory-host-sdk/host/batch-status.ts`
- `src/memory-host-sdk/host/batch-upload.ts`
- `src/memory-host-sdk/host/batch-utils.ts`
- `src/memory-host-sdk/host/embedding-chunk-limits.ts`
- `src/memory-host-sdk/host/embedding-defaults.ts`
- `src/memory-host-sdk/host/embedding-input-limits.ts`
- `src/memory-host-sdk/host/embedding-inputs.ts`
- `src/memory-host-sdk/host/embedding-model-limits.ts`
- `src/memory-host-sdk/host/embedding-provider-adapter-utils.ts`
- `src/memory-host-sdk/host/embedding-vectors.ts`
- `src/memory-host-sdk/host/embeddings-debug.ts`
- `src/memory-host-sdk/host/embeddings-model-normalize.ts`
- `src/memory-host-sdk/host/embeddings-remote-client.ts`
- `src/memory-host-sdk/host/embeddings-remote-fetch.test.ts`
- `src/memory-host-sdk/host/embeddings-remote-fetch.ts`
- `src/memory-host-sdk/host/embeddings-remote-provider.ts`
- `src/memory-host-sdk/host/embeddings.test.ts`
- `src/memory-host-sdk/host/embeddings.ts`
- `src/memory-host-sdk/host/embeddings.types.ts`
- `src/memory-host-sdk/host/fs-utils.ts`
- `src/memory-host-sdk/host/internal.test.ts`
- `src/memory-host-sdk/host/internal.ts`
- `src/memory-host-sdk/host/memory-schema.ts`
- `src/memory-host-sdk/host/mirror.test.ts`
- `src/memory-host-sdk/host/multimodal.ts`
- `src/memory-host-sdk/host/node-llama.ts`
- `src/memory-host-sdk/host/post-json.test.ts`
- `src/memory-host-sdk/host/post-json.ts`
- `src/memory-host-sdk/host/qmd-process.ts`
- `src/memory-host-sdk/host/qmd-query-parser.test.ts`
- `src/memory-host-sdk/host/qmd-query-parser.ts`
- `src/memory-host-sdk/host/qmd-scope.test.ts`
- `src/memory-host-sdk/host/qmd-scope.ts`
- `src/memory-host-sdk/host/query-expansion.ts`
- `src/memory-host-sdk/host/read-file-shared.ts`
- ... 20 more paths in `leaf-impact.json`

## `src/shared-misc-runtime-support/startup-process`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/startup-process`
- Coverage: `fallback`
- Changed paths: `69`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/daemon/arg-split.ts`
- `src/daemon/cmd-argv.ts`
- `src/daemon/cmd-set.ts`
- `src/daemon/constants.ts`
- `src/daemon/exec-file.ts`
- `src/daemon/future-config-guard.ts`
- `src/daemon/inspect.test.ts`
- `src/daemon/inspect.ts`
- `src/daemon/launchd-plist.ts`
- `src/daemon/launchd-restart-handoff.test.ts`
- `src/daemon/launchd-restart-handoff.ts`
- `src/daemon/launchd.integration.e2e.test.ts`
- `src/daemon/launchd.test.ts`
- `src/daemon/launchd.ts`
- `src/daemon/paths.ts`
- `src/daemon/program-args.test.ts`
- `src/daemon/program-args.ts`
- `src/daemon/runtime-format.test.ts`
- `src/daemon/runtime-format.ts`
- `src/daemon/runtime-paths.test.ts`
- `src/daemon/runtime-paths.ts`
- `src/daemon/schtasks.install.test.ts`
- `src/daemon/schtasks.test.ts`
- `src/daemon/schtasks.ts`
- `src/daemon/service-audit.test.ts`
- `src/daemon/service-audit.ts`
- `src/daemon/service-env-plan.ts`
- `src/daemon/service-env-render-policy.ts`
- `src/daemon/service-env.test.ts`
- `src/daemon/service-env.ts`
- `src/daemon/service-layout.ts`
- `src/daemon/service-managed-env.ts`
- `src/daemon/service-path-policy.ts`
- `src/daemon/service-runtime.ts`
- `src/daemon/service-types.ts`
- `src/daemon/service.test.ts`
- `src/daemon/service.ts`
- `src/daemon/systemd-hints.test.ts`
- `src/daemon/systemd-linger.ts`
- `src/daemon/systemd-unavailable.test.ts`
- `src/daemon/systemd-unavailable.ts`
- `src/daemon/systemd.test.ts`
- `src/daemon/systemd.ts`
- `src/node-host/config.ts`
- `src/node-host/exec-policy.ts`
- `src/node-host/invoke-system-run-allowlist.ts`
- `src/node-host/invoke-system-run-plan.test.ts`
- `src/node-host/invoke-system-run.test.ts`
- `src/node-host/invoke-system-run.ts`
- `src/node-host/invoke.sanitize-env.test.ts`
- ... 19 more paths in `leaf-impact.json`

## `extensions/memory-media-voice-plugins/memory-core`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/memory-core`
- Coverage: `verified`
- Changed paths: `67`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/memory-core/api.ts`
- `extensions/memory-core/index.test.ts`
- `extensions/memory-core/index.ts`
- `extensions/memory-core/openclaw.plugin.json`
- `extensions/memory-core/package.json`
- `extensions/memory-core/src/cli.host.runtime.ts`
- `extensions/memory-core/src/cli.runtime.ts`
- `extensions/memory-core/src/cli.test.ts`
- `extensions/memory-core/src/cli.ts`
- `extensions/memory-core/src/concept-vocabulary.ts`
- `extensions/memory-core/src/config.test.ts`
- `extensions/memory-core/src/dreaming-command.test.ts`
- `extensions/memory-core/src/dreaming-command.ts`
- `extensions/memory-core/src/dreaming-narrative.test.ts`
- `extensions/memory-core/src/dreaming-narrative.ts`
- `extensions/memory-core/src/dreaming-phases.test.ts`
- `extensions/memory-core/src/dreaming-phases.ts`
- `extensions/memory-core/src/dreaming-repair.ts`
- `extensions/memory-core/src/dreaming.test.ts`
- `extensions/memory-core/src/dreaming.ts`
- `extensions/memory-core/src/flush-plan.ts`
- `extensions/memory-core/src/memory-tool-manager-mock.ts`
- `extensions/memory-core/src/memory/embeddings.test.ts`
- `extensions/memory-core/src/memory/embeddings.ts`
- `extensions/memory-core/src/memory/hybrid.ts`
- `extensions/memory-core/src/memory/index.test.ts`
- `extensions/memory-core/src/memory/index.ts`
- `extensions/memory-core/src/memory/manager-atomic-reindex.ts`
- `extensions/memory-core/src/memory/manager-batch-state.ts`
- `extensions/memory-core/src/memory/manager-db.ts`
- `extensions/memory-core/src/memory/manager-embedding-ops.ts`
- `extensions/memory-core/src/memory/manager-embedding-policy.test.ts`
- `extensions/memory-core/src/memory/manager-embedding-policy.ts`
- `extensions/memory-core/src/memory/manager-embedding-timeout.test.ts`
- `extensions/memory-core/src/memory/manager-provider-state.ts`
- `extensions/memory-core/src/memory/manager-reindex-state.ts`
- `extensions/memory-core/src/memory/manager-search.test.ts`
- `extensions/memory-core/src/memory/manager-search.ts`
- `extensions/memory-core/src/memory/manager-sync-control.ts`
- `extensions/memory-core/src/memory/manager-sync-ops.archive-delta-bypass.test.ts`
- `extensions/memory-core/src/memory/manager-sync-ops.ts`
- `extensions/memory-core/src/memory/manager.atomic-reindex.test.ts`
- `extensions/memory-core/src/memory/manager.mistral-provider.test.ts`
- `extensions/memory-core/src/memory/manager.readonly-recovery.test.ts`
- `extensions/memory-core/src/memory/manager.ts`
- `extensions/memory-core/src/memory/manager.watcher-config.test.ts`
- `extensions/memory-core/src/memory/provider-adapters.ts`
- `extensions/memory-core/src/memory/qmd-compat.test.ts`
- `extensions/memory-core/src/memory/qmd-compat.ts`
- `extensions/memory-core/src/memory/qmd-manager.test.ts`
- ... 17 more paths in `leaf-impact.json`

## `src/plugin-runtime-sdk/plugin-sdk`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugin-sdk`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `67`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/plugin-sdk/channel-activity-runtime.ts`
- `src/plugin-sdk/channel-config-helpers.test.ts`
- `src/plugin-sdk/channel-config-helpers.ts`
- `src/plugin-sdk/channel-config-schema-legacy.ts`
- `src/plugin-sdk/channel-config-schema.ts`
- `src/plugin-sdk/channel-contract-testing.test.ts`
- `src/plugin-sdk/channel-contract-testing.ts`
- `src/plugin-sdk/channel-contract.ts`
- `src/plugin-sdk/channel-entry-contract.test.ts`
- `src/plugin-sdk/channel-entry-contract.ts`
- `src/plugin-sdk/channel-feedback.ts`
- `src/plugin-sdk/channel-lifecycle.core.ts`
- `src/plugin-sdk/channel-lifecycle.queue.test.ts`
- `src/plugin-sdk/channel-mention-gating.ts`
- `src/plugin-sdk/channel-policy.ts`
- `src/plugin-sdk/channel-reply-pipeline.ts`
- `src/plugin-sdk/channel-route.test.ts`
- `src/plugin-sdk/channel-route.ts`
- `src/plugin-sdk/channel-send-result.ts`
- `src/plugin-sdk/channel-setup.test.ts`
- `src/plugin-sdk/channel-streaming.test.ts`
- `src/plugin-sdk/channel-streaming.ts`
- `src/plugin-sdk/channel-target-testing.ts`
- `src/plugin-sdk/channel-targets.ts`
- `src/plugin-sdk/channel-test-helpers.ts`
- `src/plugin-sdk/index.ts`
- `src/plugin-sdk/media-runtime.ts`
- `src/plugin-sdk/media-store.ts`
- `src/plugin-sdk/memory-core-bundled-runtime.test.ts`
- `src/plugin-sdk/memory-core-bundled-runtime.ts`
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
- `src/plugin-sdk/memory-host-events.test.ts`
- `src/plugin-sdk/memory-host-markdown.test.ts`
- `src/plugin-sdk/memory-host-markdown.ts`
- `src/plugin-sdk/memory-lancedb.ts`
- `src/plugin-sdk/provider-auth.ts`
- `src/plugin-sdk/provider-catalog-runtime.ts`
- `src/plugin-sdk/provider-catalog-shared.test.ts`
- `src/plugin-sdk/provider-catalog-shared.ts`
- ... 17 more paths in `leaf-impact.json`

## `src/cli-commands/status-gateway-channel`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/status-gateway-channel`
- Coverage: `verified`
- Changed paths: `66`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/daemon-cli/install.integration.test.ts`
- `src/cli/daemon-cli/install.test.ts`
- `src/cli/daemon-cli/install.ts`
- `src/cli/daemon-cli/lifecycle-core.config-guard.test.ts`
- `src/cli/daemon-cli/lifecycle-core.test.ts`
- `src/cli/daemon-cli/lifecycle-core.ts`
- `src/cli/daemon-cli/lifecycle.test.ts`
- `src/cli/daemon-cli/lifecycle.ts`
- `src/cli/daemon-cli/probe.test.ts`
- `src/cli/daemon-cli/probe.ts`
- `src/cli/daemon-cli/register-service-commands.test.ts`
- `src/cli/daemon-cli/register-service-commands.ts`
- `src/cli/daemon-cli/response.ts`
- `src/cli/daemon-cli/restart-health.test.ts`
- `src/cli/daemon-cli/restart-health.ts`
- `src/cli/daemon-cli/shared.ts`
- `src/cli/daemon-cli/start-repair.ts`
- `src/cli/daemon-cli/status.gather.test.ts`
- `src/cli/daemon-cli/status.gather.ts`
- `src/cli/daemon-cli/status.print.test.ts`
- `src/cli/daemon-cli/status.print.ts`
- `src/cli/daemon-cli/test-helpers/lifecycle-core-harness.ts`
- `src/cli/daemon-cli/types.ts`
- `src/commands/gateway-status/discovery.ts`
- `src/commands/gateway-status/helpers.test.ts`
- `src/commands/gateway-status/helpers.ts`
- `src/commands/gateway-status/output.test.ts`
- `src/commands/gateway-status/output.ts`
- `src/commands/gateway-status/probe-run.ts`
- `src/commands/status-all/channels.test.ts`
- `src/commands/status-all/channels.ts`
- `src/commands/status-all/diagnosis.test.ts`
- `src/commands/status-all/diagnosis.ts`
- `src/commands/status-all/format.test.ts`
- `src/commands/status-all/format.ts`
- `src/commands/status-all/gateway.ts`
- `src/commands/status-all/text-report.ts`
- `src/commands/status.command-report-data.test.ts`
- `src/commands/status.command-report-data.ts`
- `src/commands/status.command-sections.test.ts`
- `src/commands/status.command-sections.ts`
- `src/commands/status.command.ts`
- `src/commands/status.daemon.test.ts`
- `src/commands/status.daemon.ts`
- `src/commands/status.link-channel.ts`
- `src/commands/status.scan-memory.ts`
- `src/commands/status.scan-overview.test.ts`
- `src/commands/status.scan-overview.ts`
- `src/commands/status.scan.bootstrap-shared.ts`
- `src/commands/status.scan.deps.runtime.ts`
- ... 16 more paths in `leaf-impact.json`

## `src/capability-modules/media`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/media`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `65`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/media-generation/model-ref.ts`
- `src/media-generation/provider-capabilities.contract.test.ts`
- `src/media-generation/runtime-shared.test.ts`
- `src/media-generation/runtime-shared.ts`
- `src/media/audio-transcode.test.ts`
- `src/media/audio-transcode.ts`
- `src/media/channel-inbound-roots.fast-path.test.ts`
- `src/media/channel-inbound-roots.ts`
- `src/media/configured-max-bytes.ts`
- `src/media/document-extractors.runtime.ts`
- `src/media/fetch.test.ts`
- `src/media/fetch.ts`
- `src/media/ffmpeg-exec.test.ts`
- `src/media/ffmpeg-exec.ts`
- `src/media/host.test.ts`
- `src/media/host.ts`
- `src/media/image-ops.ts`
- `src/media/local-roots.test.ts`
- `src/media/media-reference.ts`
- `src/media/mime.test.ts`
- `src/media/mime.ts`
- `src/media/parse.test.ts`
- `src/media/parse.ts`
- `src/media/png-encode.ts`
- `src/media/qr-image.test.ts`
- `src/media/qr-image.ts`
- `src/media/qr-runtime.ts`
- `src/media/qr-terminal.test.ts`
- `src/media/qr-terminal.ts`
- `src/media/server.outside-workspace.test.ts`
- `src/media/server.runtime.ts`
- `src/media/server.test-support.ts`
- `src/media/server.test.ts`
- `src/media/server.ts`
- `src/media/store.test.ts`
- `src/media/store.ts`
- `src/media/test-helpers.ts`
- `src/media/video-dimensions.test.ts`
- `src/media/video-dimensions.ts`
- `src/media/web-media.test.ts`
- `src/media/web-media.ts`
- `src/music-generation/live-test-helpers.ts`
- `src/music-generation/normalization.ts`
- `src/music-generation/runtime-types.ts`
- `src/music-generation/runtime.test.ts`
- `src/music-generation/runtime.ts`
- `src/music-generation/types.ts`
- `src/realtime-transcription/websocket-session.test.ts`
- `src/realtime-transcription/websocket-session.ts`
- `src/realtime-voice/agent-consult-runtime.test.ts`
- ... 15 more paths in `leaf-impact.json`

## `ui/web-ui/i18n`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/i18n`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `64`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/src/i18n/.i18n/ar.meta.json`
- `ui/src/i18n/.i18n/ar.tm.jsonl`
- `ui/src/i18n/.i18n/de.meta.json`
- `ui/src/i18n/.i18n/de.tm.jsonl`
- `ui/src/i18n/.i18n/es.meta.json`
- `ui/src/i18n/.i18n/es.tm.jsonl`
- `ui/src/i18n/.i18n/fa.meta.json`
- `ui/src/i18n/.i18n/fa.tm.jsonl`
- `ui/src/i18n/.i18n/fr.meta.json`
- `ui/src/i18n/.i18n/fr.tm.jsonl`
- `ui/src/i18n/.i18n/glossary.ar.json`
- `ui/src/i18n/.i18n/glossary.fa.json`
- `ui/src/i18n/.i18n/glossary.it.json`
- `ui/src/i18n/.i18n/glossary.nl.json`
- `ui/src/i18n/.i18n/glossary.vi.json`
- `ui/src/i18n/.i18n/id.meta.json`
- `ui/src/i18n/.i18n/id.tm.jsonl`
- `ui/src/i18n/.i18n/it.meta.json`
- `ui/src/i18n/.i18n/it.tm.jsonl`
- `ui/src/i18n/.i18n/ja-JP.meta.json`
- `ui/src/i18n/.i18n/ja-JP.tm.jsonl`
- `ui/src/i18n/.i18n/ko.meta.json`
- `ui/src/i18n/.i18n/ko.tm.jsonl`
- `ui/src/i18n/.i18n/nl.meta.json`
- `ui/src/i18n/.i18n/nl.tm.jsonl`
- `ui/src/i18n/.i18n/pl.meta.json`
- `ui/src/i18n/.i18n/pl.tm.jsonl`
- `ui/src/i18n/.i18n/pt-BR.meta.json`
- `ui/src/i18n/.i18n/pt-BR.tm.jsonl`
- `ui/src/i18n/.i18n/raw-copy-baseline.json`
- `ui/src/i18n/.i18n/th.meta.json`
- `ui/src/i18n/.i18n/th.tm.jsonl`
- `ui/src/i18n/.i18n/tr.meta.json`
- `ui/src/i18n/.i18n/tr.tm.jsonl`
- `ui/src/i18n/.i18n/uk.meta.json`
- `ui/src/i18n/.i18n/uk.tm.jsonl`
- `ui/src/i18n/.i18n/vi.meta.json`
- `ui/src/i18n/.i18n/vi.tm.jsonl`
- `ui/src/i18n/.i18n/zh-CN.meta.json`
- `ui/src/i18n/.i18n/zh-CN.tm.jsonl`
- `ui/src/i18n/.i18n/zh-TW.meta.json`
- `ui/src/i18n/.i18n/zh-TW.tm.jsonl`
- `ui/src/i18n/lib/registry.ts`
- `ui/src/i18n/lib/types.ts`
- `ui/src/i18n/locales/ar.ts`
- `ui/src/i18n/locales/de.ts`
- `ui/src/i18n/locales/en.ts`
- `ui/src/i18n/locales/es.ts`
- `ui/src/i18n/locales/fa.ts`
- `ui/src/i18n/locales/fr.ts`
- ... 14 more paths in `leaf-impact.json`

## `src/reply-orchestration/commands/command-handlers`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/commands/command-handlers`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `62`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/reply/commands-acp.test.ts`
- `src/auto-reply/reply/commands-acp.ts`
- `src/auto-reply/reply/commands-acp/diagnostics.ts`
- `src/auto-reply/reply/commands-acp/shared.ts`
- `src/auto-reply/reply/commands-acp/targets.ts`
- `src/auto-reply/reply/commands-allowlist.test.ts`
- `src/auto-reply/reply/commands-allowlist.ts`
- `src/auto-reply/reply/commands-btw.test.ts`
- `src/auto-reply/reply/commands-compact.ts`
- `src/auto-reply/reply/commands-config.ts`
- `src/auto-reply/reply/commands-core.ts`
- `src/auto-reply/reply/commands-crestodian.ts`
- `src/auto-reply/reply/commands-diagnostics.test.ts`
- `src/auto-reply/reply/commands-diagnostics.ts`
- `src/auto-reply/reply/commands-dock.test.ts`
- `src/auto-reply/reply/commands-dock.ts`
- `src/auto-reply/reply/commands-export-common.ts`
- `src/auto-reply/reply/commands-export-session.test.ts`
- `src/auto-reply/reply/commands-export-session.ts`
- `src/auto-reply/reply/commands-export-trajectory.test.ts`
- `src/auto-reply/reply/commands-export-trajectory.ts`
- `src/auto-reply/reply/commands-gating.test.ts`
- `src/auto-reply/reply/commands-handlers.runtime.ts`
- `src/auto-reply/reply/commands-info.test.ts`
- `src/auto-reply/reply/commands-info.ts`
- `src/auto-reply/reply/commands-models.test.ts`
- `src/auto-reply/reply/commands-models.ts`
- `src/auto-reply/reply/commands-openclaw-cli.ts`
- `src/auto-reply/reply/commands-plugin.test.ts`
- `src/auto-reply/reply/commands-plugin.ts`
- `src/auto-reply/reply/commands-plugins.install.test.ts`
- `src/auto-reply/reply/commands-plugins.test.ts`
- `src/auto-reply/reply/commands-plugins.ts`
- `src/auto-reply/reply/commands-private-route.test.ts`
- `src/auto-reply/reply/commands-private-route.ts`
- `src/auto-reply/reply/commands-reset-hooks.test.ts`
- `src/auto-reply/reply/commands-reset-hooks.ts`
- `src/auto-reply/reply/commands-reset.ts`
- `src/auto-reply/reply/commands-session-abort.test-support.ts`
- `src/auto-reply/reply/commands-slash-parse.ts`
- `src/auto-reply/reply/commands-status.test.ts`
- `src/auto-reply/reply/commands-status.thinking-default.test.ts`
- `src/auto-reply/reply/commands-steer.runtime.ts`
- `src/auto-reply/reply/commands-steer.test.ts`
- `src/auto-reply/reply/commands-steer.ts`
- `src/auto-reply/reply/commands-subagents-dispatch.ts`
- `src/auto-reply/reply/commands-subagents-focus.test.ts`
- `src/auto-reply/reply/commands-subagents-info.test.ts`
- `src/auto-reply/reply/commands-subagents-routing.test.ts`
- `src/auto-reply/reply/commands-subagents-shared-focus.test.ts`
- ... 12 more paths in `leaf-impact.json`

## `src/config-secrets-security/config-schema-validation`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/config-schema-validation`
- Coverage: `verified`
- Changed paths: `58`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/config/doc-baseline.integration.test.ts`
- `src/config/doc-baseline.runtime.ts`
- `src/config/doc-baseline.ts`
- `src/config/schema.base.generated.test.ts`
- `src/config/schema.base.generated.ts`
- `src/config/schema.help.quality.test.ts`
- `src/config/schema.help.ts`
- `src/config/schema.hints.test.ts`
- `src/config/schema.labels.ts`
- `src/config/schema.tags.ts`
- `src/config/schema.test.ts`
- `src/config/schema.ts`
- `src/config/types.access-groups.ts`
- `src/config/types.agent-defaults.ts`
- `src/config/types.agents-shared.ts`
- `src/config/types.agents.ts`
- `src/config/types.base.ts`
- `src/config/types.browser.ts`
- `src/config/types.channels.ts`
- `src/config/types.commitments.ts`
- `src/config/types.crestodian.ts`
- `src/config/types.cron.ts`
- `src/config/types.discord.ts`
- `src/config/types.gateway.ts`
- `src/config/types.installs.ts`
- `src/config/types.memory.ts`
- `src/config/types.messages.ts`
- `src/config/types.models.ts`
- `src/config/types.msteams.ts`
- `src/config/types.openclaw.ts`
- `src/config/types.plugins.ts`
- `src/config/types.sandbox.ts`
- `src/config/types.slack.ts`
- `src/config/types.telegram.ts`
- `src/config/types.tools.ts`
- `src/config/types.ts`
- `src/config/types.tts.ts`
- `src/config/zod-schema.agent-defaults.test.ts`
- `src/config/zod-schema.agent-defaults.ts`
- `src/config/zod-schema.agent-model.ts`
- `src/config/zod-schema.agent-runtime.ts`
- `src/config/zod-schema.agents.ts`
- `src/config/zod-schema.core.ts`
- `src/config/zod-schema.hooks.ts`
- `src/config/zod-schema.installs.ts`
- `src/config/zod-schema.post-compaction-guard.test.ts`
- `src/config/zod-schema.providers-core.ts`
- `src/config/zod-schema.providers-whatsapp.test.ts`
- `src/config/zod-schema.providers-whatsapp.ts`
- `src/config/zod-schema.providers.lazy-runtime.test.ts`
- ... 8 more paths in `leaf-impact.json`

## `extensions/skill-plugins/feishu`

- Feature: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/feishu`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `57`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/feishu/src/async.test.ts`
- `extensions/feishu/src/async.ts`
- `extensions/feishu/src/audio-preflight.runtime.ts`
- `extensions/feishu/src/bitable.test.ts`
- `extensions/feishu/src/bitable.ts`
- `extensions/feishu/src/bot-content.ts`
- `extensions/feishu/src/bot-group-name.test.ts`
- `extensions/feishu/src/chat.test.ts`
- `extensions/feishu/src/chat.ts`
- `extensions/feishu/src/client-timeout.ts`
- `extensions/feishu/src/comment-dispatcher.ts`
- `extensions/feishu/src/comment-handler-runtime-api.ts`
- `extensions/feishu/src/comment-handler.test.ts`
- `extensions/feishu/src/comment-handler.ts`
- `extensions/feishu/src/comment-shared.ts`
- `extensions/feishu/src/comment-target.ts`
- `extensions/feishu/src/config-schema.test.ts`
- `extensions/feishu/src/dedup-runtime-api.ts`
- `extensions/feishu/src/dedup.ts`
- `extensions/feishu/src/dedupe-key.ts`
- `extensions/feishu/src/directory.test.ts`
- `extensions/feishu/src/directory.ts`
- `extensions/feishu/src/drive.test.ts`
- `extensions/feishu/src/drive.ts`
- `extensions/feishu/src/dynamic-agent.ts`
- `extensions/feishu/src/event-types.ts`
- `extensions/feishu/src/lifecycle.test-support.ts`
- `extensions/feishu/src/media.test.ts`
- `extensions/feishu/src/media.ts`
- `extensions/feishu/src/mention.ts`
- `extensions/feishu/src/monitor-transport-runtime-api.ts`
- `extensions/feishu/src/outbound.test.ts`
- `extensions/feishu/src/outbound.ts`
- `extensions/feishu/src/perm.ts`
- `extensions/feishu/src/pins.ts`
- `extensions/feishu/src/policy.test.ts`
- `extensions/feishu/src/policy.ts`
- `extensions/feishu/src/post.ts`
- `extensions/feishu/src/reactions.ts`
- `extensions/feishu/src/reply-dispatcher.test.ts`
- `extensions/feishu/src/reply-dispatcher.ts`
- `extensions/feishu/src/secret-contract.ts`
- `extensions/feishu/src/secret-input.ts`
- `extensions/feishu/src/send-result.ts`
- `extensions/feishu/src/sequential-queue.test.ts`
- `extensions/feishu/src/sequential-queue.ts`
- `extensions/feishu/src/session-conversation.ts`
- `extensions/feishu/src/setup-surface.test.ts`
- `extensions/feishu/src/setup-surface.ts`
- `extensions/feishu/src/streaming-card.test.ts`
- ... 7 more paths in `leaf-impact.json`

## `src/cli-commands/command-implementations/auth-provider-commands`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/auth-provider-commands`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `57`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/commands/auth-choice-legacy.test.ts`
- `src/commands/auth-choice-options.static.ts`
- `src/commands/auth-choice.apply-helpers.ts`
- `src/commands/auth-choice.apply.api-providers.test.ts`
- `src/commands/auth-choice.apply.plugin-provider.test.ts`
- `src/commands/auth-choice.apply.ts`
- `src/commands/auth-choice.default-model.ts`
- `src/commands/auth-choice.model-check.test.ts`
- `src/commands/auth-choice.model-check.ts`
- `src/commands/auth-choice.test.ts`
- `src/commands/model-allowlist.ts`
- `src/commands/model-picker.runtime.ts`
- `src/commands/model-picker.test.ts`
- `src/commands/models.list.e2e.test.ts`
- `src/commands/models.ts`
- `src/commands/models/auth-list.test.ts`
- `src/commands/models/auth-list.ts`
- `src/commands/models/auth-order.ts`
- `src/commands/models/auth.test.ts`
- `src/commands/models/auth.ts`
- `src/commands/models/list.auth-index.test.ts`
- `src/commands/models/list.auth-index.ts`
- `src/commands/models/list.auth-overview.test.ts`
- `src/commands/models/list.auth-overview.ts`
- `src/commands/models/list.format.ts`
- `src/commands/models/list.list-command.forward-compat.test.ts`
- `src/commands/models/list.list-command.ts`
- `src/commands/models/list.manifest-catalog.test.ts`
- `src/commands/models/list.manifest-catalog.ts`
- `src/commands/models/list.model-row.test.ts`
- `src/commands/models/list.model-row.ts`
- `src/commands/models/list.probe.targets.test.ts`
- `src/commands/models/list.probe.test.ts`
- `src/commands/models/list.probe.ts`
- `src/commands/models/list.provider-catalog.test.ts`
- `src/commands/models/list.provider-catalog.ts`
- `src/commands/models/list.provider-index-catalog.test.ts`
- `src/commands/models/list.provider-index-catalog.ts`
- `src/commands/models/list.registry-load.ts`
- `src/commands/models/list.registry.ts`
- `src/commands/models/list.row-sources.ts`
- `src/commands/models/list.rows.test.ts`
- `src/commands/models/list.rows.ts`
- `src/commands/models/list.runtime.ts`
- `src/commands/models/list.source-plan.test.ts`
- `src/commands/models/list.source-plan.ts`
- `src/commands/models/list.status-command.ts`
- `src/commands/models/list.status.test.ts`
- `src/commands/models/list.ts`
- `src/commands/models/load-config.runtime.ts`
- ... 7 more paths in `leaf-impact.json`

## `extensions/memory-media-voice-plugins/voice-call`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/voice-call`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `55`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/voice-call/README.md`
- `extensions/voice-call/api.ts`
- `extensions/voice-call/index.test.ts`
- `extensions/voice-call/index.ts`
- `extensions/voice-call/openclaw.plugin.json`
- `extensions/voice-call/package.json`
- `extensions/voice-call/runtime-api.ts`
- `extensions/voice-call/src/cli.test.ts`
- `extensions/voice-call/src/cli.ts`
- `extensions/voice-call/src/config-compat.ts`
- `extensions/voice-call/src/config.test.ts`
- `extensions/voice-call/src/config.ts`
- `extensions/voice-call/src/gateway-continue-operation.ts`
- `extensions/voice-call/src/http-headers.ts`
- `extensions/voice-call/src/manager.notify.test.ts`
- `extensions/voice-call/src/manager.restore.test.ts`
- `extensions/voice-call/src/manager.ts`
- `extensions/voice-call/src/manager/context.ts`
- `extensions/voice-call/src/manager/events.test.ts`
- `extensions/voice-call/src/manager/events.ts`
- `extensions/voice-call/src/manager/outbound.test.ts`
- `extensions/voice-call/src/manager/outbound.ts`
- `extensions/voice-call/src/manager/twiml.ts`
- `extensions/voice-call/src/media-stream.test.ts`
- `extensions/voice-call/src/media-stream.ts`
- `extensions/voice-call/src/providers/base.ts`
- `extensions/voice-call/src/providers/index.ts`
- `extensions/voice-call/src/providers/twilio.test.ts`
- `extensions/voice-call/src/providers/twilio.ts`
- `extensions/voice-call/src/providers/twilio/api.test.ts`
- `extensions/voice-call/src/providers/twilio/api.ts`
- `extensions/voice-call/src/providers/twilio/twiml-policy.ts`
- `extensions/voice-call/src/realtime-fast-context.test.ts`
- `extensions/voice-call/src/realtime-fast-context.ts`
- `extensions/voice-call/src/response-generator.test.ts`
- `extensions/voice-call/src/response-generator.ts`
- `extensions/voice-call/src/runtime.test.ts`
- `extensions/voice-call/src/runtime.ts`
- `extensions/voice-call/src/telephony-audio.ts`
- `extensions/voice-call/src/telephony-tts.test.ts`
- `extensions/voice-call/src/telephony-tts.ts`
- `extensions/voice-call/src/test-fixtures.ts`
- `extensions/voice-call/src/tunnel.ts`
- `extensions/voice-call/src/types.ts`
- `extensions/voice-call/src/webhook-exposure.test.ts`
- `extensions/voice-call/src/webhook-exposure.ts`
- `extensions/voice-call/src/webhook-security.ts`
- `extensions/voice-call/src/webhook.test.ts`
- `extensions/voice-call/src/webhook.ts`
- `extensions/voice-call/src/webhook/realtime-audio-pacer.test.ts`
- ... 5 more paths in `leaf-impact.json`

## `unmapped/src`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `55`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `src/bootstrap/node-startup-env.ts`
- `src/commitments/commitments-full-chain.integration.test.ts`
- `src/commitments/commitments-heartbeat-policy.e2e.test.ts`
- `src/commitments/config.ts`
- `src/commitments/extraction.test.ts`
- `src/commitments/extraction.ts`
- `src/commitments/model-selection.runtime.ts`
- `src/commitments/runtime.test.ts`
- `src/commitments/runtime.ts`
- `src/commitments/store.test.ts`
- `src/commitments/store.ts`
- `src/commitments/types.ts`
- `src/crestodian/assistant-backends.ts`
- `src/crestodian/assistant-prompts.ts`
- `src/crestodian/assistant.configured.test.ts`
- `src/crestodian/assistant.test.ts`
- `src/crestodian/assistant.ts`
- `src/crestodian/audit.test.ts`
- `src/crestodian/audit.ts`
- `src/crestodian/crestodian.test-helpers.ts`
- `src/crestodian/crestodian.test.ts`
- `src/crestodian/crestodian.ts`
- `src/crestodian/dialogue.ts`
- `src/crestodian/operations.test.ts`
- `src/crestodian/operations.ts`
- `src/crestodian/overview.test.ts`
- `src/crestodian/overview.ts`
- `src/crestodian/probes.ts`
- `src/crestodian/rescue-channel.live.test.ts`
- `src/crestodian/rescue-message.test.ts`
- `src/crestodian/rescue-message.ts`
- `src/crestodian/rescue-policy.test.ts`
- `src/crestodian/rescue-policy.ts`
- `src/crestodian/tui-backend.test.ts`
- `src/crestodian/tui-backend.ts`
- `src/plugin-state/plugin-state-store.e2e.test.ts`
- `src/plugin-state/plugin-state-store.paths.ts`
- `src/plugin-state/plugin-state-store.permissions.test.ts`
- `src/plugin-state/plugin-state-store.runtime.test.ts`
- `src/plugin-state/plugin-state-store.sqlite.ts`
- `src/plugin-state/plugin-state-store.test-helpers.ts`
- `src/plugin-state/plugin-state-store.test.ts`
- `src/plugin-state/plugin-state-store.ts`
- `src/plugin-state/plugin-state-store.types.ts`
- `src/tools/availability.test.ts`
- `src/tools/availability.ts`
- `src/tools/boundary.test.ts`
- `src/tools/descriptors.ts`
- `src/tools/diagnostics.ts`
- `src/tools/execution.ts`
- ... 5 more paths in `leaf-impact.json`

## `extensions/channel-plugins/bluebubbles`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/bluebubbles`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `53`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/bluebubbles/api.ts`
- `extensions/bluebubbles/doctor-contract-api.ts`
- `extensions/bluebubbles/openclaw.plugin.json`
- `extensions/bluebubbles/package.json`
- `extensions/bluebubbles/src/account-resolve.ts`
- `extensions/bluebubbles/src/accounts.ts`
- `extensions/bluebubbles/src/actions.test.ts`
- `extensions/bluebubbles/src/actions.ts`
- `extensions/bluebubbles/src/attachments.test.ts`
- `extensions/bluebubbles/src/attachments.ts`
- `extensions/bluebubbles/src/channel-shared.ts`
- `extensions/bluebubbles/src/channel.status.test.ts`
- `extensions/bluebubbles/src/channel.ts`
- `extensions/bluebubbles/src/client.ts`
- `extensions/bluebubbles/src/config-apply.ts`
- `extensions/bluebubbles/src/config-schema.ts`
- `extensions/bluebubbles/src/conversation-bindings.test.ts`
- `extensions/bluebubbles/src/conversation-bindings.ts`
- `extensions/bluebubbles/src/conversation-route.test.ts`
- `extensions/bluebubbles/src/conversation-route.ts`
- `extensions/bluebubbles/src/group-policy.ts`
- `extensions/bluebubbles/src/history.ts`
- `extensions/bluebubbles/src/inbound-dedupe.ts`
- `extensions/bluebubbles/src/media-send.test.ts`
- `extensions/bluebubbles/src/media-send.ts`
- `extensions/bluebubbles/src/monitor-debounce.ts`
- `extensions/bluebubbles/src/monitor-normalize.test.ts`
- `extensions/bluebubbles/src/monitor-normalize.ts`
- `extensions/bluebubbles/src/monitor-processing-api.ts`
- `extensions/bluebubbles/src/monitor-processing-chat-resolve.test.ts`
- `extensions/bluebubbles/src/monitor-processing.ts`
- `extensions/bluebubbles/src/monitor-reply-cache.test.ts`
- `extensions/bluebubbles/src/monitor-reply-cache.ts`
- `extensions/bluebubbles/src/monitor-reply-fetch.test.ts`
- `extensions/bluebubbles/src/monitor-reply-fetch.ts`
- `extensions/bluebubbles/src/monitor-shared.ts`
- `extensions/bluebubbles/src/monitor.test.ts`
- `extensions/bluebubbles/src/monitor.ts`
- `extensions/bluebubbles/src/monitor.webhook-auth.test.ts`
- `extensions/bluebubbles/src/monitor.webhook.test-helpers.ts`
- `extensions/bluebubbles/src/multipart.ts`
- `extensions/bluebubbles/src/participant-contact-names.test.ts`
- `extensions/bluebubbles/src/probe.ts`
- `extensions/bluebubbles/src/runtime-api.ts`
- `extensions/bluebubbles/src/runtime.ts`
- `extensions/bluebubbles/src/secret-contract.ts`
- `extensions/bluebubbles/src/session-route.test.ts`
- `extensions/bluebubbles/src/session-route.ts`
- `extensions/bluebubbles/src/setup-surface.test.ts`
- `extensions/bluebubbles/src/targets.ts`
- ... 3 more paths in `leaf-impact.json`

## `src/agent-runtime/runtime/command-session-store`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/command-session-store`
- Coverage: `verified`
- Changed paths: `53`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/command/attempt-execution.cli.test.ts`
- `src/agents/command/attempt-execution.helpers.ts`
- `src/agents/command/attempt-execution.shared.test.ts`
- `src/agents/command/attempt-execution.shared.ts`
- `src/agents/command/attempt-execution.test.ts`
- `src/agents/command/attempt-execution.ts`
- `src/agents/command/cli-compaction.test.ts`
- `src/agents/command/cli-compaction.ts`
- `src/agents/command/delivery.test.ts`
- `src/agents/command/delivery.ts`
- `src/agents/command/run-context.ts`
- `src/agents/command/session-store.test.ts`
- `src/agents/command/session-store.ts`
- `src/agents/command/session.resolve-session-key.test.ts`
- `src/agents/command/session.ts`
- `src/agents/command/types.ts`
- `src/tasks/detached-task-runtime-contract.ts`
- `src/tasks/detached-task-runtime-state.ts`
- `src/tasks/detached-task-runtime.test.ts`
- `src/tasks/detached-task-runtime.ts`
- `src/tasks/import-boundary.test-helpers.ts`
- `src/tasks/runtime-internal.ts`
- `src/tasks/task-boundaries.test.ts`
- `src/tasks/task-executor.ts`
- `src/tasks/task-flow-registry.audit.test.ts`
- `src/tasks/task-flow-registry.maintenance.test.ts`
- `src/tasks/task-flow-registry.maintenance.ts`
- `src/tasks/task-flow-registry.store.sqlite.ts`
- `src/tasks/task-flow-registry.store.test.ts`
- `src/tasks/task-flow-registry.test.ts`
- `src/tasks/task-flow-registry.ts`
- `src/tasks/task-flow-runtime-internal.ts`
- `src/tasks/task-owner-access.test.ts`
- `src/tasks/task-registry.audit.test.ts`
- `src/tasks/task-registry.audit.ts`
- `src/tasks/task-registry.maintenance.issue-60299.test.ts`
- `src/tasks/task-registry.maintenance.ts`
- `src/tasks/task-registry.reconcile.ts`
- `src/tasks/task-registry.store.sqlite.ts`
- `src/tasks/task-registry.store.test.ts`
- `src/tasks/task-registry.test.ts`
- `src/tasks/task-registry.ts`
- `src/tasks/task-status-access.ts`
- `src/trajectory/cleanup.test.ts`
- `src/trajectory/cleanup.ts`
- `src/trajectory/command-export.ts`
- `src/trajectory/export.test.ts`
- `src/trajectory/export.ts`
- `src/trajectory/metadata.test.ts`
- `src/trajectory/metadata.ts`
- ... 3 more paths in `leaf-impact.json`

## `src/capability-modules/media-understanding`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/media-understanding`
- Coverage: `fallback`
- Changed paths: `53`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/image-generation/image-assets.test.ts`
- `src/image-generation/image-assets.ts`
- `src/image-generation/live-test-helpers.ts`
- `src/image-generation/normalization.ts`
- `src/image-generation/openai-compatible-image-provider.test.ts`
- `src/image-generation/openai-compatible-image-provider.ts`
- `src/image-generation/provider-registry.allowlist.test.ts`
- `src/image-generation/provider-registry.test.ts`
- `src/image-generation/runtime-types.ts`
- `src/image-generation/runtime.test.ts`
- `src/image-generation/runtime.ts`
- `src/image-generation/types.ts`
- `src/link-understanding/apply.ts`
- `src/link-understanding/runner.ts`
- `src/media-understanding/apply.sanitize-mime.test.ts`
- `src/media-understanding/apply.test.ts`
- `src/media-understanding/apply.ts`
- `src/media-understanding/attachments.cache.ts`
- `src/media-understanding/attachments.normalize.ts`
- `src/media-understanding/attachments.ts`
- `src/media-understanding/audio-preflight.test.ts`
- `src/media-understanding/audio-preflight.ts`
- `src/media-understanding/audio.test-helpers.ts`
- `src/media-understanding/defaults.constants.ts`
- `src/media-understanding/defaults.test.ts`
- `src/media-understanding/defaults.ts`
- `src/media-understanding/echo-transcript.test.ts`
- `src/media-understanding/errors.ts`
- `src/media-understanding/format.test.ts`
- `src/media-understanding/image.test.ts`
- `src/media-understanding/image.ts`
- `src/media-understanding/manifest-metadata.ts`
- `src/media-understanding/media-understanding-misc.test.ts`
- `src/media-understanding/output-extract.ts`
- `src/media-understanding/provider-registry.allowlist.test.ts`
- `src/media-understanding/provider-registry.test.ts`
- `src/media-understanding/resolve.ts`
- `src/media-understanding/runner.auto-audio.test.ts`
- `src/media-understanding/runner.entries.ts`
- `src/media-understanding/runner.test-utils.ts`
- `src/media-understanding/runner.ts`
- `src/media-understanding/runner.video.test.ts`
- `src/media-understanding/runner.vision-skip.test.ts`
- `src/media-understanding/runtime-types.ts`
- `src/media-understanding/runtime.test.ts`
- `src/media-understanding/runtime.ts`
- `src/media-understanding/scope.ts`
- `src/media-understanding/shared.test.ts`
- `src/media-understanding/shared.ts`
- `src/media-understanding/transcribe-audio.test.ts`
- ... 3 more paths in `leaf-impact.json`

## `extensions/channel-plugins/mattermost`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/mattermost`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `52`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/mattermost/doctor-contract-api.ts`
- `extensions/mattermost/openclaw.plugin.json`
- `extensions/mattermost/package.json`
- `extensions/mattermost/runtime-api.ts`
- `extensions/mattermost/src/channel-actions-setup-status.contract.test.ts`
- `extensions/mattermost/src/channel-api.ts`
- `extensions/mattermost/src/channel-config-shared.ts`
- `extensions/mattermost/src/channel.test.ts`
- `extensions/mattermost/src/channel.ts`
- `extensions/mattermost/src/config-schema-core.ts`
- `extensions/mattermost/src/config-schema.test.ts`
- `extensions/mattermost/src/config-schema.ts`
- `extensions/mattermost/src/config-surface.ts`
- `extensions/mattermost/src/config-ui-hints.ts`
- `extensions/mattermost/src/doctor.ts`
- `extensions/mattermost/src/mattermost/accounts.test.ts`
- `extensions/mattermost/src/mattermost/accounts.ts`
- `extensions/mattermost/src/mattermost/draft-stream.test.ts`
- `extensions/mattermost/src/mattermost/draft-stream.ts`
- `extensions/mattermost/src/mattermost/interactions.ts`
- `extensions/mattermost/src/mattermost/model-picker.test.ts`
- `extensions/mattermost/src/mattermost/model-picker.ts`
- `extensions/mattermost/src/mattermost/monitor-auth.test.ts`
- `extensions/mattermost/src/mattermost/monitor-auth.ts`
- `extensions/mattermost/src/mattermost/monitor-gating.test.ts`
- `extensions/mattermost/src/mattermost/monitor-gating.ts`
- `extensions/mattermost/src/mattermost/monitor-helpers.ts`
- `extensions/mattermost/src/mattermost/monitor-websocket.test.ts`
- `extensions/mattermost/src/mattermost/monitor-websocket.ts`
- `extensions/mattermost/src/mattermost/monitor.authz.test.ts`
- `extensions/mattermost/src/mattermost/monitor.inbound-system-event.test.ts`
- `extensions/mattermost/src/mattermost/monitor.test.ts`
- `extensions/mattermost/src/mattermost/monitor.ts`
- `extensions/mattermost/src/mattermost/probe.ts`
- `extensions/mattermost/src/mattermost/reconnect.ts`
- `extensions/mattermost/src/mattermost/runtime-api.ts`
- `extensions/mattermost/src/mattermost/send.test.ts`
- `extensions/mattermost/src/mattermost/send.ts`
- `extensions/mattermost/src/mattermost/slash-commands.test.ts`
- `extensions/mattermost/src/mattermost/slash-commands.ts`
- `extensions/mattermost/src/mattermost/slash-http.send-config.test.ts`
- `extensions/mattermost/src/mattermost/slash-http.test.ts`
- `extensions/mattermost/src/mattermost/slash-http.ts`
- `extensions/mattermost/src/mattermost/slash-state.test.ts`
- `extensions/mattermost/src/mattermost/slash-state.ts`
- `extensions/mattermost/src/runtime-api.ts`
- `extensions/mattermost/src/secret-contract.ts`
- `extensions/mattermost/src/setup-core.ts`
- `extensions/mattermost/src/setup-surface.ts`
- `extensions/mattermost/src/setup.accounts.runtime.ts`
- ... 2 more paths in `leaf-impact.json`

## `test-infra/fixtures-and-helpers/fixtures`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/fixtures`
- Coverage: `fallback`
- Changed paths: `52`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `test-fixtures/talk-config-contract.json`
- `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.instructions.md`
- `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.source.json`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/README.md`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.discord-group.json`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.heartbeat-turn.json`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.telegram-direct.json`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/discord-group-codex-message-tool.md`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/telegram-direct-codex-message-tool.md`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/telegram-heartbeat-codex-tool.md`
- `test/fixtures/extension-relative-outside-package-inventory.json`
- `test/fixtures/talk-config-contract.json`
- `test/fixtures/telegram-qa-summary-rtt.json`
- `test/scripts/test-extension.test.ts`
- `test/setup-openclaw-runtime.ts`
- `test/test-env.test.ts`
- `test/test-env.ts`
- `test/tsconfig/tsconfig.core.test.agents.json`
- `test/tsconfig/tsconfig.core.test.json`
- `test/tsconfig/tsconfig.core.test.non-agents.json`
- `test/tsconfig/tsconfig.extensions.test.json`
- `test/tsconfig/tsconfig.test.json`
- `test/tsconfig/tsconfig.test.packages.json`
- `test/tsconfig/tsconfig.test.src.json`
- `test/tsconfig/tsconfig.test.ui.json`
- `test/vitest/vitest.agents-core.config.ts`
- `test/vitest/vitest.agents-paths.mjs`
- `test/vitest/vitest.agents-pi-embedded.config.ts`
- `test/vitest/vitest.agents-support.config.ts`
- `test/vitest/vitest.agents-tools.config.ts`
- `test/vitest/vitest.agents.config.ts`
- `test/vitest/vitest.auto-reply-reply.config.ts`
- `test/vitest/vitest.commands.config.ts`
- `test/vitest/vitest.config.ts`
- `test/vitest/vitest.e2e.config.ts`
- `test/vitest/vitest.gateway-server.config.ts`
- `test/vitest/vitest.gateway.config.ts`
- `test/vitest/vitest.infra.config.ts`
- `test/vitest/vitest.plugin-sdk-paths.mjs`
- `test/vitest/vitest.plugin-sdk.config.ts`
- `test/vitest/vitest.plugins.config.ts`
- `test/vitest/vitest.scoped-config.ts`
- `test/vitest/vitest.shared.config.ts`
- `test/vitest/vitest.test-shards.mjs`
- `test/vitest/vitest.tooling.config.ts`
- `test/vitest/vitest.ui.config.ts`
- `test/vitest/vitest.unit-fast-paths.mjs`
- `test/vitest/vitest.unit-paths.mjs`
- `test/vitest/vitest.unit-security.config.ts`
- `test/vitest/vitest.unit-src.config.ts`
- ... 2 more paths in `leaf-impact.json`

## `extensions/provider-plugins/openai`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/openai`
- Coverage: `verified`
- Changed paths: `51`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/openai/base-url.test.ts`
- `extensions/openai/base-url.ts`
- `extensions/openai/cli-backend.ts`
- `extensions/openai/embedding-batch.ts`
- `extensions/openai/embedding-provider.test.ts`
- `extensions/openai/embedding-provider.ts`
- `extensions/openai/image-generation-provider.test.ts`
- `extensions/openai/image-generation-provider.ts`
- `extensions/openai/index.test.ts`
- `extensions/openai/index.ts`
- `extensions/openai/media-understanding-provider.test.ts`
- `extensions/openai/media-understanding-provider.ts`
- `extensions/openai/memory-embedding-adapter.test.ts`
- `extensions/openai/memory-embedding-adapter.ts`
- `extensions/openai/native-web-search.ts`
- `extensions/openai/openai-codex-auth-identity.test.ts`
- `extensions/openai/openai-codex-auth-identity.ts`
- `extensions/openai/openai-codex-catalog.ts`
- `extensions/openai/openai-codex-device-code.test.ts`
- `extensions/openai/openai-codex-device-code.ts`
- `extensions/openai/openai-codex-provider.runtime.ts`
- `extensions/openai/openai-codex-provider.test.ts`
- `extensions/openai/openai-codex-provider.ts`
- `extensions/openai/openai-provider.live.test.ts`
- `extensions/openai/openai-provider.test.ts`
- `extensions/openai/openai-provider.ts`
- `extensions/openai/openai-tts.live.test.ts`
- `extensions/openai/openai.live.test.ts`
- `extensions/openai/openclaw.plugin.json`
- `extensions/openai/openclaw.plugin.test.ts`
- `extensions/openai/package.json`
- `extensions/openai/plugin-registration.contract.test.ts`
- `extensions/openai/prompt-overlay.ts`
- `extensions/openai/provider-auth.contract.test.ts`
- `extensions/openai/provider-policy-api.ts`
- `extensions/openai/provider-runtime.contract.test.ts`
- `extensions/openai/realtime-transcription-provider.test.ts`
- `extensions/openai/realtime-transcription-provider.ts`
- `extensions/openai/realtime-voice-provider.test.ts`
- `extensions/openai/realtime-voice-provider.ts`
- `extensions/openai/setup-api.ts`
- `extensions/openai/shared.ts`
- `extensions/openai/speech-provider.test.ts`
- `extensions/openai/speech-provider.ts`
- `extensions/openai/test-support/provider-catalog.contract-test-support.ts`
- `extensions/openai/thinking-policy.ts`
- `extensions/openai/transport-policy.test.ts`
- `extensions/openai/tts.test.ts`
- `extensions/openai/tts.ts`
- `extensions/openai/video-generation-provider.test.ts`
- ... 1 more paths in `leaf-impact.json`

## `ui/web-ui/components/app-shell-lifecycle`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/components/app-shell-lifecycle`
- Coverage: `fallback`
- Changed paths: `51`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/canvas-host/a2ui-shared.ts`
- `src/canvas-host/a2ui.ts`
- `src/canvas-host/a2ui/.bundle.hash`
- `src/canvas-host/a2ui/a2ui.bundle.js`
- `src/canvas-host/server.test.ts`
- `src/canvas-host/server.ts`
- `ui/src/ui/app-defaults.test.ts`
- `ui/src/ui/app-gateway-chat-load.node.test.ts`
- `ui/src/ui/app-gateway.node.test.ts`
- `ui/src/ui/app-gateway.sessions.node.test.ts`
- `ui/src/ui/app-scroll.test.ts`
- `ui/src/ui/app.talk.test.ts`
- `ui/src/ui/assistant-identity.test.ts`
- `ui/src/ui/chat-event-reload.test.ts`
- `ui/src/ui/chat/build-chat-items.test.ts`
- `ui/src/ui/chat/chat-avatar.test.ts`
- `ui/src/ui/chat/chat-responsive.browser.test.ts`
- `ui/src/ui/chat/context-notice.test.ts`
- `ui/src/ui/chat/grouped-render.test.ts`
- `ui/src/ui/chat/history-merge.test.ts`
- `ui/src/ui/chat/message-normalizer.test.ts`
- `ui/src/ui/chat/role-normalizer.test.ts`
- `ui/src/ui/chat/run-controls.test.ts`
- `ui/src/ui/chat/session-controls.test.ts`
- `ui/src/ui/chat/slash-command-executor.node.test.ts`
- `ui/src/ui/chat/slash-commands.node.test.ts`
- `ui/src/ui/chat/status-indicators.test.ts`
- `ui/src/ui/chat/tool-cards.test.ts`
- `ui/src/ui/config-form.browser.test.ts`
- `ui/src/ui/control-ui-performance.test.ts`
- `ui/src/ui/gateway.node.test.ts`
- `ui/src/ui/lazy-view.browser.test.ts`
- `ui/src/ui/markdown.test.ts`
- `ui/src/ui/realtime-talk-google-live.test.ts`
- `ui/src/ui/realtime-talk-webrtc.test.ts`
- `ui/src/ui/realtime-talk.test.ts`
- `ui/src/ui/usage-cache-status.test.ts`
- `ui/src/ui/views/agents-utils.test.ts`
- `ui/src/ui/views/agents.test.ts`
- `ui/src/ui/views/chat.test.ts`
- `ui/src/ui/views/command-palette.test.ts`
- `ui/src/ui/views/config-presets.test.ts`
- `ui/src/ui/views/config-quick.test.ts`
- `ui/src/ui/views/cron.test.ts`
- `ui/src/ui/views/debug.test.ts`
- `ui/src/ui/views/dreaming.test.ts`
- `ui/src/ui/views/exec-approval.test.ts`
- `ui/src/ui/views/sessions.test.ts`
- `ui/src/ui/views/skills.test.ts`
- `ui/src/ui/views/usage-metrics.test.ts`
- ... 1 more paths in `leaf-impact.json`

## `src/cli-commands/program-registration`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/program-registration`
- Coverage: `verified`
- Changed paths: `48`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/argv.test.ts`
- `src/cli/argv.ts`
- `src/cli/program.force.test.ts`
- `src/cli/program.nodes-basic.e2e.test.ts`
- `src/cli/program.smoke.test.ts`
- `src/cli/program.test-mocks.ts`
- `src/cli/program/action-reparse.test.ts`
- `src/cli/program/action-reparse.ts`
- `src/cli/program/command-descriptor-utils.ts`
- `src/cli/program/command-group-descriptors.ts`
- `src/cli/program/command-registry-core.ts`
- `src/cli/program/command-registry.test.ts`
- `src/cli/program/config-guard.test.ts`
- `src/cli/program/config-guard.ts`
- `src/cli/program/core-command-descriptors.ts`
- `src/cli/program/helpers.test.ts`
- `src/cli/program/helpers.ts`
- `src/cli/program/json-mode.ts`
- `src/cli/program/message/helpers.test.ts`
- `src/cli/program/message/helpers.ts`
- `src/cli/program/message/register.read-edit-delete.ts`
- `src/cli/program/message/register.thread.ts`
- `src/cli/program/parent-default-help.test.ts`
- `src/cli/program/parent-default-help.ts`
- `src/cli/program/preaction.test.ts`
- `src/cli/program/preaction.ts`
- `src/cli/program/register-command-groups.ts`
- `src/cli/program/register-lazy-command.ts`
- `src/cli/program/register.agent.test.ts`
- `src/cli/program/register.agent.ts`
- `src/cli/program/register.crestodian.ts`
- `src/cli/program/register.migrate.ts`
- `src/cli/program/register.onboard.test.ts`
- `src/cli/program/register.onboard.ts`
- `src/cli/program/register.setup.test.ts`
- `src/cli/program/register.setup.ts`
- `src/cli/program/register.status-health-sessions.test.ts`
- `src/cli/program/register.status-health-sessions.ts`
- `src/cli/program/register.subclis-core.ts`
- `src/cli/program/register.subclis.test.ts`
- `src/cli/program/register.subclis.ts`
- `src/cli/program/root-help.test.ts`
- `src/cli/program/route-args.test.ts`
- `src/cli/program/route-args.ts`
- `src/cli/program/route-specs.ts`
- `src/cli/program/routed-command-definitions.ts`
- `src/cli/program/routes.test.ts`
- `src/cli/program/routes.ts`

## `apps/ios-android/shared-kit`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/shared-kit`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `47`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/shared/OpenClawKit/Package.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatComposer.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownPreprocessor.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownRenderer.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMessageViews.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatModels.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatPayloadDecoding.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatSessions.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTheme.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTransport.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatView.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/AnyCodable+Helpers.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/AnyCodable.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/BonjourTypes.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/CaptureRateLimits.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/DeepLinks.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/DeviceAuthPayload.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/DeviceAuthStore.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/DeviceIdentity.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayChannel.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayConnectChallengeSupport.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayConnectionProblem.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayDiscoveryStatusText.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayErrors.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayNodeSession.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayPayloadDecoding.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayTLSPinning.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GenericPasswordKeychainStore.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/InstanceIdentity.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/LocationCurrentRequest.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/LocationServiceSupport.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/OpenClawKitResources.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/PhotoCapture.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/ShareToAgentDeepLink.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/TalkConfigParsing.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/TalkPromptBuilder.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/TalkSystemSpeechSynthesizer.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawProtocol/AnyCodable.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawProtocol/GatewayModels.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawProtocol/WizardHelpers.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/ChatViewModelTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/DeepLinksSecurityTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/GatewayErrorsTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/GatewayNodeSessionTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/TalkConfigContractTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/TalkConfigParsingTests.swift`

## `apps/macos/app-sources`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/macos/app-sources`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `46`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/macos/Package.resolved`
- `apps/macos/Package.swift`
- `apps/macos/Sources/OpenClaw/AppState.swift`
- `apps/macos/Sources/OpenClaw/CanvasFileWatcher.swift`
- `apps/macos/Sources/OpenClaw/CanvasManager.swift`
- `apps/macos/Sources/OpenClaw/CanvasWindowController.swift`
- `apps/macos/Sources/OpenClaw/ConfigStore.swift`
- `apps/macos/Sources/OpenClaw/Constants.swift`
- `apps/macos/Sources/OpenClaw/ContextRootMenuLabelView.swift`
- `apps/macos/Sources/OpenClaw/DebugSettings.swift`
- `apps/macos/Sources/OpenClaw/ExecAllowlistMatcher.swift`
- `apps/macos/Sources/OpenClaw/ExecApprovals.swift`
- `apps/macos/Sources/OpenClaw/ExecApprovalsSocket.swift`
- `apps/macos/Sources/OpenClaw/GatewayConnection.swift`
- `apps/macos/Sources/OpenClaw/GatewayDiscoverySelectionSupport.swift`
- `apps/macos/Sources/OpenClaw/GatewayLaunchAgentManager.swift`
- `apps/macos/Sources/OpenClaw/HostEnvSecurityPolicy.generated.swift`
- `apps/macos/Sources/OpenClaw/Logging/OpenClawLogging.swift`
- `apps/macos/Sources/OpenClaw/MenuBar.swift`
- `apps/macos/Sources/OpenClaw/MenuContentView.swift`
- `apps/macos/Sources/OpenClaw/MenuSessionsInjector.swift`
- `apps/macos/Sources/OpenClaw/ModelCatalogLoader.swift`
- `apps/macos/Sources/OpenClaw/NodeMode/MacNodeBrowserProxy.swift`
- `apps/macos/Sources/OpenClaw/NodeMode/MacNodeModeCoordinator.swift`
- `apps/macos/Sources/OpenClaw/NodesMenu.swift`
- `apps/macos/Sources/OpenClaw/OpenClawConfigFile.swift`
- `apps/macos/Sources/OpenClaw/RemotePortTunnel.swift`
- `apps/macos/Sources/OpenClaw/SessionData.swift`
- `apps/macos/Sources/OpenClaw/SpeechAudioBufferNormalizer.swift`
- `apps/macos/Sources/OpenClaw/TailscaleIntegrationSection.swift`
- `apps/macos/Sources/OpenClaw/TalkModeController.swift`
- `apps/macos/Sources/OpenClaw/TalkModeGatewayConfig.swift`
- `apps/macos/Sources/OpenClaw/TalkModeRuntime.swift`
- `apps/macos/Sources/OpenClaw/TalkSpeechInterruptMonitor.swift`
- `apps/macos/Sources/OpenClaw/VoicePushToTalk.swift`
- `apps/macos/Sources/OpenClaw/VoiceSessionCoordinator.swift`
- `apps/macos/Sources/OpenClaw/VoiceWakeForwarder.swift`
- `apps/macos/Sources/OpenClaw/VoiceWakeRecognitionDebugSupport.swift`
- `apps/macos/Sources/OpenClaw/VoiceWakeRuntime.swift`
- `apps/macos/Sources/OpenClaw/VoiceWakeSettings.swift`
- `apps/macos/Sources/OpenClaw/VoiceWakeTester.swift`
- `apps/macos/Sources/OpenClaw/VoiceWakeTextUtils.swift`
- `apps/macos/Sources/OpenClaw/WebChatManager.swift`
- `apps/macos/Sources/OpenClaw/WebChatSwiftUI.swift`
- `apps/macos/Sources/OpenClawMacCLI/WizardCommand.swift`
- `apps/macos/Sources/OpenClawProtocol/GatewayModels.swift`

## `extensions/channel-plugins/feishu`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/feishu`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `46`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/feishu/api.ts`
- `extensions/feishu/openclaw.plugin.json`
- `extensions/feishu/package.json`
- `extensions/feishu/runtime-api.ts`
- `extensions/feishu/src/bot.broadcast.test.ts`
- `extensions/feishu/src/bot.card-action.test.ts`
- `extensions/feishu/src/bot.checkBotMentioned.test.ts`
- `extensions/feishu/src/bot.helpers.test.ts`
- `extensions/feishu/src/bot.test.ts`
- `extensions/feishu/src/bot.ts`
- `extensions/feishu/src/card-action.ts`
- `extensions/feishu/src/card-interaction.ts`
- `extensions/feishu/src/card-ux-launcher.test.ts`
- `extensions/feishu/src/card-ux-launcher.ts`
- `extensions/feishu/src/channel.test.ts`
- `extensions/feishu/src/channel.ts`
- `extensions/feishu/src/client.test.ts`
- `extensions/feishu/src/client.ts`
- `extensions/feishu/src/config-schema.ts`
- `extensions/feishu/src/docx-color-text.ts`
- `extensions/feishu/src/docx-table-ops.ts`
- `extensions/feishu/src/docx-types.ts`
- `extensions/feishu/src/docx.test.ts`
- `extensions/feishu/src/docx.ts`
- `extensions/feishu/src/monitor.account.ts`
- `extensions/feishu/src/monitor.acp-init-failure.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.bot-identity.ts`
- `extensions/feishu/src/monitor.bot-menu-handler.ts`
- `extensions/feishu/src/monitor.bot-menu.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.broadcast.reply-once.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.card-action.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.cleanup.test.ts`
- `extensions/feishu/src/monitor.comment.test.ts`
- `extensions/feishu/src/monitor.comment.ts`
- `extensions/feishu/src/monitor.message-handler.ts`
- `extensions/feishu/src/monitor.reaction.test.ts`
- `extensions/feishu/src/monitor.reply-once.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.startup.test.ts`
- `extensions/feishu/src/monitor.startup.ts`
- `extensions/feishu/src/monitor.transport.ts`
- `extensions/feishu/src/monitor.webhook-security.test.ts`
- `extensions/feishu/src/send.reply-fallback.test.ts`
- `extensions/feishu/src/send.test.ts`
- `extensions/feishu/src/send.ts`
- `extensions/feishu/src/thread-bindings.test.ts`
- `extensions/feishu/src/thread-bindings.ts`

## `ui/provider-channel-settings/web-settings`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/provider-channel-settings/web-settings`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `45`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/package.json`
- `ui/src/ui/app-channels.test.ts`
- `ui/src/ui/app-channels.ts`
- `ui/src/ui/app-defaults.ts`
- `ui/src/ui/app-gateway.ts`
- `ui/src/ui/app-lifecycle.ts`
- `ui/src/ui/app-render-usage-tab.ts`
- `ui/src/ui/app-scroll.ts`
- `ui/src/ui/app-settings.refresh-active-tab.node.test.ts`
- `ui/src/ui/app-settings.ts`
- `ui/src/ui/app-tool-stream.ts`
- `ui/src/ui/app-view-state.ts`
- `ui/src/ui/assistant-identity.ts`
- `ui/src/ui/chat-event-reload.ts`
- `ui/src/ui/chat-model.test-helpers.ts`
- `ui/src/ui/control-ui-performance.ts`
- `ui/src/ui/controllers/config.test.ts`
- `ui/src/ui/controllers/config.ts`
- `ui/src/ui/cron-payload.ts`
- `ui/src/ui/custom-theme.test.ts`
- `ui/src/ui/custom-theme.ts`
- `ui/src/ui/format.test.ts`
- `ui/src/ui/format.ts`
- `ui/src/ui/gateway.ts`
- `ui/src/ui/lazy-view.ts`
- `ui/src/ui/markdown.ts`
- `ui/src/ui/navigation.browser.test.ts`
- `ui/src/ui/push-subscription.ts`
- `ui/src/ui/session-key.ts`
- `ui/src/ui/sidebar-content.ts`
- `ui/src/ui/strip-thinking-tags.ts`
- `ui/src/ui/test-helpers/app-mount.ts`
- `ui/src/ui/theme.ts`
- `ui/src/ui/types.ts`
- `ui/src/ui/types/chat-types.ts`
- `ui/src/ui/ui-types.ts`
- `ui/src/ui/usage-cache-status.ts`
- `ui/src/ui/usage-helpers.ts`
- `ui/src/ui/usage-types.ts`
- `ui/src/ui/uuid.ts`
- `ui/src/ui/views/config-form.node.ts`
- `ui/src/ui/views/config-form.render.ts`
- `ui/src/ui/views/config-form.shared.ts`
- `ui/src/ui/views/config.browser.test.ts`
- `ui/src/ui/views/config.ts`

## `apps/ios-android/ios-app`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/ios-app`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `44`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/ios/Config/Version.xcconfig`
- `apps/ios/README.md`
- `apps/ios/Sources/Camera/CameraController.swift`
- `apps/ios/Sources/Contacts/ContactsService.swift`
- `apps/ios/Sources/Device/DeviceInfoHelper.swift`
- `apps/ios/Sources/Device/NodeDisplayName.swift`
- `apps/ios/Sources/EventKit/EventKitAuthorization.swift`
- `apps/ios/Sources/Gateway/GatewayConnectionController.swift`
- `apps/ios/Sources/Gateway/GatewayDiscoveryModel.swift`
- `apps/ios/Sources/Gateway/GatewaySettingsStore.swift`
- `apps/ios/Sources/HomeToolbar.swift`
- `apps/ios/Sources/Location/LocationService.swift`
- `apps/ios/Sources/Location/SignificantLocationMonitor.swift`
- `apps/ios/Sources/Media/PhotoLibraryService.swift`
- `apps/ios/Sources/Model/NodeAppModel.swift`
- `apps/ios/Sources/Motion/MotionService.swift`
- `apps/ios/Sources/Onboarding/GatewayOnboardingView.swift`
- `apps/ios/Sources/Onboarding/OnboardingStateStore.swift`
- `apps/ios/Sources/Onboarding/OnboardingWizardView.swift`
- `apps/ios/Sources/Onboarding/QRScannerView.swift`
- `apps/ios/Sources/OpenClawApp.swift`
- `apps/ios/Sources/Push/BackgroundAliveBeacon.swift`
- `apps/ios/Sources/Push/ExecApprovalNotificationBridge.swift`
- `apps/ios/Sources/Push/PushRegistrationManager.swift`
- `apps/ios/Sources/Push/PushRelayClient.swift`
- `apps/ios/Sources/Reminders/RemindersService.swift`
- `apps/ios/Sources/RootCanvas.swift`
- `apps/ios/Sources/Screen/ScreenController.swift`
- `apps/ios/Sources/Screen/ScreenRecordService.swift`
- `apps/ios/Sources/Services/NodeServiceProtocols.swift`
- `apps/ios/Sources/Services/NotificationService.swift`
- `apps/ios/Sources/Services/WatchConnectivityTransport.swift`
- `apps/ios/Sources/Services/WatchMessagingPayloadCodec.swift`
- `apps/ios/Sources/Settings/SettingsTab.swift`
- `apps/ios/Sources/Settings/VoiceWakeWordsSettingsView.swift`
- `apps/ios/Sources/Status/StatusActivityBuilder.swift`
- `apps/ios/Sources/Status/StatusGlassCard.swift`
- `apps/ios/Sources/Status/StatusPill.swift`
- `apps/ios/Sources/Voice/TalkModeManager.swift`
- `apps/ios/Sources/Voice/TalkSpeechLocale.swift`
- `apps/ios/Tests/BackgroundAliveBeaconTests.swift`
- `apps/ios/Tests/DeepLinkParserTests.swift`
- `apps/ios/Tests/Logic/TalkConfigParsingTests.swift`
- `apps/ios/Tests/TalkSpeechLocaleTests.swift`

## `docs/mintlify/tools`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/tools`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `43`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/tools/acp-agents-setup.md`
- `docs/tools/acp-agents.md`
- `docs/tools/brave-search.md`
- `docs/tools/browser-control.md`
- `docs/tools/browser-linux-troubleshooting.md`
- `docs/tools/browser-wsl2-windows-remote-cdp-troubleshooting.md`
- `docs/tools/browser.md`
- `docs/tools/btw.md`
- `docs/tools/clawhub.md`
- `docs/tools/code-execution.md`
- `docs/tools/creating-skills.md`
- `docs/tools/diffs.md`
- `docs/tools/exa-search.md`
- `docs/tools/exec-approvals-advanced.md`
- `docs/tools/exec-approvals.md`
- `docs/tools/exec.md`
- `docs/tools/firecrawl.md`
- `docs/tools/gemini-search.md`
- `docs/tools/grok-search.md`
- `docs/tools/image-generation.md`
- `docs/tools/index.md`
- `docs/tools/kimi-search.md`
- `docs/tools/llm-task.md`
- `docs/tools/lobster.md`
- `docs/tools/loop-detection.md`
- `docs/tools/media-overview.md`
- `docs/tools/minimax-search.md`
- `docs/tools/multi-agent-sandbox-tools.md`
- `docs/tools/music-generation.md`
- `docs/tools/ollama-search.md`
- `docs/tools/plugin.md`
- `docs/tools/reactions.md`
- `docs/tools/searxng-search.md`
- `docs/tools/skills.md`
- `docs/tools/slash-commands.md`
- `docs/tools/steer.md`
- `docs/tools/subagents.md`
- `docs/tools/thinking.md`
- `docs/tools/trajectory.md`
- `docs/tools/tts.md`
- `docs/tools/video-generation.md`
- `docs/tools/web-fetch.md`
- `docs/tools/web.md`

## `src/config-secrets-security/security-guards`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/security-guards`
- Coverage: `verified`
- Changed paths: `42`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/net/ssrf.dispatcher.test.ts`
- `src/infra/net/ssrf.test.ts`
- `src/infra/net/ssrf.ts`
- `src/security/audit-channel-dm-policy.test.ts`
- `src/security/audit-channel-readonly-setup-fallback.test.ts`
- `src/security/audit-channel-security.test-helpers.ts`
- `src/security/audit-channel.ts`
- `src/security/audit-config-include-perms.test.ts`
- `src/security/audit-extra.async.test.ts`
- `src/security/audit-extra.async.ts`
- `src/security/audit-extra.summary.ts`
- `src/security/audit-extra.sync.test.ts`
- `src/security/audit-extra.sync.ts`
- `src/security/audit-gateway-config.ts`
- `src/security/audit-gateway-exposure.test.ts`
- `src/security/audit-model-hygiene.test.ts`
- `src/security/audit-model-refs.ts`
- `src/security/audit-node-command-findings.test.ts`
- `src/security/audit-plugin-readonly-scope.test.ts`
- `src/security/audit-plugins-trust.test.ts`
- `src/security/audit-plugins-trust.ts`
- `src/security/audit-sandbox-docker-config.test.ts`
- `src/security/audit-small-model-risk.test.ts`
- `src/security/audit-workspace-skill-escape.test.ts`
- `src/security/audit-workspace-skills.ts`
- `src/security/audit.nondeep.runtime.ts`
- `src/security/audit.test-helpers.ts`
- `src/security/audit.ts`
- `src/security/dangerous-config-flags-core.ts`
- `src/security/dangerous-config-flags.test.ts`
- `src/security/dangerous-config-flags.ts`
- `src/security/dm-policy-shared.test.ts`
- `src/security/dm-policy-shared.ts`
- `src/security/fix.ts`
- `src/security/installed-plugin-dirs.ts`
- `src/security/safe-regex.test.ts`
- `src/security/safe-regex.ts`
- `src/security/secret-equal.ts`
- `src/security/skill-scanner.test.ts`
- `src/security/skill-scanner.ts`
- `src/security/windows-acl.test.ts`
- `src/security/windows-acl.ts`

## `src/config-secrets-security/sessions`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/sessions`
- Coverage: `verified`
- Changed paths: `42`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/config/sessions/artifacts.test.ts`
- `src/config/sessions/artifacts.ts`
- `src/config/sessions/cleanup-service.ts`
- `src/config/sessions/combined-store-gateway.ts`
- `src/config/sessions/delivery-info.test.ts`
- `src/config/sessions/delivery-info.ts`
- `src/config/sessions/disk-budget.test.ts`
- `src/config/sessions/disk-budget.ts`
- `src/config/sessions/lifecycle.ts`
- `src/config/sessions/main-session.runtime.ts`
- `src/config/sessions/metadata.ts`
- `src/config/sessions/paths.ts`
- `src/config/sessions/reset-policy.ts`
- `src/config/sessions/runtime-types.ts`
- `src/config/sessions/session-file.ts`
- `src/config/sessions/session-key.test.ts`
- `src/config/sessions/session-key.ts`
- `src/config/sessions/sessions.test.ts`
- `src/config/sessions/store-cache.ts`
- `src/config/sessions/store-load.ts`
- `src/config/sessions/store-lock-state.ts`
- `src/config/sessions/store-maintenance-runtime.ts`
- `src/config/sessions/store-maintenance.ts`
- `src/config/sessions/store-migrations.ts`
- `src/config/sessions/store-writer-state.ts`
- `src/config/sessions/store-writer.test.ts`
- `src/config/sessions/store-writer.ts`
- `src/config/sessions/store.lock.test.ts`
- `src/config/sessions/store.pruning.integration.test.ts`
- `src/config/sessions/store.pruning.test.ts`
- `src/config/sessions/store.skills-stripping.test.ts`
- `src/config/sessions/store.ts`
- `src/config/sessions/targets.test.ts`
- `src/config/sessions/targets.ts`
- `src/config/sessions/transcript-append.ts`
- `src/config/sessions/transcript.test.ts`
- `src/config/sessions/transcript.ts`
- `src/config/sessions/types.ts`
- `src/sessions/input-provenance.test.ts`
- `src/sessions/input-provenance.ts`
- `src/sessions/level-overrides.ts`
- `src/sessions/session-lifecycle-events.test.ts`

## `src/shared-misc-runtime-support/logging-support`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/logging-support`
- Coverage: `verified`
- Changed paths: `42`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/logger.test.ts`
- `src/logging/config.test.ts`
- `src/logging/config.ts`
- `src/logging/console-capture.test.ts`
- `src/logging/console.ts`
- `src/logging/diagnostic-log-events.test.ts`
- `src/logging/diagnostic-memory.ts`
- `src/logging/diagnostic-phase.ts`
- `src/logging/diagnostic-run-activity.ts`
- `src/logging/diagnostic-session-attention.test.ts`
- `src/logging/diagnostic-session-attention.ts`
- `src/logging/diagnostic-session-context.test.ts`
- `src/logging/diagnostic-session-context.ts`
- `src/logging/diagnostic-session-state.ts`
- `src/logging/diagnostic-stability-bundle.test.ts`
- `src/logging/diagnostic-stability-bundle.ts`
- `src/logging/diagnostic-stability.test.ts`
- `src/logging/diagnostic-stability.ts`
- `src/logging/diagnostic-stuck-session-recovery.integration.test.ts`
- `src/logging/diagnostic-stuck-session-recovery.runtime.test.ts`
- `src/logging/diagnostic-stuck-session-recovery.runtime.ts`
- `src/logging/diagnostic-support-bundle.test.ts`
- `src/logging/diagnostic-support-bundle.ts`
- `src/logging/diagnostic-support-export.test.ts`
- `src/logging/diagnostic.test.ts`
- `src/logging/diagnostic.ts`
- `src/logging/log-file-path.ts`
- `src/logging/log-file-size-cap.test.ts`
- `src/logging/log-tail.ts`
- `src/logging/logger-env.test.ts`
- `src/logging/logger-redaction-behavior.test.ts`
- `src/logging/logger-settings.test.ts`
- `src/logging/logger-transport.test.ts`
- `src/logging/logger.browser-import.test.ts`
- `src/logging/logger.ts`
- `src/logging/parse-log-line.ts`
- `src/logging/redact-bounded.ts`
- `src/logging/redact.test.ts`
- `src/logging/redact.ts`
- `src/logging/subsystem.test.ts`
- `src/logging/subsystem.ts`
- `src/logging/timestamps.ts`

## `docs/mintlify/cli`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/cli`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `41`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/cli/agent.md`
- `docs/cli/agents.md`
- `docs/cli/backup.md`
- `docs/cli/browser.md`
- `docs/cli/channels.md`
- `docs/cli/commitments.md`
- `docs/cli/config.md`
- `docs/cli/configure.md`
- `docs/cli/crestodian.md`
- `docs/cli/cron.md`
- `docs/cli/daemon.md`
- `docs/cli/dashboard.md`
- `docs/cli/devices.md`
- `docs/cli/directory.md`
- `docs/cli/doctor.md`
- `docs/cli/gateway.md`
- `docs/cli/hooks.md`
- `docs/cli/index.md`
- `docs/cli/infer.md`
- `docs/cli/logs.md`
- `docs/cli/mcp.md`
- `docs/cli/memory.md`
- `docs/cli/message.md`
- `docs/cli/migrate.md`
- `docs/cli/models.md`
- `docs/cli/node.md`
- `docs/cli/nodes.md`
- `docs/cli/onboard.md`
- `docs/cli/pairing.md`
- `docs/cli/plugins.md`
- `docs/cli/proxy.md`
- `docs/cli/sandbox.md`
- `docs/cli/security.md`
- `docs/cli/sessions.md`
- `docs/cli/setup.md`
- `docs/cli/skills.md`
- `docs/cli/status.md`
- `docs/cli/tasks.md`
- `docs/cli/update.md`
- `docs/cli/voicecall.md`
- `docs/cli/wiki.md`

## `extensions/channel-plugins/imessage`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/imessage`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `41`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/imessage/api.ts`
- `extensions/imessage/config-api.ts`
- `extensions/imessage/openclaw.plugin.json`
- `extensions/imessage/package.json`
- `extensions/imessage/runtime-api.ts`
- `extensions/imessage/src/account-types.ts`
- `extensions/imessage/src/channel-api.ts`
- `extensions/imessage/src/channel-inbound-roots.contract.test.ts`
- `extensions/imessage/src/channel.runtime.ts`
- `extensions/imessage/src/client.ts`
- `extensions/imessage/src/config-accessors.ts`
- `extensions/imessage/src/conversation-bindings.ts`
- `extensions/imessage/src/conversation-route.test.ts`
- `extensions/imessage/src/conversation-route.ts`
- `extensions/imessage/src/imessage.test-plugin.ts`
- `extensions/imessage/src/media-contract.ts`
- `extensions/imessage/src/monitor.gating.test.ts`
- `extensions/imessage/src/monitor.watch-subscribe-retry.test.ts`
- `extensions/imessage/src/monitor/abort-handler.ts`
- `extensions/imessage/src/monitor/deliver.runtime.ts`
- `extensions/imessage/src/monitor/deliver.ts`
- `extensions/imessage/src/monitor/echo-cache.ts`
- `extensions/imessage/src/monitor/inbound-processing.test.ts`
- `extensions/imessage/src/monitor/inbound-processing.ts`
- `extensions/imessage/src/monitor/loop-rate-limiter.ts`
- `extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`
- `extensions/imessage/src/monitor/monitor-provider.ts`
- `extensions/imessage/src/monitor/reflection-guard.ts`
- `extensions/imessage/src/monitor/self-chat-cache.ts`
- `extensions/imessage/src/monitor/self-chat-dedupe.test.ts`
- `extensions/imessage/src/monitor/types.ts`
- `extensions/imessage/src/monitor/watch-error-log.ts`
- `extensions/imessage/src/normalize.ts`
- `extensions/imessage/src/probe.ts`
- `extensions/imessage/src/runtime.ts`
- `extensions/imessage/src/send.ts`
- `extensions/imessage/src/setup-core.ts`
- `extensions/imessage/src/setup-surface.ts`
- `extensions/imessage/src/shared.ts`
- `extensions/imessage/src/status.test.ts`
- `extensions/imessage/src/test-plugin.test.ts`

## `extensions/channel-plugins/line`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/line`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `40`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/line/index.ts`
- `extensions/line/openclaw.plugin.json`
- `extensions/line/package.json`
- `extensions/line/runtime-api.ts`
- `extensions/line/src/accounts.test.ts`
- `extensions/line/src/auto-reply-delivery.test.ts`
- `extensions/line/src/auto-reply-delivery.ts`
- `extensions/line/src/bot-handlers.test.ts`
- `extensions/line/src/bot-handlers.ts`
- `extensions/line/src/bot-message-context.test.ts`
- `extensions/line/src/bot-message-context.ts`
- `extensions/line/src/bot.ts`
- `extensions/line/src/channel-api.ts`
- `extensions/line/src/channel-setup-status.contract.test.ts`
- `extensions/line/src/channel-shared.ts`
- `extensions/line/src/channel.logout.test.ts`
- `extensions/line/src/channel.sendPayload.test.ts`
- `extensions/line/src/channel.ts`
- `extensions/line/src/config-adapter.ts`
- `extensions/line/src/config-schema.ts`
- `extensions/line/src/download.test.ts`
- `extensions/line/src/download.ts`
- `extensions/line/src/flex-templates.ts`
- `extensions/line/src/gateway.ts`
- `extensions/line/src/monitor.lifecycle.test.ts`
- `extensions/line/src/monitor.ts`
- `extensions/line/src/outbound-media.ts`
- `extensions/line/src/outbound.ts`
- `extensions/line/src/quick-reply-fallback.ts`
- `extensions/line/src/reply-chunks.ts`
- `extensions/line/src/rich-menu.test.ts`
- `extensions/line/src/rich-menu.ts`
- `extensions/line/src/runtime.ts`
- `extensions/line/src/send.test.ts`
- `extensions/line/src/send.ts`
- `extensions/line/src/setup-surface.test.ts`
- `extensions/line/src/setup-surface.ts`
- `extensions/line/src/template-messages.ts`
- `extensions/line/src/types.ts`
- `extensions/line/src/webhook-node.test.ts`

## `src/agent-runtime/pi-runner/subscriptions-extensions`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/subscriptions-extensions`
- Coverage: `verified`
- Changed paths: `40`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/pi-embedded-helpers.formatassistanterrortext.test.ts`
- `src/agents/pi-embedded-helpers.isbillingerrormessage.test.ts`
- `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts`
- `src/agents/pi-embedded-helpers.sanitizeuserfacingtext.test.ts`
- `src/agents/pi-embedded-helpers.validate-turns.test.ts`
- `src/agents/pi-embedded-helpers/errors.test.ts`
- `src/agents/pi-embedded-helpers/errors.ts`
- `src/agents/pi-embedded-helpers/failover-matches.test.ts`
- `src/agents/pi-embedded-helpers/failover-matches.ts`
- `src/agents/pi-embedded-helpers/google.ts`
- `src/agents/pi-embedded-helpers/images.ts`
- `src/agents/pi-embedded-helpers/messaging-dedupe.ts`
- `src/agents/pi-embedded-helpers/sanitize-user-facing-text.ts`
- `src/agents/pi-embedded-helpers/turns.ts`
- `src/agents/pi-embedded-helpers/types.ts`
- `src/agents/pi-embedded-runner/extensions.ts`
- `src/agents/pi-embedded-subscribe.e2e-harness.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.ts`
- `src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.lifecycle.ts`
- `src/agents/pi-embedded-subscribe.handlers.messages.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.messages.ts`
- `src/agents/pi-embedded-subscribe.handlers.tools.media.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.tools.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.tools.ts`
- `src/agents/pi-embedded-subscribe.handlers.types.ts`
- `src/agents/pi-embedded-subscribe.shared-types.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.emits-reasoning-as-separate-message-enabled.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.filters-final-suppresses-output-without-start-tag.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.subscribeembeddedpisession.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.suppresses-message-end-block-replies-message-tool.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.waits-multiple-compaction-retries-before-resolving.test.ts`
- `src/agents/pi-embedded-subscribe.tool-text-diagnostics.ts`
- `src/agents/pi-embedded-subscribe.tools.extract.test.ts`
- `src/agents/pi-embedded-subscribe.tools.media.test.ts`
- `src/agents/pi-embedded-subscribe.tools.test.ts`
- `src/agents/pi-embedded-subscribe.tools.ts`
- `src/agents/pi-embedded-subscribe.ts`
- `src/agents/pi-embedded-subscribe.types.ts`

## `docs/mintlify/providers`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/providers`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `39`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/providers/anthropic.md`
- `docs/providers/azure-speech.md`
- `docs/providers/bedrock.md`
- `docs/providers/cerebras.md`
- `docs/providers/chutes.md`
- `docs/providers/cloudflare-ai-gateway.md`
- `docs/providers/deepinfra.md`
- `docs/providers/deepseek.md`
- `docs/providers/elevenlabs.md`
- `docs/providers/fal.md`
- `docs/providers/github-copilot.md`
- `docs/providers/google.md`
- `docs/providers/groq.md`
- `docs/providers/index.md`
- `docs/providers/inworld.md`
- `docs/providers/kilocode.md`
- `docs/providers/litellm.md`
- `docs/providers/lmstudio.md`
- `docs/providers/minimax.md`
- `docs/providers/mistral.md`
- `docs/providers/models.md`
- `docs/providers/nvidia.md`
- `docs/providers/ollama.md`
- `docs/providers/openai.md`
- `docs/providers/opencode-go.md`
- `docs/providers/openrouter.md`
- `docs/providers/perplexity-provider.md`
- `docs/providers/qianfan.md`
- `docs/providers/qwen.md`
- `docs/providers/senseaudio.md`
- `docs/providers/stepfun.md`
- `docs/providers/together.md`
- `docs/providers/venice.md`
- `docs/providers/vercel-ai-gateway.md`
- `docs/providers/vllm.md`
- `docs/providers/volcengine.md`
- `docs/providers/xai.md`
- `docs/providers/xiaomi.md`
- `docs/providers/zai.md`

## `apps/ios-android`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android`
- Coverage: `fallback`
- Changed paths: `38`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/macos-mlx-tts/Package.resolved`
- `apps/macos-mlx-tts/Package.swift`
- `apps/swabble/.github/workflows/ci.yml`
- `apps/swabble/.gitignore`
- `apps/swabble/.swiftformat`
- `apps/swabble/.swiftlint.yml`
- `apps/swabble/CHANGELOG.md`
- `apps/swabble/LICENSE`
- `apps/swabble/Package.resolved`
- `apps/swabble/Package.swift`
- `apps/swabble/README.md`
- `apps/swabble/Sources/SwabbleCore/Config/Config.swift`
- `apps/swabble/Sources/SwabbleCore/Hooks/HookExecutor.swift`
- `apps/swabble/Sources/SwabbleCore/Speech/BufferConverter.swift`
- `apps/swabble/Sources/SwabbleCore/Speech/SpeechPipeline.swift`
- `apps/swabble/Sources/SwabbleCore/Support/AttributedString+Sentences.swift`
- `apps/swabble/Sources/SwabbleCore/Support/Logging.swift`
- `apps/swabble/Sources/SwabbleCore/Support/OutputFormat.swift`
- `apps/swabble/Sources/SwabbleCore/Support/TranscriptsStore.swift`
- `apps/swabble/Sources/SwabbleKit/WakeWordGate.swift`
- `apps/swabble/Sources/swabble/CLI/CLIRegistry.swift`
- `apps/swabble/Sources/swabble/Commands/DoctorCommand.swift`
- `apps/swabble/Sources/swabble/Commands/HealthCommand.swift`
- `apps/swabble/Sources/swabble/Commands/MicCommands.swift`
- `apps/swabble/Sources/swabble/Commands/ServeCommand.swift`
- `apps/swabble/Sources/swabble/Commands/ServiceCommands.swift`
- `apps/swabble/Sources/swabble/Commands/SetupCommand.swift`
- `apps/swabble/Sources/swabble/Commands/StartStopCommands.swift`
- `apps/swabble/Sources/swabble/Commands/StatusCommand.swift`
- `apps/swabble/Sources/swabble/Commands/TailLogCommand.swift`
- `apps/swabble/Sources/swabble/Commands/TestHookCommand.swift`
- `apps/swabble/Sources/swabble/Commands/TranscribeCommand.swift`
- `apps/swabble/Sources/swabble/main.swift`
- `apps/swabble/Tests/SwabbleKitTests/WakeWordGateTests.swift`
- `apps/swabble/Tests/swabbleTests/ConfigTests.swift`
- `apps/swabble/docs/spec.md`
- `apps/swabble/scripts/format.sh`
- `apps/swabble/scripts/lint.sh`

## `docs/mintlify/gateway`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/gateway`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `38`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/gateway/authentication.md`
- `docs/gateway/background-process.md`
- `docs/gateway/bonjour.md`
- `docs/gateway/cli-backends.md`
- `docs/gateway/config-agents.md`
- `docs/gateway/config-channels.md`
- `docs/gateway/config-tools.md`
- `docs/gateway/configuration-examples.md`
- `docs/gateway/configuration-reference.md`
- `docs/gateway/configuration.md`
- `docs/gateway/diagnostics.md`
- `docs/gateway/discovery.md`
- `docs/gateway/doctor.md`
- `docs/gateway/gateway-lock.md`
- `docs/gateway/health.md`
- `docs/gateway/heartbeat.md`
- `docs/gateway/index.md`
- `docs/gateway/local-models.md`
- `docs/gateway/logging.md`
- `docs/gateway/multiple-gateways.md`
- `docs/gateway/openai-http-api.md`
- `docs/gateway/openresponses-http-api.md`
- `docs/gateway/openshell.md`
- `docs/gateway/opentelemetry.md`
- `docs/gateway/operator-scopes.md`
- `docs/gateway/pairing.md`
- `docs/gateway/prometheus.md`
- `docs/gateway/protocol.md`
- `docs/gateway/remote-gateway-readme.md`
- `docs/gateway/remote.md`
- `docs/gateway/sandboxing.md`
- `docs/gateway/secrets.md`
- `docs/gateway/security/audit-checks.md`
- `docs/gateway/security/index.md`
- `docs/gateway/tailscale.md`
- `docs/gateway/tools-invoke-http-api.md`
- `docs/gateway/troubleshooting.md`
- `docs/gateway/trusted-proxy-auth.md`

## `extensions/channel-plugins/signal`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/signal`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `38`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/signal/api.ts`
- `extensions/signal/config-api.ts`
- `extensions/signal/openclaw.plugin.json`
- `extensions/signal/package.json`
- `extensions/signal/runtime-api.ts`
- `extensions/signal/src/account-types.ts`
- `extensions/signal/src/channel.ts`
- `extensions/signal/src/client.test.ts`
- `extensions/signal/src/client.ts`
- `extensions/signal/src/core.test.ts`
- `extensions/signal/src/daemon.ts`
- `extensions/signal/src/format.ts`
- `extensions/signal/src/inbound-context.contract.test.ts`
- `extensions/signal/src/install-signal-cli.test.ts`
- `extensions/signal/src/install-signal-cli.ts`
- `extensions/signal/src/message-actions.test.ts`
- `extensions/signal/src/monitor.tool-result.autostart.test.ts`
- `extensions/signal/src/monitor.tool-result.pairs-uuid-only-senders-uuid-allowlist-entry.test.ts`
- `extensions/signal/src/monitor.tool-result.sends-tool-summaries-responseprefix.test.ts`
- `extensions/signal/src/monitor.tool-result.test-harness.ts`
- `extensions/signal/src/monitor.ts`
- `extensions/signal/src/monitor/access-policy.test.ts`
- `extensions/signal/src/monitor/access-policy.ts`
- `extensions/signal/src/monitor/event-handler.inbound-context.test.ts`
- `extensions/signal/src/monitor/event-handler.mention-gating.test.ts`
- `extensions/signal/src/monitor/event-handler.ts`
- `extensions/signal/src/monitor/event-handler.types.ts`
- `extensions/signal/src/monitor/inbound-context.ts`
- `extensions/signal/src/reaction-level.ts`
- `extensions/signal/src/runtime-api.ts`
- `extensions/signal/src/runtime.ts`
- `extensions/signal/src/send-reactions.test.ts`
- `extensions/signal/src/send-reactions.ts`
- `extensions/signal/src/send.ts`
- `extensions/signal/src/setup-core.ts`
- `extensions/signal/src/setup-surface.ts`
- `extensions/signal/src/shared.ts`
- `extensions/signal/src/sse-reconnect.ts`

## `docs/mintlify/concepts`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/concepts`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `37`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/concepts/active-memory.md`
- `docs/concepts/agent-loop.md`
- `docs/concepts/agent-runtimes.md`
- `docs/concepts/agent-workspace.md`
- `docs/concepts/agent.md`
- `docs/concepts/channel-docking.md`
- `docs/concepts/commitments.md`
- `docs/concepts/compaction.md`
- `docs/concepts/context-engine.md`
- `docs/concepts/delegate-architecture.md`
- `docs/concepts/dreaming.md`
- `docs/concepts/experimental-features.md`
- `docs/concepts/mantis.md`
- `docs/concepts/memory-builtin.md`
- `docs/concepts/memory-qmd.md`
- `docs/concepts/memory-search.md`
- `docs/concepts/memory.md`
- `docs/concepts/messages.md`
- `docs/concepts/model-failover.md`
- `docs/concepts/model-providers.md`
- `docs/concepts/models.md`
- `docs/concepts/multi-agent.md`
- `docs/concepts/oauth.md`
- `docs/concepts/openclaw-sdk.md`
- `docs/concepts/parallel-specialist-lanes.md`
- `docs/concepts/progress-drafts.md`
- `docs/concepts/qa-e2e-automation.md`
- `docs/concepts/qa-matrix.md`
- `docs/concepts/queue-steering.md`
- `docs/concepts/queue.md`
- `docs/concepts/retry.md`
- `docs/concepts/session-pruning.md`
- `docs/concepts/session-tool.md`
- `docs/concepts/session.md`
- `docs/concepts/streaming.md`
- `docs/concepts/system-prompt.md`
- `docs/concepts/usage-tracking.md`

## `extensions/provider-plugins/google`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/google`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `37`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/google/cli-backend.ts`
- `extensions/google/embedding-batch.ts`
- `extensions/google/embedding-provider.ts`
- `extensions/google/gemini-cli-provider.ts`
- `extensions/google/google-genai-runtime.ts`
- `extensions/google/google-shared.test.ts`
- `extensions/google/google.live.test.ts`
- `extensions/google/index.test.ts`
- `extensions/google/index.ts`
- `extensions/google/media-understanding-provider.video.test.ts`
- `extensions/google/model-id.test.ts`
- `extensions/google/model-id.ts`
- `extensions/google/music-generation-provider.test.ts`
- `extensions/google/music-generation-provider.ts`
- `extensions/google/oauth.shared.ts`
- `extensions/google/oauth.test.ts`
- `extensions/google/openclaw.plugin.json`
- `extensions/google/package.json`
- `extensions/google/plugin-registration.contract.test.ts`
- `extensions/google/provider-contract-api.ts`
- `extensions/google/provider-registration.ts`
- `extensions/google/provider-runtime.contract.test.ts`
- `extensions/google/realtime-voice-provider.test.ts`
- `extensions/google/realtime-voice-provider.ts`
- `extensions/google/setup-api.test.ts`
- `extensions/google/setup-api.ts`
- `extensions/google/speech-provider.test.ts`
- `extensions/google/speech-provider.ts`
- `extensions/google/src/gemini-web-search-provider.runtime.ts`
- `extensions/google/src/gemini-web-search-provider.shared.ts`
- `extensions/google/src/gemini-web-search-provider.ts`
- `extensions/google/transport-stream.test.ts`
- `extensions/google/transport-stream.ts`
- `extensions/google/vertex-adc.ts`
- `extensions/google/video-generation-provider.test.ts`
- `extensions/google/video-generation-provider.ts`
- `extensions/google/web-search-provider.test.ts`

## `src/channel-abstraction/core-abstractions`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/core-abstractions`
- Coverage: `verified`
- Changed paths: `36`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/channels/account-snapshot-fields.test.ts`
- `src/channels/account-snapshot-fields.ts`
- `src/channels/ack-reactions.test.ts`
- `src/channels/ack-reactions.ts`
- `src/channels/allow-from.ts`
- `src/channels/bundled-channel-catalog-read.fail-soft.test.ts`
- `src/channels/bundled-channel-catalog-read.test.ts`
- `src/channels/bundled-channel-catalog-read.ts`
- `src/channels/channels-misc.test.ts`
- `src/channels/config-presence.test.ts`
- `src/channels/config-presence.ts`
- `src/channels/conversation-binding-context.ts`
- `src/channels/conversation-resolution.test.ts`
- `src/channels/conversation-resolution.ts`
- `src/channels/ids.test.ts`
- `src/channels/registry-normalize.ts`
- `src/channels/registry.ts`
- `src/channels/run-state-machine.ts`
- `src/channels/session.test.ts`
- `src/channels/session.ts`
- `src/channels/session.types.ts`
- `src/channels/status-reactions.slack-lifecycle.test.ts`
- `src/channels/status-reactions.test.ts`
- `src/channels/status-reactions.ts`
- `src/channels/thread-bindings-policy.test.ts`
- `src/channels/thread-bindings-policy.ts`
- `src/channels/turn/context.test.ts`
- `src/channels/turn/context.ts`
- `src/channels/turn/dispatch-result.ts`
- `src/channels/turn/kernel.test.ts`
- `src/channels/turn/kernel.ts`
- `src/channels/turn/types.ts`
- `src/channels/typing-lifecycle.ts`
- `src/channels/typing-start-guard.ts`
- `src/channels/typing.test.ts`
- `src/channels/typing.ts`

## `unmapped/Swabble`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `36`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `Swabble/.github/workflows/ci.yml`
- `Swabble/.gitignore`
- `Swabble/.swiftformat`
- `Swabble/.swiftlint.yml`
- `Swabble/CHANGELOG.md`
- `Swabble/LICENSE`
- `Swabble/Package.resolved`
- `Swabble/Package.swift`
- `Swabble/README.md`
- `Swabble/Sources/SwabbleCore/Config/Config.swift`
- `Swabble/Sources/SwabbleCore/Hooks/HookExecutor.swift`
- `Swabble/Sources/SwabbleCore/Speech/BufferConverter.swift`
- `Swabble/Sources/SwabbleCore/Speech/SpeechPipeline.swift`
- `Swabble/Sources/SwabbleCore/Support/AttributedString+Sentences.swift`
- `Swabble/Sources/SwabbleCore/Support/Logging.swift`
- `Swabble/Sources/SwabbleCore/Support/OutputFormat.swift`
- `Swabble/Sources/SwabbleCore/Support/TranscriptsStore.swift`
- `Swabble/Sources/SwabbleKit/WakeWordGate.swift`
- `Swabble/Sources/swabble/CLI/CLIRegistry.swift`
- `Swabble/Sources/swabble/Commands/DoctorCommand.swift`
- `Swabble/Sources/swabble/Commands/HealthCommand.swift`
- `Swabble/Sources/swabble/Commands/MicCommands.swift`
- `Swabble/Sources/swabble/Commands/ServeCommand.swift`
- `Swabble/Sources/swabble/Commands/ServiceCommands.swift`
- `Swabble/Sources/swabble/Commands/SetupCommand.swift`
- `Swabble/Sources/swabble/Commands/StartStopCommands.swift`
- `Swabble/Sources/swabble/Commands/StatusCommand.swift`
- `Swabble/Sources/swabble/Commands/TailLogCommand.swift`
- `Swabble/Sources/swabble/Commands/TestHookCommand.swift`
- `Swabble/Sources/swabble/Commands/TranscribeCommand.swift`
- `Swabble/Sources/swabble/main.swift`
- `Swabble/Tests/SwabbleKitTests/WakeWordGateTests.swift`
- `Swabble/Tests/swabbleTests/ConfigTests.swift`
- `Swabble/docs/spec.md`
- `Swabble/scripts/format.sh`
- `Swabble/scripts/lint.sh`

## `src/cli-commands/terminal-output`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/terminal-output`
- Coverage: `verified`
- Changed paths: `35`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/progress.test.ts`
- `src/cli/progress.ts`
- `src/interactive/payload.ts`
- `src/status/status-message.ts`
- `src/status/status-text.ts`
- `src/status/status-text.types.ts`
- `src/terminal/osc-progress.test.ts`
- `src/terminal/osc-progress.ts`
- `src/terminal/prompt-select-styled-params.ts`
- `src/terminal/prompt-select-styled.test.ts`
- `src/terminal/prompt-select-styled.ts`
- `src/terminal/stream-writer.test.ts`
- `src/tui/commands.test.ts`
- `src/tui/commands.ts`
- `src/tui/components/fuzzy-filter.ts`
- `src/tui/embedded-backend.test.ts`
- `src/tui/embedded-backend.ts`
- `src/tui/gateway-chat.test.ts`
- `src/tui/gateway-chat.ts`
- `src/tui/tui-backend.ts`
- `src/tui/tui-command-handlers.test.ts`
- `src/tui/tui-command-handlers.ts`
- `src/tui/tui-event-handlers.test.ts`
- `src/tui/tui-event-handlers.ts`
- `src/tui/tui-formatters.test.ts`
- `src/tui/tui-formatters.ts`
- `src/tui/tui-last-session.test.ts`
- `src/tui/tui-last-session.ts`
- `src/tui/tui-launch.test.ts`
- `src/tui/tui-session-actions.test.ts`
- `src/tui/tui-session-actions.ts`
- `src/tui/tui-submit-test-helpers.ts`
- `src/tui/tui-types.ts`
- `src/tui/tui.test.ts`
- `src/tui/tui.ts`

## `docs/mintlify/channels`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/channels`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `34`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/channels/access-groups.md`
- `docs/channels/bluebubbles.md`
- `docs/channels/broadcast-groups.md`
- `docs/channels/channel-routing.md`
- `docs/channels/discord.md`
- `docs/channels/feishu.md`
- `docs/channels/googlechat.md`
- `docs/channels/group-messages.md`
- `docs/channels/groups.md`
- `docs/channels/imessage.md`
- `docs/channels/index.md`
- `docs/channels/irc.md`
- `docs/channels/line.md`
- `docs/channels/matrix-migration.md`
- `docs/channels/matrix-push-rules.md`
- `docs/channels/matrix.md`
- `docs/channels/mattermost.md`
- `docs/channels/msteams.md`
- `docs/channels/nextcloud-talk.md`
- `docs/channels/nostr.md`
- `docs/channels/pairing.md`
- `docs/channels/qa-channel.md`
- `docs/channels/qqbot.md`
- `docs/channels/signal.md`
- `docs/channels/slack.md`
- `docs/channels/synology-chat.md`
- `docs/channels/telegram.md`
- `docs/channels/tlon.md`
- `docs/channels/troubleshooting.md`
- `docs/channels/twitch.md`
- `docs/channels/whatsapp.md`
- `docs/channels/yuanbao.md`
- `docs/channels/zalo.md`
- `docs/channels/zalouser.md`

## `extensions/channel-plugins/zalo`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/zalo`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `34`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/zalo/api.ts`
- `extensions/zalo/index.test.ts`
- `extensions/zalo/openclaw.plugin.json`
- `extensions/zalo/package.json`
- `extensions/zalo/runtime-api.test.ts`
- `extensions/zalo/runtime-api.ts`
- `extensions/zalo/src/accounts.ts`
- `extensions/zalo/src/actions.ts`
- `extensions/zalo/src/channel.directory.test.ts`
- `extensions/zalo/src/channel.startup.test.ts`
- `extensions/zalo/src/channel.ts`
- `extensions/zalo/src/monitor.image.polling.test.ts`
- `extensions/zalo/src/monitor.lifecycle.test.ts`
- `extensions/zalo/src/monitor.pairing.lifecycle.test.ts`
- `extensions/zalo/src/monitor.polling.media-reply.test.ts`
- `extensions/zalo/src/monitor.reply-once.lifecycle.test.ts`
- `extensions/zalo/src/monitor.ts`
- `extensions/zalo/src/monitor.webhook.test.ts`
- `extensions/zalo/src/monitor.webhook.ts`
- `extensions/zalo/src/outbound-payload.contract.test.ts`
- `extensions/zalo/src/runtime-api.ts`
- `extensions/zalo/src/runtime-support.ts`
- `extensions/zalo/src/secret-contract.ts`
- `extensions/zalo/src/secret-input.ts`
- `extensions/zalo/src/send.ts`
- `extensions/zalo/src/setup-status.test.ts`
- `extensions/zalo/src/setup-surface.test.ts`
- `extensions/zalo/src/status-issues.test.ts`
- `extensions/zalo/src/test-support/lifecycle-test-support.ts`
- `extensions/zalo/src/test-support/monitor-mocks-test-support.ts`
- `extensions/zalo/src/token.ts`
- `extensions/zalo/src/types.ts`
- `extensions/zalo/test-support/lifecycle-test-support.ts`
- `extensions/zalo/test-support/monitor-mocks-test-support.ts`

## `extensions/provider-plugins/xai`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/xai`
- Coverage: `verified`
- Changed paths: `34`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/xai/code-execution.test.ts`
- `extensions/xai/code-execution.ts`
- `extensions/xai/image-generation-provider.test.ts`
- `extensions/xai/image-generation-provider.ts`
- `extensions/xai/index.test.ts`
- `extensions/xai/model-definitions.ts`
- `extensions/xai/onboard.test.ts`
- `extensions/xai/onboard.ts`
- `extensions/xai/openclaw.plugin.json`
- `extensions/xai/package.json`
- `extensions/xai/plugin-registration.contract.test.ts`
- `extensions/xai/provider-discovery.ts`
- `extensions/xai/realtime-transcription-provider.ts`
- `extensions/xai/speech-provider.test.ts`
- `extensions/xai/speech-provider.ts`
- `extensions/xai/src/code-execution-shared.ts`
- `extensions/xai/src/responses-tool-shared.test.ts`
- `extensions/xai/src/responses-tool-shared.ts`
- `extensions/xai/src/tool-auth-shared.ts`
- `extensions/xai/src/web-search-provider.runtime.ts`
- `extensions/xai/src/web-search-response.types.ts`
- `extensions/xai/src/web-search-shared.ts`
- `extensions/xai/src/x-search-config.ts`
- `extensions/xai/src/x-search-shared.ts`
- `extensions/xai/stream.ts`
- `extensions/xai/test-helpers.ts`
- `extensions/xai/tsconfig.json`
- `extensions/xai/video-generation-provider.test.ts`
- `extensions/xai/video-generation-provider.ts`
- `extensions/xai/web-search.test.ts`
- `extensions/xai/x-search.live.test.ts`
- `extensions/xai/x-search.test.ts`
- `extensions/xai/x-search.ts`
- `extensions/xai/xai.live.test.ts`

## `src/agent-runtime/runtime/context-subagents/subagent-registry`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/context-subagents/subagent-registry`
- Coverage: `verified`
- Changed paths: `33`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/subagent-registry-cleanup.ts`
- `src/agents/subagent-registry-helpers.ts`
- `src/agents/subagent-registry-lifecycle.test.ts`
- `src/agents/subagent-registry-lifecycle.ts`
- `src/agents/subagent-registry-queries.ts`
- `src/agents/subagent-registry-read-context.test.ts`
- `src/agents/subagent-registry-read.ts`
- `src/agents/subagent-registry-run-manager.ts`
- `src/agents/subagent-registry-steer-runtime.ts`
- `src/agents/subagent-registry.announce-loop-guard.test.ts`
- `src/agents/subagent-registry.archive.e2e.test.ts`
- `src/agents/subagent-registry.lifecycle-retry-grace.e2e.test.ts`
- `src/agents/subagent-registry.nested.e2e.test.ts`
- `src/agents/subagent-registry.persistence.resume.test.ts`
- `src/agents/subagent-registry.persistence.test-support.ts`
- `src/agents/subagent-registry.persistence.test.ts`
- `src/agents/subagent-registry.steer-restart.test.ts`
- `src/agents/subagent-registry.store.ts`
- `src/agents/subagent-registry.test-helpers.ts`
- `src/agents/subagent-registry.test.ts`
- `src/agents/subagent-registry.ts`
- `src/agents/subagent-registry.types.ts`
- `src/agents/subagent-spawn.attachments.test.ts`
- `src/agents/subagent-spawn.context.test.ts`
- `src/agents/subagent-spawn.depth-limits.test.ts`
- `src/agents/subagent-spawn.mode-session-diagnostics.test.ts`
- `src/agents/subagent-spawn.model-session.test.ts`
- `src/agents/subagent-spawn.runtime.ts`
- `src/agents/subagent-spawn.test-helpers.ts`
- `src/agents/subagent-spawn.test.ts`
- `src/agents/subagent-spawn.thread-binding.test.ts`
- `src/agents/subagent-spawn.ts`
- `src/agents/subagent-spawn.workspace.test.ts`

## `extensions/channel-plugins/googlechat`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/googlechat`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `31`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/googlechat/api.ts`
- `extensions/googlechat/doctor-contract-api.ts`
- `extensions/googlechat/openclaw.plugin.json`
- `extensions/googlechat/package.json`
- `extensions/googlechat/runtime-api.ts`
- `extensions/googlechat/src/accounts.ts`
- `extensions/googlechat/src/actions.ts`
- `extensions/googlechat/src/auth.ts`
- `extensions/googlechat/src/channel-config.test.ts`
- `extensions/googlechat/src/channel.deps.runtime.ts`
- `extensions/googlechat/src/channel.setup.ts`
- `extensions/googlechat/src/channel.test.ts`
- `extensions/googlechat/src/channel.ts`
- `extensions/googlechat/src/config-schema.test.ts`
- `extensions/googlechat/src/config-schema.ts`
- `extensions/googlechat/src/doctor-contract.ts`
- `extensions/googlechat/src/gateway.ts`
- `extensions/googlechat/src/google-auth.runtime.test.ts`
- `extensions/googlechat/src/google-auth.runtime.ts`
- `extensions/googlechat/src/monitor-access.test.ts`
- `extensions/googlechat/src/monitor-access.ts`
- `extensions/googlechat/src/monitor-reply-delivery.ts`
- `extensions/googlechat/src/monitor.reply-delivery.test.ts`
- `extensions/googlechat/src/monitor.ts`
- `extensions/googlechat/src/monitor.webhook-routing.test.ts`
- `extensions/googlechat/src/secret-contract.test.ts`
- `extensions/googlechat/src/secret-contract.ts`
- `extensions/googlechat/src/setup-surface.ts`
- `extensions/googlechat/src/setup.test.ts`
- `extensions/googlechat/src/targets.test.ts`
- `extensions/googlechat/src/types.ts`

## `src/agent-runtime/runtime/cli-runner`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/cli-runner`
- Coverage: `verified`
- Changed paths: `31`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/claude-cli-runner.ts`
- `src/agents/cli-backends.test.ts`
- `src/agents/cli-backends.ts`
- `src/agents/cli-runner.before-agent-reply-cron.test.ts`
- `src/agents/cli-runner.bundle-mcp.e2e.test.ts`
- `src/agents/cli-runner.helpers.test.ts`
- `src/agents/cli-runner.reliability.test.ts`
- `src/agents/cli-runner.spawn.test.ts`
- `src/agents/cli-runner.test-support.ts`
- `src/agents/cli-runner.ts`
- `src/agents/cli-runner/bundle-mcp-adapter-shared.ts`
- `src/agents/cli-runner/bundle-mcp-claude.ts`
- `src/agents/cli-runner/bundle-mcp-codex.ts`
- `src/agents/cli-runner/bundle-mcp-gemini.ts`
- `src/agents/cli-runner/bundle-mcp.codex.test.ts`
- `src/agents/cli-runner/bundle-mcp.gemini.live.test.ts`
- `src/agents/cli-runner/bundle-mcp.gemini.test.ts`
- `src/agents/cli-runner/bundle-mcp.resume.test.ts`
- `src/agents/cli-runner/bundle-mcp.test-support.ts`
- `src/agents/cli-runner/bundle-mcp.test.ts`
- `src/agents/cli-runner/bundle-mcp.ts`
- `src/agents/cli-runner/bundle-mcp.user-config.test.ts`
- `src/agents/cli-runner/claude-live-session.ts`
- `src/agents/cli-runner/execute.ts`
- `src/agents/cli-runner/helpers.ts`
- `src/agents/cli-runner/prepare.test.ts`
- `src/agents/cli-runner/prepare.ts`
- `src/agents/cli-runner/reliability.ts`
- `src/agents/cli-runner/session-history.test.ts`
- `src/agents/cli-runner/session-history.ts`
- `src/agents/cli-runner/types.ts`

## `src/cli-commands/command-implementations/channel-plugin-commands`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/channel-plugin-commands`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `30`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/commands/channel-account-context.ts`
- `src/commands/channel-setup/channel-plugin-resolution.test.ts`
- `src/commands/channel-setup/channel-plugin-resolution.ts`
- `src/commands/channel-setup/discovery.test.ts`
- `src/commands/channel-setup/discovery.ts`
- `src/commands/channel-setup/plugin-install.test.ts`
- `src/commands/channel-setup/plugin-install.ts`
- `src/commands/channel-setup/registry.ts`
- `src/commands/channel-setup/workspace-shadow-bypass.test.ts`
- `src/commands/channel-test-helpers.ts`
- `src/commands/channel-test-registry.ts`
- `src/commands/channels.add.test.ts`
- `src/commands/channels.adds-non-default-telegram-account.test.ts`
- `src/commands/channels.config-only-status-output.test.ts`
- `src/commands/channels.list.auth-profiles.test.ts`
- `src/commands/channels.logs.test.ts`
- `src/commands/channels.remove.test.ts`
- `src/commands/channels.resolve.test.ts`
- `src/commands/channels.surfaces-signal-runtime-errors-channels-status-output.test.ts`
- `src/commands/channels/add.ts`
- `src/commands/channels/capabilities.test.ts`
- `src/commands/channels/capabilities.ts`
- `src/commands/channels/list.ts`
- `src/commands/channels/logs.ts`
- `src/commands/channels/remove.ts`
- `src/commands/channels/resolve.ts`
- `src/commands/channels/runtime-label.ts`
- `src/commands/channels/shared.ts`
- `src/commands/channels/status-config-format.ts`
- `src/commands/channels/status.ts`

## `src/config-secrets-security/secrets-resolution/runtime-secret-collection`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/runtime-secret-collection`
- Coverage: `verified`
- Changed paths: `29`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/secrets/provider-env-vars.dynamic.test.ts`
- `src/secrets/provider-env-vars.ts`
- `src/secrets/runtime-auth.integration.test-helpers.ts`
- `src/secrets/runtime-config-collectors-channels.test.ts`
- `src/secrets/runtime-config-collectors-channels.ts`
- `src/secrets/runtime-config-collectors-core.ts`
- `src/secrets/runtime-config-collectors-plugins.bundled.test.ts`
- `src/secrets/runtime-config-collectors-plugins.test.ts`
- `src/secrets/runtime-config-collectors-plugins.ts`
- `src/secrets/runtime-config-collectors.ts`
- `src/secrets/runtime-core-snapshots.test.ts`
- `src/secrets/runtime-external-channel-audit.test.ts`
- `src/secrets/runtime-external-channel-origin-discovery.test.ts`
- `src/secrets/runtime-gateway-auth-surfaces.test.ts`
- `src/secrets/runtime-gateway-local-surfaces.test.ts`
- `src/secrets/runtime-manifest.runtime.ts`
- `src/secrets/runtime-openai-file-fixture.test-helper.ts`
- `src/secrets/runtime-web-tools-manifest.runtime.ts`
- `src/secrets/runtime-web-tools-state.test.ts`
- `src/secrets/runtime-web-tools.shared.ts`
- `src/secrets/runtime-web-tools.test.ts`
- `src/secrets/runtime-web-tools.ts`
- `src/secrets/runtime.coverage.test.ts`
- `src/secrets/runtime.fast-path.test.ts`
- `src/secrets/runtime.gateway-auth.integration.test.ts`
- `src/secrets/runtime.integration.test-helpers.ts`
- `src/secrets/runtime.loadable-plugin-origins.test.ts`
- `src/secrets/runtime.test-support.ts`
- `src/secrets/runtime.ts`

## `extensions/provider-plugins/ollama`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/ollama`
- Coverage: `verified`
- Changed paths: `28`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/ollama/index.test.ts`
- `extensions/ollama/index.ts`
- `extensions/ollama/ollama.live.test.ts`
- `extensions/ollama/openclaw.plugin.json`
- `extensions/ollama/package.json`
- `extensions/ollama/plugin-registration.contract.test.ts`
- `extensions/ollama/provider-discovery.test.ts`
- `extensions/ollama/provider-discovery.ts`
- `extensions/ollama/src/defaults.ts`
- `extensions/ollama/src/discovery-shared.test.ts`
- `extensions/ollama/src/discovery-shared.ts`
- `extensions/ollama/src/embedding-provider.test.ts`
- `extensions/ollama/src/embedding-provider.ts`
- `extensions/ollama/src/memory-embedding-adapter.ts`
- `extensions/ollama/src/model-id.ts`
- `extensions/ollama/src/provider-base-url.test.ts`
- `extensions/ollama/src/provider-base-url.ts`
- `extensions/ollama/src/provider-models.test.ts`
- `extensions/ollama/src/provider-models.ts`
- `extensions/ollama/src/setup.test.ts`
- `extensions/ollama/src/setup.ts`
- `extensions/ollama/src/stream-runtime.test.ts`
- `extensions/ollama/src/stream.test.ts`
- `extensions/ollama/src/stream.ts`
- `extensions/ollama/src/web-search-provider.test.ts`
- `extensions/ollama/src/web-search-provider.ts`
- `extensions/ollama/src/wsl2-crash-loop-check.test.ts`
- `extensions/ollama/src/wsl2-crash-loop-check.ts`

## `extensions/channel-plugins/nextcloud-talk`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/nextcloud-talk`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `27`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/nextcloud-talk/doctor-contract-api.ts`
- `extensions/nextcloud-talk/openclaw.plugin.json`
- `extensions/nextcloud-talk/package.json`
- `extensions/nextcloud-talk/runtime-api.ts`
- `extensions/nextcloud-talk/src/accounts.ts`
- `extensions/nextcloud-talk/src/api.ts`
- `extensions/nextcloud-talk/src/channel-api.ts`
- `extensions/nextcloud-talk/src/channel.core.test.ts`
- `extensions/nextcloud-talk/src/channel.lifecycle.test.ts`
- `extensions/nextcloud-talk/src/channel.ts`
- `extensions/nextcloud-talk/src/config-schema.ts`
- `extensions/nextcloud-talk/src/core.test.ts`
- `extensions/nextcloud-talk/src/gateway.ts`
- `extensions/nextcloud-talk/src/monitor-runtime.ts`
- `extensions/nextcloud-talk/src/monitor.replay.test.ts`
- `extensions/nextcloud-talk/src/monitor.test-harness.ts`
- `extensions/nextcloud-talk/src/policy.ts`
- `extensions/nextcloud-talk/src/replay-guard.ts`
- `extensions/nextcloud-talk/src/secret-contract.ts`
- `extensions/nextcloud-talk/src/secret-input.ts`
- `extensions/nextcloud-talk/src/send.cfg-threading.test.ts`
- `extensions/nextcloud-talk/src/send.runtime.ts`
- `extensions/nextcloud-talk/src/session-route.ts`
- `extensions/nextcloud-talk/src/setup-core.ts`
- `extensions/nextcloud-talk/src/setup-surface.ts`
- `extensions/nextcloud-talk/src/signature.ts`
- `extensions/nextcloud-talk/src/types.ts`

## `src/gateway-api-surface/protocol`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/protocol`
- Coverage: `verified`
- Changed paths: `27`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/gateway/protocol/channels.schema.test.ts`
- `src/gateway/protocol/connect-error-details.ts`
- `src/gateway/protocol/cron-validators.test.ts`
- `src/gateway/protocol/exec-approvals-validators.test.ts`
- `src/gateway/protocol/index.test.ts`
- `src/gateway/protocol/index.ts`
- `src/gateway/protocol/schema.ts`
- `src/gateway/protocol/schema/agent.ts`
- `src/gateway/protocol/schema/agents-models-skills.ts`
- `src/gateway/protocol/schema/artifacts.ts`
- `src/gateway/protocol/schema/channels.ts`
- `src/gateway/protocol/schema/config.ts`
- `src/gateway/protocol/schema/cron.ts`
- `src/gateway/protocol/schema/exec-approvals.ts`
- `src/gateway/protocol/schema/frames.ts`
- `src/gateway/protocol/schema/logs-chat.ts`
- `src/gateway/protocol/schema/nodes.ts`
- `src/gateway/protocol/schema/plugins.ts`
- `src/gateway/protocol/schema/primitives.ts`
- `src/gateway/protocol/schema/protocol-schemas.ts`
- `src/gateway/protocol/schema/push.ts`
- `src/gateway/protocol/schema/sessions.ts`
- `src/gateway/protocol/schema/types.ts`
- `src/gateway/protocol/schema/wizard.ts`
- `src/gateway/protocol/startup-unavailable.ts`
- `src/gateway/protocol/talk-config.contract.test.ts`
- `src/gateway/protocol/version.ts`

## `src/shared-misc-runtime-support/compat-hooks`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/compat-hooks`
- Coverage: `verified`
- Changed paths: `27`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/compat/legacy-names.ts`
- `src/hooks/bundled/README.md`
- `src/hooks/bundled/boot-md/handler.test.ts`
- `src/hooks/bundled/boot-md/handler.ts`
- `src/hooks/bundled/compaction-notifier/HOOK.md`
- `src/hooks/bundled/compaction-notifier/handler.ts`
- `src/hooks/bundled/session-memory/HOOK.md`
- `src/hooks/bundled/session-memory/handler.test.ts`
- `src/hooks/bundled/session-memory/handler.ts`
- `src/hooks/bundled/session-memory/transcript.ts`
- `src/hooks/config.ts`
- `src/hooks/gmail-ops.ts`
- `src/hooks/gmail-setup-utils.test.ts`
- `src/hooks/gmail-setup-utils.ts`
- `src/hooks/gmail-watcher.ts`
- `src/hooks/gmail.ts`
- `src/hooks/hooks.ts`
- `src/hooks/install.test.ts`
- `src/hooks/llm-slug-generator.test.ts`
- `src/hooks/llm-slug-generator.ts`
- `src/hooks/loader.ts`
- `src/hooks/message-hook-mappers.test.ts`
- `src/hooks/message-hook-mappers.ts`
- `src/hooks/plugin-hooks.ts`
- `src/hooks/policy.ts`
- `src/hooks/types.ts`
- `src/hooks/workspace.ts`

## `extensions/channel-plugins/zalouser`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/zalouser`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `25`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/zalouser/api.ts`
- `extensions/zalouser/openclaw.plugin.json`
- `extensions/zalouser/package.json`
- `extensions/zalouser/runtime-api.ts`
- `extensions/zalouser/src/accounts.ts`
- `extensions/zalouser/src/channel-api.ts`
- `extensions/zalouser/src/channel.adapters.ts`
- `extensions/zalouser/src/channel.sendpayload.test.ts`
- `extensions/zalouser/src/channel.setup.test.ts`
- `extensions/zalouser/src/channel.test.ts`
- `extensions/zalouser/src/channel.ts`
- `extensions/zalouser/src/doctor-contract.ts`
- `extensions/zalouser/src/doctor.ts`
- `extensions/zalouser/src/monitor.group-gating.test.ts`
- `extensions/zalouser/src/monitor.ts`
- `extensions/zalouser/src/qr-temp-file.ts`
- `extensions/zalouser/src/send.ts`
- `extensions/zalouser/src/session-route.ts`
- `extensions/zalouser/src/setup-surface.test.ts`
- `extensions/zalouser/src/shared.ts`
- `extensions/zalouser/src/status-issues.test.ts`
- `extensions/zalouser/src/tool.ts`
- `extensions/zalouser/src/types.ts`
- `extensions/zalouser/src/zalo-js.credentials.test.ts`
- `extensions/zalouser/src/zalo-js.ts`

## `test-infra/profiles-and-suites/test-scripts`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/test-scripts`
- Coverage: `fallback`
- Changed paths: `24`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `qa/scenarios/agents/subagent-completion-direct-fallback.md`
- `qa/scenarios/channels/dm-chat-baseline.md`
- `qa/scenarios/channels/group-message-tool-unavailable-fallback.md`
- `qa/scenarios/channels/group-visible-reply-tool.md`
- `qa/scenarios/config/config-restart-capability-flip.md`
- `qa/scenarios/config/crestodian-ring-zero-setup.md`
- `qa/scenarios/memory/commitments-heartbeat-target-none.md`
- `qa/scenarios/memory/memory-failure-fallback.md`
- `qa/scenarios/memory/session-memory-ranking.md`
- `qa/scenarios/models/codex-harness-no-meta-leak.md`
- `qa/scenarios/models/gpt54-thinking-visibility-switch.md`
- `qa/scenarios/models/gpt55-thinking-visibility-switch.md`
- `qa/scenarios/models/model-switch-follow-up.md`
- `qa/scenarios/models/openai-native-web-search-live.md`
- `qa/scenarios/models/thinking-slash-model-remap.md`
- `qa/scenarios/plugins/kitchen-sink-live-openai.md`
- `qa/scenarios/runtime/compaction-retry-mutating-tool.md`
- `qa/scenarios/runtime/docker-prometheus-smoke.md`
- `qa/scenarios/runtime/otel-trace-smoke.md`
- `qa/scenarios/runtime/reasoning-only-no-auto-retry-after-write.md`
- `qa/scenarios/runtime/update-run-package-self-upgrade.md`
- `qa/scenarios/workspace/long-running-release-audit.md`
- `qa/scenarios/workspace/medium-game-plan-codex-harness.md`
- `qa/scenarios/workspace/medium-game-plan-pi-harness.md`

## `extensions/provider-plugins/minimax`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/minimax`
- Coverage: `verified`
- Changed paths: `23`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/minimax/image-generation-provider.test.ts`
- `extensions/minimax/image-generation-provider.ts`
- `extensions/minimax/index.test.ts`
- `extensions/minimax/index.ts`
- `extensions/minimax/minimax.live.test.ts`
- `extensions/minimax/music-generation-provider.test.ts`
- `extensions/minimax/music-generation-provider.ts`
- `extensions/minimax/oauth.ts`
- `extensions/minimax/onboard.test.ts`
- `extensions/minimax/openclaw.plugin.json`
- `extensions/minimax/package.json`
- `extensions/minimax/plugin-registration.contract.test.ts`
- `extensions/minimax/provider-discovery.contract.test.ts`
- `extensions/minimax/provider-registration.ts`
- `extensions/minimax/speech-provider.test.ts`
- `extensions/minimax/speech-provider.ts`
- `extensions/minimax/src/minimax-web-search-provider.runtime.ts`
- `extensions/minimax/src/minimax-web-search-provider.test.ts`
- `extensions/minimax/src/minimax-web-search-provider.ts`
- `extensions/minimax/tts.ts`
- `extensions/minimax/video-generation-provider.test.ts`
- `extensions/minimax/video-generation-provider.ts`
- `extensions/minimax/web-search-contract-api.ts`

## `src/shared-misc-runtime-support/test-support`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/test-support`
- Coverage: `fallback`
- Changed paths: `23`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/test-helpers/network-interfaces.ts`
- `src/test-helpers/resolve-target-error-cases.ts`
- `src/test-helpers/temp-dir.test.ts`
- `src/test-helpers/temp-dir.ts`
- `src/test-utils/channel-plugins.ts`
- `src/test-utils/exec-assertions.ts`
- `src/test-utils/jiti-runtime.ts`
- `src/test-utils/model-auth-mock.ts`
- `src/test-utils/npm-spec-install-test-helpers.ts`
- `src/test-utils/openclaw-test-state.test.ts`
- `src/test-utils/openclaw-test-state.ts`
- `src/test-utils/plugin-registration.ts`
- `src/test-utils/plugin-runtime-env.ts`
- `src/test-utils/plugin-setup-wizard.ts`
- `src/test-utils/provider-registry-allowlist.test-helpers.ts`
- `src/test-utils/repo-scan.ts`
- `src/test-utils/secret-file-fixture.ts`
- `src/test-utils/secret-ref-test-vectors.ts`
- `src/test-utils/session-conversation-registry.ts`
- `src/test-utils/session-state-cleanup.test.ts`
- `src/test-utils/session-state-cleanup.ts`
- `src/test-utils/session-write-lock-module-mock.ts`
- `src/test-utils/web-provider-runtime.test-helpers.ts`

## `apps/macos/app-sources/gateway-runtime`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/macos/app-sources/gateway-runtime`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `22`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/CanvasWindowSmokeTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecApprovalPromptLayoutTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecApprovalsGatewayPrompterTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecSkillBinTrustTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayWebSocketTestSupport.swift`
- `apps/macos/Tests/OpenClawIPCTests/LaunchAgentManagerTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/LowCoverageHelperTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/MacGatewayChatTransportMappingTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/MacNodeBrowserProxyTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/MacNodeModeCoordinatorTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/MenuSessionsInjectorTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ModelCatalogLoaderTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/OpenClawConfigFileTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/RuntimeLocatorTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/SessionDataTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TailscaleIntegrationSectionTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TalkAudioPlayerTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TalkModeGatewayConfigTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TalkModeRuntimeSpeechTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/WideAreaGatewayDiscoveryTests.swift`

## `docs/mintlify/.i18n`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/.i18n`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `22`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/.i18n/README.md`
- `docs/.i18n/glossary.fa.json`
- `docs/.i18n/glossary.nl.json`
- `docs/.i18n/glossary.vi.json`
- `docs/.i18n/glossary.zh-TW.json`
- `scripts/docs-i18n/codex_command_unix.go`
- `scripts/docs-i18n/codex_command_windows.go`
- `scripts/docs-i18n/codex_command_windows_test.go`
- `scripts/docs-i18n/doc_chunked_raw.go`
- `scripts/docs-i18n/doc_mode_test.go`
- `scripts/docs-i18n/main.go`
- `scripts/docs-i18n/main_test.go`
- `scripts/docs-i18n/pi_command.go`
- `scripts/docs-i18n/pi_rpc_client.go`
- `scripts/docs-i18n/pi_rpc_client_test.go`
- `scripts/docs-i18n/process.go`
- `scripts/docs-i18n/prompt.go`
- `scripts/docs-i18n/prompt_test.go`
- `scripts/docs-i18n/translator.go`
- `scripts/docs-i18n/translator_test.go`
- `scripts/docs-i18n/util.go`
- `scripts/docs-i18n/util_test.go`

## `src/cli-commands/command-implementations/agent-command-cli`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/agent-command-cli`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `22`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/commands/agent-command.test-mocks.ts`
- `src/commands/agent-command.test-support.ts`
- `src/commands/agent.acp.test.ts`
- `src/commands/agent.delivery.test.ts`
- `src/commands/agent.runtime-config.test.ts`
- `src/commands/agent.session.test.ts`
- `src/commands/agent/session.test.ts`
- `src/commands/agent/session.ts`
- `src/commands/agents.add.test.ts`
- `src/commands/agents.bind.commands.test.ts`
- `src/commands/agents.bind.test-support.ts`
- `src/commands/agents.bindings.ts`
- `src/commands/agents.command-shared.ts`
- `src/commands/agents.commands.add.ts`
- `src/commands/agents.commands.bind.ts`
- `src/commands/agents.commands.delete.ts`
- `src/commands/agents.commands.list.test.ts`
- `src/commands/agents.commands.list.ts`
- `src/commands/agents.config.ts`
- `src/commands/agents.delete.test.ts`
- `src/commands/agents.providers.test.ts`
- `src/commands/agents.providers.ts`

## `extensions/channel-plugins/irc`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/irc`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `21`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/irc/api.ts`
- `extensions/irc/index.test.ts`
- `extensions/irc/openclaw.plugin.json`
- `extensions/irc/package.json`
- `extensions/irc/runtime-api.test.ts`
- `extensions/irc/src/channel.ts`
- `extensions/irc/src/client.ts`
- `extensions/irc/src/config-schema.ts`
- `extensions/irc/src/inbound.ts`
- `extensions/irc/src/monitor.ts`
- `extensions/irc/src/normalize.ts`
- `extensions/irc/src/policy.test.ts`
- `extensions/irc/src/policy.ts`
- `extensions/irc/src/protocol.ts`
- `extensions/irc/src/runtime-api.ts`
- `extensions/irc/src/secret-contract.ts`
- `extensions/irc/src/send.test.ts`
- `extensions/irc/src/send.ts`
- `extensions/irc/src/setup-core.ts`
- `extensions/irc/src/setup.test.ts`
- `extensions/irc/src/types.ts`

## `extensions/channel-plugins/tlon`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/tlon`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `21`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/tlon/api.ts`
- `extensions/tlon/doctor-contract-api.ts`
- `extensions/tlon/index.ts`
- `extensions/tlon/openclaw.plugin.json`
- `extensions/tlon/package.json`
- `extensions/tlon/runtime-api.ts`
- `extensions/tlon/src/channel.runtime.ts`
- `extensions/tlon/src/channel.ts`
- `extensions/tlon/src/config-schema.ts`
- `extensions/tlon/src/monitor/authorization.ts`
- `extensions/tlon/src/monitor/index.ts`
- `extensions/tlon/src/monitor/processed-messages.ts`
- `extensions/tlon/src/monitor/utils.ts`
- `extensions/tlon/src/settings.ts`
- `extensions/tlon/src/setup-core.ts`
- `extensions/tlon/src/targets.ts`
- `extensions/tlon/src/urbit/auth.ssrf.test.ts`
- `extensions/tlon/src/urbit/auth.ts`
- `extensions/tlon/src/urbit/base-url.ts`
- `extensions/tlon/src/urbit/send.ts`
- `extensions/tlon/src/urbit/sse-client.ts`

## `extensions/channel-plugins/nostr`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/nostr`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `20`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/nostr/api.ts`
- `extensions/nostr/index.ts`
- `extensions/nostr/openclaw.plugin.json`
- `extensions/nostr/package.json`
- `extensions/nostr/runtime-api.ts`
- `extensions/nostr/src/channel.inbound.test.ts`
- `extensions/nostr/src/channel.outbound.test.ts`
- `extensions/nostr/src/channel.setup.ts`
- `extensions/nostr/src/channel.test.ts`
- `extensions/nostr/src/channel.ts`
- `extensions/nostr/src/config-schema.ts`
- `extensions/nostr/src/gateway.ts`
- `extensions/nostr/src/metrics.ts`
- `extensions/nostr/src/nostr-bus.ts`
- `extensions/nostr/src/nostr-profile-http.ts`
- `extensions/nostr/src/nostr-profile-import.ts`
- `extensions/nostr/src/nostr-profile.ts`
- `extensions/nostr/src/nostr-state-store.ts`
- `extensions/nostr/src/seen-tracker.ts`
- `extensions/nostr/src/types.ts`

## `extensions/provider-plugins/github-copilot`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/github-copilot`
- Coverage: `verified`
- Changed paths: `20`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/github-copilot/auth.test.ts`
- `extensions/github-copilot/auth.ts`
- `extensions/github-copilot/connection-bound-ids.live.test.ts`
- `extensions/github-copilot/connection-bound-ids.test.ts`
- `extensions/github-copilot/connection-bound-ids.ts`
- `extensions/github-copilot/embeddings.test.ts`
- `extensions/github-copilot/embeddings.ts`
- `extensions/github-copilot/index.test.ts`
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
- `extensions/github-copilot/stream.test.ts`
- `extensions/github-copilot/token.ts`

## `extensions/skill-plugins/acpx`

- Feature: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/acpx`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `20`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/acpx/AGENTS.md`
- `extensions/acpx/index.test.ts`
- `extensions/acpx/index.ts`
- `extensions/acpx/openclaw.plugin.json`
- `extensions/acpx/package.json`
- `extensions/acpx/register.runtime.ts`
- `extensions/acpx/runtime-api.ts`
- `extensions/acpx/skills/acp-router/SKILL.md`
- `extensions/acpx/src/claude-agent-acp-completion.test.ts`
- `extensions/acpx/src/codex-auth-bridge.test.ts`
- `extensions/acpx/src/codex-auth-bridge.ts`
- `extensions/acpx/src/config-schema.ts`
- `extensions/acpx/src/config.test.ts`
- `extensions/acpx/src/config.ts`
- `extensions/acpx/src/manifest.test.ts`
- `extensions/acpx/src/runtime-internals/mcp-proxy.test.ts`
- `extensions/acpx/src/runtime.test.ts`
- `extensions/acpx/src/runtime.ts`
- `extensions/acpx/src/service.test.ts`
- `extensions/acpx/src/service.ts`

## `src/gateway-api-surface/server-runtime`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/server-runtime`
- Coverage: `verified`
- Changed paths: `20`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/gateway/channel-health-monitor.test.ts`
- `src/gateway/channel-health-monitor.ts`
- `src/gateway/channel-health-policy.test.ts`
- `src/gateway/channel-health-policy.ts`
- `src/gateway/control-ui-assistant-media.e2e.test.ts`
- `src/gateway/control-ui-contract.ts`
- `src/gateway/control-ui-csp.test.ts`
- `src/gateway/control-ui-csp.ts`
- `src/gateway/control-ui-links.ts`
- `src/gateway/control-ui-routing.ts`
- `src/gateway/control-ui.http.test.ts`
- `src/gateway/control-ui.ts`
- `src/gateway/server-close.runtime.ts`
- `src/gateway/server-close.test.ts`
- `src/gateway/server-close.ts`
- `src/gateway/server-http.probe.test.ts`
- `src/gateway/server-http.request-trace.test.ts`
- `src/gateway/server-http.test-harness.ts`
- `src/gateway/server-http.ts`
- `src/infra/ports.test.ts`

## `extensions/provider-plugins/openrouter`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/openrouter`
- Coverage: `verified`
- Changed paths: `18`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/openrouter/api.ts`
- `extensions/openrouter/image-generation-provider.ts`
- `extensions/openrouter/index.test.ts`
- `extensions/openrouter/index.ts`
- `extensions/openrouter/models.ts`
- `extensions/openrouter/onboard.test.ts`
- `extensions/openrouter/openclaw.plugin.json`
- `extensions/openrouter/openrouter.live.test.ts`
- `extensions/openrouter/package.json`
- `extensions/openrouter/provider-catalog.ts`
- `extensions/openrouter/provider-policy-api.ts`
- `extensions/openrouter/provider-runtime.contract.test.ts`
- `extensions/openrouter/register.runtime.ts`
- `extensions/openrouter/speech-provider.ts`
- `extensions/openrouter/stream.ts`
- `extensions/openrouter/thinking-policy.ts`
- `extensions/openrouter/video-generation-provider.test.ts`
- `extensions/openrouter/video-generation-provider.ts`

## `src/cli-commands/command-implementations/secret-gateway-commands`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/secret-gateway-commands`
- Coverage: `verified`
- Changed paths: `18`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/command-secret-resolution.coverage.test.ts`
- `src/cli/gateway-cli/dev.ts`
- `src/cli/gateway-cli/lifecycle.runtime.ts`
- `src/cli/gateway-cli/qa-parent-watchdog.test.ts`
- `src/cli/gateway-cli/qa-parent-watchdog.ts`
- `src/cli/gateway-cli/register.ts`
- `src/cli/gateway-cli/run-loop.test.ts`
- `src/cli/gateway-cli/run-loop.ts`
- `src/cli/gateway-cli/run.option-collisions.test.ts`
- `src/cli/gateway-cli/run.supervised-lock.test.ts`
- `src/cli/gateway-cli/run.ts`
- `src/cli/gateway-cli/shared.ts`
- `src/commands/gateway-install-token.persist.runtime.ts`
- `src/commands/gateway-install-token.test.ts`
- `src/commands/gateway-install-token.ts`
- `src/commands/gateway-presence.ts`
- `src/commands/gateway-status.test.ts`
- `src/commands/gateway-status.ts`

## `src/infra-outbound-delivery/network`

- Feature: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/network`
- Coverage: `verified`
- Changed paths: `18`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/net/fetch-guard.ssrf.test.ts`
- `src/infra/net/fetch-guard.ts`
- `src/infra/net/http-connect-tunnel.test.ts`
- `src/infra/net/http-connect-tunnel.ts`
- `src/infra/net/proxy-env.test.ts`
- `src/infra/net/proxy-env.ts`
- `src/infra/net/proxy-fetch.test.ts`
- `src/infra/net/proxy-fetch.ts`
- `src/infra/net/proxy/active-proxy-state.ts`
- `src/infra/net/proxy/external-proxy.e2e.test.ts`
- `src/infra/net/proxy/proxy-lifecycle.test.ts`
- `src/infra/net/proxy/proxy-lifecycle.ts`
- `src/infra/net/proxy/proxy-validation.test.ts`
- `src/infra/net/proxy/proxy-validation.ts`
- `src/infra/net/undici-family-policy.ts`
- `src/infra/net/undici-global-dispatcher.test.ts`
- `src/infra/net/undici-global-dispatcher.ts`
- `src/infra/net/undici-runtime.ts`

## `src/reply-orchestration/exec`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/exec`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `18`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/reply/bash-command.ts`
- `src/auto-reply/reply/directive-handling.auth.test.ts`
- `src/auto-reply/reply/directive-handling.auth.ts`
- `src/auto-reply/reply/directive-handling.fast-lane.ts`
- `src/auto-reply/reply/directive-handling.impl.ts`
- `src/auto-reply/reply/directive-handling.levels.test.ts`
- `src/auto-reply/reply/directive-handling.levels.ts`
- `src/auto-reply/reply/directive-handling.mixed-inline.test.ts`
- `src/auto-reply/reply/directive-handling.model-selection.ts`
- `src/auto-reply/reply/directive-handling.model.test.ts`
- `src/auto-reply/reply/directive-handling.model.ts`
- `src/auto-reply/reply/directive-handling.params.ts`
- `src/auto-reply/reply/directive-handling.persist.ts`
- `src/auto-reply/reply/directive-handling.queue-validation.test.ts`
- `src/auto-reply/reply/directive-handling.queue-validation.ts`
- `src/auto-reply/reply/directive-handling.shared.ts`
- `src/auto-reply/reply/directive-handling.ts`
- `src/auto-reply/reply/directives.ts`

## `docs/mintlify`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify`
- Coverage: `fallback`
- Changed paths: `17`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `AGENTS.md`
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/auth-credential-semantics.md`
- `docs/brave-search.md`
- `docs/ci.md`
- `docs/logging.md`
- `docs/pi-dev.md`
- `docs/pi.md`
- `docs/plan/codex-context-engine-harness.md`
- `docs/plan/ui-channels.md`
- `docs/refactor/async-exec-duplicate-completion-investigation.md`
- `docs/refactor/qa.md`
- `docs/snippets/plugin-publish/minimal-openclaw.plugin.json`
- `docs/superpowers/specs/2026-04-22-tweakcn-custom-theme-import-design.md`
- `docs/vps.md`

## `extensions/channel-plugins/twitch`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/twitch`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `17`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/twitch/api.ts`
- `extensions/twitch/index.test.ts`
- `extensions/twitch/openclaw.plugin.json`
- `extensions/twitch/package.json`
- `extensions/twitch/runtime-api.ts`
- `extensions/twitch/src/access-control.ts`
- `extensions/twitch/src/client-manager-registry.ts`
- `extensions/twitch/src/config-schema.test.ts`
- `extensions/twitch/src/config-schema.ts`
- `extensions/twitch/src/config.ts`
- `extensions/twitch/src/monitor.ts`
- `extensions/twitch/src/plugin.ts`
- `extensions/twitch/src/probe.ts`
- `extensions/twitch/src/send.ts`
- `extensions/twitch/src/token.ts`
- `extensions/twitch/src/twitch-client.ts`
- `extensions/twitch/src/types.ts`

## `extensions/provider-plugins/anthropic`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/anthropic`
- Coverage: `verified`
- Changed paths: `17`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/anthropic/cli-backend.ts`
- `extensions/anthropic/cli-migration.test.ts`
- `extensions/anthropic/cli-migration.ts`
- `extensions/anthropic/cli-shared.test.ts`
- `extensions/anthropic/cli-shared.ts`
- `extensions/anthropic/config-defaults.ts`
- `extensions/anthropic/doctor-contract-api.ts`
- `extensions/anthropic/index.test.ts`
- `extensions/anthropic/openclaw.plugin.json`
- `extensions/anthropic/package.json`
- `extensions/anthropic/provider-discovery.ts`
- `extensions/anthropic/provider-policy-api.test.ts`
- `extensions/anthropic/provider-policy-api.ts`
- `extensions/anthropic/provider-runtime.contract.test.ts`
- `extensions/anthropic/register.runtime.ts`
- `extensions/anthropic/stream-wrappers.test.ts`
- `extensions/anthropic/stream-wrappers.ts`

## `src/infra-outbound-delivery/outbound-delivery`

- Feature: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-delivery`
- Coverage: `verified`
- Changed paths: `17`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/send-runtime/channel-outbound-send.ts`
- `src/infra/outbound/best-effort-delivery.ts`
- `src/infra/outbound/bound-delivery-router.test.ts`
- `src/infra/outbound/bound-delivery-router.ts`
- `src/infra/outbound/cfg-threading.guard.test.ts`
- `src/infra/outbound/deliver.test.ts`
- `src/infra/outbound/deliver.ts`
- `src/infra/outbound/message.config.runtime.ts`
- `src/infra/outbound/message.test.ts`
- `src/infra/outbound/message.ts`
- `src/infra/outbound/outbound-send-service.test.ts`
- `src/infra/outbound/outbound-send-service.ts`
- `src/infra/outbound/targets-resolve-shared.ts`
- `src/infra/outbound/targets-session.ts`
- `src/infra/outbound/targets.shared-test.ts`
- `src/infra/outbound/targets.test-helpers.ts`
- `src/infra/outbound/targets.test.ts`

## `docs/mintlify/reference`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/reference`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `16`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/reference/AGENTS.default.md`
- `docs/reference/RELEASING.md`
- `docs/reference/api-usage-costs.md`
- `docs/reference/application-modernization-plan.md`
- `docs/reference/full-release-validation.md`
- `docs/reference/memory-config.md`
- `docs/reference/openclaw-sdk-api-design.md`
- `docs/reference/rich-output-protocol.md`
- `docs/reference/secretref-credential-surface.md`
- `docs/reference/secretref-user-supplied-credentials-matrix.json`
- `docs/reference/session-management-compaction.md`
- `docs/reference/templates/AGENTS.md`
- `docs/reference/test.md`
- `docs/reference/token-use.md`
- `docs/reference/transcript-hygiene.md`
- `docs/reference/wizard.md`

## `extensions/channel-plugins/synology-chat`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/synology-chat`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `16`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/synology-chat/api.ts`
- `extensions/synology-chat/openclaw.plugin.json`
- `extensions/synology-chat/package.json`
- `extensions/synology-chat/src/channel.integration.test.ts`
- `extensions/synology-chat/src/channel.test-mocks.ts`
- `extensions/synology-chat/src/channel.test.ts`
- `extensions/synology-chat/src/channel.ts`
- `extensions/synology-chat/src/core.test.ts`
- `extensions/synology-chat/src/gateway-runtime.ts`
- `extensions/synology-chat/src/inbound-context.ts`
- `extensions/synology-chat/src/inbound-turn.ts`
- `extensions/synology-chat/src/security.ts`
- `extensions/synology-chat/src/setup-surface.ts`
- `extensions/synology-chat/src/test-http-utils.ts`
- `extensions/synology-chat/src/webhook-handler.test.ts`
- `extensions/synology-chat/src/webhook-handler.ts`

## `src/gateway-api-surface/auth-session`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/auth-session`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `16`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/gateway/auth.test.ts`
- `src/gateway/auth.ts`
- `src/gateway/device-auth.ts`
- `src/gateway/probe-auth.test.ts`
- `src/gateway/probe-auth.ts`
- `src/infra/node-pairing.test.ts`
- `src/infra/node-pairing.ts`
- `src/pairing/allow-from-store-file.test.ts`
- `src/pairing/allow-from-store-file.ts`
- `src/pairing/allow-from-store-read.test.ts`
- `src/pairing/allow-from-store-read.ts`
- `src/pairing/pairing-messages.test.ts`
- `src/pairing/pairing-store.test.ts`
- `src/pairing/pairing-store.ts`
- `src/pairing/setup-code.test.ts`
- `src/pairing/setup-code.ts`

## `src/reply-orchestration/streaming`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/streaming`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `16`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/heartbeat-filter.browser-import.test.ts`
- `src/auto-reply/heartbeat-filter.test.ts`
- `src/auto-reply/heartbeat-filter.ts`
- `src/auto-reply/heartbeat-tool-response.ts`
- `src/auto-reply/heartbeat.test.ts`
- `src/auto-reply/heartbeat.ts`
- `src/auto-reply/reply.block-streaming.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.e2e-harness.ts`
- `src/auto-reply/reply.directive.directive-behavior.prefers-alias-matches-fuzzy-selection-is-ambiguous.test.ts`
- `src/auto-reply/reply.directive.parse.test.ts`
- `src/auto-reply/reply.raw-body.test.ts`
- `src/auto-reply/reply.test-harness.ts`
- `src/auto-reply/reply.triggers.group-intro-prompts.cases.ts`
- `src/auto-reply/reply.triggers.trigger-handling.targets-active-session-native-stop.e2e.test.ts`
- `src/auto-reply/reply/block-streaming.ts`
- `src/auto-reply/reply/get-reply-inline-actions.ts`

## `ui/web-ui/styles-types`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/styles-types`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `16`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/src/styles/base.css`
- `ui/src/styles/chat/grouped.css`
- `ui/src/styles/chat/layout.css`
- `ui/src/styles/chat/sidebar.css`
- `ui/src/styles/chat/text.css`
- `ui/src/styles/chat/tool-cards.css`
- `ui/src/styles/components.css`
- `ui/src/styles/components.test.ts`
- `ui/src/styles/config-quick.css`
- `ui/src/styles/config-quick.test.ts`
- `ui/src/styles/config.css`
- `ui/src/styles/layout.css`
- `ui/src/styles/layout.mobile.css`
- `ui/src/styles/layout.mobile.test.ts`
- `ui/src/styles/markdown-preview.test.ts`
- `ui/src/styles/usage.css`

## `scripts/release-versioning/app-versions`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/release-versioning/app-versions`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `15`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `appcast.xml`
- `apps/android/.editorconfig`
- `apps/android/app/build.gradle.kts`
- `apps/android/gradle.properties`
- `apps/android/gradle/libs.versions.toml`
- `apps/ios/.swiftlint.yml`
- `apps/ios/CHANGELOG.md`
- `apps/ios/SwiftSources.input.xcfilelist`
- `apps/ios/fastlane/metadata/en-US/release_notes.txt`
- `apps/ios/project.yml`
- `apps/ios/version.json`
- `apps/macos/Packaging/dmg-background-small.png`
- `apps/macos/Packaging/dmg-background.png`
- `apps/macos/Sources/OpenClaw/Resources/Info.plist`
- `docs/install/updating.md`

## `src/capability-modules/tts`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/tts`
- Coverage: `verified`
- Changed paths: `15`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/tts/directives.test.ts`
- `src/tts/directives.ts`
- `src/tts/openai-compatible-speech-provider.test.ts`
- `src/tts/openai-compatible-speech-provider.ts`
- `src/tts/provider-registry-core.ts`
- `src/tts/provider-registry.test.ts`
- `src/tts/provider-registry.ts`
- `src/tts/provider-types.ts`
- `src/tts/status-config.test.ts`
- `src/tts/status-config.ts`
- `src/tts/tts-config.test.ts`
- `src/tts/tts-config.ts`
- `src/tts/tts-types.ts`
- `src/tts/tts.test.ts`
- `src/tts/tts.ts`

## `src/reply-orchestration/queue`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/queue`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `15`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/reply/queue-policy.test.ts`
- `src/auto-reply/reply/queue-policy.ts`
- `src/auto-reply/reply/queue.collect.test.ts`
- `src/auto-reply/reply/queue.dedupe.test.ts`
- `src/auto-reply/reply/queue.drain-restart.test.ts`
- `src/auto-reply/reply/queue.ts`
- `src/auto-reply/reply/queue/drain.ts`
- `src/auto-reply/reply/queue/enqueue.ts`
- `src/auto-reply/reply/queue/normalize.ts`
- `src/auto-reply/reply/queue/settings.test.ts`
- `src/auto-reply/reply/queue/settings.ts`
- `src/auto-reply/reply/queue/state.test.ts`
- `src/auto-reply/reply/queue/state.ts`
- `src/auto-reply/reply/queue/steering.ts`
- `src/auto-reply/reply/queue/types.ts`

## `apps/macos/tests`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/macos/tests`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `14`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayChannelConnectTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayChannelDeviceTokenRetryTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayConnectionControlTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayDiscoverySelectionSupportTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayEndpointStoreTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayLaunchAgentManagerTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayProcessManagerTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/OnboardingRemoteAuthPromptTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/OnboardingWizardStepViewTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/VoicePushToTalkTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/VoiceWakeForwarderTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/VoiceWakeRuntimeTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/VoiceWakeTesterTests.swift`

## `docs/mintlify/install`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/install`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `14`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/install/ansible.md`
- `docs/install/bun.md`
- `docs/install/development-channels.md`
- `docs/install/docker-vm-runtime.md`
- `docs/install/exe-dev.md`
- `docs/install/fly.md`
- `docs/install/hetzner.md`
- `docs/install/index.md`
- `docs/install/installer.md`
- `docs/install/macos-vm.md`
- `docs/install/migrating-claude.md`
- `docs/install/migrating-hermes.md`
- `docs/install/migrating-matrix.md`
- `docs/install/migrating.md`

## `extensions/skill-plugins/diffs`

- Feature: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/diffs`
- Coverage: `verified`
- Changed paths: `14`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/diffs/api.ts`
- `extensions/diffs/openclaw.plugin.json`
- `extensions/diffs/package.json`
- `extensions/diffs/src/browser.test.ts`
- `extensions/diffs/src/config.test.ts`
- `extensions/diffs/src/config.ts`
- `extensions/diffs/src/manifest.test.ts`
- `extensions/diffs/src/plugin.ts`
- `extensions/diffs/src/store.test.ts`
- `extensions/diffs/src/tool-render-output.test.ts`
- `extensions/diffs/src/tool.test.ts`
- `extensions/diffs/src/tool.ts`
- `extensions/diffs/src/types.ts`
- `extensions/diffs/src/viewer-assets.ts`

## `src/agent-runtime/sandbox/backend-policy`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/backend-policy`
- Coverage: `verified`
- Changed paths: `14`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/sandbox.resolveSandboxContext.test.ts`
- `src/agents/sandbox.ts`
- `src/agents/sandbox/backend.ts`
- `src/agents/sandbox/config.ts`
- `src/agents/sandbox/constants.ts`
- `src/agents/sandbox/context.ts`
- `src/agents/sandbox/manage.test.ts`
- `src/agents/sandbox/manage.ts`
- `src/agents/sandbox/prune.ts`
- `src/agents/sandbox/registry.test.ts`
- `src/agents/sandbox/registry.ts`
- `src/agents/sandbox/sanitize-env-vars.ts`
- `src/agents/sandbox/validate-sandbox-security.test.ts`
- `src/agents/sandbox/validate-sandbox-security.ts`

## `src/agent-runtime/skills/core-inventory`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/skills/core-inventory`
- Coverage: `verified`
- Changed paths: `14`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `skills/coding-agent/SKILL.md`
- `skills/gifgrep/SKILL.md`
- `skills/pyproject.toml`
- `skills/skill-creator/scripts/test_package_skill.py`
- `src/agents/skills-status.test.ts`
- `src/agents/skills-status.ts`
- `src/agents/skills.build-workspace-skills-prompt.prefers-workspace-skills-managed-skills.test.ts`
- `src/agents/skills.buildworkspaceskillsnapshot.test.ts`
- `src/agents/skills.buildworkspaceskillstatus.test.ts`
- `src/agents/skills.loadworkspaceskillentries.test.ts`
- `src/agents/skills.test.ts`
- `src/agents/skills/snapshot-hydration.ts`
- `src/agents/skills/types.ts`
- `src/agents/skills/workspace.ts`

## `docs/mintlify/help`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/help`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `13`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/help/debugging.md`
- `docs/help/environment.md`
- `docs/help/faq-first-run.md`
- `docs/help/faq-models.md`
- `docs/help/faq.md`
- `docs/help/gpt54-codex-agentic-parity-maintainers.md`
- `docs/help/gpt54-codex-agentic-parity.md`
- `docs/help/gpt55-codex-agentic-parity-maintainers.md`
- `docs/help/gpt55-codex-agentic-parity.md`
- `docs/help/index.md`
- `docs/help/testing-live.md`
- `docs/help/testing-updates-plugins.md`
- `docs/help/testing.md`

## `extensions/provider-plugins/mistral`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/mistral`
- Coverage: `verified`
- Changed paths: `13`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/mistral/api.ts`
- `extensions/mistral/embedding-provider.ts`
- `extensions/mistral/index.ts`
- `extensions/mistral/media-understanding-provider.test.ts`
- `extensions/mistral/mistral.live.test.ts`
- `extensions/mistral/model-definitions.ts`
- `extensions/mistral/onboard.test.ts`
- `extensions/mistral/openclaw.plugin.json`
- `extensions/mistral/package.json`
- `extensions/mistral/provider-catalog.ts`
- `extensions/mistral/provider-compat.ts`
- `extensions/mistral/realtime-transcription-provider.test.ts`
- `extensions/mistral/realtime-transcription-provider.ts`

## `extensions/skill-plugins/tlon`

- Feature: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/tlon`
- Coverage: `verified`
- Changed paths: `13`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/tlon/src/core.test.ts`
- `extensions/tlon/src/monitor/discovery.ts`
- `extensions/tlon/src/monitor/history.ts`
- `extensions/tlon/src/monitor/media.ts`
- `extensions/tlon/src/monitor/settings-helpers.ts`
- `extensions/tlon/src/setup-surface.ts`
- `extensions/tlon/src/types.ts`
- `extensions/tlon/src/urbit/channel-ops.ts`
- `extensions/tlon/src/urbit/context.ts`
- `extensions/tlon/src/urbit/errors.ts`
- `extensions/tlon/src/urbit/fetch.ts`
- `extensions/tlon/src/urbit/foreigns.ts`
- `extensions/tlon/src/urbit/story.ts`

## `src/shared-misc-runtime-support/docs-i18n-markdown`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/docs-i18n-markdown`
- Coverage: `fallback`
- Changed paths: `13`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/docs/channel-config-examples.test.ts`
- `src/docs/plugin-doc-examples.test.ts`
- `src/i18n/registry.test.ts`
- `src/markdown/code-spans.ts`
- `src/markdown/frontmatter.ts`
- `src/markdown/ir.nested-lists.test.ts`
- `src/markdown/ir.ts`
- `src/scripts/canvas-a2ui-copy.test.ts`
- `src/scripts/ci-changed-scope.test.ts`
- `src/scripts/control-ui-i18n.test.ts`
- `src/scripts/prepare-codex-ci-config.test.ts`
- `src/scripts/sync-plugin-versions.test.ts`
- `src/scripts/test-projects.test.ts`

## `extensions/provider-plugins/deepseek`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/deepseek`
- Coverage: `verified`
- Changed paths: `12`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/deepseek/deepseek.live.test.ts`
- `extensions/deepseek/index.test.ts`
- `extensions/deepseek/index.ts`
- `extensions/deepseek/models.ts`
- `extensions/deepseek/onboard.ts`
- `extensions/deepseek/openclaw.plugin.json`
- `extensions/deepseek/package.json`
- `extensions/deepseek/provider-discovery.ts`
- `extensions/deepseek/provider-policy-api.test.ts`
- `extensions/deepseek/provider-policy-api.ts`
- `extensions/deepseek/stream.ts`
- `extensions/deepseek/thinking.ts`

## `extensions/auth-integration-plugins/lobster`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/lobster`
- Coverage: `verified`
- Changed paths: `11`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/lobster/index.ts`
- `extensions/lobster/openclaw.plugin.json`
- `extensions/lobster/package.json`
- `extensions/lobster/src/lobster-ajv-cache.ts`
- `extensions/lobster/src/lobster-runner.test.ts`
- `extensions/lobster/src/lobster-runner.ts`
- `extensions/lobster/src/lobster-taskflow.ts`
- `extensions/lobster/src/lobster-tool.test.ts`
- `extensions/lobster/src/lobster-tool.ts`
- `extensions/lobster/src/taskflow-test-helpers.ts`
- `extensions/lobster/src/test-helpers.ts`

## `extensions/provider-plugins/moonshot`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/moonshot`
- Coverage: `verified`
- Changed paths: `11`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/moonshot/index.test.ts`
- `extensions/moonshot/media-understanding-provider.test.ts`
- `extensions/moonshot/media-understanding-provider.ts`
- `extensions/moonshot/moonshot.live.test.ts`
- `extensions/moonshot/onboard.ts`
- `extensions/moonshot/openclaw.plugin.json`
- `extensions/moonshot/package.json`
- `extensions/moonshot/provider-catalog.ts`
- `extensions/moonshot/provider-discovery.ts`
- `extensions/moonshot/src/kimi-web-search-provider.runtime.ts`
- `extensions/moonshot/src/kimi-web-search-provider.test.ts`

## `extensions/provider-plugins/volcengine`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/volcengine`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `11`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/volcengine/index.test.ts`
- `extensions/volcengine/index.ts`
- `extensions/volcengine/models.ts`
- `extensions/volcengine/openclaw.plugin.json`
- `extensions/volcengine/package.json`
- `extensions/volcengine/provider-catalog.ts`
- `extensions/volcengine/provider-discovery.ts`
- `extensions/volcengine/speech-provider.ts`
- `extensions/volcengine/tts.live.test.ts`
- `extensions/volcengine/tts.test.ts`
- `extensions/volcengine/tts.ts`

## `docs/mintlify/platforms`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/platforms`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `10`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/platforms/android.md`
- `docs/platforms/digitalocean.md`
- `docs/platforms/ios.md`
- `docs/platforms/mac/dev-setup.md`
- `docs/platforms/mac/menu-bar.md`
- `docs/platforms/mac/peekaboo.md`
- `docs/platforms/mac/remote.md`
- `docs/platforms/macos.md`
- `docs/platforms/oracle.md`
- `docs/platforms/raspberry-pi.md`

## `extensions/provider-plugins/amazon-bedrock`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/amazon-bedrock`
- Coverage: `verified`
- Changed paths: `10`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/amazon-bedrock/api.ts`
- `extensions/amazon-bedrock/discovery-shared.ts`
- `extensions/amazon-bedrock/discovery.ts`
- `extensions/amazon-bedrock/embedding-provider.ts`
- `extensions/amazon-bedrock/index.test.ts`
- `extensions/amazon-bedrock/lazy-import.test.ts`
- `extensions/amazon-bedrock/openclaw.plugin.json`
- `extensions/amazon-bedrock/package.json`
- `extensions/amazon-bedrock/register.sync.runtime.ts`
- `extensions/amazon-bedrock/setup-api.ts`

## `extensions/provider-plugins/nvidia`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/nvidia`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `10`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/nvidia/api.ts`
- `extensions/nvidia/index.test.ts`
- `extensions/nvidia/index.ts`
- `extensions/nvidia/onboard.test.ts`
- `extensions/nvidia/onboard.ts`
- `extensions/nvidia/openclaw.plugin.json`
- `extensions/nvidia/package.json`
- `extensions/nvidia/plugin-registration.contract.test.ts`
- `extensions/nvidia/provider-catalog.test.ts`
- `extensions/nvidia/provider-catalog.ts`

## `src/agent-runtime/pi-runner/provider-params-streams`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/provider-params-streams`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `10`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts`
- `src/agents/pi-embedded-runner/extra-params.provider-runtime.test.ts`
- `src/agents/pi-embedded-runner/extra-params.ts`
- `src/agents/pi-embedded-runner/moonshot-thinking-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/openai-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/openai-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/openrouter-model-capabilities.test.ts`
- `src/agents/pi-embedded-runner/openrouter-model-capabilities.ts`
- `src/agents/pi-embedded-runner/proxy-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/proxy-stream-wrappers.ts`

## `src/capability-modules/acp/translator-protocol`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/translator-protocol`
- Coverage: `verified`
- Changed paths: `10`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/client.ts`
- `src/acp/event-mapper.ts`
- `src/acp/server.startup.test.ts`
- `src/acp/server.ts`
- `src/acp/translator.prompt-harness.test-support.ts`
- `src/acp/translator.session-rate-limit.test.ts`
- `src/acp/translator.set-session-mode.test.ts`
- `src/acp/translator.test-helpers.ts`
- `src/acp/translator.ts`
- `src/acp/types.ts`

## `src/capability-modules/browser`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/browser`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `10`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/browser-lifecycle-cleanup.test.ts`
- `src/proxy-capture/env.test.ts`
- `src/proxy-capture/paths.ts`
- `src/proxy-capture/proxy-server.managed-proxy.test.ts`
- `src/proxy-capture/proxy-server.ts`
- `src/proxy-capture/query.ts`
- `src/proxy-capture/runtime.test.ts`
- `src/proxy-capture/runtime.ts`
- `src/proxy-capture/store.sqlite.test.ts`
- `src/proxy-capture/store.sqlite.ts`

## `src/channel-abstraction/plugin-bridge`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/plugin-bridge`
- Coverage: `verified`
- Changed paths: `10`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/mcp/channel-bridge.ts`
- `src/mcp/channel-server.shutdown-unhandled-rejection.test.ts`
- `src/mcp/channel-server.test.ts`
- `src/mcp/channel-server.ts`
- `src/mcp/channel-shared.ts`
- `src/mcp/channel-tools.ts`
- `src/mcp/openclaw-tools-serve.ts`
- `src/mcp/plugin-tools-handlers.ts`
- `src/mcp/plugin-tools-serve.test.ts`
- `src/mcp/plugin-tools-serve.ts`

## `apps/provider-channel-settings/native-settings/mobile-native-settings`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/provider-channel-settings/native-settings/mobile-native-settings`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/ios/Sources/Chat/IOSGatewayChatTransport.swift`
- `apps/ios/Sources/Gateway/GatewayConnectConfig.swift`
- `apps/ios/Sources/Gateway/GatewayConnectionIssue.swift`
- `apps/ios/Sources/Gateway/GatewayHealthMonitor.swift`
- `apps/ios/Sources/Gateway/GatewayProblemView.swift`
- `apps/ios/Sources/Gateway/GatewayServiceResolver.swift`
- `apps/ios/Sources/Gateway/GatewaySetupCode.swift`
- `apps/ios/Sources/Gateway/TCPProbe.swift`
- `apps/ios/Sources/Voice/TalkModeGatewayConfig.swift`

## `docs/mintlify/automation`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/automation`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/automation/auth-monitoring.md`
- `docs/automation/clawflow.md`
- `docs/automation/cron-jobs.md`
- `docs/automation/cron-vs-heartbeat.md`
- `docs/automation/hooks.md`
- `docs/automation/index.md`
- `docs/automation/standing-orders.md`
- `docs/automation/taskflow.md`
- `docs/automation/tasks.md`

## `extensions/auth-integration-plugins/device-pair`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/device-pair`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/device-pair/index.test.ts`
- `extensions/device-pair/index.ts`
- `extensions/device-pair/notify.test.ts`
- `extensions/device-pair/notify.ts`
- `extensions/device-pair/openclaw.plugin.json`
- `extensions/device-pair/pair-command-auth.test.ts`
- `extensions/device-pair/pair-command-auth.ts`
- `src/cli/qr-cli.test.ts`
- `src/infra/device-pairing.test.ts`

## `extensions/memory-media-voice-plugins/memory-lancedb`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/memory-lancedb`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/memory-lancedb/api.ts`
- `extensions/memory-lancedb/config.test.ts`
- `extensions/memory-lancedb/config.ts`
- `extensions/memory-lancedb/index.test.ts`
- `extensions/memory-lancedb/index.ts`
- `extensions/memory-lancedb/lancedb-runtime.test.ts`
- `extensions/memory-lancedb/lancedb-runtime.ts`
- `extensions/memory-lancedb/openclaw.plugin.json`
- `extensions/memory-lancedb/package.json`

## `extensions/provider-plugins/byteplus`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/byteplus`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/byteplus/index.test.ts`
- `extensions/byteplus/live.test.ts`
- `extensions/byteplus/models.ts`
- `extensions/byteplus/openclaw.plugin.json`
- `extensions/byteplus/package.json`
- `extensions/byteplus/plugin-registration.contract.test.ts`
- `extensions/byteplus/provider-catalog.ts`
- `extensions/byteplus/provider-discovery.ts`
- `extensions/byteplus/video-generation-provider.test.ts`

## `extensions/provider-plugins/zai`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/zai`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/zai/detect.ts`
- `extensions/zai/index.test.ts`
- `extensions/zai/index.ts`
- `extensions/zai/model-definitions.ts`
- `extensions/zai/onboard.test.ts`
- `extensions/zai/onboard.ts`
- `extensions/zai/openclaw.plugin.json`
- `extensions/zai/package.json`
- `extensions/zai/provider-runtime.contract.test.ts`

## `scripts/packaging/docker`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/docker`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/docker/cleanup-smoke/Dockerfile`
- `scripts/docker/install-sh-e2e/Dockerfile`
- `scripts/docker/install-sh-e2e/run.sh`
- `scripts/docker/install-sh-smoke/Dockerfile`
- `scripts/docker/install-sh-smoke/run.sh`
- `scripts/docker/sandbox/Dockerfile`
- `scripts/docker/sandbox/Dockerfile.browser`
- `scripts/docker/sandbox/Dockerfile.common`
- `scripts/docker/setup.sh`

## `src/shared-misc-runtime-support/root-entrypoints`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/root-entrypoints`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/entry.compile-cache.test.ts`
- `src/entry.compile-cache.ts`
- `src/entry.respawn.test.ts`
- `src/entry.respawn.ts`
- `src/entry.test.ts`
- `src/entry.ts`
- `src/extensionAPI.ts`
- `src/index.ts`
- `src/library.test.ts`

## `unmapped/config`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `9`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `config/knip.config.ts`
- `config/markdownlint-cli2.jsonc`
- `config/shellcheckrc`
- `config/swiftformat`
- `config/swiftlint.yml`
- `config/tsconfig/oxlint.core.json`
- `config/tsconfig/oxlint.extensions.json`
- `config/tsconfig/oxlint.json`
- `config/tsconfig/oxlint.scripts.json`

## `extensions/memory-media-voice-plugins/elevenlabs`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/elevenlabs`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/elevenlabs/doctor-contract.ts`
- `extensions/elevenlabs/elevenlabs.live.test.ts`
- `extensions/elevenlabs/openclaw.plugin.json`
- `extensions/elevenlabs/package.json`
- `extensions/elevenlabs/realtime-transcription-provider.test.ts`
- `extensions/elevenlabs/realtime-transcription-provider.ts`
- `extensions/elevenlabs/speech-provider.test.ts`
- `extensions/elevenlabs/speech-provider.ts`

## `extensions/provider-plugins/cloudflare-ai-gateway`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/cloudflare-ai-gateway`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/cloudflare-ai-gateway/catalog-provider.ts`
- `extensions/cloudflare-ai-gateway/index.test.ts`
- `extensions/cloudflare-ai-gateway/index.ts`
- `extensions/cloudflare-ai-gateway/openclaw.plugin.json`
- `extensions/cloudflare-ai-gateway/package.json`
- `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts`
- `extensions/cloudflare-ai-gateway/stream-wrappers.test.ts`
- `extensions/cloudflare-ai-gateway/stream-wrappers.ts`

## `extensions/provider-plugins/opencode`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/opencode`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/opencode/index.test.ts`
- `extensions/opencode/index.ts`
- `extensions/opencode/onboard.test.ts`
- `extensions/opencode/openclaw.plugin.json`
- `extensions/opencode/package.json`
- `extensions/opencode/plugin-registration.contract.test.ts`
- `extensions/opencode/provider-policy-api.test.ts`
- `extensions/opencode/provider-policy-api.ts`

## `extensions/provider-plugins/opencode-go`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/opencode-go`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/opencode-go/index.test.ts`
- `extensions/opencode-go/index.ts`
- `extensions/opencode-go/onboard.test.ts`
- `extensions/opencode-go/openclaw.plugin.json`
- `extensions/opencode-go/package.json`
- `extensions/opencode-go/plugin-registration.contract.test.ts`
- `extensions/opencode-go/provider-catalog.ts`
- `extensions/opencode-go/stream.ts`

## `extensions/provider-plugins/venice`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/venice`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/venice/index.test.ts`
- `extensions/venice/index.ts`
- `extensions/venice/models.ts`
- `extensions/venice/onboard.ts`
- `extensions/venice/openclaw.plugin.json`
- `extensions/venice/package.json`
- `extensions/venice/provider-runtime.contract.test.ts`
- `extensions/venice/stream.ts`

## `extensions/provider-plugins/xiaomi`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/xiaomi`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/xiaomi/index.ts`
- `extensions/xiaomi/onboard.test.ts`
- `extensions/xiaomi/openclaw.plugin.json`
- `extensions/xiaomi/package.json`
- `extensions/xiaomi/provider-catalog.ts`
- `extensions/xiaomi/speech-provider.test.ts`
- `extensions/xiaomi/speech-provider.ts`
- `extensions/xiaomi/xiaomi.live.test.ts`

## `src/agent-runtime/sandbox/workspace-browser-ssh`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/workspace-browser-ssh`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/sandbox/browser.create.test.ts`
- `src/agents/sandbox/browser.ts`
- `src/agents/sandbox/docker-backend.ts`
- `src/agents/sandbox/docker.config-hash-recreate.test.ts`
- `src/agents/sandbox/docker.test.ts`
- `src/agents/sandbox/docker.ts`
- `src/agents/sandbox/ssh-backend.test.ts`
- `src/agents/sandbox/workspace.ts`

## `src/agent-runtime/skills/install-refresh`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/skills/install-refresh`
- Coverage: `verified`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/skills-install-download.ts`
- `src/agents/skills-install-fallback.test.ts`
- `src/agents/skills-install-output.ts`
- `src/agents/skills-install.download-test-utils.ts`
- `src/agents/skills-install.test.ts`
- `src/agents/skills-install.ts`
- `src/agents/skills/refresh.test.ts`
- `src/agents/skills/refresh.ts`

## `src/capability-modules/acp/runtime-session-identity`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/runtime-session-identity`
- Coverage: `verified`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/runtime/adapter-contract.testkit.ts`
- `src/acp/runtime/availability.ts`
- `src/acp/runtime/registry.test.ts`
- `src/acp/runtime/session-meta.ts`
- `src/acp/runtime/types.ts`
- `src/acp/session-interaction-mode.test.ts`
- `src/acp/session-interaction-mode.ts`
- `src/acp/session-mapper.ts`

## `src/shared-misc-runtime-support/web-provider-root`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/web-provider-root`
- Coverage: `verified`
- Changed paths: `8`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/channel-web.ts`
- `src/web-fetch/content-extractors.runtime.ts`
- `src/web-fetch/runtime.test.ts`
- `src/web-fetch/runtime.ts`
- `src/web-search/runtime-types.ts`
- `src/web-search/runtime.test.ts`
- `src/web-search/runtime.ts`
- `src/web/provider-runtime-shared.ts`

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
- `extensions/fal/openclaw.plugin.json`
- `extensions/fal/package.json`
- `extensions/fal/plugin-registration.contract.test.ts`
- `extensions/fal/video-generation-provider.test.ts`
- `extensions/fal/video-generation-provider.ts`

## `extensions/provider-plugins/huggingface`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/huggingface`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/huggingface/index.test.ts`
- `extensions/huggingface/model-discovery-env.ts`
- `extensions/huggingface/models.ts`
- `extensions/huggingface/onboard.ts`
- `extensions/huggingface/openclaw.plugin.json`
- `extensions/huggingface/package.json`
- `extensions/huggingface/provider-catalog.ts`

## `extensions/provider-plugins/kilocode`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/kilocode`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/kilocode/index.test.ts`
- `extensions/kilocode/onboard.test.ts`
- `extensions/kilocode/openclaw.plugin.json`
- `extensions/kilocode/package.json`
- `extensions/kilocode/provider-models.test.ts`
- `extensions/kilocode/provider-models.ts`
- `extensions/kilocode/shared.ts`

## `extensions/provider-plugins/together`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/together`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/together/models.ts`
- `extensions/together/onboard.ts`
- `extensions/together/openclaw.plugin.json`
- `extensions/together/package.json`
- `extensions/together/plugin-registration.contract.test.ts`
- `extensions/together/provider-catalog.ts`
- `extensions/together/video-generation-provider.test.ts`

## `extensions/provider-plugins/vllm`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/vllm`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/vllm/api.ts`
- `extensions/vllm/index.ts`
- `extensions/vllm/models.ts`
- `extensions/vllm/openclaw.plugin.json`
- `extensions/vllm/package.json`
- `extensions/vllm/stream.test.ts`
- `extensions/vllm/stream.ts`

## `extensions/tool-capability-plugins/brave`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/brave`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/brave/openclaw.plugin.json`
- `extensions/brave/package.json`
- `extensions/brave/src/brave-web-search-provider.runtime.ts`
- `extensions/brave/src/brave-web-search-provider.shared.ts`
- `extensions/brave/src/brave-web-search-provider.test.ts`
- `extensions/brave/src/brave-web-search-provider.ts`
- `extensions/brave/web-search-contract-api.ts`

## `extensions/tool-capability-plugins/firecrawl`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/firecrawl`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/firecrawl/api.ts`
- `extensions/firecrawl/openclaw.plugin.json`
- `extensions/firecrawl/package.json`
- `extensions/firecrawl/src/config.ts`
- `extensions/firecrawl/src/firecrawl-client.ts`
- `extensions/firecrawl/src/firecrawl-fetch-provider-shared.ts`
- `extensions/firecrawl/src/firecrawl-tools.test.ts`

## `extensions/tool-capability-plugins/openshell`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/openshell`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/openshell/openclaw.plugin.json`
- `extensions/openshell/package.json`
- `extensions/openshell/src/backend.e2e.test.ts`
- `extensions/openshell/src/config.ts`
- `extensions/openshell/src/fs-bridge.ts`
- `extensions/openshell/src/mirror.test.ts`
- `extensions/openshell/src/openshell-core.test.ts`

## `src/agent-runtime/runtime/context-subagents/context-tokens`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/context-subagents/context-tokens`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/context-runtime-state.ts`
- `src/agents/context-window-guard.test.ts`
- `src/agents/context-window-guard.ts`
- `src/agents/context.eager-warmup.test.ts`
- `src/agents/context.lookup.test.ts`
- `src/agents/context.test.ts`
- `src/agents/context.ts`

## `src/agent-runtime/runtime/session-scope`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/session-scope`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/agent-scope.test.ts`
- `src/agents/agent-scope.ts`
- `src/agents/cli-session.test.ts`
- `src/agents/cli-session.ts`
- `src/agents/identity-avatar.test.ts`
- `src/agents/identity-avatar.ts`
- `src/agents/identity-file.ts`

## `src/gateway-api-surface/client-call`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/client-call`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/gateway-rpc.runtime.ts`
- `src/cli/gateway-rpc.ts`
- `src/gateway/call.test.ts`
- `src/gateway/call.ts`
- `src/gateway/client.test.ts`
- `src/gateway/client.ts`
- `src/gateway/client.watchdog.test.ts`

## `src/infra-outbound-delivery/outbound-routing`

- Feature: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-routing`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/outbound/channel-bootstrap.runtime.ts`
- `src/infra/outbound/channel-resolution.test.ts`
- `src/infra/outbound/channel-target-prefix.ts`
- `src/infra/outbound/channel-target.ts`
- `src/infra/outbound/target-normalization.test.ts`
- `src/infra/outbound/target-normalization.ts`
- `src/infra/outbound/target-resolver.test.ts`

## `src/reply-orchestration/commands/command-registry-families`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/commands/command-registry-families`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/commands-args.ts`
- `src/auto-reply/commands-registry-list.ts`
- `src/auto-reply/commands-registry.data.ts`
- `src/auto-reply/commands-registry.shared.ts`
- `src/auto-reply/commands-registry.test.ts`
- `src/auto-reply/commands-registry.ts`
- `src/auto-reply/commands-registry.types.ts`

## `unmapped/assets`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `7`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `assets/avatar-placeholder.svg`
- `assets/chrome-extension/icons/icon128.png`
- `assets/chrome-extension/icons/icon16.png`
- `assets/chrome-extension/icons/icon32.png`
- `assets/chrome-extension/icons/icon48.png`
- `assets/dmg-background-small.png`
- `assets/dmg-background.png`

## `docs/mintlify/nodes`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/nodes`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `6`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/nodes/audio.md`
- `docs/nodes/images.md`
- `docs/nodes/index.md`
- `docs/nodes/media-understanding.md`
- `docs/nodes/talk.md`
- `docs/nodes/voicewake.md`

## `docs/mintlify/security`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/security`
- Coverage: `fallback`
- Changed paths: `6`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `INCIDENT_RESPONSE.md`
- `SECURITY.md`
- `docs/security/CONTRIBUTING-THREAT-MODEL.md`
- `docs/security/THREAT-MODEL-ATLAS.md`
- `docs/security/incident-response.md`
- `docs/security/network-proxy.md`

## `docs/mintlify/start`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/start`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `6`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/start/bootstrapping.md`
- `docs/start/openclaw.md`
- `docs/start/setup.md`
- `docs/start/wizard-cli-automation.md`
- `docs/start/wizard-cli-reference.md`
- `docs/start/wizard.md`

## `extensions/memory-media-voice-plugins/deepgram`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/deepgram`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `6`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/deepgram/audio.live.test.ts`
- `extensions/deepgram/audio.test.ts`
- `extensions/deepgram/openclaw.plugin.json`
- `extensions/deepgram/package.json`
- `extensions/deepgram/realtime-transcription-provider.test.ts`
- `extensions/deepgram/realtime-transcription-provider.ts`

## `extensions/memory-media-voice-plugins/microsoft`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/microsoft`
- Coverage: `verified`
- Changed paths: `6`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/microsoft/microsoft.live.test.ts`
- `extensions/microsoft/openclaw.plugin.json`
- `extensions/microsoft/package.json`
- `extensions/microsoft/speech-provider.test.ts`
- `extensions/microsoft/tts.test.ts`
- `extensions/microsoft/tts.ts`

## `extensions/provider-plugins/vercel-ai-gateway`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/vercel-ai-gateway`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/vercel-ai-gateway/index.ts`
- `extensions/vercel-ai-gateway/onboard.ts`
- `extensions/vercel-ai-gateway/openclaw.plugin.json`
- `extensions/vercel-ai-gateway/package.json`
- `extensions/vercel-ai-gateway/thinking.test.ts`
- `extensions/vercel-ai-gateway/thinking.ts`

## `extensions/tool-capability-plugins/duckduckgo`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/duckduckgo`
- Coverage: `verified`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/duckduckgo/openclaw.plugin.json`
- `extensions/duckduckgo/package.json`
- `extensions/duckduckgo/src/config.ts`
- `extensions/duckduckgo/src/ddg-client.ts`
- `extensions/duckduckgo/src/ddg-search-provider.shared.ts`
- `extensions/duckduckgo/src/ddg-search-provider.test.ts`

## `extensions/tool-capability-plugins/llm-task`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/llm-task`
- Coverage: `verified`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/llm-task/api.ts`
- `extensions/llm-task/openclaw.plugin.json`
- `extensions/llm-task/package.json`
- `extensions/llm-task/src/llm-task-tool.test.ts`
- `extensions/llm-task/src/llm-task-tool.ts`
- `extensions/llm-task/src/runtime-api.ts`

## `src/agent-runtime/runtime/acp-spawn`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/acp-spawn`
- Coverage: `verified`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/acp-spawn-parent-stream.test.ts`
- `src/agents/acp-spawn-parent-stream.ts`
- `src/agents/acp-spawn.test.ts`
- `src/agents/acp-spawn.ts`
- `src/agents/tools/sessions-spawn-tool.test.ts`
- `src/agents/tools/sessions-spawn-tool.ts`

## `src/capability-modules/acp/control-plane-session-manager`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/control-plane-session-manager`
- Coverage: `verified`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/control-plane/manager.core.ts`
- `src/acp/control-plane/manager.test.ts`
- `src/acp/control-plane/manager.turn-stream.ts`
- `src/acp/control-plane/manager.utils.ts`
- `src/acp/control-plane/runtime-cache.test.ts`
- `src/acp/control-plane/runtime-options.ts`

## `src/channel-abstraction/bindings`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/bindings`
- Coverage: `verified`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/channels/plugins/binding-provider.ts`
- `src/channels/plugins/binding-routing.test.ts`
- `src/channels/plugins/binding-routing.ts`
- `src/channels/plugins/configured-binding-builtins.ts`
- `src/channels/plugins/configured-binding-compiler.ts`
- `src/channels/plugins/configured-binding-consumers.ts`

## `src/config-secrets-security/secrets-resolution`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution`
- Coverage: `verified`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/secrets/channel-contract-api.external.test.ts`
- `src/secrets/channel-contract-api.ts`
- `src/secrets/channel-env-vars.dynamic.test.ts`
- `src/secrets/channel-env-vars.ts`
- `src/secrets/exec-secret-ref-id-parity.test.ts`
- `src/secrets/resolve.test.ts`

## `src/infra-outbound-delivery/outbound-actions`

- Feature: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-actions`
- Coverage: `verified`
- Changed paths: `6`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/outbound/message-action-params.ts`
- `src/infra/outbound/message-action-runner.core-send.test.ts`
- `src/infra/outbound/message-action-runner.media.test.ts`
- `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts`
- `src/infra/outbound/message-action-runner.test-helpers.ts`
- `src/infra/outbound/message-action-runner.ts`

## `ui/web-ui/public-assets`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/public-assets`
- Coverage: `fallback`
- Changed paths: `6`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `dream-diary-preview-v2.html`
- `dream-diary-preview-v3.html`
- `ui/index.html`
- `ui/public/manifest.webmanifest`
- `ui/public/sw.js`
- `ui/src/main.ts`

## `unmapped/security`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `6`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `security/README.md`
- `security/opengrep/README.md`
- `security/opengrep/check-rule-metadata.mjs`
- `security/opengrep/compile-rules.mjs`
- `security/opengrep/precise.yml`
- `security/opengrep/rules/openclaw-policy/no-raw-http2-connect.yml`

## `apps/ios-android/ios-extensions-watch`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/ios-extensions-watch`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/ios/ActivityWidget/OpenClawLiveActivity.swift`
- `apps/ios/ShareExtension/ShareViewController.swift`
- `apps/ios/WatchExtension/Sources/WatchConnectivityReceiver.swift`
- `apps/ios/WatchExtension/Sources/WatchInboxStore.swift`
- `apps/ios/WatchExtension/Sources/WatchInboxView.swift`

## `docs/mintlify/web`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/web`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `5`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/web/control-ui.md`
- `docs/web/dashboard.md`
- `docs/web/index.md`
- `docs/web/tui.md`
- `docs/web/webchat.md`

## `extensions/auth-integration-plugins/diagnostics-otel`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/diagnostics-otel`
- Coverage: `verified`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/diagnostics-otel/api.ts`
- `extensions/diagnostics-otel/openclaw.plugin.json`
- `extensions/diagnostics-otel/package.json`
- `extensions/diagnostics-otel/src/service.test.ts`
- `extensions/diagnostics-otel/src/service.ts`

## `extensions/auth-integration-plugins/groq`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/groq`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/groq/api.ts`
- `extensions/groq/index.test.ts`
- `extensions/groq/index.ts`
- `extensions/groq/openclaw.plugin.json`
- `extensions/groq/package.json`

## `extensions/auth-integration-plugins/perplexity`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/perplexity`
- Coverage: `verified`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/perplexity/openclaw.plugin.json`
- `extensions/perplexity/package.json`
- `extensions/perplexity/src/perplexity-web-search-provider.runtime.ts`
- `extensions/perplexity/src/perplexity-web-search-provider.shared.ts`
- `extensions/perplexity/src/perplexity-web-search-provider.test.ts`

## `extensions/provider-plugins/chutes`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/chutes`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/chutes/implicit-provider.test.ts`
- `extensions/chutes/model-discovery-env.ts`
- `extensions/chutes/models.ts`
- `extensions/chutes/openclaw.plugin.json`
- `extensions/chutes/package.json`

## `extensions/provider-plugins/kimi-coding`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/kimi-coding`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/kimi-coding/implicit-provider.test.ts`
- `extensions/kimi-coding/index.test.ts`
- `extensions/kimi-coding/openclaw.plugin.json`
- `extensions/kimi-coding/package.json`
- `extensions/kimi-coding/provider-catalog.ts`

## `extensions/skill-plugins/tavily`

- Feature: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/tavily`
- Coverage: `verified`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/tavily/openclaw.plugin.json`
- `extensions/tavily/package.json`
- `extensions/tavily/src/config.ts`
- `extensions/tavily/src/tavily-client.ts`
- `extensions/tavily/src/tavily-tools.test.ts`

## `src/config-secrets-security/legacy-migration`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/legacy-migration`
- Coverage: `verified`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/commands/doctor-legacy-config.migrations.test.ts`
- `src/config/legacy-config-detection.test-support.ts`
- `src/config/legacy-migrate.test-helpers.ts`
- `src/config/legacy.shared.ts`
- `src/config/legacy.ts`

## `src/reply-orchestration/channel-shaping`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/channel-shaping`
- Coverage: `verified`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/envelope.ts`
- `src/auto-reply/reply/inbound-dedupe.test.ts`
- `src/auto-reply/reply/inbound-dedupe.ts`
- `src/auto-reply/reply/inbound-meta.test.ts`
- `src/auto-reply/reply/inbound-meta.ts`

## `extensions/provider-plugins/qianfan`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/qianfan`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/qianfan/index.test.ts`
- `extensions/qianfan/openclaw.plugin.json`
- `extensions/qianfan/package.json`
- `extensions/qianfan/provider-catalog.ts`

## `extensions/provider-plugins/sglang`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/sglang`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/sglang/models.ts`
- `extensions/sglang/openclaw.plugin.json`
- `extensions/sglang/package.json`
- `extensions/sglang/provider-discovery.contract.test.ts`

## `extensions/provider-plugins/synthetic`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/synthetic`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/synthetic/models.ts`
- `extensions/synthetic/onboard.test.ts`
- `extensions/synthetic/openclaw.plugin.json`
- `extensions/synthetic/package.json`

## `extensions/tool-capability-plugins/exa`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/exa`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/exa/openclaw.plugin.json`
- `extensions/exa/package.json`
- `extensions/exa/src/exa-web-search-provider.runtime.ts`
- `extensions/exa/src/exa-web-search-provider.test.ts`

## `extensions/tool-capability-plugins/thread-ownership`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/thread-ownership`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/thread-ownership/api.ts`
- `extensions/thread-ownership/index.test.ts`
- `extensions/thread-ownership/index.ts`
- `extensions/thread-ownership/openclaw.plugin.json`

## `src/agent-runtime/sandbox/filesystem-bridge/path-safety`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/filesystem-bridge/path-safety`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/sandbox/fs-bridge-mutation-helper.test.ts`
- `src/agents/sandbox/fs-bridge-mutation-helper.ts`
- `src/agents/sandbox/host-paths.test.ts`
- `src/agents/sandbox/host-paths.ts`

## `src/capability-modules/acp/persistent-bindings`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/persistent-bindings`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/persistent-bindings.lifecycle.test.ts`
- `src/acp/persistent-bindings.resolve.ts`
- `src/acp/persistent-bindings.test.ts`
- `src/acp/persistent-bindings.types.ts`

## `src/capability-modules/acp/secret-env-bridge`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/secret-env-bridge`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/policy.test.ts`
- `src/acp/policy.ts`
- `src/acp/secret-file.test.ts`
- `src/acp/secret-file.ts`

## `src/capability-modules/context-engine`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/context-engine`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/context-engine/context-engine.test.ts`
- `src/context-engine/delegate.ts`
- `src/context-engine/registry.ts`
- `src/context-engine/types.ts`

## `src/config-secrets-security/secrets-resolution/secret-target-registry`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-target-registry`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/secrets/credential-matrix.ts`
- `src/secrets/target-registry-data.ts`
- `src/secrets/target-registry-query.ts`
- `src/secrets/target-registry.test.ts`

## `src/infra-outbound-delivery/formatting`

- Feature: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/formatting`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/outbound/payloads.test.ts`
- `src/infra/outbound/payloads.ts`
- `src/infra/outbound/sanitize-text.test.ts`
- `src/infra/outbound/sanitize-text.ts`

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

## `extensions/memory-media-voice-plugins/talk-voice`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/talk-voice`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/talk-voice/index.test.ts`
- `extensions/talk-voice/index.ts`
- `extensions/talk-voice/openclaw.plugin.json`

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

## `scripts/packaging/podman`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/podman`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `docs/install/podman.md`
- `scripts/podman/setup.sh`
- `scripts/run-openclaw-podman.sh`

## `src/channel-abstraction/routing`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/routing`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/routing/default-account-warnings.ts`
- `src/routing/resolve-route.test.ts`
- `src/routing/resolve-route.ts`

## `src/config-secrets-security/secrets-resolution/secret-ref-contracts`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-ref-contracts`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/secrets/json-pointer.ts`
- `src/secrets/ref-contract.test.ts`
- `src/secrets/ref-contract.ts`

## `src/config-secrets-security/secrets-resolution/secret-storage-audit`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-storage-audit`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/secrets/apply.test.ts`
- `src/secrets/apply.ts`
- `src/secrets/auth-store-paths.ts`

## `src/reply-orchestration/export-html`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/export-html`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/reply/export-html/template.css`
- `src/auto-reply/reply/export-html/template.html`
- `src/auto-reply/reply/export-html/template.security.test.ts`

## `extensions/provider-plugins/copilot-proxy`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/copilot-proxy`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/copilot-proxy/openclaw.plugin.json`
- `extensions/copilot-proxy/package.json`

## `extensions/skill-plugins/open-prose`

- Feature: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/open-prose`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/open-prose/openclaw.plugin.json`
- `extensions/open-prose/package.json`

## `scripts/packaging/dev`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/dev`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/dev/realtime-talk-live-smoke.ts`
- `scripts/dev/test-device-pair-telegram.ts`

## `scripts/packaging/docs-i18n`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/docs-i18n`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/docs-i18n/go.mod`
- `scripts/docs-i18n/go.sum`

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

## `src/agent-runtime/runtime`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/agent-command.live-model-switch.test.ts`
- `src/agents/agent-command.ts`

## `src/agent-runtime/schema`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/schema`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/pi-tools.schema.test.ts`
- `src/agents/pi-tools.schema.ts`

## `src/agent-runtime/skills/plugin-skills`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/skills/plugin-skills`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/skills/plugin-skills.test.ts`
- `src/agents/skills/plugin-skills.ts`

## `src/channel-abstraction/allowlists`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/allowlists`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/channels/allowlists/resolve-utils.ts`
- `src/channels/plugins/allowlist-match.ts`

## `src/config-secrets-security/secrets-resolution/gateway-cli-secret-resolution`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/gateway-cli-secret-resolution`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/command-secret-gateway.ts`
- `src/cli/command-secret-targets.ts`

## `src/infra-outbound-delivery/outbound-identity`

- Feature: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-identity`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/outbound/conversation-id.test.ts`
- `src/infra/outbound/conversation-id.ts`

## `src/plugin-runtime-sdk/plugin-sdk/channel-sdk`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugin-sdk/channel-sdk`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/plugin-sdk/direct-dm.test.ts`
- `src/plugin-sdk/direct-dm.ts`

## `src/plugin-runtime-sdk/plugins-runtime/boundary-enforcement`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugins-runtime/boundary-enforcement`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/plugin-activation-boundary.test.ts`
- `src/plugins/runtime/runtime-plugin-boundary.ts`

## `src/reply-orchestration/commands/command-auth-gates`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/commands/command-auth-gates`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/command-auth.owner-default.test.ts`
- `src/auto-reply/command-auth.ts`

## `test-infra/fixtures-and-helpers/mocks`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/mocks`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `src/commands/agent.test.ts`
- `test/mocks/baileys.ts`

## `apps/ios-android/android-app/build-flavors`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/android-app/build-flavors`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/android/build.gradle.kts`

## `apps/ios-android/android-benchmark`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/android-benchmark`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/android/benchmark/build.gradle.kts`

## `docs/mintlify/diagnostics`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/diagnostics`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/diagnostics/flags.md`

## `docs/mintlify/zh-cn`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/zh-cn`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/.i18n/glossary.zh-CN.json`

## `scripts/packaging/pre-commit`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/pre-commit`
- Coverage: `fallback`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `git-hooks/pre-commit`

## `scripts/packaging/shell-helpers`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/shell-helpers`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `docs/install/docker.md`

## `src/agent-runtime/sandbox/filesystem-bridge/shell-bridge`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/filesystem-bridge/shell-bridge`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/sandbox/fs-bridge.test-helpers.ts`

## `src/capability-modules/acp`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/approval-classifier.ts`

## `src/channel-abstraction/transport`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/transport`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/channels/web/index.ts`

## `unmapped/deploy`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `deploy/fly.private.toml`

## `unmapped/docker-compose.yml`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `docker-compose.yml`

## `unmapped/docker-setup.sh`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `docker-setup.sh`

## `unmapped/docs.acp.md`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `docs.acp.md`

## `unmapped/fly.private.toml`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `fly.private.toml`

## `unmapped/openclaw.mjs`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `openclaw.mjs`

## `unmapped/openclaw.podman.env`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `openclaw.podman.env`

## `unmapped/pyproject.toml`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `pyproject.toml`

## `unmapped/setup-podman.sh`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `setup-podman.sh`

## `unmapped/zizmor.yml`

- Feature: `misc-repo-surface`
- Impact-map dir: `unmapped`
- Coverage: `unmapped`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `unknown`

Changed paths:

- `zizmor.yml`
