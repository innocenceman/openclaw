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
- `src/commands/auth-choice.default-model.ts`
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
