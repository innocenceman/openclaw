# extensions/tool-capability-plugins/openshell

## 1. 功能结论

**新增**：declare startup plugin imports explicitly；**修改**：openshell accept native symlink targets、route extension tests through sdk subpaths；**迁移/重构**：trim config helper exports、expose agent runtime test contracts、split generic plugin test fixtures、plugin-sdk split infra runtime barrel；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 7

## 3. 功能级详细差异

### 新增 declare startup plugin imports explicitly

新增 declare startup plugin imports explicitly

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/openshell`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 openshell accept native symlink targets

测试覆盖 openshell：accept native symlink targets

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/openshell`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 route extension tests through sdk subpaths

测试覆盖 route extension tests through sdk subpaths

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/openshell`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 expose agent runtime test contracts

迁移/重构 expose agent runtime test contracts

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/openshell`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 plugin-sdk split infra runtime barrel

迁移/重构 plugin-sdk：split infra runtime barrel

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/openshell`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split generic plugin test fixtures

迁移/重构 split generic plugin test fixtures

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/openshell`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim config helper exports

迁移/重构 trim config helper exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/openshell`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata、src config，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/openshell`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/openshell`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 backend.e2e regression/contract coverage、mirror regression/contract coverage、openshell core regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/openshell`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/openshell`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/openshell`
- Changed path count: `7`
- Status counts: `修改 7`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `7` files, `+14` / `-10`

### 归纳依据

- 主要落点：tests/contracts、manifest/package metadata、configuration/schema、implementation。
- 新增或暴露的关键符号包括：`normalizeOpenShellRemotePath`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/openshell`；`pnpm test:extensions`。
- 相关 commit 主题：test(openshell): accept native symlink targets；refactor: trim config helper exports；feat: declare startup plugin imports explicitly；refactor: expose agent runtime test contracts；refactor: split generic plugin test fixtures；test: route extension tests through sdk subpaths；refactor(plugin-sdk): split infra runtime barrel

### Dimension evidence

- `maintenance-新增-declare-startup-plugin-imports-explicitly` / 新增 declare startup plugin imports explicitly:
  - source: `path` [M] `extensions/openshell/openclaw.plugin.json` — semantic cue
- `tests-docs-测试覆盖-openshell-accept-native-symlink-targets` / 测试覆盖 openshell accept native symlink targets:
  - source: `path` [M] `extensions/openshell/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/openshell/package.json` — semantic cue
  - source: `path` [M] `extensions/openshell/src/backend.e2e.test.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/config.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/fs-bridge.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/mirror.test.ts` — semantic cue
- `tests-docs-测试覆盖-route-extension-tests-through-sdk-subpaths` / 测试覆盖 route extension tests through sdk subpaths:
  - source: `path` [M] `extensions/openshell/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/openshell/package.json` — semantic cue
  - source: `path` [M] `extensions/openshell/src/backend.e2e.test.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/config.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/fs-bridge.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/mirror.test.ts` — semantic cue
- `public-contract-迁移-重构-expose-agent-runtime-test-contracts` / 迁移/重构 expose agent runtime test contracts:
  - source: `path` [M] `extensions/openshell/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/openshell/package.json` — semantic cue
  - source: `path` [M] `extensions/openshell/src/backend.e2e.test.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/config.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/fs-bridge.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/mirror.test.ts` — semantic cue
- `public-contract-迁移-重构-plugin-sdk-split-infra-runtime-barrel` / 迁移/重构 plugin-sdk split infra runtime barrel:
  - source: `path` [M] `extensions/openshell/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/openshell/package.json` — semantic cue
  - source: `path` [M] `extensions/openshell/src/backend.e2e.test.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/config.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/fs-bridge.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/mirror.test.ts` — semantic cue
- `migration-迁移-重构-split-generic-plugin-test-fixtures` / 迁移/重构 split generic plugin test fixtures:
  - source: `path` [M] `extensions/openshell/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/openshell/package.json` — semantic cue
  - source: `path` [M] `extensions/openshell/src/backend.e2e.test.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/config.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/fs-bridge.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/mirror.test.ts` — semantic cue
- `migration-迁移-重构-trim-config-helper-exports` / 迁移/重构 trim config helper exports:
  - source: `path` [M] `extensions/openshell/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/openshell/package.json` — semantic cue
  - source: `path` [M] `extensions/openshell/src/backend.e2e.test.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/config.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/fs-bridge.ts` — semantic cue
  - source: `path` [M] `extensions/openshell/src/mirror.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/openshell/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/openshell/src/config.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/openshell/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/openshell/src/backend.e2e.test.ts` — test evidence
  - source: `path` [M] `extensions/openshell/src/mirror.test.ts` — test evidence
  - source: `path` [M] `extensions/openshell/src/openshell-core.test.ts` — test evidence

### 路径证据

- 修改 `extensions/openshell/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/openshell/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/openshell/src/backend.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/openshell/src/config.ts`：调整 src config（configuration/schema）。
- 修改 `extensions/openshell/src/fs-bridge.ts`：调整 fs bridge（implementation）。
- 修改 `extensions/openshell/src/mirror.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/openshell/src/openshell-core.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/tool-capability-plugins/openshell` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/tool-capability-plugins/openshell/change-to-test.md` 的验证建议。
