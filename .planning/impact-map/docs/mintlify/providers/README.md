# Docs providers

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `docs/providers/**` within the Mintlify docs surface.

## Observed facts

38 files and 38 Markdown pages are present under `docs/providers/`.
An `docs/providers/index.md` page is present and acts as the local entrypoint.
Sample files:

- `docs/providers/anthropic.md`
- `docs/providers/bedrock.md`
- `docs/providers/claude-max-api-proxy.md`
- `docs/providers/cloudflare-ai-gateway.md`
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
- Changed paths in this leaf: `53` (新增 15，修改 37，删除 1).
- Target-existing changed paths listed here: `52`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `docs/providers/alibaba.md`
- `docs/providers/anthropic.md`
- `docs/providers/arcee.md`
- `docs/providers/bedrock-mantle.md`
- `docs/providers/bedrock.md`
- `docs/providers/chutes.md`
- `docs/providers/claude-max-api-proxy.md`
- `docs/providers/cloudflare-ai-gateway.md`
- `docs/providers/comfy.md`
- `docs/providers/deepgram.md`
- `docs/providers/deepseek.md`
- `docs/providers/elevenlabs.md`
- `... 另有 40 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `docs-generated-baselines`
- Risk: `medium`
- Compatibility: `docs-only`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `39`
- Target-existing changed paths reflected here: `39`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `docs/providers/anthropic.md`
- `docs/providers/azure-speech.md`
- `docs/providers/bedrock.md`
- `docs/providers/cerebras.md`
- `docs/providers/chutes.md`
- `docs/providers/cloudflare-ai-gateway.md`
- `docs/providers/deepinfra.md`
- `docs/providers/deepseek.md`
- `docs/providers/elevenlabs.md`
- `docs/providers/fal.md`
- `docs/providers/github-copilot.md`
- `docs/providers/google.md`
- `docs/providers/groq.md`
- `docs/providers/index.md`
- `docs/providers/inworld.md`
- `docs/providers/kilocode.md`
- `docs/providers/litellm.md`
- `docs/providers/lmstudio.md`
- `docs/providers/minimax.md`
- `docs/providers/mistral.md`
- `docs/providers/models.md`
- `docs/providers/nvidia.md`
- `docs/providers/ollama.md`
- `docs/providers/openai.md`
- `docs/providers/opencode-go.md`
- `docs/providers/openrouter.md`
- `docs/providers/perplexity-provider.md`
- `docs/providers/qianfan.md`
- `docs/providers/qwen.md`
- `docs/providers/senseaudio.md`
- `docs/providers/stepfun.md`
- `docs/providers/together.md`
- `docs/providers/venice.md`
- `docs/providers/vercel-ai-gateway.md`
- `docs/providers/vllm.md`
- `docs/providers/volcengine.md`
- `docs/providers/xai.md`
- `docs/providers/xiaomi.md`
- `docs/providers/zai.md`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
