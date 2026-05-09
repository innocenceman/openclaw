# Architecture

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09

This directory is the architecture entry point for the `.planning` workspace. It describes the existing repository without requiring source-code migration.

## Read order

1. `ARCHITECTURE-ATLAS.md` — canonical architecture map: diagrams, large modules, submodules, dependency DAG, runtime flows, hotspots, evidence, and maintenance checklist.
2. `../impact-map/MODULE-INDEX.md` — operational change-impact index for locating the owning impact-map slice.
3. `../impact-map/LEAF-MODULE-TAXONOMY.md` — leaf module definition and promotion rules.

## Relationship to impact-map

- `architecture/` answers: “What is the system architecture?”
- `impact-map/` answers: “If I change this path, what can it affect and what should I test?”
- `tools/` answers: “Which graph or review tools have fresh enough evidence to trust?”
- `STATE.md` answers: “What planning coverage work is complete or next?”
