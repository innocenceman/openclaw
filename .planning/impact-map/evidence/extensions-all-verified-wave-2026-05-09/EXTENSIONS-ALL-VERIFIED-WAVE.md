# G006 Extensions Plugin Ecosystem Wave

Goal: `G006-extensions-all`
Status: `complete-with-exceptions`
Date: 2026-05-09

## Scope and boundary

Boundary sources:

- `.planning/STATE.md`
- `.planning/impact-map/MODULE-INDEX.md`
- `.planning/impact-map/COVERAGE-ROADMAP.md`
- `.planning/impact-map/extensions/README.md`
- `.planning/impact-map/extensions/*/leaf-index.md`
- Category and leaf `README.md` / `code-paths.md` / `change-to-test.md` packets under `.planning/impact-map/extensions/**`

This wave did not repeat the completed ACP or ACP-spawn waves. It only evaluated `extensions/**` plugin ecosystem leaves and package/plugin checks.

## Split decision

No new leaf split was added. Existing extension leaves are already per plugin package or narrow plugin family:

- `channel-plugins/`: one row per manifest-declared channel plugin.
- `provider-plugins/`: one row per provider plugin package.
- `tool-capability-plugins/`, `memory-media-voice-plugins/`, `auth-integration-plugins/`, and `skill-plugins/`: one row per package or narrow plugin family.

The current blockers are validation evidence gaps, network-dependent test failures, and bounded-command timeouts, not oversized mixed-responsibility leaves.

## GitNexus evidence

- `query` for the broad extensions ecosystem returned no ranked execution processes, so symbol-level context was used.
- `context(discoverOpenClawPlugins)` showed discovery is called by plugin manifest registry, loader, bundled sources, channel catalog, and boundary checks.
- `context(loadOpenClawPlugins)` showed extension loading fans into agents runtime plugins, gateway plugin loading, media/image/speech registries, CLI registry, outbound channel bootstrap, plugin tools, web-search providers, provider runtime, and status reporting.
- `context(createPluginRegistry)` confirmed registry construction and shape-contract test coverage.
- `context(resolvePluginProviders)` confirmed provider resolution delegates through plugin loader and bundled allowlist/enablement compatibility.
- `context(buildMediaUnderstandingRegistry)` confirmed media-understanding provider registry depends on active plugin registry and plugin loader.
- `cypher` upstream call checks recorded direct callers for `loadOpenClawPlugins` and `discoverOpenClawPlugins`.
- `impact(...)` MCP calls for `discoverOpenClawPlugins` and `createPluginRegistry` returned `user cancelled MCP tool call`; this is recorded as a tool exception. No product source was edited, so fallback Cypher/context was sufficient for boundary confirmation.

## code-review-graph evidence

`code-review-graph status` reported a graph built at commit `f99ef11b272b`, while current `HEAD` is newer. The graph was not rebuilt because that would modify `.code-review-graph/**`, outside the G006 allowed write scope.

`code-review-graph detect-changes --base HEAD --brief` analyzed the planning-only working tree and reported:

- 349 changed files
- 0 changed functions/classes
- 0 affected flows
- 0 test gaps
- Overall risk score `0.00`

Log: `logs/code-review-graph-status-detect.log`.

## Validation commands

| Command                                                | Result       | Evidence                                                                                                             |
| ------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------- |
| `pnpm check:bundled-plugin-metadata`                   | pass         | `logs/pnpm_check_bundled-plugin-metadata.log`                                                                        |
| `pnpm check:bundled-provider-auth-env-vars`            | pass         | `logs/pnpm_check_bundled-provider-auth-env-vars.log`                                                                 |
| `pnpm plugin-sdk:check-exports`                        | pass         | `logs/pnpm_plugin-sdk_check-exports.log`                                                                             |
| `pnpm lint:extensions:no-src-outside-plugin-sdk`       | pass         | `logs/pnpm_lint_extensions_no-src-outside-plugin-sdk.log`                                                            |
| `pnpm lint:extensions:no-plugin-sdk-internal`          | pass         | `logs/pnpm_lint_extensions_no-plugin-sdk-internal.log`                                                               |
| `pnpm lint:extensions:no-relative-outside-package`     | pass         | `logs/pnpm_lint_extensions_no-relative-outside-package.log`                                                          |
| `pnpm lint:plugins:no-extension-src-imports`           | pass         | `logs/pnpm_lint_plugins_no-extension-src-imports.log`                                                                |
| `pnpm lint:plugins:no-extension-test-core-imports`     | pass         | `logs/pnpm_lint_plugins_no-extension-test-core-imports.log`                                                          |
| `pnpm lint:plugins:no-extension-imports`               | pass         | `logs/pnpm_lint_plugins_no-extension-imports.log`                                                                    |
| `pnpm lint:plugins:plugin-sdk-subpaths-exported`       | pass         | `logs/pnpm_lint_plugins_plugin-sdk-subpaths-exported.log`                                                            |
| `pnpm release:plugins:npm:check`                       | pass         | `logs/pnpm_release_plugins_npm_check.log`                                                                            |
| `pnpm stage:bundled-plugin-runtime-deps`               | fail         | `logs/pnpm_stage_bundled-plugin-runtime-deps.log`; fails staging `discord` runtime deps because `npm install` fails. |
| `timeout 300s pnpm test -- <tool/capability tests>`    | pass         | `logs/tool-capability-plugin-tests.log`                                                                              |
| `timeout 300s pnpm test -- <auth/integration tests>`   | pass         | `logs/auth-integration-plugin-tests.log`                                                                             |
| `timeout 300s pnpm test -- <provider tests>`           | fail         | `logs/provider-plugin-tests.log`; focused reruns isolate Google network failures.                                    |
| `timeout 300s pnpm test -- <memory/media/voice tests>` | timeout      | `logs/memory-media-voice-plugin-tests.log`                                                                           |
| `timeout 300s pnpm test -- <skill tests>`              | timeout      | `logs/skill-plugin-tests.log`                                                                                        |
| `timeout 300s pnpm test -- <channel tests>`            | timeout/fail | `logs/channel-plugin-tests.log`                                                                                      |

