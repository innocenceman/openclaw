# Shared Packages

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted package validation

## Scope

Compatibility packages under `packages/**` that preserve old package names while forwarding users to OpenClaw.

## Leaves

- `clawdbot/`: package metadata and import shim for `clawdbot`.
- `moltbot/`: package metadata and import shim for `moltbot`.

## Evidence limits

G009 added package release tests, import-shim checks, and npm pack dry-runs. Do not promote to `verified` until the missing legacy `./bin/*.js` targets are fixed and the standard release/pack-install ladder passes.
