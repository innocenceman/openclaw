# Core Test Helpers Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## Test invocation path

1. A developer or CI path invokes a `pnpm test*` script or a scoped `pnpm test -- <filter>` command.
2. Test wrapper/profile configuration selects setup, isolation, and target files.
3. This leaf supplies either runner/config behavior, root tests, scripts tests, helpers, mocks, or fixtures.
4. Failures here can indicate product regressions, guardrail drift, or broken test infrastructure.

## Change impact path

1. Identify whether the changed file is runner/config, a test file, a helper, a mock, or a fixture.
2. Run the narrowest matching test/filter first.
3. Broaden to `pnpm test` or the documented profile only when shared behavior is affected.

## Evidence limits

The behavior path is based on path/script inspection and repo conventions; no test output was generated in this wave.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `113` changed path(s) to this final leaf. `106` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'R': 36, 'A': 65, 'M': 6, 'D': 6}`.

- `test/helpers/AGENTS.md`
- `test/helpers/CLAUDE.md`
- `test/helpers/agents/auth-profile-runtime-contract.ts`
- `test/helpers/agents/delivery-no-reply-runtime-contract.ts`
- `test/helpers/agents/openclaw-owned-tool-runtime-contract.ts`
- `test/helpers/agents/outcome-fallback-runtime-contract.ts`
- `test/helpers/agents/pi-ai-stream-simple-mock.ts`
- `test/helpers/agents/prompt-composition-scenarios.ts`
- `test/helpers/agents/prompt-overlay-runtime-contract.ts`
- `test/helpers/agents/schema-normalization-runtime-contract.ts`
- `test/helpers/agents/transcript-repair-runtime-contract.ts`
- `test/helpers/agents/transport-params-runtime-contract.ts`
- `test/helpers/auto-reply/trigger-handling-test-harness.ts`
- `test/helpers/browser-bundled-plugin-fixture.ts`
- `test/helpers/bundled-channel-entry.ts`
- `test/helpers/bundled-plugin-paths.ts`
- `test/helpers/bundled-runtime-sidecars.ts`
- `test/helpers/channels/AGENTS.md`
- `test/helpers/channels/CLAUDE.md`
- `test/helpers/channels/bundled-channel-plugin-loader.ts`
- `test/helpers/channels/channel-catalog-contract.ts`
- `test/helpers/channels/channel-plugin-catalog-contract-suites.ts`
- `test/helpers/channels/config-write-contract-suites.ts`
- `test/helpers/channels/directory-ids.ts`
- `test/helpers/channels/group-policy-contract-suites.ts`
- `test/helpers/channels/group-policy-contract.ts`
- `test/helpers/channels/imessage-test-plugin.ts`
- `test/helpers/channels/interactive-contract.ts`
- `test/helpers/channels/lazy-object-surface.ts`
- `test/helpers/channels/manifest.ts`
- `... 另有 76 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
