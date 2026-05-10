# Scripts docs-i18n

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `scripts/docs-i18n/**`.

## Observed facts

- 20 files observed in `scripts/docs-i18n/`.
- Sample files:
- `scripts/docs-i18n/doc_mode.go`
- `scripts/docs-i18n/glossary.go`
- `scripts/docs-i18n/go.mod`
- `scripts/docs-i18n/go.sum`
- `scripts/docs-i18n/html_translate.go`
- No direct root `package.json` script values pointed at this directory during Wave 4 inspection; usage is via direct invocation, adjacent wrappers, or imports.

## Incoming dependencies

- English docs/glossary changes flow into this pipeline when a locale rerun is intentionally requested.

## Outgoing dependencies

- Generated locale output and translation-memory artifacts live under `docs/zh-CN/**` and `docs/.i18n/**`.

## Risk triggers

- Renaming scripts without updating root wrappers or docs examples.
- Changing helper semantics that multiple wrappers or CI flows assume.

## Validation status

Wave 4 did not execute packaging/release/install/live environment actions for this leaf. Coverage is based on repo-native inspection of script files, wrapper references, and root package-script wiring.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `build-ci-tests`.
- Risk: `medium`.
- Compatibility: `compatible`.
- Changed paths in this leaf: `2` (修改 2).
- Target-existing changed paths listed here: `2`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `scripts/docs-i18n/doc_mode.go`
- `scripts/docs-i18n/html_translate.go`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
