# Docs I18n Markdown Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Parent module

- Impact module: `shared-misc-runtime-support/`
- Leaf: `docs-i18n-markdown/`

## Purpose

Local docs helpers, i18n utilities, and Markdown support under `src/`.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-09 G005 verification result

Result: `verified`. Docs/i18n/markdown tests passed.

Evidence ledger: `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/SRC-CAPABILITIES-SHARED-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `shared-runtime-support`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `19` (新增 11，修改 6，删除 2).
- Target-existing changed paths listed here: `17`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `2`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/docs/clawhub-plugin-docs.test.ts`
- `src/docs/install-cloud-secrets.test.ts`
- `src/i18n/registry.test.ts`
- `src/markdown/ir.table-block.test.ts`
- `src/markdown/ir.ts`
- `src/markdown/render-aware-chunking.test.ts`
- `src/markdown/render-aware-chunking.ts`
- `src/markdown/tables.test.ts`
- `src/markdown/tables.ts`
- `src/scripts/canvas-a2ui-copy.test.ts`
- `src/scripts/ci-changed-scope.test.ts`
- `src/scripts/docs-link-audit.test.ts`
- `... 另有 5 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
