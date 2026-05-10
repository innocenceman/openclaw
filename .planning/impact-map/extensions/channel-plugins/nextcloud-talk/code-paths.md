# nextcloud-talk Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                         | Trace start                                                                                                     | Likely downstream impact                                                                                              |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Manifest/package to registry | `openclaw.plugin.json` -> `package.json` -> `index.ts`                                                          | Plugin discovery, channel metadata, install docs, aliases, and runtime dependency checks.                             |
| Setup/account config         | `setup-entry.ts` -> `src/setup-surface.ts` -> `src/setup-core.ts` -> `src/accounts.ts` / `src/config-schema.ts` | Scoped account config, base URL/bot secret/API credentials, DM/group policy, room allowlists, and setup UX.           |
| Status/gateway start         | `src/channel.ts` -> `src/accounts.ts` -> `runStoppablePassiveMonitor` -> `src/monitor.ts`                       | Per-account status, missing secret/baseUrl failures, passive monitor lifecycle, and abort handling.                   |
| Webhook auth/replay          | `src/monitor.ts` -> `src/signature.ts` -> `src/replay-guard.ts`                                                 | Bot webhook authenticity, timestamp/random replay protection, and rejection diagnostics.                              |
| Webhook inbound parse        | `src/monitor.ts` -> `src/inbound.ts` -> `src/room-info.ts`                                                      | Activity Streams payload parsing, sender/room/message context, optional API room metadata, and DM detection.          |
| Inbound policy/routing       | `src/inbound.ts` -> `src/policy.ts` -> `src/channel.ts` group resolver                                          | DM policy, room allowlist, group policy, requireMention, room tool/skill/system prompt overrides, and route warnings. |
| Target/session normalization | `src/normalize.ts` -> `src/session-route.ts` -> `src/channel.ts` messaging target resolver                      | CLI/manual send targets, room-token session keys, aliases `nc-talk`/`nc`, and outbound peer classification.           |
| Outbound message             | `src/channel.ts` outbound -> `src/send.ts` -> `src/signature.ts`                                                | OCS bot message endpoint, Markdown table conversion, auth signature body, error mapping, and send result shape.       |
| Reaction action              | message action -> `src/send.ts` `sendReactionNextcloudTalk`                                                     | Reaction endpoint, auth signature, message id/room token handling, and action feedback.                               |
| Logout/account cleanup       | `src/channel.ts` logoutAccount -> account clear helpers                                                         | Credential removal, account status, and config compatibility.                                                         |

## Trace rule

Start with repo-native `rg`, file inspection, and colocated tests. Use GitNexus or code-review-graph only after fresh index coverage for `extensions/nextcloud-talk/` is recorded in `.planning/tools/GRAPH-COVERAGE.md`.
