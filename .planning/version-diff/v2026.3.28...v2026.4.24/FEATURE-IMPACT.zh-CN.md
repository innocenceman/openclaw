# Feature Impact

本报告按 feature 聚合 final leaf；canonical leaf mapping 在 `leaf-impact.json`。

## Docs, generated baselines, changelog and public guidance

- Feature id: `docs-generated-baselines`
- Final leaves: `26`
- Changed paths: `3121`
- Risk: `medium`
- Compatibility: `docs-only`

Impacted leaves:

- `docs/generated-baselines/bundled-plugin-metadata`: 1887 paths
- `docs/mintlify/.generated`: 386 paths
- `docs/mintlify/.i18n`: 364 paths
- `docs/mintlify/cli`: 53 paths
- `docs/mintlify/providers`: 53 paths
- `docs/mintlify/tools`: 53 paths
- `docs/mintlify/concepts`: 40 paths
- `docs/mintlify/gateway`: 39 paths
- `docs/mintlify/channels`: 33 paths
- `docs/mintlify/reference`: 29 paths
- `docs/mintlify/plugins`: 28 paths
- `docs/mintlify`: 27 paths
- `docs/mintlify/platforms`: 26 paths
- `docs/mintlify/install`: 24 paths
- `docs/mintlify/start`: 14 paths
- `docs/mintlify/automation`: 13 paths
- `docs/mintlify/help`: 12 paths
- `docs/mintlify/nodes`: 9 paths
- `docs/mintlify/assets`: 8 paths
- `docs/mintlify/images`: 7 paths
- `docs/mintlify/security`: 5 paths
- `docs/mintlify/web`: 5 paths
- `docs/mintlify/ja-jp`: 3 paths
- `docs/mintlify/debug`: 1 paths
- `docs/mintlify/diagnostics`: 1 paths
- `docs/mintlify/zh-cn`: 1 paths

## Bundled messaging channel plugins

- Feature id: `channel-plugins`
- Final leaves: `27`
- Changed paths: `2613`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `extensions/channel-plugins/telegram`: 458 paths
- `extensions/channel-plugins/discord`: 307 paths
- `extensions/channel-plugins/matrix`: 285 paths
- `extensions/channel-plugins/slack`: 235 paths
- `extensions/channel-plugins/whatsapp`: 224 paths
- `extensions/channel-plugins/msteams`: 148 paths
- `extensions/channel-plugins/bluebubbles`: 88 paths
- `extensions/channel-plugins/mattermost`: 88 paths
- `extensions/channel-plugins/feishu`: 82 paths
- `extensions/channel-plugins/imessage`: 73 paths
- `extensions/channel-plugins/line`: 69 paths
- `extensions/channel-plugins/signal`: 69 paths
- `extensions/channel-plugins/zalo`: 65 paths
- `extensions/channel-plugins/zalouser`: 60 paths
- `src/channel-abstraction/core-abstractions`: 59 paths
- `extensions/channel-plugins/googlechat`: 49 paths
- `extensions/channel-plugins/nextcloud-talk`: 46 paths
- `extensions/channel-plugins/irc`: 41 paths
- `extensions/channel-plugins/nostr`: 39 paths
- `extensions/channel-plugins/twitch`: 36 paths
- `extensions/channel-plugins/synology-chat`: 30 paths
- `extensions/channel-plugins/tlon`: 28 paths
- `src/channel-abstraction/plugin-bridge`: 11 paths
- `src/channel-abstraction/bindings`: 9 paths
- `src/channel-abstraction/routing`: 9 paths
- `src/channel-abstraction/routing/target-resolution`: 3 paths
- `src/channel-abstraction/allowlists`: 2 paths

## Agent loop, ACP, spawning, command control

