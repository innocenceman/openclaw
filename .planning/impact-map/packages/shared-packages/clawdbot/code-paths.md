# Package clawdbot Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted package validation

## Import compatibility path

1. Consumer imports `clawdbot`.
2. `packages/clawdbot/package.json` resolves `exports["."]` to `packages/clawdbot/index.js`.
3. `packages/clawdbot/index.js` re-exports `openclaw`.
4. Runtime behavior transfers to the root `openclaw` package.

## CLI compatibility path

1. Consumer installs package `clawdbot`.
2. `packages/clawdbot/package.json` advertises the `clawdbot` binary at `./bin/clawdbot.js`.
3. Packaging/install validation must confirm the declared binary exists and forwards to the intended OpenClaw CLI.

## Install warning path

1. Package manager runs `packages/clawdbot/scripts/postinstall.js` if included in the package lifecycle.
2. Script emits the rename warning: `clawdbot renamed -> openclaw`.

## Evidence limits

G009 confirmed npm pack dry-run output but also confirmed the metadata-declared CLI target is missing. Install smoke remains exceptioned until the target exists.
