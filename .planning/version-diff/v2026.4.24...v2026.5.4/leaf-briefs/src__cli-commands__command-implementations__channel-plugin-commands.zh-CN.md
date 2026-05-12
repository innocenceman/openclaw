# src/cli-commands/command-implementations/channel-plugin-commands

## 1. 功能结论

**新增**：plugins prefer clawhub for channel setup installs；**修改**：plugins honor beta channel for auto installs、harden gateway install recovery paths、channels load third-party official channel packages、plugins require provenance for official npm trust；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 2、修改 27、删除 1

## 3. 功能级详细差异

### 修复 channels clarify remote install hints

修复 channels：clarify remote install hints

- 验证提示：优先运行 `pnpm test -- src/commands/channels.ts src/commands/channels`。
- 置信度：`high`

### 修复 channels load third-party official channel packages

修复 channels：load third-party official channel packages

- 验证提示：优先运行 `pnpm test -- src/commands/channels.ts src/commands/channels`。
- 置信度：`high`

### 修复 discord surface stalled transport health

修复 discord：surface stalled transport health

- 验证提示：优先运行 `pnpm test -- src/commands/channels.ts src/commands/channels`。
- 置信度：`high`

### 修复 harden gateway install recovery paths

修复 harden gateway install recovery paths

- 验证提示：优先运行 `pnpm test -- src/commands/channels.ts src/commands/channels`。
- 置信度：`high`

### 修复 plugins honor beta channel for auto installs

修复 plugins：honor beta channel for auto installs

- 验证提示：优先运行 `pnpm test -- src/commands/channels.ts src/commands/channels`。
- 置信度：`high`

### 修复 plugins require provenance for official npm trust

修复 plugins：require provenance for official npm trust

- 验证提示：优先运行 `pnpm test -- src/commands/channels.ts src/commands/channels`。
- 置信度：`high`

### 修复 reduce WebUI session latency churn thanks @BunsDev

修复 reduce WebUI session latency churn thanks @BunsDev

- 验证提示：优先运行 `pnpm test -- src/commands/channels.ts src/commands/channels`。
- 置信度：`high`

### 修复 scope runtime plugin preload to effective plugins

修复 scope runtime plugin preload to effective plugins

- 验证提示：优先运行 `pnpm test -- src/commands/channels.ts src/commands/channels`。
- 置信度：`high`

### 修复 status show configured channels without gateway

修复 status：show configured channels without gateway

- 验证提示：优先运行 `pnpm test -- src/commands/channels.ts src/commands/channels`。
- 置信度：`high`

### 新增 plugins prefer clawhub for channel setup installs

新增 plugins：prefer clawhub for channel setup installs

- 验证提示：优先运行 `pnpm test -- src/commands/channels.ts src/commands/channels`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 channels.config only status output regression/contract coverage、status config format，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- src/commands/channels.ts src/commands/channels`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 channel plugin resolution regression/contract coverage、discovery regression/contract coverage、plugin install regression/contract coverage、workspace shadow bypass regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/commands/channels.ts src/commands/channels`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `channel test helpers`（`src/commands/channel-test-helpers.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/commands/channels.ts src/commands/channels`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/channel-plugin-commands`
- Changed path count: `30`
- Status counts: `新增 2、修改 27、删除 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `30` files, `+1691` / `-370`

### 归纳依据

- 主要落点：CLI/command behavior。
- 新增或暴露的关键符号包括：`resolveCatalogChannelEntry`, `ORIGINAL_OPENCLAW_STATE_DIR`, `createManifestRecord`, `createManifestChannelPlugin`, `setChannelPluginRegistryForTests`。
- 建议优先验证：优先运行 `pnpm test -- src/commands/channels.ts src/commands/channels`。
- 相关 commit 主题：fix(plugins): honor beta channel for auto installs；fix: harden gateway install recovery paths；fix(channels): load third-party official channel packages；fix(plugins): require provenance for official npm trust；fix(discord): surface stalled transport health；fix: reduce WebUI session latency churn thanks @BunsDev；fix(channels): clarify remote install hints；fix(status): show configured channels without gateway

### Dimension evidence

- `maintenance-修复-channels-clarify-remote-install-hints` / 修复 channels clarify remote install hints:
  - source: `path` [M] `src/commands/channel-setup/plugin-install.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/plugin-install.ts` — semantic cue
  - source: `path` [M] `src/commands/channels.add.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channels.adds-non-default-telegram-account.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channels.config-only-status-output.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channels.list.auth-profiles.test.ts` — semantic cue
- `integration-build-release-修复-channels-load-third-party-official-channel-p` / 修复 channels load third-party official channel packages:
  - source: `path` [M] `src/commands/channel-account-context.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/channel-plugin-resolution.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/channel-plugin-resolution.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/discovery.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/discovery.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/plugin-install.test.ts` — semantic cue
