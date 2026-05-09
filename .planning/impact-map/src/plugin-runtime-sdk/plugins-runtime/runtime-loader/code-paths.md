# Runtime Loader Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/plugins/loader.ts`, `src/plugins/discovery.ts`, `src/plugins/install*.ts`, `src/plugins/manifest-registry.ts`, `src/plugins/runtime/index.ts`
- Runtime handoff: Discovery and loader phases resolve plugin roots/manifests before runtime adapters or registries activate them.
