# mattermost Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                            | Trace start                                                                                                                    | Likely downstream impact                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Manifest to registry            | `extensions/mattermost/openclaw.plugin.json` -> `extensions/mattermost/index.ts`                                               | Plugin discovery, channel id availability, install docs, and bundled plugin invariant tests.         |
| Package/install contract        | `extensions/mattermost/package.json`                                                                                           | Workspace package resolution, install-on-demand runtime deps, and plugin SDK export expectations.    |
| Setup/config/account resolution | `src/setup-entry.ts` -> `src/setup-core.ts` / `src/setup-surface.ts` -> `src/config-schema.ts` -> `src/mattermost/accounts.ts` | Setup wizard, status diagnostics, multi-account config compatibility, and app/provider settings.     |
| Status/probe                    | `src/channel.ts` -> `src/mattermost/client.ts` / `src/mattermost/probe` helpers                                                | Channel health checks, credential validation, and status output.                                     |
| Inbound websocket event         | `src/channel.ts` monitor -> `src/mattermost/monitor.ts` -> `src/mattermost/monitor-websocket.ts`                               | Inbound post routing, reconnect behavior, event parse compatibility, and duplicate suppression.      |
| Inbound gating/auth             | `src/mattermost/monitor.ts` -> `monitor-gating.ts` / `monitor-auth.ts` / `normalize.ts` / `group-mentions.ts`                  | Mention gating, channel kind filtering, sender allowlists, command authorization, and group policy.  |
| Inbound resources               | `src/mattermost/monitor.ts` -> `monitor-resources.ts` -> `client.ts`                                                           | Attachment/resource fetch, media cache lifecycle, and remote-resource safety.                        |
| Slash command lifecycle         | `src/mattermost/monitor-slash.ts` -> `slash-commands.ts` -> `slash-state.ts` -> `src/session-route.ts`                         | Command install/cleanup, callback path `/api/channels/mattermost/command`, route state, and parsing. |
| Interactive callbacks           | `src/mattermost/interactions.ts` -> `model-picker.ts` / `send.ts` reply buttons                                                | Button callback security, model picker UI state, and reply interaction payloads.                     |
| Outbound send                   | `src/channel.ts` -> `src/mattermost/send.ts` -> `target-resolution.ts` -> `client.ts`                                          | Manual send, auto-reply delivery, thread targets, opaque targets, and API error mapping.             |
| Reply delivery                  | auto-reply pipeline -> `src/mattermost/reply-delivery.ts` -> `send.ts`                                                         | Thread/root response semantics and button attachment rendering.                                      |
| Directory and reactions         | actions/tools -> `directory.ts` / `reactions.ts` -> `client.ts`                                                                | Target discovery, action execution, bot-user cache, and UX reactions.                                |

## Trace rule

Start with repo-native `rg`, colocated tests, and file inspection. Use GitNexus or code-review-graph only after fresh index coverage for `extensions/mattermost/` is recorded in `.planning/tools/GRAPH-COVERAGE.md`.
