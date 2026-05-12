# Scripts lib Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Invocation path

1. Root package scripts, direct shell use, or neighboring wrappers invoke this leaf.
2. Files under `scripts/lib/` perform the leaf-specific automation.
3. Validation then flows into the closest wrapper script, docs page, or test called out in this leaf's file roles.

## Trace rule

Start from the entry command or wrapper that actually invokes the script, then walk into helpers and downstream artifacts before deciding how broad validation must be.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `56` changed path(s) to this final leaf. `55` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 15, 'A': 40, 'D': 1}`.

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
- `scripts/lib/ci-node-test-plan.mjs`
- `scripts/lib/dependency-ownership.json`
- `scripts/lib/docker-e2e-image.sh`
- `scripts/lib/docker-e2e-logs.sh`
- `scripts/lib/error-format.mjs`
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
- `scripts/lib/local-heavy-check-runtime.mjs`
- `scripts/lib/managed-child-process.mjs`
- `scripts/lib/mintlify-accordion.mjs`
- `... 另有 25 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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

Deleted or renamed-away paths omitted from this active leaf: `1`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
