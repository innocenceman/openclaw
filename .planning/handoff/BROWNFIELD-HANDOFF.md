# Brownfield Handoff

Date: 2026-05-09
Mode: Verified + GSD bridge
Coverage: `exceptioned-deep-partial`

Current target baseline: `v2026.3.28`; transition from `v2026.3.24` is recorded in `.planning/version-diff/v2026.3.24...v2026.3.28/`.

## Readiness verdict

OpenClaw is ready for GSD mainline initialization or planning with a normalized brownfield handoff, subject to the explicit validation exceptions below.

This handoff is an input packet for future GSD workflows. It does not create requirements, a roadmap, state, backlog, or phase directories by itself.

## Source artifacts

| Artifact                                                                                        | Purpose                                                                    |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `.planning/codebase/`                                                                           | Fast repository map from `$gsd-map-codebase`.                              |
| `.planning/architecture/ARCHITECTURE-ATLAS.md`                                                  | Logical architecture atlas with diagrams and physical-directory mapping.   |
| `.planning/impact-map/README.md`                                                                | Impact-map concepts, taxonomy, and normalized active coverage counts.      |
| `.planning/impact-map/MODULE-INDEX.md`                                                          | Canonical path-to-impact-slice lookup table.                               |
| `.planning/impact-map/COVERAGE-ROADMAP.md`                                                      | Coverage promotion rules, exception lanes, and evidence links.             |
| `.planning/impact-map/evidence/brownfield-normalization-2026-05-09/BROWNFIELD-NORMALIZATION.md` | Current `VersionAnalyze` normalization evidence and tool readiness ledger. |

## Module inventory

| Scope         | Active final leaf packets |
| ------------- | ------------------------: |
| `src/`        |                        98 |
| `extensions/` |                        85 |
| `docs/`       |                        30 |
| `apps/`       |                        27 |
| `scripts/`    |                        17 |
| `ui/`         |                        14 |
| `test-infra/` |                         9 |
| `packages/`   |                         3 |
| **Total**     |                   **283** |

## Coverage summary

| Label                      | Count | Handoff meaning                                                                                                |
| -------------------------- | ----: | -------------------------------------------------------------------------------------------------------------- |
| `verified`                 |    95 | Imported leaf evidence records passing handoff-readiness checks.                                               |
| `exceptioned-deep-partial` |   117 | Source-grounded leaf with explicit blocked or failed validation evidence.                                      |
| `deep-partial`             |    71 | Source/path/test-ladder packet exists, but no fresh passing validation evidence was recorded in this worktree. |
| `partial`                  |     0 | Plain partial labels were normalized away from active complete leaf packets.                                   |
| `stub`                     |     0 | No active complete leaf packet is marked as scaffold-only.                                                     |

## Tool evidence used

| Tool              | Current result                                                                                                                                 | Limit                                                                                                                         |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| GitNexus          | Current `VersionAnalyze` worktree indexed at commit `ab54c93`; 9115 files, 139497 symbols, 198754 relationships, 3185 clusters, 300 processes. | Earlier automated run hit Swift parser and worker-timeout caveats; current status is from the user's successful manual rerun. |
| code-review-graph | Current `VersionAnalyze` worktree built at commit `ab54c932d998`; 8581 files, 80939 nodes, 732238 edges.                                       | Graph build does not by itself promote leaf packets to `verified`.                                                            |
| graphify          | Unavailable on PATH; `.planning/config.json` is absent, so graph lifecycle ownership is not established.                                       | Not used for this handoff.                                                                                                    |
| Repo-native map   | Existing `.planning/codebase`, architecture, and impact-map packets provide source/path/test-ladder grounding.                                 | Product test/build execution was not rerun in this normalization pass.                                                        |

## Change impact preflight

| Tool                                                   | Result                                                                                                  | Limit                                                                                                                                |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| GitNexus `detect-changes --scope all`                  | Low risk; 0 affected processes.                                                                         | `.planning/**` is ignored by the GitNexus index, so this reflects unrelated GitNexus setup files rather than the planning-doc edits. |
| code-review-graph `detect-changes --brief --base HEAD` | 55 changed planning files, 0 changed functions/classes, 0 affected flows, 0 test gaps, risk score 0.00. | Documentation-only graph preflight; it does not replace future phase-specific tests.                                                 |

## Top risks to carry into GSD mainline

1. **Validation exceptions are numerous but explicit.** Start phase planning from the owning leaf packet and check whether the leaf is `verified`, `exceptioned-deep-partial`, or `deep-partial` before accepting scope.
2. **Plugin and provider surfaces have mixed validation depth.** Many extension/provider leaves are now conservative `deep-partial`; plan targeted package/provider tests before changing runtime behavior.
3. **Native app validation depends on host capabilities.** macOS/iOS/Android leaves include platform prerequisites that this Linux worktree cannot satisfy.
4. **Docs and release automation have generated-baseline and packaging coupling.** Changes to config schema, plugin SDK, installers, or release scripts should use the roadmap's generated-baseline and packaging validation ladders.
5. **Graph tools are current but not sufficient alone.** GitNexus and code-review-graph should guide impact analysis; passing targeted tests/builds remain required before promoting new work to verified.

## Suggested backlog candidates

- Normalize remaining exceptioned provider/plugin leaves with focused runtime dependency and package-install evidence.
- Add a current-worktree verified wave for the 71 `deep-partial` leaves, starting with high-change provider/tool plugin families.
- Resolve native app validation prerequisites by running platform smoke checks on appropriate macOS/iOS/Android hosts.
- Close docs/release automation exceptions by running render, generated-baseline, plugin-sdk API, package, and release dry-run checks in a prepared environment.
- Add a recurring graph freshness check to future GSD phase entry criteria: GitNexus status, code-review-graph status, and targeted impact query for the phase anchor.

## Recommended next GSD command

Because GSD mainline files are absent in this worktree, the recommended next command is:

```text
$gsd-new-project
```

Use this brownfield handoff as imported context for project initialization. If external planning documents already exist and should be reconciled first, use:

```text
$gsd-ingest-docs
```

Then plan the first implementation phase with:

```text
$gsd-plan-phase
```

## Boundary statement

This handoff did not create or modify GSD mainline control-plane files:

- `.planning/PROJECT.md`
- `.planning/REQUIREMENTS.md`
- `.planning/ROADMAP.md`
- `.planning/STATE.md`
- GSD phase directories
- backlog files

Future GSD workflows may adopt this handoff, but this file itself has recommendation authority only.
