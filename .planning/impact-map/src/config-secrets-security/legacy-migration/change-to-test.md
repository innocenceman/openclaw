# Legacy Migration Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope        | First validation                                                                                                                                                               | Escalation trigger                                                                | Notes                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- | --------------------- |
| `legacy-migration/` | pnpm test -- src/config/legacy-migrate.test.ts src/config/legacy.shared.test.ts src/commands/doctor-legacy-config.test.ts src/commands/doctor-legacy-config.migrations.test.ts | Escalate to doctor/config CLI tests when migration notes or repair flows broaden. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
