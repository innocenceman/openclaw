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
