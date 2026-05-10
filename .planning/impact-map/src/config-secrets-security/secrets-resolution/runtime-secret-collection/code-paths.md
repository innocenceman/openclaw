# Runtime Secret Collection Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/secrets/runtime*.ts`, `src/secrets/runtime-*collectors*.ts`, `src/secrets/provider-env-vars.ts`, `src/secrets/exec-resolution-policy.ts`
- Runtime handoff: Resolved refs are collected into runtime/provider/gateway/web execution surfaces before agents, plugins, or tools run.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `59` changed path(s) to this final leaf. `58` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 14, 'A': 44, 'D': 1}`.

- `src/secrets/exec-resolution-policy.ts`
- `src/secrets/provider-env-vars.dynamic.test.ts`
- `src/secrets/provider-env-vars.test.ts`
- `src/secrets/provider-env-vars.ts`
- `src/secrets/runtime-auth-collectors.ts`
- `src/secrets/runtime-auth-profiles-oauth-policy.test.ts`
- `src/secrets/runtime-auth-refresh-failure.test.ts`
- `src/secrets/runtime-auth-store-inline-refs.test.ts`
- `src/secrets/runtime-auth.integration.test-helpers.ts`
- `src/secrets/runtime-channel-inactive-variants.test-support.ts`
- `src/secrets/runtime-channel-inactive-variants.test.ts`
- `src/secrets/runtime-command-secrets.ts`
- `src/secrets/runtime-config-collectors-channels.test.ts`
- `src/secrets/runtime-config-collectors-channels.ts`
- `src/secrets/runtime-config-collectors-core.ts`
- `src/secrets/runtime-config-collectors-plugins.test.ts`
- `src/secrets/runtime-config-collectors-plugins.ts`
- `src/secrets/runtime-config-collectors.ts`
- `src/secrets/runtime-core-snapshots.test.ts`
- `src/secrets/runtime-discord-surface.test.ts`
- `src/secrets/runtime-discord.test-support.ts`
- `src/secrets/runtime-gateway-auth-surfaces.ts`
- `src/secrets/runtime-gateway-local-surfaces.test.ts`
- `src/secrets/runtime-inactive-core-surfaces.test.ts`
- `src/secrets/runtime-inactive-telegram-surfaces.test.ts`
- `src/secrets/runtime-legacy-x-search.test.ts`
- `src/secrets/runtime-manifest.runtime.ts`
- `src/secrets/runtime-matrix-shadowing.test.ts`
- `src/secrets/runtime-matrix-top-level.test.ts`
- `src/secrets/runtime-matrix.test-support.ts`
- `... 另有 28 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
