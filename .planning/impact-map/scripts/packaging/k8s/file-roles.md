# Scripts k8s File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path               | Role                                         | Evidence state | Impact notes                                                                    |
| -------------------------- | -------------------------------------------- | -------------- | ------------------------------------------------------------------------------- |
| scripts/k8s/\*\*           | Primary automation files owned by this leaf. | partial        | Path changes can break root package scripts, docs examples, or wrapper scripts. |
| docs/install/kubernetes.md | User/operator guide for the Kubernetes flow. | partial        | Docs and scripts drift together here.                                           |

## Update rule

When a new wrapper, docs guide, or shared helper becomes a stable dependency for this script leaf, record it here so future impact checks do not stop at the first shell file they see.
