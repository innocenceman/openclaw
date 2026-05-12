# Sessions Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `config-secrets-security/`
- Leaf: `sessions/`

## Purpose

Session config defaults, main session state, and session-path helpers.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `53` (新增 20，修改 32，删除 1).
- Target-existing changed paths listed here: `52`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 40 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `gateway-config-security`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `42`
- Target-existing changed paths reflected here: `40`
- Deleted or renamed-away paths omitted from active impact-map: `2`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
