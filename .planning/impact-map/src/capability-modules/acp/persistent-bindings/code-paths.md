# ACP Persistent Bindings Code Paths

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

- Primary paths: `src/acp/persistent-bindings*.ts`
- Runtime handoff: Persistent ACP bindings resolve before runtime/session dispatch and must remain compatible with stored binding records.
