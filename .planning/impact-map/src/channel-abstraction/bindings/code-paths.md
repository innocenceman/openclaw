# Bindings Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/channels/plugins/binding-*.ts`, `src/channels/plugins/configured-binding-*.ts`, `src/bindings/**`
- Runtime handoff: Binding config compiles into target/session lookup before routing or plugin channel dispatch.
