# test-infra/profiles-and-suites/test-scripts

## 1. 功能结论

**修改**：plugins harden kitchen sink live gauntlet、heartbeat align response tool prompts、force package update restart handoff、auto-reply keep group visible replies deliverable；**删除**：旧 runtime register 文件 删除 `register.runtime.ts` 这种 runtime helper re-export 面；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：文档语义变化、新增能力或入口、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：contains-renames
- 路径状态摘要（降级事实）：新增 9、修改 13、重命名 2

## 3. 功能级详细差异

### 修复 auto-reply keep group visible replies deliverable

文档/生成基线同步记录：修复 auto-reply：keep group visible replies deliverable

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修复 force package update restart handoff

文档/生成基线同步记录：修复 force package update restart handoff

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修复 heartbeat align response tool prompts

文档/生成基线同步记录：修复 heartbeat：align response tool prompts

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修改 [codex] Fix commitments safety and coverage

文档/生成基线同步记录：修改 [codex] Fix commitments safety and coverage

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 plugins harden kitchen sink live gauntlet

文档/生成基线同步记录：测试覆盖 plugins：harden kitchen sink live gauntlet

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 plugins split kitchen sink qa personalities

文档/生成基线同步记录：测试覆盖 plugins：split kitchen sink qa personalities

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 qa add gateway CPU scenario pack

文档/生成基线同步记录：测试覆盖 qa：add gateway CPU scenario pack

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 qa add kitchen sink plugin gauntlet

文档/生成基线同步记录：测试覆盖 qa：add kitchen sink plugin gauntlet

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 qa restore GPT-5.5 scenario live metadata

文档/生成基线同步记录：测试覆盖 qa：restore GPT-5.5 scenario live metadata

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 qa widen kitchen sink turn budget

文档/生成基线同步记录：测试覆盖 qa：widen kitchen sink turn budget

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 移除旧 runtime register 文件 删除 register.runtime.ts 这种 runtime helper re-exp…

