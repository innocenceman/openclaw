# Secret Target Registry Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/secrets/target-registry*.ts`, `src/secrets/credential-matrix.ts`
- Runtime handoff: Secret refs resolve against known targets before runtime or command surfaces decide where secret values apply.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `7` changed path(s) to this final leaf. `7` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 4, 'A': 3}`.

- `src/secrets/credential-matrix.ts`
- `src/secrets/target-registry-data.ts`
- `src/secrets/target-registry-query.ts`
- `src/secrets/target-registry-test-helpers.ts`
- `src/secrets/target-registry.docs.test.ts`
- `src/secrets/target-registry.fast-path.test.ts`
- `src/secrets/target-registry.test.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/secrets/credential-matrix.ts`
- `src/secrets/target-registry-data.ts`
- `src/secrets/target-registry-query.ts`
- `src/secrets/target-registry.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
