# Outbound Routing Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `infra-outbound-delivery/`
- Leaf: `outbound-routing/`

## Purpose

Channel selection, target resolution, session binding, and outbound policy.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `infra-outbound-delivery`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `18` (删除 2，新增 3，修改 13).
- Target-existing changed paths listed here: `16`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `2`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/infra/outbound/channel-bootstrap.runtime.ts`
- `src/infra/outbound/channel-resolution.test.ts`
- `src/infra/outbound/channel-resolution.ts`
- `src/infra/outbound/channel-selection.runtime.ts`
- `src/infra/outbound/channel-selection.test.ts`
- `src/infra/outbound/channel-selection.ts`
- `src/infra/outbound/channel-target.ts`
- `src/infra/outbound/outbound-policy.test.ts`
- `src/infra/outbound/outbound-policy.ts`
- `src/infra/outbound/session-binding-service.test.ts`
- `src/infra/outbound/session-binding-service.ts`
- `src/infra/outbound/target-id-resolution.ts`
- `... 另有 4 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
