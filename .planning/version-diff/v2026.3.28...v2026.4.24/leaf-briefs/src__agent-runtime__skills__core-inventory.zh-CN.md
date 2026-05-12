# src/agent-runtime/skills/core-inventory

## 一句话结论

core inventory 所属的 Agent loop, ACP, spawning, command control 有 61 个路径变化（新增 13、修改 48），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/skills/core-inventory`
- Changed path count: `61`
- Status counts: `新增 13、修改 48`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `61` files, `+2722` / `-649`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 13、修改 48。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `skills/taskflow-inbox-triage/SKILL.md`
- `skills/taskflow/SKILL.md`
- `skills/taskflow/examples/inbox-triage.lobster`
- `skills/taskflow/examples/pr-intake.lobster`
- `src/agents/skills.bundled-frontmatter.test.ts`
- `src/agents/skills.env-path-guidance.test.ts`
- `src/agents/skills/agent-filter.ts`
- `src/agents/skills/command-specs.ts`
- `src/agents/skills/home-env.test-support.ts`
- `src/agents/skills/local-loader.ts`
- `src/agents/skills/refresh-state.ts`
- `src/agents/skills/skill-contract.ts`
- `src/agents/skills/source.ts`

### 修改

- `skills/1password/SKILL.md`
- `skills/apple-notes/SKILL.md`
- `skills/apple-reminders/SKILL.md`
- `skills/bluebubbles/SKILL.md`
- `skills/canvas/SKILL.md`
- `skills/clawhub/SKILL.md`
- `skills/coding-agent/SKILL.md`
- `skills/gh-issues/SKILL.md`
- `skills/github/SKILL.md`
- `skills/goplaces/SKILL.md`
- `skills/healthcheck/SKILL.md`
- `skills/himalaya/SKILL.md`
- `skills/mcporter/SKILL.md`
- `skills/model-usage/SKILL.md`
- `skills/model-usage/scripts/model_usage.py`
- `skills/node-connect/SKILL.md`
- `skills/openai-whisper-api/SKILL.md`
- `skills/oracle/SKILL.md`
- `skills/session-logs/SKILL.md`
- `skills/sherpa-onnx-tts/SKILL.md`
- `skills/skill-creator/SKILL.md`
- `skills/slack/SKILL.md`
- `skills/summarize/SKILL.md`
- `skills/things-mac/SKILL.md`
- `skills/wacli/SKILL.md`
- `skills/weather/SKILL.md`
- `skills/xurl/SKILL.md`
- `src/agents/skills-status.test.ts`
- `src/agents/skills-status.ts`
- `src/agents/skills.agents-skills-directory.test.ts`
- … 另有 18 个路径，详见 `leaf-impact.json`。

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- CLI/agent 使用者
- agent runtime 集成方

## 建议验证

- 首选验证：1. Run `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/agent-runtime/skills/core-inventory` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/skills/core-inventory/change-to-test.md` 的验证建议。
