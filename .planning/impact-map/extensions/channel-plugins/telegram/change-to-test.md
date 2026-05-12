# Telegram Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Baseline rule

Start with the closest `extensions/telegram/**` tests for the touched code path. Escalate to shared channel contract, packaging/build, security review, or live/mock gateway checks only when the change crosses plugin registration, shared channel contracts, public exports, credentials, transport, routing, or security-sensitive access/action surfaces.

No validation commands were run while creating this map.

## Change-to-test matrix

| Change type                                           | First validation                                                                                                                                                                                                                      | Add when impact crosses boundary                                                                  |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Setup/config schema/status surface                    | `pnpm test -- extensions/telegram/src/setup-surface.test.ts extensions/telegram/src/status.test.ts`                                                                                                                                   | Config docs/schema checks if user-facing config or docs links change.                             |
| Account/token resolution                              | `pnpm test -- extensions/telegram/src/accounts.test.ts extensions/telegram/src/token.test.ts extensions/telegram/src/account-inspect.test.ts`                                                                                         | Monitor/send/status tests if token source affects runtime behavior.                               |
| Network/proxy/API fetch/errors                        | `pnpm test -- extensions/telegram/src/fetch.test.ts extensions/telegram/src/api-fetch.test.ts extensions/telegram/src/network-config.test.ts extensions/telegram/src/network-errors.test.ts`                                          | Polling/webhook tests if transport lifecycle changes.                                             |
| Polling monitor/session/update offsets                | `pnpm test -- extensions/telegram/src/monitor.test.ts extensions/telegram/src/polling-session.test.ts extensions/telegram/src/update-offset-store.test.ts`                                                                            | Gateway smoke/mock test if restart/abort/conflict handling changes.                               |
| Webhook HTTP surface                                  | `pnpm test -- extensions/telegram/src/webhook.test.ts`                                                                                                                                                                                | Security review if body limits, secret validation, host/public URL, or TLS/cert behavior changes. |
| Bot creation/dedupe/allowed updates                   | `pnpm test -- extensions/telegram/src/bot.test.ts extensions/telegram/src/bot.create-telegram-bot.test.ts extensions/telegram/src/bot.fetch-abort.test.ts extensions/telegram/src/allowed-updates.test.ts`                            | Polling/session tests if update ordering or offsets change.                                       |
| Inbound handler buffering/media groups/text fragments | `pnpm test -- extensions/telegram/src/bot-message.test.ts extensions/telegram/src/bot-message-dispatch.test.ts extensions/telegram/src/bot.create-telegram-bot.channel-post-media.test.ts`                                            | Media e2e harness tests for media/sticker/fragment behavior.                                      |
| DM/group/topic access policy                          | `pnpm test -- extensions/telegram/src/dm-access.test.ts extensions/telegram/src/group-access.base-access.test.ts extensions/telegram/src/group-migration.test.ts`                                                                     | Shared routing/security tests if policy moves into SDK/shared helpers.                            |
| Inbound context/session/thread bindings               | `pnpm test -- extensions/telegram/src/bot-message-context.*.test.ts extensions/telegram/src/thread-bindings.test.ts extensions/telegram/src/conversation-route.base-session-key.test.ts`                                              | Shared conversation/runtime tests when session binding semantics change.                          |
| Dispatch and final reply path                         | `pnpm test -- extensions/telegram/src/bot-message-dispatch.test.ts extensions/telegram/src/bot/delivery.test.ts`                                                                                                                      | Add send tests for media/action delivery or parse/thread fallback changes.                        |
| Streaming/draft/reasoning lanes                       | `pnpm test -- extensions/telegram/src/draft-stream.test.ts extensions/telegram/src/lane-delivery.test.ts extensions/telegram/src/reasoning-lane-coordinator.test.ts`                                                                  | Manual mock gateway check if visible streaming UX semantics change.                               |
| Outbound adapter/payload bridge                       | `pnpm test -- extensions/telegram/src/outbound-adapter.test.ts`                                                                                                                                                                       | Send tests if payload conversion reaches Bot API calls.                                           |
| Send text/media/actions/polls/forum topics            | `pnpm test -- extensions/telegram/src/send.test.ts extensions/telegram/src/send.proxy.test.ts extensions/telegram/src/channel-actions.test.ts`                                                                                        | Media e2e/mock tests if files/stickers/voice/media understanding change.                          |
| Target parsing/outbound params                        | `pnpm test -- extensions/telegram/src/targets.test.ts extensions/telegram/src/outbound-adapter.test.ts`                                                                                                                               | Conversation/thread tests if target syntax affects routing/session keys.                          |
| Native commands/menu/model/skills                     | `pnpm test -- extensions/telegram/src/bot-native-commands.test.ts extensions/telegram/src/bot-native-commands.registry.test.ts extensions/telegram/src/bot-native-command-menu.test.ts extensions/telegram/src/model-buttons.test.ts` | Security review if command authorization/allowlist semantics change.                              |
| Formatting/caption/chunking                           | `pnpm test -- extensions/telegram/src/format.test.ts extensions/telegram/src/format.wrap-md.test.ts extensions/telegram/src/draft-stream.test.ts`                                                                                     | Send tests if parse fallback or message chunk limits change.                                      |
| Status reactions/reaction policy                      | `pnpm test -- extensions/telegram/src/reaction-level.test.ts extensions/telegram/src/bot-message-context.*.test.ts`                                                                                                                   | Dispatch tests if reaction lifecycle changes.                                                     |
| Sticker/media/voice understanding                     | `pnpm test -- extensions/telegram/src/sticker-cache.test.ts extensions/telegram/src/voice.test.ts extensions/telegram/src/bot-message-dispatch.sticker-media.test.ts`                                                                 | Media e2e harness if download/transcript/vision behavior changes.                                 |

