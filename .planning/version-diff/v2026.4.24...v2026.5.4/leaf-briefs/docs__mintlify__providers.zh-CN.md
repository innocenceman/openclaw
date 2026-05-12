# docs/mintlify/providers

## 1. 功能结论

**文档/生成基线同步**：openrouter keep DeepSeek V4 reasoning effort valid、document google meet elevenlabs voice setup、document realtime voice parity、openrouter expand app attribution categories；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：新增 5、修改 34

## 3. 功能级详细差异

### 修复 normalize LM Studio binary reasoning efforts

文档/生成基线同步记录：修复 normalize LM Studio binary reasoning efforts

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 openrouter keep DeepSeek V4 reasoning effort valid

文档/生成基线同步记录：修复 openrouter：keep DeepSeek V4 reasoning effort valid

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 openrouter preserve deepseek v4 reasoning replay

文档/生成基线同步记录：修复 openrouter：preserve deepseek v4 reasoning replay

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 openrouter strip Anthropic reasoning prefill

文档/生成基线同步记录：修复 openrouter：strip Anthropic reasoning prefill

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK

文档/生成基线同步记录：修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 document google meet elevenlabs voice setup

文档/生成基线同步记录：文档同步 document google meet elevenlabs voice setup

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 document realtime voice parity

文档/生成基线同步记录：文档同步 document realtime voice parity

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 fix codex strict json examples

文档/生成基线同步记录：文档同步 fix codex strict json examples

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 openrouter add opt-in response caching

文档/生成基线同步记录：新增 openrouter：add opt-in response caching

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 openrouter expand app attribution categories

文档/生成基线同步记录：新增 openrouter：expand app attribution categories

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 anthropic docs、azure speech docs、bedrock docs、cerebras docs，用于更新读者指引、能力说明或事实基线。

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
- Impact-map dir: `.planning/impact-map/docs/mintlify/providers`
- Changed path count: `39`
- Status counts: `新增 5、修改 34`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `39` files, `+2165` / `-202`

### 归纳依据

- 主要落点：docs、gateway runtime、speech/TTS。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：fix(openrouter): keep DeepSeek V4 reasoning effort valid；docs: document google meet elevenlabs voice setup；docs: document realtime voice parity；feat(openrouter): expand app attribution categories；feat(openrouter): add opt-in response caching；Stop heartbeat tool turns from asking for HEARTBEAT_OK；fix: normalize LM Studio binary reasoning efforts；fix(openrouter): preserve deepseek v4 reasoning replay

### Dimension evidence

- `tests-docs-修复-normalize-LM-Studio-binary-reasoning-efforts` / 修复 normalize LM Studio binary reasoning efforts:
  - source: `path` [M] `docs/providers/litellm.md` — semantic cue
  - source: `path` [M] `docs/providers/lmstudio.md` — semantic cue
  - source: `path` [M] `docs/providers/vllm.md` — semantic cue
- `tests-docs-修复-openrouter-keep-DeepSeek-V4-reasoning-effort` / 修复 openrouter keep DeepSeek V4 reasoning effort valid:
  - source: `path` [M] `docs/providers/deepseek.md` — semantic cue
  - source: `path` [M] `docs/providers/openrouter.md` — semantic cue
- `tests-docs-修复-openrouter-preserve-deepseek-v4-reasoning-re` / 修复 openrouter preserve deepseek v4 reasoning replay:
  - source: `path` [M] `docs/providers/deepseek.md` — semantic cue
  - source: `path` [M] `docs/providers/openrouter.md` — semantic cue
- `tests-docs-修复-openrouter-strip-Anthropic-reasoning-prefill` / 修复 openrouter strip Anthropic reasoning prefill:
  - source: `path` [M] `docs/providers/anthropic.md` — semantic cue
  - source: `path` [M] `docs/providers/openrouter.md` — semantic cue
