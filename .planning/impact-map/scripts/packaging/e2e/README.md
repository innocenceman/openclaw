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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `build-ci-tests`.
- Risk: `medium`.
- Compatibility: `compatible`.
- Changed paths in this leaf: `38` (修改 17，新增 21).
- Target-existing changed paths listed here: `38`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `scripts/e2e/Dockerfile`
- `scripts/e2e/Dockerfile.qr-import`
- `scripts/e2e/agents-delete-shared-workspace-docker.sh`
- `scripts/e2e/build-image.sh`
- `scripts/e2e/bun-global-install-smoke.sh`
- `scripts/e2e/config-reload-source-docker.sh`
- `scripts/e2e/cron-mcp-cleanup-docker-client.ts`
- `scripts/e2e/cron-mcp-cleanup-docker.sh`
- `scripts/e2e/cron-mcp-cleanup-seed.ts`
- `scripts/e2e/docker-openai-seed.ts`
- `scripts/e2e/doctor-install-switch-docker.sh`
- `... 另有 26 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `build-ci-tests`
- Risk: `medium`
- Compatibility: `compatible`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `144`
- Target-existing changed paths reflected here: `143`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

- `scripts/e2e/Dockerfile`
- `scripts/e2e/Dockerfile.qr-import`
- `scripts/e2e/agents-delete-shared-workspace-docker.sh`
- `scripts/e2e/browser-cdp-snapshot-docker.sh`
- `scripts/e2e/build-image.sh`
- `scripts/e2e/bun-global-install-smoke.sh`
- `scripts/e2e/bundled-plugin-install-uninstall-docker.sh`
- `scripts/e2e/codex-npm-plugin-live-docker.sh`
- `scripts/e2e/commitments-safety-docker-client.ts`
- `scripts/e2e/commitments-safety-docker.sh`
- `scripts/e2e/config-reload-source-docker.sh`
- `scripts/e2e/crestodian-first-run-docker-client.ts`
- `scripts/e2e/crestodian-first-run-docker.sh`
- `scripts/e2e/crestodian-first-run-spec.json`
- `scripts/e2e/crestodian-planner-docker-client.mjs`
- `scripts/e2e/crestodian-planner-docker.sh`
- `scripts/e2e/crestodian-rescue-docker-client.ts`
- `scripts/e2e/crestodian-rescue-docker.sh`
- `scripts/e2e/cron-mcp-cleanup-docker-client.ts`
- `scripts/e2e/cron-mcp-cleanup-docker.sh`
- `scripts/e2e/cron-mcp-cleanup-seed.ts`
- `scripts/e2e/docker-openai-seed.ts`
- `scripts/e2e/doctor-install-switch-docker.sh`
- `scripts/e2e/gateway-network-docker.sh`
- `scripts/e2e/kitchen-sink-plugin-docker.sh`
- `scripts/e2e/kitchen-sink-rpc-walk.mjs`
- `scripts/e2e/lib/browser-cdp-snapshot/assert-snapshot.mjs`
- `scripts/e2e/lib/browser-cdp-snapshot/fixture-server.mjs`
- `scripts/e2e/lib/bun-global-install/assertions.mjs`
- `scripts/e2e/lib/bundled-plugin-install-uninstall/probe.mjs`
- `scripts/e2e/lib/bundled-plugin-install-uninstall/runtime-smoke.mjs`
- `scripts/e2e/lib/bundled-plugin-install-uninstall/sweep.sh`
- `scripts/e2e/lib/clawhub-fixture-server.cjs`
- `scripts/e2e/lib/codex-npm-plugin-live/assertions.mjs`
- `scripts/e2e/lib/config-reload/assert-log.mjs`
- `scripts/e2e/lib/config-reload/mutate-metadata.mjs`
- `scripts/e2e/lib/docker-stats/assert-resource-ceiling.mjs`
- `scripts/e2e/lib/doctor-install-switch/scenario.sh`
- `scripts/e2e/lib/doctor-install-switch/shims/loginctl`
- `scripts/e2e/lib/doctor-install-switch/shims/systemctl`
- … plus 103 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
