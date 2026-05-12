# docs/mintlify/platforms

## 1. 功能结论

**文档/生成基线同步**：macos move sessions into context submenu、macos repair stale gateway tls pins、android add authenticated presence alive beacons、add authenticated iOS background presence beacon；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：修改 10

## 3. 功能级详细差异

### 修复 harden ios app build hygiene

文档/生成基线同步记录：修复 harden ios app build hygiene

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 harden mac app computer use docs

文档/生成基线同步记录：修复 harden mac app computer use docs

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 macos repair stale gateway tls pins

文档/生成基线同步记录：修复 macos：repair stale gateway tls pins

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 full-page readability pass on 5 worst-offender pages

文档/生成基线同步记录：文档同步 full-page readability pass on 5 worst-offender pages

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 full-page sentence-case sweep across 6 pages

文档/生成基线同步记录：文档同步 full-page sentence-case sweep across 6 pages

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 sentence-case sweep across 10 more pages

文档/生成基线同步记录：文档同步 sentence-case sweep across 10 more pages

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 sentence-case sweep across 4 more pages

文档/生成基线同步记录：文档同步 sentence-case sweep across 4 more pages

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 add authenticated iOS background presence beacon

文档/生成基线同步记录：新增 add authenticated iOS background presence beacon

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 android add authenticated presence alive beacons

文档/生成基线同步记录：新增 android：add authenticated presence alive beacons

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 迁移/重构 macos move sessions into context submenu

文档/生成基线同步记录：迁移/重构 macos：move sessions into context submenu

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 android docs、digitalocean docs、ios docs、dev setup docs，用于更新读者指引、能力说明或事实基线。

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
- Impact-map dir: `.planning/impact-map/docs/mintlify/platforms`
- Changed path count: `10`
- Status counts: `修改 10`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `10` files, `+118` / `-33`

### 归纳依据

- 主要落点：docs、mobile app runtime。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：refactor(macos): move sessions into context submenu；fix(macos): repair stale gateway tls pins；feat(android): add authenticated presence alive beacons；feat: add authenticated iOS background presence beacon；fix: harden ios app build hygiene；fix: harden mac app computer use docs；docs: sentence-case sweep across 10 more pages；docs: sentence-case sweep across 4 more pages

### Dimension evidence

- `tests-docs-修复-harden-ios-app-build-hygiene` / 修复 harden ios app build hygiene:
  - source: `path` [M] `docs/platforms/ios.md` — semantic cue
- `tests-docs-修复-harden-mac-app-computer-use-docs` / 修复 harden mac app computer use docs:
  - source: `path` [M] `docs/platforms/android.md` — semantic cue
  - source: `path` [M] `docs/platforms/digitalocean.md` — semantic cue
  - source: `path` [M] `docs/platforms/ios.md` — semantic cue
  - source: `path` [M] `docs/platforms/mac/dev-setup.md` — semantic cue
  - source: `path` [M] `docs/platforms/mac/menu-bar.md` — semantic cue
  - source: `path` [M] `docs/platforms/mac/peekaboo.md` — semantic cue
- `tests-docs-修复-macos-repair-stale-gateway-tls-pins` / 修复 macos repair stale gateway tls pins:
  - source: `path` [M] `docs/platforms/macos.md` — semantic cue
- `tests-docs-文档同步-full-page-readability-pass-on-5-worst-offe` / 文档同步 full-page readability pass on 5 worst-offender pages:
  - source: `path` [M] `docs/platforms/android.md`
  - source: `path` [M] `docs/platforms/digitalocean.md`
  - source: `path` [M] `docs/platforms/ios.md`
- `tests-docs-文档同步-full-page-sentence-case-sweep-across-6-pag` / 文档同步 full-page sentence-case sweep across 6 pages:
  - source: `path` [M] `docs/platforms/android.md`
  - source: `path` [M] `docs/platforms/digitalocean.md`
  - source: `path` [M] `docs/platforms/ios.md`
- `tests-docs-文档同步-sentence-case-sweep-across-10-more-pages` / 文档同步 sentence-case sweep across 10 more pages:
  - source: `path` [M] `docs/platforms/android.md`
  - source: `path` [M] `docs/platforms/digitalocean.md`
  - source: `path` [M] `docs/platforms/ios.md`
- `tests-docs-文档同步-sentence-case-sweep-across-4-more-pages` / 文档同步 sentence-case sweep across 4 more pages:
  - source: `path` [M] `docs/platforms/android.md`
  - source: `path` [M] `docs/platforms/digitalocean.md`
  - source: `path` [M] `docs/platforms/ios.md`
- `tests-docs-新增-add-authenticated-iOS-background-presence-be` / 新增 add authenticated iOS background presence beacon:
  - source: `path` [M] `docs/platforms/ios.md` — semantic cue
- `tests-docs-新增-android-add-authenticated-presence-alive-bea` / 新增 android add authenticated presence alive beacons:
  - source: `path` [M] `docs/platforms/android.md` — semantic cue
- `tests-docs-迁移-重构-macos-move-sessions-into-context-submenu` / 迁移/重构 macos move sessions into context submenu:
  - source: `path` [M] `docs/platforms/android.md` — semantic cue
  - source: `path` [M] `docs/platforms/digitalocean.md` — semantic cue
  - source: `path` [M] `docs/platforms/ios.md` — semantic cue
  - source: `path` [M] `docs/platforms/mac/dev-setup.md` — semantic cue
  - source: `path` [M] `docs/platforms/mac/menu-bar.md` — semantic cue
  - source: `path` [M] `docs/platforms/mac/peekaboo.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/platforms/android.md` — docs evidence
  - source: `path` [M] `docs/platforms/digitalocean.md` — docs evidence
  - source: `path` [M] `docs/platforms/ios.md` — docs evidence
  - source: `path` [M] `docs/platforms/mac/dev-setup.md` — docs evidence
  - source: `path` [M] `docs/platforms/mac/menu-bar.md` — docs evidence
  - source: `path` [M] `docs/platforms/mac/peekaboo.md` — docs evidence

### 路径证据

- 修改 `docs/platforms/android.md`：调整 android docs（mobile app runtime）。
- 修改 `docs/platforms/digitalocean.md`：调整 digitalocean docs（docs）。
- 修改 `docs/platforms/ios.md`：调整 ios docs（mobile app runtime）。
- 修改 `docs/platforms/mac/dev-setup.md`：调整 dev setup docs（docs）。
- 修改 `docs/platforms/mac/menu-bar.md`：调整 menu bar docs（docs）。
- 修改 `docs/platforms/mac/peekaboo.md`：调整 peekaboo docs（docs）。
- 修改 `docs/platforms/mac/remote.md`：调整 remote docs（docs）。
- 修改 `docs/platforms/macos.md`：调整 macos docs（docs）。
- 修改 `docs/platforms/oracle.md`：调整 oracle docs（docs）。
- 修改 `docs/platforms/raspberry-pi.md`：调整 raspberry pi docs（docs）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/platforms` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/platforms/change-to-test.md` 的验证建议。
