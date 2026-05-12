# docs/mintlify/install

## 1. 功能结论

**文档/生成基线同步**：reduce root cleanup files、release stabilize windows npm install、doctor warn on missing channel env tokens、simplify plugin dependency handling；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：新增 2、修改 11、重命名 1

## 3. 功能级详细差异

### 修复 config tighten patch command semantics

文档/生成基线同步记录：修复 config：tighten patch command semantics

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 docker keep plugin runtime deps off bind mounts

文档/生成基线同步记录：修复 docker：keep plugin runtime deps off bind mounts

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 doctor warn on missing channel env tokens

文档/生成基线同步记录：修复 doctor：warn on missing channel env tokens

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 release stabilize windows npm install

文档/生成基线同步记录：修复 release：stabilize windows npm install

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 add AllowTcpForwarding prerequisite to Hetzner SSH tunnel step

文档/生成基线同步记录：文档同步 add AllowTcpForwarding prerequisite to Hetzner SSH tunnel step

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 install fix gog/goplaces release URLs in docker-vm-runtime example

文档/生成基线同步记录：文档同步 install：fix gog/goplaces release URLs in docker-vm-runtime example

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 sandboxing clarify sandbox setup scripts require source checkout

文档/生成基线同步记录：文档同步 sandboxing：clarify sandbox setup scripts require source checkout

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 add config apply patch command

文档/生成基线同步记录：新增 add config apply patch command

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 维护调整 reduce root cleanup files

文档/生成基线同步记录：维护调整 reduce root cleanup files

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 迁移/重构 simplify plugin dependency handling

