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
