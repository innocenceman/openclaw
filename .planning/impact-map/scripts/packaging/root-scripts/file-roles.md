# Root Scripts File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                                    | Role                                                                        | Evidence state | Impact notes                                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------- |
| scripts/\*                                                      | Primary automation files owned by this leaf.                                | deep-partial   | Path changes can break root package scripts, docs examples, or wrapper scripts. |
| package.json build/check/docs/release/test/ui scripts           | Main entrypoints that fan into top-level scripts.                           | partial        | This leaf has the broadest execution blast radius among Wave 4 script leaves.   |
| `scripts/lib/**` and neighboring top-level `scripts/*` wrappers | Shared helpers and neighboring wrappers consumed by many top-level scripts. | partial        | Helper changes often require follow-up checks outside a single script.          |

## Update rule

When a new wrapper, docs guide, or shared helper becomes a stable dependency for this script leaf, record it here so future impact checks do not stop at the first shell file they see.
