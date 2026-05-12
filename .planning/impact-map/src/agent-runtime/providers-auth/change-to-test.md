# Providers Auth Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Change scope      | First validation                                                                                                                                        | Escalation trigger                                                                                               | Notes                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `providers-auth/` | pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `144` (修改 84，删除 12，新增 48).
- Target-existing path refs in active map: `132`; deleted/renamed-away refs kept only in transition artifacts: `12`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
