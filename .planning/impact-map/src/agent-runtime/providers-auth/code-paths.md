# Providers Auth Code Paths

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

- Primary paths: `src/agents/auth-profiles/**`, `src/agents/auth-profiles.ts`, `src/agents/model-auth*.ts`, `src/agents/models-config.providers*.ts`
- Runtime handoff: Configured profiles are normalized before model/provider selection reaches runtime execution.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `144` changed path(s) to this final leaf. `132` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 84, 'D': 12, 'A': 48}`.

- `src/agents/auth-profiles.chutes.test.ts`
- `src/agents/auth-profiles.doctor.test.ts`
- `src/agents/auth-profiles.ensureauthprofilestore.test.ts`
- `src/agents/auth-profiles.external-cli-sync.test.ts`
- `src/agents/auth-profiles.getsoonestcooldownexpiry.test.ts`
- `src/agents/auth-profiles.markauthprofilefailure.test.ts`
- `src/agents/auth-profiles.readonly-sync.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.does-not-prioritize-lastgood-round-robin-ordering.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.fixtures.ts`
- `src/agents/auth-profiles.store-cache.test.ts`
- `src/agents/auth-profiles.store.save.test.ts`
- `src/agents/auth-profiles.ts`
- `src/agents/auth-profiles/constants.ts`
- `src/agents/auth-profiles/credential-state.test.ts`
- `src/agents/auth-profiles/credential-state.ts`
- `src/agents/auth-profiles/display.ts`
- `src/agents/auth-profiles/doctor.ts`
- `src/agents/auth-profiles/effective-oauth.test.ts`
- `src/agents/auth-profiles/effective-oauth.ts`
- `src/agents/auth-profiles/external-auth.ts`
- `src/agents/auth-profiles/external-cli-sync.ts`
- `src/agents/auth-profiles/external-oauth.test.ts`
- `src/agents/auth-profiles/identity.ts`
- `src/agents/auth-profiles/oauth-common-mocks.test-support.ts`
- `src/agents/auth-profiles/oauth-external-auth-passthrough.test-support.ts`
- `src/agents/auth-profiles/oauth-file-lock-passthrough.test-support.ts`
- `src/agents/auth-profiles/oauth-identity.test.ts`
- `... 另有 102 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/agents/auth-profiles.chutes.test.ts`
- `src/agents/auth-profiles.cooldown-auto-expiry.test.ts`
- `src/agents/auth-profiles.ensureauthprofilestore.test.ts`
- `src/agents/auth-profiles.external-cli-scope.test.ts`
- `src/agents/auth-profiles.external-cli-sync.test.ts`
- `src/agents/auth-profiles.markauthprofilefailure.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.does-not-prioritize-lastgood-round-robin-ordering.test.ts`
- `src/agents/auth-profiles.store-cache.test.ts`
- `src/agents/auth-profiles.store.save.test.ts`
- `src/agents/auth-profiles.ts`
- `src/agents/auth-profiles/clone.ts`
- `src/agents/auth-profiles/external-auth.ts`
- `src/agents/auth-profiles/external-cli-discovery.ts`
- `src/agents/auth-profiles/external-cli-scope.ts`
- `src/agents/auth-profiles/external-cli-sync.ts`
- `src/agents/auth-profiles/external-oauth.test.ts`
- `src/agents/auth-profiles/oauth-common-mocks.test-support.ts`
- `src/agents/auth-profiles/oauth-manager.test.ts`
- `src/agents/auth-profiles/oauth-manager.ts`
- `src/agents/auth-profiles/oauth-refresh-failure.ts`
- `src/agents/auth-profiles/oauth-shared.test.ts`
- `src/agents/auth-profiles/oauth-shared.ts`
- `src/agents/auth-profiles/oauth.fallback-to-main-agent.test.ts`
- `src/agents/auth-profiles/oauth.mirror-refresh.test.ts`
- `src/agents/auth-profiles/oauth.openai-codex-refresh-fallback.test.ts`
- `src/agents/auth-profiles/oauth.test.ts`
- `src/agents/auth-profiles/oauth.ts`
- `src/agents/auth-profiles/persisted.ts`
- `src/agents/auth-profiles/policy.ts`
- `src/agents/auth-profiles/portability.test.ts`
- `src/agents/auth-profiles/portability.ts`
- `src/agents/auth-profiles/profiles.test.ts`
- `src/agents/auth-profiles/profiles.ts`
- `src/agents/auth-profiles/runtime-snapshots.test.ts`
- `src/agents/auth-profiles/runtime-snapshots.ts`
- `src/agents/auth-profiles/session-override.test.ts`
- `src/agents/auth-profiles/session-override.ts`
- `src/agents/auth-profiles/state.ts`
- `src/agents/auth-profiles/store.ts`
- `src/agents/auth-profiles/types.ts`
- … plus 51 more target-existing changed paths.

Deleted or renamed-away paths omitted from this active leaf: `6`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
