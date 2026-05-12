# src/reply-orchestration/commands/command-auth-gates

## 1. 功能结论

**修改**：commands scope owner allowlist prefixes、commands preserve owner allowlists for native auth、commands honor channel-native command auth；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 2

## 3. 功能级详细差异

### 修复 commands honor channel-native command auth

修复 commands：honor channel-native command auth

- 验证提示：优先运行 `pnpm test -- src/auto-reply/command-auth.owner-default.test.ts src/auto-reply/command-control.test.ts`。
- 置信度：`high`

### 修复 commands preserve owner allowlists for native auth

修复 commands：preserve owner allowlists for native auth

- 验证提示：优先运行 `pnpm test -- src/auto-reply/command-auth.owner-default.test.ts src/auto-reply/command-control.test.ts`。
- 置信度：`high`

### 修复 commands scope owner allowlist prefixes

修复 commands：scope owner allowlist prefixes

- 验证提示：优先运行 `pnpm test -- src/auto-reply/command-auth.owner-default.test.ts src/auto-reply/command-control.test.ts`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 command auth.owner default regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/auto-reply/command-auth.owner-default.test.ts src/auto-reply/command-control.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/auto-reply/command-auth.owner-default.test.ts src/auto-reply/command-control.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/commands/command-auth-gates`
- Changed path count: `2`
- Status counts: `修改 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `2` files, `+56` / `-2`

### 归纳依据

- 主要落点：CLI/command behavior。
- 建议优先验证：优先运行 `pnpm test -- src/auto-reply/command-auth.owner-default.test.ts src/auto-reply/command-control.test.ts`。
- 相关 commit 主题：fix(commands): scope owner allowlist prefixes；fix(commands): preserve owner allowlists for native auth；fix(commands): honor channel-native command auth

### Dimension evidence

- `maintenance-修复-commands-honor-channel-native-command-auth` / 修复 commands honor channel-native command auth:
  - source: `path` [M] `src/auto-reply/command-auth.owner-default.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/command-auth.ts` — semantic cue
- `maintenance-修复-commands-preserve-owner-allowlists-for-nativ` / 修复 commands preserve owner allowlists for native auth:
  - source: `path` [M] `src/auto-reply/command-auth.owner-default.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/command-auth.ts` — semantic cue
- `maintenance-修复-commands-scope-owner-allowlist-prefixes` / 修复 commands scope owner allowlist prefixes:
  - source: `path` [M] `src/auto-reply/command-auth.owner-default.test.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/auto-reply/command-auth.owner-default.test.ts` — test evidence

### 路径证据

- 修改 `src/auto-reply/command-auth.owner-default.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/command-auth.ts`：调整 command auth（CLI/command behavior）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/reply-orchestration/commands/command-auth-gates` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/reply-orchestration/commands/command-auth-gates/change-to-test.md` 的验证建议。
