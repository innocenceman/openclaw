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
