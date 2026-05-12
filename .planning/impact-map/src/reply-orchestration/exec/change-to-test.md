# Exec Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Change scope | First validation                                                                                                                           | Escalation trigger                                                                     | Notes                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | --------------------- |
| `exec/`      | No dedicated src/auto-reply/reply/exec/\*.test.ts was observed; start with nearest reply command test plus sandbox/media staging coverage. | Escalate to agents or sandbox tests when exec helpers change command/runtime behavior. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `22` (修改 19，新增 3).
- Target-existing path refs in active map: `22`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/auto-reply/reply/bash-command.ts`
- `src/auto-reply/reply/directive-handling.auth.test.ts`
- `src/auto-reply/reply/directive-handling.auth.ts`
- `src/auto-reply/reply/directive-handling.fast-lane.ts`
- `src/auto-reply/reply/directive-handling.impl.ts`
- `src/auto-reply/reply/directive-handling.levels.test.ts`
- `src/auto-reply/reply/directive-handling.levels.ts`
- `src/auto-reply/reply/directive-handling.mixed-inline.test.ts`
- `src/auto-reply/reply/directive-handling.model-selection.ts`
- `src/auto-reply/reply/directive-handling.model.test.ts`
- `src/auto-reply/reply/directive-handling.model.ts`
- `src/auto-reply/reply/directive-handling.params.ts`
- `src/auto-reply/reply/directive-handling.persist.ts`
- `src/auto-reply/reply/directive-handling.queue-validation.test.ts`
- `src/auto-reply/reply/directive-handling.queue-validation.ts`
- `src/auto-reply/reply/directive-handling.shared.ts`
- `src/auto-reply/reply/directive-handling.ts`
- `src/auto-reply/reply/directives.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
