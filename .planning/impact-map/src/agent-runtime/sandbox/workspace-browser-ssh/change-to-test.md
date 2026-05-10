# Workspace Browser Ssh Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

1. Run targeted workspace/browser/SSH/Docker tests plus device/container smoke when available.
2. Escalate to `pnpm build` when sandbox runtime boundaries or browser bridges affect packaged output.
3. For Docker/SSH/browser behavior, run container or remote smoke checks only when the environment is available.
