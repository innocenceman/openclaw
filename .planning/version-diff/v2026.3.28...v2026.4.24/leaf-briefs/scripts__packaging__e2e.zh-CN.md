# scripts/packaging/e2e

## 一句话结论

e2e 所属的 Build, CI, scripts, tests and release automation 有 38 个路径变化（新增 21、修改 17），兼容性判断为兼容。

## Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/e2e`
- Changed path count: `38`
- Status counts: `新增 21、修改 17`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `38` files, `+9671` / `-796`

## 功能变化摘要

这个 leaf 属于 `Build, CI, scripts, tests and release automation`。本次版本差异显示它的主要变化是：新增 21、修改 17。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `scripts/e2e/agents-delete-shared-workspace-docker.sh`
- `scripts/e2e/build-image.sh`
- `scripts/e2e/bun-global-install-smoke.sh`
- `scripts/e2e/bundled-channel-runtime-deps-docker.sh`
- `scripts/e2e/config-reload-source-docker.sh`
- `scripts/e2e/cron-mcp-cleanup-docker-client.ts`
- `scripts/e2e/cron-mcp-cleanup-docker.sh`
- `scripts/e2e/cron-mcp-cleanup-seed.ts`
- `scripts/e2e/docker-openai-seed.ts`
- `scripts/e2e/lib/parallels-macos-common.sh`
- `scripts/e2e/lib/parallels-package-common.sh`
- `scripts/e2e/mock-openai-server.mjs`
- `scripts/e2e/npm-onboard-channel-agent-docker.sh`
- `scripts/e2e/npm-telegram-live-docker.sh`
- `scripts/e2e/npm-telegram-live-runner.ts`
- `scripts/e2e/openai-image-auth-docker-client.ts`
- `scripts/e2e/openai-image-auth-docker.sh`
- `scripts/e2e/openai-web-search-minimal-docker.sh`
- `scripts/e2e/pi-bundle-mcp-tools-docker-client.ts`
- `scripts/e2e/pi-bundle-mcp-tools-docker.sh`
- `scripts/e2e/plugin-update-unchanged-docker.sh`

### 修改

- `scripts/e2e/Dockerfile`
- `scripts/e2e/Dockerfile.qr-import`
- `scripts/e2e/doctor-install-switch-docker.sh`
- `scripts/e2e/gateway-network-docker.sh`
- `scripts/e2e/mcp-channels-docker-client.ts`
- `scripts/e2e/mcp-channels-docker.sh`
- `scripts/e2e/mcp-channels-harness.ts`
- `scripts/e2e/mcp-channels-seed.ts`
- `scripts/e2e/onboard-docker.sh`
- `scripts/e2e/openwebui-docker.sh`
- `scripts/e2e/openwebui-probe.mjs`
- `scripts/e2e/parallels-linux-smoke.sh`
- `scripts/e2e/parallels-macos-smoke.sh`
- `scripts/e2e/parallels-npm-update-smoke.sh`
- `scripts/e2e/parallels-windows-smoke.sh`
- `scripts/e2e/plugins-docker.sh`
- `scripts/e2e/qr-import-docker.sh`

## 兼容性判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。

## 可能受影响的人或模块

- CI/测试维护者
- 发布/构建维护者

## 建议验证

- 首选验证：Docker/parallels E2E flow changed | `pnpm test:docker:<target>` or `pnpm test:parallels:<target>` | Escalate to broader live/docker suites only when multiple harnesses share the changed path.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `scripts/packaging/e2e` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/scripts/packaging/e2e/change-to-test.md` 的验证建议。
