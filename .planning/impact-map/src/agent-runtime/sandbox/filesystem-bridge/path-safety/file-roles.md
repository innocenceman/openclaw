# Path Safety File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

| Representative paths                                                                                                                                                                                                     | Responsibility                                                                       | First validation                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ----------------------------------------- |
| `src/agents/sandbox/fs-paths.ts`, `src/agents/sandbox/host-paths.ts`, `src/agents/sandbox/fs-bridge-path-safety.ts`, `src/agents/sandbox/fs-bridge-rename-targets.ts`, `src/agents/sandbox/fs-bridge-mutation-helper.ts` | Host paths, fs paths, anchored operations, mutation helpers, and rename/path safety. | fs/path/anchored operation targeted tests |
