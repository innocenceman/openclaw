# Client Call Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `gateway-api-surface/`
- Leaf: `client-call/`

## Purpose

Gateway client wrappers and RPC call helpers used by CLI/app callers.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `9` (新增 3，修改 6).
- Target-existing changed paths listed here: `9`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/cli/gateway-rpc.runtime.ts`
- `src/cli/gateway-rpc.ts`
- `src/cli/gateway-rpc.types.ts`
- `src/gateway/call.runtime.ts`
- `src/gateway/call.test.ts`
- `src/gateway/call.ts`
- `src/gateway/client.test.ts`
- `src/gateway/client.ts`
- `src/gateway/client.watchdog.test.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
