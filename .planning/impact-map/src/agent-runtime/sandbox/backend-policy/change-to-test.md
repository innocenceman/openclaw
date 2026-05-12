# Backend Policy Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

1. Run `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`.
2. Escalate to `pnpm build` when sandbox runtime boundaries or browser bridges affect packaged output.
3. For Docker/SSH/browser behavior, run container or remote smoke checks only when the environment is available.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `27` (修改 23，新增 3，删除 1).
- Target-existing path refs in active map: `26`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/agents/sandbox.resolveSandboxContext.test.ts`
- `src/agents/sandbox.ts`
- `src/agents/sandbox/backend.ts`
- `src/agents/sandbox/config.ts`
- `src/agents/sandbox/constants.ts`
- `src/agents/sandbox/context.ts`
- `src/agents/sandbox/manage.test.ts`
- `src/agents/sandbox/manage.ts`
- `src/agents/sandbox/prune.ts`
- `src/agents/sandbox/registry.test.ts`
- `src/agents/sandbox/registry.ts`
- `src/agents/sandbox/sanitize-env-vars.ts`
- `src/agents/sandbox/validate-sandbox-security.test.ts`
- `src/agents/sandbox/validate-sandbox-security.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
