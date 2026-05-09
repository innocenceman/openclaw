# Memory LanceDB Plugin File Roles

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                                                                 | Role                                                                                                                              | Impact notes                                                                               |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `extensions/memory-lancedb/openclaw.plugin.json`, `package.json`, `index.ts` | Manifest/package/entry contract for the memory backend slot, install metadata, and runtime registration.                          | Memory slot behavior, install surface, and lifecycle registration.                         |
| `extensions/memory-lancedb/index.ts`                                         | Main memory implementation: storage/search/delete, embeddings, prompt injection guards, tools, hooks, CLI, and service lifecycle. | Highest fan-out file for runtime memory behavior.                                          |
| `extensions/memory-lancedb/config.ts`                                        | Config parser, env expansion, default DB path logic, embedding model defaults, and UI hints.                                      | Misconfiguration or schema drift can break initialization before tool execution.           |
| `extensions/memory-lancedb/lancedb-runtime.ts`                               | Bundled-runtime import, cached runtime reuse, fallback installer, and runtime-dir/state-dir management.                           | Plugin-local runtime dependency ownership and fallback installation are concentrated here. |
| `extensions/memory-lancedb/api.ts`                                           | Local barrel for the narrowed plugin-SDK memory-lancedb surface.                                                                  | Boundary drift can affect allowed imports and external consumers.                          |
| `extensions/memory-lancedb/index.test.ts`                                    | Nearest local regression anchor for config parsing, runtime loading, hooks, and e2e-ish memory behavior.                          | First stop before widening to package/runtime dependency tests.                            |
