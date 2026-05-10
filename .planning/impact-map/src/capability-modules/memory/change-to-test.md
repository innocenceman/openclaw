# Memory Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Change scope | First validation                                                                                                                                   | Escalation trigger                                                                                            | Notes                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `memory/`    | pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

## 2026-05-09 validation result

Result: `exceptioned-deep-partial`. Standard memory suite failed under the wrapper; no verified promotion.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.
