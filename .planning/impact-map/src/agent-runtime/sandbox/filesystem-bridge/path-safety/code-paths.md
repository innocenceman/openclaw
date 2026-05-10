# Path Safety Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

- Primary paths: `src/agents/sandbox/fs-paths.ts`, `src/agents/sandbox/host-paths.ts`, `src/agents/sandbox/fs-bridge-path-safety.ts`, `src/agents/sandbox/fs-bridge-rename-targets.ts`, `src/agents/sandbox/fs-bridge-mutation-helper.ts`
- Runtime handoff: filesystem bridge validation protects sandbox-mounted paths before file reads, writes, shell execution, or mutation operations proceed.
