# Sessions Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/config/sessions/**`, `src/sessions/**`
- Runtime handoff: Session config and storage paths feed routing/reply/runtime state before delivery or command handling.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `53` changed path(s) to this final leaf. `52` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 20, 'M': 32, 'D': 1}`.

- `src/config/sessions/combined-store-gateway.ts`
- `src/config/sessions/delivery-info.test.ts`
- `src/config/sessions/delivery-info.ts`
- `src/config/sessions/disk-budget.test.ts`
- `src/config/sessions/disk-budget.ts`
- `src/config/sessions/explicit-session-key-normalization.test.ts`
- `src/config/sessions/explicit-session-key-normalization.ts`
- `src/config/sessions/group.ts`
- `src/config/sessions/inbound.runtime.ts`
- `src/config/sessions/main-session.ts`
- `src/config/sessions/metadata.ts`
- `src/config/sessions/paths.ts`
- `src/config/sessions/reset-policy.ts`
- `src/config/sessions/reset-preserved-selection.ts`
- `src/config/sessions/reset.test.ts`
- `src/config/sessions/reset.ts`
- `src/config/sessions/runtime-types.ts`
- `src/config/sessions/session-file.ts`
- `src/config/sessions/session-key.test-helpers.ts`
- `src/config/sessions/session-key.test.ts`
- `src/config/sessions/sessions.test.ts`
- `src/config/sessions/store-entry.ts`
- `src/config/sessions/store-load.ts`
- `src/config/sessions/store-lock-state.ts`
- `src/config/sessions/store-maintenance-runtime.ts`
- `src/config/sessions/store-maintenance.ts`
- `src/config/sessions/store-read.test.ts`
- `src/config/sessions/store.pruning.integration.test.ts`
- `src/config/sessions/store.pruning.test.ts`
- `... 另有 22 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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

Deleted or renamed-away paths omitted from this active leaf: `2`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
