# OpenRouter Provider Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                                         | First validation                                                                                                             | Escalation trigger                                                                                   |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Provider auth, catalog, or wrapper behavior changed | `pnpm test -- extensions/openrouter/index.test.ts`                                                                           | Add `pnpm test:contracts:plugins` if provider registration/catalog shape crosses package boundaries. |
| Auth-choice or model-list integration changed       | `pnpm test -- src/commands/models.list.auth-sync.test.ts src/commands/auth-choice.test.ts src/commands/model-picker.test.ts` | Escalate when auth profile sync or model-picker visibility changes.                                  |
| Package/build surface changed                       | `pnpm build`                                                                                                                 | Inspect dynamic import warnings and widen to package/release checks if published surfaces change.    |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.
