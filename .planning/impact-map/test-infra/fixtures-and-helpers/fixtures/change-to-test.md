# Test Fixtures Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

| Change                                     | First checks                                                                            | Broader validation                                                                                                            |
| ------------------------------------------ | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Edit files in this leaf                    | Run the nearest scoped `pnpm test -- <path-or-filter>` that exercises the changed file. | `OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test` on constrained hosts, or full `pnpm test` when feasible. |
| Change shared runner/setup/helper behavior | Run direct tests for the helper/runner plus one representative consumer suite.          | Full `pnpm test` before landing if related failures are plausible.                                                            |
| Change fixtures or mocks                   | Run tests that consume the fixture/mock and inspect snapshot/fixture assumptions.       | Add targeted regression tests when a fixture contract changes.                                                                |

## Minimum evidence for `verified`

This leaf is `exceptioned-deep-partial` after G009 because the fixture-adjacent aggregate command fails through `test/scripts/test-extension.test.ts`. For future fixture edits, keep the exception until fresh scoped or full test output passes for the changed fixture contract.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `143` (修改 6，删除 6，新增 128，重命名/移动 3).
- Target-existing path refs in active map: `137`; deleted/renamed-away refs kept only in transition artifacts: `6`.
- Risk: `medium`; compatibility: `compatible`.
- First validation move: Run the smallest build/test/tooling check that exercises this leaf, then rely on broader CI only for packaging surfaces.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `compatible`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.instructions.md`
- `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.source.json`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/README.md`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.discord-group.json`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.heartbeat-turn.json`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.telegram-direct.json`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/discord-group-codex-message-tool.md`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/telegram-direct-codex-message-tool.md`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/telegram-heartbeat-codex-tool.md`
- `test/fixtures/talk-config-contract.json`
- `test/fixtures/telegram-qa-summary-rtt.json`
- `test/scripts/test-extension.test.ts`
- `test/setup-openclaw-runtime.ts`
- `test/test-env.test.ts`
- `test/test-env.ts`
- `test/tsconfig/tsconfig.core.test.agents.json`
- `test/tsconfig/tsconfig.core.test.json`
- `test/tsconfig/tsconfig.core.test.non-agents.json`
- `test/tsconfig/tsconfig.extensions.test.json`
- `test/tsconfig/tsconfig.test.json`
- `test/tsconfig/tsconfig.test.packages.json`
- `test/tsconfig/tsconfig.test.src.json`
- `test/tsconfig/tsconfig.test.ui.json`
- `test/vitest/vitest.agents-core.config.ts`
- `test/vitest/vitest.agents-paths.mjs`
- `test/vitest/vitest.agents-pi-embedded.config.ts`
- `test/vitest/vitest.agents-support.config.ts`
- `test/vitest/vitest.agents-tools.config.ts`
- `test/vitest/vitest.agents.config.ts`
- `test/vitest/vitest.auto-reply-reply.config.ts`
- `test/vitest/vitest.commands.config.ts`
- `test/vitest/vitest.config.ts`
- `test/vitest/vitest.e2e.config.ts`
- `test/vitest/vitest.gateway-server.config.ts`
- `test/vitest/vitest.gateway.config.ts`
- `test/vitest/vitest.infra.config.ts`
- `test/vitest/vitest.plugin-sdk-paths.mjs`
- `test/vitest/vitest.plugin-sdk.config.ts`
- `test/vitest/vitest.plugins.config.ts`
- `test/vitest/vitest.scoped-config.ts`
- … plus 10 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
