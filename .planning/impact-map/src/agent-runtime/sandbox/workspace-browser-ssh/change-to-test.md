# Workspace Browser Ssh Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

1. Run targeted workspace/browser/SSH/Docker tests plus device/container smoke when available.
2. Escalate to `pnpm build` when sandbox runtime boundaries or browser bridges affect packaged output.
3. For Docker/SSH/browser behavior, run container or remote smoke checks only when the environment is available.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `16` (修改 13，新增 3).
- Target-existing path refs in active map: `16`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/agents/sandbox/browser.create.test.ts`
- `src/agents/sandbox/browser.ts`
- `src/agents/sandbox/docker-backend.ts`
- `src/agents/sandbox/docker.config-hash-recreate.test.ts`
- `src/agents/sandbox/docker.test.ts`
- `src/agents/sandbox/docker.ts`
- `src/agents/sandbox/ssh-backend.test.ts`
- `src/agents/sandbox/workspace.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
