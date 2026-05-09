# External Integrations

**Analysis Date:** 2026-05-09

## APIs & External Services

**LLM and agent providers:**

- OpenAI - Responses/chat, image generation, audio transcription, speech, embeddings, and Codex OAuth provider support.
  - SDK/Client: OpenAI-compatible client code in `extensions/openai/openai-provider.ts`, `extensions/openai/image-generation-provider.ts`, `extensions/openai/media-understanding-provider.ts`, `extensions/openai/speech-provider.ts`, and `extensions/openai/openai-codex-provider.ts`.
  - Auth: `OPENAI_API_KEY`; Codex OAuth/token profiles are stored via `src/agents/auth-profiles/store.ts`.
- Anthropic - Anthropic provider, OAuth token support, and Vertex Anthropic streaming.
  - SDK/Client: bundled provider metadata in `extensions/anthropic/openclaw.plugin.json`; Vertex SDK in `src/agents/anthropic-vertex-stream.ts`.
  - Auth: `ANTHROPIC_API_KEY`, `ANTHROPIC_OAUTH_TOKEN`, and Google Cloud environment for Vertex.
- Google Gemini - Gemini model provider, Gemini CLI provider, media understanding, image generation, and web search.
  - SDK/Client: `extensions/google/provider-models.ts`, `extensions/google/gemini-cli-provider.ts`, `extensions/google/media-understanding-provider.ts`, `extensions/google/image-generation-provider.ts`, and `extensions/google/src/gemini-web-search-provider.ts`.
  - Auth: `GOOGLE_API_KEY`, `GEMINI_API_KEY`, `GOOGLE_APPLICATION_CREDENTIALS`, `GOOGLE_CLOUD_PROJECT`, and Gemini CLI OAuth variables.
- Amazon Bedrock - Bedrock model discovery/provider integration.
  - SDK/Client: `@aws-sdk/client-bedrock` in `src/agents/bedrock-discovery.ts` and plugin metadata in `extensions/amazon-bedrock/openclaw.plugin.json`.
  - Auth: AWS environment/credential chain.
- OpenAI-compatible hosted providers - BytePlus, Chutes, Cloudflare AI Gateway, DeepSeek, GitHub Copilot, Hugging Face, Kilo Code, Kimi, MiniMax, Mistral, Model Studio, Moonshot, NVIDIA, OpenRouter, Qianfan, Qwen Portal, SGLang, Synthetic, Together, Venice, Vercel AI Gateway, vLLM, Volcengine, xAI, Xiaomi, and Z.ai.
  - SDK/Client: provider catalogs and plugin metadata under `extensions/*/provider-catalog.ts` and `extensions/*/openclaw.plugin.json`.
  - Auth: provider-specific variables such as `DEEPSEEK_API_KEY`, `OPENROUTER_API_KEY`, `MISTRAL_API_KEY`, `TOGETHER_API_KEY`, `XAI_API_KEY`, `ZAI_API_KEY`, and `AI_GATEWAY_API_KEY`.
- Local/self-hosted providers - Ollama, SGLang, vLLM, OpenWebUI, LiteLLM/custom base URLs, and OpenShell-style local execution.
  - SDK/Client: `extensions/ollama/openclaw.plugin.json`, `extensions/sglang/openclaw.plugin.json`, `extensions/vllm/openclaw.plugin.json`, `src/agents/self-hosted-provider-defaults.ts`, and `extensions/openshell/`.
  - Auth: optional provider API keys such as `OLLAMA_API_KEY`, `SGLANG_API_KEY`, `VLLM_API_KEY`, or custom gateway tokens.

**Messaging and channel APIs:**

- Telegram - bot polling/webhook, native commands, media, reactions, and status probing.
  - SDK/Client: `grammy`, `@grammyjs/runner`, and `@grammyjs/transformer-throttler` in `extensions/telegram/package.json`; implementation in `extensions/telegram/src/`.
  - Auth: `TELEGRAM_BOT_TOKEN`; webhook secret configured in `channels.telegram.webhookSecret`.
- Discord - REST, gateway monitoring, slash/native commands, components, voice, polls, thread bindings, and moderation actions.
  - SDK/Client: `@buape/carbon`, `discord-api-types`, `@discordjs/voice`, `opusscript`, and `ws` in `extensions/discord/package.json`; implementation in `extensions/discord/src/`.
  - Auth: `DISCORD_BOT_TOKEN`.
