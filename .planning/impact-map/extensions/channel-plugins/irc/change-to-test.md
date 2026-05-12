# IRC Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

No validation commands were run while creating this map.

| Change type                    | First validation                                                                                                                                                            | Add when impact crosses boundary                   |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Manifest/package/entry/channel | `pnpm test:contracts:channels` plus `pnpm test -- extensions/irc/src/config-schema.test.ts`                                                                                 | Build if export/runtime boundary changes.          |
| Setup/account/connect options  | `pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`                                              | Probe/client tests if connection behavior changes. |
| Client/protocol/control chars  | `pnpm test -- extensions/irc/src/client.test.ts extensions/irc/src/protocol.test.ts extensions/irc/src/control-chars.test.ts`                                               | Security review for outbound sanitization changes. |
| Inbound/policy/normalize       | `pnpm test -- extensions/irc/src/inbound.behavior.test.ts extensions/irc/src/inbound.policy.test.ts extensions/irc/src/policy.test.ts extensions/irc/src/normalize.test.ts` | Shared routing tests if policy changes.            |
| Monitor/send/probe             | `pnpm test -- extensions/irc/src/monitor.test.ts extensions/irc/src/send.test.ts extensions/irc/src/probe.test.ts`                                                          | Live IRC smoke only when explicitly requested.     |

## Known validation gaps

Source-inspection map only; no live IRC network validation.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `41` (修改 25，新增 14，删除 2).
- Target-existing path refs in active map: `39`; deleted/renamed-away refs kept only in transition artifacts: `2`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/irc/api.ts`
- `extensions/irc/index.test.ts`
- `extensions/irc/openclaw.plugin.json`
- `extensions/irc/package.json`
- `extensions/irc/runtime-api.test.ts`
- `extensions/irc/src/channel.ts`
- `extensions/irc/src/client.ts`
- `extensions/irc/src/config-schema.ts`
- `extensions/irc/src/inbound.ts`
- `extensions/irc/src/monitor.ts`
- `extensions/irc/src/normalize.ts`
- `extensions/irc/src/policy.test.ts`
- `extensions/irc/src/policy.ts`
- `extensions/irc/src/protocol.ts`
- `extensions/irc/src/runtime-api.ts`
- `extensions/irc/src/secret-contract.ts`
- `extensions/irc/src/send.test.ts`
- `extensions/irc/src/send.ts`
- `extensions/irc/src/setup-core.ts`
- `extensions/irc/src/setup.test.ts`
- `extensions/irc/src/types.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
