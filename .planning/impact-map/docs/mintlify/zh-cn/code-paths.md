# Generated or Localized Docs zh-CN Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Generated-locale path

1. English docs changes land in source directories such as `docs/channels`, `docs/providers`, or `docs/reference`.
2. Required glossary additions land in `docs/.i18n/glossary.zh-CN.json` before translation reruns.
3. `scripts/docs-i18n` materializes `docs/zh-CN/**`, and `pnpm docs:check-i18n-glossary` guards missing glossary coverage.

## Trace rule

Do not patch `docs/zh-CN/**` as the first response to English-source drift unless the task explicitly asks for generated-output edits.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `1` changed path(s) to this final leaf. `1` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 1}`.

- `docs/.i18n/glossary.zh-CN.json`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `docs/.i18n/glossary.zh-CN.json`
<!-- version-diff-refresh:v2026.5.4:end -->
