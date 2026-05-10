# Apps/UI G007 Verified Wave

Date: 2026-05-09
Goal: `G007-apps-ui`
Scope: `apps/`, `ui/`, and planning evidence only.

## Result

Status: `exceptioned-deep-partial` for both top-level scopes.

No app/UI leaf is marked `verified` in this G007 pass. The wave completed its split/validation work but kept explicit exceptions where the current host cannot honestly prove platform or UI behavior.

## Scope control

- Product source edits: none.
- Existing non-planning worktree entries `.gitignore`, `AGENTS.md`, and `.gitnexusignore` are outside the G007 write set and were not edited by this goal; see `logs/outside-scope-existing-worktree.log`.
- Product source diff audit: `logs/product-source-diff.log` is empty for `apps ui src extensions packages scripts docs package.json pnpm-lock.yaml`.
- Planning writes only: `.planning/impact-map/apps/**`, `.planning/impact-map/ui/**`, `.planning/impact-map/evidence/apps-ui-verified-wave-2026-05-09/**`, `.planning/impact-map/MODULE-INDEX.md`, `.planning/impact-map/COVERAGE-ROADMAP.md`, and `.planning/STATE.md`.
- This wave did not repeat ACP or acp-spawn verified work.

## Leaf split decision

Several existing leaves were too broad for a single verified label because they mixed platform runtime, provider/settings, UI shell, and package/build concerns with different validation strategies. G007 split them inside `.planning/impact-map/**` only:

| Parent leaf                                       | New child leaf index                                           | Decision                                                                                                |
| ------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `apps/macos/app-sources/`                         | `apps/macos/app-sources/leaf-index.md`                         | Split into gateway runtime, settings/providers, menu/canvas/chat, and voice/permissions.                |
| `apps/ios-android/android-app/`                   | `apps/ios-android/android-app/leaf-index.md`                   | Split into runtime/gateway/node, UI/chat/settings, permissions/media/voice, and build flavors.          |
| `apps/ios-android/ios-app/`                       | `apps/ios-android/ios-app/leaf-index.md`                       | Split into gateway/settings, root/chat/canvas, voice/media/permissions, and project/signing/tests.      |
| `apps/provider-channel-settings/native-settings/` | `apps/provider-channel-settings/native-settings/leaf-index.md` | Split into macOS native settings, mobile native settings, and shared config parity.                     |
| `ui/web-ui/components/`                           | `ui/web-ui/components/leaf-index.md`                           | Split into app shell/lifecycle, chat/tool stream, settings rendering, and navigation/usage/state.       |
| `ui/provider-channel-settings/web-settings/`      | `ui/provider-channel-settings/web-settings/leaf-index.md`      | Split into config form rendering, channel config cards, local settings/navigation, and parity contract. |

## GitNexus evidence

Raw log: `logs/gitnexus-query-context-impact.log`.

- `query("ui app render settings gateway web channel provider config")`: returned no process groups from the current GitNexus index; this was treated as absence of process coverage, not proof of no risk.
- `context(handleChannelConfigSave)`: disambiguated to `Function:ui/src/ui/app-channels.ts:handleChannelConfigSave`; direct caller is `OpenClawApp.handleChannelConfigSave`, and outgoing calls go through `loadConfig`, `saveConfig`, and `loadChannels`.
- `impact(connectGateway, upstream, depth=2, includeTests=true)`: LOW risk, 6 impacted items, direct callers include `handleConnected`, `OpenClawApp.connect`, and `app-gateway.node.test.ts`; affected process `renderApp`.
- GitNexus index refresh was attempted. `npx gitnexus analyze` without a path failed on the worktree `.git` file; `npx gitnexus analyze .` exceeded the bounded slice after worker fallback. `logs/gitnexus-staleness-exception.log` records that `apps/` and `ui/` have zero source diff since the indexed commit, so stale-index risk is explicit and bounded for this goal.

## code-review-graph evidence

Raw logs:

- `logs/code-review-graph-status-and-staleness.log`
- `logs/code-review-graph-detect-changes.log`

