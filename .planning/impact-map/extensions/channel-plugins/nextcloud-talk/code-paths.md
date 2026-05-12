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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `46` changed path(s) to this final leaf. `43` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 20, 'M': 23, 'D': 3}`.

- `extensions/nextcloud-talk/channel-plugin-api.ts`
- `extensions/nextcloud-talk/contract-api.ts`
- `extensions/nextcloud-talk/index.ts`
- `extensions/nextcloud-talk/openclaw.plugin.json`
- `extensions/nextcloud-talk/package.json`
- `extensions/nextcloud-talk/runtime-api.ts`
- `extensions/nextcloud-talk/secret-contract-api.ts`
- `extensions/nextcloud-talk/setup-entry.ts`
- `extensions/nextcloud-talk/src/accounts.ts`
- `extensions/nextcloud-talk/src/approval-auth.test.ts`
- `extensions/nextcloud-talk/src/approval-auth.ts`
- `extensions/nextcloud-talk/src/channel-api.ts`
- `extensions/nextcloud-talk/src/channel.adapters.ts`
- `extensions/nextcloud-talk/src/channel.core.test.ts`
- `extensions/nextcloud-talk/src/channel.lifecycle.test.ts`
- `extensions/nextcloud-talk/src/channel.ts`
- `extensions/nextcloud-talk/src/config-schema.ts`
- `extensions/nextcloud-talk/src/core.test.ts`
- `extensions/nextcloud-talk/src/doctor-contract.ts`
- `extensions/nextcloud-talk/src/doctor.test.ts`
- `extensions/nextcloud-talk/src/doctor.ts`
- `extensions/nextcloud-talk/src/gateway.ts`
- `extensions/nextcloud-talk/src/inbound.ts`
- `extensions/nextcloud-talk/src/monitor-runtime.ts`
- `extensions/nextcloud-talk/src/monitor.replay.test.ts`
- `extensions/nextcloud-talk/src/monitor.ts`
- `extensions/nextcloud-talk/src/policy.ts`
- `extensions/nextcloud-talk/src/replay-guard.ts`
- `extensions/nextcloud-talk/src/room-info.test.ts`
- `... 另有 13 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/nextcloud-talk/doctor-contract-api.ts`
- `extensions/nextcloud-talk/openclaw.plugin.json`
- `extensions/nextcloud-talk/package.json`
- `extensions/nextcloud-talk/runtime-api.ts`
- `extensions/nextcloud-talk/src/accounts.ts`
- `extensions/nextcloud-talk/src/channel-api.ts`
- `extensions/nextcloud-talk/src/channel.core.test.ts`
- `extensions/nextcloud-talk/src/channel.lifecycle.test.ts`
- `extensions/nextcloud-talk/src/channel.ts`
- `extensions/nextcloud-talk/src/config-schema.ts`
- `extensions/nextcloud-talk/src/core.test.ts`
- `extensions/nextcloud-talk/src/gateway.ts`
- `extensions/nextcloud-talk/src/monitor-runtime.ts`
- `extensions/nextcloud-talk/src/monitor.replay.test.ts`
- `extensions/nextcloud-talk/src/monitor.test-harness.ts`
- `extensions/nextcloud-talk/src/policy.ts`
- `extensions/nextcloud-talk/src/replay-guard.ts`
- `extensions/nextcloud-talk/src/secret-contract.ts`
- `extensions/nextcloud-talk/src/secret-input.ts`
- `extensions/nextcloud-talk/src/send.cfg-threading.test.ts`
- `extensions/nextcloud-talk/src/send.runtime.ts`
- `extensions/nextcloud-talk/src/session-route.ts`
- `extensions/nextcloud-talk/src/setup-core.ts`
- `extensions/nextcloud-talk/src/setup-surface.ts`
- `extensions/nextcloud-talk/src/signature.ts`
- `extensions/nextcloud-talk/src/types.ts`

Deleted or renamed-away paths omitted from this active leaf: `1`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
