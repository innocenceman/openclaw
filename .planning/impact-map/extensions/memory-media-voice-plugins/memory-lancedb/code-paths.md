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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `13` changed path(s) to this final leaf. `12` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 6, 'M': 6, 'D': 1}`.

- `extensions/memory-lancedb/cli-metadata.ts`
- `extensions/memory-lancedb/config.test.ts`
- `extensions/memory-lancedb/config.ts`
- `extensions/memory-lancedb/index.test.ts`
- `extensions/memory-lancedb/index.ts`
- `extensions/memory-lancedb/lancedb-runtime.ts`
- `extensions/memory-lancedb/memory-lancedb.live.test.ts`
- `extensions/memory-lancedb/openclaw.plugin.json`
- `extensions/memory-lancedb/package.json`
- `extensions/memory-lancedb/test-helpers.ts`
- `extensions/memory-lancedb/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/memory-lancedb/api.ts`
- `extensions/memory-lancedb/config.test.ts`
- `extensions/memory-lancedb/config.ts`
- `extensions/memory-lancedb/index.test.ts`
- `extensions/memory-lancedb/index.ts`
- `extensions/memory-lancedb/lancedb-runtime.ts`
- `extensions/memory-lancedb/openclaw.plugin.json`
- `extensions/memory-lancedb/package.json`

Deleted or renamed-away paths omitted from this active leaf: `1`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
