# src/cli-commands/program-registration

## 一句话结论

program registration 所属的 CLI command surface, status output, onboarding and maintenance commands 有 60 个路径变化（新增 15、修改 45），兼容性判断为行为变化。

## Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/program-registration`
- Changed path count: `60`
- Status counts: `新增 15、修改 45`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `60` files, `+3070` / `-1534`

## 功能变化摘要

这个 leaf 属于 `CLI command surface, status output, onboarding and maintenance commands`。本次版本差异显示它的主要变化是：新增 15、修改 45。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/cli/program/command-descriptor-utils.test.ts`
- `src/cli/program/command-descriptor-utils.ts`
- `src/cli/program/command-group-descriptors.test.ts`
- `src/cli/program/command-group-descriptors.ts`
- `src/cli/program/command-registry-core.ts`
- `src/cli/program/private-qa-cli.test.ts`
- `src/cli/program/private-qa-cli.ts`
- `src/cli/program/register-command-groups.ts`
- `src/cli/program/register-lazy-command.ts`
- `src/cli/program/register.subclis-core.ts`
- `src/cli/program/root-help.test.ts`
- `src/cli/program/route-args.test.ts`
- `src/cli/program/route-args.ts`
- `src/cli/program/route-specs.ts`
- `src/cli/program/routed-command-definitions.ts`

### 修改

- `src/cli/argv.test.ts`
- `src/cli/program.nodes-basic.e2e.test.ts`
- `src/cli/program.nodes-media.e2e.test.ts`
- `src/cli/program.smoke.test.ts`
- `src/cli/program.test-mocks.ts`
- `src/cli/program/action-reparse.test.ts`
- `src/cli/program/build-program.test.ts`
- `src/cli/program/build-program.ts`
- `src/cli/program/build-program.version-alias.test.ts`
- `src/cli/program/command-registry.test.ts`
- `src/cli/program/command-registry.ts`
- `src/cli/program/command-tree.test.ts`
- `src/cli/program/command-tree.ts`
- `src/cli/program/config-guard.test.ts`
- `src/cli/program/config-guard.ts`
- `src/cli/program/context.test.ts`
- `src/cli/program/core-command-descriptors.ts`
- `src/cli/program/help.test.ts`
- `src/cli/program/json-mode.ts`
- `src/cli/program/message/register.discord-admin.ts`
- `src/cli/program/message/register.pins.ts`
- `src/cli/program/message/register.send.ts`
- `src/cli/program/message/register.thread.test.ts`
- `src/cli/program/message/register.thread.ts`
- `src/cli/program/preaction.test.ts`
- `src/cli/program/preaction.ts`
- `src/cli/program/program-context.test.ts`
- `src/cli/program/register.agent.test.ts`
- `src/cli/program/register.agent.ts`
- `src/cli/program/register.backup.test.ts`
- … 另有 15 个路径，详见 `leaf-impact.json`。

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：`program-registration/` | pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/cli-commands/program-registration` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/program-registration/change-to-test.md` 的验证建议。
