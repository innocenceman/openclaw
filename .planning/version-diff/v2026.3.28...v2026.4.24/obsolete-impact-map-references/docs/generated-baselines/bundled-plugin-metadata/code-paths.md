# Bundled Plugin Metadata Baselines Code Paths

Coverage: `verified`
Freshness: 2026-05-08 repo-native inspection only

## Bundled plugin metadata path

1. Extension manifest/catalog changes land under `extensions/*`.
2. `scripts/generate-bundled-plugin-metadata.mjs` produces the generated metadata, and `scripts/copy-bundled-plugin-metadata.mjs` stages it for runtime/postbuild use.
3. `src/plugins/bundled-plugin-metadata.generated.ts` becomes the checked-in runtime artifact consumed by plugin discovery.
4. `pnpm check:bundled-plugin-metadata` is the first drift guard.
