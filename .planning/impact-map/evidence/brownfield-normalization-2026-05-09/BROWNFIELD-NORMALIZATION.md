# Brownfield Handoff Normalization Evidence

Date: 2026-05-09
Mode: Verified + GSD bridge
Coverage: `exceptioned-deep-partial`

## Scope

This pass normalizes the imported OpenClaw architecture and impact-map handoff for the `VersionAnalyze` worktree. It uses the existing `.planning/codebase/**`, `.planning/architecture/**`, and `.planning/impact-map/**` artifacts as the source map and adds a GSD handoff bridge without mutating GSD mainline control-plane files.

## Tool readiness

| Tool              | Result                                                                                                                        | Evidence                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| GitNexus          | Current worktree indexed at commit `ab54c93`; 9115 files, 139497 symbols, 198754 relationships, 3185 clusters, 300 processes. | `logs/gitnexus-current-status.log`          |
| code-review-graph | Current worktree built on branch `VersionAnalyze` at commit `ab54c932d998`; 8581 files, 80939 nodes, 732238 edges.            | `logs/code-review-graph-current-status.log` |
| graphify          | Unavailable; `command -v graphify` failed, and `.planning/config.json` ownership is absent.                                   | `logs/graphify-readiness.log`               |

Historical note: an earlier orchestrated `gitnexus analyze .` attempt was stopped after it fell back to sequential parsing and made no additional visible progress; the user then ran GitNexus and code-review-graph manually. The blocked attempt is preserved in `logs/gitnexus-readiness.log`.

## Normalization actions

- Preserved the existing hierarchy: architecture domain → subsystem/group → final leaf packet.
- Counted 283 complete final leaf packet directories containing `README.md`, `code-paths.md`, `file-roles.md`, and `change-to-test.md`.
- Normalized 50 complete leaf packet `Coverage: partial` labels to `Coverage: deep-partial` because they have source/path/test-ladder packets but no fresh passing validation evidence in this worktree.
- Did not promote any leaf to `verified` solely from graph availability.
- Kept historical wave evidence intact under `.planning/impact-map/evidence/**`.

## Current active leaf coverage

| Label                      | Count | Meaning in this handoff                                                                                              |
| -------------------------- | ----: | -------------------------------------------------------------------------------------------------------------------- |
| `verified`                 |    95 | Existing leaf has recorded passing evidence from the imported impact-map and remains a validated planning reference. |
| `exceptioned-deep-partial` |   117 | Leaf is source-grounded but has explicit blocked or failed validation evidence.                                      |
| `deep-partial`             |    71 | Leaf has a source/path/test ladder packet but lacks fresh passing validation evidence in this worktree.              |
| `partial`                  |     0 | No active complete leaf packet remains plain partial after normalization.                                            |
| `stub`                     |     0 | No active complete leaf packet is marked stub.                                                                       |

## Top-level leaf distribution

| Domain        | Leaf packets |
| ------------- | -----------: |
| `src/`        |           98 |
| `extensions/` |           85 |
| `docs/`       |           30 |
| `apps/`       |           27 |
| `scripts/`    |           17 |
| `ui/`         |           14 |
| `test-infra/` |            9 |
| `packages/`   |            3 |

## Change impact preflight

| Tool                                                   | Result                                                                                                                                                                                                          | Evidence                                    |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| GitNexus `detect-changes --scope all`                  | Low risk; 2 non-planning files, 15 symbols, 0 affected processes. Planning docs are intentionally ignored by `.gitnexusignore`, so this primarily captures manual GitNexus setup files present in the worktree. | `logs/gitnexus-detect-changes.log`          |
| code-review-graph `detect-changes --brief --base HEAD` | 55 changed planning files, 0 changed functions/classes, 0 affected flows, 0 test gaps, risk score 0.00.                                                                                                         | `logs/code-review-graph-detect-changes.log` |

## Exceptions and limits

- GitNexus indexing succeeded after manual rerun, but Swift parser support remains a known local tool caveat from the earlier readiness log.
- code-review-graph built successfully, but graph availability alone is not treated as leaf verification.
- graphify is not available and was not used.
- Product tests/builds were not run during this normalization pass; the handoff relies on existing leaf validation ladders plus current graph/tool readiness.
- Root files generated by manual GitNexus setup (`AGENTS.md`, `.gitignore`, `.gitnexusignore`) are outside this handoff skill's artifact boundary and are not part of the normalization claim.

## GSD control-plane boundary

This pass did not create or modify:

- `.planning/PROJECT.md`
- `.planning/REQUIREMENTS.md`
- `.planning/ROADMAP.md`
- `.planning/STATE.md`
- GSD phase directories
- backlog files
