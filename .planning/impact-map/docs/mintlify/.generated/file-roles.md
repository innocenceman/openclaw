# Docs Support .generated File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                                                                   | Role                                                | Evidence state | Impact notes                                                                                                |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------- |
| docs/.generated/config-baseline.json and docs/.generated/config-baseline.jsonl                 | Generated config documentation baselines.           | deep-partial   | These move only through the config docs generator/check flow; do not hand-edit to silence drift.            |
| docs/.generated/plugin-sdk-api-baseline.json and docs/.generated/plugin-sdk-api-baseline.jsonl | Generated Plugin SDK API baselines.                 | deep-partial   | These are the checked-in reference state for public Plugin SDK surface drift.                               |
| scripts/generate-config-doc-baseline.ts and src/config/doc-baseline.ts                         | Config-baseline generation and normalization logic. | partial        | Intentional config-surface changes must stay paired with `pnpm config:docs:gen` / `pnpm config:docs:check`. |
| scripts/generate-plugin-sdk-api-baseline.ts and src/plugin-sdk/api-baseline.ts                 | Plugin SDK baseline generation and statefile logic. | partial        | Public SDK changes must stay paired with `pnpm plugin-sdk:api:gen` / `pnpm plugin-sdk:api:check`.           |

## Update rule

When a changed path in this leaf becomes the durable owner of a separate validation or synchronization rule, add it here and update `code-paths.md` plus `change-to-test.md` in the same change.
