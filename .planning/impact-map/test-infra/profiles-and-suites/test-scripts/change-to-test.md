# Test Scripts Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

| Change                                     | First checks                                                                            | Broader validation                                                                                                            |
| ------------------------------------------ | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Edit files in this leaf                    | Run the nearest scoped `pnpm test -- <path-or-filter>` that exercises the changed file. | `OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test` on constrained hosts, or full `pnpm test` when feasible. |
| Change shared runner/setup/helper behavior | Run direct tests for the helper/runner plus one representative consumer suite.          | Full `pnpm test` before landing if related failures are plausible.                                                            |
| Change fixtures or mocks                   | Run tests that consume the fixture/mock and inspect snapshot/fixture assumptions.       | Add targeted regression tests when a fixture contract changes.                                                                |

## Minimum evidence for `verified`

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `77` (新增 77).
- Target-existing path refs in active map: `77`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `compatible`.
- First validation move: Run the smallest build/test/tooling check that exercises this leaf, then rely on broader CI only for packaging surfaces.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `compatible`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `qa/scenarios/agents/subagent-completion-direct-fallback.md`
- `qa/scenarios/channels/dm-chat-baseline.md`
- `qa/scenarios/channels/group-message-tool-unavailable-fallback.md`
- `qa/scenarios/channels/group-visible-reply-tool.md`
- `qa/scenarios/config/config-restart-capability-flip.md`
- `qa/scenarios/config/crestodian-ring-zero-setup.md`
- `qa/scenarios/memory/commitments-heartbeat-target-none.md`
- `qa/scenarios/memory/memory-failure-fallback.md`
- `qa/scenarios/memory/session-memory-ranking.md`
- `qa/scenarios/models/codex-harness-no-meta-leak.md`
- `qa/scenarios/models/gpt55-thinking-visibility-switch.md`
- `qa/scenarios/models/model-switch-follow-up.md`
- `qa/scenarios/models/openai-native-web-search-live.md`
- `qa/scenarios/models/thinking-slash-model-remap.md`
- `qa/scenarios/plugins/kitchen-sink-live-openai.md`
- `qa/scenarios/runtime/compaction-retry-mutating-tool.md`
- `qa/scenarios/runtime/docker-prometheus-smoke.md`
- `qa/scenarios/runtime/otel-trace-smoke.md`
- `qa/scenarios/runtime/reasoning-only-no-auto-retry-after-write.md`
- `qa/scenarios/runtime/update-run-package-self-upgrade.md`
- `qa/scenarios/workspace/long-running-release-audit.md`
- `qa/scenarios/workspace/medium-game-plan-codex-harness.md`
- `qa/scenarios/workspace/medium-game-plan-pi-harness.md`
<!-- version-diff-refresh:v2026.5.4:end -->
