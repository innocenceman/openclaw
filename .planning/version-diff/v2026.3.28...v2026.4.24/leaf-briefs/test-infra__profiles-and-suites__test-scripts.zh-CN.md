# test-infra/profiles-and-suites/test-scripts

## 一句话结论

test scripts 所属的 Build, CI, scripts, tests and release automation 有 77 个路径变化（新增 77），兼容性判断为兼容。

## Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/test-scripts`
- Changed path count: `77`
- Status counts: `新增 77`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `77` files, `+9850` / `-0`

## 功能变化摘要

这个 leaf 属于 `Build, CI, scripts, tests and release automation`。本次版本差异显示它的主要变化是：新增 77。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `qa/README.md`
- `qa/convex-credential-broker/.gitignore`
- `qa/convex-credential-broker/README.md`
- `qa/convex-credential-broker/convex.json`
- `qa/convex-credential-broker/convex/credentials.ts`
- `qa/convex-credential-broker/convex/crons.ts`
- `qa/convex-credential-broker/convex/http.ts`
- `qa/convex-credential-broker/convex/payload-validation.ts`
- `qa/convex-credential-broker/convex/schema.ts`
- `qa/convex-credential-broker/convex/tsconfig.json`
- `qa/convex-credential-broker/package.json`
- `qa/frontier-harness-plan.md`
- `qa/new-scenarios-2026-04.md`
- `qa/scenarios.md`
- `qa/scenarios/agents/instruction-followthrough-repo-contract.md`
- `qa/scenarios/agents/subagent-fanout-synthesis.md`
- `qa/scenarios/agents/subagent-forked-context.md`
- `qa/scenarios/agents/subagent-handoff.md`
- `qa/scenarios/agents/subagent-stale-child-links.md`
- `qa/scenarios/channels/channel-chat-baseline.md`
- `qa/scenarios/channels/dm-chat-baseline.md`
- `qa/scenarios/channels/qa-channel-reconnect-dedupe.md`
- `qa/scenarios/channels/reaction-edit-delete.md`
- `qa/scenarios/channels/thread-follow-up.md`
- `qa/scenarios/character/character-vibes-c3po.md`
- `qa/scenarios/character/character-vibes-gollum.md`
- `qa/scenarios/config/config-apply-restart-wakeup.md`
- `qa/scenarios/config/config-patch-hot-apply.md`
- `qa/scenarios/config/config-restart-capability-flip.md`
- `qa/scenarios/index.md`
- … 另有 47 个路径，详见 `leaf-impact.json`。

## 兼容性判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。

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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `test-infra/profiles-and-suites/test-scripts` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/test-infra/profiles-and-suites/test-scripts/change-to-test.md` 的验证建议。
