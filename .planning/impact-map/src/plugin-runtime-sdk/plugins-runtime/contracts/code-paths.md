# Contracts Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/plugins/contracts/**`, `src/plugins/manifest.ts`, `src/plugins/schema-validator.ts`
- Runtime handoff: Contracts validate manifests and runtime shape before plugin loading or registry publication proceeds.
