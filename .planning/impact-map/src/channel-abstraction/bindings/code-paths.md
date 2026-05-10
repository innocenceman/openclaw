# Bindings Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/channels/plugins/binding-*.ts`, `src/channels/plugins/configured-binding-*.ts`, `src/bindings/**`
- Runtime handoff: Binding config compiles into target/session lookup before routing or plugin channel dispatch.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `9` changed path(s) to this final leaf. `9` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 1, 'M': 8}`.

- `src/channels/plugins/binding-routing.test.ts`
- `src/channels/plugins/binding-routing.ts`
- `src/channels/plugins/binding-targets.test.ts`
- `src/channels/plugins/binding-targets.ts`
- `src/channels/plugins/binding-types.ts`
- `src/channels/plugins/configured-binding-compiler.ts`
- `src/channels/plugins/configured-binding-consumers.ts`
- `src/channels/plugins/configured-binding-match.ts`
- `src/channels/plugins/configured-binding-registry.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