- Slack - Bolt event app, Web API, Socket Mode, slash commands, block actions, uploads, reads, and sends.
  - SDK/Client: `@slack/bolt` and `@slack/web-api` in `extensions/slack/package.json`; implementation in `extensions/slack/src/`.
  - Auth: `SLACK_BOT_TOKEN`, `SLACK_APP_TOKEN`, `SLACK_USER_TOKEN`, and `SLACK_BOT_USER_ID`.
- Matrix - Matrix client, crypto, sync store, decryption bridge, verification, and file-backed sync.
  - SDK/Client: `matrix-js-sdk`, `@matrix-org/matrix-sdk-crypto-nodejs`, `fake-indexeddb`, and `music-metadata` in `extensions/matrix/package.json`; implementation in `extensions/matrix/src/matrix/`.
  - Auth: `MATRIX_HOMESERVER`, `MATRIX_ACCESS_TOKEN`, `MATRIX_USER_ID`, `MATRIX_PASSWORD`, and account-specific Matrix variables.
- LINE - Messaging API webhook, rich menu, downloads, sends, templates, and Flex messages.
  - SDK/Client: `@line/bot-sdk` in `package.json`/`extensions/line/package.json`; implementation in `extensions/line/src/`.
  - Auth: `LINE_CHANNEL_ACCESS_TOKEN` and `LINE_CHANNEL_SECRET`.
- Microsoft Teams - bot channel monitor over Microsoft Teams APIs.
  - SDK/Client: `@microsoft/teams.api`, `@microsoft/teams.apps`, and `express` in `extensions/msteams/package.json`; implementation in `extensions/msteams/src/`.
  - Auth: `MSTEAMS_APP_ID`, `MSTEAMS_APP_PASSWORD`, and `MSTEAMS_TENANT_ID`.
- Google Chat - Google-auth backed Google Chat channel.
  - SDK/Client: `google-auth-library` in `extensions/googlechat/package.json`; implementation in `extensions/googlechat/src/`.
  - Auth: Google service account/OAuth credentials.
- Additional bundled channels - BlueBubbles, Feishu, iMessage, IRC, Mattermost, Nextcloud Talk, Nostr, Signal, Synology Chat, Tlon, Twitch, WhatsApp, Zalo, and Zalo user mode.
  - SDK/Client: each channel owns dependencies in `extensions/<id>/package.json` and metadata in `extensions/<id>/openclaw.plugin.json`.
  - Auth: channel-specific config/env keys such as `FEISHU_APP_ID`, `FEISHU_APP_SECRET`, `IRC_PASSWORD`, `MATTERMOST_BOT_TOKEN`, `NEXTCLOUD_TALK_BOT_SECRET`, `NOSTR_PRIVATE_KEY`, `SYNOLOGY_CHAT_TOKEN`, `TWITCH_ACCESS_TOKEN`, `ZALO_BOT_TOKEN`, and `ZCA_PROFILE`.

**Search, browsing, media, and tools:**

- Web search providers - Brave, DuckDuckGo, Exa, Firecrawl, Google Gemini web search, Kimi web search, Perplexity, Tavily, and xAI/Grok web search.
  - SDK/Client: implementations under `extensions/brave/src/`, `extensions/duckduckgo/src/`, `extensions/exa/src/`, `extensions/firecrawl/src/`, `extensions/google/src/`, `extensions/moonshot/src/`, `extensions/perplexity/src/`, `extensions/tavily/src/`, and `extensions/xai/src/`.
  - Auth: `BRAVE_API_KEY`, `EXA_API_KEY`, `FIRECRAWL_API_KEY`, `TAVILY_API_KEY`, `PERPLEXITY_API_KEY`, `KIMI_API_KEY`, and `XAI_API_KEY`.
- Browser automation - local Chromium/CDP and Playwright for browser control, web sessions, and the Diffs skill.
  - SDK/Client: `playwright-core` in `src/browser/` and `extensions/diffs/src/browser.ts`.
  - Auth: browser session credentials stored outside the repo under the user OpenClaw state.
