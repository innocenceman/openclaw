# extensions/channel-plugins/irc

## 1. 功能结论

**修改**：guard provider-prefixed delivery targets、use declarative channel configured-state probes、align open DM allowlist policy、mark channel plugins startup lazy；**迁移/重构**：annotate secret target registries、trim secret contract type imports、trim irc helper exports、remove unused channel utilities；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 21

## 3. 功能级详细差异

### 优化 mark channel plugins startup lazy

优化 mark channel plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 置信度：`high`

### 修复 align open DM allowlist policy

修复 align open DM allowlist policy

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 置信度：`high`

### 修复 guard provider-prefixed delivery targets

修复 guard provider-prefixed delivery targets

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 置信度：`high`

### 修复 use declarative channel configured-state probes

修复 use declarative channel configured-state probes

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 置信度：`high`

### 迁移/重构 annotate secret target registries

迁移/重构 annotate secret target registries

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 置信度：`high`

### 迁移/重构 expose SDK test helper subpaths

迁移/重构 expose SDK test helper subpaths

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 置信度：`high`

### 迁移/重构 remove unused channel utilities

迁移/重构 remove unused channel utilities

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 置信度：`high`

### 迁移/重构 trim irc helper exports

迁移/重构 trim irc helper exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 置信度：`high`

### 迁移/重构 trim secret contract type imports

迁移/重构 trim secret contract type imports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 irc public API barrel、plugin manifest/control-plane metadata、config schema、runtime api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 irc plugin entrypoint、runtime api regression/contract coverage、policy regression/contract coverage、send regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/irc`
- Changed path count: `21`
- Status counts: `修改 21`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `21` files, `+139` / `-139`

### 归纳依据

- 主要落点：implementation、tests/contracts、manifest/package metadata、model/thinking policy、message delivery、plugin entry/API surface、configuration/schema、auth/pairing/security behavior。
- 新增或暴露的关键符号包括：`IrcAccountSchemaBase`, `IrcAccountSchema`, `secretTargetRegistryEntries`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/irc/src/config-schema.test.ts`；`pnpm test -- extensions/irc/src/accounts.test.ts extensions/irc/src/setup.test.ts extensions/irc/src/connect-options.test.ts`。
- 相关 commit 主题：fix: guard provider-prefixed delivery targets；fix: use declarative channel configured-state probes；refactor: annotate secret target registries；refactor: trim secret contract type imports；refactor: trim irc helper exports；refactor: remove unused channel utilities；fix: align open DM allowlist policy；perf: mark channel plugins startup lazy

### Dimension evidence

- `maintenance-优化-mark-channel-plugins-startup-lazy` / 优化 mark channel plugins startup lazy:
  - source: `path` [M] `extensions/irc/src/channel.ts` — semantic cue
- `maintenance-修复-align-open-DM-allowlist-policy` / 修复 align open DM allowlist policy:
  - source: `path` [M] `extensions/irc/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/irc/src/policy.test.ts` — semantic cue
  - source: `path` [M] `extensions/irc/src/policy.ts` — semantic cue
- `maintenance-修复-guard-provider-prefixed-delivery-targets` / 修复 guard provider-prefixed delivery targets:
  - source: `path` [M] `extensions/irc/api.ts`
  - source: `path` [M] `extensions/irc/index.test.ts`
  - source: `path` [M] `extensions/irc/openclaw.plugin.json`
- `maintenance-修复-use-declarative-channel-configured-state-pro` / 修复 use declarative channel configured-state probes:
  - source: `path` [M] `extensions/irc/src/channel.ts` — semantic cue
- `migration-迁移-重构-annotate-secret-target-registries` / 迁移/重构 annotate secret target registries:
  - source: `path` [M] `extensions/irc/api.ts` — semantic cue
  - source: `path` [M] `extensions/irc/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/irc/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/irc/package.json` — semantic cue
  - source: `path` [M] `extensions/irc/runtime-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/irc/src/channel.ts` — semantic cue
- `migration-迁移-重构-expose-SDK-test-helper-subpaths` / 迁移/重构 expose SDK test helper subpaths:
  - source: `path` [M] `extensions/irc/api.ts` — semantic cue
  - source: `path` [M] `extensions/irc/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/irc/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/irc/package.json` — semantic cue
  - source: `path` [M] `extensions/irc/runtime-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/irc/src/channel.ts` — semantic cue
- `migration-迁移-重构-remove-unused-channel-utilities` / 迁移/重构 remove unused channel utilities:
  - source: `path` [M] `extensions/irc/api.ts` — semantic cue
  - source: `path` [M] `extensions/irc/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/irc/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/irc/package.json` — semantic cue
  - source: `path` [M] `extensions/irc/runtime-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/irc/src/channel.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/irc/api.ts` — semantic cue
  - source: `path` [M] `extensions/irc/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/irc/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/irc/package.json` — semantic cue
  - source: `path` [M] `extensions/irc/runtime-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/irc/src/channel.ts` — semantic cue
- `migration-迁移-重构-trim-irc-helper-exports` / 迁移/重构 trim irc helper exports:
  - source: `path` [M] `extensions/irc/api.ts` — semantic cue
  - source: `path` [M] `extensions/irc/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/irc/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/irc/package.json` — semantic cue
  - source: `path` [M] `extensions/irc/runtime-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/irc/src/channel.ts` — semantic cue
- `public-contract-迁移-重构-trim-secret-contract-type-imports` / 迁移/重构 trim secret contract type imports:
  - source: `path` [M] `extensions/irc/api.ts` — semantic cue
  - source: `path` [M] `extensions/irc/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/irc/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/irc/package.json` — semantic cue
  - source: `path` [M] `extensions/irc/runtime-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/irc/src/channel.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/irc/api.ts` — contract evidence
  - source: `path` [M] `extensions/irc/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/irc/src/config-schema.ts` — contract evidence
  - source: `path` [M] `extensions/irc/src/runtime-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/irc/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/irc/index.test.ts` — test evidence
  - source: `path` [M] `extensions/irc/runtime-api.test.ts` — test evidence
  - source: `path` [M] `extensions/irc/src/policy.test.ts` — test evidence
  - source: `path` [M] `extensions/irc/src/send.test.ts` — test evidence
  - source: `path` [M] `extensions/irc/src/setup.test.ts` — test evidence

### 路径证据

- 修改 `extensions/irc/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/irc/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/irc/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/irc/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/irc/runtime-api.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/irc/src/channel.ts`：调整 channel（implementation）。
- 修改 `extensions/irc/src/client.ts`：调整 client（implementation）。
- 修改 `extensions/irc/src/config-schema.ts`：调整 config schema（configuration/schema）。
- 修改 `extensions/irc/src/inbound.ts`：调整 inbound（implementation）。
- 修改 `extensions/irc/src/monitor.ts`：调整 monitor（implementation）。
- 修改 `extensions/irc/src/normalize.ts`：调整 normalize（implementation）。
- 修改 `extensions/irc/src/policy.test.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 其余 9 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/irc` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/irc/change-to-test.md` 的验证建议。
