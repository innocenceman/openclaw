# Testing Patterns

**Analysis Date:** 2026-05-09

## Test Framework

**Runner:**

- Vitest 4.1.0 is the main TypeScript runner. Root config lives in `vitest.config.ts`; specialized configs include `vitest.unit.config.ts`, `vitest.gateway.config.ts`, `vitest.extensions.config.ts`, `vitest.channels.config.ts`, `vitest.e2e.config.ts`, and `vitest.live.config.ts`.
- The default test command is a wrapper, not raw Vitest: `pnpm test` runs `scripts/test-parallel.mjs`.
- Root Vitest uses `pool: "forks"` by default in `vitest.config.ts`, with `unstubEnvs: true` and `unstubGlobals: true` to prevent cross-test pollution.
- Unit and scoped configs use `test/non-isolated-runner.ts` when isolation is disabled. That runner resets timers, mocks, globals, env stubs, module state, and Vitest mocker state after each file.
- UI tests use a separate Vite/Vitest project config in `ui/vitest.config.ts`, with jsdom unit projects and a Playwright-backed browser project.
- Swift tests use the Swift `Testing` package in files such as `apps/macos/Tests/OpenClawIPCTests/GatewayDiscoveryHelpersTests.swift`; Android unit tests use JUnit/Kotest/Robolectric configured in `apps/android/app/build.gradle.kts`.

**Assertion Library:**

- Use Vitest `expect` for TypeScript tests: `src/commands/backup.test.ts`, `src/gateway/http-endpoint-helpers.test.ts`, `ui/src/ui/views/channels.test.ts`.
- Use Swift Testing `#expect` and `Issue.record` in macOS/iOS tests: `apps/macos/Tests/OpenClawIPCTests/GatewayDiscoveryHelpersTests.swift`.
- Use JUnit assertions in Android tests: `org.junit.Assert.assertEquals` and `assertNull` in `apps/android/app/src/test/java/ai/openclaw/app/node/ConnectionManagerTest.kt`.

**Run Commands:**

```bash
pnpm test                                      # Run the default parallelized TypeScript suite
pnpm test -- src/commands/backup.test.ts      # Run a scoped file through the wrapper
pnpm test:watch                               # Raw Vitest watch mode
pnpm test:coverage                            # V8 coverage with vitest.unit.config.ts
pnpm test:e2e                                 # E2E tests from test/**/*.e2e.test.ts, src/**/*.e2e.test.ts, extensions/**/*.e2e.test.ts
pnpm test:gateway                             # Gateway-focused fork pool config
pnpm test:extensions                          # Extension suite through the wrapper
pnpm test:channels                            # Channel suite through the wrapper
pnpm test:ui                                  # UI lint guard plus ui Vitest projects
pnpm android:test                             # Android Play debug unit tests
```

## Test File Organization

**Location:**

- TypeScript unit tests are colocated with source files: `src/commands/backup.test.ts`, `src/gateway/http-endpoint-helpers.test.ts`, `src/test-helpers/state-dir-env.test.ts`.
- Cross-cutting repository guardrail and script tests live under `test/`: `test/plugin-extension-import-boundary.test.ts`, `test/scripts/test-parallel.test.ts`, `test/release-check.test.ts`.
- E2E tests use `*.e2e.test.ts`: `test/openclaw-launcher.e2e.test.ts`, `test/gateway.multi.e2e.test.ts`, `src/auto-reply/reply/agent-runner.runreplyagent.e2e.test.ts`.
- UI tests live under `ui/src/**` and are controlled by `ui/vitest.config.ts`.
- Extension tests are colocated under `extensions/<plugin>/src/`, with shared helpers in `test/helpers/extensions/`.
- Native app tests live in platform-specific test roots: `apps/macos/Tests/OpenClawIPCTests/`, `apps/ios/Tests/`, and `apps/android/app/src/test/java/`.

**Naming:**

- Use `*.test.ts` for unit/integration tests and `*.e2e.test.ts` for E2E tests.
- Mirror the source filename when possible: `src/gateway/http-endpoint-helpers.ts` → `src/gateway/http-endpoint-helpers.test.ts`.
- For large domains, include the subject and behavior in the test filename: `src/gateway/server.device-token-rotate-authz.test.ts`, `src/gateway/server.auth.browser-hardening.test.ts`.
- Generated or split regression tests may have long dotted names; keep them precise and colocated with the owning domain.

**Structure:**

