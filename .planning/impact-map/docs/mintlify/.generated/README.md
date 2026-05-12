# Docs Support .generated

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `docs/.generated/**` within the Mintlify docs surface.

## Observed facts

5 files and 1 Markdown page are present under `docs/.generated/`.
No `docs/.generated/index.md` page was observed; route ownership is spread across leaf pages.
Sample files:

- `docs/.generated/README.md`
  Route groups, redirects, and top-level page ordering still flow through `docs/docs.json`.

## Incoming dependencies

- Other docs pages and Mintlify nav groups route readers into this leaf.
- Root-relative internal links and image references can break when page or asset paths move.

## Outgoing dependencies

- Docs validation starts with `pnpm check:docs` or the narrower `pnpm docs:check-links` / `pnpm docs:check-i18n-glossary` checks.

## Risk triggers

- Renaming or moving pages without updating `docs/docs.json` navigation, redirects, or local index links.
- Changing root-relative links or embedded asset paths without rerunning docs link checks.

## Validation status

No product tests, docs builds, or translation reruns were executed for this leaf during Wave 4. Coverage is based on repo-native inspection of the current tree, package scripts, and adjacent docs tooling.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `docs-generated-baselines`.
- Risk: `medium`.
- Compatibility: `docs-only`.
- Changed paths in this leaf: `386` (修改 133，删除 81，新增 170，重命名/移动 2).
- Target-existing changed paths listed here: `304`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `82`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 292 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `docs-generated-baselines`
- Risk: `medium`
- Compatibility: `docs-only`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `228`
- Target-existing changed paths reflected here: `188`
- Deleted or renamed-away paths omitted from active impact-map: `40`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
