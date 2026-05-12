# Cron Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Parent module

- Impact module: `capability-modules/`
- Leaf: `cron/`

## Purpose

Cron scheduler, isolated-agent runs, store/timer management, and heartbeat delivery.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-09 G005 verification result

Result: `verified`. Full cron/context/tts command passed across 73 filters.

Evidence ledger: `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/SRC-CAPABILITIES-SHARED-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `135` (重命名/移动 3，新增 52，修改 71，删除 9).
- Target-existing changed paths listed here: `123`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `12`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/cron/active-jobs.ts`
- `src/cron/delivery-field-schemas.ts`
- `src/cron/delivery-plan.test.ts`
- `src/cron/delivery-plan.ts`
- `src/cron/delivery-preview.ts`
- `src/cron/delivery.failure-notify.test.ts`
- `src/cron/delivery.test-helpers.ts`
- `src/cron/delivery.test.ts`
- `src/cron/delivery.ts`
- `src/cron/isolated-agent.auth-profile-propagation.test.ts`
- `src/cron/isolated-agent.delivery.test-helpers.ts`
- `src/cron/isolated-agent.direct-delivery-core-channels.test.ts`
- `... 另有 111 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `memory-media-ui`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `107`
- Target-existing changed paths reflected here: `107`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/cron/active-jobs.ts`
- `src/cron/cron-protocol-conformance.test.ts`
- `src/cron/cron-protocol-schema.test.ts`
- `src/cron/delivery-field-schemas.ts`
- `src/cron/delivery-plan.ts`
- `src/cron/delivery-preview.test.ts`
- `src/cron/delivery-preview.ts`
- `src/cron/delivery.failure-notify.test.ts`
- `src/cron/delivery.test.ts`
- `src/cron/delivery.ts`
- `src/cron/heartbeat-policy.ts`
- `src/cron/isolated-agent.delivery-awareness.test.ts`
- `src/cron/isolated-agent.direct-delivery-core-channels.test.ts`
- `src/cron/isolated-agent.helpers.test.ts`
- `src/cron/isolated-agent.lane.test.ts`
- `src/cron/isolated-agent.model-formatting.test.ts`
- `src/cron/isolated-agent.model-overrides.test.ts`
- `src/cron/isolated-agent.model-preflight.test.ts`
- `src/cron/isolated-agent.session-identity.test.ts`
- `src/cron/isolated-agent.test-harness.ts`
- `src/cron/isolated-agent.turn-test-helpers.ts`
- `src/cron/isolated-agent/channel-output-policy.ts`
- `src/cron/isolated-agent/delivery-dispatch.double-announce.test.ts`
- `src/cron/isolated-agent/delivery-dispatch.ts`
- `src/cron/isolated-agent/delivery-target.runtime.ts`
- `src/cron/isolated-agent/delivery-target.test.ts`
- `src/cron/isolated-agent/delivery-target.ts`
- `src/cron/isolated-agent/helpers.ts`
- `src/cron/isolated-agent/model-preflight.runtime.test.ts`
- `src/cron/isolated-agent/model-preflight.runtime.ts`
- `src/cron/isolated-agent/model-selection.ts`
- `src/cron/isolated-agent/run-embedded.runtime.ts`
- `src/cron/isolated-agent/run-execution.runtime.ts`
- `src/cron/isolated-agent/run-executor.ts`
- `src/cron/isolated-agent/run-fallback-policy.test.ts`
- `src/cron/isolated-agent/run-fallback-policy.ts`
- `src/cron/isolated-agent/run-session-state.test.ts`
- `src/cron/isolated-agent/run-session-state.ts`
- `src/cron/isolated-agent/run.cron-model-override-forwarding.test.ts`
- `src/cron/isolated-agent/run.interim-retry.test.ts`
- … plus 67 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
