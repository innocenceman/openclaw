# docs/mintlify/reference

## 1. 功能结论

**文档/生成基线同步**：parallelize release publish workflows、release speed up focused release reruns、openai-codex match codex replay identity、openai-codex avoid stale Responses replay state；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：新增 3、修改 13

## 3. 功能级详细差异

### 修复 openai-codex avoid stale Responses replay state

文档/生成基线同步记录：修复 openai-codex：avoid stale Responses replay state

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 openai-codex match codex replay identity

文档/生成基线同步记录：修复 openai-codex：match codex replay identity

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 secrets stabilize credential matrix docs

文档/生成基线同步记录：修复 secrets：stabilize credential matrix docs

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修改 fix full release validation gates

文档/生成基线同步记录：修改 fix full release validation gates

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修改 parallelize release publish workflows

文档/生成基线同步记录：修改 parallelize release publish workflows

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修改 publish ClawHub plugins as ClawPacks

文档/生成基线同步记录：修改 publish ClawHub plugins as ClawPacks

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修改 release speed up focused release reruns

文档/生成基线同步记录：修改 release：speed up focused release reruns

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修改 release split release soak validation

文档/生成基线同步记录：修改 release：split release soak validation

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试覆盖 package cover stale source plugin shadows

文档/生成基线同步记录：测试覆盖 package：cover stale source plugin shadows

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 维护调整 improve beta smoke release tooling

