# Docs assets

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `docs/assets/**` within the Mintlify docs surface.

- These files are non-Markdown assets, so drift usually shows up as broken references or stale screenshots instead of lint failures.

## Observed facts

34 files and 0 Markdown pages are present under `docs/assets/`.
No `docs/assets/index.md` page was observed; route ownership is spread across leaf pages.
Sample files:

- `docs/assets/install-script.svg`
- `docs/assets/macos-onboarding/01-macos-warning.jpeg`
- `docs/assets/macos-onboarding/02-local-networks.jpeg`
- `docs/assets/macos-onboarding/03-security-notice.png`
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
- Changed paths in this leaf: `8` (新增 8).
- Target-existing changed paths listed here: `8`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `docs/assets/sponsors/blacksmith-light.svg`
- `docs/assets/sponsors/convex-light.svg`
- `docs/assets/sponsors/github-light.svg`
- `docs/assets/sponsors/github.svg`
- `docs/assets/sponsors/nvidia-dark.svg`
- `docs/assets/sponsors/nvidia.svg`
- `docs/assets/sponsors/openai-light.svg`
- `docs/assets/sponsors/vercel-light.svg`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
