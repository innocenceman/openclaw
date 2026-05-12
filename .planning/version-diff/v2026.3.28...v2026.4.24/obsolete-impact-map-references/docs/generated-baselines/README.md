# Generated Baselines

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Generated baseline artifacts under `docs/.generated/` plus the generator/check flows that keep config docs, Plugin SDK API baselines, and bundled plugin metadata discipline aligned.

## Observed facts

- `docs/.generated/` currently contains four generated baseline artifacts plus a local README: `config-baseline.json`, `config-baseline.jsonl`, `plugin-sdk-api-baseline.json`, and `plugin-sdk-api-baseline.jsonl`.
- Root package scripts expose the intended baseline entrypoints through `config:docs:check`, `config:docs:gen`, `plugin-sdk:api:check`, `plugin-sdk:api:gen`, and `check:bundled-plugin-metadata`.
- Bundled plugin metadata is generated into `src/plugins/bundled-plugin-metadata.generated.ts`, not `docs/.generated/`, but it follows the same checked-in drift pattern and is part of the Wave 4 exact queue.
- Release gating already composes these checks through `pnpm release:check` without inventing a separate drift workflow.

## Incoming dependencies

- Config schema/help changes feed the config docs baseline generator.
- Public Plugin SDK export/API changes feed the Plugin SDK baseline generator and export checks.
- Extension manifest/catalog changes feed bundled plugin metadata generation.

## Outgoing dependencies

- CI/workflow sanity gates call the check flows before broader release work.
- Docs and release processes rely on the checked-in baselines as the approved reference state for public surface drift.

## Risk triggers

- Hand-editing generated baselines instead of using the paired generator/check flow.
- Updating config schema/help or public Plugin SDK seams without refreshing the corresponding baseline.
- Treating bundled metadata drift as docs-only when it actually changes runtime/plugin catalog behavior.

## Validation status

Wave 4 promoted this closure group from scaffold to actionable deep-partial coverage using repo-native inspection only. No generator/check commands were executed, so this is not `verified`.
