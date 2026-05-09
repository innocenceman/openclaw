# Thread Ownership Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## 1. Plugin registration and config path

```text
openclaw.plugin.json -> index.ts
  -> forwarderUrl / abTestChannels resolution
  -> resolveOwnershipAgent()
```

Impact: Which agent id/name is used for ownership claims and where the ownership API is called.

## 2. Mention-tracking path

```text
index.ts
  -> on("message_received")
  -> slack-only thread key tracking
```

Impact: Bypasses ownership claim for recently mentioned threads.

## 3. Ownership-claim path

```text
index.ts
  -> on("message_sending")
  -> POST /api/v1/ownership/<channel>/<thread>
  -> cancel on 409, fail open otherwise
```

Impact: Outbound Slack send suppression and logging behavior.

## Trace rule

Start with repo-native file inspection and the nearest local tests named in `change-to-test.md`. Use graph tools only after fresh bounded graph coverage is recorded for the exact slice.
