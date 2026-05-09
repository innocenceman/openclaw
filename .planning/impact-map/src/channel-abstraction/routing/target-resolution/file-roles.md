# Target Resolution File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                                       | Responsibility                                      | First validation                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/routing/resolve-route.ts`, `src/routing/account-id.ts`, `src/routing/account-lookup.ts`, `src/routing/session-key.ts` | Recipient/account/session/channel resolution logic. | pnpm test -- src/routing/resolve-route.test.ts src/routing/account-id.test.ts src/routing/account-lookup.test.ts src/routing/session-key.test.ts |
