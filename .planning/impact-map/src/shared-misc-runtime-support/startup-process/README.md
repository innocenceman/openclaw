# Startup Process Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Parent module

- Impact module: `shared-misc-runtime-support/`
- Leaf: `startup-process/`

## Purpose

Bootstrap, daemon, process, and node-host runtime support.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-09 G005 verification result

Result: `exceptioned-deep-partial`. Bootstrap/node-host/process tests passed, but daemon unit suite failed; startup-process remains exceptioned.

Evidence ledger: `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/SRC-CAPABILITIES-SHARED-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `shared-runtime-support`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `77` (修改 68，新增 9).
- Target-existing changed paths listed here: `77`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/daemon/constants.test.ts`
- `src/daemon/constants.ts`
- `src/daemon/container-context.ts`
- `src/daemon/diagnostics.ts`
- `src/daemon/exec-file.ts`
- `src/daemon/gateway-entrypoint.ts`
- `src/daemon/inspect.test.ts`
- `src/daemon/inspect.ts`
- `src/daemon/launchd-restart-handoff.test.ts`
- `src/daemon/launchd-restart-handoff.ts`
- `src/daemon/launchd.integration.e2e.test.ts`
- `src/daemon/launchd.test.ts`
- `... 另有 65 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
