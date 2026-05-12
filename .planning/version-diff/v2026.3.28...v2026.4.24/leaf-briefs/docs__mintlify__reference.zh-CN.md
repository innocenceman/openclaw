# docs/mintlify/reference

## 一句话结论

reference 所属的 Docs, generated baselines, changelog and public guidance 有 29 个路径变化（新增 1、修改 28），兼容性判断为仅文档/测试。

## Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/reference`
- Changed path count: `29`
- Status counts: `新增 1、修改 28`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `29` files, `+1360` / `-781`

## 功能变化摘要

这个 leaf 属于 `Docs, generated baselines, changelog and public guidance`。本次版本差异显示它的主要变化是：新增 1、修改 28。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `docs/reference/rich-output-protocol.md`

### 修改

- `docs/reference/AGENTS.default.md`
- `docs/reference/RELEASING.md`
- `docs/reference/api-usage-costs.md`
- `docs/reference/credits.md`
- `docs/reference/device-models.md`
- `docs/reference/memory-config.md`
- `docs/reference/prompt-caching.md`
- `docs/reference/rpc.md`
- `docs/reference/secretref-credential-surface.md`
- `docs/reference/secretref-user-supplied-credentials-matrix.json`
- `docs/reference/session-management-compaction.md`
- `docs/reference/templates/AGENTS.dev.md`
- `docs/reference/templates/AGENTS.md`
- `docs/reference/templates/BOOT.md`
- `docs/reference/templates/BOOTSTRAP.md`
- `docs/reference/templates/HEARTBEAT.md`
- `docs/reference/templates/IDENTITY.dev.md`
- `docs/reference/templates/IDENTITY.md`
- `docs/reference/templates/SOUL.dev.md`
- `docs/reference/templates/SOUL.md`
- `docs/reference/templates/TOOLS.dev.md`
- `docs/reference/templates/TOOLS.md`
- `docs/reference/templates/USER.dev.md`
- `docs/reference/templates/USER.md`
- `docs/reference/test.md`
- `docs/reference/token-use.md`
- `docs/reference/transcript-hygiene.md`
- `docs/reference/wizard.md`

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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `docs/mintlify/reference` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/reference/change-to-test.md` 的验证建议。
