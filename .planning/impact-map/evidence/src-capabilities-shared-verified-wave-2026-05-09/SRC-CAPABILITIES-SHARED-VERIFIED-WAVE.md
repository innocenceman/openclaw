# Src Capabilities / Shared Support Verified Wave

Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Scope

- Goal id: `G005-src-capabilities-shared`
- Target: `src/capability-modules/` excluding already verified `acp/`, plus `src/shared-misc-runtime-support/`.
- Product source edit scope: none. This wave updates planning/evidence only.

## Boundary decision

Already verified ACP and acp-spawn waves were not repeated. The existing target leaves are broad in several places. This wave promotes only leaves with passing targeted evidence and keeps failed or timed-out leaves exceptioned rather than false-verified. Future retries should split these exceptioned risk-diverse leaves before promotion: `capability-modules/browser/`, `capability-modules/memory/`, `capability-modules/media/`, and the daemon sub-slice inside `shared-misc-runtime-support/startup-process/`.

## GitNexus evidence

MCP `query` was attempted for browser, memory, media/cron/shared support concepts; the indexed process search returned no process rows, so the wave used `context` plus CLI `impact` on representative risk centers.

Representative context logs:

- `logs/gitnexus-context-startBrowserControlServerFromConfig.log`
- `logs/gitnexus-context-MemoryIndexManager.log`
- `logs/gitnexus-context-runCapability.log`
- `logs/gitnexus-context-CronService.log`
- `logs/gitnexus-context-loadInternalHooks.log`
- `logs/gitnexus-context-runExec.log`
- `logs/gitnexus-context-saveMediaSource.log`
- `logs/gitnexus-context-listSpeechProviders.log`

Representative impact logs:

- `logs/gitnexus-impact-uid-Function_src_media_store.ts_saveMediaSource.log`: LOW upstream risk.
- `logs/gitnexus-impact-uid-Function_src_media-understanding_runner.ts_runCapability.log`: upstream callers include `applyMediaUnderstanding`, runtime file helpers, auto-reply media understanding, and ACP reply dispatch.
- `logs/gitnexus-impact-uid-Function_src_tts_provider-registry.ts_listSpeechProviders.log`: LOW upstream risk with `src/gateway/server-methods/tts.ts` caller.
- `logs/gitnexus-impact-uid-Function_src_process_exec.ts_runExec.log`: broad upstream callers through media-understanding, media image ops, infra tailscale, gateway discovery, daemon, CLI status/config, and browser profile reset helpers.
- `logs/gitnexus-impact-CronService.log`: upstream gateway cron construction and service test harnesses.
- `logs/gitnexus-impact-loadInternalHooks.log`: gateway sidecar startup impact and 9 affected process hits in the CLI output.

## code-review-graph evidence

`code-review-graph status` reported 80,930 nodes, 732,204 edges, and last updated `2026-05-08T11:31:24` at commit `f99ef11b272b`. Current `HEAD` for this wave was `67988132eaae83a11f26f3c64583913ff8f90221`, and `logs/crg-target-source-diff-from-build.log` shows no target source-path diff from the graph build commit, so the graph is fresh for the bounded target paths.

Risk highlights from `logs/code-review-graph-risk.log`:

- Browser: 739 risk rows, max risk 0.85, 44 security-relevant rows; control auth, session tab registry, and Chrome MCP were separate risk centers.
- Memory: 530 risk rows, max risk 0.85, 35 security-relevant rows; manager sync, QMD scope, and secret input were separate risk centers.
- Media: 180 risk rows, max risk 0.60; store/fetch/image/mime were separate centers.
- Media understanding: 195 risk rows, max risk 0.70, 4 security-relevant rows; provider auth and runner entries were notable.
- Cron: 523 risk rows, max risk 0.85, 26 security-relevant rows; isolated run/session, timers, delivery, and session reaper were distinct.
- Shared support: daemon/hooks/logging/markdown/node-host/shared/utils each had distinct risk centers, with daemon, hooks, logging, node-host, shared, and utils containing security-relevant entries.

## Validation results

