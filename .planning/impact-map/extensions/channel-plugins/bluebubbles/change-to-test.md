# BlueBubbles Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Baseline rule

Start with the nearest `extensions/bluebubbles/**` tests for the changed path. Escalate when the change crosses webhook auth, sender authorization, media/local file access, plugin registration, install metadata, or shared channel contracts.

No validation commands were run while creating this map.

| Change type                                      | First validation                                                                                                                                                                                                         | Add when impact crosses boundary                                                             |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| Manifest/package/entry/runtime barrels           | `pnpm test:contracts:channels` plus `pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts` and targeted source inspection of `extensions/bluebubbles/src/channel.ts` | Runtime dependency staging/build if package deps or public exports change.                   |
| Channel composition/status/setup                 | `pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`                                                                                                               | Shared channel setup/status tests when generic contract changes.                             |
| Account/credential/config resolution             | `pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`                                                                                                                  | Probe/status tests if private API status/configured state changes.                           |
| Inbound normalization/debounce/self-chat         | `pnpm test -- extensions/bluebubbles/src/monitor-normalize.test.ts extensions/bluebubbles/src/monitor-self-chat-cache.test.ts extensions/bluebubbles/src/monitor.test.ts`                                                | Routing/command tests if context/session behavior changes.                                   |
| Inbound processing/access/pairing/reply pipeline | `pnpm test -- extensions/bluebubbles/src/monitor.test.ts`                                                                                                                                                                | Shared routing/command-gating tests when sender/session policy changes.                      |
| Outbound text/target/session route               | `pnpm test -- extensions/bluebubbles/src/send.test.ts extensions/bluebubbles/src/chat.test.ts`                                                                                                                           | Shared outbound contract tests if generic payload behavior changes.                          |
| Media send/local roots/remote fetch              | `pnpm test -- extensions/bluebubbles/src/media-send.test.ts extensions/bluebubbles/src/attachments.test.ts`                                                                                                              | Security review for local-root, SSRF/private-network, size cap, or multipart header changes. |
| Reactions/message actions/private API chat ops   | `pnpm test -- extensions/bluebubbles/src/actions.test.ts extensions/bluebubbles/src/reactions.test.ts extensions/bluebubbles/src/chat.test.ts`                                                                           | Private API probe/status tests when feature gating changes.                                  |

## Known validation gaps

- This map was not generated from graph indexes.
- It maps source paths to nearest existing tests; it does not prove full behavioral coverage.
- Live BlueBubbles server behavior is out of scope for this planning-only pass.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `88` (修改 56，新增 25，删除 5，重命名/移动 2).
- Target-existing path refs in active map: `83`; deleted/renamed-away refs kept only in transition artifacts: `5`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/bluebubbles/api.ts`
- `extensions/bluebubbles/doctor-contract-api.ts`
- `extensions/bluebubbles/openclaw.plugin.json`
- `extensions/bluebubbles/package.json`
- `extensions/bluebubbles/src/account-resolve.ts`
- `extensions/bluebubbles/src/accounts.ts`
- `extensions/bluebubbles/src/actions.test.ts`
- `extensions/bluebubbles/src/actions.ts`
- `extensions/bluebubbles/src/attachments.test.ts`
- `extensions/bluebubbles/src/attachments.ts`
- `extensions/bluebubbles/src/channel-shared.ts`
- `extensions/bluebubbles/src/channel.status.test.ts`
- `extensions/bluebubbles/src/channel.ts`
- `extensions/bluebubbles/src/client.ts`
- `extensions/bluebubbles/src/config-apply.ts`
- `extensions/bluebubbles/src/config-schema.ts`
- `extensions/bluebubbles/src/conversation-bindings.test.ts`
- `extensions/bluebubbles/src/conversation-bindings.ts`
- `extensions/bluebubbles/src/conversation-route.test.ts`
- `extensions/bluebubbles/src/conversation-route.ts`
- `extensions/bluebubbles/src/group-policy.ts`
- `extensions/bluebubbles/src/history.ts`
- `extensions/bluebubbles/src/inbound-dedupe.ts`
- `extensions/bluebubbles/src/media-send.test.ts`
- `extensions/bluebubbles/src/media-send.ts`
- `extensions/bluebubbles/src/monitor-debounce.ts`
- `extensions/bluebubbles/src/monitor-normalize.test.ts`
- `extensions/bluebubbles/src/monitor-normalize.ts`
- `extensions/bluebubbles/src/monitor-processing-api.ts`
- `extensions/bluebubbles/src/monitor-processing-chat-resolve.test.ts`
- `extensions/bluebubbles/src/monitor-processing.ts`
- `extensions/bluebubbles/src/monitor-reply-cache.test.ts`
- `extensions/bluebubbles/src/monitor-reply-cache.ts`
- `extensions/bluebubbles/src/monitor-reply-fetch.test.ts`
- `extensions/bluebubbles/src/monitor-reply-fetch.ts`
- `extensions/bluebubbles/src/monitor-shared.ts`
- `extensions/bluebubbles/src/monitor.test.ts`
- `extensions/bluebubbles/src/monitor.ts`
- `extensions/bluebubbles/src/monitor.webhook-auth.test.ts`
- `extensions/bluebubbles/src/monitor.webhook.test-helpers.ts`
- … plus 13 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
