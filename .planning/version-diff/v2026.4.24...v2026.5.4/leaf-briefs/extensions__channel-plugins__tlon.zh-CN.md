# extensions/channel-plugins/tlon

## 1. 功能结论

**修改**：tlon expose group invite allowlist、tlon drop bundled cli tool wrapper、enforce plugin tool manifest contracts、guard provider-prefixed delivery targets；**迁移/重构**：trim extension helper exports、trim tlon helper exports、prune unused exported types、prune unused extension helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 20

## 3. 功能级详细差异

### 修复 enforce plugin tool manifest contracts

修复 enforce plugin tool manifest contracts

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 guard provider-prefixed delivery targets

修复 guard provider-prefixed delivery targets

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 tlon drop bundled cli tool wrapper

修复 tlon：drop bundled cli tool wrapper

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 tlon expose group invite allowlist

修复 tlon：expose group invite allowlist

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 构建/发布调整 prepare external plugin beta publishing

构建/发布调整 prepare external plugin beta publishing

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 channels route remaining turns through kernel

迁移/重构 channels：route remaining turns through kernel

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 prune unused exported types

迁移/重构 prune unused exported types

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 prune unused extension helpers

迁移/重构 prune unused extension helpers

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim extension helper exports

迁移/重构 trim extension helper exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim tlon helper exports

迁移/重构 trim tlon helper exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 tlon public API barrel、doctor contract api、plugin manifest/control-plane metadata、runtime api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 auth.ssrf regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/tlon`
- Changed path count: `21`
- Status counts: `新增 1、修改 20`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `21` files, `+201` / `-303`

### 归纳依据

- 主要落点：implementation、plugin entry/API surface、auth/pairing/security behavior、manifest/package metadata、message delivery、configuration/schema。
- 新增或暴露的关键符号包括：`TlonChannelRuleSchema`, `TlonAccountSchema`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/tlon/src/core.test.ts`；`pnpm build`。
- 相关 commit 主题：fix(tlon): expose group invite allowlist；fix(tlon): drop bundled cli tool wrapper；refactor: trim extension helper exports；fix: enforce plugin tool manifest contracts；fix: guard provider-prefixed delivery targets；build: prepare external plugin beta publishing；refactor: trim tlon helper exports；refactor: prune unused exported types

### Dimension evidence

- `public-contract-修复-enforce-plugin-tool-manifest-contracts` / 修复 enforce plugin tool manifest contracts:
  - source: `path` [M] `extensions/tlon/openclaw.plugin.json` — semantic cue
- `maintenance-修复-guard-provider-prefixed-delivery-targets` / 修复 guard provider-prefixed delivery targets:
  - source: `path` [M] `extensions/tlon/src/targets.ts` — semantic cue
- `maintenance-修复-tlon-drop-bundled-cli-tool-wrapper` / 修复 tlon drop bundled cli tool wrapper:
  - source: `path` [M] `extensions/tlon/api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/index.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/tlon/package.json` — semantic cue
  - source: `path` [M] `extensions/tlon/runtime-api.ts` — semantic cue
- `maintenance-修复-tlon-expose-group-invite-allowlist` / 修复 tlon expose group invite allowlist:
  - source: `path` [M] `extensions/tlon/api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/index.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/tlon/package.json` — semantic cue
  - source: `path` [M] `extensions/tlon/runtime-api.ts` — semantic cue
- `integration-build-release-构建-发布调整-prepare-external-plugin-beta-publishing` / 构建/发布调整 prepare external plugin beta publishing:
  - source: `path` [M] `extensions/tlon/api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/index.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/tlon/package.json` — semantic cue
  - source: `path` [M] `extensions/tlon/runtime-api.ts` — semantic cue
- `migration-迁移-重构-channels-route-remaining-turns-through-ke` / 迁移/重构 channels route remaining turns through kernel:
  - source: `path` [M] `extensions/tlon/api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/index.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/tlon/package.json` — semantic cue
  - source: `path` [M] `extensions/tlon/runtime-api.ts` — semantic cue
- `migration-迁移-重构-prune-unused-exported-types` / 迁移/重构 prune unused exported types:
  - source: `path` [M] `extensions/tlon/api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/index.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/tlon/package.json` — semantic cue
  - source: `path` [M] `extensions/tlon/runtime-api.ts` — semantic cue
- `migration-迁移-重构-prune-unused-extension-helpers` / 迁移/重构 prune unused extension helpers:
  - source: `path` [M] `extensions/tlon/api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/index.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/tlon/package.json` — semantic cue
  - source: `path` [M] `extensions/tlon/runtime-api.ts` — semantic cue
- `migration-迁移-重构-trim-extension-helper-exports` / 迁移/重构 trim extension helper exports:
  - source: `path` [M] `extensions/tlon/api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/index.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/tlon/package.json` — semantic cue
  - source: `path` [M] `extensions/tlon/runtime-api.ts` — semantic cue
- `migration-迁移-重构-trim-tlon-helper-exports` / 迁移/重构 trim tlon helper exports:
  - source: `path` [M] `extensions/tlon/api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/index.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/tlon/package.json` — semantic cue
  - source: `path` [M] `extensions/tlon/runtime-api.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/tlon/api.ts` — contract evidence
  - source: `path` [M] `extensions/tlon/doctor-contract-api.ts` — contract evidence
  - source: `path` [M] `extensions/tlon/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/tlon/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/tlon/src/config-schema.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/tlon/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/tlon/src/urbit/auth.ssrf.test.ts` — test evidence

### 路径证据

- 新增 `extensions/tlon/doctor-contract-api.ts`：调整 doctor contract api（implementation）。
- 修改 `extensions/tlon/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/tlon/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/tlon/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/tlon/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/tlon/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/tlon/src/channel.runtime.ts`：调整 channel（implementation）。
- 修改 `extensions/tlon/src/channel.ts`：调整 channel（implementation）。
- 修改 `extensions/tlon/src/config-schema.ts`：调整 config schema（configuration/schema）。
- 修改 `extensions/tlon/src/monitor/authorization.ts`：调整 authorization（auth/pairing/security behavior）。
- 修改 `extensions/tlon/src/monitor/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/tlon/src/monitor/processed-messages.ts`：调整 processed messages（message delivery）。
- 修改 `extensions/tlon/src/monitor/utils.ts`：调整 utils（implementation）。
- 其余 8 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/tlon` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/tlon/change-to-test.md` 的验证建议。
