# Scripts k8s

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `scripts/k8s/**`.

## Observed facts

- 7 files observed in `scripts/k8s/`.
- Sample files:
- `scripts/k8s/create-kind.sh`
- `scripts/k8s/deploy.sh`
- `scripts/k8s/manifests/configmap.yaml`
- `scripts/k8s/manifests/deployment.yaml`
- `scripts/k8s/manifests/kustomization.yaml`
- No direct root `package.json` script values pointed at this directory during Wave 4 inspection; usage is via direct invocation, adjacent wrappers, or imports.

## Incoming dependencies

- Build/check/test/release/docs flows usually enter from root `package.json` scripts, direct shell invocation, or neighboring wrappers.

## Outgoing dependencies

- `docs/install/kubernetes.md` is the adjacent operator guide for these scripts.

## Risk triggers

- Renaming scripts without updating root wrappers or docs examples.
- Changing helper semantics that multiple wrappers or CI flows assume.

## Validation status

Wave 4 did not execute packaging/release/install/live environment actions for this leaf. Coverage is based on repo-native inspection of script files, wrapper references, and root package-script wiring.
