# Legacy Migration Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/config/legacy*.ts`, `src/commands/doctor-legacy-*.test.ts`
- Runtime handoff: Legacy migration runs before normal config/session loading and can rewrite startup assumptions.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `14` changed path(s) to this final leaf. `6` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 5, 'R': 6, 'A': 1, 'D': 2}`.

- `src/commands/doctor-legacy-config.migrations.test.ts`
- `src/commands/doctor-legacy-config.test.ts`
- `src/config/legacy-config-detection.test-support.ts`
- `src/config/legacy.rules.ts`
- `src/config/legacy.shared.ts`
- `src/config/legacy.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
