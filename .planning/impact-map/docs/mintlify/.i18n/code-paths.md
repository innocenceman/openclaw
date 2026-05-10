# Docs Support .i18n Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Glossary gate path

1. English docs titles or short labels change.
2. `scripts/check-docs-i18n-glossary.mjs` checks whether glossary coverage is missing.
3. Approved glossary additions land in `docs/.i18n/glossary.*.json` before any rerun of `scripts/docs-i18n`.

## Translation-memory path

1. `scripts/docs-i18n/**` segments source markdown and runs translation jobs.
2. `docs/.i18n/*.tm.jsonl` captures translation-memory cache entries.
3. Generated locale output lands in locale trees such as `docs/zh-CN/**`; Wave 4 recorded the dependency but did not rerun it.

## Trace rule

Treat this leaf as the shared translation-control plane: glossary and TM changes often affect multiple docs categories even when only one English page changed.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `364` changed path(s) to this final leaf. `48` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'R': 3, 'M': 10, 'A': 38, 'D': 313}`.

- `docs/.i18n/README.md`
- `docs/.i18n/glossary.ar.json`
- `docs/.i18n/glossary.de.json`
- `docs/.i18n/glossary.es.json`
- `docs/.i18n/glossary.fr.json`
- `docs/.i18n/glossary.id.json`
- `docs/.i18n/glossary.it.json`
- `docs/.i18n/glossary.ja-JP.json`
- `docs/.i18n/glossary.ko.json`
- `docs/.i18n/glossary.pl.json`
- `docs/.i18n/glossary.pt-BR.json`
- `docs/.i18n/glossary.th.json`
- `docs/.i18n/glossary.tr.json`
- `docs/.i18n/glossary.uk.json`
- `scripts/docs-i18n/behavior_baseline_test.go`
- `scripts/docs-i18n/doc_chunked_raw.go`
- `scripts/docs-i18n/doc_mode_test.go`
- `scripts/docs-i18n/localized_links.go`
- `scripts/docs-i18n/localized_links_test.go`
- `scripts/docs-i18n/main.go`
- `scripts/docs-i18n/main_test.go`
- `scripts/docs-i18n/pi_command.go`
- `scripts/docs-i18n/pi_rpc_client.go`
- `scripts/docs-i18n/pi_rpc_client_test.go`
- `scripts/docs-i18n/process.go`
- `scripts/docs-i18n/prompt.go`
- `scripts/docs-i18n/relocalize.go`
- `scripts/docs-i18n/relocalize_test.go`
- `scripts/docs-i18n/testdata/behavior/fenced-singleton-retry/case.json`
- `scripts/docs-i18n/testdata/behavior/fenced-singleton-retry/raw-malformed.txt`
- `... 另有 18 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
