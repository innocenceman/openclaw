# Tool Sdk Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope | First validation                                                                         | Escalation trigger                                                                         | Notes                 |
| ------------ | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------- |
| `tool-sdk/`  | pnpm test -- src/plugin-sdk/reply-payload.test.ts src/plugin-sdk/webhook-targets.test.ts | Run pnpm build if tool-facing SDK changes affect exported contracts or generated surfaces. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
