# docs/mintlify/plugins

## 1. 功能结论

**文档/生成基线同步**：插件 reference 文档同步 OpenRouter plugin reference 声明 surface 包含 model provider、media understanding、image generation、speech 和 video generation、explain missing git during plugin install、doctor clarify configured plugin repair、Surface Codex usage-limit reset details in chat replies；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：Provider/plugin 调用方、插件作者、文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：新增 122、修改 25

## 3. 功能级详细差异

### 修复 explain missing git during plugin install

文档/生成基线同步记录：修复 explain missing git during plugin install

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 fork google meet agent context

文档/生成基线同步记录：修复 fork google meet agent context

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 pass claude cli thinking effort

文档/生成基线同步记录：修复 pass claude cli thinking effort

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 plugins fall back from invalid beta npm updates

文档/生成基线同步记录：修复 plugins：fall back from invalid beta npm updates

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修改 Surface Codex usage-limit reset details in chat replies

文档/生成基线同步记录：修改 Surface Codex usage-limit reset details in chat replies

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修改 [plugin sdk] Harden finalize retry and run context cleanup

文档/生成基线同步记录：修改 [plugin sdk] Harden finalize retry and run context cleanup

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 插件 reference 文档同步 OpenRouter plugin reference 声明 surface 包含 model provi…

文档/生成基线同步记录：插件 reference 文档同步：OpenRouter plugin reference 声明 surface 包含 model provider、media understanding、image generation、speech 和 video generation。

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 add plugin install example

文档/生成基线同步记录：文档同步 add plugin install example

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 doctor clarify configured plugin repair

文档/生成基线同步记录：文档同步 doctor：clarify configured plugin repair

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 document google meet elevenlabs voice setup

文档/生成基线同步记录：文档同步 document google meet elevenlabs voice setup

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 plugin-state add registerIfAbsent keyed store

文档/生成基线同步记录：新增 plugin-state：add registerIfAbsent keyed store

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 architecture internals docs、architecture docs、building plugins docs、bundles docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 architecture internals docs、architecture docs、building plugins docs、bundles docs、codex computer use docs、codex harness docs；完整路径清单保留在证据附录和 JSON 中。

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
- Impact-map dir: `.planning/impact-map/docs/mintlify/plugins`
- Changed path count: `147`
- Status counts: `新增 122、修改 25`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `147` files, `+8781` / `-1987`

### 归纳依据

- 主要落点：docs、message delivery、speech/TTS、gateway runtime。
- 新增或暴露的关键符号包括：`ContextEngine`。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：fix: explain missing git during plugin install；docs(doctor): clarify configured plugin repair；Surface Codex usage-limit reset details in chat replies；fix(plugins): fall back from invalid beta npm updates；fix: pass claude cli thinking effort；[plugin sdk] Harden finalize retry and run context cleanup；docs: add plugin install example；feat(plugin-state): add registerIfAbsent keyed store

### Dimension evidence

- `tests-docs-修复-explain-missing-git-during-plugin-install` / 修复 explain missing git during plugin install:
  - source: `path` [M] `docs/plugins/architecture-internals.md` — semantic cue
  - source: `path` [M] `docs/plugins/architecture.md` — semantic cue
  - source: `path` [M] `docs/plugins/building-plugins.md` — semantic cue
  - source: `path` [M] `docs/plugins/bundles.md` — semantic cue
  - source: `path` [M] `docs/plugins/codex-computer-use.md` — semantic cue
  - source: `path` [M] `docs/plugins/codex-harness.md` — semantic cue
- `tests-docs-修复-fork-google-meet-agent-context` / 修复 fork google meet agent context:
  - source: `path` [M] `docs/plugins/google-meet.md` — semantic cue
  - source: `path` [M] `docs/plugins/reference/google-meet.md` — semantic cue
  - source: `path` [M] `docs/plugins/reference/google.md` — semantic cue
  - source: `path` [M] `docs/plugins/reference/googlechat.md` — semantic cue
  - source: `path` [M] `docs/plugins/sdk-agent-harness.md` — semantic cue
- `tests-docs-修复-pass-claude-cli-thinking-effort` / 修复 pass claude cli thinking effort:
  - source: `path` [M] `docs/plugins/reference/migrate-claude.md` — semantic cue
  - source: `path` [M] `docs/plugins/reference/tts-local-cli.md` — semantic cue