文档/生成基线同步记录：维护调整 improve beta smoke release tooling

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 AGENTS.default docs、RELEASING docs、api usage costs docs、application modernization plan docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/reference`
- Changed path count: `16`
- Status counts: `新增 3、修改 13`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `16` files, `+1924` / `-333`

### 归纳依据

- 主要落点：docs、auth/pairing/security behavior、configuration/schema、session/state handling。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：ci: parallelize release publish workflows；ci(release): speed up focused release reruns；fix(openai-codex): match codex replay identity；fix(openai-codex): avoid stale Responses replay state；ci(release): split release soak validation；test(package): cover stale source plugin shadows；chore: improve beta smoke release tooling；ci: publish ClawHub plugins as ClawPacks

### Dimension evidence

- `tests-docs-修复-openai-codex-avoid-stale-Responses-replay-st` / 修复 openai-codex avoid stale Responses replay state:
  - source: `path` [A] `docs/reference/application-modernization-plan.md`
  - source: `path` [A] `docs/reference/full-release-validation.md`
  - source: `path` [A] `docs/reference/openclaw-sdk-api-design.md`
  - source: `path` [M] `docs/reference/AGENTS.default.md`
  - source: `path` [M] `docs/reference/RELEASING.md`
  - source: `path` [M] `docs/reference/api-usage-costs.md`
- `tests-docs-修复-openai-codex-match-codex-replay-identity` / 修复 openai-codex match codex replay identity:
  - source: `path` [A] `docs/reference/application-modernization-plan.md`
  - source: `path` [A] `docs/reference/full-release-validation.md`
  - source: `path` [A] `docs/reference/openclaw-sdk-api-design.md`
  - source: `path` [M] `docs/reference/AGENTS.default.md`
  - source: `path` [M] `docs/reference/RELEASING.md`
  - source: `path` [M] `docs/reference/api-usage-costs.md`
- `tests-docs-修复-secrets-stabilize-credential-matrix-docs` / 修复 secrets stabilize credential matrix docs:
  - source: `path` [M] `docs/reference/AGENTS.default.md` — semantic cue
  - source: `path` [M] `docs/reference/RELEASING.md` — semantic cue
  - source: `path` [M] `docs/reference/api-usage-costs.md` — semantic cue
  - source: `path` [M] `docs/reference/application-modernization-plan.md` — semantic cue
  - source: `path` [M] `docs/reference/full-release-validation.md` — semantic cue
  - source: `path` [M] `docs/reference/memory-config.md` — semantic cue
- `tests-docs-修改-fix-full-release-validation-gates` / 修改 fix full release validation gates:
  - source: `path` [M] `docs/reference/full-release-validation.md` — semantic cue
- `tests-docs-修改-parallelize-release-publish-workflows` / 修改 parallelize release publish workflows:
  - source: `path` [M] `docs/reference/full-release-validation.md` — semantic cue
- `tests-docs-修改-publish-ClawHub-plugins-as-ClawPacks` / 修改 publish ClawHub plugins as ClawPacks:
  - source: `path` [M] `docs/reference/RELEASING.md` — semantic cue
  - source: `path` [M] `docs/reference/full-release-validation.md` — semantic cue
- `tests-docs-修改-release-speed-up-focused-release-reruns` / 修改 release speed up focused release reruns:
  - source: `path` [M] `docs/reference/full-release-validation.md` — semantic cue
  - source: `path` [M] `docs/reference/secretref-user-supplied-credentials-matrix.json` — semantic cue
- `tests-docs-修改-release-split-release-soak-validation` / 修改 release split release soak validation:
  - source: `path` [M] `docs/reference/full-release-validation.md` — semantic cue
- `tests-docs-测试覆盖-package-cover-stale-source-plugin-shadows` / 测试覆盖 package cover stale source plugin shadows:
  - source: `path` [A] `docs/reference/application-modernization-plan.md`
  - source: `path` [A] `docs/reference/full-release-validation.md`
  - source: `path` [A] `docs/reference/openclaw-sdk-api-design.md`
  - source: `path` [M] `docs/reference/AGENTS.default.md`
  - source: `path` [M] `docs/reference/RELEASING.md`
  - source: `path` [M] `docs/reference/api-usage-costs.md`
- `tests-docs-维护调整-improve-beta-smoke-release-tooling` / 维护调整 improve beta smoke release tooling:
  - source: `path` [M] `docs/reference/full-release-validation.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/reference/AGENTS.default.md` — docs evidence
  - source: `path` [M] `docs/reference/RELEASING.md` — docs evidence
  - source: `path` [M] `docs/reference/api-usage-costs.md` — docs evidence
  - source: `path` [M] `docs/reference/application-modernization-plan.md` — docs evidence
  - source: `path` [M] `docs/reference/full-release-validation.md` — docs evidence
  - source: `path` [M] `docs/reference/memory-config.md` — docs evidence

### 路径证据

- 新增 `docs/reference/application-modernization-plan.md`：调整 application modernization plan docs（docs）。
- 新增 `docs/reference/full-release-validation.md`：调整 full release validation docs（docs）。
- 新增 `docs/reference/openclaw-sdk-api-design.md`：调整 openclaw sdk api design docs（docs）。
- 修改 `docs/reference/AGENTS.default.md`：调整 AGENTS.default docs（docs）。
- 修改 `docs/reference/RELEASING.md`：调整 RELEASING docs（docs）。
- 修改 `docs/reference/api-usage-costs.md`：调整 api usage costs docs（docs）。
- 修改 `docs/reference/memory-config.md`：调整 memory config docs（configuration/schema）。
- 修改 `docs/reference/rich-output-protocol.md`：调整 rich output protocol docs（docs）。
- 修改 `docs/reference/secretref-credential-surface.md`：调整 secretref credential surface docs（auth/pairing/security behavior）。
- 修改 `docs/reference/secretref-user-supplied-credentials-matrix.json`：调整 secretref user supplied credentials matrix（auth/pairing/security behavior）。
- 修改 `docs/reference/session-management-compaction.md`：调整 session management compaction docs（session/state handling）。
- 修改 `docs/reference/templates/AGENTS.md`：调整 AGENTS docs（docs）。
- 修改 `docs/reference/test.md`：调整 test docs（docs）。
- 修改 `docs/reference/token-use.md`：调整 token use docs（docs）。
- 修改 `docs/reference/transcript-hygiene.md`：调整 transcript hygiene docs（docs）。
- 其余 1 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/reference` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/reference/change-to-test.md` 的验证建议。
