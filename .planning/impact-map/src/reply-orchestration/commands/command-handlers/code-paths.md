# Reply Command Handlers Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/auto-reply/reply/commands*.ts`, `src/auto-reply/reply/commands-acp/**`, `src/auto-reply/reply/commands-subagents/**`
- Runtime handoff: Registry-resolved commands dispatch into handler families that may cross ACP, plugin, subagent, or runtime execution surfaces.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `111` changed path(s) to this final leaf. `108` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 45, 'M': 63, 'D': 3}`.

- `src/auto-reply/reply/commands-abort-trigger.test.ts`
- `src/auto-reply/reply/commands-acp.test.ts`
- `src/auto-reply/reply/commands-acp.ts`
- `src/auto-reply/reply/commands-acp/context.test.ts`
- `src/auto-reply/reply/commands-acp/context.ts`
- `src/auto-reply/reply/commands-acp/diagnostics.ts`
- `src/auto-reply/reply/commands-acp/install-hints.test.ts`
- `src/auto-reply/reply/commands-acp/install-hints.ts`
- `src/auto-reply/reply/commands-acp/lifecycle.ts`
- `src/auto-reply/reply/commands-acp/runtime-options.ts`
- `src/auto-reply/reply/commands-acp/shared.ts`
- `src/auto-reply/reply/commands-acp/targets.ts`
- `src/auto-reply/reply/commands-agent-scope.test-support.ts`
- `src/auto-reply/reply/commands-allowlist.test.ts`
- `src/auto-reply/reply/commands-allowlist.ts`
- `src/auto-reply/reply/commands-approve.test.ts`
- `src/auto-reply/reply/commands-approve.ts`
- `src/auto-reply/reply/commands-bash-alias.test.ts`
- `src/auto-reply/reply/commands-bash.ts`
- `src/auto-reply/reply/commands-btw.test.ts`
- `src/auto-reply/reply/commands-btw.ts`
- `src/auto-reply/reply/commands-compact.runtime.ts`
- `src/auto-reply/reply/commands-compact.test.ts`
- `src/auto-reply/reply/commands-compact.ts`
- `src/auto-reply/reply/commands-config.ts`
- `src/auto-reply/reply/commands-context-command.ts`
- `src/auto-reply/reply/commands-context-report.test.ts`
- `src/auto-reply/reply/commands-context-report.ts`
- `src/auto-reply/reply/commands-context.test.ts`
- `src/auto-reply/reply/commands-context.ts`
- `... 另有 78 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
