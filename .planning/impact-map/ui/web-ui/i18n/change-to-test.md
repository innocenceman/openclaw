# Web UI i18n Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                     | First validation                                                                | Escalation trigger                                                                                |
| ------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Locale registry/runtime changed | `pnpm test:ui`                                                                  | Escalate to `pnpm ui:build` when lazy-import boundaries or bundled locale output changes.         |
| Translation resource changed    | `pnpm test:ui` plus spot-check the affected locale in the browser when feasible | Escalate to broader UI smoke when translated navigation/config text changes across multiple tabs. |

## Validation evidence

No UI tests or builds were run while promoting this leaf. Commands were verified from root `package.json` and `ui/package.json`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `56` (新增 47，修改 9).
- Target-existing path refs in active map: `56`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
