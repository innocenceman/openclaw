# Docs concepts

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `docs/concepts/**` within the Mintlify docs surface.

## Observed facts

29 files and 29 Markdown pages are present under `docs/concepts/`.
No `docs/concepts/index.md` page was observed; route ownership is spread across leaf pages.
Sample files:

- `docs/concepts/agent-loop.md`
- `docs/concepts/agent-workspace.md`
- `docs/concepts/agent.md`
- `docs/concepts/architecture.md`
  Route groups, redirects, and top-level page ordering still flow through `docs/docs.json`.

## Incoming dependencies

- Other docs pages and Mintlify nav groups route readers into this leaf.
- Root-relative internal links and image references can break when page or asset paths move.
- English page-title and short-label changes can trigger glossary coverage requirements before any zh-CN rerun.

## Outgoing dependencies

- Docs validation starts with `pnpm check:docs` or the narrower `pnpm docs:check-links` / `pnpm docs:check-i18n-glossary` checks.
- When translation work is explicitly requested, the next dependency is `scripts/docs-i18n` plus `docs/.i18n` glossary/TM assets.

## Risk triggers

- Renaming or moving pages without updating `docs/docs.json` navigation, redirects, or local index links.
- Changing root-relative links or embedded asset paths without rerunning docs link checks.
- Adding new English titles or short labels without adding required glossary coverage before a translation rerun.

## Validation status

No product tests, docs builds, or translation reruns were executed for this leaf during Wave 4. Coverage is based on repo-native inspection of the current tree, package scripts, and adjacent docs tooling.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `docs-generated-baselines`.
- Risk: `medium`.
- Compatibility: `docs-only`.
- Changed paths in this leaf: `40` (修改 30，新增 10).
- Target-existing changed paths listed here: `40`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 28 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `docs-generated-baselines`
- Risk: `medium`
- Compatibility: `docs-only`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `37`
- Target-existing changed paths reflected here: `37`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
