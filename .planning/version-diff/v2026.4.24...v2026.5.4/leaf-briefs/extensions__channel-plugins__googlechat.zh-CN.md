# extensions/channel-plugins/googlechat

## 1. 功能结论

**新增**：generalize message access groups；**修改**：googlechat isolate auth transports、googlechat normalize auth response headers、googlechat mirror gaxios interceptor surface、googlechat correct group setup example；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 4、修改 27

## 3. 功能级详细差异

### 修复 googlechat correct group setup example

修复 googlechat：correct group setup example

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 置信度：`high`

### 修复 googlechat isolate auth transports

修复 googlechat：isolate auth transports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 置信度：`high`

### 修复 googlechat normalize auth response headers

修复 googlechat：normalize auth response headers

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 置信度：`high`

### 修复 googlechat normalize auth transport headers

修复 googlechat：normalize auth transport headers

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 置信度：`high`

### 修复 guard provider-prefixed delivery targets

修复 guard provider-prefixed delivery targets

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 置信度：`high`

### 修复 plugins align beta external launch metadata

修复 plugins：align beta external launch metadata

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 置信度：`high`

### 修改 Revert "fix(plugins): align beta external launch metadata"

修改 Revert "fix(plugins): align beta external launch metadata"

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 置信度：`high`

### 修改 externalize more channel plugins

修改 externalize more channel plugins

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 置信度：`high`

### 新增 generalize message access groups

新增 generalize message access groups

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 置信度：`high`

### 测试覆盖 googlechat mirror gaxios interceptor surface

测试覆盖 googlechat：mirror gaxios interceptor surface

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 googlechat public API barrel、doctor contract api、plugin manifest/control-plane metadata、runtime api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 channel config regression/contract coverage、channel regression/contract coverage、config schema regression/contract coverage、google auth regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/googlechat`
- Changed path count: `31`
- Status counts: `新增 4、修改 27`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `31` files, `+816` / `-325`

### 归纳依据

- 主要落点：implementation、auth/pairing/security behavior、tests/contracts、configuration/schema、manifest/package metadata、message delivery、plugin entry/API surface、gateway runtime。
- 新增或暴露的关键符号包括：`resolveGoogleChatConfigAccessorAccount`, `normalizeGoogleAuthPreparedRequestHeaders`, `normalizeGoogleAuthResponseHeaders`, `installGoogleAuthHeaderCompatibilityInterceptor`, `createCore`, `createRuntime`, `monitorGoogleChatProvider`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/googlechat/src/channel.test.ts`；`pnpm test -- extensions/googlechat/src/setup.test.ts`。
- 相关 commit 主题：fix(googlechat): isolate auth transports；fix(googlechat): normalize auth response headers；test(googlechat): mirror gaxios interceptor surface；fix(googlechat): correct group setup example；fix(googlechat): normalize auth transport headers；Revert "fix(plugins): align beta external launch metadata"；fix(plugins): align beta external launch metadata；ci: externalize more channel plugins

### Dimension evidence

- `maintenance-修复-googlechat-correct-group-setup-example` / 修复 googlechat correct group setup example:
  - source: `path` [M] `extensions/googlechat/api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/googlechat/package.json` — semantic cue
  - source: `path` [M] `extensions/googlechat/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/src/accounts.ts` — semantic cue
- `maintenance-修复-googlechat-isolate-auth-transports` / 修复 googlechat isolate auth transports:
  - source: `path` [M] `extensions/googlechat/api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/googlechat/package.json` — semantic cue
  - source: `path` [M] `extensions/googlechat/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/src/accounts.ts` — semantic cue
- `maintenance-修复-googlechat-normalize-auth-response-headers` / 修复 googlechat normalize auth response headers:
  - source: `path` [M] `extensions/googlechat/api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/googlechat/package.json` — semantic cue
  - source: `path` [M] `extensions/googlechat/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/src/accounts.ts` — semantic cue
- `maintenance-修复-googlechat-normalize-auth-transport-headers` / 修复 googlechat normalize auth transport headers:
  - source: `path` [M] `extensions/googlechat/api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/googlechat/package.json` — semantic cue
  - source: `path` [M] `extensions/googlechat/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/src/accounts.ts` — semantic cue
