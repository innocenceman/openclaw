# src/shared-misc-runtime-support/compat-hooks

## 1. 功能结论

**修改**：Format compaction PR changes and validate locally、Address compaction review feedback、Make compaction visible and resume final replies、preserve slack hook alert content；**迁移/重构**：route plugin metadata consumers through snapshots、trim hook helper exports、trim hooks local exports、trim status fixture exports；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`plugin`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：文档语义变化、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 2、修改 25

## 3. 功能级详细差异

### 修复 block workspace CLOUDSDK_PYTHON override and always set trusted inte…

修复 block workspace CLOUDSDK_PYTHON override and always set trusted interpreter for gcloud

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 preserve slack hook alert content

修复 preserve slack hook alert content

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 Address compaction review feedback

修改 Address compaction review feedback

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 Format compaction PR changes and validate locally

修改 Format compaction PR changes and validate locally

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 Make compaction visible and resume final replies

修改 Make compaction visible and resume final replies

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 narrow dead reexports

迁移/重构 narrow dead reexports

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 route plugin metadata consumers through snapshots

迁移/重构 route plugin metadata consumers through snapshots

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 trim hook helper exports

迁移/重构 trim hook helper exports

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 trim hooks local exports

迁移/重构 trim hooks local exports

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 trim status fixture exports

迁移/重构 trim status fixture exports

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 hooks config，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

本维度包含 2 个 evidence-backed 功能差异。

- 文档、说明或生成基线同步了 README docs、HOOK docs，用于更新读者指引、能力说明或事实基线。
- 测试或契约覆盖集中在 handler regression/contract coverage、gmail setup utils regression/contract coverage、install regression/contract coverage、llm slug generator regression/contract coverage，用于约束本 leaf 的回归边界。
- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/compat-hooks`
- Changed path count: `27`
- Status counts: `新增 2、修改 25`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `27` files, `+411` / `-155`

### 归纳依据

- 主要落点：implementation、tests/contracts、session/state handling、docs、message delivery、configuration/schema、model/thinking policy。
- 新增或暴露的关键符号包括：`LEGACY_PROJECT_NAMES`, `readOptionalNumber`, `pickDateTimePart`, `resolveLocalTimeZone`, `formatLocalSessionTimestamp`, `stripResetSuffix`, `DEFAULT_HOOKS_PATH`, `readNonBlankString`, `getHookSourcePolicy`, `discoverWorkspaceHookEntries`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：Format compaction PR changes and validate locally；Address compaction review feedback；Make compaction visible and resume final replies；fix: preserve slack hook alert content；refactor: route plugin metadata consumers through snapshots；refactor: trim hook helper exports；refactor: trim hooks local exports；refactor: trim status fixture exports

### Dimension evidence

- `maintenance-修复-block-workspace-CLOUDSDK-PYTHON-override-and` / 修复 block workspace CLOUDSDK_PYTHON override and always set trusted inte…:
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.test.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/handler.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/session-memory/handler.test.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/session-memory/handler.ts` — semantic cue
  - source: `path` [M] `src/hooks/gmail-setup-utils.test.ts` — semantic cue
- `maintenance-修复-preserve-slack-hook-alert-content` / 修复 preserve slack hook alert content:
  - source: `path` [M] `src/hooks/bundled/README.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.test.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/HOOK.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/handler.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/session-memory/HOOK.md` — semantic cue
- `maintenance-修改-Address-compaction-review-feedback` / 修改 Address compaction review feedback:
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/HOOK.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/handler.ts` — semantic cue
- `maintenance-修改-Format-compaction-PR-changes-and-validate-lo` / 修改 Format compaction PR changes and validate locally:
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.test.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/HOOK.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/handler.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/session-memory/handler.test.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/session-memory/handler.ts` — semantic cue
- `maintenance-修改-Make-compaction-visible-and-resume-final-rep` / 修改 Make compaction visible and resume final replies:
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.test.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/HOOK.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/handler.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/session-memory/handler.test.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/session-memory/handler.ts` — semantic cue
- `migration-迁移-重构-narrow-dead-reexports` / 迁移/重构 narrow dead reexports:
  - source: `path` [M] `src/compat/legacy-names.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/README.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.test.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/HOOK.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/handler.ts` — semantic cue
- `public-contract-迁移-重构-route-plugin-metadata-consumers-through-s` / 迁移/重构 route plugin metadata consumers through snapshots:
  - source: `path` [M] `src/compat/legacy-names.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/README.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.test.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/HOOK.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/handler.ts` — semantic cue
- `migration-迁移-重构-trim-hook-helper-exports` / 迁移/重构 trim hook helper exports:
  - source: `path` [M] `src/compat/legacy-names.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/README.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.test.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/HOOK.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/handler.ts` — semantic cue
- `migration-迁移-重构-trim-hooks-local-exports` / 迁移/重构 trim hooks local exports:
  - source: `path` [M] `src/compat/legacy-names.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/README.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.test.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/HOOK.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/handler.ts` — semantic cue
- `migration-迁移-重构-trim-status-fixture-exports` / 迁移/重构 trim status fixture exports:
  - source: `path` [M] `src/compat/legacy-names.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/README.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.test.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.ts` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/HOOK.md` — semantic cue
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/handler.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/hooks/config.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/hooks/bundled/README.md` — docs evidence
  - source: `path` [M] `src/hooks/bundled/compaction-notifier/HOOK.md` — docs evidence
  - source: `path` [M] `src/hooks/bundled/session-memory/HOOK.md` — docs evidence
  - source: `path` [M] `src/hooks/bundled/boot-md/handler.test.ts` — test evidence
  - source: `path` [M] `src/hooks/bundled/session-memory/handler.test.ts` — test evidence
  - source: `path` [M] `src/hooks/gmail-setup-utils.test.ts` — test evidence

### 路径证据

- 新增 `src/hooks/bundled/compaction-notifier/HOOK.md`：调整 HOOK docs（docs）。
- 新增 `src/hooks/bundled/compaction-notifier/handler.ts`：调整 handler（implementation）。
- 修改 `src/compat/legacy-names.ts`：调整 legacy names（implementation）。
- 修改 `src/hooks/bundled/README.md`：调整 README docs（docs）。
- 修改 `src/hooks/bundled/boot-md/handler.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/hooks/bundled/boot-md/handler.ts`：调整 handler（implementation）。
- 修改 `src/hooks/bundled/session-memory/HOOK.md`：调整 HOOK docs（session/state handling）。
- 修改 `src/hooks/bundled/session-memory/handler.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/hooks/bundled/session-memory/handler.ts`：调整 handler（session/state handling）。
- 修改 `src/hooks/bundled/session-memory/transcript.ts`：调整 transcript（session/state handling）。
- 修改 `src/hooks/config.ts`：调整 hooks config（configuration/schema）。
- 修改 `src/hooks/gmail-ops.ts`：调整 gmail ops（implementation）。
- 修改 `src/hooks/gmail-setup-utils.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/hooks/gmail-setup-utils.ts`：调整 gmail setup utils（implementation）。
- 其余 13 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/compat-hooks` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/compat-hooks/change-to-test.md` 的验证建议。
