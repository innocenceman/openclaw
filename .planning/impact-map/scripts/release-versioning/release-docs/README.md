# Release Docs and Changelog

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for release policy/reference docs and closely coupled release-facing workflow text.

## Observed facts

- `docs/reference/RELEASING.md` anchors the public release policy and links to the CLI/macOS release scripts.
- Root docs config also redirects `/RELEASING` into the reference page via `docs/docs.json`.
- Workflow and template surfaces under `.github/` sit nearby but remain outside the write scope for this Wave 4 worker.

## Incoming dependencies

- Release tooling and version-policy changes should be reflected here so operator guidance stays truthful.

## Outgoing dependencies

- Readers and maintainers use these pages as policy references during release work; stale text misroutes follow-up actions.

## Risk triggers

- Docs describing outdated release checks or version locations.
- Silent divergence between public release policy docs and current release scripts.

## Validation status

Wave 4 did not execute packaging/release/install/live environment actions for this leaf. Coverage is based on repo-native inspection of script files, wrapper references, and root package-script wiring.
