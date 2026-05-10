# Boundary Enforcement Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/plugins/sdk-alias.ts`, `src/plugins/bundled-plugin-naming.test.ts`, `src/plugins/install-security-scan.ts`, `src/plugins/runtime/runtime-plugin-boundary.ts`
- Runtime handoff: Boundary helpers enforce safe imports, manifest/package invariants, and runtime guardrails before plugin activation.