```text
src/<domain>/<module>.ts
src/<domain>/<module>.test.ts
test/<repo-guardrail>.test.ts
test/scripts/<script-name>.test.ts
extensions/<plugin>/src/<module>.test.ts
ui/src/<area>/<module>.test.ts
apps/macos/Tests/OpenClawIPCTests/<Feature>Tests.swift
apps/android/app/src/test/java/ai/openclaw/app/<area>/<Feature>Test.kt
```

## Test Structure

**Suite Organization:**

```typescript
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("feature or module name", () => {
  beforeEach(async () => {
    // Reset temp dirs, env, mocks, or module-local state.
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    // Remove temp dirs and restore env when the helper does not do it.
  });

  it("states the behavior in present tense", async () => {
    await expect(doWork()).resolves.toEqual(expected);
  });
});
```

**Patterns:**

- Use `describe` around the module or feature name, then `it` statements that describe observable behavior. Examples: `describe("backup commands", ...)` in `src/commands/backup.test.ts`; `describe("handleGatewayPostJsonEndpoint", ...)` in `src/gateway/http-endpoint-helpers.test.ts`.
- Use file-local helpers to make setup readable: `createRuntime`, `resetTempHome`, and `expectWorkspaceCoveredByState` in `src/commands/backup.test.ts`; `createProps` in `ui/src/ui/views/channels.test.ts`.
- Use `beforeAll` for expensive shared fixtures and `afterAll` for cleanup: `src/commands/backup.test.ts`, `src/memory/qmd-manager.test.ts`.
- Use `beforeEach` to reset mocks and mutable state between cases. `test/setup.ts` also installs global env/home isolation for the whole suite.
- Prefer real filesystem temp dirs for IO behavior and remove them in `finally` or teardown. Examples: `fs.mkdtemp` and `fs.rm` in `src/commands/backup.test.ts`, `test/openclaw-launcher.e2e.test.ts`, and `src/memory/qmd-manager.test.ts`.

## Mocking

**Framework:** Vitest `vi`.

**Patterns:**

```typescript
const backupVerifyCommandMock = vi.hoisted(() => vi.fn());

vi.mock("./backup-verify.js", () => ({
  backupVerifyCommand: backupVerifyCommandMock,
}));

beforeEach(() => {
  backupVerifyCommandMock.mockReset();
});

afterEach(() => {
  vi.restoreAllMocks();
});
```

```typescript
vi.mock("./http-auth-helpers.js", () => ({
  authorizeGatewayBearerRequestOrReply: vi.fn(),
}));

const { authorizeGatewayBearerRequestOrReply } = await import("./http-auth-helpers.js");
vi.mocked(authorizeGatewayBearerRequestOrReply).mockResolvedValue(true);
```

**What to Mock:**

- Mock external services, SDKs, network calls, clipboard APIs, OAuth helpers, and expensive optional dependencies. Global examples live in `test/setup.ts`.
- Mock adjacent seam modules rather than deep internal implementation details. Examples: `src/commands/backup.test.ts` mocks `./backup-verify.js`; `src/gateway/http-endpoint-helpers.test.ts` mocks `./http-auth-helpers.js` and `./http-common.js`.
- Use `vi.hoisted` for mocks referenced by hoisted `vi.mock` factories. Examples: `src/commands/backup.test.ts`, `src/media-understanding/apply.test.ts`, `src/memory/search-manager.test.ts`.
- Use `vi.stubEnv` for env-driven behavior and rely on `unstubEnvs: true`; explicitly call `vi.unstubAllEnvs()` when a test uses custom cleanup, as in `src/media-understanding/runner.proxy.test.ts`.

**What NOT to Mock:**

- Do not mock the function under test. Exercise public exported seams such as `backupCreateCommand` in `src/commands/backup.test.ts` or `handleGatewayPostJsonEndpoint` in `src/gateway/http-endpoint-helpers.test.ts`.
- Avoid prototype mutation. Prefer per-instance stubs and injected dependencies. Prototype-level patching is discouraged by repository guidance.
- Do not use live credentials in normal tests. Live tests are isolated behind `OPENCLAW_LIVE_TEST=1` and `vitest.live.config.ts`.
- Do not bypass the wrapper with raw `vitest run` for routine targeted debugging; use `pnpm test -- <path-or-filter>` so wrapper routing, profiles, and pool policy apply.

## Fixtures and Factories

**Test Data:**

