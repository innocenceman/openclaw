# iMessage Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the bundled iMessage channel plugin in `extensions/imessage/`.

Covers plugin registration, setup/config/account resolution, RPC client/probe, monitor provider lifecycle, notification parsing, inbound access/mention/command gating, echo/reflection/self-chat guards, reply delivery, outbound text/media adapter, target parsing/session routing, and iMessage-specific sanitization.

## Entry contracts

- Plugin id/channel id: `imessage`.
- Package contract: `@openclaw/imessage` private workspace plugin.
- Loader boundary: `extensions/imessage/index.ts` registers `imessagePlugin` and `setIMessageRuntime`.

## Primary behavior surfaces

- `extensions/imessage/src/channel.ts`: channel composition.
- `extensions/imessage/src/client.ts`: imsg RPC client.
- `extensions/imessage/src/monitor/monitor-provider.ts`: monitor lifecycle.
- `extensions/imessage/src/monitor/inbound-processing.ts`: inbound decision/context.
- `extensions/imessage/src/send.ts` and `outbound-adapter.ts`: outbound delivery.

## Current validation state

Source inspection only; no product code, tests/builds, or graph indexes were run.
