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
