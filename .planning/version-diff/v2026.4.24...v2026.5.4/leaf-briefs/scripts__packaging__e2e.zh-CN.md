# scripts/packaging/e2e

## 1. 功能结论

**修改**：use latest kitchen sink canary、plugins refresh kitchen sink docker fixture、add slack onboarding channel smoke、plugins add kitchen sink rpc walk；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`ui`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：删除或废弃旧入口、新增能力或入口、行为调整、集成、构建或发布变化
- 特殊形态：large、contains-deletions
- 路径状态摘要（降级事实）：新增 109、修改 34、删除 1

## 3. 功能级详细差异

### 测试覆盖 add slack onboarding channel smoke

测试覆盖 add slack onboarding channel smoke

- 验证提示：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 置信度：`high`

### 测试覆盖 e2e require configured plugin npm repair

测试覆盖 e2e：require configured plugin npm repair

- 验证提示：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 置信度：`high`

### 测试覆盖 e2e run crestodian planner harness without tsx

测试覆盖 e2e：run crestodian planner harness without tsx

- 验证提示：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 置信度：`high`

### 测试覆盖 improve Parallels beta validation

测试覆盖 improve Parallels beta validation

- 验证提示：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 置信度：`high`

### 测试覆盖 package cover stale source plugin shadows

测试覆盖 package：cover stale source plugin shadows

- 验证提示：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 置信度：`high`

### 测试覆盖 plugins add kitchen sink rpc walk

测试覆盖 plugins：add kitchen sink rpc walk

- 验证提示：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 置信度：`high`

### 测试覆盖 plugins refresh kitchen sink docker fixture

测试覆盖 plugins：refresh kitchen sink docker fixture

- 验证提示：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 置信度：`high`

### 测试覆盖 simplify parallels smoke harness

测试覆盖 simplify parallels smoke harness

- 验证提示：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 置信度：`high`

### 测试覆盖 use latest kitchen sink canary

测试覆盖 use latest kitchen sink canary

- 验证提示：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 置信度：`high`

### 维护调整 improve beta smoke release tooling

维护调整 improve beta smoke release tooling

