# Legacy Migration File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                            | Responsibility                                                                  | First validation                                                                                                                                                               |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/config/legacy*.ts`, `src/commands/doctor-legacy-*.test.ts` | Legacy config/service migration helpers and doctor-facing compatibility repair. | pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts |
