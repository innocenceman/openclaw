# extensions/skill-plugins/diffs

## 一句话结论

diffs 所属的 Bundled skill plugins and skill runtime surfaces 有 30 个路径变化（新增 8、修改 22），兼容性判断为行为变化。

## Canonical facts

- Feature group: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/diffs`
- Changed path count: `30`
- Status counts: `新增 8、修改 22`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `30` files, `+2993` / `-905`

## 功能变化摘要

这个 leaf 属于 `Bundled skill plugins and skill runtime surfaces`。本次版本差异显示它的主要变化是：新增 8、修改 22。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/diffs/runtime-api.ts`
- `extensions/diffs/src/language-hints.test.ts`
- `extensions/diffs/src/language-hints.ts`
- `extensions/diffs/src/plugin.ts`
- `extensions/diffs/src/render-target.test.ts`
- `extensions/diffs/src/render.test.ts`
- `extensions/diffs/src/tool-render-output.test.ts`
- `extensions/diffs/tsconfig.json`

### 修改

- `extensions/diffs/README.md`
- `extensions/diffs/assets/viewer-runtime.js`
- `extensions/diffs/index.ts`
- `extensions/diffs/openclaw.plugin.json`
- `extensions/diffs/package.json`
- `extensions/diffs/skills/diffs/SKILL.md`
- `extensions/diffs/src/browser.test.ts`
- `extensions/diffs/src/browser.ts`
- `extensions/diffs/src/config.test.ts`
- `extensions/diffs/src/config.ts`
- `extensions/diffs/src/http.ts`
- `extensions/diffs/src/render.ts`
- `extensions/diffs/src/store.test.ts`
- `extensions/diffs/src/store.ts`
- `extensions/diffs/src/test-helpers.ts`
- `extensions/diffs/src/tool.test.ts`
- `extensions/diffs/src/tool.ts`
- `extensions/diffs/src/types.ts`
- `extensions/diffs/src/url.ts`
- `extensions/diffs/src/viewer-assets.ts`
- `extensions/diffs/src/viewer-client.ts`
- `extensions/diffs/src/viewer-payload.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者

## 建议验证

- 首选验证：Manifest/config changed | `pnpm test:contracts:plugins` and affected plugin catalog tests | Escalate to docs/UI/config checks for user-facing changes.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/skill-plugins/diffs` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/skill-plugins/diffs/change-to-test.md` 的验证建议。