- `maintenance-修复-discord-surface-stalled-transport-health` / 修复 discord surface stalled transport health:
  - source: `path` [M] `src/commands/channels.surfaces-signal-runtime-errors-channels-status-output.test.ts` — semantic cue
- `maintenance-修复-harden-gateway-install-recovery-paths` / 修复 harden gateway install recovery paths:
  - source: `path` [M] `src/commands/channel-setup/plugin-install.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/plugin-install.ts` — semantic cue
- `maintenance-修复-plugins-honor-beta-channel-for-auto-installs` / 修复 plugins honor beta channel for auto installs:
  - source: `path` [M] `src/commands/channel-account-context.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/channel-plugin-resolution.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/channel-plugin-resolution.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/discovery.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/discovery.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/plugin-install.test.ts` — semantic cue
- `user-visible-修复-plugins-require-provenance-for-official-npm` / 修复 plugins require provenance for official npm trust:
  - source: `path` [M] `src/commands/channels/status-config-format.ts` — semantic cue
- `user-visible-修复-reduce-WebUI-session-latency-churn-thanks-B` / 修复 reduce WebUI session latency churn thanks @BunsDev:
  - source: `path` [A] `src/commands/channels.logs.test.ts`
  - source: `path` [A] `src/commands/channels/runtime-label.ts`
  - source: `path` [M] `src/commands/channel-account-context.ts`
  - source: `path` [M] `src/commands/channel-setup/channel-plugin-resolution.test.ts`
  - source: `path` [M] `src/commands/channel-setup/channel-plugin-resolution.ts`
  - source: `path` [D] `src/commands/channel-test-helpers.ts`
- `runtime-behavior-修复-scope-runtime-plugin-preload-to-effective-pl` / 修复 scope runtime plugin preload to effective plugins:
  - source: `path` [M] `src/commands/channel-setup/channel-plugin-resolution.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/channel-plugin-resolution.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/plugin-install.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/plugin-install.ts` — semantic cue
  - source: `path` [M] `src/commands/channels.surfaces-signal-runtime-errors-channels-status-output.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channels/runtime-label.ts` — semantic cue
- `maintenance-修复-status-show-configured-channels-without-gate` / 修复 status show configured channels without gateway:
  - source: `path` [M] `src/commands/channels.add.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channels.adds-non-default-telegram-account.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channels.config-only-status-output.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channels.list.auth-profiles.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channels.logs.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channels.remove.test.ts` — semantic cue
- `maintenance-新增-plugins-prefer-clawhub-for-channel-setup-ins` / 新增 plugins prefer clawhub for channel setup installs:
  - source: `path` [M] `src/commands/channel-account-context.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/channel-plugin-resolution.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/channel-plugin-resolution.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/discovery.test.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/discovery.ts` — semantic cue
  - source: `path` [M] `src/commands/channel-setup/plugin-install.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/commands/channels.config-only-status-output.test.ts` — contract evidence
  - source: `path` [M] `src/commands/channels/status-config-format.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/commands/channel-setup/channel-plugin-resolution.test.ts` — test evidence
  - source: `path` [M] `src/commands/channel-setup/discovery.test.ts` — test evidence
  - source: `path` [M] `src/commands/channel-setup/plugin-install.test.ts` — test evidence
  - source: `path` [M] `src/commands/channel-setup/workspace-shadow-bypass.test.ts` — test evidence
  - source: `path` [M] `src/commands/channels.add.test.ts` — test evidence
  - source: `path` [M] `src/commands/channels.adds-non-default-telegram-account.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/commands/channel-test-helpers.ts`

### 路径证据

- 新增 `src/commands/channels.logs.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/commands/channels/runtime-label.ts`：调整 runtime label（CLI/command behavior）。
- 修改 `src/commands/channel-account-context.ts`：调整 channel account context（CLI/command behavior）。
- 修改 `src/commands/channel-setup/channel-plugin-resolution.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/channel-setup/channel-plugin-resolution.ts`：调整 channel plugin resolution（CLI/command behavior）。
- 修改 `src/commands/channel-setup/discovery.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/channel-setup/discovery.ts`：调整 discovery（CLI/command behavior）。
- 修改 `src/commands/channel-setup/plugin-install.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/channel-setup/plugin-install.ts`：调整 plugin install（CLI/command behavior）。
- 修改 `src/commands/channel-setup/registry.ts`：调整 registry（CLI/command behavior）。
- 修改 `src/commands/channel-setup/workspace-shadow-bypass.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/channel-test-registry.ts`：调整 channel test registry（CLI/command behavior）。
- 修改 `src/commands/channels.add.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/channels.adds-non-default-telegram-account.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 删除 `src/commands/channel-test-helpers.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 其余 15 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/cli-commands/command-implementations/channel-plugin-commands` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/command-implementations/channel-plugin-commands/change-to-test.md` 的验证建议。
