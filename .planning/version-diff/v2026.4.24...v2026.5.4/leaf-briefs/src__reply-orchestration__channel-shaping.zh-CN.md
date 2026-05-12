# src/reply-orchestration/channel-shaping

## 1. 功能结论

**修改**：reply-context cover reply target label、reply-context label current reply target、auto-reply poison inbound dedupe after partial turn failure；**迁移/重构**：trim auto reply type exports、expose SDK test helper subpaths、plugin-sdk publish route helpers、channels share route identity keys；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：CLI/agent 使用者、agent runtime 集成方、消息渠道使用者、渠道插件维护者
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 5

## 3. 功能级详细差异

### 修复 auto-reply poison inbound dedupe after partial turn failure

修复 auto-reply：poison inbound dedupe after partial turn failure

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/chunk.test.ts src/auto-reply/envelope.test.ts src/auto-reply/media-note.test.ts src/auto-reply/reply/inbound-meta.test.ts | Escalate to channel/plugin contract tests when formatting or metadata shaping affects transport payloads. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 reply-context label current reply target

修复 reply-context：label current reply target

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/chunk.test.ts src/auto-reply/envelope.test.ts src/auto-reply/media-note.test.ts src/auto-reply/reply/inbound-meta.test.ts | Escalate to channel/plugin contract tests when formatting or metadata shaping affects transport payloads. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 reply-context cover reply target label

测试覆盖 reply-context：cover reply target label

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/chunk.test.ts src/auto-reply/envelope.test.ts src/auto-reply/media-note.test.ts src/auto-reply/reply/inbound-meta.test.ts | Escalate to channel/plugin contract tests when formatting or metadata shaping affects transport payloads. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 channels share route identity keys

迁移/重构 channels：share route identity keys

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/chunk.test.ts src/auto-reply/envelope.test.ts src/auto-reply/media-note.test.ts src/auto-reply/reply/inbound-meta.test.ts | Escalate to channel/plugin contract tests when formatting or metadata shaping affects transport payloads. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 expose SDK test helper subpaths

迁移/重构 expose SDK test helper subpaths

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/chunk.test.ts src/auto-reply/envelope.test.ts src/auto-reply/media-note.test.ts src/auto-reply/reply/inbound-meta.test.ts | Escalate to channel/plugin contract tests when formatting or metadata shaping affects transport payloads. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 plugin-sdk publish route helpers

迁移/重构 plugin-sdk：publish route helpers

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/chunk.test.ts src/auto-reply/envelope.test.ts src/auto-reply/media-note.test.ts src/auto-reply/reply/inbound-meta.test.ts | Escalate to channel/plugin contract tests when formatting or metadata shaping affects transport payloads. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 trim auto reply type exports

迁移/重构 trim auto reply type exports

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/chunk.test.ts src/auto-reply/envelope.test.ts src/auto-reply/media-note.test.ts src/auto-reply/reply/inbound-meta.test.ts | Escalate to channel/plugin contract tests when formatting or metadata shaping affects transport payloads. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 inbound dedupe regression/contract coverage、inbound meta regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/chunk.test.ts src/auto-reply/envelope.test.ts src/auto-reply/media-note.test.ts src/auto-reply/reply/inbound-meta.test.ts | Escalate to channel/plugin contract tests when formatting or metadata shaping affects transport payloads. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/auto-reply/chunk.test.ts src/auto-reply/envelope.test.ts src/auto-reply/media-note.test.ts src/auto-reply/reply/inbound-meta.test.ts | Escalate to channel/plugin contract tests when formatting or metadata shaping affects transport payloads. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/channel-shaping`
- Changed path count: `5`
- Status counts: `修改 5`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `5` files, `+73` / `-9`

### 归纳依据

- 主要落点：message delivery。
- 新增或暴露的关键符号包括：`parseReplyPayload`。
- 建议优先验证：优先运行 `| pnpm test -- src/auto-reply/chunk.test.ts src/auto-reply/envelope.test.ts src/auto-reply/media-note.test.ts src/auto-reply/reply/inbound-meta.test.ts | Escalate to channel/plugin contract tests when formatting or metadata shaping affects transport payloads. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：test(reply-context): cover reply target label；fix(reply-context): label current reply target；refactor: trim auto reply type exports；refactor: expose SDK test helper subpaths；refactor(plugin-sdk): publish route helpers；refactor(channels): share route identity keys；fix(auto-reply): poison inbound dedupe after partial turn failure

### Dimension evidence

- `maintenance-修复-auto-reply-poison-inbound-dedupe-after-parti` / 修复 auto-reply poison inbound dedupe after partial turn failure:
  - source: `path` [M] `src/auto-reply/envelope.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.ts` — semantic cue
- `maintenance-修复-reply-context-label-current-reply-target` / 修复 reply-context label current reply target:
  - source: `path` [M] `src/auto-reply/envelope.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.ts` — semantic cue
- `tests-docs-测试覆盖-reply-context-cover-reply-target-label` / 测试覆盖 reply-context cover reply target label:
  - source: `path` [M] `src/auto-reply/envelope.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.ts` — semantic cue
- `migration-迁移-重构-channels-share-route-identity-keys` / 迁移/重构 channels share route identity keys:
  - source: `path` [M] `src/auto-reply/envelope.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.ts` — semantic cue
- `migration-迁移-重构-expose-SDK-test-helper-subpaths` / 迁移/重构 expose SDK test helper subpaths:
  - source: `path` [M] `src/auto-reply/envelope.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.ts` — semantic cue
- `migration-迁移-重构-plugin-sdk-publish-route-helpers` / 迁移/重构 plugin-sdk publish route helpers:
  - source: `path` [M] `src/auto-reply/envelope.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.ts` — semantic cue
- `migration-迁移-重构-trim-auto-reply-type-exports` / 迁移/重构 trim auto reply type exports:
  - source: `path` [M] `src/auto-reply/envelope.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/auto-reply/reply/inbound-dedupe.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/inbound-meta.test.ts` — test evidence

### 路径证据

- 修改 `src/auto-reply/envelope.ts`：调整 envelope（message delivery）。
- 修改 `src/auto-reply/reply/inbound-dedupe.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply/inbound-dedupe.ts`：调整 inbound dedupe（message delivery）。
- 修改 `src/auto-reply/reply/inbound-meta.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply/inbound-meta.ts`：调整 inbound meta（message delivery）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/reply-orchestration/channel-shaping` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/reply-orchestration/channel-shaping/change-to-test.md` 的验证建议。
