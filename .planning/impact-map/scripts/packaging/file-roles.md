# Scripts and Packaging File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                                       | Role                       | Evidence state             | Impact notes                                                                         |
| ------------------------------------------------------------------ | -------------------------- | -------------------------- | ------------------------------------------------------------------------------------ |
| `scripts/<leaf>/**`                                                | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Each child leaf owns the first-impact map for its script family.                     |
| `package.json` build/check/docs/release/test scripts               | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Wrapper drift can make a healthy leaf unreachable, or vice versa.                    |
| `docs/install/**`, `docs/automation/**`, and related operator docs | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Several packaging leaves have docs-coupled behavior, not just code-coupled behavior. |

## Update rule

Use this parent card for shared wrapper and operator-surface context only. File-specific impact belongs in the child leaf cards and rows in `leaf-index.md`.
