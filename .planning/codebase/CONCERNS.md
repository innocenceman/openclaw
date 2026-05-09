# Codebase Concerns

**Analysis Date:** 2026-05-09

## Tech Debt

**Podman setup still needs privileged user switching:**

- Issue: The Podman installer works around rootless setup by switching users through `sudo`/`runuser`; the inline note calls for a fully rootless build path.
- Files: `scripts/podman/setup.sh:80`, `scripts/podman/setup.sh:86`, `scripts/podman/setup.sh:247`
- Impact: Podman install/debug work must preserve ownership, cwd, and TOCTOU assumptions across root and the `openclaw` user. Small changes can regress machines without `sudo`, without subuid/subgid entries, or with private home directories.
- Fix approach: Design a rootless-only build/install path, then keep `scripts/podman/setup.sh` as a compatibility wrapper until Docker/Podman smoke tests cover both root and non-root installations.

**Extension boundary debt is tracked as inventory instead of eliminated:**

- Issue: The extension boundary guard allows 33 known relative-outside-package entries through a baseline inventory.
- Files: `test/fixtures/extension-relative-outside-package-inventory.json`, `scripts/check-extension-plugin-sdk-boundary.mjs`, `scripts/check-no-extension-src-imports.ts`, `scripts/check-plugin-extension-import-boundary.mjs`
- Impact: New changes must understand whether a boundary violation is an existing exception or a new regression. Runtime barrels such as `extensions/discord/src/runtime-api.ts` and cross-extension imports such as `extensions/bluebubbles/src/targets.ts` remain fragile until converted to public `openclaw/plugin-sdk/<subpath>` surfaces.
- Fix approach: Retire inventory entries incrementally by publishing focused Plugin SDK subpaths and replacing cross-extension relative imports with local barrels or SDK contracts. Do not update the inventory merely to silence checks.

**Large orchestration files concentrate too many responsibilities:**

- Issue: Several production files exceed the repository's stated ~500 line target and combine protocol handling, state, validation, provider-specific behavior, and side effects.
- Files: `src/agents/pi-embedded-runner/run/attempt.ts`, `src/memory/qmd-manager.ts`, `src/plugins/types.ts`, `src/config/io.ts`, `apps/ios/Sources/Model/NodeAppModel.swift`, `apps/ios/Sources/Voice/TalkModeManager.swift`, `ui/src/ui/app-render.ts`
- Impact: These files are hard to review safely, increase merge-conflict risk, and make narrowly scoped tests difficult because a single change can touch many modes or platforms.
- Fix approach: Extract cohesive units around existing seams: attempt lifecycle, tool-call replay, compaction/yield behavior, QMD collection management, native service command handlers, and UI view composition. Add regression tests before each extraction.

**Line-count enforcement exists but is not part of the default check gate:**

- Issue: `scripts/check-ts-max-loc.ts` enforces a TypeScript/TSX max-line report, but `pnpm check` does not include `pnpm check:loc`.
- Files: `package.json`, `scripts/check-ts-max-loc.ts`
- Impact: Large TypeScript files can continue growing without failing the standard landing bar, making the file-size convention advisory rather than enforced.
- Fix approach: Either add `pnpm check:loc` to the standard gate with an approved baseline/exception plan, or document it as an optional refactor signal and keep future planner work from assuming it is CI-blocking.

**Generated protocol models are duplicated across macOS and shared Swift packages:**

- Issue: The generated gateway protocol model is committed in both app-specific and shared package locations.
- Files: `apps/macos/Sources/OpenClawProtocol/GatewayModels.swift`, `apps/shared/OpenClawKit/Sources/OpenClawProtocol/GatewayModels.swift`, `scripts/protocol-gen-swift.ts`, `package.json`
- Impact: Protocol drift fixes must update both Swift outputs plus `dist/protocol.schema.json`; stale generated output can break iOS/macOS clients while TypeScript tests remain green.
- Fix approach: Keep using `pnpm protocol:check` for any gateway protocol change. Prefer a single shared Swift package source if app packaging constraints allow it.