文档/生成基线同步记录：移除旧 runtime register 文件：删除 `register.runtime.ts` 这种 runtime helper re-export 面，避免依赖旧的深层运行时入口。

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 subagent completion direct fallback docs、dm chat baseline docs、group message tool unavailable fallback docs、group visible reply tool docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/test-scripts`
- Changed path count: `24`
- Status counts: `新增 9、修改 13、重命名 2`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `23` files, `+1605` / `-122`

### 归纳依据

- 主要落点：mobile app runtime。
- 建议优先验证：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 相关 commit 主题：test(plugins): harden kitchen sink live gauntlet；fix(heartbeat): align response tool prompts；fix: force package update restart handoff；fix(auto-reply): keep group visible replies deliverable；[codex] Fix commitments safety and coverage；test(plugins): split kitchen sink qa personalities；test(qa): widen kitchen sink turn budget；test(qa): add kitchen sink plugin gauntlet

### Dimension evidence

- `tests-docs-修复-auto-reply-keep-group-visible-replies-delive` / 修复 auto-reply keep group visible replies deliverable:
  - source: `path` [M] `qa/scenarios/channels/group-message-tool-unavailable-fallback.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/group-visible-reply-tool.md` — semantic cue
- `tests-docs-修复-force-package-update-restart-handoff` / 修复 force package update restart handoff:
  - source: `path` [M] `qa/scenarios/config/config-restart-capability-flip.md` — semantic cue
  - source: `path` [M] `qa/scenarios/runtime/update-run-package-self-upgrade.md` — semantic cue
- `tests-docs-修复-heartbeat-align-response-tool-prompts` / 修复 heartbeat align response tool prompts:
  - source: `path` [M] `qa/scenarios/channels/group-message-tool-unavailable-fallback.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/group-visible-reply-tool.md` — semantic cue
  - source: `path` [M] `qa/scenarios/memory/commitments-heartbeat-target-none.md` — semantic cue
  - source: `path` [M] `qa/scenarios/runtime/compaction-retry-mutating-tool.md` — semantic cue
- `tests-docs-修改-codex-Fix-commitments-safety-and-coverage` / 修改 [codex] Fix commitments safety and coverage:
  - source: `path` [M] `qa/scenarios/memory/commitments-heartbeat-target-none.md` — semantic cue
  - source: `path` [M] `qa/scenarios/models/codex-harness-no-meta-leak.md` — semantic cue
  - source: `path` [M] `qa/scenarios/workspace/medium-game-plan-codex-harness.md` — semantic cue
- `tests-docs-测试覆盖-plugins-harden-kitchen-sink-live-gauntlet` / 测试覆盖 plugins harden kitchen sink live gauntlet:
  - source: `path` [M] `qa/scenarios/models/openai-native-web-search-live.md` — semantic cue
  - source: `path` [M] `qa/scenarios/plugins/kitchen-sink-live-openai.md` — semantic cue
- `tests-docs-测试覆盖-plugins-split-kitchen-sink-qa-personalities` / 测试覆盖 plugins split kitchen sink qa personalities:
  - source: `path` [M] `qa/scenarios/agents/subagent-completion-direct-fallback.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/dm-chat-baseline.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/group-message-tool-unavailable-fallback.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/group-visible-reply-tool.md` — semantic cue
  - source: `path` [M] `qa/scenarios/config/config-restart-capability-flip.md` — semantic cue
  - source: `path` [M] `qa/scenarios/config/crestodian-ring-zero-setup.md` — semantic cue
- `tests-docs-测试覆盖-qa-add-gateway-CPU-scenario-pack` / 测试覆盖 qa add gateway CPU scenario pack:
  - source: `path` [M] `qa/scenarios/agents/subagent-completion-direct-fallback.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/dm-chat-baseline.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/group-message-tool-unavailable-fallback.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/group-visible-reply-tool.md` — semantic cue
  - source: `path` [M] `qa/scenarios/config/config-restart-capability-flip.md` — semantic cue
  - source: `path` [M] `qa/scenarios/config/crestodian-ring-zero-setup.md` — semantic cue
- `tests-docs-测试覆盖-qa-add-kitchen-sink-plugin-gauntlet` / 测试覆盖 qa add kitchen sink plugin gauntlet:
  - source: `path` [M] `qa/scenarios/agents/subagent-completion-direct-fallback.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/dm-chat-baseline.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/group-message-tool-unavailable-fallback.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/group-visible-reply-tool.md` — semantic cue
  - source: `path` [M] `qa/scenarios/config/config-restart-capability-flip.md` — semantic cue
  - source: `path` [M] `qa/scenarios/config/crestodian-ring-zero-setup.md` — semantic cue
- `tests-docs-测试覆盖-qa-restore-GPT-5-5-scenario-live-metadata` / 测试覆盖 qa restore GPT-5.5 scenario live metadata:
  - source: `path` [M] `qa/scenarios/agents/subagent-completion-direct-fallback.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/dm-chat-baseline.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/group-message-tool-unavailable-fallback.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/group-visible-reply-tool.md` — semantic cue
  - source: `path` [M] `qa/scenarios/config/config-restart-capability-flip.md` — semantic cue
  - source: `path` [M] `qa/scenarios/config/crestodian-ring-zero-setup.md` — semantic cue
- `tests-docs-测试覆盖-qa-widen-kitchen-sink-turn-budget` / 测试覆盖 qa widen kitchen sink turn budget:
  - source: `path` [M] `qa/scenarios/agents/subagent-completion-direct-fallback.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/dm-chat-baseline.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/group-message-tool-unavailable-fallback.md` — semantic cue
  - source: `path` [M] `qa/scenarios/channels/group-visible-reply-tool.md` — semantic cue
  - source: `path` [M] `qa/scenarios/config/config-restart-capability-flip.md` — semantic cue
  - source: `path` [M] `qa/scenarios/config/crestodian-ring-zero-setup.md` — semantic cue
- `tests-docs-移除旧-runtime-register-文件-删除-register-runtime-ts` / 移除旧 runtime register 文件 删除 register.runtime.ts 这种 runtime helper re-exp…:
  - source: `path` [M] `qa/scenarios/runtime/compaction-retry-mutating-tool.md` — semantic cue
  - source: `path` [M] `qa/scenarios/runtime/docker-prometheus-smoke.md` — semantic cue
  - source: `path` [M] `qa/scenarios/runtime/otel-trace-smoke.md` — semantic cue
  - source: `path` [M] `qa/scenarios/runtime/reasoning-only-no-auto-retry-after-write.md` — semantic cue
  - source: `path` [M] `qa/scenarios/runtime/update-run-package-self-upgrade.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `qa/scenarios/agents/subagent-completion-direct-fallback.md` — docs evidence
  - source: `path` [M] `qa/scenarios/channels/dm-chat-baseline.md` — docs evidence
  - source: `path` [M] `qa/scenarios/channels/group-message-tool-unavailable-fallback.md` — docs evidence
  - source: `path` [M] `qa/scenarios/channels/group-visible-reply-tool.md` — docs evidence
  - source: `path` [M] `qa/scenarios/config/config-restart-capability-flip.md` — docs evidence
  - source: `path` [M] `qa/scenarios/config/crestodian-ring-zero-setup.md` — docs evidence

