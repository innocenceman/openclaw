# Docs providers Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Content-to-route path

1. A page in `docs/providers` changes or moves.
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

This target refresh maps `53` changed path(s) to this final leaf. `52` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 15, 'M': 37, 'D': 1}`.

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
- `docs/providers/fal.md`
- `docs/providers/fireworks.md`
- `docs/providers/github-copilot.md`
- `docs/providers/glm.md`
- `docs/providers/google.md`
- `docs/providers/gradium.md`
- `docs/providers/groq.md`
- `docs/providers/huggingface.md`
- `docs/providers/index.md`
- `docs/providers/inferrs.md`
- `docs/providers/kilocode.md`
- `docs/providers/litellm.md`
- `docs/providers/lmstudio.md`
- `docs/providers/minimax.md`
- `docs/providers/mistral.md`
- `docs/providers/models.md`
- `docs/providers/moonshot.md`
- `docs/providers/nvidia.md`
- `... 另有 22 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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