## Known Bugs

**ACP error events lose structured failure semantics:**

- Symptoms: Gateway chat events with `state === "error"` are translated to ACP `end_turn` because ACP lacks a structured server-error/refusal/timeout distinction.
- Files: `src/acp/translator.ts:861`, `src/acp/translator.ts:866`
- Trigger: Backend timeout, rate limit, refusal, or other terminal error routed through ACP.
- Workaround: Clients receive a normal-looking terminal stop reason and must infer details from surrounding message content or logs.

**Telegram sticker media behavior is intentionally skipped:**

- Symptoms: Static WEBP sticker download and cached sticker metadata refresh tests are disabled.
- Files: `extensions/telegram/src/bot.media.stickers-and-fragments.e2e.test.ts:22`, `extensions/telegram/src/bot.media.stickers-and-fragments.e2e.test.ts:73`
- Trigger: Telegram sticker handling changes, especially cache refresh and static sticker fetch paths.
- Workaround: Existing media tests cover adjacent paths, but deterministic fetch injection is needed before these specific assertions can run in CI.

**Memory hybrid keyword behavior has disabled assertions:**

- Symptoms: Tests for keyword-only hybrid search and zero-vector keyword search are skipped.
- Files: `src/memory/index.test.ts:291`, `src/memory/index.test.ts:1265`, `src/memory/index.test.ts:1274`, `src/memory/qmd-manager.ts`
- Trigger: Changes to memory indexing, FTS, vector fallback, or hybrid scoring.
- Workaround: Exercise `src/memory/qmd-manager.ts` with targeted tests when changing memory search; do not assume skipped assertions protect keyword-only behavior.

**Bundle MCP embedded-runner E2E path is skipped:**

- Symptoms: The test proving bundled MCP loading, tool execution, and follow-up turn inclusion is disabled.
- Files: `src/agents/pi-embedded-runner.bundle-mcp.e2e.test.ts:181`, `src/agents/pi-embedded-runner/run/attempt.ts`
- Trigger: Changes to embedded Pi agent MCP bundle wiring or follow-up turn context.
- Workaround: Use narrower unit tests around MCP loading and tool-call persistence until the E2E can be made deterministic.

## Security Considerations

**Security-sensitive surfaces are broad and CODEOWNERS-protected:**

- Risk: Auth, secrets, sandboxing, cron, gateway protocol, and security docs require security review; drive-by changes can bypass intended ownership if overlapping CODEOWNERS rules are added incorrectly.
- Files: `.github/CODEOWNERS`, `src/security/`, `src/secrets/`, `src/gateway/server-methods/secrets*.ts`, `src/agents/sandbox.ts`, `src/infra/secret-file*.ts`, `docs/security/`
- Current mitigation: CODEOWNERS assigns `@openclaw/secops` to security-sensitive paths and warns that GitHub uses last-match-wins semantics.
- Recommendations: Treat these paths as restricted surfaces. When adding new auth/secret/sandbox files, update CODEOWNERS deliberately and include secops on any overlapping later rule.

**Process execution remains a core capability and must stay centralized:**

- Risk: Shell/process execution appears in safe wrappers and in extension integrations; bypassing wrappers can introduce command-injection, environment-leak, or platform quoting bugs.
- Files: `src/process/exec.ts`, `src/process/supervisor/adapters/pty.ts`, `src/security/skill-scanner.ts`, `extensions/acpx/src/runtime-internals/process.ts`, `extensions/acpx/src/runtime-internals/mcp-proxy.mjs`, `scripts/ui.js`
- Current mitigation: The repo has scanner coverage and wrapper code, and `scripts/ui.js` documents a Windows `shell: true` guard for risky metacharacters.
- Recommendations: Route new command execution through existing process helpers. Add tests for quoting and Windows behavior whenever command arguments are user-controlled.

