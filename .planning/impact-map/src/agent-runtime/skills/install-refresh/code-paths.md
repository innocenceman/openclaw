# Install Refresh Code Paths

Coverage: `verified`
Freshness: 2026-05-09 final cross-module audit

- Primary paths: `src/agents/skills-install*.ts`, `src/agents/skills/refresh.ts`, `src/agents/skills/frontmatter.ts`, `src/agents/skills/filter.ts`, `src/agents/skills/config.ts`, `src/agents/skills/env-overrides*.ts`, `src/agents/skills/tools-dir.ts`
- Runtime handoff: skill metadata is resolved before prompts, tools, or plugin-provided skill surfaces are exposed to agent execution.
