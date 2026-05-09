# Shared Packages Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted package validation

## Import shim path

1. Consumer imports a legacy package (`clawdbot` or `moltbot`).
2. The package `exports` field resolves to `index.js`.
3. `index.js` re-exports `openclaw`.
4. Runtime behavior transfers to the root OpenClaw package.

## Binary compatibility path

1. Package metadata declares a legacy binary name.
2. Package/install validation must confirm the declared binary path exists and forwards correctly.
3. Release checks should catch drift before publishing.

## Install warning path

1. Package manager lifecycle may execute `scripts/postinstall.js`.
2. The script warns that the legacy package has been renamed to OpenClaw.

## Evidence limits

G009 npm pack dry-runs passed, but package bin/export audit found missing declared CLI entry files. A real install smoke remains blocked until those paths exist.
