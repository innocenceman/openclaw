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
