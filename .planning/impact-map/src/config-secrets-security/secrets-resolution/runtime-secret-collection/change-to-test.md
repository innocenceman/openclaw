# Runtime Secret Collection Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

2. Run runtime-web/gateway tests when changing web or gateway secret surfaces.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `59` (修改 14，新增 44，删除 1).
- Target-existing path refs in active map: `58`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/secrets/provider-env-vars.dynamic.test.ts`
- `src/secrets/provider-env-vars.ts`
- `src/secrets/runtime-auth.integration.test-helpers.ts`
- `src/secrets/runtime-config-collectors-channels.test.ts`
- `src/secrets/runtime-config-collectors-channels.ts`
- `src/secrets/runtime-config-collectors-core.ts`
- `src/secrets/runtime-config-collectors-plugins.bundled.test.ts`
- `src/secrets/runtime-config-collectors-plugins.test.ts`
- `src/secrets/runtime-config-collectors-plugins.ts`
- `src/secrets/runtime-config-collectors.ts`
- `src/secrets/runtime-core-snapshots.test.ts`
- `src/secrets/runtime-external-channel-audit.test.ts`
- `src/secrets/runtime-external-channel-origin-discovery.test.ts`
- `src/secrets/runtime-gateway-auth-surfaces.test.ts`
- `src/secrets/runtime-gateway-local-surfaces.test.ts`
- `src/secrets/runtime-manifest.runtime.ts`
- `src/secrets/runtime-openai-file-fixture.test-helper.ts`
- `src/secrets/runtime-web-tools-manifest.runtime.ts`
- `src/secrets/runtime-web-tools-state.test.ts`
- `src/secrets/runtime-web-tools.shared.ts`
- `src/secrets/runtime-web-tools.test.ts`
- `src/secrets/runtime-web-tools.ts`
- `src/secrets/runtime.coverage.test.ts`
- `src/secrets/runtime.fast-path.test.ts`
- `src/secrets/runtime.gateway-auth.integration.test.ts`
- `src/secrets/runtime.integration.test-helpers.ts`
- `src/secrets/runtime.loadable-plugin-origins.test.ts`
- `src/secrets/runtime.test-support.ts`
- `src/secrets/runtime.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