- Speech and voice - OpenAI, Deepgram, ElevenLabs, Microsoft Edge TTS, whisper.cpp, sherpa-onnx, and voice-call WebSocket media stream.
  - SDK/Client: `extensions/openai/speech-provider.ts`, `extensions/deepgram/media-understanding-provider.ts`, `extensions/elevenlabs/speech-provider.ts`, `extensions/microsoft/speech-provider.ts`, and `extensions/voice-call/src/`.
  - Auth: `OPENAI_API_KEY`, `DEEPGRAM_API_KEY`, `ELEVENLABS_API_KEY`, `XI_API_KEY`, `TALK_API_KEY`, and telephony keys when voice-call webhooks are enabled.
- Image/video/media understanding - OpenAI, Google, MiniMax, Mistral, Moonshot, Z.ai, local models, PDF/image handlers, and gateway media URL serving.
  - SDK/Client: `src/media-understanding/`, `src/media/`, `extensions/openai/media-understanding-provider.ts`, `extensions/google/media-understanding-provider.ts`, `extensions/minimax/media-understanding-provider.ts`, `extensions/mistral/media-understanding-provider.ts`, `extensions/moonshot/media-understanding-provider.ts`, and `extensions/zai/media-understanding-provider.ts`.
  - Auth: provider-specific API keys plus local model paths such as `WHISPER_CPP_MODEL` and `SHERPA_ONNX_MODEL_DIR`.
- ACP and MCP - Agent Client Protocol and Model Context Protocol integration.
  - SDK/Client: `@agentclientprotocol/sdk` in `src/acp/`; `@modelcontextprotocol/sdk` in `src/agents/pi-bundle-mcp-tools.ts`.
  - Auth: inherited from configured tools, agents, and provider auth profiles.

## Data Storage

**Databases:**

- Built-in SQLite memory backend.
  - Connection: local files under the OpenClaw state/agent directories.
  - Client: Node built-in `node:sqlite` loaded by `src/memory/sqlite.ts`; vector extension loaded from `sqlite-vec` by `src/memory/sqlite-vec.ts`.
- LanceDB memory plugin.
  - Connection: local LanceDB path configured by the memory plugin.
  - Client: `@lancedb/lancedb` dynamically loaded by `extensions/memory-lancedb/lancedb-runtime.ts` and used by `extensions/memory-lancedb/index.ts`.
- JSON/JSONL stores.
  - Connection: files under the OpenClaw state/agent directories.
  - Client: config/session/runtime store utilities in `src/config/`, `src/plugin-sdk/json-store.ts`, `src/plugin-sdk/runtime-store.ts`, `src/config/sessions/`, and channel-specific stores such as `extensions/nostr/src/nostr-state-store.ts`.

**File Storage:**

- Local filesystem is the default storage layer for config, sessions, logs, media cache, plugin state, auth profiles, and generated artifacts.
- State/config paths are resolved in `src/config/paths.ts`.
- Media files are stored/served from the media store with TTL and safe path checks in `src/media/store.ts` and `src/media/server.ts`.
- Mobile/desktop local storage uses Keychain/UserDefaults/Application Support on Apple platforms in `apps/shared/OpenClawKit/Sources/OpenClawKit/` and EncryptedSharedPreferences/SecurePrefs on Android in `apps/android/app/src/main/java/ai/openclaw/app/SecurePrefs.kt`.

**Caching:**

- In-process config, auth profile, model catalog, health, session, and plugin discovery caches are used across `src/config/io.ts`, `src/agents/auth-profiles/store.ts`, `src/gateway/server-model-catalog.ts`, and `src/gateway/server/health-state.ts`.
- Docker builds cache pnpm store and apt package lists through cache mounts in `Dockerfile`.
- No separate Redis/Memcached service detected.

## Authentication & Identity

**Auth Provider:**

- Custom gateway authentication.
  - Implementation: token/password/none/trusted-proxy modes are resolved by `src/gateway/server-runtime-config.ts`, enforced by `src/gateway/auth.ts`, `src/gateway/server-http.ts`, and WebSocket connection handlers.
  - Credentials: `OPENCLAW_GATEWAY_TOKEN`, `OPENCLAW_GATEWAY_PASSWORD`, config `gateway.auth`, and secret references under `src/secrets/`.
