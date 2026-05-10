# Plugin SDK API Baselines

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

## Observed facts

- `scripts/generate-plugin-sdk-api-baseline.ts` is wired through the root package scripts `plugin-sdk:api:check` and `plugin-sdk:api:gen`.
- `src/plugin-sdk/api-baseline.ts` contains the baseline model and default docs output paths.

## Risk triggers

- Hand-editing generated artifacts instead of using the paired generator/check flow.
- Treating generated-output drift as isolated when the real source change sits in config, SDK, or extension metadata surfaces.

## Validation status

Wave 4 promoted this exact-priority leaf with repo-native inspection only. No generator/check commands were executed, so this is not `verified`.
