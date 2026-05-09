# Scripts dev

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `scripts/dev/**`.

## Observed facts

- 6 files observed in `scripts/dev/`.
- Sample files:
- `scripts/dev/discord-acp-plain-language-smoke.ts`
- `scripts/dev/gateway-smoke.ts`
- `scripts/dev/gateway-ws-client.ts`
- `scripts/dev/ios-node-e2e.ts`
- `scripts/dev/ios-pull-gateway-log.sh`
- No direct root `package.json` script values pointed at this directory during Wave 4 inspection; usage is via direct invocation, adjacent wrappers, or imports.

## Incoming dependencies

- Build/check/test/release/docs flows usually enter from root `package.json` scripts, direct shell invocation, or neighboring wrappers.

## Outgoing dependencies

- Downstream impact depends on each script family: packaging, docs, release, smoke, or infra tasks.

## Risk triggers

- Renaming scripts without updating root wrappers or docs examples.
- Changing helper semantics that multiple wrappers or CI flows assume.

## Validation status

Wave 4 did not execute packaging/release/install/live environment actions for this leaf. Coverage is based on repo-native inspection of script files, wrapper references, and root package-script wiring.
