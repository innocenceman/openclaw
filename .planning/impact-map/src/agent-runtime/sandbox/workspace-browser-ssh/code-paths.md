# Workspace Browser Ssh Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

- Primary paths: `src/agents/sandbox/workspace*.ts`, `src/agents/sandbox/browser*.ts`, `src/agents/sandbox/docker*.ts`, `src/agents/sandbox/ssh*.ts`, `src/agents/sandbox/remote-fs-bridge.ts`
- Runtime handoff: sandbox policy and runtime adapters gate tool execution before filesystem, browser, Docker, or SSH operations proceed.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `16` changed path(s) to this final leaf. `16` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 13, 'A': 3}`.

- `src/agents/sandbox/browser-bridges.ts`
- `src/agents/sandbox/browser.create.test.ts`
- `src/agents/sandbox/browser.ts`
- `src/agents/sandbox/docker-backend.test.ts`
- `src/agents/sandbox/docker-backend.ts`
- `src/agents/sandbox/docker.config-hash-recreate.test.ts`
- `src/agents/sandbox/docker.ts`
- `src/agents/sandbox/remote-fs-bridge.test.ts`
- `src/agents/sandbox/remote-fs-bridge.ts`
- `src/agents/sandbox/ssh-backend.test.ts`
- `src/agents/sandbox/ssh-backend.ts`
- `src/agents/sandbox/ssh.spawn-env.test.ts`
- `src/agents/sandbox/ssh.test.ts`
- `src/agents/sandbox/ssh.ts`
- `src/agents/sandbox/workspace-mounts.test.ts`
- `src/agents/sandbox/workspace-mounts.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
