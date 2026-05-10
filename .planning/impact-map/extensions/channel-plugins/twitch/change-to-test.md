# twitch Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                       | First validation                                                                                                                     | Escalation trigger                                                                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Manifest/package/entry changed    | `pnpm test:contracts:channels` plus `pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/config.test.ts`         | `pnpm build` is required if package metadata, runtime deps, or plugin exports change.                                                           |
| Setup/config/accounts changed     | `pnpm test -- extensions/twitch/src/setup-surface.test.ts extensions/twitch/src/config.test.ts extensions/twitch/src/status.test.ts` | Add app/provider/docs checks if setup prompts, docs links, user-facing config fields, or status text change.                                    |
| Token/client/probe changed        | `pnpm test -- extensions/twitch/src/token.test.ts extensions/twitch/src/twitch-client.test.ts extensions/twitch/src/probe.test.ts`   | Escalate to monitor/send tests if Twurple client behavior or auth errors affect runtime paths.                                                  |
| Inbound monitor/access changed    | `pnpm test -- extensions/twitch/src/access-control.test.ts extensions/twitch/src/plugin.test.ts`                                     | Add live Twitch chat smoke only when explicitly validating real credentials; add shared policy tests if access semantics align across channels. |
| Outbound target/send changed      | `pnpm test -- extensions/twitch/src/outbound.test.ts extensions/twitch/src/send.test.ts`                                             | Escalate to action tests if manual send semantics or default channel fallback changes.                                                          |
| Message action changed            | `pnpm test -- extensions/twitch/src/plugin.test.ts extensions/twitch/src/outbound.test.ts extensions/twitch/src/send.test.ts`        | Add action discovery/tool schema tests if action capability metadata changes.                                                                   |
| Markdown/channel utility changed  | `pnpm test -- extensions/twitch/src/outbound.test.ts extensions/twitch/src/send.test.ts extensions/twitch/src/config.test.ts`        | Escalate to shared text/chunking tests if Markdown/table behavior should align across channels.                                                 |
| Runtime dependency/export changed | `pnpm test -- test/scripts/stage-bundled-plugin-runtime-deps.test.ts` and targeted Twitch tests                                      | `pnpm build` is required for Twurple dependency, package export, or production runtime boundary changes.                                        |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Promote beyond `deep-partial` only after recording dated command output for the affected paths.
