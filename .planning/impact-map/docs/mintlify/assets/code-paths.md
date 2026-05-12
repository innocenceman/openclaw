# Docs assets Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Asset reference path

1. An asset file under `docs/assets` is added, renamed, or replaced.
2. Consuming docs pages update their image/link references.
3. `pnpm docs:check-links` is the first automated guard against stale paths.

## Trace rule

When an asset visually documents runtime behavior, pair the asset change with the owning page update in the same commit so future readers do not see mixed old/new UI states.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `8` changed path(s) to this final leaf. `8` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 8}`.

- `docs/assets/sponsors/blacksmith-light.svg`
- `docs/assets/sponsors/convex-light.svg`
- `docs/assets/sponsors/github-light.svg`
- `docs/assets/sponsors/github.svg`
- `docs/assets/sponsors/nvidia-dark.svg`
- `docs/assets/sponsors/nvidia.svg`
- `docs/assets/sponsors/openai-light.svg`
- `docs/assets/sponsors/vercel-light.svg`

<!-- version-diff-refresh:v2026.4.24:end -->
