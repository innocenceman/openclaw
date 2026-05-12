# docs/mintlify/cli

## 1. 功能结论

**文档/生成基线同步**：doctor clarify configured plugin repair、cli document gateway restart --safe in command options、dashboard guide manual token auth fallback、cli bound sessions list output；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：新增 3、修改 38

## 3. 功能级详细差异

### 修复 cli bound sessions list output

文档/生成基线同步记录：修复 cli：bound sessions list output

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 dashboard guide manual token auth fallback

文档/生成基线同步记录：修复 dashboard：guide manual token auth fallback

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 gateway add safe restart coordinator

文档/生成基线同步记录：修复 gateway：add safe restart coordinator

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 plugins fall back from invalid beta npm updates

文档/生成基线同步记录：修复 plugins：fall back from invalid beta npm updates

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 proxy direct APNs HTTP2 sessions

文档/生成基线同步记录：修复 proxy direct APNs HTTP2 sessions

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 repair bundled plugin shadow cleanup

文档/生成基线同步记录：修复 repair bundled plugin shadow cleanup

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 repair stale managed plugin shadows

文档/生成基线同步记录：修复 repair stale managed plugin shadows

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 cli document gateway restart --safe in command options

文档/生成基线同步记录：文档同步 cli：document gateway restart --safe in command options

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 doctor clarify configured plugin repair

文档/生成基线同步记录：文档同步 doctor：clarify configured plugin repair

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 models list auth profiles

文档/生成基线同步记录：新增 models：list auth profiles

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 agent docs、agents docs、backup docs、browser docs，用于更新读者指引、能力说明或事实基线。

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
- Impact-map dir: `.planning/impact-map/docs/mintlify/cli`
- Changed path count: `41`
- Status counts: `新增 3、修改 38`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `41` files, `+2519` / `-1080`

### 归纳依据

- 主要落点：CLI/command behavior、gateway runtime。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：docs(doctor): clarify configured plugin repair；docs(cli): document gateway restart --safe in command options；fix(dashboard): guide manual token auth fallback；fix(cli): bound sessions list output；fix(plugins): fall back from invalid beta npm updates；fix(gateway): add safe restart coordinator；fix: proxy direct APNs HTTP2 sessions；feat(models): list auth profiles

### Dimension evidence

- `tests-docs-修复-cli-bound-sessions-list-output` / 修复 cli bound sessions list output:
  - source: `path` [M] `docs/cli/agent.md` — semantic cue
  - source: `path` [M] `docs/cli/agents.md` — semantic cue
  - source: `path` [M] `docs/cli/backup.md` — semantic cue
  - source: `path` [M] `docs/cli/browser.md` — semantic cue
  - source: `path` [M] `docs/cli/channels.md` — semantic cue
  - source: `path` [M] `docs/cli/commitments.md` — semantic cue
- `tests-docs-修复-dashboard-guide-manual-token-auth-fallback` / 修复 dashboard guide manual token auth fallback:
  - source: `path` [M] `docs/cli/dashboard.md` — semantic cue
- `tests-docs-修复-gateway-add-safe-restart-coordinator` / 修复 gateway add safe restart coordinator:
  - source: `path` [M] `docs/cli/gateway.md` — semantic cue
- `tests-docs-修复-plugins-fall-back-from-invalid-beta-npm-upda` / 修复 plugins fall back from invalid beta npm updates:
  - source: `path` [M] `docs/cli/backup.md` — semantic cue
  - source: `path` [M] `docs/cli/plugins.md` — semantic cue
- `tests-docs-修复-proxy-direct-APNs-HTTP2-sessions` / 修复 proxy direct APNs HTTP2 sessions:
  - source: `path` [M] `docs/cli/directory.md` — semantic cue
  - source: `path` [M] `docs/cli/proxy.md` — semantic cue
  - source: `path` [M] `docs/cli/sessions.md` — semantic cue
- `tests-docs-修复-repair-bundled-plugin-shadow-cleanup` / 修复 repair bundled plugin shadow cleanup:
  - source: `path` [M] `docs/cli/plugins.md` — semantic cue
- `tests-docs-修复-repair-stale-managed-plugin-shadows` / 修复 repair stale managed plugin shadows:
  - source: `path` [M] `docs/cli/plugins.md` — semantic cue
- `tests-docs-文档同步-cli-document-gateway-restart-safe-in-com` / 文档同步 cli document gateway restart --safe in command options:
  - source: `path` [M] `docs/cli/agent.md` — semantic cue
  - source: `path` [M] `docs/cli/agents.md` — semantic cue
  - source: `path` [M] `docs/cli/backup.md` — semantic cue
  - source: `path` [M] `docs/cli/browser.md` — semantic cue
  - source: `path` [M] `docs/cli/channels.md` — semantic cue
  - source: `path` [M] `docs/cli/commitments.md` — semantic cue
- `tests-docs-文档同步-doctor-clarify-configured-plugin-repair` / 文档同步 doctor clarify configured plugin repair:
  - source: `path` [M] `docs/cli/doctor.md` — semantic cue
  - source: `path` [M] `docs/cli/plugins.md` — semantic cue
- `tests-docs-新增-models-list-auth-profiles` / 新增 models list auth profiles:
  - source: `path` [M] `docs/cli/models.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/cli/agent.md` — docs evidence
  - source: `path` [M] `docs/cli/agents.md` — docs evidence
  - source: `path` [M] `docs/cli/backup.md` — docs evidence
  - source: `path` [M] `docs/cli/browser.md` — docs evidence
  - source: `path` [M] `docs/cli/channels.md` — docs evidence
  - source: `path` [M] `docs/cli/commitments.md` — docs evidence

### 路径证据

- 新增 `docs/cli/commitments.md`：调整 commitments docs（CLI/command behavior）。
- 新增 `docs/cli/crestodian.md`：调整 crestodian docs（CLI/command behavior）。
- 新增 `docs/cli/migrate.md`：调整 migrate docs（CLI/command behavior）。
- 修改 `docs/cli/agent.md`：调整 agent docs（CLI/command behavior）。
- 修改 `docs/cli/agents.md`：调整 agents docs（CLI/command behavior）。
- 修改 `docs/cli/backup.md`：调整 backup docs（CLI/command behavior）。
- 修改 `docs/cli/browser.md`：调整 browser docs（CLI/command behavior）。
- 修改 `docs/cli/channels.md`：调整 channels docs（CLI/command behavior）。
- 修改 `docs/cli/config.md`：调整 config docs（CLI/command behavior）。
- 修改 `docs/cli/configure.md`：调整 configure docs（CLI/command behavior）。
- 修改 `docs/cli/cron.md`：调整 cron docs（CLI/command behavior）。
- 修改 `docs/cli/daemon.md`：调整 daemon docs（CLI/command behavior）。
- 修改 `docs/cli/dashboard.md`：调整 dashboard docs（CLI/command behavior）。
- 修改 `docs/cli/devices.md`：调整 devices docs（CLI/command behavior）。
- 修改 `docs/cli/directory.md`：调整 directory docs（CLI/command behavior）。
- 其余 26 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/cli` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/cli/change-to-test.md` 的验证建议。
