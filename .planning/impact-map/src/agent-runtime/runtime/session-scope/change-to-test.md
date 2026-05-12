# Session Scope Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

1. Run `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`.
2. Add identity/session targeted tests when changing identity derivation.
3. Run affected CLI or reply tests when session behavior crosses module boundaries.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `10` (修改 10).
- Target-existing path refs in active map: `10`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/agents/agent-scope.test.ts`
- `src/agents/agent-scope.ts`
- `src/agents/cli-session.test.ts`
- `src/agents/cli-session.ts`
- `src/agents/identity-avatar.test.ts`
- `src/agents/identity-avatar.ts`
- `src/agents/identity-file.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
