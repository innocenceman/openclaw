# extensions/channel-plugins/nextcloud-talk

## 1. 功能结论

**修改**：guard provider-prefixed delivery targets、prepare second external plugin beta batch、nextcloud-talk replace manual XOR with crypto.timingSafeEqual and fix length leak；**迁移/重构**：annotate secret target registries、trim secret contract type imports、trim nextcloud talk helper exports、trim extension helper shims；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 1、修改 25、删除 1

## 3. 功能级详细差异

### 修复 guard provider-prefixed delivery targets

修复 guard provider-prefixed delivery targets

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 nextcloud-talk replace manual XOR with crypto.timingSafeEqual and fi…

修复 nextcloud-talk：replace manual XOR with crypto.timingSafeEqual and fix length leak

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 构建/发布调整 prepare second external plugin beta batch

构建/发布调整 prepare second external plugin beta batch

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 annotate secret target registries

迁移/重构 annotate secret target registries

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 prune unused extension exports

迁移/重构 prune unused extension exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 remove unused channel utilities

迁移/重构 remove unused channel utilities

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim extension helper shims

迁移/重构 trim extension helper shims

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim extension test hooks

迁移/重构 trim extension test hooks

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim nextcloud talk helper exports

迁移/重构 trim nextcloud talk helper exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim secret contract type imports

迁移/重构 trim secret contract type imports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 doctor contract api、plugin manifest/control-plane metadata、runtime api、src public API barrel，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 channel.core regression/contract coverage、channel.lifecycle regression/contract coverage、core regression/contract coverage、monitor.replay regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `src public API barrel`（`extensions/nextcloud-talk/src/api.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/nextcloud-talk`
- Changed path count: `27`
- Status counts: `新增 1、修改 25、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `27` files, `+240` / `-132`

### 归纳依据

- 主要落点：implementation、tests/contracts、manifest/package metadata、auth/pairing/security behavior、message delivery、plugin entry/API surface、configuration/schema、gateway runtime。
- 新增或暴露的关键符号包括：`NextcloudTalkRoomSchema`, `NextcloudTalkAccountSchemaBase`, `NextcloudTalkAccountSchema`, `secretTargetRegistryEntries`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/nextcloud-talk/src/core.test.ts`；`pnpm build`。
- 相关 commit 主题：fix: guard provider-prefixed delivery targets；build: prepare second external plugin beta batch；refactor: annotate secret target registries；refactor: trim secret contract type imports；refactor: trim nextcloud talk helper exports；refactor: trim extension helper shims；refactor: trim extension test hooks；refactor: prune unused extension exports

### Dimension evidence

- `maintenance-修复-guard-provider-prefixed-delivery-targets` / 修复 guard provider-prefixed delivery targets:
  - source: `path` [M] `extensions/nextcloud-talk/src/replay-guard.ts` — semantic cue
- `maintenance-修复-nextcloud-talk-replace-manual-XOR-with-crypt` / 修复 nextcloud-talk replace manual XOR with crypto.timingSafeEqual and fi…:
  - source: `path` [M] `extensions/nextcloud-talk/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/package.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/api.ts` — semantic cue
- `integration-build-release-构建-发布调整-prepare-second-external-plugin-beta-bat` / 构建/发布调整 prepare second external plugin beta batch:
  - source: `path` [M] `extensions/nextcloud-talk/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/package.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/api.ts` — semantic cue
- `migration-迁移-重构-annotate-secret-target-registries` / 迁移/重构 annotate secret target registries:
  - source: `path` [M] `extensions/nextcloud-talk/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/package.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/api.ts` — semantic cue
- `migration-迁移-重构-prune-unused-extension-exports` / 迁移/重构 prune unused extension exports:
  - source: `path` [M] `extensions/nextcloud-talk/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/package.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/api.ts` — semantic cue
- `migration-迁移-重构-remove-unused-channel-utilities` / 迁移/重构 remove unused channel utilities:
  - source: `path` [M] `extensions/nextcloud-talk/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/package.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/api.ts` — semantic cue
- `migration-迁移-重构-trim-extension-helper-shims` / 迁移/重构 trim extension helper shims:
  - source: `path` [M] `extensions/nextcloud-talk/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/package.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/api.ts` — semantic cue
- `migration-迁移-重构-trim-extension-test-hooks` / 迁移/重构 trim extension test hooks:
  - source: `path` [M] `extensions/nextcloud-talk/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/package.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/api.ts` — semantic cue
- `migration-迁移-重构-trim-nextcloud-talk-helper-exports` / 迁移/重构 trim nextcloud talk helper exports:
  - source: `path` [M] `extensions/nextcloud-talk/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/package.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/api.ts` — semantic cue
- `public-contract-迁移-重构-trim-secret-contract-type-imports` / 迁移/重构 trim secret contract type imports:
  - source: `path` [M] `extensions/nextcloud-talk/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/package.json` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/accounts.ts` — semantic cue
  - source: `path` [M] `extensions/nextcloud-talk/src/api.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/nextcloud-talk/doctor-contract-api.ts` — contract evidence
  - source: `path` [M] `extensions/nextcloud-talk/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/nextcloud-talk/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/nextcloud-talk/src/api.ts` — contract evidence
  - source: `path` [M] `extensions/nextcloud-talk/src/channel-api.ts` — contract evidence
  - source: `path` [M] `extensions/nextcloud-talk/src/config-schema.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/nextcloud-talk/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/nextcloud-talk/src/channel.core.test.ts` — test evidence
  - source: `path` [M] `extensions/nextcloud-talk/src/channel.lifecycle.test.ts` — test evidence
  - source: `path` [M] `extensions/nextcloud-talk/src/core.test.ts` — test evidence
  - source: `path` [M] `extensions/nextcloud-talk/src/monitor.replay.test.ts` — test evidence
  - source: `path` [M] `extensions/nextcloud-talk/src/send.cfg-threading.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/nextcloud-talk/src/api.ts`

### 路径证据

- 新增 `extensions/nextcloud-talk/doctor-contract-api.ts`：调整 doctor contract api（implementation）。
- 修改 `extensions/nextcloud-talk/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/nextcloud-talk/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/nextcloud-talk/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/nextcloud-talk/src/accounts.ts`：调整 accounts（implementation）。
- 修改 `extensions/nextcloud-talk/src/channel-api.ts`：调整 channel api（implementation）。
- 修改 `extensions/nextcloud-talk/src/channel.core.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/nextcloud-talk/src/channel.lifecycle.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/nextcloud-talk/src/channel.ts`：调整 channel（implementation）。
- 修改 `extensions/nextcloud-talk/src/config-schema.ts`：调整 config schema（configuration/schema）。
- 修改 `extensions/nextcloud-talk/src/core.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/nextcloud-talk/src/gateway.ts`：调整 gateway（gateway runtime）。
- 修改 `extensions/nextcloud-talk/src/monitor-runtime.ts`：调整 monitor runtime（implementation）。
- 删除 `extensions/nextcloud-talk/src/api.ts`：移除旧的 plugin entry/API surface 文件；需要确认没有调用方继续依赖这个路径。
- 其余 13 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/nextcloud-talk` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/nextcloud-talk/change-to-test.md` 的验证建议。
