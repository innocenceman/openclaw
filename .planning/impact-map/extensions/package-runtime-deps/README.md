# Package Runtime Dependencies

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G006 extension plugin wave evidence recorded

## Scope

Extension package dependency placement, production install behavior, package staging, release checks, lazy/runtime loading boundaries, and plugin-local runtime bootstrap code such as `extensions/memory-lancedb/lancedb-runtime.ts`.

## Observed facts

- 75 extension `package.json` files exist.
- 16 extension packages currently reference `openclaw` as `workspace:*` in `devDependencies` and also declare `openclaw` peer dependency `>=2026.3.22`.
- No `workspace:*` entries were observed in extension runtime `dependencies` in the Wave 2R scan.
- Metadata-only or internally bundled plugins without package files observed: `device-pair`, `phone-control`, `qwen-portal-auth`, `talk-voice`, `thread-ownership`.
- `memory-lancedb` is the clearest plugin-local runtime-dependency hotspot: its package owns `@lancedb/lancedb` and `openai`, while `lancedb-runtime.ts` can install a fallback runtime under the OpenClaw state directory.

## Runtime dependency rule

Install-on-demand runs `npm install --omit=dev` in the plugin directory. Therefore any package imported by extension production code must be available through runtime `dependencies`, `peerDependencies` supplied by OpenClaw, or supported runtime-provided public SDK seams.

## Risk triggers

- Moving a dependency between `dependencies`, `devDependencies`, `peerDependencies`, or `optionalDependencies`.
- Adding `workspace:*` outside dev-only local development references.
- Importing a dependency from production code while declaring it only in dev deps.
- Changing package names, entrypoints, exports, bundled staging scripts, or release plugin checks.
- Touching lazy-loaded provider SDKs or mixing static and dynamic imports for the same production module.
- Adding plugin-local runtime installers or fallback `npm install` logic similar to `memory-lancedb`.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; runtime dependency tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-package-runtime-deps.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; runtime dependency staging tests passed; `stageBundledPluginRuntimeDeps` GitNexus impact is LOW.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

## 2026-05-09 G006 exception

Decision: `exceptioned-deep-partial`.

Reason: the current package/runtime check `pnpm stage:bundled-plugin-runtime-deps` fails while staging bundled runtime dependencies for `discord` because `npm install` fails in this environment. Boundary/package metadata checks and plugin npm release checks passed, but the install-staging failure prevents a fresh `verified` claim for runtime dependency install behavior.

Evidence: `.planning/impact-map/evidence/extensions-all-verified-wave-2026-05-09/logs/pnpm_stage_bundled-plugin-runtime-deps.log`.
