# src/agent-runtime/schema

## 1. 功能结论

**修改**：mcp normalize invalid object tool properties、normalize MCP empty tool schemas、mcp normalize empty parameter-free tool schema before sending to OpenAI、Fix null params for parameterless tools；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 2

## 3. 功能级详细差异

### 修复 mcp normalize empty parameter-free tool schema before sending to Ope…

修复 mcp：normalize empty parameter-free tool schema before sending to OpenAI

- 验证提示：优先运行 `| pnpm test -- src/agents/schema/clean-for-gemini.test.ts src/agents/schema/clean-for-xai.test.ts | Run pnpm build when schema changes affect published tool surfaces or generated runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 mcp normalize invalid object tool properties

修复 mcp：normalize invalid object tool properties

- 验证提示：优先运行 `| pnpm test -- src/agents/schema/clean-for-gemini.test.ts src/agents/schema/clean-for-xai.test.ts | Run pnpm build when schema changes affect published tool surfaces or generated runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 normalize MCP empty tool schemas

修复 normalize MCP empty tool schemas

- 验证提示：优先运行 `| pnpm test -- src/agents/schema/clean-for-gemini.test.ts src/agents/schema/clean-for-xai.test.ts | Run pnpm build when schema changes affect published tool surfaces or generated runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修改 Fix null params for parameterless tools

修改 Fix null params for parameterless tools

- 验证提示：优先运行 `| pnpm test -- src/agents/schema/clean-for-gemini.test.ts src/agents/schema/clean-for-xai.test.ts | Run pnpm build when schema changes affect published tool surfaces or generated runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 pi tools.schema regression/contract coverage、pi tools.schema，需要按契约边界审查。

- 验证提示：优先运行 `| pnpm test -- src/agents/schema/clean-for-gemini.test.ts src/agents/schema/clean-for-xai.test.ts | Run pnpm build when schema changes affect published tool surfaces or generated runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 pi tools.schema regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/agents/schema/clean-for-gemini.test.ts src/agents/schema/clean-for-xai.test.ts | Run pnpm build when schema changes affect published tool surfaces or generated runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/agents/schema/clean-for-gemini.test.ts src/agents/schema/clean-for-xai.test.ts | Run pnpm build when schema changes affect published tool surfaces or generated runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/schema`
- Changed path count: `2`
- Status counts: `修改 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `2` files, `+299` / `-1`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`TEST_USAGE`, `isObjectSchemaWithNoRequiredParams`, `schemaHasRequiredParams`, `addEmptyObjectArgumentPreparation`。
- 建议优先验证：优先运行 `| pnpm test -- src/agents/schema/clean-for-gemini.test.ts src/agents/schema/clean-for-xai.test.ts | Run pnpm build when schema changes affect published tool surfaces or generated runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix(mcp): normalize invalid object tool properties；fix: normalize MCP empty tool schemas；fix(mcp): normalize empty parameter-free tool schema before sending to OpenAI；Fix null params for parameterless tools

### Dimension evidence

- `public-contract-修复-mcp-normalize-empty-parameter-free-tool-sche` / 修复 mcp normalize empty parameter-free tool schema before sending to Ope…:
  - source: `path` [M] `src/agents/pi-tools.schema.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-tools.schema.ts` — semantic cue
- `maintenance-修复-mcp-normalize-invalid-object-tool-properties` / 修复 mcp normalize invalid object tool properties:
  - source: `path` [M] `src/agents/pi-tools.schema.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-tools.schema.ts` — semantic cue
- `public-contract-修复-normalize-MCP-empty-tool-schemas` / 修复 normalize MCP empty tool schemas:
  - source: `path` [M] `src/agents/pi-tools.schema.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-tools.schema.ts` — semantic cue
- `maintenance-修改-Fix-null-params-for-parameterless-tools` / 修改 Fix null params for parameterless tools:
  - source: `path` [M] `src/agents/pi-tools.schema.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-tools.schema.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/agents/pi-tools.schema.test.ts` — contract evidence
  - source: `path` [M] `src/agents/pi-tools.schema.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/pi-tools.schema.test.ts` — test evidence

### 路径证据

- 修改 `src/agents/pi-tools.schema.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-tools.schema.ts`：调整 pi tools.schema（agent runtime）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/schema` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/schema/change-to-test.md` 的验证建议。
