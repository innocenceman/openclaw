import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = ".planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs";
mkdirSync(outDir, { recursive: true });
const commands = [
  ["test-infra-mocks"],
  [
    "src-gateway-methods",
    "pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts",
  ],
  ["plugin-sdk-api-check", "pnpm plugin-sdk:api:check"],
  [
    "src-cli-commands",
    "pnpm test -- src/commands/agent.test.ts src/commands/channels.status.command-flow.test.ts src/commands/doctor-config-flow.test.ts src/commands/configure.gateway.test.ts",
  ],
];
const summary = [];
for (const [name, command] of commands) {
  const started = new Date().toISOString();
  console.log(`START ${name}: ${command}`);
  const result = spawnSync("bash", ["-lc", command], {
    encoding: "utf8",
    timeout: 15 * 60 * 1000,
    maxBuffer: 50 * 1024 * 1024,
    env: { ...process.env },
  });
  const ended = new Date().toISOString();
  const timedOut = result.error?.code === "ETIMEDOUT";
  const exitCode = timedOut ? 124 : (result.status ?? 1);
  const logName = `refresh-${name}.log`;
  const log = [
    `# ${name} refresh`,
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
  writeFileSync(join(outDir, logName), log);
  summary.push({ name, command, started, ended, exitCode, timedOut, log: `logs/${logName}` });
  console.log(`END ${name}: exit=${exitCode}${timedOut ? " timeout" : ""}`);
}
writeFileSync(
  ".planning/impact-map/evidence/p0-verified-wave-2026-05-08/refresh-validation-summary.json",
  JSON.stringify(summary, null, 2),
);
const md = [
  "# P0 Refresh Validation Summary",
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
  ".planning/impact-map/evidence/p0-verified-wave-2026-05-08/refresh-validation-summary.md",
  md.join("\n") + "\n",
);
process.exit(summary.some((row) => row.exitCode !== 0) ? 1 : 0);
