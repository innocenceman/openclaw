# src/shared-misc-runtime-support/compat-hooks

## 一句话结论

compat hooks 所属的 Shared runtime primitives, compatibility, logging and startup support 有 41 个路径变化（新增 6、修改 35），兼容性判断为行为变化。

## Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/compat-hooks`
- Changed path count: `41`
- Status counts: `新增 6、修改 35`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `41` files, `+1234` / `-289`

## 功能变化摘要

这个 leaf 属于 `Shared runtime primitives, compatibility, logging and startup support`。本次版本差异显示它的主要变化是：新增 6、修改 35。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/compat/legacy-names.test.ts`
- `src/hooks/configured.ts`
- `src/hooks/internal-hook-types.ts`
- `src/hooks/legacy-config.ts`
- `src/hooks/llm-slug-generator.test.ts`
- `src/hooks/update.test.ts`

### 修改

- `src/compat/legacy-names.ts`
- `src/hooks/bundled/boot-md/handler.test.ts`
- `src/hooks/bundled/boot-md/handler.ts`
- `src/hooks/bundled/bootstrap-extra-files/HOOK.md`
- `src/hooks/bundled/bootstrap-extra-files/handler.ts`
- `src/hooks/bundled/command-logger/handler.ts`
- `src/hooks/bundled/session-memory/handler.test.ts`
- `src/hooks/bundled/session-memory/handler.ts`
- `src/hooks/bundled/session-memory/transcript.ts`
- `src/hooks/fire-and-forget.test.ts`
- `src/hooks/fire-and-forget.ts`
- `src/hooks/frontmatter.ts`
- `src/hooks/gmail-ops.ts`
- `src/hooks/gmail-setup-utils.ts`
- `src/hooks/gmail-watcher-lifecycle.ts`
- `src/hooks/gmail-watcher.ts`
- `src/hooks/gmail.test.ts`
- `src/hooks/gmail.ts`
- `src/hooks/hooks-status.ts`
- `src/hooks/hooks.ts`
- `src/hooks/install.test.ts`
- `src/hooks/install.ts`
- `src/hooks/installs.ts`
- `src/hooks/internal-hooks.test.ts`
- `src/hooks/internal-hooks.ts`
- `src/hooks/llm-slug-generator.ts`
- `src/hooks/loader.test.ts`
- `src/hooks/loader.ts`
- `src/hooks/message-hook-mappers.test.ts`
- `src/hooks/message-hook-mappers.ts`
- … 另有 5 个路径，详见 `leaf-impact.json`。

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 可能受影响的人或模块

- CLI/agent 使用者
- agent runtime 集成方

## 建议验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/compat-hooks` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/compat-hooks/change-to-test.md` 的验证建议。
