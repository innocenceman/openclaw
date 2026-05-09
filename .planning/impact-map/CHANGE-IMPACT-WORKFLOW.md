# Change Impact Workflow

Coverage: `partial`

## GSD control-plane note

This file owns the changed-file workflow. For verified-wave orchestration, use `../VERIFIED-WAVE-RUNBOOK.md`; for GSD governance and consult order, use `../GSD-OPERATING-MODEL.md`.

This guide is the single step-by-step procedure for starting from a changed repo-root file path and finding the impact-map cards that should drive review, testing, and integration coordination. Coverage labels are defined in [`README.md`](README.md); promotion and graph/tool freshness rules are governed by [`COVERAGE-ROADMAP.md`](COVERAGE-ROADMAP.md).

## Source-of-truth boundaries

- [`README.md`](README.md) owns the impact-map purpose, hierarchy convention, and coverage glossary.
- [`MODULE-INDEX.md`](MODULE-INDEX.md) owns top-level path lookup and the first large-module landing point.
- [`COVERAGE-ROADMAP.md`](COVERAGE-ROADMAP.md) owns promotion/demotion, wave gates, and graph/tool freshness policy.
- This document owns only the operational file-change workflow.

## Workflow

1. Start from the changed repo-root file path, for example `src/routing/resolve-route.ts`.
2. Locate the owning large module in [`MODULE-INDEX.md`](MODULE-INDEX.md) by matching the changed path's top-level directory.
3. List candidate submodule and leaf docs under that impact-map directory.
4. Choose the primary impact-map target with the overlap rules below.
5. Drill into the primary submodule or leaf docs. If the overlap result is explicitly ambiguous, inspect every recorded candidate before picking a validation path.
6. Read `file-roles.md` to identify ownership, likely impact radius, and shared-surface risk.
7. Read `code-paths.md` to identify behavior paths, callers/callees, and module-boundary crossings to inspect in the repo.
8. Read `change-to-test.md` to select the smallest validation ladder that can prove the changed behavior.
9. Interpret coverage through [`README.md`](README.md): `stub` coverage is not file-level evidence; `partial` and `deep-partial` cards are starting points, not proof of fresh tests or graph verification.
10. Use repo-native inspection when the cards are weak, stale, or ambiguous. Use graph tools only when [`COVERAGE-ROADMAP.md`](COVERAGE-ROADMAP.md) says the slice boundary and freshness are recorded.
11. Escalate from targeted checks to broader suites only when the changed behavior crosses shared surfaces, module boundaries, or release/build/public API surfaces.
12. Update the relevant leaf cards only when the change or inspection reveals new validated ownership, behavior-path, or validation knowledge.

## Overlap rules

Apply these rules before using coverage state as a confidence signal:

1. Specificity first: an exact-file match beats a wildcard or path-owner match.
2. Child beats parent within the same home branch: a child leaf exact-file card is primary; the parent submodule card is secondary context.
3. Aggregate module docs are secondary context unless no non-aggregate candidate exists.
4. Coverage state is only a tie-break after specificity and owner class are fixed. A broader `deep-partial` aggregate must not override a more specific owner.
5. Multi-home fallback: if the same file appears in multiple non-aggregate home branches and the candidates are still `stub` or otherwise weakly evidenced, record all candidates and require repo-native inspection or leaf-card updates before relying on one owner.

## Walkthrough oracle

These examples are static acceptance checks for the workflow, not product tests:

| Changed file                   | Expected impact-map result                                                                                                                                                   | Confidence action                                                                                               |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `extensions/slack/src/send.ts` | Primary `.planning/impact-map/extensions/channel-plugins/slack/`; `.planning/impact-map/extensions/channel-plugins/` remains secondary aggregate context.                    | Use the Slack leaf cards first, then escalate only for shared channel/plugin contracts.                         |
| `src/routing/resolve-route.ts` | Primary `.planning/impact-map/src/channel-abstraction/routing/`; use its leaf packet and `code-paths.md` for the physical source path.                                       | Use the channel-abstraction routing cards first because the explicit logical submodule owns the behavior.       |
| `docs/install/updating.md`     | Explicitly ambiguous `stub` multi-home case across docs/release leaves such as `.planning/impact-map/docs/mintlify/` and `.planning/impact-map/scripts/release-versioning/`. | Record candidates; require repo-native inspection or leaf-card updates before relying on file-level validation. |

## Static validation checklist

- Referenced docs exist: `README.md`, `MODULE-INDEX.md`, and `COVERAGE-ROADMAP.md`.
- The changed file path exists before using it as an example or validation target.
- README contains coverage labels and concepts only; it does not contain the full workflow, overlap rules, walkthroughs, or validation ladders.
- MODULE-INDEX remains a lookup table with only a pointer to this guide.
- COVERAGE-ROADMAP remains the promotion and tool-freshness authority and does not duplicate this procedure.
- Product code, product tests/builds, and graph indexes are not touched by docs-only workflow maintenance.
