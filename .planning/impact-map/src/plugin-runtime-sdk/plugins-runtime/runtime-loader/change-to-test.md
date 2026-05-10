# Runtime Loader Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope      | First validation                                                                                                                    | Escalation trigger                                                      | Notes                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------ |
| `runtime-loader/` | pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
