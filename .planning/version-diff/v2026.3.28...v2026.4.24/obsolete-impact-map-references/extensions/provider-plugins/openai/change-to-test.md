# OpenAI Provider Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                                   | First validation                                                                                                                              | Escalation trigger                                                                                                                                      |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Manifest/auth/provider registration changed   | `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts` | Add `pnpm test:contracts:plugins` if loader/catalog/auth-choice behavior crosses package boundaries.                                                    |
| Codex OAuth or auth-profile behavior changed  | `pnpm test -- extensions/openai/openai-codex-auth-identity.test.ts src/commands/models/auth.test.ts src/commands/openai-codex-oauth.test.ts`  | Add `src/commands/models/list.list-command.forward-compat.test.ts` when model listing/default selection changes.                                        |
| Speech/media/image capability changed         | `pnpm test -- extensions/openai/index.test.ts`                                                                                                | Add `pnpm test -- src/media-understanding/image.test.ts src/media-understanding/provider-registry.test.ts` when shared media registry behavior changes. |
| Package/build or lazy runtime surface changed | `pnpm build`                                                                                                                                  | Inspect dynamic import warnings and add package/release checks if published surfaces or runtime boundaries change.                                      |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.
