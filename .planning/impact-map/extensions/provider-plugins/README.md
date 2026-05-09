# Provider Plugins

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G006 extension plugin wave evidence recorded

## Scope

Manifest-backed provider plugins under `extensions/provider-plugins/*`, including auth choice metadata, model catalog/discovery helpers, provider-specific transport wrappers, onboarding/config defaults, and optional media/image/web-search capabilities registered by a provider plugin.

## Observed provider shapes

- Root-entrypoint-only providers such as `openrouter/` and `ollama/` keep most behavior in `index.ts` plus a small helper file set.
- Multi-surface providers such as `openai/` and `google/` also register speech, media-understanding, image-generation, or web-search capabilities from the same plugin package.
- Some provider families export helper catalogs without a standalone plugin manifest. `extensions/anthropic-vertex/provider-catalog.ts` is one current support-only example and is intentionally outside the manifest-backed leaf index.

## Priority leaves deepened in Wave 2R

`anthropic/`, `google/`, `ollama/`, `openai/`, and `openrouter/` now have deepened leaf docs because they are the provider/auth/runtime hotspots called out by the Wave 2R plan.

## Use this family

- Start at `leaf-index.md` to locate the provider package.
- Use the leaf `README.md` for entry contracts and dominant behavior surfaces.
- Use the leaf `change-to-test.md` for the smallest validation ladder before broad provider or build checks.

## 2026-05-08 P0 refresh-to-verified evidence

Priority provider leaves `anthropic/`, `google/`, `ollama/`, `openai/`, and `openrouter/` are now `verified` for the bounded P0 slice. The family aggregate remains `partial` because non-priority provider leaves remain `partial`.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`.

## 2026-05-09 G006 extension plugin wave

Decision: `exceptioned-deep-partial`.

Provider leaves with passing focused tests were promoted, but Google currently fails network-dependent tests and provider packages with no colocated tests remain exceptioned.

Evidence: `.planning/impact-map/evidence/extensions-all-verified-wave-2026-05-09/EXTENSIONS-ALL-VERIFIED-WAVE.md`.
