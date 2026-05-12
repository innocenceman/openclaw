# Compatibility Assessment

兼容性以 final leaf 为单位汇总；JSON 为事实源。

## `behavior-change`

- `extensions/channel-plugins/discord`: 406 paths, risk=`high`
- `src/agent-runtime/runtime/command-entrypoint`: 362 paths, risk=`high`
- `apps/ios-android/android-app/runtime-gateway-node`: 333 paths, risk=`high`
- `extensions/channel-plugins/telegram`: 325 paths, risk=`high`
- `src/shared-misc-runtime-support/shared-primitives`: 307 paths, risk=`medium`
- `src/cli-commands/command-implementations/maintenance-commands`: 242 paths, risk=`medium`
- `src/cli-commands/command-implementations/config-doctor-commands`: 162 paths, risk=`medium`
- `extensions/channel-plugins/slack`: 154 paths, risk=`high`
- `src/agent-runtime/pi-runner/core-run-loop`: 152 paths, risk=`high`
- `extensions/channel-plugins/matrix`: 147 paths, risk=`high`
- `src/agent-runtime/tools`: 143 paths, risk=`high`
- `src/plugin-runtime-sdk/plugins-runtime`: 139 paths, risk=`high`
- `extensions/channel-plugins/whatsapp`: 138 paths, risk=`high`
- `src/reply-orchestration/runner`: 137 paths, risk=`high`
- `src/capability-modules/cron`: 107 paths, risk=`medium`
- `src/config-secrets-security/config-io`: 105 paths, risk=`high`
- `src/agent-runtime/providers-auth`: 97 paths, risk=`high`
- `apps/ios-android/android-app`: 94 paths, risk=`high`
- `packages/shared-packages`: 89 paths, risk=`high`
- `src/gateway-api-surface/server-methods`: 85 paths, risk=`high`
- `ui/web-ui/components`: 81 paths, risk=`medium`
- `extensions/channel-plugins/msteams`: 80 paths, risk=`high`
- `src/capability-modules/memory`: 70 paths, risk=`medium`
- `src/shared-misc-runtime-support/startup-process`: 69 paths, risk=`medium`
- `extensions/memory-media-voice-plugins/memory-core`: 67 paths, risk=`medium`
- `src/plugin-runtime-sdk/plugin-sdk`: 67 paths, risk=`high`
- `src/cli-commands/status-gateway-channel`: 66 paths, risk=`medium`
- `src/capability-modules/media`: 65 paths, risk=`medium`
- `ui/web-ui/i18n`: 64 paths, risk=`medium`
- `src/reply-orchestration/commands/command-handlers`: 62 paths, risk=`high`
- `src/config-secrets-security/config-schema-validation`: 58 paths, risk=`high`
- `extensions/skill-plugins/feishu`: 57 paths, risk=`high`
- `src/cli-commands/command-implementations/auth-provider-commands`: 57 paths, risk=`medium`
- `extensions/memory-media-voice-plugins/voice-call`: 55 paths, risk=`medium`
- `extensions/channel-plugins/bluebubbles`: 53 paths, risk=`high`
- `src/agent-runtime/runtime/command-session-store`: 53 paths, risk=`high`
- `src/capability-modules/media-understanding`: 53 paths, risk=`medium`
- `extensions/channel-plugins/mattermost`: 52 paths, risk=`high`
- `extensions/provider-plugins/openai`: 51 paths, risk=`high`
- `ui/web-ui/components/app-shell-lifecycle`: 51 paths, risk=`medium`
- `src/cli-commands/program-registration`: 48 paths, risk=`medium`
- `apps/ios-android/shared-kit`: 47 paths, risk=`high`
- `apps/macos/app-sources`: 46 paths, risk=`high`
- `extensions/channel-plugins/feishu`: 46 paths, risk=`high`
- `ui/provider-channel-settings/web-settings`: 45 paths, risk=`medium`
- `apps/ios-android/ios-app`: 44 paths, risk=`high`
- `src/config-secrets-security/security-guards`: 42 paths, risk=`high`
- `src/config-secrets-security/sessions`: 42 paths, risk=`high`
- `src/shared-misc-runtime-support/logging-support`: 42 paths, risk=`medium`
- `extensions/channel-plugins/imessage`: 41 paths, risk=`high`
- `extensions/channel-plugins/line`: 40 paths, risk=`high`
- `src/agent-runtime/pi-runner/subscriptions-extensions`: 40 paths, risk=`high`
- `apps/ios-android`: 38 paths, risk=`high`
- `extensions/channel-plugins/signal`: 38 paths, risk=`high`
- `extensions/provider-plugins/google`: 37 paths, risk=`high`
- `src/channel-abstraction/core-abstractions`: 36 paths, risk=`high`
- `src/cli-commands/terminal-output`: 35 paths, risk=`medium`
- `extensions/channel-plugins/zalo`: 34 paths, risk=`high`
- `extensions/provider-plugins/xai`: 34 paths, risk=`high`
- `src/agent-runtime/runtime/context-subagents/subagent-registry`: 33 paths, risk=`high`
- `extensions/channel-plugins/googlechat`: 31 paths, risk=`high`
- `src/agent-runtime/runtime/cli-runner`: 31 paths, risk=`high`
- `src/cli-commands/command-implementations/channel-plugin-commands`: 30 paths, risk=`medium`
- `src/config-secrets-security/secrets-resolution/runtime-secret-collection`: 29 paths, risk=`high`
- `extensions/provider-plugins/ollama`: 28 paths, risk=`high`
- `extensions/channel-plugins/nextcloud-talk`: 27 paths, risk=`high`
- `src/gateway-api-surface/protocol`: 27 paths, risk=`high`
- `src/shared-misc-runtime-support/compat-hooks`: 27 paths, risk=`medium`
- `extensions/channel-plugins/zalouser`: 25 paths, risk=`high`
- `extensions/provider-plugins/minimax`: 23 paths, risk=`high`
- `src/shared-misc-runtime-support/test-support`: 23 paths, risk=`medium`
- `apps/macos/app-sources/gateway-runtime`: 22 paths, risk=`high`
- `src/cli-commands/command-implementations/agent-command-cli`: 22 paths, risk=`medium`
- `extensions/channel-plugins/irc`: 21 paths, risk=`high`
- `extensions/channel-plugins/tlon`: 21 paths, risk=`high`
- `extensions/channel-plugins/nostr`: 20 paths, risk=`high`
- `extensions/provider-plugins/github-copilot`: 20 paths, risk=`high`
- `extensions/skill-plugins/acpx`: 20 paths, risk=`high`
- `src/gateway-api-surface/server-runtime`: 20 paths, risk=`high`
- `extensions/provider-plugins/openrouter`: 18 paths, risk=`high`
- ... 112 more leaves in `leaf-impact.json`