- Custom device/node pairing.
  - Implementation: device auth, token rotation, and scope checks live in `src/gateway/server-methods/devices.ts`, `src/gateway/server-methods/nodes.ts`, `src/shared/device-auth.ts`, and the `extensions/device-pair/` plugin.
  - Credentials: per-device tokens in config/runtime state and mobile app stores.
- Provider auth profiles.
  - Implementation: `auth.profiles` config in `src/config/types.auth.ts`; persistent `auth-profiles.json` store in `src/agents/auth-profiles/store.ts`; OAuth helpers in `src/agents/auth-profiles/oauth.ts`.
  - Credential modes: `api_key`, `oauth`, and `token`.
- External service OAuth/token flows.
  - Implementation examples: OpenAI Codex OAuth in `extensions/openai/openai-codex-provider.ts`, Google auth in `extensions/googlechat/src/auth.ts`, and channel/service setup surfaces under `extensions/*/setup*`.

## Monitoring & Observability

**Error Tracking:**

- No hosted SaaS error tracker such as Sentry detected.
- OpenTelemetry diagnostics plugin is bundled in `extensions/diagnostics-otel/`.
  - SDK/Client: `@opentelemetry/*` packages in `extensions/diagnostics-otel/package.json`.
  - Auth: none by default; endpoint configured with `OTEL_EXPORTER_OTLP_ENDPOINT`, `OTEL_EXPORTER_OTLP_PROTOCOL`, and `OTEL_SERVICE_NAME`.

**Logs:**

- Gateway and subsystem logging use `tslog` and custom subsystem loggers in `src/logging/` and `src/gateway/server.impl.ts`.
- Config audit logs are written as `config-audit.jsonl` by `src/config/io.ts`.
- Docker and gateway health expose `/healthz` through `src/gateway/server-http.ts` and `docker-compose.yml`.
- macOS unified log helpers are in `scripts/clawlog.sh`.

## CI/CD & Deployment

**Hosting:**

- Primary distribution is npm package `openclaw`, declared in `package.json`.
- Docker/Podman deployment uses `Dockerfile` and `docker-compose.yml`.
- macOS app, iOS app, and Android app builds are in `apps/macos/`, `apps/ios/`, and `apps/android/`.
- Public installers are referenced as external sibling-repo assets, not in this repo.

**CI Pipeline:**

- GitHub Actions workflows are present under `.github/workflows/`.
- Local and CI checks are exposed through `package.json` scripts: `pnpm check`, `pnpm build`, `pnpm test`, `pnpm release:check`, `pnpm test:docker:*`, and `pnpm test:parallels:*`.
- Pre-commit hooks are installed through the package `prepare` script and `git-hooks/`.

## Environment Configuration

**Required env vars:**

