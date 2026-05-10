# IRC Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the bundled IRC channel plugin in `extensions/irc/`.

Covers plugin registration, server/nick/TLS/NickServ setup, IRC client connection/protocol parsing, monitor lifecycle, inbound PRIVMSG authorization/mention policy/pairing, outbound message splitting/sanitization, target normalization, probe/status, and IRC-specific control character handling.

## Entry contracts

- Plugin id/channel id: `irc`.
- Package contract: `@openclaw/irc`.
- Loader boundary: `extensions/irc/index.ts` registers `ircPlugin` and `setIrcRuntime`.

## Primary behavior surfaces

- `extensions/irc/src/channel.ts`: channel plugin composition.
- `extensions/irc/src/client.ts`, `protocol.ts`, `connect-options.ts`: IRC transport/protocol.
- `extensions/irc/src/monitor.ts`, `inbound.ts`: monitor and inbound dispatch.
- `extensions/irc/src/send.ts`, `normalize.ts`, `policy.ts`: outbound/target/policy helpers.

## Current validation state

Source inspection only; no product code, tests/builds, or graph indexes were run.