## `compatible`

- `scripts/packaging/root-scripts`: 163 paths, risk=`medium`
- `test-infra/profiles-and-suites/config-and-runner`: 159 paths, risk=`medium`
- `scripts/packaging/e2e`: 144 paths, risk=`medium`
- `test-infra/profiles-and-suites/root-tests`: 106 paths, risk=`medium`
- `test-infra/fixtures-and-helpers/helpers-core`: 96 paths, risk=`medium`
- `scripts/packaging/lib`: 70 paths, risk=`medium`
- `test-infra/fixtures-and-helpers/fixtures`: 52 paths, risk=`medium`
- `test-infra/profiles-and-suites/test-scripts`: 24 paths, risk=`medium`
- `scripts/release-versioning/app-versions`: 15 paths, risk=`medium`
- `scripts/packaging/docker`: 9 paths, risk=`medium`
- `scripts/packaging/podman`: 3 paths, risk=`medium`
- `scripts/packaging/dev`: 2 paths, risk=`medium`
- `scripts/packaging/docs-i18n`: 2 paths, risk=`medium`
- `scripts/release-versioning/cli-package-version`: 2 paths, risk=`medium`
- `test-infra/fixtures-and-helpers/mocks`: 2 paths, risk=`medium`
- `scripts/packaging/pre-commit`: 1 paths, risk=`medium`
- `scripts/packaging/shell-helpers`: 1 paths, risk=`medium`

## `docs-only`

- `docs/generated-baselines/bundled-plugin-metadata`: 1763 paths, risk=`medium`
- `docs/mintlify/.generated`: 228 paths, risk=`medium`
- `docs/mintlify/plugins`: 147 paths, risk=`medium`
- `docs/mintlify/tools`: 43 paths, risk=`medium`
- `docs/mintlify/cli`: 41 paths, risk=`medium`
- `docs/mintlify/providers`: 39 paths, risk=`medium`
- `docs/mintlify/gateway`: 38 paths, risk=`medium`
- `docs/mintlify/concepts`: 37 paths, risk=`medium`
- `docs/mintlify/channels`: 34 paths, risk=`medium`
- `docs/mintlify/.i18n`: 22 paths, risk=`medium`
- `docs/mintlify`: 17 paths, risk=`medium`
- `docs/mintlify/reference`: 16 paths, risk=`medium`
- `docs/mintlify/install`: 14 paths, risk=`medium`
- `docs/mintlify/help`: 13 paths, risk=`medium`
- `docs/mintlify/platforms`: 10 paths, risk=`medium`
- `docs/mintlify/automation`: 9 paths, risk=`medium`
- `docs/mintlify/nodes`: 6 paths, risk=`medium`
- `docs/mintlify/security`: 6 paths, risk=`medium`
- `docs/mintlify/start`: 6 paths, risk=`medium`
- `docs/mintlify/web`: 5 paths, risk=`medium`
- `docs/mintlify/diagnostics`: 1 paths, risk=`medium`
- `docs/mintlify/zh-cn`: 1 paths, risk=`medium`

## `unknown`

- `unmapped/src`: 55 paths, risk=`medium`
- `unmapped/Swabble`: 36 paths, risk=`medium`
- `unmapped/config`: 9 paths, risk=`medium`
- `unmapped/assets`: 7 paths, risk=`medium`
- `unmapped/security`: 6 paths, risk=`medium`
- `unmapped/deploy`: 1 paths, risk=`medium`
- `unmapped/docker-compose.yml`: 1 paths, risk=`medium`
- `unmapped/docker-setup.sh`: 1 paths, risk=`medium`
- `unmapped/docs.acp.md`: 1 paths, risk=`medium`
- `unmapped/fly.private.toml`: 1 paths, risk=`medium`
- `unmapped/openclaw.mjs`: 1 paths, risk=`medium`
- `unmapped/openclaw.podman.env`: 1 paths, risk=`medium`
- `unmapped/pyproject.toml`: 1 paths, risk=`medium`
- `unmapped/setup-podman.sh`: 1 paths, risk=`medium`
- `unmapped/zizmor.yml`: 1 paths, risk=`medium`
