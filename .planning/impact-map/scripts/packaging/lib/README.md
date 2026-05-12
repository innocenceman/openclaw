# Scripts lib

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `scripts/lib/**`.

## Observed facts

- 22 files observed in `scripts/lib/`.
- Sample files:
- `scripts/lib/arg-utils.mjs`
- `scripts/lib/bundled-extension-manifest.ts`
- `scripts/lib/bundled-plugin-build-entries.d.mts`
- `scripts/lib/bundled-plugin-build-entries.d.ts`
- `scripts/lib/bundled-plugin-build-entries.mjs`
- No direct root `package.json` script values pointed at this directory during Wave 4 inspection; usage is via direct invocation, adjacent wrappers, or imports.
- Repo-native search found many top-level script imports from `scripts/lib/**`, plus test and workflow references for release helpers.

## Incoming dependencies

- Build/check/test/release/docs flows usually enter from root `package.json` scripts, direct shell invocation, or neighboring wrappers.

## Outgoing dependencies

- Downstream impact depends on each script family: packaging, docs, release, smoke, or infra tasks.

## Risk triggers

- Renaming scripts without updating root wrappers or docs examples.
- Changing helper semantics that multiple wrappers or CI flows assume.

## Validation status

Wave 4 did not execute packaging/release/install/live environment actions for this leaf. Coverage is based on repo-native inspection of script files, wrapper references, and root package-script wiring.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `build-ci-tests`.
- Risk: `medium`.
- Compatibility: `compatible`.
- Changed paths in this leaf: `56` (修改 15，新增 40，删除 1).
- Target-existing changed paths listed here: `55`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `scripts/lib/arg-utils.mjs`
- `scripts/lib/bundled-extension-manifest.ts`
- `scripts/lib/bundled-plugin-build-entries-types.d.ts`
- `scripts/lib/bundled-plugin-build-entries.d.mts`
- `scripts/lib/bundled-plugin-build-entries.d.ts`
- `scripts/lib/bundled-plugin-build-entries.mjs`
- `scripts/lib/bundled-plugin-paths.mjs`
- `scripts/lib/bundled-runtime-sidecar-paths.json`
- `scripts/lib/changed-extensions.mjs`
- `scripts/lib/channel-contract-test-plan.mjs`
- `scripts/lib/check-timing-summary.mjs`
- `... 另有 43 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `build-ci-tests`
- Risk: `medium`
- Compatibility: `compatible`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `70`
- Target-existing changed paths reflected here: `69`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

- `scripts/lib/arg-utils.mjs`
- `scripts/lib/bundled-plugin-build-entries-types.d.ts`
- `scripts/lib/bundled-plugin-build-entries.mjs`
- `scripts/lib/bundled-runtime-sidecar-paths.json`
- `scripts/lib/ci-node-test-plan.mjs`
- `scripts/lib/codex-app-server-protocol-source.ts`
- `scripts/lib/config-boundary-guard.d.mts`
- `scripts/lib/config-boundary-guard.mjs`
- `scripts/lib/dependency-ownership.json`
- `scripts/lib/deprecated-config-api-guard.d.mts`
- `scripts/lib/deprecated-config-api-guard.mjs`
- `scripts/lib/docker-build.sh`
- `scripts/lib/docker-e2e-container.sh`
- `scripts/lib/docker-e2e-image.sh`
- `scripts/lib/docker-e2e-logs.sh`
- `scripts/lib/docker-e2e-package.sh`
- `scripts/lib/docker-e2e-plan.mjs`
- `scripts/lib/docker-e2e-scenarios.mjs`
- `scripts/lib/extension-import-boundary-checker.mjs`
- `scripts/lib/extension-package-boundary.ts`
- `scripts/lib/extension-source-classifier.d.mts`
- `scripts/lib/extension-source-classifier.mjs`
- `scripts/lib/extension-test-plan.mjs`
- `scripts/lib/guard-inventory-utils.mjs`
- `scripts/lib/import-cycle-graph.ts`
- `scripts/lib/ios-version.ts`
- `scripts/lib/live-docker-auth.sh`
- `scripts/lib/live-docker-stage.sh`
- `scripts/lib/local-build-metadata-paths.d.mts`
- `scripts/lib/local-build-metadata-paths.mjs`
- `scripts/lib/local-build-metadata.d.mts`
- `scripts/lib/local-build-metadata.mjs`
- `scripts/lib/local-heavy-check-runtime.mjs`
- `scripts/lib/managed-child-process.mjs`
- `scripts/lib/mintlify-accordion.mjs`
- `scripts/lib/npm-pack-budget.d.mts`
- `scripts/lib/npm-pack-budget.mjs`
- `scripts/lib/npm-publish-plan.mjs`
- `scripts/lib/official-external-channel-catalog.json`
- `scripts/lib/official-external-plugin-catalog.json`
- … plus 29 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
