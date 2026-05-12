# extensions/channel-plugins/zalouser

## 1. 功能结论

**新增**：generalize message access groups；**修改**：Gate zalouser startup name matching、enforce plugin tool manifest contracts、guard provider-prefixed delivery targets、prepare second external plugin beta batch；**迁移/重构**：trim zalouser helper exports、trim extension shim reexports、remove stale extension helpers、channels route inbound turns through kernel；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 24

## 3. 功能级详细差异

### 修复 enforce plugin tool manifest contracts

修复 enforce plugin tool manifest contracts

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 guard provider-prefixed delivery targets

修复 guard provider-prefixed delivery targets

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 修改 Gate zalouser startup name matching

修改 Gate zalouser startup name matching

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 新增 generalize message access groups

新增 generalize message access groups

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 构建/发布调整 prepare second external plugin beta batch

构建/发布调整 prepare second external plugin beta batch

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 channels finish turn kernel migration

迁移/重构 channels：finish turn kernel migration

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 channels route inbound turns through kernel

迁移/重构 channels：route inbound turns through kernel

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 remove stale extension helpers

迁移/重构 remove stale extension helpers

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim extension shim reexports

迁移/重构 trim extension shim reexports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim zalouser helper exports

迁移/重构 trim zalouser helper exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 zalouser public API barrel、plugin manifest/control-plane metadata、runtime api、channel api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 channel.sendpayload regression/contract coverage、channel.setup regression/contract coverage、channel regression/contract coverage、monitor.group gating regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/zalouser`
- Changed path count: `25`
- Status counts: `新增 1、修改 24`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `25` files, `+1256` / `-372`

### 归纳依据

- 主要落点：implementation、tests/contracts、manifest/package metadata、message delivery、plugin entry/API surface、session/state handling。
- 新增或暴露的关键符号包括：`stripZalouserTargetPrefix`, `ZalouserToolSchema`, `TEST_MTIME_TICK_MS`, `credentialPath`, `createMockApi`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts`；`pnpm build`。
- 相关 commit 主题：Gate zalouser startup name matching；fix: enforce plugin tool manifest contracts；fix: guard provider-prefixed delivery targets；build: prepare second external plugin beta batch；feat: generalize message access groups；refactor: trim zalouser helper exports；refactor: trim extension shim reexports；refactor: remove stale extension helpers

### Dimension evidence

- `public-contract-修复-enforce-plugin-tool-manifest-contracts` / 修复 enforce plugin tool manifest contracts:
  - source: `path` [M] `extensions/zalouser/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/tool.ts` — semantic cue
- `maintenance-修复-guard-provider-prefixed-delivery-targets` / 修复 guard provider-prefixed delivery targets:
  - source: `path` [A] `extensions/zalouser/src/zalo-js.credentials.test.ts`
  - source: `path` [M] `extensions/zalouser/api.ts`
  - source: `path` [M] `extensions/zalouser/openclaw.plugin.json`
  - source: `path` [M] `extensions/zalouser/package.json`
- `maintenance-修改-Gate-zalouser-startup-name-matching` / 修改 Gate zalouser startup name matching:
  - source: `path` [M] `extensions/zalouser/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/package.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/channel-api.ts` — semantic cue
- `maintenance-新增-generalize-message-access-groups` / 新增 generalize message access groups:
  - source: `path` [A] `extensions/zalouser/src/zalo-js.credentials.test.ts`
  - source: `path` [M] `extensions/zalouser/api.ts`
  - source: `path` [M] `extensions/zalouser/openclaw.plugin.json`
  - source: `path` [M] `extensions/zalouser/package.json`
- `integration-build-release-构建-发布调整-prepare-second-external-plugin-beta-bat` / 构建/发布调整 prepare second external plugin beta batch:
  - source: `path` [M] `extensions/zalouser/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/package.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/channel-api.ts` — semantic cue
- `migration-迁移-重构-channels-finish-turn-kernel-migration` / 迁移/重构 channels finish turn kernel migration:
  - source: `path` [M] `extensions/zalouser/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/package.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/channel-api.ts` — semantic cue
- `migration-迁移-重构-channels-route-inbound-turns-through-kern` / 迁移/重构 channels route inbound turns through kernel:
  - source: `path` [M] `extensions/zalouser/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/package.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/channel-api.ts` — semantic cue
- `migration-迁移-重构-remove-stale-extension-helpers` / 迁移/重构 remove stale extension helpers:
  - source: `path` [M] `extensions/zalouser/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/package.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/channel-api.ts` — semantic cue
- `migration-迁移-重构-trim-extension-shim-reexports` / 迁移/重构 trim extension shim reexports:
  - source: `path` [M] `extensions/zalouser/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/package.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/channel-api.ts` — semantic cue
- `migration-迁移-重构-trim-zalouser-helper-exports` / 迁移/重构 trim zalouser helper exports:
  - source: `path` [M] `extensions/zalouser/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/package.json` — semantic cue
  - source: `path` [M] `extensions/zalouser/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/zalouser/src/channel-api.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/zalouser/api.ts` — contract evidence
  - source: `path` [M] `extensions/zalouser/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/zalouser/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/zalouser/src/channel-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/zalouser/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/zalouser/src/channel.sendpayload.test.ts` — test evidence
  - source: `path` [M] `extensions/zalouser/src/channel.setup.test.ts` — test evidence
  - source: `path` [M] `extensions/zalouser/src/channel.test.ts` — test evidence
  - source: `path` [M] `extensions/zalouser/src/monitor.group-gating.test.ts` — test evidence
  - source: `path` [M] `extensions/zalouser/src/setup-surface.test.ts` — test evidence
  - source: `path` [M] `extensions/zalouser/src/status-issues.test.ts` — test evidence

### 路径证据

- 新增 `extensions/zalouser/src/zalo-js.credentials.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/zalouser/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/zalouser/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/zalouser/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/zalouser/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/zalouser/src/accounts.ts`：调整 accounts（implementation）。
- 修改 `extensions/zalouser/src/channel-api.ts`：调整 channel api（implementation）。
- 修改 `extensions/zalouser/src/channel.adapters.ts`：调整 channel.adapters（implementation）。
- 修改 `extensions/zalouser/src/channel.sendpayload.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/zalouser/src/channel.setup.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/zalouser/src/channel.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/zalouser/src/channel.ts`：调整 channel（implementation）。
- 修改 `extensions/zalouser/src/doctor-contract.ts`：调整 doctor contract（implementation）。
- 其余 12 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/zalouser` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/zalouser/change-to-test.md` 的验证建议。
