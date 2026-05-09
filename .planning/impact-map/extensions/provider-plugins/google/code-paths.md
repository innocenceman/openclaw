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