**Installer and container scripts manipulate ownership and secrets-adjacent state:**

- Risk: Docker/Podman/k8s install scripts create config directories, env files, and secret manifests; chmod/chown mistakes can expose local credentials or rewrite user workspace files.
- Files: `scripts/docker/setup.sh`, `scripts/podman/setup.sh`, `scripts/run-openclaw-podman.sh`, `scripts/k8s/deploy.sh`
- Current mitigation: Scripts use `chmod 600`/`700`, xdev-limited chown, temp files, and comments documenting ownership hazards.
- Recommendations: Keep installer tests focused on permissions and ownership. Avoid broad recursive chown/rm changes without Docker/Podman smoke coverage.

## Performance Bottlenecks

**Unit test memory pressure is an explicit operating constraint:**

- Problem: The test runner carries a memory-hotspot manifest with multiple tests over hundreds of MB to ~1 GB delta, and the wrapper includes heap snapshot tooling and scheduling profiles.
- Files: `test/fixtures/test-memory-hotspots.unit.json`, `scripts/test-parallel.mjs`, `scripts/test-parallel-memory.mjs`, `.agents/skills/openclaw-test-heap-leaks/SKILL.md`
- Cause: Long-lived Vitest workers retain transformed module graphs and some test files have large runtime state.
- Improvement path: For test-memory work, use heap snapshots before calling it a leak. Move transformed-module hotspots to isolated lanes via `test/fixtures/test-parallel.behavior.json`; patch cleanup only when app objects/timers/handles dominate snapshots.

**Generated schema and metadata increase build and review cost:**

- Problem: Generated artifacts are very large and must stay synchronized with generators.
- Files: `src/config/schema.base.generated.ts`, `src/plugins/bundled-plugin-metadata.generated.ts`, `scripts/generate-base-config-schema.ts`, `scripts/generate-bundled-plugin-metadata.mjs`
- Cause: Config and bundled plugin surfaces are materialized into committed generated TypeScript for runtime and docs checks.
- Improvement path: For config/plugin surface changes, run the paired generator/check scripts. Keep generated diffs separate from hand-written logic when possible.

**Mobile and UI model objects are large enough to slow iteration:**

- Problem: Native app model/view files concentrate gateway connection, service registration, command handling, and UI state.
- Files: `apps/ios/Sources/Model/NodeAppModel.swift`, `apps/ios/Sources/Voice/TalkModeManager.swift`, `apps/android/app/src/main/java/ai/openclaw/app/ui/OnboardingFlow.kt`, `ui/src/ui/views/chat.ts`, `ui/src/ui/views/cron.ts`
- Cause: Cross-platform feature growth accumulates in central UI state objects.
- Improvement path: Split by feature/service boundary and keep generated protocol types separate from app state. Prefer Observation-compatible Swift models when touching iOS/macOS state.

## Fragile Areas

**Messaging channel fan-out is high impact:**

- Files: `src/channels/`, `src/routing/`, `src/auto-reply/`, `extensions/telegram/src/bot-handlers.runtime.ts`, `extensions/discord/src/`, `extensions/slack/src/`, `extensions/matrix/src/`, `extensions/zalo/src/`, `extensions/zalouser/src/`
- Why fragile: Built-in and plugin channels share routing, access control, command gating, and outbound delivery semantics; a fix for one channel can silently break another.
- Safe modification: Audit all built-in and extension channel surfaces for shared behavior changes. Add channel-contract or plugin-contract tests under `src/channels/plugins/contracts/` or `src/plugins/contracts/`.
- Test coverage: Broad coverage exists, but some channel-specific media paths are skipped, especially Telegram sticker behavior.

**Embedded Pi agent attempt execution is a dense integration point:**

