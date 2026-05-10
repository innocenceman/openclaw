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
