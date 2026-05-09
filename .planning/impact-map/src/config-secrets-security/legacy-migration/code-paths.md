# Legacy Migration Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/config/legacy*.ts`, `src/commands/doctor-legacy-*.test.ts`
- Runtime handoff: Legacy migration runs before normal config/session loading and can rewrite startup assumptions.
