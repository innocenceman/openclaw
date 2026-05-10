# Outbound Identity File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                                                                                                                   | Responsibility                                                                    | First validation                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/infra/outbound/identity.ts`, `src/infra/outbound/conversation-id.ts`, `src/infra/outbound/base-session-key.ts`, `src/infra/outbound/outbound-session.ts`, `src/infra/outbound/directory-cache.ts` | Identity, conversation-id, base session key, outbound session, and cache helpers. | pnpm test -- src/infra/outbound/identity.test.ts src/infra/outbound/conversation-id.test.ts src/infra/outbound/outbound-session.test.ts src/infra/outbound/directory-cache.test.ts |
