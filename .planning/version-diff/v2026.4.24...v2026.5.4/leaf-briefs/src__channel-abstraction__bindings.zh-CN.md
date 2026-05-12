# src/channel-abstraction/bindings

## 1. 功能结论

**修改**：bound configured acp binding readiness；**迁移/重构**：trim unused core exports、remove unused plugin test reset hooks、remove dead private helpers、plugins simplify plugin cache boundaries；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 6

## 3. 功能级详细差异

### 修复 bound configured acp binding readiness

修复 bound configured acp binding readiness

- 验证提示：优先运行 `| pnpm test -- src/channels/plugins/acp-bindings.test.ts src/channels/plugins/binding-targets.test.ts src/channels/plugins/target-resolvers.test.ts src/channels/plugins/pairing-adapters.test.ts | Escalate to routing and channel suites when binding resolution changes target/account/session semantics. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 plugins simplify plugin cache boundaries

迁移/重构 plugins：simplify plugin cache boundaries

- 验证提示：优先运行 `| pnpm test -- src/channels/plugins/acp-bindings.test.ts src/channels/plugins/binding-targets.test.ts src/channels/plugins/target-resolvers.test.ts src/channels/plugins/pairing-adapters.test.ts | Escalate to routing and channel suites when binding resolution changes target/account/session semantics. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 remove dead private helpers

迁移/重构 remove dead private helpers

- 验证提示：优先运行 `| pnpm test -- src/channels/plugins/acp-bindings.test.ts src/channels/plugins/binding-targets.test.ts src/channels/plugins/target-resolvers.test.ts src/channels/plugins/pairing-adapters.test.ts | Escalate to routing and channel suites when binding resolution changes target/account/session semantics. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 remove unused plugin test reset hooks

迁移/重构 remove unused plugin test reset hooks

- 验证提示：优先运行 `| pnpm test -- src/channels/plugins/acp-bindings.test.ts src/channels/plugins/binding-targets.test.ts src/channels/plugins/target-resolvers.test.ts src/channels/plugins/pairing-adapters.test.ts | Escalate to routing and channel suites when binding resolution changes target/account/session semantics. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 trim unused core exports

迁移/重构 trim unused core exports

- 验证提示：优先运行 `| pnpm test -- src/channels/plugins/acp-bindings.test.ts src/channels/plugins/binding-targets.test.ts src/channels/plugins/target-resolvers.test.ts src/channels/plugins/pairing-adapters.test.ts | Escalate to routing and channel suites when binding resolution changes target/account/session semantics. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 binding routing regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/channels/plugins/acp-bindings.test.ts src/channels/plugins/binding-targets.test.ts src/channels/plugins/target-resolvers.test.ts src/channels/plugins/pairing-adapters.test.ts | Escalate to routing and channel suites when binding resolution changes target/account/session semantics. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/channels/plugins/acp-bindings.test.ts src/channels/plugins/binding-targets.test.ts src/channels/plugins/target-resolvers.test.ts src/channels/plugins/pairing-adapters.test.ts | Escalate to routing and channel suites when binding resolution changes target/account/session semantics. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/bindings`
- Changed path count: `6`
- Status counts: `修改 6`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `6` files, `+77` / `-65`

### 归纳依据

- 主要落点：configuration/schema、implementation、tests/contracts。
- 新增或暴露的关键符号包括：`CONFIGURED_BINDING_ROUTE_READY_TIMEOUT_MS`。
- 建议优先验证：优先运行 `| pnpm test -- src/channels/plugins/acp-bindings.test.ts src/channels/plugins/binding-targets.test.ts src/channels/plugins/target-resolvers.test.ts src/channels/plugins/pairing-adapters.test.ts | Escalate to routing and channel suites when binding resolution changes target/account/session semantics. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：refactor: trim unused core exports；refactor: remove unused plugin test reset hooks；refactor: remove dead private helpers；refactor(plugins): simplify plugin cache boundaries；fix: bound configured acp binding readiness

### Dimension evidence

- `maintenance-修复-bound-configured-acp-binding-readiness` / 修复 bound configured acp binding readiness:
  - source: `path` [M] `src/channels/plugins/binding-provider.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/binding-routing.test.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/binding-routing.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-builtins.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-compiler.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-consumers.ts` — semantic cue
- `migration-迁移-重构-plugins-simplify-plugin-cache-boundaries` / 迁移/重构 plugins simplify plugin cache boundaries:
  - source: `path` [M] `src/channels/plugins/binding-provider.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/binding-routing.test.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/binding-routing.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-builtins.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-compiler.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-consumers.ts` — semantic cue
- `migration-迁移-重构-remove-dead-private-helpers` / 迁移/重构 remove dead private helpers:
  - source: `path` [M] `src/channels/plugins/binding-provider.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/binding-routing.test.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/binding-routing.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-builtins.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-compiler.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-consumers.ts` — semantic cue
- `migration-迁移-重构-remove-unused-plugin-test-reset-hooks` / 迁移/重构 remove unused plugin test reset hooks:
  - source: `path` [M] `src/channels/plugins/binding-provider.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/binding-routing.test.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/binding-routing.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-builtins.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-compiler.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-consumers.ts` — semantic cue
- `migration-迁移-重构-trim-unused-core-exports` / 迁移/重构 trim unused core exports:
  - source: `path` [M] `src/channels/plugins/binding-provider.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/binding-routing.test.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/binding-routing.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-builtins.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-compiler.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/configured-binding-consumers.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/channels/plugins/binding-routing.test.ts` — test evidence

### 路径证据

- 修改 `src/channels/plugins/binding-provider.ts`：调整 binding provider（implementation）。
- 修改 `src/channels/plugins/binding-routing.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/channels/plugins/binding-routing.ts`：调整 binding routing（implementation）。
- 修改 `src/channels/plugins/configured-binding-builtins.ts`：调整 configured binding builtins（configuration/schema）。
- 修改 `src/channels/plugins/configured-binding-compiler.ts`：调整 configured binding compiler（configuration/schema）。
- 修改 `src/channels/plugins/configured-binding-consumers.ts`：调整 configured binding consumers（configuration/schema）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/channel-abstraction/bindings` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/channel-abstraction/bindings/change-to-test.md` 的验证建议。
