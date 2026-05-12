# Docs gateway

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `docs/gateway/**` within the Mintlify docs surface.

## Observed facts

34 files and 34 Markdown pages are present under `docs/gateway/`.
An `docs/gateway/index.md` page is present and acts as the local entrypoint.
Sample files:

- `docs/gateway/authentication.md`
- `docs/gateway/background-process.md`
- `docs/gateway/bonjour.md`
- `docs/gateway/bridge-protocol.md`
  Route groups, redirects, and top-level page ordering still flow through `docs/docs.json`.

## Incoming dependencies

- Other docs pages and Mintlify nav groups route readers into this leaf.
- Root-relative internal links and image references can break when page or asset paths move.
- English page-title and short-label changes can trigger glossary coverage requirements before any zh-CN rerun.

## Outgoing dependencies

- Docs validation starts with `pnpm check:docs` or the narrower `pnpm docs:check-links` / `pnpm docs:check-i18n-glossary` checks.
- When translation work is explicitly requested, the next dependency is `scripts/docs-i18n` plus `docs/.i18n` glossary/TM assets.

## Risk triggers

- Renaming or moving pages without updating `docs/docs.json` navigation, redirects, or local index links.
- Changing root-relative links or embedded asset paths without rerunning docs link checks.
- Adding new English titles or short labels without adding required glossary coverage before a translation rerun.

## Validation status

No product tests, docs builds, or translation reruns were executed for this leaf during Wave 4. Coverage is based on repo-native inspection of the current tree, package scripts, and adjacent docs tooling.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `docs-generated-baselines`.
- Risk: `medium`.
- Compatibility: `docs-only`.
- Changed paths in this leaf: `39` (修改 34，新增 5).
- Target-existing changed paths listed here: `39`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `docs/gateway/authentication.md`
- `docs/gateway/background-process.md`
- `docs/gateway/bonjour.md`
- `docs/gateway/bridge-protocol.md`
- `docs/gateway/cli-backends.md`
- `docs/gateway/config-agents.md`
- `docs/gateway/config-channels.md`
- `docs/gateway/config-tools.md`
- `docs/gateway/configuration-examples.md`
- `docs/gateway/configuration-reference.md`
- `docs/gateway/configuration.md`
- `docs/gateway/diagnostics.md`
- `... 另有 27 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `docs-generated-baselines`
- Risk: `medium`
- Compatibility: `docs-only`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `38`
- Target-existing changed paths reflected here: `38`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `docs/gateway/authentication.md`
- `docs/gateway/background-process.md`
- `docs/gateway/bonjour.md`
- `docs/gateway/cli-backends.md`
- `docs/gateway/config-agents.md`
- `docs/gateway/config-channels.md`
- `docs/gateway/config-tools.md`
- `docs/gateway/configuration-examples.md`
- `docs/gateway/configuration-reference.md`
- `docs/gateway/configuration.md`
- `docs/gateway/diagnostics.md`
- `docs/gateway/discovery.md`
- `docs/gateway/doctor.md`
- `docs/gateway/gateway-lock.md`
- `docs/gateway/health.md`
- `docs/gateway/heartbeat.md`
- `docs/gateway/index.md`
- `docs/gateway/local-models.md`
- `docs/gateway/logging.md`
- `docs/gateway/multiple-gateways.md`
- `docs/gateway/openai-http-api.md`
- `docs/gateway/openresponses-http-api.md`
- `docs/gateway/openshell.md`
- `docs/gateway/opentelemetry.md`
- `docs/gateway/operator-scopes.md`
- `docs/gateway/pairing.md`
- `docs/gateway/prometheus.md`
- `docs/gateway/protocol.md`
- `docs/gateway/remote-gateway-readme.md`
- `docs/gateway/remote.md`
- `docs/gateway/sandboxing.md`
- `docs/gateway/secrets.md`
- `docs/gateway/security/audit-checks.md`
- `docs/gateway/security/index.md`
- `docs/gateway/tailscale.md`
- `docs/gateway/tools-invoke-http-api.md`
- `docs/gateway/troubleshooting.md`
- `docs/gateway/trusted-proxy-auth.md`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
