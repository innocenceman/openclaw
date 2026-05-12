# Secret Ref Contracts Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/config/types.secrets.ts`, `src/config/zod-schema.secret-input-validation.ts`, `src/secrets/ref-contract.ts`, `src/secrets/resolve-secret-input-string.ts`, `src/secrets/json-pointer.ts`, `src/secrets/secret-value.ts`, `src/secrets/shared.ts`, `src/secrets/runtime-shared.ts`
- Runtime handoff: Config and CLI inputs normalize into secret refs before target registry, runtime collection, or gateway resolution consumes them.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `7` changed path(s) to this final leaf. `7` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 1, 'M': 6}`.

- `src/config/types.secrets.resolution.test.ts`
- `src/config/types.secrets.ts`
- `src/config/zod-schema.secret-input-validation.ts`
- `src/secrets/json-pointer.ts`
- `src/secrets/resolve-secret-input-string.ts`
- `src/secrets/runtime-shared.ts`
- `src/secrets/shared.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/secrets/json-pointer.ts`
- `src/secrets/ref-contract.test.ts`
- `src/secrets/ref-contract.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
