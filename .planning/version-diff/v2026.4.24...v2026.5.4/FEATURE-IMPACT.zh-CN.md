# Feature Impact

本报告按 feature 聚合 final leaf；canonical leaf mapping 在 `leaf-impact.json`。

## Docs, generated baselines, changelog and public guidance

- Feature id: `docs-generated-baselines`
- Final leaves: `22`
- Changed paths: `2496`
- Risk: `medium`
- Compatibility: `docs-only`

Impacted leaves:

- `docs/generated-baselines/bundled-plugin-metadata`: 1763 paths
- `docs/mintlify/.generated`: 228 paths
- `docs/mintlify/plugins`: 147 paths
- `docs/mintlify/tools`: 43 paths
- `docs/mintlify/cli`: 41 paths
- `docs/mintlify/providers`: 39 paths
- `docs/mintlify/gateway`: 38 paths
- `docs/mintlify/concepts`: 37 paths
- `docs/mintlify/channels`: 34 paths
- `docs/mintlify/.i18n`: 22 paths
- `docs/mintlify`: 17 paths
- `docs/mintlify/reference`: 16 paths
- `docs/mintlify/install`: 14 paths
- `docs/mintlify/help`: 13 paths
- `docs/mintlify/platforms`: 10 paths
- `docs/mintlify/automation`: 9 paths
- `docs/mintlify/nodes`: 6 paths
- `docs/mintlify/security`: 6 paths
- `docs/mintlify/start`: 6 paths
- `docs/mintlify/web`: 5 paths
- `docs/mintlify/diagnostics`: 1 paths
- `docs/mintlify/zh-cn`: 1 paths

## Bundled messaging channel plugins

- Feature id: `channel-plugins`
- Final leaves: `27`
- Changed paths: `1790`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `extensions/channel-plugins/discord`: 406 paths
- `extensions/channel-plugins/telegram`: 325 paths
- `extensions/channel-plugins/slack`: 154 paths
- `extensions/channel-plugins/matrix`: 147 paths
- `extensions/channel-plugins/whatsapp`: 138 paths
- `extensions/channel-plugins/msteams`: 80 paths
- `extensions/channel-plugins/bluebubbles`: 53 paths
- `extensions/channel-plugins/mattermost`: 52 paths
- `extensions/channel-plugins/feishu`: 46 paths
- `extensions/channel-plugins/imessage`: 41 paths
- `extensions/channel-plugins/line`: 40 paths
- `extensions/channel-plugins/signal`: 38 paths
- `src/channel-abstraction/core-abstractions`: 36 paths
- `extensions/channel-plugins/zalo`: 34 paths
- `extensions/channel-plugins/googlechat`: 31 paths
- `extensions/channel-plugins/nextcloud-talk`: 27 paths
- `extensions/channel-plugins/zalouser`: 25 paths
- `extensions/channel-plugins/irc`: 21 paths
- `extensions/channel-plugins/tlon`: 21 paths
- `extensions/channel-plugins/nostr`: 20 paths
- `extensions/channel-plugins/twitch`: 17 paths
- `extensions/channel-plugins/synology-chat`: 16 paths
- `src/channel-abstraction/plugin-bridge`: 10 paths
- `src/channel-abstraction/bindings`: 6 paths
- `src/channel-abstraction/routing`: 3 paths
- `src/channel-abstraction/allowlists`: 2 paths
- `src/channel-abstraction/transport`: 1 paths

## Agent loop, ACP, spawning, command control

