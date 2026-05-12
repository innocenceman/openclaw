# src/infra-outbound-delivery/formatting

## 1. 功能结论

**修改**：security remediate CodeQL alerts、outbound strip internal runtime scaffolding、media gate markdown image extraction by channel；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 4

## 3. 功能级详细差异

### 修复 media gate markdown image extraction by channel

修复 media：gate markdown image extraction by channel

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/envelope.test.ts src/infra/outbound/format.test.ts src/infra/outbound/payloads.test.ts src/infra/outbound/sanitize-text.test.ts | Escalate to channel payload tests when formatting changes affect rendered outbound content. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 outbound strip internal runtime scaffolding

修复 outbound：strip internal runtime scaffolding

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/envelope.test.ts src/infra/outbound/format.test.ts src/infra/outbound/payloads.test.ts src/infra/outbound/sanitize-text.test.ts | Escalate to channel payload tests when formatting changes affect rendered outbound content. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 security remediate CodeQL alerts

修复 security：remediate CodeQL alerts

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/envelope.test.ts src/infra/outbound/format.test.ts src/infra/outbound/payloads.test.ts src/infra/outbound/sanitize-text.test.ts | Escalate to channel payload tests when formatting changes affect rendered outbound content. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 payloads regression/contract coverage、sanitize text regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/infra/outbound/envelope.test.ts src/infra/outbound/format.test.ts src/infra/outbound/payloads.test.ts src/infra/outbound/sanitize-text.test.ts | Escalate to channel payload tests when formatting changes affect rendered outbound content. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/infra/outbound/envelope.test.ts src/infra/outbound/format.test.ts src/infra/outbound/payloads.test.ts src/infra/outbound/sanitize-text.test.ts | Escalate to channel payload tests when formatting changes affect rendered outbound content. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/formatting`
- Changed path count: `4`
- Status counts: `修改 4`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `4` files, `+142` / `-28`

### 归纳依据

- 主要落点：tests/contracts、implementation。
- 新增或暴露的关键符号包括：`INTERNAL_RUNTIME_SCAFFOLDING_TAGS`, `INTERNAL_RUNTIME_SCAFFOLDING_TAG_PATTERN`, `INTERNAL_RUNTIME_SCAFFOLDING_BLOCK_RE`, `INTERNAL_RUNTIME_SCAFFOLDING_SELF_CLOSING_RE`, `INTERNAL_RUNTIME_SCAFFOLDING_TAG_RE`, `HTML_TAG_RE`, `stripRemainingHtmlTags`, `stripInternalRuntimeScaffolding`。
- 建议优先验证：优先运行 `| pnpm test -- src/infra/outbound/envelope.test.ts src/infra/outbound/format.test.ts src/infra/outbound/payloads.test.ts src/infra/outbound/sanitize-text.test.ts | Escalate to channel payload tests when formatting changes affect rendered outbound content. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix(security): remediate CodeQL alerts；fix(outbound): strip internal runtime scaffolding；fix(media): gate markdown image extraction by channel

### Dimension evidence

- `maintenance-修复-media-gate-markdown-image-extraction-by-chan` / 修复 media gate markdown image extraction by channel:
  - source: `path` [M] `src/infra/outbound/payloads.test.ts`
  - source: `path` [M] `src/infra/outbound/payloads.ts`
  - source: `path` [M] `src/infra/outbound/sanitize-text.test.ts`
- `runtime-behavior-修复-outbound-strip-internal-runtime-scaffolding` / 修复 outbound strip internal runtime scaffolding:
  - source: `path` [M] `src/infra/outbound/payloads.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/payloads.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/sanitize-text.test.ts` — semantic cue
  - source: `path` [M] `src/infra/outbound/sanitize-text.ts` — semantic cue
- `maintenance-修复-security-remediate-CodeQL-alerts` / 修复 security remediate CodeQL alerts:
  - source: `path` [M] `src/infra/outbound/payloads.test.ts`
  - source: `path` [M] `src/infra/outbound/payloads.ts`
  - source: `path` [M] `src/infra/outbound/sanitize-text.test.ts`
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/infra/outbound/payloads.test.ts` — test evidence
  - source: `path` [M] `src/infra/outbound/sanitize-text.test.ts` — test evidence

### 路径证据

- 修改 `src/infra/outbound/payloads.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/outbound/payloads.ts`：调整 payloads（implementation）。
- 修改 `src/infra/outbound/sanitize-text.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/outbound/sanitize-text.ts`：调整 sanitize text（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/infra-outbound-delivery/formatting` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/infra-outbound-delivery/formatting/change-to-test.md` 的验证建议。