### 路径证据

- 新增 `qa/scenarios/agents/subagent-completion-direct-fallback.md`：调整 subagent completion direct fallback docs（mobile app runtime）。
- 新增 `qa/scenarios/channels/group-message-tool-unavailable-fallback.md`：调整 group message tool unavailable fallback docs（mobile app runtime）。
- 新增 `qa/scenarios/channels/group-visible-reply-tool.md`：调整 group visible reply tool docs（mobile app runtime）。
- 新增 `qa/scenarios/config/crestodian-ring-zero-setup.md`：调整 crestodian ring zero setup docs（mobile app runtime）。
- 新增 `qa/scenarios/memory/commitments-heartbeat-target-none.md`：调整 commitments heartbeat target none docs（mobile app runtime）。
- 新增 `qa/scenarios/plugins/kitchen-sink-live-openai.md`：调整 kitchen sink live openai docs（mobile app runtime）。
- 新增 `qa/scenarios/runtime/docker-prometheus-smoke.md`：调整 docker prometheus smoke docs（mobile app runtime）。
- 新增 `qa/scenarios/runtime/otel-trace-smoke.md`：调整 otel trace smoke docs（mobile app runtime）。
- 新增 `qa/scenarios/runtime/update-run-package-self-upgrade.md`：调整 update run package self upgrade docs（mobile app runtime）。
- 修改 `qa/scenarios/channels/dm-chat-baseline.md`：调整 dm chat baseline docs（mobile app runtime）。
- 修改 `qa/scenarios/config/config-restart-capability-flip.md`：调整 config restart capability flip docs（mobile app runtime）。
- 修改 `qa/scenarios/memory/memory-failure-fallback.md`：调整 memory failure fallback docs（mobile app runtime）。
- 修改 `qa/scenarios/memory/session-memory-ranking.md`：调整 session memory ranking docs（mobile app runtime）。
- 修改 `qa/scenarios/models/codex-harness-no-meta-leak.md`：调整 codex harness no meta leak docs（mobile app runtime）。
- 修改 `qa/scenarios/models/model-switch-follow-up.md`：调整 model switch follow up docs（mobile app runtime）。
- 修改 `qa/scenarios/models/openai-native-web-search-live.md`：调整 openai native web search live docs（mobile app runtime）。
- 修改 `qa/scenarios/models/thinking-slash-model-remap.md`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `qa/scenarios/runtime/compaction-retry-mutating-tool.md`：调整 compaction retry mutating tool docs（mobile app runtime）。
- 修改 `qa/scenarios/runtime/reasoning-only-no-auto-retry-after-write.md`：调整 reasoning only no auto retry after write docs（mobile app runtime）。
- 修改 `qa/scenarios/workspace/long-running-release-audit.md`：调整 long running release audit docs（mobile app runtime）。
- 修改 `qa/scenarios/workspace/medium-game-plan-codex-harness.md`：调整 medium game plan codex harness docs（mobile app runtime）。
- 重命名 `qa/scenarios/models/gpt54-thinking-visibility-switch.md`：新增/调整模型识别与 thinking/reasoning policy。
- 重命名 `qa/scenarios/models/gpt55-thinking-visibility-switch.md`：新增/调整模型识别与 thinking/reasoning policy。
- 其余 1 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `test-infra/profiles-and-suites/test-scripts` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/test-infra/profiles-and-suites/test-scripts/change-to-test.md` 的验证建议。
