# Media Memory Sdk Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/plugin-sdk/media-*.ts`, `src/plugin-sdk/memory-*.ts`, `src/plugin-sdk/speech*.ts`, `src/plugin-sdk/web-media.ts`, `src/plugin-sdk/outbound-media.ts`
- Runtime handoff: Capability-oriented SDK helpers marshal payloads and guardrails before plugin runtime adapters consume them.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `2` changed path(s) to this final leaf. `2` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 2}`.

- `src/plugin-sdk/outbound-media.test.ts`
- `src/plugin-sdk/outbound-media.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
