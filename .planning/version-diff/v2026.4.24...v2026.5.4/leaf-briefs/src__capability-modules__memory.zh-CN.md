# src/capability-modules/memory

## 1. 功能结论

**新增**：Codex happy path prompt snapshots；**修改**：delete stale memory host bridges、include primary dreaming workspace、memory preserve dreams path bridge behavior；**迁移/重构**：hide embedding input helper、trim contract helper exports、trim model planner exports、trim model catalog exports；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名
- 特殊形态：contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 1、修改 13、删除 53、重命名 3

## 3. 功能级详细差异

### 修复 include primary dreaming workspace

修复 include primary dreaming workspace

- 验证提示：优先运行 `| pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 修复 memory preserve dreams path bridge behavior

修复 memory：preserve dreams path bridge behavior

- 验证提示：优先运行 `| pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 新增 Codex happy path prompt snapshots

新增 Codex happy path prompt snapshots

- 验证提示：优先运行 `| pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 维护调整 delete stale memory host bridges

维护调整 delete stale memory host bridges

- 验证提示：优先运行 `| pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 迁移/重构 hide embedding input helper

迁移/重构 hide embedding input helper

- 验证提示：优先运行 `| pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 迁移/重构 remove unused memory runtime wrappers

迁移/重构 remove unused memory runtime wrappers

- 验证提示：优先运行 `| pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 迁移/重构 trim contract helper exports

迁移/重构 trim contract helper exports

- 验证提示：优先运行 `| pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 迁移/重构 trim memory host wrappers

迁移/重构 trim memory host wrappers

- 验证提示：优先运行 `| pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 迁移/重构 trim model catalog exports

迁移/重构 trim model catalog exports

- 验证提示：优先运行 `| pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 迁移/重构 trim model planner exports

迁移/重构 trim model planner exports

- 验证提示：优先运行 `| pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 backend config regression/contract coverage、backend config、memory schema，需要按契约边界审查。

- 验证提示：优先运行 `| pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 dreaming regression/contract coverage、backend config regression/contract coverage、batch http regression/contract coverage、embeddings remote fetch regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `engine embeddings`（`src/memory-host-sdk/engine-embeddings.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `engine foundation`（`src/memory-host-sdk/engine-foundation.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `engine`（`src/memory-host-sdk/engine.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `batch error utils`（`src/memory-host-sdk/host/batch-error-utils.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`embedding provider adapter utils` 路径（`src/memory-host-sdk/host/embedding-provider-adapter-utils.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`embeddings` 路径（`src/memory-host-sdk/host/embeddings.types.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`read file shared` 路径（`src/memory-host-sdk/host/read-file-shared.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/memory`
- Changed path count: `70`
- Status counts: `新增 1、修改 13、删除 53、重命名 3`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `70` files, `+136` / `-7011`

### 归纳依据

- 主要落点：implementation、tests/contracts、configuration/schema、auth/pairing/security behavior、session/state handling。
- 新增或暴露的关键符号包括：`MANAGED_MEMORY_DREAMING_CRON_NAME`, `MANAGED_MEMORY_DREAMING_CRON_TAG`, `MEMORY_DREAMING_SYSTEM_EVENT_TEXT`, `LEGACY_MEMORY_LIGHT_DREAMING_CRON_NAME`, `LEGACY_MEMORY_LIGHT_DREAMING_CRON_TAG`, `LEGACY_MEMORY_LIGHT_DREAMING_EVENT_TEXT`, `LEGACY_MEMORY_REM_DREAMING_CRON_NAME`, `LEGACY_MEMORY_REM_DREAMING_CRON_TAG`, `LEGACY_MEMORY_REM_DREAMING_EVENT_TEXT`, `resolveMemoryDreamingWorkspaces`。
- 建议优先验证：优先运行 `| pnpm test -- src/memory/index.test.ts src/memory/manager.atomic-reindex.test.ts src/memory/search-manager.test.ts src/memory/session-files.test.ts | Escalate to agent/runtime tests when memory retrieval, embeddings, or session storage changes reply behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 相关 commit 主题：chore: delete stale memory host bridges；Add Codex happy path prompt snapshots；fix: include primary dreaming workspace；refactor: hide embedding input helper；refactor: trim contract helper exports；refactor: trim model planner exports；refactor: trim model catalog exports；refactor: remove unused memory runtime wrappers

### Dimension evidence

- `maintenance-修复-include-primary-dreaming-workspace` / 修复 include primary dreaming workspace:
  - source: `path` [M] `src/memory-host-sdk/dreaming.test.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/dreaming.ts` — semantic cue
- `maintenance-修复-memory-preserve-dreams-path-bridge-behavior` / 修复 memory preserve dreams path bridge behavior:
  - source: `path` [M] `src/memory-host-sdk/dreaming.test.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/dreaming.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-foundation.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-qmd.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-storage.ts` — semantic cue
- `maintenance-新增-Codex-happy-path-prompt-snapshots` / 新增 Codex happy path prompt snapshots:
  - source: `path` [A] `src/memory-host-sdk/host/embedding-defaults.ts`
  - source: `path` [M] `src/memory-host-sdk/dreaming.test.ts`
  - source: `path` [M] `src/memory-host-sdk/dreaming.ts`
  - source: `path` [M] `src/memory-host-sdk/engine-qmd.ts`
  - source: `path` [D] `src/memory-host-sdk/engine-embeddings.ts`
  - source: `path` [D] `src/memory-host-sdk/engine-foundation.ts`
- `maintenance-维护调整-delete-stale-memory-host-bridges` / 维护调整 delete stale memory host bridges:
  - source: `path` [M] `src/memory-host-sdk/dreaming.test.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/dreaming.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-foundation.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-qmd.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-storage.ts` — semantic cue
