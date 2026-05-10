# Workspace Browser Ssh Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

- Primary paths: `src/agents/sandbox/workspace*.ts`, `src/agents/sandbox/browser*.ts`, `src/agents/sandbox/docker*.ts`, `src/agents/sandbox/ssh*.ts`, `src/agents/sandbox/remote-fs-bridge.ts`
- Runtime handoff: sandbox policy and runtime adapters gate tool execution before filesystem, browser, Docker, or SSH operations proceed.
