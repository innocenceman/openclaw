# Scripts shell-helpers File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                    | Role                                                  | Evidence state | Impact notes                                                                         |
| ------------------------------- | ----------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------ |
| scripts/shell-helpers/\*\*      | Primary automation files owned by this leaf.          | deep-partial   | Path changes can break root package scripts, docs examples, or wrapper scripts.      |
| scripts/shell-helpers/README.md | Operator instructions for sourcing the helper script. | partial        | Shell API drift is easiest to miss when the README lags behind the function surface. |

## Update rule

When a new wrapper, docs guide, or shared helper becomes a stable dependency for this script leaf, record it here so future impact checks do not stop at the first shell file they see.
