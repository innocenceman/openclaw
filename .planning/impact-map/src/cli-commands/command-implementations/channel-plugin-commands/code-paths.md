# Channel Plugin Commands Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/commands/channels*.ts`, `src/commands/channels/**`, `src/commands/channel-*.ts`, `src/commands/channel-setup/**`, `src/commands/configure.channels.ts`
- Runtime handoff: CLI channel commands configure or inspect channel/plugin state before crossing into channel abstraction or plugin runtime leaves.
