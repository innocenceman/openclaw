# Outbound Actions Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope        | First validation                                                                                                                                                                                                               | Escalation trigger                                                                          | Notes                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | --------------------- |
| `outbound-actions/` | pnpm test -- src/infra/outbound/message-action-spec.test.ts src/infra/outbound/message-action-params.test.ts src/infra/outbound/message-action-runner.threading.test.ts src/infra/outbound/message-action-runner.media.test.ts | Escalate to media/channel tests when message actions alter payload or attachment semantics. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `19` (修改 14，新增 5).
- Target-existing path refs in active map: `19`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/infra/outbound/message-action-params.ts`
- `src/infra/outbound/message-action-runner.core-send.test.ts`
- `src/infra/outbound/message-action-runner.media.test.ts`
- `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts`
- `src/infra/outbound/message-action-runner.test-helpers.ts`
- `src/infra/outbound/message-action-runner.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
