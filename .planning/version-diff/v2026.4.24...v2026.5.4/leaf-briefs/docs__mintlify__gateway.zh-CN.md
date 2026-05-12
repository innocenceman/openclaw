# docs/mintlify/gateway

## 1. 功能结论

**文档/生成基线同步**：doctor clarify configured plugin repair、repair stale session route state in doctor、agents mediate async media completions、simplify gateway model startup modes；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：新增 3、修改 35

## 3. 功能级详细差异

### 修复 agents mediate async media completions

文档/生成基线同步记录：修复 agents：mediate async media completions

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 doctor restore group config drift migrations

文档/生成基线同步记录：修复 doctor：restore group config drift migrations

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 log gateway model mode defaults

文档/生成基线同步记录：修复 log gateway model mode defaults

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 plugins default bundled discovery to allowlist

文档/生成基线同步记录：修复 plugins：default bundled discovery to allowlist

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 plugins rename bundled allowlist discovery policy

文档/生成基线同步记录：修复 plugins：rename bundled allowlist discovery policy

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 plugins respect allowlist for web provider fallback

文档/生成基线同步记录：修复 plugins：respect allowlist for web provider fallback

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 repair stale session route state in doctor

文档/生成基线同步记录：修复 repair stale session route state in doctor

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 simplify gateway model startup modes

文档/生成基线同步记录：修复 simplify gateway model startup modes

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 doctor clarify configured plugin repair

文档/生成基线同步记录：文档同步 doctor：clarify configured plugin repair

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 add gateway stall diagnostics

文档/生成基线同步记录：新增 add gateway stall diagnostics

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 authentication docs、background process docs、bonjour docs、cli backends docs，用于更新读者指引、能力说明或事实基线。

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
- Impact-map dir: `.planning/impact-map/docs/mintlify/gateway`
- Changed path count: `38`
- Status counts: `新增 3、修改 35`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `38` files, `+3865` / `-2214`

### 归纳依据

- 主要落点：gateway runtime。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：docs(doctor): clarify configured plugin repair；fix: repair stale session route state in doctor；fix(agents): mediate async media completions；fix: simplify gateway model startup modes；fix: log gateway model mode defaults；fix(plugins): default bundled discovery to allowlist；fix(plugins): rename bundled allowlist discovery policy；fix(plugins): respect allowlist for web provider fallback

### Dimension evidence

- `tests-docs-修复-agents-mediate-async-media-completions` / 修复 agents mediate async media completions:
  - source: `path` [M] `docs/gateway/config-agents.md` — semantic cue
- `tests-docs-修复-doctor-restore-group-config-drift-migrations` / 修复 doctor restore group config drift migrations:
  - source: `path` [M] `docs/gateway/config-agents.md` — semantic cue
  - source: `path` [M] `docs/gateway/config-channels.md` — semantic cue
  - source: `path` [M] `docs/gateway/config-tools.md` — semantic cue
  - source: `path` [M] `docs/gateway/configuration-examples.md` — semantic cue
  - source: `path` [M] `docs/gateway/configuration-reference.md` — semantic cue
  - source: `path` [M] `docs/gateway/configuration.md` — semantic cue
- `tests-docs-修复-log-gateway-model-mode-defaults` / 修复 log gateway model mode defaults:
  - source: `path` [M] `docs/gateway/authentication.md` — semantic cue
  - source: `path` [M] `docs/gateway/background-process.md` — semantic cue
  - source: `path` [M] `docs/gateway/bonjour.md` — semantic cue
  - source: `path` [M] `docs/gateway/cli-backends.md` — semantic cue
  - source: `path` [M] `docs/gateway/config-agents.md` — semantic cue
  - source: `path` [M] `docs/gateway/config-channels.md` — semantic cue
- `tests-docs-修复-plugins-default-bundled-discovery-to-allowli` / 修复 plugins default bundled discovery to allowlist:
  - source: `path` [M] `docs/gateway/config-tools.md` — semantic cue
  - source: `path` [M] `docs/gateway/discovery.md` — semantic cue
  - source: `path` [M] `docs/gateway/doctor.md` — semantic cue
  - source: `path` [M] `docs/gateway/operator-scopes.md` — semantic cue
  - source: `path` [M] `docs/gateway/protocol.md` — semantic cue
  - source: `path` [M] `docs/gateway/tools-invoke-http-api.md` — semantic cue
- `tests-docs-修复-plugins-rename-bundled-allowlist-discovery-p` / 修复 plugins rename bundled allowlist discovery policy:
  - source: `path` [M] `docs/gateway/discovery.md` — semantic cue
