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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `36` changed path(s) to this final leaf. `34` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'D': 2, 'M': 28, 'A': 6}`.

- `extensions/twitch/README.md`
- `extensions/twitch/api.ts`
- `extensions/twitch/channel-plugin-api.ts`
- `extensions/twitch/index.test.ts`
- `extensions/twitch/index.ts`
- `extensions/twitch/openclaw.plugin.json`
- `extensions/twitch/package.json`
- `extensions/twitch/setup-entry.ts`
- `extensions/twitch/setup-plugin-api.ts`
- `extensions/twitch/src/access-control.ts`
- `extensions/twitch/src/actions.test.ts`
- `extensions/twitch/src/actions.ts`
- `extensions/twitch/src/config.test.ts`
- `extensions/twitch/src/config.ts`
- `extensions/twitch/src/monitor.ts`
- `extensions/twitch/src/outbound.test.ts`
- `extensions/twitch/src/outbound.ts`
- `extensions/twitch/src/plugin.test.ts`
- `extensions/twitch/src/plugin.ts`
- `extensions/twitch/src/probe.test.ts`
- `extensions/twitch/src/probe.ts`
- `extensions/twitch/src/resolver.ts`
- `extensions/twitch/src/runtime.ts`
- `extensions/twitch/src/send.test.ts`
- `extensions/twitch/src/send.ts`
- `extensions/twitch/src/setup-surface.test.ts`
- `extensions/twitch/src/setup-surface.ts`
- `extensions/twitch/src/status.ts`
- `extensions/twitch/src/token.test.ts`
- `extensions/twitch/src/token.ts`
- `... 另有 4 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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
