# Auth Provider Commands Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/commands/auth-choice*.ts`, `src/commands/auth-token.ts`, `src/commands/*oauth*.ts`, `src/commands/models*.ts`, `src/commands/model-*.ts`
- Runtime handoff: CLI auth/provider commands resolve user auth choices before agent providers or plugin auth helpers consume them.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `70` changed path(s) to this final leaf. `60` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 44, 'D': 9, 'A': 16, 'R': 1}`.

- `src/commands/auth-choice-legacy.test.ts`
- `src/commands/auth-choice-legacy.ts`
- `src/commands/auth-choice-options.static.ts`
- `src/commands/auth-choice-options.test.ts`
- `src/commands/auth-choice-options.ts`
- `src/commands/auth-choice-prompt.ts`
- `src/commands/auth-choice.apply-helpers.ts`
- `src/commands/auth-choice.apply.api-providers.test.ts`
- `src/commands/auth-choice.apply.api-providers.ts`
- `src/commands/auth-choice.apply.plugin-provider.test.ts`
- `src/commands/auth-choice.apply.ts`
- `src/commands/auth-choice.apply.types.ts`
- `src/commands/auth-choice.model-check.ts`
- `src/commands/auth-choice.preferred-provider.test.ts`
- `src/commands/auth-choice.test.ts`
- `src/commands/auth-token.ts`
- `src/commands/chutes-oauth.ts`
- `src/commands/doctor-auth-legacy-oauth.ts`
- `src/commands/model-picker.test.ts`
- `src/commands/models.list.e2e.test.ts`
- `src/commands/models.set.e2e.test.ts`
- `src/commands/models/alias-name.ts`
- `src/commands/models/auth-order.ts`
- `src/commands/models/auth.test.ts`
- `src/commands/models/auth.ts`
- `src/commands/models/fallbacks-shared.ts`
- `src/commands/models/list.auth-overview.test.ts`
- `src/commands/models/list.auth-overview.ts`
- `src/commands/models/list.configured.test.ts`
- `... 另有 30 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/commands/auth-choice-legacy.test.ts`
- `src/commands/auth-choice-options.static.ts`
- `src/commands/auth-choice.apply-helpers.ts`
- `src/commands/auth-choice.apply.api-providers.test.ts`
- `src/commands/auth-choice.apply.plugin-provider.test.ts`
- `src/commands/auth-choice.apply.ts`
- `src/commands/auth-choice.model-check.test.ts`
- `src/commands/auth-choice.model-check.ts`
- `src/commands/auth-choice.test.ts`
- `src/commands/model-picker.runtime.ts`
- `src/commands/model-picker.test.ts`
- `src/commands/models.list.e2e.test.ts`
- `src/commands/models/auth-list.test.ts`
- `src/commands/models/auth-list.ts`
- `src/commands/models/auth-order.ts`
- `src/commands/models/auth.test.ts`
- `src/commands/models/auth.ts`
- `src/commands/models/list.auth-index.test.ts`
- `src/commands/models/list.auth-index.ts`
- `src/commands/models/list.auth-overview.test.ts`
- `src/commands/models/list.auth-overview.ts`
- `src/commands/models/list.format.ts`
- `src/commands/models/list.list-command.forward-compat.test.ts`
- `src/commands/models/list.list-command.ts`
- `src/commands/models/list.manifest-catalog.test.ts`
- `src/commands/models/list.manifest-catalog.ts`
- `src/commands/models/list.model-row.test.ts`
- `src/commands/models/list.model-row.ts`
- `src/commands/models/list.probe.targets.test.ts`
- `src/commands/models/list.probe.test.ts`
- `src/commands/models/list.probe.ts`
- `src/commands/models/list.provider-catalog.test.ts`
- `src/commands/models/list.provider-catalog.ts`
- `src/commands/models/list.provider-index-catalog.test.ts`
- `src/commands/models/list.provider-index-catalog.ts`
- `src/commands/models/list.registry-load.ts`
- `src/commands/models/list.registry.ts`
- `src/commands/models/list.row-sources.ts`
- `src/commands/models/list.rows.test.ts`
- `src/commands/models/list.rows.ts`
- … plus 11 more target-existing changed paths.

Deleted or renamed-away paths omitted from this active leaf: `6`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
