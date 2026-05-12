# extensions/skill-plugins/tlon

## 1. 功能结论

**修改**：tlon expose group invite allowlist；**迁移/重构**：trim tlon helper exports、trim extension helper shims、prune unused extension helpers、split plugin sdk test helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 13

## 3. 功能级详细差异

### 修复 tlon expose group invite allowlist

修复 tlon：expose group invite allowlist

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/tlon`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 expose plugin test helpers via sdk

迁移/重构 expose plugin test helpers via sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/tlon`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 plugin-sdk narrow config runtime imports

迁移/重构 plugin-sdk：narrow config runtime imports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/tlon`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 prune unused extension helpers

迁移/重构 prune unused extension helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/tlon`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/tlon`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim extension helper shims

迁移/重构 trim extension helper shims

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/tlon`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim tlon helper exports

迁移/重构 trim tlon helper exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/tlon`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 core regression/contract coverage、discovery、history、media，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/tlon`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 core regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/tlon`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/tlon`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/tlon`
- Changed path count: `13`
- Status counts: `修改 13`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `13` files, `+41` / `-72`

### 归纳依据

- 主要落点：implementation、tests/contracts。
- 新增或暴露的关键符号包括：`resolveShipFromHostname`, `normalizeUrbitShip`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/tlon`；`pnpm test:extensions`。
- 相关 commit 主题：fix(tlon): expose group invite allowlist；refactor: trim tlon helper exports；refactor: trim extension helper shims；refactor: prune unused extension helpers；refactor: split plugin sdk test helpers；refactor: expose plugin test helpers via sdk；refactor(plugin-sdk): narrow config runtime imports

### Dimension evidence

- `maintenance-修复-tlon-expose-group-invite-allowlist` / 修复 tlon expose group invite allowlist:
  - source: `path` [M] `extensions/tlon/src/core.test.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/history.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/media.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/settings-helpers.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/setup-surface.ts` — semantic cue
- `migration-迁移-重构-expose-plugin-test-helpers-via-sdk` / 迁移/重构 expose plugin test helpers via sdk:
  - source: `path` [M] `extensions/tlon/src/core.test.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/history.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/media.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/settings-helpers.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/setup-surface.ts` — semantic cue
- `runtime-behavior-迁移-重构-plugin-sdk-narrow-config-runtime-imports` / 迁移/重构 plugin-sdk narrow config runtime imports:
  - source: `path` [M] `extensions/tlon/src/core.test.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/history.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/media.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/settings-helpers.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/setup-surface.ts` — semantic cue
- `migration-迁移-重构-prune-unused-extension-helpers` / 迁移/重构 prune unused extension helpers:
  - source: `path` [M] `extensions/tlon/src/core.test.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/history.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/media.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/settings-helpers.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/setup-surface.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/tlon/src/core.test.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/history.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/media.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/settings-helpers.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/setup-surface.ts` — semantic cue
- `migration-迁移-重构-trim-extension-helper-shims` / 迁移/重构 trim extension helper shims:
  - source: `path` [M] `extensions/tlon/src/core.test.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/history.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/media.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/settings-helpers.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/setup-surface.ts` — semantic cue
- `migration-迁移-重构-trim-tlon-helper-exports` / 迁移/重构 trim tlon helper exports:
  - source: `path` [M] `extensions/tlon/src/core.test.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/discovery.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/history.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/media.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/monitor/settings-helpers.ts` — semantic cue
  - source: `path` [M] `extensions/tlon/src/setup-surface.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/tlon/src/core.test.ts` — contract evidence
  - source: `path` [M] `extensions/tlon/src/monitor/discovery.ts` — contract evidence
  - source: `path` [M] `extensions/tlon/src/monitor/history.ts` — contract evidence
  - source: `path` [M] `extensions/tlon/src/monitor/media.ts` — contract evidence
  - source: `path` [M] `extensions/tlon/src/monitor/settings-helpers.ts` — contract evidence
  - source: `path` [M] `extensions/tlon/src/setup-surface.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/tlon/src/core.test.ts` — test evidence

### 路径证据

- 修改 `extensions/tlon/src/core.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/tlon/src/monitor/discovery.ts`：调整 discovery（implementation）。
- 修改 `extensions/tlon/src/monitor/history.ts`：调整 history（implementation）。
- 修改 `extensions/tlon/src/monitor/media.ts`：调整 media（implementation）。
- 修改 `extensions/tlon/src/monitor/settings-helpers.ts`：调整 settings helpers（implementation）。
- 修改 `extensions/tlon/src/setup-surface.ts`：调整 setup surface（implementation）。
- 修改 `extensions/tlon/src/types.ts`：调整 src types（implementation）。
- 修改 `extensions/tlon/src/urbit/channel-ops.ts`：调整 channel ops（implementation）。
- 修改 `extensions/tlon/src/urbit/context.ts`：调整 context（implementation）。
- 修改 `extensions/tlon/src/urbit/errors.ts`：调整 errors（implementation）。
- 修改 `extensions/tlon/src/urbit/fetch.ts`：调整 fetch（implementation）。
- 修改 `extensions/tlon/src/urbit/foreigns.ts`：调整 foreigns（implementation）。
- 其余 1 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/skill-plugins/tlon` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/skill-plugins/tlon/change-to-test.md` 的验证建议。
