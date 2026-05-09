# Config Docs Baselines Code Paths

Coverage: `verified`
Freshness: 2026-05-08 repo-native inspection only

## Config baseline path

1. Config schema/help changes land in core config sources.
2. `src/config/doc-baseline.ts` shapes the baseline, and `scripts/generate-config-doc-baseline.ts` reads/writes the checked-in artifacts.
3. `pnpm config:docs:check` fails on drift; approved refreshes use `pnpm config:docs:gen`.
