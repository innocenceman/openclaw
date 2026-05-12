# Command Entrypoint Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 remaining runtime verified wave

1. For entrypoint or flag behavior, run `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`.
2. For gateway boot handoff changes, also run targeted gateway boot/server tests.
3. Run `pnpm build` when public CLI wiring or bundled output can change.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `516` (重命名/移动 25，新增 222，修改 241，删除 28).
- Target-existing path refs in active map: `478`; deleted/renamed-away refs kept only in transition artifacts: `38`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/agents/agent-delete-safety.ts`
- `src/agents/agent-runtime-config.ts`
- `src/agents/agent-runtime-metadata.ts`
- `src/agents/agent-runtime-policy.ts`
- `src/agents/agent-scope-config.ts`
- `src/agents/announce-idempotency.ts`
- `src/agents/anthropic-payload-log.ts`
- `src/agents/anthropic-transport-stream.live.test.ts`
- `src/agents/anthropic-transport-stream.test.ts`
- `src/agents/anthropic-transport-stream.ts`
- `src/agents/anthropic-vertex-stream.ts`
- `src/agents/anthropic.setup-token.live.test.ts`
- `src/agents/auth-health.test.ts`
- `src/agents/auth-health.ts`
- `src/agents/auth-profile-runtime-contract.test.ts`
- `src/agents/bootstrap-budget.test.ts`
- `src/agents/bootstrap-budget.ts`
- `src/agents/bootstrap-cache.test.ts`
- `src/agents/bootstrap-cache.ts`
- `src/agents/bootstrap-files.test.ts`
- `src/agents/bootstrap-files.ts`
- `src/agents/bootstrap-mode.test.ts`
- `src/agents/bootstrap-mode.ts`
- `src/agents/btw-transcript.ts`
- `src/agents/btw.test.ts`
- `src/agents/btw.ts`
- `src/agents/bundle-mcp-config.test.ts`
- `src/agents/bundle-mcp-config.ts`
- `src/agents/bundle-mcp.test-harness.ts`
- `src/agents/cache-trace.test.ts`
- `src/agents/cache-trace.ts`
- `src/agents/channel-tools.ts`
- `src/agents/chutes-oauth.ts`
- `src/agents/cli-auth-epoch.test.ts`
- `src/agents/cli-auth-epoch.ts`
- `src/agents/cli-credentials.test.ts`
- `src/agents/cli-credentials.ts`
- `src/agents/cli-output.test.ts`
- `src/agents/cli-output.ts`
- `src/agents/codex-app-server.extensions.test.ts`
- … plus 314 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
