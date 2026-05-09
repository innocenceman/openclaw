# Impact Map

Coverage: `partial`

The impact map connects large module → submodule → file → key code path → behavior → validation. It exists so future file changes can quickly identify likely impact and the smallest safe test/integration-coordination set.

## Coverage labels

- `stub`: structure exists but claims are not deeply verified.
- `partial`: verified for selected files/symbols only, usually at module or submodule level.
- `deep-partial`: leaf-level file roles, code paths, and change-to-test cards exist from repo-native structural inspection, but no fresh product tests, builds, or graph indexes are implied.
- `verified`: checked against current code and tests with fresh evidence.

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

The current architecture blueprint is tracked in [`../architecture/OPENCLAW-ARCHITECTURE-BLUEPRINT.md`](../architecture/OPENCLAW-ARCHITECTURE-BLUEPRINT.md). It records the large-module, submodule, leaf-module, dependency-DAG, runtime-flow, and hotspot interpretation of the existing repository without requiring source-code migration.
