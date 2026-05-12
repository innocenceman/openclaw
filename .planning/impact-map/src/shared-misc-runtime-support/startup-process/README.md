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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `shared-runtime-support`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `fallback`
- Changed paths in diff: `69`
- Target-existing changed paths reflected here: `67`
- Deleted or renamed-away paths omitted from active impact-map: `2`

### Target-version changed paths

- `src/daemon/arg-split.ts`
- `src/daemon/cmd-argv.ts`
- `src/daemon/cmd-set.ts`
- `src/daemon/constants.ts`
- `src/daemon/exec-file.ts`
- `src/daemon/future-config-guard.ts`
- `src/daemon/inspect.test.ts`
- `src/daemon/inspect.ts`
- `src/daemon/launchd-plist.ts`
- `src/daemon/launchd-restart-handoff.test.ts`
- `src/daemon/launchd-restart-handoff.ts`
- `src/daemon/launchd.integration.e2e.test.ts`
- `src/daemon/launchd.test.ts`
- `src/daemon/launchd.ts`
- `src/daemon/paths.ts`
- `src/daemon/program-args.test.ts`
- `src/daemon/program-args.ts`
- `src/daemon/runtime-format.test.ts`
- `src/daemon/runtime-format.ts`
- `src/daemon/runtime-paths.test.ts`
- `src/daemon/runtime-paths.ts`
- `src/daemon/schtasks.install.test.ts`
- `src/daemon/schtasks.test.ts`
- `src/daemon/schtasks.ts`
- `src/daemon/service-audit.test.ts`
- `src/daemon/service-audit.ts`
- `src/daemon/service-env-plan.ts`
- `src/daemon/service-env-render-policy.ts`
- `src/daemon/service-env.test.ts`
- `src/daemon/service-env.ts`
- `src/daemon/service-layout.ts`
- `src/daemon/service-managed-env.ts`
- `src/daemon/service-path-policy.ts`
- `src/daemon/service-runtime.ts`
- `src/daemon/service-types.ts`
- `src/daemon/service.test.ts`
- `src/daemon/service.ts`
- `src/daemon/systemd-hints.test.ts`
- `src/daemon/systemd-linger.ts`
- `src/daemon/systemd-unavailable.test.ts`
- … plus 27 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
