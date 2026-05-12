# Command Entrypoint Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 remaining runtime verified wave

- Primary paths: `src/agents/agent-command.ts`, `src/commands/agent.ts`, `src/commands/agent-via-gateway.ts`
- Runtime handoff: CLI/gateway calls normalize agent invocation before dispatching into scope/session helpers and reply execution.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `516` changed path(s) to this final leaf. `478` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'R': 25, 'A': 222, 'M': 241, 'D': 28}`.

- `src/agents/AGENTS.md`
- `src/agents/CLAUDE.md`
- `src/agents/agent-runtime-config.ts`
- `src/agents/agent-scope-config.ts`
- `src/agents/anthropic-payload-log.test.ts`
- `src/agents/anthropic-payload-log.ts`
- `src/agents/anthropic-payload-policy.test.ts`
- `src/agents/anthropic-payload-policy.ts`
- `src/agents/anthropic-transport-stream.test.ts`
- `src/agents/anthropic-transport-stream.ts`
- `src/agents/anthropic-vertex-stream.ts`
- `src/agents/anthropic.setup-token.live.test.ts`
- `src/agents/auth-health.test.ts`
- `src/agents/auth-health.ts`
- `src/agents/auth-profile-runtime-contract.test.ts`
- `src/agents/bash-process-registry.ts`
- `src/agents/bootstrap-budget.ts`
- `src/agents/bootstrap-cache.test.ts`
- `src/agents/bootstrap-files.test.ts`
- `src/agents/bootstrap-files.ts`
- `src/agents/bootstrap-hooks.ts`
- `src/agents/bootstrap-mode.test.ts`
- `src/agents/bootstrap-mode.ts`
- `src/agents/bootstrap-prompt.ts`
- `src/agents/btw.test.ts`
- `src/agents/btw.ts`
- `src/agents/bundle-mcp-shared.test-harness.ts`
- `src/agents/bundle-mcp.test-harness.ts`
- `src/agents/cache-trace.test.ts`
- `src/agents/cache-trace.ts`
- `... 另有 448 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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

Deleted or renamed-away paths omitted from this active leaf: `8`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
