# docs/mintlify/start

## 一句话结论

start 所属的 Docs, generated baselines, changelog and public guidance 有 14 个路径变化（修改 14），兼容性判断为仅文档/测试。

## Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/start`
- Changed path count: `14`
- Status counts: `修改 14`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `14` files, `+365` / `-287`

## 功能变化摘要

这个 leaf 属于 `Docs, generated baselines, changelog and public guidance`。本次版本差异显示它的主要变化是：修改 14。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 修改

- `docs/start/bootstrapping.md`
- `docs/start/docs-directory.md`
- `docs/start/getting-started.md`
- `docs/start/hubs.md`
- `docs/start/lore.md`
- `docs/start/onboarding-overview.md`
- `docs/start/onboarding.md`
- `docs/start/openclaw.md`
- `docs/start/quickstart.md`
- `docs/start/setup.md`
- `docs/start/showcase.md`
- `docs/start/wizard-cli-automation.md`
- `docs/start/wizard-cli-reference.md`
- `docs/start/wizard.md`

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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `docs/mintlify/start` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/start/change-to-test.md` 的验证建议。
