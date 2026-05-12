# OpenAI Provider Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## 1. Plugin registration

```text
openclaw.plugin.json -> package.json -> index.ts
  -> registerProvider(openai)
  -> registerProvider(openai-codex)
  -> registerSpeechProvider / registerMediaUnderstandingProvider / registerImageGenerationProvider
```

Impact: Catalog, onboarding, package/install metadata, and multi-capability registration.

## 2. Direct OpenAI provider path

```text
openai-provider.ts
  -> createProviderApiKeyAuthMethod
  -> resolveDynamicModel / normalizeResolvedModel
  -> wrapStreamFn / suppressBuiltInModel / augmentModelCatalog
```

Impact: API-key auth flow, OpenAI Responses transport selection, modern-model handling, and default catalog behavior.

## 3. Codex OAuth path

```text
openai-codex-provider.ts
  -> loginOpenAICodexOAuth
  -> resolveCodexAuthIdentity
  -> openai-codex-provider.runtime.ts refresh
  -> buildOpenAICodexProvider()
```

Impact: OAuth login, identity/profile persistence, Codex-specific base URL, and model/runtime selection.

## 4. Speech, media, and image capability path

```text
speech-provider.ts / media-understanding-provider.ts / image-generation-provider.ts
  -> provider auth lookup or config
  -> external OpenAI API request
  -> decoded audio/image/media result
```

Impact: TTS, telephony, transcription, image description, and image generation behavior from the same plugin package.

## Trace rule

Start with repo-native file inspection and the nearest local tests named in `change-to-test.md`. Use graph tools only after fresh bounded graph coverage is recorded for the exact slice.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `60` changed path(s) to this final leaf. `59` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 25, 'A': 31, 'R': 3, 'D': 1}`.

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
- `... 另有 29 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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
- … plus 11 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
