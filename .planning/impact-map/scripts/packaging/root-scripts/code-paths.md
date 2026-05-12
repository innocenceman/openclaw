# Root Scripts Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Invocation path

1. Root package scripts, direct shell use, or neighboring wrappers invoke this leaf.
2. Files under `scripts/*` perform the leaf-specific automation.
3. Validation then flows into the closest wrapper script, docs page, or test called out in this leaf's file roles.

## Trace rule

Start from the entry command or wrapper that actually invokes the script, then walk into helpers and downstream artifacts before deciding how broad validation must be.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `197` changed path(s) to this final leaf. `183` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 101, 'M': 80, 'R': 2, 'D': 14}`.

- `scripts/AGENTS.md`
- `scripts/CLAUDE.md`
- `scripts/anthropic-prompt-probe.ts`
- `scripts/audit-seams.mjs`
- `scripts/bench-cli-startup.ts`
- `scripts/bench-gateway-startup.ts`
- `scripts/bench-model.ts`
- `scripts/bench-test-changed.mjs`
- `scripts/build-all.mjs`
- `scripts/bundle-a2ui.mjs`
- `scripts/bundle-a2ui.sh`
- `scripts/canvas-a2ui-copy.ts`
- `scripts/changed-lanes.mjs`
- `scripts/changelog-add-unreleased.ts`
- `scripts/check-architecture-smells.mjs`
- `scripts/check-changed.mjs`
- `scripts/check-channel-agnostic-boundaries.mjs`
- `scripts/check-codex-app-server-protocol.ts`
- `scripts/check-docs-mdx.mjs`
- `scripts/check-dynamic-import-warts.mjs`
- `scripts/check-extension-package-tsc-boundary.mjs`
- `scripts/check-extension-plugin-sdk-boundary.mjs`
- `scripts/check-file-utils.ts`
- `scripts/check-gateway-watch-regression.mjs`
- `scripts/check-import-cycles.ts`
- `scripts/check-ingress-agent-owner-context.mjs`
- `scripts/check-live-cache.ts`
- `scripts/check-madge-import-cycles.ts`
- `... 另有 153 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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

Deleted or renamed-away paths omitted from this active leaf: `5`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
