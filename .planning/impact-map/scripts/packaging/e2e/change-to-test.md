# Scripts e2e Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                       | First validation                                                        | Escalation trigger                                                                                   |
| --------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Docker/parallels E2E flow changed | `pnpm test:docker:<target>` or `pnpm test:parallels:<target>`           | Escalate to broader live/docker suites only when multiple harnesses share the changed path.          |
| Script implementation changed     | Run the narrowest wrapper or direct script check that owns the behavior | Escalate to broader package/build/test flows when shared helpers or published surfaces are affected. |
| Script path or flag shape changed | Inspect package.json wrappers, docs examples, and nearby shell callers  | Update all direct invocations in the same change; path drift is a common failure mode.               |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, wrapper references, and root `package.json` scripts without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `38` (修改 17，新增 21).
- Target-existing path refs in active map: `38`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `compatible`.
- First validation move: Run the smallest build/test/tooling check that exercises this leaf, then rely on broader CI only for packaging surfaces.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `compatible`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
