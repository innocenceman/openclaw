# Docs Support .generated Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Config-baseline path

1. Schema/help changes land in core config sources and helpers.
2. `scripts/generate-config-doc-baseline.ts` and `src/config/doc-baseline.ts` produce the checked-in `docs/.generated/config-baseline.json*` artifacts.
3. `pnpm config:docs:check` fails when the checked-in baseline drifts; approved changes use `pnpm config:docs:gen` to refresh it.

## Plugin SDK baseline path

1. Public Plugin SDK seam changes land in `src/plugin-sdk/**` and related export metadata.
2. `scripts/generate-plugin-sdk-api-baseline.ts` plus `src/plugin-sdk/api-baseline.ts` produce `docs/.generated/plugin-sdk-api-baseline.json*`.
3. `pnpm plugin-sdk:api:check` and export checks catch drift before release/package flows.

## Bundled metadata adjacency

1. Bundled plugin metadata is generated outside `docs/.generated`, but it shares the same checked-in baseline discipline.
2. `scripts/generate-bundled-plugin-metadata.mjs`, `scripts/copy-bundled-plugin-metadata.mjs`, and `src/plugins/bundled-plugin-metadata*.ts` are the adjacent path to trace when generated metadata rules drift.
3. `pnpm check:bundled-plugin-metadata` is the first validation before any broader build or release gate.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `386` changed path(s) to this final leaf. `304` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 133, 'D': 81, 'A': 170, 'R': 2}`.

- `docs/.generated/README.md`
- `docs/.generated/config-baseline.sha256`
- `docs/.generated/plugin-sdk-api-baseline.sha256`
- `docs/.i18n/ar-navigation.json`
- `docs/.i18n/de-navigation.json`
- `docs/.i18n/es-navigation.json`
- `docs/.i18n/fr-navigation.json`
- `docs/.i18n/id-navigation.json`
- `docs/.i18n/it-navigation.json`
- `docs/.i18n/ja-navigation.json`
- `docs/.i18n/ko-navigation.json`
- `docs/.i18n/pl-navigation.json`
- `docs/.i18n/pt-BR-navigation.json`
- `docs/.i18n/tr-navigation.json`
- `docs/.i18n/zh-Hans-navigation.json`
- `docs/docs.json`
- `scripts/copy-bundled-plugin-metadata.mjs`
- `scripts/generate-config-doc-baseline.ts`
- `scripts/generate-plugin-sdk-api-baseline.ts`
- `src/plugin-sdk/AGENTS.md`
- `src/plugin-sdk/account-configured-ids.ts`
- `src/plugin-sdk/account-core.ts`
- `src/plugin-sdk/account-id.ts`
- `src/plugin-sdk/account-resolution-runtime.ts`
- `src/plugin-sdk/account-resolution.ts`
- `src/plugin-sdk/acp-binding-resolve-runtime.ts`
- `src/plugin-sdk/acp-binding-runtime.ts`
- `src/plugin-sdk/acp-runtime.test.ts`
- `src/plugin-sdk/acp-runtime.ts`
- `src/plugin-sdk/agent-harness-runtime.ts`
- `... 另有 274 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `docs/.generated/config-baseline.sha256`
- `docs/.generated/plugin-sdk-api-baseline.sha256`
- `docs/docs.json`
- `scripts/copy-bundled-plugin-metadata.mjs`
- `src/plugin-sdk/AGENTS.md`
- `src/plugin-sdk/access-groups.ts`
- `src/plugin-sdk/acp-runtime-backend.ts`
- `src/plugin-sdk/acp-runtime.test.ts`
- `src/plugin-sdk/acp-runtime.ts`
- `src/plugin-sdk/agent-harness-runtime.test.ts`
- `src/plugin-sdk/agent-harness-runtime.ts`
- `src/plugin-sdk/agent-runtime-test-contracts.ts`
- `src/plugin-sdk/agent-runtime.ts`
- `src/plugin-sdk/allowlist-config-edit.ts`
- `src/plugin-sdk/approval-native-helpers.test.ts`
- `src/plugin-sdk/approval-native-helpers.ts`
- `src/plugin-sdk/approval-reply-runtime.ts`
- `src/plugin-sdk/async-lock-runtime.ts`
- `src/plugin-sdk/browser-config.ts`
- `src/plugin-sdk/browser-maintenance.test.ts`
- `src/plugin-sdk/browser-maintenance.ts`
- `src/plugin-sdk/browser-profiles.ts`
- `src/plugin-sdk/browser-trash.ts`
- `src/plugin-sdk/bundled-channel-config-schema.ts`
- `src/plugin-sdk/cli-backend.ts`
- `src/plugin-sdk/cli-runtime.ts`
- `src/plugin-sdk/command-auth-native.ts`
- `src/plugin-sdk/command-auth.test.ts`
- `src/plugin-sdk/command-auth.ts`
- `src/plugin-sdk/command-status.runtime.test.ts`
- `src/plugin-sdk/command-status.runtime.ts`
- `src/plugin-sdk/command-surface.ts`
- `src/plugin-sdk/compat.ts`
- `src/plugin-sdk/concurrency-runtime.ts`
- `src/plugin-sdk/config-mutation.ts`
- `src/plugin-sdk/config-runtime.ts`
- `src/plugin-sdk/config-schema.ts`
- `src/plugin-sdk/config-types.ts`
- `src/plugin-sdk/conversation-runtime.ts`
- `src/plugin-sdk/core.test.ts`
- … plus 148 more target-existing changed paths.

Deleted or renamed-away paths omitted from this active leaf: `40`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
