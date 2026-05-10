# docs/mintlify/cli

## 一句话结论

cli 所属的 Docs, generated baselines, changelog and public guidance 有 53 个路径变化（新增 5、修改 48），兼容性判断为仅文档/测试。

## Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/cli`
- Changed path count: `53`
- Status counts: `新增 5、修改 48`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `53` files, `+3099` / `-1166`

## 功能变化摘要

这个 leaf 属于 `Docs, generated baselines, changelog and public guidance`。本次版本差异显示它的主要变化是：新增 5、修改 48。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `docs/cli/flows.md`
- `docs/cli/infer.md`
- `docs/cli/proxy.md`
- `docs/cli/tasks.md`
- `docs/cli/wiki.md`

### 修改

- `docs/cli/acp.md`
- `docs/cli/agent.md`
- `docs/cli/agents.md`
- `docs/cli/approvals.md`
- `docs/cli/backup.md`
- `docs/cli/browser.md`
- `docs/cli/channels.md`
- `docs/cli/clawbot.md`
- `docs/cli/completion.md`
- `docs/cli/config.md`
- `docs/cli/configure.md`
- `docs/cli/cron.md`
- `docs/cli/daemon.md`
- `docs/cli/dashboard.md`
- `docs/cli/devices.md`
- `docs/cli/directory.md`
- `docs/cli/dns.md`
- `docs/cli/docs.md`
- `docs/cli/doctor.md`
- `docs/cli/gateway.md`
- `docs/cli/health.md`
- `docs/cli/hooks.md`
- `docs/cli/index.md`
- `docs/cli/logs.md`
- `docs/cli/mcp.md`
- `docs/cli/memory.md`
- `docs/cli/message.md`
- `docs/cli/models.md`
- `docs/cli/node.md`
- `docs/cli/nodes.md`
- … 另有 18 个路径，详见 `leaf-impact.json`。

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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `docs/mintlify/cli` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/cli/change-to-test.md` 的验证建议。
