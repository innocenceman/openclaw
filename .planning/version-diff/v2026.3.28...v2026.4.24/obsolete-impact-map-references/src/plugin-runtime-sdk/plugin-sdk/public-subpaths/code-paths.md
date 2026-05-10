# Public Subpaths Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/plugin-sdk/index.ts`, `src/plugin-sdk/root-alias.cjs`, `src/plugin-sdk/subpaths.test.ts`, `src/plugin-sdk/runtime-api-guardrails.test.ts`
- Runtime handoff: Extension imports resolve through public SDK aliases/subpaths before any runtime helper is reached.