- `tests-docs-修复-plugins-fall-back-from-invalid-beta-npm-upda` / 修复 plugins fall back from invalid beta npm updates:
  - source: `path` [M] `docs/plugins/architecture-internals.md` — semantic cue
  - source: `path` [M] `docs/plugins/architecture.md` — semantic cue
  - source: `path` [M] `docs/plugins/building-plugins.md` — semantic cue
  - source: `path` [M] `docs/plugins/bundles.md` — semantic cue
  - source: `path` [M] `docs/plugins/codex-computer-use.md` — semantic cue
  - source: `path` [M] `docs/plugins/codex-harness.md` — semantic cue
- `tests-docs-修改-Surface-Codex-usage-limit-reset-details-in-c` / 修改 Surface Codex usage-limit reset details in chat replies:
  - source: `path` [M] `docs/plugins/architecture-internals.md` — semantic cue
  - source: `path` [M] `docs/plugins/architecture.md` — semantic cue
  - source: `path` [M] `docs/plugins/building-plugins.md` — semantic cue
  - source: `path` [M] `docs/plugins/bundles.md` — semantic cue
  - source: `path` [M] `docs/plugins/codex-computer-use.md` — semantic cue
  - source: `path` [M] `docs/plugins/codex-harness.md` — semantic cue
- `tests-docs-修改-plugin-sdk-Harden-finalize-retry-and-run-c` / 修改 [plugin sdk] Harden finalize retry and run context cleanup:
  - source: `path` [M] `docs/plugins/architecture-internals.md` — semantic cue
  - source: `path` [M] `docs/plugins/architecture.md` — semantic cue
  - source: `path` [M] `docs/plugins/building-plugins.md` — semantic cue
  - source: `path` [M] `docs/plugins/bundles.md` — semantic cue
  - source: `path` [M] `docs/plugins/codex-computer-use.md` — semantic cue
  - source: `path` [M] `docs/plugins/codex-harness.md` — semantic cue
- `tests-docs-插件-reference-文档同步-OpenRouter-plugin-reference-声` / 插件 reference 文档同步 OpenRouter plugin reference 声明 surface 包含 model provi…:
  - source: `path` [M] `docs/plugins/architecture-internals.md` — semantic cue
  - source: `path` [M] `docs/plugins/architecture.md` — semantic cue
  - source: `path` [M] `docs/plugins/building-plugins.md` — semantic cue
  - source: `path` [M] `docs/plugins/bundles.md` — semantic cue
  - source: `path` [M] `docs/plugins/codex-computer-use.md` — semantic cue
  - source: `path` [M] `docs/plugins/codex-harness.md` — semantic cue
- `tests-docs-文档同步-add-plugin-install-example` / 文档同步 add plugin install example:
  - source: `path` [M] `docs/plugins/architecture-internals.md` — semantic cue
  - source: `path` [M] `docs/plugins/architecture.md` — semantic cue
  - source: `path` [M] `docs/plugins/building-plugins.md` — semantic cue
  - source: `path` [M] `docs/plugins/bundles.md` — semantic cue
  - source: `path` [M] `docs/plugins/codex-computer-use.md` — semantic cue
  - source: `path` [M] `docs/plugins/codex-harness.md` — semantic cue
- `tests-docs-文档同步-doctor-clarify-configured-plugin-repair` / 文档同步 doctor clarify configured plugin repair:
  - source: `path` [M] `docs/plugins/architecture-internals.md` — semantic cue
  - source: `path` [M] `docs/plugins/architecture.md` — semantic cue
  - source: `path` [M] `docs/plugins/building-plugins.md` — semantic cue
  - source: `path` [M] `docs/plugins/bundles.md` — semantic cue
  - source: `path` [M] `docs/plugins/codex-computer-use.md` — semantic cue
  - source: `path` [M] `docs/plugins/codex-harness.md` — semantic cue
