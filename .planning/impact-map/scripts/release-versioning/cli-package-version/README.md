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
