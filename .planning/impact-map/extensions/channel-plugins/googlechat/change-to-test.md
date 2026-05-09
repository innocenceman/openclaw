# Google Chat Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

No validation commands were run while creating this map.

| Change type                    | First validation                                                                                                                             | Add when impact crosses boundary                             |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Manifest/package/entry/channel | `pnpm test:contracts:channels` plus `pnpm test -- extensions/googlechat/src/channel.test.ts`                                                 | Build/staging if deps or exports change.                     |
| Setup/accounts/credentials     | `pnpm test -- extensions/googlechat/src/setup.test.ts`                                                                                       | Auth/monitor tests if credential source affects webhook/API. |
| Auth/request verification      | `pnpm test -- extensions/googlechat/src/monitor-webhook.test.ts extensions/googlechat/src/monitor.webhook-routing.test.ts`                   | Security review for JWT/audience/cert behavior.              |
| Inbound access/pairing/mention | `pnpm test -- extensions/googlechat/src/monitor-access.test.ts`                                                                              | Shared routing/command tests if policy changes.              |
| Outbound/API/actions/targets   | `pnpm test -- extensions/googlechat/src/actions.test.ts extensions/googlechat/src/targets.test.ts extensions/googlechat/src/channel.test.ts` | Media/security review for upload/download behavior.          |

## Known validation gaps

Source-inspection map only; no live Google Chat API validation.