- `tests-docs-文档同步-document-google-meet-elevenlabs-voice-setup` / 文档同步 document google meet elevenlabs voice setup:
  - source: `path` [M] `docs/plugins/google-meet.md` — semantic cue
  - source: `path` [M] `docs/plugins/reference/document-extract.md` — semantic cue
  - source: `path` [M] `docs/plugins/reference/elevenlabs.md` — semantic cue
  - source: `path` [M] `docs/plugins/reference/google-meet.md` — semantic cue
  - source: `path` [M] `docs/plugins/reference/google.md` — semantic cue
  - source: `path` [M] `docs/plugins/reference/googlechat.md` — semantic cue
- `tests-docs-新增-plugin-state-add-registerIfAbsent-keyed-store` / 新增 plugin-state add registerIfAbsent keyed store:
  - source: `path` [A] `docs/plugins/codex-computer-use.md`
  - source: `path` [A] `docs/plugins/dependency-resolution.md`
  - source: `path` [A] `docs/plugins/manage-plugins.md`
  - source: `path` [M] `docs/plugins/architecture-internals.md`
  - source: `path` [M] `docs/plugins/architecture.md`
  - source: `path` [M] `docs/plugins/building-plugins.md`
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/plugins/architecture-internals.md` — docs evidence
  - source: `path` [M] `docs/plugins/architecture.md` — docs evidence
  - source: `path` [M] `docs/plugins/building-plugins.md` — docs evidence
  - source: `path` [M] `docs/plugins/bundles.md` — docs evidence
  - source: `path` [M] `docs/plugins/codex-computer-use.md` — docs evidence
  - source: `path` [M] `docs/plugins/codex-harness.md` — docs evidence
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `docs/plugins/codex-computer-use.md`
  - source: `path` [A] `docs/plugins/dependency-resolution.md`
  - source: `path` [A] `docs/plugins/manage-plugins.md`
  - source: `path` [A] `docs/plugins/memory-lancedb.md`
  - source: `path` [A] `docs/plugins/plugin-inventory.md`
  - source: `path` [A] `docs/plugins/reference.md`

### 路径证据

- 新增 `docs/plugins/codex-computer-use.md`：调整 codex computer use docs（docs）。
- 新增 `docs/plugins/dependency-resolution.md`：调整 dependency resolution docs（docs）。
- 新增 `docs/plugins/manage-plugins.md`：调整 manage plugins docs（docs）。
- 新增 `docs/plugins/memory-lancedb.md`：调整 memory lancedb docs（docs）。
- 新增 `docs/plugins/plugin-inventory.md`：调整 plugin inventory docs（docs）。
- 新增 `docs/plugins/reference.md`：调整 reference docs（docs）。
- 新增 `docs/plugins/reference/acpx.md`：调整 acpx docs（docs）。
- 新增 `docs/plugins/reference/alibaba.md`：调整 alibaba docs（docs）。
- 新增 `docs/plugins/reference/amazon-bedrock-mantle.md`：调整 amazon bedrock mantle docs（docs）。
- 新增 `docs/plugins/reference/amazon-bedrock.md`：调整 amazon bedrock docs（docs）。
- 新增 `docs/plugins/reference/anthropic-vertex.md`：调整 anthropic vertex docs（docs）。
- 新增 `docs/plugins/reference/anthropic.md`：调整 anthropic docs（docs）。
- 修改 `docs/plugins/architecture-internals.md`：调整 architecture internals docs（docs）。
- 修改 `docs/plugins/architecture.md`：调整 architecture docs（docs）。
- 修改 `docs/plugins/building-plugins.md`：调整 building plugins docs（docs）。
- 修改 `docs/plugins/bundles.md`：调整 bundles docs（docs）。
- 修改 `docs/plugins/codex-harness.md`：调整 codex harness docs（docs）。
- 修改 `docs/plugins/community.md`：调整 community docs（docs）。
- 修改 `docs/plugins/compatibility.md`：调整 compatibility docs（docs）。
- 修改 `docs/plugins/google-meet.md`：调整 google meet docs（docs）。
- 修改 `docs/plugins/hooks.md`：调整 hooks docs（docs）。
- 修改 `docs/plugins/manifest.md`：调整 manifest docs（docs）。
- 修改 `docs/plugins/memory-wiki.md`：调整 memory wiki docs（docs）。
- 修改 `docs/plugins/message-presentation.md`：调整 message presentation docs（message delivery）。
- 其余 123 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/plugins` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/plugins/change-to-test.md` 的验证建议。
