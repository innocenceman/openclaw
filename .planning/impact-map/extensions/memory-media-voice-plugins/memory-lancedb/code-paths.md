# Memory LanceDB Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## 1. Plugin registration path

```text
openclaw.plugin.json -> package.json -> index.ts
  -> registerTool / registerCli / registerService
```

Impact: Memory backend registration and slot-level behavior.

## 2. Config and embeddings path

```text
config.ts
  -> env resolution / model defaults / dimensions
  -> index.ts embeddings client
```

Impact: Embedding auth/config correctness and prompt-safe config parsing.

## 3. Runtime loader path

```text
lancedb-runtime.ts
  -> bundled import or cached runtime entry
  -> fallback npm install under plugin-runtimes
```

Impact: Plugin-local runtime dependency resolution and state-dir side effects.

## 4. Recall/capture lifecycle path

```text
index.ts
  -> memory tools
  -> autoRecall hook
  -> autoCapture filter
  -> lifecycle service start/stop
```

Impact: Automatic memory injection/capture and runtime lifecycle behavior.

## Trace rule

Start with repo-native file inspection and the nearest local tests named in `change-to-test.md`. Use graph tools only after fresh bounded graph coverage is recorded for the exact slice.