- Runtime/config: `OPENCLAW_CONFIG_PATH`, `OPENCLAW_STATE_DIR`, `OPENCLAW_HOME`, `OPENCLAW_GATEWAY_TOKEN`, `OPENCLAW_GATEWAY_PASSWORD`, `OPENCLAW_GATEWAY_URL`, `OPENCLAW_GATEWAY_PORT`, `OPENCLAW_BIND`, and `OPENCLAW_ALLOW_INSECURE_PRIVATE_WS`.
- Core LLM providers: `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `ANTHROPIC_OAUTH_TOKEN`, `GEMINI_API_KEY`, `GOOGLE_API_KEY`, `DEEPSEEK_API_KEY`, `OPENROUTER_API_KEY`, `ZAI_API_KEY`, `MISTRAL_API_KEY`, `MOONSHOT_API_KEY`, `MINIMAX_API_KEY`, and provider-specific keys from `extensions/*/openclaw.plugin.json`.
- Messaging channels: `TELEGRAM_BOT_TOKEN`, `DISCORD_BOT_TOKEN`, `SLACK_BOT_TOKEN`, `SLACK_APP_TOKEN`, `LINE_CHANNEL_ACCESS_TOKEN`, `LINE_CHANNEL_SECRET`, `MATRIX_*`, `MSTEAMS_*`, `FEISHU_*`, `NEXTCLOUD_TALK_BOT_SECRET`, `NOSTR_PRIVATE_KEY`, `MATTERMOST_BOT_TOKEN`, and related channel-specific keys.
- Observability and deployment: `OTEL_EXPORTER_OTLP_ENDPOINT`, `OTEL_EXPORTER_OTLP_PROTOCOL`, `OTEL_SERVICE_NAME`, Docker compose variables in `docker-compose.yml`, and app signing variables referenced in `apps/android/app/build.gradle.kts` and `apps/ios/project.yml`.

**Secrets location:**

- Main config: `openclaw.json` under the state directory resolved by `src/config/paths.ts`.
- Auth profiles: `auth-profiles.json` under the agent directory resolved by `src/agents/auth-profiles/paths.ts`.
- Browser/provider credentials: under the user OpenClaw state directory; Web provider credentials are documented as user-local state and not stored in the repo.
- Docker compose accepts secrets through environment substitution in `docker-compose.yml`; values must come from operator environment or env files, not committed literals.
- `.env.example` and `openclaw.podman.env` exist; contents were not inspected.

## Webhooks & Callbacks

**Incoming:**

- Gateway HTTP/WebSocket API.
  - Endpoints: `/healthz`, WebSocket gateway/control surfaces, RPC methods, Control UI, plugin HTTP handlers, hook endpoints, and media routes in `src/gateway/server-http.ts`, `src/gateway/server-ws-runtime.ts`, `src/gateway/server-methods.ts`, and `src/media/server.ts`.
  - Auth: gateway token/password/trusted proxy and per-hook bearer token checks.
- Hooks.
  - Endpoints: `/hooks/*` style wake/agent flows in `src/gateway/server-http.ts`.
  - Auth: Authorization bearer token or `X-OpenClaw-Token`; query-string hook tokens are rejected by `src/gateway/server-http.ts`.
- Telegram webhook.
  - Endpoint: default `/telegram-webhook` with `/healthz` in `extensions/telegram/src/webhook.ts`.
  - Auth: Telegram secret token configured as `channels.telegram.webhookSecret`.
- Nextcloud Talk webhook.
  - Endpoint: default `/nextcloud-talk-webhook` with `/healthz` in `extensions/nextcloud-talk/src/monitor.ts`.
  - Auth: HMAC/shared secret verification in `extensions/nextcloud-talk/src/signature.ts`.
- LINE webhook.
  - Endpoint: Express webhook handling in `extensions/line/src/webhook.ts` and `extensions/line/src/bot.ts`.
  - Auth: LINE channel secret signature validation.
- Microsoft Teams, Slack, and voice-call webhooks.
  - Endpoints: channel/plugin-specific Express or WebSocket handlers in `extensions/msteams/src/`, `extensions/slack/src/monitor/`, and `extensions/voice-call/src/`.
  - Auth: provider-specific app tokens, bot tokens, signing secrets, or telephony signature checks.
- Nostr profile HTTP plugin.
  - Endpoints: `GET /api/channels/nostr/:accountId/profile`, `PUT /api/channels/nostr/:accountId/profile`, and `POST /api/channels/nostr/:accountId/profile/import` in `extensions/nostr/src/nostr-profile-http.ts`.
  - Auth: gateway/plugin handler auth context.

**Outgoing:**

- Provider API calls to OpenAI, Anthropic, Google, Bedrock, OpenRouter, xAI, Mistral, Moonshot, MiniMax, Deepgram, Groq, Firecrawl, Tavily, Brave, Exa, and other providers through `src/agents/`, `src/media-understanding/`, and `extensions/*/`.
- Channel API calls to Telegram, Discord, Slack, LINE, Matrix homeservers, Google Chat, Teams, Feishu, Mattermost, Nextcloud Talk, Nostr relays, Tlon/S3, Twitch, WhatsApp, Zalo, and Synology Chat through `extensions/*/src/`.
- Mobile push and node communication through gateway node methods in `src/gateway/server-methods/nodes.ts`, `src/gateway/server-methods/push.ts`, and Apple/Android app code in `apps/`.
- Remote browsing/search/fetch requests use SSRF and proxy guard utilities in `src/infra/net/fetch-guard.ts`, `src/infra/net/ssrf.ts`, `src/infra/net/proxy-fetch.ts`, and provider-specific clients.
- Docker, release, and update workflows call npm/GitHub/container registries through scripts in `scripts/`, `scripts/e2e/`, and GitHub Actions under `.github/workflows/`.

---

_Integration audit: 2026-05-09_
