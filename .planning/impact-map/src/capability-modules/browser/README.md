# Browser Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Parent module

- Impact module: `capability-modules/`
- Leaf: `browser/`

## Purpose

Browser bridge server, CDP/Playwright sessions, routes, profiles, screenshots, and browser tool runtime.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-09 G005 verification result

Result: `exceptioned-deep-partial`. Browser tests timed out/failed in this environment; browser remains split-needed before future promotion.

Evidence ledger: `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/SRC-CAPABILITIES-SHARED-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `17` (新增 17).
- Target-existing changed paths listed here: `17`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/browser-lifecycle-cleanup.test.ts`
- `src/browser-lifecycle-cleanup.ts`
- `src/proxy-capture/blob-store.ts`
- `src/proxy-capture/ca.ts`
- `src/proxy-capture/coverage.test.ts`
- `src/proxy-capture/coverage.ts`
- `src/proxy-capture/env.test.ts`
- `src/proxy-capture/env.ts`
- `src/proxy-capture/paths.ts`
- `src/proxy-capture/proxy-server.test.ts`
- `src/proxy-capture/proxy-server.ts`
- `src/proxy-capture/query.ts`
- `... 另有 5 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