- Feature id: `agent-acp-runtime`
- Final leaves: `36`
- Changed paths: `1940`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/agent-runtime/runtime/command-entrypoint`: 516 paths
- `src/reply-orchestration/runner`: 230 paths
- `src/agent-runtime/tools`: 209 paths
- `src/agent-runtime/pi-runner/core-run-loop`: 190 paths
- `src/agent-runtime/providers-auth`: 144 paths
- `src/reply-orchestration/commands/command-handlers`: 111 paths
- `src/agent-runtime/runtime/command-session-store`: 74 paths
- `src/agent-runtime/pi-runner/subscriptions-extensions`: 67 paths
- `src/agent-runtime/skills/core-inventory`: 61 paths
- `src/agent-runtime/runtime/context-subagents/subagent-registry`: 42 paths
- `src/agent-runtime/pi-runner/provider-params-streams`: 28 paths
- `src/agent-runtime/runtime/cli-runner`: 27 paths
- `src/agent-runtime/sandbox/backend-policy`: 27 paths
- `src/reply-orchestration/streaming`: 27 paths
- `src/reply-orchestration/exec`: 22 paths
- `src/agent-runtime/sandbox/workspace-browser-ssh`: 16 paths
- `src/reply-orchestration/queue`: 16 paths
- `src/agent-runtime/skills/install-refresh`: 13 paths
- `src/capability-modules/acp/runtime-session-identity`: 13 paths
- `src/capability-modules/acp/translator-protocol`: 13 paths
- `src/reply-orchestration/channel-shaping`: 11 paths
- `src/reply-orchestration/commands/command-registry-families`: 11 paths
- `src/agent-runtime/runtime/session-scope`: 10 paths
- `src/agent-runtime/runtime/context-subagents/context-tokens`: 8 paths
- `src/agent-runtime/sandbox/filesystem-bridge/shell-bridge`: 7 paths
- `src/capability-modules/acp/control-plane-session-manager`: 7 paths
- `src/agent-runtime/runtime/acp-spawn`: 6 paths
- `src/agent-runtime/schema`: 6 paths
- `src/agent-runtime/sandbox/filesystem-bridge/path-safety`: 5 paths
- `src/capability-modules/acp`: 5 paths
- `src/capability-modules/acp/persistent-bindings`: 5 paths
- `src/capability-modules/acp/secret-env-bridge`: 4 paths
- `src/reply-orchestration/commands/command-auth-gates`: 4 paths
- `src/agent-runtime/runtime`: 2 paths
- `src/agent-runtime/skills/plugin-skills`: 2 paths
- `src/reply-orchestration/export-html`: 1 paths

## Memory, media, web UI and terminal UI surfaces

- Feature id: `memory-media-ui`
- Final leaves: `23`
- Changed paths: `975`
- Risk: `medium`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/capability-modules/cron`: 135 paths
- `extensions/memory-media-voice-plugins/memory-core`: 121 paths
- `src/capability-modules/media`: 101 paths
- `ui/web-ui/components`: 83 paths
- `extensions/memory-media-voice-plugins/voice-call`: 80 paths
- `src/capability-modules/memory`: 70 paths
- `src/capability-modules/media-understanding`: 69 paths
- `ui/provider-channel-settings/web-settings`: 64 paths
- `ui/web-ui/i18n`: 56 paths
- `ui/web-ui/components/app-shell-lifecycle`: 53 paths
- `extensions/memory-media-voice-plugins/elevenlabs`: 22 paths
- `ui/web-ui/styles-types`: 18 paths
- `src/capability-modules/browser`: 17 paths
- `src/capability-modules/tts`: 17 paths
- `extensions/memory-media-voice-plugins/memory-lancedb`: 13 paths
- `extensions/memory-media-voice-plugins/deepgram`: 12 paths
- `ui/provider-channel-settings/web-settings/channel-config-cards`: 12 paths
- `extensions/memory-media-voice-plugins/microsoft`: 9 paths
- `src/capability-modules/context-engine`: 8 paths
- `ui/web-ui`: 8 paths
- `extensions/memory-media-voice-plugins/talk-voice`: 4 paths
- `ui/web-ui/public-assets`: 2 paths
- `ui/provider-channel-settings/web-settings/config-form-rendering`: 1 paths

## Build, CI, scripts, tests and release automation

- Feature id: `build-ci-tests`
- Final leaves: `19`
- Changed paths: `934`
- Risk: `medium`
- Compatibility: `compatible`

Impacted leaves:

- `scripts/packaging/root-scripts`: 197 paths
- `test-infra/fixtures-and-helpers/fixtures`: 143 paths
- `test-infra/profiles-and-suites/config-and-runner`: 122 paths
- `test-infra/fixtures-and-helpers/helpers-core`: 113 paths
- `test-infra/profiles-and-suites/root-tests`: 96 paths
- `test-infra/profiles-and-suites/test-scripts`: 77 paths
- `scripts/packaging/lib`: 56 paths
- `test-infra/fixtures-and-helpers/helpers-extensions`: 46 paths
- `scripts/packaging/e2e`: 38 paths
- `scripts/release-versioning/app-versions`: 18 paths
- `scripts/packaging/docker`: 10 paths
- `scripts/packaging/pre-commit`: 3 paths
- `scripts/packaging/shell-helpers`: 3 paths
- `scripts/release-versioning/cli-package-version`: 3 paths
- `scripts/packaging/dev`: 2 paths
- `scripts/packaging/docs-i18n`: 2 paths
- `scripts/packaging/podman`: 2 paths
- `test-infra/fixtures-and-helpers/mocks`: 2 paths
- `scripts/packaging/k8s`: 1 paths

