# nostr Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                                      | First validation                                                                                                                                                 | Escalation trigger                                                                                                     |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Manifest/package/route entry changed             | `pnpm test:contracts:channels` plus `pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts`                          | `pnpm build` is required if package exports, runtime deps, HTTP route registration, or lazy-loading boundaries change. |
| Setup/config/private key/relays changed          | `pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/channel.outbound.test.ts`                                                                | Add docs/UI settings checks if user-facing setup fields, docs links, or profile schema fields change.                  |
| Bus encryption/relay event handling changed      | `pnpm test -- extensions/nostr/src/nostr-bus.test.ts extensions/nostr/src/nostr-bus.inbound.test.ts extensions/nostr/src/nostr-bus.integration.test.ts`          | Add fuzz tests if event shape, crypto, rejection, duplicate, or circuit-breaker behavior changes.                      |
| Inbound access/pairing changed                   | `pnpm test -- extensions/nostr/src/channel.inbound.test.ts extensions/nostr/src/nostr-bus.inbound.test.ts`                                                       | Escalate to shared DM policy/pairing tests if allowlist/open/pairing behavior should align across channels.            |
| Outbound send/session changed                    | `pnpm test -- extensions/nostr/src/channel.outbound.test.ts extensions/nostr/src/nostr-bus.test.ts`                                                              | Add session route tests if target normalization or peer mapping changes.                                               |
| Metrics/seen/state changed                       | `pnpm test -- extensions/nostr/src/nostr-bus.integration.test.ts extensions/nostr/src/nostr-state-store.test.ts`                                                 | Escalate to status tests if health summaries or last-error reporting change.                                           |
| Profile publish/schema changed                   | `pnpm test -- extensions/nostr/src/nostr-profile.test.ts extensions/nostr/src/nostr-profile.fuzz.test.ts`                                                        | Add profile HTTP tests if UI/API payloads or config write behavior change.                                             |
| Profile import/HTTP changed                      | `pnpm test -- extensions/nostr/src/nostr-profile-import.test.ts extensions/nostr/src/nostr-profile-http.test.ts extensions/nostr/src/nostr-profile.fuzz.test.ts` | Escalate to security review if URL sanitization, signature verification, or external relay fetch behavior changes.     |
| Fuzz/security-sensitive event validation changed | `pnpm test -- extensions/nostr/src/nostr-bus.fuzz.test.ts extensions/nostr/src/nostr-profile.fuzz.test.ts`                                                       | Add broader security review for crypto/event validation and profile URL acceptance.                                    |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Promote beyond `deep-partial` only after recording dated command output for the affected paths.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `39` (删除 2，修改 26，新增 11).
- Target-existing path refs in active map: `37`; deleted/renamed-away refs kept only in transition artifacts: `2`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/nostr/api.ts`
- `extensions/nostr/index.ts`
- `extensions/nostr/openclaw.plugin.json`
- `extensions/nostr/package.json`
- `extensions/nostr/runtime-api.ts`
- `extensions/nostr/src/channel.inbound.test.ts`
- `extensions/nostr/src/channel.outbound.test.ts`
- `extensions/nostr/src/channel.setup.ts`
- `extensions/nostr/src/channel.test.ts`
- `extensions/nostr/src/channel.ts`
- `extensions/nostr/src/config-schema.ts`
- `extensions/nostr/src/gateway.ts`
- `extensions/nostr/src/metrics.ts`
- `extensions/nostr/src/nostr-bus.ts`
- `extensions/nostr/src/nostr-profile-http.ts`
- `extensions/nostr/src/nostr-profile-import.ts`
- `extensions/nostr/src/nostr-profile.ts`
- `extensions/nostr/src/nostr-state-store.ts`
- `extensions/nostr/src/seen-tracker.ts`
- `extensions/nostr/src/types.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
