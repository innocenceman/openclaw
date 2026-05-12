# tlon Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                         | Trace start                                                                                                                 | Likely downstream impact                                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Manifest/package to registry | `openclaw.plugin.json` -> `package.json` -> `index.ts`                                                                      | Channel discovery, bundled skill registration, install docs, runtime deps, and tool exposure.                          |
| Tlon CLI tool                | `index.ts` `registerFull` -> shell split -> allowlisted subcommand -> `@tloncorp/tlon-skill` binary                         | Tool API surface, command allowlist safety, binary resolution, and subprocess output/error handling.                   |
| Setup/config                 | `setup-entry.ts` -> `src/channel.ts` setup proxy -> `src/setup-core.ts` / `src/setup-surface.ts` -> `src/urbit/base-url.ts` | Ship/code/url setup, private network approval, group channel prompts, DM allowlist, auto-discovery, and SSRF boundary. |
| Lazy runtime                 | `src/channel.ts` -> `createLazyRuntimeModule` -> `src/channel.runtime.ts`                                                   | Probe, gateway monitor, outbound delegates, setup status/finalize, and dynamic import/build behavior.                  |
| Status/probe                 | `src/channel.ts` status -> `src/channel.runtime.ts` -> Urbit auth/fetch/context                                             | Configured status, ship/url summaries, login reachability, and status issues.                                          |
| Target/session routing       | `src/targets.ts` -> `src/session-route.ts` -> `src/channel.ts` messaging                                                    | DM/group/thread target syntax, nest normalization, ship names, and session keys.                                       |
| Gateway monitor              | `src/channel.ts` gateway -> `src/channel.runtime.ts` -> `src/monitor/index.ts` -> `src/urbit/sse-client.ts`                 | SSE event stream, reconnect/event parsing, processed-message dedupe, and monitor shutdown.                             |
| Authorization/approval       | `src/monitor/index.ts` -> `authorization.ts` / `approval.ts` / `approval-runtime.ts` / `settings-helpers.ts`                | DM/group allowlists, owner approvals, channel rules, settings overrides, and default restricted behavior.              |
| Cites/history/privacy        | `src/monitor/index.ts` -> `cites.ts` / `history.ts` / `utils.ts`                                                            | Quoted/cited message expansion, authorized cite resolution, private-channel leakage prevention, and history context.   |
| Discovery/media              | `src/monitor/discovery.ts` / `media.ts` -> `src/urbit/channel-ops.ts` / `upload.ts`                                         | Group channel auto-discovery, media upload/download, and permission boundaries.                                        |
| Outbound send/media          | `src/channel.ts` outbound -> `src/channel.runtime.ts` -> `src/urbit/send.ts` / `upload.ts`                                  | DM/group/thread sends, media payloads, Urbit aura IDs, and send result mapping.                                        |
| Urbit auth/fetch             | `src/urbit/auth.ts` -> `base-url.ts` -> `fetch.ts` / `context.ts`                                                           | Login cookies, SSRF checks, private network opt-in, and HTTP error behavior.                                           |

## Trace rule

Start with repo-native `rg`, file inspection, and colocated tests. Use GitNexus or code-review-graph only after fresh index coverage for `extensions/tlon/` is recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `28` changed path(s) to this final leaf. `27` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 24, 'A': 3, 'D': 1}`.

- `extensions/tlon/api.ts`
- `extensions/tlon/channel-plugin-api.ts`
- `extensions/tlon/index.ts`
- `extensions/tlon/package.json`
- `extensions/tlon/runtime-api.ts`
- `extensions/tlon/setup-entry.ts`
- `extensions/tlon/src/channel.runtime.ts`
- `extensions/tlon/src/channel.ts`
- `extensions/tlon/src/config-schema.ts`
- `extensions/tlon/src/monitor/authorization.ts`
- `extensions/tlon/src/monitor/cites.ts`
- `extensions/tlon/src/monitor/index.ts`
- `extensions/tlon/src/monitor/processed-messages.test.ts`
- `extensions/tlon/src/monitor/processed-messages.ts`
- `extensions/tlon/src/monitor/utils.ts`
- `extensions/tlon/src/settings.ts`
- `extensions/tlon/src/setup-core.ts`
- `extensions/tlon/src/targets.ts`
- `extensions/tlon/src/tlon-api.test.ts`
- `extensions/tlon/src/tlon-api.ts`
- `extensions/tlon/src/urbit/auth.ssrf.test.ts`
- `extensions/tlon/src/urbit/auth.ts`
- `extensions/tlon/src/urbit/base-url.test.ts`
- `extensions/tlon/src/urbit/base-url.ts`
- `extensions/tlon/src/urbit/sse-client.test.ts`
- `extensions/tlon/src/urbit/sse-client.ts`
- `extensions/tlon/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/tlon/api.ts`
- `extensions/tlon/doctor-contract-api.ts`
- `extensions/tlon/index.ts`
- `extensions/tlon/openclaw.plugin.json`
- `extensions/tlon/package.json`
- `extensions/tlon/runtime-api.ts`
- `extensions/tlon/src/channel.runtime.ts`
- `extensions/tlon/src/channel.ts`
- `extensions/tlon/src/config-schema.ts`
- `extensions/tlon/src/monitor/authorization.ts`
- `extensions/tlon/src/monitor/index.ts`
- `extensions/tlon/src/monitor/processed-messages.ts`
- `extensions/tlon/src/monitor/utils.ts`
- `extensions/tlon/src/settings.ts`
- `extensions/tlon/src/setup-core.ts`
- `extensions/tlon/src/targets.ts`
- `extensions/tlon/src/urbit/auth.ssrf.test.ts`
- `extensions/tlon/src/urbit/auth.ts`
- `extensions/tlon/src/urbit/base-url.ts`
- `extensions/tlon/src/urbit/send.ts`
- `extensions/tlon/src/urbit/sse-client.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
