# Web UI i18n

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## Scope

Leaf module for `ui/src/i18n/**`.

## Leaf status

This leaf owns locale registration, lazy locale loading, translation resource files, and the closest translation test.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `56` (新增 47，修改 9).
- Target-existing changed paths listed here: `56`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `ui/src/i18n/.i18n/de.meta.json`
- `ui/src/i18n/.i18n/de.tm.jsonl`
- `ui/src/i18n/.i18n/es.meta.json`
- `ui/src/i18n/.i18n/es.tm.jsonl`
- `ui/src/i18n/.i18n/fr.meta.json`
- `ui/src/i18n/.i18n/fr.tm.jsonl`
- `ui/src/i18n/.i18n/glossary.de.json`
- `ui/src/i18n/.i18n/glossary.es.json`
- `ui/src/i18n/.i18n/glossary.fr.json`
- `ui/src/i18n/.i18n/glossary.id.json`
- `ui/src/i18n/.i18n/glossary.ja-JP.json`
- `ui/src/i18n/.i18n/glossary.ko.json`
- `... 另有 44 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `memory-media-ui`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `64`
- Target-existing changed paths reflected here: `64`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `ui/src/i18n/.i18n/ar.meta.json`
- `ui/src/i18n/.i18n/ar.tm.jsonl`
- `ui/src/i18n/.i18n/de.meta.json`
- `ui/src/i18n/.i18n/de.tm.jsonl`
- `ui/src/i18n/.i18n/es.meta.json`
- `ui/src/i18n/.i18n/es.tm.jsonl`
- `ui/src/i18n/.i18n/fa.meta.json`
- `ui/src/i18n/.i18n/fa.tm.jsonl`
- `ui/src/i18n/.i18n/fr.meta.json`
- `ui/src/i18n/.i18n/fr.tm.jsonl`
- `ui/src/i18n/.i18n/glossary.ar.json`
- `ui/src/i18n/.i18n/glossary.fa.json`
- `ui/src/i18n/.i18n/glossary.it.json`
- `ui/src/i18n/.i18n/glossary.nl.json`
- `ui/src/i18n/.i18n/glossary.vi.json`
- `ui/src/i18n/.i18n/id.meta.json`
- `ui/src/i18n/.i18n/id.tm.jsonl`
- `ui/src/i18n/.i18n/it.meta.json`
- `ui/src/i18n/.i18n/it.tm.jsonl`
- `ui/src/i18n/.i18n/ja-JP.meta.json`
- `ui/src/i18n/.i18n/ja-JP.tm.jsonl`
- `ui/src/i18n/.i18n/ko.meta.json`
- `ui/src/i18n/.i18n/ko.tm.jsonl`
- `ui/src/i18n/.i18n/nl.meta.json`
- `ui/src/i18n/.i18n/nl.tm.jsonl`
- `ui/src/i18n/.i18n/pl.meta.json`
- `ui/src/i18n/.i18n/pl.tm.jsonl`
- `ui/src/i18n/.i18n/pt-BR.meta.json`
- `ui/src/i18n/.i18n/pt-BR.tm.jsonl`
- `ui/src/i18n/.i18n/raw-copy-baseline.json`
- `ui/src/i18n/.i18n/th.meta.json`
- `ui/src/i18n/.i18n/th.tm.jsonl`
- `ui/src/i18n/.i18n/tr.meta.json`
- `ui/src/i18n/.i18n/tr.tm.jsonl`
- `ui/src/i18n/.i18n/uk.meta.json`
- `ui/src/i18n/.i18n/uk.tm.jsonl`
- `ui/src/i18n/.i18n/vi.meta.json`
- `ui/src/i18n/.i18n/vi.tm.jsonl`
- `ui/src/i18n/.i18n/zh-CN.meta.json`
- `ui/src/i18n/.i18n/zh-CN.tm.jsonl`
- … plus 24 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
