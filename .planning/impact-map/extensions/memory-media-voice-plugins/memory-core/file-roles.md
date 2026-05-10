# Memory Core Plugin File Roles

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                                                              | Role                                                                                                  | Impact notes                                                                          |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `extensions/memory-core/openclaw.plugin.json`, `package.json`, `index.ts` | Manifest/package/entry contract for the default memory slot plugin.                                   | Memory slot defaults, install metadata, and runtime registration.                     |
| `extensions/memory-core/index.ts`                                         | Prompt guidance builder, `memory_search`/`memory_get` tool registration, and memory CLI registration. | Affects agent guidance, tool exposure, and CLI behavior from the default memory slot. |
| `extensions/memory-core/index.test.ts`                                    | Nearest local regression anchor for prompt guidance and registration behavior.                        | First stop before widening to slot/config/status tests.                               |
