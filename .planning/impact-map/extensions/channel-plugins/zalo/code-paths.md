# zalo Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                         | Trace start                                                                                        | Likely downstream impact                                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Manifest/package to registry | `openclaw.plugin.json` -> `package.json` -> `index.ts` / `setup-entry.ts`                          | Channel/setup discovery, install docs, alias `zl`, runtime deps, and runtime setter wiring.                   |
| Setup/token/account          | `setup-entry.ts` -> `src/setup-surface.ts` / `setup-core.ts` -> `src/accounts.ts` / `src/token.ts` | Bot token/tokenFile/env, account scoping, numeric allowFrom, webhook mode/path/secret, and configured status. |
| Config/status/probe          | `src/channel.ts` -> `src/config-schema.ts` -> `src/status-issues.ts` -> `src/probe.ts`             | Multi-account schema, mode summaries, token source, status issues, and API reachability.                      |
| Lazy runtime                 | `src/channel.ts` -> `src/channel.runtime.ts` -> `src/runtime.ts`                                   | Probe/send/monitor runtime, action runtime, and dynamic import/build boundary.                                |
| Outbound send                | `src/channel.ts` raw send adapter -> `src/send.ts` -> `src/api.ts` -> `src/proxy.ts`               | Text/photo sends, media URL handling, chunked payloads, proxy-aware fetch, and result/error mapping.          |
| Message action send          | `src/actions.ts` -> `src/actions.runtime.ts` -> `src/send.ts`                                      | Tool `send` action, media argument, account selection, and JSON result payloads.                              |
| Polling monitor              | `src/channel.ts` gateway -> `src/monitor.ts` -> `src/api.ts`                                       | Polling lifecycle, image polling, duplicate handling, inbound dispatch, and shutdown.                         |
| Webhook monitor              | `src/setup-surface.ts` webhook mode -> `src/monitor.webhook.ts` -> `src/monitor.ts`                | Webhook path/URL/secret, replay/duplicate behavior, one-visible-reply guarantee, and route security.          |
| Inbound DM/group policy      | `src/monitor.ts` -> `src/group-access.ts` -> scoped DM security resolver in `src/channel.ts`       | Pairing, allowlist, groupPolicy/groupAllowFrom, requireMention, and open-group warnings.                      |
| Session/directory            | `src/session-route.ts` / `src/channel.ts` directory adapter                                        | Numeric user/chat IDs, directory entries from allowFrom, and direct/group session routes.                     |

## Trace rule

Start with repo-native `rg`, file inspection, and colocated tests. Use GitNexus or code-review-graph only after fresh index coverage for `extensions/zalo/` is recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `65` changed path(s) to this final leaf. `61` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'D': 4, 'M': 42, 'A': 18, 'R': 1}`.

- `extensions/zalo/README.md`
- `extensions/zalo/api.ts`
- `extensions/zalo/channel-plugin-api.ts`
- `extensions/zalo/contract-api.ts`
- `extensions/zalo/index.test.ts`
- `extensions/zalo/index.ts`
- `extensions/zalo/openclaw.plugin.json`
- `extensions/zalo/package.json`
- `extensions/zalo/runtime-api.test.ts`
- `extensions/zalo/runtime-api.ts`
- `extensions/zalo/secret-contract-api.ts`
- `extensions/zalo/setup-api.ts`
- `extensions/zalo/setup-entry.ts`
- `extensions/zalo/src/accounts.test.ts`
- `extensions/zalo/src/accounts.ts`
- `extensions/zalo/src/actions.test.ts`
- `extensions/zalo/src/actions.ts`
- `extensions/zalo/src/api.test.ts`
- `extensions/zalo/src/api.ts`
- `extensions/zalo/src/approval-auth.test.ts`
- `extensions/zalo/src/approval-auth.ts`
- `extensions/zalo/src/channel.directory.test.ts`
- `extensions/zalo/src/channel.runtime.ts`
- `extensions/zalo/src/channel.startup.test.ts`
- `extensions/zalo/src/channel.ts`
- `extensions/zalo/src/group-access.ts`
- `extensions/zalo/src/monitor.image.polling.test.ts`
- `extensions/zalo/src/monitor.lifecycle.test.ts`
- `extensions/zalo/src/monitor.pairing.lifecycle.test.ts`
- `extensions/zalo/src/monitor.polling.media-reply.test.ts`
- `... 另有 31 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
