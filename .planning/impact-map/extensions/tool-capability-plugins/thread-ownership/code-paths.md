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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `2` changed path(s) to this final leaf. `2` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 2}`.

- `extensions/thread-ownership/index.test.ts`
- `extensions/thread-ownership/index.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/thread-ownership/api.ts`
- `extensions/thread-ownership/index.test.ts`
- `extensions/thread-ownership/index.ts`
- `extensions/thread-ownership/openclaw.plugin.json`
<!-- version-diff-refresh:v2026.5.4:end -->
