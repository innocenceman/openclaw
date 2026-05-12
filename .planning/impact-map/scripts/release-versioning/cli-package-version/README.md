# CLI Package Version

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for the CLI package version plus npm release guard scripts that validate and publish the main `openclaw` package.

## Observed facts

- Release guard scripts exist at `scripts/openclaw-npm-release-check.ts` and `scripts/openclaw-npm-postpublish-verify.ts`.
- Root package scripts expose these through `release:openclaw:npm:check` and postpublish verification flows.
- Supporting compatibility/version output is written by `scripts/write-cli-compat.ts`.

## Incoming dependencies

- `package.json` version edits and release tags feed the CLI release-check path.

## Outgoing dependencies

- npm publish/verify and broader release policy docs consume this surface downstream.

## Risk triggers

- Running release logic against the wrong version/tag pairing.
- Changing CLI version helpers without checking release guard expectations.

## Validation status

Wave 4 did not execute packaging/release/install/live environment actions for this leaf. Coverage is based on repo-native inspection of script files, wrapper references, and root package-script wiring.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `build-ci-tests`.
- Risk: `medium`.
- Compatibility: `compatible`.
- Changed paths in this leaf: `3` (修改 3).
- Target-existing changed paths listed here: `3`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `scripts/openclaw-npm-postpublish-verify.ts`
- `scripts/openclaw-npm-release-check.ts`
- `scripts/write-cli-compat.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `build-ci-tests`
- Risk: `medium`
- Compatibility: `compatible`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `2`
- Target-existing changed paths reflected here: `2`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `scripts/openclaw-npm-postpublish-verify.ts`
- `scripts/openclaw-npm-release-check.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
