# msteams Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                         | Trace start                                                                                                          | Likely downstream impact                                                                               |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Manifest/package to registry | `openclaw.plugin.json` -> `package.json` -> `index.ts`                                                               | Plugin discovery, channel metadata, install docs, runtime deps, and package exports.                   |
| Lazy runtime boundary        | `src/channel.ts` -> `createLazyRuntimeNamedExport` -> `src/channel.runtime.ts`                                       | Probe/send/directory runtime loading, build warnings, and dynamic import boundaries.                   |
| Setup and config             | `setup-entry.ts` -> `src/setup-surface.ts` / `src/setup-core.ts` -> `src/token.ts` / `src/config-schema.ts`          | Wizard prompts, credential resolution, DM/group policy, allowlist updates, and status diagnostics.     |
| Probe/status                 | `src/channel.ts` -> `src/channel.runtime.ts` -> `src/probe.ts` / `src/token.ts`                                      | Channel health, Graph/Bot credentials, and status output.                                              |
| Webhook monitor lifecycle    | `src/channel.ts` -> `src/monitor.ts` -> `src/sdk.ts` -> Express/Bot Framework handlers                               | HTTP route, auth validation, server lifecycle, timeouts, shutdown, and handler registration.           |
| Inbound message handling     | `src/monitor-handler.ts` -> `src/monitor-handler/message-handler.ts` -> `src/inbound.ts` / `src/mentions.ts`         | Message normalization, mention gate, session key extraction, history, debounce, and routing.           |
| Sender and group policy      | `message-handler.ts` -> `src/policy.ts` -> `src/resolve-allowlist.ts` -> `src/graph.ts` / `src/graph-users.ts`       | DM policy, group allowlist, Graph name/id resolution, dangerous name matching, and access groups.      |
| Inbound media                | `message-handler.ts` -> `src/monitor-handler/inbound-media.ts` -> `src/attachments/**` / `src/graph-chat.ts`         | Attachment placeholders, Graph hosted content downloads, media size limits, and remote-media handling. |
| Conversation persistence     | `message-handler.ts` / `reply-dispatcher.ts` -> `src/conversation-store*.ts` -> `src/storage.ts` / `src/store-fs.ts` | Proactive replies, stored conversation references, TTL/pruning, and filesystem locking.                |
| Reply delivery               | `message-handler.ts` -> `src/reply-dispatcher.ts` -> `src/messenger.ts` / `src/reply-stream-controller.ts`           | Auto-reply, typing, streaming status, feedback cards, chunking, and revoked-context fallback.          |
| Outbound send                | `src/outbound.ts` -> `src/send.ts` -> `src/graph-upload.ts` / `src/messenger.ts`                                     | Manual send, media/card/poll payloads, target routing, and API result mapping.                         |
| Poll workflow                | `src/outbound.ts` / `src/monitor-handler.ts` -> `src/polls.ts`                                                       | Poll card rendering, vote extraction, store updates, and invoke handling.                              |
| File consent workflow        | `src/monitor-handler.ts` -> `src/file-consent.ts` / `src/file-consent-helpers.ts` / `src/pending-uploads.ts`         | Large file upload prompts, accept/decline callbacks, and upload URL handling.                          |
| Directory workflow           | `src/channel.ts` -> `src/directory-live.ts` -> `src/graph-users.ts` / `src/graph.ts`                                 | Live peers/groups listing, target resolution, and Graph permission requirements.                       |
| Session route                | `src/session-route.ts`                                                                                               | Outbound session peer classification for direct, group, and channel conversations.                     |

## Trace rule

Start with repo-native `rg`, file inspection, and colocated tests. Use GitNexus or code-review-graph only after fresh index coverage for `extensions/msteams/` is recorded in `.planning/tools/GRAPH-COVERAGE.md`.
