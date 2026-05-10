# Secret Storage Audit Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/secrets/apply.ts`, `src/secrets/audit.ts`, `src/secrets/configure*.ts`, `src/secrets/config-io.ts`, `src/secrets/path-utils.ts`, `src/secrets/storage-scan.ts`, `src/secrets/auth-store-paths.ts`, `src/secrets/auth-profiles-scan.ts`
- Runtime handoff: Configuration and audit flows read/write/scan local secret storage before runtime consumers resolve values.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `12` changed path(s) to this final leaf. `12` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 12}`.

- `src/secrets/apply.test.ts`
- `src/secrets/apply.ts`
- `src/secrets/audit.ts`
- `src/secrets/auth-profiles-scan.ts`
- `src/secrets/auth-store-paths.ts`
- `src/secrets/configure-plan.test.ts`
- `src/secrets/configure-plan.ts`
- `src/secrets/configure.test.ts`
- `src/secrets/configure.ts`
- `src/secrets/path-utils.test.ts`
- `src/secrets/path-utils.ts`
- `src/secrets/storage-scan.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
