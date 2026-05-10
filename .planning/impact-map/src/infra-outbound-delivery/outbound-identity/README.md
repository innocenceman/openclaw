# Outbound Identity Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `infra-outbound-delivery/`
- Leaf: `outbound-identity/`

## Purpose

Identity, conversation-id, base session key, outbound session, and cache helpers.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `infra-outbound-delivery`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `9` (修改 8，新增 1).
- Target-existing changed paths listed here: `9`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/infra/outbound/base-session-key.ts`
- `src/infra/outbound/conversation-id.ts`
- `src/infra/outbound/directory-cache.test.ts`
- `src/infra/outbound/directory-cache.ts`
- `src/infra/outbound/identity.test.ts`
- `src/infra/outbound/identity.ts`
- `src/infra/outbound/outbound-session.test-helpers.ts`
- `src/infra/outbound/outbound-session.test.ts`
- `src/infra/outbound/outbound-session.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