- Feature id: `agent-acp-runtime`
- Final leaves: `36`
- Changed paths: `1294`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/agent-runtime/runtime/command-entrypoint`: 362 paths
- `src/agent-runtime/pi-runner/core-run-loop`: 152 paths
- `src/agent-runtime/tools`: 143 paths
- `src/reply-orchestration/runner`: 137 paths
- `src/agent-runtime/providers-auth`: 97 paths
- `src/reply-orchestration/commands/command-handlers`: 62 paths
- `src/agent-runtime/runtime/command-session-store`: 53 paths
- `src/agent-runtime/pi-runner/subscriptions-extensions`: 40 paths
- `src/agent-runtime/runtime/context-subagents/subagent-registry`: 33 paths
- `src/agent-runtime/runtime/cli-runner`: 31 paths
- `src/reply-orchestration/exec`: 18 paths
- `src/reply-orchestration/streaming`: 16 paths
- `src/reply-orchestration/queue`: 15 paths
- `src/agent-runtime/sandbox/backend-policy`: 14 paths
- `src/agent-runtime/skills/core-inventory`: 14 paths
- `src/agent-runtime/pi-runner/provider-params-streams`: 10 paths
- `src/capability-modules/acp/translator-protocol`: 10 paths
- `src/agent-runtime/sandbox/workspace-browser-ssh`: 8 paths
- `src/agent-runtime/skills/install-refresh`: 8 paths
- `src/capability-modules/acp/runtime-session-identity`: 8 paths
- `src/agent-runtime/runtime/context-subagents/context-tokens`: 7 paths
- `src/agent-runtime/runtime/session-scope`: 7 paths
- `src/reply-orchestration/commands/command-registry-families`: 7 paths
- `src/agent-runtime/runtime/acp-spawn`: 6 paths
- `src/capability-modules/acp/control-plane-session-manager`: 6 paths
- `src/reply-orchestration/channel-shaping`: 5 paths
- `src/agent-runtime/sandbox/filesystem-bridge/path-safety`: 4 paths
- `src/capability-modules/acp/persistent-bindings`: 4 paths
- `src/capability-modules/acp/secret-env-bridge`: 4 paths
- `src/reply-orchestration/export-html`: 3 paths
- `src/agent-runtime/runtime`: 2 paths
- `src/agent-runtime/schema`: 2 paths
- `src/agent-runtime/skills/plugin-skills`: 2 paths
- `src/reply-orchestration/commands/command-auth-gates`: 2 paths
- `src/agent-runtime/sandbox/filesystem-bridge/shell-bridge`: 1 paths
- `src/capability-modules/acp`: 1 paths

## Build, CI, scripts, tests and release automation

- Feature id: `build-ci-tests`
- Final leaves: `17`
- Changed paths: `851`
- Risk: `medium`
- Compatibility: `compatible`

Impacted leaves:

- `scripts/packaging/root-scripts`: 163 paths
- `test-infra/profiles-and-suites/config-and-runner`: 159 paths
- `scripts/packaging/e2e`: 144 paths
- `test-infra/profiles-and-suites/root-tests`: 106 paths
- `test-infra/fixtures-and-helpers/helpers-core`: 96 paths
- `scripts/packaging/lib`: 70 paths
- `test-infra/fixtures-and-helpers/fixtures`: 52 paths
- `test-infra/profiles-and-suites/test-scripts`: 24 paths
- `scripts/release-versioning/app-versions`: 15 paths
- `scripts/packaging/docker`: 9 paths
- `scripts/packaging/podman`: 3 paths
- `scripts/packaging/dev`: 2 paths
- `scripts/packaging/docs-i18n`: 2 paths
- `scripts/release-versioning/cli-package-version`: 2 paths
- `test-infra/fixtures-and-helpers/mocks`: 2 paths
- `scripts/packaging/pre-commit`: 1 paths
- `scripts/packaging/shell-helpers`: 1 paths

## Memory, media, web UI and terminal UI surfaces

- Feature id: `memory-media-ui`
- Final leaves: `20`
- Changed paths: `741`
- Risk: `medium`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/capability-modules/cron`: 107 paths
- `ui/web-ui/components`: 81 paths
- `src/capability-modules/memory`: 70 paths
- `extensions/memory-media-voice-plugins/memory-core`: 67 paths
- `src/capability-modules/media`: 65 paths
- `ui/web-ui/i18n`: 64 paths
- `extensions/memory-media-voice-plugins/voice-call`: 55 paths
- `src/capability-modules/media-understanding`: 53 paths
- `ui/web-ui/components/app-shell-lifecycle`: 51 paths
- `ui/provider-channel-settings/web-settings`: 45 paths
- `ui/web-ui/styles-types`: 16 paths
- `src/capability-modules/tts`: 15 paths
- `src/capability-modules/browser`: 10 paths
- `extensions/memory-media-voice-plugins/memory-lancedb`: 9 paths
- `extensions/memory-media-voice-plugins/elevenlabs`: 8 paths
- `extensions/memory-media-voice-plugins/deepgram`: 6 paths
- `extensions/memory-media-voice-plugins/microsoft`: 6 paths
- `ui/web-ui/public-assets`: 6 paths
- `src/capability-modules/context-engine`: 4 paths
- `extensions/memory-media-voice-plugins/talk-voice`: 3 paths

## CLI command surface, status output, onboarding and maintenance commands

