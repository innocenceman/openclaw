# extensions/channel-plugins/imessage

## 1. 功能结论

**修改**：handle EPIPE errors on child process stdin writes、align channel fixtures with open dm policy、align open DM allowlist policy；**迁移/重构**：trim imessage helper exports、trim extension helper shims、trim extension test hooks、channels route inbound turns through kernel；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 41

## 3. 功能级详细差异

### 修复 align open DM allowlist policy

修复 align open DM allowlist policy

- 验证提示：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 置信度：`high`

### 修复 handle EPIPE errors on child process stdin writes

修复 handle EPIPE errors on child process stdin writes

- 验证提示：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 置信度：`high`

### 测试覆盖 align channel fixtures with open dm policy

测试覆盖 align channel fixtures with open dm policy

- 验证提示：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 置信度：`high`

### 迁移/重构 channels add shared turn kernel

迁移/重构 channels：add shared turn kernel

- 验证提示：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 置信度：`high`

### 迁移/重构 channels move more turn policy into kernel

迁移/重构 channels：move more turn policy into kernel

- 验证提示：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 置信度：`high`

### 迁移/重构 channels route inbound turns through kernel

迁移/重构 channels：route inbound turns through kernel

- 验证提示：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 置信度：`high`

### 迁移/重构 channels share turn dispatch results

迁移/重构 channels：share turn dispatch results

- 验证提示：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 置信度：`high`

### 迁移/重构 trim extension helper shims

迁移/重构 trim extension helper shims

- 验证提示：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 置信度：`high`

### 迁移/重构 trim extension test hooks

迁移/重构 trim extension test hooks

- 验证提示：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 置信度：`high`

### 迁移/重构 trim imessage helper exports

迁移/重构 trim imessage helper exports

