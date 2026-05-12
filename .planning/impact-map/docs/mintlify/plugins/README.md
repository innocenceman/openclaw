# Docs plugins

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `docs/plugins/**` within the Mintlify docs surface.

## Observed facts

17 files and 17 Markdown pages are present under `docs/plugins/`.
No `docs/plugins/index.md` page was observed; route ownership is spread across leaf pages.
Sample files:

- `docs/plugins/agent-tools.md`
- `docs/plugins/architecture.md`
- `docs/plugins/building-extensions.md`
- `docs/plugins/building-plugins.md`
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
- Changed paths in this leaf: `28` (修改 17，新增 11).
- Target-existing changed paths listed here: `28`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `docs/plugins/agent-tools.md`
- `docs/plugins/architecture-internals.md`
- `docs/plugins/architecture.md`
- `docs/plugins/building-extensions.md`
- `docs/plugins/building-plugins.md`
- `docs/plugins/bundles.md`
- `docs/plugins/codex-harness.md`
- `docs/plugins/community.md`
- `docs/plugins/compatibility.md`
- `docs/plugins/google-meet.md`
- `docs/plugins/hooks.md`
- `docs/plugins/manifest.md`
- `... 另有 16 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `docs-generated-baselines`
- Risk: `medium`
- Compatibility: `docs-only`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `147`
- Target-existing changed paths reflected here: `147`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `docs/plugins/architecture-internals.md`
- `docs/plugins/architecture.md`
- `docs/plugins/building-plugins.md`
- `docs/plugins/bundles.md`
- `docs/plugins/codex-computer-use.md`
- `docs/plugins/codex-harness.md`
- `docs/plugins/community.md`
- `docs/plugins/compatibility.md`
- `docs/plugins/dependency-resolution.md`
- `docs/plugins/google-meet.md`
- `docs/plugins/hooks.md`
- `docs/plugins/manage-plugins.md`
- `docs/plugins/manifest.md`
- `docs/plugins/memory-lancedb.md`
- `docs/plugins/memory-wiki.md`
- `docs/plugins/message-presentation.md`
- `docs/plugins/plugin-inventory.md`
- `docs/plugins/reference.md`
- `docs/plugins/reference/acpx.md`
- `docs/plugins/reference/alibaba.md`
- `docs/plugins/reference/amazon-bedrock-mantle.md`
- `docs/plugins/reference/amazon-bedrock.md`
- `docs/plugins/reference/anthropic-vertex.md`
- `docs/plugins/reference/anthropic.md`
- `docs/plugins/reference/arcee.md`
- `docs/plugins/reference/azure-speech.md`
- `docs/plugins/reference/bluebubbles.md`
- `docs/plugins/reference/bonjour.md`
- `docs/plugins/reference/brave.md`
- `docs/plugins/reference/browser.md`
- `docs/plugins/reference/byteplus.md`
- `docs/plugins/reference/cerebras.md`
- `docs/plugins/reference/chutes.md`
- `docs/plugins/reference/cloudflare-ai-gateway.md`
- `docs/plugins/reference/codex.md`
- `docs/plugins/reference/comfy.md`
- `docs/plugins/reference/copilot-proxy.md`
- `docs/plugins/reference/deepgram.md`
- `docs/plugins/reference/deepinfra.md`
- `docs/plugins/reference/deepseek.md`
- … plus 107 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
