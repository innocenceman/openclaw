# Public Subpaths Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope       | First validation                                                                                                                                            | Escalation trigger                                                              | Notes                    |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------ |
| `public-subpaths/` | pnpm test -- src/plugin-sdk/index.test.ts src/plugin-sdk/index.bundle.test.ts src/plugin-sdk/subpaths.test.ts src/plugin-sdk/runtime-api-guardrails.test.ts | Run pnpm plugin-sdk:api:check and pnpm build when exported SDK surfaces change. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
