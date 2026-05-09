# Memory Core Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled memory plugin `extensions/memory-core/` that contributes memory prompt guidance, `memory_search`, `memory_get`, and the `memory` CLI surface.

## Why this remains one leaf

Memory core has very little file surface, but it is the default slot-level memory owner and its single entrypoint determines how memory guidance and tools appear throughout the product.

## Entry contracts

- Plugin id and kind: `memory-core` / `memory` from `extensions/memory-core/openclaw.plugin.json` and `index.ts`.
- Package/install contract: `@openclaw/memory-core` from `extensions/memory-core/package.json`.
- Loader boundary: `extensions/memory-core/index.ts` registers prompt-section, tool, and CLI behavior.

## Primary behavior surfaces

- `extensions/memory-core/index.ts`: memory prompt section builder, tool registration for `memory_search` and `memory_get`, and memory CLI registration.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; memory-core tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-memory-core.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; memory-core, slots, config-state, and status scan tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.
