# Core Inventory Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

- Primary paths: `src/agents/skills.ts`, `src/agents/skills-status.ts`, `src/agents/skills/bundled-context.ts`, `src/agents/skills/workspace.ts`, `src/agents/skills/serialize.ts`
- Runtime handoff: skill metadata is resolved before prompts, tools, or plugin-provided skill surfaces are exposed to agent execution.
