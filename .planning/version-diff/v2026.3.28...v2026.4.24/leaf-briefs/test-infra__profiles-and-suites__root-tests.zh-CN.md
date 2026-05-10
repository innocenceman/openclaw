# test-infra/profiles-and-suites/root-tests

## 一句话结论

root tests 所属的 Build, CI, scripts, tests and release automation 有 96 个路径变化（新增 64、修改 23、删除 9），兼容性判断为兼容。

## Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/root-tests`
- Changed path count: `96`
- Status counts: `新增 64、修改 23、删除 9`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `96` files, `+13506` / `-2178`

## 功能变化摘要

这个 leaf 属于 `Build, CI, scripts, tests and release automation`。本次版本差异显示它的主要变化是：新增 64、修改 23、删除 9。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `test/extension-import-boundaries.test.ts`
- `test/extension-package-tsc-boundary.test.ts`
- `test/helpers/node-builtin-mocks.test.ts`
- `test/image-generation.infer-cli.live.test.ts`
- `test/image-generation.runtime.live.test.ts`
- `test/npm-publish-plan.test.ts`
- `test/openclaw-prepack.test.ts`
- `test/plugin-clawhub-release.test.ts`
- `test/qa-convex-credential-payload-validation.test.ts`
- `test/scripts/build-all.test.ts`
- `test/scripts/bundle-a2ui.test.ts`
- `test/scripts/bundled-plugin-build-entries.test.ts`
- `test/scripts/bundled-plugin-staged-runtime-deps.test.ts`
- `test/scripts/changed-lanes.test.ts`
- `test/scripts/channel-contract-test-plan.test.ts`
- `test/scripts/check-dynamic-import-warts.test.ts`
- `test/scripts/check-extension-package-tsc-boundary.test.ts`
- `test/scripts/check-gateway-watch-regression.test.ts`
- `test/scripts/ci-node-test-plan.test.ts`
- `test/scripts/ci-run-timings.test.ts`
- `test/scripts/close-duplicate-prs-after-merge.test.ts`
- `test/scripts/extension-source-classifier.test.ts`
- `test/scripts/gh-read.test.ts`
- `test/scripts/ios-pin-version.test.ts`
- `test/scripts/ios-version.test.ts`
- `test/scripts/lint-suppressions.test.ts`
- `test/scripts/local-heavy-check-runtime.test.ts`
- `test/scripts/managed-child-process.test.ts`
- `test/scripts/npm-runner.test.ts`
- `test/scripts/npm-telegram-live.test.ts`
- … 另有 34 个路径，详见 `leaf-impact.json`。

### 修改

- `test/extension-test-boundary.test.ts`
- `test/gateway.multi.e2e.test.ts`
- `test/git-hooks-pre-commit.test.ts`
- `test/official-channel-catalog.test.ts`
- `test/openclaw-launcher.e2e.test.ts`
- `test/openclaw-npm-postpublish-verify.test.ts`
- `test/openclaw-npm-release-check.test.ts`
- `test/plugin-npm-release.test.ts`
- `test/release-check.test.ts`
- `test/scripts/check-file-utils.test.ts`
- `test/scripts/check-no-conflict-markers.test.ts`
- `test/scripts/check-no-random-messaging-tmp.test.ts`
- `test/scripts/committer.test.ts`
- `test/scripts/ios-team-id.test.ts`
- `test/scripts/run-vitest-profile.test.ts`
- `test/scripts/stage-bundled-plugin-runtime-deps.test.ts`
- `test/scripts/test-report-utils.test.ts`
- `test/ui.presenter-next-run.test.ts`
- `test/vitest-extensions-config.test.ts`
- `test/vitest-performance-config.test.ts`
- `test/vitest-scoped-config.test.ts`
- `test/vitest-unit-config.test.ts`
- `test/vitest-unit-paths.test.ts`

### 删除

- `test/extension-plugin-sdk-boundary.test.ts`
- `test/scripts/test-parallel.test.ts`
- `test/scripts/test-planner.executor-fallback.test.ts`
- `test/scripts/test-planner.test.ts`
- `test/scripts/test-runner-manifest.test.ts`
- `test/scripts/test-update-memory-hotspots-utils.test.ts`
- `test/test-runner-manifest.test.ts`
- `test/vitest-config.test.ts`
- `test/web-search-provider-boundary.test.ts`

## 兼容性判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `test-infra/profiles-and-suites/root-tests` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/test-infra/profiles-and-suites/root-tests/change-to-test.md` 的验证建议。
