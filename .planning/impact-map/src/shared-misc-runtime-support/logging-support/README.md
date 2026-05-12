# Logging Support Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Parent module

- Impact module: `shared-misc-runtime-support/`
- Leaf: `logging-support/`

## Purpose

Logging support surfaces that do not own a primary runtime flow.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-09 G005 verification result

Result: `verified`. Logging tests passed.

Evidence ledger: `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/SRC-CAPABILITIES-SHARED-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `shared-runtime-support`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `49` (修改 24，新增 25).
- Target-existing changed paths listed here: `49`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/logger.test.ts`
- `src/logging/config.test.ts`
- `src/logging/config.ts`
- `src/logging/console-capture.test.ts`
- `src/logging/console-timestamp.test.ts`
- `src/logging/console.ts`
- `src/logging/diagnostic-log-events.test.ts`
- `src/logging/diagnostic-memory.test.ts`
- `src/logging/diagnostic-memory.ts`
- `src/logging/diagnostic-payload.ts`
- `src/logging/diagnostic-runtime.ts`
- `src/logging/diagnostic-session-state.ts`
- `... 另有 37 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `shared-runtime-support`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `42`
- Target-existing changed paths reflected here: `42`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/logger.test.ts`
- `src/logging/config.test.ts`
- `src/logging/config.ts`
- `src/logging/console-capture.test.ts`
- `src/logging/console.ts`
- `src/logging/diagnostic-log-events.test.ts`
- `src/logging/diagnostic-memory.ts`
- `src/logging/diagnostic-phase.ts`
- `src/logging/diagnostic-run-activity.ts`
- `src/logging/diagnostic-session-attention.test.ts`
- `src/logging/diagnostic-session-attention.ts`
- `src/logging/diagnostic-session-context.test.ts`
- `src/logging/diagnostic-session-context.ts`
- `src/logging/diagnostic-session-state.ts`
- `src/logging/diagnostic-stability-bundle.test.ts`
- `src/logging/diagnostic-stability-bundle.ts`
- `src/logging/diagnostic-stability.test.ts`
- `src/logging/diagnostic-stability.ts`
- `src/logging/diagnostic-stuck-session-recovery.integration.test.ts`
- `src/logging/diagnostic-stuck-session-recovery.runtime.test.ts`
- `src/logging/diagnostic-stuck-session-recovery.runtime.ts`
- `src/logging/diagnostic-support-bundle.test.ts`
- `src/logging/diagnostic-support-bundle.ts`
- `src/logging/diagnostic-support-export.test.ts`
- `src/logging/diagnostic.test.ts`
- `src/logging/diagnostic.ts`
- `src/logging/log-file-path.ts`
- `src/logging/log-file-size-cap.test.ts`
- `src/logging/log-tail.ts`
- `src/logging/logger-env.test.ts`
- `src/logging/logger-redaction-behavior.test.ts`
- `src/logging/logger-settings.test.ts`
- `src/logging/logger-transport.test.ts`
- `src/logging/logger.browser-import.test.ts`
- `src/logging/logger.ts`
- `src/logging/parse-log-line.ts`
- `src/logging/redact-bounded.ts`
- `src/logging/redact.test.ts`
- `src/logging/redact.ts`
- `src/logging/subsystem.test.ts`
- … plus 2 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
