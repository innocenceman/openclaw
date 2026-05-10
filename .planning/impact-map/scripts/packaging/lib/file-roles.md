# Scripts lib File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                                   | Role                                                       | Evidence state | Impact notes                                                                                       |
| -------------------------------------------------------------- | ---------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------- |
| scripts/lib/\*\*                                               | Primary automation files owned by this leaf.               | deep-partial   | Path changes can break root package scripts, docs examples, or wrapper scripts.                    |
| scripts/lib/\*\*                                               | Shared utility modules imported by many top-level scripts. | deep-partial   | This is a fan-out surface: small helper changes can affect many unrelated checks or release paths. |
| test/release-check.test.ts and test/plugin-npm-release.test.ts | Tests that exercise selected shared-library helpers.       | partial        | Use these first when touching release-oriented helpers.                                            |

## Update rule

When a new wrapper, docs guide, or shared helper becomes a stable dependency for this script leaf, record it here so future impact checks do not stop at the first shell file they see.
