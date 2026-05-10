# LLM Task Plugin File Roles

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                                                           | Role                                                                                                                          | Impact notes                                                                    |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `extensions/llm-task/openclaw.plugin.json`, `package.json`, `index.ts` | Manifest/package/entry contract for tool config defaults and optional tool registration.                                      | Tool discovery, plugin config, and package/install surface.                     |
| `extensions/llm-task/src/llm-task-tool.ts`                             | JSON-only tool implementation, embedded-agent run contract, schema validation, and thinking/provider/model override handling. | Primary behavioral file for structured subtask execution and safety guardrails. |
| `extensions/llm-task/api.ts`                                           | Local barrel for the narrowed plugin-SDK seam.                                                                                | Boundary drift can affect allowed imports or downstream consumers.              |
| `extensions/llm-task/src/llm-task-tool.test.ts`                        | Nearest local regression anchor for JSON parsing, schema validation, allowlists, and embedded-run options.                    | First stop before widening to boundary/build checks.                            |
