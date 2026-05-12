# signal Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                          | First validation                                                                                                                                                                                          | Escalation trigger                                                                                              |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Manifest/package/entry changed       | `pnpm test:contracts:channels` plus `pnpm test -- extensions/signal/src/core.test.ts`                                                                                                                     | `pnpm build` is required if package exports, runtime API, or lazy runtime boundaries change.                    |
| Setup/binary/account config changed  | `pnpm test -- extensions/signal/src/core.test.ts` plus targeted inspection of `extensions/signal/src/setup-core.ts` / `src/setup-surface.ts`                                                              | Add setup/UI/docs checks if user-facing prompts, docs labels, binary install behavior, or config fields change. |
| REST/RPC client/probe changed        | `pnpm test -- extensions/signal/src/client.test.ts extensions/signal/src/core.test.ts`                                                                                                                    | Escalate to monitor/send/reaction tests if request/response/error mapping changes shared client behavior.       |
| Monitor lifecycle/daemon/SSE changed | `pnpm test -- extensions/signal/src/monitor.test.ts extensions/signal/src/monitor.tool-result.autostart.test.ts`                                                                                          | Escalate to integration smoke when daemon process lifecycle or reconnect policy changes.                        |
| Inbound access policy changed        | `pnpm test -- extensions/signal/src/monitor/access-policy.test.ts extensions/signal/src/monitor/event-handler.inbound-context.test.ts extensions/signal/src/monitor/event-handler.mention-gating.test.ts` | Add shared pairing/allowlist/group-policy tests when semantics should align across channels.                    |
| Tool-result inbound behavior changed | `pnpm test -- extensions/signal/src/monitor.tool-result.sends-tool-summaries-responseprefix.test.ts extensions/signal/src/monitor.tool-result.pairs-uuid-only-senders-uuid-allowlist-entry.test.ts`       | Escalate to auto-reply/command-gating tests if dispatch or response prefix behavior changes.                    |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Promote beyond `deep-partial` only after recording dated command output for the affected paths.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `69` (修改 41，新增 18，删除 8，重命名/移动 2).
- Target-existing path refs in active map: `61`; deleted/renamed-away refs kept only in transition artifacts: `8`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
