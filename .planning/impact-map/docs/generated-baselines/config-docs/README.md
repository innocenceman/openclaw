# Config Docs Baselines

Coverage: `verified`
Freshness: 2026-05-09 targeted generated-baseline checks and tests

## Scope

## Observed facts

- `scripts/generate-config-doc-baseline.ts` is wired through the root package scripts `config:docs:check` and `config:docs:gen`.
- `src/config/doc-baseline.ts` contains the baseline data model and the generated-by marker used by the checked-in artifact.

## Risk triggers

- Hand-editing generated artifacts instead of using the paired generator/check flow.
- Treating generated-output drift as isolated when the real source change sits in config, SDK, or extension metadata surfaces.

## Validation status

Wave 4 promoted this exact-priority leaf with repo-native inspection only. No generator/check commands were executed, so this is not `verified`.