- Files: `src/agents/pi-embedded-runner/run/attempt.ts`, `src/agents/pi-embedded-runner/run.ts`, `src/agents/pi-embedded-runner/run/attempt.test.ts`, `src/agents/pi-embedded-runner-extraparams.test.ts`
- Why fragile: The attempt path handles prompt construction, model/provider selection, images, hooks, tool-call replay, compaction, yielding, streaming callbacks, usage, and persistence in one flow.
- Safe modification: Make behavior-preserving extractions with targeted tests around the exact branch touched. Avoid broad rewrites while skipped MCP E2E coverage remains unavailable.
- Test coverage: Strong unit coverage exists, but bundle MCP follow-up integration is skipped.

**Memory/QMD indexing depends on external process behavior and local SQLite/vector state:**

- Files: `src/memory/qmd-manager.ts`, `src/memory/index.test.ts`, `src/memory/qmd-manager.test.ts`
- Why fragile: Search correctness depends on FTS availability, vector backend availability, local files, queueing, external `mcporter` commands, and repair paths.
- Safe modification: Test both vector-enabled and keyword-only fallback behavior; verify cleanup closes managers and database handles.
- Test coverage: Several memory search assertions are skipped, so changes to hybrid ranking require manual or new targeted regression tests.

**Release, smoke, and Parallels workflows have many environment-specific footguns:**

- Files: `scripts/e2e/parallels-macos-smoke.sh`, `scripts/e2e/parallels-windows-smoke.sh`, `scripts/e2e/parallels-linux-smoke.sh`, `scripts/e2e/parallels-npm-update-smoke.sh`, `.agents/skills/openclaw-parallels-smoke/SKILL.md`, `.agents/skills/openclaw-release-maintainer/SKILL.md`
- Why fragile: These scripts encode VM snapshot names, host/guest command quoting, launch behavior, npm update semantics, and platform-specific baselines.
- Safe modification: Use the corresponding project skill before changing release or Parallels smoke behavior. Keep changes idempotent and validate with the narrow affected smoke lane.
- Test coverage: Smoke coverage is intentionally environment-dependent and cannot be assumed from local unit tests.

## Scaling Limits

**Bundled plugin surface is large and growing:**

- Current capacity: 80 `openclaw.plugin.json` manifests and 75 extension `package.json` files are present under `extensions/`.
- Limit: Each new plugin increases plugin metadata generation, SDK export checks, install-time dependency staging, and channel/provider picker surface area.
- Scaling path: Keep plugin-only dependencies in each extension, maintain plugin naming invariants, and add labels/docs/config forms with every new channel/provider. Prefer generated registries over hand-maintained duplicate lists.

**Test parallelism is bounded by host memory, not CPU alone:**

- Current capacity: The wrapper supports profiles, sharding, isolated lanes, and heap snapshots.
- Limit: Low-memory hosts require `OPENCLAW_TEST_PROFILE=low` and sometimes serialized gateway tests; worker count above 16 is explicitly discouraged by repo guidance.
- Scaling path: Keep memory hotspot manifests current and isolate high-retention tests instead of raising worker counts.

**Gateway protocol changes fan out to TypeScript, Swift, mobile, and UI clients:**

- Current capacity: `pnpm protocol:check` regenerates schema and Swift models and verifies generated diffs.
- Limit: Any protocol change can break `apps/macos/`, `apps/ios/`, `apps/shared/OpenClawKit/`, and gateway clients even when TypeScript compiles.
- Scaling path: Treat protocol updates as published-surface changes. Run `pnpm build` plus `pnpm protocol:check` for protocol-affecting edits.

## Dependencies at Risk

**Native and platform-specific dependencies increase install/build fragility:**

- Risk: The root package allows native builds for packages such as `sharp`, `node-llama-cpp`, `@lydell/node-pty`, `@matrix-org/matrix-sdk-crypto-nodejs`, and `authenticate-pam`.
- Impact: Linux, macOS, Windows, Docker, and low-memory hosts can fail differently when native dependency versions or postinstall behavior changes.
- Migration plan: Keep `pnpm.onlyBuiltDependencies` tight, avoid broad dependency updates, and validate native surfaces with the relevant Docker/Parallels/mobile smoke path.

