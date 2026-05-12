# Docs concepts Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Content-to-route path

1. A page in `docs/concepts` changes or moves.
2. Local index pages plus `docs/docs.json` determine whether the route stays reachable in Mintlify.
3. `pnpm check:docs` and `pnpm docs:check-links` are the first automated checks.

## Translation gate path

1. English page titles, section labels, or short nav labels change.
2. `pnpm docs:check-i18n-glossary` confirms whether glossary coverage is still complete.
3. Locale regeneration stays downstream of approved glossary updates and was not executed during Wave 4.

## Trace rule

When a page change is meant to document a behavior change in code, trace from the docs page to the owning product/config/plugin surface before deciding whether a product test needs to run.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `40` changed path(s) to this final leaf. `40` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 30, 'A': 10}`.

- `VISION.md`
- `docs/concepts/active-memory.md`
- `docs/concepts/agent-loop.md`
- `docs/concepts/agent-runtimes.md`
- `docs/concepts/agent-workspace.md`
- `docs/concepts/agent.md`
- `docs/concepts/architecture.md`
- `docs/concepts/compaction.md`
- `docs/concepts/context-engine.md`
- `docs/concepts/context.md`
- `docs/concepts/delegate-architecture.md`
- `docs/concepts/dreaming.md`
- `docs/concepts/experimental-features.md`
- `docs/concepts/features.md`
- `docs/concepts/markdown-formatting.md`
- `docs/concepts/memory-builtin.md`
- `docs/concepts/memory-honcho.md`
- `docs/concepts/memory-qmd.md`
- `docs/concepts/memory-search.md`
- `docs/concepts/memory.md`
- `docs/concepts/messages.md`
- `docs/concepts/model-failover.md`
- `docs/concepts/model-providers.md`
- `docs/concepts/models.md`
- `docs/concepts/multi-agent.md`
- `docs/concepts/oauth.md`
- `docs/concepts/presence.md`
- `docs/concepts/qa-e2e-automation.md`
- `docs/concepts/queue.md`
- `docs/concepts/retry.md`
- `... 另有 10 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `docs/concepts/active-memory.md`
- `docs/concepts/agent-loop.md`
- `docs/concepts/agent-runtimes.md`
- `docs/concepts/agent-workspace.md`
- `docs/concepts/agent.md`
- `docs/concepts/channel-docking.md`
- `docs/concepts/commitments.md`
- `docs/concepts/compaction.md`
- `docs/concepts/context-engine.md`
- `docs/concepts/delegate-architecture.md`
- `docs/concepts/dreaming.md`
- `docs/concepts/experimental-features.md`
- `docs/concepts/mantis.md`
- `docs/concepts/memory-builtin.md`
- `docs/concepts/memory-qmd.md`
- `docs/concepts/memory-search.md`
- `docs/concepts/memory.md`
- `docs/concepts/messages.md`
- `docs/concepts/model-failover.md`
- `docs/concepts/model-providers.md`
- `docs/concepts/models.md`
- `docs/concepts/multi-agent.md`
- `docs/concepts/oauth.md`
- `docs/concepts/openclaw-sdk.md`
- `docs/concepts/parallel-specialist-lanes.md`
- `docs/concepts/progress-drafts.md`
- `docs/concepts/qa-e2e-automation.md`
- `docs/concepts/qa-matrix.md`
- `docs/concepts/queue-steering.md`
- `docs/concepts/queue.md`
- `docs/concepts/retry.md`
- `docs/concepts/session-pruning.md`
- `docs/concepts/session-tool.md`
- `docs/concepts/session.md`
- `docs/concepts/streaming.md`
- `docs/concepts/system-prompt.md`
- `docs/concepts/usage-tracking.md`
<!-- version-diff-refresh:v2026.5.4:end -->
