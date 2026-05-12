# Runtime Loader Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/plugins/loader.ts`, `src/plugins/discovery.ts`, `src/plugins/install*.ts`, `src/plugins/manifest-registry.ts`, `src/plugins/runtime/index.ts`
- Runtime handoff: Discovery and loader phases resolve plugin roots/manifests before runtime adapters or registries activate them.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `4` changed path(s) to this final leaf. `4` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 4}`.

- `src/plugins/manifest-registry.test.ts`
- `src/plugins/manifest-registry.ts`
- `src/plugins/runtime/index.test.ts`
- `src/plugins/runtime/index.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/plugins/manifest-registry.test.ts`
- `src/plugins/manifest-registry.ts`
- `src/plugins/runtime/index.test.ts`
- `src/plugins/runtime/index.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
