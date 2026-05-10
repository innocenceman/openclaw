# Google Provider Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## 1. Plugin registration path

```text
openclaw.plugin.json -> package.json -> index.ts
  -> register google provider
  -> register google-gemini-cli provider
  -> register image/media/web-search providers
```

Impact: Provider catalog, auth choice UI, and capability registration.

## 2. API-key and model-default path

```text
index.ts
  -> createProviderApiKeyAuthMethod
  -> applyGoogleGeminiModelDefault / resolveGoogle31ForwardCompatModel
```

Impact: Direct Gemini API-key auth and forward-compat model handling.

## 3. Gemini CLI OAuth path

```text
gemini-cli-provider.ts + oauth.*
  -> credential extraction / browser flow / token persistence
  -> provider registration
```

Impact: CLI OAuth setup, token refresh/project mapping, and auth profile behavior.

## 4. Image, media, and web-search capability path

```text
image-generation-provider.ts / media-understanding-provider.ts / src/gemini-web-search-provider.ts
  -> provider auth
  -> Gemini API request
  -> decoded capability result
```

Impact: Image generation/editing, media analysis, and grounded search behavior from one plugin package.

## Trace rule

Start with repo-native file inspection and the nearest local tests named in `change-to-test.md`. Use graph tools only after fresh bounded graph coverage is recorded for the exact slice.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `69` changed path(s) to this final leaf. `66` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 39, 'M': 25, 'D': 3, 'R': 2}`.

- `extensions/google/api.test.ts`
- `extensions/google/api.ts`
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
- `... 另有 36 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
