# Plugin SDK API Baselines Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Plugin SDK API baseline path

1. Public Plugin SDK seam changes land under `src/plugin-sdk/**`.
2. `src/plugin-sdk/api-baseline.ts` shapes the baseline, and `scripts/generate-plugin-sdk-api-baseline.ts` reads/writes the checked-in artifacts.
3. `pnpm plugin-sdk:api:check` fails on drift; approved refreshes use `pnpm plugin-sdk:api:gen`.