`code-review-graph status` reports a graph built at commit `f99ef11b272b`, while current HEAD is `67988132eaae83a11f26f3c64583913ff8f90221`. `git diff --name-only f99ef11b272b -- apps ui` is empty, so app/UI source has not changed since the graph build. `code-review-graph detect-changes --base HEAD --brief` saw only planning changes for this wave: 387 changed files, 0 changed functions/classes, 0 affected flows, 0 test gaps, risk score 0.00.

## Validation evidence

| Command                               | Exit | Evidence                                                                                          | Decision                                                                                                                                                                 |
| ------------------------------------- | ---: | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pnpm --dir ui test`                  |    1 | `logs/ui-test.log`                                                                                | 51 files / 535 tests passed, but Vitest reported unhandled `GatewayRequestError` mock and loopback `EPERM` listen errors. UI remains exceptioned.                        |
| `pnpm ui:build`                       |    0 | `logs/ui-build.log`                                                                               | Web build/package check passed.                                                                                                                                          |
| `pnpm lint:ui:no-raw-window-open`     |    0 | `logs/ui-no-raw-window-open.log`                                                                  | UI static browser safety check passed.                                                                                                                                   |
| UI targeted settings/chat/render runs |    1 | `logs/ui-settings-targeted.log`, `logs/ui-chat-targeted.log`, `logs/ui-render-usage-targeted.log` | Focused tests passed internally but each run exited 1 due the same loopback `EPERM`; node-config retry was invalid for browser-dependent files and is logged separately. |
| `pnpm android:test`                   |    1 | `logs/android-test.log`                                                                           | Failed immediately: no Java command and no `JAVA_HOME`.                                                                                                                  |
| `pnpm android:lint`                   |    1 | `logs/android-lint.log`                                                                           | Failed immediately: no Java command and no `JAVA_HOME`.                                                                                                                  |
| `pnpm android:assemble`               |    1 | `logs/android-assemble.log`                                                                       | Failed immediately: no Java command and no `JAVA_HOME`.                                                                                                                  |
| `pnpm check:host-env-policy:swift`    |    0 | `logs/host-env-policy-swift.log`                                                                  | Generated Swift host env policy check passed.                                                                                                                            |
| Environment/device probe              |    0 | `logs/environment-devices.log`, `logs/java-environment.log`                                       | Linux/WSL host; no `java`, `JAVA_HOME`, `adb`, `xcodebuild`, `xcrun`, or `swift`.                                                                                        |

## Coverage decision

- `apps/`: `exceptioned-deep-partial`.
  - macOS and iOS leaves require Xcode/macOS/device or simulator checks unavailable on this host.
  - Android leaves have mapped validation ladders, but unit/lint/assemble checks cannot run without Java/JAVA_HOME.
  - Native provider/channel settings stay exceptioned because only Android was attempted and macOS/iOS parity cannot be validated here.
- `ui/`: `exceptioned-deep-partial`.
  - UI build and static check passed.
  - UI tests are not clean: full package test and targeted UI runs exit 1 due Vitest unhandled errors; no UI leaf is promoted to `verified`.

## Evidence audit

- PASS: `logs/evidence-link-coverage-audit.log` reports `missing_report_logs=0`, `bad_coverage_labels=0`, and `verified_label_mentions=0` for `apps/` and `ui/`.
- PASS: `logs/diff-check-planning.log` reports `git diff --check` clean for touched planning/evidence files.
- PASS after formatting: `logs/oxfmt-planning.log` reports `pnpm exec oxfmt --check` clean for touched planning/evidence files.
- EXCEPTION: `logs/markdownlint-planning.log` could not run because `markdownlint-cli2` is unavailable in the local pnpm exec environment.

## Product source diff audit

PASS: `logs/product-source-diff.log` has no tracked source/doc/package diffs under `apps ui src extensions packages scripts docs package.json pnpm-lock.yaml`.

## Follow-up required for future verified promotion

1. Rerun Android `pnpm android:test`, `pnpm android:lint`, and `pnpm android:assemble` on a host with Java/JAVA_HOME.
2. Rerun iOS and macOS build/test/smoke checks on an Apple host with Xcode and real device/simulator checks where applicable.
3. Fix or isolate the UI Vitest unhandled gateway mock and loopback `EPERM` server issue, then rerun `pnpm --dir ui test`.
4. Refresh GitNexus/code-review-graph indexes in an environment where the graph updates can complete, then rerun impact/context checks before promoting any leaf to `verified`.