Focused reruns:

- Provider individual reruns passed for `amazon-bedrock`, `deepseek`, `fal`, `github-copilot`, `google-shared`, `minimax`, `mistral`, `moonshot`, `ollama`, `openai`, `openrouter`, `qwen-portal-auth`, `xai`, and `zai`.
- Google `image-generation-provider.test.ts` and `oauth.test.ts` failed with DNS/network errors (`EAI_AGAIN` for Google API hosts); see `logs/provider-individual/*.direct-extensions-vitest.log`.
- Memory/media focused reruns passed for `memory-core`, `memory-lancedb`, `microsoft`, and `talk-voice`; `voice-call` focused validation timed out.
- Skill focused reruns passed for `diffs`, `tavily`, and `tlon`; `acpx` failed and `feishu` timed out; `open-prose` has no dedicated automated test.

The initial unbounded `pnpm test:extensions` command eventually failed after 1,795.1s: the extension lane passed, then `extensions-monitor.replay-isolated` failed after 378.2s. Log: `logs/test-extensions.log`. Bounded category commands above are still used to localize the coverage decisions.

## Coverage decisions

| Slice                                    | Decision                   | Reason                                                                                                                         |
| ---------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `extensions/plugin-boundaries/`          | `verified`                 | Boundary and package metadata checks passed; prior verified evidence remains valid for the boundary slice.                     |
| `extensions/package-runtime-deps/`       | `exceptioned-deep-partial` | Current `pnpm stage:bundled-plugin-runtime-deps` fails at Discord runtime dependency staging.                                  |
| `extensions/tool-capability-plugins/`    | `verified`                 | All listed tool/capability tests passed in the bounded category command.                                                       |
| `extensions/auth-integration-plugins/`   | `exceptioned-deep-partial` | Device-pair, diagnostics-otel, lobster, and perplexity passed; groq has no dedicated automated leaf test.                      |
| `extensions/memory-media-voice-plugins/` | `exceptioned-deep-partial` | Memory and selected speech/voice leaves passed; deepgram/elevenlabs lack tests and voice-call timed out.                       |
| `extensions/provider-plugins/`           | `exceptioned-deep-partial` | Many provider leaf tests passed, but Google has network-dependent failures and many provider packages have no dedicated tests. |
| `extensions/skill-plugins/`              | `exceptioned-deep-partial` | diffs/tavily/tlon passed; acpx failed, feishu timed out, and open-prose lacks tests.                                           |
| `extensions/channel-plugins/`            | `exceptioned-deep-partial` | The bounded channel aggregate timed out after Discord isolated failures; no channel leaf received a complete fresh pass.       |
| `extensions/` aggregate                  | `exceptioned-deep-partial` | Tool/capability family is verified, but other families retain explicit validation exceptions.                                  |

## Product source diff audit

Product source diff command:

```bash
git diff --name-only -- src apps extensions packages scripts docs package.json pnpm-lock.yaml
```

Result: empty at the time of the G006 audit. G006 changed only `.planning/**` evidence/ledger docs and the required `.omx/ultragoal/**` checkpoint artifacts.

## Evidence audit and approval

- Coverage labels were checked for non-empty values across extension leaf indexes.
- Link/card audit confirmed every extension leaf row points to an existing source path and each leaf directory has `README.md`, `code-paths.md`, `file-roles.md`, and `change-to-test.md`.
- Product source diff was empty.
- Architect review: approved the no-split decision because leaves are already per package/family and failures are validation blockers rather than decomposition blockers.
- Verifier review: approved `complete-with-exceptions`; only leaves with fresh passing targeted validation were promoted to `verified`, and all other leaves remained or became `exceptioned-deep-partial` with concrete evidence.
