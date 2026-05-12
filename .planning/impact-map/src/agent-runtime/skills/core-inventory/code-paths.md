# Core Inventory Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

- Primary paths: `src/agents/skills.ts`, `src/agents/skills-status.ts`, `src/agents/skills/bundled-context.ts`, `src/agents/skills/workspace.ts`, `src/agents/skills/serialize.ts`
- Runtime handoff: skill metadata is resolved before prompts, tools, or plugin-provided skill surfaces are exposed to agent execution.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `61` changed path(s) to this final leaf. `61` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 48, 'A': 13}`.

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
- `skills/taskflow-inbox-triage/SKILL.md`
- `skills/taskflow/SKILL.md`
- `skills/taskflow/examples/inbox-triage.lobster`
- `skills/taskflow/examples/pr-intake.lobster`
- `skills/things-mac/SKILL.md`
- `skills/wacli/SKILL.md`
- `skills/weather/SKILL.md`
- `... 另有 31 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `skills/coding-agent/SKILL.md`
- `skills/gifgrep/SKILL.md`
- `skills/pyproject.toml`
- `skills/skill-creator/scripts/test_package_skill.py`
- `src/agents/skills-status.test.ts`
- `src/agents/skills-status.ts`
- `src/agents/skills.build-workspace-skills-prompt.prefers-workspace-skills-managed-skills.test.ts`
- `src/agents/skills.buildworkspaceskillsnapshot.test.ts`
- `src/agents/skills.buildworkspaceskillstatus.test.ts`
- `src/agents/skills.loadworkspaceskillentries.test.ts`
- `src/agents/skills.test.ts`
- `src/agents/skills/snapshot-hydration.ts`
- `src/agents/skills/types.ts`
- `src/agents/skills/workspace.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