- Feature id: `cli-command-surface`
- Final leaves: `9`
- Changed paths: `680`
- Risk: `medium`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/cli-commands/command-implementations/maintenance-commands`: 242 paths
- `src/cli-commands/command-implementations/config-doctor-commands`: 162 paths
- `src/cli-commands/status-gateway-channel`: 66 paths
- `src/cli-commands/command-implementations/auth-provider-commands`: 57 paths
- `src/cli-commands/program-registration`: 48 paths
- `src/cli-commands/terminal-output`: 35 paths
- `src/cli-commands/command-implementations/channel-plugin-commands`: 30 paths
- `src/cli-commands/command-implementations/agent-command-cli`: 22 paths
- `src/cli-commands/command-implementations/secret-gateway-commands`: 18 paths

## Native apps and packaging

- Feature id: `mobile-desktop-apps`
- Final leaves: `12`
- Changed paths: `654`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `apps/ios-android/android-app/runtime-gateway-node`: 333 paths
- `apps/ios-android/android-app`: 94 paths
- `apps/ios-android/shared-kit`: 47 paths
- `apps/macos/app-sources`: 46 paths
- `apps/ios-android/ios-app`: 44 paths
- `apps/ios-android`: 38 paths
- `apps/macos/app-sources/gateway-runtime`: 22 paths
- `apps/macos/tests`: 14 paths
- `apps/provider-channel-settings/native-settings/mobile-native-settings`: 9 paths
- `apps/ios-android/ios-extensions-watch`: 5 paths
- `apps/ios-android/android-app/build-flavors`: 1 paths
- `apps/ios-android/android-benchmark`: 1 paths

## Shared runtime primitives, compatibility, logging and startup support

- Feature id: `shared-runtime-support`
- Final leaves: `8`
- Changed paths: `498`
- Risk: `medium`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/shared-misc-runtime-support/shared-primitives`: 307 paths
- `src/shared-misc-runtime-support/startup-process`: 69 paths
- `src/shared-misc-runtime-support/logging-support`: 42 paths
- `src/shared-misc-runtime-support/compat-hooks`: 27 paths
- `src/shared-misc-runtime-support/test-support`: 23 paths
- `src/shared-misc-runtime-support/docs-i18n-markdown`: 13 paths
- `src/shared-misc-runtime-support/root-entrypoints`: 9 paths
- `src/shared-misc-runtime-support/web-provider-root`: 8 paths

## Model/search/provider plugins and tool surfaces

- Feature id: `model-provider-plugins`
- Final leaves: `46`
- Changed paths: `497`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `extensions/provider-plugins/openai`: 51 paths
- `extensions/provider-plugins/google`: 37 paths
- `extensions/provider-plugins/xai`: 34 paths
- `extensions/provider-plugins/ollama`: 28 paths
- `extensions/provider-plugins/minimax`: 23 paths
- `extensions/provider-plugins/github-copilot`: 20 paths
- `extensions/provider-plugins/openrouter`: 18 paths
- `extensions/provider-plugins/anthropic`: 17 paths
- `extensions/provider-plugins/mistral`: 13 paths
- `extensions/provider-plugins/deepseek`: 12 paths
- `extensions/auth-integration-plugins/lobster`: 11 paths
- `extensions/provider-plugins/moonshot`: 11 paths
- `extensions/provider-plugins/volcengine`: 11 paths
- `extensions/provider-plugins/amazon-bedrock`: 10 paths
- `extensions/provider-plugins/nvidia`: 10 paths
- `extensions/auth-integration-plugins/device-pair`: 9 paths
- `extensions/provider-plugins/byteplus`: 9 paths
- `extensions/provider-plugins/zai`: 9 paths
- `extensions/provider-plugins/cloudflare-ai-gateway`: 8 paths
- `extensions/provider-plugins/opencode`: 8 paths
- `extensions/provider-plugins/opencode-go`: 8 paths
- `extensions/provider-plugins/venice`: 8 paths
- `extensions/provider-plugins/xiaomi`: 8 paths
- `extensions/provider-plugins/fal`: 7 paths
- `extensions/provider-plugins/huggingface`: 7 paths
- `extensions/provider-plugins/kilocode`: 7 paths
- `extensions/provider-plugins/together`: 7 paths
- `extensions/provider-plugins/vllm`: 7 paths
- `extensions/tool-capability-plugins/brave`: 7 paths
- `extensions/tool-capability-plugins/firecrawl`: 7 paths
- `extensions/tool-capability-plugins/openshell`: 7 paths
- `extensions/provider-plugins/vercel-ai-gateway`: 6 paths
- `extensions/tool-capability-plugins/duckduckgo`: 6 paths
- `extensions/tool-capability-plugins/llm-task`: 6 paths
- `extensions/auth-integration-plugins/diagnostics-otel`: 5 paths
- `extensions/auth-integration-plugins/groq`: 5 paths
- `extensions/auth-integration-plugins/perplexity`: 5 paths
- `extensions/provider-plugins/chutes`: 5 paths
- `extensions/provider-plugins/kimi-coding`: 5 paths
- `extensions/provider-plugins/qianfan`: 4 paths
- ... 6 more leaves in `leaf-impact.json`

