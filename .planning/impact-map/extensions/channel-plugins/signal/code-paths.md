# signal Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                         | Trace start                                                                                                      | Likely downstream impact                                                                                       |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Manifest/package to registry | `openclaw.plugin.json` -> `package.json` -> `index.ts` / `setup-entry.ts`                                        | Channel/setup plugin discovery, bundled plugin invariants, and runtime setter wiring.                          |
| Setup/binary/account         | `setup-entry.ts` -> `src/channel.setup.ts` -> `src/setup-surface.ts` / `src/setup-core.ts` -> `src/accounts.ts`  | signal-cli detection/install prompt, account number/base URL, allowlist parsing, DM policy, and setup status.  |
| Config/security adapter      | `src/shared.ts` / `src/plugin-shared.ts` -> `src/channel.ts`                                                     | Config/status/security warnings, account allowlist editing, and channel metadata consistency.                  |
| Probe/client health          | `src/channel.ts` status -> `src/probe.ts` -> `src/client.ts` / `src/rpc-context.ts`                              | Signal REST reachability, version checks, timeout/error mapping, and status issues.                            |
| Monitor lifecycle            | `src/monitor.ts` -> `src/daemon.ts` -> `src/sse-reconnect.ts` -> `src/client.ts`                                 | Optional daemon autostart, SSE reconnect/backoff, abort handling, and lifecycle failures.                      |
| Inbound event                | `src/monitor.ts` -> `src/monitor/event-handler.ts` -> `src/monitor/access-policy.ts` / `src/monitor/mentions.ts` | Sender/group authorization, mention gating, pairing, inbound context, route updates, and tool-result dispatch. |
| Tool result/reply path       | `src/monitor/event-handler.ts` -> runtime reply/stream/send helpers -> `src/send.ts`                             | Response prefix, tool summaries, read/typing receipts, auto-replies, and route persistence.                    |
| Outbound text/media          | `src/channel.ts` -> `sendFormattedSignalText` / `sendFormattedSignalMedia` -> `src/format.ts` -> `src/send.ts`   | Markdown conversion, chunking, styled text, media limits, and REST payload/result mapping.                     |
| Target/session route         | `src/outbound-session.ts` -> `src/channel.ts` route resolver                                                     | Direct/group/username/UUID/E.164 target parsing and session peer keys.                                         |
| Reactions/actions            | `src/message-actions.ts` -> `src/reaction-level.ts` -> `src/send-reactions.ts` / `src/client.ts`                 | Reaction availability, reaction level policy, and REST action payloads.                                        |
| Runtime API boundary         | `src/channel.runtime.ts` / `src/runtime.ts` / `src/runtime-api.ts`                                               | Lazy runtime exports, tests, and product build boundaries.                                                     |

## Trace rule

Start with repo-native `rg`, file inspection, and colocated tests. Use GitNexus or code-review-graph only after fresh index coverage for `extensions/signal/` is recorded in `.planning/tools/GRAPH-COVERAGE.md`.
