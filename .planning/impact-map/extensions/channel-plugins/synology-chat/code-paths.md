# synology-chat Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                         | Trace start                                                                                           | Likely downstream impact                                                                                                |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Manifest/package to registry | `openclaw.plugin.json` -> `package.json` -> `index.ts` / `setup-entry.ts`                             | Plugin discovery, setup entry, install docs, and package metadata.                                                      |
| Setup/account config         | `setup-entry.ts` -> `src/setup-surface.ts` -> `src/accounts.ts` / `src/config-schema.ts`              | Token, incoming webhook URL, webhook path, account scoping, DM policy, and allowed user IDs.                            |
| Security warnings            | `src/channel.ts` -> `src/gateway-runtime.ts` / conditional warning collectors                         | Missing token/incoming URL, insecure SSL, mutable name matching, inherited webhook path, open/empty allowlist warnings. |
| Gateway startup              | `src/channel.ts` gateway -> `src/gateway-runtime.ts` -> `src/webhook-handler.ts`                      | Route registration, per-account webhook path, startup validation, and route cleanup.                                    |
| Webhook auth                 | `src/webhook-handler.ts` request parser -> token from body/query/header                               | Outgoing webhook token validation, HTTP 401/403 behavior, and request size/body handling.                               |
| Inbound allowlist            | `src/webhook-handler.ts` -> account `dmPolicy` / `allowedUserIds`                                     | Sender authorization, empty allowlist blocking, open DM behavior, and stable user ID matching.                          |
| Inbound dispatch             | `src/webhook-handler.ts` -> `src/inbound-context.ts` -> `src/inbound-turn.ts` -> `src/session-key.ts` | Sender/chat context, route resolution, session keys, identity links, trigger stripping, and reply dispatch.             |
| Outbound reply/send          | `src/channel.ts` outbound -> `src/client.ts` `sendMessage` / `sendFileUrl`                            | Incoming webhook payloads, media URL delivery, TLS/insecure SSL option, and result mapping.                             |
| Legacy name matching         | `src/webhook-handler.ts` -> `src/client.ts` `resolveLegacyWebhookNameToChatUserId`                    | Mutable username fallback safety, warnings, and reply target correctness.                                               |
| Pairing approval             | `src/channel.ts` pairing -> `src/client.ts`                                                           | Approval notification target, allowlist normalization, and setup guidance.                                              |

## Trace rule

Start with repo-native `rg`, file inspection, and colocated tests. Use GitNexus or code-review-graph only after fresh index coverage for `extensions/synology-chat/` is recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `30` changed path(s) to this final leaf. `28` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 8, 'M': 20, 'D': 2}`.

- `extensions/synology-chat/api.ts`
- `extensions/synology-chat/channel-plugin-api.ts`
- `extensions/synology-chat/contract-api.ts`
- `extensions/synology-chat/index.ts`
- `extensions/synology-chat/openclaw.plugin.json`
- `extensions/synology-chat/package.json`
- `extensions/synology-chat/setup-entry.ts`
- `extensions/synology-chat/src/accounts.ts`
- `extensions/synology-chat/src/approval-auth.test.ts`
- `extensions/synology-chat/src/approval-auth.ts`
- `extensions/synology-chat/src/channel.integration.test.ts`
- `extensions/synology-chat/src/channel.test.ts`
- `extensions/synology-chat/src/channel.ts`
- `extensions/synology-chat/src/client.test.ts`
- `extensions/synology-chat/src/client.ts`
- `extensions/synology-chat/src/core.test.ts`
- `extensions/synology-chat/src/gateway-runtime.ts`
- `extensions/synology-chat/src/inbound-turn.ts`
- `extensions/synology-chat/src/runtime.ts`
- `extensions/synology-chat/src/security-audit.test.ts`
- `extensions/synology-chat/src/security-audit.ts`
- `extensions/synology-chat/src/security.ts`
- `extensions/synology-chat/src/session-key.ts`
- `extensions/synology-chat/src/setup-surface.ts`
- `extensions/synology-chat/src/test-http-utils.ts`
- `extensions/synology-chat/src/webhook-handler.test.ts`
- `extensions/synology-chat/src/webhook-handler.ts`
- `extensions/synology-chat/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->
