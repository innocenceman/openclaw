# Scripts docker Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Invocation path

1. Root package scripts, direct shell use, or neighboring wrappers invoke this leaf.
2. Files under `scripts/docker/` perform the leaf-specific automation.
3. Validation then flows into the closest wrapper script, docs page, or test called out in this leaf's file roles.

## Trace rule

Start from the entry command or wrapper that actually invokes the script, then walk into helpers and downstream artifacts before deciding how broad validation must be.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `10` changed path(s) to this final leaf. `10` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 10}`.

- `scripts/docker/cleanup-smoke/Dockerfile`
- `scripts/docker/cleanup-smoke/run.sh`
- `scripts/docker/install-sh-common/cli-verify.sh`
- `scripts/docker/install-sh-common/version-parse.sh`
- `scripts/docker/install-sh-e2e/Dockerfile`
- `scripts/docker/install-sh-e2e/run.sh`
- `scripts/docker/install-sh-nonroot/Dockerfile`
- `scripts/docker/install-sh-nonroot/run.sh`
- `scripts/docker/install-sh-smoke/run.sh`
- `scripts/docker/setup.sh`

<!-- version-diff-refresh:v2026.4.24:end -->
