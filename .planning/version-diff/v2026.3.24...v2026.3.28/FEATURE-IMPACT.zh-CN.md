# Feature Impact

本报告按 feature 聚合 final leaf；canonical leaf mapping 在 `leaf-impact.json`。

## Bundled messaging channel plugins

- Feature id: `channel-plugins`
- Final leaves: `21`
- Changed paths: `782`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `extensions/channel-plugins/telegram`: 146 paths
- `extensions/channel-plugins/discord`: 105 paths
- `extensions/channel-plugins/matrix`: 88 paths
- `extensions/channel-plugins/slack`: 54 paths
- `extensions/channel-plugins/mattermost`: 50 paths
- `extensions/channel-plugins/bluebubbles`: 44 paths
- `extensions/channel-plugins/msteams`: 43 paths
- `extensions/channel-plugins/whatsapp`: 38 paths
- `extensions/channel-plugins/feishu`: 36 paths
- `extensions/channel-plugins/signal`: 26 paths
- `extensions/channel-plugins/line`: 25 paths
- `extensions/channel-plugins/imessage`: 21 paths
- `extensions/channel-plugins/irc`: 17 paths
- `extensions/channel-plugins/zalouser`: 16 paths
- `extensions/channel-plugins/googlechat`: 15 paths
- `extensions/channel-plugins/nextcloud-talk`: 15 paths
- `extensions/channel-plugins/zalo`: 15 paths
- `extensions/channel-plugins/synology-chat`: 11 paths
- `extensions/channel-plugins/nostr`: 7 paths
- `extensions/channel-plugins/tlon`: 6 paths
- `extensions/channel-plugins/twitch`: 4 paths

## Miscellaneous repository surface

- Feature id: `misc-repo-surface`
- Final leaves: `48`
- Changed paths: `721`
- Risk: `medium`
- Compatibility: `unknown`

Impacted leaves:

- `src/shared-misc-runtime-support/shared-primitives`: 158 paths
- `src/cli-commands/command-implementations/maintenance-commands`: 116 paths
- `extensions/memory-media-voice-plugins/memory-core`: 57 paths
- `src/cli-commands/command-implementations/config-doctor-commands`: 49 paths
- `extensions/skill-plugins/feishu`: 23 paths
- `src/infra-outbound-delivery/outbound-delivery`: 23 paths
- `extensions/memory-media-voice-plugins/voice-call`: 21 paths
- `src/cli-commands/command-implementations/auth-provider-commands`: 21 paths
- `src/channel-abstraction/core-abstractions`: 19 paths
- `src/shared-misc-runtime-support/startup-process`: 19 paths
- `src/cli-commands/terminal-output`: 16 paths
- `extensions/skill-plugins/acpx`: 12 paths
- `extensions/skill-plugins/tavily`: 12 paths
- `src/infra-outbound-delivery/outbound-routing`: 12 paths
- `src/shared-misc-runtime-support/logging-support`: 12 paths
- `src/cli-commands/command-implementations/channel-plugin-commands`: 11 paths
- `src/cli-commands/program-registration`: 11 paths
- `src/infra-outbound-delivery/outbound-actions`: 9 paths
- `extensions/auth-integration-plugins/perplexity`: 8 paths
- `extensions/memory-media-voice-plugins/microsoft`: 8 paths
- `src/cli-commands/status-gateway-channel`: 8 paths
- `extensions/memory-media-voice-plugins/elevenlabs`: 7 paths
- `extensions/memory-media-voice-plugins/deepgram`: 6 paths
- `extensions/skill-plugins/diffs`: 6 paths
- `src/shared-misc-runtime-support/test-support`: 6 paths
- `extensions/skill-plugins/tlon`: 5 paths
- `src/channel-abstraction/plugin-bridge`: 5 paths
- `src/cli-commands/command-implementations/secret-gateway-commands`: 5 paths
- `src/shared-misc-runtime-support/root-entrypoints`: 5 paths
- `extensions/auth-integration-plugins/device-pair`: 4 paths
- `extensions/memory-media-voice-plugins/memory-lancedb`: 4 paths
- `src/cli-commands/command-implementations/agent-command-cli`: 4 paths
- `src/infra-outbound-delivery/network`: 4 paths
- `src/infra-outbound-delivery/outbound-identity`: 4 paths
- `extensions/auth-integration-plugins/groq`: 3 paths
- `extensions/memory-media-voice-plugins/talk-voice`: 3 paths
- `src/channel-abstraction/bindings`: 3 paths
- `src/channel-abstraction/routing`: 3 paths
- `src/infra-outbound-delivery/formatting`: 3 paths
- `src/shared-misc-runtime-support/compat-hooks`: 3 paths
- ... 8 more leaves in `leaf-impact.json`

