# extensions/tool-capability-plugins/thread-ownership

## 1. 功能结论

**新增**：declare startup plugin imports explicitly；**迁移/重构**：trim private extension exports、plugin-sdk narrow config runtime imports、tighten plugin runtime sdk boundaries、config migrate plugin config access；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 4

## 3. 功能级详细差异

### 新增 declare startup plugin imports explicitly

新增 declare startup plugin imports explicitly

- 验证提示：优先运行 `pnpm test -- extensions/thread-ownership/index.test.ts`；`pnpm test:contracts:channels`。
- 置信度：`high`

### 迁移/重构 config migrate plugin config access

迁移/重构 config：migrate plugin config access

- 验证提示：优先运行 `pnpm test -- extensions/thread-ownership/index.test.ts`；`pnpm test:contracts:channels`。
- 置信度：`high`

### 迁移/重构 plugin-sdk narrow config runtime imports

迁移/重构 plugin-sdk：narrow config runtime imports

- 验证提示：优先运行 `pnpm test -- extensions/thread-ownership/index.test.ts`；`pnpm test:contracts:channels`。
- 置信度：`high`

### 迁移/重构 tighten plugin runtime sdk boundaries

迁移/重构 tighten plugin runtime sdk boundaries

- 验证提示：优先运行 `pnpm test -- extensions/thread-ownership/index.test.ts`；`pnpm test:contracts:channels`。
- 置信度：`high`

### 迁移/重构 trim private extension exports

迁移/重构 trim private extension exports

- 验证提示：优先运行 `pnpm test -- extensions/thread-ownership/index.test.ts`；`pnpm test:contracts:channels`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 thread ownership public API barrel、plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- extensions/thread-ownership/index.test.ts`；`pnpm test:contracts:channels`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 thread ownership plugin entrypoint，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- extensions/thread-ownership/index.test.ts`；`pnpm test:contracts:channels`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- extensions/thread-ownership/index.test.ts`；`pnpm test:contracts:channels`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/thread-ownership`
- Changed path count: `4`
- Status counts: `修改 4`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `4` files, `+15` / `-5`

### 归纳依据

- 主要落点：plugin entry/API surface、tests/contracts、manifest/package metadata。
- 建议优先验证：优先运行 `pnpm test -- extensions/thread-ownership/index.test.ts`；`pnpm test:contracts:channels`。
- 相关 commit 主题：refactor: trim private extension exports；feat: declare startup plugin imports explicitly；refactor(plugin-sdk): narrow config runtime imports；refactor: tighten plugin runtime sdk boundaries；refactor(config): migrate plugin config access

### Dimension evidence

- `maintenance-新增-declare-startup-plugin-imports-explicitly` / 新增 declare startup plugin imports explicitly:
  - source: `path` [M] `extensions/thread-ownership/openclaw.plugin.json` — semantic cue
- `migration-迁移-重构-config-migrate-plugin-config-access` / 迁移/重构 config migrate plugin config access:
  - source: `path` [M] `extensions/thread-ownership/api.ts` — semantic cue
  - source: `path` [M] `extensions/thread-ownership/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/thread-ownership/index.ts` — semantic cue
  - source: `path` [M] `extensions/thread-ownership/openclaw.plugin.json` — semantic cue
- `runtime-behavior-迁移-重构-plugin-sdk-narrow-config-runtime-imports` / 迁移/重构 plugin-sdk narrow config runtime imports:
  - source: `path` [M] `extensions/thread-ownership/api.ts` — semantic cue
  - source: `path` [M] `extensions/thread-ownership/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/thread-ownership/index.ts` — semantic cue
  - source: `path` [M] `extensions/thread-ownership/openclaw.plugin.json` — semantic cue
- `runtime-behavior-迁移-重构-tighten-plugin-runtime-sdk-boundaries` / 迁移/重构 tighten plugin runtime sdk boundaries:
  - source: `path` [M] `extensions/thread-ownership/api.ts` — semantic cue
  - source: `path` [M] `extensions/thread-ownership/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/thread-ownership/index.ts` — semantic cue
  - source: `path` [M] `extensions/thread-ownership/openclaw.plugin.json` — semantic cue
- `migration-迁移-重构-trim-private-extension-exports` / 迁移/重构 trim private extension exports:
  - source: `path` [M] `extensions/thread-ownership/api.ts` — semantic cue
  - source: `path` [M] `extensions/thread-ownership/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/thread-ownership/index.ts` — semantic cue
  - source: `path` [M] `extensions/thread-ownership/openclaw.plugin.json` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/thread-ownership/api.ts` — contract evidence
  - source: `path` [M] `extensions/thread-ownership/openclaw.plugin.json` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/thread-ownership/index.test.ts` — test evidence

### 路径证据

- 修改 `extensions/thread-ownership/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/thread-ownership/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/thread-ownership/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/thread-ownership/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/tool-capability-plugins/thread-ownership` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/tool-capability-plugins/thread-ownership/change-to-test.md` 的验证建议。
