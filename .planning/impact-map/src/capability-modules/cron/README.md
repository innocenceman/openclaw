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
