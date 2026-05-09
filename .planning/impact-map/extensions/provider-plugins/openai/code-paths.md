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
