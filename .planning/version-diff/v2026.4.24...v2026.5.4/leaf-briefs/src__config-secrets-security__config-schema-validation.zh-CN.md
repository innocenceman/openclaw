# src/config-secrets-security/config-schema-validation

## 1. 功能结论

**新增**：agents wire post-compaction loop guard into pi-embedded-runner、agents add post-compaction loop guard module + config；**修改**：sandbox support Windows drive-letter bind sources、config refresh post-compaction guard labels、agents honor scoped post-compaction guard config、agents make post-compaction guard config valid + observation trim-resilient；**迁移/重构**：agents use loop detection switch for post-compaction guard；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Gateway 使用者、配置/安全相关调用方
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 7、修改 51

## 3. 功能级详细差异

### 修复 agents address review feedback on post-compaction loop guard

修复 agents：address review feedback on post-compaction loop guard

- 验证提示：优先运行 `| pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 agents honor scoped post-compaction guard config

修复 agents：honor scoped post-compaction guard config

- 验证提示：优先运行 `| pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 agents make post-compaction guard config valid + observation trim-re…

修复 agents：make post-compaction guard config valid + observation trim-resilient

- 验证提示：优先运行 `| pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 agents mediate async media completions

修复 agents：mediate async media completions

- 验证提示：优先运行 `| pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins default bundled discovery to allowlist

修复 plugins：default bundled discovery to allowlist

- 验证提示：优先运行 `| pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 sandbox support Windows drive-letter bind sources

修复 sandbox：support Windows drive-letter bind sources

- 验证提示：优先运行 `| pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 新增 agents add post-compaction loop guard module + config

新增 agents：add post-compaction loop guard module + config

- 验证提示：优先运行 `| pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 新增 agents wire post-compaction loop guard into pi-embedded-runner

新增 agents：wire post-compaction loop guard into pi-embedded-runner

- 验证提示：优先运行 `| pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 维护调整 config refresh post-compaction guard labels

维护调整 config：refresh post-compaction guard labels

- 验证提示：优先运行 `| pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 agents use loop detection switch for post-compaction guard

迁移/重构 agents：use loop detection switch for post-compaction guard

- 验证提示：优先运行 `| pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 doc baseline.integration regression/contract coverage、doc baseline、schema.base.generated regression/contract coverage、schema.base.generated，需要按契约边界审查。

- 验证提示：优先运行 `| pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 doc baseline.integration regression/contract coverage、schema.base.generated regression/contract coverage、schema.help.quality regression/contract coverage、schema.hints regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/config-schema-validation`
- Changed path count: `58`
- Status counts: `新增 7、修改 51`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `58` files, `+3622` / `-918`

### 归纳依据

