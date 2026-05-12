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

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Promote beyond `deep-partial` only after recording dated command output for the affected paths.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `46` (新增 20，修改 23，删除 3).
- Target-existing path refs in active map: `43`; deleted/renamed-away refs kept only in transition artifacts: `3`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/nextcloud-talk/doctor-contract-api.ts`
- `extensions/nextcloud-talk/openclaw.plugin.json`
- `extensions/nextcloud-talk/package.json`
- `extensions/nextcloud-talk/runtime-api.ts`
- `extensions/nextcloud-talk/src/accounts.ts`
- `extensions/nextcloud-talk/src/channel-api.ts`
- `extensions/nextcloud-talk/src/channel.core.test.ts`
- `extensions/nextcloud-talk/src/channel.lifecycle.test.ts`
- `extensions/nextcloud-talk/src/channel.ts`
- `extensions/nextcloud-talk/src/config-schema.ts`
- `extensions/nextcloud-talk/src/core.test.ts`
- `extensions/nextcloud-talk/src/gateway.ts`
- `extensions/nextcloud-talk/src/monitor-runtime.ts`
- `extensions/nextcloud-talk/src/monitor.replay.test.ts`
- `extensions/nextcloud-talk/src/monitor.test-harness.ts`
- `extensions/nextcloud-talk/src/policy.ts`
- `extensions/nextcloud-talk/src/replay-guard.ts`
- `extensions/nextcloud-talk/src/secret-contract.ts`
- `extensions/nextcloud-talk/src/secret-input.ts`
- `extensions/nextcloud-talk/src/send.cfg-threading.test.ts`
- `extensions/nextcloud-talk/src/send.runtime.ts`
- `extensions/nextcloud-talk/src/session-route.ts`
- `extensions/nextcloud-talk/src/setup-core.ts`
- `extensions/nextcloud-talk/src/setup-surface.ts`
- `extensions/nextcloud-talk/src/signature.ts`
- `extensions/nextcloud-talk/src/types.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
