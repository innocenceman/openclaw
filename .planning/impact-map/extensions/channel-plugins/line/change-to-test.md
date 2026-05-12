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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/line/index.ts`
- `extensions/line/openclaw.plugin.json`
- `extensions/line/package.json`
- `extensions/line/runtime-api.ts`
- `extensions/line/src/accounts.test.ts`
- `extensions/line/src/auto-reply-delivery.test.ts`
- `extensions/line/src/auto-reply-delivery.ts`
- `extensions/line/src/bot-handlers.test.ts`
- `extensions/line/src/bot-handlers.ts`
- `extensions/line/src/bot-message-context.test.ts`
- `extensions/line/src/bot-message-context.ts`
- `extensions/line/src/bot.ts`
- `extensions/line/src/channel-api.ts`
- `extensions/line/src/channel-setup-status.contract.test.ts`
- `extensions/line/src/channel-shared.ts`
- `extensions/line/src/channel.logout.test.ts`
- `extensions/line/src/channel.sendPayload.test.ts`
- `extensions/line/src/channel.ts`
- `extensions/line/src/config-adapter.ts`
- `extensions/line/src/config-schema.ts`
- `extensions/line/src/download.test.ts`
- `extensions/line/src/download.ts`
- `extensions/line/src/flex-templates.ts`
- `extensions/line/src/gateway.ts`
- `extensions/line/src/monitor.lifecycle.test.ts`
- `extensions/line/src/monitor.ts`
- `extensions/line/src/outbound-media.ts`
- `extensions/line/src/outbound.ts`
- `extensions/line/src/quick-reply-fallback.ts`
- `extensions/line/src/reply-chunks.ts`
- `extensions/line/src/rich-menu.test.ts`
- `extensions/line/src/rich-menu.ts`
- `extensions/line/src/runtime.ts`
- `extensions/line/src/send.test.ts`
- `extensions/line/src/send.ts`
- `extensions/line/src/setup-surface.test.ts`
- `extensions/line/src/setup-surface.ts`
- `extensions/line/src/template-messages.ts`
- `extensions/line/src/types.ts`
- `extensions/line/src/webhook-node.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
