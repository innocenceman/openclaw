# Config Docs Baselines File Roles

Coverage: `verified`
Freshness: 2026-05-08 repo-native inspection only

| File or path                            | Role                                           | Evidence state | Impact notes                                                             |
| --------------------------------------- | ---------------------------------------------- | -------------- | ------------------------------------------------------------------------ |
| scripts/generate-config-doc-baseline.ts | Generator/check CLI for config baseline drift. | deep-partial   | This is the first executable seam when config docs drift is intentional. |
| src/config/doc-baseline.ts              | Baseline serialization and metadata logic.     | partial        | Changes here affect both check and generation behavior.                  |

## Update rule

If a new generator, checked-in artifact, or guard test becomes part of this drift loop, add it here before treating the leaf as closed.
