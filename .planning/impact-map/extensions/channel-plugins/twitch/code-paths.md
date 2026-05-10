# twitch Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                         | Trace start                                                                                            | Likely downstream impact                                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Manifest/package to registry | `openclaw.plugin.json` -> `package.json` -> `index.ts` -> `src/plugin.ts`                              | Channel discovery, Twurple deps, docs metadata, aliases, and runtime setter wiring.                                |
| Setup/account config         | `src/setup-surface.ts` -> `src/config.ts` / `src/config-schema.ts` -> `src/utils/twitch.ts`            | OAuth token/client/channel setup, env token, refresh token support, role policy, allowFrom, and configured status. |
| Token/client creation        | `src/token.ts` -> `src/twitch-client.ts` -> Twurple Auth/API/Chat                                      | Chat/API client auth, refresh behavior, token expiry, and client errors.                                           |
| Status/probe                 | `src/plugin.ts` status -> `src/status.ts` -> `src/probe.ts` -> `src/twitch-client.ts`                  | Health checks, token/client validity, channel join diagnostics, and status output.                                 |
| Inbound monitor              | `src/plugin.ts` gateway/monitor -> `src/monitor.ts` -> `src/twitch-client.ts`                          | Twitch chat connection, message events, runtime dispatch, and shutdown.                                            |
| Inbound access control       | `src/monitor.ts` -> `src/access-control.ts` -> account `allowFrom` / `allowedRoles` / `requireMention` | Role-based access, user ID allowlist, mention gating, and open/disabled behavior.                                  |
| Outbound target resolution   | `src/outbound.ts` -> `src/config.ts` / `src/utils/twitch.ts`                                           | Default channel, explicit channel targets, implicit allowlist behavior, and missing target errors.                 |
| Outbound send                | `src/outbound.ts` -> `src/send.ts` -> `src/twitch-client.ts` -> `utils/markdown.ts`                    | Message chunking/Markdown stripping, Twurple send result, media URL text, and error mapping.                       |
| Message action send          | `src/actions.ts` -> `src/outbound.ts`                                                                  | Tool `send` action, account selection, default channel fallback, and action result payloads.                       |
| Runtime resolver             | `src/resolver.ts` / `src/runtime.ts`                                                                   | Runtime/account/client access by monitor, send, and plugin surfaces.                                               |

## Trace rule

Start with repo-native `rg`, file inspection, and colocated tests. Use GitNexus or code-review-graph only after fresh index coverage for `extensions/twitch/` is recorded in `.planning/tools/GRAPH-COVERAGE.md`.
