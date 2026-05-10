# Anthropic Provider Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                                   | First validation                                                                                                                                    | Escalation trigger                                                                          |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Manifest/auth metadata changed                | `pnpm test:contracts:plugins` and `pnpm test -- src/commands/onboard-non-interactive.provider-auth.test.ts src/commands/models/list.status.test.ts` | Add config/docs sync checks if auth choice labels, env vars, or user-facing copy change.    |
| Model aliasing or probe/list behavior changed | `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`                                               | Add broader model-list forward-compat tests when provider/model selection semantics change. |
| Media-understanding capability changed        | `pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts`                                              | Add targeted media tests if shared media defaults or provider selection behavior changes.   |
| Package/build surface changed                 | `pnpm build`                                                                                                                                        | Run package/release checks if published surfaces or runtime boundaries change.              |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.
