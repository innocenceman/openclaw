# Session Scope Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

- Primary paths: `src/agents/agent-scope.ts`, `src/agents/agent-paths.ts`, `src/agents/cli-session.ts`, `src/agents/identity*.ts`
- Runtime handoff: Entrypoints resolve agent identity/session scope here before tools, providers, reply orchestration, or ACP integration consume the runtime context.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `10` changed path(s) to this final leaf. `10` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 10}`.

- `src/agents/agent-paths.ts`
- `src/agents/agent-scope.test.ts`
- `src/agents/agent-scope.ts`
- `src/agents/cli-session.test.ts`
- `src/agents/cli-session.ts`
- `src/agents/identity-avatar.test.ts`
- `src/agents/identity-avatar.ts`
- `src/agents/identity-file.test.ts`
- `src/agents/identity-file.ts`
- `src/agents/identity.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/agents/agent-scope.test.ts`
- `src/agents/agent-scope.ts`
- `src/agents/cli-session.test.ts`
- `src/agents/cli-session.ts`
- `src/agents/identity-avatar.test.ts`
- `src/agents/identity-avatar.ts`
- `src/agents/identity-file.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