- `migration-迁移-重构-hide-embedding-input-helper` / 迁移/重构 hide embedding input helper:
  - source: `path` [M] `src/memory-host-sdk/dreaming.test.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/dreaming.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-foundation.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-qmd.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-storage.ts` — semantic cue
- `runtime-behavior-迁移-重构-remove-unused-memory-runtime-wrappers` / 迁移/重构 remove unused memory runtime wrappers:
  - source: `path` [M] `src/memory-host-sdk/dreaming.test.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/dreaming.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-foundation.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-qmd.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-storage.ts` — semantic cue
- `public-contract-迁移-重构-trim-contract-helper-exports` / 迁移/重构 trim contract helper exports:
  - source: `path` [M] `src/memory-host-sdk/dreaming.test.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/dreaming.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-foundation.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-qmd.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-storage.ts` — semantic cue
- `migration-迁移-重构-trim-memory-host-wrappers` / 迁移/重构 trim memory host wrappers:
  - source: `path` [M] `src/memory-host-sdk/dreaming.test.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/dreaming.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-foundation.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-qmd.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-storage.ts` — semantic cue
- `runtime-behavior-迁移-重构-trim-model-catalog-exports` / 迁移/重构 trim model catalog exports:
  - source: `path` [M] `src/memory-host-sdk/dreaming.test.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/dreaming.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-foundation.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-qmd.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-storage.ts` — semantic cue
- `migration-迁移-重构-trim-model-planner-exports` / 迁移/重构 trim model planner exports:
  - source: `path` [M] `src/memory-host-sdk/dreaming.test.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/dreaming.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-foundation.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-qmd.ts` — semantic cue
  - source: `path` [M] `src/memory-host-sdk/engine-storage.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/memory-host-sdk/host/backend-config.test.ts` — contract evidence
  - source: `path` [M] `src/memory-host-sdk/host/backend-config.ts` — contract evidence
  - source: `path` [M] `src/memory-host-sdk/host/memory-schema.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/memory-host-sdk/dreaming.test.ts` — test evidence
  - source: `path` [M] `src/memory-host-sdk/host/backend-config.test.ts` — test evidence
  - source: `path` [M] `src/memory-host-sdk/host/batch-http.test.ts` — test evidence
  - source: `path` [M] `src/memory-host-sdk/host/embeddings-remote-fetch.test.ts` — test evidence
  - source: `path` [M] `src/memory-host-sdk/host/embeddings.test.ts` — test evidence
  - source: `path` [M] `src/memory-host-sdk/host/internal.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/memory-host-sdk/engine-embeddings.ts`
  - source: `path` [D] `src/memory-host-sdk/engine-foundation.ts`
  - source: `path` [D] `src/memory-host-sdk/engine.ts`
  - source: `path` [D] `src/memory-host-sdk/host/batch-error-utils.ts`
  - source: `path` [D] `src/memory-host-sdk/host/batch-http.test.ts`
  - source: `path` [D] `src/memory-host-sdk/host/batch-http.ts`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `src/memory-host-sdk/host/embedding-provider-adapter-utils.ts`
  - source: `path` [R] `src/memory-host-sdk/host/embeddings.types.ts`
  - source: `path` [R] `src/memory-host-sdk/host/read-file-shared.ts`

### 路径证据

- 新增 `src/memory-host-sdk/host/embedding-defaults.ts`：调整 embedding defaults（implementation）。
- 修改 `src/memory-host-sdk/dreaming.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/memory-host-sdk/dreaming.ts`：调整 dreaming（implementation）。
- 修改 `src/memory-host-sdk/engine-qmd.ts`：调整 engine qmd（implementation）。
- 修改 `src/memory-host-sdk/engine-storage.ts`：调整 engine storage（implementation）。
- 修改 `src/memory-host-sdk/host/backend-config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/memory-host-sdk/host/backend-config.ts`：调整 backend config（configuration/schema）。
- 修改 `src/memory-host-sdk/host/embedding-inputs.ts`：调整 embedding inputs（implementation）。
- 修改 `src/memory-host-sdk/host/types.ts`：调整 host types（implementation）。
- 修改 `src/memory-host-sdk/multimodal.ts`：调整 multimodal（implementation）。
- 修改 `src/memory-host-sdk/query.ts`：调整 query（implementation）。
- 修改 `src/memory-host-sdk/secret.ts`：调整 secret（auth/pairing/security behavior）。
- 修改 `src/memory-host-sdk/status.ts`：调整 status（implementation）。
- 删除 `src/memory-host-sdk/engine-embeddings.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/memory-host-sdk/engine-foundation.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/memory-host-sdk/engine.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/memory-host-sdk/host/batch-error-utils.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/memory-host-sdk/host/batch-http.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/memory-host-sdk/host/batch-http.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/memory-host-sdk/host/batch-output.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/memory-host-sdk/host/batch-provider-common.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/memory-host-sdk/host/batch-runner.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/memory-host-sdk/host/batch-status.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/memory-host-sdk/host/batch-upload.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/memory-host-sdk/host/batch-utils.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `src/memory-host-sdk/host/embedding-provider-adapter-utils.ts`：调整 embedding provider adapter utils（implementation）。
- 重命名 `src/memory-host-sdk/host/embeddings.types.ts`：调整 embeddings（implementation）。
- 重命名 `src/memory-host-sdk/host/read-file-shared.ts`：调整 read file shared（implementation）。
- 其余 42 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/capability-modules/memory` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/memory/change-to-test.md` 的验证建议。