## Docs, generated baselines, changelog and public guidance

- Feature id: `docs-generated-baselines`
- Final leaves: `16`
- Changed paths: `669`
- Risk: `medium`
- Compatibility: `docs-only`

Impacted leaves:

- `docs/generated-baselines/bundled-plugin-metadata`: 425 paths
- `docs/mintlify/.generated`: 169 paths
- `docs/mintlify/tools`: 13 paths
- `docs/mintlify/channels`: 10 paths
- `docs/mintlify/cli`: 8 paths
- `docs/mintlify/.i18n`: 7 paths
- `docs/mintlify/providers`: 6 paths
- `docs/mintlify/reference`: 6 paths
- `docs/mintlify`: 5 paths
- `docs/mintlify/gateway`: 5 paths
- `docs/mintlify/plugins`: 5 paths
- `docs/mintlify/concepts`: 4 paths
- `docs/mintlify/help`: 2 paths
- `docs/mintlify/install`: 2 paths
- `docs/mintlify/automation`: 1 paths
- `docs/mintlify/start`: 1 paths

## Agent loop, ACP, spawning, command control

- Feature id: `agent-acp-runtime`
- Final leaves: `31`
- Changed paths: `473`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/agent-runtime/runtime/command-entrypoint`: 125 paths
- `src/reply-orchestration/runner`: 65 paths
- `src/agent-runtime/providers-auth`: 50 paths
- `src/agent-runtime/pi-runner/core-run-loop`: 43 paths
- `src/agent-runtime/tools`: 43 paths
- `src/reply-orchestration/commands/command-handlers`: 21 paths
- `src/agent-runtime/runtime/cli-runner`: 16 paths
- `src/agent-runtime/pi-runner/provider-params-streams`: 14 paths
- `src/agent-runtime/pi-runner/subscriptions-extensions`: 14 paths
- `src/agent-runtime/runtime/context-subagents/subagent-registry`: 10 paths
- `src/agent-runtime/skills/core-inventory`: 9 paths
- `src/reply-orchestration/exec`: 8 paths
- `src/reply-orchestration/streaming`: 8 paths
- `src/agent-runtime/sandbox/backend-policy`: 7 paths
- `src/agent-runtime/schema`: 7 paths
- `src/capability-modules/acp/translator-protocol`: 5 paths
- `src/agent-runtime/runtime/context-subagents/context-tokens`: 4 paths
- `src/agent-runtime/sandbox/workspace-browser-ssh`: 4 paths
- `src/agent-runtime/runtime/command-session-store`: 3 paths
- `src/agent-runtime/skills/install-refresh`: 3 paths
- `src/agent-runtime/runtime/session-scope`: 2 paths
- `src/capability-modules/acp/control-plane-session-manager`: 2 paths
- `src/capability-modules/acp/persistent-bindings`: 2 paths
- `src/agent-runtime/runtime`: 1 paths
- `src/agent-runtime/runtime/acp-spawn`: 1 paths
- `src/agent-runtime/sandbox/filesystem-bridge/path-safety`: 1 paths
- `src/agent-runtime/skills/plugin-skills`: 1 paths
- `src/capability-modules/acp/secret-env-bridge`: 1 paths
- `src/reply-orchestration/channel-shaping`: 1 paths
- `src/reply-orchestration/commands/command-auth-gates`: 1 paths
- `src/reply-orchestration/commands/command-registry-families`: 1 paths

## Memory, media, web UI and terminal UI surfaces

- Feature id: `memory-media-ui`
- Final leaves: `15`
- Changed paths: `422`
- Risk: `medium`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/capability-modules/browser`: 161 paths
- `src/capability-modules/memory`: 106 paths
- `ui/web-ui/components`: 43 paths
- `src/capability-modules/media`: 26 paths
- `src/capability-modules/media-understanding`: 24 paths
- `src/capability-modules/cron`: 11 paths
- `ui/provider-channel-settings/web-settings/channel-config-cards`: 11 paths
- `src/capability-modules/tts`: 10 paths
- `ui/provider-channel-settings/web-settings`: 10 paths
- `ui/web-ui/components/app-shell-lifecycle`: 9 paths
- `ui/web-ui`: 4 paths
- `ui/web-ui/styles-types`: 3 paths
- `src/capability-modules/context-engine`: 2 paths
- `ui/provider-channel-settings/web-settings/config-form-rendering`: 1 paths
- `ui/web-ui/i18n`: 1 paths

