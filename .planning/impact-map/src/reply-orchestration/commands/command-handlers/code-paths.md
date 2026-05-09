# Reply Command Handlers Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/auto-reply/reply/commands*.ts`, `src/auto-reply/reply/commands-acp/**`, `src/auto-reply/reply/commands-subagents/**`
- Runtime handoff: Registry-resolved commands dispatch into handler families that may cross ACP, plugin, subagent, or runtime execution surfaces.
