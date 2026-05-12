# Core Abstractions Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope         | First validation                                                                                                                               | Escalation trigger                                                    | Notes                 |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------- |
| `core-abstractions/` | pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `59` (重命名/移动 1，修改 42，新增 13，删除 3).
- Target-existing path refs in active map: `55`; deleted/renamed-away refs kept only in transition artifacts: `4`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/channels/account-snapshot-fields.test.ts`
- `src/channels/account-snapshot-fields.ts`
- `src/channels/ack-reactions.test.ts`
- `src/channels/ack-reactions.ts`
- `src/channels/allow-from.ts`
- `src/channels/bundled-channel-catalog-read.fail-soft.test.ts`
- `src/channels/bundled-channel-catalog-read.test.ts`
- `src/channels/bundled-channel-catalog-read.ts`
- `src/channels/channels-misc.test.ts`
- `src/channels/config-presence.test.ts`
- `src/channels/config-presence.ts`
- `src/channels/conversation-binding-context.ts`
- `src/channels/conversation-resolution.test.ts`
- `src/channels/conversation-resolution.ts`
- `src/channels/ids.test.ts`
- `src/channels/registry-normalize.ts`
- `src/channels/registry.ts`
- `src/channels/run-state-machine.ts`
- `src/channels/session.test.ts`
- `src/channels/session.ts`
- `src/channels/session.types.ts`
- `src/channels/status-reactions.slack-lifecycle.test.ts`
- `src/channels/status-reactions.test.ts`
- `src/channels/status-reactions.ts`
- `src/channels/thread-bindings-policy.test.ts`
- `src/channels/thread-bindings-policy.ts`
- `src/channels/turn/context.test.ts`
- `src/channels/turn/context.ts`
- `src/channels/turn/dispatch-result.ts`
- `src/channels/turn/kernel.test.ts`
- `src/channels/turn/kernel.ts`
- `src/channels/turn/types.ts`
- `src/channels/typing-lifecycle.ts`
- `src/channels/typing-start-guard.ts`
- `src/channels/typing.test.ts`
- `src/channels/typing.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
