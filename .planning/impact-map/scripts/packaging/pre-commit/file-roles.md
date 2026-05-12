# Scripts pre-commit File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                | Role                                                | Evidence state | Impact notes                                                                    |
| ------------------------------------------- | --------------------------------------------------- | -------------- | ------------------------------------------------------------------------------- |
| scripts/pre-commit/\*\*                     | Primary automation files owned by this leaf.        | deep-partial   | Path changes can break root package scripts, docs examples, or wrapper scripts. |
| .github/workflows/ci.yml and git-hooks/\*\* | Hook and CI wrappers around the pre-commit helpers. | partial        | The helpers are dependency-free because they run in varied environments.        |

## Update rule

When a new wrapper, docs guide, or shared helper becomes a stable dependency for this script leaf, record it here so future impact checks do not stop at the first shell file they see.
