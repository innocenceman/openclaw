# Workspace Browser Ssh File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

| Representative paths                                                                                                                                                          | Responsibility                                                                       | First validation                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| `src/agents/sandbox/workspace*.ts`, `src/agents/sandbox/browser*.ts`, `src/agents/sandbox/docker*.ts`, `src/agents/sandbox/ssh*.ts`, `src/agents/sandbox/remote-fs-bridge.ts` | Workspace mounts, browser/noVNC, Docker/SSH adapters, and remote runtime operations. | targeted workspace/browser/SSH/Docker tests plus device/container smoke when available |
