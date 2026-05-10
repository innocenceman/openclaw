# Docs Support .generated Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Config-baseline path

1. Schema/help changes land in core config sources and helpers.
2. `scripts/generate-config-doc-baseline.ts` and `src/config/doc-baseline.ts` produce the checked-in `docs/.generated/config-baseline.json*` artifacts.
3. `pnpm config:docs:check` fails when the checked-in baseline drifts; approved changes use `pnpm config:docs:gen` to refresh it.

## Plugin SDK baseline path

1. Public Plugin SDK seam changes land in `src/plugin-sdk/**` and related export metadata.
2. `scripts/generate-plugin-sdk-api-baseline.ts` plus `src/plugin-sdk/api-baseline.ts` produce `docs/.generated/plugin-sdk-api-baseline.json*`.
3. `pnpm plugin-sdk:api:check` and export checks catch drift before release/package flows.

## Bundled metadata adjacency

1. Bundled plugin metadata is generated outside `docs/.generated`, but it shares the same checked-in baseline discipline.
2. `scripts/generate-bundled-plugin-metadata.mjs`, `scripts/copy-bundled-plugin-metadata.mjs`, and `src/plugins/bundled-plugin-metadata*.ts` are the adjacent path to trace when generated metadata rules drift.
3. `pnpm check:bundled-plugin-metadata` is the first validation before any broader build or release gate.
