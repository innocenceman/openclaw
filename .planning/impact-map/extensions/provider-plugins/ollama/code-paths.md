# Ollama Provider Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## 1. Plugin registration path

```text
openclaw.plugin.json -> package.json -> index.ts
  -> registerProvider(ollama)
```

Impact: Provider discovery, docs path, and auth choice registration.

## 2. Local auth and setup path

```text
index.ts
  -> loadProviderSetup()
  -> promptAndConfigureOllama / configureOllamaNonInteractive
```

Impact: Interactive and non-interactive setup with config patching and auth-profile creation.

## 3. Discovery path

```text
index.ts
  -> explicit config check
  -> resolveProviderApiKey
  -> buildOllamaProvider()
```

Impact: Explicit provider config vs discovered local/remote Ollama instance behavior.

## 4. Model selection hook

```text
index.ts
  -> onModelSelected
  -> ensureOllamaModelPulled()
```

Impact: Model pull side effects after a user selects an Ollama model.

## Trace rule

Start with repo-native file inspection and the nearest local tests named in `change-to-test.md`. Use graph tools only after fresh bounded graph coverage is recorded for the exact slice.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `34` changed path(s) to this final leaf. `32` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 13, 'A': 17, 'D': 2, 'R': 2}`.

- `extensions/ollama/api.ts`
- `extensions/ollama/index.test.ts`
- `extensions/ollama/index.ts`
- `extensions/ollama/openclaw.plugin.json`
- `extensions/ollama/package.json`
- `extensions/ollama/plugin-registration.contract.test.ts`
- `extensions/ollama/provider-discovery.import-guard.test.ts`
- `extensions/ollama/provider-discovery.test.ts`
- `extensions/ollama/provider-discovery.ts`
- `extensions/ollama/provider-policy-api.test.ts`
- `extensions/ollama/provider-policy-api.ts`
- `extensions/ollama/runtime-api.ts`
- `extensions/ollama/src/defaults.ts`
- `extensions/ollama/src/discovery-shared.ts`
- `extensions/ollama/src/embedding-provider.test.ts`
- `extensions/ollama/src/embedding-provider.ts`
- `extensions/ollama/src/media-understanding-provider.ts`
- `extensions/ollama/src/memory-embedding-adapter.ts`
- `extensions/ollama/src/ollama-json.ts`
- `extensions/ollama/src/provider-models.ssrf.test.ts`
- `extensions/ollama/src/provider-models.test.ts`
- `extensions/ollama/src/provider-models.ts`
- `extensions/ollama/src/setup.test.ts`
- `extensions/ollama/src/setup.ts`
- `extensions/ollama/src/stream-runtime.test.ts`
- `extensions/ollama/src/stream.test.ts`
- `extensions/ollama/src/stream.ts`
- `extensions/ollama/src/web-search-provider.test.ts`
- `extensions/ollama/src/web-search-provider.ts`
- `extensions/ollama/tsconfig.json`
- `... 另有 2 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
