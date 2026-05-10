# docs/mintlify/plugins

## 一句话结论

plugins 所属的 Docs, generated baselines, changelog and public guidance 有 28 个路径变化（新增 11、修改 17），兼容性判断为仅文档/测试。

## Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/plugins`
- Changed path count: `28`
- Status counts: `新增 11、修改 17`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `28` files, `+9097` / `-1494`

## 功能变化摘要

这个 leaf 属于 `Docs, generated baselines, changelog and public guidance`。本次版本差异显示它的主要变化是：新增 11、修改 17。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `docs/plugins/architecture-internals.md`
- `docs/plugins/codex-harness.md`
- `docs/plugins/compatibility.md`
- `docs/plugins/google-meet.md`
- `docs/plugins/hooks.md`
- `docs/plugins/memory-wiki.md`
- `docs/plugins/message-presentation.md`
- `docs/plugins/sdk-agent-harness.md`
- `docs/plugins/sdk-subpaths.md`
- `docs/plugins/skill-workshop.md`
- `docs/plugins/webhooks.md`

### 修改

- `docs/plugins/agent-tools.md`
- `docs/plugins/architecture.md`
- `docs/plugins/building-extensions.md`
- `docs/plugins/building-plugins.md`
- `docs/plugins/bundles.md`
- `docs/plugins/community.md`
- `docs/plugins/manifest.md`
- `docs/plugins/sdk-channel-plugins.md`
- `docs/plugins/sdk-entrypoints.md`
- `docs/plugins/sdk-migration.md`
- `docs/plugins/sdk-overview.md`
- `docs/plugins/sdk-provider-plugins.md`
- `docs/plugins/sdk-runtime.md`
- `docs/plugins/sdk-setup.md`
- `docs/plugins/sdk-testing.md`
- `docs/plugins/voice-call.md`
- `docs/plugins/zalouser.md`

## 兼容性判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者
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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `docs/mintlify/plugins` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/plugins/change-to-test.md` 的验证建议。
