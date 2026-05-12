# src/reply-orchestration/export-html

## 1. 功能结论

**修改**：Found one regression in the exported transcript mobile sidebar tr、ui align sidebar trigger affordances、export fix broken template placeholders in session export HTML；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 3

## 3. 功能级详细差异

### 修复 Found one regression in the exported transcript mobile sidebar tr

修复 Found one regression in the exported transcript mobile sidebar tr

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/export-html/template.security.test.ts | Escalate to docs/UI review only when exported HTML semantics or static assets change broadly. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 export fix broken template placeholders in session export HTML

修复 export：fix broken template placeholders in session export HTML

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/export-html/template.security.test.ts | Escalate to docs/UI review only when exported HTML semantics or static assets change broadly. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 ui align sidebar trigger affordances

修复 ui：align sidebar trigger affordances

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/export-html/template.security.test.ts | Escalate to docs/UI review only when exported HTML semantics or static assets change broadly. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 template.security regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/reply/export-html/template.security.test.ts | Escalate to docs/UI review only when exported HTML semantics or static assets change broadly. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/auto-reply/reply/export-html/template.security.test.ts | Escalate to docs/UI review only when exported HTML semantics or static assets change broadly. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/export-html`
- Changed path count: `3`
- Status counts: `修改 3`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `3` files, `+140` / `-50`

### 归纳依据

- 主要落点：message delivery。
- 新增或暴露的关键符号包括：`selectorSpecificity`, `compareSpecificity`, `firstSelectorForDisplay`。
- 建议优先验证：优先运行 `| pnpm test -- src/auto-reply/reply/export-html/template.security.test.ts | Escalate to docs/UI review only when exported HTML semantics or static assets change broadly. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix: Found one regression in the exported transcript mobile sidebar tr；fix(ui): align sidebar trigger affordances；fix(export): fix broken template placeholders in session export HTML

### Dimension evidence

- `maintenance-修复-Found-one-regression-in-the-exported-transcr` / 修复 Found one regression in the exported transcript mobile sidebar tr:
  - source: `path` [M] `src/auto-reply/reply/export-html/template.css`
  - source: `path` [M] `src/auto-reply/reply/export-html/template.html`
  - source: `path` [M] `src/auto-reply/reply/export-html/template.security.test.ts`
- `maintenance-修复-export-fix-broken-template-placeholders-in-s` / 修复 export fix broken template placeholders in session export HTML:
  - source: `path` [M] `src/auto-reply/reply/export-html/template.css` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/export-html/template.html` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/export-html/template.security.test.ts` — semantic cue
- `user-visible-修复-ui-align-sidebar-trigger-affordances` / 修复 ui align sidebar trigger affordances:
  - source: `path` [M] `src/auto-reply/reply/export-html/template.css`
  - source: `path` [M] `src/auto-reply/reply/export-html/template.html`
  - source: `path` [M] `src/auto-reply/reply/export-html/template.security.test.ts`
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/auto-reply/reply/export-html/template.security.test.ts` — test evidence

### 路径证据

- 修改 `src/auto-reply/reply/export-html/template.css`：调整 template（message delivery）。
- 修改 `src/auto-reply/reply/export-html/template.html`：调整 template（message delivery）。
- 修改 `src/auto-reply/reply/export-html/template.security.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/reply-orchestration/export-html` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/reply-orchestration/export-html/change-to-test.md` 的验证建议。
