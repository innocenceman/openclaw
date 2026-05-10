# Memory LanceDB Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                                              | First validation                                                                                                                                        | Escalation trigger                                                                           |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Memory runtime/config/hooks behavior changed             | `pnpm test -- extensions/memory-lancedb/index.test.ts`                                                                                                  | Add broader memory/plugin contract coverage when shared memory-slot behavior changes.        |
| Plugin-local runtime dependency/install behavior changed | `pnpm test -- extensions/memory-lancedb/index.test.ts src/plugins/bundled-runtime-deps.test.ts src/plugins/install-min-host-version-guardrails.test.ts` | Escalate to staging/build checks when runtime install ownership or package metadata changes. |
| Package/build or lazy runtime boundary changed           | `pnpm build`                                                                                                                                            | Inspect dynamic import warnings and runtime entry output if the loader/install seam changes. |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.
