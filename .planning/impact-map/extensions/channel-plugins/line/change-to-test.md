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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `69` (修改 50，新增 15，删除 3，重命名/移动 1).
- Target-existing path refs in active map: `66`; deleted/renamed-away refs kept only in transition artifacts: `3`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
