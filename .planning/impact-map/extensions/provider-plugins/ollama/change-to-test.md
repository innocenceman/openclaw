# Ollama Provider Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                                          | First validation                                                                                          | Escalation trigger                                                                                              |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Auth/discovery/wizard behavior changed               | `pnpm test -- extensions/ollama/index.test.ts`                                                            | Add `pnpm test:contracts:plugins` if provider registration or wizard metadata changes across plugin boundaries. |
| Auth-choice or onboarding config integration changed | `pnpm test -- src/commands/auth-choice.apply.plugin-provider.test.ts src/commands/onboard-custom.test.ts` | Escalate when non-interactive auth setup or config patch semantics change.                                      |
| Package/build or lazy setup surface changed          | `pnpm build`                                                                                              | Inspect dynamic import warnings because Ollama uses a dedicated runtime setup seam.                             |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.
