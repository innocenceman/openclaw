# OpenRouter Provider Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## 1. Plugin registration and auth path

```text
openclaw.plugin.json -> package.json -> index.ts
  -> createProviderApiKeyAuthMethod
  -> applyOpenrouterConfig
```

Impact: Auth choice metadata, config patching, and provider registration.

## 2. Catalog and dynamic model path

```text
index.ts
  -> catalog.run(buildOpenrouterProvider)
  -> buildDynamicOpenRouterModel
  -> loadOpenRouterModelCapabilities
```

Impact: Model metadata hydration, capability prefetch, and provider availability.

## 3. Stream wrapper and provider-routing path

```text
index.ts
  -> injectOpenRouterRouting
  -> createOpenRouterWrapper
  -> createOpenRouterSystemCacheWrapper
```

Impact: Reasoning injection, provider-routing overrides, and cache/system behavior.

## 4. Compatibility and cache-TTL path

```text
index.ts
  -> applyXaiModelCompat / isProxyReasoningUnsupported / isCacheTtlEligible
```

Impact: Provider-specific compatibility mapping and cache-eligibility decisions.

## Trace rule

Start with repo-native file inspection and the nearest local tests named in `change-to-test.md`. Use graph tools only after fresh bounded graph coverage is recorded for the exact slice.
