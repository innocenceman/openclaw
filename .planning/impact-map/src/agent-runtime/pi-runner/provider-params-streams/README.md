# Provider Params Streams Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

## Parent module

- Impact module: `agent-runtime/pi-runner/`
- Leaf: `provider-params-streams/`

## Purpose

Provider-specific params, stream wrappers, tool payload shaping, and model capabilities.

## 2026-05-08 result

Split only. Grouped provider-param commands failed with wrapper exit 1 and no retained Vitest failure output.

## 2026-05-09 final audit result

Exceptioned. The final provider params and stream wrapper targeted test set exited 1 after 159.7s with wrapper failure artifacts and no retained Vitest failure detail, so this high-blast-radius provider surface remains unverified. Evidence: `../../../evidence/final-cross-module-audit-2026-05-09/FINAL-CROSS-MODULE-AUDIT.md`.