## Model/search/provider plugins and tool surfaces

- Feature id: `model-provider-plugins`
- Final leaves: `43`
- Changed paths: `397`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `extensions/provider-plugins/xai`: 28 paths
- `extensions/provider-plugins/openai`: 27 paths
- `extensions/provider-plugins/google`: 24 paths
- `extensions/provider-plugins/moonshot`: 16 paths
- `extensions/provider-plugins/anthropic`: 15 paths
- `extensions/provider-plugins/ollama`: 15 paths
- `extensions/provider-plugins/minimax`: 13 paths
- `extensions/provider-plugins/github-copilot`: 12 paths
- `extensions/provider-plugins/mistral`: 11 paths
- `extensions/provider-plugins/openrouter`: 11 paths
- `extensions/tool-capability-plugins/firecrawl`: 11 paths
- `extensions/provider-plugins/modelstudio`: 10 paths
- `extensions/provider-plugins/kilocode`: 9 paths
- `extensions/provider-plugins/qwen-portal-auth`: 9 paths
- `extensions/provider-plugins/venice`: 9 paths
- `extensions/provider-plugins/zai`: 9 paths
- `extensions/tool-capability-plugins/brave`: 9 paths
- `extensions/tool-capability-plugins/openshell`: 9 paths
- `extensions/provider-plugins/cloudflare-ai-gateway`: 8 paths
- `extensions/provider-plugins/huggingface`: 8 paths
- `extensions/provider-plugins/sglang`: 8 paths
- `extensions/provider-plugins/synthetic`: 8 paths
- `extensions/provider-plugins/vllm`: 8 paths
- `extensions/provider-plugins/byteplus`: 7 paths
- `extensions/provider-plugins/chutes`: 7 paths
- `extensions/provider-plugins/deepseek`: 7 paths
- `extensions/provider-plugins/fal`: 7 paths
- `extensions/provider-plugins/opencode`: 7 paths
- `extensions/provider-plugins/opencode-go`: 7 paths
- `extensions/provider-plugins/together`: 7 paths
- `extensions/provider-plugins/volcengine`: 7 paths
- `extensions/provider-plugins/amazon-bedrock`: 6 paths
- `extensions/provider-plugins/vercel-ai-gateway`: 6 paths
- `extensions/provider-plugins/xiaomi`: 6 paths
- `extensions/tool-capability-plugins/duckduckgo`: 6 paths
- `extensions/tool-capability-plugins/exa`: 6 paths
- `extensions/provider-plugins/kimi-coding`: 5 paths
- `extensions/provider-plugins/nvidia`: 5 paths
- `extensions/provider-plugins/qianfan`: 5 paths
- `extensions/provider-plugins/copilot-proxy`: 3 paths
- ... 3 more leaves in `leaf-impact.json`

