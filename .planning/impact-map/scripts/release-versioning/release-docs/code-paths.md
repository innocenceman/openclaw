# Release Docs and Changelog Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Release policy docs path

1. Release tooling or version policy changes happen in scripts and package/app version surfaces.
2. `docs/reference/RELEASING.md` is the public-policy docs sink for those changes.
3. `docs/docs.json` keeps the route reachable from Mintlify.

## Trace rule

When release scripts change, confirm whether the public docs still describe the same operator workflow before declaring the docs slice closed.
