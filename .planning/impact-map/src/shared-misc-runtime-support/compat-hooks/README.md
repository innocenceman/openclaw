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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `shared-runtime-support`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `27`
- Target-existing changed paths reflected here: `27`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/compat/legacy-names.ts`
- `src/hooks/bundled/README.md`
- `src/hooks/bundled/boot-md/handler.test.ts`
- `src/hooks/bundled/boot-md/handler.ts`
- `src/hooks/bundled/compaction-notifier/HOOK.md`
- `src/hooks/bundled/compaction-notifier/handler.ts`
- `src/hooks/bundled/session-memory/HOOK.md`
- `src/hooks/bundled/session-memory/handler.test.ts`
- `src/hooks/bundled/session-memory/handler.ts`
- `src/hooks/bundled/session-memory/transcript.ts`
- `src/hooks/config.ts`
- `src/hooks/gmail-ops.ts`
- `src/hooks/gmail-setup-utils.test.ts`
- `src/hooks/gmail-setup-utils.ts`
- `src/hooks/gmail-watcher.ts`
- `src/hooks/gmail.ts`
- `src/hooks/hooks.ts`
- `src/hooks/install.test.ts`
- `src/hooks/llm-slug-generator.test.ts`
- `src/hooks/llm-slug-generator.ts`
- `src/hooks/loader.ts`
- `src/hooks/message-hook-mappers.test.ts`
- `src/hooks/message-hook-mappers.ts`
- `src/hooks/plugin-hooks.ts`
- `src/hooks/policy.ts`
- `src/hooks/types.ts`
- `src/hooks/workspace.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
