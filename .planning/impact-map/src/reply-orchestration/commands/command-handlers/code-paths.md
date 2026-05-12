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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/auto-reply/reply/commands-acp.test.ts`
- `src/auto-reply/reply/commands-acp.ts`
- `src/auto-reply/reply/commands-acp/diagnostics.ts`
- `src/auto-reply/reply/commands-acp/shared.ts`
- `src/auto-reply/reply/commands-acp/targets.ts`
- `src/auto-reply/reply/commands-allowlist.test.ts`
- `src/auto-reply/reply/commands-allowlist.ts`
- `src/auto-reply/reply/commands-btw.test.ts`
- `src/auto-reply/reply/commands-compact.ts`
- `src/auto-reply/reply/commands-config.ts`
- `src/auto-reply/reply/commands-core.ts`
- `src/auto-reply/reply/commands-crestodian.ts`
- `src/auto-reply/reply/commands-diagnostics.test.ts`
- `src/auto-reply/reply/commands-diagnostics.ts`
- `src/auto-reply/reply/commands-dock.test.ts`
- `src/auto-reply/reply/commands-dock.ts`
- `src/auto-reply/reply/commands-export-common.ts`
- `src/auto-reply/reply/commands-export-session.test.ts`
- `src/auto-reply/reply/commands-export-session.ts`
- `src/auto-reply/reply/commands-export-trajectory.test.ts`
- `src/auto-reply/reply/commands-export-trajectory.ts`
- `src/auto-reply/reply/commands-gating.test.ts`
- `src/auto-reply/reply/commands-handlers.runtime.ts`
- `src/auto-reply/reply/commands-info.test.ts`
- `src/auto-reply/reply/commands-info.ts`
- `src/auto-reply/reply/commands-models.test.ts`
- `src/auto-reply/reply/commands-models.ts`
- `src/auto-reply/reply/commands-openclaw-cli.ts`
- `src/auto-reply/reply/commands-plugin.test.ts`
- `src/auto-reply/reply/commands-plugin.ts`
- `src/auto-reply/reply/commands-plugins.install.test.ts`
- `src/auto-reply/reply/commands-plugins.test.ts`
- `src/auto-reply/reply/commands-plugins.ts`
- `src/auto-reply/reply/commands-private-route.test.ts`
- `src/auto-reply/reply/commands-private-route.ts`
- `src/auto-reply/reply/commands-reset-hooks.test.ts`
- `src/auto-reply/reply/commands-reset-hooks.ts`
- `src/auto-reply/reply/commands-reset.ts`
- `src/auto-reply/reply/commands-session-abort.test-support.ts`
- `src/auto-reply/reply/commands-slash-parse.ts`
- … plus 21 more target-existing changed paths.

Deleted or renamed-away paths omitted from this active leaf: `1`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
