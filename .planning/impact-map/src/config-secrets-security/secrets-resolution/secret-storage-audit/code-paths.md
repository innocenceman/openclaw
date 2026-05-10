# Secret Storage Audit Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/secrets/apply.ts`, `src/secrets/audit.ts`, `src/secrets/configure*.ts`, `src/secrets/config-io.ts`, `src/secrets/path-utils.ts`, `src/secrets/storage-scan.ts`, `src/secrets/auth-store-paths.ts`, `src/secrets/auth-profiles-scan.ts`
- Runtime handoff: Configuration and audit flows read/write/scan local secret storage before runtime consumers resolve values.
