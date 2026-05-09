# Impact Map

Coverage: `exceptioned-deep-partial`

The impact map connects large module → submodule → file → key code path → behavior → validation. It exists so future file changes can quickly identify likely impact and the smallest safe test/integration-coordination set.

## Coverage labels

- `stub`: placeholder only; not acceptable in final handoff.
- `partial`: mapped but not source/test-grounded. No active complete leaf packet should stay in this state.
- `deep-partial`: source-grounded and has a validation ladder, but lacks passing evidence.
- `verified`: boundary, source, tool/test/check evidence passed for handoff readiness.
- `exceptioned-deep-partial`: source-grounded, but verification is blocked or failed with an explicit reason.

## Current normalized state

The 2026-05-09 brownfield normalization pass treats this map as a GSD handoff input, not as a GSD mainline state file. Active final leaf packets now use only `verified`, `exceptioned-deep-partial`, or `deep-partial` labels:

| Label                      | Active final leaf packets | Meaning                                                                                             |
| -------------------------- | ------------------------: | --------------------------------------------------------------------------------------------------- |
| `verified`                 |                        95 | Existing imported evidence records passing handoff readiness checks.                                |
| `exceptioned-deep-partial` |                       117 | Source-grounded leaf with explicit blocked or failed validation.                                    |
| `deep-partial`             |                        71 | Source/path/test-ladder packet exists, but no fresh passing evidence was recorded in this worktree. |

See [`evidence/brownfield-normalization-2026-05-09/BROWNFIELD-NORMALIZATION.md`](evidence/brownfield-normalization-2026-05-09/BROWNFIELD-NORMALIZATION.md) for the current tool readiness and normalization ledger.

## Change workflow

Use [`CHANGE-IMPACT-WORKFLOW.md`](CHANGE-IMPACT-WORKFLOW.md) for the operational step-by-step process. This README defines the impact-map concepts, hierarchy, and coverage labels only.

## Hierarchy convention

Detailed coverage uses directories, not only flat markdown files:

```text
.planning/impact-map/<large-module>/<submodule>/
  README.md
  file-roles.md
  code-paths.md
  change-to-test.md
```

Avoid flat files and legacy directories when a canonical submodule directory exists. Delete pointer-only compatibility files unless an external published link requires them. A submodule is not considered `partial` until its cards are filled from repo-native inspection or fresh graph/tool evidence.

## Leaf module convention

A leaf module is the smallest planning unit that still has coherent ownership and a distinct validation strategy. The current leaf taxonomy is tracked in [`LEAF-MODULE-TAXONOMY.md`](LEAF-MODULE-TAXONOMY.md).

Do not split merely because a directory has many files. Split when a child path has independent behavior, independent owners, or a different first-test strategy. `leaf-index.md` may list planned leaves without creating empty directories; create the leaf directory only when adding real docs. Leaf docs still use the standard shape: `README.md`, `file-roles.md`, `code-paths.md`, and `change-to-test.md`.

## Architecture atlas

The current read-only architecture overview is tracked in [`../architecture/ARCHITECTURE-ATLAS.md`](../architecture/ARCHITECTURE-ATLAS.md). It combines the ownership tree, logical module map, dependency DAG, runtime flows, and hotspot map without requiring source-code migration.

## Architecture blueprint

The current architecture blueprint is merged into [`../architecture/ARCHITECTURE-ATLAS.md`](../architecture/ARCHITECTURE-ATLAS.md). It records the large-module, submodule, leaf-module, dependency-DAG, runtime-flow, and hotspot interpretation of the existing repository without requiring source-code migration.
