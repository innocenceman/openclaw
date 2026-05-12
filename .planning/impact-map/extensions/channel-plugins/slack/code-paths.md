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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `235` changed path(s) to this final leaf. `222` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 92, 'M': 130, 'D': 13}`.

- `extensions/slack/account-inspect-api.ts`
- `extensions/slack/api.ts`
- `extensions/slack/channel-entry.ts`
- `extensions/slack/channel-plugin-api.ts`
- `extensions/slack/config-api.ts`
- `extensions/slack/configured-state.ts`
- `extensions/slack/contract-api.ts`
- `extensions/slack/directory-contract-api.ts`
- `extensions/slack/doctor-contract-api.ts`
- `extensions/slack/http-routes-api.ts`
- `extensions/slack/inbound-contract-test-api.ts`
- `extensions/slack/index.test.ts`
- `extensions/slack/index.ts`
- `extensions/slack/interactive-replies-api.ts`
- `extensions/slack/message-tool-api.ts`
- `extensions/slack/openclaw.plugin.json`
- `extensions/slack/outbound-payload-test-api.ts`
- `extensions/slack/package.json`
- `extensions/slack/runtime-api.ts`
- `extensions/slack/runtime-setter-api.ts`
- `extensions/slack/secret-contract-api.ts`
- `extensions/slack/security-contract-api.ts`
- `extensions/slack/setup-entry.ts`
- `extensions/slack/setup-plugin-api.ts`
- `extensions/slack/src/account-inspect.ts`
- `extensions/slack/src/account-reply-mode.ts`
- `extensions/slack/src/accounts.runtime.ts`
- `extensions/slack/src/accounts.test.ts`
- `extensions/slack/src/accounts.ts`
- `extensions/slack/src/action-runtime.runtime.ts`
- `... 另有 192 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/slack/account-inspect-api.ts`
- `extensions/slack/api.ts`
- `extensions/slack/config-api.ts`
- `extensions/slack/index.test.ts`
- `extensions/slack/openclaw.plugin.json`
- `extensions/slack/package.json`
- `extensions/slack/runtime-api.ts`
- `extensions/slack/src/account-reply-mode.ts`
- `extensions/slack/src/account-surface-fields.ts`
- `extensions/slack/src/accounts.test.ts`
- `extensions/slack/src/accounts.ts`
- `extensions/slack/src/action-runtime.test.ts`
- `extensions/slack/src/action-runtime.ts`
- `extensions/slack/src/action-threading.test.ts`
- `extensions/slack/src/actions.blocks.test.ts`
- `extensions/slack/src/actions.download-file.test.ts`
- `extensions/slack/src/actions.reactions.test.ts`
- `extensions/slack/src/actions.read.test.ts`
- `extensions/slack/src/actions.ts`
- `extensions/slack/src/approval-auth.ts`
- `extensions/slack/src/approval-handler.runtime.test.ts`
- `extensions/slack/src/approval-handler.runtime.ts`
- `extensions/slack/src/approval-native.test.ts`
- `extensions/slack/src/approval-native.ts`
- `extensions/slack/src/blocks-render.ts`
- `extensions/slack/src/blocks.test-helpers.ts`
- `extensions/slack/src/channel-actions-setup-status.contract.test.ts`
- `extensions/slack/src/channel-actions.ts`
- `extensions/slack/src/channel-api.ts`
- `extensions/slack/src/channel-migration.ts`
- `extensions/slack/src/channel.setup.ts`
- `extensions/slack/src/channel.test.ts`
- `extensions/slack/src/channel.ts`
- `extensions/slack/src/client-options.ts`
- `extensions/slack/src/config-schema.test.ts`
- `extensions/slack/src/config-ui-hints.ts`
- `extensions/slack/src/directory-config.ts`
- `extensions/slack/src/directory-contract.test.ts`
- `extensions/slack/src/directory-live.ts`
- `extensions/slack/src/doctor-contract.ts`
- … plus 112 more target-existing changed paths.

Deleted or renamed-away paths omitted from this active leaf: `2`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
