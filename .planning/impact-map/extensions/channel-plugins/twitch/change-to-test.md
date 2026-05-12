# twitch Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                      | First validation                                                                                                                     | Escalation trigger                                                                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Manifest/package/entry changed   | `pnpm test:contracts:channels` plus `pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`         | `pnpm build` is required if package metadata, runtime deps, or plugin exports change.                                                           |
| Setup/config/accounts changed    | `pnpm test -- extensions/twitch/src/setup-surface.test.ts extensions/twitch/src/config.test.ts extensions/twitch/src/status.test.ts` | Add app/provider/docs checks if setup prompts, docs links, user-facing config fields, or status text change.                                    |
| Token/client/probe changed       | `pnpm test -- extensions/twitch/src/token.test.ts extensions/twitch/src/twitch-client.test.ts extensions/twitch/src/probe.test.ts`   | Escalate to monitor/send tests if Twurple client behavior or auth errors affect runtime paths.                                                  |
| Inbound monitor/access changed   | `pnpm test -- extensions/twitch/src/access-control.test.ts extensions/twitch/src/plugin.test.ts`                                     | Add live Twitch chat smoke only when explicitly validating real credentials; add shared policy tests if access semantics align across channels. |
| Outbound target/send changed     | `pnpm test -- extensions/twitch/src/outbound.test.ts extensions/twitch/src/send.test.ts`                                             | Escalate to action tests if manual send semantics or default channel fallback changes.                                                          |
| Message action changed           | `pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/outbound.test.ts extensions/twitch/src/send.test.ts`        | Add action discovery/tool schema tests if action capability metadata changes.                                                                   |
| Markdown/channel utility changed | `pnpm test -- extensions/twitch/src/outbound.test.ts extensions/twitch/src/send.test.ts extensions/twitch/src/config.test.ts`        | Escalate to shared text/chunking tests if Markdown/table behavior should align across channels.                                                 |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Promote beyond `deep-partial` only after recording dated command output for the affected paths.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `36` (删除 2，修改 28，新增 6).
- Target-existing path refs in active map: `34`; deleted/renamed-away refs kept only in transition artifacts: `2`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/twitch/api.ts`
- `extensions/twitch/index.test.ts`
- `extensions/twitch/openclaw.plugin.json`
- `extensions/twitch/package.json`
- `extensions/twitch/runtime-api.ts`
- `extensions/twitch/src/access-control.ts`
- `extensions/twitch/src/client-manager-registry.ts`
- `extensions/twitch/src/config-schema.test.ts`
- `extensions/twitch/src/config-schema.ts`
- `extensions/twitch/src/config.ts`
- `extensions/twitch/src/monitor.ts`
- `extensions/twitch/src/plugin.ts`
- `extensions/twitch/src/probe.ts`
- `extensions/twitch/src/send.ts`
- `extensions/twitch/src/token.ts`
- `extensions/twitch/src/twitch-client.ts`
- `extensions/twitch/src/types.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
