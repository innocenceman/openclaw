# Scripts e2e

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `scripts/e2e/**`.

## Observed facts

- 13 files observed in `scripts/e2e/`.
- Sample files:
- `scripts/e2e/Dockerfile`
- `scripts/e2e/Dockerfile.qr-import`
- `scripts/e2e/doctor-install-switch-docker.sh`
- `scripts/e2e/gateway-network-docker.sh`
- `scripts/e2e/onboard-docker.sh`
- Direct root package scripts observed: `test:docker:doctor-switch`, `test:docker:gateway-network`, `test:docker:onboard`, `test:docker:openwebui`, `test:docker:plugins`, `test:docker:qr`, `test:parallels:linux`, `test:parallels:macos`, `test:parallels:npm-update`, `test:parallels:windows`.

## Incoming dependencies

- Build/check/test/release/docs flows usually enter from root `package.json` scripts, direct shell invocation, or neighboring wrappers.

## Outgoing dependencies

- Root package scripts `test:docker:*` and `test:parallels:*` are the first operator entrypoints.

## Risk triggers

- Renaming scripts without updating root wrappers or docs examples.
- Changing helper semantics that multiple wrappers or CI flows assume.

## Validation status

Wave 4 did not execute packaging/release/install/live environment actions for this leaf. Coverage is based on repo-native inspection of script files, wrapper references, and root package-script wiring.
