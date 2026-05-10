# Release Versioning Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Version fan-out path

1. A version change starts from the canonical source(s) recorded in the leaf cards.
2. The change fans out into app version surfaces, CLI release guard scripts, and public release docs.
3. Release verification then depends on which part changed: version files, CLI guards, or docs policy.

## Trace rule

Do not stop at the first version string you see. Release/version work in this repo crosses package, app, docs, and workflow boundaries by design.
