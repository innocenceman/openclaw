# nextcloud-talk Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                           | First validation                                                                                                                     | Escalation trigger                                                                                                                            |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Manifest/package/entry changed        | `pnpm test:contracts:channels` plus `pnpm test -- extensions/nextcloud-talk/src/core.test.ts`                                        | `pnpm build` is required if package exports, install metadata, runtime deps, or lazy/loading boundaries change.                               |
| Setup/config/accounts changed         | `pnpm test -- extensions/nextcloud-talk/src/setup.test.ts extensions/nextcloud-talk/src/core.test.ts`                                | Add app/provider docs/settings checks if user-facing setup fields, docs links, or status text change.                                         |
| Signature/replay/webhook auth changed | `pnpm test -- extensions/nextcloud-talk/src/monitor.replay.test.ts extensions/nextcloud-talk/src/inbound.authz.test.ts`              | Escalate to gateway/security tests if webhook route/auth boundaries or replay windows change.                                                 |
| Inbound parse/behavior changed        | `pnpm test -- extensions/nextcloud-talk/src/inbound.behavior.test.ts extensions/nextcloud-talk/src/inbound.authz.test.ts`            | Add shared routing/command-gating tests if sender, room, mention, or pairing semantics change.                                                |
| Room policy/tool routing changed      | `pnpm test -- extensions/nextcloud-talk/src/inbound.authz.test.ts extensions/nextcloud-talk/src/core.test.ts`                        | Escalate to multi-channel policy tests when groupPolicy, groupAllowFrom, room tools, or requireMention behavior should align across channels. |
| Target/session normalization changed  | `pnpm test -- extensions/nextcloud-talk/src/core.test.ts extensions/nextcloud-talk/src/inbound.behavior.test.ts`                     | Add outbound/session route tests if manual send syntax or room token peer mapping changes.                                                    |
| Outbound send/reaction changed        | `pnpm test -- extensions/nextcloud-talk/src/core.test.ts` plus targeted source inspection of `extensions/nextcloud-talk/src/send.ts` | Add new colocated send tests before promoting if OCS request body, signatures, status mapping, or reaction endpoints change.                  |
| Runtime dependency/export changed     | `pnpm test -- test/scripts/stage-bundled-plugin-runtime-deps.test.ts` and targeted Nextcloud Talk tests                              | `pnpm build` is required if package exports or production runtime boundaries change.                                                          |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Promote beyond `deep-partial` only after recording dated command output for the affected paths.
