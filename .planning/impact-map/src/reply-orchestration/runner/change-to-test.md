# Runner Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Change scope | First validation                                                                                                                                                                     | Escalation trigger                                                                                   | Notes                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------ |
| `runner/`    | pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `230` (重命名/移动 4，修改 146，新增 69，删除 11).
- Target-existing path refs in active map: `216`; deleted/renamed-away refs kept only in transition artifacts: `14`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/auto-reply/command-control.test.ts`
- `src/auto-reply/command-status-builders.ts`
- `src/auto-reply/dispatch-dispatcher.ts`
- `src/auto-reply/dispatch.test.ts`
- `src/auto-reply/dispatch.ts`
- `src/auto-reply/fallback-state.ts`
- `src/auto-reply/get-reply-options.types.ts`
- `src/auto-reply/inbound.test.ts`
- `src/auto-reply/media-understanding.test-fixtures.ts`
- `src/auto-reply/model.test.ts`
- `src/auto-reply/reply-payload.ts`
- `src/auto-reply/reply/acp-projector.test.ts`
- `src/auto-reply/reply/acp-projector.ts`
- `src/auto-reply/reply/acp-stream-settings.ts`
- `src/auto-reply/reply/agent-runner-direct-runtime-config.test.ts`
- `src/auto-reply/reply/agent-runner-execution.test.ts`
- `src/auto-reply/reply/agent-runner-execution.ts`
- `src/auto-reply/reply/agent-runner-helpers.test.ts`
- `src/auto-reply/reply/agent-runner-helpers.ts`
- `src/auto-reply/reply/agent-runner-memory.test.ts`
- `src/auto-reply/reply/agent-runner-memory.ts`
- `src/auto-reply/reply/agent-runner-payloads.test.ts`
- `src/auto-reply/reply/agent-runner-payloads.ts`
- `src/auto-reply/reply/agent-runner-reminder-guard.ts`
- `src/auto-reply/reply/agent-runner-run-params.ts`
- `src/auto-reply/reply/agent-runner-runtime-config.test.ts`
- `src/auto-reply/reply/agent-runner-session-reset.ts`
- `src/auto-reply/reply/agent-runner-utils.test.ts`
- `src/auto-reply/reply/agent-runner-utils.ts`
- `src/auto-reply/reply/agent-runner.media-paths.test.ts`
- `src/auto-reply/reply/agent-runner.misc.runreplyagent.test.ts`
- `src/auto-reply/reply/agent-runner.runreplyagent.e2e.test.ts`
- `src/auto-reply/reply/agent-runner.ts`
- `src/auto-reply/reply/body.ts`
- `src/auto-reply/reply/dispatch-acp-attachments.ts`
- `src/auto-reply/reply/dispatch-acp-command-bypass.test.ts`
- `src/auto-reply/reply/dispatch-acp-command-bypass.ts`
- `src/auto-reply/reply/dispatch-acp-delivery.test.ts`
- `src/auto-reply/reply/dispatch-acp-delivery.ts`
- `src/auto-reply/reply/dispatch-acp-transcript.runtime.ts`
- … plus 97 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
