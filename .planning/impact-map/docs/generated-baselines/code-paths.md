# Generated Baselines Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Config docs baseline path

1. Config schema/help changes land in the core config sources.
2. `pnpm config:docs:check` is the first guard, and approved refreshes use `pnpm config:docs:gen`.

## Plugin SDK API baseline path

1. Public Plugin SDK export or API changes land in `src/plugin-sdk/**`.
2. `pnpm plugin-sdk:api:check` and export checks catch drift before release/package flows.

## Bundled plugin metadata adjacency

1. Extension manifest/catalog changes land under `extensions/*` and runtime/plugin surfaces.
2. `pnpm check:bundled-plugin-metadata` is the first validation before broader build or release gates.

## Trace rule

A baseline file change is never the start of the story. Trace backward to the source schema/export/manifest change, then forward to the paired generator/check flow.
