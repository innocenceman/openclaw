# WhatsApp Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## 1. Plugin registration and runtime injection

```text
extensions/whatsapp/openclaw.plugin.json
  -> extensions/whatsapp/package.json
  -> extensions/whatsapp/index.ts
  -> defineChannelPluginEntry({ id: "whatsapp", plugin: whatsappPlugin, setRuntime })
  -> extensions/whatsapp/src/channel.ts
  -> extensions/whatsapp/src/runtime.ts
```

Impact: catalog/install metadata, channel id, docs link, loader registration, runtime method availability, and all channel capabilities.

Trace before changing: plugin id/name/package metadata, `openclaw.channel.*`, `openclaw.install.*`, package dependency/runtime dependency rules, plugin SDK import boundary.

## 2. Setup, auth detection, and QR login

```text
setup entry / channel setup surface
  -> extensions/whatsapp/src/setup-surface.ts
  -> mergeWhatsAppConfig + owner/DM/self-chat prompts
  -> webAuthExists(account.authDir)
  -> optional loginWeb(...)
  -> extensions/whatsapp/src/login.ts
  -> createWaSocket + waitForWaConnection
  -> extensions/whatsapp/src/session.ts
  -> Baileys auth state / creds save queue
  -> extensions/whatsapp/src/auth-store.ts
```

Impact: first-run onboarding, QR pairing, account auth dir selection, linked/unlinked status, logout cleanup, and multi-account behavior.

Important invariants:

- Default and legacy auth dirs must continue to resolve predictably.
- QR login must tolerate Baileys restart status such as 515 where current logic expects it.
- Setup copy/docs links are user-facing and should stay aligned with channel docs.

## 3. Gateway monitor startup, heartbeat, and reconnect

```text
extensions/whatsapp/src/channel.ts startAccount/loginWithQrStart/loginWithQrWait/logoutAccount
  -> extensions/whatsapp/src/auto-reply/monitor.ts monitorWebChannel(...)
  -> resolve account/config overlay
  -> resolveHeartbeatSeconds + resolveReconnectPolicy
  -> monitorWebInbox(...)
  -> status controller / heartbeat runner / active listener
```

Impact: gateway start/stop, status output, reconnect stability, active listener availability for outbound sends, and health diagnostics.

Trace before changing: account overlay precedence, status-controller fields, reconnect backoff, abort/signal handling, active listener registration and cleanup.

## 4. Inbound message normalization and authorization

```text
Baileys messages.upsert / connection.update
  -> extensions/whatsapp/src/inbound/monitor.ts monitorWebInbox(...)
  -> unwrap/extract message content
  -> dedupe + group metadata cache + sender/participant normalization
  -> checkInboundAccessControl(...)
  -> maybe mark read
  -> downloadInboundMedia/save media metadata when needed
  -> WebInboundMessage
```

Impact: who can talk to the agent, how group/DM/self-chat messages are classified, read receipt behavior, dedupe/history catch-up, reply context, mention detection, and media capture.

Important invariants:

- Unauthorized senders/groups must not enter the auto-reply path.
- Offline/history append messages must not accidentally trigger unwanted replies.
- Self-chat and group echo behavior must remain intentional.
- Message contract fields in `WebInboundMessage` must match auto-reply expectations.

## 5. Auto-reply processing and OpenClaw routing

```text
monitorWebChannel inbound callback
  -> debounced or immediate processMessage(...)
  -> extensions/whatsapp/src/auto-reply/monitor/process-message.ts
  -> resolve command authorization
  -> build group history/member/media/location/reply context
  -> update route/session metadata when safe
  -> dispatchReplyWithBufferedBlockDispatcher(...)
  -> deliverWebReply(...)
```

Impact: agent prompt/context, command gating, session routing, last-route updates, media/location/reply handling, group history, ACK reactions, and reply delivery.

Important invariant: external WhatsApp delivery must stay final-reply-only. Non-final streaming blocks and tool/progress updates must not be sent to WhatsApp users.

## 6. Outbound target resolution and sending

```text
OpenClaw outbound request / channel outbound adapter
  -> extensions/whatsapp/src/outbound-adapter.ts
  -> resolveWhatsAppOutboundTarget(...)
  -> extensions/whatsapp/src/session-route.ts
  -> extensions/whatsapp/src/send.ts sendMessageWhatsApp/sendPollWhatsApp/sendReactionWhatsApp
  -> requireActiveWebListener(...)
  -> Baileys sendMessage(...)
```

Impact: manual sends, replies, poll sends, reactions, direct/group target syntax, multi-account routing, session route updates, and message id reporting.

Important invariants:

- Empty text without media should remain a no-op where current code treats it as such.
- Active listener errors should remain actionable for operators.
- Poll option cap is 12.
- Target normalization must distinguish direct recipients from groups.

## 7. Outbound and inbound media handling

```text
Inbound:
Baileys media message -> inbound/media.ts -> saved media metadata -> WebInboundMessage -> process-message context

Outbound:
send request -> send.ts -> loadWebMedia(...) -> media.ts -> SSRF/local-root/size/MIME checks -> Baileys payload
```

Impact: attachment safety, local file access, remote URL handling, image conversion/optimization, size caps, captions, audio opus payloads, document filenames, and prompt context.

Security-sensitive invariants:

- Keep SSRF and local-root protections intact.
- Preserve size caps and MIME/kind checks.
- Do not broaden local path access without explicit review.

## 8. Status and diagnostics

```text
channel status adapter
  -> active listener state + auth-store linked state + reconnect/health fields
  -> extensions/whatsapp/src/status-issues.ts
  -> channels status / UI health surfaces
```

Impact: operator debugging, setup guidance, stale/linked/running state, reconnect/conflict/logged-out/disconnected diagnostics.

## When to use graph tools for this leaf

Use repo-native inspection first for this leaf. Use GitNexus/code-review-graph only after fresh indexed coverage is recorded in `.planning/tools/GRAPH-COVERAGE.md`, especially for:

- cross-repo/plugin SDK public surface impact;
- route/session changes touching shared channel abstractions;
- security-sensitive media/access-control changes;
- broad refactors in `extensions/whatsapp/src/channel.ts` or `process-message.ts`.
