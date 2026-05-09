# Config Schema Validation Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/config/schema*.ts`, `src/config/doc-baseline*.ts`, `src/config/zod*.ts`
- Runtime handoff: Schema and docs baselines validate config structure before CLI/gateway/runtime consumers load it.
