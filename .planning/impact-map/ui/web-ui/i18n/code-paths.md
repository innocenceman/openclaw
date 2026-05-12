# Web UI i18n Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path                        | Trace start                                                         | Likely downstream impact                                        |
| --------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------- |
| Supported-locale resolution | `ui/src/i18n/lib/registry.ts`                                       | Locale detection, fallback behavior, dynamic import boundaries. |
| Translation runtime path    | `ui/src/i18n/lib/translate.ts`, `ui/src/i18n/lib/lit-controller.ts` | Rendered copy updates in the running app.                       |
| Locale resource path        | `ui/src/i18n/locales/*.ts`                                          | User-facing translated strings for supported languages.         |
| Translation regression path | `ui/src/i18n/test/translate.test.ts`                                | Guardrail for registry/translation lookup behavior.             |

## Trace rule

Start with the registry/runtime file before editing locale resources so you can see whether the drift is data-only or loader-related.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `56` changed path(s) to this final leaf. `56` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 47, 'M': 9}`.

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
- `ui/src/i18n/.i18n/glossary.pl.json`
- `ui/src/i18n/.i18n/glossary.pt-BR.json`
- `ui/src/i18n/.i18n/glossary.th.json`
- `ui/src/i18n/.i18n/glossary.tr.json`
- `ui/src/i18n/.i18n/glossary.uk.json`
- `ui/src/i18n/.i18n/glossary.zh-CN.json`
- `ui/src/i18n/.i18n/glossary.zh-TW.json`
- `ui/src/i18n/.i18n/id.meta.json`
- `ui/src/i18n/.i18n/id.tm.jsonl`
- `ui/src/i18n/.i18n/ja-JP.meta.json`
- `ui/src/i18n/.i18n/ja-JP.tm.jsonl`
- `ui/src/i18n/.i18n/ko.meta.json`
- `ui/src/i18n/.i18n/ko.tm.jsonl`
- `ui/src/i18n/.i18n/pl.meta.json`
- `ui/src/i18n/.i18n/pl.tm.jsonl`
- `ui/src/i18n/.i18n/pt-BR.meta.json`
- `ui/src/i18n/.i18n/pt-BR.tm.jsonl`
- `ui/src/i18n/.i18n/th.meta.json`
- `... 另有 26 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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
<!-- version-diff-refresh:v2026.5.4:end -->
