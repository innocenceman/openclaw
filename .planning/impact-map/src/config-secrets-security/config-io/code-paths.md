# Config Io Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/config/io*.ts`, `src/config/config.ts`, `src/config/paths.ts`, `src/config/includes.ts`
- Runtime handoff: Config sources merge from files/includes/env/runtime overrides before downstream consumers resolve values.
