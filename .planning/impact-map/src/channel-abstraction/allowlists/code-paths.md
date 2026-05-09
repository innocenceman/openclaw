# Allowlists Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/channels/allowlist-match.ts`, `src/channels/allowlists/**`, `src/channels/plugins/allowlist-match.ts`
- Runtime handoff: Allowlist/group policy checks run before command/reply dispatch and can short-circuit channel handling.
