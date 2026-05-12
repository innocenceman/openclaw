# ACP Spawn Code Paths

Coverage: `verified`
Freshness: 2026-05-08 acp-spawn verified wave

- Primary paths: `src/agents/acp-spawn.ts`, `src/agents/acp-spawn-parent-stream.ts`, `src/agents/acp-binding-architecture.guardrail.test.ts`
- Runtime handoff: Agent runtime spawn behavior crosses into ACP session/control-plane ownership and parent stream propagation.

## Verified boundary

- Leaf-owned source: `src/agents/acp-spawn.ts` and `src/agents/acp-spawn-parent-stream.ts`.
- Leaf-owned tests: `src/agents/acp-spawn.test.ts`, `src/agents/acp-spawn-parent-stream.test.ts`, and `src/agents/acp-binding-architecture.guardrail.test.ts`.
- Direct caller boundary: `src/agents/tools/sessions-spawn-tool.ts`; validate with `src/agents/tools/sessions-spawn-tool.test.ts` when runtime/tool parameters change.
- Cross-links: downstream ACP control-plane/session behavior belongs to `src/capability-modules/acp/`; outbound thread binding belongs to `src/infra-outbound-delivery/`; gateway dispatch belongs to `src/gateway-api-surface/`.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `6` changed path(s) to this final leaf. `6` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 6}`.

- `src/agents/acp-spawn-parent-stream.test.ts`
- `src/agents/acp-spawn-parent-stream.ts`
- `src/agents/acp-spawn.test.ts`
- `src/agents/acp-spawn.ts`
- `src/agents/tools/sessions-spawn-tool.test.ts`
- `src/agents/tools/sessions-spawn-tool.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/agents/acp-spawn-parent-stream.test.ts`
- `src/agents/acp-spawn-parent-stream.ts`
- `src/agents/acp-spawn.test.ts`
- `src/agents/acp-spawn.ts`
- `src/agents/tools/sessions-spawn-tool.test.ts`
- `src/agents/tools/sessions-spawn-tool.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
