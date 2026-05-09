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
