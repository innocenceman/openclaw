# docs/mintlify/providers

## 一句话结论

providers 所属的 Docs, generated baselines, changelog and public guidance 有 53 个路径变化（新增 15、修改 37、删除 1），兼容性判断为仅文档/测试。

## Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/providers`
- Changed path count: `53`
- Status counts: `新增 15、修改 37、删除 1`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `53` files, `+9116` / `-2535`

## 功能变化摘要

这个 leaf 属于 `Docs, generated baselines, changelog and public guidance`。本次版本差异显示它的主要变化是：新增 15、修改 37、删除 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `docs/providers/alibaba.md`
- `docs/providers/arcee.md`
- `docs/providers/bedrock-mantle.md`
- `docs/providers/chutes.md`
- `docs/providers/comfy.md`
- `docs/providers/elevenlabs.md`
- `docs/providers/fal.md`
- `docs/providers/fireworks.md`
- `docs/providers/gradium.md`
- `docs/providers/inferrs.md`
- `docs/providers/lmstudio.md`
- `docs/providers/runway.md`
- `docs/providers/stepfun.md`
- `docs/providers/tencent.md`
- `docs/providers/vydra.md`

### 修改

- `docs/providers/anthropic.md`
- `docs/providers/bedrock.md`
- `docs/providers/claude-max-api-proxy.md`
- `docs/providers/cloudflare-ai-gateway.md`
- `docs/providers/deepgram.md`
- `docs/providers/deepseek.md`
- `docs/providers/github-copilot.md`
- `docs/providers/glm.md`
- `docs/providers/google.md`
- `docs/providers/groq.md`
- `docs/providers/huggingface.md`
- `docs/providers/index.md`
- `docs/providers/kilocode.md`
- `docs/providers/litellm.md`
- `docs/providers/minimax.md`
- `docs/providers/mistral.md`
- `docs/providers/models.md`
- `docs/providers/moonshot.md`
- `docs/providers/nvidia.md`
- `docs/providers/ollama.md`
- `docs/providers/openai.md`
- `docs/providers/opencode-go.md`
- `docs/providers/opencode.md`
- `docs/providers/openrouter.md`
- `docs/providers/perplexity-provider.md`
- `docs/providers/qianfan.md`
- `docs/providers/qwen.md`
- `docs/providers/sglang.md`
- `docs/providers/synthetic.md`
- `docs/providers/together.md`
- … 另有 7 个路径，详见 `leaf-impact.json`。

### 删除

- `docs/providers/qwen_modelstudio.md`

## 兼容性判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 可能受影响的人或模块

- 文档读者和维护者

## 建议验证

- 首选验证：Existing page copy, examples, or frontmatter changed | `pnpm check:docs` | Escalate to product-specific tests only when the docs change is coupled to code behavior.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `docs/mintlify/providers` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/providers/change-to-test.md` 的验证建议。
