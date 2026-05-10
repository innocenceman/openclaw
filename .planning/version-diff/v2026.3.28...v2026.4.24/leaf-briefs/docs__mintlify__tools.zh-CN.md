# docs/mintlify/tools

## 一句话结论

tools 所属的 Docs, generated baselines, changelog and public guidance 有 53 个路径变化（新增 12、修改 41），兼容性判断为仅文档/测试。

## Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/tools`
- Changed path count: `53`
- Status counts: `新增 12、修改 41`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `53` files, `+5048` / `-1427`

## 功能变化摘要

这个 leaf 属于 `Docs, generated baselines, changelog and public guidance`。本次版本差异显示它的主要变化是：新增 12、修改 41。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `docs/tools/acp-agents-setup.md`
- `docs/tools/browser-control.md`
- `docs/tools/exec-approvals-advanced.md`
- `docs/tools/image-generation.md`
- `docs/tools/media-overview.md`
- `docs/tools/minimax-search.md`
- `docs/tools/music-generation.md`
- `docs/tools/ollama-search.md`
- `docs/tools/searxng-search.md`
- `docs/tools/tokenjuice.md`
- `docs/tools/trajectory.md`
- `docs/tools/video-generation.md`

### 修改

- `docs/tools/acp-agents.md`
- `docs/tools/agent-send.md`
- `docs/tools/apply-patch.md`
- `docs/tools/brave-search.md`
- `docs/tools/browser-linux-troubleshooting.md`
- `docs/tools/browser-login.md`
- `docs/tools/browser-wsl2-windows-remote-cdp-troubleshooting.md`
- `docs/tools/browser.md`
- `docs/tools/btw.md`
- `docs/tools/capability-cookbook.md`
- `docs/tools/clawhub.md`
- `docs/tools/code-execution.md`
- `docs/tools/creating-skills.md`
- `docs/tools/diffs.md`
- `docs/tools/duckduckgo-search.md`
- `docs/tools/elevated.md`
- `docs/tools/exa-search.md`
- `docs/tools/exec-approvals.md`
- `docs/tools/exec.md`
- `docs/tools/firecrawl.md`
- `docs/tools/gemini-search.md`
- `docs/tools/grok-search.md`
- `docs/tools/index.md`
- `docs/tools/kimi-search.md`
- `docs/tools/llm-task.md`
- `docs/tools/lobster.md`
- `docs/tools/loop-detection.md`
- `docs/tools/multi-agent-sandbox-tools.md`
- `docs/tools/pdf.md`
- `docs/tools/perplexity-search.md`
- … 另有 11 个路径，详见 `leaf-impact.json`。

## 兼容性判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。

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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `docs/mintlify/tools` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/tools/change-to-test.md` 的验证建议。
