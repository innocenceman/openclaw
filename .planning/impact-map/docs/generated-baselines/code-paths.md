# Generated Baselines Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Config docs baseline path

1. Config schema/help changes land in the core config sources.
2. `scripts/generate-config-doc-baseline.ts` plus `src/config/doc-baseline.ts` produce `docs/.generated/config-baseline.json*`.
3. `pnpm config:docs:check` is the first guard, and approved refreshes use `pnpm config:docs:gen`.

## Plugin SDK API baseline path

1. Public Plugin SDK export or API changes land in `src/plugin-sdk/**`.
2. `scripts/generate-plugin-sdk-api-baseline.ts` plus `src/plugin-sdk/api-baseline.ts` produce `docs/.generated/plugin-sdk-api-baseline.json*`.
3. `pnpm plugin-sdk:api:check` and export checks catch drift before release/package flows.

## Bundled plugin metadata adjacency

1. Extension manifest/catalog changes land under `extensions/*` and runtime/plugin surfaces.
2. `scripts/generate-bundled-plugin-metadata.mjs` and `scripts/copy-bundled-plugin-metadata.mjs` maintain the checked-in bundled metadata artifact in `src/plugins/`.
3. `pnpm check:bundled-plugin-metadata` is the first validation before broader build or release gates.

## Trace rule

A baseline file change is never the start of the story. Trace backward to the source schema/export/manifest change, then forward to the paired generator/check flow.
