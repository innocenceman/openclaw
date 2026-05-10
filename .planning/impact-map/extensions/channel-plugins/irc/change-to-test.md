# IRC Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

No validation commands were run while creating this map.

| Change type                    | First validation                                                                                                                                                            | Add when impact crosses boundary                   |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Manifest/package/entry/channel | `pnpm test:contracts:channels` plus `pnpm test -- extensions/irc/src/config-schema.test.ts`                                                                                 | Build if export/runtime boundary changes.          |
| Setup/account/connect options  | `pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`                                              | Probe/client tests if connection behavior changes. |
| Client/protocol/control chars  | `pnpm test -- extensions/irc/src/client.test.ts extensions/irc/src/protocol.test.ts extensions/irc/src/control-chars.test.ts`                                               | Security review for outbound sanitization changes. |
| Inbound/policy/normalize       | `pnpm test -- extensions/irc/src/inbound.behavior.test.ts extensions/irc/src/inbound.policy.test.ts extensions/irc/src/policy.test.ts extensions/irc/src/normalize.test.ts` | Shared routing tests if policy changes.            |
| Monitor/send/probe             | `pnpm test -- extensions/irc/src/monitor.test.ts extensions/irc/src/send.test.ts extensions/irc/src/probe.test.ts`                                                          | Live IRC smoke only when explicitly requested.     |

## Known validation gaps

Source-inspection map only; no live IRC network validation.
