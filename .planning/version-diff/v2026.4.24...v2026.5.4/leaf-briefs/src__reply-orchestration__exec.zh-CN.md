# src/reply-orchestration/exec

## 1. 功能结论

**新增**：default active steering to batched delivery；**修改**：model guide runtime allowlist repairs、opencode expose Claude thinking policy、model clarify session-scoped model switches、speed up auto-reply reply shard；**迁移/重构**：trim core barrel exports、trim auto reply helper exports、hide command helper internals、remove dead private helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 18

## 3. 功能级详细差异

### 修复 model clarify session-scoped model switches

修复 model：clarify session-scoped model switches

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 model guide runtime allowlist repairs

修复 model：guide runtime allowlist repairs

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 opencode expose Claude thinking policy

修复 opencode：expose Claude thinking policy

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 [codex] Make external CLI credential discovery explicit

修改 [codex] Make external CLI credential discovery explicit

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 新增 default active steering to batched delivery

新增 default active steering to batched delivery

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 speed up auto-reply reply shard

测试覆盖 speed up auto-reply reply shard

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 hide command helper internals

迁移/重构 hide command helper internals

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 remove dead private helpers

迁移/重构 remove dead private helpers

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 trim auto reply helper exports

迁移/重构 trim auto reply helper exports

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 trim core barrel exports

迁移/重构 trim core barrel exports

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 bash command、directive handling.auth regression/contract coverage、directive handling.auth、directive handling.fast lane，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 directive handling.auth regression/contract coverage、directive handling.levels regression/contract coverage、directive handling.mixed inline regression/contract coverage、directive handling.model regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/exec`
- Changed path count: `18`
- Status counts: `修改 18`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `18` files, `+415` / `-46`

### 归纳依据

- 主要落点：message delivery、auth/pairing/security behavior、CLI/command behavior。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix(model): guide runtime allowlist repairs；fix(opencode): expose Claude thinking policy；fix(model): clarify session-scoped model switches；refactor: trim core barrel exports；refactor: trim auto reply helper exports；refactor: hide command helper internals；test: speed up auto-reply reply shard；refactor: remove dead private helpers

### Dimension evidence

- `maintenance-修复-model-clarify-session-scoped-model-switches` / 修复 model clarify session-scoped model switches:
  - source: `path` [M] `src/auto-reply/reply/directive-handling.model-selection.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.model.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.model.ts` — semantic cue
- `user-visible-修复-model-guide-runtime-allowlist-repairs` / 修复 model guide runtime allowlist repairs:
  - source: `path` [M] `src/auto-reply/reply/directive-handling.model-selection.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.model.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.model.ts` — semantic cue
- `runtime-behavior-修复-opencode-expose-Claude-thinking-policy` / 修复 opencode expose Claude thinking policy:
  - source: `path` [M] `src/auto-reply/reply/bash-command.ts`
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.test.ts`
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.ts`
- `maintenance-修改-codex-Make-external-CLI-credential-discove` / 修改 [codex] Make external CLI credential discovery explicit:
  - source: `path` [M] `src/auto-reply/reply/bash-command.ts`
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.test.ts`
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.ts`
- `maintenance-新增-default-active-steering-to-batched-delivery` / 新增 default active steering to batched delivery:
  - source: `path` [M] `src/auto-reply/reply/bash-command.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.fast-lane.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.impl.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.levels.test.ts` — semantic cue
- `tests-docs-测试覆盖-speed-up-auto-reply-reply-shard` / 测试覆盖 speed up auto-reply reply shard:
  - source: `path` [M] `src/auto-reply/reply/bash-command.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.fast-lane.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.impl.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.levels.test.ts` — semantic cue
- `migration-迁移-重构-hide-command-helper-internals` / 迁移/重构 hide command helper internals:
  - source: `path` [M] `src/auto-reply/reply/bash-command.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.fast-lane.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.impl.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.levels.test.ts` — semantic cue
- `migration-迁移-重构-remove-dead-private-helpers` / 迁移/重构 remove dead private helpers:
  - source: `path` [M] `src/auto-reply/reply/bash-command.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.fast-lane.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.impl.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.levels.test.ts` — semantic cue
- `migration-迁移-重构-trim-auto-reply-helper-exports` / 迁移/重构 trim auto reply helper exports:
  - source: `path` [M] `src/auto-reply/reply/bash-command.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.fast-lane.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.impl.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.levels.test.ts` — semantic cue
- `public-contract-迁移-重构-trim-core-barrel-exports` / 迁移/重构 trim core barrel exports:
  - source: `path` [M] `src/auto-reply/reply/bash-command.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.fast-lane.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.impl.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/directive-handling.levels.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/auto-reply/reply/bash-command.ts` — contract evidence
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.test.ts` — contract evidence
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.ts` — contract evidence
  - source: `path` [M] `src/auto-reply/reply/directive-handling.fast-lane.ts` — contract evidence
  - source: `path` [M] `src/auto-reply/reply/directive-handling.impl.ts` — contract evidence
  - source: `path` [M] `src/auto-reply/reply/directive-handling.levels.test.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/auto-reply/reply/directive-handling.auth.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/directive-handling.levels.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/directive-handling.mixed-inline.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/directive-handling.model.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/directive-handling.queue-validation.test.ts` — test evidence

### 路径证据

- 修改 `src/auto-reply/reply/bash-command.ts`：调整 bash command（CLI/command behavior）。
- 修改 `src/auto-reply/reply/directive-handling.auth.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply/directive-handling.auth.ts`：调整 directive handling.auth（auth/pairing/security behavior）。
- 修改 `src/auto-reply/reply/directive-handling.fast-lane.ts`：调整 directive handling.fast lane（message delivery）。
- 修改 `src/auto-reply/reply/directive-handling.impl.ts`：调整 directive handling.impl（message delivery）。
- 修改 `src/auto-reply/reply/directive-handling.levels.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply/directive-handling.levels.ts`：调整 directive handling.levels（message delivery）。
- 修改 `src/auto-reply/reply/directive-handling.mixed-inline.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply/directive-handling.model-selection.ts`：调整 directive handling.model selection（message delivery）。
- 修改 `src/auto-reply/reply/directive-handling.model.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply/directive-handling.model.ts`：调整 directive handling.model（message delivery）。
- 修改 `src/auto-reply/reply/directive-handling.params.ts`：调整 directive handling.params（message delivery）。
- 其余 6 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/reply-orchestration/exec` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/reply-orchestration/exec/change-to-test.md` 的验证建议。
