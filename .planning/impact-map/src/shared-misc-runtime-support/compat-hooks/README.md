# Compat Hooks Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Parent module

- Impact module: `shared-misc-runtime-support/`
- Leaf: `compat-hooks/`

## Purpose

Compatibility helpers and workspace hook integration.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-09 G005 verification result

Result: `verified`. All hooks tests passed.

Evidence ledger: `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/SRC-CAPABILITIES-SHARED-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `shared-runtime-support`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `41` (新增 6，修改 35).
- Target-existing changed paths listed here: `41`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/compat/legacy-names.test.ts`
- `src/compat/legacy-names.ts`
- `src/hooks/bundled/boot-md/handler.test.ts`
- `src/hooks/bundled/boot-md/handler.ts`
- `src/hooks/bundled/bootstrap-extra-files/HOOK.md`
- `src/hooks/bundled/bootstrap-extra-files/handler.ts`
- `src/hooks/bundled/command-logger/handler.ts`
- `src/hooks/bundled/session-memory/handler.test.ts`
- `src/hooks/bundled/session-memory/handler.ts`
- `src/hooks/bundled/session-memory/transcript.ts`
- `src/hooks/configured.ts`
- `src/hooks/fire-and-forget.test.ts`
- `... 另有 29 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