- 验证提示：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 config reload source docker、assert log、mutate metadata、fixtures config，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 Dockerfile、agents delete shared workspace docker、browser cdp snapshot docker、build image，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `bundled channel runtime deps docker`（`scripts/e2e/bundled-channel-runtime-deps-docker.sh`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 Dockerfile、agents delete shared workspace docker、browser cdp snapshot docker、build image、bun global install smoke、bundled channel runtime deps docker；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/e2e`
- Changed path count: `144`
- Status counts: `新增 109、修改 34、删除 1`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `144` files, `+19596` / `-12747`

### 归纳依据

- 主要落点：implementation、configuration/schema、gateway runtime、auth/pairing/security behavior、session/state handling、image generation、CLI/command behavior。
- 建议优先验证：优先运行 `pnpm test:docker:<target>`；`pnpm test:parallels:<target>`。
- 相关 commit 主题：test: use latest kitchen sink canary；test(plugins): refresh kitchen sink docker fixture；test: add slack onboarding channel smoke；test(plugins): add kitchen sink rpc walk；test(package): cover stale source plugin shadows；test(e2e): run crestodian planner harness without tsx；chore: improve beta smoke release tooling；test: improve Parallels beta validation

### Dimension evidence

- `tests-docs-测试覆盖-add-slack-onboarding-channel-smoke` / 测试覆盖 add slack onboarding channel smoke:
  - source: `path` [M] `scripts/e2e/bun-global-install-smoke.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/bundled-channel-runtime-deps-docker.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/bundled-plugin-install-uninstall/runtime-smoke.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/npm-onboard-channel-agent/assertions.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/update-channel-switch/assertions.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/upgrade-survivor/config-recipe/channels-discord.json` — semantic cue
- `user-visible-测试覆盖-e2e-require-configured-plugin-npm-repair` / 测试覆盖 e2e require configured plugin npm repair:
  - source: `path` [M] `scripts/e2e/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/e2e/Dockerfile.qr-import` — semantic cue
  - source: `path` [M] `scripts/e2e/agents-delete-shared-workspace-docker.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/browser-cdp-snapshot-docker.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/build-image.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/bun-global-install-smoke.sh` — semantic cue
- `tests-docs-测试覆盖-e2e-run-crestodian-planner-harness-without` / 测试覆盖 e2e run crestodian planner harness without tsx:
  - source: `path` [M] `scripts/e2e/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/e2e/Dockerfile.qr-import` — semantic cue
  - source: `path` [M] `scripts/e2e/agents-delete-shared-workspace-docker.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/browser-cdp-snapshot-docker.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/build-image.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/bun-global-install-smoke.sh` — semantic cue
- `tests-docs-测试覆盖-improve-Parallels-beta-validation` / 测试覆盖 improve Parallels beta validation:
  - source: `path` [M] `scripts/e2e/lib/parallels-package-common.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/parallels-package/build-info-commit.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/parallels-package/log-progress-extract.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/parallels-linux-smoke.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/parallels-macos-smoke.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/parallels-npm-update-smoke.sh` — semantic cue
- `tests-docs-测试覆盖-package-cover-stale-source-plugin-shadows` / 测试覆盖 package cover stale source plugin shadows:
  - source: `path` [M] `scripts/e2e/bundled-plugin-install-uninstall-docker.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/codex-npm-plugin-live-docker.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/config-reload-source-docker.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/kitchen-sink-plugin-docker.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/bundled-plugin-install-uninstall/probe.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/bundled-plugin-install-uninstall/runtime-smoke.mjs` — semantic cue
- `tests-docs-测试覆盖-plugins-add-kitchen-sink-rpc-walk` / 测试覆盖 plugins add kitchen sink rpc walk:
  - source: `path` [M] `scripts/e2e/kitchen-sink-plugin-docker.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/kitchen-sink-rpc-walk.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/fixtures/plugins.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/kitchen-sink-plugin/assertions.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/kitchen-sink-plugin/sweep.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/plugins/assertions.mjs` — semantic cue
- `tests-docs-测试覆盖-plugins-refresh-kitchen-sink-docker-fixture` / 测试覆盖 plugins refresh kitchen sink docker fixture:
  - source: `path` [M] `scripts/e2e/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/e2e/Dockerfile.qr-import` — semantic cue
  - source: `path` [M] `scripts/e2e/agents-delete-shared-workspace-docker.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/browser-cdp-snapshot-docker.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/bundled-channel-runtime-deps-docker.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/bundled-plugin-install-uninstall-docker.sh` — semantic cue
- `tests-docs-测试覆盖-simplify-parallels-smoke-harness` / 测试覆盖 simplify parallels smoke harness:
  - source: `path` [M] `scripts/e2e/bun-global-install-smoke.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/bundled-plugin-install-uninstall/runtime-smoke.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/parallels-package-common.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/parallels-package/build-info-commit.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/parallels-package/log-progress-extract.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/mcp-channels-harness.ts` — semantic cue
- `tests-docs-测试覆盖-use-latest-kitchen-sink-canary` / 测试覆盖 use latest kitchen sink canary:
  - source: `path` [M] `scripts/e2e/kitchen-sink-plugin-docker.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/kitchen-sink-rpc-walk.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/kitchen-sink-plugin/assertions.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/kitchen-sink-plugin/sweep.sh` — semantic cue
- `maintenance-维护调整-improve-beta-smoke-release-tooling` / 维护调整 improve beta smoke release tooling:
  - source: `path` [M] `scripts/e2e/bun-global-install-smoke.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/lib/bundled-plugin-install-uninstall/runtime-smoke.mjs` — semantic cue
  - source: `path` [M] `scripts/e2e/parallels-linux-smoke.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/parallels-macos-smoke.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/parallels-npm-update-smoke.sh` — semantic cue
  - source: `path` [M] `scripts/e2e/parallels-windows-smoke.sh` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `scripts/e2e/config-reload-source-docker.sh` — contract evidence
  - source: `path` [M] `scripts/e2e/lib/config-reload/assert-log.mjs` — contract evidence
  - source: `path` [M] `scripts/e2e/lib/config-reload/mutate-metadata.mjs` — contract evidence
  - source: `path` [M] `scripts/e2e/lib/fixtures/config.mjs` — contract evidence
  - source: `path` [M] `scripts/e2e/lib/onboard/assert-config.mjs` — contract evidence
  - source: `path` [M] `scripts/e2e/lib/onboard/write-config.mjs` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `scripts/e2e/Dockerfile` — build/release evidence
  - source: `path` [M] `scripts/e2e/Dockerfile.qr-import` — build/release evidence
  - source: `path` [M] `scripts/e2e/agents-delete-shared-workspace-docker.sh` — build/release evidence
  - source: `path` [M] `scripts/e2e/browser-cdp-snapshot-docker.sh` — build/release evidence
  - source: `path` [M] `scripts/e2e/build-image.sh` — build/release evidence
  - source: `path` [M] `scripts/e2e/bundled-channel-runtime-deps-docker.sh` — build/release evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `scripts/e2e/bundled-channel-runtime-deps-docker.sh`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `scripts/e2e/browser-cdp-snapshot-docker.sh`
  - source: `path` [A] `scripts/e2e/bundled-plugin-install-uninstall-docker.sh`
  - source: `path` [A] `scripts/e2e/codex-npm-plugin-live-docker.sh`
  - source: `path` [A] `scripts/e2e/commitments-safety-docker-client.ts`
  - source: `path` [A] `scripts/e2e/commitments-safety-docker.sh`
  - source: `path` [A] `scripts/e2e/crestodian-first-run-docker-client.ts`

### 路径证据

- 新增 `scripts/e2e/browser-cdp-snapshot-docker.sh`：调整 browser cdp snapshot docker（implementation）。
- 新增 `scripts/e2e/bundled-plugin-install-uninstall-docker.sh`：调整 bundled plugin install uninstall docker（implementation）。
- 新增 `scripts/e2e/codex-npm-plugin-live-docker.sh`：调整 codex npm plugin live docker（implementation）。
- 新增 `scripts/e2e/commitments-safety-docker-client.ts`：调整 commitments safety docker client（implementation）。
- 新增 `scripts/e2e/commitments-safety-docker.sh`：调整 commitments safety docker（implementation）。
- 新增 `scripts/e2e/crestodian-first-run-docker-client.ts`：调整 crestodian first run docker client（implementation）。
- 新增 `scripts/e2e/crestodian-first-run-docker.sh`：调整 crestodian first run docker（implementation）。
- 新增 `scripts/e2e/crestodian-first-run-spec.json`：调整 crestodian first run spec（implementation）。
- 新增 `scripts/e2e/crestodian-planner-docker-client.mjs`：调整 crestodian planner docker client（implementation）。
- 新增 `scripts/e2e/crestodian-planner-docker.sh`：调整 crestodian planner docker（implementation）。
- 新增 `scripts/e2e/crestodian-rescue-docker-client.ts`：调整 crestodian rescue docker client（implementation）。
- 新增 `scripts/e2e/crestodian-rescue-docker.sh`：调整 crestodian rescue docker（implementation）。
- 修改 `scripts/e2e/Dockerfile`：调整 Dockerfile（implementation）。
- 修改 `scripts/e2e/Dockerfile.qr-import`：调整 Dockerfile（implementation）。
- 修改 `scripts/e2e/agents-delete-shared-workspace-docker.sh`：调整 agents delete shared workspace docker（implementation）。
- 修改 `scripts/e2e/build-image.sh`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `scripts/e2e/bun-global-install-smoke.sh`：调整 bun global install smoke（implementation）。
- 修改 `scripts/e2e/config-reload-source-docker.sh`：调整 config reload source docker（configuration/schema）。
- 修改 `scripts/e2e/cron-mcp-cleanup-docker-client.ts`：调整 cron mcp cleanup docker client（implementation）。
- 修改 `scripts/e2e/cron-mcp-cleanup-docker.sh`：调整 cron mcp cleanup docker（implementation）。
- 修改 `scripts/e2e/cron-mcp-cleanup-seed.ts`：调整 cron mcp cleanup seed（implementation）。
- 修改 `scripts/e2e/docker-openai-seed.ts`：调整 docker openai seed（implementation）。
- 修改 `scripts/e2e/doctor-install-switch-docker.sh`：调整 doctor install switch docker（implementation）。
- 修改 `scripts/e2e/gateway-network-docker.sh`：调整 gateway network docker（gateway runtime）。
- 删除 `scripts/e2e/bundled-channel-runtime-deps-docker.sh`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 其余 119 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `scripts/packaging/e2e` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/scripts/packaging/e2e/change-to-test.md` 的验证建议。
