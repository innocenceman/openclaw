# src/reply-orchestration/commands/command-registry-families

## 1. 功能结论

**新增**：agents add current-session steer command、commands add side alias for btw、default active steering to batched delivery；**修改**：keep control ui slash commands browser-safe、discord preserve slash command localizations、ci fix lint config and speed dispatch tests；**迁移/重构**：trim provider and command helper types、trim auto reply helper exports、trim command args type export、trim core command dead exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 7

## 3. 功能级详细差异

### 修复 discord preserve slash command localizations

修复 discord：preserve slash command localizations

- 验证提示：优先运行 `pnpm test -- src/auto-reply/commands-args.test.ts`。
- 置信度：`high`

### 修复 keep control ui slash commands browser-safe

修复 keep control ui slash commands browser-safe

- 验证提示：优先运行 `pnpm test -- src/auto-reply/commands-args.test.ts`。
- 置信度：`high`

### 新增 agents add current-session steer command

新增 agents：add current-session steer command

- 验证提示：优先运行 `pnpm test -- src/auto-reply/commands-args.test.ts`。
- 置信度：`high`

### 新增 commands add side alias for btw

新增 commands：add side alias for btw

- 验证提示：优先运行 `pnpm test -- src/auto-reply/commands-args.test.ts`。
- 置信度：`high`

### 新增 default active steering to batched delivery

新增 default active steering to batched delivery

- 验证提示：优先运行 `pnpm test -- src/auto-reply/commands-args.test.ts`。
- 置信度：`high`

### 测试覆盖 ci fix lint config and speed dispatch tests

测试覆盖 ci：fix lint config and speed dispatch tests

- 验证提示：优先运行 `pnpm test -- src/auto-reply/commands-args.test.ts`。
- 置信度：`high`

### 迁移/重构 trim auto reply helper exports

迁移/重构 trim auto reply helper exports

- 验证提示：优先运行 `pnpm test -- src/auto-reply/commands-args.test.ts`。
- 置信度：`high`

### 迁移/重构 trim command args type export

迁移/重构 trim command args type export

- 验证提示：优先运行 `pnpm test -- src/auto-reply/commands-args.test.ts`。
- 置信度：`high`

### 迁移/重构 trim core command dead exports

迁移/重构 trim core command dead exports

- 验证提示：优先运行 `pnpm test -- src/auto-reply/commands-args.test.ts`。
- 置信度：`high`

### 迁移/重构 trim provider and command helper types

迁移/重构 trim provider and command helper types

- 验证提示：优先运行 `pnpm test -- src/auto-reply/commands-args.test.ts`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 commands registry regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/auto-reply/commands-args.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/auto-reply/commands-args.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/commands/command-registry-families`
- Changed path count: `7`
- Status counts: `修改 7`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `7` files, `+318` / `-91`

### 归纳依据

- 主要落点：CLI/command behavior。
- 新增或暴露的关键符号包括：`BROWSER_SAFE_THINKING_LEVELS`, `registerAlias`, `buildBuiltinChatCommands`, `installOllamaThinkingProvider`, `resolveNativeNames`, `formatCommandArgMenuTitle`, `isCommandMessage`。
- 建议优先验证：优先运行 `pnpm test -- src/auto-reply/commands-args.test.ts`。
- 相关 commit 主题：feat(agents): add current-session steer command；feat(commands): add side alias for btw；fix: keep control ui slash commands browser-safe；refactor: trim provider and command helper types；fix(discord): preserve slash command localizations；refactor: trim auto reply helper exports；refactor: trim command args type export；test(ci): fix lint config and speed dispatch tests

### Dimension evidence

- `maintenance-修复-discord-preserve-slash-command-localizations` / 修复 discord preserve slash command localizations:
  - source: `path` [M] `src/auto-reply/commands-args.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry-list.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.data.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.shared.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.ts` — semantic cue
- `user-visible-修复-keep-control-ui-slash-commands-browser-safe` / 修复 keep control ui slash commands browser-safe:
  - source: `path` [M] `src/auto-reply/commands-args.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry-list.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.data.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.shared.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.ts` — semantic cue
- `maintenance-新增-agents-add-current-session-steer-command` / 新增 agents add current-session steer command:
  - source: `path` [M] `src/auto-reply/commands-args.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry-list.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.data.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.shared.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.ts` — semantic cue
- `maintenance-新增-commands-add-side-alias-for-btw` / 新增 commands add side alias for btw:
  - source: `path` [M] `src/auto-reply/commands-args.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry-list.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.data.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.shared.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.ts` — semantic cue
- `maintenance-新增-default-active-steering-to-batched-delivery` / 新增 default active steering to batched delivery:
  - source: `path` [M] `src/auto-reply/commands-args.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry-list.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.data.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.shared.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.ts` — semantic cue
- `tests-docs-测试覆盖-ci-fix-lint-config-and-speed-dispatch-tests` / 测试覆盖 ci fix lint config and speed dispatch tests:
  - source: `path` [M] `src/auto-reply/commands-args.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry-list.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.data.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.shared.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.ts` — semantic cue
- `migration-迁移-重构-trim-auto-reply-helper-exports` / 迁移/重构 trim auto reply helper exports:
  - source: `path` [M] `src/auto-reply/commands-args.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry-list.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.data.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.shared.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.ts` — semantic cue
- `migration-迁移-重构-trim-command-args-type-export` / 迁移/重构 trim command args type export:
  - source: `path` [M] `src/auto-reply/commands-args.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry-list.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.data.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.shared.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.ts` — semantic cue
- `migration-迁移-重构-trim-core-command-dead-exports` / 迁移/重构 trim core command dead exports:
  - source: `path` [M] `src/auto-reply/commands-args.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry-list.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.data.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.shared.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.ts` — semantic cue
- `migration-迁移-重构-trim-provider-and-command-helper-types` / 迁移/重构 trim provider and command helper types:
  - source: `path` [M] `src/auto-reply/commands-args.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry-list.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.data.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.shared.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/commands-registry.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/auto-reply/commands-registry.test.ts` — test evidence

### 路径证据

- 修改 `src/auto-reply/commands-args.ts`：调整 commands args（CLI/command behavior）。
- 修改 `src/auto-reply/commands-registry-list.ts`：调整 commands registry list（CLI/command behavior）。
- 修改 `src/auto-reply/commands-registry.data.ts`：调整 commands registry.data（CLI/command behavior）。
- 修改 `src/auto-reply/commands-registry.shared.ts`：调整 commands registry.shared（CLI/command behavior）。
- 修改 `src/auto-reply/commands-registry.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/commands-registry.ts`：调整 commands registry（CLI/command behavior）。
- 修改 `src/auto-reply/commands-registry.types.ts`：调整 commands registry（CLI/command behavior）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/reply-orchestration/commands/command-registry-families` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/reply-orchestration/commands/command-registry-families/change-to-test.md` 的验证建议。