- 主要落点：configuration/schema、session/state handling、gateway runtime、agent runtime。
- 新增或暴露的关键符号包括：`collectBundledChannelConfigs`, `splitConfigDocBaselineEntries`, `computeConfigBaselineHashFileContent`。
- 建议优先验证：优先运行 `| pnpm test -- src/config/schema.base.generated.test.ts src/config/schema.help.quality.test.ts src/config/doc-baseline.test.ts src/config/config.schema-regressions.test.ts | Run pnpm config:docs:check and pnpm build when schema/help/public config surface changes. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix(sandbox): support Windows drive-letter bind sources；refactor(agents): use loop detection switch for post-compaction guard；chore(config): refresh post-compaction guard labels；fix(agents): honor scoped post-compaction guard config；fix(agents): make post-compaction guard config valid + observation trim-resilient；feat(agents): wire post-compaction loop guard into pi-embedded-runner；fix(agents): address review feedback on post-compaction loop guard；feat(agents): add post-compaction loop guard module + config

### Dimension evidence

- `maintenance-修复-agents-address-review-feedback-on-post-compa` / 修复 agents address review feedback on post-compaction loop guard:
  - source: `path` [M] `src/config/doc-baseline.integration.test.ts` — semantic cue
  - source: `path` [M] `src/config/doc-baseline.runtime.ts` — semantic cue
  - source: `path` [M] `src/config/doc-baseline.ts` — semantic cue
  - source: `path` [M] `src/config/schema.base.generated.test.ts` — semantic cue
  - source: `path` [M] `src/config/schema.base.generated.ts` — semantic cue
  - source: `path` [M] `src/config/schema.help.quality.test.ts` — semantic cue
- `maintenance-修复-agents-honor-scoped-post-compaction-guard-co` / 修复 agents honor scoped post-compaction guard config:
  - source: `path` [M] `src/config/doc-baseline.integration.test.ts` — semantic cue
  - source: `path` [M] `src/config/doc-baseline.runtime.ts` — semantic cue
  - source: `path` [M] `src/config/doc-baseline.ts` — semantic cue
  - source: `path` [M] `src/config/schema.base.generated.test.ts` — semantic cue
  - source: `path` [M] `src/config/schema.base.generated.ts` — semantic cue
  - source: `path` [M] `src/config/schema.help.quality.test.ts` — semantic cue
- `maintenance-修复-agents-make-post-compaction-guard-config-val` / 修复 agents make post-compaction guard config valid + observation trim-re…:
  - source: `path` [M] `src/config/doc-baseline.integration.test.ts` — semantic cue
  - source: `path` [M] `src/config/doc-baseline.runtime.ts` — semantic cue
  - source: `path` [M] `src/config/doc-baseline.ts` — semantic cue
  - source: `path` [M] `src/config/schema.base.generated.test.ts` — semantic cue
  - source: `path` [M] `src/config/schema.base.generated.ts` — semantic cue
  - source: `path` [M] `src/config/schema.help.quality.test.ts` — semantic cue
- `maintenance-修复-agents-mediate-async-media-completions` / 修复 agents mediate async media completions:
  - source: `path` [M] `src/config/types.agents-shared.ts` — semantic cue
  - source: `path` [M] `src/config/types.agents.ts` — semantic cue
  - source: `path` [M] `src/config/zod-schema.agents.ts` — semantic cue
- `maintenance-修复-plugins-default-bundled-discovery-to-allowli` / 修复 plugins default bundled discovery to allowlist:
  - source: `path` [M] `src/config/types.agent-defaults.ts` — semantic cue
  - source: `path` [M] `src/config/types.crestodian.ts` — semantic cue
  - source: `path` [M] `src/config/types.plugins.ts` — semantic cue
  - source: `path` [M] `src/config/types.tools.ts` — semantic cue
  - source: `path` [M] `src/config/zod-schema.agent-defaults.test.ts` — semantic cue
  - source: `path` [M] `src/config/zod-schema.agent-defaults.ts` — semantic cue
- `maintenance-修复-sandbox-support-Windows-drive-letter-bind-so` / 修复 sandbox support Windows drive-letter bind sources:
  - source: `path` [M] `src/config/types.sandbox.ts` — semantic cue
- `maintenance-新增-agents-add-post-compaction-loop-guard-module` / 新增 agents add post-compaction loop guard module + config:
  - source: `path` [M] `src/config/doc-baseline.integration.test.ts` — semantic cue
  - source: `path` [M] `src/config/doc-baseline.runtime.ts` — semantic cue
  - source: `path` [M] `src/config/doc-baseline.ts` — semantic cue
  - source: `path` [M] `src/config/schema.base.generated.test.ts` — semantic cue
  - source: `path` [M] `src/config/schema.base.generated.ts` — semantic cue
  - source: `path` [M] `src/config/schema.help.quality.test.ts` — semantic cue
- `maintenance-新增-agents-wire-post-compaction-loop-guard-into` / 新增 agents wire post-compaction loop guard into pi-embedded-runner:
  - source: `path` [M] `src/config/types.agents-shared.ts` — semantic cue
  - source: `path` [M] `src/config/types.agents.ts` — semantic cue
  - source: `path` [M] `src/config/zod-schema.agents.ts` — semantic cue
  - source: `path` [M] `src/config/zod-schema.post-compaction-guard.test.ts` — semantic cue
- `maintenance-维护调整-config-refresh-post-compaction-guard-labels` / 维护调整 config refresh post-compaction guard labels:
  - source: `path` [M] `src/config/doc-baseline.integration.test.ts` — semantic cue
  - source: `path` [M] `src/config/doc-baseline.runtime.ts` — semantic cue
  - source: `path` [M] `src/config/doc-baseline.ts` — semantic cue
  - source: `path` [M] `src/config/schema.base.generated.test.ts` — semantic cue
  - source: `path` [M] `src/config/schema.base.generated.ts` — semantic cue
  - source: `path` [M] `src/config/schema.help.quality.test.ts` — semantic cue
- `migration-迁移-重构-agents-use-loop-detection-switch-for-post` / 迁移/重构 agents use loop detection switch for post-compaction guard:
  - source: `path` [M] `src/config/doc-baseline.integration.test.ts` — semantic cue
  - source: `path` [M] `src/config/doc-baseline.runtime.ts` — semantic cue
  - source: `path` [M] `src/config/doc-baseline.ts` — semantic cue
  - source: `path` [M] `src/config/schema.base.generated.test.ts` — semantic cue
  - source: `path` [M] `src/config/schema.base.generated.ts` — semantic cue
  - source: `path` [M] `src/config/schema.help.quality.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/config/doc-baseline.integration.test.ts` — contract evidence
  - source: `path` [M] `src/config/doc-baseline.runtime.ts` — contract evidence
  - source: `path` [M] `src/config/doc-baseline.ts` — contract evidence
  - source: `path` [M] `src/config/schema.base.generated.test.ts` — contract evidence
  - source: `path` [M] `src/config/schema.base.generated.ts` — contract evidence
  - source: `path` [M] `src/config/schema.help.quality.test.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/config/doc-baseline.integration.test.ts` — test evidence
  - source: `path` [M] `src/config/schema.base.generated.test.ts` — test evidence
  - source: `path` [M] `src/config/schema.help.quality.test.ts` — test evidence
  - source: `path` [M] `src/config/schema.hints.test.ts` — test evidence
  - source: `path` [M] `src/config/schema.test.ts` — test evidence
  - source: `path` [M] `src/config/zod-schema.agent-defaults.test.ts` — test evidence

### 路径证据

- 新增 `src/config/types.access-groups.ts`：调整 types.access groups（configuration/schema）。
- 新增 `src/config/types.commitments.ts`：调整 types.commitments（configuration/schema）。
- 新增 `src/config/types.crestodian.ts`：调整 types.crestodian（configuration/schema）。
- 新增 `src/config/zod-schema.post-compaction-guard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/config/zod-schema.proxy.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/config/zod-schema.proxy.ts`：调整 zod schema.proxy（configuration/schema）。
- 新增 `src/config/zod-schema.visible-replies.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/config/doc-baseline.integration.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/config/doc-baseline.runtime.ts`：调整 doc baseline（configuration/schema）。
- 修改 `src/config/doc-baseline.ts`：调整 doc baseline（configuration/schema）。
- 修改 `src/config/schema.base.generated.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/config/schema.base.generated.ts`：调整 schema.base.generated（configuration/schema）。
- 修改 `src/config/schema.help.quality.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/config/schema.help.ts`：调整 schema.help（configuration/schema）。
- 修改 `src/config/schema.hints.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/config/schema.labels.ts`：调整 schema.labels（configuration/schema）。
- 修改 `src/config/schema.tags.ts`：调整 schema.tags（configuration/schema）。
- 修改 `src/config/schema.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/config/schema.ts`：调整 schema（configuration/schema）。
- 其余 39 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/config-secrets-security/config-schema-validation` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/config-schema-validation/change-to-test.md` 的验证建议。
