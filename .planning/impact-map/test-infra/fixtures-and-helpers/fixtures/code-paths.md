# Test Fixtures Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

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

This target refresh maps `143` changed path(s) to this final leaf. `137` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 6, 'D': 6, 'A': 128, 'R': 3}`.

- `test-fixtures/talk-config-contract.json`
- `test/fixtures/cli-startup-bench.json`
- `test/fixtures/extension-relative-outside-package-inventory.json`
- `test/fixtures/system-run-approval-binding-contract.json`
- `test/scripts/ios-version.test-support.ts`
- `test/scripts/test-extension.test.ts`
- `test/scripts/test-helpers.ts`
- `test/setup-openclaw-runtime.ts`
- `test/test-env.test.ts`
- `test/test-env.ts`
- `test/tsconfig.json`
- `test/vitest/vitest.acp.config.ts`
- `test/vitest/vitest.agents.config.ts`
- `test/vitest/vitest.auto-reply-core.config.ts`
- `test/vitest/vitest.auto-reply-reply.config.ts`
- `test/vitest/vitest.auto-reply-top-level.config.ts`
- `test/vitest/vitest.auto-reply.config.ts`
- `test/vitest/vitest.boundary.config.ts`
- `test/vitest/vitest.bundled-plugin-paths.ts`
- `test/vitest/vitest.bundled.config.ts`
- `test/vitest/vitest.channel-paths.mjs`
- `test/vitest/vitest.channels.config.ts`
- `test/vitest/vitest.cli.config.ts`
- `test/vitest/vitest.commands-light-paths.mjs`
- `test/vitest/vitest.commands-light.config.ts`
- `test/vitest/vitest.commands.config.ts`
- `test/vitest/vitest.config.ts`
- `test/vitest/vitest.contracts-channel-config.config.ts`
- `test/vitest/vitest.contracts-channel-registry.config.ts`
- `test/vitest/vitest.contracts-channel-session.config.ts`
- `... 另有 107 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