## CLI command surface, status output, onboarding and maintenance commands

- Feature id: `cli-command-surface`
- Final leaves: `9`
- Changed paths: `871`
- Risk: `medium`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/cli-commands/command-implementations/maintenance-commands`: 301 paths
- `src/cli-commands/command-implementations/config-doctor-commands`: 192 paths
- `src/cli-commands/status-gateway-channel`: 102 paths
- `src/cli-commands/command-implementations/auth-provider-commands`: 70 paths
- `src/cli-commands/program-registration`: 60 paths
- `src/cli-commands/terminal-output`: 60 paths
- `src/cli-commands/command-implementations/channel-plugin-commands`: 38 paths
- `src/cli-commands/command-implementations/agent-command-cli`: 30 paths
- `src/cli-commands/command-implementations/secret-gateway-commands`: 18 paths

## Model/search/provider plugins and tool surfaces

- Feature id: `model-provider-plugins`
- Final leaves: `47`
- Changed paths: `722`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `extensions/provider-plugins/google`: 69 paths
- `extensions/provider-plugins/openai`: 60 paths
- `extensions/provider-plugins/xai`: 60 paths
- `extensions/provider-plugins/ollama`: 34 paths
- `extensions/provider-plugins/minimax`: 32 paths
- `extensions/provider-plugins/anthropic`: 29 paths
- `extensions/provider-plugins/github-copilot`: 25 paths
- `extensions/provider-plugins/moonshot`: 21 paths
- `extensions/provider-plugins/openrouter`: 21 paths
- `extensions/provider-plugins/mistral`: 20 paths
- `extensions/tool-capability-plugins/firecrawl`: 19 paths
- `extensions/provider-plugins/amazon-bedrock`: 17 paths
- `extensions/provider-plugins/zai`: 15 paths
- `extensions/auth-integration-plugins/lobster`: 14 paths
- `extensions/tool-capability-plugins/openshell`: 14 paths
- `extensions/auth-integration-plugins/perplexity`: 13 paths
- `extensions/provider-plugins/byteplus`: 13 paths
- `extensions/provider-plugins/deepseek`: 13 paths
- `extensions/provider-plugins/fal`: 13 paths
- `extensions/provider-plugins/opencode-go`: 13 paths
- `extensions/tool-capability-plugins/brave`: 13 paths
- `extensions/tool-capability-plugins/exa`: 13 paths
- `extensions/auth-integration-plugins/device-pair`: 12 paths
- `extensions/provider-plugins/kimi-coding`: 12 paths
- `extensions/provider-plugins/opencode`: 11 paths
- `extensions/tool-capability-plugins/duckduckgo`: 11 paths
- `extensions/provider-plugins/modelstudio`: 10 paths
- `extensions/provider-plugins/together`: 10 paths
- `extensions/provider-plugins/chutes`: 9 paths
- `extensions/provider-plugins/huggingface`: 9 paths
- `extensions/provider-plugins/kilocode`: 9 paths
- `extensions/provider-plugins/venice`: 9 paths
- `extensions/provider-plugins/volcengine`: 9 paths
- `extensions/provider-plugins/cloudflare-ai-gateway`: 8 paths
- `extensions/provider-plugins/nvidia`: 8 paths
- `extensions/provider-plugins/vercel-ai-gateway`: 7 paths
- `extensions/auth-integration-plugins/groq`: 6 paths
- `extensions/provider-plugins/vllm`: 6 paths
- `extensions/provider-plugins/sglang`: 5 paths
- `extensions/provider-plugins/synthetic`: 5 paths
- ... 7 more leaves in `leaf-impact.json`

## Shared runtime primitives, compatibility, logging and startup support

- Feature id: `shared-runtime-support`
- Final leaves: `8`
- Changed paths: `676`
- Risk: `medium`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/shared-misc-runtime-support/shared-primitives`: 440 paths
- `src/shared-misc-runtime-support/startup-process`: 77 paths
- `src/shared-misc-runtime-support/logging-support`: 49 paths
- `src/shared-misc-runtime-support/compat-hooks`: 41 paths
- `src/shared-misc-runtime-support/test-support`: 30 paths
- `src/shared-misc-runtime-support/docs-i18n-markdown`: 19 paths
- `src/shared-misc-runtime-support/root-entrypoints`: 11 paths
- `src/shared-misc-runtime-support/web-provider-root`: 9 paths

