# Install Refresh Code Paths

Coverage: `verified`
Freshness: 2026-05-09 final cross-module audit

- Primary paths: `src/agents/skills-install*.ts`, `src/agents/skills/refresh.ts`, `src/agents/skills/frontmatter.ts`, `src/agents/skills/filter.ts`, `src/agents/skills/config.ts`, `src/agents/skills/env-overrides*.ts`, `src/agents/skills/tools-dir.ts`
- Runtime handoff: skill metadata is resolved before prompts, tools, or plugin-provided skill surfaces are exposed to agent execution.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `13` changed path(s) to this final leaf. `13` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 12, 'A': 1}`.

- `src/agents/skills-install-download.ts`
- `src/agents/skills-install-extract.ts`
- `src/agents/skills-install-fallback.test.ts`
- `src/agents/skills-install.download.test.ts`
- `src/agents/skills-install.test-mocks.ts`
- `src/agents/skills-install.test.ts`
- `src/agents/skills-install.ts`
- `src/agents/skills-install.types.ts`
- `src/agents/skills/config.ts`
- `src/agents/skills/env-overrides.ts`
- `src/agents/skills/frontmatter.ts`
- `src/agents/skills/refresh.test.ts`
- `src/agents/skills/refresh.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
