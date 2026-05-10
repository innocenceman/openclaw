# Network Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/infra/net/**`
- Runtime handoff: Network guards wrap remote fetches before media, plugin, or browser/runtime consumers use them.
