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
| Webhook auth/routing/body parsing                | `pnpm test -- extensions/bluebubbles/src/monitor.webhook-auth.test.ts extensions/bluebubbles/src/monitor.webhook-route.test.ts extensions/bluebubbles/src/monitor.test.ts`                                               | Security review if auth token/header/body-limit behavior changes.                            |
| Inbound normalization/debounce/self-chat         | `pnpm test -- extensions/bluebubbles/src/monitor-normalize.test.ts extensions/bluebubbles/src/monitor-self-chat-cache.test.ts extensions/bluebubbles/src/monitor.test.ts`                                                | Routing/command tests if context/session behavior changes.                                   |
| Inbound processing/access/pairing/reply pipeline | `pnpm test -- extensions/bluebubbles/src/monitor.test.ts`                                                                                                                                                                | Shared routing/command-gating tests when sender/session policy changes.                      |
| Outbound text/target/session route               | `pnpm test -- extensions/bluebubbles/src/send.test.ts extensions/bluebubbles/src/chat.test.ts`                                                                                                                           | Shared outbound contract tests if generic payload behavior changes.                          |
| Media send/local roots/remote fetch              | `pnpm test -- extensions/bluebubbles/src/media-send.test.ts extensions/bluebubbles/src/attachments.test.ts`                                                                                                              | Security review for local-root, SSRF/private-network, size cap, or multipart header changes. |
| Reactions/message actions/private API chat ops   | `pnpm test -- extensions/bluebubbles/src/actions.test.ts extensions/bluebubbles/src/reactions.test.ts extensions/bluebubbles/src/chat.test.ts`                                                                           | Private API probe/status tests when feature gating changes.                                  |

## Known validation gaps

- This map was not generated from graph indexes.
- It maps source paths to nearest existing tests; it does not prove full behavioral coverage.
- Live BlueBubbles server behavior is out of scope for this planning-only pass.
