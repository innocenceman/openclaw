# LINE Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

No validation commands were run while creating this map.

| Change type                          | First validation                                                                                                                                                                                           | Add when impact crosses boundary                   |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Manifest/package/entry/channel/setup | `pnpm test:contracts:channels` plus `pnpm test -- extensions/line/src/setup-surface.test.ts extensions/line/src/accounts.test.ts` and targeted source inspection of `extensions/line/src/channel.setup.ts` | Build if exports/runtime change.                   |
| Accounts/tokens/config               | `pnpm test -- extensions/line/src/accounts.test.ts extensions/line/src/channel.logout.test.ts`                                                                                                             | Webhook/send tests if credential behavior changes. |
| Webhook/signature/lifecycle          | `pnpm test -- extensions/line/src/webhook-node.test.ts extensions/line/src/monitor.lifecycle.test.ts`                                                                                                      | Security review for signature/replay behavior.     |
| Bot handlers/access/context          | `pnpm test -- extensions/line/src/bot-handlers.test.ts extensions/line/src/bot-message-context.test.ts extensions/line/src/group-keys.test.ts`                                                             | Shared routing tests if session/policy changes.    |
| Delivery/send/download               | `pnpm test -- extensions/line/src/send.test.ts extensions/line/src/auto-reply-delivery.test.ts extensions/line/src/reply-chunks.test.ts extensions/line/src/download.test.ts`                              | Media/security review for downloads.               |
| Cards/flex/markdown/rich menu        | `pnpm test -- extensions/line/src/message-cards.test.ts extensions/line/src/markdown-to-line.test.ts extensions/line/src/rich-menu.test.ts`                                                                | UI payload review for user-visible changes.        |

## Known validation gaps

Source-inspection map only; no live LINE API validation.
