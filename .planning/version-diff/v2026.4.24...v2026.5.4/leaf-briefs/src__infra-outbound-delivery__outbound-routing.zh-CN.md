# src/infra-outbound-delivery/outbound-routing

## 1. 功能结论

**修改**：telegram stabilize topic dispatch runtime、plugins reuse startup runtime registry、guard provider-prefixed delivery targets、channels clarify message target syntax；**迁移/重构**：hide infra helper internals、expose SDK test helper subpaths；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 6

## 3. 功能级详细差异

### 优化 plugins reuse startup runtime registry

优化 plugins：reuse startup runtime registry

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/channel-resolution.test.ts src/infra/outbound/channel-selection.test.ts src/infra/outbound/target-resolver.test.ts src/infra/outbound/session-binding-service.test.ts | Escalate to routing/channel tests when recipient/account/session selection semantics broaden. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 channels clarify message target syntax

修复 channels：clarify message target syntax

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/channel-resolution.test.ts src/infra/outbound/channel-selection.test.ts src/infra/outbound/target-resolver.test.ts src/infra/outbound/session-binding-service.test.ts | Escalate to routing/channel tests when recipient/account/session selection semantics broaden. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 guard provider-prefixed delivery targets

修复 guard provider-prefixed delivery targets

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/channel-resolution.test.ts src/infra/outbound/channel-selection.test.ts src/infra/outbound/target-resolver.test.ts src/infra/outbound/session-binding-service.test.ts | Escalate to routing/channel tests when recipient/account/session selection semantics broaden. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 telegram stabilize topic dispatch runtime

修复 telegram：stabilize topic dispatch runtime

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/channel-resolution.test.ts src/infra/outbound/channel-selection.test.ts src/infra/outbound/target-resolver.test.ts src/infra/outbound/session-binding-service.test.ts | Escalate to routing/channel tests when recipient/account/session selection semantics broaden. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 expose SDK test helper subpaths

迁移/重构 expose SDK test helper subpaths

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/channel-resolution.test.ts src/infra/outbound/channel-selection.test.ts src/infra/outbound/target-resolver.test.ts src/infra/outbound/session-binding-service.test.ts | Escalate to routing/channel tests when recipient/account/session selection semantics broaden. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 hide infra helper internals

迁移/重构 hide infra helper internals

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/channel-resolution.test.ts src/infra/outbound/channel-selection.test.ts src/infra/outbound/target-resolver.test.ts src/infra/outbound/session-binding-service.test.ts | Escalate to routing/channel tests when recipient/account/session selection semantics broaden. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 channel resolution regression/contract coverage、target normalization regression/contract coverage、target resolver regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/channel-resolution.test.ts src/infra/outbound/channel-selection.test.ts src/infra/outbound/target-resolver.test.ts src/infra/outbound/session-binding-service.test.ts | Escalate to routing/channel tests when recipient/account/session selection semantics broaden. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/infra/outbound/channel-resolution.test.ts src/infra/outbound/channel-selection.test.ts src/infra/outbound/target-resolver.test.ts src/infra/outbound/session-binding-service.test.ts | Escalate to routing/channel tests when recipient/account/session selection semantics broaden. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-routing`
- Changed path count: `7`
- Status counts: `新增 1、修改 6`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `7` files, `+199` / `-93`

### 归纳依据

- 主要落点：implementation、tests/contracts。
- 新增或暴露的关键符号包括：`TARGET_KIND_PREFIXES`, `resolvePluginTargetPrefix`, `resolveChannelTargetProviderPrefix`, `resolveTargetPrefixedChannel`, `validateTargetProviderPrefix`, `resolveChannelPluginForTargetRead`。
- 建议优先验证：优先运行 `| pnpm test -- src/infra/outbound/channel-resolution.test.ts src/infra/outbound/channel-selection.test.ts src/infra/outbound/target-resolver.test.ts src/infra/outbound/session-binding-service.test.ts | Escalate to routing/channel tests when recipient/account/session selection semantics broaden. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix(telegram): stabilize topic dispatch runtime；perf(plugins): reuse startup runtime registry；refactor: hide infra helper internals；fix: guard provider-prefixed delivery targets；refactor: expose SDK test helper subpaths；fix(channels): clarify message target syntax

### Dimension evidence

- `runtime-behavior-优化-plugins-reuse-startup-runtime-registry` / 优化 plugins reuse startup runtime registry:
  - source: `path` [M] `src/infra/outbound/channel-bootstrap.runtime.ts` — semantic cue
- `maintenance-修复-channels-clarify-message-target-syntax` / 修复 channels clarify message target syntax:
  - source: `path` [M] `src/infra/outbound/channel-target-prefix.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/channel-target.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/target-normalization.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/target-normalization.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/target-resolver.test.ts` — semantic cue
- `maintenance-修复-guard-provider-prefixed-delivery-targets` / 修复 guard provider-prefixed delivery targets:
  - source: `path` [A] `src/infra/outbound/channel-target-prefix.ts`
  - source: `path` [M] `src/infra/outbound/channel-bootstrap.runtime.ts`
  - source: `path` [M] `src/infra/outbound/channel-resolution.test.ts`
  - source: `path` [M] `src/infra/outbound/channel-target.ts`
- `runtime-behavior-修复-telegram-stabilize-topic-dispatch-runtime` / 修复 telegram stabilize topic dispatch runtime:
  - source: `path` [M] `src/infra/outbound/channel-bootstrap.runtime.ts` — semantic cue
- `migration-迁移-重构-expose-SDK-test-helper-subpaths` / 迁移/重构 expose SDK test helper subpaths:
  - source: `path` [M] `src/infra/outbound/channel-bootstrap.runtime.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/channel-resolution.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/channel-target-prefix.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/channel-target.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/target-normalization.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/target-normalization.ts` — semantic cue
- `migration-迁移-重构-hide-infra-helper-internals` / 迁移/重构 hide infra helper internals:
  - source: `path` [M] `src/infra/outbound/channel-bootstrap.runtime.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/channel-resolution.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/channel-target-prefix.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/channel-target.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/target-normalization.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/target-normalization.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/infra/outbound/channel-resolution.test.ts` — test evidence
  - source: `path` [M] `src/infra/outbound/target-normalization.test.ts` — test evidence
  - source: `path` [M] `src/infra/outbound/target-resolver.test.ts` — test evidence

### 路径证据

- 新增 `src/infra/outbound/channel-target-prefix.ts`：调整 channel target prefix（implementation）。
- 修改 `src/infra/outbound/channel-bootstrap.runtime.ts`：调整 channel bootstrap（implementation）。
- 修改 `src/infra/outbound/channel-resolution.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/outbound/channel-target.ts`：调整 channel target（implementation）。
- 修改 `src/infra/outbound/target-normalization.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/outbound/target-normalization.ts`：调整 target normalization（implementation）。
- 修改 `src/infra/outbound/target-resolver.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/infra-outbound-delivery/outbound-routing` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/infra-outbound-delivery/outbound-routing/change-to-test.md` 的验证建议。
