# scripts/packaging/root-scripts

## 一句话结论

root scripts 所属的 Build, CI, scripts, tests and release automation 有 197 个路径变化（新增 101、修改 80、删除 14、重命名 2），兼容性判断为兼容。

## Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/root-scripts`
- Changed path count: `197`
- Status counts: `新增 101、修改 80、删除 14、重命名 2`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `197` files, `+31027` / `-8420`

## 功能变化摘要

这个 leaf 属于 `Build, CI, scripts, tests and release automation`。本次版本差异显示它的主要变化是：新增 101、修改 80、删除 14、重命名 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `Makefile`
- `fix2.py`
- `scripts/AGENTS.md`
- `scripts/CLAUDE.md`
- `scripts/anthropic-prompt-probe.ts`
- `scripts/bench-gateway-startup.ts`
- `scripts/bench-test-changed.mjs`
- `scripts/build-all.mjs`
- `scripts/bundle-a2ui.mjs`
- `scripts/changed-lanes.mjs`
- `scripts/changelog-add-unreleased.ts`
- `scripts/check-changed.mjs`
- `scripts/check-codex-app-server-protocol.ts`
- `scripts/check-docs-mdx.mjs`
- `scripts/check-dynamic-import-warts.mjs`
- `scripts/check-extension-package-tsc-boundary.mjs`
- `scripts/check-import-cycles.ts`
- `scripts/check-live-cache.ts`
- `scripts/check-madge-import-cycles.ts`
- `scripts/check-no-runtime-action-load-config.mjs`
- `scripts/check-release-metadata-only.mjs`
- `scripts/check-sdk-package-extension-import-boundary.mjs`
- `scripts/check-src-extension-import-boundary.mjs`
- `scripts/check-test-helper-extension-import-boundary.mjs`
- `scripts/check-timed.mjs`
- `scripts/check-tsgo-core-boundary.mjs`
- `scripts/check-web-fetch-provider-boundaries.mjs`
- `scripts/check.mjs`
- `scripts/ci-hydrate-live-auth.sh`
- `scripts/ci-run-timings.mjs`
- … 另有 71 个路径，详见 `leaf-impact.json`。

### 修改

- `scripts/audit-seams.mjs`
- `scripts/bench-cli-startup.ts`
- `scripts/bench-model.ts`
- `scripts/bundle-a2ui.sh`
- `scripts/canvas-a2ui-copy.ts`
- `scripts/check-architecture-smells.mjs`
- `scripts/check-channel-agnostic-boundaries.mjs`
- `scripts/check-extension-plugin-sdk-boundary.mjs`
- `scripts/check-file-utils.ts`
- `scripts/check-gateway-watch-regression.mjs`
- `scripts/check-ingress-agent-owner-context.mjs`
- `scripts/check-no-extension-src-imports.ts`
- `scripts/check-no-extension-test-core-imports.ts`
- `scripts/check-no-random-messaging-tmp.mjs`
- `scripts/check-no-raw-channel-fetch.mjs`
- `scripts/check-plugin-extension-import-boundary.mjs`
- `scripts/check-plugin-sdk-exports.mjs`
- `scripts/check-web-search-provider-boundaries.mjs`
- `scripts/check-webhook-auth-body-order.mjs`
- `scripts/ci-changed-scope.d.mts`
- `scripts/ci-changed-scope.mjs`
- `scripts/clawtributors-map.json`
- `scripts/codesign-mac-app.sh`
- `scripts/codespell-ignore.txt`
- `scripts/committer`
- `scripts/cron_usage_report.ts`
- `scripts/debug-claude-usage.ts`
- `scripts/docs-link-audit.mjs`
- `scripts/firecrawl-compare.ts`
- `scripts/generate-base-config-schema.ts`
- … 另有 50 个路径，详见 `leaf-impact.json`。

### 删除

- `scripts/ci-write-manifest-outputs.mjs`
- `scripts/generate-bundled-provider-auth-env-vars.mjs`
- `scripts/generate-plugin-sdk-facades.mjs`
- `scripts/test-parallel-memory.mjs`
- `scripts/test-parallel-utils.mjs`
- `scripts/test-parallel.mjs`
- `scripts/test-planner/catalog.mjs`
- `scripts/test-planner/executor.mjs`
- `scripts/test-planner/planner.mjs`
- `scripts/test-planner/runtime-profile.mjs`
- `scripts/test-runner-manifest.mjs`
- `scripts/test-update-memory-hotspots-utils.mjs`
- `scripts/test-update-memory-hotspots.mjs`
- `scripts/test-update-timings.mjs`

### 重命名

- `scripts/check-temp-path-guardrails.ts`
- `scripts/clawdock/clawdock-helpers.sh`

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

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `scripts/packaging/root-scripts` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/scripts/packaging/root-scripts/change-to-test.md` 的验证建议。
