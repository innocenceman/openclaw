# Plugin Bridge Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `channel-abstraction/`
- Leaf: `plugin-bridge/`

## Purpose

Plugin-backed channel catalog, registry, setup/status helpers, contracts, outbound helpers, and runtime forwarders.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `11` (修改 4，新增 7).
- Target-existing changed paths listed here: `11`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/mcp/channel-bridge.ts`
- `src/mcp/channel-server.shutdown-unhandled-rejection.test.ts`
- `src/mcp/channel-server.test.ts`
- `src/mcp/channel-server.ts`
- `src/mcp/channel-shared.ts`
- `src/mcp/openclaw-tools-serve.test.ts`
- `src/mcp/openclaw-tools-serve.ts`
- `src/mcp/plugin-tools-handlers.ts`
- `src/mcp/plugin-tools-serve.test.ts`
- `src/mcp/plugin-tools-serve.ts`
- `src/mcp/tools-stdio-server.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
