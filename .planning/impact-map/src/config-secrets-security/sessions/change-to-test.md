# Sessions Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope | First validation                                                                                                                    | Escalation trigger                                                                         | Notes                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------- |
| `sessions/`  | No dedicated src/sessions/\*.test.ts was observed; start with nearest session-config or routing/session tests for the touched file. | Escalate to routing, auto-reply, or gateway tests when session identity semantics broaden. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `53` (新增 20，修改 32，删除 1).
- Target-existing path refs in active map: `52`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/config/sessions/artifacts.test.ts`
- `src/config/sessions/artifacts.ts`
- `src/config/sessions/cleanup-service.ts`
- `src/config/sessions/combined-store-gateway.ts`
- `src/config/sessions/delivery-info.test.ts`
- `src/config/sessions/delivery-info.ts`
- `src/config/sessions/disk-budget.test.ts`
- `src/config/sessions/disk-budget.ts`
- `src/config/sessions/lifecycle.ts`
- `src/config/sessions/main-session.runtime.ts`
- `src/config/sessions/metadata.ts`
- `src/config/sessions/paths.ts`
- `src/config/sessions/reset-policy.ts`
- `src/config/sessions/runtime-types.ts`
- `src/config/sessions/session-file.ts`
- `src/config/sessions/session-key.test.ts`
- `src/config/sessions/session-key.ts`
- `src/config/sessions/sessions.test.ts`
- `src/config/sessions/store-cache.ts`
- `src/config/sessions/store-load.ts`
- `src/config/sessions/store-maintenance-runtime.ts`
- `src/config/sessions/store-maintenance.ts`
- `src/config/sessions/store-migrations.ts`
- `src/config/sessions/store-writer-state.ts`
- `src/config/sessions/store-writer.test.ts`
- `src/config/sessions/store-writer.ts`
- `src/config/sessions/store.pruning.integration.test.ts`
- `src/config/sessions/store.pruning.test.ts`
- `src/config/sessions/store.skills-stripping.test.ts`
- `src/config/sessions/store.ts`
- `src/config/sessions/targets.test.ts`
- `src/config/sessions/targets.ts`
- `src/config/sessions/transcript-append.ts`
- `src/config/sessions/transcript.test.ts`
- `src/config/sessions/transcript.ts`
- `src/config/sessions/types.ts`
- `src/sessions/input-provenance.test.ts`
- `src/sessions/input-provenance.ts`
- `src/sessions/level-overrides.ts`
- `src/sessions/session-lifecycle-events.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
