# Leaf Impact Mapping

本报告聚焦最终 leaf。Canonical mapping: `leaf-impact.json`。

## `docs/generated-baselines/bundled-plugin-metadata`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/generated-baselines/bundled-plugin-metadata`
- Coverage: `verified`
- Changed paths: `1887`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `extensions/AGENTS.md`
- `extensions/active-memory/config.test.ts`
- `extensions/active-memory/index.test.ts`
- `extensions/active-memory/index.ts`
- `extensions/active-memory/openclaw.plugin.json`
- `extensions/alibaba/index.ts`
- `extensions/alibaba/openclaw.plugin.json`
- `extensions/alibaba/package.json`
- `extensions/alibaba/plugin-registration.contract.test.ts`
- `extensions/alibaba/tsconfig.json`
- `extensions/alibaba/video-generation-provider.test.ts`
- `extensions/alibaba/video-generation-provider.ts`
- `extensions/amazon-bedrock-mantle/api.ts`
- `extensions/amazon-bedrock-mantle/bedrock-token-generator.d.ts`
- `extensions/amazon-bedrock-mantle/discovery.test.ts`
- `extensions/amazon-bedrock-mantle/discovery.ts`
- `extensions/amazon-bedrock-mantle/index.test.ts`
- `extensions/amazon-bedrock-mantle/index.ts`
- `extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.test.ts`
- `extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.ts`
- `extensions/amazon-bedrock-mantle/openclaw.plugin.json`
- `extensions/amazon-bedrock-mantle/package.json`
- `extensions/amazon-bedrock-mantle/register.sync.runtime.ts`
- `extensions/amazon-bedrock-mantle/tsconfig.json`
- `extensions/anthropic-vertex/api.test.ts`
- `extensions/anthropic-vertex/api.ts`
- `extensions/anthropic-vertex/index.test.ts`
- `extensions/anthropic-vertex/index.ts`
- `extensions/anthropic-vertex/openclaw.plugin.json`
- `extensions/anthropic-vertex/package.json`
- `extensions/anthropic-vertex/provider-catalog.ts`
- `extensions/anthropic-vertex/provider-discovery.import-guard.test.ts`
- `extensions/anthropic-vertex/provider-discovery.ts`
- `extensions/anthropic-vertex/region.adc.test.ts`
- `extensions/anthropic-vertex/region.test.ts`
- `extensions/anthropic-vertex/region.ts`
- `extensions/anthropic-vertex/setup-api.ts`
- `extensions/anthropic-vertex/stream-runtime.test.ts`
- `extensions/anthropic-vertex/stream-runtime.ts`
- `extensions/anthropic-vertex/tsconfig.json`
- `extensions/arcee/api.ts`
- `extensions/arcee/index.test.ts`
- `extensions/arcee/index.ts`
- `extensions/arcee/models.ts`
- `extensions/arcee/onboard.ts`
- `extensions/arcee/openclaw.plugin.json`
- `extensions/arcee/package.json`
- `extensions/arcee/provider-catalog.ts`
- `extensions/arcee/tsconfig.json`
- `extensions/bonjour/index.ts`
- ... 1837 more paths in `leaf-impact.json`

## `src/agent-runtime/runtime/command-entrypoint`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/command-entrypoint`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `516`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/AGENTS.md`
- `src/agents/CLAUDE.md`
- `src/agents/agent-runtime-config.ts`
- `src/agents/agent-scope-config.ts`
- `src/agents/anthropic-payload-log.test.ts`
- `src/agents/anthropic-payload-log.ts`
- `src/agents/anthropic-payload-policy.test.ts`
- `src/agents/anthropic-payload-policy.ts`
- `src/agents/anthropic-transport-stream.test.ts`
- `src/agents/anthropic-transport-stream.ts`
- `src/agents/anthropic-vertex-stream.test.ts`
- `src/agents/anthropic-vertex-stream.ts`
- `src/agents/anthropic.setup-token.live.test.ts`
- `src/agents/auth-health.test.ts`
- `src/agents/auth-health.ts`
- `src/agents/auth-profile-runtime-contract.test.ts`
- `src/agents/bash-process-registry.ts`
- `src/agents/bedrock-discovery.test.ts`
- `src/agents/bootstrap-budget.ts`
- `src/agents/bootstrap-cache.test.ts`
- `src/agents/bootstrap-files.test.ts`
- `src/agents/bootstrap-files.ts`
- `src/agents/bootstrap-hooks.ts`
- `src/agents/bootstrap-mode.test.ts`
- `src/agents/bootstrap-mode.ts`
- `src/agents/bootstrap-prompt.ts`
- `src/agents/btw.test.ts`
- `src/agents/btw.ts`
- `src/agents/bundle-mcp-shared.test-harness.ts`
- `src/agents/bundle-mcp.test-harness.ts`
- `src/agents/byteplus-models.ts`
- `src/agents/byteplus.live.test.ts`
- `src/agents/cache-trace.test.ts`
- `src/agents/cache-trace.ts`
- `src/agents/channel-tools.test.ts`
- `src/agents/channel-tools.ts`
- `src/agents/chutes-models.test.ts`
- `src/agents/chutes-models.ts`
- `src/agents/chutes-oauth.ts`
- `src/agents/cli-auth-epoch.test.ts`
- `src/agents/cli-auth-epoch.ts`
- `src/agents/cli-credentials.test.ts`
- `src/agents/cli-credentials.ts`
- `src/agents/cli-output.test.ts`
- `src/agents/cli-output.ts`
- `src/agents/codex-app-server.extensions.test.ts`
- `src/agents/codex-native-web-search.shared.ts`
- `src/agents/codex-native-web-search.test.ts`
- `src/agents/codex-native-web-search.ts`
- `src/agents/compaction.identifier-policy.test.ts`
- ... 466 more paths in `leaf-impact.json`

## `extensions/channel-plugins/telegram`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/telegram`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `458`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/telegram/account-inspect-api.ts`
- `extensions/telegram/api.ts`
- `extensions/telegram/channel-config-api.test.ts`
- `extensions/telegram/channel-config-api.ts`
- `extensions/telegram/channel-plugin-api.ts`
- `extensions/telegram/config-api.ts`
- `extensions/telegram/configured-state.ts`
- `extensions/telegram/contract-api.ts`
- `extensions/telegram/directory-contract-api.ts`
- `extensions/telegram/index.test.ts`
- `extensions/telegram/index.ts`
- `extensions/telegram/legacy-state-migrations-api.ts`
- `extensions/telegram/openclaw.plugin.json`
- `extensions/telegram/package-manifest.contract.test.ts`
- `extensions/telegram/package.json`
- `extensions/telegram/runtime-api.ts`
- `extensions/telegram/runtime-setter-api.ts`
- `extensions/telegram/secret-contract-api.ts`
- `extensions/telegram/security-audit-contract-api.ts`
- `extensions/telegram/session-key-api.ts`
- `extensions/telegram/setup-entry.ts`
- `extensions/telegram/setup-plugin-api.ts`
- `extensions/telegram/src/account-config.ts`
- `extensions/telegram/src/account-inspect.test.ts`
- `extensions/telegram/src/account-inspect.ts`
- `extensions/telegram/src/account-selection.ts`
- `extensions/telegram/src/accounts.test.ts`
- `extensions/telegram/src/accounts.ts`
- `extensions/telegram/src/action-runtime.test.ts`
- `extensions/telegram/src/action-runtime.ts`
- `extensions/telegram/src/action-threading.test.ts`
- `extensions/telegram/src/action-threading.ts`
- `extensions/telegram/src/allow-from.ts`
- `extensions/telegram/src/allowed-updates.test.ts`
- `extensions/telegram/src/api-fetch.test.ts`
- `extensions/telegram/src/api-fetch.ts`
- `extensions/telegram/src/approval-buttons.ts`
- `extensions/telegram/src/approval-callback-data.test.ts`
- `extensions/telegram/src/approval-callback-data.ts`
- `extensions/telegram/src/approval-handler.runtime.test.ts`
- `extensions/telegram/src/approval-handler.runtime.ts`
- `extensions/telegram/src/approval-native.test.ts`
- `extensions/telegram/src/approval-native.ts`
- `extensions/telegram/src/audit-membership-runtime.ts`
- `extensions/telegram/src/audit.test.ts`
- `extensions/telegram/src/audit.ts`
- `extensions/telegram/src/audit.types.ts`
- `extensions/telegram/src/auto-topic-label-config.ts`
- `extensions/telegram/src/auto-topic-label.test.ts`
- `extensions/telegram/src/auto-topic-label.ts`
- ... 408 more paths in `leaf-impact.json`

## `src/shared-misc-runtime-support/shared-primitives`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/shared-primitives`
- Coverage: `verified`
- Changed paths: `440`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/chat/canvas-render.ts`
- `src/infra/agent-events.test.ts`
- `src/infra/agent-events.ts`
- `src/infra/approval-display-paths.test.ts`
- `src/infra/approval-display-paths.ts`
- `src/infra/approval-errors.test.ts`
- `src/infra/approval-errors.ts`
- `src/infra/approval-gateway-resolver.test.ts`
- `src/infra/approval-gateway-resolver.ts`
- `src/infra/approval-handler-adapter-runtime.ts`
- `src/infra/approval-handler-bootstrap.test.ts`
- `src/infra/approval-handler-bootstrap.ts`
- `src/infra/approval-handler-runtime-types.ts`
- `src/infra/approval-handler-runtime.test.ts`
- `src/infra/approval-handler-runtime.ts`
- `src/infra/approval-handler.test-helpers.ts`
- `src/infra/approval-native-delivery.test.ts`
- `src/infra/approval-native-delivery.ts`
- `src/infra/approval-native-route-coordinator.test.ts`
- `src/infra/approval-native-route-coordinator.ts`
- `src/infra/approval-native-route-notice.test.ts`
- `src/infra/approval-native-route-notice.ts`
- `src/infra/approval-native-runtime-types.ts`
- `src/infra/approval-native-runtime.test.ts`
- `src/infra/approval-native-runtime.ts`
- `src/infra/approval-native-target-key.test.ts`
- `src/infra/approval-native-target-key.ts`
- `src/infra/approval-request-account-binding.ts`
- `src/infra/approval-request-filters.test.ts`
- `src/infra/approval-request-filters.ts`
- `src/infra/approval-turn-source.test.ts`
- `src/infra/approval-turn-source.ts`
- `src/infra/approval-types.ts`
- `src/infra/approval-view-model.ts`
- `src/infra/approval-view-model.types.ts`
- `src/infra/archive-staging.test.ts`
- `src/infra/archive.test.ts`
- `src/infra/archive.ts`
- `src/infra/backoff.test.ts`
- `src/infra/backoff.ts`
- `src/infra/backup-create.ts`
- `src/infra/binaries.runtime.ts`
- `src/infra/bonjour-ciao.test.ts`
- `src/infra/bonjour-ciao.ts`
- `src/infra/bonjour-discovery.test.ts`
- `src/infra/bonjour-discovery.ts`
- `src/infra/bonjour-errors.test.ts`
- `src/infra/bonjour-errors.ts`
- `src/infra/bonjour.test.ts`
- `src/infra/bonjour.ts`
- ... 390 more paths in `leaf-impact.json`

## `apps/ios-android/android-app/runtime-gateway-node`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/android-app/runtime-gateway-node`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `388`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/android/app/src/test/java/ai/openclaw/app/AssistantLaunchTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/NotificationForwardingPolicyTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsNotificationForwardingTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/DeviceAuthStoreTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTimeoutTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/CallLogHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/CanvasActionTrustTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/ConnectionManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/DeviceHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/DeviceNotificationListenerServiceTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/InvokeCommandRegistryTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/InvokeDispatcherTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/LocationHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/NotificationsHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/SmsManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/SystemHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/protocol/OpenClawProtocolConstantsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/CanvasA2UIActionBridgeTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/GatewayConfigResolverTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/OnboardingFlowLogicTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/SettingsSheetNotificationAppsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/chat/ChatComposerDraftTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/chat/ChatSheetContentTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkAudioPlayerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkModeManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkSpeakClientTest.kt`
- `src/gateway/AGENTS.md`
- `src/gateway/CLAUDE.md`
- `src/gateway/agent-list.ts`
- `src/gateway/android-node.capabilities.live.test.ts`
- `src/gateway/android-node.capabilities.policy-config.test.ts`
- `src/gateway/android-node.capabilities.policy-source.test.ts`
- `src/gateway/assistant-identity.ts`
- `src/gateway/auth-config-utils.ts`
- `src/gateway/auth-install-policy.ts`
- `src/gateway/auth-rate-limit.test.ts`
- `src/gateway/auth-rate-limit.ts`
- `src/gateway/auth-resolve.ts`
- `src/gateway/auth-surface-resolution.ts`
- `src/gateway/auth-token-resolution.ts`
- `src/gateway/canvas-documents.test.ts`
- `src/gateway/canvas-documents.ts`
- `src/gateway/channel-status-patches.test.ts`
- `src/gateway/channel-status-patches.ts`
- `src/gateway/chat-abort.ts`
- `src/gateway/chat-attachments.test.ts`
- `src/gateway/chat-attachments.ts`
- ... 338 more paths in `leaf-impact.json`

## `docs/mintlify/.generated`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/.generated`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `386`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/.generated/README.md`
- `docs/.generated/config-baseline.json`
- `docs/.generated/config-baseline.jsonl`
- `docs/.generated/config-baseline.sha256`
- `docs/.generated/plugin-sdk-api-baseline.json`
- `docs/.generated/plugin-sdk-api-baseline.jsonl`
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
- `docs/docs.json`
- `scripts/copy-bundled-plugin-metadata.mjs`
- `scripts/generate-bundled-plugin-metadata.d.mts`
- `scripts/generate-bundled-plugin-metadata.mjs`
- `scripts/generate-config-doc-baseline.ts`
- `scripts/generate-plugin-sdk-api-baseline.ts`
- `src/plugin-sdk/AGENTS.md`
- `src/plugin-sdk/account-configured-ids.ts`
- `src/plugin-sdk/account-core.ts`
- `src/plugin-sdk/account-id.ts`
- `src/plugin-sdk/account-resolution-runtime.ts`
- `src/plugin-sdk/account-resolution.ts`
- `src/plugin-sdk/acp-binding-resolve-runtime.ts`
- `src/plugin-sdk/acp-binding-runtime.ts`
- `src/plugin-sdk/acp-runtime.test.ts`
- `src/plugin-sdk/acp-runtime.ts`
- `src/plugin-sdk/agent-harness-runtime.ts`
- `src/plugin-sdk/agent-harness.ts`
- `src/plugin-sdk/agent-media-payload.ts`
- `src/plugin-sdk/agent-runtime.ts`
- `src/plugin-sdk/allowlist-config-edit.test.ts`
- `src/plugin-sdk/allowlist-config-edit.ts`
- `src/plugin-sdk/allowlist-resolution.test.ts`
- `src/plugin-sdk/amazon-bedrock.ts`
- `src/plugin-sdk/anthropic-cli.ts`
- `src/plugin-sdk/anthropic-vertex-auth-presence.preflight.test.ts`
- `src/plugin-sdk/anthropic-vertex-auth-presence.test.ts`
- `src/plugin-sdk/anthropic-vertex-auth-presence.ts`
- `src/plugin-sdk/anthropic-vertex.ts`
- `src/plugin-sdk/api-baseline.ts`
- `src/plugin-sdk/approval-approvers.ts`
- ... 336 more paths in `leaf-impact.json`

## `docs/mintlify/.i18n`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/.i18n`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `364`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/.i18n/README.md`
- `docs/.i18n/glossary.ar.json`
- `docs/.i18n/glossary.de.json`
- `docs/.i18n/glossary.es.json`
- `docs/.i18n/glossary.fr.json`
- `docs/.i18n/glossary.id.json`
- `docs/.i18n/glossary.it.json`
- `docs/.i18n/glossary.ja-JP.json`
- `docs/.i18n/glossary.ko.json`
- `docs/.i18n/glossary.pl.json`
- `docs/.i18n/glossary.pt-BR.json`
- `docs/.i18n/glossary.th.json`
- `docs/.i18n/glossary.tr.json`
- `docs/.i18n/glossary.uk.json`
- `docs/.i18n/ja-JP.tm.jsonl`
- `docs/.i18n/zh-CN.tm.jsonl`
- `docs/zh-CN/AGENTS.md`
- `docs/zh-CN/CLAUDE.md`
- `docs/zh-CN/automation/auth-monitoring.md`
- `docs/zh-CN/automation/cron-jobs.md`
- `docs/zh-CN/automation/cron-vs-heartbeat.md`
- `docs/zh-CN/automation/gmail-pubsub.md`
- `docs/zh-CN/automation/hooks.md`
- `docs/zh-CN/automation/poll.md`
- `docs/zh-CN/automation/troubleshooting.md`
- `docs/zh-CN/automation/webhook.md`
- `docs/zh-CN/brave-search.md`
- `docs/zh-CN/channels/bluebubbles.md`
- `docs/zh-CN/channels/broadcast-groups.md`
- `docs/zh-CN/channels/channel-routing.md`
- `docs/zh-CN/channels/discord.md`
- `docs/zh-CN/channels/feishu.md`
- `docs/zh-CN/channels/googlechat.md`
- `docs/zh-CN/channels/grammy.md`
- `docs/zh-CN/channels/group-messages.md`
- `docs/zh-CN/channels/groups.md`
- `docs/zh-CN/channels/imessage.md`
- `docs/zh-CN/channels/index.md`
- `docs/zh-CN/channels/line.md`
- `docs/zh-CN/channels/location.md`
- `docs/zh-CN/channels/matrix.md`
- `docs/zh-CN/channels/mattermost.md`
- `docs/zh-CN/channels/msteams.md`
- `docs/zh-CN/channels/nextcloud-talk.md`
- `docs/zh-CN/channels/nostr.md`
- `docs/zh-CN/channels/pairing.md`
- `docs/zh-CN/channels/signal.md`
- `docs/zh-CN/channels/slack.md`
- `docs/zh-CN/channels/synology-chat.md`
- `docs/zh-CN/channels/telegram.md`
- ... 314 more paths in `leaf-impact.json`

## `extensions/channel-plugins/discord`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/discord`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `307`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/discord/account-inspect-api.ts`
- `extensions/discord/api.ts`
- `extensions/discord/channel-plugin-api.ts`
- `extensions/discord/config-api.ts`
- `extensions/discord/configured-state.ts`
- `extensions/discord/contract-api.ts`
- `extensions/discord/directory-contract-api.ts`
- `extensions/discord/doctor-contract-api.ts`
- `extensions/discord/index.test.ts`
- `extensions/discord/index.ts`
- `extensions/discord/openclaw.plugin.json`
- `extensions/discord/package-manifest.contract.test.ts`
- `extensions/discord/package.json`
- `extensions/discord/runtime-api.ts`
- `extensions/discord/runtime-setter-api.ts`
- `extensions/discord/secret-contract-api.ts`
- `extensions/discord/security-audit-contract-api.ts`
- `extensions/discord/security-contract-api.ts`
- `extensions/discord/setup-entry.ts`
- `extensions/discord/setup-plugin-api.ts`
- `extensions/discord/src/account-inspect.test.ts`
- `extensions/discord/src/account-inspect.ts`
- `extensions/discord/src/accounts.test.ts`
- `extensions/discord/src/accounts.ts`
- `extensions/discord/src/actions/handle-action.guild-admin.ts`
- `extensions/discord/src/actions/handle-action.test.ts`
- `extensions/discord/src/actions/handle-action.ts`
- `extensions/discord/src/actions/runtime.guild.ts`
- `extensions/discord/src/actions/runtime.messaging.ts`
- `extensions/discord/src/actions/runtime.moderation.authz.test.ts`
- `extensions/discord/src/actions/runtime.moderation.ts`
- `extensions/discord/src/actions/runtime.presence.test.ts`
- `extensions/discord/src/actions/runtime.presence.ts`
- `extensions/discord/src/actions/runtime.shared.ts`
- `extensions/discord/src/actions/runtime.test.ts`
- `extensions/discord/src/actions/runtime.ts`
- `extensions/discord/src/api.test.ts`
- `extensions/discord/src/approval-handler.runtime.test.ts`
- `extensions/discord/src/approval-handler.runtime.ts`
- `extensions/discord/src/approval-native.test.ts`
- `extensions/discord/src/approval-native.ts`
- `extensions/discord/src/approval-runtime.ts`
- `extensions/discord/src/approval-shared.ts`
- `extensions/discord/src/audit-core.ts`
- `extensions/discord/src/audit.test.ts`
- `extensions/discord/src/audit.ts`
- `extensions/discord/src/channel-actions.contract.test.ts`
- `extensions/discord/src/channel-actions.runtime.ts`
- `extensions/discord/src/channel-actions.test.ts`
- `extensions/discord/src/channel-actions.ts`
- ... 257 more paths in `leaf-impact.json`

## `src/cli-commands/command-implementations/maintenance-commands`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/maintenance-commands`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `301`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/acp-cli.option-collisions.test.ts`
- `src/cli/acp-cli.ts`
- `src/cli/argv-invocation.test.ts`
- `src/cli/argv-invocation.ts`
- `src/cli/banner-config-lite.ts`
- `src/cli/banner.test.ts`
- `src/cli/banner.ts`
- `src/cli/capability-cli.test.ts`
- `src/cli/capability-cli.ts`
- `src/cli/channel-auth.test.ts`
- `src/cli/channel-auth.ts`
- `src/cli/channel-options.test.ts`
- `src/cli/channel-options.ts`
- `src/cli/channels-cli.ts`
- `src/cli/cli-utils.test.ts`
- `src/cli/cli-utils.ts`
- `src/cli/command-bootstrap.test.ts`
- `src/cli/command-bootstrap.ts`
- `src/cli/command-catalog.ts`
- `src/cli/command-config-resolution.runtime.ts`
- `src/cli/command-config-resolution.test.ts`
- `src/cli/command-config-resolution.ts`
- `src/cli/command-execution-startup.test.ts`
- `src/cli/command-execution-startup.ts`
- `src/cli/command-format.ts`
- `src/cli/command-options.ts`
- `src/cli/command-path-matches.test.ts`
- `src/cli/command-path-matches.ts`
- `src/cli/command-path-policy.test.ts`
- `src/cli/command-path-policy.ts`
- `src/cli/command-registration-policy.test.ts`
- `src/cli/command-registration-policy.ts`
- `src/cli/command-startup-policy.test.ts`
- `src/cli/command-startup-policy.ts`
- `src/cli/completion-cli.test.ts`
- `src/cli/completion-cli.ts`
- `src/cli/completion-cli.write-state.test.ts`
- `src/cli/completion-runtime.ts`
- `src/cli/config-cli.integration.test.ts`
- `src/cli/config-cli.test.ts`
- `src/cli/config-cli.ts`
- `src/cli/config-set-input.ts`
- `src/cli/container-target.ts`
- `src/cli/cron-cli.test.ts`
- `src/cli/cron-cli/register.cron-add.ts`
- `src/cli/cron-cli/register.cron-edit.ts`
- `src/cli/cron-cli/register.cron-simple.ts`
- `src/cli/cron-cli/schedule-options.ts`
- `src/cli/cron-cli/shared.test.ts`
- `src/cli/cron-cli/shared.ts`
- ... 251 more paths in `leaf-impact.json`

## `extensions/channel-plugins/matrix`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/matrix`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `285`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/matrix/.npmignore`
- `extensions/matrix/CHANGELOG.md`
- `extensions/matrix/SPEC-SUPPORT.md`
- `extensions/matrix/api.ts`
- `extensions/matrix/auth-presence.ts`
- `extensions/matrix/channel-plugin-api.ts`
- `extensions/matrix/cli-metadata.ts`
- `extensions/matrix/contract-api.ts`
- `extensions/matrix/index.test.ts`
- `extensions/matrix/index.ts`
- `extensions/matrix/legacy-crypto-inspector.ts`
- `extensions/matrix/openclaw.plugin.json`
- `extensions/matrix/package-manifest.contract.test.ts`
- `extensions/matrix/package.json`
- `extensions/matrix/plugin-entry.handlers.runtime.ts`
- `extensions/matrix/runtime-api.ts`
- `extensions/matrix/runtime-heavy-api.ts`
- `extensions/matrix/runtime-setter-api.ts`
- `extensions/matrix/secret-contract-api.ts`
- `extensions/matrix/setup-entry.ts`
- `extensions/matrix/setup-plugin-api.ts`
- `extensions/matrix/src/account-selection.test.ts`
- `extensions/matrix/src/account-selection.ts`
- `extensions/matrix/src/actions.account-propagation.test.ts`
- `extensions/matrix/src/actions.test.ts`
- `extensions/matrix/src/actions.ts`
- `extensions/matrix/src/approval-auth.test.ts`
- `extensions/matrix/src/approval-auth.ts`
- `extensions/matrix/src/approval-handler.runtime.test.ts`
- `extensions/matrix/src/approval-handler.runtime.ts`
- `extensions/matrix/src/approval-ids.ts`
- `extensions/matrix/src/approval-native.test.ts`
- `extensions/matrix/src/approval-native.ts`
- `extensions/matrix/src/approval-reaction-auth.ts`
- `extensions/matrix/src/approval-reactions.test.ts`
- `extensions/matrix/src/approval-reactions.ts`
- `extensions/matrix/src/channel-account-paths.ts`
- `extensions/matrix/src/channel.account-paths.test.ts`
- `extensions/matrix/src/channel.directory.test.ts`
- `extensions/matrix/src/channel.resolve.test.ts`
- `extensions/matrix/src/channel.runtime.ts`
- `extensions/matrix/src/channel.setup.test.ts`
- `extensions/matrix/src/channel.setup.ts`
- `extensions/matrix/src/channel.ts`
- `extensions/matrix/src/cli-metadata.ts`
- `extensions/matrix/src/cli.test.ts`
- `extensions/matrix/src/cli.ts`
- `extensions/matrix/src/config-adapter.ts`
- `extensions/matrix/src/config-schema.test.ts`
- `extensions/matrix/src/config-schema.ts`
- ... 235 more paths in `leaf-impact.json`

## `extensions/channel-plugins/slack`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/slack`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `235`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/slack/account-inspect-api.ts`
- `extensions/slack/api.ts`
- `extensions/slack/channel-entry.ts`
- `extensions/slack/channel-plugin-api.ts`
- `extensions/slack/config-api.ts`
- `extensions/slack/configured-state.ts`
- `extensions/slack/contract-api.ts`
- `extensions/slack/directory-contract-api.ts`
- `extensions/slack/doctor-contract-api.ts`
- `extensions/slack/http-routes-api.ts`
- `extensions/slack/inbound-contract-test-api.ts`
- `extensions/slack/index.test.ts`
- `extensions/slack/index.ts`
- `extensions/slack/interactive-replies-api.ts`
- `extensions/slack/message-tool-api.ts`
- `extensions/slack/openclaw.plugin.json`
- `extensions/slack/outbound-payload-test-api.ts`
- `extensions/slack/package-manifest.contract.test.ts`
- `extensions/slack/package.json`
- `extensions/slack/runtime-api.ts`
- `extensions/slack/runtime-setter-api.ts`
- `extensions/slack/secret-contract-api.ts`
- `extensions/slack/security-contract-api.ts`
- `extensions/slack/setup-entry.ts`
- `extensions/slack/setup-plugin-api.ts`
- `extensions/slack/src/account-inspect.ts`
- `extensions/slack/src/account-reply-mode.ts`
- `extensions/slack/src/accounts.runtime.ts`
- `extensions/slack/src/accounts.test.ts`
- `extensions/slack/src/accounts.ts`
- `extensions/slack/src/action-runtime.runtime.ts`
- `extensions/slack/src/action-runtime.test.ts`
- `extensions/slack/src/action-runtime.ts`
- `extensions/slack/src/action-threading.test.ts`
- `extensions/slack/src/action-threading.ts`
- `extensions/slack/src/actions.download-file.test.ts`
- `extensions/slack/src/actions.runtime.ts`
- `extensions/slack/src/actions.ts`
- `extensions/slack/src/approval-auth.test.ts`
- `extensions/slack/src/approval-auth.ts`
- `extensions/slack/src/approval-handler.runtime.test.ts`
- `extensions/slack/src/approval-handler.runtime.ts`
- `extensions/slack/src/approval-native.test.ts`
- `extensions/slack/src/approval-native.ts`
- `extensions/slack/src/blocks-fallback.test.ts`
- `extensions/slack/src/blocks-input.test.ts`
- `extensions/slack/src/blocks-input.ts`
- `extensions/slack/src/blocks-render.ts`
- `extensions/slack/src/blocks.test-helpers.ts`
- `extensions/slack/src/blocks.test.ts`
- ... 185 more paths in `leaf-impact.json`

## `src/reply-orchestration/runner`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/runner`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `230`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/command-control.test.ts`
- `src/auto-reply/command-status-builders.ts`
- `src/auto-reply/dispatch-dispatcher.ts`
- `src/auto-reply/dispatch.test.ts`
- `src/auto-reply/dispatch.ts`
- `src/auto-reply/fallback-state.test.ts`
- `src/auto-reply/fallback-state.ts`
- `src/auto-reply/get-reply-options.types.ts`
- `src/auto-reply/group-activation.ts`
- `src/auto-reply/inbound-debounce.ts`
- `src/auto-reply/inbound.group-require-mention-test-plugins.ts`
- `src/auto-reply/inbound.test.ts`
- `src/auto-reply/media-understanding.test-fixtures.ts`
- `src/auto-reply/model-runtime.ts`
- `src/auto-reply/model.test.ts`
- `src/auto-reply/model.ts`
- `src/auto-reply/reply-payload.ts`
- `src/auto-reply/reply/abort-cutoff.ts`
- `src/auto-reply/reply/abort-primitives.ts`
- `src/auto-reply/reply/abort.runtime-types.ts`
- `src/auto-reply/reply/abort.test.ts`
- `src/auto-reply/reply/abort.ts`
- `src/auto-reply/reply/acp-projector.ts`
- `src/auto-reply/reply/acp-reset-target.ts`
- `src/auto-reply/reply/acp-stream-settings.test.ts`
- `src/auto-reply/reply/acp-stream-settings.ts`
- `src/auto-reply/reply/agent-runner-auth-profile.ts`
- `src/auto-reply/reply/agent-runner-direct-runtime-config.test.ts`
- `src/auto-reply/reply/agent-runner-execution.runtime.ts`
- `src/auto-reply/reply/agent-runner-execution.test.ts`
- `src/auto-reply/reply/agent-runner-execution.ts`
- `src/auto-reply/reply/agent-runner-helpers.test.ts`
- `src/auto-reply/reply/agent-runner-helpers.ts`
- `src/auto-reply/reply/agent-runner-memory.runtime.ts`
- `src/auto-reply/reply/agent-runner-memory.test.ts`
- `src/auto-reply/reply/agent-runner-memory.ts`
- `src/auto-reply/reply/agent-runner-payloads.test.ts`
- `src/auto-reply/reply/agent-runner-payloads.ts`
- `src/auto-reply/reply/agent-runner-reminder-guard.ts`
- `src/auto-reply/reply/agent-runner-runtime-config.test.ts`
- `src/auto-reply/reply/agent-runner-session-reset.test.ts`
- `src/auto-reply/reply/agent-runner-session-reset.ts`
- `src/auto-reply/reply/agent-runner-usage-line.ts`
- `src/auto-reply/reply/agent-runner-utils.secret-resolution.test.ts`
- `src/auto-reply/reply/agent-runner-utils.test.ts`
- `src/auto-reply/reply/agent-runner-utils.ts`
- `src/auto-reply/reply/agent-runner.media-paths.test.ts`
- `src/auto-reply/reply/agent-runner.misc.runreplyagent.test.ts`
- `src/auto-reply/reply/agent-runner.runreplyagent.e2e.test.ts`
- `src/auto-reply/reply/agent-runner.test-fixtures.ts`
- ... 180 more paths in `leaf-impact.json`

## `extensions/channel-plugins/whatsapp`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/whatsapp`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `224`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/whatsapp/api.ts`
- `extensions/whatsapp/auth-presence.ts`
- `extensions/whatsapp/channel-catalog.contract.test.ts`
- `extensions/whatsapp/channel-plugin-api.ts`
- `extensions/whatsapp/config-api.ts`
- `extensions/whatsapp/constants.ts`
- `extensions/whatsapp/contract-api.ts`
- `extensions/whatsapp/directory-contract-api.ts`
- `extensions/whatsapp/doctor-contract-api.ts`
- `extensions/whatsapp/index.test.ts`
- `extensions/whatsapp/index.ts`
- `extensions/whatsapp/legacy-session-surface-api.ts`
- `extensions/whatsapp/legacy-state-migrations-api.ts`
- `extensions/whatsapp/login-qr-api.ts`
- `extensions/whatsapp/login-qr-runtime.ts`
- `extensions/whatsapp/openclaw.plugin.json`
- `extensions/whatsapp/outbound-payload-test-api.ts`
- `extensions/whatsapp/package-manifest.contract.test.ts`
- `extensions/whatsapp/package.json`
- `extensions/whatsapp/runtime-api.ts`
- `extensions/whatsapp/secret-contract-api.ts`
- `extensions/whatsapp/security-contract-api.ts`
- `extensions/whatsapp/setup-entry.test.ts`
- `extensions/whatsapp/setup-entry.ts`
- `extensions/whatsapp/setup-plugin-api.ts`
- `extensions/whatsapp/src/account-config.ts`
- `extensions/whatsapp/src/account-ids.ts`
- `extensions/whatsapp/src/account-types.ts`
- `extensions/whatsapp/src/accounts.test.ts`
- `extensions/whatsapp/src/accounts.ts`
- `extensions/whatsapp/src/accounts.whatsapp-auth.test.ts`
- `extensions/whatsapp/src/action-runtime-target-auth.ts`
- `extensions/whatsapp/src/action-runtime.test.ts`
- `extensions/whatsapp/src/action-runtime.ts`
- `extensions/whatsapp/src/active-listener.test.ts`
- `extensions/whatsapp/src/active-listener.ts`
- `extensions/whatsapp/src/agent-tools-login.test.ts`
- `extensions/whatsapp/src/agent-tools-login.ts`
- `extensions/whatsapp/src/approval-auth.test.ts`
- `extensions/whatsapp/src/approval-auth.ts`
- `extensions/whatsapp/src/auth-store.runtime.ts`
- `extensions/whatsapp/src/auth-store.test.ts`
- `extensions/whatsapp/src/auth-store.ts`
- `extensions/whatsapp/src/auto-reply.broadcast-groups.combined.test.ts`
- `extensions/whatsapp/src/auto-reply.broadcast-groups.test-harness.ts`
- `extensions/whatsapp/src/auto-reply.test-harness.ts`
- `extensions/whatsapp/src/auto-reply.web-auto-reply.compresses-common-formats-jpeg-cap.test.ts`
- `extensions/whatsapp/src/auto-reply.web-auto-reply.connection-and-logging.e2e.test.ts`
- `extensions/whatsapp/src/auto-reply.web-auto-reply.last-route.test.ts`
- `extensions/whatsapp/src/auto-reply/config.runtime.ts`
- ... 174 more paths in `leaf-impact.json`

## `src/agent-runtime/tools`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/tools`
- Coverage: `verified`
- Changed paths: `209`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/apply-patch.test.ts`
- `src/agents/apply-patch.ts`
- `src/agents/bash-tools.descriptions.ts`
- `src/agents/bash-tools.exec-approval-followup.test.ts`
- `src/agents/bash-tools.exec-approval-followup.ts`
- `src/agents/bash-tools.exec-approval-request.test.ts`
- `src/agents/bash-tools.exec-approval-request.ts`
- `src/agents/bash-tools.exec-foreground-failures.test.ts`
- `src/agents/bash-tools.exec-host-gateway.test.ts`
- `src/agents/bash-tools.exec-host-gateway.ts`
- `src/agents/bash-tools.exec-host-node.test.ts`
- `src/agents/bash-tools.exec-host-node.ts`
- `src/agents/bash-tools.exec-host-shared.test.ts`
- `src/agents/bash-tools.exec-host-shared.ts`
- `src/agents/bash-tools.exec-runtime.pty-fallback.test.ts`
- `src/agents/bash-tools.exec-runtime.test.ts`
- `src/agents/bash-tools.exec-runtime.ts`
- `src/agents/bash-tools.exec-types.ts`
- `src/agents/bash-tools.exec.approval-id.test.ts`
- `src/agents/bash-tools.exec.background-abort.test.ts`
- `src/agents/bash-tools.exec.path.test.ts`
- `src/agents/bash-tools.exec.pty-cleanup.test.ts`
- `src/agents/bash-tools.exec.pty-fallback-failure.test.ts`
- `src/agents/bash-tools.exec.pty-fallback.test.ts`
- `src/agents/bash-tools.exec.pty.test.ts`
- `src/agents/bash-tools.exec.script-preflight.test.ts`
- `src/agents/bash-tools.exec.ts`
- `src/agents/bash-tools.process-send-keys.test.ts`
- `src/agents/bash-tools.process-send-keys.ts`
- `src/agents/bash-tools.process.poll-timeout.test.ts`
- `src/agents/bash-tools.process.send-keys.test.ts`
- `src/agents/bash-tools.process.supervisor.test.ts`
- `src/agents/bash-tools.process.ts`
- `src/agents/bash-tools.schemas.ts`
- `src/agents/bash-tools.shared.ts`
- `src/agents/bash-tools.test.ts`
- `src/agents/bash-tools.ts`
- `src/agents/mcp-stdio.ts`
- `src/agents/openclaw-tools.agents.test.ts`
- `src/agents/openclaw-tools.browser-plugin.integration.test.ts`
- `src/agents/openclaw-tools.camera.test.ts`
- `src/agents/openclaw-tools.generation.test-support.ts`
- `src/agents/openclaw-tools.image-generation.test.ts`
- `src/agents/openclaw-tools.nodes-workspace-guard.test.ts`
- `src/agents/openclaw-tools.nodes-workspace-guard.ts`
- `src/agents/openclaw-tools.owner-authorization.test.ts`
- `src/agents/openclaw-tools.pdf-registration.test.ts`
- `src/agents/openclaw-tools.plugin-context.test.ts`
- `src/agents/openclaw-tools.plugin-context.ts`
- `src/agents/openclaw-tools.registration.ts`
- ... 159 more paths in `leaf-impact.json`

## `scripts/packaging/root-scripts`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/root-scripts`
- Coverage: `fallback`
- Changed paths: `197`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `Makefile`
- `fix2.py`
- `scripts/AGENTS.md`
- `scripts/CLAUDE.md`
- `scripts/anthropic-prompt-probe.ts`
- `scripts/audit-seams.mjs`
- `scripts/bench-cli-startup.ts`
- `scripts/bench-gateway-startup.ts`
- `scripts/bench-model.ts`
- `scripts/bench-test-changed.mjs`
- `scripts/build-all.mjs`
- `scripts/bundle-a2ui.mjs`
- `scripts/bundle-a2ui.sh`
- `scripts/canvas-a2ui-copy.ts`
- `scripts/changed-lanes.mjs`
- `scripts/changelog-add-unreleased.ts`
- `scripts/check-architecture-smells.mjs`
- `scripts/check-changed.mjs`
- `scripts/check-channel-agnostic-boundaries.mjs`
- `scripts/check-codex-app-server-protocol.ts`
- `scripts/check-docs-mdx.mjs`
- `scripts/check-dynamic-import-warts.mjs`
- `scripts/check-extension-package-tsc-boundary.mjs`
- `scripts/check-extension-plugin-sdk-boundary.mjs`
- `scripts/check-file-utils.ts`
- `scripts/check-gateway-watch-regression.mjs`
- `scripts/check-import-cycles.ts`
- `scripts/check-ingress-agent-owner-context.mjs`
- `scripts/check-live-cache.ts`
- `scripts/check-madge-import-cycles.ts`
- `scripts/check-no-extension-src-imports.ts`
- `scripts/check-no-extension-test-core-imports.ts`
- `scripts/check-no-random-messaging-tmp.mjs`
- `scripts/check-no-raw-channel-fetch.mjs`
- `scripts/check-no-runtime-action-load-config.mjs`
- `scripts/check-plugin-extension-import-boundary.mjs`
- `scripts/check-plugin-sdk-exports.mjs`
- `scripts/check-release-metadata-only.mjs`
- `scripts/check-sdk-package-extension-import-boundary.mjs`
- `scripts/check-src-extension-import-boundary.mjs`
- `scripts/check-temp-path-guardrails.ts`
- `scripts/check-test-helper-extension-import-boundary.mjs`
- `scripts/check-timed.mjs`
- `scripts/check-tsgo-core-boundary.mjs`
- `scripts/check-web-fetch-provider-boundaries.mjs`
- `scripts/check-web-search-provider-boundaries.mjs`
- `scripts/check-webhook-auth-body-order.mjs`
- `scripts/check.mjs`
- `scripts/ci-changed-scope.d.mts`
- `scripts/ci-changed-scope.mjs`
- ... 147 more paths in `leaf-impact.json`

## `src/cli-commands/command-implementations/config-doctor-commands`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/config-doctor-commands`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `192`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/commands/config-validation.test.ts`
- `src/commands/config-validation.ts`
- `src/commands/configure.daemon.test.ts`
- `src/commands/configure.daemon.ts`
- `src/commands/configure.gateway-auth.prompt-auth-config.test.ts`
- `src/commands/configure.gateway-auth.ts`
- `src/commands/configure.gateway.ts`
- `src/commands/configure.shared.ts`
- `src/commands/configure.wizard.test.ts`
- `src/commands/configure.wizard.ts`
- `src/commands/daemon-install-auth-profiles-source.runtime.ts`
- `src/commands/daemon-install-auth-profiles-store.runtime.ts`
- `src/commands/daemon-install-helpers.test.ts`
- `src/commands/daemon-install-helpers.ts`
- `src/commands/daemon-install-plan.shared.ts`
- `src/commands/doctor-auth.deprecated-cli-profiles.test.ts`
- `src/commands/doctor-auth.hints.test.ts`
- `src/commands/doctor-auth.profile-health.test.ts`
- `src/commands/doctor-auth.ts`
- `src/commands/doctor-bootstrap-size.ts`
- `src/commands/doctor-browser.facade.test.ts`
- `src/commands/doctor-browser.test.ts`
- `src/commands/doctor-browser.ts`
- `src/commands/doctor-bundled-plugin-runtime-deps.test.ts`
- `src/commands/doctor-bundled-plugin-runtime-deps.ts`
- `src/commands/doctor-claude-cli.test.ts`
- `src/commands/doctor-claude-cli.ts`
- `src/commands/doctor-completion.ts`
- `src/commands/doctor-config-analysis.ts`
- `src/commands/doctor-config-flow.include-warning.test.ts`
- `src/commands/doctor-config-flow.missing-default-account-bindings.integration.test.ts`
- `src/commands/doctor-config-flow.safe-bins.test.ts`
- `src/commands/doctor-config-flow.test-utils.ts`
- `src/commands/doctor-config-flow.test.ts`
- `src/commands/doctor-config-flow.ts`
- `src/commands/doctor-config-preflight.ts`
- `src/commands/doctor-cron-dreaming-payload-migration.constants-drift.test.ts`
- `src/commands/doctor-cron-dreaming-payload-migration.test.ts`
- `src/commands/doctor-cron-dreaming-payload-migration.ts`
- `src/commands/doctor-cron-legacy-delivery.test.ts`
- `src/commands/doctor-cron-legacy-delivery.ts`
- `src/commands/doctor-cron-payload-migration.ts`
- `src/commands/doctor-cron-store-migration.test.ts`
- `src/commands/doctor-cron-store-migration.ts`
- `src/commands/doctor-cron.test.ts`
- `src/commands/doctor-cron.ts`
- `src/commands/doctor-device-pairing.test.ts`
- `src/commands/doctor-device-pairing.ts`
- `src/commands/doctor-gateway-auth-token.ts`
- `src/commands/doctor-gateway-daemon-flow.test.ts`
- ... 142 more paths in `leaf-impact.json`

## `src/agent-runtime/pi-runner/core-run-loop`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/core-run-loop`
- Coverage: `verified`
- Changed paths: `190`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts`
- `src/agents/pi-embedded-runner.applygoogleturnorderingfix.test.ts`
- `src/agents/pi-embedded-runner.buildembeddedsandboxinfo.test.ts`
- `src/agents/pi-embedded-runner.bundle-mcp.e2e.test.ts`
- `src/agents/pi-embedded-runner.cache.live.test.ts`
- `src/agents/pi-embedded-runner.compaction-safety-timeout.test.ts`
- `src/agents/pi-embedded-runner.e2e.test.ts`
- `src/agents/pi-embedded-runner.extensions.test.ts`
- `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts`
- `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts`
- `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts`
- `src/agents/pi-embedded-runner.limithistoryturns.test.ts`
- `src/agents/pi-embedded-runner.openai-tool-id-preservation.test.ts`
- `src/agents/pi-embedded-runner.resolvesessionagentids.test.ts`
- `src/agents/pi-embedded-runner.run-embedded-pi-agent.auth-profile-rotation.e2e.test.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.policy.test.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.test-harness.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.test.ts`
- `src/agents/pi-embedded-runner.splitsdktools.test.ts`
- `src/agents/pi-embedded-runner.ts`
- `src/agents/pi-embedded-runner/abort.ts`
- `src/agents/pi-embedded-runner/aliases.test.ts`
- `src/agents/pi-embedded-runner/anthropic-cache-control-payload.test.ts`
- `src/agents/pi-embedded-runner/anthropic-cache-control-payload.ts`
- `src/agents/pi-embedded-runner/anthropic-family-cache-semantics.ts`
- `src/agents/pi-embedded-runner/anthropic-family-tool-payload-compat.ts`
- `src/agents/pi-embedded-runner/cache-ttl.test.ts`
- `src/agents/pi-embedded-runner/cache-ttl.ts`
- `src/agents/pi-embedded-runner/compact-reasons.ts`
- `src/agents/pi-embedded-runner/compact.hooks.harness.ts`
- `src/agents/pi-embedded-runner/compact.hooks.test.ts`
- `src/agents/pi-embedded-runner/compact.queued.ts`
- `src/agents/pi-embedded-runner/compact.runtime.ts`
- `src/agents/pi-embedded-runner/compact.runtime.types.ts`
- `src/agents/pi-embedded-runner/compact.ts`
- `src/agents/pi-embedded-runner/compact.types.ts`
- `src/agents/pi-embedded-runner/compaction-hooks.ts`
- `src/agents/pi-embedded-runner/compaction-runtime-context.test.ts`
- `src/agents/pi-embedded-runner/compaction-runtime-context.ts`
- `src/agents/pi-embedded-runner/compaction-safety-timeout.ts`
- `src/agents/pi-embedded-runner/context-engine-maintenance.test.ts`
- `src/agents/pi-embedded-runner/context-engine-maintenance.ts`
- `src/agents/pi-embedded-runner/effective-tool-policy.test.ts`
- `src/agents/pi-embedded-runner/effective-tool-policy.ts`
- `src/agents/pi-embedded-runner/google-prompt-cache.test.ts`
- `src/agents/pi-embedded-runner/google-prompt-cache.ts`
- `src/agents/pi-embedded-runner/history.ts`
- `src/agents/pi-embedded-runner/kilocode.test.ts`
- `src/agents/pi-embedded-runner/manual-compaction-boundary.test.ts`
- `src/agents/pi-embedded-runner/manual-compaction-boundary.ts`
- ... 140 more paths in `leaf-impact.json`

## `src/config-secrets-security/config-io`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/config-io`
- Coverage: `verified`
- Changed paths: `160`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/config/agent-dirs.ts`
- `src/config/agent-limits.ts`
- `src/config/agent-timeout-defaults.ts`
- `src/config/allowed-values.ts`
- `src/config/bindings.ts`
- `src/config/bundled-channel-config-metadata.generated.ts`
- `src/config/bundled-channel-config-runtime.test.ts`
- `src/config/bundled-channel-config-runtime.ts`
- `src/config/channel-compat-normalization.ts`
- `src/config/channel-config-metadata.ts`
- `src/config/channel-config-surface.ts`
- `src/config/channel-configured-shared.ts`
- `src/config/channel-configured.test.ts`
- `src/config/channel-configured.ts`
- `src/config/commands.flags.ts`
- `src/config/commands.test.ts`
- `src/config/commands.ts`
- `src/config/config-misc.test.ts`
- `src/config/config.acp-binding-cutover.test.ts`
- `src/config/config.agent-concurrency-defaults.test.ts`
- `src/config/config.allowlist-requires-allowfrom.test.ts`
- `src/config/config.compaction-settings.test.ts`
- `src/config/config.discord-agent-components.test.ts`
- `src/config/config.discord-presence.test.ts`
- `src/config/config.discord.test.ts`
- `src/config/config.dm-policy-alias.test.ts`
- `src/config/config.gateway-node-pairing-auto-approve.test.ts`
- `src/config/config.gateway-tailscale-bind.test.ts`
- `src/config/config.hooks-module-paths.test.ts`
- `src/config/config.identity-avatar.test.ts`
- `src/config/config.identity-defaults.test.ts`
- `src/config/config.irc.test.ts`
- `src/config/config.legacy-config-detection.accepts-imessage-dmpolicy.test.ts`
- `src/config/config.legacy-config-detection.rejects-routing-allowfrom.test.ts`
- `src/config/config.legacy-config-provider-shapes.test.ts`
- `src/config/config.meta-timestamp-coercion.test.ts`
- `src/config/config.msteams.test.ts`
- `src/config/config.multi-agent-agentdir-validation.test.ts`
- `src/config/config.nix-integration-u3-u5-u9.test.ts`
- `src/config/config.plugin-validation.test.ts`
- `src/config/config.pruning-defaults.test.ts`
- `src/config/config.sandbox-docker.test.ts`
- `src/config/config.schema-regressions.test.ts`
- `src/config/config.secrets-schema.test.ts`
- `src/config/config.skills-entries-config.test.ts`
- `src/config/config.talk-api-key-fallback.test.ts`
- `src/config/config.talk-validation.test.ts`
- `src/config/config.telegram-audio-preflight.test.ts`
- `src/config/config.telegram-custom-commands.test.ts`
- `src/config/config.telegram-topic-agentid.test.ts`
- ... 110 more paths in `leaf-impact.json`

## `src/plugin-runtime-sdk/plugins-runtime`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugins-runtime`
- Coverage: `verified`
- Changed paths: `156`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/extensions/public-artifacts.test.ts`
- `src/extensions/public-artifacts.ts`
- `src/plugins/bundled-plugin-naming.test.ts`
- `src/plugins/contracts/boundary-invariants.test.ts`
- `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts`
- `src/plugins/contracts/config-footprint-guardrails.test.ts`
- `src/plugins/contracts/core-extension-facade-boundary.test.ts`
- `src/plugins/contracts/discovery.contract.test.ts`
- `src/plugins/contracts/extension-package-project-boundaries.test.ts`
- `src/plugins/contracts/extension-runtime-dependencies.contract.test.ts`
- `src/plugins/contracts/inventory/bundled-capability-metadata.ts`
- `src/plugins/contracts/loader.contract.test.ts`
- `src/plugins/contracts/media-provider-registry.test.ts`
- `src/plugins/contracts/media-provider-registry.ts`
- `src/plugins/contracts/memory-embedding-provider.contract.test.ts`
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
- `src/plugins/contracts/plugin-registration.xai.contract.test.ts`
- `src/plugins/contracts/plugin-registration.zai.contract.test.ts`
- `src/plugins/contracts/plugin-sdk-index.bundle.test.ts`
- `src/plugins/contracts/plugin-sdk-index.test.ts`
- `src/plugins/contracts/plugin-sdk-package-contract-guardrails.test.ts`
- `src/plugins/contracts/plugin-sdk-root-alias.test.ts`
- `src/plugins/contracts/plugin-sdk-runtime-api-guardrails.test.ts`
- `src/plugins/contracts/plugin-sdk-subpaths.test.ts`
- `src/plugins/contracts/provider-family-plugin-tests.test.ts`
- `src/plugins/contracts/providers.contract.test.ts`
- `src/plugins/contracts/registry.contract.test.ts`
- `src/plugins/contracts/registry.retry.test.ts`
- `src/plugins/contracts/registry.ts`
- `src/plugins/contracts/rootdir-boundary-canary.ts`
- ... 106 more paths in `leaf-impact.json`

## `extensions/channel-plugins/msteams`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/msteams`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `148`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/msteams/CHANGELOG.md`
- `extensions/msteams/api.ts`
- `extensions/msteams/channel-catalog.contract.test.ts`
- `extensions/msteams/channel-plugin-api.ts`
- `extensions/msteams/config-api.ts`
- `extensions/msteams/contract-api.ts`
- `extensions/msteams/index.ts`
- `extensions/msteams/openclaw.plugin.json`
- `extensions/msteams/package-manifest.contract.test.ts`
- `extensions/msteams/package.json`
- `extensions/msteams/runtime-api.ts`
- `extensions/msteams/secret-contract-api.ts`
- `extensions/msteams/setup-entry.ts`
- `extensions/msteams/src/actions.ts`
- `extensions/msteams/src/approval-auth.ts`
- `extensions/msteams/src/attachments.graph.test.ts`
- `extensions/msteams/src/attachments.helpers.test.ts`
- `extensions/msteams/src/attachments.test-helpers.ts`
- `extensions/msteams/src/attachments.test.ts`
- `extensions/msteams/src/attachments.ts`
- `extensions/msteams/src/attachments/bot-framework.test.ts`
- `extensions/msteams/src/attachments/bot-framework.ts`
- `extensions/msteams/src/attachments/download.ts`
- `extensions/msteams/src/attachments/graph.test.ts`
- `extensions/msteams/src/attachments/graph.ts`
- `extensions/msteams/src/attachments/html.ts`
- `extensions/msteams/src/attachments/remote-media.test.ts`
- `extensions/msteams/src/attachments/remote-media.ts`
- `extensions/msteams/src/attachments/shared.test.ts`
- `extensions/msteams/src/attachments/shared.ts`
- `extensions/msteams/src/attachments/types.ts`
- `extensions/msteams/src/channel-api.ts`
- `extensions/msteams/src/channel.actions.test.ts`
- `extensions/msteams/src/channel.directory.test.ts`
- `extensions/msteams/src/channel.runtime.ts`
- `extensions/msteams/src/channel.test.ts`
- `extensions/msteams/src/channel.ts`
- `extensions/msteams/src/config-schema.ts`
- `extensions/msteams/src/config-ui-hints.ts`
- `extensions/msteams/src/conversation-store-fs.ts`
- `extensions/msteams/src/conversation-store-helpers.test.ts`
- `extensions/msteams/src/conversation-store-helpers.ts`
- `extensions/msteams/src/conversation-store.shared.test.ts`
- `extensions/msteams/src/conversation-store.ts`
- `extensions/msteams/src/directory-live.ts`
- `extensions/msteams/src/directory.ts`
- `extensions/msteams/src/doctor.ts`
- `extensions/msteams/src/errors.test.ts`
- `extensions/msteams/src/errors.ts`
- `extensions/msteams/src/feedback-reflection-prompt.ts`
- ... 98 more paths in `leaf-impact.json`

## `src/agent-runtime/providers-auth`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/providers-auth`
- Coverage: `verified`
- Changed paths: `144`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/auth-profiles.chutes.test.ts`
- `src/agents/auth-profiles.doctor.test.ts`
- `src/agents/auth-profiles.ensureauthprofilestore.test.ts`
- `src/agents/auth-profiles.external-cli-sync.test.ts`
- `src/agents/auth-profiles.getsoonestcooldownexpiry.test.ts`
- `src/agents/auth-profiles.markauthprofilefailure.test.ts`
- `src/agents/auth-profiles.readonly-sync.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.does-not-prioritize-lastgood-round-robin-ordering.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.fixtures.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.normalizes-z-ai-aliases-auth-order.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.orders-by-lastused-no-explicit-order-exists.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.uses-stored-profiles-no-config-exists.test.ts`
- `src/agents/auth-profiles.runtime-snapshot-save.test.ts`
- `src/agents/auth-profiles.store-cache.test.ts`
- `src/agents/auth-profiles.store.save.test.ts`
- `src/agents/auth-profiles.ts`
- `src/agents/auth-profiles/constants.ts`
- `src/agents/auth-profiles/credential-state.test.ts`
- `src/agents/auth-profiles/credential-state.ts`
- `src/agents/auth-profiles/display.ts`
- `src/agents/auth-profiles/doctor.ts`
- `src/agents/auth-profiles/effective-oauth.test.ts`
- `src/agents/auth-profiles/effective-oauth.ts`
- `src/agents/auth-profiles/external-auth.ts`
- `src/agents/auth-profiles/external-cli-sync.ts`
- `src/agents/auth-profiles/external-oauth.test.ts`
- `src/agents/auth-profiles/identity.ts`
- `src/agents/auth-profiles/oauth-common-mocks.test-support.ts`
- `src/agents/auth-profiles/oauth-external-auth-passthrough.test-support.ts`
- `src/agents/auth-profiles/oauth-file-lock-passthrough.test-support.ts`
- `src/agents/auth-profiles/oauth-identity.test.ts`
- `src/agents/auth-profiles/oauth-identity.ts`
- `src/agents/auth-profiles/oauth-lock-path.test.ts`
- `src/agents/auth-profiles/oauth-lock-timeout-classification.test.ts`
- `src/agents/auth-profiles/oauth-manager.test.ts`
- `src/agents/auth-profiles/oauth-manager.ts`
- `src/agents/auth-profiles/oauth-refresh-error.test.ts`
- `src/agents/auth-profiles/oauth-refresh-failure.ts`
- `src/agents/auth-profiles/oauth-refresh-lock-errors.ts`
- `src/agents/auth-profiles/oauth-refresh-queue.test.ts`
- `src/agents/auth-profiles/oauth-refresh-timeout.test.ts`
- `src/agents/auth-profiles/oauth-shared.ts`
- `src/agents/auth-profiles/oauth-test-utils.ts`
- `src/agents/auth-profiles/oauth.adopt-identity.test.ts`
- `src/agents/auth-profiles/oauth.concurrent-agents.test.ts`
- `src/agents/auth-profiles/oauth.fallback-to-main-agent.test.ts`
- `src/agents/auth-profiles/oauth.mirror-refresh.test.ts`
- `src/agents/auth-profiles/oauth.openai-codex-refresh-fallback.test.ts`
- `src/agents/auth-profiles/oauth.test.ts`
- `src/agents/auth-profiles/oauth.ts`
- ... 94 more paths in `leaf-impact.json`

## `test-infra/fixtures-and-helpers/fixtures`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/fixtures`
- Coverage: `fallback`
- Changed paths: `143`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `test-fixtures/talk-config-contract.json`
- `test/channel-outbounds.ts`
- `test/fixtures/cli-startup-bench.json`
- `test/fixtures/extension-relative-outside-package-inventory.json`
- `test/fixtures/system-run-approval-binding-contract.json`
- `test/fixtures/test-memory-hotspots.unit.json`
- `test/fixtures/test-parallel.behavior.json`
- `test/fixtures/test-timings.channels.json`
- `test/fixtures/test-timings.extensions.json`
- `test/fixtures/test-timings.unit.json`
- `test/scripts/ios-version.test-support.ts`
- `test/scripts/test-extension.test.ts`
- `test/scripts/test-helpers.ts`
- `test/setup-openclaw-runtime.ts`
- `test/test-env.test.ts`
- `test/test-env.ts`
- `test/tsconfig.json`
- `test/vitest/vitest.acp.config.ts`
- `test/vitest/vitest.agents.config.ts`
- `test/vitest/vitest.auto-reply-core.config.ts`
- `test/vitest/vitest.auto-reply-reply.config.ts`
- `test/vitest/vitest.auto-reply-top-level.config.ts`
- `test/vitest/vitest.auto-reply.config.ts`
- `test/vitest/vitest.boundary.config.ts`
- `test/vitest/vitest.bundled-plugin-paths.ts`
- `test/vitest/vitest.bundled.config.ts`
- `test/vitest/vitest.channel-paths.mjs`
- `test/vitest/vitest.channels.config.ts`
- `test/vitest/vitest.cli.config.ts`
- `test/vitest/vitest.commands-light-paths.mjs`
- `test/vitest/vitest.commands-light.config.ts`
- `test/vitest/vitest.commands.config.ts`
- `test/vitest/vitest.config.ts`
- `test/vitest/vitest.contracts-channel-config.config.ts`
- `test/vitest/vitest.contracts-channel-registry.config.ts`
- `test/vitest/vitest.contracts-channel-session.config.ts`
- `test/vitest/vitest.contracts-channel-surface.config.ts`
- `test/vitest/vitest.contracts-plugin.config.ts`
- `test/vitest/vitest.contracts-shared.ts`
- `test/vitest/vitest.cron.config.ts`
- `test/vitest/vitest.daemon.config.ts`
- `test/vitest/vitest.e2e.config.ts`
- `test/vitest/vitest.extension-acpx-paths.mjs`
- `test/vitest/vitest.extension-acpx.config.ts`
- `test/vitest/vitest.extension-bluebubbles-paths.mjs`
- `test/vitest/vitest.extension-bluebubbles.config.ts`
- `test/vitest/vitest.extension-browser-paths.mjs`
- `test/vitest/vitest.extension-browser.config.ts`
- `test/vitest/vitest.extension-channel-single-config.ts`
- `test/vitest/vitest.extension-channel-split-paths.mjs`
- ... 93 more paths in `leaf-impact.json`

## `src/capability-modules/cron`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/cron`
- Coverage: `verified`
- Changed paths: `135`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/cron/active-jobs.ts`
- `src/cron/delivery-field-schemas.ts`
- `src/cron/delivery-plan.test.ts`
- `src/cron/delivery-plan.ts`
- `src/cron/delivery-preview.ts`
- `src/cron/delivery.failure-notify.test.ts`
- `src/cron/delivery.test-helpers.ts`
- `src/cron/delivery.test.ts`
- `src/cron/delivery.ts`
- `src/cron/isolated-agent.auth-profile-propagation.test.ts`
- `src/cron/isolated-agent.delivers-response-has-heartbeat-ok-but-includes.test.ts`
- `src/cron/isolated-agent.delivery-target-thread-session.test.ts`
- `src/cron/isolated-agent.delivery.test-helpers.ts`
- `src/cron/isolated-agent.direct-delivery-core-channels.test.ts`
- `src/cron/isolated-agent.direct-delivery-forum-topics.test.ts`
- `src/cron/isolated-agent.helpers.test.ts`
- `src/cron/isolated-agent.hook-content-wrapping.test.ts`
- `src/cron/isolated-agent.isolated-auth-session-flag.test.ts`
- `src/cron/isolated-agent.lane.test.ts`
- `src/cron/isolated-agent.mocks.ts`
- `src/cron/isolated-agent.model-formatting.test.ts`
- `src/cron/isolated-agent.model-overrides.test.ts`
- `src/cron/isolated-agent.session-identity.test.ts`
- `src/cron/isolated-agent.skips-delivery-without-whatsapp-recipient-besteffortdeliver-true.test.ts`
- `src/cron/isolated-agent.subagent-model.test.ts`
- `src/cron/isolated-agent.test-harness.ts`
- `src/cron/isolated-agent.test-setup.ts`
- `src/cron/isolated-agent.turn-test-helpers.ts`
- `src/cron/isolated-agent.uses-last-non-empty-agent-text-as.test.ts`
- `src/cron/isolated-agent/channel-output-policy.test.ts`
- `src/cron/isolated-agent/channel-output-policy.ts`
- `src/cron/isolated-agent/delivery-dispatch.double-announce.test.ts`
- `src/cron/isolated-agent/delivery-dispatch.named-agent.test.ts`
- `src/cron/isolated-agent/delivery-dispatch.ts`
- `src/cron/isolated-agent/delivery-logger.runtime.ts`
- `src/cron/isolated-agent/delivery-outbound.runtime.ts`
- `src/cron/isolated-agent/delivery-subagent-registry.runtime.ts`
- `src/cron/isolated-agent/delivery-target.runtime.ts`
- `src/cron/isolated-agent/delivery-target.test.ts`
- `src/cron/isolated-agent/delivery-target.ts`
- `src/cron/isolated-agent/helpers.test.ts`
- `src/cron/isolated-agent/helpers.ts`
- `src/cron/isolated-agent/model-selection.ts`
- `src/cron/isolated-agent/run-auth-profile.runtime.ts`
- `src/cron/isolated-agent/run-context.runtime.ts`
- `src/cron/isolated-agent/run-delivery.runtime.ts`
- `src/cron/isolated-agent/run-embedded.runtime.ts`
- `src/cron/isolated-agent/run-execution-cli.runtime.ts`
- `src/cron/isolated-agent/run-execution.runtime.ts`
- `src/cron/isolated-agent/run-executor.runtime.ts`
- ... 85 more paths in `leaf-impact.json`

## `src/plugin-runtime-sdk/plugin-sdk`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugin-sdk`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `131`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/plugin-sdk/allow-from.test.ts`
- `src/plugin-sdk/allow-from.ts`
- `src/plugin-sdk/channel-actions.ts`
- `src/plugin-sdk/channel-config-helpers.test.ts`
- `src/plugin-sdk/channel-config-helpers.ts`
- `src/plugin-sdk/channel-config-schema.ts`
- `src/plugin-sdk/channel-contract-testing.ts`
- `src/plugin-sdk/channel-contract.ts`
- `src/plugin-sdk/channel-core.ts`
- `src/plugin-sdk/channel-entry-contract.test.ts`
- `src/plugin-sdk/channel-entry-contract.ts`
- `src/plugin-sdk/channel-envelope.ts`
- `src/plugin-sdk/channel-feedback.ts`
- `src/plugin-sdk/channel-import-guardrails.test.ts`
- `src/plugin-sdk/channel-inbound-debounce.ts`
- `src/plugin-sdk/channel-inbound-roots.ts`
- `src/plugin-sdk/channel-inbound.ts`
- `src/plugin-sdk/channel-lifecycle.core.ts`
- `src/plugin-sdk/channel-lifecycle.test.ts`
- `src/plugin-sdk/channel-lifecycle.ts`
- `src/plugin-sdk/channel-location.ts`
- `src/plugin-sdk/channel-logging.ts`
- `src/plugin-sdk/channel-mention-gating.ts`
- `src/plugin-sdk/channel-pairing-paths.ts`
- `src/plugin-sdk/channel-pairing.test.ts`
- `src/plugin-sdk/channel-pairing.ts`
- `src/plugin-sdk/channel-plugin-common.ts`
- `src/plugin-sdk/channel-policy.test.ts`
- `src/plugin-sdk/channel-policy.ts`
- `src/plugin-sdk/channel-reply-options-runtime.ts`
- `src/plugin-sdk/channel-reply-pipeline.test.ts`
- `src/plugin-sdk/channel-reply-pipeline.ts`
- `src/plugin-sdk/channel-runtime-context.ts`
- `src/plugin-sdk/channel-runtime.ts`
- `src/plugin-sdk/channel-secret-basic-runtime.ts`
- `src/plugin-sdk/channel-secret-runtime.ts`
- `src/plugin-sdk/channel-secret-tts-runtime.ts`
- `src/plugin-sdk/channel-send-result.test.ts`
- `src/plugin-sdk/channel-send-result.ts`
- `src/plugin-sdk/channel-setup.test.ts`
- `src/plugin-sdk/channel-setup.ts`
- `src/plugin-sdk/channel-status.ts`
- `src/plugin-sdk/channel-streaming.test.ts`
- `src/plugin-sdk/channel-streaming.ts`
- `src/plugin-sdk/channel-targets.ts`
- `src/plugin-sdk/group-access.ts`
- `src/plugin-sdk/index.bundle.test.ts`
- `src/plugin-sdk/index.test.ts`
- `src/plugin-sdk/index.ts`
- `src/plugin-sdk/media-generation-runtime-shared.ts`
- ... 81 more paths in `leaf-impact.json`

## `test-infra/profiles-and-suites/config-and-runner`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/config-and-runner`
- Coverage: `fallback`
- Changed paths: `122`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `.agent/workflows/update_clawdbot.md`
- `.agents/maintainers.md`
- `.agents/skills/blacksmith-testbox/SKILL.md`
- `.agents/skills/openclaw-ghsa-maintainer/SKILL.md`
- `.agents/skills/openclaw-parallels-smoke/SKILL.md`
- `.agents/skills/openclaw-pr-maintainer/SKILL.md`
- `.agents/skills/openclaw-qa-testing/SKILL.md`
- `.agents/skills/openclaw-qa-testing/agents/openai.yaml`
- `.agents/skills/openclaw-release-maintainer/SKILL.md`
- `.agents/skills/openclaw-secret-scanning-maintainer/SKILL.md`
- `.agents/skills/openclaw-secret-scanning-maintainer/scripts/secret-scanning.mjs`
- `.agents/skills/openclaw-test-heap-leaks/SKILL.md`
- `.agents/skills/openclaw-test-heap-leaks/scripts/heapsnapshot-delta.mjs`
- `.agents/skills/openclaw-test-performance/SKILL.md`
- `.agents/skills/openclaw-test-performance/agents/openai.yaml`
- `.agents/skills/optimizetests/SKILL.md`
- `.agents/skills/optimizetests/agents/openai.yaml`
- `.agents/skills/parallels-discord-roundtrip/SKILL.md`
- `.agents/skills/security-triage/SKILL.md`
- `.agents/skills/tag-duplicate-prs-issues/SKILL.md`
- `.agents/skills/tag-duplicate-prs-issues/agents/openai.yaml`
- `.codex`
- `.dockerignore`
- `.env.example`
- `.github/actionlint.yaml`
- `.github/actions/setup-node-env/action.yml`
- `.github/actions/setup-pnpm-store-cache/action.yml`
- `.github/codeql/codeql-javascript-typescript.yml`
- `.github/codex/prompts/docs-agent.md`
- `.github/codex/prompts/docs-mdx-repair.md`
- `.github/codex/prompts/test-performance-agent.md`
- `.github/instructions/copilot.instructions.md`
- `.github/labeler.yml`
- `.github/pr-assets/compaction-checkpoints/sessions-checkpoints-inline.png`
- `.github/pr-assets/compaction-checkpoints/sessions-overview-inline.png`
- `.github/pull_request_template.md`
- `.github/workflows/auto-response.yml`
- `.github/workflows/ci-bun.yml`
- `.github/workflows/ci-check-testbox.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/control-ui-locale-refresh.yml`
- `.github/workflows/docker-release.yml`
- `.github/workflows/docs-agent.yml`
- `.github/workflows/docs-sync-publish.yml`
- `.github/workflows/docs-translate-trigger-release.yml`
- `.github/workflows/docs.yml`
- `.github/workflows/duplicate-after-merge.yml`
- `.github/workflows/install-smoke.yml`
- `.github/workflows/labeler.yml`
- ... 72 more paths in `leaf-impact.json`

## `extensions/memory-media-voice-plugins/memory-core`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/memory-core`
- Coverage: `verified`
- Changed paths: `121`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/memory-core/api.ts`
- `extensions/memory-core/cli-metadata.ts`
- `extensions/memory-core/index.test.ts`
- `extensions/memory-core/index.ts`
- `extensions/memory-core/manager-runtime.ts`
- `extensions/memory-core/openclaw.plugin.json`
- `extensions/memory-core/package.json`
- `extensions/memory-core/runtime-api.ts`
- `extensions/memory-core/src/cli.host.runtime.ts`
- `extensions/memory-core/src/cli.runtime.ts`
- `extensions/memory-core/src/cli.test.ts`
- `extensions/memory-core/src/cli.ts`
- `extensions/memory-core/src/cli.types.ts`
- `extensions/memory-core/src/concept-vocabulary.test.ts`
- `extensions/memory-core/src/concept-vocabulary.ts`
- `extensions/memory-core/src/config.test.ts`
- `extensions/memory-core/src/dreaming-command.test.ts`
- `extensions/memory-core/src/dreaming-command.ts`
- `extensions/memory-core/src/dreaming-markdown.test.ts`
- `extensions/memory-core/src/dreaming-markdown.ts`
- `extensions/memory-core/src/dreaming-narrative.test.ts`
- `extensions/memory-core/src/dreaming-narrative.ts`
- `extensions/memory-core/src/dreaming-phases.test.ts`
- `extensions/memory-core/src/dreaming-phases.ts`
- `extensions/memory-core/src/dreaming-repair.test.ts`
- `extensions/memory-core/src/dreaming-repair.ts`
- `extensions/memory-core/src/dreaming-shared.test.ts`
- `extensions/memory-core/src/dreaming-shared.ts`
- `extensions/memory-core/src/dreaming.test.ts`
- `extensions/memory-core/src/dreaming.ts`
- `extensions/memory-core/src/flush-plan.ts`
- `extensions/memory-core/src/memory-events.test.ts`
- `extensions/memory-core/src/memory-tool-manager-mock.ts`
- `extensions/memory-core/src/memory/embedding-manager.test-harness.ts`
- `extensions/memory-core/src/memory/embedding.test-mocks.ts`
- `extensions/memory-core/src/memory/embeddings.test.ts`
- `extensions/memory-core/src/memory/embeddings.ts`
- `extensions/memory-core/src/memory/hybrid.test.ts`
- `extensions/memory-core/src/memory/hybrid.ts`
- `extensions/memory-core/src/memory/index.test.ts`
- `extensions/memory-core/src/memory/manager-async-state.ts`
- `extensions/memory-core/src/memory/manager-atomic-reindex.ts`
- `extensions/memory-core/src/memory/manager-batch-state.test.ts`
- `extensions/memory-core/src/memory/manager-batch-state.ts`
- `extensions/memory-core/src/memory/manager-cache.test.ts`
- `extensions/memory-core/src/memory/manager-cache.ts`
- `extensions/memory-core/src/memory/manager-db.ts`
- `extensions/memory-core/src/memory/manager-embedding-cache.test.ts`
- `extensions/memory-core/src/memory/manager-embedding-cache.ts`
- `extensions/memory-core/src/memory/manager-embedding-ops.ts`
- ... 71 more paths in `leaf-impact.json`

## `test-infra/fixtures-and-helpers/helpers-core`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/helpers-core`
- Coverage: `verified`
- Changed paths: `113`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `test/helpers/AGENTS.md`
- `test/helpers/CLAUDE.md`
- `test/helpers/agents/auth-profile-runtime-contract.ts`
- `test/helpers/agents/delivery-no-reply-runtime-contract.ts`
- `test/helpers/agents/openclaw-owned-tool-runtime-contract.ts`
- `test/helpers/agents/outcome-fallback-runtime-contract.ts`
- `test/helpers/agents/pi-ai-stream-simple-mock.ts`
- `test/helpers/agents/prompt-composition-scenarios.ts`
- `test/helpers/agents/prompt-overlay-runtime-contract.ts`
- `test/helpers/agents/schema-normalization-runtime-contract.ts`
- `test/helpers/agents/transcript-repair-runtime-contract.ts`
- `test/helpers/agents/transport-params-runtime-contract.ts`
- `test/helpers/auto-reply/trigger-handling-test-harness.ts`
- `test/helpers/browser-bundled-plugin-fixture.ts`
- `test/helpers/bundled-channel-entry.ts`
- `test/helpers/bundled-plugin-paths.ts`
- `test/helpers/bundled-runtime-sidecars.ts`
- `test/helpers/channels/AGENTS.md`
- `test/helpers/channels/CLAUDE.md`
- `test/helpers/channels/bundled-channel-plugin-loader.ts`
- `test/helpers/channels/channel-catalog-contract.ts`
- `test/helpers/channels/channel-plugin-catalog-contract-suites.ts`
- `test/helpers/channels/config-write-contract-suites.ts`
- `test/helpers/channels/directory-ids.ts`
- `test/helpers/channels/dm-policy-contract.ts`
- `test/helpers/channels/group-policy-contract-suites.ts`
- `test/helpers/channels/group-policy-contract.ts`
- `test/helpers/channels/imessage-test-plugin.ts`
- `test/helpers/channels/inbound-contract.ts`
- `test/helpers/channels/interactive-contract.ts`
- `test/helpers/channels/lazy-object-surface.ts`
- `test/helpers/channels/manifest.ts`
- `test/helpers/channels/outbound-payload-contract.ts`
- `test/helpers/channels/plugins-core-extension-contract.ts`
- `test/helpers/channels/registry-backed-contract-shards.ts`
- `test/helpers/channels/registry-backed-contract.ts`
- `test/helpers/channels/registry-contract-suites.ts`
- `test/helpers/channels/registry-plugin.ts`
- `test/helpers/channels/registry-session-binding.ts`
- `test/helpers/channels/runtime-artifacts.ts`
- `test/helpers/channels/session-binding-contract.ts`
- `test/helpers/channels/session-binding-registry-backed-contract.ts`
- `test/helpers/channels/surface-contract-registry.ts`
- `test/helpers/channels/surface-contract-suite.ts`
- `test/helpers/channels/threading-directory-contract-suites.ts`
- `test/helpers/config/bundled-channel-config-runtime.ts`
- `test/helpers/config/config-honor-audit.ts`
- `test/helpers/config/heartbeat-config-honor.inventory.ts`
- `test/helpers/config/redact-snapshot-test-hints.ts`
- `test/helpers/cron/service-regression-fixtures.ts`
- ... 63 more paths in `leaf-impact.json`

## `src/reply-orchestration/commands/command-handlers`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/commands/command-handlers`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `111`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/reply/commands-abort-trigger.test.ts`
- `src/auto-reply/reply/commands-acp.test.ts`
- `src/auto-reply/reply/commands-acp.ts`
- `src/auto-reply/reply/commands-acp/context.test.ts`
- `src/auto-reply/reply/commands-acp/context.ts`
- `src/auto-reply/reply/commands-acp/diagnostics.ts`
- `src/auto-reply/reply/commands-acp/install-hints.test.ts`
- `src/auto-reply/reply/commands-acp/install-hints.ts`
- `src/auto-reply/reply/commands-acp/lifecycle.ts`
- `src/auto-reply/reply/commands-acp/runtime-options.ts`
- `src/auto-reply/reply/commands-acp/shared.ts`
- `src/auto-reply/reply/commands-acp/targets.ts`
- `src/auto-reply/reply/commands-agent-scope.test-support.ts`
- `src/auto-reply/reply/commands-allowlist.test.ts`
- `src/auto-reply/reply/commands-allowlist.ts`
- `src/auto-reply/reply/commands-approve.test.ts`
- `src/auto-reply/reply/commands-approve.ts`
- `src/auto-reply/reply/commands-bash-alias.test.ts`
- `src/auto-reply/reply/commands-bash.ts`
- `src/auto-reply/reply/commands-btw.test.ts`
- `src/auto-reply/reply/commands-btw.ts`
- `src/auto-reply/reply/commands-compact.runtime.ts`
- `src/auto-reply/reply/commands-compact.test.ts`
- `src/auto-reply/reply/commands-compact.ts`
- `src/auto-reply/reply/commands-config.ts`
- `src/auto-reply/reply/commands-context-command.ts`
- `src/auto-reply/reply/commands-context-report.test.ts`
- `src/auto-reply/reply/commands-context-report.ts`
- `src/auto-reply/reply/commands-context.test.ts`
- `src/auto-reply/reply/commands-context.ts`
- `src/auto-reply/reply/commands-core.runtime.ts`
- `src/auto-reply/reply/commands-core.send-policy.test.ts`
- `src/auto-reply/reply/commands-core.test.ts`
- `src/auto-reply/reply/commands-core.ts`
- `src/auto-reply/reply/commands-export-common.ts`
- `src/auto-reply/reply/commands-export-session.test.ts`
- `src/auto-reply/reply/commands-export-session.ts`
- `src/auto-reply/reply/commands-export-test-mocks.ts`
- `src/auto-reply/reply/commands-export-trajectory.test.ts`
- `src/auto-reply/reply/commands-export-trajectory.ts`
- `src/auto-reply/reply/commands-gating.test.ts`
- `src/auto-reply/reply/commands-handlers.runtime.ts`
- `src/auto-reply/reply/commands-info.test.ts`
- `src/auto-reply/reply/commands-info.tools.test.ts`
- `src/auto-reply/reply/commands-info.ts`
- `src/auto-reply/reply/commands-mcp.test.ts`
- `src/auto-reply/reply/commands-models.test.ts`
- `src/auto-reply/reply/commands-models.ts`
- `src/auto-reply/reply/commands-parse.test.ts`
- `src/auto-reply/reply/commands-plugin.test.ts`
- ... 61 more paths in `leaf-impact.json`

## `src/cli-commands/status-gateway-channel`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/status-gateway-channel`
- Coverage: `verified`
- Changed paths: `102`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/daemon-cli/gateway-token-drift.test.ts`
- `src/cli/daemon-cli/gateway-token-drift.ts`
- `src/cli/daemon-cli/install.integration.test.ts`
- `src/cli/daemon-cli/install.runtime.ts`
- `src/cli/daemon-cli/install.test.ts`
- `src/cli/daemon-cli/install.ts`
- `src/cli/daemon-cli/launchd-recovery.test.ts`
- `src/cli/daemon-cli/launchd-recovery.ts`
- `src/cli/daemon-cli/lifecycle-core.config-guard.test.ts`
- `src/cli/daemon-cli/lifecycle-core.test.ts`
- `src/cli/daemon-cli/lifecycle-core.ts`
- `src/cli/daemon-cli/lifecycle.runtime.ts`
- `src/cli/daemon-cli/lifecycle.test.ts`
- `src/cli/daemon-cli/lifecycle.ts`
- `src/cli/daemon-cli/probe.test.ts`
- `src/cli/daemon-cli/probe.ts`
- `src/cli/daemon-cli/register-service-commands.test.ts`
- `src/cli/daemon-cli/register-service-commands.ts`
- `src/cli/daemon-cli/register.ts`
- `src/cli/daemon-cli/restart-health.test.ts`
- `src/cli/daemon-cli/restart-health.ts`
- `src/cli/daemon-cli/shared.ts`
- `src/cli/daemon-cli/status.gather.test.ts`
- `src/cli/daemon-cli/status.gather.ts`
- `src/cli/daemon-cli/status.print.test.ts`
- `src/cli/daemon-cli/status.print.ts`
- `src/cli/daemon-cli/status.runtime.ts`
- `src/cli/daemon-cli/status.ts`
- `src/commands/gateway-status/discovery.ts`
- `src/commands/gateway-status/helpers.test.ts`
- `src/commands/gateway-status/helpers.ts`
- `src/commands/gateway-status/output.test.ts`
- `src/commands/gateway-status/output.ts`
- `src/commands/gateway-status/probe-run.ts`
- `src/commands/gateway-status/test-support.ts`
- `src/commands/status-all/agents.ts`
- `src/commands/status-all/channels-table.test.ts`
- `src/commands/status-all/channels-table.ts`
- `src/commands/status-all/channels-token-summary.ts`
- `src/commands/status-all/channels.mattermost-token-summary.test.ts`
- `src/commands/status-all/channels.ts`
- `src/commands/status-all/diagnosis.test.ts`
- `src/commands/status-all/diagnosis.ts`
- `src/commands/status-all/format.test.ts`
- `src/commands/status-all/format.ts`
- `src/commands/status-all/gateway.test.ts`
- `src/commands/status-all/gateway.ts`
- `src/commands/status-all/report-data.ts`
- `src/commands/status-all/report-lines.test.ts`
- `src/commands/status-all/report-lines.ts`
- ... 52 more paths in `leaf-impact.json`

## `src/capability-modules/media`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/media`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `101`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/media-generation/live-test-helpers.ts`
- `src/media-generation/model-ref.ts`
- `src/media-generation/normalization.types.ts`
- `src/media-generation/provider-capabilities.contract.test.ts`
- `src/media-generation/runtime-shared.test.ts`
- `src/media-generation/runtime-shared.ts`
- `src/media/audio.test.ts`
- `src/media/audio.ts`
- `src/media/base64.ts`
- `src/media/channel-inbound-roots.fast-path.test.ts`
- `src/media/channel-inbound-roots.ts`
- `src/media/configured-max-bytes.ts`
- `src/media/document-extractors.runtime.test.ts`
- `src/media/document-extractors.runtime.ts`
- `src/media/fetch.test.ts`
- `src/media/fetch.ts`
- `src/media/ffmpeg-exec.ts`
- `src/media/file-context.ts`
- `src/media/image-ops.input-guard.test.ts`
- `src/media/image-ops.tempdir.test.ts`
- `src/media/image-ops.ts`
- `src/media/inbound-path-policy.test.ts`
- `src/media/inbound-path-policy.ts`
- `src/media/input-files.fetch-guard.test.ts`
- `src/media/input-files.ts`
- `src/media/load-options.test.ts`
- `src/media/load-options.ts`
- `src/media/local-media-access.test.ts`
- `src/media/local-media-access.ts`
- `src/media/local-roots.test.ts`
- `src/media/local-roots.ts`
- `src/media/media-reference.test.ts`
- `src/media/media-reference.ts`
- `src/media/media-source-url.ts`
- `src/media/mime.test.ts`
- `src/media/mime.ts`
- `src/media/outbound-attachment.test.ts`
- `src/media/outbound-attachment.ts`
- `src/media/parse.test.ts`
- `src/media/parse.ts`
- `src/media/pdf-extract.test.ts`
- `src/media/pdf-extract.ts`
- `src/media/prompt-image-order.ts`
- `src/media/qr-image.test.ts`
- `src/media/qr-image.ts`
- `src/media/qr-runtime.ts`
- `src/media/qr-terminal.ts`
- `src/media/read-capability.test.ts`
- `src/media/read-capability.ts`
- `src/media/server.outside-workspace.test.ts`
- ... 51 more paths in `leaf-impact.json`

## `test-infra/profiles-and-suites/root-tests`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/root-tests`
- Coverage: `verified`
- Changed paths: `96`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `test/extension-import-boundaries.test.ts`
- `test/extension-package-tsc-boundary.test.ts`
- `test/extension-plugin-sdk-boundary.test.ts`
- `test/extension-test-boundary.test.ts`
- `test/gateway.multi.e2e.test.ts`
- `test/git-hooks-pre-commit.test.ts`
- `test/helpers/node-builtin-mocks.test.ts`
- `test/image-generation.infer-cli.live.test.ts`
- `test/image-generation.runtime.live.test.ts`
- `test/npm-publish-plan.test.ts`
- `test/official-channel-catalog.test.ts`
- `test/openclaw-launcher.e2e.test.ts`
- `test/openclaw-npm-postpublish-verify.test.ts`
- `test/openclaw-npm-release-check.test.ts`
- `test/openclaw-prepack.test.ts`
- `test/plugin-clawhub-release.test.ts`
- `test/plugin-npm-release.test.ts`
- `test/qa-convex-credential-payload-validation.test.ts`
- `test/release-check.test.ts`
- `test/scripts/build-all.test.ts`
- `test/scripts/bundle-a2ui.test.ts`
- `test/scripts/bundled-plugin-build-entries.test.ts`
- `test/scripts/bundled-plugin-staged-runtime-deps.test.ts`
- `test/scripts/changed-lanes.test.ts`
- `test/scripts/channel-contract-test-plan.test.ts`
- `test/scripts/check-dynamic-import-warts.test.ts`
- `test/scripts/check-extension-package-tsc-boundary.test.ts`
- `test/scripts/check-file-utils.test.ts`
- `test/scripts/check-gateway-watch-regression.test.ts`
- `test/scripts/check-no-conflict-markers.test.ts`
- `test/scripts/check-no-random-messaging-tmp.test.ts`
- `test/scripts/ci-node-test-plan.test.ts`
- `test/scripts/ci-run-timings.test.ts`
- `test/scripts/close-duplicate-prs-after-merge.test.ts`
- `test/scripts/committer.test.ts`
- `test/scripts/extension-source-classifier.test.ts`
- `test/scripts/gh-read.test.ts`
- `test/scripts/ios-pin-version.test.ts`
- `test/scripts/ios-team-id.test.ts`
- `test/scripts/ios-version.test.ts`
- `test/scripts/lint-suppressions.test.ts`
- `test/scripts/local-heavy-check-runtime.test.ts`
- `test/scripts/managed-child-process.test.ts`
- `test/scripts/npm-runner.test.ts`
- `test/scripts/npm-telegram-live.test.ts`
- `test/scripts/openclaw-cross-os-release-checks.test.ts`
- `test/scripts/oxlint-config.test.ts`
- `test/scripts/parallels-npm-update-smoke.test.ts`
- `test/scripts/pnpm-audit-prod.test.ts`
- `test/scripts/pnpm-runner.test.ts`
- ... 46 more paths in `leaf-impact.json`

## `extensions/channel-plugins/bluebubbles`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/bluebubbles`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `88`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/bluebubbles/README.md`
- `extensions/bluebubbles/api.ts`
- `extensions/bluebubbles/channel-plugin-api.ts`
- `extensions/bluebubbles/contract-api.ts`
- `extensions/bluebubbles/index.ts`
- `extensions/bluebubbles/package-manifest.contract.test.ts`
- `extensions/bluebubbles/package.json`
- `extensions/bluebubbles/runtime-api.ts`
- `extensions/bluebubbles/secret-contract-api.ts`
- `extensions/bluebubbles/setup-entry.ts`
- `extensions/bluebubbles/src/account-resolve.test.ts`
- `extensions/bluebubbles/src/account-resolve.ts`
- `extensions/bluebubbles/src/accounts-normalization.ts`
- `extensions/bluebubbles/src/accounts.ts`
- `extensions/bluebubbles/src/actions-api.ts`
- `extensions/bluebubbles/src/actions-contract.ts`
- `extensions/bluebubbles/src/actions.runtime.ts`
- `extensions/bluebubbles/src/actions.test.ts`
- `extensions/bluebubbles/src/actions.ts`
- `extensions/bluebubbles/src/attachments.test.ts`
- `extensions/bluebubbles/src/attachments.ts`
- `extensions/bluebubbles/src/catchup.test.ts`
- `extensions/bluebubbles/src/catchup.ts`
- `extensions/bluebubbles/src/channel.pairing.test.ts`
- `extensions/bluebubbles/src/channel.runtime.ts`
- `extensions/bluebubbles/src/channel.setup.ts`
- `extensions/bluebubbles/src/channel.status.test.ts`
- `extensions/bluebubbles/src/channel.ts`
- `extensions/bluebubbles/src/chat.ts`
- `extensions/bluebubbles/src/client.test.ts`
- `extensions/bluebubbles/src/client.ts`
- `extensions/bluebubbles/src/config-apply.ts`
- `extensions/bluebubbles/src/config-schema.ts`
- `extensions/bluebubbles/src/config-ui-hints.ts`
- `extensions/bluebubbles/src/conversation-bindings.test.ts`
- `extensions/bluebubbles/src/conversation-bindings.ts`
- `extensions/bluebubbles/src/conversation-route.test.ts`
- `extensions/bluebubbles/src/conversation-route.ts`
- `extensions/bluebubbles/src/dm-policy.contract.test.ts`
- `extensions/bluebubbles/src/doctor-contract.ts`
- `extensions/bluebubbles/src/doctor.test.ts`
- `extensions/bluebubbles/src/doctor.ts`
- `extensions/bluebubbles/src/history.ts`
- `extensions/bluebubbles/src/inbound-dedupe.test.ts`
- `extensions/bluebubbles/src/inbound-dedupe.ts`
- `extensions/bluebubbles/src/local-file-access.ts`
- `extensions/bluebubbles/src/media-send.test.ts`
- `extensions/bluebubbles/src/media-send.ts`
- `extensions/bluebubbles/src/monitor-debounce.ts`
- `extensions/bluebubbles/src/monitor-normalize.ts`
- ... 38 more paths in `leaf-impact.json`

## `extensions/channel-plugins/mattermost`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/mattermost`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `88`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/mattermost/channel-plugin-api.ts`
- `extensions/mattermost/channel-plugin-runtime.ts`
- `extensions/mattermost/contract-api.ts`
- `extensions/mattermost/gateway-auth-api.ts`
- `extensions/mattermost/index.ts`
- `extensions/mattermost/openclaw.plugin.json`
- `extensions/mattermost/package-manifest.contract.test.ts`
- `extensions/mattermost/package.json`
- `extensions/mattermost/policy-api.ts`
- `extensions/mattermost/runtime-api.ts`
- `extensions/mattermost/secret-contract-api.ts`
- `extensions/mattermost/setup-entry.ts`
- `extensions/mattermost/slash-route-api.ts`
- `extensions/mattermost/src/approval-auth.test.ts`
- `extensions/mattermost/src/approval-auth.ts`
- `extensions/mattermost/src/channel-actions-setup-status.contract.test.ts`
- `extensions/mattermost/src/channel-api.ts`
- `extensions/mattermost/src/channel-config-shared.ts`
- `extensions/mattermost/src/channel.runtime.ts`
- `extensions/mattermost/src/channel.setup.ts`
- `extensions/mattermost/src/channel.test.ts`
- `extensions/mattermost/src/channel.ts`
- `extensions/mattermost/src/config-runtime.ts`
- `extensions/mattermost/src/config-schema-core.ts`
- `extensions/mattermost/src/config-schema.test.ts`
- `extensions/mattermost/src/config-schema.ts`
- `extensions/mattermost/src/dm-policy.contract.test.ts`
- `extensions/mattermost/src/doctor-contract.ts`
- `extensions/mattermost/src/doctor.test.ts`
- `extensions/mattermost/src/doctor.ts`
- `extensions/mattermost/src/gateway-auth-bypass.test.ts`
- `extensions/mattermost/src/gateway-auth-bypass.ts`
- `extensions/mattermost/src/mattermost/accounts.test.ts`
- `extensions/mattermost/src/mattermost/accounts.ts`
- `extensions/mattermost/src/mattermost/client.retry.test.ts`
- `extensions/mattermost/src/mattermost/client.test.ts`
- `extensions/mattermost/src/mattermost/client.ts`
- `extensions/mattermost/src/mattermost/directory.test.ts`
- `extensions/mattermost/src/mattermost/directory.ts`
- `extensions/mattermost/src/mattermost/draft-stream.test.ts`
- `extensions/mattermost/src/mattermost/draft-stream.ts`
- `extensions/mattermost/src/mattermost/index.ts`
- `extensions/mattermost/src/mattermost/interactions.test.ts`
- `extensions/mattermost/src/mattermost/interactions.ts`
- `extensions/mattermost/src/mattermost/model-picker.ts`
- `extensions/mattermost/src/mattermost/monitor-auth.test.ts`
- `extensions/mattermost/src/mattermost/monitor-auth.ts`
- `extensions/mattermost/src/mattermost/monitor-helpers.ts`
- `extensions/mattermost/src/mattermost/monitor-resources.test.ts`
- `extensions/mattermost/src/mattermost/monitor-slash.test.ts`
- ... 38 more paths in `leaf-impact.json`

## `extensions/skill-plugins/feishu`

- Feature: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/feishu`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `86`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/feishu/src/app-registration.ts`
- `extensions/feishu/src/approval-auth.test.ts`
- `extensions/feishu/src/approval-auth.ts`
- `extensions/feishu/src/bitable.ts`
- `extensions/feishu/src/bot-content.ts`
- `extensions/feishu/src/bot-runtime-api.ts`
- `extensions/feishu/src/bot-sender-name.ts`
- `extensions/feishu/src/channel-runtime-api.ts`
- `extensions/feishu/src/chat.test.ts`
- `extensions/feishu/src/chat.ts`
- `extensions/feishu/src/comment-dispatcher-runtime-api.ts`
- `extensions/feishu/src/comment-dispatcher.test.ts`
- `extensions/feishu/src/comment-dispatcher.ts`
- `extensions/feishu/src/comment-handler-runtime-api.ts`
- `extensions/feishu/src/comment-handler.test.ts`
- `extensions/feishu/src/comment-handler.ts`
- `extensions/feishu/src/comment-reaction.test.ts`
- `extensions/feishu/src/comment-reaction.ts`
- `extensions/feishu/src/comment-shared.test.ts`
- `extensions/feishu/src/comment-shared.ts`
- `extensions/feishu/src/comment-target.ts`
- `extensions/feishu/src/conversation-id.test.ts`
- `extensions/feishu/src/conversation-id.ts`
- `extensions/feishu/src/dedup-runtime-api.ts`
- `extensions/feishu/src/dedup.ts`
- `extensions/feishu/src/directory.ts`
- `extensions/feishu/src/drive.test.ts`
- `extensions/feishu/src/drive.ts`
- `extensions/feishu/src/event-types.ts`
- `extensions/feishu/src/external-keys.ts`
- `extensions/feishu/src/feishu-command-handler.ts`
- `extensions/feishu/src/lifecycle.test-support.ts`
- `extensions/feishu/src/media.test.ts`
- `extensions/feishu/src/media.ts`
- `extensions/feishu/src/mention-target.types.ts`
- `extensions/feishu/src/mention.ts`
- `extensions/feishu/src/message-action-contract.ts`
- `extensions/feishu/src/monitor-state-runtime-api.ts`
- `extensions/feishu/src/monitor-transport-runtime-api.ts`
- `extensions/feishu/src/outbound-runtime-api.ts`
- `extensions/feishu/src/outbound.test.ts`
- `extensions/feishu/src/outbound.ts`
- `extensions/feishu/src/perm.ts`
- `extensions/feishu/src/policy.test.ts`
- `extensions/feishu/src/policy.ts`
- `extensions/feishu/src/post.ts`
- `extensions/feishu/src/probe.test.ts`
- `extensions/feishu/src/probe.ts`
- `extensions/feishu/src/processing-claims.ts`
- `extensions/feishu/src/qr-terminal.ts`
- ... 36 more paths in `leaf-impact.json`

## `packages/shared-packages`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/packages/shared-packages`
- Coverage: `fallback`
- Changed paths: `85`
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
- `packages/memory-host-sdk/src/host/batch-embedding-common.ts`
- `packages/memory-host-sdk/src/host/batch-error-utils.ts`
- `packages/memory-host-sdk/src/host/batch-gemini.test.ts`
- `packages/memory-host-sdk/src/host/batch-gemini.ts`
- `packages/memory-host-sdk/src/host/batch-http.test.ts`
- `packages/memory-host-sdk/src/host/batch-openai.ts`
- `packages/memory-host-sdk/src/host/batch-voyage.test.ts`
- `packages/memory-host-sdk/src/host/batch-voyage.ts`
- `packages/memory-host-sdk/src/host/embedding-model-limits.ts`
- `packages/memory-host-sdk/src/host/embeddings-gemini.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-gemini.ts`
- `packages/memory-host-sdk/src/host/embeddings-mistral.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-mistral.ts`
- `packages/memory-host-sdk/src/host/embeddings-ollama.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-ollama.ts`
- `packages/memory-host-sdk/src/host/embeddings-openai.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-client.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-fetch.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-voyage.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-voyage.ts`
- `packages/memory-host-sdk/src/host/embeddings.test.ts`
- `packages/memory-host-sdk/src/host/embeddings.ts`
- `packages/memory-host-sdk/src/host/internal.test.ts`
- `packages/memory-host-sdk/src/host/internal.ts`
- `packages/memory-host-sdk/src/host/memory-schema.ts`
- `packages/memory-host-sdk/src/host/multimodal.ts`
- `packages/memory-host-sdk/src/host/node-llama.ts`
- `packages/memory-host-sdk/src/host/post-json.test.ts`
- `packages/memory-host-sdk/src/host/qmd-process.test.ts`
- `packages/memory-host-sdk/src/host/qmd-process.ts`
- `packages/memory-host-sdk/src/host/qmd-query-parser.test.ts`
- `packages/memory-host-sdk/src/host/qmd-query-parser.ts`
- `packages/memory-host-sdk/src/host/qmd-scope.test.ts`
- `packages/memory-host-sdk/src/host/qmd-scope.ts`
- `packages/memory-host-sdk/src/host/query-expansion.test.ts`
- `packages/memory-host-sdk/src/host/query-expansion.ts`
- `packages/memory-host-sdk/src/host/read-file.ts`
- `packages/memory-host-sdk/src/host/secret-input.ts`
- `packages/memory-host-sdk/src/host/session-files.test.ts`
- `packages/memory-host-sdk/src/host/session-files.ts`
- `packages/memory-host-sdk/src/host/sqlite-vec.ts`
- `packages/memory-host-sdk/src/host/sqlite.ts`
- `packages/memory-host-sdk/src/host/test-helpers/ssrf.ts`
- ... 35 more paths in `leaf-impact.json`

## `ui/web-ui/components`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/components`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `83`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/src/ui/app-chat.test.ts`
- `ui/src/ui/app-chat.ts`
- `ui/src/ui/app-render.helpers.browser.test.ts`
- `ui/src/ui/app-render.helpers.node.test.ts`
- `ui/src/ui/app-render.helpers.ts`
- `ui/src/ui/app-render.ts`
- `ui/src/ui/app.ts`
- `ui/src/ui/chat/build-chat-items.ts`
- `ui/src/ui/chat/context-notice.ts`
- `ui/src/ui/chat/grouped-render.ts`
- `ui/src/ui/chat/message-extract.ts`
- `ui/src/ui/chat/message-normalizer.ts`
- `ui/src/ui/chat/realtime-talk.ts`
- `ui/src/ui/chat/run-controls.ts`
- `ui/src/ui/chat/search-match.ts`
- `ui/src/ui/chat/session-controls.ts`
- `ui/src/ui/chat/side-result-render.ts`
- `ui/src/ui/chat/side-result.ts`
- `ui/src/ui/chat/slash-command-executor.ts`
- `ui/src/ui/chat/slash-commands.ts`
- `ui/src/ui/chat/status-indicators.ts`
- `ui/src/ui/chat/tool-cards.ts`
- `ui/src/ui/chat/tool-expansion-state.ts`
- `ui/src/ui/components/dashboard-header.ts`
- `ui/src/ui/components/resizable-divider.ts`
- `ui/src/ui/controllers/agents.test.ts`
- `ui/src/ui/controllers/agents.ts`
- `ui/src/ui/controllers/chat.test.ts`
- `ui/src/ui/controllers/chat.ts`
- `ui/src/ui/controllers/config/form-utils.node.test.ts`
- `ui/src/ui/controllers/config/form-utils.ts`
- `ui/src/ui/controllers/control-ui-bootstrap.test.ts`
- `ui/src/ui/controllers/control-ui-bootstrap.ts`
- `ui/src/ui/controllers/cron.test.ts`
- `ui/src/ui/controllers/cron.ts`
- `ui/src/ui/controllers/devices.ts`
- `ui/src/ui/controllers/dreaming.test.ts`
- `ui/src/ui/controllers/dreaming.ts`
- `ui/src/ui/controllers/exec-approval.ts`
- `ui/src/ui/controllers/logs.ts`
- `ui/src/ui/controllers/model-auth-status.ts`
- `ui/src/ui/controllers/sessions.test.ts`
- `ui/src/ui/controllers/sessions.ts`
- `ui/src/ui/controllers/skills.test.ts`
- `ui/src/ui/controllers/skills.ts`
- `ui/src/ui/controllers/usage.node.test.ts`
- `ui/src/ui/controllers/usage.ts`
- `ui/src/ui/storage.node.test.ts`
- `ui/src/ui/storage.ts`
- `ui/src/ui/views/agents-panels-overview.ts`
- ... 33 more paths in `leaf-impact.json`

## `extensions/channel-plugins/feishu`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/feishu`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `82`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/feishu/api.ts`
- `extensions/feishu/channel-entry.ts`
- `extensions/feishu/channel-plugin-api.ts`
- `extensions/feishu/contract-api.ts`
- `extensions/feishu/index.ts`
- `extensions/feishu/openclaw.plugin.json`
- `extensions/feishu/package-manifest.contract.test.ts`
- `extensions/feishu/package.json`
- `extensions/feishu/runtime-api.ts`
- `extensions/feishu/secret-contract-api.ts`
- `extensions/feishu/security-contract-api.ts`
- `extensions/feishu/session-key-api.ts`
- `extensions/feishu/setup-api.ts`
- `extensions/feishu/setup-entry.test.ts`
- `extensions/feishu/setup-entry.ts`
- `extensions/feishu/src/accounts.test.ts`
- `extensions/feishu/src/accounts.ts`
- `extensions/feishu/src/bot.broadcast.test.ts`
- `extensions/feishu/src/bot.card-action.test.ts`
- `extensions/feishu/src/bot.test.ts`
- `extensions/feishu/src/bot.ts`
- `extensions/feishu/src/card-action.ts`
- `extensions/feishu/src/card-interaction.ts`
- `extensions/feishu/src/card-test-helpers.ts`
- `extensions/feishu/src/card-ux-approval.ts`
- `extensions/feishu/src/card-ux-launcher.test.ts`
- `extensions/feishu/src/card-ux-launcher.ts`
- `extensions/feishu/src/channel.test.ts`
- `extensions/feishu/src/channel.ts`
- `extensions/feishu/src/chat-schema.ts`
- `extensions/feishu/src/client.test.ts`
- `extensions/feishu/src/client.ts`
- `extensions/feishu/src/config-schema.ts`
- `extensions/feishu/src/doc-schema.ts`
- `extensions/feishu/src/docx-batch-insert.test.ts`
- `extensions/feishu/src/docx-batch-insert.ts`
- `extensions/feishu/src/docx-color-text.ts`
- `extensions/feishu/src/docx-table-ops.ts`
- `extensions/feishu/src/docx.account-selection.test.ts`
- `extensions/feishu/src/docx.test.ts`
- `extensions/feishu/src/docx.ts`
- `extensions/feishu/src/drive-schema.ts`
- `extensions/feishu/src/monitor.account.ts`
- `extensions/feishu/src/monitor.acp-init-failure.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.acp-init-failure.lifecycle.test.ts`
- `extensions/feishu/src/monitor.bot-identity.ts`
- `extensions/feishu/src/monitor.bot-menu-handler.ts`
- `extensions/feishu/src/monitor.bot-menu.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.bot-menu.lifecycle.test.ts`
- `extensions/feishu/src/monitor.bot-menu.test.ts`
- ... 32 more paths in `leaf-impact.json`

## `src/gateway-api-surface/server-methods`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/server-methods`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `81`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/gateway/server-methods.control-plane-rate-limit.test.ts`
- `src/gateway/server-methods.ts`
- `src/gateway/server-methods/agent-job.ts`
- `src/gateway/server-methods/agent-timestamp.ts`
- `src/gateway/server-methods/agent-wait-dedupe.ts`
- `src/gateway/server-methods/agent.create-event.test.ts`
- `src/gateway/server-methods/agent.test.ts`
- `src/gateway/server-methods/agent.ts`
- `src/gateway/server-methods/agents-mutate.test.ts`
- `src/gateway/server-methods/agents.ts`
- `src/gateway/server-methods/approval-shared.ts`
- `src/gateway/server-methods/channels.start.test.ts`
- `src/gateway/server-methods/channels.status.test.ts`
- `src/gateway/server-methods/channels.ts`
- `src/gateway/server-methods/chat-transcript-inject.ts`
- `src/gateway/server-methods/chat-webchat-media.test.ts`
- `src/gateway/server-methods/chat-webchat-media.ts`
- `src/gateway/server-methods/chat.abort-persistence.test.ts`
- `src/gateway/server-methods/chat.directive-tags.test.ts`
- `src/gateway/server-methods/chat.send-deleted-agent.test.ts`
- `src/gateway/server-methods/chat.ts`
- `src/gateway/server-methods/commands.test.ts`
- `src/gateway/server-methods/commands.ts`
- `src/gateway/server-methods/config.shared-auth.test.ts`
- `src/gateway/server-methods/config.test-helpers.ts`
- `src/gateway/server-methods/config.test.ts`
- `src/gateway/server-methods/config.ts`
- `src/gateway/server-methods/cron.ts`
- `src/gateway/server-methods/cron.validation.test.ts`
- `src/gateway/server-methods/deleted-agent-guard.test-helpers.ts`
- `src/gateway/server-methods/devices.test.ts`
- `src/gateway/server-methods/devices.ts`
- `src/gateway/server-methods/diagnostics.test.ts`
- `src/gateway/server-methods/diagnostics.ts`
- `src/gateway/server-methods/doctor.memory-core-runtime.ts`
- `src/gateway/server-methods/doctor.test.ts`
- `src/gateway/server-methods/doctor.ts`
- `src/gateway/server-methods/exec-approval.ts`
- `src/gateway/server-methods/logs.ts`
- `src/gateway/server-methods/models-auth-status.test.ts`
- `src/gateway/server-methods/models-auth-status.ts`
- `src/gateway/server-methods/native-hook-relay.test.ts`
- `src/gateway/server-methods/native-hook-relay.ts`
- `src/gateway/server-methods/nodes.helpers.ts`
- `src/gateway/server-methods/nodes.invoke-wake.test.ts`
- `src/gateway/server-methods/nodes.ts`
- `src/gateway/server-methods/plugin-approval.test.ts`
- `src/gateway/server-methods/plugin-approval.ts`
- `src/gateway/server-methods/push.ts`
- `src/gateway/server-methods/record-shared.ts`
- ... 31 more paths in `leaf-impact.json`

## `extensions/memory-media-voice-plugins/voice-call`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/voice-call`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `80`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/voice-call/CHANGELOG.md`
- `extensions/voice-call/README.md`
- `extensions/voice-call/cli-metadata.ts`
- `extensions/voice-call/config-api.ts`
- `extensions/voice-call/index.test.ts`
- `extensions/voice-call/index.ts`
- `extensions/voice-call/openclaw.plugin.json`
- `extensions/voice-call/package-manifest.contract.test.ts`
- `extensions/voice-call/package.json`
- `extensions/voice-call/setup-api.ts`
- `extensions/voice-call/src/cli.ts`
- `extensions/voice-call/src/config-compat.test.ts`
- `extensions/voice-call/src/config-compat.ts`
- `extensions/voice-call/src/config.test.ts`
- `extensions/voice-call/src/config.ts`
- `extensions/voice-call/src/http-headers.ts`
- `extensions/voice-call/src/manager.closed-loop.test.ts`
- `extensions/voice-call/src/manager.inbound-allowlist.test.ts`
- `extensions/voice-call/src/manager.notify.test.ts`
- `extensions/voice-call/src/manager.restore.test.ts`
- `extensions/voice-call/src/manager.test-harness.ts`
- `extensions/voice-call/src/manager.ts`
- `extensions/voice-call/src/manager/events.test.ts`
- `extensions/voice-call/src/manager/events.ts`
- `extensions/voice-call/src/manager/outbound.test.ts`
- `extensions/voice-call/src/manager/outbound.ts`
- `extensions/voice-call/src/manager/store.ts`
- `extensions/voice-call/src/manager/timers.ts`
- `extensions/voice-call/src/media-stream.test.ts`
- `extensions/voice-call/src/media-stream.ts`
- `extensions/voice-call/src/providers/base.ts`
- `extensions/voice-call/src/providers/index.ts`
- `extensions/voice-call/src/providers/mock.ts`
- `extensions/voice-call/src/providers/plivo.test.ts`
- `extensions/voice-call/src/providers/plivo.ts`
- `extensions/voice-call/src/providers/shared/call-status.ts`
- `extensions/voice-call/src/providers/stt-openai-realtime.test.ts`
- `extensions/voice-call/src/providers/stt-openai-realtime.ts`
- `extensions/voice-call/src/providers/telnyx.test.ts`
- `extensions/voice-call/src/providers/telnyx.ts`
- `extensions/voice-call/src/providers/tts-openai.test.ts`
- `extensions/voice-call/src/providers/tts-openai.ts`
- `extensions/voice-call/src/providers/twilio.test.ts`
- `extensions/voice-call/src/providers/twilio.ts`
- `extensions/voice-call/src/providers/twilio.types.ts`
- `extensions/voice-call/src/providers/twilio/api.test.ts`
- `extensions/voice-call/src/providers/twilio/api.ts`
- `extensions/voice-call/src/providers/twilio/twiml-policy.ts`
- `extensions/voice-call/src/providers/twilio/webhook.ts`
- `extensions/voice-call/src/realtime-defaults.ts`
- ... 30 more paths in `leaf-impact.json`

## `src/config-secrets-security/security-guards`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/security-guards`
- Coverage: `verified`
- Changed paths: `78`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/net/ssrf.dispatcher.test.ts`
- `src/infra/net/ssrf.test.ts`
- `src/infra/net/ssrf.ts`
- `src/security/audit-channel-account-metadata.test.ts`
- `src/security/audit-channel-dm-policy.test.ts`
- `src/security/audit-channel-readonly-resolution.test.ts`
- `src/security/audit-channel-security.test-helpers.ts`
- `src/security/audit-channel-source-config-discord.test.ts`
- `src/security/audit-channel-source-config-slack.test.ts`
- `src/security/audit-channel-test-helpers.ts`
- `src/security/audit-channel.allow-from.runtime.ts`
- `src/security/audit-channel.discord.runtime.ts`
- `src/security/audit-channel.telegram.runtime.ts`
- `src/security/audit-channel.ts`
- `src/security/audit-channel.zalouser.runtime.ts`
- `src/security/audit-config-basics.test.ts`
- `src/security/audit-config-include-perms.test.ts`
- `src/security/audit-config-symlink.test.ts`
- `src/security/audit-deep-code-safety.ts`
- `src/security/audit-deep-probe-findings.ts`
- `src/security/audit-exec-safe-bins.test.ts`
- `src/security/audit-exec-sandbox-host.test.ts`
- `src/security/audit-exec-surface.test.ts`
- `src/security/audit-extra.async.test.ts`
- `src/security/audit-extra.async.ts`
- `src/security/audit-extra.summary.ts`
- `src/security/audit-extra.sync.test.ts`
- `src/security/audit-extra.sync.ts`
- `src/security/audit-extra.ts`
- `src/security/audit-filesystem-windows.test.ts`
- `src/security/audit-gateway-auth-selection.test.ts`
- `src/security/audit-gateway-config.ts`
- `src/security/audit-gateway-exposure.test.ts`
- `src/security/audit-gateway-http-auth.test.ts`
- `src/security/audit-gateway-tools-http.test.ts`
- `src/security/audit-gateway.test.ts`
- `src/security/audit-hooks-routing.test.ts`
- `src/security/audit-loopback-logging.test.ts`
- `src/security/audit-model-hygiene.test.ts`
- `src/security/audit-node-command-findings.test.ts`
- `src/security/audit-plugin-code-safety.test.ts`
- `src/security/audit-plugin-readonly-scope.test.ts`
- `src/security/audit-plugins-trust.test.ts`
- `src/security/audit-plugins-trust.ts`
- `src/security/audit-probe-failure.test.ts`
- `src/security/audit-sandbox-browser.test.ts`
- `src/security/audit-sandbox-docker-config.test.ts`
- `src/security/audit-small-model-risk.test.ts`
- `src/security/audit-summary.test.ts`
- `src/security/audit-synced-folder.test.ts`
- ... 28 more paths in `leaf-impact.json`

## `src/shared-misc-runtime-support/startup-process`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/startup-process`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `77`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/daemon/constants.test.ts`
- `src/daemon/constants.ts`
- `src/daemon/container-context.ts`
- `src/daemon/diagnostics.ts`
- `src/daemon/exec-file.ts`
- `src/daemon/gateway-entrypoint.ts`
- `src/daemon/inspect.test.ts`
- `src/daemon/inspect.ts`
- `src/daemon/launchd-restart-handoff.test.ts`
- `src/daemon/launchd-restart-handoff.ts`
- `src/daemon/launchd.integration.e2e.test.ts`
- `src/daemon/launchd.test.ts`
- `src/daemon/launchd.ts`
- `src/daemon/paths.ts`
- `src/daemon/program-args.test.ts`
- `src/daemon/program-args.ts`
- `src/daemon/restart-logs.test.ts`
- `src/daemon/restart-logs.ts`
- `src/daemon/runtime-binary.ts`
- `src/daemon/runtime-hints.test.ts`
- `src/daemon/runtime-hints.ts`
- `src/daemon/runtime-hints.windows-paths.test.ts`
- `src/daemon/runtime-parse.ts`
- `src/daemon/runtime-paths.test.ts`
- `src/daemon/runtime-paths.ts`
- `src/daemon/schtasks-exec.test.ts`
- `src/daemon/schtasks-exec.ts`
- `src/daemon/schtasks.install.test.ts`
- `src/daemon/schtasks.startup-fallback.test.ts`
- `src/daemon/schtasks.stop.test.ts`
- `src/daemon/schtasks.ts`
- `src/daemon/service-audit.ts`
- `src/daemon/service-env.test.ts`
- `src/daemon/service-env.ts`
- `src/daemon/service-types.ts`
- `src/daemon/service.ts`
- `src/daemon/systemd-linger.ts`
- `src/daemon/systemd-unavailable.ts`
- `src/daemon/systemd-unit.test.ts`
- `src/daemon/systemd-unit.ts`
- `src/daemon/systemd.test.ts`
- `src/daemon/systemd.ts`
- `src/node-host/config.ts`
- `src/node-host/exec-policy.test.ts`
- `src/node-host/exec-policy.ts`
- `src/node-host/invoke-system-run-allowlist.ts`
- `src/node-host/invoke-system-run-plan.test.ts`
- `src/node-host/invoke-system-run-plan.ts`
- `src/node-host/invoke-system-run.test.ts`
- `src/node-host/invoke-system-run.ts`
- ... 27 more paths in `leaf-impact.json`

## `test-infra/profiles-and-suites/test-scripts`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/test-scripts`
- Coverage: `fallback`
- Changed paths: `77`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `qa/README.md`
- `qa/convex-credential-broker/.gitignore`
- `qa/convex-credential-broker/README.md`
- `qa/convex-credential-broker/convex.json`
- `qa/convex-credential-broker/convex/credentials.ts`
- `qa/convex-credential-broker/convex/crons.ts`
- `qa/convex-credential-broker/convex/http.ts`
- `qa/convex-credential-broker/convex/payload-validation.ts`
- `qa/convex-credential-broker/convex/schema.ts`
- `qa/convex-credential-broker/convex/tsconfig.json`
- `qa/convex-credential-broker/package.json`
- `qa/frontier-harness-plan.md`
- `qa/new-scenarios-2026-04.md`
- `qa/scenarios.md`
- `qa/scenarios/agents/instruction-followthrough-repo-contract.md`
- `qa/scenarios/agents/subagent-fanout-synthesis.md`
- `qa/scenarios/agents/subagent-forked-context.md`
- `qa/scenarios/agents/subagent-handoff.md`
- `qa/scenarios/agents/subagent-stale-child-links.md`
- `qa/scenarios/channels/channel-chat-baseline.md`
- `qa/scenarios/channels/dm-chat-baseline.md`
- `qa/scenarios/channels/qa-channel-reconnect-dedupe.md`
- `qa/scenarios/channels/reaction-edit-delete.md`
- `qa/scenarios/channels/thread-follow-up.md`
- `qa/scenarios/character/character-vibes-c3po.md`
- `qa/scenarios/character/character-vibes-gollum.md`
- `qa/scenarios/config/config-apply-restart-wakeup.md`
- `qa/scenarios/config/config-patch-hot-apply.md`
- `qa/scenarios/config/config-restart-capability-flip.md`
- `qa/scenarios/index.md`
- `qa/scenarios/media/image-generation-roundtrip.md`
- `qa/scenarios/media/image-understanding-attachment.md`
- `qa/scenarios/media/native-image-generation.md`
- `qa/scenarios/memory/active-memory-preprompt-recall.md`
- `qa/scenarios/memory/memory-dreaming-sweep.md`
- `qa/scenarios/memory/memory-failure-fallback.md`
- `qa/scenarios/memory/memory-recall.md`
- `qa/scenarios/memory/memory-tools-channel-context.md`
- `qa/scenarios/memory/session-memory-ranking.md`
- `qa/scenarios/memory/thread-memory-isolation.md`
- `qa/scenarios/models/anthropic-opus-api-key-smoke.md`
- `qa/scenarios/models/anthropic-opus-setup-token-smoke.md`
- `qa/scenarios/models/claude-cli-provider-capabilities-subscription.md`
- `qa/scenarios/models/claude-cli-provider-capabilities.md`
- `qa/scenarios/models/codex-harness-no-meta-leak.md`
- `qa/scenarios/models/gpt54-thinking-visibility-switch.md`
- `qa/scenarios/models/model-switch-follow-up.md`
- `qa/scenarios/models/model-switch-tool-continuity.md`
- `qa/scenarios/models/openai-native-web-search-live.md`
- `qa/scenarios/models/thinking-slash-model-remap.md`
- ... 27 more paths in `leaf-impact.json`

## `src/agent-runtime/runtime/command-session-store`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/command-session-store`
- Coverage: `verified`
- Changed paths: `74`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/command/attempt-execution.cli.test.ts`
- `src/agents/command/attempt-execution.helpers.ts`
- `src/agents/command/attempt-execution.runtime.ts`
- `src/agents/command/attempt-execution.shared.ts`
- `src/agents/command/attempt-execution.test.ts`
- `src/agents/command/attempt-execution.ts`
- `src/agents/command/delivery.runtime.ts`
- `src/agents/command/delivery.test.ts`
- `src/agents/command/delivery.ts`
- `src/agents/command/session-store.runtime.ts`
- `src/agents/command/session-store.test.ts`
- `src/agents/command/session-store.ts`
- `src/agents/command/session.resolve-session-key.test.ts`
- `src/agents/command/session.ts`
- `src/agents/command/shared-types.ts`
- `src/agents/command/types.ts`
- `src/tasks/detached-task-runtime-contract.ts`
- `src/tasks/detached-task-runtime-state.ts`
- `src/tasks/detached-task-runtime.test.ts`
- `src/tasks/detached-task-runtime.ts`
- `src/tasks/import-boundary.test-helpers.ts`
- `src/tasks/runtime-internal.ts`
- `src/tasks/task-boundaries.test.ts`
- `src/tasks/task-domain-views.ts`
- `src/tasks/task-executor-policy.test.ts`
- `src/tasks/task-executor-policy.ts`
- `src/tasks/task-executor.test.ts`
- `src/tasks/task-executor.ts`
- `src/tasks/task-flow-owner-access.test.ts`
- `src/tasks/task-flow-owner-access.ts`
- `src/tasks/task-flow-registry.audit.test.ts`
- `src/tasks/task-flow-registry.audit.ts`
- `src/tasks/task-flow-registry.maintenance.test.ts`
- `src/tasks/task-flow-registry.maintenance.ts`
- `src/tasks/task-flow-registry.paths.ts`
- `src/tasks/task-flow-registry.store.sqlite.ts`
- `src/tasks/task-flow-registry.store.test.ts`
- `src/tasks/task-flow-registry.store.ts`
- `src/tasks/task-flow-registry.store.types.ts`
- `src/tasks/task-flow-registry.test.ts`
- `src/tasks/task-flow-registry.ts`
- `src/tasks/task-flow-registry.types.ts`
- `src/tasks/task-flow-runtime-internal.ts`
- `src/tasks/task-owner-access.test.ts`
- `src/tasks/task-owner-access.ts`
- `src/tasks/task-registry-control.runtime.ts`
- `src/tasks/task-registry-control.types.ts`
- `src/tasks/task-registry-delivery-runtime.ts`
- `src/tasks/task-registry.audit.shared.ts`
- `src/tasks/task-registry.audit.test.ts`
- ... 24 more paths in `leaf-impact.json`

## `extensions/channel-plugins/imessage`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/imessage`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `73`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/imessage/api.ts`
- `extensions/imessage/channel-plugin-api.ts`
- `extensions/imessage/config-api.ts`
- `extensions/imessage/contract-api.ts`
- `extensions/imessage/doctor-contract-api.ts`
- `extensions/imessage/index.ts`
- `extensions/imessage/media-contract-api.ts`
- `extensions/imessage/package.json`
- `extensions/imessage/runtime-api.ts`
- `extensions/imessage/secret-contract-api.ts`
- `extensions/imessage/setup-entry.ts`
- `extensions/imessage/src/account-types.ts`
- `extensions/imessage/src/accounts.test.ts`
- `extensions/imessage/src/accounts.ts`
- `extensions/imessage/src/channel-api.ts`
- `extensions/imessage/src/channel-inbound-roots.contract.test.ts`
- `extensions/imessage/src/channel.outbound.test.ts`
- `extensions/imessage/src/channel.runtime.ts`
- `extensions/imessage/src/channel.setup.ts`
- `extensions/imessage/src/channel.ts`
- `extensions/imessage/src/client.ts`
- `extensions/imessage/src/config-accessors.test.ts`
- `extensions/imessage/src/config-accessors.ts`
- `extensions/imessage/src/config-schema.test.ts`
- `extensions/imessage/src/config-schema.ts`
- `extensions/imessage/src/conversation-bindings.ts`
- `extensions/imessage/src/conversation-id-core.ts`
- `extensions/imessage/src/conversation-id.ts`
- `extensions/imessage/src/conversation-route.test.ts`
- `extensions/imessage/src/conversation-route.ts`
- `extensions/imessage/src/group-policy.contract.test.ts`
- `extensions/imessage/src/imessage.test-plugin.ts`
- `extensions/imessage/src/media-contract.ts`
- `extensions/imessage/src/monitor.gating.test.ts`
- `extensions/imessage/src/monitor.watch-subscribe-retry.test.ts`
- `extensions/imessage/src/monitor/deliver.runtime.ts`
- `extensions/imessage/src/monitor/deliver.test.ts`
- `extensions/imessage/src/monitor/deliver.ts`
- `extensions/imessage/src/monitor/echo-cache.ts`
- `extensions/imessage/src/monitor/inbound-processing.test.ts`
- `extensions/imessage/src/monitor/inbound-processing.ts`
- `extensions/imessage/src/monitor/monitor-provider.ts`
- `extensions/imessage/src/monitor/parse-notification.test.ts`
- `extensions/imessage/src/monitor/parse-notification.ts`
- `extensions/imessage/src/monitor/self-chat-dedupe.test.ts`
- `extensions/imessage/src/monitor/strip-imsg-length-prefixed-text.test.ts`
- `extensions/imessage/src/monitor/strip-imsg-length-prefixed-text.ts`
- `extensions/imessage/src/monitor/types.ts`
- `extensions/imessage/src/monitor/watch-error-log.test.ts`
- `extensions/imessage/src/monitor/watch-error-log.ts`
- ... 23 more paths in `leaf-impact.json`

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
- `src/memory-host-sdk/events.ts`
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

## `src/cli-commands/command-implementations/auth-provider-commands`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/auth-provider-commands`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `70`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/commands/auth-choice-legacy.test.ts`
- `src/commands/auth-choice-legacy.ts`
- `src/commands/auth-choice-options.static.ts`
- `src/commands/auth-choice-options.test.ts`
- `src/commands/auth-choice-options.ts`
- `src/commands/auth-choice-prompt.ts`
- `src/commands/auth-choice.api-key.ts`
- `src/commands/auth-choice.apply-helpers.test.ts`
- `src/commands/auth-choice.apply-helpers.ts`
- `src/commands/auth-choice.apply.api-providers.test.ts`
- `src/commands/auth-choice.apply.api-providers.ts`
- `src/commands/auth-choice.apply.oauth.ts`
- `src/commands/auth-choice.apply.plugin-provider.runtime.ts`
- `src/commands/auth-choice.apply.plugin-provider.test.ts`
- `src/commands/auth-choice.apply.plugin-provider.ts`
- `src/commands/auth-choice.apply.ts`
- `src/commands/auth-choice.apply.types.ts`
- `src/commands/auth-choice.default-model.ts`
- `src/commands/auth-choice.model-check.ts`
- `src/commands/auth-choice.moonshot.test.ts`
- `src/commands/auth-choice.preferred-provider.test.ts`
- `src/commands/auth-choice.test.ts`
- `src/commands/auth-token.ts`
- `src/commands/chutes-oauth.ts`
- `src/commands/doctor-auth-legacy-oauth.ts`
- `src/commands/model-default.ts`
- `src/commands/model-picker.test.ts`
- `src/commands/models.list.auth-sync.test.ts`
- `src/commands/models.list.e2e.test.ts`
- `src/commands/models.set.e2e.test.ts`
- `src/commands/models/alias-name.ts`
- `src/commands/models/auth-order.ts`
- `src/commands/models/auth.test.ts`
- `src/commands/models/auth.ts`
- `src/commands/models/fallbacks-shared.ts`
- `src/commands/models/list.auth-overview.test.ts`
- `src/commands/models/list.auth-overview.ts`
- `src/commands/models/list.configured.test.ts`
- `src/commands/models/list.configured.ts`
- `src/commands/models/list.format.ts`
- `src/commands/models/list.list-command.forward-compat.test.ts`
- `src/commands/models/list.list-command.ts`
- `src/commands/models/list.local-url.ts`
- `src/commands/models/list.model-row.test.ts`
- `src/commands/models/list.model-row.ts`
- `src/commands/models/list.probe.targets.test.ts`
- `src/commands/models/list.probe.test.ts`
- `src/commands/models/list.probe.ts`
- `src/commands/models/list.provider-catalog.test.ts`
- `src/commands/models/list.provider-catalog.ts`
- ... 20 more paths in `leaf-impact.json`

## `extensions/channel-plugins/line`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/line`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `69`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/line/api.ts`
- `extensions/line/channel-plugin-api.ts`
- `extensions/line/contract-api.ts`
- `extensions/line/index.ts`
- `extensions/line/openclaw.plugin.json`
- `extensions/line/package-manifest.contract.test.ts`
- `extensions/line/package.json`
- `extensions/line/runtime-api.ts`
- `extensions/line/secret-contract-api.ts`
- `extensions/line/setup-entry.ts`
- `extensions/line/src/accounts.test.ts`
- `extensions/line/src/accounts.ts`
- `extensions/line/src/auto-reply-delivery.test.ts`
- `extensions/line/src/auto-reply-delivery.ts`
- `extensions/line/src/bindings.ts`
- `extensions/line/src/bot-handlers.test.ts`
- `extensions/line/src/bot-handlers.ts`
- `extensions/line/src/bot-message-context.test.ts`
- `extensions/line/src/bot-message-context.ts`
- `extensions/line/src/bot.ts`
- `extensions/line/src/card-command.ts`
- `extensions/line/src/channel-api.ts`
- `extensions/line/src/channel-setup-status.contract.test.ts`
- `extensions/line/src/channel-shared.ts`
- `extensions/line/src/channel.logout.test.ts`
- `extensions/line/src/channel.runtime.ts`
- `extensions/line/src/channel.sendPayload.test.ts`
- `extensions/line/src/channel.setup.ts`
- `extensions/line/src/channel.status.test.ts`
- `extensions/line/src/channel.ts`
- `extensions/line/src/config-adapter.ts`
- `extensions/line/src/config-schema.ts`
- `extensions/line/src/download.test.ts`
- `extensions/line/src/download.ts`
- `extensions/line/src/gateway.ts`
- `extensions/line/src/group-keys.test.ts`
- `extensions/line/src/group-keys.ts`
- `extensions/line/src/group-policy.ts`
- `extensions/line/src/markdown-to-line.test.ts`
- `extensions/line/src/monitor.lifecycle.test.ts`
- `extensions/line/src/monitor.runtime.ts`
- `extensions/line/src/monitor.ts`
- `extensions/line/src/outbound-media.test.ts`
- `extensions/line/src/outbound-media.ts`
- `extensions/line/src/outbound.runtime.ts`
- `extensions/line/src/outbound.ts`
- `extensions/line/src/plugins-core.contract.test.ts`
- `extensions/line/src/probe.contract.test.ts`
- `extensions/line/src/probe.runtime.ts`
- `extensions/line/src/probe.ts`
- ... 19 more paths in `leaf-impact.json`

## `extensions/channel-plugins/signal`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/signal`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `69`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/signal/api.ts`
- `extensions/signal/channel-entry.ts`
- `extensions/signal/channel-plugin-api.ts`
- `extensions/signal/config-api.ts`
- `extensions/signal/contract-api.ts`
- `extensions/signal/index.ts`
- `extensions/signal/package.json`
- `extensions/signal/runtime-api.ts`
- `extensions/signal/secret-contract-api.ts`
- `extensions/signal/setup-entry.ts`
- `extensions/signal/src/account-types.ts`
- `extensions/signal/src/accounts.test.ts`
- `extensions/signal/src/accounts.ts`
- `extensions/signal/src/approval-auth.test.ts`
- `extensions/signal/src/approval-auth.ts`
- `extensions/signal/src/channel.setup.ts`
- `extensions/signal/src/channel.ts`
- `extensions/signal/src/client.test.ts`
- `extensions/signal/src/client.ts`
- `extensions/signal/src/config-schema.test.ts`
- `extensions/signal/src/config-schema.ts`
- `extensions/signal/src/core.test.ts`
- `extensions/signal/src/daemon.ts`
- `extensions/signal/src/dm-policy.contract.test.ts`
- `extensions/signal/src/format.ts`
- `extensions/signal/src/identity.ts`
- `extensions/signal/src/inbound-context.contract.test.ts`
- `extensions/signal/src/inbound.contract.test.ts`
- `extensions/signal/src/index.ts`
- `extensions/signal/src/install-signal-cli.test.ts`
- `extensions/signal/src/install-signal-cli.ts`
- `extensions/signal/src/message-actions.test.ts`
- `extensions/signal/src/message-actions.ts`
- `extensions/signal/src/monitor.tool-result.autostart.test.ts`
- `extensions/signal/src/monitor.tool-result.pairs-uuid-only-senders-uuid-allowlist-entry.test.ts`
- `extensions/signal/src/monitor.tool-result.sends-tool-summaries-responseprefix.test.ts`
- `extensions/signal/src/monitor.tool-result.test-harness.ts`
- `extensions/signal/src/monitor.ts`
- `extensions/signal/src/monitor/event-handler.inbound-context.test.ts`
- `extensions/signal/src/monitor/event-handler.mention-gating.test.ts`
- `extensions/signal/src/monitor/event-handler.silent-ingest.test.ts`
- `extensions/signal/src/monitor/event-handler.test-harness.ts`
- `extensions/signal/src/monitor/event-handler.ts`
- `extensions/signal/src/monitor/event-handler.types.ts`
- `extensions/signal/src/monitor/inbound-context.ts`
- `extensions/signal/src/normalize.test.ts`
- `extensions/signal/src/normalize.ts`
- `extensions/signal/src/outbound-adapter.ts`
- `extensions/signal/src/outbound-session.ts`
- `extensions/signal/src/outbound.test.ts`
- ... 19 more paths in `leaf-impact.json`

## `extensions/provider-plugins/google`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/google`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `69`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/google/api.test.ts`
- `extensions/google/api.ts`
- `extensions/google/bundled-web-search.contract.test.ts`
- `extensions/google/cli-backend.ts`
- `extensions/google/default-model.test.ts`
- `extensions/google/embedding-batch.ts`
- `extensions/google/embedding-provider.test.ts`
- `extensions/google/embedding-provider.ts`
- `extensions/google/gemini-auth.ts`
- `extensions/google/gemini-cli-provider.ts`
- `extensions/google/generation-provider-metadata.ts`
- `extensions/google/google-genai-runtime.ts`
- `extensions/google/google-shared.test.ts`
- `extensions/google/google.live.test.ts`
- `extensions/google/image-generation-provider.test.ts`
- `extensions/google/image-generation-provider.ts`
- `extensions/google/index.test.ts`
- `extensions/google/index.ts`
- `extensions/google/media-understanding-provider.ts`
- `extensions/google/media-understanding-provider.video.test.ts`
- `extensions/google/memory-embedding-adapter.ts`
- `extensions/google/model-id.test.ts`
- `extensions/google/music-generation-provider.test.ts`
- `extensions/google/music-generation-provider.ts`
- `extensions/google/oauth-token-shared.test.ts`
- `extensions/google/oauth-token-shared.ts`
- `extensions/google/oauth.credentials.ts`
- `extensions/google/oauth.flow.ts`
- `extensions/google/oauth.project.ts`
- `extensions/google/oauth.settings.ts`
- `extensions/google/oauth.shared.ts`
- `extensions/google/oauth.test.ts`
- `extensions/google/oauth.token.ts`
- `extensions/google/oauth.ts`
- `extensions/google/onboard.ts`
- `extensions/google/openclaw.plugin.json`
- `extensions/google/package.json`
- `extensions/google/plugin-registration.contract.test.ts`
- `extensions/google/provider-contract-api.ts`
- `extensions/google/provider-hooks.ts`
- `extensions/google/provider-models.test.ts`
- `extensions/google/provider-models.ts`
- `extensions/google/provider-policy-api.test.ts`
- `extensions/google/provider-policy-api.ts`
- `extensions/google/provider-policy.ts`
- `extensions/google/provider-registration.ts`
- `extensions/google/provider-runtime.contract.test.ts`
- `extensions/google/provider.contract.test.ts`
- `extensions/google/realtime-voice-provider.test.ts`
- `extensions/google/realtime-voice-provider.ts`
- ... 19 more paths in `leaf-impact.json`

## `src/capability-modules/media-understanding`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/media-understanding`
- Coverage: `verified`
- Changed paths: `69`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/image-generation/live-test-helpers.test.ts`
- `src/image-generation/live-test-helpers.ts`
- `src/image-generation/model-ref.ts`
- `src/image-generation/normalization.ts`
- `src/image-generation/provider-registry.allowlist.test.ts`
- `src/image-generation/provider-registry.test.ts`
- `src/image-generation/provider-registry.ts`
- `src/image-generation/runtime-types.ts`
- `src/image-generation/runtime.live.test.ts`
- `src/image-generation/runtime.test.ts`
- `src/image-generation/runtime.ts`
- `src/image-generation/types.ts`
- `src/link-understanding/apply.ts`
- `src/link-understanding/runner.ts`
- `src/media-understanding/active-model.types.ts`
- `src/media-understanding/apply.echo-transcript.test.ts`
- `src/media-understanding/apply.test.ts`
- `src/media-understanding/apply.ts`
- `src/media-understanding/attachments.cache.ts`
- `src/media-understanding/attachments.normalize.ts`
- `src/media-understanding/audio-preflight.test.ts`
- `src/media-understanding/audio-preflight.ts`
- `src/media-understanding/audio-transcription-runner.ts`
- `src/media-understanding/config-provider-models.ts`
- `src/media-understanding/defaults.test.ts`
- `src/media-understanding/defaults.ts`
- `src/media-understanding/echo-transcript.test.ts`
- `src/media-understanding/echo-transcript.ts`
- `src/media-understanding/entry-capabilities.ts`
- `src/media-understanding/errors.ts`
- `src/media-understanding/image-runtime.ts`
- `src/media-understanding/image.test.ts`
- `src/media-understanding/image.ts`
- `src/media-understanding/manifest-metadata.ts`
- `src/media-understanding/media-understanding-misc.test.ts`
- `src/media-understanding/media-understanding-url-fallback.test.ts`
- `src/media-understanding/openai-compatible-audio.pin-dns.test.ts`
- `src/media-understanding/openai-compatible-audio.test.ts`
- `src/media-understanding/openai-compatible-audio.ts`
- `src/media-understanding/openai-compatible-video.ts`
- `src/media-understanding/provider-capability-registry.test.ts`
- `src/media-understanding/provider-capability-registry.ts`
- `src/media-understanding/provider-id.ts`
- `src/media-understanding/provider-registry.allowlist.test.ts`
- `src/media-understanding/provider-registry.test.ts`
- `src/media-understanding/provider-registry.ts`
- `src/media-understanding/provider-supports.ts`
- `src/media-understanding/resolve.test.ts`
- `src/media-understanding/resolve.ts`
- `src/media-understanding/runner.attachments.ts`
- ... 19 more paths in `leaf-impact.json`

## `src/agent-runtime/pi-runner/subscriptions-extensions`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/subscriptions-extensions`
- Coverage: `verified`
- Changed paths: `67`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/pi-embedded-helpers.buildbootstrapcontextfiles.test.ts`
- `src/agents/pi-embedded-helpers.formatassistanterrortext.test.ts`
- `src/agents/pi-embedded-helpers.isbillingerrormessage.test.ts`
- `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts`
- `src/agents/pi-embedded-helpers.sanitizeuserfacingtext.test.ts`
- `src/agents/pi-embedded-helpers.ts`
- `src/agents/pi-embedded-helpers.validate-turns.test.ts`
- `src/agents/pi-embedded-helpers/bootstrap.test.ts`
- `src/agents/pi-embedded-helpers/bootstrap.ts`
- `src/agents/pi-embedded-helpers/errors.ts`
- `src/agents/pi-embedded-helpers/failover-matches.test.ts`
- `src/agents/pi-embedded-helpers/failover-matches.ts`
- `src/agents/pi-embedded-helpers/images.ts`
- `src/agents/pi-embedded-helpers/messaging-dedupe.ts`
- `src/agents/pi-embedded-helpers/openai.ts`
- `src/agents/pi-embedded-helpers/provider-error-patterns.test.ts`
- `src/agents/pi-embedded-helpers/provider-error-patterns.ts`
- `src/agents/pi-embedded-helpers/sanitize-user-facing-text.ts`
- `src/agents/pi-embedded-helpers/thinking.test.ts`
- `src/agents/pi-embedded-helpers/thinking.ts`
- `src/agents/pi-embedded-helpers/turns.ts`
- `src/agents/pi-embedded-runner/extensions.test.ts`
- `src/agents/pi-embedded-runner/extensions.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.runtime.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.ts`
- `src/agents/pi-embedded-subscribe.handlers.lifecycle.compaction-reconcile.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.lifecycle.ts`
- `src/agents/pi-embedded-subscribe.handlers.messages.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.messages.ts`
- `src/agents/pi-embedded-subscribe.handlers.tools.media.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.tools.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.tools.ts`
- `src/agents/pi-embedded-subscribe.handlers.ts`
- `src/agents/pi-embedded-subscribe.handlers.types.ts`
- `src/agents/pi-embedded-subscribe.openai-responses.test-helpers.ts`
- `src/agents/pi-embedded-subscribe.promise.ts`
- `src/agents/pi-embedded-subscribe.shared-types.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.calls-onblockreplyflush-before-tool-execution-start-preserve.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.does-not-append-text-end-content-is.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.does-not-duplicate-text-end-repeats-full.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.emits-block-replies-text-end-does-not.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.splits-long-single-line-fenced-blocks-reopen.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.subscribeembeddedpisession.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.suppresses-commentary-phase-output.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.suppresses-message-end-block-replies-message-tool.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.waits-multiple-compaction-retries-before-resolving.test.ts`
- `src/agents/pi-embedded-subscribe.tools.media.test.ts`
- `src/agents/pi-embedded-subscribe.tools.ts`
- ... 17 more paths in `leaf-impact.json`

## `extensions/channel-plugins/zalo`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/zalo`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `65`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/zalo/CHANGELOG.md`
- `extensions/zalo/README.md`
- `extensions/zalo/api.ts`
- `extensions/zalo/channel-plugin-api.ts`
- `extensions/zalo/contract-api.ts`
- `extensions/zalo/index.test.ts`
- `extensions/zalo/index.ts`
- `extensions/zalo/openclaw.plugin.json`
- `extensions/zalo/package-manifest.contract.test.ts`
- `extensions/zalo/package.json`
- `extensions/zalo/runtime-api.test.ts`
- `extensions/zalo/runtime-api.ts`
- `extensions/zalo/secret-contract-api.ts`
- `extensions/zalo/setup-api.ts`
- `extensions/zalo/setup-entry.ts`
- `extensions/zalo/src/accounts.test.ts`
- `extensions/zalo/src/accounts.ts`
- `extensions/zalo/src/actions.test.ts`
- `extensions/zalo/src/actions.ts`
- `extensions/zalo/src/api.test.ts`
- `extensions/zalo/src/api.ts`
- `extensions/zalo/src/approval-auth.test.ts`
- `extensions/zalo/src/approval-auth.ts`
- `extensions/zalo/src/channel.directory.test.ts`
- `extensions/zalo/src/channel.runtime.ts`
- `extensions/zalo/src/channel.startup.test.ts`
- `extensions/zalo/src/channel.ts`
- `extensions/zalo/src/group-access.ts`
- `extensions/zalo/src/group-policy.contract.test.ts`
- `extensions/zalo/src/monitor.image.polling.test.ts`
- `extensions/zalo/src/monitor.lifecycle.test.ts`
- `extensions/zalo/src/monitor.pairing.lifecycle.test.ts`
- `extensions/zalo/src/monitor.polling.media-reply.test.ts`
- `extensions/zalo/src/monitor.reply-once.lifecycle.test.ts`
- `extensions/zalo/src/monitor.ts`
- `extensions/zalo/src/monitor.types.ts`
- `extensions/zalo/src/monitor.webhook.test.ts`
- `extensions/zalo/src/monitor.webhook.ts`
- `extensions/zalo/src/outbound-media.test.ts`
- `extensions/zalo/src/outbound-media.ts`
- `extensions/zalo/src/outbound-payload.contract.test.ts`
- `extensions/zalo/src/probe.ts`
- `extensions/zalo/src/proxy.ts`
- `extensions/zalo/src/registry-backed.contract.test.ts`
- `extensions/zalo/src/runtime-api.ts`
- `extensions/zalo/src/runtime-support.ts`
- `extensions/zalo/src/runtime.ts`
- `extensions/zalo/src/secret-contract.ts`
- `extensions/zalo/src/send.test.ts`
- `extensions/zalo/src/send.ts`
- ... 15 more paths in `leaf-impact.json`

## `src/infra-outbound-delivery/outbound-delivery`

- Feature: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-delivery`
- Coverage: `verified`
- Changed paths: `65`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/send-runtime/channel-outbound-send.test.ts`
- `src/cli/send-runtime/channel-outbound-send.ts`
- `src/cli/send-runtime/discord.ts`
- `src/cli/send-runtime/imessage.ts`
- `src/cli/send-runtime/signal.ts`
- `src/cli/send-runtime/slack.ts`
- `src/cli/send-runtime/telegram.ts`
- `src/cli/send-runtime/whatsapp.ts`
- `src/infra/outbound/AGENTS.md`
- `src/infra/outbound/account-scoped-conversation-bindings.ts`
- `src/infra/outbound/agent-delivery.test.ts`
- `src/infra/outbound/agent-delivery.ts`
- `src/infra/outbound/best-effort-delivery.test.ts`
- `src/infra/outbound/best-effort-delivery.ts`
- `src/infra/outbound/bound-delivery-router.test.ts`
- `src/infra/outbound/bound-delivery-router.ts`
- `src/infra/outbound/cfg-threading.guard.test.ts`
- `src/infra/outbound/current-conversation-bindings.test.ts`
- `src/infra/outbound/current-conversation-bindings.ts`
- `src/infra/outbound/deliver-types.ts`
- `src/infra/outbound/deliver.lifecycle.test.ts`
- `src/infra/outbound/deliver.test-helpers.ts`
- `src/infra/outbound/deliver.test.ts`
- `src/infra/outbound/deliver.ts`
- `src/infra/outbound/delivery-queue-recovery.ts`
- `src/infra/outbound/delivery-queue-storage.ts`
- `src/infra/outbound/delivery-queue.policy.test.ts`
- `src/infra/outbound/delivery-queue.reconnect-drain.test.ts`
- `src/infra/outbound/delivery-queue.recovery.test.ts`
- `src/infra/outbound/delivery-queue.storage.test.ts`
- `src/infra/outbound/delivery-queue.test-helpers.ts`
- `src/infra/outbound/delivery-queue.ts`
- `src/infra/outbound/formatting.ts`
- `src/infra/outbound/identity-types.ts`
- `src/infra/outbound/message-plan.test.ts`
- `src/infra/outbound/message-plan.ts`
- `src/infra/outbound/message.channels.test.ts`
- `src/infra/outbound/message.config.runtime.ts`
- `src/infra/outbound/message.gateway.runtime.ts`
- `src/infra/outbound/message.test.ts`
- `src/infra/outbound/message.ts`
- `src/infra/outbound/outbound-send-service.test.ts`
- `src/infra/outbound/outbound-send-service.ts`
- `src/infra/outbound/outbound.test.ts`
- `src/infra/outbound/pending-spawn-query.ts`
- `src/infra/outbound/reply-policy.test.ts`
- `src/infra/outbound/reply-policy.ts`
- `src/infra/outbound/send-deps.ts`
- `src/infra/outbound/session-binding-normalization.ts`
- `src/infra/outbound/session-binding.types.ts`
- ... 15 more paths in `leaf-impact.json`

## `ui/provider-channel-settings/web-settings`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/provider-channel-settings/web-settings`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `64`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/ui-app-settings.agents-files-refresh.test.ts`
- `ui/package.json`
- `ui/src/ui/app-channels.ts`
- `ui/src/ui/app-gateway.ts`
- `ui/src/ui/app-last-active-session.ts`
- `ui/src/ui/app-lifecycle.ts`
- `ui/src/ui/app-polling.ts`
- `ui/src/ui/app-settings.refresh-active-tab.node.test.ts`
- `ui/src/ui/app-settings.ts`
- `ui/src/ui/app-tool-stream.ts`
- `ui/src/ui/app-view-state.ts`
- `ui/src/ui/canvas-url.ts`
- `ui/src/ui/chat-event-reload.ts`
- `ui/src/ui/chat-model-ref.ts`
- `ui/src/ui/chat-model-ref.types.ts`
- `ui/src/ui/chat-model-select-state.ts`
- `ui/src/ui/chat-model.test-helpers.ts`
- `ui/src/ui/connect-error.node.test.ts`
- `ui/src/ui/connect-error.test.ts`
- `ui/src/ui/connect-error.ts`
- `ui/src/ui/control-ui-auth.ts`
- `ui/src/ui/controllers/channels.test.ts`
- `ui/src/ui/controllers/channels.ts`
- `ui/src/ui/controllers/config.test.ts`
- `ui/src/ui/controllers/config.ts`
- `ui/src/ui/custom-theme.test.ts`
- `ui/src/ui/custom-theme.ts`
- `ui/src/ui/embed-sandbox.ts`
- `ui/src/ui/external-link.ts`
- `ui/src/ui/format.test.ts`
- `ui/src/ui/format.ts`
- `ui/src/ui/gateway.node.test.ts`
- `ui/src/ui/gateway.ts`
- `ui/src/ui/icons.ts`
- `ui/src/ui/markdown.test.ts`
- `ui/src/ui/markdown.ts`
- `ui/src/ui/model-auth-helpers.ts`
- `ui/src/ui/navigation.browser.test.ts`
- `ui/src/ui/navigation.test.ts`
- `ui/src/ui/navigation.ts`
- `ui/src/ui/open-external-url.ts`
- `ui/src/ui/plugin-activation.ts`
- `ui/src/ui/presenter.ts`
- `ui/src/ui/select-options.ts`
- `ui/src/ui/session-key.ts`
- `ui/src/ui/sidebar-content.ts`
- `ui/src/ui/string-coerce.ts`
- `ui/src/ui/test-helpers/app-mount.ts`
- `ui/src/ui/theme.ts`
- `ui/src/ui/thinking.ts`
- ... 14 more paths in `leaf-impact.json`

## `src/agent-runtime/skills/core-inventory`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/skills/core-inventory`
- Coverage: `verified`
- Changed paths: `61`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `skills/1password/SKILL.md`
- `skills/apple-notes/SKILL.md`
- `skills/apple-reminders/SKILL.md`
- `skills/bluebubbles/SKILL.md`
- `skills/canvas/SKILL.md`
- `skills/clawhub/SKILL.md`
- `skills/coding-agent/SKILL.md`
- `skills/gh-issues/SKILL.md`
- `skills/github/SKILL.md`
- `skills/goplaces/SKILL.md`
- `skills/healthcheck/SKILL.md`
- `skills/himalaya/SKILL.md`
- `skills/mcporter/SKILL.md`
- `skills/model-usage/SKILL.md`
- `skills/model-usage/scripts/model_usage.py`
- `skills/node-connect/SKILL.md`
- `skills/openai-whisper-api/SKILL.md`
- `skills/oracle/SKILL.md`
- `skills/session-logs/SKILL.md`
- `skills/sherpa-onnx-tts/SKILL.md`
- `skills/skill-creator/SKILL.md`
- `skills/slack/SKILL.md`
- `skills/summarize/SKILL.md`
- `skills/taskflow-inbox-triage/SKILL.md`
- `skills/taskflow/SKILL.md`
- `skills/taskflow/examples/inbox-triage.lobster`
- `skills/taskflow/examples/pr-intake.lobster`
- `skills/things-mac/SKILL.md`
- `skills/wacli/SKILL.md`
- `skills/weather/SKILL.md`
- `skills/xurl/SKILL.md`
- `src/agents/skills-status.test.ts`
- `src/agents/skills-status.ts`
- `src/agents/skills.agents-skills-directory.test.ts`
- `src/agents/skills.build-workspace-skills-prompt.applies-bundled-allowlist-without-affecting-workspace-skills.test.ts`
- `src/agents/skills.build-workspace-skills-prompt.prefers-workspace-skills-managed-skills.test.ts`
- `src/agents/skills.build-workspace-skills-prompt.syncs-merged-skills-into-target-workspace.test.ts`
- `src/agents/skills.buildworkspaceskillsnapshot.test.ts`
- `src/agents/skills.buildworkspaceskillstatus.test.ts`
- `src/agents/skills.bundled-frontmatter.test.ts`
- `src/agents/skills.compact-skill-paths.test.ts`
- `src/agents/skills.e2e-test-helpers.test.ts`
- `src/agents/skills.e2e-test-helpers.ts`
- `src/agents/skills.env-path-guidance.test.ts`
- `src/agents/skills.loadworkspaceskillentries.test.ts`
- `src/agents/skills.resolveskillspromptforrun.test.ts`
- `src/agents/skills.test-helpers.ts`
- `src/agents/skills.test.ts`
- `src/agents/skills.ts`
- `src/agents/skills/agent-filter.ts`
- ... 11 more paths in `leaf-impact.json`

## `extensions/channel-plugins/zalouser`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/zalouser`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `60`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/zalouser/CHANGELOG.md`
- `extensions/zalouser/README.md`
- `extensions/zalouser/api.ts`
- `extensions/zalouser/channel-plugin-api.ts`
- `extensions/zalouser/contract-api.ts`
- `extensions/zalouser/doctor-contract-api.ts`
- `extensions/zalouser/index.ts`
- `extensions/zalouser/openclaw.plugin.json`
- `extensions/zalouser/package-manifest.contract.test.ts`
- `extensions/zalouser/package.json`
- `extensions/zalouser/runtime-api.ts`
- `extensions/zalouser/secret-contract-api.ts`
- `extensions/zalouser/setup-entry.ts`
- `extensions/zalouser/setup-plugin-api.ts`
- `extensions/zalouser/src/accounts.runtime.ts`
- `extensions/zalouser/src/accounts.test.ts`
- `extensions/zalouser/src/accounts.ts`
- `extensions/zalouser/src/channel-api.ts`
- `extensions/zalouser/src/channel.adapters.ts`
- `extensions/zalouser/src/channel.directory.test.ts`
- `extensions/zalouser/src/channel.runtime.ts`
- `extensions/zalouser/src/channel.sendpayload.test.ts`
- `extensions/zalouser/src/channel.setup.test.ts`
- `extensions/zalouser/src/channel.setup.ts`
- `extensions/zalouser/src/channel.test.ts`
- `extensions/zalouser/src/channel.ts`
- `extensions/zalouser/src/config-schema.ts`
- `extensions/zalouser/src/directory.ts`
- `extensions/zalouser/src/doctor-contract.ts`
- `extensions/zalouser/src/doctor.test.ts`
- `extensions/zalouser/src/doctor.ts`
- `extensions/zalouser/src/group-policy.test.ts`
- `extensions/zalouser/src/group-policy.ts`
- `extensions/zalouser/src/monitor.account-scope.test.ts`
- `extensions/zalouser/src/monitor.group-gating.test.ts`
- `extensions/zalouser/src/monitor.ts`
- `extensions/zalouser/src/outbound-payload.contract.test.ts`
- `extensions/zalouser/src/probe.ts`
- `extensions/zalouser/src/qr-temp-file.ts`
- `extensions/zalouser/src/reaction.ts`
- `extensions/zalouser/src/runtime.ts`
- `extensions/zalouser/src/security-audit.test.ts`
- `extensions/zalouser/src/security-audit.ts`
- `extensions/zalouser/src/send.test.ts`
- `extensions/zalouser/src/session-route.ts`
- `extensions/zalouser/src/setup-core.ts`
- `extensions/zalouser/src/setup-surface.test.ts`
- `extensions/zalouser/src/setup-surface.ts`
- `extensions/zalouser/src/setup-test-helpers.ts`
- `extensions/zalouser/src/shared.ts`
- ... 10 more paths in `leaf-impact.json`

## `extensions/provider-plugins/openai`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/openai`
- Coverage: `verified`
- Changed paths: `60`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/openai/api.ts`
- `extensions/openai/auth-choice-copy.ts`
- `extensions/openai/base-url.test.ts`
- `extensions/openai/base-url.ts`
- `extensions/openai/cli-backend.ts`
- `extensions/openai/default-models.test.ts`
- `extensions/openai/default-models.ts`
- `extensions/openai/embedding-batch.ts`
- `extensions/openai/embedding-provider.ts`
- `extensions/openai/image-generation-provider.test.ts`
- `extensions/openai/image-generation-provider.ts`
- `extensions/openai/index.test.ts`
- `extensions/openai/index.ts`
- `extensions/openai/media-understanding-provider.test.ts`
- `extensions/openai/media-understanding-provider.ts`
- `extensions/openai/memory-embedding-adapter.ts`
- `extensions/openai/native-web-search.ts`
- `extensions/openai/openai-codex-auth-identity.ts`
- `extensions/openai/openai-codex-catalog.ts`
- `extensions/openai/openai-codex-device-code.test.ts`
- `extensions/openai/openai-codex-device-code.ts`
- `extensions/openai/openai-codex-provider.test.ts`
- `extensions/openai/openai-codex-provider.ts`
- `extensions/openai/openai-codex-shared.ts`
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
- `extensions/openai/provider-catalog.contract.test.ts`
- `extensions/openai/provider-contract-api.ts`
- `extensions/openai/provider-policy-api.ts`
- `extensions/openai/provider-runtime.contract.test.ts`
- `extensions/openai/provider.contract.test.ts`
- `extensions/openai/realtime-provider-shared.ts`
- `extensions/openai/realtime-transcription-provider.test.ts`
- `extensions/openai/realtime-transcription-provider.ts`
- `extensions/openai/realtime-voice-provider.test.ts`
- `extensions/openai/realtime-voice-provider.ts`
- `extensions/openai/register.runtime.ts`
- `extensions/openai/replay-policy.ts`
- `extensions/openai/setup-api.ts`
- `extensions/openai/shared.ts`
- `extensions/openai/speech-provider.test.ts`
- ... 10 more paths in `leaf-impact.json`

## `extensions/provider-plugins/xai`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/xai`
- Coverage: `verified`
- Changed paths: `60`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/xai/.boundary-stubs/anthropic-vertex-api.d.ts`
- `extensions/xai/.boundary-stubs/ollama-api.d.ts`
- `extensions/xai/.boundary-stubs/ollama-runtime-api.d.ts`
- `extensions/xai/.boundary-stubs/speech-core-runtime-api.d.ts`
- `extensions/xai/api.test.ts`
- `extensions/xai/api.ts`
- `extensions/xai/bundled-web-search.contract.test.ts`
- `extensions/xai/code-execution.test.ts`
- `extensions/xai/code-execution.ts`
- `extensions/xai/image-generation-provider.test.ts`
- `extensions/xai/image-generation-provider.ts`
- `extensions/xai/index.test.ts`
- `extensions/xai/index.ts`
- `extensions/xai/model-definitions.ts`
- `extensions/xai/model-id.test.ts`
- `extensions/xai/onboard.test.ts`
- `extensions/xai/openclaw.plugin.json`
- `extensions/xai/package.json`
- `extensions/xai/plugin-registration.contract.test.ts`
- `extensions/xai/provider-contract-api.ts`
- `extensions/xai/provider-models.ts`
- `extensions/xai/provider-runtime.contract.test.ts`
- `extensions/xai/provider.contract.test.ts`
- `extensions/xai/realtime-transcription-provider.test.ts`
- `extensions/xai/realtime-transcription-provider.ts`
- `extensions/xai/setup-api.ts`
- `extensions/xai/speech-provider.test.ts`
- `extensions/xai/speech-provider.ts`
- `extensions/xai/src/code-execution-shared.ts`
- `extensions/xai/src/responses-tool-shared.test.ts`
- `extensions/xai/src/responses-tool-shared.ts`
- `extensions/xai/src/tool-auth-shared.test.ts`
- `extensions/xai/src/tool-auth-shared.ts`
- `extensions/xai/src/tool-config-shared.test.ts`
- `extensions/xai/src/tool-config-shared.ts`
- `extensions/xai/src/web-search-provider.runtime.ts`
- `extensions/xai/src/web-search-response.types.ts`
- `extensions/xai/src/web-search-shared.ts`
- `extensions/xai/src/x-search-config.ts`
- `extensions/xai/src/x-search-shared.ts`
- `extensions/xai/stream.test.ts`
- `extensions/xai/stream.ts`
- `extensions/xai/stt.test.ts`
- `extensions/xai/stt.ts`
- `extensions/xai/test-api.ts`
- `extensions/xai/test-helpers.ts`
- `extensions/xai/tsconfig.json`
- `extensions/xai/tts.test.ts`
- `extensions/xai/tts.ts`
- `extensions/xai/video-generation-provider.test.ts`
- ... 10 more paths in `leaf-impact.json`

## `src/cli-commands/program-registration`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/program-registration`
- Coverage: `verified`
- Changed paths: `60`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/argv.test.ts`
- `src/cli/program.nodes-basic.e2e.test.ts`
- `src/cli/program.nodes-media.e2e.test.ts`
- `src/cli/program.smoke.test.ts`
- `src/cli/program.test-mocks.ts`
- `src/cli/program/action-reparse.test.ts`
- `src/cli/program/build-program.test.ts`
- `src/cli/program/build-program.ts`
- `src/cli/program/build-program.version-alias.test.ts`
- `src/cli/program/command-descriptor-utils.test.ts`
- `src/cli/program/command-descriptor-utils.ts`
- `src/cli/program/command-group-descriptors.test.ts`
- `src/cli/program/command-group-descriptors.ts`
- `src/cli/program/command-registry-core.ts`
- `src/cli/program/command-registry.test.ts`
- `src/cli/program/command-registry.ts`
- `src/cli/program/command-tree.test.ts`
- `src/cli/program/command-tree.ts`
- `src/cli/program/config-guard.test.ts`
- `src/cli/program/config-guard.ts`
- `src/cli/program/context.test.ts`
- `src/cli/program/core-command-descriptors.ts`
- `src/cli/program/help.test.ts`
- `src/cli/program/json-mode.ts`
- `src/cli/program/message/register.discord-admin.ts`
- `src/cli/program/message/register.pins.ts`
- `src/cli/program/message/register.send.ts`
- `src/cli/program/message/register.thread.test.ts`
- `src/cli/program/message/register.thread.ts`
- `src/cli/program/preaction.test.ts`
- `src/cli/program/preaction.ts`
- `src/cli/program/private-qa-cli.test.ts`
- `src/cli/program/private-qa-cli.ts`
- `src/cli/program/program-context.test.ts`
- `src/cli/program/register-command-groups.ts`
- `src/cli/program/register-lazy-command.ts`
- `src/cli/program/register.agent.test.ts`
- `src/cli/program/register.agent.ts`
- `src/cli/program/register.backup.test.ts`
- `src/cli/program/register.configure.test.ts`
- `src/cli/program/register.maintenance.test.ts`
- `src/cli/program/register.message.test.ts`
- `src/cli/program/register.onboard.test.ts`
- `src/cli/program/register.onboard.ts`
- `src/cli/program/register.setup.test.ts`
- `src/cli/program/register.setup.ts`
- `src/cli/program/register.status-health-sessions.test.ts`
- `src/cli/program/register.status-health-sessions.ts`
- `src/cli/program/register.subclis-core.ts`
- `src/cli/program/register.subclis.test.ts`
- ... 10 more paths in `leaf-impact.json`

## `src/cli-commands/terminal-output`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/terminal-output`
- Coverage: `verified`
- Changed paths: `60`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/interactive/payload.test.ts`
- `src/interactive/payload.ts`
- `src/status/fallback-notice-state.ts`
- `src/status/status-labels.ts`
- `src/status/status-message.runtime.ts`
- `src/status/status-message.test.ts`
- `src/status/status-message.ts`
- `src/status/status-queue.runtime.ts`
- `src/status/status-subagents.runtime.ts`
- `src/status/status-text.ts`
- `src/status/status-text.types.ts`
- `src/terminal/ansi.test.ts`
- `src/terminal/ansi.ts`
- `src/terminal/health-style.ts`
- `src/terminal/links.test.ts`
- `src/terminal/links.ts`
- `src/terminal/note.ts`
- `src/terminal/restore.test.ts`
- `src/terminal/restore.ts`
- `src/terminal/table.test.ts`
- `src/terminal/terminal-link.ts`
- `src/terminal/theme.ts`
- `src/tui/commands.test.ts`
- `src/tui/commands.ts`
- `src/tui/components/assistant-message.ts`
- `src/tui/components/chat-log.test.ts`
- `src/tui/components/chat-log.ts`
- `src/tui/components/custom-editor.test.ts`
- `src/tui/components/custom-editor.ts`
- `src/tui/components/filterable-select-list.ts`
- `src/tui/components/fuzzy-filter.ts`
- `src/tui/components/markdown-message.ts`
- `src/tui/components/searchable-select-list.test.ts`
- `src/tui/components/searchable-select-list.ts`
- `src/tui/components/selectors.ts`
- `src/tui/embedded-backend.test.ts`
- `src/tui/embedded-backend.ts`
- `src/tui/gateway-chat.test.ts`
- `src/tui/gateway-chat.ts`
- `src/tui/setup-launch-env.ts`
- `src/tui/theme/syntax-theme.ts`
- `src/tui/theme/theme.test.ts`
- `src/tui/theme/theme.ts`
- `src/tui/tui-backend.ts`
- `src/tui/tui-command-handlers.test.ts`
- `src/tui/tui-command-handlers.ts`
- `src/tui/tui-event-handlers.test.ts`
- `src/tui/tui-event-handlers.ts`
- `src/tui/tui-formatters.test.ts`
- `src/tui/tui-formatters.ts`
- ... 10 more paths in `leaf-impact.json`

## `src/channel-abstraction/core-abstractions`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/core-abstractions`
- Coverage: `verified`
- Changed paths: `59`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/channels/AGENTS.md`
- `src/channels/account-inspection.ts`
- `src/channels/account-snapshot-fields.test.ts`
- `src/channels/account-snapshot-fields.ts`
- `src/channels/account-summary.ts`
- `src/channels/allow-from.test.ts`
- `src/channels/allow-from.ts`
- `src/channels/bundled-channel-catalog-read.test.ts`
- `src/channels/bundled-channel-catalog-read.ts`
- `src/channels/channel-config.ts`
- `src/channels/channels-misc.test.ts`
- `src/channels/chat-meta-shared.ts`
- `src/channels/chat-meta.ts`
- `src/channels/chat-type.ts`
- `src/channels/config-presence.test.ts`
- `src/channels/config-presence.ts`
- `src/channels/conversation-binding-context.test.ts`
- `src/channels/conversation-binding-context.ts`
- `src/channels/conversation-label.test.ts`
- `src/channels/conversation-label.ts`
- `src/channels/conversation-resolution.test.ts`
- `src/channels/conversation-resolution.ts`
- `src/channels/draft-preview-finalizer.test.ts`
- `src/channels/draft-preview-finalizer.ts`
- `src/channels/draft-stream-controls.test.ts`
- `src/channels/draft-stream-controls.ts`
- `src/channels/ids.test.ts`
- `src/channels/ids.ts`
- `src/channels/inbound-debounce-policy.ts`
- `src/channels/location.test.ts`
- `src/channels/location.ts`
- `src/channels/mention-gating.test.ts`
- `src/channels/mention-gating.ts`
- `src/channels/model-overrides.test.ts`
- `src/channels/model-overrides.ts`
- `src/channels/native-command-session-targets.ts`
- `src/channels/read-only-account-inspect.discord.runtime.ts`
- `src/channels/read-only-account-inspect.slack.runtime.ts`
- `src/channels/read-only-account-inspect.telegram.runtime.ts`
- `src/channels/read-only-account-inspect.ts`
- `src/channels/registry-normalize.ts`
- `src/channels/registry.helpers.test.ts`
- `src/channels/registry.ts`
- `src/channels/reply-prefix.ts`
- `src/channels/sender-identity.ts`
- `src/channels/sender-label.ts`
- `src/channels/session-envelope.ts`
- `src/channels/session-meta.ts`
- `src/channels/session.test.ts`
- `src/channels/session.ts`
- ... 9 more paths in `leaf-impact.json`

## `src/config-secrets-security/config-schema-validation`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/config-schema-validation`
- Coverage: `verified`
- Changed paths: `59`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/config/doc-baseline.integration.test.ts`
- `src/config/doc-baseline.runtime.ts`
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
- `src/config/types.memory.ts`
- `src/config/types.models.ts`
- `src/config/types.msteams.ts`
- `src/config/types.openclaw.ts`
- `src/config/types.plugins.ts`
- `src/config/types.provider-request.ts`
- `src/config/types.signal.ts`
- `src/config/types.slack.ts`
- `src/config/types.telegram.ts`
- `src/config/types.tools.ts`
- `src/config/types.ts`
- `src/config/types.tts.ts`
- `src/config/types.whatsapp.ts`
- `src/config/zod-schema.agent-defaults.test.ts`
- `src/config/zod-schema.agent-defaults.ts`
- `src/config/zod-schema.agent-runtime.ts`
- `src/config/zod-schema.agents.ts`
- `src/config/zod-schema.core.ts`
- `src/config/zod-schema.hooks.ts`
- ... 9 more paths in `leaf-impact.json`

## `src/config-secrets-security/secrets-resolution/runtime-secret-collection`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/runtime-secret-collection`
- Coverage: `verified`
- Changed paths: `59`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/secrets/exec-resolution-policy.ts`
- `src/secrets/provider-env-vars.dynamic.test.ts`
- `src/secrets/provider-env-vars.test.ts`
- `src/secrets/provider-env-vars.ts`
- `src/secrets/runtime-auth-collectors.ts`
- `src/secrets/runtime-auth-profiles-oauth-policy.test.ts`
- `src/secrets/runtime-auth-refresh-failure.test.ts`
- `src/secrets/runtime-auth-store-inline-refs.test.ts`
- `src/secrets/runtime-auth.integration.test-helpers.ts`
- `src/secrets/runtime-channel-inactive-variants.test-support.ts`
- `src/secrets/runtime-channel-inactive-variants.test.ts`
- `src/secrets/runtime-command-secrets.ts`
- `src/secrets/runtime-config-collectors-channels.test.ts`
- `src/secrets/runtime-config-collectors-channels.ts`
- `src/secrets/runtime-config-collectors-core.ts`
- `src/secrets/runtime-config-collectors-plugins.test.ts`
- `src/secrets/runtime-config-collectors-plugins.ts`
- `src/secrets/runtime-config-collectors.ts`
- `src/secrets/runtime-core-snapshots.test.ts`
- `src/secrets/runtime-discord-surface.test.ts`
- `src/secrets/runtime-discord.test-support.ts`
- `src/secrets/runtime-gateway-auth-surfaces.ts`
- `src/secrets/runtime-gateway-local-surfaces.test.ts`
- `src/secrets/runtime-inactive-core-surfaces.test.ts`
- `src/secrets/runtime-inactive-telegram-surfaces.test.ts`
- `src/secrets/runtime-legacy-x-search.test.ts`
- `src/secrets/runtime-manifest.runtime.ts`
- `src/secrets/runtime-matrix-shadowing.test.ts`
- `src/secrets/runtime-matrix-top-level.test.ts`
- `src/secrets/runtime-matrix.test-support.ts`
- `src/secrets/runtime-nextcloud-talk-file-precedence.test.ts`
- `src/secrets/runtime-nextcloud-talk.test-support.ts`
- `src/secrets/runtime-openai-file-fixture.test-helper.ts`
- `src/secrets/runtime-prepare.runtime.ts`
- `src/secrets/runtime-provider-and-media-surfaces.test.ts`
- `src/secrets/runtime-request-secret-refs.test.ts`
- `src/secrets/runtime-telegram-token-inheritance.test.ts`
- `src/secrets/runtime-telegram.test-support.ts`
- `src/secrets/runtime-web-tools-fallback.runtime.ts`
- `src/secrets/runtime-web-tools-manifest.runtime.ts`
- `src/secrets/runtime-web-tools-public-artifacts.runtime.ts`
- `src/secrets/runtime-web-tools-state.test.ts`
- `src/secrets/runtime-web-tools-state.ts`
- `src/secrets/runtime-web-tools.shared.ts`
- `src/secrets/runtime-web-tools.test.ts`
- `src/secrets/runtime-web-tools.ts`
- `src/secrets/runtime-web-tools.types.ts`
- `src/secrets/runtime-zalo-token-activity.test.ts`
- `src/secrets/runtime-zalo.test-support.ts`
- `src/secrets/runtime.auth.integration.test.ts`
- ... 9 more paths in `leaf-impact.json`

## `scripts/packaging/lib`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/lib`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `56`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/lib/arg-utils.mjs`
- `scripts/lib/bundled-extension-manifest.ts`
- `scripts/lib/bundled-plugin-build-entries-types.d.ts`
- `scripts/lib/bundled-plugin-build-entries.d.mts`
- `scripts/lib/bundled-plugin-build-entries.d.ts`
- `scripts/lib/bundled-plugin-build-entries.mjs`
- `scripts/lib/bundled-plugin-paths.mjs`
- `scripts/lib/bundled-plugin-root-runtime-mirrors.mjs`
- `scripts/lib/bundled-runtime-sidecar-paths.json`
- `scripts/lib/changed-extensions.mjs`
- `scripts/lib/channel-contract-test-plan.mjs`
- `scripts/lib/check-timing-summary.mjs`
- `scripts/lib/ci-node-test-plan.mjs`
- `scripts/lib/dependency-ownership.json`
- `scripts/lib/docker-e2e-image.sh`
- `scripts/lib/docker-e2e-logs.sh`
- `scripts/lib/error-format.mjs`
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
- `scripts/lib/local-heavy-check-runtime.mjs`
- `scripts/lib/managed-child-process.mjs`
- `scripts/lib/mintlify-accordion.mjs`
- `scripts/lib/npm-pack-budget.d.mts`
- `scripts/lib/npm-pack-budget.mjs`
- `scripts/lib/npm-publish-plan.mjs`
- `scripts/lib/official-external-channel-catalog.json`
- `scripts/lib/optional-bundled-clusters-types.d.ts`
- `scripts/lib/optional-bundled-clusters.d.mts`
- `scripts/lib/optional-bundled-clusters.d.ts`
- `scripts/lib/package-root-args.mjs`
- `scripts/lib/plugin-clawhub-release.ts`
- `scripts/lib/plugin-npm-release.ts`
- `scripts/lib/plugin-sdk-doc-metadata.ts`
- `scripts/lib/plugin-sdk-entrypoints.json`
- `scripts/lib/plugin-sdk-facades.mjs`
- `scripts/lib/plugin-sdk-private-local-only-subpaths.json`
- `scripts/lib/record-shared.mjs`
- `scripts/lib/run-extension-oxlint.mjs`
- `scripts/lib/source-file-scan-cache.mjs`
- `scripts/lib/test-group-report.mjs`
- `scripts/lib/ts-guard-utils.mjs`
- `scripts/lib/ts-topology/analyze.ts`
- ... 6 more paths in `leaf-impact.json`

## `ui/web-ui/i18n`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/i18n`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `56`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/src/i18n/.i18n/de.meta.json`
- `ui/src/i18n/.i18n/de.tm.jsonl`
- `ui/src/i18n/.i18n/es.meta.json`
- `ui/src/i18n/.i18n/es.tm.jsonl`
- `ui/src/i18n/.i18n/fr.meta.json`
- `ui/src/i18n/.i18n/fr.tm.jsonl`
- `ui/src/i18n/.i18n/glossary.de.json`
- `ui/src/i18n/.i18n/glossary.es.json`
- `ui/src/i18n/.i18n/glossary.fr.json`
- `ui/src/i18n/.i18n/glossary.id.json`
- `ui/src/i18n/.i18n/glossary.ja-JP.json`
- `ui/src/i18n/.i18n/glossary.ko.json`
- `ui/src/i18n/.i18n/glossary.pl.json`
- `ui/src/i18n/.i18n/glossary.pt-BR.json`
- `ui/src/i18n/.i18n/glossary.th.json`
- `ui/src/i18n/.i18n/glossary.tr.json`
- `ui/src/i18n/.i18n/glossary.uk.json`
- `ui/src/i18n/.i18n/glossary.zh-CN.json`
- `ui/src/i18n/.i18n/glossary.zh-TW.json`
- `ui/src/i18n/.i18n/id.meta.json`
- `ui/src/i18n/.i18n/id.tm.jsonl`
- `ui/src/i18n/.i18n/ja-JP.meta.json`
- `ui/src/i18n/.i18n/ja-JP.tm.jsonl`
- `ui/src/i18n/.i18n/ko.meta.json`
- `ui/src/i18n/.i18n/ko.tm.jsonl`
- `ui/src/i18n/.i18n/pl.meta.json`
- `ui/src/i18n/.i18n/pl.tm.jsonl`
- `ui/src/i18n/.i18n/pt-BR.meta.json`
- `ui/src/i18n/.i18n/pt-BR.tm.jsonl`
- `ui/src/i18n/.i18n/th.meta.json`
- `ui/src/i18n/.i18n/th.tm.jsonl`
- `ui/src/i18n/.i18n/tr.meta.json`
- `ui/src/i18n/.i18n/tr.tm.jsonl`
- `ui/src/i18n/.i18n/uk.meta.json`
- `ui/src/i18n/.i18n/uk.tm.jsonl`
- `ui/src/i18n/.i18n/zh-CN.meta.json`
- `ui/src/i18n/.i18n/zh-CN.tm.jsonl`
- `ui/src/i18n/.i18n/zh-TW.meta.json`
- `ui/src/i18n/.i18n/zh-TW.tm.jsonl`
- `ui/src/i18n/lib/registry.ts`
- `ui/src/i18n/lib/types.ts`
- `ui/src/i18n/locales/de.ts`
- `ui/src/i18n/locales/en.ts`
- `ui/src/i18n/locales/es.ts`
- `ui/src/i18n/locales/fr.ts`
- `ui/src/i18n/locales/id.ts`
- `ui/src/i18n/locales/ja-JP.ts`
- `ui/src/i18n/locales/ko.ts`
- `ui/src/i18n/locales/pl.ts`
- `ui/src/i18n/locales/pt-BR.ts`
- ... 6 more paths in `leaf-impact.json`

## `docs/mintlify/cli`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/cli`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `53`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/cli/acp.md`
- `docs/cli/agent.md`
- `docs/cli/agents.md`
- `docs/cli/approvals.md`
- `docs/cli/backup.md`
- `docs/cli/browser.md`
- `docs/cli/channels.md`
- `docs/cli/clawbot.md`
- `docs/cli/completion.md`
- `docs/cli/config.md`
- `docs/cli/configure.md`
- `docs/cli/cron.md`
- `docs/cli/daemon.md`
- `docs/cli/dashboard.md`
- `docs/cli/devices.md`
- `docs/cli/directory.md`
- `docs/cli/dns.md`
- `docs/cli/docs.md`
- `docs/cli/doctor.md`
- `docs/cli/flows.md`
- `docs/cli/gateway.md`
- `docs/cli/health.md`
- `docs/cli/hooks.md`
- `docs/cli/index.md`
- `docs/cli/infer.md`
- `docs/cli/logs.md`
- `docs/cli/mcp.md`
- `docs/cli/memory.md`
- `docs/cli/message.md`
- `docs/cli/models.md`
- `docs/cli/node.md`
- `docs/cli/nodes.md`
- `docs/cli/onboard.md`
- `docs/cli/pairing.md`
- `docs/cli/plugins.md`
- `docs/cli/proxy.md`
- `docs/cli/qr.md`
- `docs/cli/reset.md`
- `docs/cli/sandbox.md`
- `docs/cli/secrets.md`
- `docs/cli/security.md`
- `docs/cli/sessions.md`
- `docs/cli/setup.md`
- `docs/cli/skills.md`
- `docs/cli/status.md`
- `docs/cli/system.md`
- `docs/cli/tasks.md`
- `docs/cli/tui.md`
- `docs/cli/uninstall.md`
- `docs/cli/update.md`
- ... 3 more paths in `leaf-impact.json`

## `docs/mintlify/providers`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/providers`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `53`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/providers/alibaba.md`
- `docs/providers/anthropic.md`
- `docs/providers/arcee.md`
- `docs/providers/bedrock-mantle.md`
- `docs/providers/bedrock.md`
- `docs/providers/chutes.md`
- `docs/providers/claude-max-api-proxy.md`
- `docs/providers/cloudflare-ai-gateway.md`
- `docs/providers/comfy.md`
- `docs/providers/deepgram.md`
- `docs/providers/deepseek.md`
- `docs/providers/elevenlabs.md`
- `docs/providers/fal.md`
- `docs/providers/fireworks.md`
- `docs/providers/github-copilot.md`
- `docs/providers/glm.md`
- `docs/providers/google.md`
- `docs/providers/gradium.md`
- `docs/providers/groq.md`
- `docs/providers/huggingface.md`
- `docs/providers/index.md`
- `docs/providers/inferrs.md`
- `docs/providers/kilocode.md`
- `docs/providers/litellm.md`
- `docs/providers/lmstudio.md`
- `docs/providers/minimax.md`
- `docs/providers/mistral.md`
- `docs/providers/models.md`
- `docs/providers/moonshot.md`
- `docs/providers/nvidia.md`
- `docs/providers/ollama.md`
- `docs/providers/openai.md`
- `docs/providers/opencode-go.md`
- `docs/providers/opencode.md`
- `docs/providers/openrouter.md`
- `docs/providers/perplexity-provider.md`
- `docs/providers/qianfan.md`
- `docs/providers/qwen.md`
- `docs/providers/qwen_modelstudio.md`
- `docs/providers/runway.md`
- `docs/providers/sglang.md`
- `docs/providers/stepfun.md`
- `docs/providers/synthetic.md`
- `docs/providers/tencent.md`
- `docs/providers/together.md`
- `docs/providers/venice.md`
- `docs/providers/vercel-ai-gateway.md`
- `docs/providers/vllm.md`
- `docs/providers/volcengine.md`
- `docs/providers/vydra.md`
- ... 3 more paths in `leaf-impact.json`

## `docs/mintlify/tools`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/tools`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `53`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/tools/acp-agents-setup.md`
- `docs/tools/acp-agents.md`
- `docs/tools/agent-send.md`
- `docs/tools/apply-patch.md`
- `docs/tools/brave-search.md`
- `docs/tools/browser-control.md`
- `docs/tools/browser-linux-troubleshooting.md`
- `docs/tools/browser-login.md`
- `docs/tools/browser-wsl2-windows-remote-cdp-troubleshooting.md`
- `docs/tools/browser.md`
- `docs/tools/btw.md`
- `docs/tools/capability-cookbook.md`
- `docs/tools/clawhub.md`
- `docs/tools/code-execution.md`
- `docs/tools/creating-skills.md`
- `docs/tools/diffs.md`
- `docs/tools/duckduckgo-search.md`
- `docs/tools/elevated.md`
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
- `docs/tools/pdf.md`
- `docs/tools/perplexity-search.md`
- `docs/tools/plugin.md`
- `docs/tools/reactions.md`
- `docs/tools/searxng-search.md`
- `docs/tools/skills-config.md`
- `docs/tools/skills.md`
- `docs/tools/slash-commands.md`
- `docs/tools/subagents.md`
- `docs/tools/tavily.md`
- `docs/tools/thinking.md`
- `docs/tools/tokenjuice.md`
- `docs/tools/trajectory.md`
- `docs/tools/tts.md`
- ... 3 more paths in `leaf-impact.json`

## `src/config-secrets-security/sessions`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/sessions`
- Coverage: `verified`
- Changed paths: `53`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/config/sessions/combined-store-gateway.ts`
- `src/config/sessions/delivery-info.test.ts`
- `src/config/sessions/delivery-info.ts`
- `src/config/sessions/disk-budget.test.ts`
- `src/config/sessions/disk-budget.ts`
- `src/config/sessions/explicit-session-key-normalization.test.ts`
- `src/config/sessions/explicit-session-key-normalization.ts`
- `src/config/sessions/group.ts`
- `src/config/sessions/inbound.runtime.ts`
- `src/config/sessions/main-session.ts`
- `src/config/sessions/metadata.ts`
- `src/config/sessions/paths.ts`
- `src/config/sessions/reset-policy.ts`
- `src/config/sessions/reset-preserved-selection.ts`
- `src/config/sessions/reset.test.ts`
- `src/config/sessions/reset.ts`
- `src/config/sessions/runtime-types.ts`
- `src/config/sessions/session-file.ts`
- `src/config/sessions/session-key.test-helpers.ts`
- `src/config/sessions/session-key.test.ts`
- `src/config/sessions/sessions.test.ts`
- `src/config/sessions/store-entry.ts`
- `src/config/sessions/store-load.ts`
- `src/config/sessions/store-lock-state.ts`
- `src/config/sessions/store-maintenance-runtime.ts`
- `src/config/sessions/store-maintenance.ts`
- `src/config/sessions/store-read.test.ts`
- `src/config/sessions/store-summary.ts`
- `src/config/sessions/store.lock.test.ts`
- `src/config/sessions/store.pruning.integration.test.ts`
- `src/config/sessions/store.pruning.test.ts`
- `src/config/sessions/store.session-key-normalization.test.ts`
- `src/config/sessions/store.ts`
- `src/config/sessions/targets.ts`
- `src/config/sessions/test-helpers.ts`
- `src/config/sessions/thread-info.ts`
- `src/config/sessions/transcript-mirror.ts`
- `src/config/sessions/transcript-resolve.runtime.ts`
- `src/config/sessions/transcript.runtime.ts`
- `src/config/sessions/transcript.test.ts`
- `src/config/sessions/transcript.ts`
- `src/config/sessions/types.ts`
- `src/sessions/input-provenance.ts`
- `src/sessions/level-overrides.ts`
- `src/sessions/model-overrides.test.ts`
- `src/sessions/model-overrides.ts`
- `src/sessions/send-policy.ts`
- `src/sessions/session-chat-type-shared.ts`
- `src/sessions/session-chat-type.ts`
- `src/sessions/session-id-resolution.test.ts`
- ... 3 more paths in `leaf-impact.json`

## `ui/web-ui/components/app-shell-lifecycle`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/components/app-shell-lifecycle`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `53`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/canvas-host/a2ui.ts`
- `src/canvas-host/a2ui/.bundle.hash`
- `src/canvas-host/a2ui/a2ui.bundle.js`
- `src/canvas-host/a2ui/index.html`
- `src/canvas-host/server.test.ts`
- `src/canvas-host/server.ts`
- `ui/src/ui/app-gateway.node.test.ts`
- `ui/src/ui/app-gateway.sessions.node.test.ts`
- `ui/src/ui/app-lifecycle-connect.node.test.ts`
- `ui/src/ui/app-lifecycle.node.test.ts`
- `ui/src/ui/app-tool-stream.node.test.ts`
- `ui/src/ui/canvas-url.test.ts`
- `ui/src/ui/chat-event-reload.test.ts`
- `ui/src/ui/chat-markdown.browser.test.ts`
- `ui/src/ui/chat-model-ref.test.ts`
- `ui/src/ui/chat-model-select-state.test.ts`
- `ui/src/ui/chat/build-chat-items.test.ts`
- `ui/src/ui/chat/context-notice.test.ts`
- `ui/src/ui/chat/export.node.test.ts`
- `ui/src/ui/chat/grouped-render.test.ts`
- `ui/src/ui/chat/message-extract.test.ts`
- `ui/src/ui/chat/message-normalizer.test.ts`
- `ui/src/ui/chat/run-controls.test.ts`
- `ui/src/ui/chat/session-controls.test.ts`
- `ui/src/ui/chat/slash-command-executor.node.test.ts`
- `ui/src/ui/chat/slash-commands.node.test.ts`
- `ui/src/ui/chat/status-indicators.test.ts`
- `ui/src/ui/chat/tool-cards.test.ts`
- `ui/src/ui/chat/tool-expansion-state.test.ts`
- `ui/src/ui/config-form.browser.test.ts`
- `ui/src/ui/focus-mode.browser.test.ts`
- `ui/src/ui/navigation-groups.test.ts`
- `ui/src/ui/plugin-activation.test.ts`
- `ui/src/ui/sidebar-status.browser.test.ts`
- `ui/src/ui/usage-helpers.node.test.ts`
- `ui/src/ui/user-identity.test.ts`
- `ui/src/ui/uuid.test.ts`
- `ui/src/ui/views/agents-panels-tools-skills.browser.test.ts`
- `ui/src/ui/views/agents-utils.test.ts`
- `ui/src/ui/views/agents.test.ts`
- `ui/src/ui/views/chat-image-open.browser.test.ts`
- `ui/src/ui/views/chat.browser.test.ts`
- `ui/src/ui/views/chat.test.ts`
- `ui/src/ui/views/command-palette.test.ts`
- `ui/src/ui/views/config-quick.test.ts`
- `ui/src/ui/views/cron-quick-create.node.test.ts`
- `ui/src/ui/views/cron.test.ts`
- `ui/src/ui/views/dreaming.test.ts`
- `ui/src/ui/views/nodes.devices.test.ts`
- `ui/src/ui/views/overview.node.test.ts`
- ... 3 more paths in `leaf-impact.json`

## `extensions/channel-plugins/googlechat`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/googlechat`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `49`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/googlechat/api.ts`
- `extensions/googlechat/channel-plugin-api.ts`
- `extensions/googlechat/contract-api.ts`
- `extensions/googlechat/index.ts`
- `extensions/googlechat/openclaw.plugin.json`
- `extensions/googlechat/package-manifest.contract.test.ts`
- `extensions/googlechat/package.json`
- `extensions/googlechat/runtime-api.ts`
- `extensions/googlechat/secret-contract-api.ts`
- `extensions/googlechat/setup-entry.ts`
- `extensions/googlechat/setup-plugin-api.ts`
- `extensions/googlechat/src/accounts.ts`
- `extensions/googlechat/src/actions.test.ts`
- `extensions/googlechat/src/actions.ts`
- `extensions/googlechat/src/api.ts`
- `extensions/googlechat/src/approval-auth.test.ts`
- `extensions/googlechat/src/approval-auth.ts`
- `extensions/googlechat/src/auth.ts`
- `extensions/googlechat/src/channel.adapters.ts`
- `extensions/googlechat/src/channel.deps.runtime.ts`
- `extensions/googlechat/src/channel.setup.ts`
- `extensions/googlechat/src/channel.test.ts`
- `extensions/googlechat/src/channel.ts`
- `extensions/googlechat/src/config-schema.test.ts`
- `extensions/googlechat/src/config-schema.ts`
- `extensions/googlechat/src/doctor-contract.test.ts`
- `extensions/googlechat/src/doctor-contract.ts`
- `extensions/googlechat/src/doctor.ts`
- `extensions/googlechat/src/gateway.ts`
- `extensions/googlechat/src/google-auth.runtime.test.ts`
- `extensions/googlechat/src/google-auth.runtime.ts`
- `extensions/googlechat/src/monitor-access.test.ts`
- `extensions/googlechat/src/monitor-access.ts`
- `extensions/googlechat/src/monitor-routing.ts`
- `extensions/googlechat/src/monitor-types.ts`
- `extensions/googlechat/src/monitor-webhook.test.ts`
- `extensions/googlechat/src/monitor-webhook.ts`
- `extensions/googlechat/src/monitor.ts`
- `extensions/googlechat/src/monitor.webhook-routing.test.ts`
- `extensions/googlechat/src/runtime.ts`
- `extensions/googlechat/src/secret-contract.test.ts`
- `extensions/googlechat/src/secret-contract.ts`
- `extensions/googlechat/src/sender-allow.ts`
- `extensions/googlechat/src/setup-core.ts`
- `extensions/googlechat/src/setup-surface.ts`
- `extensions/googlechat/src/setup.test.ts`
- `extensions/googlechat/src/targets.test.ts`
- `extensions/googlechat/src/targets.ts`
- `extensions/googlechat/tsconfig.json`

## `src/shared-misc-runtime-support/logging-support`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/logging-support`
- Coverage: `verified`
- Changed paths: `49`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/logger.test.ts`
- `src/logging/config.test.ts`
- `src/logging/config.ts`
- `src/logging/console-capture.test.ts`
- `src/logging/console-timestamp.test.ts`
- `src/logging/console.ts`
- `src/logging/diagnostic-log-events.test.ts`
- `src/logging/diagnostic-memory.test.ts`
- `src/logging/diagnostic-memory.ts`
- `src/logging/diagnostic-payload.ts`
- `src/logging/diagnostic-runtime.ts`
- `src/logging/diagnostic-session-state.ts`
- `src/logging/diagnostic-stability-bundle.test.ts`
- `src/logging/diagnostic-stability-bundle.ts`
- `src/logging/diagnostic-stability.test.ts`
- `src/logging/diagnostic-stability.ts`
- `src/logging/diagnostic-support-bundle.test.ts`
- `src/logging/diagnostic-support-bundle.ts`
- `src/logging/diagnostic-support-export.test.ts`
- `src/logging/diagnostic-support-export.ts`
- `src/logging/diagnostic-support-log-redaction.ts`
- `src/logging/diagnostic-support-redaction.ts`
- `src/logging/diagnostic.test.ts`
- `src/logging/diagnostic.ts`
- `src/logging/env-log-level.ts`
- `src/logging/level-filter.test.ts`
- `src/logging/levels.test.ts`
- `src/logging/levels.ts`
- `src/logging/log-file-path.ts`
- `src/logging/log-file-size-cap.test.ts`
- `src/logging/log-tail.test.ts`
- `src/logging/log-tail.ts`
- `src/logging/log-test-helpers.ts`
- `src/logging/logger-env.test.ts`
- `src/logging/logger-timestamp.test.ts`
- `src/logging/logger-transport.test.ts`
- `src/logging/logger.browser-import.test.ts`
- `src/logging/logger.ts`
- `src/logging/node-require.ts`
- `src/logging/parse-log-line.ts`
- `src/logging/redact-identifier.ts`
- `src/logging/redact.test.ts`
- `src/logging/redact.ts`
- `src/logging/subsystem.test.ts`
- `src/logging/subsystem.ts`
- `src/logging/test-helpers/diagnostic-log-capture.ts`
- `src/logging/test-helpers/warn-log-capture.ts`
- `src/logging/timestamps.ts`
- `src/logging/types.ts`

## `extensions/channel-plugins/nextcloud-talk`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/nextcloud-talk`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `46`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/nextcloud-talk/channel-plugin-api.ts`
- `extensions/nextcloud-talk/contract-api.ts`
- `extensions/nextcloud-talk/index.ts`
- `extensions/nextcloud-talk/openclaw.plugin.json`
- `extensions/nextcloud-talk/package-manifest.contract.test.ts`
- `extensions/nextcloud-talk/package.json`
- `extensions/nextcloud-talk/runtime-api.ts`
- `extensions/nextcloud-talk/secret-contract-api.ts`
- `extensions/nextcloud-talk/setup-entry.ts`
- `extensions/nextcloud-talk/src/accounts.ts`
- `extensions/nextcloud-talk/src/api.ts`
- `extensions/nextcloud-talk/src/approval-auth.test.ts`
- `extensions/nextcloud-talk/src/approval-auth.ts`
- `extensions/nextcloud-talk/src/channel-api.ts`
- `extensions/nextcloud-talk/src/channel.adapters.ts`
- `extensions/nextcloud-talk/src/channel.core.test.ts`
- `extensions/nextcloud-talk/src/channel.lifecycle.test.ts`
- `extensions/nextcloud-talk/src/channel.ts`
- `extensions/nextcloud-talk/src/config-schema.ts`
- `extensions/nextcloud-talk/src/core.test.ts`
- `extensions/nextcloud-talk/src/doctor-contract.ts`
- `extensions/nextcloud-talk/src/doctor.test.ts`
- `extensions/nextcloud-talk/src/doctor.ts`
- `extensions/nextcloud-talk/src/format.ts`
- `extensions/nextcloud-talk/src/gateway.ts`
- `extensions/nextcloud-talk/src/inbound.ts`
- `extensions/nextcloud-talk/src/monitor-runtime.ts`
- `extensions/nextcloud-talk/src/monitor.replay.test.ts`
- `extensions/nextcloud-talk/src/monitor.ts`
- `extensions/nextcloud-talk/src/policy.ts`
- `extensions/nextcloud-talk/src/registry-backed.contract.test.ts`
- `extensions/nextcloud-talk/src/replay-guard.ts`
- `extensions/nextcloud-talk/src/room-info.test.ts`
- `extensions/nextcloud-talk/src/room-info.ts`
- `extensions/nextcloud-talk/src/runtime.ts`
- `extensions/nextcloud-talk/src/secret-contract.ts`
- `extensions/nextcloud-talk/src/send.cfg-threading.test.ts`
- `extensions/nextcloud-talk/src/send.runtime.ts`
- `extensions/nextcloud-talk/src/send.ts`
- `extensions/nextcloud-talk/src/session-route.ts`
- `extensions/nextcloud-talk/src/setup-core.ts`
- `extensions/nextcloud-talk/src/setup-surface.ts`
- `extensions/nextcloud-talk/src/setup.test.ts`
- `extensions/nextcloud-talk/src/signature.ts`
- `extensions/nextcloud-talk/src/types.ts`
- `extensions/nextcloud-talk/tsconfig.json`

## `test-infra/fixtures-and-helpers/helpers-extensions`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/helpers-extensions`
- Coverage: `verified`
- Changed paths: `46`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `test/helpers/extensions/auth-token-assertions.ts`
- `test/helpers/extensions/bluebubbles-monitor.ts`
- `test/helpers/extensions/bundled-web-search-fast-path-contract.ts`
- `test/helpers/extensions/chunk-test-helpers.ts`
- `test/helpers/extensions/configured-binding-runtime.ts`
- `test/helpers/extensions/directory.ts`
- `test/helpers/extensions/discord-component-runtime.ts`
- `test/helpers/extensions/discord-provider.test-support.ts`
- `test/helpers/extensions/env.ts`
- `test/helpers/extensions/feishu-lifecycle.ts`
- `test/helpers/extensions/fetch-mock.ts`
- `test/helpers/extensions/frozen-time.ts`
- `test/helpers/extensions/jiti-runtime-api.ts`
- `test/helpers/extensions/matrix-monitor-route.ts`
- `test/helpers/extensions/matrix-route-test.ts`
- `test/helpers/extensions/media-understanding.ts`
- `test/helpers/extensions/mock-http-response.ts`
- `test/helpers/extensions/onboard-config.ts`
- `test/helpers/extensions/package-manifest-contract.ts`
- `test/helpers/extensions/plugin-api.ts`
- `test/helpers/extensions/plugin-command.ts`
- `test/helpers/extensions/plugin-registration-contract.ts`
- `test/helpers/extensions/plugin-registration.ts`
- `test/helpers/extensions/plugin-routing.ts`
- `test/helpers/extensions/plugin-runtime-mock.ts`
- `test/helpers/extensions/plugin-sdk-stub.cjs`
- `test/helpers/extensions/provider-auth-contract.ts`
- `test/helpers/extensions/provider-catalog-contract.ts`
- `test/helpers/extensions/provider-contract.ts`
- `test/helpers/extensions/provider-discovery-contract.ts`
- `test/helpers/extensions/provider-registration.ts`
- `test/helpers/extensions/provider-runtime-contract.ts`
- `test/helpers/extensions/provider-usage-fetch.ts`
- `test/helpers/extensions/runtime-env.ts`
- `test/helpers/extensions/send-config.ts`
- `test/helpers/extensions/setup-wizard.ts`
- `test/helpers/extensions/start-account-context.ts`
- `test/helpers/extensions/start-account-lifecycle.ts`
- `test/helpers/extensions/status-issues.ts`
- `test/helpers/extensions/subagent-hooks.ts`
- `test/helpers/extensions/telegram-plugin-command.ts`
- `test/helpers/extensions/temp-dir.ts`
- `test/helpers/extensions/temp-home.ts`
- `test/helpers/extensions/typed-cases.ts`
- `test/helpers/extensions/web-search-provider-contract.ts`
- `test/helpers/extensions/zalo-lifecycle.ts`

## `src/agent-runtime/runtime/context-subagents/subagent-registry`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/context-subagents/subagent-registry`
- Coverage: `verified`
- Changed paths: `42`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/subagent-registry-announce-read.ts`
- `src/agents/subagent-registry-cleanup.test.ts`
- `src/agents/subagent-registry-cleanup.ts`
- `src/agents/subagent-registry-completion.test.ts`
- `src/agents/subagent-registry-completion.ts`
- `src/agents/subagent-registry-helpers.test.ts`
- `src/agents/subagent-registry-helpers.ts`
- `src/agents/subagent-registry-lifecycle.test.ts`
- `src/agents/subagent-registry-lifecycle.ts`
- `src/agents/subagent-registry-queries.test.ts`
- `src/agents/subagent-registry-queries.ts`
- `src/agents/subagent-registry-read.ts`
- `src/agents/subagent-registry-run-manager.ts`
- `src/agents/subagent-registry-runtime.ts`
- `src/agents/subagent-registry-steer-runtime.ts`
- `src/agents/subagent-registry.announce-loop-guard.test.ts`
- `src/agents/subagent-registry.archive.e2e.test.ts`
- `src/agents/subagent-registry.context-engine.test.ts`
- `src/agents/subagent-registry.lifecycle-retry-grace.e2e.test.ts`
- `src/agents/subagent-registry.mocks.shared.ts`
- `src/agents/subagent-registry.nested.e2e.test.ts`
- `src/agents/subagent-registry.persistence.resume.test.ts`
- `src/agents/subagent-registry.persistence.test-support.ts`
- `src/agents/subagent-registry.persistence.test.ts`
- `src/agents/subagent-registry.runtime.ts`
- `src/agents/subagent-registry.steer-restart.test.ts`
- `src/agents/subagent-registry.store.ts`
- `src/agents/subagent-registry.test-helpers.ts`
- `src/agents/subagent-registry.test.ts`
- `src/agents/subagent-registry.ts`
- `src/agents/subagent-registry.types.ts`
- `src/agents/subagent-spawn.attachments.test.ts`
- `src/agents/subagent-spawn.context.test.ts`
- `src/agents/subagent-spawn.depth-limits.test.ts`
- `src/agents/subagent-spawn.model-session.test.ts`
- `src/agents/subagent-spawn.runtime.ts`
- `src/agents/subagent-spawn.test-helpers.ts`
- `src/agents/subagent-spawn.test.ts`
- `src/agents/subagent-spawn.thread-binding.test.ts`
- `src/agents/subagent-spawn.ts`
- `src/agents/subagent-spawn.types.ts`
- `src/agents/subagent-spawn.workspace.test.ts`

## `extensions/channel-plugins/irc`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/irc`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `41`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/irc/api.ts`
- `extensions/irc/channel-plugin-api.ts`
- `extensions/irc/configured-state.ts`
- `extensions/irc/contract-api.ts`
- `extensions/irc/index.test.ts`
- `extensions/irc/index.ts`
- `extensions/irc/openclaw.plugin.json`
- `extensions/irc/package-manifest.contract.test.ts`
- `extensions/irc/package.json`
- `extensions/irc/runtime-api.test.ts`
- `extensions/irc/runtime-api.ts`
- `extensions/irc/secret-contract-api.ts`
- `extensions/irc/setup-entry.ts`
- `extensions/irc/src/accounts.ts`
- `extensions/irc/src/channel-api.ts`
- `extensions/irc/src/channel-runtime.ts`
- `extensions/irc/src/channel.test.ts`
- `extensions/irc/src/channel.ts`
- `extensions/irc/src/client.ts`
- `extensions/irc/src/config-schema.test.ts`
- `extensions/irc/src/config-schema.ts`
- `extensions/irc/src/doctor.ts`
- `extensions/irc/src/gateway.ts`
- `extensions/irc/src/inbound.ts`
- `extensions/irc/src/monitor.ts`
- `extensions/irc/src/normalize.ts`
- `extensions/irc/src/outbound-base.ts`
- `extensions/irc/src/policy.test.ts`
- `extensions/irc/src/policy.ts`
- `extensions/irc/src/probe.test.ts`
- `extensions/irc/src/registry-backed.contract.test.ts`
- `extensions/irc/src/runtime-api.ts`
- `extensions/irc/src/runtime.ts`
- `extensions/irc/src/secret-contract.ts`
- `extensions/irc/src/send.test.ts`
- `extensions/irc/src/send.ts`
- `extensions/irc/src/setup-core.ts`
- `extensions/irc/src/setup-surface.ts`
- `extensions/irc/src/setup.test.ts`
- `extensions/irc/tsconfig.json`
- `src/runtime.ts`

## `extensions/skill-plugins/acpx`

- Feature: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/acpx`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `41`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/acpx/AGENTS.md`
- `extensions/acpx/CLAUDE.md`
- `extensions/acpx/index.test.ts`
- `extensions/acpx/index.ts`
- `extensions/acpx/openclaw.plugin.json`
- `extensions/acpx/package.json`
- `extensions/acpx/register.runtime.ts`
- `extensions/acpx/runtime-api.ts`
- `extensions/acpx/setup-api.ts`
- `extensions/acpx/skills/acp-router/SKILL.md`
- `extensions/acpx/src/acpx-runtime-compat.d.ts`
- `extensions/acpx/src/codex-auth-bridge.test.ts`
- `extensions/acpx/src/codex-auth-bridge.ts`
- `extensions/acpx/src/config-schema.ts`
- `extensions/acpx/src/config.test.ts`
- `extensions/acpx/src/config.ts`
- `extensions/acpx/src/ensure.test.ts`
- `extensions/acpx/src/ensure.ts`
- `extensions/acpx/src/manifest.test.ts`
- `extensions/acpx/src/runtime-internals/control-errors.test.ts`
- `extensions/acpx/src/runtime-internals/control-errors.ts`
- `extensions/acpx/src/runtime-internals/error-format.mjs`
- `extensions/acpx/src/runtime-internals/events.test.ts`
- `extensions/acpx/src/runtime-internals/events.ts`
- `extensions/acpx/src/runtime-internals/jsonrpc.test.ts`
- `extensions/acpx/src/runtime-internals/jsonrpc.ts`
- `extensions/acpx/src/runtime-internals/mcp-agent-command.test.ts`
- `extensions/acpx/src/runtime-internals/mcp-agent-command.ts`
- `extensions/acpx/src/runtime-internals/mcp-command-line.mjs`
- `extensions/acpx/src/runtime-internals/mcp-command-line.test.ts`
- `extensions/acpx/src/runtime-internals/mcp-proxy.mjs`
- `extensions/acpx/src/runtime-internals/mcp-proxy.test.ts`
- `extensions/acpx/src/runtime-internals/process.test.ts`
- `extensions/acpx/src/runtime-internals/process.ts`
- `extensions/acpx/src/runtime-internals/shared.ts`
- `extensions/acpx/src/runtime.test.ts`
- `extensions/acpx/src/runtime.ts`
- `extensions/acpx/src/service.test.ts`
- `extensions/acpx/src/service.ts`
- `extensions/acpx/src/test-utils/runtime-fixtures.ts`
- `extensions/acpx/tsconfig.json`

## `src/shared-misc-runtime-support/compat-hooks`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/compat-hooks`
- Coverage: `verified`
- Changed paths: `41`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/compat/legacy-names.test.ts`
- `src/compat/legacy-names.ts`
- `src/hooks/bundled/boot-md/handler.test.ts`
- `src/hooks/bundled/boot-md/handler.ts`
- `src/hooks/bundled/bootstrap-extra-files/HOOK.md`
- `src/hooks/bundled/bootstrap-extra-files/handler.ts`
- `src/hooks/bundled/command-logger/handler.ts`
- `src/hooks/bundled/session-memory/handler.test.ts`
- `src/hooks/bundled/session-memory/handler.ts`
- `src/hooks/bundled/session-memory/transcript.ts`
- `src/hooks/configured.ts`
- `src/hooks/fire-and-forget.test.ts`
- `src/hooks/fire-and-forget.ts`
- `src/hooks/frontmatter.ts`
- `src/hooks/gmail-ops.ts`
- `src/hooks/gmail-setup-utils.ts`
- `src/hooks/gmail-watcher-lifecycle.ts`
- `src/hooks/gmail-watcher.ts`
- `src/hooks/gmail.test.ts`
- `src/hooks/gmail.ts`
- `src/hooks/hooks-status.ts`
- `src/hooks/hooks.ts`
- `src/hooks/install.test.ts`
- `src/hooks/install.ts`
- `src/hooks/installs.ts`
- `src/hooks/internal-hook-types.ts`
- `src/hooks/internal-hooks.test.ts`
- `src/hooks/internal-hooks.ts`
- `src/hooks/legacy-config.ts`
- `src/hooks/llm-slug-generator.test.ts`
- `src/hooks/llm-slug-generator.ts`
- `src/hooks/loader.test.ts`
- `src/hooks/loader.ts`
- `src/hooks/message-hook-mappers.test.ts`
- `src/hooks/message-hook-mappers.ts`
- `src/hooks/module-loader.ts`
- `src/hooks/plugin-hooks.test.ts`
- `src/hooks/plugin-hooks.ts`
- `src/hooks/update.test.ts`
- `src/hooks/update.ts`
- `src/hooks/workspace.ts`

## `apps/ios-android/android-app`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/android-app`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `40`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/android/app/src/main/AndroidManifest.xml`
- `apps/android/app/src/main/java/ai/openclaw/app/AssistantLaunch.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/MainActivity.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/MainViewModel.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/NodeRuntime.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/NotificationForwardingPolicy.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/PermissionRequester.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/SecurePrefs.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/chat/ChatController.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/DeviceAuthStore.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewayDiscovery.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewayHostSecurity.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewaySession.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/gateway/GatewayTls.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/CanvasActionTrust.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/ConnectionManager.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/DeviceHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/DeviceNotificationListenerService.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/InvokeCommandRegistry.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/InvokeDispatcher.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/SmsHandler.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/node/SmsManager.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/CanvasScreen.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/ConnectTabScreen.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/GatewayConfigResolver.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/GatewayDiagnostics.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/GatewayPairingRetry.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/OnboardingFlow.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/PostOnboardingTabs.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/SettingsSheet.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/chat/ChatComposer.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/chat/ChatMarkdown.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/chat/ChatMessageViews.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/ui/chat/ChatSheetContent.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/voice/MicCaptureManager.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/voice/TalkAudioPlayer.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/voice/TalkModeManager.kt`
- `apps/android/app/src/main/java/ai/openclaw/app/voice/TalkSpeakClient.kt`
- `apps/android/app/src/main/res/values/assistant.xml`
- `apps/android/app/src/main/res/xml/shortcuts.xml`

## `docs/mintlify/concepts`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/concepts`
- Coverage: `fallback`
- Changed paths: `40`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `VISION.md`
- `docs/concepts/active-memory.md`
- `docs/concepts/agent-loop.md`
- `docs/concepts/agent-runtimes.md`
- `docs/concepts/agent-workspace.md`
- `docs/concepts/agent.md`
- `docs/concepts/architecture.md`
- `docs/concepts/compaction.md`
- `docs/concepts/context-engine.md`
- `docs/concepts/context.md`
- `docs/concepts/delegate-architecture.md`
- `docs/concepts/dreaming.md`
- `docs/concepts/experimental-features.md`
- `docs/concepts/features.md`
- `docs/concepts/markdown-formatting.md`
- `docs/concepts/memory-builtin.md`
- `docs/concepts/memory-honcho.md`
- `docs/concepts/memory-qmd.md`
- `docs/concepts/memory-search.md`
- `docs/concepts/memory.md`
- `docs/concepts/messages.md`
- `docs/concepts/model-failover.md`
- `docs/concepts/model-providers.md`
- `docs/concepts/models.md`
- `docs/concepts/multi-agent.md`
- `docs/concepts/oauth.md`
- `docs/concepts/presence.md`
- `docs/concepts/qa-e2e-automation.md`
- `docs/concepts/queue.md`
- `docs/concepts/retry.md`
- `docs/concepts/session-pruning.md`
- `docs/concepts/session-tool.md`
- `docs/concepts/session.md`
- `docs/concepts/soul.md`
- `docs/concepts/streaming.md`
- `docs/concepts/system-prompt.md`
- `docs/concepts/timezone.md`
- `docs/concepts/typebox.md`
- `docs/concepts/typing-indicators.md`
- `docs/concepts/usage-tracking.md`

## `docs/mintlify/gateway`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/gateway`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `39`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/gateway/authentication.md`
- `docs/gateway/background-process.md`
- `docs/gateway/bonjour.md`
- `docs/gateway/bridge-protocol.md`
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
- `docs/gateway/network-model.md`
- `docs/gateway/openai-http-api.md`
- `docs/gateway/openresponses-http-api.md`
- `docs/gateway/openshell.md`
- `docs/gateway/pairing.md`
- `docs/gateway/protocol.md`
- `docs/gateway/remote-gateway-readme.md`
- `docs/gateway/remote.md`
- `docs/gateway/sandbox-vs-tool-policy-vs-elevated.md`
- `docs/gateway/sandboxing.md`
- `docs/gateway/secrets-plan-contract.md`
- `docs/gateway/secrets.md`
- `docs/gateway/security/audit-checks.md`
- `docs/gateway/security/index.md`
- `docs/gateway/tailscale.md`
- `docs/gateway/tools-invoke-http-api.md`
- `docs/gateway/troubleshooting.md`
- `docs/gateway/trusted-proxy-auth.md`

## `extensions/channel-plugins/nostr`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/nostr`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `39`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/nostr/CHANGELOG.md`
- `extensions/nostr/README.md`
- `extensions/nostr/api.ts`
- `extensions/nostr/channel-plugin-api.ts`
- `extensions/nostr/index.ts`
- `extensions/nostr/openclaw.plugin.json`
- `extensions/nostr/package-manifest.contract.test.ts`
- `extensions/nostr/package.json`
- `extensions/nostr/setup-entry.ts`
- `extensions/nostr/setup-plugin-api.ts`
- `extensions/nostr/src/channel-api.ts`
- `extensions/nostr/src/channel.inbound.test.ts`
- `extensions/nostr/src/channel.outbound.test.ts`
- `extensions/nostr/src/channel.setup.ts`
- `extensions/nostr/src/channel.test.ts`
- `extensions/nostr/src/channel.ts`
- `extensions/nostr/src/config-schema.ts`
- `extensions/nostr/src/gateway.ts`
- `extensions/nostr/src/inbound-direct-dm-runtime.ts`
- `extensions/nostr/src/nostr-bus.fuzz.test.ts`
- `extensions/nostr/src/nostr-bus.inbound.test.ts`
- `extensions/nostr/src/nostr-bus.integration.test.ts`
- `extensions/nostr/src/nostr-bus.test.ts`
- `extensions/nostr/src/nostr-bus.ts`
- `extensions/nostr/src/nostr-key-utils.ts`
- `extensions/nostr/src/nostr-profile-core.ts`
- `extensions/nostr/src/nostr-profile-http-runtime.ts`
- `extensions/nostr/src/nostr-profile-http.test.ts`
- `extensions/nostr/src/nostr-profile-http.ts`
- `extensions/nostr/src/nostr-profile-import.ts`
- `extensions/nostr/src/nostr-profile-url-safety.ts`
- `extensions/nostr/src/nostr-profile.fuzz.test.ts`
- `extensions/nostr/src/nostr-profile.ts`
- `extensions/nostr/src/nostr-state-store.ts`
- `extensions/nostr/src/runtime.ts`
- `extensions/nostr/src/setup-surface.ts`
- `extensions/nostr/src/test-fixtures.ts`
- `extensions/nostr/src/types.ts`
- `extensions/nostr/tsconfig.json`

## `scripts/packaging/e2e`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/e2e`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `38`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/e2e/Dockerfile`
- `scripts/e2e/Dockerfile.qr-import`
- `scripts/e2e/agents-delete-shared-workspace-docker.sh`
- `scripts/e2e/build-image.sh`
- `scripts/e2e/bun-global-install-smoke.sh`
- `scripts/e2e/bundled-channel-runtime-deps-docker.sh`
- `scripts/e2e/config-reload-source-docker.sh`
- `scripts/e2e/cron-mcp-cleanup-docker-client.ts`
- `scripts/e2e/cron-mcp-cleanup-docker.sh`
- `scripts/e2e/cron-mcp-cleanup-seed.ts`
- `scripts/e2e/docker-openai-seed.ts`
- `scripts/e2e/doctor-install-switch-docker.sh`
- `scripts/e2e/gateway-network-docker.sh`
- `scripts/e2e/lib/parallels-macos-common.sh`
- `scripts/e2e/lib/parallels-package-common.sh`
- `scripts/e2e/mcp-channels-docker-client.ts`
- `scripts/e2e/mcp-channels-docker.sh`
- `scripts/e2e/mcp-channels-harness.ts`
- `scripts/e2e/mcp-channels-seed.ts`
- `scripts/e2e/mock-openai-server.mjs`
- `scripts/e2e/npm-onboard-channel-agent-docker.sh`
- `scripts/e2e/npm-telegram-live-docker.sh`
- `scripts/e2e/npm-telegram-live-runner.ts`
- `scripts/e2e/onboard-docker.sh`
- `scripts/e2e/openai-image-auth-docker-client.ts`
- `scripts/e2e/openai-image-auth-docker.sh`
- `scripts/e2e/openai-web-search-minimal-docker.sh`
- `scripts/e2e/openwebui-docker.sh`
- `scripts/e2e/openwebui-probe.mjs`
- `scripts/e2e/parallels-linux-smoke.sh`
- `scripts/e2e/parallels-macos-smoke.sh`
- `scripts/e2e/parallels-npm-update-smoke.sh`
- `scripts/e2e/parallels-windows-smoke.sh`
- `scripts/e2e/pi-bundle-mcp-tools-docker-client.ts`
- `scripts/e2e/pi-bundle-mcp-tools-docker.sh`
- `scripts/e2e/plugin-update-unchanged-docker.sh`
- `scripts/e2e/plugins-docker.sh`
- `scripts/e2e/qr-import-docker.sh`

## `src/cli-commands/command-implementations/channel-plugin-commands`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/channel-plugin-commands`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `38`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/commands/channel-account-context.test.ts`
- `src/commands/channel-account-context.ts`
- `src/commands/channel-setup/channel-plugin-resolution.test.ts`
- `src/commands/channel-setup/channel-plugin-resolution.ts`
- `src/commands/channel-setup/discovery.test.ts`
- `src/commands/channel-setup/discovery.ts`
- `src/commands/channel-setup/plugin-install.test.ts`
- `src/commands/channel-setup/plugin-install.ts`
- `src/commands/channel-setup/registry.test.ts`
- `src/commands/channel-setup/registry.ts`
- `src/commands/channel-setup/trusted-catalog.ts`
- `src/commands/channel-setup/workspace-shadow-bypass.test.ts`
- `src/commands/channel-test-helpers.ts`
- `src/commands/channel-test-registry.ts`
- `src/commands/channels.add.test.ts`
- `src/commands/channels.adds-non-default-telegram-account.test.ts`
- `src/commands/channels.config-only-status-output.test.ts`
- `src/commands/channels.list.auth-profiles.test.ts`
- `src/commands/channels.mock-harness.ts`
- `src/commands/channels.plugin-install.test-helpers.ts`
- `src/commands/channels.remove.test.ts`
- `src/commands/channels.resolve.test.ts`
- `src/commands/channels.status.command-flow.test.ts`
- `src/commands/channels.status.external-env.test.ts`
- `src/commands/channels.surfaces-signal-runtime-errors-channels-status-output.test.ts`
- `src/commands/channels/add-mutators.ts`
- `src/commands/channels/add.ts`
- `src/commands/channels/capabilities.test.ts`
- `src/commands/channels/capabilities.ts`
- `src/commands/channels/list.ts`
- `src/commands/channels/logs.ts`
- `src/commands/channels/remove.ts`
- `src/commands/channels/resolve.ts`
- `src/commands/channels/shared.ts`
- `src/commands/channels/status-config-format.ts`
- `src/commands/channels/status.ts`
- `src/commands/configure.channels.test.ts`
- `src/commands/configure.channels.ts`

## `apps/macos/app-sources`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/macos/app-sources`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `36`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/macos/Package.resolved`
- `apps/macos/Package.swift`
- `apps/macos/Sources/OpenClaw/AppState.swift`
- `apps/macos/Sources/OpenClaw/ChannelsStore+Lifecycle.swift`
- `apps/macos/Sources/OpenClaw/ChannelsStore.swift`
- `apps/macos/Sources/OpenClaw/CommandResolver.swift`
- `apps/macos/Sources/OpenClaw/Constants.swift`
- `apps/macos/Sources/OpenClaw/ExecAllowlistMatcher.swift`
- `apps/macos/Sources/OpenClaw/ExecApprovalCommandDisplaySanitizer.swift`
- `apps/macos/Sources/OpenClaw/ExecApprovals.swift`
- `apps/macos/Sources/OpenClaw/ExecApprovalsSocket.swift`
- `apps/macos/Sources/OpenClaw/GatewayConnection.swift`
- `apps/macos/Sources/OpenClaw/GatewayEnvironment.swift`
- `apps/macos/Sources/OpenClaw/GeneralSettings.swift`
- `apps/macos/Sources/OpenClaw/HostEnvSanitizer.swift`
- `apps/macos/Sources/OpenClaw/HostEnvSecurityPolicy.generated.swift`
- `apps/macos/Sources/OpenClaw/MenuBar.swift`
- `apps/macos/Sources/OpenClaw/NodeMode/MacNodeModeCoordinator.swift`
- `apps/macos/Sources/OpenClaw/NodeMode/MacNodeRuntime.swift`
- `apps/macos/Sources/OpenClaw/NodeMode/MacNodeRuntimeMainActorServices.swift`
- `apps/macos/Sources/OpenClaw/NodeMode/MacNodeScreenCommands.swift`
- `apps/macos/Sources/OpenClaw/NodePairingApprovalPrompter.swift`
- `apps/macos/Sources/OpenClaw/OnboardingView+Pages.swift`
- `apps/macos/Sources/OpenClaw/RemoteGatewayProbe.swift`
- `apps/macos/Sources/OpenClaw/RemotePortTunnel.swift`
- `apps/macos/Sources/OpenClaw/ScreenSnapshotService.swift`
- `apps/macos/Sources/OpenClaw/ShellExecutor.swift`
- `apps/macos/Sources/OpenClaw/SystemRunSettingsView.swift`
- `apps/macos/Sources/OpenClaw/TalkMLXSpeechSynthesizer.swift`
- `apps/macos/Sources/OpenClaw/TalkModeController.swift`
- `apps/macos/Sources/OpenClaw/TalkModeGatewayConfig.swift`
- `apps/macos/Sources/OpenClaw/TalkModeRuntime.swift`
- `apps/macos/Sources/OpenClaw/VoiceWakeRuntime.swift`
- `apps/macos/Sources/OpenClaw/VoiceWakeSettings.swift`
- `apps/macos/Sources/OpenClawDiscovery/WideAreaGatewayDiscovery.swift`
- `apps/macos/Sources/OpenClawProtocol/GatewayModels.swift`

## `extensions/channel-plugins/twitch`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/twitch`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `36`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/twitch/CHANGELOG.md`
- `extensions/twitch/README.md`
- `extensions/twitch/api.ts`
- `extensions/twitch/channel-plugin-api.ts`
- `extensions/twitch/index.test.ts`
- `extensions/twitch/index.ts`
- `extensions/twitch/openclaw.plugin.json`
- `extensions/twitch/package-manifest.contract.test.ts`
- `extensions/twitch/package.json`
- `extensions/twitch/setup-entry.ts`
- `extensions/twitch/setup-plugin-api.ts`
- `extensions/twitch/src/access-control.ts`
- `extensions/twitch/src/actions.test.ts`
- `extensions/twitch/src/actions.ts`
- `extensions/twitch/src/config.test.ts`
- `extensions/twitch/src/config.ts`
- `extensions/twitch/src/monitor.ts`
- `extensions/twitch/src/outbound.test.ts`
- `extensions/twitch/src/outbound.ts`
- `extensions/twitch/src/plugin.test.ts`
- `extensions/twitch/src/plugin.ts`
- `extensions/twitch/src/probe.test.ts`
- `extensions/twitch/src/probe.ts`
- `extensions/twitch/src/resolver.ts`
- `extensions/twitch/src/runtime.ts`
- `extensions/twitch/src/send.test.ts`
- `extensions/twitch/src/send.ts`
- `extensions/twitch/src/setup-surface.test.ts`
- `extensions/twitch/src/setup-surface.ts`
- `extensions/twitch/src/status.ts`
- `extensions/twitch/src/token.test.ts`
- `extensions/twitch/src/token.ts`
- `extensions/twitch/src/twitch-client.test.ts`
- `extensions/twitch/src/twitch-client.ts`
- `extensions/twitch/src/utils/twitch.ts`
- `extensions/twitch/tsconfig.json`

## `extensions/provider-plugins/ollama`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/ollama`
- Coverage: `verified`
- Changed paths: `34`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/ollama/api.ts`
- `extensions/ollama/index.test.ts`
- `extensions/ollama/index.ts`
- `extensions/ollama/openclaw.plugin.json`
- `extensions/ollama/package.json`
- `extensions/ollama/plugin-registration.contract.test.ts`
- `extensions/ollama/provider-discovery.contract.test.ts`
- `extensions/ollama/provider-discovery.import-guard.test.ts`
- `extensions/ollama/provider-discovery.test.ts`
- `extensions/ollama/provider-discovery.ts`
- `extensions/ollama/provider-policy-api.test.ts`
- `extensions/ollama/provider-policy-api.ts`
- `extensions/ollama/provider.contract.test.ts`
- `extensions/ollama/runtime-api.ts`
- `extensions/ollama/src/defaults.ts`
- `extensions/ollama/src/discovery-shared.ts`
- `extensions/ollama/src/embedding-provider.test.ts`
- `extensions/ollama/src/embedding-provider.ts`
- `extensions/ollama/src/media-understanding-provider.ts`
- `extensions/ollama/src/memory-embedding-adapter.ts`
- `extensions/ollama/src/ollama-json.ts`
- `extensions/ollama/src/provider-models.ssrf.test.ts`
- `extensions/ollama/src/provider-models.test.ts`
- `extensions/ollama/src/provider-models.ts`
- `extensions/ollama/src/setup.test.ts`
- `extensions/ollama/src/setup.ts`
- `extensions/ollama/src/stream-runtime.test.ts`
- `extensions/ollama/src/stream.test.ts`
- `extensions/ollama/src/stream.ts`
- `extensions/ollama/src/web-search-provider.test.ts`
- `extensions/ollama/src/web-search-provider.ts`
- `extensions/ollama/tsconfig.json`
- `extensions/ollama/web-search-contract-api.ts`
- `extensions/ollama/web-search-provider.ts`

## `docs/mintlify/channels`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/channels`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `33`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

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
- `docs/channels/location.md`
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
- `docs/channels/wechat.md`
- `docs/channels/whatsapp.md`
- `docs/channels/zalo.md`
- `docs/channels/zalouser.md`

## `extensions/provider-plugins/minimax`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/minimax`
- Coverage: `verified`
- Changed paths: `32`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/minimax/image-generation-provider.test.ts`
- `extensions/minimax/image-generation-provider.ts`
- `extensions/minimax/index.test.ts`
- `extensions/minimax/index.ts`
- `extensions/minimax/media-understanding-provider.ts`
- `extensions/minimax/minimax.live.test.ts`
- `extensions/minimax/model-definitions.test.ts`
- `extensions/minimax/model-definitions.ts`
- `extensions/minimax/music-generation-provider.test.ts`
- `extensions/minimax/music-generation-provider.ts`
- `extensions/minimax/onboard.test.ts`
- `extensions/minimax/openclaw.plugin.json`
- `extensions/minimax/package.json`
- `extensions/minimax/plugin-registration.contract.test.ts`
- `extensions/minimax/provider-catalog.ts`
- `extensions/minimax/provider-contract-api.ts`
- `extensions/minimax/provider-discovery.contract.test.ts`
- `extensions/minimax/provider-http.test-helpers.ts`
- `extensions/minimax/provider-registration.ts`
- `extensions/minimax/provider.contract.test.ts`
- `extensions/minimax/speech-provider.test.ts`
- `extensions/minimax/speech-provider.ts`
- `extensions/minimax/src/minimax-web-search-provider.runtime.ts`
- `extensions/minimax/src/minimax-web-search-provider.test.ts`
- `extensions/minimax/src/minimax-web-search-provider.ts`
- `extensions/minimax/test-api.ts`
- `extensions/minimax/tsconfig.json`
- `extensions/minimax/tts.ts`
- `extensions/minimax/video-generation-provider.test.ts`
- `extensions/minimax/video-generation-provider.ts`
- `extensions/minimax/web-search-contract-api.ts`
- `extensions/minimax/web-search-provider.ts`

## `apps/ios-android/ios-app`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/ios-app`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `30`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/ios/Config/Signing.xcconfig`
- `apps/ios/Config/Version.xcconfig`
- `apps/ios/README.md`
- `apps/ios/Sources/Device/DeviceInfoHelper.swift`
- `apps/ios/Sources/Gateway/GatewayConnectionController.swift`
- `apps/ios/Sources/Gateway/GatewaySettingsStore.swift`
- `apps/ios/Sources/HomeToolbar.swift`
- `apps/ios/Sources/LiveActivity/LiveActivityManager.swift`
- `apps/ios/Sources/Model/NodeAppModel+Canvas.swift`
- `apps/ios/Sources/Model/NodeAppModel.swift`
- `apps/ios/Sources/Onboarding/GatewayOnboardingView.swift`
- `apps/ios/Sources/Onboarding/OnboardingWizardView.swift`
- `apps/ios/Sources/OpenClawApp.swift`
- `apps/ios/Sources/Push/ExecApprovalNotificationBridge.swift`
- `apps/ios/Sources/RootCanvas.swift`
- `apps/ios/Sources/RootTabs.swift`
- `apps/ios/Sources/Screen/ScreenController.swift`
- `apps/ios/Sources/Screen/ScreenWebView.swift`
- `apps/ios/Sources/Services/NodeServiceProtocols.swift`
- `apps/ios/Sources/Services/NotificationService.swift`
- `apps/ios/Sources/Services/WatchConnectivityTransport.swift`
- `apps/ios/Sources/Services/WatchMessagingPayloadCodec.swift`
- `apps/ios/Sources/Services/WatchMessagingService.swift`
- `apps/ios/Sources/Settings/SettingsTab.swift`
- `apps/ios/Sources/Status/StatusActivityBuilder.swift`
- `apps/ios/Sources/Voice/TalkModeManager.swift`
- `apps/ios/Tests/ExecApprovalNotificationBridgeTests.swift`
- `apps/ios/Tests/NodeAppModelInvokeTests.swift`
- `apps/ios/Tests/OpenClawAppDelegateTests.swift`
- `apps/ios/Tests/ScreenControllerTests.swift`

## `extensions/channel-plugins/synology-chat`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/synology-chat`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `30`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/synology-chat/api.ts`
- `extensions/synology-chat/channel-plugin-api.ts`
- `extensions/synology-chat/contract-api.ts`
- `extensions/synology-chat/index.ts`
- `extensions/synology-chat/openclaw.plugin.json`
- `extensions/synology-chat/package-manifest.contract.test.ts`
- `extensions/synology-chat/package.json`
- `extensions/synology-chat/setup-entry.ts`
- `extensions/synology-chat/src/accounts.ts`
- `extensions/synology-chat/src/approval-auth.test.ts`
- `extensions/synology-chat/src/approval-auth.ts`
- `extensions/synology-chat/src/channel.integration.test.ts`
- `extensions/synology-chat/src/channel.test.ts`
- `extensions/synology-chat/src/channel.ts`
- `extensions/synology-chat/src/client.test.ts`
- `extensions/synology-chat/src/client.ts`
- `extensions/synology-chat/src/core.test.ts`
- `extensions/synology-chat/src/gateway-runtime.ts`
- `extensions/synology-chat/src/inbound-turn.ts`
- `extensions/synology-chat/src/registry-backed.contract.test.ts`
- `extensions/synology-chat/src/runtime.ts`
- `extensions/synology-chat/src/security-audit.test.ts`
- `extensions/synology-chat/src/security-audit.ts`
- `extensions/synology-chat/src/security.ts`
- `extensions/synology-chat/src/session-key.ts`
- `extensions/synology-chat/src/setup-surface.ts`
- `extensions/synology-chat/src/test-http-utils.ts`
- `extensions/synology-chat/src/webhook-handler.test.ts`
- `extensions/synology-chat/src/webhook-handler.ts`
- `extensions/synology-chat/tsconfig.json`

## `extensions/skill-plugins/diffs`

- Feature: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/diffs`
- Coverage: `verified`
- Changed paths: `30`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/diffs/README.md`
- `extensions/diffs/assets/viewer-runtime.js`
- `extensions/diffs/index.ts`
- `extensions/diffs/openclaw.plugin.json`
- `extensions/diffs/package.json`
- `extensions/diffs/runtime-api.ts`
- `extensions/diffs/skills/diffs/SKILL.md`
- `extensions/diffs/src/browser.test.ts`
- `extensions/diffs/src/browser.ts`
- `extensions/diffs/src/config.test.ts`
- `extensions/diffs/src/config.ts`
- `extensions/diffs/src/http.ts`
- `extensions/diffs/src/language-hints.test.ts`
- `extensions/diffs/src/language-hints.ts`
- `extensions/diffs/src/plugin.ts`
- `extensions/diffs/src/render-target.test.ts`
- `extensions/diffs/src/render.test.ts`
- `extensions/diffs/src/render.ts`
- `extensions/diffs/src/store.test.ts`
- `extensions/diffs/src/store.ts`
- `extensions/diffs/src/test-helpers.ts`
- `extensions/diffs/src/tool-render-output.test.ts`
- `extensions/diffs/src/tool.test.ts`
- `extensions/diffs/src/tool.ts`
- `extensions/diffs/src/types.ts`
- `extensions/diffs/src/url.ts`
- `extensions/diffs/src/viewer-assets.ts`
- `extensions/diffs/src/viewer-client.ts`
- `extensions/diffs/src/viewer-payload.ts`
- `extensions/diffs/tsconfig.json`

## `src/cli-commands/command-implementations/agent-command-cli`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/agent-command-cli`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `30`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/commands/agent-command.test-mocks.ts`
- `src/commands/agent-command.test-support.ts`
- `src/commands/agent.acp.test.ts`
- `src/commands/agent.cli-provider.test.ts`
- `src/commands/agent.delivery.test.ts`
- `src/commands/agent.runtime-config.test.ts`
- `src/commands/agent.session.test.ts`
- `src/commands/agent/delivery.ts`
- `src/commands/agent/run-context.ts`
- `src/commands/agent/session-store.test.ts`
- `src/commands/agent/session-store.ts`
- `src/commands/agent/session.test.ts`
- `src/commands/agent/types.ts`
- `src/commands/agents.add.test.ts`
- `src/commands/agents.bind.commands.test.ts`
- `src/commands/agents.bind.matrix.integration.test.ts`
- `src/commands/agents.bind.test-support.ts`
- `src/commands/agents.binding-format.ts`
- `src/commands/agents.bindings.ts`
- `src/commands/agents.command-shared.ts`
- `src/commands/agents.commands.add.ts`
- `src/commands/agents.commands.bind.ts`
- `src/commands/agents.commands.delete.ts`
- `src/commands/agents.commands.identity.ts`
- `src/commands/agents.config.ts`
- `src/commands/agents.delete.test.ts`
- `src/commands/agents.identity.test.ts`
- `src/commands/agents.providers.test.ts`
- `src/commands/agents.providers.ts`
- `src/commands/agents.test.ts`

## `src/shared-misc-runtime-support/test-support`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/test-support`
- Coverage: `verified`
- Changed paths: `30`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/test-helpers/resolve-target-error-cases.ts`
- `src/test-helpers/ssrf.ts`
- `src/test-helpers/temp-dir.ts`
- `src/test-helpers/whatsapp-outbound.ts`
- `src/test-helpers/windows-cmd-shim.ts`
- `src/test-utils/auth-token-assertions.ts`
- `src/test-utils/bundled-plugin-public-surface.ts`
- `src/test-utils/camera-url-test-helpers.ts`
- `src/test-utils/channel-plugin-test-fixtures.ts`
- `src/test-utils/channel-plugins.ts`
- `src/test-utils/env.ts`
- `src/test-utils/fetch-mock.ts`
- `src/test-utils/generation-live-test-helpers.ts`
- `src/test-utils/imessage-test-plugin.ts`
- `src/test-utils/mock-http-response.ts`
- `src/test-utils/plugin-registration.ts`
- `src/test-utils/ports.ts`
- `src/test-utils/provider-registry-allowlist.test-helpers.ts`
- `src/test-utils/repo-scan.ts`
- `src/test-utils/runtime-source-guardrail-scan.ts`
- `src/test-utils/session-conversation-registry.ts`
- `src/test-utils/session-state-cleanup.test.ts`
- `src/test-utils/session-state-cleanup.ts`
- `src/test-utils/session-write-lock-module-mock.ts`
- `src/test-utils/talk-test-provider.ts`
- `src/test-utils/task-registry-runtime.ts`
- `src/test-utils/temp-home.ts`
- `src/test-utils/tracked-temp-dirs.ts`
- `src/test-utils/vitest-mock-fn.ts`
- `src/test-utils/web-provider-runtime.test-helpers.ts`

## `docs/mintlify/reference`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/reference`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `29`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/reference/AGENTS.default.md`
- `docs/reference/RELEASING.md`
- `docs/reference/api-usage-costs.md`
- `docs/reference/credits.md`
- `docs/reference/device-models.md`
- `docs/reference/memory-config.md`
- `docs/reference/prompt-caching.md`
- `docs/reference/rich-output-protocol.md`
- `docs/reference/rpc.md`
- `docs/reference/secretref-credential-surface.md`
- `docs/reference/secretref-user-supplied-credentials-matrix.json`
- `docs/reference/session-management-compaction.md`
- `docs/reference/templates/AGENTS.dev.md`
- `docs/reference/templates/AGENTS.md`
- `docs/reference/templates/BOOT.md`
- `docs/reference/templates/BOOTSTRAP.md`
- `docs/reference/templates/HEARTBEAT.md`
- `docs/reference/templates/IDENTITY.dev.md`
- `docs/reference/templates/IDENTITY.md`
- `docs/reference/templates/SOUL.dev.md`
- `docs/reference/templates/SOUL.md`
- `docs/reference/templates/TOOLS.dev.md`
- `docs/reference/templates/TOOLS.md`
- `docs/reference/templates/USER.dev.md`
- `docs/reference/templates/USER.md`
- `docs/reference/test.md`
- `docs/reference/token-use.md`
- `docs/reference/transcript-hygiene.md`
- `docs/reference/wizard.md`

## `extensions/provider-plugins/anthropic`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/anthropic`
- Coverage: `verified`
- Changed paths: `29`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/anthropic/api.ts`
- `extensions/anthropic/cli-auth-seam.ts`
- `extensions/anthropic/cli-backend-api.ts`
- `extensions/anthropic/cli-backend.ts`
- `extensions/anthropic/cli-constants.ts`
- `extensions/anthropic/cli-migration.test.ts`
- `extensions/anthropic/cli-migration.ts`
- `extensions/anthropic/cli-shared.test.ts`
- `extensions/anthropic/cli-shared.ts`
- `extensions/anthropic/config-defaults.ts`
- `extensions/anthropic/contract-api.ts`
- `extensions/anthropic/index.test.ts`
- `extensions/anthropic/index.ts`
- `extensions/anthropic/media-understanding-provider.ts`
- `extensions/anthropic/openclaw.plugin.json`
- `extensions/anthropic/package.json`
- `extensions/anthropic/plugin-registration.contract.test.ts`
- `extensions/anthropic/provider-contract-api.ts`
- `extensions/anthropic/provider-policy-api.test.ts`
- `extensions/anthropic/provider-policy-api.ts`
- `extensions/anthropic/provider-runtime.contract.test.ts`
- `extensions/anthropic/provider.contract.test.ts`
- `extensions/anthropic/register.runtime.ts`
- `extensions/anthropic/replay-policy.ts`
- `extensions/anthropic/setup-api.ts`
- `extensions/anthropic/stream-wrappers.test.ts`
- `extensions/anthropic/stream-wrappers.ts`
- `extensions/anthropic/test-api.ts`
- `extensions/anthropic/tsconfig.json`

## `src/gateway-api-surface/protocol`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/protocol`
- Coverage: `verified`
- Changed paths: `29`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/gateway/protocol/AGENTS.md`
- `src/gateway/protocol/channels.schema.test.ts`
- `src/gateway/protocol/client-info.ts`
- `src/gateway/protocol/connect-error-details.test.ts`
- `src/gateway/protocol/connect-error-details.ts`
- `src/gateway/protocol/index.test.ts`
- `src/gateway/protocol/index.ts`
- `src/gateway/protocol/schema.ts`
- `src/gateway/protocol/schema/agent.ts`
- `src/gateway/protocol/schema/agents-models-skills.ts`
- `src/gateway/protocol/schema/channels.ts`
- `src/gateway/protocol/schema/commands.ts`
- `src/gateway/protocol/schema/config.ts`
- `src/gateway/protocol/schema/cron.ts`
- `src/gateway/protocol/schema/devices.ts`
- `src/gateway/protocol/schema/exec-approvals.ts`
- `src/gateway/protocol/schema/frames.ts`
- `src/gateway/protocol/schema/logs-chat.ts`
- `src/gateway/protocol/schema/nodes.ts`
- `src/gateway/protocol/schema/plugin-approvals.ts`
- `src/gateway/protocol/schema/primitives.ts`
- `src/gateway/protocol/schema/protocol-schemas.ts`
- `src/gateway/protocol/schema/push.ts`
- `src/gateway/protocol/schema/secrets.ts`
- `src/gateway/protocol/schema/sessions.ts`
- `src/gateway/protocol/schema/snapshot.ts`
- `src/gateway/protocol/schema/types.ts`
- `src/gateway/protocol/schema/wizard.ts`
- `src/gateway/protocol/talk-config.contract.test.ts`

## `docs/mintlify/plugins`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/plugins`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `28`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/plugins/agent-tools.md`
- `docs/plugins/architecture-internals.md`
- `docs/plugins/architecture.md`
- `docs/plugins/building-extensions.md`
- `docs/plugins/building-plugins.md`
- `docs/plugins/bundles.md`
- `docs/plugins/codex-harness.md`
- `docs/plugins/community.md`
- `docs/plugins/compatibility.md`
- `docs/plugins/google-meet.md`
- `docs/plugins/hooks.md`
- `docs/plugins/manifest.md`
- `docs/plugins/memory-wiki.md`
- `docs/plugins/message-presentation.md`
- `docs/plugins/sdk-agent-harness.md`
- `docs/plugins/sdk-channel-plugins.md`
- `docs/plugins/sdk-entrypoints.md`
- `docs/plugins/sdk-migration.md`
- `docs/plugins/sdk-overview.md`
- `docs/plugins/sdk-provider-plugins.md`
- `docs/plugins/sdk-runtime.md`
- `docs/plugins/sdk-setup.md`
- `docs/plugins/sdk-subpaths.md`
- `docs/plugins/sdk-testing.md`
- `docs/plugins/skill-workshop.md`
- `docs/plugins/voice-call.md`
- `docs/plugins/webhooks.md`
- `docs/plugins/zalouser.md`

## `extensions/channel-plugins/tlon`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/tlon`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `28`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/tlon/api.ts`
- `extensions/tlon/channel-plugin-api.ts`
- `extensions/tlon/index.ts`
- `extensions/tlon/package-manifest.contract.test.ts`
- `extensions/tlon/package.json`
- `extensions/tlon/runtime-api.ts`
- `extensions/tlon/setup-entry.ts`
- `extensions/tlon/src/channel.runtime.ts`
- `extensions/tlon/src/channel.ts`
- `extensions/tlon/src/config-schema.ts`
- `extensions/tlon/src/monitor/authorization.ts`
- `extensions/tlon/src/monitor/cites.ts`
- `extensions/tlon/src/monitor/index.ts`
- `extensions/tlon/src/monitor/processed-messages.test.ts`
- `extensions/tlon/src/monitor/processed-messages.ts`
- `extensions/tlon/src/monitor/utils.ts`
- `extensions/tlon/src/settings.ts`
- `extensions/tlon/src/setup-core.ts`
- `extensions/tlon/src/targets.ts`
- `extensions/tlon/src/tlon-api.test.ts`
- `extensions/tlon/src/tlon-api.ts`
- `extensions/tlon/src/urbit/auth.ssrf.test.ts`
- `extensions/tlon/src/urbit/auth.ts`
- `extensions/tlon/src/urbit/base-url.test.ts`
- `extensions/tlon/src/urbit/base-url.ts`
- `extensions/tlon/src/urbit/sse-client.test.ts`
- `extensions/tlon/src/urbit/sse-client.ts`
- `extensions/tlon/tsconfig.json`

## `src/agent-runtime/pi-runner/provider-params-streams`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/provider-params-streams`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `28`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/pi-embedded-runner/anthropic-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/bedrock-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/extra-params.cache-retention-default.test.ts`
- `src/agents/pi-embedded-runner/extra-params.google.test.ts`
- `src/agents/pi-embedded-runner/extra-params.ollama.test.ts`
- `src/agents/pi-embedded-runner/extra-params.openai.test.ts`
- `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts`
- `src/agents/pi-embedded-runner/extra-params.pi-ai-mock.ts`
- `src/agents/pi-embedded-runner/extra-params.provider-runtime.test.ts`
- `src/agents/pi-embedded-runner/extra-params.test-support.ts`
- `src/agents/pi-embedded-runner/extra-params.ts`
- `src/agents/pi-embedded-runner/extra-params.xai-tool-payload.test.ts`
- `src/agents/pi-embedded-runner/extra-params.zai-tool-stream.test.ts`
- `src/agents/pi-embedded-runner/google-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/google-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/google.test.ts`
- `src/agents/pi-embedded-runner/google.ts`
- `src/agents/pi-embedded-runner/minimax-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/minimax-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/moonshot-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/moonshot-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/moonshot-thinking-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/openai-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/openai-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/openrouter-model-capabilities.test.ts`
- `src/agents/pi-embedded-runner/openrouter-model-capabilities.ts`
- `src/agents/pi-embedded-runner/proxy-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/proxy-stream-wrappers.ts`

## `docs/mintlify`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify`
- Coverage: `fallback`
- Changed paths: `27`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `AGENTS.md`
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/AGENTS.md`
- `docs/CLAUDE.md`
- `docs/auth-credential-semantics.md`
- `docs/brave-search.md`
- `docs/ci.md`
- `docs/date-time.md`
- `docs/index.md`
- `docs/logging.md`
- `docs/network.md`
- `docs/perplexity.md`
- `docs/pi-dev.md`
- `docs/pi.md`
- `docs/plan/codex-context-engine-harness.md`
- `docs/plan/ui-channels.md`
- `docs/prose.md`
- `docs/refactor/async-exec-duplicate-completion-investigation.md`
- `docs/refactor/qa.md`
- `docs/snippets/plugin-publish/minimal-openclaw.plugin.json`
- `docs/snippets/plugin-publish/minimal-package.json`
- `docs/style.css`
- `docs/superpowers/specs/2026-04-22-tweakcn-custom-theme-import-design.md`
- `docs/tts.md`
- `docs/vps.md`

## `src/agent-runtime/runtime/cli-runner`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/cli-runner`
- Coverage: `verified`
- Changed paths: `27`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/claude-cli-runner.test.ts`
- `src/agents/cli-backends.test.ts`
- `src/agents/cli-backends.ts`
- `src/agents/cli-runner.before-agent-reply-cron.test.ts`
- `src/agents/cli-runner.bundle-mcp.e2e.test.ts`
- `src/agents/cli-runner.helpers.test.ts`
- `src/agents/cli-runner.reliability.test.ts`
- `src/agents/cli-runner.runtime.ts`
- `src/agents/cli-runner.session.test.ts`
- `src/agents/cli-runner.spawn.test.ts`
- `src/agents/cli-runner.test-support.ts`
- `src/agents/cli-runner.ts`
- `src/agents/cli-runner/bundle-mcp.test.ts`
- `src/agents/cli-runner/bundle-mcp.ts`
- `src/agents/cli-runner/claude-live-session.ts`
- `src/agents/cli-runner/claude-skills-plugin.ts`
- `src/agents/cli-runner/execute.runtime.ts`
- `src/agents/cli-runner/execute.ts`
- `src/agents/cli-runner/helpers.ts`
- `src/agents/cli-runner/prepare.runtime.ts`
- `src/agents/cli-runner/prepare.test.ts`
- `src/agents/cli-runner/prepare.ts`
- `src/agents/cli-runner/reliability.ts`
- `src/agents/cli-runner/session-history.test.ts`
- `src/agents/cli-runner/session-history.ts`
- `src/agents/cli-runner/toml-inline.ts`
- `src/agents/cli-runner/types.ts`

## `src/agent-runtime/sandbox/backend-policy`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/backend-policy`
- Coverage: `verified`
- Changed paths: `27`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/sandbox.resolveSandboxContext.test.ts`
- `src/agents/sandbox.ts`
- `src/agents/sandbox/backend-handle.types.ts`
- `src/agents/sandbox/backend.ts`
- `src/agents/sandbox/backend.types.ts`
- `src/agents/sandbox/config-hash.test.ts`
- `src/agents/sandbox/config-hash.ts`
- `src/agents/sandbox/config.ts`
- `src/agents/sandbox/constants.ts`
- `src/agents/sandbox/context.ts`
- `src/agents/sandbox/fs-bridge-mutation-python-source.ts`
- `src/agents/sandbox/manage.test.ts`
- `src/agents/sandbox/manage.ts`
- `src/agents/sandbox/network-mode.ts`
- `src/agents/sandbox/novnc-auth.ts`
- `src/agents/sandbox/prune.ts`
- `src/agents/sandbox/registry.test.ts`
- `src/agents/sandbox/registry.ts`
- `src/agents/sandbox/runtime-status.ts`
- `src/agents/sandbox/sanitize-env-vars.test.ts`
- `src/agents/sandbox/sanitize-env-vars.ts`
- `src/agents/sandbox/shared.ts`
- `src/agents/sandbox/tool-policy.test.ts`
- `src/agents/sandbox/tool-policy.ts`
- `src/agents/sandbox/types.ts`
- `src/agents/sandbox/validate-sandbox-security.test.ts`
- `src/agents/sandbox/validate-sandbox-security.ts`

## `src/reply-orchestration/streaming`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/streaming`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `27`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/heartbeat-filter.test.ts`
- `src/auto-reply/heartbeat-filter.ts`
- `src/auto-reply/heartbeat.test.ts`
- `src/auto-reply/heartbeat.ts`
- `src/auto-reply/reply.block-streaming.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.applies-inline-reasoning-mixed-messages-acks-immediately.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.defaults-think-low-reasoning-capable-models-no.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.e2e-harness.ts`
- `src/auto-reply/reply.directive.directive-behavior.e2e-mocks.ts`
- `src/auto-reply/reply.directive.directive-behavior.model-directive-test-utils.ts`
- `src/auto-reply/reply.directive.directive-behavior.prefers-alias-matches-fuzzy-selection-is-ambiguous.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.shows-current-verbose-level-verbose-has-no.test.ts`
- `src/auto-reply/reply.directive.parse.test.ts`
- `src/auto-reply/reply.media-note.test.ts`
- `src/auto-reply/reply.raw-body.test.ts`
- `src/auto-reply/reply.runtime.ts`
- `src/auto-reply/reply.stage-sandbox-media.scp-remote-path.test.ts`
- `src/auto-reply/reply.test-harness.ts`
- `src/auto-reply/reply.triggers.group-intro-prompts.cases.ts`
- `src/auto-reply/reply.triggers.trigger-handling.filters-usage-summary-current-model-provider.cases.ts`
- `src/auto-reply/reply.triggers.trigger-handling.stages-inbound-media-into-sandbox-workspace.test.ts`
- `src/auto-reply/reply.triggers.trigger-handling.targets-active-session-native-stop.e2e.test.ts`
- `src/auto-reply/reply.triggers.trigger-handling.test-harness.ts`
- `src/auto-reply/reply.ts`
- `src/auto-reply/reply/block-streaming.ts`
- `src/auto-reply/reply/get-reply-inline-actions.skip-when-config-empty.test.ts`
- `src/auto-reply/reply/get-reply-inline-actions.ts`

## `docs/mintlify/platforms`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/platforms`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `26`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/platforms/android.md`
- `docs/platforms/digitalocean.md`
- `docs/platforms/index.md`
- `docs/platforms/ios.md`
- `docs/platforms/linux.md`
- `docs/platforms/mac/bundled-gateway.md`
- `docs/platforms/mac/canvas.md`
- `docs/platforms/mac/child-process.md`
- `docs/platforms/mac/dev-setup.md`
- `docs/platforms/mac/health.md`
- `docs/platforms/mac/icon.md`
- `docs/platforms/mac/logging.md`
- `docs/platforms/mac/menu-bar.md`
- `docs/platforms/mac/peekaboo.md`
- `docs/platforms/mac/permissions.md`
- `docs/platforms/mac/remote.md`
- `docs/platforms/mac/signing.md`
- `docs/platforms/mac/skills.md`
- `docs/platforms/mac/voice-overlay.md`
- `docs/platforms/mac/voicewake.md`
- `docs/platforms/mac/webchat.md`
- `docs/platforms/mac/xpc.md`
- `docs/platforms/macos.md`
- `docs/platforms/oracle.md`
- `docs/platforms/raspberry-pi.md`
- `docs/platforms/windows.md`

## `extensions/provider-plugins/github-copilot`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/github-copilot`
- Coverage: `verified`
- Changed paths: `25`
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
- `extensions/github-copilot/provider.contract.test.ts`
- `extensions/github-copilot/register.runtime.ts`
- `extensions/github-copilot/replay-policy.ts`
- `extensions/github-copilot/stream.test.ts`
- `extensions/github-copilot/stream.ts`
- `extensions/github-copilot/token.ts`
- `extensions/github-copilot/tsconfig.json`

## `extensions/skill-plugins/tlon`

- Feature: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/tlon`
- Coverage: `verified`
- Changed paths: `25`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/tlon/src/account-fields.ts`
- `extensions/tlon/src/core.test.ts`
- `extensions/tlon/src/doctor-contract.ts`
- `extensions/tlon/src/doctor.test.ts`
- `extensions/tlon/src/doctor.ts`
- `extensions/tlon/src/logger-runtime.ts`
- `extensions/tlon/src/monitor/approval-runtime.ts`
- `extensions/tlon/src/monitor/approval.test.ts`
- `extensions/tlon/src/monitor/approval.ts`
- `extensions/tlon/src/monitor/discovery.ts`
- `extensions/tlon/src/monitor/history.ts`
- `extensions/tlon/src/monitor/media.test.ts`
- `extensions/tlon/src/monitor/media.ts`
- `extensions/tlon/src/monitor/settings-helpers.test.ts`
- `extensions/tlon/src/monitor/settings-helpers.ts`
- `extensions/tlon/src/runtime.ts`
- `extensions/tlon/src/security.test.ts`
- `extensions/tlon/src/setup-surface.ts`
- `extensions/tlon/src/types.ts`
- `extensions/tlon/src/urbit/channel-ops.ts`
- `extensions/tlon/src/urbit/context.ts`
- `extensions/tlon/src/urbit/fetch.ts`
- `extensions/tlon/src/urbit/story.ts`
- `extensions/tlon/src/urbit/upload.test.ts`
- `extensions/tlon/src/urbit/upload.ts`

## `docs/mintlify/install`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/install`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `24`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/install/ansible.md`
- `docs/install/azure.md`
- `docs/install/bun.md`
- `docs/install/clawdock.md`
- `docs/install/development-channels.md`
- `docs/install/digitalocean.md`
- `docs/install/docker-vm-runtime.md`
- `docs/install/exe-dev.md`
- `docs/install/fly.md`
- `docs/install/gcp.md`
- `docs/install/hetzner.md`
- `docs/install/hostinger.md`
- `docs/install/index.md`
- `docs/install/installer.md`
- `docs/install/migrating-matrix.md`
- `docs/install/migrating.md`
- `docs/install/nix.md`
- `docs/install/node.md`
- `docs/install/northflank.mdx`
- `docs/install/oracle.md`
- `docs/install/railway.mdx`
- `docs/install/raspberry-pi.md`
- `docs/install/render.mdx`
- `docs/install/uninstall.md`

## `extensions/memory-media-voice-plugins/elevenlabs`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/elevenlabs`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `22`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/elevenlabs/config-api.ts`
- `extensions/elevenlabs/config-compat.test.ts`
- `extensions/elevenlabs/config-compat.ts`
- `extensions/elevenlabs/contract-api.ts`
- `extensions/elevenlabs/doctor-contract.ts`
- `extensions/elevenlabs/elevenlabs.live.test.ts`
- `extensions/elevenlabs/index.ts`
- `extensions/elevenlabs/media-understanding-provider.test.ts`
- `extensions/elevenlabs/media-understanding-provider.ts`
- `extensions/elevenlabs/openclaw.plugin.json`
- `extensions/elevenlabs/package.json`
- `extensions/elevenlabs/plugin-registration.contract.test.ts`
- `extensions/elevenlabs/realtime-transcription-provider.test.ts`
- `extensions/elevenlabs/realtime-transcription-provider.ts`
- `extensions/elevenlabs/setup-api.ts`
- `extensions/elevenlabs/shared.ts`
- `extensions/elevenlabs/speech-provider.test.ts`
- `extensions/elevenlabs/speech-provider.ts`
- `extensions/elevenlabs/test-api.ts`
- `extensions/elevenlabs/tsconfig.json`
- `extensions/elevenlabs/tts.test.ts`
- `extensions/elevenlabs/tts.ts`

## `src/reply-orchestration/exec`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/exec`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `22`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/reply/bash-command.stop.test.ts`
- `src/auto-reply/reply/bash-command.ts`
- `src/auto-reply/reply/directive-handling.auth-profile.ts`
- `src/auto-reply/reply/directive-handling.auth.ts`
- `src/auto-reply/reply/directive-handling.defaults.ts`
- `src/auto-reply/reply/directive-handling.directive-only.ts`
- `src/auto-reply/reply/directive-handling.fast-lane.ts`
- `src/auto-reply/reply/directive-handling.impl.ts`
- `src/auto-reply/reply/directive-handling.mixed-inline.test.ts`
- `src/auto-reply/reply/directive-handling.model-picker.ts`
- `src/auto-reply/reply/directive-handling.model-selection.ts`
- `src/auto-reply/reply/directive-handling.model.test.ts`
- `src/auto-reply/reply/directive-handling.model.ts`
- `src/auto-reply/reply/directive-handling.params.ts`
- `src/auto-reply/reply/directive-handling.parse.ts`
- `src/auto-reply/reply/directive-handling.persist.ts`
- `src/auto-reply/reply/directive-handling.queue-validation.test.ts`
- `src/auto-reply/reply/directive-handling.queue-validation.ts`
- `src/auto-reply/reply/directive-handling.shared.ts`
- `src/auto-reply/reply/directive-handling.ts`
- `src/auto-reply/reply/directives.ts`
- `src/auto-reply/reply/exec/directive.ts`

## `extensions/provider-plugins/moonshot`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/moonshot`
- Coverage: `verified`
- Changed paths: `21`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/moonshot/bundled-web-search.contract.test.ts`
- `extensions/moonshot/index.test.ts`
- `extensions/moonshot/index.ts`
- `extensions/moonshot/media-understanding-provider.test.ts`
- `extensions/moonshot/media-understanding-provider.ts`
- `extensions/moonshot/moonshot.live.test.ts`
- `extensions/moonshot/openclaw.plugin.json`
- `extensions/moonshot/package.json`
- `extensions/moonshot/plugin-registration.contract.test.ts`
- `extensions/moonshot/provider-catalog.test.ts`
- `extensions/moonshot/provider-catalog.ts`
- `extensions/moonshot/provider-contract-api.ts`
- `extensions/moonshot/provider-discovery.ts`
- `extensions/moonshot/provider.contract.test.ts`
- `extensions/moonshot/src/kimi-web-search-provider.runtime.ts`
- `extensions/moonshot/src/kimi-web-search-provider.test.ts`
- `extensions/moonshot/src/kimi-web-search-provider.ts`
- `extensions/moonshot/test-api.ts`
- `extensions/moonshot/tsconfig.json`
- `extensions/moonshot/web-search-contract-api.ts`
- `extensions/moonshot/web-search-provider.contract.test.ts`

## `extensions/provider-plugins/openrouter`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/openrouter`
- Coverage: `verified`
- Changed paths: `21`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/openrouter/api.ts`
- `extensions/openrouter/image-generation-provider.test.ts`
- `extensions/openrouter/image-generation-provider.ts`
- `extensions/openrouter/index.test.ts`
- `extensions/openrouter/index.ts`
- `extensions/openrouter/media-understanding-provider.ts`
- `extensions/openrouter/onboard.test.ts`
- `extensions/openrouter/openclaw.plugin.json`
- `extensions/openrouter/openrouter.live.test.ts`
- `extensions/openrouter/package.json`
- `extensions/openrouter/plugin-registration.contract.test.ts`
- `extensions/openrouter/provider-catalog.ts`
- `extensions/openrouter/provider-contract-api.ts`
- `extensions/openrouter/provider-runtime.contract.test.ts`
- `extensions/openrouter/provider.contract.test.ts`
- `extensions/openrouter/register.runtime.ts`
- `extensions/openrouter/speech-provider.test.ts`
- `extensions/openrouter/speech-provider.ts`
- `extensions/openrouter/stream.ts`
- `extensions/openrouter/test-api.ts`
- `extensions/openrouter/tsconfig.json`

## `src/gateway-api-surface/auth-session`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/auth-session`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `21`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/gateway/auth-mode-policy.ts`
- `src/gateway/auth.test.ts`
- `src/gateway/auth.ts`
- `src/gateway/connection-auth.test.ts`
- `src/gateway/connection-auth.ts`
- `src/gateway/origin-check.ts`
- `src/gateway/probe-auth.test.ts`
- `src/gateway/probe-auth.ts`
- `src/infra/node-pairing.test.ts`
- `src/infra/node-pairing.ts`
- `src/pairing/allow-from-store-file.ts`
- `src/pairing/allow-from-store-read.test.ts`
- `src/pairing/allow-from-store-read.ts`
- `src/pairing/pairing-challenge.test.ts`
- `src/pairing/pairing-labels.ts`
- `src/pairing/pairing-messages.ts`
- `src/pairing/pairing-store.test.ts`
- `src/pairing/pairing-store.ts`
- `src/pairing/pairing-store.types.ts`
- `src/pairing/setup-code.test.ts`
- `src/pairing/setup-code.ts`

## `src/gateway-api-surface/server-runtime`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/server-runtime`
- Coverage: `verified`
- Changed paths: `21`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/gateway/boot.ts`
- `src/gateway/channel-health-monitor.test.ts`
- `src/gateway/channel-health-monitor.ts`
- `src/gateway/channel-health-policy.test.ts`
- `src/gateway/channel-health-policy.ts`
- `src/gateway/control-ui-contract.ts`
- `src/gateway/control-ui-csp.test.ts`
- `src/gateway/control-ui-csp.ts`
- `src/gateway/control-ui-links.ts`
- `src/gateway/control-ui.auto-root.http.test.ts`
- `src/gateway/control-ui.http.test.ts`
- `src/gateway/control-ui.ts`
- `src/gateway/server-close.test.ts`
- `src/gateway/server-close.ts`
- `src/gateway/server-http.hooks-request-timeout.test.ts`
- `src/gateway/server-http.probe.test.ts`
- `src/gateway/server-http.stages.test.ts`
- `src/gateway/server-http.test-harness.ts`
- `src/gateway/server-http.ts`
- `src/infra/ports.test.ts`
- `src/infra/ports.ts`

## `extensions/provider-plugins/mistral`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/mistral`
- Coverage: `verified`
- Changed paths: `20`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/mistral/api.test.ts`
- `extensions/mistral/api.ts`
- `extensions/mistral/embedding-provider.ts`
- `extensions/mistral/index.ts`
- `extensions/mistral/media-understanding-provider.test.ts`
- `extensions/mistral/media-understanding-provider.ts`
- `extensions/mistral/memory-embedding-adapter.ts`
- `extensions/mistral/mistral.live.test.ts`
- `extensions/mistral/model-definitions.test.ts`
- `extensions/mistral/model-definitions.ts`
- `extensions/mistral/onboard.test.ts`
- `extensions/mistral/openclaw.plugin.json`
- `extensions/mistral/package.json`
- `extensions/mistral/plugin-registration.contract.test.ts`
- `extensions/mistral/provider-compat.ts`
- `extensions/mistral/provider.contract.test.ts`
- `extensions/mistral/realtime-transcription-provider.test.ts`
- `extensions/mistral/realtime-transcription-provider.ts`
- `extensions/mistral/test-api.ts`
- `extensions/mistral/tsconfig.json`

## `extensions/tool-capability-plugins/firecrawl`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/firecrawl`
- Coverage: `verified`
- Changed paths: `19`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/firecrawl/api.ts`
- `extensions/firecrawl/bundled-web-search.contract.test.ts`
- `extensions/firecrawl/index.ts`
- `extensions/firecrawl/openclaw.plugin.json`
- `extensions/firecrawl/package.json`
- `extensions/firecrawl/plugin-registration.contract.test.ts`
- `extensions/firecrawl/src/config.ts`
- `extensions/firecrawl/src/firecrawl-client.ts`
- `extensions/firecrawl/src/firecrawl-fetch-provider-shared.ts`
- `extensions/firecrawl/src/firecrawl-fetch-provider.ts`
- `extensions/firecrawl/src/firecrawl-scrape-tool.ts`
- `extensions/firecrawl/src/firecrawl-search-provider.ts`
- `extensions/firecrawl/src/firecrawl-search-tool.ts`
- `extensions/firecrawl/src/firecrawl-tools.test.ts`
- `extensions/firecrawl/tsconfig.json`
- `extensions/firecrawl/web-fetch-contract-api.ts`
- `extensions/firecrawl/web-fetch-provider.ts`
- `extensions/firecrawl/web-search-contract-api.ts`
- `extensions/firecrawl/web-search-provider.contract.test.ts`

## `src/infra-outbound-delivery/outbound-actions`

- Feature: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-actions`
- Coverage: `verified`
- Changed paths: `19`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/outbound/message-action-normalization.test.ts`
- `src/infra/outbound/message-action-normalization.ts`
- `src/infra/outbound/message-action-param-keys.ts`
- `src/infra/outbound/message-action-params.test.ts`
- `src/infra/outbound/message-action-params.ts`
- `src/infra/outbound/message-action-runner.context.test.ts`
- `src/infra/outbound/message-action-runner.core-send.test.ts`
- `src/infra/outbound/message-action-runner.media.test.ts`
- `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts`
- `src/infra/outbound/message-action-runner.poll.test.ts`
- `src/infra/outbound/message-action-runner.send-validation.test.ts`
- `src/infra/outbound/message-action-runner.test-helpers.ts`
- `src/infra/outbound/message-action-runner.threading.test.ts`
- `src/infra/outbound/message-action-runner.ts`
- `src/infra/outbound/message-action-spec.test.ts`
- `src/infra/outbound/message-action-spec.ts`
- `src/infra/outbound/message-action-test-fixtures.ts`
- `src/infra/outbound/message-action-threading.test-helpers.ts`
- `src/infra/outbound/message-action-threading.ts`

## `src/shared-misc-runtime-support/docs-i18n-markdown`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/docs-i18n-markdown`
- Coverage: `verified`
- Changed paths: `19`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/docs/clawhub-plugin-docs.test.ts`
- `src/docs/install-cloud-secrets.test.ts`
- `src/i18n/registry.test.ts`
- `src/markdown/ir.table-block.test.ts`
- `src/markdown/ir.ts`
- `src/markdown/render-aware-chunking.test.ts`
- `src/markdown/render-aware-chunking.ts`
- `src/markdown/tables.test.ts`
- `src/markdown/tables.ts`
- `src/markdown/whatsapp.test.ts`
- `src/markdown/whatsapp.ts`
- `src/scripts/canvas-a2ui-copy.test.ts`
- `src/scripts/ci-changed-scope.test.ts`
- `src/scripts/docs-link-audit.test.ts`
- `src/scripts/prepare-codex-ci-auth.test.ts`
- `src/scripts/prepare-codex-ci-config.test.ts`
- `src/scripts/sync-plugin-versions.test.ts`
- `src/scripts/test-live-media.test.ts`
- `src/scripts/test-projects.test.ts`

## `scripts/release-versioning/app-versions`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/release-versioning/app-versions`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `18`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `appcast.xml`
- `apps/android/app/build.gradle.kts`
- `apps/android/gradle/wrapper/gradle-wrapper.jar`
- `apps/android/gradle/wrapper/gradle-wrapper.properties`
- `apps/android/gradlew`
- `apps/android/gradlew.bat`
- `apps/ios/CHANGELOG.md`
- `apps/ios/LocalSigning.xcconfig.example`
- `apps/ios/Sources/Info.plist`
- `apps/ios/VERSIONING.md`
- `apps/ios/fastlane/Fastfile`
- `apps/ios/fastlane/SETUP.md`
- `apps/ios/fastlane/metadata/README.md`
- `apps/ios/fastlane/metadata/en-US/release_notes.txt`
- `apps/ios/project.yml`
- `apps/ios/version.json`
- `apps/macos/Sources/OpenClaw/Resources/Info.plist`
- `docs/install/updating.md`

## `src/cli-commands/command-implementations/secret-gateway-commands`

- Feature: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/secret-gateway-commands`
- Coverage: `verified`
- Changed paths: `18`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/command-secret-resolution.coverage.test.ts`
- `src/cli/gateway-cli.coverage.test.ts`
- `src/cli/gateway-cli/call.ts`
- `src/cli/gateway-cli/dev.ts`
- `src/cli/gateway-cli/register.option-collisions.test.ts`
- `src/cli/gateway-cli/register.ts`
- `src/cli/gateway-cli/run-loop.test.ts`
- `src/cli/gateway-cli/run-loop.ts`
- `src/cli/gateway-cli/run.option-collisions.test.ts`
- `src/cli/gateway-cli/run.ts`
- `src/cli/gateway-cli/shared.ts`
- `src/cli/secrets-cli.test.ts`
- `src/commands/gateway-install-token.persist.runtime.ts`
- `src/commands/gateway-install-token.test.ts`
- `src/commands/gateway-install-token.ts`
- `src/commands/gateway-presence.ts`
- `src/commands/gateway-status.test.ts`
- `src/commands/gateway-status.ts`

## `src/config-secrets-security/secrets-resolution`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution`
- Coverage: `verified`
- Changed paths: `18`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/secrets/channel-contract-api.fast-path.test.ts`
- `src/secrets/channel-contract-api.ts`
- `src/secrets/channel-contract-surface-guardrails.test.ts`
- `src/secrets/channel-env-var-names.ts`
- `src/secrets/channel-env-vars.dynamic.test.ts`
- `src/secrets/channel-env-vars.ts`
- `src/secrets/channel-secret-basic-runtime.ts`
- `src/secrets/channel-secret-collector-runtime.ts`
- `src/secrets/channel-secret-tts-runtime.ts`
- `src/secrets/exec-secret-ref-id-parity.test.ts`
- `src/secrets/legacy-secretref-env-marker.ts`
- `src/secrets/plan.test.ts`
- `src/secrets/plan.ts`
- `src/secrets/resolve-types.ts`
- `src/secrets/resolve.test.ts`
- `src/secrets/resolve.ts`
- `src/secrets/unsupported-surface-policy.test.ts`
- `src/secrets/unsupported-surface-policy.ts`

## `src/infra-outbound-delivery/outbound-routing`

- Feature: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-routing`
- Coverage: `verified`
- Changed paths: `18`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/outbound/channel-adapters.test.ts`
- `src/infra/outbound/channel-adapters.ts`
- `src/infra/outbound/channel-bootstrap.runtime.ts`
- `src/infra/outbound/channel-resolution.test.ts`
- `src/infra/outbound/channel-resolution.ts`
- `src/infra/outbound/channel-selection.runtime.ts`
- `src/infra/outbound/channel-selection.test.ts`
- `src/infra/outbound/channel-selection.ts`
- `src/infra/outbound/channel-target.ts`
- `src/infra/outbound/outbound-policy.test.ts`
- `src/infra/outbound/outbound-policy.ts`
- `src/infra/outbound/session-binding-service.test.ts`
- `src/infra/outbound/session-binding-service.ts`
- `src/infra/outbound/target-id-resolution.ts`
- `src/infra/outbound/target-normalization.test.ts`
- `src/infra/outbound/target-normalization.ts`
- `src/infra/outbound/target-resolver.test.ts`
- `src/infra/outbound/target-resolver.ts`

## `ui/web-ui/styles-types`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/styles-types`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `18`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/src/styles.css`
- `ui/src/styles/base.css`
- `ui/src/styles/chat/grouped.css`
- `ui/src/styles/chat/layout.css`
- `ui/src/styles/chat/layout.test.ts`
- `ui/src/styles/chat/sidebar.css`
- `ui/src/styles/chat/text.css`
- `ui/src/styles/chat/tool-cards.css`
- `ui/src/styles/components.css`
- `ui/src/styles/components.test.ts`
- `ui/src/styles/config-quick.css`
- `ui/src/styles/config-quick.test.ts`
- `ui/src/styles/config.css`
- `ui/src/styles/cron-quick-create.css`
- `ui/src/styles/dreams.css`
- `ui/src/styles/layout.css`
- `ui/src/styles/layout.mobile.css`
- `ui/src/styles/layout.mobile.test.ts`

## `extensions/provider-plugins/amazon-bedrock`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/amazon-bedrock`
- Coverage: `verified`
- Changed paths: `17`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/amazon-bedrock/config-api.ts`
- `extensions/amazon-bedrock/config-compat.test.ts`
- `extensions/amazon-bedrock/config-compat.ts`
- `extensions/amazon-bedrock/discovery.test.ts`
- `extensions/amazon-bedrock/discovery.ts`
- `extensions/amazon-bedrock/embedding-provider.test.ts`
- `extensions/amazon-bedrock/embedding-provider.ts`
- `extensions/amazon-bedrock/index.test.ts`
- `extensions/amazon-bedrock/index.ts`
- `extensions/amazon-bedrock/memory-embedding-adapter.test.ts`
- `extensions/amazon-bedrock/memory-embedding-adapter.ts`
- `extensions/amazon-bedrock/openclaw.plugin.json`
- `extensions/amazon-bedrock/package.json`
- `extensions/amazon-bedrock/provider.contract.test.ts`
- `extensions/amazon-bedrock/register.sync.runtime.ts`
- `extensions/amazon-bedrock/setup-api.ts`
- `extensions/amazon-bedrock/tsconfig.json`

## `src/capability-modules/browser`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/browser`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `17`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/browser-lifecycle-cleanup.test.ts`
- `src/browser-lifecycle-cleanup.ts`
- `src/proxy-capture/blob-store.ts`
- `src/proxy-capture/ca.ts`
- `src/proxy-capture/coverage.test.ts`
- `src/proxy-capture/coverage.ts`
- `src/proxy-capture/env.test.ts`
- `src/proxy-capture/env.ts`
- `src/proxy-capture/paths.ts`
- `src/proxy-capture/proxy-server.test.ts`
- `src/proxy-capture/proxy-server.ts`
- `src/proxy-capture/query.ts`
- `src/proxy-capture/runtime.test.ts`
- `src/proxy-capture/runtime.ts`
- `src/proxy-capture/store.sqlite.test.ts`
- `src/proxy-capture/store.sqlite.ts`
- `src/proxy-capture/types.ts`

## `src/capability-modules/tts`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/tts`
- Coverage: `verified`
- Changed paths: `17`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/tts/directives.test.ts`
- `src/tts/directives.ts`
- `src/tts/prepare-text.test.ts`
- `src/tts/provider-registry.test.ts`
- `src/tts/provider-registry.ts`
- `src/tts/provider-types.ts`
- `src/tts/runtime.ts`
- `src/tts/status-config.test.ts`
- `src/tts/status-config.ts`
- `src/tts/tts-auto-mode.ts`
- `src/tts/tts-config.test.ts`
- `src/tts/tts-config.ts`
- `src/tts/tts-core.ts`
- `src/tts/tts-provider-helpers.ts`
- `src/tts/tts-types.ts`
- `src/tts/tts.test.ts`
- `src/tts/tts.ts`

## `apps/ios-android/shared-kit`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/shared-kit`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `16`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatComposer.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayChannel.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayConnectionProblem.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayErrors.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayTLSPinning.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/Resources/tool-display.json`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/ScreenCommands.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/ToolDisplay.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/WatchCommands.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawProtocol/GatewayModels.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/ChatComposerTextViewTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/GatewayErrorsTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/GatewayNodeSessionTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/TalkSystemSpeechSynthesizerTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/ToolDisplayRegistryTests.swift`
- `apps/shared/OpenClawKit/Tools/CanvasA2UI/bootstrap.js`

## `src/agent-runtime/sandbox/workspace-browser-ssh`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/workspace-browser-ssh`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `16`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/sandbox/browser-bridges.ts`
- `src/agents/sandbox/browser.create.test.ts`
- `src/agents/sandbox/browser.ts`
- `src/agents/sandbox/docker-backend.test.ts`
- `src/agents/sandbox/docker-backend.ts`
- `src/agents/sandbox/docker.config-hash-recreate.test.ts`
- `src/agents/sandbox/docker.ts`
- `src/agents/sandbox/remote-fs-bridge.test.ts`
- `src/agents/sandbox/remote-fs-bridge.ts`
- `src/agents/sandbox/ssh-backend.test.ts`
- `src/agents/sandbox/ssh-backend.ts`
- `src/agents/sandbox/ssh.spawn-env.test.ts`
- `src/agents/sandbox/ssh.test.ts`
- `src/agents/sandbox/ssh.ts`
- `src/agents/sandbox/workspace-mounts.test.ts`
- `src/agents/sandbox/workspace-mounts.ts`

## `src/reply-orchestration/queue`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/queue`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `16`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/reply/queue.collect.test.ts`
- `src/auto-reply/reply/queue.dedupe.test.ts`
- `src/auto-reply/reply/queue.drain-restart.test.ts`
- `src/auto-reply/reply/queue.test-helpers.ts`
- `src/auto-reply/reply/queue.ts`
- `src/auto-reply/reply/queue/cleanup.test.ts`
- `src/auto-reply/reply/queue/cleanup.ts`
- `src/auto-reply/reply/queue/directive.ts`
- `src/auto-reply/reply/queue/drain.ts`
- `src/auto-reply/reply/queue/enqueue.ts`
- `src/auto-reply/reply/queue/normalize.ts`
- `src/auto-reply/reply/queue/settings-runtime.ts`
- `src/auto-reply/reply/queue/settings.ts`
- `src/auto-reply/reply/queue/state.test.ts`
- `src/auto-reply/reply/queue/state.ts`
- `src/auto-reply/reply/queue/types.ts`

## `extensions/provider-plugins/zai`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/zai`
- Coverage: `verified`
- Changed paths: `15`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/zai/config-api.ts`
- `extensions/zai/index.test.ts`
- `extensions/zai/index.ts`
- `extensions/zai/media-understanding-provider.ts`
- `extensions/zai/model-definitions.test.ts`
- `extensions/zai/model-definitions.ts`
- `extensions/zai/onboard.test.ts`
- `extensions/zai/onboard.ts`
- `extensions/zai/openclaw.plugin.json`
- `extensions/zai/package.json`
- `extensions/zai/plugin-registration.contract.test.ts`
- `extensions/zai/provider-runtime.contract.test.ts`
- `extensions/zai/provider.contract.test.ts`
- `extensions/zai/test-api.ts`
- `extensions/zai/tsconfig.json`

## `extensions/skill-plugins/tavily`

- Feature: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/tavily`
- Coverage: `verified`
- Changed paths: `15`
- Risk: `high`
- Compatibility: `behavior-change`

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
- `extensions/tavily/src/tavily-tool-schema.ts`
- `extensions/tavily/src/tavily-tools.test.ts`
- `extensions/tavily/tsconfig.json`
- `extensions/tavily/web-search-contract-api.ts`
- `extensions/tavily/web-search-provider.contract.test.ts`

## `docs/mintlify/start`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/start`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `14`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/start/bootstrapping.md`
- `docs/start/docs-directory.md`
- `docs/start/getting-started.md`
- `docs/start/hubs.md`
- `docs/start/lore.md`
- `docs/start/onboarding-overview.md`
- `docs/start/onboarding.md`
- `docs/start/openclaw.md`
- `docs/start/quickstart.md`
- `docs/start/setup.md`
- `docs/start/showcase.md`
- `docs/start/wizard-cli-automation.md`
- `docs/start/wizard-cli-reference.md`
- `docs/start/wizard.md`

## `extensions/auth-integration-plugins/lobster`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/lobster`
- Coverage: `verified`
- Changed paths: `14`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/lobster/README.md`
- `extensions/lobster/index.ts`
- `extensions/lobster/package.json`
- `extensions/lobster/src/lobster-core.d.ts`
- `extensions/lobster/src/lobster-runner.test.ts`
- `extensions/lobster/src/lobster-runner.ts`
- `extensions/lobster/src/lobster-taskflow.test.ts`
- `extensions/lobster/src/lobster-taskflow.ts`
- `extensions/lobster/src/lobster-tool.test.ts`
- `extensions/lobster/src/lobster-tool.ts`
- `extensions/lobster/src/taskflow-test-helpers.ts`
- `extensions/lobster/src/test-helpers.ts`
- `extensions/lobster/src/windows-spawn.ts`
- `extensions/lobster/tsconfig.json`

## `extensions/tool-capability-plugins/openshell`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/openshell`
- Coverage: `verified`
- Changed paths: `14`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/openshell/index.ts`
- `extensions/openshell/package.json`
- `extensions/openshell/src/backend.e2e.test.ts`
- `extensions/openshell/src/backend.test.ts`
- `extensions/openshell/src/backend.ts`
- `extensions/openshell/src/backend.types.ts`
- `extensions/openshell/src/config.test.ts`
- `extensions/openshell/src/config.ts`
- `extensions/openshell/src/fs-bridge.ts`
- `extensions/openshell/src/mirror.test.ts`
- `extensions/openshell/src/mirror.ts`
- `extensions/openshell/src/openshell-core.test.ts`
- `extensions/openshell/src/remote-fs-bridge.ts`
- `extensions/openshell/tsconfig.json`

## `src/config-secrets-security/legacy-migration`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/legacy-migration`
- Coverage: `verified`
- Changed paths: `14`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/commands/doctor-legacy-config.migrations.test.ts`
- `src/commands/doctor-legacy-config.test.ts`
- `src/config/legacy-config-detection.test-support.ts`
- `src/config/legacy-migrate.test.ts`
- `src/config/legacy-migrate.ts`
- `src/config/legacy-web-search.test.ts`
- `src/config/legacy-web-search.ts`
- `src/config/legacy.migrations.audio.ts`
- `src/config/legacy.migrations.channels.ts`
- `src/config/legacy.migrations.runtime.ts`
- `src/config/legacy.migrations.ts`
- `src/config/legacy.rules.ts`
- `src/config/legacy.shared.ts`
- `src/config/legacy.ts`

## `docs/mintlify/automation`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/automation`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `13`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/automation/auth-monitoring.md`
- `docs/automation/clawflow.md`
- `docs/automation/cron-jobs.md`
- `docs/automation/cron-vs-heartbeat.md`
- `docs/automation/gmail-pubsub.md`
- `docs/automation/hooks.md`
- `docs/automation/index.md`
- `docs/automation/poll.md`
- `docs/automation/standing-orders.md`
- `docs/automation/taskflow.md`
- `docs/automation/tasks.md`
- `docs/automation/troubleshooting.md`
- `docs/automation/webhook.md`

## `extensions/auth-integration-plugins/perplexity`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/perplexity`
- Coverage: `verified`
- Changed paths: `13`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/perplexity/bundled-web-search.contract.test.ts`
- `extensions/perplexity/openclaw.plugin.json`
- `extensions/perplexity/package.json`
- `extensions/perplexity/plugin-registration.contract.test.ts`
- `extensions/perplexity/src/perplexity-web-search-provider.runtime.ts`
- `extensions/perplexity/src/perplexity-web-search-provider.shared.ts`
- `extensions/perplexity/src/perplexity-web-search-provider.test.ts`
- `extensions/perplexity/src/perplexity-web-search-provider.ts`
- `extensions/perplexity/test-api.ts`
- `extensions/perplexity/tsconfig.json`
- `extensions/perplexity/web-search-contract-api.ts`
- `extensions/perplexity/web-search-provider.contract.test.ts`
- `extensions/perplexity/web-search-provider.ts`

## `extensions/memory-media-voice-plugins/memory-lancedb`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/memory-lancedb`
- Coverage: `verified`
- Changed paths: `13`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/memory-lancedb/cli-metadata.ts`
- `extensions/memory-lancedb/config.test.ts`
- `extensions/memory-lancedb/config.ts`
- `extensions/memory-lancedb/index.test.ts`
- `extensions/memory-lancedb/index.ts`
- `extensions/memory-lancedb/lancedb-runtime.test.ts`
- `extensions/memory-lancedb/lancedb-runtime.ts`
- `extensions/memory-lancedb/memory-lancedb.live.test.ts`
- `extensions/memory-lancedb/openclaw.plugin.json`
- `extensions/memory-lancedb/package-manifest.contract.test.ts`
- `extensions/memory-lancedb/package.json`
- `extensions/memory-lancedb/test-helpers.ts`
- `extensions/memory-lancedb/tsconfig.json`

## `extensions/provider-plugins/byteplus`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/byteplus`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `13`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/byteplus/index.test.ts`
- `extensions/byteplus/index.ts`
- `extensions/byteplus/live.test.ts`
- `extensions/byteplus/models.ts`
- `extensions/byteplus/openclaw.plugin.json`
- `extensions/byteplus/package.json`
- `extensions/byteplus/plugin-registration.contract.test.ts`
- `extensions/byteplus/provider-catalog.ts`
- `extensions/byteplus/provider-discovery.ts`
- `extensions/byteplus/provider.contract.test.ts`
- `extensions/byteplus/tsconfig.json`
- `extensions/byteplus/video-generation-provider.test.ts`
- `extensions/byteplus/video-generation-provider.ts`

## `extensions/provider-plugins/deepseek`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/deepseek`
- Coverage: `verified`
- Changed paths: `13`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/deepseek/api.ts`
- `extensions/deepseek/deepseek.live.test.ts`
- `extensions/deepseek/index.test.ts`
- `extensions/deepseek/index.ts`
- `extensions/deepseek/models.ts`
- `extensions/deepseek/onboard.ts`
- `extensions/deepseek/openclaw.plugin.json`
- `extensions/deepseek/package.json`
- `extensions/deepseek/provider-catalog.ts`
- `extensions/deepseek/provider-discovery.ts`
- `extensions/deepseek/provider.contract.test.ts`
- `extensions/deepseek/stream.ts`
- `extensions/deepseek/tsconfig.json`

## `extensions/provider-plugins/fal`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/fal`
- Coverage: `verified`
- Changed paths: `13`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/fal/image-generation-provider.test.ts`
- `extensions/fal/image-generation-provider.ts`
- `extensions/fal/index.ts`
- `extensions/fal/openclaw.plugin.json`
- `extensions/fal/package.json`
- `extensions/fal/plugin-registration.contract.test.ts`
- `extensions/fal/provider-contract-api.ts`
- `extensions/fal/provider-registration.ts`
- `extensions/fal/provider.contract.test.ts`
- `extensions/fal/test-api.ts`
- `extensions/fal/tsconfig.json`
- `extensions/fal/video-generation-provider.test.ts`
- `extensions/fal/video-generation-provider.ts`

## `extensions/provider-plugins/opencode-go`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/opencode-go`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `13`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/opencode-go/api.ts`
- `extensions/opencode-go/index.test.ts`
- `extensions/opencode-go/index.ts`
- `extensions/opencode-go/media-understanding-provider.test.ts`
- `extensions/opencode-go/media-understanding-provider.ts`
- `extensions/opencode-go/onboard.test.ts`
- `extensions/opencode-go/onboard.ts`
- `extensions/opencode-go/openclaw.plugin.json`
- `extensions/opencode-go/package.json`
- `extensions/opencode-go/plugin-registration.contract.test.ts`
- `extensions/opencode-go/provider-catalog.ts`
- `extensions/opencode-go/provider.contract.test.ts`
- `extensions/opencode-go/tsconfig.json`

## `extensions/tool-capability-plugins/brave`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/brave`
- Coverage: `verified`
- Changed paths: `13`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/brave/bundled-web-search.contract.test.ts`
- `extensions/brave/openclaw.plugin.json`
- `extensions/brave/package.json`
- `extensions/brave/plugin-registration.contract.test.ts`
- `extensions/brave/src/brave-web-search-provider.runtime.ts`
- `extensions/brave/src/brave-web-search-provider.shared.ts`
- `extensions/brave/src/brave-web-search-provider.test.ts`
- `extensions/brave/src/brave-web-search-provider.ts`
- `extensions/brave/test-api.ts`
- `extensions/brave/tsconfig.json`
- `extensions/brave/web-search-contract-api.ts`
- `extensions/brave/web-search-provider.contract.test.ts`
- `extensions/brave/web-search-provider.ts`

## `extensions/tool-capability-plugins/exa`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/exa`
- Coverage: `verified`
- Changed paths: `13`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/exa/bundled-web-search.contract.test.ts`
- `extensions/exa/openclaw.plugin.json`
- `extensions/exa/package.json`
- `extensions/exa/plugin-registration.contract.test.ts`
- `extensions/exa/src/exa-web-search-provider.runtime.ts`
- `extensions/exa/src/exa-web-search-provider.shared.ts`
- `extensions/exa/src/exa-web-search-provider.test.ts`
- `extensions/exa/src/exa-web-search-provider.ts`
- `extensions/exa/test-api.ts`
- `extensions/exa/tsconfig.json`
- `extensions/exa/web-search-contract-api.ts`
- `extensions/exa/web-search-provider.contract.test.ts`
- `extensions/exa/web-search-provider.ts`

## `src/agent-runtime/skills/install-refresh`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/skills/install-refresh`
- Coverage: `verified`
- Changed paths: `13`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/skills-install-download.ts`
- `src/agents/skills-install-extract.ts`
- `src/agents/skills-install-fallback.test.ts`
- `src/agents/skills-install.download.test.ts`
- `src/agents/skills-install.test-mocks.ts`
- `src/agents/skills-install.test.ts`
- `src/agents/skills-install.ts`
- `src/agents/skills-install.types.ts`
- `src/agents/skills/config.ts`
- `src/agents/skills/env-overrides.ts`
- `src/agents/skills/frontmatter.ts`
- `src/agents/skills/refresh.test.ts`
- `src/agents/skills/refresh.ts`

## `src/capability-modules/acp/runtime-session-identity`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/runtime-session-identity`
- Coverage: `verified`
- Changed paths: `13`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/conversation-id.ts`
- `src/acp/runtime/adapter-contract.testkit.ts`
- `src/acp/runtime/errors.test.ts`
- `src/acp/runtime/errors.ts`
- `src/acp/runtime/registry.test.ts`
- `src/acp/runtime/registry.ts`
- `src/acp/runtime/session-identifiers.ts`
- `src/acp/runtime/session-identity.ts`
- `src/acp/runtime/session-meta.test.ts`
- `src/acp/runtime/session-meta.ts`
- `src/acp/runtime/types.ts`
- `src/acp/session-interaction-mode.test.ts`
- `src/acp/session-interaction-mode.ts`

## `src/capability-modules/acp/translator-protocol`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/translator-protocol`
- Coverage: `verified`
- Changed paths: `13`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/client.test.ts`
- `src/acp/client.ts`
- `src/acp/commands.ts`
- `src/acp/event-mapper.ts`
- `src/acp/server.startup.test.ts`
- `src/acp/server.ts`
- `src/acp/translator.cancel-scoping.test.ts`
- `src/acp/translator.error-kind.test.ts`
- `src/acp/translator.prompt-harness.test-support.ts`
- `src/acp/translator.prompt-prefix.test.ts`
- `src/acp/translator.stop-reason.test.ts`
- `src/acp/translator.ts`
- `src/acp/types.ts`

## `src/infra-outbound-delivery/network`

- Feature: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/network`
- Coverage: `verified`
- Changed paths: `13`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/net/fetch-guard.ssrf.test.ts`
- `src/infra/net/fetch-guard.ts`
- `src/infra/net/hostname.ts`
- `src/infra/net/proxy-env.test.ts`
- `src/infra/net/proxy-env.ts`
- `src/infra/net/proxy-fetch.test.ts`
- `src/infra/net/proxy-fetch.ts`
- `src/infra/net/redirect-headers.ts`
- `src/infra/net/runtime-fetch.test.ts`
- `src/infra/net/runtime-fetch.ts`
- `src/infra/net/undici-global-dispatcher.test.ts`
- `src/infra/net/undici-global-dispatcher.ts`
- `src/infra/net/undici-runtime.ts`

## `docs/mintlify/help`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/help`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `12`
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
- `docs/help/index.md`
- `docs/help/scripts.md`
- `docs/help/testing-live.md`
- `docs/help/testing.md`
- `docs/help/troubleshooting.md`

## `extensions/auth-integration-plugins/device-pair`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/device-pair`
- Coverage: `verified`
- Changed paths: `12`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/device-pair/api.ts`
- `extensions/device-pair/index.test.ts`
- `extensions/device-pair/index.ts`
- `extensions/device-pair/notify.test.ts`
- `extensions/device-pair/notify.ts`
- `extensions/device-pair/openclaw.plugin.json`
- `extensions/device-pair/pair-command-approve.ts`
- `extensions/device-pair/pair-command-auth.test.ts`
- `extensions/device-pair/pair-command-auth.ts`
- `extensions/device-pair/qr-image.ts`
- `src/cli/qr-cli.test.ts`
- `src/infra/device-pairing.test.ts`

## `extensions/memory-media-voice-plugins/deepgram`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/deepgram`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `12`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/deepgram/audio.live.test.ts`
- `extensions/deepgram/audio.test.ts`
- `extensions/deepgram/audio.ts`
- `extensions/deepgram/index.ts`
- `extensions/deepgram/media-understanding-provider.ts`
- `extensions/deepgram/openclaw.plugin.json`
- `extensions/deepgram/package.json`
- `extensions/deepgram/plugin-registration.contract.test.ts`
- `extensions/deepgram/realtime-transcription-provider.test.ts`
- `extensions/deepgram/realtime-transcription-provider.ts`
- `extensions/deepgram/test-api.ts`
- `extensions/deepgram/tsconfig.json`

## `extensions/provider-plugins/kimi-coding`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/kimi-coding`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `12`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/kimi-coding/implicit-provider.test.ts`
- `extensions/kimi-coding/index.test.ts`
- `extensions/kimi-coding/index.ts`
- `extensions/kimi-coding/onboard.test.ts`
- `extensions/kimi-coding/openclaw.plugin.json`
- `extensions/kimi-coding/package.json`
- `extensions/kimi-coding/provider-catalog.test.ts`
- `extensions/kimi-coding/replay-policy.test.ts`
- `extensions/kimi-coding/replay-policy.ts`
- `extensions/kimi-coding/stream.test.ts`
- `extensions/kimi-coding/stream.ts`
- `extensions/kimi-coding/tsconfig.json`

## `src/config-secrets-security/secrets-resolution/secret-storage-audit`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-storage-audit`
- Coverage: `verified`
- Changed paths: `12`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/secrets/apply.test.ts`
- `src/secrets/apply.ts`
- `src/secrets/audit.ts`
- `src/secrets/auth-profiles-scan.ts`
- `src/secrets/auth-store-paths.ts`
- `src/secrets/configure-plan.test.ts`
- `src/secrets/configure-plan.ts`
- `src/secrets/configure.test.ts`
- `src/secrets/configure.ts`
- `src/secrets/path-utils.test.ts`
- `src/secrets/path-utils.ts`
- `src/secrets/storage-scan.ts`

## `ui/provider-channel-settings/web-settings/channel-config-cards`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/provider-channel-settings/web-settings/channel-config-cards`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `12`
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
- `ui/src/ui/views/channels.test.ts`
- `ui/src/ui/views/channels.ts`
- `ui/src/ui/views/channels.whatsapp.ts`

## `extensions/provider-plugins/opencode`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/opencode`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `11`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/opencode/api.ts`
- `extensions/opencode/index.test.ts`
- `extensions/opencode/index.ts`
- `extensions/opencode/media-understanding-provider.test.ts`
- `extensions/opencode/media-understanding-provider.ts`
- `extensions/opencode/onboard.test.ts`
- `extensions/opencode/openclaw.plugin.json`
- `extensions/opencode/package.json`
- `extensions/opencode/plugin-registration.contract.test.ts`
- `extensions/opencode/provider.contract.test.ts`
- `extensions/opencode/tsconfig.json`

## `extensions/tool-capability-plugins/duckduckgo`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/duckduckgo`
- Coverage: `verified`
- Changed paths: `11`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/duckduckgo/bundled-web-search.contract.test.ts`
- `extensions/duckduckgo/package.json`
- `extensions/duckduckgo/plugin-registration.contract.test.ts`
- `extensions/duckduckgo/src/config.ts`
- `extensions/duckduckgo/src/ddg-client.ts`
- `extensions/duckduckgo/src/ddg-search-provider.shared.ts`
- `extensions/duckduckgo/src/ddg-search-provider.test.ts`
- `extensions/duckduckgo/src/ddg-search-provider.ts`
- `extensions/duckduckgo/tsconfig.json`
- `extensions/duckduckgo/web-search-contract-api.ts`
- `extensions/duckduckgo/web-search-provider.contract.test.ts`

## `src/channel-abstraction/plugin-bridge`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/plugin-bridge`
- Coverage: `verified`
- Changed paths: `11`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/mcp/channel-bridge.ts`
- `src/mcp/channel-server.shutdown-unhandled-rejection.test.ts`
- `src/mcp/channel-server.test.ts`
- `src/mcp/channel-server.ts`
- `src/mcp/channel-shared.ts`
- `src/mcp/openclaw-tools-serve.test.ts`
- `src/mcp/openclaw-tools-serve.ts`
- `src/mcp/plugin-tools-handlers.ts`
- `src/mcp/plugin-tools-serve.test.ts`
- `src/mcp/plugin-tools-serve.ts`
- `src/mcp/tools-stdio-server.ts`

## `src/reply-orchestration/channel-shaping`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/channel-shaping`
- Coverage: `verified`
- Changed paths: `11`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/chunk.ts`
- `src/auto-reply/envelope.ts`
- `src/auto-reply/media-note.test.ts`
- `src/auto-reply/media-note.ts`
- `src/auto-reply/reply/inbound-context.test.ts`
- `src/auto-reply/reply/inbound-context.ts`
- `src/auto-reply/reply/inbound-dedupe.test.ts`
- `src/auto-reply/reply/inbound-dedupe.ts`
- `src/auto-reply/reply/inbound-media.ts`
- `src/auto-reply/reply/inbound-meta.test.ts`
- `src/auto-reply/reply/inbound-meta.ts`

## `src/reply-orchestration/commands/command-registry-families`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/commands/command-registry-families`
- Coverage: `verified`
- Changed paths: `11`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/commands-args.ts`
- `src/auto-reply/commands-args.types.ts`
- `src/auto-reply/commands-registry-list.ts`
- `src/auto-reply/commands-registry-normalize.ts`
- `src/auto-reply/commands-registry.data.ts`
- `src/auto-reply/commands-registry.runtime-types.ts`
- `src/auto-reply/commands-registry.shared.ts`
- `src/auto-reply/commands-registry.test.ts`
- `src/auto-reply/commands-registry.ts`
- `src/auto-reply/commands-registry.types.ts`
- `src/auto-reply/commands-text-routing.ts`

## `src/shared-misc-runtime-support/root-entrypoints`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/root-entrypoints`
- Coverage: `verified`
- Changed paths: `11`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/entry.test.ts`
- `src/entry.ts`
- `src/entry.version-fast-path.test.ts`
- `src/entry.version-fast-path.ts`
- `src/globals.ts`
- `src/index.ts`
- `src/library.test.ts`
- `src/library.ts`
- `src/param-key.ts`
- `src/version.test.ts`
- `src/version.ts`

## `apps/macos/app-sources/gateway-runtime`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/macos/app-sources/gateway-runtime`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `10`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/CommandResolverTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecApprovalCommandDisplaySanitizerTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecApprovalHelpersTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecApprovalsStoreRefactorTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/MacNodeRuntimeTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TalkModeGatewayConfigTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TalkModeRuntimeSpeechTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/WideAreaGatewayDiscoveryTests.swift`

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

## `extensions/provider-plugins/together`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/together`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `10`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/together/index.ts`
- `extensions/together/onboard.ts`
- `extensions/together/openclaw.plugin.json`
- `extensions/together/package.json`
- `extensions/together/plugin-registration.contract.test.ts`
- `extensions/together/provider-catalog.ts`
- `extensions/together/provider.contract.test.ts`
- `extensions/together/tsconfig.json`
- `extensions/together/video-generation-provider.test.ts`
- `extensions/together/video-generation-provider.ts`

## `scripts/packaging/docker`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/docker`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `10`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/docker/cleanup-smoke/Dockerfile`
- `scripts/docker/cleanup-smoke/run.sh`
- `scripts/docker/install-sh-common/cli-verify.sh`
- `scripts/docker/install-sh-common/version-parse.sh`
- `scripts/docker/install-sh-e2e/Dockerfile`
- `scripts/docker/install-sh-e2e/run.sh`
- `scripts/docker/install-sh-nonroot/Dockerfile`
- `scripts/docker/install-sh-nonroot/run.sh`
- `scripts/docker/install-sh-smoke/run.sh`
- `scripts/docker/setup.sh`

## `src/agent-runtime/runtime/session-scope`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/session-scope`
- Coverage: `verified`
- Changed paths: `10`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/agent-paths.ts`
- `src/agents/agent-scope.test.ts`
- `src/agents/agent-scope.ts`
- `src/agents/cli-session.test.ts`
- `src/agents/cli-session.ts`
- `src/agents/identity-avatar.test.ts`
- `src/agents/identity-avatar.ts`
- `src/agents/identity-file.test.ts`
- `src/agents/identity-file.ts`
- `src/agents/identity.ts`

## `docs/mintlify/nodes`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/nodes`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/nodes/audio.md`
- `docs/nodes/camera.md`
- `docs/nodes/images.md`
- `docs/nodes/index.md`
- `docs/nodes/location-command.md`
- `docs/nodes/media-understanding.md`
- `docs/nodes/talk.md`
- `docs/nodes/troubleshooting.md`
- `docs/nodes/voicewake.md`

## `extensions/memory-media-voice-plugins/microsoft`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/microsoft`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/microsoft/microsoft.live.test.ts`
- `extensions/microsoft/openclaw.plugin.json`
- `extensions/microsoft/package.json`
- `extensions/microsoft/plugin-registration.contract.test.ts`
- `extensions/microsoft/speech-provider.test.ts`
- `extensions/microsoft/speech-provider.ts`
- `extensions/microsoft/tsconfig.json`
- `extensions/microsoft/tts.test.ts`
- `extensions/microsoft/tts.ts`

## `extensions/provider-plugins/chutes`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/chutes`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/chutes/implicit-provider.test.ts`
- `extensions/chutes/index.ts`
- `extensions/chutes/models.test.ts`
- `extensions/chutes/models.ts`
- `extensions/chutes/onboard.ts`
- `extensions/chutes/package.json`
- `extensions/chutes/provider-catalog.ts`
- `extensions/chutes/provider.contract.test.ts`
- `extensions/chutes/tsconfig.json`

## `extensions/provider-plugins/huggingface`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/huggingface`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/huggingface/index.test.ts`
- `extensions/huggingface/index.ts`
- `extensions/huggingface/models.test.ts`
- `extensions/huggingface/models.ts`
- `extensions/huggingface/openclaw.plugin.json`
- `extensions/huggingface/package.json`
- `extensions/huggingface/provider-catalog.ts`
- `extensions/huggingface/provider.contract.test.ts`
- `extensions/huggingface/tsconfig.json`

## `extensions/provider-plugins/kilocode`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/kilocode`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/kilocode/implicit-provider.test.ts`
- `extensions/kilocode/index.test.ts`
- `extensions/kilocode/index.ts`
- `extensions/kilocode/onboard.test.ts`
- `extensions/kilocode/package.json`
- `extensions/kilocode/provider-models.test.ts`
- `extensions/kilocode/provider-models.ts`
- `extensions/kilocode/provider.contract.test.ts`
- `extensions/kilocode/tsconfig.json`

## `extensions/provider-plugins/venice`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/venice`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/venice/index.test.ts`
- `extensions/venice/index.ts`
- `extensions/venice/models.test.ts`
- `extensions/venice/models.ts`
- `extensions/venice/package.json`
- `extensions/venice/provider-catalog.ts`
- `extensions/venice/provider-runtime.contract.test.ts`
- `extensions/venice/provider.contract.test.ts`
- `extensions/venice/tsconfig.json`

## `extensions/provider-plugins/volcengine`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/volcengine`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `9`
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
- `extensions/volcengine/provider.contract.test.ts`
- `extensions/volcengine/tsconfig.json`

## `src/channel-abstraction/bindings`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/bindings`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/channels/plugins/binding-routing.test.ts`
- `src/channels/plugins/binding-routing.ts`
- `src/channels/plugins/binding-targets.test.ts`
- `src/channels/plugins/binding-targets.ts`
- `src/channels/plugins/binding-types.ts`
- `src/channels/plugins/configured-binding-compiler.ts`
- `src/channels/plugins/configured-binding-consumers.ts`
- `src/channels/plugins/configured-binding-match.ts`
- `src/channels/plugins/configured-binding-registry.ts`

## `src/channel-abstraction/routing`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/routing`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/routing/account-id.ts`
- `src/routing/account-lookup.ts`
- `src/routing/binding-scope.ts`
- `src/routing/bindings.ts`
- `src/routing/bound-account-read.test.ts`
- `src/routing/bound-account-read.ts`
- `src/routing/peer-kind-match.ts`
- `src/routing/resolve-route.test.ts`
- `src/routing/resolve-route.ts`

## `src/gateway-api-surface/client-call`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/client-call`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/gateway-rpc.runtime.ts`
- `src/cli/gateway-rpc.ts`
- `src/cli/gateway-rpc.types.ts`
- `src/gateway/call.runtime.ts`
- `src/gateway/call.test.ts`
- `src/gateway/call.ts`
- `src/gateway/client.test.ts`
- `src/gateway/client.ts`
- `src/gateway/client.watchdog.test.ts`

## `src/infra-outbound-delivery/outbound-identity`

- Feature: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-identity`
- Coverage: `verified`
- Changed paths: `9`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/outbound/base-session-key.ts`
- `src/infra/outbound/conversation-id.ts`
- `src/infra/outbound/directory-cache.test.ts`
- `src/infra/outbound/directory-cache.ts`
- `src/infra/outbound/identity.test.ts`
- `src/infra/outbound/identity.ts`
- `src/infra/outbound/outbound-session.test-helpers.ts`
- `src/infra/outbound/outbound-session.test.ts`
- `src/infra/outbound/outbound-session.ts`

## `src/shared-misc-runtime-support/web-provider-root`

- Feature: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/web-provider-root`
- Coverage: `verified`
- Changed paths: `9`
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
- `src/web/provider-runtime-shared.test.ts`
- `src/web/provider-runtime-shared.ts`

## `apps/provider-channel-settings/native-settings/mobile-native-settings`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/provider-channel-settings/native-settings/mobile-native-settings`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/ios/Sources/Gateway/ExecApprovalPromptDialog.swift`
- `apps/ios/Sources/Gateway/GatewayConnectionIssue.swift`
- `apps/ios/Sources/Gateway/GatewayProblemView.swift`
- `apps/ios/Sources/Gateway/GatewayQuickSetupSheet.swift`
- `apps/ios/Sources/Status/GatewayStatusBuilder.swift`
- `apps/ios/Tests/GatewayConnectionControllerTests.swift`
- `apps/ios/Tests/GatewayConnectionSecurityTests.swift`
- `apps/ios/Tests/GatewayStatusBuilderTests.swift`

## `docs/mintlify/assets`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/assets`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/assets/sponsors/blacksmith-light.svg`
- `docs/assets/sponsors/convex-light.svg`
- `docs/assets/sponsors/github-light.svg`
- `docs/assets/sponsors/github.svg`
- `docs/assets/sponsors/nvidia-dark.svg`
- `docs/assets/sponsors/nvidia.svg`
- `docs/assets/sponsors/openai-light.svg`
- `docs/assets/sponsors/vercel-light.svg`

## `extensions/provider-plugins/cloudflare-ai-gateway`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/cloudflare-ai-gateway`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/cloudflare-ai-gateway/api.ts`
- `extensions/cloudflare-ai-gateway/catalog-provider.ts`
- `extensions/cloudflare-ai-gateway/index.ts`
- `extensions/cloudflare-ai-gateway/models.ts`
- `extensions/cloudflare-ai-gateway/package.json`
- `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts`
- `extensions/cloudflare-ai-gateway/provider.contract.test.ts`
- `extensions/cloudflare-ai-gateway/tsconfig.json`

## `extensions/provider-plugins/nvidia`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/nvidia`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/nvidia/index.test.ts`
- `extensions/nvidia/index.ts`
- `extensions/nvidia/openclaw.plugin.json`
- `extensions/nvidia/package.json`
- `extensions/nvidia/provider-catalog.test.ts`
- `extensions/nvidia/provider-catalog.ts`
- `extensions/nvidia/provider.contract.test.ts`
- `extensions/nvidia/tsconfig.json`

## `src/agent-runtime/runtime/context-subagents/context-tokens`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/context-subagents/context-tokens`
- Coverage: `verified`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/context-runtime-state.ts`
- `src/agents/context-tokens.runtime.ts`
- `src/agents/context-window-guard.test.ts`
- `src/agents/context-window-guard.ts`
- `src/agents/context.eager-warmup.test.ts`
- `src/agents/context.lookup.test.ts`
- `src/agents/context.test.ts`
- `src/agents/context.ts`

## `src/capability-modules/context-engine`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/context-engine`
- Coverage: `verified`
- Changed paths: `8`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/context-engine/context-engine.test.ts`
- `src/context-engine/delegate.ts`
- `src/context-engine/index.ts`
- `src/context-engine/init.ts`
- `src/context-engine/legacy.registration.ts`
- `src/context-engine/legacy.ts`
- `src/context-engine/registry.ts`
- `src/context-engine/types.ts`

## `src/config-secrets-security/secrets-resolution/gateway-cli-secret-resolution`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/gateway-cli-secret-resolution`
- Coverage: `verified`
- Changed paths: `8`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/cli/command-secret-gateway.test.ts`
- `src/cli/command-secret-gateway.ts`
- `src/cli/command-secret-targets.import.test.ts`
- `src/cli/command-secret-targets.test.ts`
- `src/cli/command-secret-targets.ts`
- `src/cli/message-secret-scope.ts`
- `src/secrets/command-config.test.ts`
- `src/secrets/command-config.ts`

## `ui/web-ui`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui`
- Coverage: `fallback`
- Changed paths: `8`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/AGENTS.md`
- `ui/CLAUDE.md`
- `ui/src/markdown-it-task-lists.d.ts`
- `ui/src/test-helpers/load-styles.ts`
- `ui/src/test-helpers/storage.ts`
- `ui/vite.config.ts`
- `ui/vitest.config.ts`
- `ui/vitest.node.config.ts`

## `docs/mintlify/images`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/images`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/images/feishu-get-group-id.png`
- `docs/images/feishu-step2-create-app.png`
- `docs/images/feishu-step3-credentials.png`
- `docs/images/feishu-step4-permissions.png`
- `docs/images/feishu-step5-bot-capability.png`
- `docs/images/feishu-step6-event-subscription.png`
- `docs/images/feishu-verification-token.png`

## `extensions/provider-plugins/vercel-ai-gateway`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/vercel-ai-gateway`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/vercel-ai-gateway/index.ts`
- `extensions/vercel-ai-gateway/models.ts`
- `extensions/vercel-ai-gateway/package.json`
- `extensions/vercel-ai-gateway/provider-catalog.test.ts`
- `extensions/vercel-ai-gateway/provider-catalog.ts`
- `extensions/vercel-ai-gateway/provider.contract.test.ts`
- `extensions/vercel-ai-gateway/tsconfig.json`

## `src/agent-runtime/sandbox/filesystem-bridge/shell-bridge`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/filesystem-bridge/shell-bridge`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/sandbox/fs-bridge.anchored-ops.test.ts`
- `src/agents/sandbox/fs-bridge.backend.e2e.test.ts`
- `src/agents/sandbox/fs-bridge.e2e-docker.test.ts`
- `src/agents/sandbox/fs-bridge.shell.test.ts`
- `src/agents/sandbox/fs-bridge.test-helpers.ts`
- `src/agents/sandbox/fs-bridge.ts`
- `src/agents/sandbox/fs-bridge.types.ts`

## `src/capability-modules/acp/control-plane-session-manager`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/control-plane-session-manager`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/control-plane/manager.core.ts`
- `src/acp/control-plane/manager.identity-reconcile.ts`
- `src/acp/control-plane/manager.test.ts`
- `src/acp/control-plane/manager.types.ts`
- `src/acp/control-plane/manager.utils.ts`
- `src/acp/control-plane/runtime-options.ts`
- `src/acp/control-plane/spawn.ts`

## `src/config-secrets-security/secrets-resolution/secret-ref-contracts`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-ref-contracts`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/config/types.secrets.resolution.test.ts`
- `src/config/types.secrets.ts`
- `src/config/zod-schema.secret-input-validation.ts`
- `src/secrets/json-pointer.ts`
- `src/secrets/resolve-secret-input-string.ts`
- `src/secrets/runtime-shared.ts`
- `src/secrets/shared.ts`

## `src/config-secrets-security/secrets-resolution/secret-target-registry`

- Feature: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-target-registry`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/secrets/credential-matrix.ts`
- `src/secrets/target-registry-data.ts`
- `src/secrets/target-registry-query.ts`
- `src/secrets/target-registry-test-helpers.ts`
- `src/secrets/target-registry.docs.test.ts`
- `src/secrets/target-registry.fast-path.test.ts`
- `src/secrets/target-registry.test.ts`

## `src/infra-outbound-delivery/formatting`

- Feature: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/formatting`
- Coverage: `verified`
- Changed paths: `7`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/outbound/envelope.test.ts`
- `src/infra/outbound/format.test.ts`
- `src/infra/outbound/format.ts`
- `src/infra/outbound/payloads.test.ts`
- `src/infra/outbound/payloads.ts`
- `src/infra/outbound/sanitize-text.test.ts`
- `src/infra/outbound/sanitize-text.ts`

## `extensions/auth-integration-plugins/groq`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/groq`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/groq/media-understanding-provider.ts`
- `extensions/groq/openclaw.plugin.json`
- `extensions/groq/package.json`
- `extensions/groq/plugin-registration.contract.test.ts`
- `extensions/groq/test-api.ts`
- `extensions/groq/tsconfig.json`

## `extensions/provider-plugins/vllm`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/vllm`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/vllm/index.ts`
- `extensions/vllm/package.json`
- `extensions/vllm/provider-discovery.contract.test.ts`
- `extensions/vllm/provider.contract.test.ts`
- `extensions/vllm/register.runtime.ts`
- `extensions/vllm/tsconfig.json`

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

## `src/agent-runtime/schema`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/schema`
- Coverage: `verified`
- Changed paths: `6`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/pi-tools.schema.test.ts`
- `src/agents/pi-tools.schema.ts`
- `src/agents/schema/clean-for-gemini.test.ts`
- `src/agents/schema/clean-for-gemini.ts`
- `src/agents/schema/string-enum.ts`
- `src/agents/schema/typebox.ts`

## `docs/mintlify/security`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/security`
- Coverage: `fallback`
- Changed paths: `5`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `INCIDENT_RESPONSE.md`
- `SECURITY.md`
- `docs/security/CONTRIBUTING-THREAT-MODEL.md`
- `docs/security/THREAT-MODEL-ATLAS.md`
- `docs/security/formal-verification.md`

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

## `extensions/provider-plugins/sglang`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/sglang`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/sglang/index.ts`
- `extensions/sglang/package.json`
- `extensions/sglang/provider-discovery.contract.test.ts`
- `extensions/sglang/provider.contract.test.ts`
- `extensions/sglang/tsconfig.json`

## `extensions/provider-plugins/synthetic`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/synthetic`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/synthetic/api.ts`
- `extensions/synthetic/onboard.test.ts`
- `extensions/synthetic/package.json`
- `extensions/synthetic/provider.contract.test.ts`
- `extensions/synthetic/tsconfig.json`

## `src/agent-runtime/sandbox/filesystem-bridge/path-safety`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/filesystem-bridge/path-safety`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/agents/sandbox/fs-bridge-mutation-helper.test.ts`
- `src/agents/sandbox/fs-bridge-mutation-helper.ts`
- `src/agents/sandbox/fs-bridge-path-safety.runtime.ts`
- `src/agents/sandbox/fs-bridge-path-safety.ts`
- `src/agents/sandbox/fs-paths.ts`

## `src/capability-modules/acp`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp`
- Coverage: `verified`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/approval-classifier.test.ts`
- `src/acp/approval-classifier.ts`
- `src/acp/client-helpers.ts`
- `src/acp/normalize-text.ts`
- `src/acp/record-shared.ts`

## `src/capability-modules/acp/persistent-bindings`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/persistent-bindings`
- Coverage: `verified`
- Changed paths: `5`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/persistent-bindings.lifecycle.test.ts`
- `src/acp/persistent-bindings.lifecycle.ts`
- `src/acp/persistent-bindings.resolve.ts`
- `src/acp/persistent-bindings.test.ts`
- `src/acp/persistent-bindings.types.ts`

## `apps/ios-android/ios-extensions-watch`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/ios-extensions-watch`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/ios/WatchExtension/Sources/OpenClawWatchApp.swift`
- `apps/ios/WatchExtension/Sources/WatchConnectivityReceiver.swift`
- `apps/ios/WatchExtension/Sources/WatchInboxStore.swift`
- `apps/ios/WatchExtension/Sources/WatchInboxView.swift`

## `extensions/auth-integration-plugins/diagnostics-otel`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/diagnostics-otel`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/diagnostics-otel/package.json`
- `extensions/diagnostics-otel/src/service.test.ts`
- `extensions/diagnostics-otel/src/service.ts`
- `extensions/diagnostics-otel/tsconfig.json`

## `extensions/memory-media-voice-plugins/talk-voice`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/talk-voice`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/talk-voice/api.ts`
- `extensions/talk-voice/index.test.ts`
- `extensions/talk-voice/index.ts`
- `extensions/talk-voice/openclaw.plugin.json`

## `extensions/provider-plugins/copilot-proxy`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/copilot-proxy`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/copilot-proxy/index.ts`
- `extensions/copilot-proxy/package.json`
- `extensions/copilot-proxy/provider.contract.test.ts`
- `extensions/copilot-proxy/tsconfig.json`

## `extensions/provider-plugins/qianfan`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/qianfan`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/qianfan/index.test.ts`
- `extensions/qianfan/package.json`
- `extensions/qianfan/provider.contract.test.ts`
- `extensions/qianfan/tsconfig.json`

## `extensions/provider-plugins/xiaomi`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/xiaomi`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/xiaomi/onboard.test.ts`
- `extensions/xiaomi/package.json`
- `extensions/xiaomi/provider.contract.test.ts`
- `extensions/xiaomi/tsconfig.json`

## `extensions/tool-capability-plugins/llm-task`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/llm-task`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/llm-task/package.json`
- `extensions/llm-task/src/llm-task-tool.test.ts`
- `extensions/llm-task/src/llm-task-tool.ts`
- `extensions/llm-task/tsconfig.json`

## `src/capability-modules/acp/secret-env-bridge`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/secret-env-bridge`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/acp/meta.ts`
- `src/acp/policy.ts`
- `src/infra/secret-file.test.ts`
- `src/infra/secret-file.ts`

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

## `src/reply-orchestration/commands/command-auth-gates`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/commands/command-auth-gates`
- Coverage: `verified`
- Changed paths: `4`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/command-auth.ts`
- `src/auto-reply/command-detection.runtime-types.ts`
- `src/auto-reply/command-detection.ts`
- `src/auto-reply/reply/command-gates.ts`

## `apps/ios-android`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android`
- Coverage: `fallback`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/macos-mlx-tts/Package.resolved`
- `apps/macos-mlx-tts/Package.swift`
- `apps/macos-mlx-tts/Sources/OpenClawMLXTTSHelper/main.swift`

## `docs/mintlify/ja-jp`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/ja-jp`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/ja-JP/index.md`
- `docs/ja-JP/start/getting-started.md`
- `docs/ja-JP/start/wizard.md`

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

## `packages/shared-packages/clawdbot`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/packages/shared-packages/clawdbot`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `packages/clawdbot/index.js`
- `packages/clawdbot/package.json`
- `packages/clawdbot/scripts/postinstall.js`

## `packages/shared-packages/moltbot`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/packages/shared-packages/moltbot`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `packages/moltbot/index.js`
- `packages/moltbot/package.json`
- `packages/moltbot/scripts/postinstall.js`

## `scripts/packaging/pre-commit`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/pre-commit`
- Coverage: `fallback`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `git-hooks/pre-commit`
- `scripts/pre-commit/filter-staged-files.mjs`
- `scripts/pre-commit/pnpm-audit-prod.mjs`

## `scripts/packaging/shell-helpers`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/shell-helpers`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `docs/install/docker.md`
- `scripts/shell-helpers/README.md`
- `scripts/shell-helpers/clawdock-helpers.sh`

## `scripts/release-versioning/cli-package-version`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/release-versioning/cli-package-version`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `3`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/openclaw-npm-postpublish-verify.ts`
- `scripts/openclaw-npm-release-check.ts`
- `scripts/write-cli-compat.ts`

## `src/channel-abstraction/routing/target-resolution`

- Feature: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/routing/target-resolution`
- Coverage: `verified`
- Changed paths: `3`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/routing/session-key.continuity.test.ts`
- `src/routing/session-key.test.ts`
- `src/routing/session-key.ts`

## `apps/macos/tests`

- Feature: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/macos/tests`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayEnvironmentTests.swift`

## `extensions/skill-plugins/open-prose`

- Feature: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/open-prose`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/open-prose/package.json`
- `extensions/open-prose/tsconfig.json`

## `extensions/tool-capability-plugins/thread-ownership`

- Feature: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/thread-ownership`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `extensions/thread-ownership/index.test.ts`
- `extensions/thread-ownership/index.ts`

## `scripts/packaging/dev`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/dev`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/dev/discord-acp-plain-language-smoke.ts`
- `scripts/dev/test-device-pair-telegram.ts`

## `scripts/packaging/docs-i18n`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/docs-i18n`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `scripts/docs-i18n/doc_mode.go`
- `scripts/docs-i18n/html_translate.go`

## `scripts/packaging/podman`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/podman`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `docs/install/podman.md`
- `scripts/run-openclaw-podman.sh`

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

- `src/channels/allowlist-match.ts`
- `src/channels/allowlists/resolve-utils.ts`

## `src/plugin-runtime-sdk/plugin-sdk/media-memory-sdk`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugin-sdk/media-memory-sdk`
- Coverage: `verified`
- Changed paths: `2`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/plugin-sdk/outbound-media.test.ts`
- `src/plugin-sdk/outbound-media.ts`

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

## `ui/web-ui/public-assets`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/public-assets`
- Coverage: `fallback`
- Changed paths: `2`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `dream-diary-preview-v2.html`
- `dream-diary-preview-v3.html`

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

## `docs/mintlify/debug`

- Feature: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/debug`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `docs-only`

Changed paths:

- `docs/debug/node-issue.md`

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

## `scripts/packaging/k8s`

- Feature: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/k8s`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `compatible`

Changed paths:

- `docs/install/kubernetes.md`

## `src/infra-outbound-delivery/tls`

- Feature: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/tls`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `src/infra/tls/fingerprint.ts`

## `src/plugin-runtime-sdk/plugin-sdk/channel-sdk`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugin-sdk/channel-sdk`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/plugin-sdk/direct-dm.ts`

## `src/plugin-runtime-sdk/plugin-sdk/tool-sdk`

- Feature: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugin-sdk/tool-sdk`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/plugin-sdk/setup-tools.ts`

## `src/reply-orchestration/export-html`

- Feature: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/export-html`
- Coverage: `verified`
- Changed paths: `1`
- Risk: `high`
- Compatibility: `behavior-change`

Changed paths:

- `src/auto-reply/reply/export-html/template.security.test.ts`

## `ui/provider-channel-settings/web-settings/config-form-rendering`

- Feature: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/provider-channel-settings/web-settings/config-form-rendering`
- Coverage: `exceptioned-deep-partial`
- Changed paths: `1`
- Risk: `medium`
- Compatibility: `behavior-change`

Changed paths:

- `ui/src/ui/app-settings.test.ts`
