# Package clawdbot Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted package validation

## Import compatibility path

1. Consumer imports `clawdbot`.
2. Runtime behavior transfers to the root `openclaw` package.

## CLI compatibility path

1. Consumer installs package `clawdbot`.
2. Packaging/install validation must confirm the declared binary exists and forwards to the intended OpenClaw CLI.

## Install warning path

2. Script emits the rename warning: `clawdbot renamed -> openclaw`.

## Evidence limits

G009 confirmed npm pack dry-run output but also confirmed the metadata-declared CLI target is missing. Install smoke remains exceptioned until the target exists.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `3` changed path(s) to this final leaf. `0` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'D': 3}`.

- None.

<!-- version-diff-refresh:v2026.4.24:end -->
