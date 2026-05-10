# P0 Refresh-to-Verified Evidence

Date: 2026-05-08
Context: `.omx/context/p0-refresh-to-verified-20260507T225500Z.md`
Prior evidence: `P0-VERIFIED-WAVE.md`

## Verdict

P0 graph freshness was refreshed and eligible leaves were promoted. The previous `GN-STALE` and `CRG-STALE` blockers are cleared for this bounded P0 slice, but failed validation commands still block four aggregate rows from `verified`.

## Tool freshness

| Tool              | Freshness | Evidence                                                                                                       |
| ----------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| GitNexus          | `fresh`   | `gitnexus-refresh.md` records `openclaw` indexed at current `HEAD` `f99ef11b272bcd5aadaa9e1a1f07f7fd82b8d6cc`. |
| code-review-graph | `fresh`   | `code-review-graph-refresh.md` records build commit `f99ef11b272b`, 80930 nodes, 732204 edges, 8574 files.     |
| graphify          | `gated`   | `.planning/config.json` remains absent; graphify stays disabled.                                               |

## Refresh validation

The four previously failing commands were rerun without product-source changes. All four still fail under their standard command form.

| Command                | Refresh exit | Decision                                                                                                                              |
| ---------------------- | -----------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| `test-infra-mocks`     |            1 | Keep `exceptioned-deep-partial`; `src/commands/agent.test.ts` still requires missing provider auth and includes timeout fallout.      |
| `src-gateway-methods`  |            1 | Keep `exceptioned-deep-partial`; server-methods tests still fail on missing `getLatestSubagentRunByChildSessionKey` in the test mock. |
| `plugin-sdk-api-check` |          134 | Keep `exceptioned-deep-partial` for the standard command; a high-memory rerun passed with `NODE_OPTIONS=--max-old-space-size=8192`.   |
| `src-cli-commands`     |            1 | Keep `exceptioned-deep-partial`; `src/commands/agent.test.ts` still requires missing provider auth.                                   |

Refresh logs:

- `logs/refresh-test-infra-mocks.log`
- `logs/refresh-src-gateway-methods.log`
- `logs/refresh-plugin-sdk-api-check.log`
- `logs/refresh-plugin-sdk-api-check-node8192.log`
- `logs/refresh-src-cli-commands.log`

## Promotions

Promoted to `verified` where targeted validation had passed in the original P0 run and the graph freshness blocker is now cleared:

- `test-infra/profiles-and-suites/config-and-runner`
- `test-infra/profiles-and-suites/root-tests`
- `test-infra/profiles-and-suites/test-scripts`
- `test-infra/fixtures-and-helpers/helpers-core`
- `test-infra/fixtures-and-helpers/helpers-extensions`
- `test-infra/fixtures-and-helpers/fixtures`
- `src/routing`
- `src/agents` priority leaves (`runtime`, `tools`, `providers-auth`)
- `extensions/plugin-boundaries`
- `extensions/package-runtime-deps`
- `extensions/provider-plugins/openai`
- `extensions/provider-plugins/anthropic`
- `extensions/provider-plugins/google`
- `extensions/provider-plugins/openrouter`
- `extensions/provider-plugins/ollama`
- `extensions/auth-integration-plugins/device-pair`
- `extensions/auth-integration-plugins/diagnostics-otel`
- `extensions/memory-media-voice-plugins/memory-core`
- `extensions/memory-media-voice-plugins/memory-lancedb`
- `extensions/tool-capability-plugins/llm-task`
- `extensions/tool-capability-plugins/thread-ownership`

## Exceptions retained

| Module                                         | Status                     | Blocking evidence                                                                                             |
| ---------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `test-infra/fixtures-and-helpers/mocks`        | `exceptioned-deep-partial` | `refresh-test-infra-mocks.log` failed due auth/timeouts in `src/commands/agent.test.ts`.                      |
| `src/gateway` / `server-methods`               | `exceptioned-deep-partial` | `refresh-src-gateway-methods.log` failed because a test mock lacks `getLatestSubagentRunByChildSessionKey`.   |
| `src/plugin-sdk` / `api-drift`                 | `exceptioned-deep-partial` | Standard `pnpm plugin-sdk:api:check` OOMs; high-memory rerun passed and is recorded as supplemental evidence. |
| `src/cli-commands` / `command-implementations` | `exceptioned-deep-partial` | `refresh-src-cli-commands.log` failed due missing Anthropic/OpenAI auth in `src/commands/agent.test.ts`.      |

## Scope control

No product source code was changed. This pass only updated planning/evidence files under `.planning/**` and Ralph context under `.omx/context/**`.
