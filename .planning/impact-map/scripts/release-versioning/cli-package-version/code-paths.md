# CLI Package Version Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## CLI release-check path

1. `package.json` version and release-tag intent are established.
2. `scripts/openclaw-npm-release-check.ts` validates the intended npm release before publish.
3. `scripts/openclaw-npm-postpublish-verify.ts` is the downstream verification path after publish, while `scripts/write-cli-compat.ts` keeps related compatibility metadata aligned.

## Trace rule

This leaf is release-sensitive but still planning-only in Wave 4: record the guard path without performing publish actions.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `3` changed path(s) to this final leaf. `3` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 3}`.

- `scripts/openclaw-npm-postpublish-verify.ts`
- `scripts/openclaw-npm-release-check.ts`
- `scripts/write-cli-compat.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `scripts/openclaw-npm-postpublish-verify.ts`
- `scripts/openclaw-npm-release-check.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
