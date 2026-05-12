# ACP Runtime Session Identity Code Paths

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

- Primary paths: `src/acp/runtime/**`, `src/acp/session*.ts`, `src/acp/session-mapper.ts`, `src/acp/conversation-id.ts`
- Runtime handoff: Translator/control-plane code resolves runtime session identity here before dispatching or reconnecting ACP sessions.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `13` changed path(s) to this final leaf. `13` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 11, 'A': 2}`.

- `src/acp/conversation-id.ts`
- `src/acp/runtime/adapter-contract.testkit.ts`
- `src/acp/runtime/errors.test.ts`
- `src/acp/runtime/errors.ts`
- `src/acp/runtime/registry.test.ts`
- `src/acp/runtime/registry.ts`
- `src/acp/runtime/session-identifiers.ts`
- `src/acp/runtime/session-identity.ts`
- `src/acp/runtime/session-meta.test.ts`
- `src/acp/runtime/session-meta.ts`
- `src/acp/runtime/types.ts`
- `src/acp/session-interaction-mode.test.ts`
- `src/acp/session-interaction-mode.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/acp/runtime/adapter-contract.testkit.ts`
- `src/acp/runtime/availability.ts`
- `src/acp/runtime/registry.test.ts`
- `src/acp/runtime/session-meta.ts`
- `src/acp/runtime/types.ts`
- `src/acp/session-interaction-mode.test.ts`
- `src/acp/session-interaction-mode.ts`
- `src/acp/session-mapper.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
