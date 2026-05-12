# test-infra/fixtures-and-helpers/fixtures

## 一句话结论

fixtures 所属的 Build, CI, scripts, tests and release automation 有 143 个路径变化（新增 128、修改 6、删除 6、重命名 3），兼容性判断为兼容。

## Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/fixtures`
- Changed path count: `143`
- Status counts: `新增 128、修改 6、删除 6、重命名 3`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `143` files, `+5769` / `-3575`

## 功能变化摘要

这个 leaf 属于 `Build, CI, scripts, tests and release automation`。本次版本差异显示它的主要变化是：新增 128、修改 6、删除 6、重命名 3。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `test/fixtures/cli-startup-bench.json`
- `test/scripts/ios-version.test-support.ts`
- `test/scripts/test-helpers.ts`
- `test/setup-openclaw-runtime.ts`
- `test/tsconfig.json`
- `test/vitest/vitest.acp.config.ts`
- `test/vitest/vitest.agents.config.ts`
- `test/vitest/vitest.auto-reply-core.config.ts`
- `test/vitest/vitest.auto-reply-reply.config.ts`
- `test/vitest/vitest.auto-reply-top-level.config.ts`
- `test/vitest/vitest.auto-reply.config.ts`
- `test/vitest/vitest.boundary.config.ts`
- `test/vitest/vitest.bundled-plugin-paths.ts`
- `test/vitest/vitest.bundled.config.ts`
- `test/vitest/vitest.channel-paths.mjs`
- `test/vitest/vitest.cli.config.ts`
- `test/vitest/vitest.commands-light-paths.mjs`
- `test/vitest/vitest.commands-light.config.ts`
- `test/vitest/vitest.commands.config.ts`
- `test/vitest/vitest.config.ts`
- `test/vitest/vitest.contracts-channel-config.config.ts`
- `test/vitest/vitest.contracts-channel-registry.config.ts`
- `test/vitest/vitest.contracts-channel-session.config.ts`
- `test/vitest/vitest.contracts-channel-surface.config.ts`
- `test/vitest/vitest.contracts-plugin.config.ts`
- `test/vitest/vitest.contracts-shared.ts`
- `test/vitest/vitest.cron.config.ts`
- `test/vitest/vitest.daemon.config.ts`
- `test/vitest/vitest.e2e.config.ts`
- `test/vitest/vitest.extension-acpx-paths.mjs`
- … 另有 98 个路径，详见 `leaf-impact.json`。

### 修改

- `test-fixtures/talk-config-contract.json`
- `test/fixtures/extension-relative-outside-package-inventory.json`
- `test/fixtures/system-run-approval-binding-contract.json`
- `test/scripts/test-extension.test.ts`
- `test/test-env.test.ts`
- `test/test-env.ts`

### 删除

- `test/channel-outbounds.ts`
- `test/fixtures/test-memory-hotspots.unit.json`
- `test/fixtures/test-parallel.behavior.json`
- `test/fixtures/test-timings.channels.json`
- `test/fixtures/test-timings.extensions.json`
- `test/fixtures/test-timings.unit.json`

### 重命名

- `test/vitest/vitest.channels.config.ts`
- `test/vitest/vitest.gateway.config.ts`
- `test/vitest/vitest.performance-config.ts`

## 兼容性判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 可能受影响的人或模块

- CI/测试维护者
- 发布/构建维护者

## 建议验证

- 首选验证：Edit files in this leaf | Run the nearest scoped `pnpm test -- <path-or-filter>` that exercises the changed file. | `OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test` on constrained hosts, or full `pnpm test` when feasible.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `test-infra/fixtures-and-helpers/fixtures` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/test-infra/fixtures-and-helpers/fixtures/change-to-test.md` 的验证建议。
