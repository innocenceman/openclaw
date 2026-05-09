# Release Versioning

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Version alignment, release guard scripts, and release-policy docs that must stay truthful when OpenClaw versioning or release workflows change.

## Observed facts

- All three child rows in `release-versioning/leaf-index.md` are explicit `exceptioned-deep-partial` units after G008 because release-tag and publish-adjacent validations are unavailable in this non-release environment.
- Version surfaces are intentionally multi-home: package/app plist/gradle/docs locations all participate.
- CLI release guard scripts and release-policy docs are separate but adjacent leaves so operator guidance does not drift away from the automation.

## Validation status

This closure group is `exceptioned-deep-partial`, not `verified`: targeted release-check tests passed, but `pnpm release:openclaw:npm:check` correctly fails outside a release tag and package staging still hits the known Discord runtime-dependency failure.
