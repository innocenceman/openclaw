# Channel, Plugin, Infra, and Config Verified Wave

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus + code-review-graph + targeted tests

## Scope

This wave covers ultragoal `G004-src-channel-plugin-infra-config`:

- `src/channel-abstraction/`
- `src/plugin-runtime-sdk/`
- `src/infra-outbound-delivery/`
- `src/config-secrets-security/`

It does not repeat already completed ACP or ACP-spawn verified waves and does not edit product source.

## Boundary and split decision

| Boundary                                  | Decision                                                           | Reason                                                                                                                                                                                                                                                 |
| ----------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/channel-abstraction/`                | keep existing leaves; promote to `verified`                        | Existing leaves match separate channel core, plugin bridge, binding, allowlist, transport, and routing test ladders. Targeted channel/routing tests passed.                                                                                            |
| `src/plugin-runtime-sdk/plugin-sdk/`      | keep existing leaves; aggregate remains `exceptioned-deep-partial` | Public/provider/channel leaves were already verified; tool and media/memory SDK leaves now have passing targeted tests. `api-drift/` remains exceptioned because the standard `pnpm plugin-sdk:api:check` OOMs, although the high-memory rerun passes. |
| `src/plugin-runtime-sdk/plugins-runtime/` | keep existing leaves; promote to `verified`                        | Runtime loader, contracts, boundary, adapters, and test-helper consumer suites passed. No further split was needed.                                                                                                                                    |
| `src/infra-outbound-delivery/`            | keep existing leaves; promote to `verified`                        | Delivery, routing, actions, identity, network, TLS, and formatting have distinct first-test ladders and all passed.                                                                                                                                    |
| `src/config-secrets-security/`            | keep existing leaves; promote to `verified`                        | Config IO/schema/sessions/legacy/security and split secrets-resolution leaves have distinct validation ladders and all passed.                                                                                                                         |

## GitNexus evidence

MCP `gitnexus_context` confirmed key incoming/outgoing call boundaries for:

- `deliverOutboundPayloads` in `src/infra/outbound/deliver.ts`: callers include reply routing, gateway send methods, heartbeat/cron delivery, agent command delivery, and media transcript echo; downstream queue calls include `enqueueDelivery`, `ackDelivery`, `failDelivery`, and `deliverOutboundPayloadsCore`.
- `discoverOpenClawPlugins` in `src/plugins/discovery.ts`: callers include plugin loader, manifest registry, bundled source resolution, channel plugin catalog, and discovery tests; downstream calls resolve roots/cache and directory/path discovery helpers.
- `definePluginEntry` in `src/plugin-sdk/plugin-entry.ts`: used by many extension package entrypoints plus provider/channel SDK wrappers.
- `resolveSecretInputString` in `src/secrets/resolve-secret-input-string.ts`: gateway secret input resolution calls into secret ref string and input-ref parsing.

CLI `npx gitnexus impact` was used as a fallback when MCP impact calls returned `user cancelled MCP tool call`. Representative impact logs are under `logs/gitnexus-impact-*.log`:

| Symbol                      | Risk     | Key result                                                                                                                                                         |
| --------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `compileAllowlist`          | LOW      | No upstream callers in the current graph; bounded by allowlist tests.                                                                                              |
| `discoverOpenClawPlugins`   | CRITICAL | 53 impacted symbols, 5 direct callers, 1 affected process, 13 modules; validates plugin runtime as a high-risk but bounded slice.                                  |
| `definePluginEntry`         | CRITICAL | 80 impacted symbols, 46 direct callers, mainly extension entrypoints; validates Plugin SDK public-contract coverage.                                               |
| `deliverOutboundPayloads`   | CRITICAL | 29 impacted symbols, 14 direct callers, affected `dispatchReplyFromConfig` and `startGatewayServer` processes; validates outbound delivery as a critical boundary. |
| `resolveOutboundTarget`     | HIGH     | 15 impacted symbols, 8 direct callers across outbound/agents/infra; validates outbound routing and target/session tests.                                           |
| `fetchWithSsrFGuard`        | CRITICAL | 17 direct callers across net/media/memory/provider surfaces; validates network/SSRF tests.                                                                         |
| `resolveSecretInputString`  | LOW      | Direct gateway secret resolution caller; bounded by secret-ref/gateway CLI tests.                                                                                  |
| `resolvePluginManifestPath` | LOW      | 5 impacted symbols through manifest registry/install/bundled/catalog paths.                                                                                        |

## code-review-graph evidence

`code-review-graph status` reported 80,930 nodes, 732,204 edges, 8,574 files, `Last updated: 2026-05-08T11:31:24`, built at commit `f99ef11b272b`. `git diff --name-only f99ef11b272b -- src/channels src/routing src/plugin-sdk src/plugins src/infra src/config src/secrets src/security` returned empty, so the graph remains fresh for this bounded slice.

Risk query highlights from `.code-review-graph/graph.db` are recorded in `logs/code-review-graph-risk.log`:

- Channel/routing risk centers include session recording, account credential projection, command gating, binding session lookup, and routing session-key helpers.
- Plugin SDK/runtime risk centers include `buildChannelOutboundSessionRoute`, provider auth result helpers, provider auth storage/input, plugin-owned session binding, and provider runtime auth.
- Outbound/infra risk centers include base session key construction, session binding service, session delivery target resolution, network SSRF/proxy helpers, and TLS fingerprint/runtime helpers.
- Config/secrets/security risk centers include secret input parsing/coercion, session store/main-session helpers, runtime secret collection, secret ref contracts, secrets audit/apply, and security filesystem/secret guards.

## Validation matrix

| Leaf                                                                        | Status                     | Evidence                                                                                               |
| --------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------ |
| `channel-abstraction/core-abstractions/`                                    | `verified`                 | `channel-core.log` PASS.                                                                               |
| `channel-abstraction/allowlists/`                                           | `verified`                 | `channel-allowlists.log` PASS.                                                                         |
| `channel-abstraction/bindings/`                                             | `verified`                 | `channel-bindings.log` PASS.                                                                           |
| `channel-abstraction/plugin-bridge/`                                        | `verified`                 | `channel-plugin-bridge.log` PASS.                                                                      |
| `channel-abstraction/transport/`                                            | `verified`                 | `channel-transport.log` PASS.                                                                          |
| `channel-abstraction/routing/{target-resolution,compatibility-paths}/`      | `verified`                 | Prior P0 routing verification remains current; channel/routing source diff from graph commit is empty. |
| `plugin-runtime-sdk/plugin-sdk/tool-sdk/`                                   | `verified`                 | `plugin-sdk-tool.log` PASS.                                                                            |
| `plugin-runtime-sdk/plugin-sdk/media-memory-sdk/`                           | `verified`                 | `plugin-sdk-media-memory.log` PASS.                                                                    |
| `plugin-runtime-sdk/plugin-sdk/api-drift/`                                  | `exceptioned-deep-partial` | `plugin-sdk-api-check.log` FAILS with Node heap OOM; `plugin-sdk-api-check-node8192.log` PASS.         |
| `plugin-runtime-sdk/plugins-runtime/runtime-loader/`                        | `verified`                 | `plugin-runtime-loader.log` PASS.                                                                      |
| `plugin-runtime-sdk/plugins-runtime/contracts/`                             | `verified`                 | `plugin-runtime-contracts.log` PASS.                                                                   |
| `plugin-runtime-sdk/plugins-runtime/boundary-enforcement/`                  | `verified`                 | `plugin-runtime-boundary.log` PASS.                                                                    |
| `plugin-runtime-sdk/plugins-runtime/runtime-adapters/`                      | `verified`                 | `plugin-runtime-adapters.log` PASS.                                                                    |
| `plugin-runtime-sdk/plugins-runtime/test-helpers/`                          | `verified`                 | Helper-only leaf covered by passing plugin runtime loader/contracts/adapters consumer suites.          |
| `infra-outbound-delivery/outbound-delivery/`                                | `verified`                 | `infra-outbound-delivery.log` PASS.                                                                    |
| `infra-outbound-delivery/outbound-routing/`                                 | `verified`                 | `infra-outbound-routing.log` PASS.                                                                     |
| `infra-outbound-delivery/outbound-actions/`                                 | `verified`                 | `infra-outbound-actions.log` PASS.                                                                     |
| `infra-outbound-delivery/outbound-identity/`                                | `verified`                 | `infra-outbound-identity.log` PASS.                                                                    |
| `infra-outbound-delivery/network/`                                          | `verified`                 | `infra-network.log` PASS.                                                                              |
| `infra-outbound-delivery/tls/`                                              | `verified`                 | `infra-tls.log` PASS.                                                                                  |
| `infra-outbound-delivery/formatting/`                                       | `verified`                 | `infra-formatting.log` PASS.                                                                           |
| `config-secrets-security/config-io/`                                        | `verified`                 | `config-io.log` PASS.                                                                                  |
| `config-secrets-security/config-schema-validation/`                         | `verified`                 | `config-schema.log` PASS; `config-docs-check.log` PASS.                                                |
| `config-secrets-security/sessions/`                                         | `verified`                 | `config-sessions.log` PASS.                                                                            |
| `config-secrets-security/legacy-migration/`                                 | `verified`                 | `config-legacy.log` PASS.                                                                              |
| `config-secrets-security/security-guards/`                                  | `verified`                 | `config-security.log` PASS.                                                                            |
| `config-secrets-security/secrets-resolution/secret-ref-contracts/`          | `verified`                 | `secrets-ref-contracts.log` PASS.                                                                      |
| `config-secrets-security/secrets-resolution/secret-target-registry/`        | `verified`                 | `secrets-target-registry.log` PASS.                                                                    |
| `config-secrets-security/secrets-resolution/runtime-secret-collection/`     | `verified`                 | `secrets-runtime.log` PASS.                                                                            |
| `config-secrets-security/secrets-resolution/gateway-cli-secret-resolution/` | `verified`                 | `secrets-gateway-cli.log` PASS.                                                                        |
| `config-secrets-security/secrets-resolution/secret-storage-audit/`          | `verified`                 | `secrets-storage-audit.log` PASS.                                                                      |

## Static, build, and audit evidence

- PASS: 28 targeted test commands, 98 test files plus the config/session follow-up set; all exited 0. Raw logs are under `logs/`.
- PASS: `pnpm config:docs:check`; recorded in `logs/config-docs-check.log`.
- PASS with high-memory exception: `NODE_OPTIONS=--max-old-space-size=8192 pnpm plugin-sdk:api:check`; recorded in `logs/plugin-sdk-api-check-node8192.log`.
- EXCEPTION: standard `pnpm plugin-sdk:api:check` fails with Node heap OOM; recorded in `logs/plugin-sdk-api-check.log`. This keeps `plugin-sdk/api-drift/` at `exceptioned-deep-partial`.
- EXCEPTION: `pnpm build` failed in `scripts/runtime-postbuild.mjs` while staging bundled runtime deps for `discord` because `npm install` failed; recorded in `logs/build.log`. A timeboxed rerun hit the same build phase and timed out at 300s after A2UI stayed up to date; recorded in `logs/build-rerun-timeout.log`.
- PASS: `git diff --check -- .planning`; recorded in `logs/diff-check-planning.log`.
- PASS: `pnpm exec oxfmt --check` over the touched planning/evidence roots; recorded in `logs/oxfmt-planning.log`.
- EXCEPTION: `pnpm dlx markdownlint-cli2` could not run under restricted network/cache setup (`EPERM` registry fetch, then pnpm dlx cache `ENOENT`); recorded in `logs/markdownlint-planning.log`.
- PASS: `git diff --name-only f99ef11b272b -- src/channels src/routing src/plugin-sdk src/plugins src/infra src/config src/secrets src/security` returned empty; recorded in `logs/crg-diff-source-clean.log`.
- PASS: product source diff audit `git diff --name-only -- src apps extensions packages scripts docs package.json pnpm-lock.yaml` returned empty; recorded in `logs/product-source-diff.log`.

## Coverage decision

Promote leaves with passing targeted validation to `verified`. Keep `plugin-runtime-sdk/plugin-sdk/api-drift/`, the `plugin-sdk/` aggregate, and the top-level `plugin-runtime-sdk/` aggregate at `exceptioned-deep-partial` because the standard API drift command still OOMs, even though the high-memory run passes. The other three target modules are `verified`.

## Verifier and architect approval

APPROVED. Native architect and verifier review both approved after final synchronization fixes.

- Architect approval: confirmed channel, infra, and config are coherently verified; `plugin-runtime-sdk/` remains exceptioned only for `plugin-sdk/api-drift/`; build and markdownlint exceptions are disclosed rather than overclaimed.
- Verifier approval: confirmed raw log exit codes match the evidence matrix, `logs/results.tsv` has all 28 targeted rows including `config-sessions`, target coverage labels are synchronized, final static audits passed, and product source diff is empty.
