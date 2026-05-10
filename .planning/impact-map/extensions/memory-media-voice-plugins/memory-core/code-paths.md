# Memory Core Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## 1. Slot and plugin registration path

```text
openclaw.plugin.json -> package.json -> index.ts
  -> registerMemoryPromptSection / registerTool / registerCli
```

Impact: Memory slot ownership and runtime registration.

## 2. Prompt guidance path

```text
index.ts
  -> buildPromptSection(availableTools, citationsMode)
```

Impact: Whether agents are instructed to use memory search/get and how citations are phrased.

## 3. Tool and CLI path

```text
index.ts
  -> createMemorySearchTool / createMemoryGetTool
  -> registerMemoryCli(program)
```

Impact: Tool availability and CLI registration for file-backed memory.

## Trace rule

Start with repo-native file inspection and the nearest local tests named in `change-to-test.md`. Use graph tools only after fresh bounded graph coverage is recorded for the exact slice.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `121` changed path(s) to this final leaf. `116` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 45, 'A': 70, 'R': 1, 'D': 5}`.

- `extensions/memory-core/api.ts`
- `extensions/memory-core/cli-metadata.ts`
- `extensions/memory-core/index.test.ts`
- `extensions/memory-core/index.ts`
- `extensions/memory-core/manager-runtime.ts`
- `extensions/memory-core/openclaw.plugin.json`
- `extensions/memory-core/package.json`
- `extensions/memory-core/runtime-api.ts`
- `extensions/memory-core/src/cli.host.runtime.ts`
- `extensions/memory-core/src/cli.runtime.ts`
- `extensions/memory-core/src/cli.test.ts`
- `extensions/memory-core/src/cli.ts`
- `extensions/memory-core/src/cli.types.ts`
- `extensions/memory-core/src/concept-vocabulary.test.ts`
- `extensions/memory-core/src/concept-vocabulary.ts`
- `extensions/memory-core/src/config.test.ts`
- `extensions/memory-core/src/dreaming-command.test.ts`
- `extensions/memory-core/src/dreaming-command.ts`
- `extensions/memory-core/src/dreaming-markdown.test.ts`
- `extensions/memory-core/src/dreaming-markdown.ts`
- `extensions/memory-core/src/dreaming-narrative.test.ts`
- `extensions/memory-core/src/dreaming-narrative.ts`
- `extensions/memory-core/src/dreaming-phases.test.ts`
- `extensions/memory-core/src/dreaming-phases.ts`
- `extensions/memory-core/src/dreaming-repair.test.ts`
- `extensions/memory-core/src/dreaming-repair.ts`
- `extensions/memory-core/src/dreaming-shared.test.ts`
- `extensions/memory-core/src/dreaming-shared.ts`
- `extensions/memory-core/src/dreaming.test.ts`
- `extensions/memory-core/src/dreaming.ts`
- `... 另有 86 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
