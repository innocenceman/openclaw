# Public Subpaths File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                                                           | Responsibility                                                               | First validation                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/plugin-sdk/index.ts`, `src/plugin-sdk/root-alias.cjs`, `src/plugin-sdk/subpaths.test.ts`, `src/plugin-sdk/runtime-api-guardrails.test.ts` | Public SDK subpath exports, root alias behavior, and runtime-API guardrails. | pnpm test -- src/plugin-sdk/index.test.ts src/plugin-sdk/index.bundle.test.ts src/plugin-sdk/subpaths.test.ts src/plugin-sdk/runtime-api-guardrails.test.ts |