## Plugin SDK, plugin registry, plugin loading boundaries

- Feature id: `plugin-sdk-core`
- Final leaves: `7`
- Changed paths: `205`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `packages/shared-packages`: 85 paths
- `src/plugin-runtime-sdk/plugin-sdk`: 59 paths
- `src/plugin-runtime-sdk/plugins-runtime`: 54 paths
- `src/plugin-runtime-sdk/plugins-runtime/runtime-loader`: 4 paths
- `src/plugin-runtime-sdk/plugin-sdk/channel-sdk`: 1 paths
- `src/plugin-runtime-sdk/plugin-sdk/media-memory-sdk`: 1 paths
- `src/plugin-runtime-sdk/plugin-sdk/public-subpaths`: 1 paths

## Gateway, config, infrastructure, security and auth

- Feature id: `gateway-config-security`
- Final leaves: `16`
- Changed paths: `174`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/config-secrets-security/config-io`: 49 paths
- `src/gateway-api-surface/server-methods`: 32 paths
- `src/config-secrets-security/config-schema-validation`: 18 paths
- `src/config-secrets-security/security-guards`: 16 paths
- `src/config-secrets-security/legacy-migration`: 13 paths
- `src/gateway-api-surface/protocol`: 10 paths
- `src/config-secrets-security/secrets-resolution/runtime-secret-collection`: 9 paths
- `src/config-secrets-security/sessions`: 8 paths
- `src/config-secrets-security/secrets-resolution/gateway-cli-secret-resolution`: 4 paths
- `src/gateway-api-surface/auth-session`: 4 paths
- `src/gateway-api-surface/client-call`: 3 paths
- `src/gateway-api-surface/server-runtime`: 3 paths
- `src/config-secrets-security/secrets-resolution/secret-target-registry`: 2 paths
- `src/config-secrets-security/secrets-resolution`: 1 paths
- `src/config-secrets-security/secrets-resolution/secret-ref-contracts`: 1 paths
- `src/config-secrets-security/secrets-resolution/secret-storage-audit`: 1 paths

## Build, CI, scripts, tests and release automation

- Feature id: `build-ci-tests`
- Final leaves: `15`
- Changed paths: `157`
- Risk: `medium`
- Compatibility: `compatible`

Impacted leaves:

- `scripts/packaging/root-scripts`: 36 paths
- `test-infra/profiles-and-suites/config-and-runner`: 24 paths
- `test-infra/fixtures-and-helpers/helpers-extensions`: 23 paths
- `test-infra/fixtures-and-helpers/fixtures`: 12 paths
- `test-infra/fixtures-and-helpers/helpers-core`: 12 paths
- `test-infra/profiles-and-suites/root-tests`: 11 paths
- `scripts/packaging/e2e`: 9 paths
- `scripts/packaging/lib`: 9 paths
- `test-infra/profiles-and-suites/test-scripts`: 6 paths
- `scripts/packaging/dev`: 4 paths
- `scripts/packaging/podman`: 4 paths
- `scripts/release-versioning/app-versions`: 3 paths
- `scripts/release-versioning/cli-package-version`: 2 paths
- `scripts/packaging/pre-commit`: 1 paths
- `test-infra/fixtures-and-helpers/mocks`: 1 paths

## Native apps and packaging

- Feature id: `mobile-desktop-apps`
- Final leaves: `7`
- Changed paths: `137`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `apps/ios-android/android-app/runtime-gateway-node`: 108 paths
- `apps/macos/app-sources`: 11 paths
- `apps/ios-android/android-app`: 6 paths
- `apps/macos/tests`: 4 paths
- `apps/ios-android/shared-kit`: 3 paths
- `apps/macos/app-sources/gateway-runtime`: 3 paths
- `apps/ios-android/ios-app`: 2 paths