| Command/log                                                          | Result                     | Coverage decision                                                                                                                   |
| -------------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `logs/context-cron-tts-all.log`                                      | pass, 73 filters           | `context-engine/`, `cron/`, and `tts/` verified                                                                                     |
| `logs/media-understanding-all.log`                                   | pass, 24 filters           | `media-understanding/` verified                                                                                                     |
| `logs/root-web-entrypoints.log`                                      | pass, 5 filters            | `root-entrypoints/` verified                                                                                                        |
| `logs/web-provider-root.log`                                         | pass, 5 filters            | `web-provider-root/` verified                                                                                                       |
| `logs/compat-hooks-all.log`                                          | pass, 20 filters           | `compat-hooks/` verified                                                                                                            |
| `logs/docs-i18n-markdown-logging.log`                                | pass, 23 filters           | `docs-i18n-markdown/` and `logging-support/` verified                                                                               |
| `logs/shared-primitives-all.log`                                     | pass, 44 filters           | `shared-primitives/` verified                                                                                                       |
| `logs/test-support-all.log`                                          | pass, 4 filters            | `test-support/` verified                                                                                                            |
| `logs/startup-bootstrap-nodehost-process.log`                        | pass, 20 filters           | supporting evidence only; daemon still blocks `startup-process/`                                                                    |
| `logs/browser-core.log`                                              | failed/timed out, exit 124 | `browser/` exceptioned                                                                                                              |
| `logs/memory.log`, `logs/memory-low.log`, `logs/memory-debug.log`    | failed, exit 1             | `memory/` exceptioned                                                                                                               |
| `logs/media-only-all.log`, `logs/media-without-telegram-network.log` | failed, exit 1             | `media/` exceptioned                                                                                                                |
| `logs/startup-daemon-only.log`                                       | failed, exit 1             | `startup-process/` exceptioned                                                                                                      |
| `logs/product-build.log`                                             | failed, exit 1             | aggregate modules remain exceptioned; failure is the existing bundled Discord runtime dependency staging `npm install failed` error |
| `logs/planning-diff-check.log`                                       | pass                       | planning whitespace check passed                                                                                                    |
| `logs/planning-format-check.log`                                     | pass before writeback      | initial targeted oxfmt check passed before final writeback                                                                          |
| `logs/markdownlint-targets.log`                                      | blocked, exit 254          | network/cache exception: `pnpm dlx markdownlint-cli2` could not fetch under restricted network/cache setup                          |

Raw command result rows are in `logs/results.tsv`.

## Coverage decision

Promoted to `verified`:

- `src/capability-modules/context-engine/`
- `src/capability-modules/cron/`
- `src/capability-modules/media-understanding/`
- `src/capability-modules/tts/`
- `src/shared-misc-runtime-support/root-entrypoints/`
- `src/shared-misc-runtime-support/web-provider-root/`
- `src/shared-misc-runtime-support/compat-hooks/`
- `src/shared-misc-runtime-support/docs-i18n-markdown/`
- `src/shared-misc-runtime-support/shared-primitives/`
- `src/shared-misc-runtime-support/logging-support/`
- `src/shared-misc-runtime-support/test-support/`

Kept as `exceptioned-deep-partial`:

- `src/capability-modules/browser/`: standard browser command failed and then timed out.
- `src/capability-modules/memory/`: standard memory command failed under multiple low-profile retries.
- `src/capability-modules/media/`: standard media command failed, including after excluding the Telegram network test.
- `src/shared-misc-runtime-support/startup-process/`: bootstrap/node-host/process tests passed, but daemon-only validation failed.

Aggregate modules `src/capability-modules/` and `src/shared-misc-runtime-support/` are `exceptioned-deep-partial` until exceptioned children pass or are split/verified separately.

## Evidence audit

- Evidence exists for every promoted leaf and every exceptioned leaf; `logs/evidence-link-coverage-audit-final.log` reports 0 issues.
- Coverage labels were updated in parent and leaf docs, not only in the evidence file.
- Product source diff remains audited separately in `logs/product-source-diff-final.log` and was empty.
- No product source files were edited by this wave.