文档/生成基线同步记录：迁移/重构 simplify plugin dependency handling

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 ansible docs、bun docs、development channels docs、docker vm runtime docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。
- 底层路径证据包含删除/重命名，但该 leaf 被归类为 docs-only；这些状态用于确认生成基线/文档已同步，不直接表示该 leaf 自身删除运行时入口。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/install`
- Changed path count: `14`
- Status counts: `新增 2、修改 11、重命名 1`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `14` files, `+573` / `-457`

### 归纳依据

- 主要落点：docs。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：chore: reduce root cleanup files；fix(release): stabilize windows npm install；fix(doctor): warn on missing channel env tokens；refactor: simplify plugin dependency handling；docs(sandboxing): clarify sandbox setup scripts require source checkout；fix(config): tighten patch command semantics；feat: add config apply patch command；docs: add AllowTcpForwarding prerequisite to Hetzner SSH tunnel step

### Dimension evidence

- `tests-docs-修复-config-tighten-patch-command-semantics` / 修复 config tighten patch command semantics:
  - source: `path` [A] `docs/install/migrating-claude.md`
  - source: `path` [A] `docs/install/migrating-hermes.md`
  - source: `path` [M] `docs/install/ansible.md`
  - source: `path` [M] `docs/install/bun.md`
  - source: `path` [M] `docs/install/development-channels.md`
  - source: `path` [R] `docs/install/migrating-matrix.md`
- `tests-docs-修复-docker-keep-plugin-runtime-deps-off-bind-mou` / 修复 docker keep plugin runtime deps off bind mounts:
  - source: `path` [M] `docs/install/docker-vm-runtime.md` — semantic cue
- `tests-docs-修复-doctor-warn-on-missing-channel-env-tokens` / 修复 doctor warn on missing channel env tokens:
  - source: `path` [M] `docs/install/development-channels.md` — semantic cue
- `tests-docs-修复-release-stabilize-windows-npm-install` / 修复 release stabilize windows npm install:
  - source: `path` [M] `docs/install/ansible.md` — semantic cue
  - source: `path` [M] `docs/install/bun.md` — semantic cue
  - source: `path` [M] `docs/install/development-channels.md` — semantic cue
  - source: `path` [M] `docs/install/docker-vm-runtime.md` — semantic cue
  - source: `path` [M] `docs/install/exe-dev.md` — semantic cue
  - source: `path` [M] `docs/install/fly.md` — semantic cue
- `tests-docs-文档同步-add-AllowTcpForwarding-prerequisite-to-Het` / 文档同步 add AllowTcpForwarding prerequisite to Hetzner SSH tunnel step:
  - source: `path` [M] `docs/install/hetzner.md` — semantic cue
- `tests-docs-文档同步-install-fix-gog-goplaces-release-URLs-in-d` / 文档同步 install fix gog/goplaces release URLs in docker-vm-runtime example:
  - source: `path` [M] `docs/install/ansible.md` — semantic cue
  - source: `path` [M] `docs/install/bun.md` — semantic cue
  - source: `path` [M] `docs/install/development-channels.md` — semantic cue
  - source: `path` [M] `docs/install/docker-vm-runtime.md` — semantic cue
  - source: `path` [M] `docs/install/exe-dev.md` — semantic cue
  - source: `path` [M] `docs/install/fly.md` — semantic cue
- `tests-docs-文档同步-sandboxing-clarify-sandbox-setup-scripts-r` / 文档同步 sandboxing clarify sandbox setup scripts require source checkout:
  - source: `path` [A] `docs/install/migrating-claude.md`
  - source: `path` [A] `docs/install/migrating-hermes.md`
  - source: `path` [M] `docs/install/ansible.md`
  - source: `path` [M] `docs/install/bun.md`
  - source: `path` [M] `docs/install/development-channels.md`
  - source: `path` [R] `docs/install/migrating-matrix.md`
- `tests-docs-新增-add-config-apply-patch-command` / 新增 add config apply patch command:
  - source: `path` [A] `docs/install/migrating-claude.md`
  - source: `path` [A] `docs/install/migrating-hermes.md`
  - source: `path` [M] `docs/install/ansible.md`
  - source: `path` [M] `docs/install/bun.md`
  - source: `path` [M] `docs/install/development-channels.md`
  - source: `path` [R] `docs/install/migrating-matrix.md`
- `tests-docs-维护调整-reduce-root-cleanup-files` / 维护调整 reduce root cleanup files:
  - source: `path` [A] `docs/install/migrating-claude.md`
  - source: `path` [A] `docs/install/migrating-hermes.md`
  - source: `path` [M] `docs/install/ansible.md`
  - source: `path` [M] `docs/install/bun.md`
  - source: `path` [M] `docs/install/development-channels.md`
  - source: `path` [R] `docs/install/migrating-matrix.md`
- `tests-docs-迁移-重构-simplify-plugin-dependency-handling` / 迁移/重构 simplify plugin dependency handling:
  - source: `path` [M] `docs/install/ansible.md` — semantic cue
  - source: `path` [M] `docs/install/bun.md` — semantic cue
  - source: `path` [M] `docs/install/development-channels.md` — semantic cue
  - source: `path` [M] `docs/install/docker-vm-runtime.md` — semantic cue
  - source: `path` [M] `docs/install/exe-dev.md` — semantic cue
  - source: `path` [M] `docs/install/fly.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/install/ansible.md` — docs evidence
  - source: `path` [M] `docs/install/bun.md` — docs evidence
  - source: `path` [M] `docs/install/development-channels.md` — docs evidence
  - source: `path` [M] `docs/install/docker-vm-runtime.md` — docs evidence
  - source: `path` [M] `docs/install/exe-dev.md` — docs evidence
  - source: `path` [M] `docs/install/fly.md` — docs evidence

### 路径证据

- 新增 `docs/install/migrating-claude.md`：调整 migrating claude docs（docs）。
- 新增 `docs/install/migrating-hermes.md`：调整 migrating hermes docs（docs）。
- 修改 `docs/install/ansible.md`：调整 ansible docs（docs）。
- 修改 `docs/install/bun.md`：调整 bun docs（docs）。
- 修改 `docs/install/development-channels.md`：调整 development channels docs（docs）。
- 修改 `docs/install/docker-vm-runtime.md`：调整 docker vm runtime docs（docs）。
- 修改 `docs/install/exe-dev.md`：调整 exe dev docs（docs）。
- 修改 `docs/install/fly.md`：调整 fly docs（docs）。
- 修改 `docs/install/hetzner.md`：调整 hetzner docs（docs）。
- 修改 `docs/install/index.md`：调整 index docs（docs）。
- 修改 `docs/install/installer.md`：调整 installer docs（docs）。
- 修改 `docs/install/macos-vm.md`：调整 macos vm docs（docs）。
- 修改 `docs/install/migrating.md`：调整 migrating docs（docs）。
- 重命名 `docs/install/migrating-matrix.md`：调整 migrating matrix docs（docs）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/install` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/install/change-to-test.md` 的验证建议。
