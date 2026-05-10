# Network Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `infra-outbound-delivery/`
- Leaf: `network/`

## Purpose

Proxy, SSRF, hostname, and fetch/runtime dispatcher helpers.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `infra-outbound-delivery`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `13` (修改 10，新增 3).
- Target-existing changed paths listed here: `13`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/infra/net/fetch-guard.ssrf.test.ts`
- `src/infra/net/fetch-guard.ts`
- `src/infra/net/hostname.ts`
- `src/infra/net/proxy-env.test.ts`
- `src/infra/net/proxy-env.ts`
- `src/infra/net/proxy-fetch.test.ts`
- `src/infra/net/proxy-fetch.ts`
- `src/infra/net/redirect-headers.ts`
- `src/infra/net/runtime-fetch.test.ts`
- `src/infra/net/runtime-fetch.ts`
- `src/infra/net/undici-global-dispatcher.test.ts`
- `src/infra/net/undici-global-dispatcher.ts`
- `... 另有 1 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
