# Docs tools

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `docs/tools/**` within the Mintlify docs surface.

## Observed facts

40 files and 40 Markdown pages are present under `docs/tools/`.
An `docs/tools/index.md` page is present and acts as the local entrypoint.
Sample files:

- `docs/tools/acp-agents.md`
- `docs/tools/agent-send.md`
- `docs/tools/apply-patch.md`
- `docs/tools/brave-search.md`
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
- Changed paths in this leaf: `53` (新增 12，修改 41).
- Target-existing changed paths listed here: `53`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `docs/tools/acp-agents-setup.md`
- `docs/tools/acp-agents.md`
- `docs/tools/agent-send.md`
- `docs/tools/apply-patch.md`
- `docs/tools/brave-search.md`
- `docs/tools/browser-control.md`
- `docs/tools/browser-linux-troubleshooting.md`
- `docs/tools/browser-login.md`
- `docs/tools/browser-wsl2-windows-remote-cdp-troubleshooting.md`
- `docs/tools/browser.md`
- `docs/tools/btw.md`
- `docs/tools/capability-cookbook.md`
- `... 另有 41 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `docs-generated-baselines`
- Risk: `medium`
- Compatibility: `docs-only`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `43`
- Target-existing changed paths reflected here: `43`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `docs/tools/acp-agents-setup.md`
- `docs/tools/acp-agents.md`
- `docs/tools/brave-search.md`
- `docs/tools/browser-control.md`
- `docs/tools/browser-linux-troubleshooting.md`
- `docs/tools/browser-wsl2-windows-remote-cdp-troubleshooting.md`
- `docs/tools/browser.md`
- `docs/tools/btw.md`
- `docs/tools/clawhub.md`
- `docs/tools/code-execution.md`
- `docs/tools/creating-skills.md`
- `docs/tools/diffs.md`
- `docs/tools/exa-search.md`
- `docs/tools/exec-approvals-advanced.md`
- `docs/tools/exec-approvals.md`
- `docs/tools/exec.md`
- `docs/tools/firecrawl.md`
- `docs/tools/gemini-search.md`
- `docs/tools/grok-search.md`
- `docs/tools/image-generation.md`
- `docs/tools/index.md`
- `docs/tools/kimi-search.md`
- `docs/tools/llm-task.md`
- `docs/tools/lobster.md`
- `docs/tools/loop-detection.md`
- `docs/tools/media-overview.md`
- `docs/tools/minimax-search.md`
- `docs/tools/multi-agent-sandbox-tools.md`
- `docs/tools/music-generation.md`
- `docs/tools/ollama-search.md`
- `docs/tools/plugin.md`
- `docs/tools/reactions.md`
- `docs/tools/searxng-search.md`
- `docs/tools/skills.md`
- `docs/tools/slash-commands.md`
- `docs/tools/steer.md`
- `docs/tools/subagents.md`
- `docs/tools/thinking.md`
- `docs/tools/trajectory.md`
- `docs/tools/tts.md`
- … plus 3 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
