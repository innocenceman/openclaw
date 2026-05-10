# zalouser Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                         | Trace start                                                                                                                | Likely downstream impact                                                                                                                       |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Manifest/package to registry | `openclaw.plugin.json` -> `package.json` -> `index.ts` / `setup-entry.ts`                                                  | Channel/setup discovery, install docs, alias `zlu`, package/runtime deps, runtime setter wiring, and tool registration.                        |
| Setup/account/QR login       | `setup-entry.ts` -> `src/setup-surface.ts` / `setup-core.ts` / `channel.setup.ts` -> `src/accounts.ts` -> `src/zalo-js.ts` | Account profile selection, plugin enablement, QR temp-file display, QR wait/refresh/logout choices, allowFrom, and group config.               |
| Config/status/probe          | `src/channel.ts` -> `src/config-schema.ts` -> `src/status-issues.ts` -> `src/probe.ts` -> `src/accounts.ts`                | Multi-account schema, DM/group policy summaries, unauthenticated profile warnings, and account-scoped status.                                  |
| Native ZCA runtime           | `src/runtime.ts` -> `src/zalo-js.ts` -> `src/zca-client.ts`                                                                | Credential file resolution, API cache, QR login lifecycle, listener watchdog, friend/group lookup, media upload, and dependency compatibility. |
| Outbound send                | `src/channel.ts` raw send adapter -> `src/send.ts` -> `src/zalo-js.ts` / `src/text-styles.ts`                              | Text/image/link sends, markdown text styles, target normalization, chunking, and send-result/message id mapping.                               |
| Tool actions                 | `index.ts` -> `src/tool.ts` -> `src/send.ts` / `src/zalo-js.ts` / `src/accounts.ts`                                        | Tool schema/action compatibility for send/image/link/friends/groups/me/status and JSON response shape.                                         |
| Reaction action              | `src/channel.ts` action handler -> `src/message-sid.ts` -> `src/reaction.ts` -> `src/zalo-js.ts`                           | Requires thread id, emoji, message id, and CLI message id; affects current-message reaction behavior.                                          |
| Inbound monitor              | `src/channel.ts` gateway -> `src/monitor.ts` -> `src/zalo-js.ts` listener callbacks                                        | Listener lifecycle, inbound normalization, account scope, historyLimit, group gating, reply dispatch, and shutdown cleanup.                    |
| DM/group policy              | `src/channel.ts` security resolver -> `src/group-policy.ts` -> `src/session-route.ts`                                      | Pairing prefix stripping, allowFrom/groupAllowFrom, groupPolicy, requireMention, dangerous name matching, and direct/group sessions.           |
| Directory/session mapping    | `src/channel.ts` directory adapter -> `src/accounts.ts` / `src/group-policy.ts` / `src/session-route.ts`                   | Friend/group directory entries, numeric ids, named groups, and outbound current-channel targeting.                                             |

## Trace rule

Start with repo-native `rg`, file inspection, and colocated tests. Use GitNexus or code-review-graph only after fresh index coverage for `extensions/zalouser/` is recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `60` changed path(s) to this final leaf. `57` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'D': 3, 'M': 40, 'A': 17}`.

- `extensions/zalouser/README.md`
- `extensions/zalouser/api.ts`
- `extensions/zalouser/channel-plugin-api.ts`
- `extensions/zalouser/contract-api.ts`
- `extensions/zalouser/doctor-contract-api.ts`
- `extensions/zalouser/index.ts`
- `extensions/zalouser/openclaw.plugin.json`
- `extensions/zalouser/package.json`
- `extensions/zalouser/runtime-api.ts`
- `extensions/zalouser/secret-contract-api.ts`
- `extensions/zalouser/setup-entry.ts`
- `extensions/zalouser/setup-plugin-api.ts`
- `extensions/zalouser/src/accounts.runtime.ts`
- `extensions/zalouser/src/accounts.test.ts`
- `extensions/zalouser/src/accounts.ts`
- `extensions/zalouser/src/channel-api.ts`
- `extensions/zalouser/src/channel.adapters.ts`
- `extensions/zalouser/src/channel.directory.test.ts`
- `extensions/zalouser/src/channel.runtime.ts`
- `extensions/zalouser/src/channel.sendpayload.test.ts`
- `extensions/zalouser/src/channel.setup.test.ts`
- `extensions/zalouser/src/channel.setup.ts`
- `extensions/zalouser/src/channel.test.ts`
- `extensions/zalouser/src/channel.ts`
- `extensions/zalouser/src/config-schema.ts`
- `extensions/zalouser/src/directory.ts`
- `extensions/zalouser/src/doctor-contract.ts`
- `extensions/zalouser/src/doctor.test.ts`
- `extensions/zalouser/src/doctor.ts`
- `extensions/zalouser/src/group-policy.test.ts`
- `... 另有 27 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
