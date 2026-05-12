# Scripts and Packaging

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Build, package, install, local smoke, Kubernetes/Podman helpers, pre-commit helpers, and shared script libraries rooted in `scripts/` and expanded by this closure group.

## Observed facts

- Wave 4 promotion covered all 12 child rows in `packaging/leaf-index.md`; none remain silently `stub`.
- Exact-priority leaves for this wave are `dev/`, `docker/`, `docs-i18n/`, `e2e/`, `lib/`, `pre-commit/`, `root-scripts/`, and `shell-helpers/`.
- Residual leaves `k8s/`, `podman/`, `repro/`, and `systemd/` are now explicit `exceptioned-deep-partial` rows because live cluster/container/systemd validation was not run.
- The broadest execution blast radius sits in `root-scripts/` and `lib/`, where many build/check/release/test flows converge.

## Validation status

This closure group is `exceptioned-deep-partial`, not `verified`: G008 ran targeted script tests and check-only package metadata validations, but release/package staging and live environment actions remain exceptioned.
