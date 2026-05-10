# Scripts e2e Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Invocation path

1. Root package scripts, direct shell use, or neighboring wrappers invoke this leaf.
2. Files under `scripts/e2e/` perform the leaf-specific automation.
3. Validation then flows into the closest wrapper script, docs page, or test called out in this leaf's file roles.

## Trace rule

Start from the entry command or wrapper that actually invokes the script, then walk into helpers and downstream artifacts before deciding how broad validation must be.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `38` changed path(s) to this final leaf. `38` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 17, 'A': 21}`.

- `scripts/e2e/Dockerfile`
- `scripts/e2e/Dockerfile.qr-import`
- `scripts/e2e/agents-delete-shared-workspace-docker.sh`
- `scripts/e2e/build-image.sh`
- `scripts/e2e/bun-global-install-smoke.sh`
- `scripts/e2e/bundled-channel-runtime-deps-docker.sh`
- `scripts/e2e/config-reload-source-docker.sh`
- `scripts/e2e/cron-mcp-cleanup-docker-client.ts`
- `scripts/e2e/cron-mcp-cleanup-docker.sh`
- `scripts/e2e/cron-mcp-cleanup-seed.ts`
- `scripts/e2e/docker-openai-seed.ts`
- `scripts/e2e/doctor-install-switch-docker.sh`
- `scripts/e2e/gateway-network-docker.sh`
- `scripts/e2e/lib/parallels-macos-common.sh`
- `scripts/e2e/lib/parallels-package-common.sh`
- `scripts/e2e/mcp-channels-docker-client.ts`
- `scripts/e2e/mcp-channels-docker.sh`
- `scripts/e2e/mcp-channels-harness.ts`
- `scripts/e2e/mcp-channels-seed.ts`
- `scripts/e2e/mock-openai-server.mjs`
- `scripts/e2e/npm-onboard-channel-agent-docker.sh`
- `scripts/e2e/npm-telegram-live-docker.sh`
- `scripts/e2e/npm-telegram-live-runner.ts`
- `scripts/e2e/onboard-docker.sh`
- `scripts/e2e/openai-image-auth-docker-client.ts`
- `scripts/e2e/openai-image-auth-docker.sh`
- `scripts/e2e/openai-web-search-minimal-docker.sh`
- `scripts/e2e/openwebui-docker.sh`
- `scripts/e2e/openwebui-probe.mjs`
- `scripts/e2e/parallels-linux-smoke.sh`
- `... 另有 8 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
