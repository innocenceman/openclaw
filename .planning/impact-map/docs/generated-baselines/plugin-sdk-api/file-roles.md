# Plugin SDK API Baselines File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                | Role                                                          | Evidence state | Impact notes                                                            |
| ------------------------------------------- | ------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------- |
| scripts/generate-plugin-sdk-api-baseline.ts | Generator/check CLI for Plugin SDK API drift.                 | deep-partial   | This is the first executable seam when public SDK drift is intentional. |
| src/plugin-sdk/api-baseline.ts              | Baseline serialization and metadata logic for the Plugin SDK. | partial        | Changes here alter both check and generation semantics.                 |

## Update rule

If a new generator, checked-in artifact, or guard test becomes part of this drift loop, add it here before treating the leaf as closed.
