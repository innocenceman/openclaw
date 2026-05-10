# LLM Task Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## 1. Plugin registration path

```text
openclaw.plugin.json -> package.json -> index.ts
  -> registerTool(createLlmTaskTool(api), { optional: true })
```

Impact: Tool discovery and plugin config ownership.

## 2. Provider/model default path

```text
llm-task-tool.ts
  -> plugin config defaults
  -> agent defaults
  -> allowlist enforcement
```

Impact: Which provider/model/auth profile the embedded run may use.

## 3. Embedded-agent execution path

```text
llm-task-tool.ts
  -> build JSON-only prompt
  -> runEmbeddedPiAgent(disableTools=true)
  -> collect text payloads
```

Impact: Embedded-run orchestration and tool-disable safety.

## 4. JSON/schema validation path

```text
llm-task-tool.ts
  -> stripCodeFences
  -> JSON.parse
  -> Ajv schema validation
```

Impact: Structured-output correctness and failure modes returned to callers.

## Trace rule

Start with repo-native file inspection and the nearest local tests named in `change-to-test.md`. Use graph tools only after fresh bounded graph coverage is recorded for the exact slice.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `4` changed path(s) to this final leaf. `4` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 3, 'A': 1}`.

- `extensions/llm-task/package.json`
- `extensions/llm-task/src/llm-task-tool.test.ts`
- `extensions/llm-task/src/llm-task-tool.ts`
- `extensions/llm-task/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->
