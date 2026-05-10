# nostr Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                           | Trace start                                                                                                                 | Likely downstream impact                                                                                                              |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Manifest/package to registry   | `openclaw.plugin.json` -> `package.json` -> `index.ts`                                                                      | Plugin discovery, install docs, runtime dependency checks, and profile route registration.                                            |
| Profile HTTP route             | `index.ts` -> `src/nostr-profile-http.ts` -> runtime config read/write -> `src/types.ts`                                    | Gateway `/api/channels/nostr` behavior, profile UI, account info, and config persistence.                                             |
| Setup/private key/relay config | `setup-entry.ts` -> `src/setup-surface.ts` -> `src/nostr-bus.ts` key helpers -> `src/default-relays.ts`                     | Private key validation, public key derivation, relay URL compatibility, allowlist prompts, and DM policy.                             |
| Config/status/account          | `src/channel.ts` -> `src/types.ts` -> `src/config-schema.ts`                                                                | Account configured state, status summaries, public key display, and config schema compatibility.                                      |
| Gateway bus startup            | `src/channel.ts` gateway `startAccount` -> `src/nostr-bus.ts` -> `src/metrics.ts`                                           | Relay connections, active bus handles, status traffic, shutdown, and error reporting.                                                 |
| Inbound encrypted DM           | relay event -> `src/nostr-bus.ts` decrypt/validate/seen -> `src/channel.ts` access resolution -> runtime direct DM dispatch | NIP-04 compatibility, duplicate suppression, stale/future/signature rejection, pairing/allowlist/open DM policy, and inbound routing. |
| Outbound DM                    | `src/channel.ts` outbound -> `src/nostr-bus.ts` send/encrypt/publish                                                        | Target pubkey normalization, Markdown behavior, relay publish results, and send result attachment.                                    |
| Pairing allowlist              | `src/channel.ts` -> scoped DM security resolver -> pairing controller                                                       | Pairing approval hints, allowFrom pubkey normalization, and access group fallback.                                                    |
| Session route                  | `src/session-route.ts`                                                                                                      | Outbound peer/session mapping for npub/hex/nostr-prefixed targets.                                                                    |
| Profile publish                | `src/channel.ts` action/status -> `src/nostr-profile.ts` -> relay bus                                                       | NIP-01 kind:0 event content, safe profile data, and publication feedback.                                                             |
| Profile import                 | `src/nostr-profile-http.ts` -> `src/nostr-profile-import.ts` -> relays -> `src/config-schema.ts`                            | Relay profile discovery, signature verification, newest-event selection, URL sanitization, and merge rules.                           |
| State/metrics persistence      | `src/nostr-state-store.ts` / `src/metrics.ts` / `src/seen-tracker.ts`                                                       | Status health, duplicate windows, filesystem state, and memory bounds.                                                                |

## Trace rule

Start with repo-native `rg`, file inspection, and colocated tests. Use GitNexus or code-review-graph only after fresh index coverage for `extensions/nostr/` is recorded in `.planning/tools/GRAPH-COVERAGE.md`.
