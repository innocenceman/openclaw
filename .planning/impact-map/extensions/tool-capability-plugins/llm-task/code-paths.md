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
