# Scripts lib Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                       | First validation                                                        | Escalation trigger                                                                                   |
| --------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Script implementation changed     | Run the narrowest wrapper or direct script check that owns the behavior | Escalate to broader package/build/test flows when shared helpers or published surfaces are affected. |
| Script path or flag shape changed | Inspect package.json wrappers, docs examples, and nearby shell callers  | Update all direct invocations in the same change; path drift is a common failure mode.               |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, wrapper references, and root `package.json` scripts without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `56` (修改 15，新增 40，删除 1).
- Target-existing path refs in active map: `55`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `medium`; compatibility: `compatible`.
- First validation move: Run the smallest build/test/tooling check that exercises this leaf, then rely on broader CI only for packaging surfaces.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `compatible`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
