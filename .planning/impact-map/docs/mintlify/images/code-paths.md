# Docs images Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Asset reference path

1. An asset file under `docs/images` is added, renamed, or replaced.
2. Consuming docs pages update their image/link references.
3. `pnpm docs:check-links` is the first automated guard against stale paths.

## Trace rule

When an asset visually documents runtime behavior, pair the asset change with the owning page update in the same commit so future readers do not see mixed old/new UI states.
