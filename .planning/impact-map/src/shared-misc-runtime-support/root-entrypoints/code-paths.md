# Root Entrypoints Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

- Primary paths: `src/entry*.ts`, `src/index.ts`, `src/runtime.ts`, `src/library.ts`, `src/extensionAPI.ts`, `src/global-state.ts`, `src/globals.ts`, `src/version.ts`, `src/param-key.ts`, `src/polls.ts`
- Runtime handoff: Package entrypoints and runtime bootstrap files fan out into CLI, gateway, plugin SDK, and shared runtime modules.
