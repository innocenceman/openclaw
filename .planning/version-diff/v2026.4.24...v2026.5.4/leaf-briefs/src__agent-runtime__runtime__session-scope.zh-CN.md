# src/agent-runtime/runtime/session-scope

## 1. 功能结论

**新增**：migrations add plugin-owned Hermes import、tts add per-agent voice overrides；**修改**：preserve manual cli session attachments、types mark remaining deprecated aliases、models keep agent primaries strict、models keep user model switches strict；**迁移/重构**：trim agent local helper exports；行为变化，风险 high。

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

### 修复 cli key gemini cli auth epoch on google account identity

修复 cli：key gemini cli auth epoch on google account identity

- 验证提示：优先运行 `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`。
- 置信度：`high`

### 修复 models keep agent primaries strict

修复 models：keep agent primaries strict

- 验证提示：优先运行 `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`。
- 置信度：`high`

### 修复 models keep user model switches strict

修复 models：keep user model switches strict

- 验证提示：优先运行 `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`。
- 置信度：`high`

### 修复 preserve manual cli session attachments

修复 preserve manual cli session attachments

- 验证提示：优先运行 `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`。
- 置信度：`high`

### 修复 ui polish assistant identity settings

修复 ui：polish assistant identity settings

- 验证提示：优先运行 `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`。
- 置信度：`high`

### 修复 ui scope agent identity to active session

修复 ui：scope agent identity to active session

- 验证提示：优先运行 `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`。
- 置信度：`high`

### 文档同步 types mark remaining deprecated aliases

文档同步 types：mark remaining deprecated aliases

- 验证提示：优先运行 `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`。
- 置信度：`high`

### 新增 migrations add plugin-owned Hermes import

新增 migrations：add plugin-owned Hermes import

- 验证提示：优先运行 `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`。
- 置信度：`high`

### 新增 tts add per-agent voice overrides

新增 tts：add per-agent voice overrides

- 验证提示：优先运行 `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`。
- 置信度：`high`

### 迁移/重构 trim agent local helper exports

迁移/重构 trim agent local helper exports

- 验证提示：优先运行 `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 agent scope regression/contract coverage、cli session regression/contract coverage、identity avatar regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/session-scope`
- Changed path count: `7`
- Status counts: `修改 7`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `7` files, `+405` / `-31`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`findMutableAgentEntry`, `updateAgentModelPrimary`, `setAgentEffectiveModelPrimary`, `PUBLIC_AVATAR_SOURCE_MAX_CHARS`, `PUBLIC_DATA_AVATAR_HEADER_MAX_CHARS`, `isSafeRelativeAvatarSource`, `resolvePublicAgentAvatarSource`, `loadIdentityFromFile`。
- 建议优先验证：优先运行 `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`。
- 相关 commit 主题：fix: preserve manual cli session attachments；refactor: trim agent local helper exports；docs(types): mark remaining deprecated aliases；fix(models): keep agent primaries strict；fix(models): keep user model switches strict；fix(ui): scope agent identity to active session；feat(migrations): add plugin-owned Hermes import；feat(tts): add per-agent voice overrides

### Dimension evidence

- `maintenance-修复-cli-key-gemini-cli-auth-epoch-on-google-acco` / 修复 cli key gemini cli auth epoch on google account identity:
  - source: `path` [M] `src/agents/cli-session.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-session.ts` — semantic cue
  - source: `path` [M] `src/agents/identity-avatar.test.ts` — semantic cue
  - source: `path` [M] `src/agents/identity-avatar.ts` — semantic cue
  - source: `path` [M] `src/agents/identity-file.ts` — semantic cue
- `maintenance-修复-models-keep-agent-primaries-strict` / 修复 models keep agent primaries strict:
  - source: `path` [M] `src/agents/agent-scope.test.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-scope.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-session.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-session.ts` — semantic cue
  - source: `path` [M] `src/agents/identity-avatar.test.ts` — semantic cue
  - source: `path` [M] `src/agents/identity-avatar.ts` — semantic cue
- `maintenance-修复-models-keep-user-model-switches-strict` / 修复 models keep user model switches strict:
  - source: `path` [M] `src/agents/agent-scope.test.ts`
  - source: `path` [M] `src/agents/agent-scope.ts`
  - source: `path` [M] `src/agents/cli-session.test.ts`
- `maintenance-修复-preserve-manual-cli-session-attachments` / 修复 preserve manual cli session attachments:
  - source: `path` [M] `src/agents/cli-session.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-session.ts` — semantic cue
- `user-visible-修复-ui-polish-assistant-identity-settings` / 修复 ui polish assistant identity settings:
  - source: `path` [M] `src/agents/identity-avatar.test.ts` — semantic cue
  - source: `path` [M] `src/agents/identity-avatar.ts` — semantic cue
  - source: `path` [M] `src/agents/identity-file.ts` — semantic cue
- `user-visible-修复-ui-scope-agent-identity-to-active-session` / 修复 ui scope agent identity to active session:
  - source: `path` [M] `src/agents/agent-scope.test.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-scope.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-session.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-session.ts` — semantic cue
  - source: `path` [M] `src/agents/identity-avatar.test.ts` — semantic cue
  - source: `path` [M] `src/agents/identity-avatar.ts` — semantic cue
- `tests-docs-文档同步-types-mark-remaining-deprecated-aliases` / 文档同步 types mark remaining deprecated aliases:
  - source: `path` [M] `src/agents/agent-scope.test.ts`
  - source: `path` [M] `src/agents/agent-scope.ts`
  - source: `path` [M] `src/agents/cli-session.test.ts`
- `maintenance-新增-migrations-add-plugin-owned-Hermes-import` / 新增 migrations add plugin-owned Hermes import:
  - source: `path` [M] `src/agents/agent-scope.test.ts`
  - source: `path` [M] `src/agents/agent-scope.ts`
  - source: `path` [M] `src/agents/cli-session.test.ts`
- `user-visible-新增-tts-add-per-agent-voice-overrides` / 新增 tts add per-agent voice overrides:
  - source: `path` [M] `src/agents/agent-scope.test.ts`
  - source: `path` [M] `src/agents/agent-scope.ts`
  - source: `path` [M] `src/agents/cli-session.test.ts`
- `migration-迁移-重构-trim-agent-local-helper-exports` / 迁移/重构 trim agent local helper exports:
  - source: `path` [M] `src/agents/agent-scope.test.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-scope.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-session.test.ts` — semantic cue
  - source: `path` [M] `src/agents/cli-session.ts` — semantic cue
  - source: `path` [M] `src/agents/identity-avatar.test.ts` — semantic cue
  - source: `path` [M] `src/agents/identity-avatar.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/agent-scope.test.ts` — test evidence
  - source: `path` [M] `src/agents/cli-session.test.ts` — test evidence
  - source: `path` [M] `src/agents/identity-avatar.test.ts` — test evidence

### 路径证据

- 修改 `src/agents/agent-scope.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/agent-scope.ts`：调整 agent scope（agent runtime）。
- 修改 `src/agents/cli-session.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/cli-session.ts`：调整 cli session（agent runtime）。
- 修改 `src/agents/identity-avatar.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/identity-avatar.ts`：调整 identity avatar（agent runtime）。
- 修改 `src/agents/identity-file.ts`：调整 identity file（agent runtime）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/runtime/session-scope` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/runtime/session-scope/change-to-test.md` 的验证建议。