- `tests-docs-修复-plugins-respect-allowlist-for-web-provider-f` / 修复 plugins respect allowlist for web provider fallback:
  - source: `path` [A] `docs/gateway/opentelemetry.md`
  - source: `path` [A] `docs/gateway/operator-scopes.md`
  - source: `path` [A] `docs/gateway/prometheus.md`
  - source: `path` [M] `docs/gateway/authentication.md`
  - source: `path` [M] `docs/gateway/background-process.md`
  - source: `path` [M] `docs/gateway/bonjour.md`
- `tests-docs-修复-repair-stale-session-route-state-in-doctor` / 修复 repair stale session route state in doctor:
  - source: `path` [M] `docs/gateway/doctor.md` — semantic cue
  - source: `path` [M] `docs/gateway/index.md` — semantic cue
  - source: `path` [M] `docs/gateway/logging.md` — semantic cue
  - source: `path` [M] `docs/gateway/pairing.md` — semantic cue
  - source: `path` [M] `docs/gateway/sandboxing.md` — semantic cue
  - source: `path` [M] `docs/gateway/security/index.md` — semantic cue
- `tests-docs-修复-simplify-gateway-model-startup-modes` / 修复 simplify gateway model startup modes:
  - source: `path` [M] `docs/gateway/authentication.md` — semantic cue
  - source: `path` [M] `docs/gateway/background-process.md` — semantic cue
  - source: `path` [M] `docs/gateway/bonjour.md` — semantic cue
  - source: `path` [M] `docs/gateway/cli-backends.md` — semantic cue
  - source: `path` [M] `docs/gateway/config-agents.md` — semantic cue
  - source: `path` [M] `docs/gateway/config-channels.md` — semantic cue
- `tests-docs-文档同步-doctor-clarify-configured-plugin-repair` / 文档同步 doctor clarify configured plugin repair:
  - source: `path` [M] `docs/gateway/doctor.md` — semantic cue
- `tests-docs-新增-add-gateway-stall-diagnostics` / 新增 add gateway stall diagnostics:
  - source: `path` [M] `docs/gateway/authentication.md` — semantic cue
  - source: `path` [M] `docs/gateway/background-process.md` — semantic cue
  - source: `path` [M] `docs/gateway/bonjour.md` — semantic cue
  - source: `path` [M] `docs/gateway/cli-backends.md` — semantic cue
  - source: `path` [M] `docs/gateway/config-agents.md` — semantic cue
  - source: `path` [M] `docs/gateway/config-channels.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/gateway/authentication.md` — docs evidence
  - source: `path` [M] `docs/gateway/background-process.md` — docs evidence
  - source: `path` [M] `docs/gateway/bonjour.md` — docs evidence
  - source: `path` [M] `docs/gateway/cli-backends.md` — docs evidence
  - source: `path` [M] `docs/gateway/config-agents.md` — docs evidence
  - source: `path` [M] `docs/gateway/config-channels.md` — docs evidence

### 路径证据

- 新增 `docs/gateway/opentelemetry.md`：调整 opentelemetry docs（gateway runtime）。
- 新增 `docs/gateway/operator-scopes.md`：调整 operator scopes docs（gateway runtime）。
- 新增 `docs/gateway/prometheus.md`：调整 prometheus docs（gateway runtime）。
- 修改 `docs/gateway/authentication.md`：调整 authentication docs（gateway runtime）。
- 修改 `docs/gateway/background-process.md`：调整 background process docs（gateway runtime）。
- 修改 `docs/gateway/bonjour.md`：调整 bonjour docs（gateway runtime）。
- 修改 `docs/gateway/cli-backends.md`：调整 cli backends docs（gateway runtime）。
- 修改 `docs/gateway/config-agents.md`：调整 config agents docs（gateway runtime）。
- 修改 `docs/gateway/config-channels.md`：调整 config channels docs（gateway runtime）。
- 修改 `docs/gateway/config-tools.md`：调整 config tools docs（gateway runtime）。
- 修改 `docs/gateway/configuration-examples.md`：调整 configuration examples docs（gateway runtime）。
- 修改 `docs/gateway/configuration-reference.md`：调整 configuration reference docs（gateway runtime）。
- 修改 `docs/gateway/configuration.md`：调整 configuration docs（gateway runtime）。
- 修改 `docs/gateway/diagnostics.md`：调整 diagnostics docs（gateway runtime）。
- 修改 `docs/gateway/discovery.md`：调整 discovery docs（gateway runtime）。
- 其余 23 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/gateway` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/gateway/change-to-test.md` 的验证建议。
