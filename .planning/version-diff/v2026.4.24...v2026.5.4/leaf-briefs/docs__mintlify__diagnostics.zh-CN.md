# docs/mintlify/diagnostics

## 1. 功能结论

**文档/生成基线同步**：brave add http diagnostics flag、honor config timeline diagnostics、gate diagnostics timeline by flag；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：修改 1

## 3. 功能级详细差异

### 修复 gate diagnostics timeline by flag

文档/生成基线同步记录：修复 gate diagnostics timeline by flag

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 honor config timeline diagnostics

文档/生成基线同步记录：修复 honor config timeline diagnostics

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 brave add http diagnostics flag

文档/生成基线同步记录：新增 brave：add http diagnostics flag

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 flags docs，用于更新读者指引、能力说明或事实基线。

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
- Impact-map dir: `.planning/impact-map/docs/mintlify/diagnostics`
- Changed path count: `1`
- Status counts: `修改 1`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `1` files, `+45` / `-1`

### 归纳依据

- 主要落点：docs。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：feat(brave): add http diagnostics flag；fix: honor config timeline diagnostics；fix: gate diagnostics timeline by flag

### Dimension evidence

- `tests-docs-修复-gate-diagnostics-timeline-by-flag` / 修复 gate diagnostics timeline by flag:
  - source: `path` [M] `docs/diagnostics/flags.md` — semantic cue
- `tests-docs-修复-honor-config-timeline-diagnostics` / 修复 honor config timeline diagnostics:
  - source: `path` [M] `docs/diagnostics/flags.md` — semantic cue
- `tests-docs-新增-brave-add-http-diagnostics-flag` / 新增 brave add http diagnostics flag:
  - source: `path` [M] `docs/diagnostics/flags.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/diagnostics/flags.md` — docs evidence

### 路径证据

- 修改 `docs/diagnostics/flags.md`：调整 flags docs（docs）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/diagnostics` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/diagnostics/change-to-test.md` 的验证建议。