**Pinned/overridden dependency policy requires active maintenance:**

- Risk: `package.json` pins or overrides security-sensitive transitive packages such as `hono`, `file-type`, `tar`, `tough-cookie`, `fast-xml-parser`, and `qs`.
- Impact: Security fixes can require coordinated override updates, release checks, and smoke validation; stale overrides may hold back fixes.
- Migration plan: Update only with explicit review, preserve exact versions for patched/overridden dependencies, and run release/security checks that cover npm packaging.

**Third-party channel/provider SDK churn can break plugins independently:**

- Risk: Plugins integrate many external APIs and CLIs, including Telegram, Slack, Discord, Matrix, Signal, Feishu, LINE, Tailscale, ngrok, and provider SDKs.
- Impact: API changes or CLI availability failures can break one plugin without affecting core tests.
- Migration plan: Keep plugin contracts narrow, isolate plugin runtime dependencies, and add provider/channel-specific probes or live tests for changed integrations.

## Missing Critical Features

**Fully rootless Podman installation is not implemented:**

- Problem: The installer still needs user switching and root-managed setup.
- Blocks: A simpler least-privilege Podman installation path and easier support on hosts where `sudo`/`runuser` behavior is constrained.

**Structured ACP error classification is not available:**

- Problem: ACP translation cannot distinguish refusal, timeout, rate limit, and server error.
- Blocks: Accurate client UX and retry behavior for ACP consumers.

**Deterministic Telegram sticker fetch/cache injection is missing:**

- Problem: Static sticker and cache refresh tests are skipped until deterministic injection exists.
- Blocks: CI-backed confidence for Telegram sticker media regressions.

## Test Coverage Gaps

**Skipped targeted tests should be treated as uncovered behavior:**

- What's not tested: Telegram static sticker download/cache refresh, memory keyword-only hybrid search, memory indexing/search smoke, and bundle MCP follow-up turn execution.
- Files: `extensions/telegram/src/bot.media.stickers-and-fragments.e2e.test.ts`, `src/memory/index.test.ts`, `src/agents/pi-embedded-runner.bundle-mcp.e2e.test.ts`
- Risk: Regressions can land in these paths even when `pnpm test` passes.
- Priority: High for changes touching those subsystems; Medium otherwise.

**Live and platform tests are opt-in:**

- What's not tested: Real provider credentials, Android node capabilities, Browserless CDP, live gateway model profiles, OpenAI websocket streaming, and macOS launchd integration unless explicit env flags/platforms are available.
- Files: `src/media-understanding/deepgram.audio.live.test.ts`, `src/gateway/android-node.capabilities.live.test.ts`, `src/browser/pw-session.browserless.live.test.ts`, `src/gateway/gateway-models.profiles.live.test.ts`, `src/agents/openai-ws-stream.e2e.test.ts`, `src/daemon/launchd.integration.e2e.test.ts`
- Risk: Local green tests do not prove live credential, network, mobile, or daemon behavior.
- Priority: Medium; High when changing provider auth, gateway transport, launchd/mac app integration, or mobile node capabilities.

**Coverage thresholds do not replace subsystem-specific smoke tests:**

- What's not tested: Installers, packaging, generated protocol drift, plugin runtime dependency staging, and VM upgrade flows by ordinary unit coverage alone.
- Files: `scripts/test-install-sh-docker.sh`, `scripts/e2e/parallels-npm-update-smoke.sh`, `scripts/stage-bundled-plugin-runtime-deps.mjs`, `scripts/protocol-gen.ts`, `scripts/protocol-gen-swift.ts`
- Risk: Packaging or install regressions can pass unit tests but fail for new users.
- Priority: High for release, installer, protocol, plugin SDK, or platform packaging work.

---

_Concerns audit: 2026-05-09_
