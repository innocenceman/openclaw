# Architecture

Coverage: `partial`
Freshness: 2026-05-07

This directory is the architecture entry point for the `.planning` workspace. It describes the existing repository without requiring source-code migration.

## Read order

1. `OPENCLAW-ARCHITECTURE-BLUEPRINT.md` — start here for the complete architecture map: diagrams, large modules, submodules, dependency DAG, runtime flows, hotspots, and maintenance checklist.
2. `ARCHITECTURE-ATLAS.md` — evidence-oriented view that explains how to read the architecture using ownership tree, logical module map, dependency DAG, runtime flows, and hotspots.
3. `../impact-map/MODULE-INDEX.md` — operational change-impact index for locating the owning impact-map slice.
4. `../impact-map/LEAF-MODULE-TAXONOMY.md` — leaf module definition and promotion rules.

## Relationship to impact-map

- `architecture/` answers: “What is the system architecture?”
- `impact-map/` answers: “If I change this path, what can it affect and what should I test?”
- `tools/` answers: “Which graph or review tools have fresh enough evidence to trust?”
- `STATE.md` answers: “What planning coverage work is complete or next?”
