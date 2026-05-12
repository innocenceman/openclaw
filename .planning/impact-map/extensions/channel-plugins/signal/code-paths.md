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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `69` changed path(s) to this final leaf. `61` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 41, 'A': 18, 'D': 8, 'R': 2}`.

- `extensions/signal/api.ts`
- `extensions/signal/channel-entry.ts`
- `extensions/signal/channel-plugin-api.ts`
- `extensions/signal/config-api.ts`
- `extensions/signal/contract-api.ts`
- `extensions/signal/index.ts`
- `extensions/signal/package.json`
- `extensions/signal/runtime-api.ts`
- `extensions/signal/secret-contract-api.ts`
- `extensions/signal/setup-entry.ts`
- `extensions/signal/src/account-types.ts`
- `extensions/signal/src/accounts.test.ts`
- `extensions/signal/src/accounts.ts`
- `extensions/signal/src/approval-auth.test.ts`
- `extensions/signal/src/approval-auth.ts`
- `extensions/signal/src/channel.setup.ts`
- `extensions/signal/src/channel.ts`
- `extensions/signal/src/client.test.ts`
- `extensions/signal/src/client.ts`
- `extensions/signal/src/config-schema.test.ts`
- `extensions/signal/src/config-schema.ts`
- `extensions/signal/src/core.test.ts`
- `extensions/signal/src/daemon.ts`
- `extensions/signal/src/dm-policy.contract.test.ts`
- `extensions/signal/src/format.ts`
- `extensions/signal/src/identity.ts`
- `extensions/signal/src/inbound-context.contract.test.ts`
- `extensions/signal/src/install-signal-cli.test.ts`
- `extensions/signal/src/install-signal-cli.ts`
- `extensions/signal/src/message-actions.test.ts`
- `... 另有 31 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/signal/api.ts`
- `extensions/signal/config-api.ts`
- `extensions/signal/openclaw.plugin.json`
- `extensions/signal/package.json`
- `extensions/signal/runtime-api.ts`
- `extensions/signal/src/account-types.ts`
- `extensions/signal/src/channel.ts`
- `extensions/signal/src/client.test.ts`
- `extensions/signal/src/client.ts`
- `extensions/signal/src/core.test.ts`
- `extensions/signal/src/daemon.ts`
- `extensions/signal/src/format.ts`
- `extensions/signal/src/inbound-context.contract.test.ts`
- `extensions/signal/src/install-signal-cli.test.ts`
- `extensions/signal/src/install-signal-cli.ts`
- `extensions/signal/src/message-actions.test.ts`
- `extensions/signal/src/monitor.tool-result.autostart.test.ts`
- `extensions/signal/src/monitor.tool-result.pairs-uuid-only-senders-uuid-allowlist-entry.test.ts`
- `extensions/signal/src/monitor.tool-result.sends-tool-summaries-responseprefix.test.ts`
- `extensions/signal/src/monitor.tool-result.test-harness.ts`
- `extensions/signal/src/monitor.ts`
- `extensions/signal/src/monitor/access-policy.test.ts`
- `extensions/signal/src/monitor/access-policy.ts`
- `extensions/signal/src/monitor/event-handler.inbound-context.test.ts`
- `extensions/signal/src/monitor/event-handler.mention-gating.test.ts`
- `extensions/signal/src/monitor/event-handler.ts`
- `extensions/signal/src/monitor/event-handler.types.ts`
- `extensions/signal/src/monitor/inbound-context.ts`
- `extensions/signal/src/reaction-level.ts`
- `extensions/signal/src/runtime-api.ts`
- `extensions/signal/src/runtime.ts`
- `extensions/signal/src/send-reactions.test.ts`
- `extensions/signal/src/send-reactions.ts`
- `extensions/signal/src/send.ts`
- `extensions/signal/src/setup-core.ts`
- `extensions/signal/src/setup-surface.ts`
- `extensions/signal/src/shared.ts`
- `extensions/signal/src/sse-reconnect.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
