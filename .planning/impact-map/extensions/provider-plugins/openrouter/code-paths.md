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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `21` changed path(s) to this final leaf. `19` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 9, 'A': 10, 'D': 2}`.

- `extensions/openrouter/api.ts`
- `extensions/openrouter/image-generation-provider.test.ts`
- `extensions/openrouter/image-generation-provider.ts`
- `extensions/openrouter/index.test.ts`
- `extensions/openrouter/index.ts`
- `extensions/openrouter/media-understanding-provider.ts`
- `extensions/openrouter/onboard.test.ts`
- `extensions/openrouter/openclaw.plugin.json`
- `extensions/openrouter/openrouter.live.test.ts`
- `extensions/openrouter/package.json`
- `extensions/openrouter/provider-catalog.ts`
- `extensions/openrouter/provider-contract-api.ts`
- `extensions/openrouter/provider-runtime.contract.test.ts`
- `extensions/openrouter/register.runtime.ts`
- `extensions/openrouter/speech-provider.test.ts`
- `extensions/openrouter/speech-provider.ts`
- `extensions/openrouter/stream.ts`
- `extensions/openrouter/test-api.ts`
- `extensions/openrouter/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->
