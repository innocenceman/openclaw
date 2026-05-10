# extensions/skill-plugins/tlon

## 一句话结论

tlon 所属的 Bundled skill plugins and skill runtime surfaces 有 25 个路径变化（新增 6、修改 19），兼容性判断为行为变化。

## Canonical facts

- Feature group: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/tlon`
- Changed path count: `25`
- Status counts: `新增 6、修改 19`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `25` files, `+585` / `-248`

## 功能变化摘要

这个 leaf 属于 `Bundled skill plugins and skill runtime surfaces`。本次版本差异显示它的主要变化是：新增 6、修改 19。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/tlon/src/doctor-contract.ts`
- `extensions/tlon/src/doctor.test.ts`
- `extensions/tlon/src/doctor.ts`
- `extensions/tlon/src/logger-runtime.ts`
- `extensions/tlon/src/monitor/approval.test.ts`
- `extensions/tlon/src/monitor/media.test.ts`

### 修改

- `extensions/tlon/src/account-fields.ts`
- `extensions/tlon/src/core.test.ts`
- `extensions/tlon/src/monitor/approval-runtime.ts`
- `extensions/tlon/src/monitor/approval.ts`
- `extensions/tlon/src/monitor/discovery.ts`
- `extensions/tlon/src/monitor/history.ts`
- `extensions/tlon/src/monitor/media.ts`
- `extensions/tlon/src/monitor/settings-helpers.test.ts`
- `extensions/tlon/src/monitor/settings-helpers.ts`
- `extensions/tlon/src/runtime.ts`
- `extensions/tlon/src/security.test.ts`
- `extensions/tlon/src/setup-surface.ts`
- `extensions/tlon/src/types.ts`
- `extensions/tlon/src/urbit/channel-ops.ts`
- `extensions/tlon/src/urbit/context.ts`
- `extensions/tlon/src/urbit/fetch.ts`
- `extensions/tlon/src/urbit/story.ts`
- `extensions/tlon/src/urbit/upload.test.ts`
- `extensions/tlon/src/urbit/upload.ts`

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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/skill-plugins/tlon` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/skill-plugins/tlon/change-to-test.md` 的验证建议。
