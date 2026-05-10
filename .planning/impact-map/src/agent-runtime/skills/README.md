# Skills Impact Subtree

Coverage: `deep-partial`
Freshness: 2026-05-08 remaining runtime split wave

## Parent module

- Impact module: `agent-runtime/`
- Subtree: `skills/`

## Purpose

Skill discovery, workspace skill snapshots, install/refresh helpers, and plugin-skill wiring.

## Split basis

The previous `skills/` leaf mixed prompt/inventory behavior with installer/download/fallback and refresh/frontmatter/filter helpers. `skills-core.log` only validates the first-validation core command, while `skills.log` failed for broader install/download/refresh/filter coverage. The subtree is therefore split and only the passing core child leaves are verified.

Evidence: `.planning/impact-map/evidence/src-agent-runtime-remaining-verified-wave-2026-05-08/AGENT-RUNTIME-REMAINING-VERIFIED-WAVE.md`.
