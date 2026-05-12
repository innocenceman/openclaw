# extensions/provider-plugins/kimi-coding

## 一句话结论

kimi coding 所属的 Model/search/provider plugins and tool surfaces 有 12 个路径变化（新增 9、修改 3），兼容性判断为行为变化。

## Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/kimi-coding`
- Changed path count: `12`
- Status counts: `新增 9、修改 3`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `12` files, `+780` / `-17`

## 功能变化摘要

这个 leaf 属于 `Model/search/provider plugins and tool surfaces`。本次版本差异显示它的主要变化是：新增 9、修改 3。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/kimi-coding/implicit-provider.test.ts`
- `extensions/kimi-coding/index.test.ts`
- `extensions/kimi-coding/onboard.test.ts`
- `extensions/kimi-coding/provider-catalog.test.ts`
- `extensions/kimi-coding/replay-policy.test.ts`
- `extensions/kimi-coding/replay-policy.ts`
- `extensions/kimi-coding/stream.test.ts`
- `extensions/kimi-coding/stream.ts`
- `extensions/kimi-coding/tsconfig.json`

### 修改

- `extensions/kimi-coding/index.ts`
- `extensions/kimi-coding/openclaw.plugin.json`
- `extensions/kimi-coding/package.json`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者

## 建议验证

- 首选验证：Provider manifest/auth metadata changed | `pnpm test:contracts:plugins` plus provider auth/catalog contract tests | Escalate to docs/UI settings sync if user-facing labels or env vars change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/provider-plugins/kimi-coding` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/kimi-coding/change-to-test.md` 的验证建议。
