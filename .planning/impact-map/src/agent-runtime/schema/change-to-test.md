# Schema Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

| Change scope | First validation                                                                                | Escalation trigger                                                                               | Notes                 |
| ------------ | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------- |
| `schema/`    | pnpm test -- src/agents/schema/clean-for-gemini.test.ts src/agents/schema/clean-for-xai.test.ts | Run pnpm build when schema changes affect published tool surfaces or generated runtime behavior. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