## Suggested escalation ladder

1. Run the nearest one to three `extensions/telegram/**` tests for the touched file(s).
2. Add shared `src/channels/plugins/**` or routing/conversation tests when a change crosses the plugin boundary.
3. Add runtime dependency staging/build validation when package deps, exports, or lazy/import boundaries change.
4. Add security review for token handling, webhook secret/body, DM/group policy, exec approvals, or media access changes.
5. Use mock-first gateway checks before live Telegram Bot API tests.

## Known validation gaps

- This map was not generated from graph indexes.
- Test paths are nearest existing test anchors discovered by repo inspection; they are not proof of full behavioral coverage.
- Live Telegram behavior remains out of scope for this planning-only pass.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `458` (重命名/移动 19，新增 204，修改 205，删除 30).
- Target-existing path refs in active map: `419`; deleted/renamed-away refs kept only in transition artifacts: `39`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/telegram/api.ts`
- `extensions/telegram/config-api.ts`
- `extensions/telegram/doctor-contract-api.ts`
- `extensions/telegram/index.test.ts`
- `extensions/telegram/openclaw.plugin.json`
- `extensions/telegram/package.json`
- `extensions/telegram/runtime-api.ts`
- `extensions/telegram/src/account-config.ts`
- `extensions/telegram/src/account-inspect.test.ts`
- `extensions/telegram/src/account-inspect.ts`
- `extensions/telegram/src/account-selection.ts`
- `extensions/telegram/src/accounts.test.ts`
- `extensions/telegram/src/accounts.ts`
- `extensions/telegram/src/action-runtime.test.ts`
- `extensions/telegram/src/action-runtime.ts`
- `extensions/telegram/src/api-fetch.ts`
- `extensions/telegram/src/api-logging.ts`
- `extensions/telegram/src/api-root.test.ts`
- `extensions/telegram/src/api-root.ts`
- `extensions/telegram/src/approval-callback-data.ts`
- `extensions/telegram/src/approval-handler.runtime.ts`
- `extensions/telegram/src/approval-native.test.ts`
- `extensions/telegram/src/approval-native.ts`
- `extensions/telegram/src/audit.ts`
- `extensions/telegram/src/audit.types.ts`
- `extensions/telegram/src/auto-topic-label-config.ts`
- `extensions/telegram/src/auto-topic-label.ts`
- `extensions/telegram/src/bot-access.ts`
- `extensions/telegram/src/bot-core.ts`
- `extensions/telegram/src/bot-deps.ts`
- `extensions/telegram/src/bot-handlers.media.ts`
- `extensions/telegram/src/bot-handlers.runtime.ts`
- `extensions/telegram/src/bot-info.ts`
- `extensions/telegram/src/bot-message-context.acp-bindings.test.ts`
- `extensions/telegram/src/bot-message-context.audio-transcript.test-support.ts`
- `extensions/telegram/src/bot-message-context.body.test.ts`
- `extensions/telegram/src/bot-message-context.body.ts`
- `extensions/telegram/src/bot-message-context.dm-threads.test.ts`
- `extensions/telegram/src/bot-message-context.dm-topic-threadid.test.ts`
- `extensions/telegram/src/bot-message-context.named-account-dm.test-support.ts`
- … plus 283 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
