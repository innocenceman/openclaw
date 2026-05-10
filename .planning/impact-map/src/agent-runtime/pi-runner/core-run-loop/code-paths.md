# Core Run Loop Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

- Primary paths: `src/agents/pi-embedded-runner.ts`, `src/agents/pi-embedded-runner/model*.ts`, `src/agents/pi-embedded-runner/run*.ts`, `src/agents/pi-embedded-runner/compact*.ts`, `src/agents/pi-embedded-runner/lanes.ts`
- Runtime handoff: embedded Pi execution prepares model/provider/runtime state before reply, cron, hooks, or channel/plugin consumers observe output.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `190` changed path(s) to this final leaf. `189` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 82, 'D': 1, 'M': 106, 'R': 1}`.

- `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts`
- `src/agents/pi-embedded-runner.buildembeddedsandboxinfo.test.ts`
- `src/agents/pi-embedded-runner.bundle-mcp.e2e.test.ts`
- `src/agents/pi-embedded-runner.cache.live.test.ts`
- `src/agents/pi-embedded-runner.compaction-safety-timeout.test.ts`
- `src/agents/pi-embedded-runner.e2e.test.ts`
- `src/agents/pi-embedded-runner.extensions.test.ts`
- `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts`
- `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts`
- `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts`
- `src/agents/pi-embedded-runner.limithistoryturns.test.ts`
- `src/agents/pi-embedded-runner.openai-tool-id-preservation.test.ts`
- `src/agents/pi-embedded-runner.resolvesessionagentids.test.ts`
- `src/agents/pi-embedded-runner.run-embedded-pi-agent.auth-profile-rotation.e2e.test.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.policy.test.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.test-harness.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.test.ts`
- `src/agents/pi-embedded-runner.splitsdktools.test.ts`
- `src/agents/pi-embedded-runner.ts`
- `src/agents/pi-embedded-runner/abort.ts`
- `src/agents/pi-embedded-runner/aliases.test.ts`
- `src/agents/pi-embedded-runner/anthropic-cache-control-payload.test.ts`
- `src/agents/pi-embedded-runner/anthropic-cache-control-payload.ts`
- `src/agents/pi-embedded-runner/anthropic-family-cache-semantics.ts`
- `src/agents/pi-embedded-runner/anthropic-family-tool-payload-compat.ts`
- `src/agents/pi-embedded-runner/cache-ttl.test.ts`
- `src/agents/pi-embedded-runner/cache-ttl.ts`
- `src/agents/pi-embedded-runner/compact-reasons.ts`
- `src/agents/pi-embedded-runner/compact.hooks.harness.ts`
- `src/agents/pi-embedded-runner/compact.hooks.test.ts`
- `... 另有 159 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
