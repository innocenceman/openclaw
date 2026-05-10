# Test Scripts Code Paths

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

This target refresh maps `77` changed path(s) to this final leaf. `77` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 77}`.

- `qa/README.md`
- `qa/convex-credential-broker/.gitignore`
- `qa/convex-credential-broker/README.md`
- `qa/convex-credential-broker/convex.json`
- `qa/convex-credential-broker/convex/credentials.ts`
- `qa/convex-credential-broker/convex/crons.ts`
- `qa/convex-credential-broker/convex/http.ts`
- `qa/convex-credential-broker/convex/payload-validation.ts`
- `qa/convex-credential-broker/convex/schema.ts`
- `qa/convex-credential-broker/convex/tsconfig.json`
- `qa/convex-credential-broker/package.json`
- `qa/frontier-harness-plan.md`
- `qa/new-scenarios-2026-04.md`
- `qa/scenarios.md`
- `qa/scenarios/agents/instruction-followthrough-repo-contract.md`
- `qa/scenarios/agents/subagent-fanout-synthesis.md`
- `qa/scenarios/agents/subagent-forked-context.md`
- `qa/scenarios/agents/subagent-handoff.md`
- `qa/scenarios/agents/subagent-stale-child-links.md`
- `qa/scenarios/channels/channel-chat-baseline.md`
- `qa/scenarios/channels/dm-chat-baseline.md`
- `qa/scenarios/channels/qa-channel-reconnect-dedupe.md`
- `qa/scenarios/channels/reaction-edit-delete.md`
- `qa/scenarios/channels/thread-follow-up.md`
- `qa/scenarios/character/character-vibes-c3po.md`
- `qa/scenarios/character/character-vibes-gollum.md`
- `qa/scenarios/config/config-apply-restart-wakeup.md`
- `qa/scenarios/config/config-patch-hot-apply.md`
- `qa/scenarios/config/config-restart-capability-flip.md`
- `qa/scenarios/index.md`
- `... 另有 47 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