- `tests-docs-修改-Stop-heartbeat-tool-turns-from-asking-for-HE` / 修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK:
  - source: `path` [A] `docs/providers/azure-speech.md`
  - source: `path` [A] `docs/providers/cerebras.md`
  - source: `path` [A] `docs/providers/deepinfra.md`
  - source: `path` [M] `docs/providers/anthropic.md`
  - source: `path` [M] `docs/providers/bedrock.md`
  - source: `path` [M] `docs/providers/chutes.md`
- `tests-docs-文档同步-document-google-meet-elevenlabs-voice-setup` / 文档同步 document google meet elevenlabs voice setup:
  - source: `path` [M] `docs/providers/elevenlabs.md` — semantic cue
  - source: `path` [M] `docs/providers/google.md` — semantic cue
- `tests-docs-文档同步-document-realtime-voice-parity` / 文档同步 document realtime voice parity:
  - source: `path` [A] `docs/providers/azure-speech.md`
  - source: `path` [A] `docs/providers/cerebras.md`
  - source: `path` [A] `docs/providers/deepinfra.md`
  - source: `path` [M] `docs/providers/anthropic.md`
  - source: `path` [M] `docs/providers/bedrock.md`
  - source: `path` [M] `docs/providers/chutes.md`
- `tests-docs-文档同步-fix-codex-strict-json-examples` / 文档同步 fix codex strict json examples:
  - source: `path` [A] `docs/providers/azure-speech.md`
  - source: `path` [A] `docs/providers/cerebras.md`
  - source: `path` [A] `docs/providers/deepinfra.md`
  - source: `path` [M] `docs/providers/anthropic.md`
  - source: `path` [M] `docs/providers/bedrock.md`
  - source: `path` [M] `docs/providers/chutes.md`
- `tests-docs-新增-openrouter-add-opt-in-response-caching` / 新增 openrouter add opt-in response caching:
  - source: `path` [M] `docs/providers/openrouter.md` — semantic cue
- `tests-docs-新增-openrouter-expand-app-attribution-categories` / 新增 openrouter expand app attribution categories:
  - source: `path` [M] `docs/providers/openrouter.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/providers/anthropic.md` — docs evidence
  - source: `path` [M] `docs/providers/azure-speech.md` — docs evidence
  - source: `path` [M] `docs/providers/bedrock.md` — docs evidence
  - source: `path` [M] `docs/providers/cerebras.md` — docs evidence
  - source: `path` [M] `docs/providers/chutes.md` — docs evidence
  - source: `path` [M] `docs/providers/cloudflare-ai-gateway.md` — docs evidence

### 路径证据

- 新增 `docs/providers/azure-speech.md`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 新增 `docs/providers/cerebras.md`：调整 cerebras docs（docs）。
- 新增 `docs/providers/deepinfra.md`：调整 deepinfra docs（docs）。
- 新增 `docs/providers/inworld.md`：调整 inworld docs（docs）。
- 新增 `docs/providers/senseaudio.md`：调整 senseaudio docs（docs）。
- 修改 `docs/providers/anthropic.md`：调整 anthropic docs（docs）。
- 修改 `docs/providers/bedrock.md`：调整 bedrock docs（docs）。
- 修改 `docs/providers/chutes.md`：调整 chutes docs（docs）。
- 修改 `docs/providers/cloudflare-ai-gateway.md`：调整 cloudflare ai gateway docs（gateway runtime）。
- 修改 `docs/providers/deepseek.md`：调整 deepseek docs（docs）。
- 修改 `docs/providers/elevenlabs.md`：调整 elevenlabs docs（docs）。
- 修改 `docs/providers/fal.md`：调整 fal docs（docs）。
- 修改 `docs/providers/github-copilot.md`：调整 github copilot docs（docs）。
- 修改 `docs/providers/google.md`：调整 google docs（docs）。
- 修改 `docs/providers/groq.md`：调整 groq docs（docs）。
- 修改 `docs/providers/index.md`：调整 index docs（docs）。
- 修改 `docs/providers/kilocode.md`：调整 kilocode docs（docs）。
- 其余 22 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/providers` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/providers/change-to-test.md` 的验证建议。
