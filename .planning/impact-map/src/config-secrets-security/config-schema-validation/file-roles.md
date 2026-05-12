# Config Schema Validation File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                         | Responsibility                                                                         | First validation                                                                                                                                                          |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/config/schema*.ts`, `src/config/doc-baseline*.ts`, `src/config/zod*.ts` | Schema contracts, help/docs generation baselines, and fail-closed validation behavior. | pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts |
