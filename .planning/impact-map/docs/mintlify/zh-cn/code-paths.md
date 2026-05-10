# Generated or Localized Docs zh-CN Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Generated-locale path

1. English docs changes land in source directories such as `docs/channels`, `docs/providers`, or `docs/reference`.
2. Required glossary additions land in `docs/.i18n/glossary.zh-CN.json` before translation reruns.
3. `scripts/docs-i18n` materializes `docs/zh-CN/**`, and `pnpm docs:check-i18n-glossary` guards missing glossary coverage.

## Trace rule

Do not patch `docs/zh-CN/**` as the first response to English-source drift unless the task explicitly asks for generated-output edits.