```typescript
function createRuntime(): RuntimeEnv {
  return {
    log: vi.fn(),
    error: vi.fn(),
    exit: vi.fn(),
  } satisfies RuntimeEnv;
}
```

```typescript
function createProps(snapshot: ChannelsProps["snapshot"]): ChannelsProps {
  return {
    connected: true,
    loading: false,
    snapshot,
    lastError: null,
    onRefresh: () => {},
    onConfigSave: () => {},
  } as ChannelsProps;
}
```

**Location:**

- Generic helpers live in `src/test-utils/`, including `src/test-utils/temp-home.ts`, `src/test-utils/fetch-mock.ts`, `src/test-utils/channel-plugins.ts`, and `src/test-utils/env.ts`.
- Test-only helper modules live in `test/helpers/` and `test/helpers/extensions/`.
- Runner manifests and timing/memory fixtures live in `test/fixtures/`, including `test/fixtures/test-parallel.behavior.json`, `test/fixtures/test-timings.unit.json`, and `test/fixtures/test-memory-hotspots.unit.json`.
- UI tests define lightweight factories locally when the shape is view-specific, as in `ui/src/ui/views/channels.test.ts`.

## Coverage

**Requirements:** V8 coverage is configured in `vitest.config.ts` with thresholds: 70% lines, 70% functions, 55% branches, and 70% statements. Coverage includes repo-root `src/**/*.ts` and excludes many integration-heavy or app/package surfaces.

**View Coverage:**

```bash
pnpm test:coverage
pnpm test:coverage:changed
```

**Notes:**

- Coverage uses `all: false` in `vitest.config.ts`, so only exercised files count.
- Coverage intentionally excludes `extensions/**`, `apps/**`, `ui/**`, many CLI/gateway/channel surfaces, generated protocol files, and manually/e2e-validated integration modules.

## Test Types

**Unit Tests:**

- Scope: Pure logic, command behavior, config parsing, protocol helpers, UI selectors, and isolated gateway helpers.
- Approach: Colocated `*.test.ts`, real temp dirs where IO matters, injected runtime seams, and Vitest mocks for external dependencies.
- Examples: `src/test-helpers/state-dir-env.test.ts`, `src/commands/backup.test.ts`, `ui/src/ui/views/channels.test.ts`.

**Integration Tests:**

- Scope: Gateway, channel, plugin, memory, process, and script behavior that crosses module boundaries.
- Approach: Specialized Vitest configs and wrapper lanes. Gateway tests use `vitest.gateway.config.ts`; extension tests use `vitest.extensions.config.ts`; channel tests use `vitest.channels.config.ts`.
- Examples: `src/gateway/probe.auth.integration.test.ts`, `src/gateway/server.plugin-http-auth.test.ts`, `extensions/telegram/src/bot.test.ts`.

**E2E Tests:**

- Framework: Vitest plus external shell/Docker/Parallels harnesses.
- TypeScript E2E tests use `vitest.e2e.config.ts` and include `test/**/*.e2e.test.ts`, `src/**/*.e2e.test.ts`, and `extensions/**/*.e2e.test.ts`.
- Docker and live model E2E commands are in `package.json`: `pnpm test:docker:onboard`, `pnpm test:docker:live-models`, `pnpm test:docker:live-gateway`, and related scripts.

## Common Patterns

**Async Testing:**

```typescript
it("cleans up when callback throws", async () => {
  await expect(
    withStateDirEnv("openclaw-state-dir-env-", async () => {
      throw new Error("boom");
    }),
  ).rejects.toThrow("boom");
});
```

**Error Testing:**

```typescript
await expect(fs.stat(filePath)).rejects.toThrow();
await expect(manager.readFile({ relPath: "secret.txt" })).rejects.toThrow("path required");
```

**Filesystem Cleanup:**

```typescript
const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "openclaw-test-"));
try {
  // Exercise filesystem behavior.
} finally {
  await fs.rm(tempDir, { recursive: true, force: true });
}
```

**Wrapper and Isolation Policy:**

- Use `test/fixtures/test-parallel.behavior.json` to pin known problematic files to isolated fork lanes or thread lanes. Reasons must explain the contamination, memory, or determinism issue.
- Use `OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test` on constrained hosts.
- Keep tests cleaning up timers, env, globals, mocks, sockets, temp dirs, and module state so `--isolate=false` remains viable.
- Do not raise test workers above 16; root `vitest.config.ts` and `vitest.e2e.config.ts` cap workers at 16.

---

_Testing analysis: 2026-05-09_
