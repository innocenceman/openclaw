# Memory File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Representative paths | Responsibility                                                            | First validation                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/memory/**`      | Embedding, search, manager, QMD, and session-file memory storage/runtime. | pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts |
