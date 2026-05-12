# docs/mintlify/nodes

## 1. 功能结论

**文档/生成基线同步**：reduce WebUI session latency churn thanks @BunsDev、webchat add server-side dictation、file-transfer require canonical node policy authorization、resolve providerless image model refs；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：修改 6

## 3. 功能级详细差异

### 修复 allow safe Windows companion node commands

文档/生成基线同步记录：修复 allow safe Windows companion node commands

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 docs make docs formatter mintlify-safe

文档/生成基线同步记录：修复 docs：make docs formatter mintlify-safe

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 file-transfer require canonical node policy authorization

文档/生成基线同步记录：修复 file-transfer：require canonical node policy authorization

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 gateway honor all_proxy in env dispatcher

文档/生成基线同步记录：修复 gateway：honor all_proxy in env dispatcher

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 media keep audio input repair in doctor

文档/生成基线同步记录：修复 media：keep audio input repair in doctor

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 nodes allow removing stale paired nodes

文档/生成基线同步记录：修复 nodes：allow removing stale paired nodes

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 reduce WebUI session latency churn thanks @BunsDev

文档/生成基线同步记录：修复 reduce WebUI session latency churn thanks @BunsDev

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 resolve providerless image model refs

文档/生成基线同步记录：修复 resolve providerless image model refs

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 normalize mintlify component closings

文档/生成基线同步记录：文档同步 normalize mintlify component closings

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 webchat add server-side dictation

文档/生成基线同步记录：新增 webchat：add server-side dictation

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 audio docs、images docs、index docs、media understanding docs，用于更新读者指引、能力说明或事实基线。

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
- Impact-map dir: `.planning/impact-map/docs/mintlify/nodes`
- Changed path count: `6`
- Status counts: `修改 6`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `6` files, `+409` / `-288`

### 归纳依据

- 主要落点：docs、image generation。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：fix: reduce WebUI session latency churn thanks @BunsDev；feat(webchat): add server-side dictation；fix(file-transfer): require canonical node policy authorization；fix: resolve providerless image model refs；fix: allow safe Windows companion node commands；fix(docs): make docs formatter mintlify-safe；docs: normalize mintlify component closings；fix(gateway): honor all_proxy in env dispatcher

### Dimension evidence

- `tests-docs-修复-allow-safe-Windows-companion-node-commands` / 修复 allow safe Windows companion node commands:
  - source: `path` [M] `docs/nodes/audio.md` — semantic cue
  - source: `path` [M] `docs/nodes/images.md` — semantic cue
  - source: `path` [M] `docs/nodes/index.md` — semantic cue
  - source: `path` [M] `docs/nodes/media-understanding.md` — semantic cue
  - source: `path` [M] `docs/nodes/talk.md` — semantic cue
  - source: `path` [M] `docs/nodes/voicewake.md` — semantic cue
- `tests-docs-修复-docs-make-docs-formatter-mintlify-safe` / 修复 docs make docs formatter mintlify-safe:
  - source: `path` [M] `docs/nodes/audio.md` — semantic cue
  - source: `path` [M] `docs/nodes/images.md` — semantic cue
  - source: `path` [M] `docs/nodes/index.md` — semantic cue
  - source: `path` [M] `docs/nodes/media-understanding.md` — semantic cue
  - source: `path` [M] `docs/nodes/talk.md` — semantic cue
  - source: `path` [M] `docs/nodes/voicewake.md` — semantic cue
- `tests-docs-修复-file-transfer-require-canonical-node-policy` / 修复 file-transfer require canonical node policy authorization:
  - source: `path` [M] `docs/nodes/audio.md` — semantic cue
  - source: `path` [M] `docs/nodes/images.md` — semantic cue
  - source: `path` [M] `docs/nodes/index.md` — semantic cue
  - source: `path` [M] `docs/nodes/media-understanding.md` — semantic cue
  - source: `path` [M] `docs/nodes/talk.md` — semantic cue
  - source: `path` [M] `docs/nodes/voicewake.md` — semantic cue
- `tests-docs-修复-gateway-honor-all-proxy-in-env-dispatcher` / 修复 gateway honor all_proxy in env dispatcher:
  - source: `path` [M] `docs/nodes/index.md` — semantic cue
  - source: `path` [M] `docs/nodes/media-understanding.md` — semantic cue
- `tests-docs-修复-media-keep-audio-input-repair-in-doctor` / 修复 media keep audio input repair in doctor:
  - source: `path` [M] `docs/nodes/audio.md` — semantic cue
  - source: `path` [M] `docs/nodes/index.md` — semantic cue
  - source: `path` [M] `docs/nodes/media-understanding.md` — semantic cue
- `tests-docs-修复-nodes-allow-removing-stale-paired-nodes` / 修复 nodes allow removing stale paired nodes:
  - source: `path` [M] `docs/nodes/audio.md` — semantic cue
  - source: `path` [M] `docs/nodes/images.md` — semantic cue
  - source: `path` [M] `docs/nodes/index.md` — semantic cue
  - source: `path` [M] `docs/nodes/media-understanding.md` — semantic cue
  - source: `path` [M] `docs/nodes/talk.md` — semantic cue
  - source: `path` [M] `docs/nodes/voicewake.md` — semantic cue
- `tests-docs-修复-reduce-WebUI-session-latency-churn-thanks-B` / 修复 reduce WebUI session latency churn thanks @BunsDev:
  - source: `path` [M] `docs/nodes/audio.md`
  - source: `path` [M] `docs/nodes/images.md`
  - source: `path` [M] `docs/nodes/index.md`
- `tests-docs-修复-resolve-providerless-image-model-refs` / 修复 resolve providerless image model refs:
  - source: `path` [M] `docs/nodes/images.md` — semantic cue
- `tests-docs-文档同步-normalize-mintlify-component-closings` / 文档同步 normalize mintlify component closings:
  - source: `path` [M] `docs/nodes/audio.md`
  - source: `path` [M] `docs/nodes/images.md`
  - source: `path` [M] `docs/nodes/index.md`
- `tests-docs-新增-webchat-add-server-side-dictation` / 新增 webchat add server-side dictation:
  - source: `path` [M] `docs/nodes/audio.md`
  - source: `path` [M] `docs/nodes/images.md`
  - source: `path` [M] `docs/nodes/index.md`
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/nodes/audio.md` — docs evidence
  - source: `path` [M] `docs/nodes/images.md` — docs evidence
  - source: `path` [M] `docs/nodes/index.md` — docs evidence
  - source: `path` [M] `docs/nodes/media-understanding.md` — docs evidence
  - source: `path` [M] `docs/nodes/talk.md` — docs evidence
  - source: `path` [M] `docs/nodes/voicewake.md` — docs evidence

### 路径证据

- 修改 `docs/nodes/audio.md`：调整 audio docs（docs）。
- 修改 `docs/nodes/images.md`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `docs/nodes/index.md`：调整 index docs（docs）。
- 修改 `docs/nodes/media-understanding.md`：调整 media understanding docs（docs）。
- 修改 `docs/nodes/talk.md`：调整 talk docs（docs）。
- 修改 `docs/nodes/voicewake.md`：调整 voicewake docs（docs）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/nodes` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/nodes/change-to-test.md` 的验证建议。
