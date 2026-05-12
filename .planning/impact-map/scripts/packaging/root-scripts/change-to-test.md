# Root Scripts Change-to-Test Matrix

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

- Changed paths: `197` (新增 101，修改 80，重命名/移动 2，删除 14).
- Target-existing path refs in active map: `183`; deleted/renamed-away refs kept only in transition artifacts: `14`.
- Risk: `medium`; compatibility: `compatible`.
- First validation move: Run the smallest build/test/tooling check that exercises this leaf, then rely on broader CI only for packaging surfaces.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `compatible`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `scripts/bench-cli-startup.ts`
- `scripts/bench-gateway-startup.ts`
- `scripts/blacksmith-testbox-runner.mjs`
- `scripts/blacksmith-testbox-state.mjs`
- `scripts/build-all.mjs`
- `scripts/build-stamp.d.mts`
- `scripts/build-stamp.mjs`
- `scripts/canvas-a2ui-copy.ts`
- `scripts/changed-lanes.mjs`
- `scripts/check-architecture-smells.mjs`
- `scripts/check-changed.mjs`
- `scripts/check-changelog-attributions.mjs`
- `scripts/check-cli-bootstrap-imports.mjs`
- `scripts/check-codex-app-server-protocol.ts`
- `scripts/check-deadcode-unused-files.mjs`
- `scripts/check-deprecated-internal-config-api.mjs`
- `scripts/check-deprecated-jsdoc.mjs`
- `scripts/check-docker-e2e-boundaries.mjs`
- `scripts/check-docs-mdx.mjs`
- `scripts/check-duplicates.mjs`
- `scripts/check-extension-plugin-sdk-boundary.mjs`
- `scripts/check-extension-wildcard-reexports.mjs`
- `scripts/check-gateway-cpu-scenarios.mjs`
- `scripts/check-gateway-watch-regression.mjs`
- `scripts/check-live-cache.ts`
- `scripts/check-no-extension-test-core-imports.ts`
- `scripts/check-no-monolithic-plugin-sdk-entry-imports.ts`
- `scripts/check-no-raw-channel-fetch.mjs`
- `scripts/check-no-raw-http2-imports.mjs`
- `scripts/check-no-runtime-action-load-config.mjs`
- `scripts/check-openclaw-package-tarball.mjs`
- `scripts/check-package-dist-imports.mjs`
- `scripts/check-plugin-gateway-gauntlet.mjs`
- `scripts/check-plugin-npm-runtime-builds.mjs`
- `scripts/check-plugin-sdk-subpath-exports.mjs`
- `scripts/check-plugin-sdk-wildcard-reexports.mjs`
- `scripts/check-runtime-sidecar-loaders.mjs`
- `scripts/check-sdk-package-extension-import-boundary.mjs`
- `scripts/check-src-extension-import-boundary.mjs`
- `scripts/check-tsgo-core-boundary.mjs`
- … plus 118 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
