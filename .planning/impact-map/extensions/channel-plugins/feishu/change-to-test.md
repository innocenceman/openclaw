# Feishu Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

No validation commands were run while creating this map.

| Change type                            | First validation                                                                                                                                                                                    | Add when impact crosses boundary                              |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Manifest/package/entry/tools           | `pnpm test:contracts:channels` plus `pnpm test -- extensions/feishu/src/channel.test.ts extensions/feishu/src/subagent-hooks.test.ts`                                                               | Runtime dependency staging/build when deps or exports change. |
| Setup/accounts/config/client           | `pnpm test -- extensions/feishu/src/accounts.test.ts extensions/feishu/src/setup-surface.test.ts extensions/feishu/src/config-schema.test.ts extensions/feishu/src/client.test.ts`                  | Probe/status tests for configured state changes.              |
| Monitor lifecycle/webhook/security     | `pnpm test -- extensions/feishu/src/monitor.startup.test.ts extensions/feishu/src/monitor.webhook-security.test.ts extensions/feishu/src/monitor.webhook-e2e.test.ts`                               | Security review for webhook signature/secret behavior.        |
| Bot inbound/mention/policy/dedup       | `pnpm test -- extensions/feishu/src/bot.test.ts extensions/feishu/src/bot.checkBotMentioned.test.ts extensions/feishu/src/policy.test.ts`                                                           | Routing/thread tests if session behavior changes.             |
| Card actions/streaming/tool results    | `pnpm test -- extensions/feishu/src/card-interaction.test.ts extensions/feishu/src/card-ux-launcher.test.ts extensions/feishu/src/streaming-card.test.ts extensions/feishu/src/tool-result.test.ts` | Approval/security review for callback semantics.              |
| Send/outbound/media/reactions          | `pnpm test -- extensions/feishu/src/send.test.ts extensions/feishu/src/outbound.test.ts extensions/feishu/src/media.test.ts extensions/feishu/src/reply-dispatcher.test.ts`                         | External API mock/live checks only when explicitly requested. |
| Doc/wiki/drive/perm/bitable/chat tools | `pnpm test -- extensions/feishu/src/docx.test.ts extensions/feishu/src/docx-batch-insert.test.ts extensions/feishu/src/chat.test.ts extensions/feishu/src/tool-account-routing.test.ts`             | Tool schema review when input schema changes.                 |
| Thread/session/account routing         | `pnpm test -- extensions/feishu/src/thread-bindings.test.ts extensions/feishu/src/send-target.test.ts extensions/feishu/src/external-keys.test.ts`                                                  | Shared conversation tests if binding semantics change.        |

## Known validation gaps

Source-inspection map only; inspect exact assertions before treating test anchors as complete coverage.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `82` (修改 52，新增 17，删除 1，重命名/移动 12).
- Target-existing path refs in active map: `75`; deleted/renamed-away refs kept only in transition artifacts: `7`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/feishu/api.ts`
- `extensions/feishu/openclaw.plugin.json`
- `extensions/feishu/package.json`
- `extensions/feishu/runtime-api.ts`
- `extensions/feishu/src/bot.broadcast.test.ts`
- `extensions/feishu/src/bot.card-action.test.ts`
- `extensions/feishu/src/bot.checkBotMentioned.test.ts`
- `extensions/feishu/src/bot.helpers.test.ts`
- `extensions/feishu/src/bot.test.ts`
- `extensions/feishu/src/bot.ts`
- `extensions/feishu/src/card-action.ts`
- `extensions/feishu/src/card-interaction.ts`
- `extensions/feishu/src/card-ux-launcher.test.ts`
- `extensions/feishu/src/card-ux-launcher.ts`
- `extensions/feishu/src/channel.test.ts`
- `extensions/feishu/src/channel.ts`
- `extensions/feishu/src/client.test.ts`
- `extensions/feishu/src/client.ts`
- `extensions/feishu/src/config-schema.ts`
- `extensions/feishu/src/docx-color-text.ts`
- `extensions/feishu/src/docx-table-ops.ts`
- `extensions/feishu/src/docx-types.ts`
- `extensions/feishu/src/docx.test.ts`
- `extensions/feishu/src/docx.ts`
- `extensions/feishu/src/monitor.account.ts`
- `extensions/feishu/src/monitor.acp-init-failure.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.bot-identity.ts`
- `extensions/feishu/src/monitor.bot-menu-handler.ts`
- `extensions/feishu/src/monitor.bot-menu.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.broadcast.reply-once.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.card-action.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.cleanup.test.ts`
- `extensions/feishu/src/monitor.comment.test.ts`
- `extensions/feishu/src/monitor.comment.ts`
- `extensions/feishu/src/monitor.message-handler.ts`
- `extensions/feishu/src/monitor.reaction.test.ts`
- `extensions/feishu/src/monitor.startup.test.ts`
- `extensions/feishu/src/monitor.startup.ts`
- `extensions/feishu/src/monitor.transport.ts`
- `extensions/feishu/src/monitor.webhook-security.test.ts`
- … plus 5 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
