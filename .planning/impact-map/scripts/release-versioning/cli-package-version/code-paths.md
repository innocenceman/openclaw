# CLI Package Version Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## CLI release-check path

1. `package.json` version and release-tag intent are established.
2. `scripts/openclaw-npm-release-check.ts` validates the intended npm release before publish.
3. `scripts/openclaw-npm-postpublish-verify.ts` is the downstream verification path after publish, while `scripts/write-cli-compat.ts` keeps related compatibility metadata aligned.

## Trace rule

This leaf is release-sensitive but still planning-only in Wave 4: record the guard path without performing publish actions.
