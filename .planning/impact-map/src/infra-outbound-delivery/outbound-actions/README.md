# Outbound Actions Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `infra-outbound-delivery/`
- Leaf: `outbound-actions/`

## Purpose

Message action specs, params, normalization, runner, and threading helpers.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `infra-outbound-delivery`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `19` (修改 14，新增 5).
- Target-existing changed paths listed here: `19`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/infra/outbound/message-action-normalization.test.ts`
- `src/infra/outbound/message-action-normalization.ts`
- `src/infra/outbound/message-action-param-keys.ts`
- `src/infra/outbound/message-action-params.test.ts`
- `src/infra/outbound/message-action-params.ts`
- `src/infra/outbound/message-action-runner.context.test.ts`
- `src/infra/outbound/message-action-runner.core-send.test.ts`
- `src/infra/outbound/message-action-runner.media.test.ts`
- `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts`
- `src/infra/outbound/message-action-runner.poll.test.ts`
- `src/infra/outbound/message-action-runner.send-validation.test.ts`
- `src/infra/outbound/message-action-runner.test-helpers.ts`
- `... 另有 7 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `infra-outbound-delivery`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `6`
- Target-existing changed paths reflected here: `6`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/infra/outbound/message-action-params.ts`
- `src/infra/outbound/message-action-runner.core-send.test.ts`
- `src/infra/outbound/message-action-runner.media.test.ts`
- `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts`
- `src/infra/outbound/message-action-runner.test-helpers.ts`
- `src/infra/outbound/message-action-runner.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
