# slack Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                         | Trace start                                                                                                                        | Likely downstream impact                                                                                        |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Manifest/package to registry | `openclaw.plugin.json` -> `package.json` -> `index.ts` / `setup-entry.ts`                                                          | Channel/setup discovery, staged Slack deps, docs metadata, and runtime setter wiring.                           |
| Setup/account migration      | `src/channel.setup.ts` -> `src/setup-core.ts` / `src/setup-surface.ts` -> `src/accounts.ts` / `src/channel-migration.ts`           | Token setup, channel/user allowlists, scopes, multi-account defaults, and compatibility migrations.             |
| Config/security/status       | `src/channel.ts` -> `src/shared.ts` / `src/plugin-shared.ts` -> `src/probe.ts` / `src/scopes.ts`                                   | Config validation, security warnings, token status, required credentials, and scope diagnostics.                |
| Runtime/loading              | `src/channel.ts` -> `src/channel.runtime.ts` -> `src/runtime.ts`                                                                   | Dynamic imports, staged runtime deps, provider/send/action runtime availability, and build boundaries.          |
| Socket Mode provider         | `src/monitor.ts` -> `src/monitor/provider.ts` -> Slack Bolt/Web API client                                                         | Inbound lifecycle, auth errors, reconnect policy, event registration, and shutdown.                             |
| Inbound auth/policy          | event -> `src/monitor/auth.ts` / `allow-list.ts` / `dm-auth.ts` / `policy.ts` / `channel-config.ts`                                | Sender authorization, channel route allowlist, group policy, mention requirements, and access warnings.         |
| Message events               | `src/monitor/events/messages.ts` / `message-subtype-handlers.ts` -> `src/monitor/message-handler/**`                               | Message body extraction, subtype filtering, app mention races, debounce, thread/session context, and dispatch.  |
| Thread and room context      | `message-handler/prepare-thread-context.ts` -> `thread-resolution.ts` -> `threading*.ts` / `sent-thread-cache.ts`                  | Auto-threading, current thread tool context, thread participation cache, and missing thread timestamp handling. |
| Reply/streaming              | `message-handler/dispatch.ts` -> `streaming.ts` / `draft-stream.ts` / `stream-mode.ts` / `monitor/replies.ts`                      | Streaming replies, draft updates, chunking, final reply behavior, and stop/append semantics.                    |
| Interactions/slash           | `src/monitor/events/interactions*.ts` -> `interactive-replies.ts` / `modal-metadata.ts` / `monitor/slash*.ts` / `http/registry.ts` | Block actions, modals, slash commands, external arg menus, and HTTP route dispatch.                             |
| Message actions              | `message-action-dispatch.ts` -> `action-runtime.ts` -> `actions.ts` / `monitor/media.ts` / Web API                                 | Reads, pins, file downloads, blocks actions, permissions, and result payloads.                                  |
| Outbound send                | `src/channel.ts` / `outbound-adapter.ts` -> `send.ts` -> `targets.ts` / `blocks-*`                                                 | Manual sends, Slack targets, threaded sends, blocks, media upload, and result mapping.                          |
| Directory/lookup             | `directory-live.ts` / `directory-config.ts` -> `resolve-users.ts` / `resolve-channels.ts`                                          | Setup allowlist resolution, directory picker, user/channel search, and token selection.                         |
| Formatting/blocks            | `format.ts` / `blocks-input.ts` / `blocks-render.ts` / `blocks-fallback.ts` / `truncate.ts`                                        | Slack mrkdwn, Block Kit payloads, fallback text, and limit handling.                                            |

## Trace rule

Start with repo-native `rg`, file inspection, and colocated tests. Use GitNexus or code-review-graph only after fresh index coverage for `extensions/slack/` is recorded in `.planning/tools/GRAPH-COVERAGE.md`.
