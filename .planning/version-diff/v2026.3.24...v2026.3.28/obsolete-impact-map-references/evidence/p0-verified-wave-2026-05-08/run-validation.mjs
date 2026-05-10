import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = ".planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs";
mkdirSync(outDir, { recursive: true });
const commands = [
  [
    "test-infra-config-runner",
    "pnpm test -- test/scripts/run-vitest-profile.test.ts test/test-runner-manifest.test.ts",
  ],
  [
    "test-infra-root-tests",
    "pnpm test -- src/entry.test.ts src/dockerfile.test.ts src/docker-build-cache.test.ts src/docker-image-digests.test.ts",
  ],
  [
    "test-infra-test-scripts",
    "pnpm test -- test/scripts/run-vitest-profile.test.ts test/test-runner-manifest.test.ts test/scripts/test-parallel.test.ts test/scripts/test-report-utils.test.ts",
  ],
  [
    "test-infra-helpers-core",
    "pnpm test -- src/cli/command-source.test-helpers.test.ts src/channels/plugins/helpers.test.ts src/gateway/http-auth-helpers.test.ts src/infra/archive-helpers.test.ts",
  ],
  [
    "test-infra-helpers-extensions",
    "pnpm test -- test/extension-plugin-sdk-boundary.test.ts test/plugin-extension-import-boundary.test.ts extensions/telegram/src/bot.helpers.test.ts extensions/msteams/src/media-helpers.test.ts",
  ],
  [
    "test-infra-mocks",
    "pnpm test -- src/gateway/boot.test.ts src/gateway/http-auth-helpers.test.ts src/commands/agent.test.ts",
  ],
  [
    "test-infra-fixtures",
    "pnpm test -- src/plugins/bundled-plugin-metadata.test.ts src/plugins/contracts/catalog.contract.test.ts test/scripts/test-extension.test.ts",
  ],
  [
    "src-gateway-runtime",
    "pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts",
  ],
  [
    "src-gateway-methods",
    "pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts",
  ],
  [
    "src-gateway-protocol",
    "pnpm test -- src/gateway/protocol/index.test.ts src/gateway/protocol/push.test.ts src/gateway/protocol/connect-error-details.test.ts src/gateway/protocol/talk-config.contract.test.ts",
  ],
  [
    "src-routing",
    "pnpm test -- src/routing/resolve-route.test.ts src/routing/account-id.test.ts src/routing/account-lookup.test.ts src/routing/session-key.test.ts src/routing/session-key.continuity.test.ts",
  ],
  [
    "src-agents-runtime",
    "pnpm test -- src/agents/acp-spawn.test.ts src/agents/agent-scope.test.ts src/agents/cli-runner.test.ts src/agents/command/delivery.test.ts",
  ],
  [
    "src-agents-tools",
    "pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts",
  ],
  [
    "src-agents-auth",
    "pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts",
  ],
  [
    "src-plugin-sdk-public",
    "pnpm test -- src/plugin-sdk/index.test.ts src/plugin-sdk/index.bundle.test.ts src/plugin-sdk/subpaths.test.ts src/plugin-sdk/runtime-api-guardrails.test.ts",
  ],
  [
    "src-plugin-sdk-provider",
    "pnpm test -- src/plugin-sdk/provider-entry.test.ts src/plugin-sdk/fetch-auth.test.ts src/plugin-sdk/request-url.test.ts src/plugin-sdk/runtime.test.ts",
  ],
  [
    "src-plugin-sdk-channel",
    "pnpm test -- src/plugin-sdk/channel-lifecycle.test.ts src/plugin-sdk/channel-setup.test.ts src/plugin-sdk/channel-policy.test.ts src/plugin-sdk/channel-reply-pipeline.test.ts",
  ],
  ["plugin-sdk-api-check", "pnpm plugin-sdk:api:check"],
  ["plugin-sdk-check-exports", "pnpm plugin-sdk:check-exports"],
  [
    "src-cli-program",
    "pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts",
  ],
  [
    "src-cli-commands",
    "pnpm test -- src/commands/agent.test.ts src/commands/channels.status.command-flow.test.ts src/commands/doctor-config-flow.test.ts src/commands/configure.gateway.test.ts",
  ],
  [
    "src-cli-status",
    "pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts",
  ],
  [
    "src-cli-terminal",
    "pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts",
  ],
  [
    "extensions-boundaries-tests",
    "pnpm test -- src/plugins/bundled-plugin-naming.test.ts src/plugins/bundled-plugin-metadata.test.ts src/plugins/contracts/catalog.contract.test.ts",
  ],
  [
    "extensions-boundaries-import-tests",
    "pnpm test -- test/extension-plugin-sdk-boundary.test.ts test/plugin-extension-import-boundary.test.ts",
  ],
  ["lint-extensions-no-src-outside-plugin-sdk", "pnpm lint:extensions:no-src-outside-plugin-sdk"],
  ["lint-extensions-no-plugin-sdk-internal", "pnpm lint:extensions:no-plugin-sdk-internal"],
  [
    "lint-extensions-no-relative-outside-package",
    "pnpm lint:extensions:no-relative-outside-package",
  ],
  ["test-contracts-plugins", "pnpm test:contracts:plugins"],
  [
    "extensions-package-runtime-deps",
    "pnpm test -- test/scripts/stage-bundled-plugin-runtime-deps.test.ts src/plugins/stage-bundled-plugin-runtime.test.ts",
  ],
  [
    "extensions-openai",
    "pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts",
  ],
  [
    "extensions-anthropic",
    "pnpm test -- src/commands/onboard-non-interactive.provider-auth.test.ts src/commands/models/list.status.test.ts",
  ],
  [
    "extensions-google",
    "pnpm test -- extensions/google/oauth.test.ts extensions/google/image-generation-provider.test.ts extensions/google/google-shared.test.ts",
  ],
  ["extensions-openrouter", "pnpm test -- extensions/openrouter/index.test.ts"],
  ["extensions-ollama", "pnpm test -- extensions/ollama/index.test.ts"],
  [
    "extensions-device-pair",
    "pnpm test -- extensions/device-pair/index.test.ts src/cli/qr-cli.test.ts src/infra/device-pairing.test.ts",
  ],
  ["extensions-diagnostics-otel", "pnpm test -- extensions/diagnostics-otel/src/service.test.ts"],
  [
    "extensions-memory-core",
    "pnpm test -- extensions/memory-core/index.test.ts src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts",
  ],
  [
    "extensions-memory-lancedb",
    "pnpm test -- extensions/memory-lancedb/index.test.ts src/plugins/bundled-runtime-deps.test.ts src/plugins/install-min-host-version-guardrails.test.ts",
  ],
  ["extensions-llm-task", "pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts"],
  ["extensions-thread-ownership", "pnpm test -- extensions/thread-ownership/index.test.ts"],
  ["test-contracts-channels", "pnpm test:contracts:channels"],
];
const summary = [];
for (const [name, command] of commands) {
  const started = new Date().toISOString();
  console.log(`START ${name}: ${command}`);
  const result = spawnSync("bash", ["-lc", command], {
    encoding: "utf8",
    timeout: 10 * 60 * 1000,
    maxBuffer: 30 * 1024 * 1024,
    env: { ...process.env },
  });
  const ended = new Date().toISOString();
  const timedOut = result.error?.code === "ETIMEDOUT";
  const exitCode = timedOut ? 124 : (result.status ?? 1);
  const log = [
    `# ${name}`,
    "",
    `Command: ${command}`,
    `Started: ${started}`,
    `Ended: ${ended}`,
    `Exit code: ${exitCode}`,
    "",
    "## stdout",
    result.stdout ?? "",
    "",
    "## stderr",
    result.stderr ?? "",
    "",
  ].join("\n");
  writeFileSync(join(outDir, `${name}.log`), log);
  summary.push({ name, command, started, ended, exitCode, timedOut, log: `logs/${name}.log` });
  console.log(`END ${name}: exit=${exitCode}${timedOut ? " timeout" : ""}`);
}
writeFileSync(
  ".planning/impact-map/evidence/p0-verified-wave-2026-05-08/validation-summary.json",
  JSON.stringify(summary, null, 2),
);
const md = [
  "# P0 Verified Wave Validation Summary",
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  "| Command | Exit | Log |",
  "| --- | ---: | --- |",
];
for (const row of summary) {
  md.push(`| ${row.name} | ${row.exitCode} | \`${row.log}\` |`);
}
writeFileSync(
  ".planning/impact-map/evidence/p0-verified-wave-2026-05-08/validation-summary.md",
  md.join("\n") + "\n",
);
process.exit(summary.some((row) => row.exitCode !== 0) ? 1 : 0);
