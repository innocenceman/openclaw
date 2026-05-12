# Providers Auth Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Parent module

- Impact module: `agent-runtime/`
- Leaf: `providers-auth/`

## Purpose

Provider credential state, OAuth/API-key selection, auth profile ordering, and model/provider auth resolution.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `144` (修改 84，删除 12，新增 48).
- Target-existing changed paths listed here: `132`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `12`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/agents/auth-profiles.chutes.test.ts`
- `src/agents/auth-profiles.doctor.test.ts`
- `src/agents/auth-profiles.ensureauthprofilestore.test.ts`
- `src/agents/auth-profiles.external-cli-sync.test.ts`
- `src/agents/auth-profiles.getsoonestcooldownexpiry.test.ts`
- `src/agents/auth-profiles.markauthprofilefailure.test.ts`
- `src/agents/auth-profiles.readonly-sync.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.does-not-prioritize-lastgood-round-robin-ordering.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.fixtures.ts`
- `... 另有 120 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `97`
- Target-existing changed paths reflected here: `91`
- Deleted or renamed-away paths omitted from active impact-map: `6`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
