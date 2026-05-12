# Docs providers Change-to-Test Matrix

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

- Changed paths: `53` (新增 15，修改 37，删除 1).
- Target-existing path refs in active map: `52`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `medium`; compatibility: `docs-only`.
- First validation move: Validate documentation or generated baseline drift first; source runtime tests are secondary unless the changed paths include executable files.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `docs-only`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
