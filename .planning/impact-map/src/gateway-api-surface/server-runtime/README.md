# Server Runtime Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Parent module

- Impact module: `gateway-api-surface/`
- Leaf: `server-runtime/`

## Purpose

Gateway startup/shutdown, HTTP serving, control UI, and channel health runtime.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `21` (修改 19，新增 2).
- Target-existing changed paths listed here: `21`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/gateway/boot.ts`
- `src/gateway/channel-health-monitor.test.ts`
- `src/gateway/channel-health-monitor.ts`
- `src/gateway/channel-health-policy.test.ts`
- `src/gateway/channel-health-policy.ts`
- `src/gateway/control-ui-contract.ts`
- `src/gateway/control-ui-csp.test.ts`
- `src/gateway/control-ui-csp.ts`
- `src/gateway/control-ui-links.ts`
- `src/gateway/control-ui.auto-root.http.test.ts`
- `src/gateway/control-ui.http.test.ts`
- `src/gateway/control-ui.ts`
- `... 另有 9 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `gateway-config-security`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `20`
- Target-existing changed paths reflected here: `20`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/gateway/channel-health-monitor.test.ts`
- `src/gateway/channel-health-monitor.ts`
- `src/gateway/channel-health-policy.test.ts`
- `src/gateway/channel-health-policy.ts`
- `src/gateway/control-ui-assistant-media.e2e.test.ts`
- `src/gateway/control-ui-contract.ts`
- `src/gateway/control-ui-csp.test.ts`
- `src/gateway/control-ui-csp.ts`
- `src/gateway/control-ui-links.ts`
- `src/gateway/control-ui-routing.ts`
- `src/gateway/control-ui.http.test.ts`
- `src/gateway/control-ui.ts`
- `src/gateway/server-close.runtime.ts`
- `src/gateway/server-close.test.ts`
- `src/gateway/server-close.ts`
- `src/gateway/server-http.probe.test.ts`
- `src/gateway/server-http.request-trace.test.ts`
- `src/gateway/server-http.test-harness.ts`
- `src/gateway/server-http.ts`
- `src/infra/ports.test.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
