# Provider Params Streams Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

- Primary paths: `src/agents/pi-embedded-runner/extra-params*.ts`, `src/agents/pi-embedded-runner/*-stream-wrappers.ts`, `src/agents/pi-embedded-runner/google.ts`, `src/agents/pi-embedded-runner/openrouter-model-capabilities.ts`
- Runtime handoff: embedded Pi execution prepares model/provider/runtime state before reply, cron, hooks, or channel/plugin consumers observe output.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `28` changed path(s) to this final leaf. `20` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'D': 5, 'M': 16, 'R': 4, 'A': 3}`.

- `src/agents/pi-embedded-runner/bedrock-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/extra-params.cache-retention-default.test.ts`
- `src/agents/pi-embedded-runner/extra-params.google.test.ts`
- `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts`
- `src/agents/pi-embedded-runner/extra-params.provider-runtime.test.ts`
- `src/agents/pi-embedded-runner/extra-params.test-support.ts`
- `src/agents/pi-embedded-runner/extra-params.ts`
- `src/agents/pi-embedded-runner/extra-params.zai-tool-stream.test.ts`
- `src/agents/pi-embedded-runner/google-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/google-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/minimax-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/minimax-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/moonshot-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/moonshot-thinking-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/openai-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/openai-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/openrouter-model-capabilities.test.ts`
- `src/agents/pi-embedded-runner/openrouter-model-capabilities.ts`
- `src/agents/pi-embedded-runner/proxy-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/proxy-stream-wrappers.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
