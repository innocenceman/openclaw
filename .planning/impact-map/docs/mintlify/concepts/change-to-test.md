# Docs concepts Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                          | First validation                             | Escalation trigger                                                                        |
| ---------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Existing page copy, examples, or frontmatter changed | `pnpm check:docs`                            | Escalate to product-specific tests only when the docs change is coupled to code behavior. |
| Page added, renamed, moved, or redirect/nav changed  | `pnpm docs:check-links` and `pnpm docs:list` | Update `docs/docs.json` in the same change when Mintlify route ownership changes.         |
| New English title or short label introduced          | `pnpm docs:check-i18n-glossary`              | Add glossary coverage before any zh-CN rerun.                                             |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, root `package.json` scripts, and adjacent generator/test files without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `40` (修改 30，新增 10).
- Target-existing path refs in active map: `40`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `docs-only`.
- First validation move: Validate documentation or generated baseline drift first; source runtime tests are secondary unless the changed paths include executable files.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `docs-only`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