- `maintenance-修复-guard-provider-prefixed-delivery-targets` / 修复 guard provider-prefixed delivery targets:
  - source: `path` [M] `extensions/googlechat/src/monitor-reply-delivery.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/src/monitor.reply-delivery.test.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/src/targets.test.ts` — semantic cue
- `public-contract-修复-plugins-align-beta-external-launch-metadata` / 修复 plugins align beta external launch metadata:
  - source: `path` [A] `extensions/googlechat/doctor-contract-api.ts`
  - source: `path` [A] `extensions/googlechat/src/channel-config.test.ts`
  - source: `path` [A] `extensions/googlechat/src/monitor-reply-delivery.ts`
  - source: `path` [M] `extensions/googlechat/api.ts`
  - source: `path` [M] `extensions/googlechat/openclaw.plugin.json`
  - source: `path` [M] `extensions/googlechat/package.json`
- `public-contract-修改-Revert-fix-plugins-align-beta-external-la` / 修改 Revert "fix(plugins): align beta external launch metadata":
  - source: `path` [A] `extensions/googlechat/doctor-contract-api.ts`
  - source: `path` [A] `extensions/googlechat/src/channel-config.test.ts`
  - source: `path` [A] `extensions/googlechat/src/monitor-reply-delivery.ts`
  - source: `path` [M] `extensions/googlechat/api.ts`
  - source: `path` [M] `extensions/googlechat/openclaw.plugin.json`
  - source: `path` [M] `extensions/googlechat/package.json`
- `maintenance-修改-externalize-more-channel-plugins` / 修改 externalize more channel plugins:
  - source: `path` [M] `extensions/googlechat/src/channel-config.test.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/src/channel.deps.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/src/channel.setup.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/src/channel.test.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/src/channel.ts` — semantic cue
- `maintenance-新增-generalize-message-access-groups` / 新增 generalize message access groups:
  - source: `path` [M] `extensions/googlechat/src/monitor-access.test.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/src/monitor-access.ts` — semantic cue
- `tests-docs-测试覆盖-googlechat-mirror-gaxios-interceptor-surfa` / 测试覆盖 googlechat mirror gaxios interceptor surface:
  - source: `path` [M] `extensions/googlechat/api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/googlechat/package.json` — semantic cue
  - source: `path` [M] `extensions/googlechat/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/googlechat/src/accounts.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/googlechat/api.ts` — contract evidence
  - source: `path` [M] `extensions/googlechat/doctor-contract-api.ts` — contract evidence
  - source: `path` [M] `extensions/googlechat/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/googlechat/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/googlechat/src/channel-config.test.ts` — contract evidence
  - source: `path` [M] `extensions/googlechat/src/config-schema.test.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/googlechat/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/googlechat/src/channel-config.test.ts` — test evidence
  - source: `path` [M] `extensions/googlechat/src/channel.test.ts` — test evidence
  - source: `path` [M] `extensions/googlechat/src/config-schema.test.ts` — test evidence
  - source: `path` [M] `extensions/googlechat/src/google-auth.runtime.test.ts` — test evidence
  - source: `path` [M] `extensions/googlechat/src/monitor-access.test.ts` — test evidence
  - source: `path` [M] `extensions/googlechat/src/monitor.reply-delivery.test.ts` — test evidence

### 路径证据

- 新增 `extensions/googlechat/doctor-contract-api.ts`：调整 doctor contract api（implementation）。
- 新增 `extensions/googlechat/src/channel-config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/googlechat/src/monitor-reply-delivery.ts`：调整 monitor reply delivery（message delivery）。
- 新增 `extensions/googlechat/src/monitor.reply-delivery.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/googlechat/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/googlechat/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/googlechat/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/googlechat/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/googlechat/src/accounts.ts`：调整 accounts（implementation）。
- 修改 `extensions/googlechat/src/actions.ts`：调整 actions（implementation）。
- 修改 `extensions/googlechat/src/auth.ts`：调整 auth（auth/pairing/security behavior）。
- 修改 `extensions/googlechat/src/channel.deps.runtime.ts`：调整 channel.deps（implementation）。
- 修改 `extensions/googlechat/src/channel.setup.ts`：调整 channel.setup（implementation）。
- 修改 `extensions/googlechat/src/channel.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/googlechat/src/channel.ts`：调整 channel（implementation）。
- 修改 `extensions/googlechat/src/config-schema.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 15 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/googlechat` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/googlechat/change-to-test.md` 的验证建议。
