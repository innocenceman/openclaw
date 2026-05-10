# Package moltbot

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted package validation

## Scope

Compatibility shim package for `packages/moltbot/**`. It forwards package imports to `openclaw` and declares the legacy `moltbot` binary surface in `packages/moltbot/package.json`.

## Boundary

This leaf owns the compatibility package metadata, root re-export, and postinstall rename notice. It does not own core OpenClaw runtime behavior; runtime behavior follows the root `openclaw` package.

## Evidence

- Inspected `packages/moltbot/package.json`, `packages/moltbot/index.js`, and `packages/moltbot/scripts/postinstall.js`.
- G009 package release tests and package import-shim checks passed.
- G009 npm pack dry-run passed.
- G009 package bin/export audit failed because the declared CLI entry file is missing.
- The standard OpenClaw npm release check timed out in this sandbox.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## 2026-05-09 G009 package validation

Decision: `exceptioned-deep-partial`.

Reason: import shim and pack dry-run passed, but `packages/moltbot/package.json` declares a legacy CLI `bin`/`./cli-entry` target under `./bin/` and that file is absent. Do not mark this package shim `verified` until the declared CLI target exists and the standard release/pack-install ladder passes.

Evidence: `.planning/impact-map/evidence/packages-test-infra-verified-wave-2026-05-09/PACKAGES-TEST-INFRA-VERIFIED-WAVE.md`.
