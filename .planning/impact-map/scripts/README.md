# Automation Impact Map

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

This module maps packaging, release/versioning, docs tooling, smoke harnesses, and supporting automation under `scripts/`.

## Repo-native evidence snapshot

Inspected without running packaging/release/live-environment actions:

- `find scripts -maxdepth 2` inventory of top-level scripts and categorized subdirectories.
- Root `package.json` script inspection for build/check/docs/release/test entrypoints.
- `rg` scans for helper imports, docs references, and workflow wrappers around script leaves.

Observed facts:

- The top-level `scripts/` directory contains many root wrappers and helpers beyond the categorized subdirectories.
- `packaging/` expands into 12 child rows and is the main closure group for dev/docker/e2e/helper/install packaging tasks.
- `release-versioning/` expands into three exact leaves covering app versions, CLI release guards, and release-policy docs.
- Several script leaves are docs/ops-adjacent rather than product-code-adjacent; Wave 4 recorded the validation ladders without executing live actions.

## Submodules

| Submodule                         | Directory             | Coverage                   | Primary risk                                                   | First validation                       |
| --------------------------------- | --------------------- | -------------------------- | -------------------------------------------------------------- | -------------------------------------- |
| Packaging and helper scripts      | `packaging/`          | `exceptioned-deep-partial` | packaging/install wrappers, E2E harnesses, shared helper drift | `packaging/change-to-test.md`          |
| Release and versioning automation | `release-versioning/` | `exceptioned-deep-partial` | multi-location version alignment and release guard/docs drift  | `release-versioning/change-to-test.md` |

## Boundary

Documentation content and generated baseline coverage lives in `../docs/`. Controller-owned root ledgers remain outside this worker scope.