## Gateway, config, infrastructure, security and auth

- Feature id: `gateway-config-security`
- Final leaves: `16`
- Changed paths: `454`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/config-secrets-security/config-io`: 105 paths
- `src/gateway-api-surface/server-methods`: 85 paths
- `src/config-secrets-security/config-schema-validation`: 58 paths
- `src/config-secrets-security/security-guards`: 42 paths
- `src/config-secrets-security/sessions`: 42 paths
- `src/config-secrets-security/secrets-resolution/runtime-secret-collection`: 29 paths
- `src/gateway-api-surface/protocol`: 27 paths
- `src/gateway-api-surface/server-runtime`: 20 paths
- `src/gateway-api-surface/auth-session`: 16 paths
- `src/gateway-api-surface/client-call`: 7 paths
- `src/config-secrets-security/secrets-resolution`: 6 paths
- `src/config-secrets-security/legacy-migration`: 5 paths
- `src/config-secrets-security/secrets-resolution/secret-target-registry`: 4 paths
- `src/config-secrets-security/secrets-resolution/secret-ref-contracts`: 3 paths
- `src/config-secrets-security/secrets-resolution/secret-storage-audit`: 3 paths
- `src/config-secrets-security/secrets-resolution/gateway-cli-secret-resolution`: 2 paths

## Plugin SDK, plugin registry, plugin loading boundaries

- Feature id: `plugin-sdk-core`
- Final leaves: `6`
- Changed paths: `303`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/plugin-runtime-sdk/plugins-runtime`: 139 paths
- `packages/shared-packages`: 89 paths
- `src/plugin-runtime-sdk/plugin-sdk`: 67 paths
- `src/plugin-runtime-sdk/plugins-runtime/runtime-loader`: 4 paths
- `src/plugin-runtime-sdk/plugin-sdk/channel-sdk`: 2 paths
- `src/plugin-runtime-sdk/plugins-runtime/boundary-enforcement`: 2 paths

## Miscellaneous repository surface

- Feature id: `misc-repo-surface`
- Final leaves: `15`
- Changed paths: `123`
- Risk: `medium`
- Compatibility: `unknown`

Impacted leaves:

- `unmapped/src`: 55 paths
- `unmapped/Swabble`: 36 paths
- `unmapped/config`: 9 paths
- `unmapped/assets`: 7 paths
- `unmapped/security`: 6 paths
- `unmapped/deploy`: 1 paths
- `unmapped/docker-compose.yml`: 1 paths
- `unmapped/docker-setup.sh`: 1 paths
- `unmapped/docs.acp.md`: 1 paths
- `unmapped/fly.private.toml`: 1 paths
- `unmapped/openclaw.mjs`: 1 paths
- `unmapped/openclaw.podman.env`: 1 paths
- `unmapped/pyproject.toml`: 1 paths
- `unmapped/setup-podman.sh`: 1 paths
- `unmapped/zizmor.yml`: 1 paths

## Bundled skill plugins and skill runtime surfaces

- Feature id: `skill-plugins`
- Final leaves: `6`
- Changed paths: `111`
- Risk: `high`
- Compatibility: `behavior-change`

Impacted leaves:

- `extensions/skill-plugins/feishu`: 57 paths
- `extensions/skill-plugins/acpx`: 20 paths
- `extensions/skill-plugins/diffs`: 14 paths
- `extensions/skill-plugins/tlon`: 13 paths
- `extensions/skill-plugins/tavily`: 5 paths
- `extensions/skill-plugins/open-prose`: 2 paths

## Outbound delivery, routing, formatting, identity and network infrastructure

- Feature id: `infra-outbound-delivery`
- Final leaves: `6`
- Changed paths: `54`
- Risk: `medium`
- Compatibility: `behavior-change`

Impacted leaves:

- `src/infra-outbound-delivery/network`: 18 paths
- `src/infra-outbound-delivery/outbound-delivery`: 17 paths
- `src/infra-outbound-delivery/outbound-routing`: 7 paths
- `src/infra-outbound-delivery/outbound-actions`: 6 paths
- `src/infra-outbound-delivery/formatting`: 4 paths
- `src/infra-outbound-delivery/outbound-identity`: 2 paths
