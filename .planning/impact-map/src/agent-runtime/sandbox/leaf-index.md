# Sandbox Leaf Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

| Leaf directory           | Coverage                   | Purpose                                                                              |
| ------------------------ | -------------------------- | ------------------------------------------------------------------------------------ |
| `backend-policy/`        | `verified`                 | Backend registration, sandbox config/policy, and security validation.                |
| `filesystem-bridge/`     | `exceptioned-deep-partial` | Sandbox filesystem bridge, path safety, and shell command bridge.                    |
| `workspace-browser-ssh/` | `exceptioned-deep-partial` | Workspace mounts, browser/noVNC, Docker/SSH adapters, and remote runtime operations. |
