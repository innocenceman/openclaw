# Bundled Plugin Metadata Baselines

Coverage: `verified`
Freshness: 2026-05-09 targeted generated-baseline checks and tests

## Scope

Leaf module for the bundled plugin metadata generation/check path and its checked-in runtime artifact under `src/plugins/`.

## Observed facts

- `scripts/generate-bundled-plugin-metadata.mjs` is wired through the root package script `check:bundled-plugin-metadata`.
- `scripts/copy-bundled-plugin-metadata.mjs` participates in runtime postbuild handling for bundled metadata.
- `src/plugins/bundled-plugin-metadata.generated.ts` is the checked-in generated runtime artifact, with adjacent tests in `src/plugins/bundled-plugin-metadata.test.ts` and `src/plugins/copy-bundled-plugin-metadata.test.ts`.

## Risk triggers

- Hand-editing generated artifacts instead of using the paired generator/check flow.
- Treating generated-output drift as isolated when the real source change sits in config, SDK, or extension metadata surfaces.

## Validation status

Wave 4 promoted this exact-priority leaf with repo-native inspection only. No generator/check commands were executed, so this is not `verified`.