## Gateway, config, infrastructure, security and auth

- Feature id: `gateway-config-security`
- Final leaves: `16`
- Changed paths: `636`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/config-secrets-security/config-io`: 160 paths
- `src/gateway-api-surface/server-methods`: 81 paths
- `src/config-secrets-security/security-guards`: 78 paths
- `src/config-secrets-security/config-schema-validation`: 59 paths
- `src/config-secrets-security/secrets-resolution/runtime-secret-collection`: 59 paths
- `src/config-secrets-security/sessions`: 53 paths
- `src/gateway-api-surface/protocol`: 29 paths
- `src/gateway-api-surface/auth-session`: 21 paths
- `src/gateway-api-surface/server-runtime`: 21 paths
- `src/config-secrets-security/secrets-resolution`: 18 paths
- `src/config-secrets-security/legacy-migration`: 14 paths
- `src/config-secrets-security/secrets-resolution/secret-storage-audit`: 12 paths
- `src/gateway-api-surface/client-call`: 9 paths
- `src/config-secrets-security/secrets-resolution/gateway-cli-secret-resolution`: 8 paths
- `src/config-secrets-security/secrets-resolution/secret-ref-contracts`: 7 paths
- `src/config-secrets-security/secrets-resolution/secret-target-registry`: 7 paths

## Native apps and packaging

- Feature id: `mobile-desktop-apps`
- Final leaves: `12`
- Changed paths: `539`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `apps/ios-android/android-app/runtime-gateway-node`: 388 paths
- `apps/ios-android/android-app`: 40 paths
- `apps/macos/app-sources`: 36 paths
- `apps/ios-android/ios-app`: 30 paths
- `apps/ios-android/shared-kit`: 16 paths
- `apps/macos/app-sources/gateway-runtime`: 10 paths
- `apps/provider-channel-settings/native-settings/mobile-native-settings`: 8 paths
- `apps/ios-android/ios-extensions-watch`: 4 paths
- `apps/ios-android`: 3 paths
- `apps/macos/tests`: 2 paths
- `apps/ios-android/android-app/build-flavors`: 1 paths
- `apps/ios-android/android-benchmark`: 1 paths

## Plugin SDK, plugin registry, plugin loading boundaries

- Feature id: `plugin-sdk-core`
- Final leaves: `10`
- Changed paths: `388`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/plugin-runtime-sdk/plugins-runtime`: 156 paths
- `src/plugin-runtime-sdk/plugin-sdk`: 131 paths
- `packages/shared-packages`: 85 paths
- `src/plugin-runtime-sdk/plugins-runtime/runtime-loader`: 4 paths
- `packages/shared-packages/clawdbot`: 3 paths
- `packages/shared-packages/moltbot`: 3 paths
- `src/plugin-runtime-sdk/plugin-sdk/media-memory-sdk`: 2 paths
- `src/plugin-runtime-sdk/plugins-runtime/boundary-enforcement`: 2 paths
- `src/plugin-runtime-sdk/plugin-sdk/channel-sdk`: 1 paths
- `src/plugin-runtime-sdk/plugin-sdk/tool-sdk`: 1 paths

## Bundled skill plugins and skill runtime surfaces

- Feature id: `skill-plugins`
- Final leaves: `6`
- Changed paths: `199`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `extensions/skill-plugins/feishu`: 86 paths
- `extensions/skill-plugins/acpx`: 41 paths
- `extensions/skill-plugins/diffs`: 30 paths
- `extensions/skill-plugins/tlon`: 25 paths
- `extensions/skill-plugins/tavily`: 15 paths
- `extensions/skill-plugins/open-prose`: 2 paths

## Outbound delivery, routing, formatting, identity and network infrastructure

- Feature id: `infra-outbound-delivery`
- Final leaves: `7`
- Changed paths: `132`
- Risk: `medium`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/infra-outbound-delivery/outbound-delivery`: 65 paths
- `src/infra-outbound-delivery/outbound-actions`: 19 paths
- `src/infra-outbound-delivery/outbound-routing`: 18 paths
- `src/infra-outbound-delivery/network`: 13 paths
- `src/infra-outbound-delivery/outbound-identity`: 9 paths
- `src/infra-outbound-delivery/formatting`: 7 paths
- `src/infra-outbound-delivery/tls`: 1 paths