- 验证提示：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 imessage public API barrel、config api、plugin manifest/control-plane metadata、runtime api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 channel inbound roots regression/contract coverage、conversation route regression/contract coverage、monitor.gating regression/contract coverage、monitor.watch subscribe retry regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/imessage`
- Changed path count: `41`
- Status counts: `修改 41`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `41` files, `+269` / `-174`

### 归纳依据

- 主要落点：message delivery、configuration/schema。
- 新增或暴露的关键符号包括：`LEADING_ATTRIBUTED_BODY_CORRUPTION_MARKERS`, `buildIMessageEchoScope`, `normalizeIMessageHandle`。
- 建议优先验证：优先运行 `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts`；`pnpm test -- extensions/imessage/src/monitor.shutdown.unhandled-rejection.test.ts extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`；`pnpm test -- extensions/imessage/src/monitor/reflection-guard.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/loop-rate-limiter.test.ts`。
- 相关 commit 主题：refactor: trim imessage helper exports；refactor: trim extension helper shims；refactor: trim extension test hooks；fix: handle EPIPE errors on child process stdin writes；refactor(channels): route inbound turns through kernel；refactor(channels): move more turn policy into kernel；refactor(channels): share turn dispatch results；refactor(channels): add shared turn kernel

### Dimension evidence

- `maintenance-修复-align-open-DM-allowlist-policy` / 修复 align open DM allowlist policy:
  - source: `path` [M] `extensions/imessage/openclaw.plugin.json` — semantic cue
- `maintenance-修复-handle-EPIPE-errors-on-child-process-stdin-w` / 修复 handle EPIPE errors on child process stdin writes:
  - source: `path` [M] `extensions/imessage/api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/imessage/package.json` — semantic cue
  - source: `path` [M] `extensions/imessage/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/src/account-types.ts` — semantic cue
- `tests-docs-测试覆盖-align-channel-fixtures-with-open-dm-policy` / 测试覆盖 align channel fixtures with open dm policy:
  - source: `path` [M] `extensions/imessage/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/imessage/src/channel-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/src/channel-inbound-roots.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/src/channel.runtime.ts` — semantic cue
- `migration-迁移-重构-channels-add-shared-turn-kernel` / 迁移/重构 channels add shared turn kernel:
  - source: `path` [M] `extensions/imessage/api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/imessage/package.json` — semantic cue
  - source: `path` [M] `extensions/imessage/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/src/account-types.ts` — semantic cue
- `migration-迁移-重构-channels-move-more-turn-policy-into-kernel` / 迁移/重构 channels move more turn policy into kernel:
  - source: `path` [M] `extensions/imessage/api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/imessage/package.json` — semantic cue
  - source: `path` [M] `extensions/imessage/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/src/account-types.ts` — semantic cue
- `migration-迁移-重构-channels-route-inbound-turns-through-kern` / 迁移/重构 channels route inbound turns through kernel:
  - source: `path` [M] `extensions/imessage/api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/imessage/package.json` — semantic cue
  - source: `path` [M] `extensions/imessage/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/src/account-types.ts` — semantic cue
- `migration-迁移-重构-channels-share-turn-dispatch-results` / 迁移/重构 channels share turn dispatch results:
  - source: `path` [M] `extensions/imessage/api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/imessage/package.json` — semantic cue
  - source: `path` [M] `extensions/imessage/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/src/account-types.ts` — semantic cue
- `migration-迁移-重构-trim-extension-helper-shims` / 迁移/重构 trim extension helper shims:
  - source: `path` [M] `extensions/imessage/api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/imessage/package.json` — semantic cue
  - source: `path` [M] `extensions/imessage/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/src/account-types.ts` — semantic cue
- `migration-迁移-重构-trim-extension-test-hooks` / 迁移/重构 trim extension test hooks:
  - source: `path` [M] `extensions/imessage/api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/imessage/package.json` — semantic cue
  - source: `path` [M] `extensions/imessage/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/src/account-types.ts` — semantic cue
- `migration-迁移-重构-trim-imessage-helper-exports` / 迁移/重构 trim imessage helper exports:
  - source: `path` [M] `extensions/imessage/api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/imessage/package.json` — semantic cue
  - source: `path` [M] `extensions/imessage/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/imessage/src/account-types.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/imessage/api.ts` — contract evidence
  - source: `path` [M] `extensions/imessage/config-api.ts` — contract evidence
  - source: `path` [M] `extensions/imessage/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/imessage/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/imessage/src/channel-api.ts` — contract evidence
  - source: `path` [M] `extensions/imessage/src/config-accessors.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/imessage/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/imessage/src/channel-inbound-roots.contract.test.ts` — test evidence
  - source: `path` [M] `extensions/imessage/src/conversation-route.test.ts` — test evidence
  - source: `path` [M] `extensions/imessage/src/monitor.gating.test.ts` — test evidence
  - source: `path` [M] `extensions/imessage/src/monitor.watch-subscribe-retry.test.ts` — test evidence
  - source: `path` [M] `extensions/imessage/src/monitor/inbound-processing.test.ts` — test evidence
  - source: `path` [M] `extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts` — test evidence

### 路径证据

- 修改 `extensions/imessage/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/imessage/config-api.ts`：调整 config api（configuration/schema）。
- 修改 `extensions/imessage/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/imessage/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/imessage/runtime-api.ts`：调整 runtime api（message delivery）。
- 修改 `extensions/imessage/src/account-types.ts`：调整 account types（message delivery）。
- 修改 `extensions/imessage/src/channel-api.ts`：调整 channel api（message delivery）。
- 修改 `extensions/imessage/src/channel-inbound-roots.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/imessage/src/channel.runtime.ts`：调整 channel（message delivery）。
- 修改 `extensions/imessage/src/client.ts`：调整 client（message delivery）。
- 修改 `extensions/imessage/src/config-accessors.ts`：调整 config accessors（configuration/schema）。
- 修改 `extensions/imessage/src/conversation-bindings.ts`：调整 conversation bindings（message delivery）。
- 其余 29 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/imessage` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/imessage/change-to-test.md` 的验证建议。
